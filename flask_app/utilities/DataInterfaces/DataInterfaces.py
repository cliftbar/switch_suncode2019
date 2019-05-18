from enum import Enum


class DataInterfaceType(Enum):
    sql = "sql"
    s3 = "s3"


class ConnectionOptions:
    pass
