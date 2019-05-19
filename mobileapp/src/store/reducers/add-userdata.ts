import { ActionReducer, Action } from "@ngrx/store";
import { ActionTypes } from "../actions";
import * as _ from "lodash";

export const initialState = [];

export function reducer(
    reducer: ActionReducer<any[]>
): ActionReducer<any[]> {
    return function(
        state: any[],
        action: any
    ): any[] {
        return reducerFunc(state, action);
    };
}

export function reducerFunc(
    state = initialState,
    action
): any[] {
    switch (action.type) {
        case ActionTypes.ADD_USER_DATA:
            return action.payload
        default:
            return state;
    }
}
