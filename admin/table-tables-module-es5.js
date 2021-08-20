(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["table-tables-module"], {
    /***/
    "./src/app/table/basic/basic.component.ts":
    /*!************************************************!*\
      !*** ./src/app/table/basic/basic.component.ts ***!
      \************************************************/

    /*! exports provided: BasicComponent */

    /***/
    function srcAppTableBasicBasicComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicComponent", function () {
        return BasicComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var BasicComponent = function BasicComponent() {
        _classCallCheck(this, BasicComponent);
      };

      BasicComponent.ɵfac = function BasicComponent_Factory(t) {
        return new (t || BasicComponent)();
      };

      BasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BasicComponent,
        selectors: [["app-basic"]],
        decls: 427,
        vars: 0,
        consts: [[1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], [1, "table-responsive"], [1, "table"], [1, "label", "label-danger"], [1, "label", "label-info"], [1, "label", "label-warning"], [1, "label", "label-success"], [1, "col-12"], [1, "table", "table-bordered"], [1, "text-nowrap"], [1, "progress", "progress-xs", "margin-vertical-10"], [1, "progress-bar", "bg-danger", 2, "width", "35%", "height", "6px"], [1, "progress-bar", "bg-warning", 2, "width", "50%", "height", "6px"], [1, "progress-bar", "bg-success", 2, "width", "100%", "height", "6px"], [1, "progress-bar", "bg-primary", 2, "width", "70%", "height", "6px"], [1, "progress-bar", "bg-info", 2, "width", "85%", "height", "6px"], [1, "progress-bar", "bg-inverse", 2, "width", "50%", "height", "6px"], [1, "table", "table-striped"], ["href", "javascript:void(0)"], [1, "text-muted"], [1, "fa", "fa-clock-o"], [1, "label", "label-table", "label-success"], [1, "label", "label-table", "label-danger"], [1, "label", "label-table", "label-info"], [1, "table-active"], ["scope", "row"], [1, "table-success"], [1, "table-info"], [1, "table-warning"], [1, "table-danger"]],
        template: function BasicComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Basic Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ".table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Deshmukh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Prohaska");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "@Genelia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Deshmukh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Gaylord");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "@Ritesh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "member");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Sanghani");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Gusikowski");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "@Govinda");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "developer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Roshan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Rogahn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "@Hritik");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "supporter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Joshi");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Hickle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "@Maruti");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "member");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Nigam");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Eichmann");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "@Sonu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "supporter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Bordered Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, ".table-bordered");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "for borders on all sides of the table and cells.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "table", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Task");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Deadline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Lunar probe project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "May 15, 2015");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " active ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Dream successful plan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "July 1, 2015");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "td", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " active ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Office automatization");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Apr 12, 2015");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " inactive ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "The sun climbing plan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Aug 9, 2015");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " active ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Open strategy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Apr 2, 2015");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " active ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Tantas earum numeris");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "July 11, 2015");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " inactive ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Striped Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, ".table-striped");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "for borders on all sides of the table and cells.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "table", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Task");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Deadline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Lunar probe project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "May 15, 2015");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "td", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, " inactive ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Dream successful plan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "July 1, 2015");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "td", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " active ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Office automatization");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Apr 12, 2015");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "td", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " inactive ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "The sun climbing plan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Aug 9, 2015");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "td", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, " active ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Open strategy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Apr 2, 2015");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "td", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, " active ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Tantas earum numeris");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "July 11, 2015");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "td", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, " inactive ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Responsive Table ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Create responsive tables by wrapping any ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, ".table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, " in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, ".table-responsive ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "Invoice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "User");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Order #26589");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Herman Beck");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, " Oct 16, 2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "$45.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Paid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "EN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Order #58746");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Mary Adams");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, " Oct 12, 2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "$245.30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "Shipped");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "CN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "Order #98458");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Caleb Richards");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, " May 18, 2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "$38.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Shipped");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "AU");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "Order #32658");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "June Lane");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](351, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, " Apr 28, 2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "$77.99");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Paid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "FR");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "Contextual Classes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "Use classes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "( .table-active, .table-success, .table-info, .table-warning, .table-danger )");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, " to color table rows or individual cells");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "Column heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "Column heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "Column heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "tr", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "td", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "Column content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "Column content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "Column content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "tr", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "td", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "Column content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "Column content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "Column content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "tr", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "td", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "Column content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "Column content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "Column content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "tr", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "td", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "Column content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "Column content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "Column content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "tr", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "td", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "Column content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, "Column content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, "Column content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-basic',
            templateUrl: './basic.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/table/data-table/company.json":
    /*!***********************************************!*\
      !*** ./src/app/table/data-table/company.json ***!
      \***********************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, default */

    /***/
    function srcAppTableDataTableCompanyJson(module) {
      module.exports = JSON.parse("[{\"name\":\"Ethel Price\",\"gender\":\"female\",\"company\":\"Johnson, Johnson and Partners, LLC CMP DDC\",\"age\":22},{\"name\":\"Claudine Neal\",\"gender\":\"female\",\"company\":\"Sealoud\",\"age\":55},{\"name\":\"Beryl Rice\",\"gender\":\"female\",\"company\":\"Velity\",\"age\":67},{\"name\":\"Wilder Gonzales\",\"gender\":\"male\",\"company\":\"Geekko\"},{\"name\":\"Georgina Schultz\",\"gender\":\"female\",\"company\":\"Suretech\"},{\"name\":\"Carroll Buchanan\",\"gender\":\"male\",\"company\":\"Ecosys\"},{\"name\":\"Valarie Atkinson\",\"gender\":\"female\",\"company\":\"Hopeli\"},{\"name\":\"Schroeder Mathews\",\"gender\":\"male\",\"company\":\"Polarium\"},{\"name\":\"Lynda Mendoza\",\"gender\":\"female\",\"company\":\"Dogspa\"},{\"name\":\"Sarah Massey\",\"gender\":\"female\",\"company\":\"Bisba\"},{\"name\":\"Robles Boyle\",\"gender\":\"male\",\"company\":\"Comtract\"},{\"name\":\"Evans Hickman\",\"gender\":\"male\",\"company\":\"Parleynet\"},{\"name\":\"Dawson Barber\",\"gender\":\"male\",\"company\":\"Dymi\"},{\"name\":\"Bruce Strong\",\"gender\":\"male\",\"company\":\"Xyqag\"},{\"name\":\"Nellie Whitfield\",\"gender\":\"female\",\"company\":\"Exospace\"},{\"name\":\"Jackson Macias\",\"gender\":\"male\",\"company\":\"Aquamate\"},{\"name\":\"Pena Pena\",\"gender\":\"male\",\"company\":\"Quarx\"},{\"name\":\"Lelia Gates\",\"gender\":\"female\",\"company\":\"Proxsoft\"},{\"name\":\"Letitia Vasquez\",\"gender\":\"female\",\"company\":\"Slumberia\"},{\"name\":\"Trevino Moreno\",\"gender\":\"male\",\"company\":\"Conjurica\"},{\"name\":\"Barr Page\",\"gender\":\"male\",\"company\":\"Apex\"},{\"name\":\"Kirkland Merrill\",\"gender\":\"male\",\"company\":\"Utara\"},{\"name\":\"Blanche Conley\",\"gender\":\"female\",\"company\":\"Imkan\"},{\"name\":\"Atkins Dunlap\",\"gender\":\"male\",\"company\":\"Comveyor\"},{\"name\":\"Everett Foreman\",\"gender\":\"male\",\"company\":\"Maineland\"},{\"name\":\"Gould Randolph\",\"gender\":\"male\",\"company\":\"Intergeek\"},{\"name\":\"Kelli Leon\",\"gender\":\"female\",\"company\":\"Verbus\"},{\"name\":\"Freda Mason\",\"gender\":\"female\",\"company\":\"Accidency\"},{\"name\":\"Tucker Maxwell\",\"gender\":\"male\",\"company\":\"Lumbrex\"},{\"name\":\"Yvonne Parsons\",\"gender\":\"female\",\"company\":\"Zolar\"},{\"name\":\"Woods Key\",\"gender\":\"male\",\"company\":\"Bedder\"},{\"name\":\"Stephens Reilly\",\"gender\":\"male\",\"company\":\"Acusage\"},{\"name\":\"Mcfarland Sparks\",\"gender\":\"male\",\"company\":\"Comvey\"},{\"name\":\"Jocelyn Sawyer\",\"gender\":\"female\",\"company\":\"Fortean\"},{\"name\":\"Renee Barr\",\"gender\":\"female\",\"company\":\"Kiggle\"},{\"name\":\"Gaines Beck\",\"gender\":\"male\",\"company\":\"Sequitur\"},{\"name\":\"Luisa Farrell\",\"gender\":\"female\",\"company\":\"Cinesanct\"},{\"name\":\"Robyn Strickland\",\"gender\":\"female\",\"company\":\"Obones\"},{\"name\":\"Roseann Jarvis\",\"gender\":\"female\",\"company\":\"Aquazure\"},{\"name\":\"Johnston Park\",\"gender\":\"male\",\"company\":\"Netur\"},{\"name\":\"Wong Craft\",\"gender\":\"male\",\"company\":\"Opticall\"},{\"name\":\"Merritt Cole\",\"gender\":\"male\",\"company\":\"Techtrix\"},{\"name\":\"Dale Byrd\",\"gender\":\"female\",\"company\":\"Kneedles\"},{\"name\":\"Sara Delgado\",\"gender\":\"female\",\"company\":\"Netagy\"},{\"name\":\"Alisha Myers\",\"gender\":\"female\",\"company\":\"Intradisk\"},{\"name\":\"Felecia Smith\",\"gender\":\"female\",\"company\":\"Futurity\"},{\"name\":\"Neal Harvey\",\"gender\":\"male\",\"company\":\"Pyramax\"},{\"name\":\"Nola Miles\",\"gender\":\"female\",\"company\":\"Sonique\"},{\"name\":\"Herring Pierce\",\"gender\":\"male\",\"company\":\"Geeketron\"},{\"name\":\"Shelley Rodriquez\",\"gender\":\"female\",\"company\":\"Bostonic\"},{\"name\":\"Cora Chase\",\"gender\":\"female\",\"company\":\"Isonus\"},{\"name\":\"Mckay Santos\",\"gender\":\"male\",\"company\":\"Amtas\"},{\"name\":\"Hilda Crane\",\"gender\":\"female\",\"company\":\"Jumpstack\"},{\"name\":\"Jeanne Lindsay\",\"gender\":\"female\",\"company\":\"Genesynk\"},{\"name\":\"Frye Sharpe\",\"gender\":\"male\",\"company\":\"Eplode\"},{\"name\":\"Velma Fry\",\"gender\":\"female\",\"company\":\"Ronelon\"},{\"name\":\"Reyna Espinoza\",\"gender\":\"female\",\"company\":\"Prismatic\"},{\"name\":\"Spencer Sloan\",\"gender\":\"male\",\"company\":\"Comverges\"},{\"name\":\"Graham Marsh\",\"gender\":\"male\",\"company\":\"Medifax\"},{\"name\":\"Hale Boone\",\"gender\":\"male\",\"company\":\"Digial\"},{\"name\":\"Wiley Hubbard\",\"gender\":\"male\",\"company\":\"Zensus\"},{\"name\":\"Blackburn Drake\",\"gender\":\"male\",\"company\":\"Frenex\"},{\"name\":\"Franco Hunter\",\"gender\":\"male\",\"company\":\"Rockabye\"},{\"name\":\"Barnett Case\",\"gender\":\"male\",\"company\":\"Norali\"},{\"name\":\"Alexander Foley\",\"gender\":\"male\",\"company\":\"Geekosis\"},{\"name\":\"Lynette Stein\",\"gender\":\"female\",\"company\":\"Macronaut\"},{\"name\":\"Anthony Joyner\",\"gender\":\"male\",\"company\":\"Senmei\"},{\"name\":\"Garrett Brennan\",\"gender\":\"male\",\"company\":\"Bluegrain\"},{\"name\":\"Betsy Horton\",\"gender\":\"female\",\"company\":\"Zilla\"},{\"name\":\"Patton Small\",\"gender\":\"male\",\"company\":\"Genmex\"},{\"name\":\"Lakisha Huber\",\"gender\":\"female\",\"company\":\"Insource\"},{\"name\":\"Lindsay Avery\",\"gender\":\"female\",\"company\":\"Unq\"},{\"name\":\"Ayers Hood\",\"gender\":\"male\",\"company\":\"Accuprint\"},{\"name\":\"Torres Durham\",\"gender\":\"male\",\"company\":\"Uplinx\"},{\"name\":\"Vincent Hernandez\",\"gender\":\"male\",\"company\":\"Talendula\"},{\"name\":\"Baird Ryan\",\"gender\":\"male\",\"company\":\"Aquasseur\"},{\"name\":\"Georgia Mercer\",\"gender\":\"female\",\"company\":\"Skyplex\"},{\"name\":\"Francesca Elliott\",\"gender\":\"female\",\"company\":\"Nspire\"},{\"name\":\"Lyons Peters\",\"gender\":\"male\",\"company\":\"Quinex\"},{\"name\":\"Kristi Brewer\",\"gender\":\"female\",\"company\":\"Oronoko\"},{\"name\":\"Tonya Bray\",\"gender\":\"female\",\"company\":\"Insuron\"},{\"name\":\"Valenzuela Huff\",\"gender\":\"male\",\"company\":\"Applideck\"},{\"name\":\"Tiffany Anderson\",\"gender\":\"female\",\"company\":\"Zanymax\"},{\"name\":\"Jerri King\",\"gender\":\"female\",\"company\":\"Eventex\"},{\"name\":\"Rocha Meadows\",\"gender\":\"male\",\"company\":\"Goko\"},{\"name\":\"Marcy Green\",\"gender\":\"female\",\"company\":\"Pharmex\"},{\"name\":\"Kirk Cross\",\"gender\":\"male\",\"company\":\"Portico\"},{\"name\":\"Hattie Mullen\",\"gender\":\"female\",\"company\":\"Zilencio\"},{\"name\":\"Deann Bridges\",\"gender\":\"female\",\"company\":\"Equitox\"},{\"name\":\"Chaney Roach\",\"gender\":\"male\",\"company\":\"Qualitern\"},{\"name\":\"Consuelo Dickson\",\"gender\":\"female\",\"company\":\"Poshome\"},{\"name\":\"Billie Rowe\",\"gender\":\"female\",\"company\":\"Cemention\"},{\"name\":\"Bean Donovan\",\"gender\":\"male\",\"company\":\"Mantro\"},{\"name\":\"Lancaster Patel\",\"gender\":\"male\",\"company\":\"Krog\"},{\"name\":\"Rosa Dyer\",\"gender\":\"female\",\"company\":\"Netility\"},{\"name\":\"Christine Compton\",\"gender\":\"female\",\"company\":\"Bleeko\"},{\"name\":\"Milagros Finch\",\"gender\":\"female\",\"company\":\"Handshake\"},{\"name\":\"Ericka Alvarado\",\"gender\":\"female\",\"company\":\"Lyrichord\"},{\"name\":\"Sylvia Sosa\",\"gender\":\"female\",\"company\":\"Circum\"},{\"name\":\"Humphrey Curtis\",\"gender\":\"male\",\"company\":\"Corepan\"}]");
      /***/
    },

    /***/
    "./src/app/table/data-table/data-table.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/table/data-table/data-table.component.ts ***!
      \**********************************************************/

    /*! exports provided: DatatableComponent */

    /***/
    function srcAppTableDataTableDataTableComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatatableComponent", function () {
        return DatatableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");

      function DatatableComponent_ng_template_21_span_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function DatatableComponent_ng_template_21_span_0_Template_span_dblclick_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var rowIndex_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.editing[rowIndex_r5 + "-name"] = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r6, " ");
        }
      }

      function DatatableComponent_ng_template_21_input_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function DatatableComponent_ng_template_21_input_1_Template_input_blur_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var rowIndex_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.updateValue($event, "name", rowIndex_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r6);
        }
      }

      function DatatableComponent_ng_template_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DatatableComponent_ng_template_21_span_0_Template, 2, 1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatatableComponent_ng_template_21_input_1_Template, 1, 1, "input", 17);
        }

        if (rf & 2) {
          var rowIndex_r5 = ctx.rowIndex;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.editing[rowIndex_r5 + "-name"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.editing[rowIndex_r5 + "-name"]);
        }
      }

      function DatatableComponent_ng_template_23_span_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function DatatableComponent_ng_template_23_span_0_Template_span_dblclick_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var rowIndex_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.editing[rowIndex_r18 + "-gender"] = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r20, " ");
        }
      }

      function DatatableComponent_ng_template_23_select_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DatatableComponent_ng_template_23_select_1_Template_select_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var rowIndex_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.updateValue($event, "gender", rowIndex_r18);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Male");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r20);
        }
      }

      function DatatableComponent_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DatatableComponent_ng_template_23_span_0_Template, 2, 1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatatableComponent_ng_template_23_select_1_Template, 5, 1, "select", 20);
        }

        if (rf & 2) {
          var rowIndex_r18 = ctx.rowIndex;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.editing[rowIndex_r18 + "-gender"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.editing[rowIndex_r18 + "-gender"]);
        }
      }

      function DatatableComponent_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r31 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r31, " ");
        }
      }

      var data = __webpack_require__(
      /*! ./company.json */
      "./src/app/table/data-table/company.json");

      var DatatableComponent = /*#__PURE__*/function () {
        function DatatableComponent() {
          var _this = this;

          _classCallCheck(this, DatatableComponent);

          this.editing = {};
          this.rows = [];
          this.temp = _toConsumableArray(data);
          this.loadingIndicator = true;
          this.reorderable = true;
          this.columns = [{
            prop: 'name'
          }, {
            name: 'Gender'
          }, {
            name: 'Company'
          }];
          this.rows = data;
          this.temp = _toConsumableArray(data);
          setTimeout(function () {
            _this.loadingIndicator = false;
          }, 1500);
        }

        _createClass(DatatableComponent, [{
          key: "updateFilter",
          value: function updateFilter(event) {
            var val = event.target.value.toLowerCase(); // filter our data

            var temp = this.temp.filter(function (d) {
              return d.name.toLowerCase().indexOf(val) !== -1 || !val;
            }); // update the rows

            this.rows = temp; // Whenever the filter changes, always go back to the first page

            this.table = data;
          }
        }, {
          key: "updateValue",
          value: function updateValue(event, cell, rowIndex) {
            console.log('inline editing rowIndex', rowIndex);
            this.editing[rowIndex + '-' + cell] = false;
            this.rows[rowIndex][cell] = event.target.value;
            this.rows = _toConsumableArray(this.rows);
            console.log('UPDATED!', this.rows[rowIndex][cell]);
          }
        }]);

        return DatatableComponent;
      }();

      DatatableComponent.ɵfac = function DatatableComponent_Factory(t) {
        return new (t || DatatableComponent)();
      };

      DatatableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DatatableComponent,
        selectors: [["app-data-table"]],
        viewQuery: function DatatableComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](DatatableComponent, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 26,
        vars: 13,
        consts: [[1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], [1, "w-50", "m-b-30"], ["type", "text", "placeholder", "Type to filter the name column...", 1, "form-control", 3, "keyup"], [1, "material", 3, "columns", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit", "rows"], ["table", ""], [1, "material", 3, "headerHeight", "limit", "columnMode", "footerHeight", "rowHeight", "rows"], ["mydatatable", ""], ["name", "Name"], ["ngx-datatable-cell-template", ""], ["name", "Gender"], ["name", "Age"], ["title", "Double click to edit", 3, "dblclick", 4, "ngIf"], ["autofocus", "", "type", "text", 3, "value", "blur", 4, "ngIf"], ["title", "Double click to edit", 3, "dblclick"], ["autofocus", "", "type", "text", 3, "value", "blur"], [3, "value", "change", 4, "ngIf"], [3, "value", "change"], ["value", "male"], ["value", "female"]],
        template: function DatatableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Filter Option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "This is the filerable Data table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function DatatableComponent_Template_input_keyup_9_listener($event) {
              return ctx.updateFilter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ngx-datatable", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Editing Option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "This is the editing Data table option you can double click on text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngx-datatable", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ngx-datatable-column", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DatatableComponent_ng_template_21_Template, 2, 2, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ngx-datatable-column", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DatatableComponent_ng_template_23_Template, 2, 2, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ngx-datatable-column", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DatatableComponent_ng_template_25_Template, 1, 1, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.columns)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("limit", 10)("rows", ctx.rows);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerHeight", 50)("limit", 5)("columnMode", "force")("footerHeight", 50)("rowHeight", "auto")("rows", ctx.rows);
          }
        },
        directives: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnCellDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-data-table',
            templateUrl: './data-table.component.html',
            styleUrls: ['./data-table.css']
          }]
        }], function () {
          return [];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [DatatableComponent, {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/table/tables.module.ts":
    /*!****************************************!*\
      !*** ./src/app/table/tables.module.ts ***!
      \****************************************/

    /*! exports provided: TablesModule */

    /***/
    function srcAppTableTablesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesModule", function () {
        return TablesModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _tables_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./tables.routing */
      "./src/app/table/tables.routing.ts");
      /* harmony import */


      var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./data-table/data-table.component */
      "./src/app/table/data-table/data-table.component.ts");
      /* harmony import */


      var _basic_basic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./basic/basic.component */
      "./src/app/table/basic/basic.component.ts");

      var TablesModule = function TablesModule() {
        _classCallCheck(this, TablesModule);
      };

      TablesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TablesModule
      });
      TablesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TablesModule_Factory(t) {
          return new (t || TablesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_tables_routing__WEBPACK_IMPORTED_MODULE_4__["TablesRoutes"]), _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TablesModule, {
          declarations: [_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_5__["DatatableComponent"], _basic_basic_component__WEBPACK_IMPORTED_MODULE_6__["BasicComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TablesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_tables_routing__WEBPACK_IMPORTED_MODULE_4__["TablesRoutes"]), _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"]],
            declarations: [_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_5__["DatatableComponent"], _basic_basic_component__WEBPACK_IMPORTED_MODULE_6__["BasicComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/table/tables.routing.ts":
    /*!*****************************************!*\
      !*** ./src/app/table/tables.routing.ts ***!
      \*****************************************/

    /*! exports provided: TablesRoutes */

    /***/
    function srcAppTableTablesRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesRoutes", function () {
        return TablesRoutes;
      });
      /* harmony import */


      var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./data-table/data-table.component */
      "./src/app/table/data-table/data-table.component.ts");
      /* harmony import */


      var _basic_basic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./basic/basic.component */
      "./src/app/table/basic/basic.component.ts");

      var TablesRoutes = [{
        path: '',
        children: [{
          path: 'datatable',
          component: _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_0__["DatatableComponent"],
          data: {
            title: 'Data Table',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Data Table'
            }]
          }
        }, {
          path: 'basictable',
          component: _basic_basic_component__WEBPACK_IMPORTED_MODULE_1__["BasicComponent"],
          data: {
            title: 'Basic Table',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Basic Table'
            }]
          }
        }]
      }];
      /***/
    }
  }]);
})();
//# sourceMappingURL=table-tables-module-es5.js.map