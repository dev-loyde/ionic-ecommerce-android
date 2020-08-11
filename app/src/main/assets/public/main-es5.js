function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-controller_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js", "common", 0],
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 1],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 2],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 3],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 4],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 5],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 6],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 7],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 8],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 9],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 10],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 11],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 12],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 13],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 14],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 15],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 16],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 17],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 18],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 19],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 20],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 21],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 22],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 23],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 24],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 25],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 26],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 27],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 28],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 29],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 30],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 31],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 32],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 33],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 34],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 35],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 36],
      "./ion-menu_4-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js", "common", 37],
      "./ion-menu_4-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js", "common", 38],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 39],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 40],
      "./ion-nav_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js", "common", 41],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 42],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 43],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 44],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 45],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 46],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 47],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 48],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 49],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 50],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 51],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 52],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 53],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 54],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 55],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 56],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 57],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 58],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 59],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 60],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 61],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 62],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 63],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 64],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 65],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 66],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 67],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 68],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 69],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 70],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 71],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 72],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 73],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 74],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 75],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 76],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 77]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSlidesSlidesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"carousel-slider\">\r\n  <ion-slides loop=\"true\" pager=\"true\" [options]=\"caroSlideOpts\" #slider>\r\n    <ion-slide>\r\n      <div class=\"carousel-content\">\r\n        <img alt=\"\" src=\"assets/bg.jpg\" />\r\n        <div class=\"carousel-text\">\r\n          <h3>Variety of items</h3>\r\n          <p>\r\n            Shop at your own convinience experiencing great selections from\r\n            varieties.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <div class=\"carousel-content\">\r\n        <img alt=\"\" src=\"assets/banners/3.jpeg\" />\r\n        <div class=\"carousel-text\">\r\n          <h2>Affordable Pricings</h2>\r\n          <p>Access to quality goods at wallet friendly prices.</p>\r\n        </div>\r\n      </div>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <div class=\"carousel-content\">\r\n        <img alt=\"\" src=\"assets/banners/4.jpeg\" />\r\n        <div class=\"carousel-text\">\r\n          <h2>Fast Shipping</h2>\r\n          <p>set your location and get items on the go.</p>\r\n        </div>\r\n      </div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart-modal/cart-modal.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart-modal/cart-modal.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCartModalCartModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons color=\"ecomm\" slot=\"secondary\" (click)=\"closeModal()\">\r\n\t\t\t<ion-icon slot=\"icon-only\" name=\"close\" item-start></ion-icon>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>Cart</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"cart-wrapper\">\r\n\t\t<div *ngIf=\"emptyCart\" class=\"empty-row\">\r\n\t\t\t<img alt=\"\" src=\"assets/categories/cart2.svg\" />\r\n\t\t\t<h3>No Items in Cart</h3>\r\n\t\t</div>\r\n\t\t<div class=\"cart-row\">\r\n\t\t\t<div *ngFor=\"let p of cart\" class=\"cart-card elevation-2\">\r\n\t\t\t\t<img [src]=\"p.image\" />\r\n\t\t\t\t<div class=\"name\">\r\n\t\t\t\t\t<h5>{{ p.name }}</h5>\r\n\t\t\t\t\t<p class=\"rate\">@ {{ p.price }}</p>\r\n\t\t\t\t\t<p>$ {{ p.price * p.cartQty }}</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"buttons\">\r\n\t\t\t\t\t<button (click)=\"decreaseItem(p)\">\r\n\t\t\t\t\t\t-\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<!-- \t\t<button *ngIf=\"p.cartQty = 1\" (click)=\"removeItem(p)\">\r\n\t\t\t\t\t\tR\r\n\t\t\t\t\t</button> -->\r\n\t\t\t\t\t<h6>{{ p.cartQty }}</h6>\r\n\t\t\t\t\t<button (click)=\"increaseItem(p)\">+</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"closer\">\r\n\t\t\t\t\t<ion-icon\r\n\t\t\t\t\t\tslot=\"icon-only\"\r\n\t\t\t\t\t\tname=\"close\"\r\n\t\t\t\t\t\t(click)=\"removeItem(p)\"\r\n\t\t\t\t\t></ion-icon>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"cart-footer\">\r\n\t\t\t<div class=\"cart-total\">\r\n\t\t\t\t<h6>Total</h6>\r\n\t\t\t\t<p>$ {{ getTotal() }}</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<ion-button color=\"primary\" expand=\"full\">Checkout</ion-button>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: "",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | index-index-module */
        "index-index-module").then(__webpack_require__.bind(null,
        /*! ./index/index.module */
        "./src/app/index/index.module.ts")).then(function (m) {
          return m.IndexPageModule;
        });
      }
    }, {
      path: "",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'cart-modal',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/cart-modal/cart-modal.module */
        "./src/app/pages/cart-modal/cart-modal.module.ts")).then(function (m) {
          return m.CartModalPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(platform, splashScreen, statusBar) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.backgroundColorByName("red");

            _this.splashScreen.hide();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_cart_modal_cart_modal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/cart-modal/cart-modal.module */
    "./src/app/pages/cart-modal/cart-modal.module.ts");
    /* harmony import */


    var _services_products_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/products.service */
    "./src/app/services/products.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _pages_cart_modal_cart_modal_module__WEBPACK_IMPORTED_MODULE_10__["CartModalPageModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _services_products_service__WEBPACK_IMPORTED_MODULE_11__["ProductsService"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
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


    var _slides_slides_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./slides/slides.component */
    "./src/app/components/slides/slides.component.ts");

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_slides_slides_component__WEBPACK_IMPORTED_MODULE_5__["SlidesComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
      exports: [_slides_slides_component__WEBPACK_IMPORTED_MODULE_5__["SlidesComponent"]]
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/slides/slides.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/slides/slides.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSlidesSlidesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".carousel-slider ion-slides {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  height: 30vh;\n}\n\n.carousel-slider ion-slides ion-slide {\n  display: relative;\n  overflow-y: hidden;\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n}\n\n.carousel-slider ion-slides ion-slide .carousel-content {\n  height: 100%;\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.carousel-slider ion-slides ion-slide .carousel-content img {\n  height: 100%;\n  width: 100%;\n}\n\n.carousel-slider ion-slides ion-slide .carousel-text {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 1.2rem;\n}\n\n.carousel-slider ion-slides ion-slide .carousel-text h2 {\n  font-size: 1.2rem;\n}\n\n.carousel-slider ion-slides ion-slide > p {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXMvQzpcXFVzZXJzXFxqdWRpdGhcXERlc2t0b3BcXHl1bmdpZWJhc2VcXGlvbmljcHJvamVjdFxcZWNvbW0vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNsaWRlc1xcc2xpZGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NsaWRlcy9zbGlkZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDRUQ7O0FEQ0E7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNFRDs7QURBQTtFQUNDLFlBQUE7RUFDQSxXQUFBO0FDR0Q7O0FEREE7RUFDQyxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGlCQUFBO0FDSUQ7O0FERkE7RUFDQyxpQkFBQTtBQ0tEOztBREhBO0VBQ0MsaUJBQUE7QUNNRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1zbGlkZXIgaW9uLXNsaWRlcyB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZzogMDtcclxuXHRtYXJnaW46IDA7XHJcblx0aGVpZ2h0OiAzMHZoO1xyXG59XHJcbi5jYXJvdXNlbC1zbGlkZXIgaW9uLXNsaWRlcyBpb24tc2xpZGUge1xyXG5cdGRpc3BsYXk6IHJlbGF0aXZlO1xyXG5cdG92ZXJmbG93LXk6IGhpZGRlbjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0cGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmNhcm91c2VsLXNsaWRlciBpb24tc2xpZGVzIGlvbi1zbGlkZSAuY2Fyb3VzZWwtY29udGVudCB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jYXJvdXNlbC1zbGlkZXIgaW9uLXNsaWRlcyBpb24tc2xpZGUgLmNhcm91c2VsLWNvbnRlbnQgaW1nIHtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuLmNhcm91c2VsLXNsaWRlciBpb24tc2xpZGVzIGlvbi1zbGlkZSAuY2Fyb3VzZWwtdGV4dCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0Zm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuLmNhcm91c2VsLXNsaWRlciBpb24tc2xpZGVzIGlvbi1zbGlkZSAuY2Fyb3VzZWwtdGV4dCBoMiB7XHJcblx0Zm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuLmNhcm91c2VsLXNsaWRlciBpb24tc2xpZGVzIGlvbi1zbGlkZSA+IHAge1xyXG5cdGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcbiIsIi5jYXJvdXNlbC1zbGlkZXIgaW9uLXNsaWRlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMzB2aDtcbn1cblxuLmNhcm91c2VsLXNsaWRlciBpb24tc2xpZGVzIGlvbi1zbGlkZSB7XG4gIGRpc3BsYXk6IHJlbGF0aXZlO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jYXJvdXNlbC1zbGlkZXIgaW9uLXNsaWRlcyBpb24tc2xpZGUgLmNhcm91c2VsLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXJvdXNlbC1zbGlkZXIgaW9uLXNsaWRlcyBpb24tc2xpZGUgLmNhcm91c2VsLWNvbnRlbnQgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcm91c2VsLXNsaWRlciBpb24tc2xpZGVzIGlvbi1zbGlkZSAuY2Fyb3VzZWwtdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLmNhcm91c2VsLXNsaWRlciBpb24tc2xpZGVzIGlvbi1zbGlkZSAuY2Fyb3VzZWwtdGV4dCBoMiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uY2Fyb3VzZWwtc2xpZGVyIGlvbi1zbGlkZXMgaW9uLXNsaWRlID4gcCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/slides/slides.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/slides/slides.component.ts ***!
    \*******************************************************/

  /*! exports provided: SlidesComponent */

  /***/
  function srcAppComponentsSlidesSlidesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlidesComponent", function () {
      return SlidesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // import { imgCarousel } from '../../models/img-carousel';


    var SlidesComponent =
    /*#__PURE__*/
    function () {
      function SlidesComponent() {
        _classCallCheck(this, SlidesComponent);

        //  @Input() carouselData: imgCarousel;
        this.caroSlideOpts = {
          initialSlide: 0,
          speed: 300,
          centeredSlides: true,
          autoPlay: {
            delay: 1000
          }
        };
      }

      _createClass(SlidesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {// this.slider.stopAutoPlay();
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {// this.slider.startAutoPlay();
        }
      }]);

      return SlidesComponent;
    }();

    SlidesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-slides",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./slides.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./slides.component.scss */
      "./src/app/components/slides/slides.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SlidesComponent);
    /***/
  },

  /***/
  "./src/app/pages/cart-modal/cart-modal-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/cart-modal/cart-modal-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: CartModalPageRoutingModule */

  /***/
  function srcAppPagesCartModalCartModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartModalPageRoutingModule", function () {
      return CartModalPageRoutingModule;
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


    var _cart_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cart-modal.page */
    "./src/app/pages/cart-modal/cart-modal.page.ts");

    var routes = [{
      path: '',
      component: _cart_modal_page__WEBPACK_IMPORTED_MODULE_3__["CartModalPage"]
    }];

    var CartModalPageRoutingModule = function CartModalPageRoutingModule() {
      _classCallCheck(this, CartModalPageRoutingModule);
    };

    CartModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CartModalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/cart-modal/cart-modal.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/cart-modal/cart-modal.module.ts ***!
    \*******************************************************/

  /*! exports provided: CartModalPageModule */

  /***/
  function srcAppPagesCartModalCartModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartModalPageModule", function () {
      return CartModalPageModule;
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


    var _cart_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cart-modal-routing.module */
    "./src/app/pages/cart-modal/cart-modal-routing.module.ts");
    /* harmony import */


    var _cart_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cart-modal.page */
    "./src/app/pages/cart-modal/cart-modal.page.ts");

    var CartModalPageModule = function CartModalPageModule() {
      _classCallCheck(this, CartModalPageModule);
    };

    CartModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cart_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartModalPageRoutingModule"]],
      declarations: [_cart_modal_page__WEBPACK_IMPORTED_MODULE_6__["CartModalPage"]]
    })], CartModalPageModule);
    /***/
  },

  /***/
  "./src/app/pages/cart-modal/cart-modal.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/cart-modal/cart-modal.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCartModalCartModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cart-wrapper {\n  width: 100%;\n  height: 100%;\n}\n.cart-wrapper .empty-row {\n  width: 100%;\n  height: 75%;\n  display: -webkit-box;\n  display: flex;\n  overflow: none;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.cart-wrapper .empty-row img {\n  width: 30%;\n}\n.cart-wrapper .cart-row {\n  width: 100%;\n  height: 75%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: center;\n          justify-content: center;\n  flex-wrap: wrap;\n  overflow-y: scroll;\n  padding: 10px;\n}\n.cart-wrapper .cart-row .cart-card {\n  width: 90%;\n  min-height: 80px;\n  max-height: 80px;\n  border-radius: 5px;\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n  margin: 5px;\n}\n.cart-wrapper .cart-row .cart-card img {\n  width: 25%;\n  height: 100%;\n}\n.cart-wrapper .cart-row .cart-card .name {\n  width: 40%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  padding: 10px;\n}\n.cart-wrapper .cart-row .cart-card .name .rate {\n  font-size: 12px;\n}\n.cart-wrapper .cart-row .cart-card .name h5,\n.cart-wrapper .cart-row .cart-card .name p {\n  height: 33.3%;\n  margin: 0;\n  padding: 0;\n  text-align: left;\n  font-size: 14px;\n}\n.cart-wrapper .cart-row .cart-card .buttons {\n  width: 20%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.cart-wrapper .cart-row .cart-card .buttons h6,\n.cart-wrapper .cart-row .cart-card .buttons button {\n  width: 33.33%;\n  padding: 5px;\n}\n.cart-wrapper .cart-row .cart-card .buttons h6 {\n  text-align: center;\n}\n.cart-wrapper .cart-row .cart-card .buttons button {\n  background: #f2f2f2;\n}\n.cart-wrapper .cart-row .cart-card .closer {\n  width: 15%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.cart-wrapper .cart-row .cart-card .closer ion-icon {\n  font-size: 22px;\n}\n.cart-wrapper .cart-footer {\n  width: 100%;\n  height: 25%;\n  padding: 10px;\n  position: fixed;\n  bottom: 0;\n}\n.cart-wrapper .cart-footer .cart-total {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin: 0 5px;\n}\nion-buttons {\n  margin: auto 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FydC1tb2RhbC9DOlxcVXNlcnNcXGp1ZGl0aFxcRGVza3RvcFxceXVuZ2llYmFzZVxcaW9uaWNwcm9qZWN0XFxlY29tbS9zcmNcXGFwcFxccGFnZXNcXGNhcnQtbW9kYWxcXGNhcnQtbW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXJ0LW1vZGFsL2NhcnQtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNDRDtBRENDO0VBQ0MsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxjQUFBO0VBRUEseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNBRjtBREVFO0VBQ0MsVUFBQTtBQ0FIO0FER0M7RUFDQyxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUVBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0ZGO0FESUU7RUFDQyxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0FDSEg7QURLRztFQUNDLFVBQUE7RUFDQSxZQUFBO0FDSEo7QURLRztFQUNDLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtFQUVBLGFBQUE7QUNKSjtBRE1JO0VBQ0MsZUFBQTtBQ0pMO0FETUk7O0VBRUMsYUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDSkw7QURPRztFQUNDLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0xKO0FET0k7O0VBRUMsYUFBQTtFQUNBLFlBQUE7QUNMTDtBRE9JO0VBQ0Msa0JBQUE7QUNMTDtBRE9JO0VBQ0MsbUJBQUE7QUNMTDtBRFFHO0VBQ0MsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDTko7QURRSTtFQUNDLGVBQUE7QUNOTDtBRFdDO0VBQ0MsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUNURjtBRFdFO0VBQ0Msb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxhQUFBO0FDVEg7QURjQTtFQUNDLGlCQUFBO0FDWEQiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXJ0LW1vZGFsL2NhcnQtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnQtd3JhcHBlciB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cclxuXHQuZW1wdHktcm93IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiA3NSU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0b3ZlcmZsb3c6IG5vbmU7XHJcblxyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcblx0XHRpbWcge1xyXG5cdFx0XHR3aWR0aDogMzAlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuY2FydC1yb3cge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDc1JTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblxyXG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcblxyXG5cdFx0LmNhcnQtY2FyZCB7XHJcblx0XHRcdHdpZHRoOiA5MCU7XHJcblx0XHRcdG1pbi1oZWlnaHQ6IDgwcHg7XHJcblx0XHRcdG1heC1oZWlnaHQ6IDgwcHg7XHJcblxyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdG1hcmdpbjogNXB4O1xyXG5cclxuXHRcdFx0aW1nIHtcclxuXHRcdFx0XHR3aWR0aDogMjUlO1xyXG5cdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0fVxyXG5cdFx0XHQubmFtZSB7XHJcblx0XHRcdFx0d2lkdGg6IDQwJTtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcblx0XHRcdFx0cGFkZGluZzogMTBweDtcclxuXHJcblx0XHRcdFx0LnJhdGUge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRoNSxcclxuXHRcdFx0XHRwIHtcclxuXHRcdFx0XHRcdGhlaWdodDogMzMuMyU7XHJcblx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0LmJ1dHRvbnMge1xyXG5cdFx0XHRcdHdpZHRoOiAyMCU7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG5cdFx0XHRcdGg2LFxyXG5cdFx0XHRcdGJ1dHRvbiB7XHJcblx0XHRcdFx0XHR3aWR0aDogMzMuMzMlO1xyXG5cdFx0XHRcdFx0cGFkZGluZzogNXB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRoNiB7XHJcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJ1dHRvbiB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQuY2xvc2VyIHtcclxuXHRcdFx0XHR3aWR0aDogMTUlO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcblx0XHRcdFx0aW9uLWljb24ge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyMnB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQuY2FydC1mb290ZXIge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDI1JTtcclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRib3R0b206IDA7XHJcblxyXG5cdFx0LmNhcnQtdG90YWwge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdG1hcmdpbjogMCA1cHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5pb24tYnV0dG9ucyB7XHJcblx0bWFyZ2luOiBhdXRvIDIwcHg7XHJcbn1cclxuIiwiLmNhcnQtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY2FydC13cmFwcGVyIC5lbXB0eS1yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBub25lO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jYXJ0LXdyYXBwZXIgLmVtcHR5LXJvdyBpbWcge1xuICB3aWR0aDogMzAlO1xufVxuLmNhcnQtd3JhcHBlciAuY2FydC1yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uY2FydC13cmFwcGVyIC5jYXJ0LXJvdyAuY2FydC1jYXJkIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWluLWhlaWdodDogODBweDtcbiAgbWF4LWhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDVweDtcbn1cbi5jYXJ0LXdyYXBwZXIgLmNhcnQtcm93IC5jYXJ0LWNhcmQgaW1nIHtcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNhcnQtd3JhcHBlciAuY2FydC1yb3cgLmNhcnQtY2FyZCAubmFtZSB7XG4gIHdpZHRoOiA0MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmNhcnQtd3JhcHBlciAuY2FydC1yb3cgLmNhcnQtY2FyZCAubmFtZSAucmF0ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jYXJ0LXdyYXBwZXIgLmNhcnQtcm93IC5jYXJ0LWNhcmQgLm5hbWUgaDUsXG4uY2FydC13cmFwcGVyIC5jYXJ0LXJvdyAuY2FydC1jYXJkIC5uYW1lIHAge1xuICBoZWlnaHQ6IDMzLjMlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jYXJ0LXdyYXBwZXIgLmNhcnQtcm93IC5jYXJ0LWNhcmQgLmJ1dHRvbnMge1xuICB3aWR0aDogMjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jYXJ0LXdyYXBwZXIgLmNhcnQtcm93IC5jYXJ0LWNhcmQgLmJ1dHRvbnMgaDYsXG4uY2FydC13cmFwcGVyIC5jYXJ0LXJvdyAuY2FydC1jYXJkIC5idXR0b25zIGJ1dHRvbiB7XG4gIHdpZHRoOiAzMy4zMyU7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5jYXJ0LXdyYXBwZXIgLmNhcnQtcm93IC5jYXJ0LWNhcmQgLmJ1dHRvbnMgaDYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FydC13cmFwcGVyIC5jYXJ0LXJvdyAuY2FydC1jYXJkIC5idXR0b25zIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG59XG4uY2FydC13cmFwcGVyIC5jYXJ0LXJvdyAuY2FydC1jYXJkIC5jbG9zZXIge1xuICB3aWR0aDogMTUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jYXJ0LXdyYXBwZXIgLmNhcnQtcm93IC5jYXJ0LWNhcmQgLmNsb3NlciBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5jYXJ0LXdyYXBwZXIgLmNhcnQtZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbn1cbi5jYXJ0LXdyYXBwZXIgLmNhcnQtZm9vdGVyIC5jYXJ0LXRvdGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDAgNXB4O1xufVxuXG5pb24tYnV0dG9ucyB7XG4gIG1hcmdpbjogYXV0byAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/cart-modal/cart-modal.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/cart-modal/cart-modal.page.ts ***!
    \*****************************************************/

  /*! exports provided: CartModalPage */

  /***/
  function srcAppPagesCartModalCartModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartModalPage", function () {
      return CartModalPage;
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


    var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/products.service */
    "./src/app/services/products.service.ts");

    var CartModalPage =
    /*#__PURE__*/
    function () {
      function CartModalPage(cartService, modalCtrl) {
        _classCallCheck(this, CartModalPage);

        this.cartService = cartService;
        this.modalCtrl = modalCtrl;
        this.cart = [];
      }

      _createClass(CartModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cart = this.cartService.getCart();
          this.emptyCart = this.cartService.getCartItemCount().value > 0 ? false : true;
          console.log(this.emptyCart);
        }
      }, {
        key: "getTotal",
        value: function getTotal() {
          return this.cart.reduce(function (i, j) {
            return i + j.price * j.cartQty;
          }, 0);
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "increaseItem",
        value: function increaseItem(p) {
          this.cartService.addProducts(p);
        }
      }, {
        key: "decreaseItem",
        value: function decreaseItem(p) {
          this.cartService.decreaseProducts(p);
        }
      }, {
        key: "removeItem",
        value: function removeItem(p) {
          this.cartService.removeProduct(p);
        }
      }]);

      return CartModalPage;
    }();

    CartModalPage.ctorParameters = function () {
      return [{
        type: _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    CartModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-cart-modal",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart-modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart-modal/cart-modal.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart-modal.page.scss */
      "./src/app/pages/cart-modal/cart-modal.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], CartModalPage);
    /***/
  },

  /***/
  "./src/app/services/products.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/products.service.ts ***!
    \**********************************************/

  /*! exports provided: ProductsService */

  /***/
  function srcAppServicesProductsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsService", function () {
      return ProductsService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ProductsService =
    /*#__PURE__*/
    function () {
      function ProductsService() {
        _classCallCheck(this, ProductsService);

        this.cart = [];
        this.cartItemCount = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.products = [{
          category: "popular",
          products: [{
            id: 0,
            image: "assets/women/popular-1.jpg",
            name: "silk dress",
            price: "1200",
            cartQty: 1
          }, {
            id: 1,
            image: "assets/women/popular-2.jpg",
            name: "Jeans",
            price: "2000",
            cartQty: 1
          }, {
            id: 2,
            image: "assets/women/popular-3.jpg",
            name: "Short dress",
            price: "1800",
            cartQty: 1
          }, {
            id: 3,
            image: "assets/women/popular-4.jpg",
            name: "Office gown",
            price: "3500",
            cartQty: 1
          }, {
            id: 4,
            image: "assets/women/popular-5.jpg",
            name: "Dinner Gown",
            price: "5000",
            cartQty: 1
          }, {
            id: 5,
            image: "assets/women/popular-6.jpg",
            name: "Transparent dress",
            price: "1200",
            cartQty: 1
          }, {
            id: 6,
            image: "assets/women/popular-1.jpg",
            name: "silk dress",
            price: "1200",
            cartQty: 1
          }, {
            id: 7,
            image: "assets/women/popular-2.jpg",
            name: "Jeans",
            price: "2000",
            cartQty: 1
          }, {
            id: 8,
            image: "assets/women/popular-3.jpg",
            name: "Short dress",
            price: "1800",
            cartQty: 1
          }, {
            id: 9,
            image: "assets/women/popular-6.jpg",
            name: "Transparent dress",
            price: "1200",
            cartQty: 1
          }, {
            id: 10,
            image: "assets/women/popular-4.jpg",
            name: "Office gown",
            price: "3500",
            cartQty: 1
          }, {
            id: 11,
            image: "assets/women/popular-5.jpg",
            name: "Dinner Gown",
            price: "5000",
            cartQty: 1
          }]
        }, {
          category: "featured",
          products: [{
            id: 0,
            image: "assets/banners/products/c-product-5.jpg",
            name: "Smart Watch",
            price: "5500",
            cartQty: 1
          }, {
            id: 1,
            image: "assets/banners/products/c-product-6.jpg",
            name: "Jeans Shirt",
            price: "2500",
            cartQty: 1
          }, {
            id: 2,
            image: "assets/banners/products/l-product-1.jpg",
            name: "Sports Track",
            price: "1500",
            cartQty: 1
          }, {
            id: 3,
            image: "assets/banners/products/l-product-6.jpg",
            name: "Leather Heels",
            price: "3500",
            cartQty: 1
          }, {
            id: 4,
            image: "assets/banners/products/l-product-18.jpg",
            name: "Nike Sneakers",
            price: "2500",
            cartQty: 1
          }, {
            id: 5,
            image: "assets/banners/products/c-product-1.jpg",
            name: "Nike Bag Pack",
            price: "3000",
            cartQty: 1
          }]
        }, {
          category: "Men Special",
          products: [{
            id: 0,
            image: "assets/men/l1.jpg",
            name: "Swiss Polo",
            price: "2000",
            cartQty: 1
          }, {
            id: 1,
            image: "assets/men/l3.jpg",
            name: "Sports Top",
            price: "1500",
            cartQty: 1
          }, {
            id: 2,
            image: "assets/men/l2.jpg",
            name: "Track Suit",
            price: "900",
            cartQty: 1
          }, {
            id: 3,
            image: "assets/men/l1.jpg",
            name: "Swiss Polo",
            price: "2000",
            cartQty: 1
          }, {
            id: 4,
            image: "assets/men/l3.jpg",
            name: "Sports Top",
            price: "1500",
            cartQty: 1
          }, {
            id: 5,
            image: "assets/men/l2.jpg",
            name: "Track Suit",
            price: "900",
            cartQty: 1
          }]
        }];
      }

      _createClass(ProductsService, [{
        key: "getProducts",
        value: function getProducts() {
          return this.products;
        }
      }, {
        key: "getCart",
        value: function getCart() {
          return this.cart;
        }
      }, {
        key: "addProducts",
        value: function addProducts(product) {
          var added = false;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.cart[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var p = _step.value;

              if (p.id === product.id) {
                p.cartQty += 1;
                added = true;
                break;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          if (!added) {
            this.cart.push(product);
          }

          this.cartItemCount.next(this.cartItemCount.value + 1);
        }
      }, {
        key: "decreaseProducts",
        value: function decreaseProducts(product) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this.cart.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _step2$value = _slicedToArray(_step2.value, 2),
                  index = _step2$value[0],
                  p = _step2$value[1];

              if (p.id === product.id) {
                p.cartQty -= 1;

                if (p.cartQty == 0) {
                  this.cart.splice(index, 1);
                }
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          this.cartItemCount.next(this.cartItemCount.value - 1);
        }
      }, {
        key: "removeProduct",
        value: function removeProduct(product) {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = this.cart.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var _step3$value = _slicedToArray(_step3.value, 2),
                  index = _step3$value[0],
                  p = _step3$value[1];

              if (p.id === product.id) {
                this.cartItemCount.next(this.cartItemCount.value - p.cartQty);
                this.cart.splice(index, 1);
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
      }, {
        key: "getCartItemCount",
        value: function getCartItemCount() {
          return this.cartItemCount;
        }
      }]);

      return ProductsService;
    }();

    ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ProductsService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\judith\Desktop\yungiebase\ionicproject\ecomm\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map