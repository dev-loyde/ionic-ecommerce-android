function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-categories-categories-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCategoriesCategoriesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\t<ion-toolbar color=\"ecomm\">\r\n\t\t<ion-title>Categories</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<!-- <mat-tab-group>\r\n\t\t<mat-tab *ngFor=\"let cat of data\" label=\"{{ cat.category }}\">\r\n\t\t\t<ng-template matTabContent>\r\n\t\t\t\t<div class=\"categories-row\">\r\n\t\t\t\t\t<div *ngFor=\"let products of cat.products\" class=\"card\">\r\n\t\t\t\t\t\t<img [src]=\"products.image\" />\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<p>${{ products.price }}</p>\r\n\t\t\t\t\t\t\t<h6>{{ products.name }}</h6>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-template>\r\n\t\t</mat-tab>\r\n\t</mat-tab-group> -->\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/categories/categories-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/categories/categories-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: CategoriesPageRoutingModule */

  /***/
  function srcAppPagesCategoriesCategoriesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesPageRoutingModule", function () {
      return CategoriesPageRoutingModule;
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


    var _categories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./categories.page */
    "./src/app/pages/categories/categories.page.ts");

    var routes = [{
      path: '',
      component: _categories_page__WEBPACK_IMPORTED_MODULE_3__["CategoriesPage"]
    }];

    var CategoriesPageRoutingModule = function CategoriesPageRoutingModule() {
      _classCallCheck(this, CategoriesPageRoutingModule);
    };

    CategoriesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CategoriesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/categories/categories.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/categories/categories.module.ts ***!
    \*******************************************************/

  /*! exports provided: CategoriesPageModule */

  /***/
  function srcAppPagesCategoriesCategoriesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function () {
      return CategoriesPageModule;
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


    var _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./categories-routing.module */
    "./src/app/pages/categories/categories-routing.module.ts");
    /* harmony import */


    var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./categories.page */
    "./src/app/pages/categories/categories.page.ts");

    var CategoriesPageModule = function CategoriesPageModule() {
      _classCallCheck(this, CategoriesPageModule);
    };

    CategoriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriesPageRoutingModule"]],
      declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]]
    })], CategoriesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/categories/categories.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/categories/categories.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCategoriesCategoriesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".categories-row {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  overflow: scroll;\n  padding: 5px;\n  margin: 0;\n  scroll-behavior: smooth;\n}\n.categories-row .card {\n  min-width: 40%;\n  max-height: 200px;\n  margin: 5px 15px;\n  margin-left: 0px;\n  background: #f2f2f2;\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);\n  border-radius: 5px;\n}\n.categories-row .card img {\n  height: 70%;\n}\n.categories-row .card div {\n  padding: 10px;\n}\n.categories-row .card div p,\n.categories-row .card div h6 {\n  height: 15%;\n  margin: 0;\n  padding: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcmllcy9DOlxcVXNlcnNcXGp1ZGl0aFxcRGVza3RvcFxceXVuZ2llYmFzZVxcaW9uaWNwcm9qZWN0XFxlY29tbS9zcmNcXGFwcFxccGFnZXNcXGNhdGVnb3JpZXNcXGNhdGVnb3JpZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBQ0NGO0FEQ0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGlIQUFBO0VBRUEsa0JBQUE7QUNBSjtBRENJO0VBQ0UsV0FBQTtBQ0NOO0FEQ0k7RUFDRSxhQUFBO0FDQ047QURDTTs7RUFFRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2F0ZWdvcmllcy1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuXHJcbiAgLmNhcmQge1xyXG4gICAgbWluLXdpZHRoOiA0MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbjogNXB4IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgICAgcCxcclxuICAgICAgaDYge1xyXG4gICAgICAgIGhlaWdodDogMTUlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmNhdGVnb3JpZXMtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG4uY2F0ZWdvcmllcy1yb3cgLmNhcmQge1xuICBtaW4td2lkdGg6IDQwJTtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG1hcmdpbjogNXB4IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uY2F0ZWdvcmllcy1yb3cgLmNhcmQgaW1nIHtcbiAgaGVpZ2h0OiA3MCU7XG59XG4uY2F0ZWdvcmllcy1yb3cgLmNhcmQgZGl2IHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5jYXRlZ29yaWVzLXJvdyAuY2FyZCBkaXYgcCxcbi5jYXRlZ29yaWVzLXJvdyAuY2FyZCBkaXYgaDYge1xuICBoZWlnaHQ6IDE1JTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/categories/categories.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/categories/categories.page.ts ***!
    \*****************************************************/

  /*! exports provided: CategoriesPage */

  /***/
  function srcAppPagesCategoriesCategoriesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesPage", function () {
      return CategoriesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CategoriesPage =
    /*#__PURE__*/
    function () {
      function CategoriesPage() {
        _classCallCheck(this, CategoriesPage);

        this.data = [{
          category: "popular",
          products: [{
            id: 0,
            image: "assets/women/popular-1.jpg",
            name: "silk dress",
            price: "1200"
          }, {
            id: 1,
            image: "assets/women/popular-2.jpg",
            name: "Jeans",
            price: "2000"
          }, {
            id: 2,
            image: "assets/women/popular-3.jpg",
            name: "Short dress",
            price: "1800"
          }, {
            id: 3,
            image: "assets/women/popular-4.jpg",
            name: "Office gown",
            price: "3500"
          }, {
            id: 4,
            image: "assets/women/popular-5.jpg",
            name: "Dinner Gown",
            price: "5000"
          }, {
            id: 5,
            image: "assets/women/popular-6.jpg",
            name: "Transparent dress",
            price: "1200"
          }, {
            id: 6,
            image: "assets/women/popular-1.jpg",
            name: "silk dress",
            price: "1200"
          }, {
            id: 7,
            image: "assets/women/popular-2.jpg",
            name: "Jeans",
            price: "2000"
          }, {
            id: 8,
            image: "assets/women/popular-3.jpg",
            name: "Short dress",
            price: "1800"
          }, {
            id: 9,
            image: "assets/women/popular-6.jpg",
            name: "Transparent dress",
            price: "1200"
          }, {
            id: 10,
            image: "assets/women/popular-4.jpg",
            name: "Office gown",
            price: "3500"
          }, {
            id: 11,
            image: "assets/women/popular-5.jpg",
            name: "Dinner Gown",
            price: "5000"
          }]
        }, {
          category: "featured",
          products: [{
            id: 0,
            image: "assets/banners/products/c-product-5.jpg",
            name: "Smart Watch",
            price: "5500"
          }, {
            id: 1,
            image: "assets/banners/products/c-product-6.jpg",
            name: "Jeans Shirt",
            price: "2500"
          }, {
            id: 2,
            image: "assets/banners/products/l-product-1.jpg",
            name: "Sports Track",
            price: "1500"
          }, {
            id: 3,
            image: "assets/banners/products/l-product-6.jpg",
            name: "Leather Heels",
            price: "3500"
          }, {
            id: 4,
            image: "assets/banners/products/l-product-18.jpg",
            name: "Nike Sneakers",
            price: "2500"
          }, {
            id: 5,
            image: "assets/banners/products/c-product-1.jpg",
            name: "Nike Bag Pack",
            price: "3000"
          }]
        }, {
          category: "Men Special",
          products: [{
            id: 0,
            image: "assets/men/l1.jpg",
            name: "Swiss Polo",
            price: "2000"
          }, {
            id: 1,
            image: "assets/men/l3.jpg",
            name: "Sports Top",
            price: "1500"
          }, {
            id: 2,
            image: "assets/men/l2.jpg",
            name: "Track Suit",
            price: "900"
          }, {
            id: 3,
            image: "assets/men/l1.jpg",
            name: "Swiss Polo",
            price: "2000"
          }, {
            id: 4,
            image: "assets/men/l3.jpg",
            name: "Sports Top",
            price: "1500"
          }, {
            id: 5,
            image: "assets/men/l2.jpg",
            name: "Track Suit",
            price: "900"
          }]
        }];
      }

      _createClass(CategoriesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CategoriesPage;
    }();

    CategoriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-categories",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categories.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categories.page.scss */
      "./src/app/pages/categories/categories.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CategoriesPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-categories-categories-module-es5.js.map