from pathlib import Path
from typing import Dict, Any, List

from switch_api.models.DataModel import DataModel
from switch_api.services.PredictiveModel import PredictiveModel, ModelFactory, SARIMA
from switch_api.services.GreenButtonParser.parse import parse_feed
from switch_api.services.GreenButtonParser.resources import MeterReading, IntervalReading, DateTimeInterval
from datetime import datetime
import sys
import os
import pandas as pd

directory = os.path.dirname(os.path.realpath(__file__))

gb_data = Path(directory, "GB_Data", "test_gb_data_residential.xml")

class Services:

    def __init__(self):
        self.data_model = DataModel()

    def train_model(self, model_type_to_train: str,
                    model_parameters: Dict,
                    model_name: str = None,
                    csv_fname: str = None,
                    save_model: bool = True,
                    training_data: pd.DataFrame = None) -> Dict[str, Any]:
        model_name = model_type_to_train if model_name is None else model_name
        from_csv: bool = True if csv_fname is not None else False
        training_data = self.data_model.get_data(from_csv=from_csv, csv_fname=csv_fname) if training_data is None else training_data
        model: PredictiveModel = ModelFactory.factory_caller(model_type_to_train, model_name, model_parameters)
        model.fit(training_data)
        path = None
        if save_model:
            path = self.data_model.save_model(model_name)

        return {"model": model, "saved_location": path}

    def predict(self, model_to_use_name: str, prediction_times: List[int]) -> Dict[str, Any]:
        model: PredictiveModel = self.data_model.load_moadl(model_to_use_name)
        predictions = model.predict(prediction_times)
        return {"predictions": predictions, "model_used": model.model_name}

    def get_usage_data(self, fname: str = gb_data) -> List[Dict[str, Any]]:
        meter_reading: MeterReading = parse_feed(fname)
        output = []
        interval_readings: List[IntervalReading] = list(meter_reading.intervalReadings)
        for interval_reading in interval_readings:
            time_period: DateTimeInterval = interval_reading.timePeriod
            from_time = time_period.start
            end_time = time_period.start + time_period.duration
            interval_dict = {"value": interval_reading.value,
                             "units": interval_reading.value_symbol,
                             "from_time": str(from_time),
                             "end_time": str(end_time)}
            output.append(interval_dict)
        return output

    def reshuffle_data(self, list_of_interval_readings: List[Dict[str, Any]], date_format: str = "%Y-%m-%d %H:%M:%S") -> List[Dict[str, Any]]:
        shuffled_interval_listings = []
        for count, interval_dict in enumerate(list_of_interval_readings):
            datetime_object = datetime.strptime(interval_dict["from_time"], date_format)
            if datetime_object.month == 1 and datetime_object.day == 1:
                shuffled_interval_listings = list_of_interval_readings[count:] + list_of_interval_readings[:count]
        shuffled_value_list = []
        for interval in shuffled_interval_listings:
            # assuming it's in Wh and we want to convert to kWh
            shuffled_value_list.append(interval['value'] / 1000)
        return shuffled_value_list[:8760]

    def to_dataframe(self, list_interval_readings: List) -> pd.DataFrame:
        list_of_dicts: List[Dict] = [{interval_dict['from_time']: interval_dict['value']} for interval_dict in list_interval_readings ]
        df = pd.DataFrame(list_of_dicts)
        df.set_index("from_time")
        return df

if __name__ == "__main__":
    service = Services()
    # usage_data = service.get_usage_data()
    # shuffled_values = service.reshuffle_data(usage_data)
    # df = pd.DataFrame(shuffled_values)
    # # temp_path = "/home/harrison/switch_suncode2019/api_server/switch_api/services/GB_Data/values_for_ryan.csv"
    # # df.to_csv(temp_path, columns=None, index=False)
    interval_readings = service.get_usage_data()
    train_df = service.to_dataframe(interval_readings)
    train_df = train_df[-216:-48]
    test_times = [interval_dict['from_time'] for interval_dict in interval_readings[-48:]]
    model_params = {}
    trained_model_dict = service.train_model("seasonal_arima", model_parameters=model_params, training_data=train_df)
    trained_model: SARIMA = trained_model_dict["model"]
    predictions = trained_model.predict(test_times)
    actual_values = [interval_dict['value'] for interval_dict in interval_readings[-48:]]
    import matplotlib.pyplot as plt
    plt.plot(test_times, predictions, 'b--', test_times, actual_values, 'g--')
    plt.show()
    pass