from flask import Flask
from flask_restful import Api

#  API imports
import flask_app.endpoints.v1 as v1

# Initialize Flask App and API interface
app = Flask(__name__)
api = Api(app)


####################
# v1 API endpoints #
####################
version = 'v1'

# Status check
endpoint_prefix: str = 'status'
api.add_resource(v1.Status.Status, f'/{version}/{endpoint_prefix}', endpoint=f"Status_{version}")
