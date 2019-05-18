FROM continuumio/miniconda3
LABEL author="cameron@extensibleenergy.com"

SHELL ["/bin/bash", "-c"]

ENV EE_CONDA_ENV=flask_app
ENV BASH_ENV=~/.bashrc

# install apache and other apt requirements and dev tools, clean up cache
RUN apt-get -qq update \
    && apt-get -qq install -y apache2 apache2-dev openssl locales \
    && rm -rf /var/lib/apt/lists/*

# install dev tools, clean up cache
RUN apt-get -qq update \
    && apt-get -qq install -y nano emacs-nox curl wget \
    && rm -rf /var/lib/apt/lists/*

# Fix unicode thing with mod_wsgi
RUN echo 'en_US.UTF-8 UTF-8' >> /etc/locale.gen && locale-gen
ENV LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8

WORKDIR /flask_app

COPY ./requirements/ ./requirements/

RUN conda create --yes --quiet --name $EE_CONDA_ENV python=3.6

RUN conda activate $EE_CONDA_ENV \
    && pip install --quiet --no-cache-dir mod_wsgi xmljson schema flask-cors

RUN conda activate $EE_CONDA_ENV \
    && conda install --quiet --yes --file ./requirements/conda_requirements_explicit_linux.txt \
    && conda clean --all --yes --quiet


ENV PYTHONPATH=/flask_app/container_libs/

# Copy in directory files, setting owner to the Apache user:group
COPY --chown=www-data:www-data . .

# Start server
CMD ./start_server.sh prd
