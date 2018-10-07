(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-login></app-login>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.route */ "./src/app/app.route.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _common_services_ApiCalls_getFullApi_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/services/ApiCalls/getFullApi.service */ "./src/app/common/services/ApiCalls/getFullApi.service.ts");
/* harmony import */ var _common_services_functions_handleFunctions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/services/functions/handleFunctions */ "./src/app/common/services/functions/handleFunctions.ts");
/* harmony import */ var _pages_dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/dash-board/dash-board.component */ "./src/app/pages/dash-board/dash-board.component.ts");
/* harmony import */ var _pages_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/navigation/navigation.component */ "./src/app/pages/navigation/navigation.component.ts");
/* harmony import */ var _pages_information_information_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/information/information.component */ "./src/app/pages/information/information.component.ts");
/* harmony import */ var _pages_Category_category_handler_category_handler_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/Category/category-handler/category-handler.component */ "./src/app/pages/Category/category-handler/category-handler.component.ts");
/* harmony import */ var _pages_Category_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/Category/category-add/category-add.component */ "./src/app/pages/Category/category-add/category-add.component.ts");
/* harmony import */ var _pages_Category_category_disp_category_disp_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/Category/category-disp/category-disp.component */ "./src/app/pages/Category/category-disp/category-disp.component.ts");
/* harmony import */ var _pages_Category_category_update_category_update_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/Category/category-update/category-update.component */ "./src/app/pages/Category/category-update/category-update.component.ts");
/* harmony import */ var _pages_SubCategory_sub_category_add_sub_category_add_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/SubCategory/sub-category-add/sub-category-add.component */ "./src/app/pages/SubCategory/sub-category-add/sub-category-add.component.ts");
/* harmony import */ var _pages_SubCategory_sub_category_handler_sub_category_handler_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/SubCategory/sub-category-handler/sub-category-handler.component */ "./src/app/pages/SubCategory/sub-category-handler/sub-category-handler.component.ts");
/* harmony import */ var _pages_SubCategory_sub_category_display_sub_category_display_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/SubCategory/sub-category-display/sub-category-display.component */ "./src/app/pages/SubCategory/sub-category-display/sub-category-display.component.ts");
/* harmony import */ var _pages_SubCategory_sub_category_update_sub_category_update_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/SubCategory/sub-category-update/sub-category-update.component */ "./src/app/pages/SubCategory/sub-category-update/sub-category-update.component.ts");
/* harmony import */ var _pages_NewProducts_new_product_handler_new_product_handler_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/NewProducts/new-product-handler/new-product-handler.component */ "./src/app/pages/NewProducts/new-product-handler/new-product-handler.component.ts");
/* harmony import */ var _pages_NewProducts_new_product_add_new_product_add_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/NewProducts/new-product-add/new-product-add.component */ "./src/app/pages/NewProducts/new-product-add/new-product-add.component.ts");
/* harmony import */ var _pages_NewProducts_new_product_display_new_product_display_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/NewProducts/new-product-display/new-product-display.component */ "./src/app/pages/NewProducts/new-product-display/new-product-display.component.ts");
/* harmony import */ var _pages_NewProducts_new_product_update_new_product_update_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/NewProducts/new-product-update/new-product-update.component */ "./src/app/pages/NewProducts/new-product-update/new-product-update.component.ts");
/* harmony import */ var _pages_Store_store_handler_store_handler_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/Store/store-handler/store-handler.component */ "./src/app/pages/Store/store-handler/store-handler.component.ts");
/* harmony import */ var _pages_Store_store_display_store_display_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/Store/store-display/store-display.component */ "./src/app/pages/Store/store-display/store-display.component.ts");
/* harmony import */ var _pages_Cart_cart_display_cart_display_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/Cart/cart-display/cart-display.component */ "./src/app/pages/Cart/cart-display/cart-display.component.ts");
/* harmony import */ var _pages_Shop_shop_display_shop_display_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/Shop/shop-display/shop-display.component */ "./src/app/pages/Shop/shop-display/shop-display.component.ts");
/* harmony import */ var _pages_Shop_shop_handler_shop_handler_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/Shop/shop-handler/shop-handler.component */ "./src/app/pages/Shop/shop-handler/shop-handler.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _pages_dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_13__["DashBoardComponent"],
                _pages_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_14__["NavigationComponent"],
                _pages_information_information_component__WEBPACK_IMPORTED_MODULE_15__["InformationComponent"],
                _pages_Category_category_handler_category_handler_component__WEBPACK_IMPORTED_MODULE_16__["CategoryHandlerComponent"],
                _pages_Category_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_17__["CategoryAddComponent"],
                _pages_Category_category_disp_category_disp_component__WEBPACK_IMPORTED_MODULE_18__["CategoryDispComponent"],
                _pages_Category_category_update_category_update_component__WEBPACK_IMPORTED_MODULE_19__["CategoryUpdateComponent"],
                _pages_SubCategory_sub_category_add_sub_category_add_component__WEBPACK_IMPORTED_MODULE_20__["SubCategoryAddComponent"],
                _pages_SubCategory_sub_category_handler_sub_category_handler_component__WEBPACK_IMPORTED_MODULE_21__["SubCategoryHandlerComponent"],
                _pages_SubCategory_sub_category_display_sub_category_display_component__WEBPACK_IMPORTED_MODULE_22__["SubCategoryDisplayComponent"],
                _pages_SubCategory_sub_category_update_sub_category_update_component__WEBPACK_IMPORTED_MODULE_23__["SubCategoryUpdateComponent"],
                _pages_NewProducts_new_product_handler_new_product_handler_component__WEBPACK_IMPORTED_MODULE_24__["NewProductHandlerComponent"],
                _pages_NewProducts_new_product_add_new_product_add_component__WEBPACK_IMPORTED_MODULE_25__["NewProductAddComponent"],
                _pages_NewProducts_new_product_display_new_product_display_component__WEBPACK_IMPORTED_MODULE_26__["NewProductDisplayComponent"],
                _pages_NewProducts_new_product_update_new_product_update_component__WEBPACK_IMPORTED_MODULE_27__["NewProductUpdateComponent"],
                _pages_Store_store_handler_store_handler_component__WEBPACK_IMPORTED_MODULE_28__["StoreHandlerComponent"],
                _pages_Store_store_display_store_display_component__WEBPACK_IMPORTED_MODULE_29__["StoreDisplayComponent"],
                _pages_Cart_cart_display_cart_display_component__WEBPACK_IMPORTED_MODULE_30__["CartDisplayComponent"],
                _pages_Shop_shop_display_shop_display_component__WEBPACK_IMPORTED_MODULE_31__["ShopDisplayComponent"],
                _pages_Shop_shop_handler_shop_handler_component__WEBPACK_IMPORTED_MODULE_32__["ShopHandlerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_route__WEBPACK_IMPORTED_MODULE_9__["routes"])
            ],
            providers: [_common_services_ApiCalls_getFullApi_service__WEBPACK_IMPORTED_MODULE_11__["getFullApi"], _common_services_functions_handleFunctions__WEBPACK_IMPORTED_MODULE_12__["handleFunction"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.route.ts":
/*!******************************!*\
  !*** ./src/app/app.route.ts ***!
  \******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _pages_dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/dash-board/dash-board.component */ "./src/app/pages/dash-board/dash-board.component.ts");
/* harmony import */ var _pages_information_information_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/information/information.component */ "./src/app/pages/information/information.component.ts");
/* harmony import */ var _pages_Category_category_handler_category_handler_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Category/category-handler/category-handler.component */ "./src/app/pages/Category/category-handler/category-handler.component.ts");
/* harmony import */ var _pages_Category_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Category/category-add/category-add.component */ "./src/app/pages/Category/category-add/category-add.component.ts");
/* harmony import */ var _pages_Category_category_disp_category_disp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Category/category-disp/category-disp.component */ "./src/app/pages/Category/category-disp/category-disp.component.ts");
/* harmony import */ var _pages_Category_category_update_category_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Category/category-update/category-update.component */ "./src/app/pages/Category/category-update/category-update.component.ts");
/* harmony import */ var _pages_SubCategory_sub_category_handler_sub_category_handler_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/SubCategory/sub-category-handler/sub-category-handler.component */ "./src/app/pages/SubCategory/sub-category-handler/sub-category-handler.component.ts");
/* harmony import */ var _pages_SubCategory_sub_category_add_sub_category_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/SubCategory/sub-category-add/sub-category-add.component */ "./src/app/pages/SubCategory/sub-category-add/sub-category-add.component.ts");
/* harmony import */ var _pages_SubCategory_sub_category_display_sub_category_display_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/SubCategory/sub-category-display/sub-category-display.component */ "./src/app/pages/SubCategory/sub-category-display/sub-category-display.component.ts");
/* harmony import */ var _pages_SubCategory_sub_category_update_sub_category_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/SubCategory/sub-category-update/sub-category-update.component */ "./src/app/pages/SubCategory/sub-category-update/sub-category-update.component.ts");
/* harmony import */ var _pages_NewProducts_new_product_handler_new_product_handler_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/NewProducts/new-product-handler/new-product-handler.component */ "./src/app/pages/NewProducts/new-product-handler/new-product-handler.component.ts");
/* harmony import */ var _pages_NewProducts_new_product_display_new_product_display_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/NewProducts/new-product-display/new-product-display.component */ "./src/app/pages/NewProducts/new-product-display/new-product-display.component.ts");
/* harmony import */ var _pages_NewProducts_new_product_add_new_product_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/NewProducts/new-product-add/new-product-add.component */ "./src/app/pages/NewProducts/new-product-add/new-product-add.component.ts");
/* harmony import */ var _pages_NewProducts_new_product_update_new_product_update_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/NewProducts/new-product-update/new-product-update.component */ "./src/app/pages/NewProducts/new-product-update/new-product-update.component.ts");
/* harmony import */ var _pages_Store_store_handler_store_handler_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/Store/store-handler/store-handler.component */ "./src/app/pages/Store/store-handler/store-handler.component.ts");
/* harmony import */ var _pages_Store_store_display_store_display_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/Store/store-display/store-display.component */ "./src/app/pages/Store/store-display/store-display.component.ts");
/* harmony import */ var _pages_Cart_cart_display_cart_display_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/Cart/cart-display/cart-display.component */ "./src/app/pages/Cart/cart-display/cart-display.component.ts");
/* harmony import */ var _pages_Shop_shop_handler_shop_handler_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/Shop/shop-handler/shop-handler.component */ "./src/app/pages/Shop/shop-handler/shop-handler.component.ts");
/* harmony import */ var _pages_Shop_shop_display_shop_display_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/Shop/shop-display/shop-display.component */ "./src/app/pages/Shop/shop-display/shop-display.component.ts");



















var routes = [
    {
        path: 'DashBoard',
        component: _pages_dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_0__["DashBoardComponent"],
        children: [
            {
                path: 'Information',
                component: _pages_information_information_component__WEBPACK_IMPORTED_MODULE_1__["InformationComponent"],
                children: [
                    {
                        path: 'Category_Handler',
                        component: _pages_Category_category_handler_category_handler_component__WEBPACK_IMPORTED_MODULE_2__["CategoryHandlerComponent"],
                        children: [
                            {
                                path: '',
                                component: _pages_Category_category_disp_category_disp_component__WEBPACK_IMPORTED_MODULE_4__["CategoryDispComponent"]
                            },
                            {
                                path: 'CategoryAdd',
                                component: _pages_Category_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_3__["CategoryAddComponent"]
                            },
                            {
                                path: 'CategoryDisp',
                                component: _pages_Category_category_disp_category_disp_component__WEBPACK_IMPORTED_MODULE_4__["CategoryDispComponent"]
                            },
                            {
                                path: 'CategoryUpdate',
                                component: _pages_Category_category_update_category_update_component__WEBPACK_IMPORTED_MODULE_5__["CategoryUpdateComponent"]
                            }
                        ]
                    },
                    {
                        path: 'SubCategory_Handler',
                        component: _pages_SubCategory_sub_category_handler_sub_category_handler_component__WEBPACK_IMPORTED_MODULE_6__["SubCategoryHandlerComponent"],
                        children: [
                            {
                                path: '',
                                component: _pages_SubCategory_sub_category_display_sub_category_display_component__WEBPACK_IMPORTED_MODULE_8__["SubCategoryDisplayComponent"]
                            },
                            {
                                path: 'SubCategoryAdd',
                                component: _pages_SubCategory_sub_category_add_sub_category_add_component__WEBPACK_IMPORTED_MODULE_7__["SubCategoryAddComponent"]
                            },
                            {
                                path: 'SubCategoryDisplay',
                                component: _pages_SubCategory_sub_category_display_sub_category_display_component__WEBPACK_IMPORTED_MODULE_8__["SubCategoryDisplayComponent"]
                            },
                            {
                                path: 'SubCategoryUpdate',
                                component: _pages_SubCategory_sub_category_update_sub_category_update_component__WEBPACK_IMPORTED_MODULE_9__["SubCategoryUpdateComponent"]
                            }
                        ]
                    },
                    {
                        path: 'NewProduct_Handler',
                        component: _pages_NewProducts_new_product_handler_new_product_handler_component__WEBPACK_IMPORTED_MODULE_10__["NewProductHandlerComponent"],
                        children: [
                            {
                                path: '',
                                component: _pages_NewProducts_new_product_display_new_product_display_component__WEBPACK_IMPORTED_MODULE_11__["NewProductDisplayComponent"]
                            },
                            {
                                path: 'NewProductAdd',
                                component: _pages_NewProducts_new_product_add_new_product_add_component__WEBPACK_IMPORTED_MODULE_12__["NewProductAddComponent"]
                            },
                            {
                                path: 'NewProductDisplay',
                                component: _pages_NewProducts_new_product_display_new_product_display_component__WEBPACK_IMPORTED_MODULE_11__["NewProductDisplayComponent"]
                            },
                            {
                                path: 'NewProductUpdate',
                                component: _pages_NewProducts_new_product_update_new_product_update_component__WEBPACK_IMPORTED_MODULE_13__["NewProductUpdateComponent"]
                            }
                        ]
                    },
                    {
                        path: 'Store_Handler',
                        component: _pages_Store_store_handler_store_handler_component__WEBPACK_IMPORTED_MODULE_14__["StoreHandlerComponent"],
                        children: [
                            {
                                path: '',
                                component: _pages_Store_store_display_store_display_component__WEBPACK_IMPORTED_MODULE_15__["StoreDisplayComponent"]
                            },
                            {
                                path: 'StoreDisplay',
                                component: _pages_Store_store_display_store_display_component__WEBPACK_IMPORTED_MODULE_15__["StoreDisplayComponent"]
                            }
                        ]
                    },
                    {
                        path: 'Shop_Handler',
                        component: _pages_Shop_shop_handler_shop_handler_component__WEBPACK_IMPORTED_MODULE_17__["ShopHandlerComponent"],
                        children: [
                            {
                                path: '',
                                component: _pages_Shop_shop_display_shop_display_component__WEBPACK_IMPORTED_MODULE_18__["ShopDisplayComponent"]
                            },
                            {
                                path: 'ShopDisplay',
                                component: _pages_Shop_shop_display_shop_display_component__WEBPACK_IMPORTED_MODULE_18__["ShopDisplayComponent"]
                            }
                        ]
                    }
                ]
            },
            {
                path: 'Cart',
                component: _pages_Cart_cart_display_cart_display_component__WEBPACK_IMPORTED_MODULE_16__["CartDisplayComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/common/constants/const.ts":
/*!*******************************************!*\
  !*** ./src/app/common/constants/const.ts ***!
  \*******************************************/
/*! exports provided: Consts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consts", function() { return Consts; });
var Consts = /** @class */ (function () {
    function Consts() {
    }
    Consts.URL = "localhost";
    Consts.PORT_NUMBER = "3000";
    Consts.monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    return Consts;
}());



/***/ }),

/***/ "./src/app/common/services/ApiCalls/ApiCalls.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/common/services/ApiCalls/ApiCalls.service.ts ***!
  \**************************************************************/
/*! exports provided: ApiCallsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiCallsService", function() { return ApiCallsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _getFullApi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getFullApi.service */ "./src/app/common/services/ApiCalls/getFullApi.service.ts");
/* harmony import */ var _functions_handleFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../functions/handleFunctions */ "./src/app/common/services/functions/handleFunctions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApiCallsService = /** @class */ (function () {
    function ApiCallsService(http, httpClient, getfullapi, handlefunction) {
        this.http = http;
        this.httpClient = httpClient;
        this.getfullapi = getfullapi;
        this.handlefunction = handlefunction;
    }
    ApiCallsService.prototype.handleData = function (api, apiCall, noOfIDs, formBody, id1, id2, id3) {
        this.handlefunction.createHeader();
        switch (noOfIDs) {
            case 0:
                this.URL = this.getfullapi.appendAPIwithIDS(api, noOfIDs);
                break;
            case 1:
                this.URL = this.getfullapi.appendAPIwithIDS(api, noOfIDs, id1);
                break;
            case 2:
                this.URL = this.getfullapi.appendAPIwithIDS(api, noOfIDs, id1, id2);
                break;
            case 3:
                this.URL = this.getfullapi.appendAPIwithIDS(api, noOfIDs, id1, id2, id3);
                break;
        }
        switch (apiCall) {
            case 0: return this.http.get(this.URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
            case 1: return this.httpClient.post(this.URL, formBody, { headers: this.headerPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
            case 2: return this.http.delete(this.URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
            case 3: return this.httpClient.put(this.URL, formBody, { headers: this.headerPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
        }
    };
    ApiCallsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _getFullApi_service__WEBPACK_IMPORTED_MODULE_4__["getFullApi"], _functions_handleFunctions__WEBPACK_IMPORTED_MODULE_5__["handleFunction"]])
    ], ApiCallsService);
    return ApiCallsService;
}());



/***/ }),

/***/ "./src/app/common/services/ApiCalls/getFullApi.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/common/services/ApiCalls/getFullApi.service.ts ***!
  \****************************************************************/
/*! exports provided: getFullApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullApi", function() { return getFullApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_constants_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/constants/const */ "./src/app/common/constants/const.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var getFullApi = /** @class */ (function () {
    function getFullApi() {
        this.hostno = _common_constants_const__WEBPACK_IMPORTED_MODULE_1__["Consts"].URL;
        this.portno = _common_constants_const__WEBPACK_IMPORTED_MODULE_1__["Consts"].PORT_NUMBER;
        this.urlno = 'http://' + this.hostno + ':' + this.portno;
    }
    getFullApi.prototype.appendAPIwithIDS = function (api, noOfIDs, id1, id2, id3) {
        if (noOfIDs == 0) {
            return "" + (this.urlno + '/' + api);
        }
        if (noOfIDs == 1) {
            return this.urlno + '/' + api + "/" + id1;
        }
        if (noOfIDs == 2) {
            return this.urlno + '/' + api + "/" + id1 + "/" + id2;
        }
        if (noOfIDs == 3) {
            return this.urlno + '/' + api + "/" + id1 + "/" + id2 + "/" + id3;
        }
    };
    getFullApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], getFullApi);
    return getFullApi;
}());



/***/ }),

/***/ "./src/app/common/services/Data/handle-data.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/common/services/Data/handle-data.service.ts ***!
  \*************************************************************/
/*! exports provided: HandleDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleDataService", function() { return HandleDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HandleDataService = /** @class */ (function () {
    function HandleDataService() {
        this.Data = null;
        this.DataArray = [];
        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    HandleDataService.prototype.saveData = function (data) {
        this.Data = data;
        this.DataArray = [];
        console.log(this.Data);
    };
    HandleDataService.prototype.returnItems = function (data) {
        var _this = this;
        data.forEach(function (element, index) {
            if (element.quant != 0) {
                _this.DataArray.push(element);
            }
        });
        return this.DataArray;
    };
    HandleDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HandleDataService);
    return HandleDataService;
}());



/***/ }),

/***/ "./src/app/common/services/functions/handleFunctions.ts":
/*!**************************************************************!*\
  !*** ./src/app/common/services/functions/handleFunctions.ts ***!
  \**************************************************************/
/*! exports provided: handleFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleFunction", function() { return handleFunction; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

var handleFunction = /** @class */ (function () {
    function handleFunction() {
        this.yearNames = [];
        this.days = [];
        this.date = new Date();
        this.monthNames = [];
    }
    handleFunction.prototype.genaratemonthNames = function () {
        return this.monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
    };
    handleFunction.prototype.generateYears = function () {
        for (var i = 0; i < 100; i++) {
            this.yearNames.push(this.date.getFullYear() + i);
        }
        return this.yearNames;
    };
    handleFunction.prototype.generateDays = function () {
        for (var i = 1; i < 32; i++) {
            this.days.push(i);
        }
        return this.days;
    };
    handleFunction.prototype.getMonthNumber = function (month) {
        if (month == "January")
            return 1;
        if (month == "February")
            return 2;
        if (month == "March")
            return 3;
        if (month == "April")
            return 4;
        if (month == "May")
            return 5;
        if (month == "June")
            return 6;
        if (month == "July")
            return 7;
        if (month == "August")
            return 8;
        if (month == "September")
            return 9;
        if (month == "October")
            return 10;
        if (month == "November")
            return 11;
        if (month == "December")
            return 12;
    };
    handleFunction.prototype.getDate = function (day, monthno, year) {
        if (day < 10 && day > 0) {
            if (monthno < 10 && monthno > 0) {
                return year + "-0" + monthno + "-0" + day;
            }
            else {
                return year + "-" + monthno + "-0" + day;
            }
        }
        else {
            if (monthno < 10 && monthno > 0) {
                return year + "-0" + monthno + "-" + day;
            }
            else {
                return year + "-" + monthno + "-" + day;
            }
        }
    };
    handleFunction.prototype.createHeader = function () {
        this.headerPost = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        this.headerPost.append('Content-Type', 'application/x-www-form-urlencoded');
    };
    return handleFunction;
}());



/***/ }),

/***/ "./src/app/pages/Cart/cart-display/cart-display.component.css":
/*!********************************************************************!*\
  !*** ./src/app/pages/Cart/cart-display/cart-display.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-header{\n  background-color: orange;\n  color: white;\n  font-weight: bold;\n}\n\nbutton{\n    border-radius: 100px;\n    \n}\n\n.well{\n    border-color:#f5f5f5;\n    box-shadow: none;\n}"

/***/ }),

/***/ "./src/app/pages/Cart/cart-display/cart-display.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/Cart/cart-display/cart-display.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Srno</th>\n        <th scope=\"col\">Category</th>\n        <th scope=\"col\">Sub-Category</th>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Quantity</th>\n        <th scope=\"col\">Price</th>\n        <th scope=\"col\">Delete</th>\n\n      </tr>\n    </thead>\n    <tbody>\n\n      <tr *ngFor=\"let i of products;let j = index\">\n        <th scope=\"row\">{{j+1}}</th>\n        <td>{{i.category}}</td>\n        <td>{{i.subCategory}}</td>\n        <td>{{i.nameOfProduct}}</td>\n        <td>{{i.quantity}}</td>\n        <td>{{i.sellingPrice}}</td>\n        <td>\n          <button mat-raised-button type=\"button\" (click)=\"delete(i)\" class=\"btn-danger btn-sm btn-just-icon edit\">\n            <i class=\"material-icons\">delete</i>\n          </button>\n        </td>\n\n      </tr>\n      <tr>\n        <td>Total</td>\n        <td>{{Total}}</td>\n      </tr>\n    </tbody>\n  </table>\n  <div *ngIf=\"checkoutButton\">\n    <div>\n      <input type=\"text\" [(ngModel)]=\"customerName\">\n    </div>\n    <button class=\"btn btn-warning\" (click)=\"checkout()\">Checkout</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/Cart/cart-display/cart-display.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/Cart/cart-display/cart-display.component.ts ***!
  \*******************************************************************/
/*! exports provided: CartDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDisplayComponent", function() { return CartDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/services/ApiCalls/ApiCalls.service */ "./src/app/common/services/ApiCalls/ApiCalls.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_Data_handle_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/Data/handle-data.service */ "./src/app/common/services/Data/handle-data.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CartDisplayComponent = /** @class */ (function () {
    function CartDisplayComponent(apiCallservice, router, handledata) {
        this.apiCallservice = apiCallservice;
        this.router = router;
        this.handledata = handledata;
        this.show = false;
        this.checkoutButton = false;
        this.fetchData = function () {
            var _this = this;
            this.apiCallservice.handleData('Cart/getCart', 0, 0)
                .subscribe(function (res) {
                if (res.json().length != 0) {
                    _this.Total = _this.getTotal(res.json());
                    _this.checkoutButton = true;
                    _this.products = res.json();
                }
                else {
                    _this.Total = "No items in the Cart";
                    _this.checkoutButton = false;
                    _this.products = _this.handledata.Data;
                }
            });
        };
        this.delete = function (data) {
            var _this = this;
            if (confirm('Are you sure?')) {
                this.apiCallservice.handleData('Cart/deleteCartWholeItem', 2, 1, {}, data._id)
                    .subscribe(function (response) {
                    _this.fetchData();
                });
            }
        };
    }
    CartDisplayComponent.prototype.getTotal = function (data) {
        var total = 0;
        var newTotal = 0;
        data.forEach(function (element) {
            newTotal = (element.quantity * element.sellingPrice);
            total = total + newTotal;
        });
        return total;
    };
    CartDisplayComponent.prototype.showDatabyid = function (yo) {
        this.handledata.saveData(yo);
        this.show = true;
        this.router.navigate(['DashBoard/Information/NewProduct_Handler/NewProductUpdate']);
    };
    CartDisplayComponent.prototype.checkout = function () {
        var _this = this;
        this.apiCallservice.handleData('Store/deleteFinalStore', 1, 0)
            .subscribe(function (res) {
            console.log(res);
        });
        this.apiCallservice.handleData('Cart/getCart', 0, 0)
            .subscribe(function (res) {
            _this.newAuthor = res.json();
            var rows = [];
            var columns = [
                { title: "Category", dataKey: "category" },
                { title: "SubCategory", dataKey: "subCategory" },
                { title: "Name", dataKey: "nameOfProduct" },
                { title: "Quantity", dataKey: "quantity" },
                { title: "Price", dataKey: "sellingPrice" },
            ];
            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__({
                orientation: 'landscape',
                unit: 'in',
                format: [15, 10]
            });
            doc.setFontSize(40);
            doc.setFont('Arial');
            doc.setFontType('bold');
            doc.setTextColor(255, 0, 0);
            doc.setLineWidth(0.1);
            doc.line(0, 2.2, 15, 2.2);
            // var doc = new jsPDF('p', 'pt');
            doc.setFontSize(60);
            doc.setTextColor(0, 0, 0);
            doc.setLineWidth(0.1);
            doc.line(0, 4.2, 15, 4.2);
            doc.setFontSize(16);
            doc.addPage();
            var i = 1;
            for (var key in _this.newAuthor) {
                rows = rows.concat([Object.assign({}, {
                        "category": _this.newAuthor[key].category,
                        "subCategory": _this.newAuthor[key].subCategory,
                        "nameOfProduct": _this.newAuthor[key].nameOfProduct,
                        "quantity": _this.newAuthor[key].quantity,
                        "sellingPrice": _this.newAuthor[key].sellingPrice
                    })]);
                i++;
            }
            doc.autoTable(columns, rows);
            doc.save(_this.customerName + ".pdf");
            _this.apiCallservice.handleData('Cart/deleteCartFull', 2, 0)
                .subscribe(function (res) {
                _this.router.navigate(['DashBoard/Information/Shop_Handler/ShopDisplay']);
            });
        });
    };
    CartDisplayComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    CartDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart-display',
            template: __webpack_require__(/*! ./cart-display.component.html */ "./src/app/pages/Cart/cart-display/cart-display.component.html"),
            styles: [__webpack_require__(/*! ./cart-display.component.css */ "./src/app/pages/Cart/cart-display/cart-display.component.css")]
        }),
        __metadata("design:paramtypes", [_common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _common_services_Data_handle_data_service__WEBPACK_IMPORTED_MODULE_3__["HandleDataService"]])
    ], CartDisplayComponent);
    return CartDisplayComponent;
}());



/***/ }),

/***/ "./src/app/pages/Category/category-add/category-add.component.css":
/*!************************************************************************!*\
  !*** ./src/app/pages/Category/category-add/category-add.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\n    border-radius: 100px;\n}\n\n"

/***/ }),

/***/ "./src/app/pages/Category/category-add/category-add.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/Category/category-add/category-add.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\n\n  <form [formGroup]=\"myFormGroup\" (ngSubmit)=\"storeCategoryData(myFormGroup)\" submitted=true enctype=\"multipart/form data\"\n    action=\"/\" name=\"myform\" id=\"myform\">\n    <!-- value is not going in ts file    ,nopid.value-->\n\n    <!--Name-->\n    <div class=\"form-group row\">\n\n      <div class=\"col-xs-3\">\n        <input type=\"text\" id=\"category\" class=\"form-control\" formControlName=\"category\" placeholder=\"Category Name\">\n      </div>\n      <div class=\"col-xs-2\">\n        <div [hidden]=\"myFormGroup.controls.category.valid\">\n          <font color=\"red\">\n            <span class=\"glyphicon glyphicon-remove\"></span>\n          </font>\n        </div>\n      </div>\n    </div>\n    <!--Name-->\n\n\n\n    <div class=\"row\">\n      <div class=\"form-group\" class=\"col-xs-2\"></div>\n      <div class=\"form-group\" class=\"col-xs-1\">\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]='!myFormGroup.valid'>\n          <i class=\"material-icons\">send</i>\n        </button>\n      </div>\n      <div class=\"col-xs-1\">\n        <button type=\"button\" class=\"btn btn-success\">\n          <i class=\"material-icons\">keyboard_backspace</i>\n        </button>\n      </div>\n\n    </div>\n\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/Category/category-add/category-add.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/Category/category-add/category-add.component.ts ***!
  \***********************************************************************/
/*! exports provided: CategoryAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryAddComponent", function() { return CategoryAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services/ApiCalls/ApiCalls.service */ "./src/app/common/services/ApiCalls/ApiCalls.service.ts");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category */ "./src/app/pages/Category/category-add/category.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CategoryAddComponent = /** @class */ (function () {
    function CategoryAddComponent(router, apiCallservice, http, formBuilder, _location) {
        this.router = router;
        this.apiCallservice = apiCallservice;
        this.http = http;
        this.formBuilder = formBuilder;
        this._location = _location;
        this.submitted = false;
    }
    CategoryAddComponent.prototype.ngOnInit = function () {
        this.model = new _category__WEBPACK_IMPORTED_MODULE_5__["category"](this.name);
        this.myFormGroup = this.formBuilder.group({
            category: [this.model.category, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    CategoryAddComponent.prototype.storeCategoryData = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.apiCallservice.handleData('Category/addCategory', 1, 0, value)
            .subscribe(function (x) {
            _this.response = x;
            _this._location.back();
        });
    };
    CategoryAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-add',
            template: __webpack_require__(/*! ./category-add.component.html */ "./src/app/pages/Category/category-add/category-add.component.html"),
            styles: [__webpack_require__(/*! ./category-add.component.css */ "./src/app/pages/Category/category-add/category-add.component.css")],
            providers: [_common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_4__["ApiCallsService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_4__["ApiCallsService"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], CategoryAddComponent);
    return CategoryAddComponent;
}());



/***/ }),

/***/ "./src/app/pages/Category/category-add/category.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/Category/category-add/category.ts ***!
  \*********************************************************/
/*! exports provided: category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "category", function() { return category; });
var category = /** @class */ (function () {
    function category(category) {
        this.category = category;
    }
    return category;
}());



/***/ }),

/***/ "./src/app/pages/Category/category-disp/category-disp.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/pages/Category/category-disp/category-disp.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-header{\n  background-color: orange;\n  color: white;\n  font-weight: bold;\n}\n\nbutton{\n    border-radius: 100px;\n    \n}\n\n.well{\n    border-color:#f5f5f5;\n    box-shadow: none;\n}"

/***/ }),

/***/ "./src/app/pages/Category/category-disp/category-disp.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/Category/category-disp/category-disp.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Srno</th>\n        <th scope=\"col\">Category</th>\n        <th scope=\"col\">Delete</th>\n        <th scope=\"col\">Edit</th>\n\n      </tr>\n    </thead>\n    <tbody>\n\n      <tr *ngFor=\"let i of categories;let j = index\">\n        <th scope=\"row\">{{j+1}}</th>\n        <td>{{i.category}}</td>\n        <td>\n          <button mat-raised-button type=\"button\" (click)=\"deleteCategory(i._id)\" class=\"btn-danger btn-sm btn-just-icon edit\">\n            <i class=\"material-icons\">delete</i>\n          </button>\n        </td>\n        <td>\n          <button mat-raised-button type=\"button\" (click)=\"showDatabyid(i)\" class=\"btn-primary btn-sm btn-just-icon edit\">\n            <i class=\"material-icons\">edit</i>\n          </button>\n        </td>\n\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/pages/Category/category-disp/category-disp.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/Category/category-disp/category-disp.component.ts ***!
  \*************************************************************************/
/*! exports provided: CategoryDispComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDispComponent", function() { return CategoryDispComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/services/ApiCalls/ApiCalls.service */ "./src/app/common/services/ApiCalls/ApiCalls.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_Data_handle_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/Data/handle-data.service */ "./src/app/common/services/Data/handle-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryDispComponent = /** @class */ (function () {
    function CategoryDispComponent(apiCallservice, router, handledata) {
        this.apiCallservice = apiCallservice;
        this.router = router;
        this.handledata = handledata;
        this.show = false;
        this.fetchData = function () {
            var _this = this;
            this.apiCallservice.handleData('Category/getCategory', 0, 0)
                .subscribe(function (res) {
                _this.categories = res.json();
            });
        };
        this.deleteCategory = function (id) {
            var _this = this;
            if (confirm('Are you sure?')) {
                this.apiCallservice.handleData('Category/deleteCategory', 2, 1, {}, id)
                    .subscribe(function (response) {
                    _this.fetchData();
                });
            }
        };
    }
    CategoryDispComponent.prototype.showDatabyid = function (yo) {
        this.handledata.saveData(yo);
        this.show = true;
        this.router.navigate(['DashBoard/Information/Category_Handler/CategoryUpdate']);
    };
    CategoryDispComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    CategoryDispComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-disp',
            template: __webpack_require__(/*! ./category-disp.component.html */ "./src/app/pages/Category/category-disp/category-disp.component.html"),
            styles: [__webpack_require__(/*! ./category-disp.component.css */ "./src/app/pages/Category/category-disp/category-disp.component.css")],
            providers: [_common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallsService"]]
        }),
        __metadata("design:paramtypes", [_common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _common_services_Data_handle_data_service__WEBPACK_IMPORTED_MODULE_3__["HandleDataService"]])
    ], CategoryDispComponent);
    return CategoryDispComponent;
}());



/***/ }),

/***/ "./src/app/pages/Category/category-handler/category-handler.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/pages/Category/category-handler/category-handler.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-head{\n  background-color: orange;\n  color:white;\n  padding: 1%;\n      border-radius: 100px;\n      text-align: center;\n}\n\nbutton{\n    border-radius: 100px;\n    margin-left: 5px;\n    margin-right: 5px;\n}\n\n.well{\n    border-color:#f5f5f5;\n    box-shadow: none;\n}\n\n\n"

/***/ }),

/***/ "./src/app/pages/Category/category-handler/category-handler.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/Category/category-handler/category-handler.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\n  <div class=\"header-head\">\n    <h1>Category</h1>\n    <button mat-raised-button class=\"btn-danger btn-sm btn-just-icon pull-right\" routerLink=\"CategoryAdd\">\n      <i class=\"material-icons\">add</i>\n    </button>\n    <button mat-raised-button class=\"btn-success btn-sm btn-just-icon pull-right\" routerLink=\"CategoryDisp\">\n      <i class=\"material-icons\">desktop_windows</i>\n    </button>\n  </div>\n  <br/>\n  <div>\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/Category/category-handler/category-handler.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/Category/category-handler/category-handler.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CategoryHandlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryHandlerComponent", function() { return CategoryHandlerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoryHandlerComponent = /** @class */ (function () {
    function CategoryHandlerComponent() {
    }
    CategoryHandlerComponent.prototype.ngOnInit = function () {
    };
    CategoryHandlerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-handler',
            template: __webpack_require__(/*! ./category-handler.component.html */ "./src/app/pages/Category/category-handler/category-handler.component.html"),
            styles: [__webpack_require__(/*! ./category-handler.component.css */ "./src/app/pages/Category/category-handler/category-handler.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoryHandlerComponent);
    return CategoryHandlerComponent;
}());



/***/ }),

/***/ "./src/app/pages/Category/category-update/category-update.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/pages/Category/category-update/category-update.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/Category/category-update/category-update.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/Category/category-update/category-update.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\n\n  <form [formGroup]=\"myFormGroup\" (ngSubmit)=\"change(myFormGroup)\" submitted=true enctype=\"multipart/form data\" action=\"/\"\n    name=\"myform\" id=\"myform\">\n    <!-- value is not going in ts file    ,nopid.value-->\n\n    <!--Name-->\n    <div class=\"form-group row\">\n\n      <div class=\"col-xs-3\">\n        <input type=\"text\" id=\"category\" class=\"form-control\" formControlName=\"category\" placeholder=\"Category Name\">\n      </div>\n      <div class=\"col-xs-2\">\n        <div [hidden]=\"myFormGroup.controls.category.valid\">\n          <font color=\"red\">\n            <span class=\"glyphicon glyphicon-remove\"></span>\n          </font>\n        </div>\n      </div>\n    </div>\n    <!--Name-->\n\n\n\n    <div class=\"row\">\n      <div class=\"form-group\" class=\"col-xs-2\"></div>\n      <div class=\"form-group\" class=\"col-xs-1\">\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]='!myFormGroup.valid'>\n          <i class=\"material-icons\">send</i>\n        </button>\n      </div>\n      <div class=\"col-xs-1\">\n        <button type=\"button\" class=\"btn btn-success\">\n          <i class=\"material-icons\">keyboard_backspace</i>\n        </button>\n      </div>\n\n    </div>\n\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/Category/category-update/category-update.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/Category/category-update/category-update.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CategoryUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryUpdateComponent", function() { return CategoryUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_Data_handle_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/services/Data/handle-data.service */ "./src/app/common/services/Data/handle-data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/ApiCalls/ApiCalls.service */ "./src/app/common/services/ApiCalls/ApiCalls.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryUpdateComponent = /** @class */ (function () {
    function CategoryUpdateComponent(handledata, _location, formBuilder, apiCallservice) {
        this.handledata = handledata;
        this._location = _location;
        this.formBuilder = formBuilder;
        this.apiCallservice = apiCallservice;
        this.show = false;
        this.change = function (data) {
            var _this = this;
            data.value.id = this.handledata.Data._id;
            this.apiCallservice.handleData('Category/updateCategory', 3, 0, data.value)
                .subscribe(function (response) {
                _this.show = !_this.show;
                _this._location.back();
            });
        };
    }
    CategoryUpdateComponent.prototype.ngOnInit = function () {
        this.myFormGroup = this.formBuilder.group({
            category: this.handledata.Data.category
        });
    };
    CategoryUpdateComponent.prototype.back = function () {
        this.show = !this.show;
        this._location.back();
    };
    CategoryUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-update',
            template: __webpack_require__(/*! ./category-update.component.html */ "./src/app/pages/Category/category-update/category-update.component.html"),
            styles: [__webpack_require__(/*! ./category-update.component.css */ "./src/app/pages/Category/category-update/category-update.component.css")],
            providers: [_common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallsService"]]
        }),
        __metadata("design:paramtypes", [_common_services_Data_handle_data_service__WEBPACK_IMPORTED_MODULE_1__["HandleDataService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallsService"]])
    ], CategoryUpdateComponent);
    return CategoryUpdateComponent;
}());



/***/ }),

/***/ "./src/app/pages/NewProducts/new-product-add/new-product-add.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/NewProducts/new-product-add/new-product-add.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\n    border-radius: 100px;\n}\n\n"

/***/ }),

/***/ "./src/app/pages/NewProducts/new-product-add/new-product-add.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/NewProducts/new-product-add/new-product-add.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\n\n  <form [formGroup]=\"myFormGroup\" (ngSubmit)=\"store(myFormGroup)\" submitted=true enctype=\"multipart/form data\" action=\"/\" name=\"myform\"\n    id=\"myform\">\n    <!-- value is not going in ts file    ,nopid.value-->\n    <!--Date-->\n    <div class=\"form-group row\">\n\n      <div class=\"col-xs-3\">\n        <input type=\"date\" id=\"date\" class=\"form-control \" formControlName=\"date\">\n      </div>\n\n      <div class=\"col-xs-1\">\n        <div [hidden]=\"myFormGroup.controls.date.valid\">\n          <font color=\"red\">\n            <span class=\"glyphicon glyphicon-remove\"></span>\n          </font>\n        </div>\n      </div>\n\n    </div>\n    <!--Date-->\n    <!--Category-->\n    <div class=\"form-group row\">\n\n      <div class=\"col-xs-3\">\n        <select id=\"category\" class=\"form-control \" formControlName=\"category\" (change)=\"getSubCategories()\">\n          <option> Category</option>\n          <option *ngFor=\"let i of categorylist\">{{i.category}}</option>\n        </select>\n      </div>\n\n      <div class=\"col-xs-1\">\n        <div [hidden]=\"myFormGroup.controls.category.valid\">\n          <font color=\"red\">\n            <span class=\"glyphicon glyphicon-remove\"></span>\n          </font>\n        </div>\n      </div>\n\n    </div>\n    <!--Category-->\n\n    <!--SubCategory-->\n    <div class=\"form-group row\" *ngIf=\"subCategoryToggle\">\n      <div class=\"col-xs-3\">\n        <select id=\"subCategory\" class=\"form-control \" formControlName=\"subCategory\" (change)=\"OtherDataToggleFunction()\">\n          <option> Sub Category</option>\n          <option *ngFor=\" let i of subcategorylist \">{{i.subCategory}}</option>\n        </select>\n      </div>\n      <div class=\"col-xs-2 \">\n        <div [hidden]=\"myFormGroup.controls.subCategory.valid \">\n          <font color=\"red \">\n            <span class=\"glyphicon glyphicon-remove \"></span>\n          </font>\n        </div>\n      </div>\n    </div>\n    <!--SubCategory-->\n\n    <!-- OtherData -->\n    <div *ngIf=\"OtherDataToggle\">\n      <!-- NameOfProduct -->\n      <div class=\"form-group row\">\n        <div class=\"col-xs-3\">\n          <input type=\"text\" id=\"nameOfProduct\" class=\"form-control\" formControlName=\"nameOfProduct\" placeholder=\"Name Of Product\">\n        </div>\n        <div class=\"col-xs-1\">\n          <div [hidden]=\"myFormGroup.controls.nameOfProduct.valid\">\n            <font color=\"red\">\n              <span class=\"glyphicon glyphicon-remove\"></span>\n            </font>\n          </div>\n        </div>\n      </div>\n\n      <!-- NameOfProduct -->\n\n      <!-- Quantity -->\n      <div class=\"form-group row\">\n        <div class=\"col-xs-3\">\n          <input type=\"number\" id=\"quantity\" class=\"form-control\" formControlName=\"quantity\" placeholder=\"Quantity\">\n        </div>\n        <div class=\"col-xs-1\">\n          <div [hidden]=\"myFormGroup.controls.quantity.valid\">\n            <font color=\"red\">\n              <span class=\"glyphicon glyphicon-remove\"></span>\n            </font>\n          </div>\n        </div>\n      </div>\n\n      <!-- Quantity -->\n\n      <!-- CostPrice -->\n      <div class=\"form-group row\">\n        <div class=\"col-xs-3\">\n          <input type=\"number\" id=\"costPrice\" class=\"form-control\" formControlName=\"costPrice\" placeholder=\"CostPrice\">\n        </div>\n        <div class=\"col-xs-1\">\n          <div [hidden]=\"myFormGroup.controls.costPrice.valid\">\n            <font color=\"red\">\n              <span class=\"glyphicon glyphicon-remove\"></span>\n            </font>\n          </div>\n        </div>\n      </div>\n\n      <!-- CostPrice -->\n\n      <!-- SellingPrice -->\n      <div class=\"form-group row\">\n        <div class=\"col-xs-3\">\n          <input type=\"number\" id=\"sellingPrice\" class=\"form-control\" formControlName=\"sellingPrice\" placeholder=\"Selling Price\">\n        </div>\n        <div class=\"col-xs-1\">\n          <div [hidden]=\"myFormGroup.controls.sellingPrice.valid\">\n            <font color=\"red\">\n              <span class=\"glyphicon glyphicon-remove\"></span>\n            </font>\n          </div>\n        </div>\n      </div>\n\n      <!-- SellingPrice -->\n    </div>\n    <!-- OtherData -->\n\n\n\n    <div class=\"row \">\n      <div class=\"form-group \" class=\"col-xs-2 \"></div>\n      <div class=\"form-group \" class=\"col-xs-1 \">\n        <button type=\"submit \" class=\"btn btn-primary \" [disabled]='!myFormGroup.valid'>\n          <i class=\"material-icons \">send</i>\n        </button>\n      </div>\n      <div class=\"col-xs-1 \">\n        <button type=\"button \" class=\"btn btn-success\">\n          <i class=\"material-icons \">keyboard_backspace</i>\n        </button>\n      </div>\n\n    </div>\n\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/NewProducts/new-product-add/new-product-add.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/NewProducts/new-product-add/new-product-add.component.ts ***!
  \********************************************************************************/
/*! exports provided: NewProductAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductAddComponent", function() { return NewProductAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/ApiCalls/ApiCalls.service */ "./src/app/common/services/ApiCalls/ApiCalls.service.ts");
/* harmony import */ var _newproduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newproduct */ "./src/app/pages/NewProducts/new-product-add/newproduct.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NewProductAddComponent = /** @class */ (function () {
    function NewProductAddComponent(router, handleservice, apiCallservice, formBuilder, _location) {
        this.router = router;
        this.handleservice = handleservice;
        this.apiCallservice = apiCallservice;
        this.formBuilder = formBuilder;
        this._location = _location;
        this.submitted = false;
        this.subCategoryToggle = false;
        this.OtherDataToggle = false;
    }
    NewProductAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model = new _newproduct__WEBPACK_IMPORTED_MODULE_4__["newproduct"](this.date, this.category, this.subCategory, this.nameOfProduct, this.quantity, this.costPrice, this.sellingPrice);
        this.myFormGroup = this.formBuilder.group({
            date: [this.model.date, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            category: [this.model.category, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            subCategory: [this.model.subCategory, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nameOfProduct: [this.model.nameOfProduct, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            quantity: [this.model.quantity, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            costPrice: [this.model.costPrice, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sellingPrice: [this.model.sellingPrice, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.apiCallservice.handleData('Category/getCategory', 0, 0)
            .subscribe(function (res) {
            _this.categorylist = res.json();
        });
    };
    NewProductAddComponent.prototype.getSubCategories = function () {
        var _this = this;
        this.apiCallservice.handleData('SubCategory/getSubCategorybyName', 0, 1, {}, this.myFormGroup.value.category)
            .subscribe(function (res) {
            _this.subcategorylist = res.json();
            _this.subCategoryToggle = true;
        });
    };
    NewProductAddComponent.prototype.OtherDataToggleFunction = function () {
        this.OtherDataToggle = true;
    };
    NewProductAddComponent.prototype.store = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.handleservice.handleData('NewProduct/addNewProduct', 1, 0, value)
            .subscribe(function (x) {
            _this.response = x;
        });
        this.valueStore = { 'category': value.category, 'subCategory': value.subCategory, 'nameOfProduct': value.nameOfProduct, 'quantity': value.quantity, 'sellingPrice': value.sellingPrice };
        this.handleservice.handleData('Store/addStore', 1, 0, this.valueStore)
            .subscribe(function (x) {
            _this.response = x;
            _this._location.back();
        });
    };
    NewProductAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-product-add',
            template: __webpack_require__(/*! ./new-product-add.component.html */ "./src/app/pages/NewProducts/new-product-add/new-product-add.component.html"),
            styles: [__webpack_require__(/*! ./new-product-add.component.css */ "./src/app/pages/NewProducts/new-product-add/new-product-add.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallsService"],
            _common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], NewProductAddComponent);
    return NewProductAddComponent;
}());



/***/ }),

/***/ "./src/app/pages/NewProducts/new-product-add/newproduct.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/NewProducts/new-product-add/newproduct.ts ***!
  \*****************************************************************/
/*! exports provided: newproduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newproduct", function() { return newproduct; });
var newproduct = /** @class */ (function () {
    function newproduct(date, category, subCategory, nameOfProduct, quantity, costPrice, sellingPrice) {
        this.date = date;
        this.category = category;
        this.subCategory = subCategory;
        this.nameOfProduct = nameOfProduct;
        this.quantity = quantity;
        this.costPrice = costPrice;
        this.sellingPrice = sellingPrice;
    }
    return newproduct;
}());



/***/ }),

/***/ "./src/app/pages/NewProducts/new-product-display/new-product-display.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/NewProducts/new-product-display/new-product-display.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-header{\n  background-color: orange;\n  color: white;\n  font-weight: bold;\n}\n\nbutton{\n    border-radius: 100px;\n    \n}\n\n.well{\n    border-color:#f5f5f5;\n    box-shadow: none;\n}"

/***/ }),

/***/ "./src/app/pages/NewProducts/new-product-display/new-product-display.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/NewProducts/new-product-display/new-product-display.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Srno</th>\n        <th scope=\"col\">Date</th>\n        <th scope=\"col\">Category</th>\n        <th scope=\"col\">SubCategory</th>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Quantity</th>\n        <th scope=\"col\">Cost Price</th>\n        <th scope=\"col\">Selling Price</th>\n        <th scope=\"col\">Delete</th>\n        <th scope=\"col\">Edit</th>\n\n      </tr>\n    </thead>\n    <tbody>\n\n      <tr *ngFor=\"let i of categories;let j = index\">\n        <th scope=\"row\">{{j+1}}</th>\n        <td>{{i.date|date:'dd-MM-yyyy'}}</td>\n        <td>{{i.category}}</td>\n        <td>{{i.subCategory}}</td>\n        <td>{{i.nameOfProduct}}</td>\n        <td>{{i.quantity}}</td>\n        <td>{{i.costPrice}}</td>\n        <td>{{i.sellingPrice}}</td>\n        <td>\n          <button mat-raised-button type=\"button\" (click)=\"delete(i)\" class=\"btn-danger btn-sm btn-just-icon edit\">\n            <i class=\"material-icons\">delete</i>\n          </button>\n        </td>\n        <td>\n          <button mat-raised-button type=\"button\" (click)=\"showDatabyid(i)\" class=\"btn-primary btn-sm btn-just-icon edit\">\n            <i class=\"material-icons\">edit</i>\n          </button>\n        </td>\n\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/pages/NewProducts/new-product-display/new-product-display.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/NewProducts/new-product-display/new-product-display.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NewProductDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductDisplayComponent", function() { return NewProductDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/services/ApiCalls/ApiCalls.service */ "./src/app/common/services/ApiCalls/ApiCalls.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_Data_handle_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/Data/handle-data.service */ "./src/app/common/services/Data/handle-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewProductDisplayComponent = /** @class */ (function () {
    function NewProductDisplayComponent(apiCallservice, router, handledata) {
        this.apiCallservice = apiCallservice;
        this.router = router;
        this.handledata = handledata;
        this.show = false;
        this.fetchData = function () {
            var _this = this;
            this.apiCallservice.handleData('NewProduct/getNewProduct', 0, 0)
                .subscribe(function (res) {
                _this.categories = res.json();
            });
        };
        this.delete = function (data) {
            var _this = this;
            if (confirm('Are you sure?')) {
                this.apiCallservice.handleData('NewProduct/deleteNewProduct', 2, 1, {}, data._id)
                    .subscribe(function (response) {
                    console.log(response);
                    _this.fetchData();
                });
                this.valueStore = { 'category': data.category, 'subCategory': data.subCategory, 'nameOfProduct': data.nameOfProduct, 'quantity': data.quantity };
                console.log(this.valueStore);
                this.apiCallservice.handleData('Store/deleteStore', 1, 0, this.valueStore) //delete from here
                    .subscribe(function (x) {
                    _this.response = x;
                    _this.fetchData();
                });
            }
        };
    }
    NewProductDisplayComponent.prototype.showDatabyid = function (yo) {
        this.handledata.saveData(yo);
        this.show = true;
        this.router.navigate(['DashBoard/Information/NewProduct_Handler/NewProductUpdate']);
    };
    NewProductDisplayComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    NewProductDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-product-display',
            template: __webpack_require__(/*! ./new-product-display.component.html */ "./src/app/pages/NewProducts/new-product-display/new-product-display.component.html"),
            styles: [__webpack_require__(/*! ./new-product-display.component.css */ "./src/app/pages/NewProducts/new-product-display/new-product-display.component.css")]
        }),
        __metadata("design:paramtypes", [_common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _common_services_Data_handle_data_service__WEBPACK_IMPORTED_MODULE_3__["HandleDataService"]])
    ], NewProductDisplayComponent);
    return NewProductDisplayComponent;
}());



/***/ }),

/***/ "./src/app/pages/NewProducts/new-product-handler/new-product-handler.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/NewProducts/new-product-handler/new-product-handler.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-head{\n  background-color: orange;\n  color:white;\n  padding: 1%;\n      border-radius: 100px;\n      text-align: center;\n}\n\nbutton{\n    border-radius: 100px;\n    margin-left: 5px;\n    margin-right: 5px;\n}\n\n.well{\n    border-color:#f5f5f5;\n    box-shadow: none;\n}\n\n\n"

/***/ }),

/***/ "./src/app/pages/NewProducts/new-product-handler/new-product-handler.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/NewProducts/new-product-handler/new-product-handler.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\n  <div class=\"header-head\">\n    <h1>New Product</h1>\n    <button mat-raised-button class=\"btn-danger btn-sm btn-just-icon pull-right\" routerLink=\"NewProductAdd\">\n      <i class=\"material-icons\">add</i>\n    </button>\n    <button mat-raised-button class=\"btn-success btn-sm btn-just-icon pull-right\" routerLink=\"NewProductDisplay\">\n      <i class=\"material-icons\">desktop_windows</i>\n    </button>\n  </div>\n  <br/>\n  <div>\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/NewProducts/new-product-handler/new-product-handler.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/NewProducts/new-product-handler/new-product-handler.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NewProductHandlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductHandlerComponent", function() { return NewProductHandlerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewProductHandlerComponent = /** @class */ (function () {
    function NewProductHandlerComponent() {
    }
    NewProductHandlerComponent.prototype.ngOnInit = function () {
    };
    NewProductHandlerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-product-handler',
            template: __webpack_require__(/*! ./new-product-handler.component.html */ "./src/app/pages/NewProducts/new-product-handler/new-product-handler.component.html"),
            styles: [__webpack_require__(/*! ./new-product-handler.component.css */ "./src/app/pages/NewProducts/new-product-handler/new-product-handler.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewProductHandlerComponent);
    return NewProductHandlerComponent;
}());



/***/ }),

/***/ "./src/app/pages/NewProducts/new-product-update/new-product-update.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/NewProducts/new-product-update/new-product-update.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/NewProducts/new-product-update/new-product-update.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/NewProducts/new-product-update/new-product-update.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  new-product-update works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/NewProducts/new-product-update/new-product-update.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/NewProducts/new-product-update/new-product-update.component.ts ***!
  \**************************************************************************************/
/*! exports provided: NewProductUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductUpdateComponent", function() { return NewProductUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/services/ApiCalls/ApiCalls.service */ "./src/app/common/services/ApiCalls/ApiCalls.service.ts");
/* harmony import */ var _common_services_Data_handle_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/Data/handle-data.service */ "./src/app/common/services/Data/handle-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewProductUpdateComponent = /** @class */ (function () {
    function NewProductUpdateComponent(apiCallservice, handledata) {
        this.apiCallservice = apiCallservice;
        this.handledata = handledata;
    }
    NewProductUpdateComponent.prototype.ngOnInit = function () {
        console.log(this.handledata.Data);
    };
    NewProductUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-product-update',
            template: __webpack_require__(/*! ./new-product-update.component.html */ "./src/app/pages/NewProducts/new-product-update/new-product-update.component.html"),
            styles: [__webpack_require__(/*! ./new-product-update.component.css */ "./src/app/pages/NewProducts/new-product-update/new-product-update.component.css")]
        }),
        __metadata("design:paramtypes", [_common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallsService"],
            _common_services_Data_handle_data_service__WEBPACK_IMPORTED_MODULE_2__["HandleDataService"]])
    ], NewProductUpdateComponent);
    return NewProductUpdateComponent;
}());



/***/ }),

/***/ "./src/app/pages/Shop/shop-display/shop-display.component.css":
/*!********************************************************************!*\
  !*** ./src/app/pages/Shop/shop-display/shop-display.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-header{\n  background-color: orange;\n  color: white;\n  font-weight: bold;\n}\n\nbutton{\n    border-radius: 100px;\n    \n}\n\n.well{\n    border-color:#f5f5f5;\n    box-shadow: none;\n}"

/***/ }),

/***/ "./src/app/pages/Shop/shop-display/shop-display.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/Shop/shop-display/shop-display.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Srno</th>\n        <th scope=\"col\">Category</th>\n        <th scope=\"col\">SubCategory</th>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Quantity</th>\n        <th scope=\"col\">Selling Price</th>\n        <th scope=\"col\">Add</th>\n\n      </tr>\n    </thead>\n    <tbody>\n\n      <tr *ngFor=\"let i of categories;let j = index\">\n        <th scope=\"row\">{{j+1}}</th>\n        <td>{{i.category}}</td>\n        <td>{{i.subCategory}}</td>\n        <td>{{i.nameOfProduct}}</td>\n        <td>{{i.quantity}}</td>\n        <td>{{i.sellingPrice}}</td>\n        <td>\n\n          <button mat-raised-button type=\"button\" (click)=\"removeQuantity(i)\" class=\"btn-danger btn-sm btn-just-icon edit\" [disabled]=\"1>i.quant \">\n\n            <i class=\"material-icons\">remove</i>\n          </button>\n\n          {{i.quant}}\n          <button mat-raised-button type=\"button\" (click)=\"addQuantity(i)\" class=\"btn-success btn-sm btn-just-icon edit\" [disabled]=\"i.quant===i.quantity\">\n            <i class=\"material-icons\">add</i>\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"row\">\n    <button class=\"btn btn-warning\" (click)=\"checkout()\">Checkout</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/Shop/shop-display/shop-display.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/Shop/shop-display/shop-display.component.ts ***!
  \*******************************************************************/
/*! exports provided: ShopDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopDisplayComponent", function() { return ShopDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/services/ApiCalls/ApiCalls.service */ "./src/app/common/services/ApiCalls/ApiCalls.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_Data_handle_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/Data/handle-data.service */ "./src/app/common/services/Data/handle-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShopDisplayComponent = /** @class */ (function () {
    function ShopDisplayComponent(apiCallservice, router, handledata) {
        this.apiCallservice = apiCallservice;
        this.router = router;
        this.handledata = handledata;
        this.show = false;
        this.quantity = 1;
        this.quant = 0;
        this.fetchData = function () {
            var _this = this;
            this.apiCallservice.handleData('Store/getStore', 0, 0)
                .subscribe(function (res) {
                _this.categories = res.json();
            });
        };
    }
    ShopDisplayComponent.prototype.addQuantity = function (value) {
        var _this = this;
        value.quant = value.quant + 1;
        this.arr = { "category": value.category, "subCategory": value.subCategory, "nameOfProduct": value.nameOfProduct, "sellingPrice": value.sellingPrice };
        this.apiCallservice.handleData('Cart/addCart', 1, 0, this.arr)
            .subscribe(function (x) {
            _this.response = x;
        });
    };
    ShopDisplayComponent.prototype.removeQuantity = function (value) {
        var _this = this;
        value.quant = value.quant - 1;
        this.arr = { "category": value.category, "subCategory": value.subCategory, "nameOfProduct": value.nameOfProduct, "sellingPrice": value.sellingPrice };
        this.apiCallservice.handleData('Cart/deleteCart', 1, 0, this.arr)
            .subscribe(function (x) {
            _this.response = x;
        });
    };
    ShopDisplayComponent.prototype.checkout = function () {
        // this.realCategories = this.handledata.returnItems(this.categories);
        this.router.navigate(['DashBoard/Cart']);
    };
    ShopDisplayComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    ShopDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shop-display',
            template: __webpack_require__(/*! ./shop-display.component.html */ "./src/app/pages/Shop/shop-display/shop-display.component.html"),
            styles: [__webpack_require__(/*! ./shop-display.component.css */ "./src/app/pages/Shop/shop-display/shop-display.component.css")],
            providers: [_common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallsService"]]
        }),
        __metadata("design:paramtypes", [_common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _common_services_Data_handle_data_service__WEBPACK_IMPORTED_MODULE_3__["HandleDataService"]])
    ], ShopDisplayComponent);
    return ShopDisplayComponent;
}());



/***/ }),

/***/ "./src/app/pages/Shop/shop-handler/shop-handler.component.css":
/*!********************************************************************!*\
  !*** ./src/app/pages/Shop/shop-handler/shop-handler.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-head{\n  background-color: orange;\n  color:white;\n  padding: 1%;\n      border-radius: 100px;\n      text-align: center;\n}\n\nbutton{\n    border-radius: 100px;\n    margin-left: 5px;\n    margin-right: 5px;\n}\n\n.well{\n    border-color:#f5f5f5;\n    box-shadow: none;\n}\n\n\n"

/***/ }),

/***/ "./src/app/pages/Shop/shop-handler/shop-handler.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/Shop/shop-handler/shop-handler.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\n  <div class=\"header-head\">\n    <h1>Shop</h1>\n    <button mat-raised-button class=\"btn-success btn-sm btn-just-icon pull-right\" routerLink=\"ShopDisplay\">\n      <i class=\"material-icons\">desktop_windows</i>\n    </button>\n  </div>\n  <br/>\n  <div>\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/Shop/shop-handler/shop-handler.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/Shop/shop-handler/shop-handler.component.ts ***!
  \*******************************************************************/
/*! exports provided: ShopHandlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopHandlerComponent", function() { return ShopHandlerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShopHandlerComponent = /** @class */ (function () {
    function ShopHandlerComponent() {
    }
    ShopHandlerComponent.prototype.ngOnInit = function () {
    };
    ShopHandlerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shop-handler',
            template: __webpack_require__(/*! ./shop-handler.component.html */ "./src/app/pages/Shop/shop-handler/shop-handler.component.html"),
            styles: [__webpack_require__(/*! ./shop-handler.component.css */ "./src/app/pages/Shop/shop-handler/shop-handler.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShopHandlerComponent);
    return ShopHandlerComponent;
}());



/***/ }),

/***/ "./src/app/pages/Store/store-display/store-display.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/Store/store-display/store-display.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-header{\n  background-color: orange;\n  color: white;\n  font-weight: bold;\n}\n\nbutton{\n    border-radius: 100px;\n    \n}\n\n.well{\n    border-color:#f5f5f5;\n    box-shadow: none;\n}"

/***/ }),

/***/ "./src/app/pages/Store/store-display/store-display.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/Store/store-display/store-display.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Srno</th>\n        <th scope=\"col\">Category</th>\n        <th scope=\"col\">SubCategory</th>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Quantity</th>\n      </tr>\n    </thead>\n    <tbody>\n\n      <tr *ngFor=\"let i of storedata;let j = index\">\n        <th scope=\"row\">{{j+1}}</th>\n        <td>{{i.category}}</td>\n        <td>{{i.subCategory}}</td>\n        <td>{{i.nameOfProduct}}</td>\n        <td>{{i.quantity}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/pages/Store/store-display/store-display.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/Store/store-display/store-display.component.ts ***!
  \**********************************************************************/
/*! exports provided: StoreDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreDisplayComponent", function() { return StoreDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/services/ApiCalls/ApiCalls.service */ "./src/app/common/services/ApiCalls/ApiCalls.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_Data_handle_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/Data/handle-data.service */ "./src/app/common/services/Data/handle-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StoreDisplayComponent = /** @class */ (function () {
    function StoreDisplayComponent(apiCallservice, router, handledata) {
        this.apiCallservice = apiCallservice;
        this.router = router;
        this.handledata = handledata;
        this.fetchData = function () {
            var _this = this;
            this.apiCallservice.handleData('Store/getStore', 0, 0)
                .subscribe(function (res) {
                _this.storedata = res.json();
            });
        };
    }
    StoreDisplayComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    StoreDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-store-display',
            template: __webpack_require__(/*! ./store-display.component.html */ "./src/app/pages/Store/store-display/store-display.component.html"),
            styles: [__webpack_require__(/*! ./store-display.component.css */ "./src/app/pages/Store/store-display/store-display.component.css")]
        }),
        __metadata("design:paramtypes", [_common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _common_services_Data_handle_data_service__WEBPACK_IMPORTED_MODULE_3__["HandleDataService"]])
    ], StoreDisplayComponent);
    return StoreDisplayComponent;
}());



/***/ }),

/***/ "./src/app/pages/Store/store-handler/store-handler.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/Store/store-handler/store-handler.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-head{\n  background-color: orange;\n  color:white;\n  padding: 1%;\n      border-radius: 100px;\n      text-align: center;\n}\n\nbutton{\n    border-radius: 100px;\n    margin-left: 5px;\n    margin-right: 5px;\n}\n\n.well{\n    border-color:#f5f5f5;\n    box-shadow: none;\n}\n\n\n"

/***/ }),

/***/ "./src/app/pages/Store/store-handler/store-handler.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/Store/store-handler/store-handler.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\n  <div class=\"header-head\">\n    <h1>Store</h1>\n    <button mat-raised-button class=\"btn-success btn-sm btn-just-icon pull-right\" routerLink=\"StoreDisplay\">\n      <i class=\"material-icons\">desktop_windows</i>\n    </button>\n  </div>\n  <br/>\n  <div>\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/Store/store-handler/store-handler.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/Store/store-handler/store-handler.component.ts ***!
  \**********************************************************************/
/*! exports provided: StoreHandlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreHandlerComponent", function() { return StoreHandlerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoreHandlerComponent = /** @class */ (function () {
    function StoreHandlerComponent() {
    }
    StoreHandlerComponent.prototype.ngOnInit = function () {
    };
    StoreHandlerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-store-handler',
            template: __webpack_require__(/*! ./store-handler.component.html */ "./src/app/pages/Store/store-handler/store-handler.component.html"),
            styles: [__webpack_require__(/*! ./store-handler.component.css */ "./src/app/pages/Store/store-handler/store-handler.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StoreHandlerComponent);
    return StoreHandlerComponent;
}());



/***/ }),

/***/ "./src/app/pages/SubCategory/sub-category-add/sub-category-add.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/SubCategory/sub-category-add/sub-category-add.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\n    border-radius: 100px;\n}\n\n"

/***/ }),

/***/ "./src/app/pages/SubCategory/sub-category-add/sub-category-add.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/SubCategory/sub-category-add/sub-category-add.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\n\n  <form [formGroup]=\"myFormGroup\" (ngSubmit)=\"storeSubCategoryData(myFormGroup)\" submitted=true enctype=\"multipart/form data\"\n    action=\"/\" name=\"myform\" id=\"myform\">\n    <!-- value is not going in ts file    ,nopid.value-->\n\n    <!--Category-->\n    <div class=\"form-group row\">\n\n      <div class=\"col-xs-2\">\n        <label for=\"category\"> category </label>\n      </div>\n\n      <div class=\"col-xs-3\">\n        <select id=\"category\" class=\"form-control \" formControlName=\"category\">\n          <option> Category</option>\n          <option *ngFor=\"let i of categorylist\">{{i.category}}</option>\n        </select>\n      </div>\n\n      <div class=\"col-xs-1\">\n        <div [hidden]=\"myFormGroup.controls.category.valid\">\n          <font color=\"red\">\n            <span class=\"glyphicon glyphicon-remove\"></span>\n          </font>\n        </div>\n      </div>\n\n    </div>\n    <!--Category-->\n\n    <!--SubCategory-->\n    <div class=\"form-group row\">\n\n      <div class=\"col-xs-3\">\n        <input type=\"text\" id=\"subCategory\" class=\"form-control\" formControlName=\"subCategory\" placeholder=\"subCategory Name\">\n      </div>\n      <div class=\"col-xs-2\">\n        <div [hidden]=\"myFormGroup.controls.subCategory.valid\">\n          <font color=\"red\">\n            <span class=\"glyphicon glyphicon-remove\"></span>\n          </font>\n        </div>\n      </div>\n    </div>\n    <!--SubCategory-->\n\n\n\n    <div class=\"row\">\n      <div class=\"form-group\" class=\"col-xs-2\"></div>\n      <div class=\"form-group\" class=\"col-xs-1\">\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]='!myFormGroup.valid'>\n          <i class=\"material-icons\">send</i>\n        </button>\n      </div>\n      <div class=\"col-xs-1\">\n        <button type=\"button\" class=\"btn btn-success\">\n          <i class=\"material-icons\">keyboard_backspace</i>\n        </button>\n      </div>\n\n    </div>\n\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/SubCategory/sub-category-add/sub-category-add.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/SubCategory/sub-category-add/sub-category-add.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SubCategoryAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCategoryAddComponent", function() { return SubCategoryAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/ApiCalls/ApiCalls.service */ "./src/app/common/services/ApiCalls/ApiCalls.service.ts");
/* harmony import */ var _subcategory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subcategory */ "./src/app/pages/SubCategory/sub-category-add/subcategory.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SubCategoryAddComponent = /** @class */ (function () {
    function SubCategoryAddComponent(router, handleservice, apiCallservice, formBuilder, _location) {
        this.router = router;
        this.handleservice = handleservice;
        this.apiCallservice = apiCallservice;
        this.formBuilder = formBuilder;
        this._location = _location;
        this.submitted = false;
    }
    SubCategoryAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model = new _subcategory__WEBPACK_IMPORTED_MODULE_4__["subcategory"](this.category, this.subCategory);
        this.myFormGroup = this.formBuilder.group({
            category: [this.model.category, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            subCategory: [this.model.subCategory, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.apiCallservice.handleData('Category/getCategory', 0, 0)
            .subscribe(function (res) {
            _this.categorylist = res.json();
        });
    };
    SubCategoryAddComponent.prototype.storeSubCategoryData = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.handleservice.handleData('SubCategory/addsubCategory', 1, 0, value)
            .subscribe(function (x) {
            _this.response = x;
            _this._location.back();
        });
    };
    SubCategoryAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sub-category-add',
            template: __webpack_require__(/*! ./sub-category-add.component.html */ "./src/app/pages/SubCategory/sub-category-add/sub-category-add.component.html"),
            styles: [__webpack_require__(/*! ./sub-category-add.component.css */ "./src/app/pages/SubCategory/sub-category-add/sub-category-add.component.css")],
            providers: [_common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallsService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallsService"],
            _common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], SubCategoryAddComponent);
    return SubCategoryAddComponent;
}());



/***/ }),

/***/ "./src/app/pages/SubCategory/sub-category-add/subcategory.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/SubCategory/sub-category-add/subcategory.ts ***!
  \*******************************************************************/
/*! exports provided: subcategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subcategory", function() { return subcategory; });
var subcategory = /** @class */ (function () {
    function subcategory(category, subCategory) {
        this.category = category;
        this.subCategory = subCategory;
    }
    return subcategory;
}());



/***/ }),

/***/ "./src/app/pages/SubCategory/sub-category-display/sub-category-display.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/SubCategory/sub-category-display/sub-category-display.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-header{\n  background-color: orange;\n  color: white;\n  font-weight: bold;\n}\n\nbutton{\n    border-radius: 100px;\n    \n}\n\n.well{\n    border-color:#f5f5f5;\n    box-shadow: none;\n}"

/***/ }),

/***/ "./src/app/pages/SubCategory/sub-category-display/sub-category-display.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/SubCategory/sub-category-display/sub-category-display.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Srno</th>\n        <th scope=\"col\">Category</th>\n        <th scope=\"col\">SubCategory</th>\n        <th scope=\"col\">Delete</th>\n        <th scope=\"col\">Edit</th>\n\n      </tr>\n    </thead>\n    <tbody>\n\n      <tr *ngFor=\"let i of subcategories;let j = index\">\n        <th scope=\"row\">{{j+1}}</th>\n        <td>{{i.category}}</td>\n        <td>{{i.subCategory}}</td>\n        <td>\n          <button mat-raised-button type=\"button\" (click)=\"deleteSubCategory(i._id)\" class=\"btn-danger btn-sm btn-just-icon edit\">\n            <i class=\"material-icons\">delete</i>\n          </button>\n        </td>\n        <td>\n          <button mat-raised-button type=\"button\" (click)=\"showDatabyid(i)\" class=\"btn-primary btn-sm btn-just-icon edit\">\n            <i class=\"material-icons\">edit</i>\n          </button>\n        </td>\n\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/pages/SubCategory/sub-category-display/sub-category-display.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/SubCategory/sub-category-display/sub-category-display.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SubCategoryDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCategoryDisplayComponent", function() { return SubCategoryDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/services/ApiCalls/ApiCalls.service */ "./src/app/common/services/ApiCalls/ApiCalls.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_Data_handle_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/Data/handle-data.service */ "./src/app/common/services/Data/handle-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubCategoryDisplayComponent = /** @class */ (function () {
    function SubCategoryDisplayComponent(apiCallservice, router, handledata) {
        this.apiCallservice = apiCallservice;
        this.router = router;
        this.handledata = handledata;
        this.show = false;
        this.fetchData = function () {
            var _this = this;
            this.apiCallservice.handleData('SubCategory/getSubCategory', 0, 0)
                .subscribe(function (res) {
                _this.subcategories = res.json();
            });
        };
        this.deleteSubCategory = function (id) {
            var _this = this;
            if (confirm('Are you sure?')) {
                this.apiCallservice.handleData('SubCategory/deleteSubCategory', 2, 1, {}, id)
                    .subscribe(function (response) {
                    _this.fetchData();
                });
            }
        };
    }
    SubCategoryDisplayComponent.prototype.showDatabyid = function (yo) {
        this.handledata.saveData(yo);
        this.show = true;
        this.router.navigate(['DashBoard/Information/SubCategory_Handler/SubCategoryUpdate']);
    };
    SubCategoryDisplayComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    SubCategoryDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sub-category-display',
            template: __webpack_require__(/*! ./sub-category-display.component.html */ "./src/app/pages/SubCategory/sub-category-display/sub-category-display.component.html"),
            styles: [__webpack_require__(/*! ./sub-category-display.component.css */ "./src/app/pages/SubCategory/sub-category-display/sub-category-display.component.css")]
        }),
        __metadata("design:paramtypes", [_common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _common_services_Data_handle_data_service__WEBPACK_IMPORTED_MODULE_3__["HandleDataService"]])
    ], SubCategoryDisplayComponent);
    return SubCategoryDisplayComponent;
}());



/***/ }),

/***/ "./src/app/pages/SubCategory/sub-category-handler/sub-category-handler.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/SubCategory/sub-category-handler/sub-category-handler.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-head{\n  background-color: orange;\n  color:white;\n  padding: 1%;\n      border-radius: 100px;\n      text-align: center;\n}\n\nbutton{\n    border-radius: 100px;\n    margin-left: 5px;\n    margin-right: 5px;\n}\n\n.well{\n    border-color:#f5f5f5;\n    box-shadow: none;\n}\n\n\n"

/***/ }),

/***/ "./src/app/pages/SubCategory/sub-category-handler/sub-category-handler.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/SubCategory/sub-category-handler/sub-category-handler.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\n  <div class=\"header-head\">\n    <h1>SubCategory</h1>\n    <button mat-raised-button class=\"btn-danger btn-sm btn-just-icon pull-right\" routerLink=\"SubCategoryAdd\">\n      <i class=\"material-icons\">add</i>\n    </button>\n    <button mat-raised-button class=\"btn-success btn-sm btn-just-icon pull-right\" routerLink=\"SubCategoryDisplay\">\n      <i class=\"material-icons\">desktop_windows</i>\n    </button>\n  </div>\n  <br/>\n  <div>\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/SubCategory/sub-category-handler/sub-category-handler.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/SubCategory/sub-category-handler/sub-category-handler.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SubCategoryHandlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCategoryHandlerComponent", function() { return SubCategoryHandlerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubCategoryHandlerComponent = /** @class */ (function () {
    function SubCategoryHandlerComponent() {
    }
    SubCategoryHandlerComponent.prototype.ngOnInit = function () {
    };
    SubCategoryHandlerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sub-category-handler',
            template: __webpack_require__(/*! ./sub-category-handler.component.html */ "./src/app/pages/SubCategory/sub-category-handler/sub-category-handler.component.html"),
            styles: [__webpack_require__(/*! ./sub-category-handler.component.css */ "./src/app/pages/SubCategory/sub-category-handler/sub-category-handler.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubCategoryHandlerComponent);
    return SubCategoryHandlerComponent;
}());



/***/ }),

/***/ "./src/app/pages/SubCategory/sub-category-update/sub-category-update.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/SubCategory/sub-category-update/sub-category-update.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/SubCategory/sub-category-update/sub-category-update.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/SubCategory/sub-category-update/sub-category-update.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\n\n  <form [formGroup]=\"myFormGroup\" (ngSubmit)=\"change(myFormGroup)\" submitted=true enctype=\"multipart/form data\" action=\"/\"\n    name=\"myform\" id=\"myform\">\n    <!-- value is not going in ts file    ,nopid.value-->\n\n    <!--Category-->\n    <div class=\"form-group row\">\n      <div class=\"col-xs-3\">\n        <select id=\"category\" class=\"form-control \" formControlName=\"category\">\n          <option> {{category}}</option>\n          <option *ngFor=\"let i of categorylist\">{{i.category}}</option>\n        </select>\n      </div>\n      <div class=\"col-xs-1\">\n        <div [hidden]=\"myFormGroup.controls.category.valid\">\n          <font color=\"red\">\n            <span class=\"glyphicon glyphicon-remove\"></span>\n          </font>\n        </div>\n      </div>\n    </div>\n    <!--Category-->\n    <!--SubCategory-->\n    <div class=\"form-group row\">\n\n      <div class=\"col-xs-3\">\n        <input type=\"text\" id=\"subCategory\" class=\"form-control\" formControlName=\"subCategory\" placeholder=\"subCategory Name\">\n      </div>\n      <div class=\"col-xs-1\">\n        <div [hidden]=\"myFormGroup.controls.subCategory.valid\">\n          <font color=\"red\">\n            <span class=\"glyphicon glyphicon-remove\"></span>\n          </font>\n        </div>\n      </div>\n    </div>\n    <!--SubCategory-->\n\n    <div class=\"row\">\n      <div class=\"form-group\" class=\"col-xs-2\"></div>\n      <div class=\"form-group\" class=\"col-xs-1\">\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]='!myFormGroup.valid'>\n          <i class=\"material-icons\">send</i>\n        </button>\n      </div>\n      <div class=\"col-xs-1\">\n        <button type=\"button\" class=\"btn btn-success\">\n          <i class=\"material-icons\">keyboard_backspace</i>\n        </button>\n      </div>\n\n    </div>\n\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/SubCategory/sub-category-update/sub-category-update.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/SubCategory/sub-category-update/sub-category-update.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SubCategoryUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCategoryUpdateComponent", function() { return SubCategoryUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/ApiCalls/ApiCalls.service */ "./src/app/common/services/ApiCalls/ApiCalls.service.ts");
/* harmony import */ var _sub_category_add_subcategory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sub-category-add/subcategory */ "./src/app/pages/SubCategory/sub-category-add/subcategory.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_services_Data_handle_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/services/Data/handle-data.service */ "./src/app/common/services/Data/handle-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SubCategoryUpdateComponent = /** @class */ (function () {
    function SubCategoryUpdateComponent(router, handleservice, apiCallservice, formBuilder, _location, handledata) {
        this.router = router;
        this.handleservice = handleservice;
        this.apiCallservice = apiCallservice;
        this.formBuilder = formBuilder;
        this._location = _location;
        this.handledata = handledata;
        this.submitted = false;
        this.change = function (data) {
            var _this = this;
            data.value.id = this.handledata.Data._id;
            this.apiCallservice.handleData('SubCategory/updateSubCategory', 3, 0, data.value)
                .subscribe(function (response) {
                _this.show = !_this.show;
                _this._location.back();
            });
        };
    }
    SubCategoryUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model = new _sub_category_add_subcategory__WEBPACK_IMPORTED_MODULE_4__["subcategory"](this.category, this.subCategory);
        this.myFormGroup = this.formBuilder.group({
            category: [this.handledata.Data.category, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            subCategory: [this.handledata.Data.subCategory, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.category = this.handledata.Data.category;
        this.apiCallservice.handleData('Category/getCategory', 0, 0)
            .subscribe(function (res) {
            _this.categorylist = res.json();
        });
    };
    SubCategoryUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sub-category-update',
            template: __webpack_require__(/*! ./sub-category-update.component.html */ "./src/app/pages/SubCategory/sub-category-update/sub-category-update.component.html"),
            styles: [__webpack_require__(/*! ./sub-category-update.component.css */ "./src/app/pages/SubCategory/sub-category-update/sub-category-update.component.css")],
            providers: [_common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallsService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallsService"],
            _common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _common_services_Data_handle_data_service__WEBPACK_IMPORTED_MODULE_6__["HandleDataService"]])
    ], SubCategoryUpdateComponent);
    return SubCategoryUpdateComponent;
}());



/***/ }),

/***/ "./src/app/pages/dash-board/dash-board.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/dash-board/dash-board.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/dash-board/dash-board.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/dash-board/dash-board.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-navigation></app-navigation>\n</div>"

/***/ }),

/***/ "./src/app/pages/dash-board/dash-board.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/dash-board/dash-board.component.ts ***!
  \**********************************************************/
/*! exports provided: DashBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashBoardComponent", function() { return DashBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashBoardComponent = /** @class */ (function () {
    function DashBoardComponent() {
    }
    DashBoardComponent.prototype.ngOnInit = function () {
    };
    DashBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dash-board',
            template: __webpack_require__(/*! ./dash-board.component.html */ "./src/app/pages/dash-board/dash-board.component.html"),
            styles: [__webpack_require__(/*! ./dash-board.component.css */ "./src/app/pages/dash-board/dash-board.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashBoardComponent);
    return DashBoardComponent;
}());



/***/ }),

/***/ "./src/app/pages/information/information.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/information/information.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\n    border-radius: 100px;\n}\n\n.vertical-menu{\n    margin-top: 5px;\n    margin-bottom: 5px;\n}"

/***/ }),

/***/ "./src/app/pages/information/information.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/information/information.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\n  <div class=\"row\">\n\n    <div class=\"col-sm-2 vertical-menu\">\n\n      <a class=\"btn btn-warning btn-block\" routerLink=\"Category_Handler\">Category</a>\n      <a class=\"btn btn-warning btn-block\" routerLink=\"SubCategory_Handler\">Sub-Category</a>\n      <a class=\"btn btn-warning btn-block\" routerLink=\"NewProduct_Handler\">New Product</a>\n      <a class=\"btn btn-warning btn-block\" routerLink=\"Store_Handler\">Store</a>\n      <a class=\"btn btn-warning btn-block\" routerLink=\"Shop_Handler\">Shop</a>\n      <!-- <a class=\"btn btn-warning btn-block\" routerLink=\"DATA_Handler\">DATA</a> -->\n\n    </div>\n\n    <div class=\"col-sm-10\">\n\n      <router-outlet></router-outlet>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/information/information.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/information/information.component.ts ***!
  \************************************************************/
/*! exports provided: InformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationComponent", function() { return InformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InformationComponent = /** @class */ (function () {
    function InformationComponent() {
    }
    InformationComponent.prototype.ngOnInit = function () {
    };
    InformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-information',
            template: __webpack_require__(/*! ./information.component.html */ "./src/app/pages/information/information.component.html"),
            styles: [__webpack_require__(/*! ./information.component.css */ "./src/app/pages/information/information.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InformationComponent);
    return InformationComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, html {\n  height: 100%;\n}\n\nh3 {\n    color: rebeccapurple;\n    font-family: arial, sans-serif;\n    font-size: 25px;\n    font-weight: bold;\n    margin-top: 0px;\n    margin-bottom: 1px;\n   \n  }\n\n.horizontalLine {\n    height: 20px;\n    color: grey;\n  }\n\n.line {\n    border: 1px solid grey;\n    width: 100%;\n  }\n\n.home{\n    /* background-image: url('../../../assets/images/cd.jpg'); */\n    background-position: center;\n    position:fixed;\n    \n    width: 100%;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-size: cover;\n    \n  }\n\n.hrLine{\n    height: 10px;\n    width:100%;\n  }\n\nimg{\n    height:100px;\n    width:100px;\n    \n  }\n\n#header{\n    margin-top: 30px;\n    margin-bottom: 350px;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-display: initial;\n    font-size: 50px;\n    font-stretch: narrower;\n    font-style: italic;\n    color:lightblue ;\n  }\n\n.input{\n    /* background-color: transparent; */\n    border-color: #ddd;\n    color: black;\n  }\n\nbutton{\n    border-color: black;\n  }"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!show\">\n  <router-outlet></router-outlet>\n</div>\n\n\n<div class=\"container home\" *ngIf=\"show\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\" id=\"header\">\n      <div class=\"col-sm-12\">Name</div>\n    </div>\n  </div>\n  <div class=\"row \">\n    <div class=\"col-xs-12\" id=\"main\">\n      <form [formGroup]=\"myFormGroup\" (ngSubmit)=\"login(myFormGroup)\" submitted=true enctype=\"multipart/form data\" action=\"/\" name=\"myform\"\n        id=\"myform\" class=\"form-horizontal\">\n\n        <div class=\"form-group\">\n          <div class=\"col-sm-12\">\n            <input type=\"text\" class=\"form-control input\" placeholder=\"Username\" formControlName=\"username\" required />\n          </div>\n          <div [hidden]=\"myFormGroup.controls.username.valid\">\n            <font color=\"red\">\n              <span class=\"glyphicon glyphicon-remove\"></span>\n            </font>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"col-sm-12\">\n            <input type=\"password\" class=\"form-control input\" placeholder=\"Password\" formControlName=\"password\" required />\n          </div>\n          <div [hidden]=\"myFormGroup.controls.password.valid\">\n            <font color=\"red\">\n              <span class=\"glyphicon glyphicon-remove\"></span>\n            </font>\n          </div>\n        </div>\n\n\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-primary col-sm-12\">\n            <i class=\"material-icons\">lock_open</i>\n          </button>\n          <button type=\"button\" (click)=\"register()\" class=\"btn btn-primary col-sm-12\" disabled>\n            <i class=\"material-icons\">fiber_new</i>\n          </button>\n\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/ApiCalls/ApiCalls.service */ "./src/app/common/services/ApiCalls/ApiCalls.service.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login */ "./src/app/pages/login/login.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, apiCallservice, formBuilder) {
        this.router = router;
        this.apiCallservice = apiCallservice;
        this.formBuilder = formBuilder;
        this.show = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.model = new _login__WEBPACK_IMPORTED_MODULE_4__["login"](this.username, this.password);
        this.myFormGroup = this.formBuilder.group({
            username: [this.model.username, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: [this.model.password, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    LoginComponent.prototype.login = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.apiCallservice.handleData('login/getLoginDetailsbyid', 0, 2, {}, value.username, value.password)
            .subscribe(function (res) {
            _this.logindetailslist = res;
            if (_this.logindetailslist._body === 'true') {
                _this.show = !_this.show;
                _this.router.navigate(['DashBoard']);
            }
            else {
                alert('Wrong Credentials..!');
            }
        });
    };
    LoginComponent.prototype.register = function () {
        this.show = !this.show;
        this.router.navigate(['Register']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")],
            providers: [_common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallsService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _common_services_ApiCalls_ApiCalls_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.ts":
/*!**************************************!*\
  !*** ./src/app/pages/login/login.ts ***!
  \**************************************/
/*! exports provided: login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
var login = /** @class */ (function () {
    function login(username, password) {
        this.username = username;
        this.password = password;
    }
    return login;
}());



/***/ }),

/***/ "./src/app/pages/navigation/navigation.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/navigation/navigation.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\n    border-radius: 100px;\n}\n\n.navbar{\n    margin-bottom: 5px;\n    color: whitesmoke\n}"

/***/ }),

/***/ "./src/app/pages/navigation/navigation.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/navigation/navigation.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n\n  <div class=\"container-fluid\">\n\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"NRCM_HOME\">NAME</a>\n    </div>\n\n    <ul class=\"nav navbar-nav\">\n\n      <li class=\"dropdown\">\n        <a routerLink=\"Information\">Information\n          <span class=\"caret\"></span>\n        </a>\n      </li>\n\n      <li class=\"dropdown\">\n        <a routerLink=\"Cart\">Cart\n          <span class=\"cart\"></span>\n        </a>\n      </li>\n\n\n    </ul>\n  </div>\n</nav>\n<div>\n\n</div>\n<div>\n\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/pages/navigation/navigation.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/navigation/navigation.component.ts ***!
  \**********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/pages/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/pages/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shubham.nitin.garde/Shubham/Angular/REnterprises/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map