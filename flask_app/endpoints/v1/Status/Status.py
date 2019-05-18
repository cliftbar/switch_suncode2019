import logging
from flask_restful import Resource
from webargs import fields
from webargs.flaskparser import use_kwargs

logger = logging.getLogger(__name__)


class Status(Resource):
    get_args = {
        "param": fields.String(required=False)
    }

    @use_kwargs(get_args)
    def get(self, param: str = None):
        msg = "Status OK"
        if param is not None:
            msg = f"{msg}, param: {param}"
        logger.info(param)
        return "OK"
