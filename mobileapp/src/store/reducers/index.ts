import * as fromAddUserData from "./add-userdata";
import { AppState } from "../app-state";

export const reducers = {
    userData: fromAddUserData.reducerFunc,
};

export const initialState: AppState = {
    userData: fromAddUserData.initialState,
};
