from abc import abstractmethod
from enum import Enum
from typing import Dict, List
from sklearn.ensemble import GradientBoostingRegressor
import pandas as pd
from statsmodels.tsa.statespace.sarimax import SARIMAX


class PredictiveModel:

    def __init__(self, model_name: str, model_parameters: Dict):
        self.model_parameters = model_parameters
        self.model_name = model_name

    def fit(self, training_data, **kwargs):
        # to pre-processing if we want
        self._inner_fit(training_data, **kwargs)

    def predict(self, prediction_times, **kwargs):
        # to pre-processing if we want
        self._inner_predict(prediction_times, **kwargs)

    @abstractmethod
    def _inner_fit(self, training_data: pd.DataFrame, **kwargs):
        pass

    @abstractmethod
    def _inner_predict(self, prediction_times, **kwargs):
        pass

    @abstractmethod
    def factory(self, model_name: str, model_parameters: Dict) -> 'PredictiveModel':
        pass


class BoostedRegressor(PredictiveModel):

    def __init__(self, model_name: str, model_parameters: Dict):
        super().__init__(model_name, model_parameters)
        self.recent_usage_time_periods = model_parameters['recent_usage_time']
        self.usage_column_name = "Current Demand"
        self.regressor_parameters = {'loss': 'ls',
                                     'learning_rate': .05,
                                     'subsample': .7,
                                     'verbose': 1,
                                     'max_depth': 5,
                                     'n_estimators': 1000
                                     }
        if "regressor_parameters" in model_parameters:
            self.regressor_parameters = model_parameters["regressor_parameters"]

        self.model = GradientBoostingRegressor(**self.regressor_parameters)

    def _inner_fit(self, training_data: pd.DataFrame, recent_usage_time_periods: int = 1):
        for period_back in range(1, recent_usage_time_periods + 1, 1):
            training_data[str(period_back)] = training_data[self.usage_column_name]
            training_data[str(period_back)] = training_data.shift(period_back)

        training_data = training_data[recent_usage_time_periods:]
        self.model.fit(training_data)
        return training_data

    def _inner_predict(self, prediction_times: List[int]):
        return self.model.predict(prediction_times)

    @classmethod
    def factory(cls, model_name: str, model_parameters: Dict) -> 'BoostedRegressor':
        return cls(model_name, model_parameters)


class SARIMA(PredictiveModel):

    def __init__(self, model_name: str, model_parameters: Dict):
        super().__init__(model_name, model_parameters)
        self.order = (3,1,0)
        if "order" in model_parameters:
            self.order = model_parameters["order"]
        self.seasonal_order = (2, 1, 0)
        if "seasonal_order" in model_parameters:
            self.seasonal_order = model_parameters["seasonal_order"]
        self.model: SARIMAX = None

    def _inner_fit(self, training_data: pd.DataFrame):
        self.model = SARIMAX(training_data, order=self.order, seasonal_order=self.seasonal_order)
        self.model.fit()

    def _inner_predict(self, prediction_times: List) -> List[float]:
        return self.model.predict(prediction_times)

    @classmethod
    def factory(cls, model_name: str, model_parameters: Dict) -> 'SARIMA':
        return cls(model_name, model_parameters)


class ModelFactory:
    class AvailableModels(Enum):
        BOOSTED = "boosted_regressor"
        SARIMA = "seasonal_arima"

    factories = {AvailableModels.BOOSTED.value: BoostedRegressor.factory,
                 AvailableModels.SARIMA.value: SARIMA.factory}

    @classmethod
    def factory_caller(cls, model_type: str, model_name: str, model_parameters: Dict) -> PredictiveModel:
        return cls.factories[model_type](model_name, model_parameters)
