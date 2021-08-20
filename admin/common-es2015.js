(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/rxjs-compat/Subject.js":
/*!*********************************************!*\
  !*** ./node_modules/rxjs-compat/Subject.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
exports.Subject = rxjs_1.Subject;
//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "./node_modules/rxjs/Subject.js":
/*!**************************************!*\
  !*** ./node_modules/rxjs/Subject.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! rxjs-compat/Subject */ "./node_modules/rxjs-compat/Subject.js"));
//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "./src/app/service/api.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









class ApiService {
    constructor(http, _commService, _router) {
        this.http = http;
        this._commService = _commService;
        this._router = _router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
    }
    isLoggedIn() {
        return this.getToken() !== null;
    }
    getToken() {
        return localStorage.getItem("accessToken");
    }
    getRequest(endPoint, reqBody) {
        return this.http.get(`${this.baseUrl}${endPoint}`, reqBody);
    }
    getRequestWithoutbody(endPoint) {
        return this.http.get(`${this.baseUrl}${endPoint}`);
    }
    postRequest(endPoint, reqBody) {
        return this.http.post(`${this.baseUrl}${endPoint}`, reqBody);
    }
    postRequestById(endPoint, reqBody) {
        return this.http.post(`${this.baseUrl}${endPoint}`, reqBody);
    }
    putRequest(endPoint, reqBody) {
        return this.http.put(`${this.baseUrl}${endPoint}`, reqBody);
    }
    deleteRequest(endPoint, reqBody) {
        return this.http.delete(`${this.baseUrl}${endPoint}`, reqBody);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map