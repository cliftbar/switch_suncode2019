webpackJsonp([4],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(304);

var ActionTypes = {
    LOAD_USER_DATA: Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])("[LOAD_USER_DATA-DATA] Load User Data"),
    ADD_USER_DATA: Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])("[ADD_USER_DATA] Add User Data"),
    PAY_BILL: Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])("[PAY_BILL] Pay Bill"),
    ADD_CARD: Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])("[ADD_CARD] Add Card"),
    ADD_BANK_INFO: Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])("[ADD_BANK_INFO] Add Bank Info"),
    SET_AUTOPAY: Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])("[SET_AUTOPAY] Set Auto Pay"),
    REST_PASSWORD: Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])("[REST_PASSWORD] Reset Password"),
    CREATE_ACCOUNT: Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])("[CREATE_ACCOUNT] Create Account"),
    FIND_ACCOUNT: Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])("[FIND_ACCOUNT] Find Account"),
    SEND_EMAIL_RECEIPT: Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])("[SEND_EMAIL_RECEIPT] Send Email Receipt")
};
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateStoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateStoreService = /** @class */ (function () {
    function UpdateStoreService(store) {
        this.store = store;
    }
    UpdateStoreService.prototype.addUserData = function (payload) {
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__actions__["a" /* ActionTypes */].LOAD_USER_DATA, payload: payload });
    };
    UpdateStoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]])
    ], UpdateStoreService);
    return UpdateStoreService;
}());

//# sourceMappingURL=update-store.js.map

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		587,
		0
	],
	"../pages/login/login.module": [
		586,
		3
	],
	"../pages/make-payment/make-payment.module": [
		588,
		2
	],
	"../pages/my-offers/my-offers.module": [
		589,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 192;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(271);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_admin_admin__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_services_update_store__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_module_startup__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngrx_effects__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__store_effects_index__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_safari_view_controller__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var nativeProviders = [__WEBPACK_IMPORTED_MODULE_13__ionic_native_safari_view_controller__["a" /* SafariViewController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__["a" /* HTTP */]];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MobilePay */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MobilePay */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/make-payment/make-payment.module#MakePaymentPageModule', name: 'MakePaymentPage', segment: 'make-payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-offers/my-offers.module#MyOffersPageModule', name: 'MyOffersPage', segment: 'my-offers', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__store_module_startup__["a" /* AppStoreModule */],
                __WEBPACK_IMPORTED_MODULE_11__ngrx_effects__["c" /* EffectsModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__store_effects_index__["a" /* effects */])
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MobilePay */]
            ],
            providers: [
                nativeProviders, ,
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_admin_admin__["a" /* AdminProvider */],
                __WEBPACK_IMPORTED_MODULE_9__store_services_update_store__["a" /* UpdateStoreService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = type;
/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 *
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels
 * are unique.
 */
var typeCache = {};
function type(label) {
    if (typeCache[label]) {
        throw new Error("Action type \"" + label + "\" is not unique\"");
    }
    typeCache[label] = true;
    return label;
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobilePay; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_services_update_store__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MobilePay = /** @class */ (function () {
    function MobilePay(platform, statusBar, splashScreen, storage, updateStore) {
        var _this = this;
        this.storage = storage;
        this.updateStore = updateStore;
        platform.ready().then(function () {
            statusBar.styleLightContent();
            splashScreen.hide();
            _this.storage.get("mobilepayuser").then(function (val) {
                if (!val) {
                    _this.rootPage = "LoginPage";
                }
                else {
                    _this.updateStore.addUserData(val);
                    _this.rootPage = "HomePage";
                }
            });
        });
    }
    MobilePay = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/haribabugadipudi/sunpower/switch/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/haribabugadipudi/sunpower/switch/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__store_services_update_store__["a" /* UpdateStoreService */]])
    ], MobilePay);
    return MobilePay;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdminProvider = /** @class */ (function () {
    function AdminProvider() {
    }
    AdminProvider.prototype.setCurrentUser = function (user) {
        this.currentUser = user;
    };
    AdminProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AdminProvider);
    return AdminProvider;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppStoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers__ = __webpack_require__(325);


var AppStoreModuleReducers = __WEBPACK_IMPORTED_MODULE_1__reducers__["b" /* reducers */];
var AppStoreModule = __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["c" /* StoreModule */].forRoot(AppStoreModuleReducers, {
    initialState: __WEBPACK_IMPORTED_MODULE_1__reducers__["a" /* initialState */]
});
//# sourceMappingURL=module-startup.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initialState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_userdata__ = __webpack_require__(326);

var reducers = {
    userData: __WEBPACK_IMPORTED_MODULE_0__add_userdata__["b" /* reducerFunc */],
};
var initialState = {
    userData: __WEBPACK_IMPORTED_MODULE_0__add_userdata__["a" /* initialState */],
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initialState; });
/* unused harmony export reducer */
/* harmony export (immutable) */ __webpack_exports__["b"] = reducerFunc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(108);

var initialState = [];
function reducer(reducer) {
    return function (state, action) {
        return reducerFunc(state, action);
    };
}
function reducerFunc(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ActionTypes */].ADD_USER_DATA:
            return action.payload;
        default:
            return state;
    }
}
//# sourceMappingURL=add-userdata.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return effects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_operations__ = __webpack_require__(331);

var effects = [
    __WEBPACK_IMPORTED_MODULE_0__user_operations__["a" /* UserOperationsEffects */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserOperationsEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_http__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserOperationsEffects = /** @class */ (function () {
    function UserOperationsEffects(actions$, store, http) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.http = http;
        this.loadUserData$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions__["a" /* ActionTypes */].LOAD_USER_DATA)
            .switchMap(function (action) {
            var token = __WEBPACK_IMPORTED_MODULE_5_lodash__["get"](action, "payload.token", "");
            var email = __WEBPACK_IMPORTED_MODULE_5_lodash__["get"](action, "payload.email", "");
            var httpData = _this.http.post('https://us-central1-fir-1f57e.cloudfunctions.net/getUserData', {}, { Authorization: token, Email: email }).then(function (result) { return JSON.parse(result.data); });
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].fromPromise(httpData).map(function (result) {
                return {
                    type: __WEBPACK_IMPORTED_MODULE_4__actions__["a" /* ActionTypes */].ADD_USER_DATA,
                    payload: result
                };
            });
        });
        this.payBill$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions__["a" /* ActionTypes */].PAY_BILL)
            .map(function (payload) {
            return _this.http.post('https://us-central1-fir-1f57e.cloudfunctions.net/payBill', payload, {});
        });
        this.sendEmailReceipt$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions__["a" /* ActionTypes */].SEND_EMAIL_RECEIPT)
            .map(function (payload) {
            return _this.http.post('https://us-central1-fir-1f57e.cloudfunctions.net/sendEmailReceipt', payload, {});
        });
        this.findAccount$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions__["a" /* ActionTypes */].FIND_ACCOUNT)
            .map(function (payload) {
            return _this.http.post('https://us-central1-fir-1f57e.cloudfunctions.net/findAccount', payload, {});
        });
        this.resetPassword$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions__["a" /* ActionTypes */].REST_PASSWORD)
            .map(function (payload) {
            return _this.http.post('https://us-central1-fir-1f57e.cloudfunctions.net/resetPassword', payload, {});
        });
        this.setAutoPay$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions__["a" /* ActionTypes */].SET_AUTOPAY)
            .map(function (payload) {
            return _this.http.post('https://us-central1-fir-1f57e.cloudfunctions.net/setAutoPay', payload, {});
        });
        this.addBankInfo$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions__["a" /* ActionTypes */].ADD_BANK_INFO)
            .map(function (payload) {
            return _this.http.post('https://us-central1-fir-1f57e.cloudfunctions.net/addBankInfo', payload, {});
        });
        this.addCard$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions__["a" /* ActionTypes */].ADD_CARD)
            .map(function (payload) {
            return _this.http.post('https://us-central1-fir-1f57e.cloudfunctions.net/addCard', payload, {});
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"])
    ], UserOperationsEffects.prototype, "loadUserData$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"])
    ], UserOperationsEffects.prototype, "payBill$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"])
    ], UserOperationsEffects.prototype, "sendEmailReceipt$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"])
    ], UserOperationsEffects.prototype, "findAccount$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"])
    ], UserOperationsEffects.prototype, "resetPassword$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"])
    ], UserOperationsEffects.prototype, "setAutoPay$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"])
    ], UserOperationsEffects.prototype, "addBankInfo$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"])
    ], UserOperationsEffects.prototype, "addCard$", void 0);
    UserOperationsEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_http__["a" /* HTTP */]])
    ], UserOperationsEffects);
    return UserOperationsEffects;
}());

//# sourceMappingURL=user-operations.js.map

/***/ })

},[266]);
//# sourceMappingURL=main.js.map