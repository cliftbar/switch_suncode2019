import logging
from flask_restful import Resource
from webargs import fields
from webargs.flaskparser import use_kwargs

from switch_api.services.Services import Services

from switch_api.utilities.WebApiInterfaces.Genability import GenabilityApiInterface

logger = logging.getLogger(__name__)


class Test(Resource):
    get_args = {
        "customer_name": fields.String(required=False),
        "address": fields.String(required=False)
    }

    @use_kwargs(get_args)
    def get(self, param: str = None):
        genability_interface = GenabilityApiInterface()

        # Step 1 create account
        # account_id = genability_interface.create_account("cameron", "314 Perkins St. Apt 310, Oakland, CA 94610")
        account_id = "15a44af1-9182-4b5b-888d-daf335fd70ab"
        print(account_id)

        # Step 2 Load input data
        input_data = Services().get_usage_data()
        input_data = [{"fromDateTime": data['from_time'].replace(' ', 'T'), "toDateTime": data['end_time'].replace(' ', 'T'), "quantityUnit": data['units'], "quantityValue": data['value']} for data in input_data]
        usage_response = genability_interface.create_customer_usage_profile(account_id, input_data, "usage_profile")
        print(usage_response)

        # Create solar profile
        solar_response = genability_interface.create_customer_solar_profile(account_id, 10, 180, 20)
        solar_id = solar_response['results'][0]['providerProfileId']


        # genability_interface.get_profile(account_id, solar_id)
        # account = genability_interface.get_account(account_id)
        # print(account)
        return "OK"
