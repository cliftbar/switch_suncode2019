import { Injectable } from "@angular/core";
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { LoadingController, Loading } from "ionic-angular";
import { AppState } from "../app-state";
import { ActionTypes } from "../actions";
import * as _ from "lodash";
import 'rxjs';
import { HTTP } from '@ionic-native/http';


@Injectable()
export class UserOperationsEffects {
    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private http: HTTP
    ) {}
    @Effect()
    loadUserData$: Observable<any> = this.actions$
        .ofType(ActionTypes.LOAD_USER_DATA)
        .switchMap(action => {
          let token = _.get(action, "payload.token", "")
          let email = _.get(action, "payload.email", "")
          let httpData = this.http.post('https://us-central1-fir-1f57e.cloudfunctions.net/getUserData', {},{Authorization: token, Email: email }).then(result =>JSON.parse(result.data))
          return Observable.fromPromise(httpData).map(result => {
            return <Action>{
                type: ActionTypes.ADD_USER_DATA,
                payload: result
              }
          }
            

          )
        })

    @Effect()
    payBill$: Observable<any> = this.actions$
        .ofType(ActionTypes.PAY_BILL)
        .map(payload => {
          return this.http.post('https://us-central1-fir-1f57e.cloudfunctions.net/payBill', payload, {})
        })

    @Effect()
    sendEmailReceipt$: Observable<any> = this.actions$
        .ofType(ActionTypes.SEND_EMAIL_RECEIPT)
        .map(payload => {
          return this.http.post('https://us-central1-fir-1f57e.cloudfunctions.net/sendEmailReceipt', payload, {})
        })
    @Effect()
    findAccount$: Observable<any> = this.actions$
        .ofType(ActionTypes.FIND_ACCOUNT)
        .map(payload => {
          return this.http.post('https://us-central1-fir-1f57e.cloudfunctions.net/findAccount', payload, {})
        })
    @Effect()
    resetPassword$: Observable<any> = this.actions$
        .ofType(ActionTypes.REST_PASSWORD)
        .map(payload => {
          return this.http.post('https://us-central1-fir-1f57e.cloudfunctions.net/resetPassword', payload, {})
        })
    @Effect()
    setAutoPay$: Observable<any> = this.actions$
        .ofType(ActionTypes.SET_AUTOPAY)
        .map(payload => {
          return this.http.post('https://us-central1-fir-1f57e.cloudfunctions.net/setAutoPay', payload, {})
        })
    @Effect()
    addBankInfo$: Observable<any> = this.actions$
        .ofType(ActionTypes.ADD_BANK_INFO)
        .map(payload => {
          return this.http.post('https://us-central1-fir-1f57e.cloudfunctions.net/addBankInfo', payload, {})
        })

    @Effect()
    addCard$: Observable<any> = this.actions$
        .ofType(ActionTypes.ADD_CARD)
        .map(payload => {
          return this.http.post('https://us-central1-fir-1f57e.cloudfunctions.net/addCard', payload, {})
        })

}
