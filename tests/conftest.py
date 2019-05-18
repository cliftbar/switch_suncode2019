import pytest

# space for manual input of keys
aws_key = ""
aws_secret = ""
aws_bucket = ""


def pytest_addoption(parser):
    parser.addoption('--aws_key', action='store', default=None, help='AWS Key ID')
    parser.addoption('--aws_secret', action='store', default=None, help='AWS Key Secret')


@pytest.fixture(scope="session")
def aws_access_configuration(request):
    """fixture to get the aws credentials
    """
    aws_key_id = request.config.getoption("--aws_key")
    aws_key_id = aws_key if aws_key_id is None else aws_key_id
    aws_key_secret = request.config.getoption("--aws_secret")
    aws_key_secret = aws_secret if aws_key_secret is None else aws_key_secret

    return {"aws_access_key_id": aws_key_id, "aws_secret_access_key": aws_key_secret}
