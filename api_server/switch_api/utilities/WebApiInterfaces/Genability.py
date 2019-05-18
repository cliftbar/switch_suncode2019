import uuid
from enum import Enum
from typing import Union, Dict, List
import json

import requests


auth = {
    "app_id": "a1deec93-5746-4993-97dc-f2c68c48a872",
    "app_key": "cc5c1591-a995-454c-b6f4-70b32fe830dc"
}


class GenabilityApiInterface:
    class CustomerClasses(Enum):
        residential = "1"
        general = "2"
        special = "4"

    class ServiceType(Enum):
        electricity = "ELECTRICITY"
        solar_pv = "SOLAR_PV"

    def __init__(self, api_key: str = None, org_key: str = None):
        self.api_key: str = api_key
        self.api_base: str = "https://api.genability.com/rest/v1"
        self.org_key = org_key

    def send_api_request(self, endpoint_url, verb: str, data: Dict = None):
        url_string: str = f"{self.api_base}/{endpoint_url}"
        auth_tuple = (auth['app_id'], auth['app_key'])
        if verb.lower() == "get":
            api_response: requests.Response = requests.get(url_string, params=data, auth=auth_tuple)
        elif verb.lower() == 'post':
            api_response: requests.Response = requests.post(url_string, json=data, auth=auth_tuple)
        elif verb.lower() == 'put':
            headers = {"Content-Type": "application/json"}
            api_response: requests.Response = requests.put(url_string, data=json.dumps(data), headers=headers, auth=auth_tuple)
        else:
            raise Exception(f"unsupported verb {verb}")

        return api_response.json()

    """
    Step 1: Create customer account
    Step 2 (optional): Set Corrected Utility and Tariff info for Customer (GET customer account)
    Step 3: Create Customer Usage Profile
    Step 4: Create Solar Profile 
    Step 5: Calculate cost without solar and storage
    Step 6: Create Net Hourly Profile
    Step 7: Model Storage Profile - We create this
    
    """

    # Creates a customer building account
    def create_account(self,
                       account_name: str,
                       address: Union[str, Dict],
                       customer_class: CustomerClasses = CustomerClasses.residential):
        account_uuid = str(uuid.uuid4())
        enpoint_url = f"accounts"

        if isinstance(address, str):
            address = {"addressString": address}

        api_body = {
            "providerAccountId": account_uuid,
            "accountName": account_name,
            "address": address,
            "properties": {
                "customerClass": {
                    "keyName": "customerClass",
                    "dataValue": customer_class.value
                }
            }
        }
        api_response = self.send_api_request(endpoint_url=enpoint_url, verb='put', data=api_body)

        tariff_endpoint_url = f"accounts/pid/{account_uuid}/properties"

        tariff_body = {
            "keyName": "masterTariffId",
            "dataValue": "3251052",
            "accuracy": 100
        }

        tariff_response = self.send_api_request(tariff_endpoint_url, 'put', tariff_body)

        return api_response

    def get_account(self, account_uuid: str) -> Dict:
        enpoint_url = f"accounts/pid/{account_uuid}"
        customer_account: Dict = self.send_api_request(enpoint_url, 'get')
        return customer_account

    def get_customer_utility(self, account_uuid: str):
        cutomer_account_data: Dict = self.get_account(account_uuid)
        pass

    def get_customer_tariff(self, account_uuid: str):
        cutomer_account_data: Dict = self.get_account(account_uuid)
        pass

    def set_customer_utility(self, account_uuid: str):
        cutomer_account_data: Dict = self.get_account(account_uuid)
        pass

    def set_customer_tariff(self, account_uuid: str):
        cutomer_account_data: Dict = self.get_account(account_uuid)
        pass

    def get_utilities(self):
        pass

    def get_tariffs(self):
        pass

    def create_customer_usage_profile(self,
                                      account_uuid,
                                      input_data: List[Dict],
                                      profile_name: str = "",
                                      service_type: ServiceType = ServiceType.electricity) -> Dict:
        endpoint_url: str = "profiles"
        profile_uuid: str = str(uuid.uuid4())
        api_body = {
            "accountId": account_uuid,
            "providerProfileId": profile_uuid,
            "profileName": profile_name,
            "description": "",
            "isDefault": True,
            "serviceTypes": service_type.value,
            "sourceId": "ReadingEntry",
            "readingData": input_data
        }
        api_response = self.send_api_request(endpoint_url, 'put', data=api_body)
        # print(api_response)
        return api_response

    def create_customer_solar_profile(self,
                                      account_uuid,
                                      system_size: float,
                                      azimuth: int,
                                      tilt: int,
                                      service_type: ServiceType = ServiceType.solar_pv) -> Dict:
        endpoint_url: str = "profiles"
        profile_uuid: str = str(uuid.uuid4())

        api_body: Dict = {
            "providerAccountId": account_uuid,
            "providerProfileId": profile_uuid,
            "serviceTypes": service_type.value,
            "sourceId": "PVWatts",
            "groupBy": "HOUR",
            "properties": {
                "systemSize": {
                    "keyName": "systemSize",
                    "dataValue": str(system_size)
                },
                "azimuth": {
                  "keyName": "azimuth",
                  "dataValue": str(azimuth)
                },
                "tilt": {
                    "keyName": "tilt",
                    "dataValue": str(tilt)
                }
            }
        }
        api_response = self.send_api_request(endpoint_url, 'put', data=api_body)
        # print(api_response)
        return api_response

    def create_customer_storage_profile(self,
                                        account_uuid,
                                        input_data,
                                        profile_name,
                                        service_type: ServiceType = ServiceType.electricity) -> Dict:
        endpoint_url: str = "profiles"
        profile_uuid: str = str(uuid.uuid4())

        api_body: Dict = {
            "providerAccountId": account_uuid,
            "providerProfileId": profile_uuid,
            "profileName": profile_name,
            "serviceTypes": service_type.value,
            "sourceId": "ReadingEntry",
            "readingData": input_data
        }
        api_response = self.send_api_request(endpoint_url, 'put', data=api_body)
        # print(api_response)
        return api_response

    def post_greenbutton_profile(self, account_id, greenbutton_data: str = None):
        if greenbutton_data is None:
            with open("greenbutton_sample_data.xml", 'rb') as greebutton_file:
                greenbutton_data = greebutton_file.read()

        file_format = "espi"
        endpoint_url: str = "loader/account/up.json"

        files = ('fileData', greenbutton_data)

        api_body = {
            "fileFormat": file_format,
            "providerAccountId": account_id
        }

        url_string: str = f"{self.api_base}/{endpoint_url}"
        auth_tuple = (auth['app_id'], auth['app_key'])
        api_response: requests.Response = requests.post(url_string, data=api_body, files=('file', files), auth=auth_tuple)

        api_response = self.send_api_request(endpoint_url, 'post', api_body)
        return api_response

    def get_profile(self, account_id, profile_id) -> requests.Response:
        endpoint_url = f"profiles/pid/{profile_id}"
        api_params = {
            "populateBaseline": False
        }
        response = self.send_api_request(endpoint_url, 'get', api_params)
        return response

    def calculate_base_costs(self, from_time, to_time, account_id, solar_profile_id, group_by: str = 'HOUR'):
        endpoint_url = f"accounts/pid/{account_id}/calculate"

        api_body = {
            "fromDateTime": from_time,
            "toDateTime": to_time,
            "useIntelligentBaselining": "true",
            "includeDefaultProfile": "false",
            "autoBaseline": "true",
            "minimums": "false",
            "detailLevel": "CHARGE_TYPE_AND_TOU",
            "groupBy": group_by,
            "fields": "EXT",
            "tariffInputs": [{
                "keyName": "profileId",
                "dataValue": solar_profile_id,
                "operator": "-"
            }]
        }
        api_response = self.send_api_request(endpoint_url, 'post', api_body)

        return api_response

    def calculate_storage_costs(self, from_time, to_time, account_id, solar_profile_id, storage_id, group_by: str = 'HOUR'):
        endpoint_url = f"accounts/pid/{account_id}/calculate"

        api_body = {
            "fromDateTime": from_time,
            "toDateTime": to_time,
            "useIntelligentBaselining": "true",
            "includeDefaultProfile": "true",
            "autoBaseline": "true",
            "minimums": "false",
            "detailLevel": "CHARGE_TYPE",
            "groupBy": group_by,
            "fields": "EXT",
            "tariffInputs": [
                {
                    "keyName": "profileId",
                    "dataValue": storage_id,
                    "operator": "-"
                },
                {
                    "keyName": "profileId",
                    "dataValue": solar_profile_id,
                    "operator": "+"
                }
            ]
        }
        api_response = self.send_api_request(endpoint_url, 'post', api_body)

        return api_response

    def create_net_hourly_profile(self):
        # also uses the calculate endpoint
        pass

    def run_analysis(self, account_id, usage_id, solar_id, storage_id, from_date):
        endpoint_url = "accounts/analysis"
        api_body = {
          "providerAccountId" : account_id,
          "fromDateTime" : from_date,
          "fields": "ext",
          "propertyInputs" : [ {
            "scenarios" : "before",
            "keyName" : "masterTariffId",
            "dataValue" : "2415"
          }, {
            "scenarios" : "before,after",
            "keyName" : "rateInflation",
            "dataValue" : "3.5"
          }, {
            "scenarios" : "solar",
            "keyName" : "rateInflation",
            "dataValue" : "1.9"
          }, {
            "scenarios" : "after,solar",
            "keyName" : "solarDegradation",
            "dataValue" : "1.5"
          }, {
            "scenarios" : "before, after",
            "keyName" : "providerProfileId",
            "dataValue" : usage_id
          }, {
            "scenarios" : "after, solar",
            "keyName" : "profileId",
            "dataValue" : solar_id
          }, {
            "scenarios" : "after",
            "keyName" : "profileId",
            "dataValue" : storage_id,
            "operator": "+"
          } ],
          "rateInputs" : [ {
            "scenarios" : "solar",
            "chargeType" : "FIXED_PRICE",
            "rateBands" : [ {
              "rateAmount" : 137.05
            } ]
          } ]
        }
        api_response = self.send_api_request(endpoint_url, 'post', api_body)
        return api_response