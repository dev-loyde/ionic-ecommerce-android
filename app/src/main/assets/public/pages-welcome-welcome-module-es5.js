function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-welcome-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesWelcomeWelcomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <div class=\"welcome-page\" >\r\n       <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n\r\n        <ion-slide>\r\n      \r\n          <img alt=\"\" src=\"assets/undraw_true_friends_c94g.png\"/>\r\n          <h3>Variety of items</h3>\r\n          <p>Shop at your own convinience experiencing great selections from varieties.</p>\r\n        \r\n        </ion-slide>\r\n\r\n  <ion-slide>\r\n      \r\n           <img alt=\"\" src=\"assets/undraw_wallet_aym5.png\"/>\r\n          <h2>Affordable Pricings</h2>\r\n          <p>Access to quality goods at wallet friendly prices.</p>\r\n        \r\n        </ion-slide>\r\n        <ion-slide>\r\n      \r\n           <img alt=\"\" src=\"assets/undraw_true_friends_c94g.png\"/>\r\n          <h2>Fast Shipping</h2>\r\n          <p>set your location and get items on the go.</p>\r\n        \r\n        </ion-slide>\r\n\r\n        <ion-slide>\r\n      \r\n          <img alt=\"\" src=\"assets/undraw_true_friends_c94g.png\"/>\r\n          <h2>Start Shopping</h2>\r\n          <ion-button class=\"get_started\" (click)=\"getStarted()\">Get Started<ion-icon  name=\"arrow-forward\"></ion-icon></ion-button>\r\n      \r\n        </ion-slide>\r\n\r\n      </ion-slides>\r\n\r\n    </div> ";
    /***/
  },

  /***/
  "./src/app/pages/welcome/welcome-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/welcome/welcome-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: WelcomePageRoutingModule */

  /***/
  function srcAppPagesWelcomeWelcomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomePageRoutingModule", function () {
      return WelcomePageRoutingModule;
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


    var _welcome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./welcome.page */
    "./src/app/pages/welcome/welcome.page.ts");

    var routes = [{
      path: '',
      component: _welcome_page__WEBPACK_IMPORTED_MODULE_3__["WelcomePage"]
    }];

    var WelcomePageRoutingModule = function WelcomePageRoutingModule() {
      _classCallCheck(this, WelcomePageRoutingModule);
    };

    WelcomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WelcomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/welcome/welcome.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/welcome/welcome.module.ts ***!
    \*************************************************/

  /*! exports provided: WelcomePageModule */

  /***/
  function srcAppPagesWelcomeWelcomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function () {
      return WelcomePageModule;
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


    var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./welcome-routing.module */
    "./src/app/pages/welcome/welcome-routing.module.ts");
    /* harmony import */


    var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./welcome.page */
    "./src/app/pages/welcome/welcome.page.ts");

    var WelcomePageModule = function WelcomePageModule() {
      _classCallCheck(this, WelcomePageModule);
    };

    WelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__["WelcomePageRoutingModule"]],
      declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
    })], WelcomePageModule);
    /***/
  },

  /***/
  "./src/app/pages/welcome/welcome.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/welcome/welcome.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesWelcomeWelcomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".welcome-page ion-slides {\n  width: 100%;\n  height: 100vh;\n}\n\n.welcome-page ion-slides ion-slide {\n  display: -webkit-box;\n  display: flex;\n  overflow-y: hidden;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 80%;\n  padding: 5%;\n}\n\n.welcome-page ion-slides ion-slide > img {\n  max-height: 50%;\n  max-width: 60%;\n  margin: 36px 0;\n}\n\n.get_started {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2VsY29tZS9DOlxcVXNlcnNcXGp1ZGl0aFxcRGVza3RvcFxceXVuZ2llYmFzZVxcaW9uaWNwcm9qZWN0XFxlY29tbS9zcmNcXGFwcFxccGFnZXNcXHdlbGNvbWVcXHdlbGNvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNBRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBRUEseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ud2VsY29tZS1wYWdlIGlvbi1zbGlkZXMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLndlbGNvbWUtcGFnZSBpb24tc2xpZGVzIGlvbi1zbGlkZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcblxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogODAlO1xyXG4gIHBhZGRpbmc6IDUlO1xyXG59XHJcblxyXG4ud2VsY29tZS1wYWdlIGlvbi1zbGlkZXMgaW9uLXNsaWRlID4gaW1nIHtcclxuICBtYXgtaGVpZ2h0OiA1MCU7XHJcbiAgbWF4LXdpZHRoOiA2MCU7XHJcbiAgbWFyZ2luOiAzNnB4IDA7XHJcbn1cclxuXHJcbi5nZXRfc3RhcnRlZCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuIiwiLndlbGNvbWUtcGFnZSBpb24tc2xpZGVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi53ZWxjb21lLXBhZ2UgaW9uLXNsaWRlcyBpb24tc2xpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiA1JTtcbn1cblxuLndlbGNvbWUtcGFnZSBpb24tc2xpZGVzIGlvbi1zbGlkZSA+IGltZyB7XG4gIG1heC1oZWlnaHQ6IDUwJTtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMzZweCAwO1xufVxuXG4uZ2V0X3N0YXJ0ZWQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/welcome/welcome.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/welcome/welcome.page.ts ***!
    \***********************************************/

  /*! exports provided: WelcomePage */

  /***/
  function srcAppPagesWelcomeWelcomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomePage", function () {
      return WelcomePage;
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

    var WelcomePage =
    /*#__PURE__*/
    function () {
      function WelcomePage(router) {
        _classCallCheck(this, WelcomePage);

        this.router = router;
        this.slideOpts = {
          initialSlide: 0,
          speed: 300
        };
      }

      _createClass(WelcomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getStarted",
        value: function getStarted() {
          this.router.navigate(["/signup"]);
        }
      }]);

      return WelcomePage;
    }();

    WelcomePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-welcome",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./welcome.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./welcome.page.scss */
      "./src/app/pages/welcome/welcome.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], WelcomePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-welcome-welcome-module-es5.js.map