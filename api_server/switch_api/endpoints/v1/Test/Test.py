import logging
from flask_restful import Resource
from webargs import fields
from webargs.flaskparser import use_kwargs

from switch_api.services.Services import Services

from switch_api.utilities.WebApiInterfaces.Genability import GenabilityApiInterface

from pandas import DataFrame

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
        # account_response = genability_interface.create_account("cameron", "314 Perkins St. Apt 310, Oakland, CA 94610")
        # account_id = account_response['results'][0]['providerAccountId']
        # account_id_system = account_response['results'][0]['accountId']
        account_id = "6ad3ed2f-9ffa-4104-846d-33910dd6f44e"
        account_id_system = 'fc79ad5e-54a7-4469-937f-282f79b12e61'

        #account = genability_interface.get_account(account_id)
        print(account_id)
        print(account_id_system)

        # Step 2 Load input data
        input_data = Services().get_usage_data()
        input_data = [{"fromDateTime": data['from_time'].replace(' ', 'T'), "toDateTime": data['end_time'].replace(' ', 'T'), "quantityUnit": data['units'], "quantityValue": data['value']} for data in input_data]
        usage_response = genability_interface.create_customer_usage_profile(account_id_system, input_data, "usage_profile")
        usage_id = usage_response['results'][0]['providerProfileId']
        print(usage_id)

        # Create solar profile
        solar_response = genability_interface.create_customer_solar_profile(account_id, 10, 180, 20)
        solar_fields = [[x['v']] for x in solar_response['results'][0]['baselineMeasures']]
        model_solar = DataFrame(solar_fields, columns=None)
        model_solar.to_csv('test.csv', index=False)
        solar_id = solar_response['results'][0]['profileId']

        # create storage profile
        storage_input = input_data
        storage_response = genability_interface.create_customer_usage_profile(account_id_system, input_data, "storage_profile")
        storage_id = usage_response['results'][0]['profileId']

        # Calculate base costs
        base_cost_response = genability_interface.calculate_base_costs('2017-01-01', '2018-01-01', account_id, solar_id)
        # print(base_cost_response)

        # calculate with storage costs
        with_storage_cost = genability_interface.calculate_storage_costs('2017-01-01', '2018-01-01', account_id, solar_id, storage_id)
        # genability_interface.get_profile(account_id, solar_id)

        # print(account)
        analysis = genability_interface.run_analysis(account_id, usage_id, solar_id, storage_id, '2017-01-01')
        net_cost_change = analysis['results'][0]['summary']['netAvoidedCost']
        return max(net_cost_change, 0)
