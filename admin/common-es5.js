(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./node_modules/rxjs-compat/Subject.js":
    /*!*********************************************!*\
      !*** ./node_modules/rxjs-compat/Subject.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsCompatSubjectJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      exports.Subject = rxjs_1.Subject; //# sourceMappingURL=Subject.js.map

      /***/
    },

    /***/
    "./node_modules/rxjs/Subject.js":
    /*!**************************************!*\
      !*** ./node_modules/rxjs/Subject.js ***!
      \**************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsSubjectJs(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! rxjs-compat/Subject */
      "./node_modules/rxjs-compat/Subject.js")); //# sourceMappingURL=Subject.js.map

      /***/

    },

    /***/
    "./src/app/service/api.service.ts":
    /*!****************************************!*\
      !*** ./src/app/service/api.service.ts ***!
      \****************************************/

    /*! exports provided: ApiService */

    /***/
    function srcAppServiceApiServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./common.service */
      "./src/app/service/common.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http, _commService, _router) {
          _classCallCheck(this, ApiService);

          this.http = http;
          this._commService = _commService;
          this._router = _router;
          this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
        }

        _createClass(ApiService, [{
          key: "isLoggedIn",
          value: function isLoggedIn() {
            return this.getToken() !== null;
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return localStorage.getItem("accessToken");
          }
        }, {
          key: "getRequest",
          value: function getRequest(endPoint, reqBody) {
            return this.http.get("".concat(this.baseUrl).concat(endPoint), reqBody);
          }
        }, {
          key: "getRequestWithoutbody",
          value: function getRequestWithoutbody(endPoint) {
            return this.http.get("".concat(this.baseUrl).concat(endPoint));
          }
        }, {
          key: "postRequest",
          value: function postRequest(endPoint, reqBody) {
            return this.http.post("".concat(this.baseUrl).concat(endPoint), reqBody);
          }
        }, {
          key: "postRequestById",
          value: function postRequestById(endPoint, reqBody) {
            return this.http.post("".concat(this.baseUrl).concat(endPoint), reqBody);
          }
        }, {
          key: "putRequest",
          value: function putRequest(endPoint, reqBody) {
            return this.http.put("".concat(this.baseUrl).concat(endPoint), reqBody);
          }
        }, {
          key: "deleteRequest",
          value: function deleteRequest(endPoint, reqBody) {
            return this.http["delete"]("".concat(this.baseUrl).concat(endPoint), reqBody);
          }
        }]);

        return ApiService;
      }();

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ApiService,
        factory: ApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map