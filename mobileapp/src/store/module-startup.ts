import {
    combineReducers,
    StoreModule,
    ActionReducer,
    ActionReducerMap,
    MetaReducer
} from "@ngrx/store";
import { compose } from "@ngrx/core/compose";
import { reducers, initialState } from "./reducers";
import { StoreConfig } from "@ngrx/store/src/store_module";
import { ModuleWithProviders } from "@angular/core";
import { AppState } from "./app-state";
import { Action } from "rxjs/scheduler/Action";
import { storageSync } from "ngrx-store-ionic-storage";


const AppStoreModuleReducers: ActionReducerMap<AppState> = reducers;



export const AppStoreModule: ModuleWithProviders = StoreModule.forRoot(
    AppStoreModuleReducers,
    {
        initialState
    }
);
