function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"feeds\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"categories\">\n      <ion-icon name=\"albums\"></ion-icon>\n      <ion-label>Catigories</ion-label>\n    </ion-tab-button>\n\n     <ion-tab-button tab=\"search\">\n      <ion-icon name=\"search\"></ion-icon>\n      <ion-label>Search</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"account\">\n      <ion-icon name=\"contact\"></ion-icon>\n      <ion-label>Account</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feeds/feeds.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feeds/feeds.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFeedsFeedsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"ecomm\">\r\n    <ion-buttons color=\"ecomm\" slot=\"secondary\" (click)=\"openCart()\">\r\n      <ion-icon slot=\"icon-only\" name=\"cart\" item-start></ion-icon>\r\n      <ion-badge item-end>{{ cartItemCount | async }}</ion-badge>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Shop_99</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <app-slides></app-slides>\r\n\r\n  <div class=\"categories\">\r\n    <h6>Categories</h6>\r\n    <div class=\"row\">\r\n      <div *ngFor=\"let cat of categories\" class=\"card\">\r\n        <img [src]=\"cat.icon\" />\r\n\r\n        <p>{{cat.type}}</p>\r\n      </div>\r\n\r\n      <!--    <div class=\"card\">\r\n        <img src=\"assets/categories/shirt1.svg\" />\r\n        <p>Shirt</p>\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n        <img src=\"assets/categories/hanger.svg\" />\r\n        <p>Hanger</p>\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n        <img src=\"assets/categories/shoes.svg\" />\r\n        <p>Shoes</p>\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n        <img src=\"assets/categories/dress.svg\" />\r\n        <p>Clothings</p>\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n        <img src=\"assets/categories/bag.svg\" />\r\n        <p>Bag</p>\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n        <img src=\"assets/categories/computers.svg\" />\r\n        <p>$ 3.00</p>\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n        <img src=\"assets/categories/mobile.svg\" />\r\n        <p>Mobile Phones</p>\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n        <img src=\"assets/categories/game.svg\" />\r\n        <p>Gaming</p>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngFor=\"let pro of products\" class=\"products-block \">\r\n    <div class=\"featured\">\r\n      <div class=\"heading\">\r\n        <h4>{{ pro.category }}</h4>\r\n        <p>see more</p>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div\r\n          *ngFor=\"let products of pro.products\"\r\n          class=\"card\"\r\n          (click)=\"addToCart(products)\"\r\n        >\r\n          <img [src]=\"products.image\" />\r\n          <div>\r\n            <p>${{ products.price }}</p>\r\n            <h6>{{ products.name }}</h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--   <div class=\"featured\">\r\n    <div class=\"heading\">\r\n      <h4>Popular</h4>\r\n      <p>see more</p>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"card\">\r\n        <img src=\"assets/banners/products/c-product-1.jpg\" />\r\n        <p>$ 3.00</p>\r\n        <h6>Item name</h6>\r\n      </div>\r\n      <div class=\"card\">\r\n        <img src=\"assets/banners/products/c-product-3.jpg\" />\r\n        <p>$ 3.00</p>\r\n        <h6>Item name</h6>\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n        <img src=\"assets/banners/products/c-product-4.jpg\" />\r\n        <p>$ 3.00</p>\r\n        <h6>Item name</h6>\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n        <img src=\"assets/banners/products/c-product-5.jpg\" />\r\n        <p>$ 3.00</p>\r\n        <h6>Item name</h6>\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n        <img src=\"assets/banners/products/c-product-6.jpg\" />\r\n        <p>$ 3.00</p>\r\n        <h6>Item name</h6>\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n        <img src=\"assets/banners/products/c-product-7.jpg\" />\r\n        <p>$ 3.00</p>\r\n        <h6>Item name</h6>\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n        <img src=\"assets/banners/products/c-product-8.jpg\" />\r\n        <p>$ 3.00</p>\r\n        <h6>Item name</h6>\r\n      </div>\r\n    </div>\r\n  </div>\r\n -->\r\n  <!--   <div class=\"featured\">\r\n    <div class=\"heading\">\r\n      <h4>Women Special</h4>\r\n      <p>see more</p>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"card\">\r\n        <img src=\"assets/banners/products/c-product-9.jpg\" />\r\n        <p>$ 3.00</p>\r\n        <h6>Item name</h6>\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n        <img src=\"assets/banners/products/l-product-10.jpg\" />\r\n        <p>$ 3.00</p>\r\n        <h6>Item name</h6>\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n        <img src=\"assets/banners/products/l-product-11.jpg\" />\r\n        <p>$ 3.00</p>\r\n        <h6>Item name</h6>\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n        <img src=\"assets/banners/products/l-product-12.jpg\" />\r\n        <p>$ 3.00</p>\r\n        <h6>Item name</h6>\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n        <img src=\"assets/banners/products/l-product-13.jpg\" />\r\n        <p>$ 3.00</p>\r\n        <h6>Item name</h6>\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n        <img src=\"assets/banners/products/l-product-9.jpg\" />\r\n        <p>$ 3.00</p>\r\n        <h6>Item name</h6>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: "home",
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
      children: [{
        path: "feeds",
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ../pages/feeds/feeds.module */
          "./src/app/pages/feeds/feeds.module.ts")).then(function (m) {
            return m.FeedsPageModule;
          });
        }
      }, {
        path: "categories",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-categories-categories-module */
          "pages-categories-categories-module").then(__webpack_require__.bind(null,
          /*! ../pages/categories/categories.module */
          "./src/app/pages/categories/categories.module.ts")).then(function (m) {
            return m.CategoriesPageModule;
          });
        }
      }, {
        path: "search",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-search-search-module */
          "pages-search-search-module").then(__webpack_require__.bind(null,
          /*! ../pages/search/search.module */
          "./src/app/pages/search/search.module.ts")).then(function (m) {
            return m.SearchPageModule;
          });
        }
      }, {
        path: "account",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-account-account-module */
          "pages-account-account-module").then(__webpack_require__.bind(null,
          /*! ../pages/account/account.module */
          "./src/app/pages/account/account.module.ts")).then(function (m) {
            return m.AccountPageModule;
          });
        }
      }, {
        path: "",
        redirectTo: "/home/feeds",
        pathMatch: "full"
      }]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _pages_feeds_feeds_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../pages/feeds/feeds.module */
    "./src/app/pages/feeds/feeds.module.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"], _pages_feeds_feeds_module__WEBPACK_IMPORTED_MODULE_6__["FeedsPageModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      exports: [_pages_feeds_feeds_module__WEBPACK_IMPORTED_MODULE_6__["FeedsPageModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomePage =
    /*#__PURE__*/
    function () {
      function HomePage() {
        _classCallCheck(this, HomePage);
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomePage;
    }();

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], HomePage);
    /***/
  },

  /***/
  "./src/app/pages/feeds/feeds-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/feeds/feeds-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: FeedsPageRoutingModule */

  /***/
  function srcAppPagesFeedsFeedsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedsPageRoutingModule", function () {
      return FeedsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _feeds_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./feeds.page */
    "./src/app/pages/feeds/feeds.page.ts");

    var routes = [{
      path: '',
      component: _feeds_page__WEBPACK_IMPORTED_MODULE_3__["FeedsPage"]
    }];

    var FeedsPageRoutingModule = function FeedsPageRoutingModule() {
      _classCallCheck(this, FeedsPageRoutingModule);
    };

    FeedsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FeedsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/feeds/feeds.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/feeds/feeds.module.ts ***!
    \*********************************************/

  /*! exports provided: FeedsPageModule */

  /***/
  function srcAppPagesFeedsFeedsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedsPageModule", function () {
      return FeedsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _feeds_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./feeds-routing.module */
    "./src/app/pages/feeds/feeds-routing.module.ts");
    /* harmony import */


    var _feeds_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./feeds.page */
    "./src/app/pages/feeds/feeds.page.ts");

    var FeedsPageModule = function FeedsPageModule() {
      _classCallCheck(this, FeedsPageModule);
    };

    FeedsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _feeds_routing_module__WEBPACK_IMPORTED_MODULE_6__["FeedsPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]],
      declarations: [_feeds_page__WEBPACK_IMPORTED_MODULE_7__["FeedsPage"]]
    })], FeedsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/feeds/feeds.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/feeds/feeds.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFeedsFeedsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-badge {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: #333;\n}\n\nion-buttons {\n  padding: 5px;\n  margin-right: 10%;\n}\n\nion-buttons ion-icon {\n  color: white;\n}\n\nion-title {\n  color: white;\n}\n\n.categories {\n  width: 98%;\n  padding: 10px 10px;\n  margin: 0 auto;\n}\n\n.categories .row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.categories .row .card {\n  width: 20%;\n  height: 80px;\n  background-color: #f2f2f2;\n  margin: 5px;\n  padding: 3px 8px;\n  border-radius: 8px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 10px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n\n.categories .row .card:hover {\n  background-color: rgba(255, 75, 43, 0.5);\n}\n\n.categories .row .card img {\n  width: 70%;\n  height: 70%;\n}\n\n.categories .row .card p {\n  font-size: 10px;\n  color: #333;\n  text-align: center;\n}\n\n.featured {\n  width: 100%;\n  height: auto;\n  padding: 10px;\n  overflow: scroll;\n  margin: 0;\n}\n\n.featured .heading {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin: 0 5px;\n}\n\n.featured .row {\n  display: -webkit-box;\n  display: flex;\n  overflow: scroll;\n  padding: 5px;\n  margin: 0;\n  scroll-behavior: smooth;\n}\n\n.featured .row .card {\n  min-width: 130px;\n  max-height: 200px;\n  margin: 5px 15px;\n  margin-left: 0px;\n  background: #f2f2f2;\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);\n  border-radius: 5px;\n}\n\n.featured .row .card img {\n  height: 70%;\n}\n\n.featured .row .card div {\n  padding: 10px;\n}\n\n.featured .row .card div p,\n.featured .row .card div h6 {\n  height: 15%;\n  margin: 0;\n  padding: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmVlZHMvQzpcXFVzZXJzXFxqdWRpdGhcXERlc2t0b3BcXHl1bmdpZWJhc2VcXGlvbmljcHJvamVjdFxcZWNvbW0vc3JjXFxhcHBcXHBhZ2VzXFxmZWVkc1xcZmVlZHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mZWVkcy9mZWVkcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREFFO0VBQ0UsWUFBQTtBQ0VKOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxhQUFBO0VBQ0EsK0dBQUE7QUNDTjs7QURFTTtFQUNFLHdDQUFBO0FDQVI7O0FERU07RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ0FSOztBREdNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0RSOztBRE9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDSkY7O0FETUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGFBQUE7QUNKSjs7QURNRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBQ0pKOztBRE1JO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsaUhBQUE7RUFFQSxrQkFBQTtBQ0xOOztBRE1NO0VBQ0UsV0FBQTtBQ0pSOztBRE1NO0VBQ0UsYUFBQTtBQ0pSOztBRE1ROztFQUVFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0pWIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmVlZHMvZmVlZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJhZGdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQ6ICMzMzM7XHJcbn1cclxuXHJcbmlvbi1idXR0b25zIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgaW9uLWljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzIHtcclxuICB3aWR0aDogOTglO1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDNweCA4cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDc1LCA0MywgMC41KTtcclxuICAgICAgfVxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mZWF0dXJlZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBtYXJnaW46IDA7XHJcblxyXG4gIC5oZWFkaW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICB9XHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgbWluLXdpZHRoOiAxMzBweDtcclxuICAgICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICAgIG1hcmdpbjogNXB4IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDcwJTtcclxuICAgICAgfVxyXG4gICAgICBkaXYge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgICAgIHAsXHJcbiAgICAgICAgaDYge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNSU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImlvbi1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogIzMzMztcbn1cblxuaW9uLWJ1dHRvbnMge1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuaW9uLWJ1dHRvbnMgaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhdGVnb3JpZXMge1xuICB3aWR0aDogOTglO1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNhdGVnb3JpZXMgLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmNhdGVnb3JpZXMgLnJvdyAuY2FyZCB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5jYXRlZ29yaWVzIC5yb3cgLmNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgNzUsIDQzLCAwLjUpO1xufVxuLmNhdGVnb3JpZXMgLnJvdyAuY2FyZCBpbWcge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDcwJTtcbn1cbi5jYXRlZ29yaWVzIC5yb3cgLmNhcmQgcCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICMzMzM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZlYXR1cmVkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgbWFyZ2luOiAwO1xufVxuLmZlYXR1cmVkIC5oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDAgNXB4O1xufVxuLmZlYXR1cmVkIC5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG4uZmVhdHVyZWQgLnJvdyAuY2FyZCB7XG4gIG1pbi13aWR0aDogMTMwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW46IDVweCAxNXB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2hhZG93OiAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmZlYXR1cmVkIC5yb3cgLmNhcmQgaW1nIHtcbiAgaGVpZ2h0OiA3MCU7XG59XG4uZmVhdHVyZWQgLnJvdyAuY2FyZCBkaXYge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmZlYXR1cmVkIC5yb3cgLmNhcmQgZGl2IHAsXG4uZmVhdHVyZWQgLnJvdyAuY2FyZCBkaXYgaDYge1xuICBoZWlnaHQ6IDE1JTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/feeds/feeds.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/feeds/feeds.page.ts ***!
    \*******************************************/

  /*! exports provided: FeedsPage */

  /***/
  function srcAppPagesFeedsFeedsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedsPage", function () {
      return FeedsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../cart-modal/cart-modal.page */
    "./src/app/pages/cart-modal/cart-modal.page.ts");
    /* harmony import */


    var _services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/products.service */
    "./src/app/services/products.service.ts");

    var FeedsPage =
    /*#__PURE__*/
    function () {
      function FeedsPage(cartService, modalCtrl) {
        _classCallCheck(this, FeedsPage);

        this.cartService = cartService;
        this.modalCtrl = modalCtrl;
        this.cart = [];
        this.products = [];
        this.cartItemCount = null;
        this.categories = [{
          icon: "assets/categories/shirt1.svg",
          type: "Shirt",
          color: "red"
        }, {
          icon: "assets/categories/hanger.svg",
          type: "Hanger",
          color: "blue"
        }, {
          icon: "assets/categories/shoes.svg",
          type: "Shoes",
          color: "green"
        }, {
          icon: "assets/categories/dress.svg",
          type: "Clothings",
          color: "green"
        }, {
          icon: "assets/categories/bag.svg",
          type: "Bag",
          color: "green"
        }, {
          icon: "assets/categories/computers.svg",
          type: "Computing",
          color: "blue"
        }, {
          icon: "assets/categories/mobile.svg",
          type: "Mobile Phones",
          color: "red"
        }, {
          icon: "assets/categories/game.svg",
          type: "Gaming",
          color: "green"
        }];
      }

      _createClass(FeedsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cart = this.cartService.getCart();
          this.products = this.cartService.getProducts();
          this.cartItemCount = this.cartService.getCartItemCount();
        }
      }, {
        key: "addToCart",
        value: function addToCart(product) {
          this.cartService.addProducts(product);
          console.log(product);
        }
      }, {
        key: "openCart",
        value: function openCart() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log("opening modal");
                    _context.next = 3;
                    return this.modalCtrl.create({
                      component: _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_3__["CartModalPage"]
                    });

                  case 3:
                    modal = _context.sent;
                    _context.next = 6;
                    return modal.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "closeModal",
        value: function closeModal() {}
      }]);

      return FeedsPage;
    }();

    FeedsPage.ctorParameters = function () {
      return [{
        type: _services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    FeedsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-feeds",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./feeds.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feeds/feeds.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./feeds.page.scss */
      "./src/app/pages/feeds/feeds.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], FeedsPage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map