#!/usr/bin/env bash
conda config --append channels conda-forge
conda install flask flask-restful requests sqlalchemy psycopg2 webargs pytest
pip install mod_wsgi
