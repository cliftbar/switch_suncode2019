webpackJsonp([1],{

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOffersPageModule", function() { return MyOffersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_offers__ = __webpack_require__(722);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyOffersPageModule = /** @class */ (function () {
    function MyOffersPageModule() {
    }
    MyOffersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_offers__["a" /* MyOffersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_offers__["a" /* MyOffersPage */]),
            ],
        })
    ], MyOffersPageModule);
    return MyOffersPageModule;
}());

//# sourceMappingURL=my-offers.module.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_safari_view_controller___ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyOffersPage = /** @class */ (function () {
    function MyOffersPage(navCtrl, navParams, alertCtrl, modalCtrl, safariViewController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.safariViewController = safariViewController;
        this.distance = 20;
        this.age = { lower: 18, upper: 28 };
        this.distancetype = "km";
        this.savingproducts = this.navParams.get("savingproducts");
    }
    MyOffersPage.prototype.viewProduct = function (product) {
        var _this = this;
        this.safariViewController.isAvailable().then(function (available) {
            if (available) {
                _this.safariViewController
                    .show({
                    url: product.producturl,
                    hidden: false,
                    animated: false,
                    transition: "curl",
                    enterReaderModeIfAvailable: true,
                    tintColor: "#ff0000"
                })
                    .subscribe(function (result) {
                    if (result.event === "opened") {
                        console.log("Opened");
                    }
                    else if (result.event === "loaded") {
                        console.log("Loaded");
                        //this.isPayedCustomer = true;
                    }
                    else if (result.event === "closed") {
                        console.log("Closed");
                    }
                }, function (error) { return console.error(error); });
            }
            else {
                console.log("not available");
                // use fallback browser, example InAppBrowser
            }
        });
    };
    MyOffersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-my-offers",template:/*ion-inline-start:"/Users/haribabugadipudi/sunpower/switch/src/pages/my-offers/my-offers.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Product List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list no-lines>\n      <ion-item class="image-padding"  *ngFor="let product of savingproducts " no-lines>\n        <ion-thumbnail item-start>\n          <img id="rcorners3" src="{{product.image}}">\n        </ion-thumbnail>\n        <h2>{{product.product}}</h2>\n        <p>{{product.provider}}</p>\n        <button ion-button clear item-end tappable (click)="viewProduct(product)">\n          View\n        </button>\n      </ion-item>\n    </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/Users/haribabugadipudi/sunpower/switch/src/pages/my-offers/my-offers.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_safari_view_controller___["a" /* SafariViewController */]])
    ], MyOffersPage);
    return MyOffersPage;
}());

//# sourceMappingURL=my-offers.js.map

/***/ })

});
//# sourceMappingURL=1.js.map