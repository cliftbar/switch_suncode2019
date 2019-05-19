import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { Store, Action } from "@ngrx/store";
import { ActionTypes } from "../actions";
import { AppState } from "../app-state";


@Injectable()
export class UpdateStoreService {
    constructor(
        private store: Store<AppState>
    ) {}

    addUserData(payload: any) {
        this.store.dispatch(
            <Action>{ type: ActionTypes.LOAD_USER_DATA, payload: payload }
        );
    }


}
