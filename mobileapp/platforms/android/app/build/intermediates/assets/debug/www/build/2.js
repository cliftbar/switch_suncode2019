webpackJsonp([2],{

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakePaymentPageModule", function() { return MakePaymentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__make_payment__ = __webpack_require__(721);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MakePaymentPageModule = /** @class */ (function () {
    function MakePaymentPageModule() {
    }
    MakePaymentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__make_payment__["a" /* MakePaymentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__make_payment__["a" /* MakePaymentPage */]),
            ],
        })
    ], MakePaymentPageModule);
    return MakePaymentPageModule;
}());

//# sourceMappingURL=make-payment.module.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakePaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MakePaymentPage = /** @class */ (function () {
    function MakePaymentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.flow = 'details';
        this.userData = this.navParams.get("userData");
        this.totalBill = __WEBPACK_IMPORTED_MODULE_2_lodash__["sumBy"](this.userData.account_info.bills, function (bill) { return bill.value; });
    }
    MakePaymentPage.prototype.getTotalPayment = function () {
        return this.userData.payment_amount.total_amount_due + this.userData.payment_amount.convenience_fee + this.userData.payment_amount.service_fee;
    };
    MakePaymentPage.prototype.selectPaymentMethod = function () {
    };
    MakePaymentPage.prototype.hideCard = function (cardNumber) {
        return cardNumber.replace(/.(?=.{4})/g, "*");
    };
    MakePaymentPage.prototype.paymentDetails = function () {
        this.flow = "payment";
    };
    MakePaymentPage.prototype.paymentMethod = function () {
        this.flow = "payment-method";
    };
    MakePaymentPage.prototype.preConfirm = function () {
        this.flow = "pre-confirm";
    };
    MakePaymentPage.prototype.confirmStep = function () {
        this.flow = "confirm";
    };
    MakePaymentPage.prototype.makePayment = function () {
    };
    MakePaymentPage.prototype.cardImage = function (cardType) {
        switch (cardType) {
            case "maestro":
                return "assets/imgs/maestro.png";
            case "master":
                return "assets/imgs/master.png";
            case "visa":
                return "assets/imgs/visa.png";
            case "discover":
                return "assets/imgs/discover.jpg";
        }
    };
    MakePaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-make-payment',template:/*ion-inline-start:"/Users/haribabugadipudi/sunpower/switch/src/pages/make-payment/make-payment.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Make A Payment</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="flow === \'details\'">\n    <div class="account">\n        <span  class="title">Account Info</span>\n        <br/>\n        <span class="account-number-text">ACCOUNT NUMBER</span>\n        <br/>\n        <span class="account-number"><sup>{{userData?.account_info?.account_number}}</sup></span>\n    </div>\n    <br/>\n    <hr>\n    <div class="address">\n        <span text-uppercase class="title">SERVICE ADDRESS</span>\n        <br/>\n        <span class="addressline">{{userData?.account_info?.service_address?.street}}</span>\n        <br/>\n        <span class="addressline">{{userData?.account_info?.service_address?.city}}, {{userData?.account_info?.service_address?.state}} </span>\n\n    </div>\n    <div class="list">\n        <ion-list no-lines>\n          	<ion-item *ngFor="let bill of userData.account_info.bills" no-lines>\n                <ion-label item-start>{{bill.key}}</ion-label>\n                <ion-label item-end>${{bill.value}}</ion-label>\n              </ion-item>\n              <ion-item no-lines class="sum">\n                  <ion-label item-start>Current Charges</ion-label>\n                  <ion-label item-end>${{totalBill}}</ion-label>\n                </ion-item>\n                <ion-item no-lines class="sum">\n                    <ion-label item-start>Total Amount Due</ion-label>\n                    <ion-label item-end>${{userData?.total_amout_due}}</ion-label>\n                  </ion-item>\n        </ion-list>\n    </div>\n  \n    <div padding>\n      <button ion-button block tappable (click)="paymentDetails()" class="pay" >PAY TOTAL AMOUNT DUE</button>\n      <button ion-button block outline   class="pay-other">PAY OTHER AMOUNT</button>\n    </div>\n    <div class="paymentmethods">\n        <p> ACCEPTED PAYMENT METHODS </p>\n      <img src="assets/imgs/cards.png" width="70%"/>\n    </div>\n  </div>\n  <div *ngIf="flow === \'payment\'">\n      <div class="account">\n          <span  class="title">Payment Amount</span>\n          <br/>\n          <span class="account-number-text">ACCOUNT NUMBER</span>\n          <br/>\n          <span class="account-number"><sup>{{userData?.account_info?.account_number}}</sup></span>\n      </div>\n      <br/>\n      <hr>\n      <div class="list">\n          <ion-list no-lines>\n              <ion-item no-lines >\n                  <ion-label item-start>Total Amount Due</ion-label>\n                  <ion-label item-end>${{userData?.total_amount_due}}</ion-label>\n                </ion-item>\n                <ion-item no-lines >\n                    <ion-label item-start>Convenience Fee</ion-label>\n                    <ion-label item-end>${{userData?.payment_amount?.convenience_fee}}</ion-label>\n                  </ion-item>\n                <ion-item no-lines >\n                    <ion-label item-start>Service Fee</ion-label>\n                    <ion-label item-end>${{userData?.payment_amount?.service_fee}}</ion-label>\n                  </ion-item>\n                  <ion-item no-lines class="sum">\n                      <ion-label item-start>You Pay</ion-label>\n                      <ion-label item-end>${{getTotalPayment()}}</ion-label>\n                    </ion-item>\n          </ion-list>\n      </div>\n    \n      <div padding>\n        <button ion-button block tappable (click)="paymentMethod()" class="pay" >CONTINUE</button>\n      </div>\n      <div class="paymentmethods">\n          <p> ACCEPTED PAYMENT METHODS </p>\n        <img src="assets/imgs/cards.png" width="70%"/>\n      </div>\n  </div>\n  <div *ngIf="flow === \'payment-method\'">\n      <div class="account">\n          <span  class="title">Payment Method</span>\n          <br/>\n          <span class="account-number-text">ACCOUNT NUMBER</span>\n          <br/>\n          <span class="account-number"><sup>{{userData?.account_info?.account_number}}</sup></span>\n      </div>\n      <br/>\n      <hr>\n      <div class="address">\n          <span text-uppercase class="title">TOTAL PAYMENT</span>\n          <br/>\n          <span class="addressline">${{getTotalPayment()}}</span>\n      </div>\n      <br/>\n      <div class="list">\n\n          <ion-grid>\n              <ion-row *ngFor="let card of userData.cards" tappable (click)="selectPaymentMethod()">\n                  <ion-col col-1 class="checkbox">\n                    <div class="circle filled" *ngIf="card.type === \'visa\'"></div>  \n                    <div class="circle" *ngIf="card.type != \'visa\'"></div>\n                \n                  </ion-col>\n                  <ion-col col-2 class="card-image-notblurr" *ngIf="card.type === \'visa\'">\n                      <img [src]="cardImage(card.type)" />\n                  </ion-col>\n                <ion-col col-2 class="card-image" *ngIf="card.type != \'visa\'">\n                    <img [src]="cardImage(card.type)" />\n                </ion-col>\n                  <ion-col col-9 class="card-text">\n                      <ion-label class="card-type-number">{{ card.type }} {{hideCard(card.number)}}</ion-label>\n                      <ion-label class="card-expiration">Expiration {{ card.expiration }}</ion-label>\n                  </ion-col>\n              </ion-row>\n              <ion-row  tappable (click)="selectPaymentMethod()">\n                  <ion-col col-1 class="checkbox">\n                    <div class="circle"></div>\n                  </ion-col>\n                  <ion-col col-10 class="card-text">\n                      <ion-label>Add New Card</ion-label>\n                  </ion-col>\n              </ion-row>\n              <ion-row tappable (click)="selectPaymentMethod()">\n                  <ion-col col-1 class="checkbox">\n                    <div class="circle"></div>\n                  </ion-col>\n                  <ion-col col-10 col-10 class="card-text">\n                      <ion-label>Add Electronic Check</ion-label>\n                  </ion-col>\n              </ion-row>\n          </ion-grid>\n      </div>\n    \n      <div padding>\n        <button ion-button block tappable (click)="preConfirm()" class="pay" >CONTINUE</button>\n      </div>\n      <div class="paymentmethods">\n          <p> ACCEPTED PAYMENT METHODS </p>\n        <img src="assets/imgs/cards.png" width="70%"/>\n      </div>\n    </div>\n    <div *ngIf="flow === \'pre-confirm\'">\n        <div class="account">\n            <span  class="title">Review Payment Info</span>\n            <br/>\n            <span class="account-number-text">ACCOUNT NUMBER</span>\n            <br/>\n            <span class="account-number"><sup>{{userData?.account_info?.account_number}}</sup></span>\n        </div>\n        <br/>\n        <hr>\n        <div class="account">\n            <span class="account-number-text">TOTAL PAYMENT</span>\n            <br/>\n            <span class="account-number"><sup>${{getTotalPayment()}}</sup></span>\n        </div>\n        <br/>\n        <hr>\n        <div class="account">\n            <span class="account-number-text">ACCOUNT NUMBER</span>\n            <br/>\n            <span class="account-number"><sup>MASTERCARD 1234</sup></span>\n        </div>\n        <div padding>\n            <button ion-button block tappable (click)="confirmStep()" class="pay" >CONTINUE</button>\n            <span class="note">Your payment will not be submitted yet</span>\n          </div>\n\n      </div>\n      <div *ngIf="flow === \'confirm\'">\n          <div class="account">\n              <span  class="title">Review And Pay</span>\n              <br/>\n              <span class="account-number-text">ACCOUNT NUMBER</span>\n              <br/>\n              <span class="account-number"><sup>{{userData?.account_info?.account_number}}</sup></span>\n          </div>\n          <br/>\n          <hr>\n          <div class="account">\n              <span class="account-number-text">TOTAL PAYMENT</span>\n              <br/>\n              <span class="account-number"><sup>${{getTotalPayment()}}</sup></span>\n          </div>\n          <br/>\n          <hr>\n          <div class="account">\n              <span class="account-number-text">ACCOUNT NUMBER</span>\n              <br/>\n              <span class="account-number"><sup>MASTERCARD 1234</sup></span>\n          </div>\n          <div padding>\n              <button ion-button block tappable (click)="makePayment()" class="pay" >PAY NOW</button>\n              <span class="note">Clicking the button above will submit your payment</span>\n            </div>\n  \n      </div>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/haribabugadipudi/sunpower/switch/src/pages/make-payment/make-payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MakePaymentPage);
    return MakePaymentPage;
}());

//# sourceMappingURL=make-payment.js.map

/***/ })

});
//# sourceMappingURL=2.js.map