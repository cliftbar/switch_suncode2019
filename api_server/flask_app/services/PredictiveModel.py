from abc import abstractmethod
from typing import Dict


class PredictiveModel:
    def __init__(self, model_name: str, model_parameters: Dict):
        self.model_parameters = model_parameters
        self.mode_name = model_name

    def fit(self, training_data):
        # to pre-processing if we want
        self._inner_fit(training_data)

    def predict(self, prediction_times):
        # to pre-processing if we want
        self._inner_predict(prediction_times)

    @abstractmethod
    def _inner_fit(self, training_data):
        pass

    @abstractmethod
    def _inner_predict(self, prediction_times):
        pass


class BoostedRegressor(PredictiveModel):
    
