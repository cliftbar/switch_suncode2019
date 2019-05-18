#!/usr/bin/env bash

# start the development server
dev() {
    python ./run.py
}

# start the production mod_wgsi-express/Apache server 
prd() {
    mod_wsgi-express start-server \
        --user www-data \
        --group www-data \
        --url-alias /static ./static \
        --ssl-certificate-file ./tls/certificate.pem\
        --ssl-certificate-key-file ./tls/key.pem \
        --server-name flask_app \
        --server-alias alias-ip-here \
        --https-only \
        --https-port 8001 \
        --log-to-terminal \
        --response-socket-timeout 100 \
        --socket-timeout 100 \
        --request-timeout 100 \
        --access-log \
        --access-log-format "%{%Y%m%dT%H%M%S%z}t %L %h %u \"%r\" %>s %b %T" \
        --error-log-format "[%{cu}t] [%L] [%m:%l] [pid %P:tid %T] [client\ %a] %M" \
        --processes 3 \
        --threads 5 \
        --server-status \
        --include-file ./server_conf/server_status.conf \
        ./flaskapp.wsgi
}

# Activate conda environment if the EE environment variable is set and that environment ins't active.
# Mainly for starting from the Dockerfile
if [[ -n $EE_CONDA_ENV && $EE_CONDA_ENV != $CONDA_DEFAULT_ENV ]]; then
    conda activate $EE_CONDA_ENV
fi

$*
