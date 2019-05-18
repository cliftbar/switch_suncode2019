#!/bin/bash
# Control script for WeatherCollection docker image.  Contains some basic commands for build and run
base_name="flask_app"
base_tag="latest"

get_dockerhost_ip(){
    if [[ $(command -v nmcli 2> /dev/null) ]]; then
        dockerhost="--add-host=dockerhost:$(nmcli -g ipv4.addresses c show docker0 | cut -d '/' -f 1)"
    elif [[ $(command -v ifconfig 2> /dev/null) ]]; then
        dockerhost="--add-host=dockerhost:$(ifconfig docker0 | grep 'inet ' | column -s ' ' -t | awk '{print $2}' | cut -d ':' -f 2)"
    else
        dockerhost=''
    fi
    echo "${dockerhost}"
}

# Build image tagged as latest
build(){
    if [[ $1 = "--help" || $1 = "-h" ]]; then
        printf "build: Build image from Dockerfile.  Optionally provide an image tag, or image name and tag.\n"
        printf "    Example: ./docker_control.sh build v1.0\n"
        printf "    Example: ./docker_control.sh build app v1.0\n"
        return
    fi

    if [[ $# -eq 0 ]]; then
        name=${base_name}
        tag=${base_tag}
    elif [[ $# -eq 1 ]]; then
        name=${base_name}
        tag=$1
    else
        name=$1
        tag=$2
    fi
    printf "building image $name:$tag\n"
    docker build --tag ${name}:${tag} --file docker/Dockerfile .
}

rebuild(){
    if [[ $1 = "--help" || $1 = "-h" ]]; then
        printf "rebuild: Build image without cache.  Optionally provide an image tag, or image name and tag.\n"
        printf "    Example: ./docker_control.sh build v1.0\n"
        printf "    Example: ./docker_control.sh build app v1.0\n"
        return
    fi

    if [[ $# -eq 0 ]]; then
        name=${base_name}
        tag=${base_tag}
    elif [[ $# -eq 1 ]]; then
        name=${base_name}
        tag=$1
    else
        name=$1
        tag=$2
    fi
    printf "building image $name:$tag without cache"
    docker build --tag ${name}:${tag} --no-cache --pull --file docker/Dockerfile .
}

# run using the default cmd.
run() {
    if [[ $1 = "--help" || $1 = "-h" ]]; then
        printf "run: Start a new container using the default command.\n"
        printf "     Container is removed on exit, and ports 8000 and 8001 are bound to the host.\n"
        printf "     NOTE: Container is limited to 850mb of memory, to stay in the t2.micro EC2 constraints.\n"
        return
    fi

    dockerhost=$(get_dockerhost_ip)

    args="--rm --memory=850m -it --hostname ${base_name} --name ${base_name} -p 8000:8000 -p 8001:8001 --log-opt tag=\"{{.ImageName}}/{{.Name}}/{{.ID}}\" ${dockerhost}"
    docker run ${args} ${base_name}:${base_tag}
}

# run the dev server in docker.
run_dev() {
    if [[ $1 = "--help" || $1 = "-h" ]]; then
        printf "run_dev: Start a new container using the dev server.\n"
        printf "     Container is removed on exit, and port 5000 is bound to the host.\n"
        printf "     NOTE: Container is limited to 850mb of memory, to stay in the t2.micro EC2 constraints.\n"
        return
    fi

    dockerhost=$(get_dockerhost_ip)

    args="--rm --memory=850m -it --hostname ${base_name} --name ${base_name} -p 5000:5000 -p 8000:8000 -p 8001:8001 --log-opt tag=\"{{.ImageName}}/{{.Name}}/{{.ID}}\" ${dockerhost}"
    echo $args
    docker run ${args} ${base_name}:${base_tag} bash -c "./start_server.sh dev"
}

# run as a "service" (not tied to terminal instance) using the default cmd.
service() {
    if [[ $1 = "--help" || $1 = "-h" ]]; then
        printf "service: Start a new container as service, binding ports 8000 and 8001.\n"
        printf "     Container is not removed when stopped.\n"
        return
    fi

    dockerhost=$(get_dockerhost_ip)

    args="-d --memory=850m --hostname ${base_name} --name ${base_name} -p 8000:8000 -p 8001:8001 --log-opt tag=\"{{.ImageName}}/{{.Name}}/{{.ID}}\" ${dockerhost}"
    docker run ${args} ${base_name}:${base_tag}
}

# start a bash terminal on the container. does not open server ports
term() {
    if [[ $1 = "--help" || $1 = "-h" ]]; then
        printf "term: Start a new container with a terminal.  Ports are not bound.\n"
        printf "      Container is removed on exit.\n"
        return
    fi

    dockerhost=$(get_dockerhost_ip)

    args="--rm -it --hostname ${base_name} --name ${base_name} ${dockerhost}"
    docker run ${args} ${base_name}:${base_tag}
}

# Attache a bash terminal to the running container.
login() {
    if [[ $1 = "--help" || $1 = "-h" ]]; then
        printf "login: Connect to the running container with a terminal (\"ssh\" in)\n"
        return
    fi

    docker exec -it ${base_name} bash
}

# Get a snapshot of the log output
logs() {
    if [[ $1 = "--help" || $1 = "-h" ]]; then
        printf "logs: Print the docker container logs\n"
        return
    fi

    docker logs ${base_name}
}

# clean up docker images and containers.  All containers destroyed, all untagged images deleted.
clean(){
    if [[ $1 = "--help" || $1 = "-h" ]]; then
        printf "clean: Destroy all containers and delete all untagged images.\n"
        return
    fi

    docker rm $(docker ps -a -q)
    docker rmi $(docker images | grep "^<none>" | awk "{print $3}")
}

container_kill(){
    if [[ $1 = "--help" || $1 = "-h" ]]; then
        printf "container_kill: Stop and remove the running container (docker kill && docker rm)\n"
        return
    fi

    docker kill ${base_name}
    docker rm ${base_name}
}

--help(){
    printf "Command options, formatted as: ./docker_control [cmd] [ [-h or --help] or [options] ]\n"
    printf "Set base_name and base_tag in the script for default name and tags.\n\n"

    build -h
    printf "\n"
    rebuild -h
    printf "\n"
    run -h
    printf "\n"
    run_dev -h
    printf "\n"
    service -h
    printf "\n"
    term -h
    printf "\n"
    login -h
    printf "\n"
    logs -h
    printf "\n"
    clean -h
    printf "\n"
    container_kill -h
}

if [[ $# < 1 ]]
then
    help
else
    $*
fi
