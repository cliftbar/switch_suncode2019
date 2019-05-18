#!/usr/bin/env bash
conda config --append channels conda-forge
conda config --append channels pvlib
conda install flask flask-restful requests sqlalchemy psycopg2 webargs pytest
pip install mod_wsgi
