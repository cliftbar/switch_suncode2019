from pathlib import Path
import pandas as pd

from switch_api.services.PredictiveModel import PredictiveModel


class DataModel:
    defaultTrainingData = "./"
    defaultTestingData = "./"
    defaultNewDataDir = "./"

    def __init__(self):
        pass

    def get_data(self, from_csv: bool = True, csv_fname: Path = None) -> pd.DataFrame:
        if from_csv:
            data = pd.read_csv(Path(DataModel.defaultTrainingData, csv_fname))
        else:
            pass
        return data

    def save_model(self, model_name: str) -> Path:
        pass

    def load_moadl(self, model_name: str) -> PredictiveModel:
        pass
