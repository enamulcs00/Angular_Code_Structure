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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboards-dashboard-module"], {
    /***/
    "./src/app/dashboards/dashboard-components/activity-timeline/activity.component.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/dashboards/dashboard-components/activity-timeline/activity.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ActivityComponent */

    /***/
    function srcAppDashboardsDashboardComponentsActivityTimelineActivityComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityComponent", function () {
        return ActivityComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var ActivityComponent = function ActivityComponent() {
        _classCallCheck(this, ActivityComponent);
      };

      ActivityComponent.ɵfac = function ActivityComponent_Factory(t) {
        return new (t || ActivityComponent)();
      };

      ActivityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ActivityComponent,
        selectors: [["app-activity-timeline"]],
        decls: 89,
        vars: 0,
        consts: [[1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], [1, "profiletimeline", "m-t-40"], [1, "sl-item"], [1, "sl-left"], ["src", "assets/images/users/1.jpg", "alt", "user", 1, "img-circle"], [1, "sl-right"], ["href", "#", 1, "link"], [1, "sl-date"], ["href", "#"], [1, "row"], [1, "col-lg-3", "col-md-6", "m-b-20"], ["src", "assets/images/big/img1.jpg", "alt", "user", 1, "img-responsive", "radius"], ["src", "assets/images/big/img2.jpg", "alt", "user", 1, "img-responsive", "radius"], ["src", "assets/images/big/img3.jpg", "alt", "user", 1, "img-responsive", "radius"], ["src", "assets/images/big/img4.jpg", "alt", "user", 1, "img-responsive", "radius"], [1, "like-comm"], ["href", "javascript:void(0)", 1, "link", "m-r-10"], [1, "fa", "fa-heart", "text-danger"], ["src", "assets/images/users/2.jpg", "alt", "user", 1, "img-circle"], [1, "m-t-20", "row"], [1, "col-md-3", "col-xs-12"], [1, "col-md-9", "col-xs-12"], ["href", "#", 1, "btn", "btn-success"], [1, "like-comm", "m-t-20"], ["src", "assets/images/users/3.jpg", "alt", "user", 1, "img-circle"], [1, "m-t-10"], ["src", "assets/images/users/4.jpg", "alt", "user", 1, "img-circle"]],
        template: function ActivityComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Activity Timeline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "users activity thourout the day");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "John Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "5 minutes ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "assign a new task ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Design weblayout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "2 comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " 5 Love");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "John Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "5 minutes ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Design weblayout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "2 comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " 5 Love");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "John Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "5 minutes ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "2 comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " 5 Love");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "John Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "5 minutes ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "blockquote", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ");

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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivityComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-activity-timeline',
            templateUrl: './activity.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboards/dashboard-components/customer-support/cs.component.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/dashboards/dashboard-components/customer-support/cs.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: CustomerSupportComponent */

    /***/
    function srcAppDashboardsDashboardComponentsCustomerSupportCsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerSupportComponent", function () {
        return CustomerSupportComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");

      function CustomerSupportComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var recentcomment_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", recentcomment_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recentcomment_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recentcomment_r1.comment);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recentcomment_r1.date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label ", recentcomment_r1.labelcolor, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recentcomment_r1.status);
        }
      }

      var CustomerSupportComponent = function CustomerSupportComponent() {
        _classCallCheck(this, CustomerSupportComponent);

        this.recentcomments = [{
          image: 'assets/images/users/1.jpg',
          name: 'James Anderson',
          comment: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
          date: 'April 14, 2016',
          status: 'Pending',
          labelcolor: 'label-light-info'
        }, {
          image: 'assets/images/users/2.jpg',
          name: 'Michael Jorden',
          comment: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
          date: 'April 14, 2016',
          status: 'Approved',
          labelcolor: 'label-light-success'
        }, {
          image: 'assets/images/users/4.jpg',
          name: 'Johnathan Doeting',
          comment: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
          date: 'April 14, 2016',
          status: 'Rejected',
          labelcolor: 'label-light-danger'
        }];
      };

      CustomerSupportComponent.ɵfac = function CustomerSupportComponent_Factory(t) {
        return new (t || CustomerSupportComponent)();
      };

      CustomerSupportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CustomerSupportComponent,
        selectors: [["app-cs"]],
        decls: 8,
        vars: 1,
        consts: [[1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], [1, "comment-widgets"], ["class", "d-flex flex-row comment-row", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row", "comment-row"], [1, "p-2"], [1, "round"], ["alt", "user", "width", "50", 3, "src"], [1, "comment-text", "w-100"], [1, "m-b-5"], [1, "comment-footer"], [1, "text-muted", "pull-right"], [1, "action-icons"], ["href", "javascript:void(0)"], [1, "ti-pencil-alt"], [1, "ti-check"], [1, "ti-heart"]],
        template: function CustomerSupportComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Customer Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "24 new support ticket request generate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomerSupportComponent_div_7_Template, 21, 8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recentcomments);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerSupportComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-cs',
            templateUrl: './cs.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboards/dashboard-components/earning-report/earning-report.component.ts":
    /*!********************************************************************************************!*\
      !*** ./src/app/dashboards/dashboard-components/earning-report/earning-report.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: EarningComponent */

    /***/
    function srcAppDashboardsDashboardComponentsEarningReportEarningReportComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EarningComponent", function () {
        return EarningComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var EarningComponent = function EarningComponent() {
        _classCallCheck(this, EarningComponent);
      };

      EarningComponent.ɵfac = function EarningComponent_Factory(t) {
        return new (t || EarningComponent)();
      };

      EarningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EarningComponent,
        selectors: [["app-earning-report"]],
        decls: 112,
        vars: 0,
        consts: [[1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], [1, "bg-light", "p-20"], [1, "d-flex"], [1, "align-self-center"], [1, "m-b-0"], [1, "ml-auto", "align-self-center"], [1, "text-success"], [1, "table-responsive"], [1, "table", "table-hover", "earning-box"], ["colspan", "2"], [2, "width", "50px"], [1, "round"], ["src", "assets/images/users/8.jpg", "alt", "user", "width", "50"], [1, "text-muted"], [1, "label", "label-success"], [1, "active"], ["src", "assets/images/users/2.jpg", "alt", "user", "width", "50"], [1, "label", "label-info"], [1, "round", "round-success"], ["src", "assets/images/users/1.jpg", "alt", "user", "width", "50"], [1, "label", "label-primary"], [1, "round", "round-primary"], ["src", "assets/images/users/4.jpg", "alt", "user", "width", "50"], [1, "label", "label-danger"], [1, "round", "round-danger"], [1, "label", "label-warning"]],
        template: function EarningComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Earning Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Emplyee earning report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "July 2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Total Earning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "$5470");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Priority");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Earnings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sunil Joshi");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "small", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Web Designer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Low");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "$3.9K");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Andrew");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "small", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Project Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "$23.9K");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Bhavesh patel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "small", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Developer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "High");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "$12.9K");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Nirav Joshi");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "small", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Frontend Eng");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Low");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "$10.9K");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Johnathan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "small", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Graphic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "High");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "$2.6K");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Vishal Doe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "small", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Content Writer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "High");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "$12.9K");

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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EarningComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-earning-report',
            templateUrl: './earning-report.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboards/dashboard-components/feeds/feeds.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/dashboards/dashboard-components/feeds/feeds.component.ts ***!
      \**************************************************************************/

    /*! exports provided: FeedsComponent */

    /***/
    function srcAppDashboardsDashboardComponentsFeedsFeedsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedsComponent", function () {
        return FeedsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");

      function FeedsComponent_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var feed_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](feed_r1.bg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](feed_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", feed_r1.msg, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feed_r1.time);
        }
      }

      var FeedsComponent = function FeedsComponent() {
        _classCallCheck(this, FeedsComponent);

        this.feeds = [{
          bg: 'bg-light-info',
          icon: 'fa fa-bell-o',
          msg: 'You have 4 pending tasks.',
          time: 'Just Now'
        }, {
          bg: 'bg-light-success',
          icon: 'ti-server',
          msg: 'New user registered.',
          time: '5 Hours ago'
        }, {
          bg: 'bg-light-warning',
          icon: 'ti-shopping-cart',
          msg: 'Server #1 overloaded.',
          time: '2 Hours ago'
        }, {
          bg: 'bg-light-danger',
          icon: 'ti-user',
          msg: 'New order received.',
          time: '31 May'
        }, {
          bg: 'bg-light-inverse',
          icon: 'fa fa-bell-o',
          msg: 'New user registered.',
          time: '30 May'
        }, {
          bg: 'bg-light-info',
          icon: 'fa fa-bell-o',
          msg: 'New Version just arrived.',
          time: 'Just Now'
        }, {
          bg: 'bg-light-danger',
          icon: 'ti-user',
          msg: 'New user registered.',
          time: '30 May'
        }, {
          bg: 'bg-light-inverse',
          icon: 'fa fa-bell-o',
          msg: 'New Version just arrived.',
          time: '27 May'
        }, {
          bg: 'bg-light-primary',
          icon: 'ti-settings',
          msg: 'You have 4 pending tasks.',
          time: '27 May'
        }];
      };

      FeedsComponent.ɵfac = function FeedsComponent_Factory(t) {
        return new (t || FeedsComponent)();
      };

      FeedsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FeedsComponent,
        selectors: [["app-feeds"]],
        decls: 6,
        vars: 1,
        consts: [[1, "card"], [1, "card-body"], [1, "card-title"], [1, "feeds"], [4, "ngFor", "ngForOf"], [1, "text-muted"]],
        template: function FeedsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Feeds");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FeedsComponent_li_5_Template, 6, 8, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.feeds);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-feeds',
            templateUrl: './feeds.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboards/dashboard-components/income-counter/income-counter.component.ts":
    /*!********************************************************************************************!*\
      !*** ./src/app/dashboards/dashboard-components/income-counter/income-counter.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: IncomeCounterComponent */

    /***/
    function srcAppDashboardsDashboardComponentsIncomeCounterIncomeCounterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IncomeCounterComponent", function () {
        return IncomeCounterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng2-charts */
      "./node_modules/ng2-charts/fesm2015/ng2-charts.js");

      var IncomeCounterComponent = function IncomeCounterComponent() {
        _classCallCheck(this, IncomeCounterComponent);

        // bar chart
        this.barChartData = [{
          data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3],
          label: 'Cost'
        }];
        this.barChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
        this.barChartOptions = {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            enabled: false
          },
          scales: {
            xAxes: [{
              display: false
            }],
            yAxes: [{
              display: false
            }]
          }
        };
        this.barChartColors = [{
          backgroundColor: '#26c6da',
          hoverBackgroundColor: '#26c6da',
          hoverBorderWidth: 2,
          hoverBorderColor: '#26c6da'
        }];
        this.barChartLegend = false;
        this.barChartType = 'bar'; // bar chart

        this.barChartData1 = [{
          data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3],
          label: 'Cost'
        }];
        this.barChartLabels1 = ['1', '2', '3', '4', '5', '6', '7'];
        this.barChartOptions1 = {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            enabled: false
          },
          scales: {
            xAxes: [{
              display: false
            }],
            yAxes: [{
              display: false
            }]
          }
        };
        this.barChartColors1 = [{
          backgroundColor: '#7460ee',
          hoverBackgroundColor: '#7460ee',
          hoverBorderWidth: 2,
          hoverBorderColor: '#7460ee'
        }];
        this.barChartLegend1 = false;
        this.barChartType1 = 'bar'; // bar chart

        this.barChartData2 = [{
          data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3],
          label: 'Cost'
        }];
        this.barChartLabels2 = ['1', '2', '3', '4', '5', '6', '7'];
        this.barChartOptions2 = {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            enabled: false
          },
          scales: {
            xAxes: [{
              display: false
            }],
            yAxes: [{
              display: false
            }]
          }
        };
        this.barChartColors2 = [{
          backgroundColor: '#03a9f3',
          hoverBackgroundColor: '#03a9f3',
          hoverBorderWidth: 2,
          hoverBorderColor: '#03a9f3'
        }];
        this.barChartLegend2 = false;
        this.barChartType2 = 'bar'; // bar chart

        this.barChartData3 = [{
          data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3],
          label: 'Cost'
        }];
        this.barChartLabels3 = ['1', '2', '3', '4', '5', '6', '7'];
        this.barChartOptions3 = {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            enabled: false
          },
          scales: {
            xAxes: [{
              display: false
            }],
            yAxes: [{
              display: false
            }]
          }
        };
        this.barChartColors3 = [{
          backgroundColor: '#f62d51',
          hoverBackgroundColor: '#f62d51',
          hoverBorderWidth: 2,
          hoverBorderColor: '#f62d51'
        }];
        this.barChartLegend3 = false;
        this.barChartType3 = 'bar';
      };

      IncomeCounterComponent.ɵfac = function IncomeCounterComponent_Factory(t) {
        return new (t || IncomeCounterComponent)();
      };

      IncomeCounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IncomeCounterComponent,
        selectors: [["app-income-counter"]],
        decls: 53,
        vars: 24,
        consts: [[1, "row"], [1, "col-lg-3", "col-md-6"], [1, "card"], [1, "card-body"], [1, "d-flex", "align-items-center"], [1, "ti-angle-down", "font-14", "text-danger"], [1, "ml-auto"], [2, "height", "55px", "width", "70px"], ["baseChart", "", 3, "datasets", "labels", "options", "colors", "legend", "chartType"], [1, ""], [1, "ti-angle-up", "font-14", "text-success"]],
        template: function IncomeCounterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "2376 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Order Received");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "canvas", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "3670 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Tax Deduction");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "canvas", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "1562 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Revenue Stats");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "canvas", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "35% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Yearly Sales");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "canvas", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("colors", ctx.barChartColors)("legend", ctx.barChartLegend)("chartType", ctx.barChartType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData1)("labels", ctx.barChartLabels1)("options", ctx.barChartOptions1)("colors", ctx.barChartColors1)("legend", ctx.barChartLegend1)("chartType", ctx.barChartType1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData2)("labels", ctx.barChartLabels2)("options", ctx.barChartOptions2)("colors", ctx.barChartColors2)("legend", ctx.barChartLegend2)("chartType", ctx.barChartType2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData3)("labels", ctx.barChartLabels3)("options", ctx.barChartOptions3)("colors", ctx.barChartColors3)("legend", ctx.barChartLegend3)("chartType", ctx.barChartType3);
          }
        },
        directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IncomeCounterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-income-counter',
            templateUrl: './income-counter.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboards/dashboard-components/page-analyzer/pa.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/dashboards/dashboard-components/page-analyzer/pa.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: PageAnalyzerComponent */

    /***/
    function srcAppDashboardsDashboardComponentsPageAnalyzerPaComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageAnalyzerComponent", function () {
        return PageAnalyzerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var PageAnalyzerComponent = function PageAnalyzerComponent() {
        _classCallCheck(this, PageAnalyzerComponent);
      };

      PageAnalyzerComponent.ɵfac = function PageAnalyzerComponent_Factory(t) {
        return new (t || PageAnalyzerComponent)();
      };

      PageAnalyzerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageAnalyzerComponent,
        selectors: [["app-pa"]],
        decls: 29,
        vars: 0,
        consts: [[1, "row"], [1, "col-md-6", "col-lg-3", "col-xlg-3"], [1, "card", "card-inverse", "card-info"], [1, "box", "bg-info", "text-center"], [1, "font-light", "text-white"], [1, "text-white"], [1, "card", "card-primary", "card-inverse"], [1, "box", "text-center"], [1, "card", "card-inverse", "card-success"], [1, "card", "card-inverse", "card-warning"]],
        template: function PageAnalyzerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "2,064");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sessions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "1,738");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Users");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "5963");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Page Views");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "10%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Bounce Rate");

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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageAnalyzerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-pa',
            templateUrl: './pa.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboards/dashboard-components/profile/profile.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/dashboards/dashboard-components/profile/profile.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function srcAppDashboardsDashboardComponentsProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var ProfileComponent = function ProfileComponent() {
        _classCallCheck(this, ProfileComponent);
      };

      ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)();
      };

      ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile-box"]],
        decls: 50,
        vars: 0,
        consts: [[1, "card"], [1, "card-body"], [1, "d-flex", "flex-row"], [1, ""], ["src", "assets/images/users/1.jpg", "alt", "user", "width", "100", 1, "img-circle"], [1, "p-l-20"], [1, "font-medium"], [1, "btn", "btn-success"], [1, "ti-plus"], [1, "row", "m-t-40"], [1, "col", "b-r"], [1, "font-light"], [1, "col"], [1, "text-center", "aboutscroll"], [1, "list-icons", "d-flex", "flex-item", "text-center"], ["href", "javascript:void(0)", "data-toggle", "tooltip", "title", "", "data-original-title", "Website"], [1, "fa", "fa-globe", "font-20"], ["href", "javascript:void(0)", "data-toggle", "tooltip", "title", "", "data-original-title", "twitter"], [1, "fa", "fa-twitter", "font-20"], ["href", "javascript:void(0)", "data-toggle", "tooltip", "title", "", "data-original-title", "Facebook"], [1, "fa", "fa-facebook-square", "font-20"], ["href", "javascript:void(0)", "data-toggle", "tooltip", "title", "", "data-original-title", "Youtube"], [1, "fa", "fa-youtube-play", "font-20"], ["href", "javascript:void(0)", "data-toggle", "tooltip", "title", "", "data-original-title", "Linkd-in"], [1, "fa", "fa-linkedin-square", "font-20"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Daniel Kristeen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "UIUX Designer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Follow");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "14");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Photos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "54");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Videos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "145");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Tasks");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Lorem ipsum dolor sit ametetur adipisicing elit, sed do eiusmod tempor incididunt adipisicing elit. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 24);

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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-profile-box',
            templateUrl: './profile.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboards/dashboard-components/project-counter/project-counter.component.ts":
    /*!**********************************************************************************************!*\
      !*** ./src/app/dashboards/dashboard-components/project-counter/project-counter.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ProjectCounterComponent */

    /***/
    function srcAppDashboardsDashboardComponentsProjectCounterProjectCounterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectCounterComponent", function () {
        return ProjectCounterComponent;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");

      function ProjectCounterComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Users ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Total Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ngb-progressbar", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.items == null ? null : ctx_r0.items.countUsers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showValue", false)("value", 50);
        }
      }

      var ProjectCounterComponent = /*#__PURE__*/function () {
        function ProjectCounterComponent() {
          _classCallCheck(this, ProjectCounterComponent);
        }

        _createClass(ProjectCounterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.a = JSON.parse(localStorage.getItem('user')).role;
            this.b = JSON.parse(localStorage.getItem('permissionItems'));
            console.log(this.a, this.b, "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");

            if (this.a == 2) {
              this.b.forEach(function (element) {
                if (element.label == "Users") {
                  _this.view = element.isView, _this.add = element.isAdd, _this.edit = element.isEdit, _this["delete"] = element.isDelete;
                }
              });
              console.log(this.add);
              console.log(this.edit);
              console.log(this["delete"]);
            }
          }
        }]);

        return ProjectCounterComponent;
      }();

      ProjectCounterComponent.ɵfac = function ProjectCounterComponent_Factory(t) {
        return new (t || ProjectCounterComponent)();
      };

      ProjectCounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProjectCounterComponent,
        selectors: [["app-project-counter"]],
        inputs: {
          items: ["item", "items"]
        },
        decls: 16,
        vars: 4,
        consts: [[1, "m-b-30"], [1, "card", "mb-2", 2, "cursor", "pointer"], ["class", "card-body", 4, "ngIf"], [1, "card", "mb-2"], [1, "card-body"], [1, "row"], [1, "col-12"], [1, "m-b-0", "text-success"], [1, "mdi", "mdi-alert-circle"], [1, ""], [1, "card-subtitle"], ["type", "success", 3, "showValue", "value"], ["routerLink", "/users/userlist", 1, "col-12"], [1, "m-b-0", "text-info"], [1, "mdi", "mdi-account-multiple"], ["type", "info", 3, "showValue", "value"]],
        template: function ProjectCounterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectCounterComponent_div_2_Template, 12, 3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Newsletters ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Total Newsletters");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ngb-progressbar", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view || ctx.a == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.items == null ? null : ctx.items.countVolume);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showValue", false)("value", 50);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectCounterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-project-counter',
            templateUrl: './project-counter.component.html'
          }]
        }], function () {
          return [];
        }, {
          items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['item']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/dashboards/dashboard-components/project/project.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/dashboards/dashboard-components/project/project.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ProjectComponent */

    /***/
    function srcAppDashboardsDashboardComponentsProjectProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectComponent", function () {
        return ProjectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var ProjectComponent = function ProjectComponent() {
        _classCallCheck(this, ProjectComponent);
      };

      ProjectComponent.ɵfac = function ProjectComponent_Factory(t) {
        return new (t || ProjectComponent)();
      };

      ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProjectComponent,
        selectors: [["app-project"]],
        decls: 81,
        vars: 0,
        consts: [[1, "card"], [1, "card-body"], [1, "card-title"], [1, "table-responsive", "m-t-40"], [1, "table", "stylish-table"], ["colspan", "2"], [2, "width", "50px"], [1, "round"], [1, "text-muted"], [1, "label", "label-light-success"], [1, "active"], ["src", "assets/images/users/2.jpg", "alt", "user", "width", "50"], [1, "label", "label-light-info"], [1, "round", "round-success"], [1, "label", "label-light-danger"], [1, "round", "round-primary"]],
        template: function ProjectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Projects of the Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Assigned");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Priority");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Budget");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "S");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sunil Joshi");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "small", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Web Designer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Elite Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Low");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "$3.9K");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Andrew");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "small", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Project Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Real Homes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "$23.9K");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Bhavesh patel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "small", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Developer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "MedicalPro Theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "High");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "$12.9K");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "N");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Nirav Joshi");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "small", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Frontend Eng");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Elite Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Low");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "$10.9K");

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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-project',
            templateUrl: './project.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboards/dashboard-components/recent-comment/recent-comment.component.ts":
    /*!********************************************************************************************!*\
      !*** ./src/app/dashboards/dashboard-components/recent-comment/recent-comment.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: RecentcommentComponent */

    /***/
    function srcAppDashboardsDashboardComponentsRecentCommentRecentCommentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecentcommentComponent", function () {
        return RecentcommentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");

      function RecentcommentComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var recentcomment_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", recentcomment_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recentcomment_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recentcomment_r1.comment);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recentcomment_r1.date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label ", recentcomment_r1.labelcolor, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recentcomment_r1.status);
        }
      }

      var RecentcommentComponent = function RecentcommentComponent() {
        _classCallCheck(this, RecentcommentComponent);

        this.recentcomments = [{
          image: 'assets/images/users/1.jpg',
          name: 'James Anderson',
          comment: // tslint:disable-next-line:max-line-length
          'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.',
          date: 'April 14, 2016',
          status: 'Pending',
          labelcolor: 'label-light-info'
        }, {
          image: 'assets/images/users/2.jpg',
          name: 'Michael Jorden',
          comment: // tslint:disable-next-line:max-line-length
          'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.',
          date: 'April 14, 2016',
          status: 'Approved',
          labelcolor: 'label-light-success'
        }, {
          image: 'assets/images/users/4.jpg',
          name: 'Johnathan Doeting',
          comment: // tslint:disable-next-line:max-line-length
          'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.',
          date: 'April 14, 2016',
          status: 'Rejected',
          labelcolor: 'label-light-danger'
        }, {
          image: 'assets/images/users/5.jpg',
          name: 'James Anderson',
          comment: // tslint:disable-next-line:max-line-length
          'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.',
          date: 'April 14, 2016',
          status: 'Pending',
          labelcolor: 'label-light-info'
        }];
      };

      RecentcommentComponent.ɵfac = function RecentcommentComponent_Factory(t) {
        return new (t || RecentcommentComponent)();
      };

      RecentcommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RecentcommentComponent,
        selectors: [["app-recent-comment"]],
        decls: 6,
        vars: 1,
        consts: [[1, "card"], [1, "card-body"], [1, "card-title"], [1, "comment-widgets"], ["class", "d-flex flex-row comment-row", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row", "comment-row"], [1, "p-2"], [1, "round"], ["alt", "user", "width", "50", 3, "src"], [1, "comment-text", "w-100"], [1, "m-b-5"], [1, "comment-footer"], [1, "text-muted", "pull-right"], [1, "action-icons"], ["href", "javascript:void(0)"], [1, "ti-pencil-alt"], [1, "ti-check"], [1, "ti-heart"]],
        template: function RecentcommentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Recent Comments");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RecentcommentComponent_div_5_Template, 21, 8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recentcomments);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecentcommentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-recent-comment',
            templateUrl: './recent-comment.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboards/dashboard-components/recent-message/recent-message.component.ts":
    /*!********************************************************************************************!*\
      !*** ./src/app/dashboards/dashboard-components/recent-message/recent-message.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: RecentmessageComponent */

    /***/
    function srcAppDashboardsDashboardComponentsRecentMessageRecentMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecentmessageComponent", function () {
        return RecentmessageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");

      function RecentmessageComponent_a_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var recentmessage_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", recentmessage_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("profile-status ", recentmessage_r1.status, " pull-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recentmessage_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recentmessage_r1.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recentmessage_r1.time);
        }
      }

      var RecentmessageComponent = function RecentmessageComponent() {
        _classCallCheck(this, RecentmessageComponent);

        this.recentmessages = [{
          image: 'assets/images/users/1.jpg',
          name: 'James Anderson',
          message: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
          time: '9:45 AM',
          status: 'online'
        }, {
          image: 'assets/images/users/2.jpg',
          name: 'Jon Doe',
          message: 'Simply dummy text of the printing and typesetting industry.',
          time: '9:30 AM',
          status: 'busy'
        }, {
          image: 'assets/images/users/4.jpg',
          name: 'Jane Doe',
          message: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
          time: '9:10 AM',
          status: 'away'
        }, {
          image: 'assets/images/users/5.jpg',
          name: 'Marriah Carry',
          message: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
          time: '9:08 AM',
          status: 'offline'
        }, {
          image: 'assets/images/users/6.jpg',
          name: 'Steave Rogers',
          message: 'Simply dummy text of the printing and typesetting industry.',
          time: '9:02 AM',
          status: 'online'
        }, {
          image: 'assets/images/users/5.jpg',
          name: 'Jared White',
          message: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
          time: '9:00 AM',
          status: 'away'
        }];
      };

      RecentmessageComponent.ɵfac = function RecentmessageComponent_Factory(t) {
        return new (t || RecentmessageComponent)();
      };

      RecentmessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RecentmessageComponent,
        selectors: [["app-recent-message"]],
        decls: 7,
        vars: 1,
        consts: [[1, "card"], [1, "card-body"], [1, "card-title"], [1, "message-box"], [1, "message-widget", "message-scroll"], ["href", "#", 4, "ngFor", "ngForOf"], ["href", "#"], [1, "user-img"], ["alt", "user", 1, "img-circle", 3, "src"], [1, "mail-contnet"], [1, "mail-desc"], [1, "time"]],
        template: function RecentmessageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Recent Messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RecentmessageComponent_a_6_Template, 11, 7, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recentmessages);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecentmessageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-recent-message',
            templateUrl: './recent-message.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboards/dashboard-components/social-slider/social-slider.component.ts":
    /*!******************************************************************************************!*\
      !*** ./src/app/dashboards/dashboard-components/social-slider/social-slider.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: SocialSliderComponent */

    /***/
    function srcAppDashboardsDashboardComponentsSocialSliderSocialSliderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SocialSliderComponent", function () {
        return SocialSliderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

      function SocialSliderComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "25th Jan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Now Get ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "50% Off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " on buy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "- post form wrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SocialSliderComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "25th Jan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Now Get ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "60% Off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " on buy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "- post form wrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SocialSliderComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "25th Jan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Now Get ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "70% Off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " on buy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "- post form wrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SocialSliderComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "25th Jan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Now Get ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "50% Off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " on buy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "- Eric fandanc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SocialSliderComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "25th Jan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Now Get ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "60% Off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " on buy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "- Numbro zomix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SocialSliderComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "25th Jan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Now Get ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "70% Off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " on buy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "- Sitrix stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SocialSliderComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "25th Jan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tweet now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "50% Off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " on buy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "- @shoperstaff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SocialSliderComponent_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "25th Jan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sachin #star ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "60% Off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " on buy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "- #shoperstaff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SocialSliderComponent_ng_template_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "25th Jan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Now Get ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "70% Off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " on buy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "- @shoperstaff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SocialSliderComponent = function SocialSliderComponent() {
        _classCallCheck(this, SocialSliderComponent);
      };

      SocialSliderComponent.ɵfac = function SocialSliderComponent_Factory(t) {
        return new (t || SocialSliderComponent)();
      };

      SocialSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SocialSliderComponent,
        selectors: [["social-slider"]],
        decls: 22,
        vars: 0,
        consts: [[1, "row"], [1, "col-lg-4"], [1, "card", "card-inverse", "card-success"], [1, "card-body"], [1, "no-control-indicator"], ["ngbSlide", ""], [1, "card", "card-inverse", "card-danger"], [1, "card", "card-inverse", "card-info"], [1, ""], [1, "fa", "fa-facebook", "fa-2x", "text-white"], [1, "text-white"], [1, "text-white", "font-light"], [1, "font-bold"], [1, "text-white", "m-t-20"], [1, "fa", "fa-google-plus", "fa-2x", "text-white"], [1, "fa", "fa-twitter", "fa-2x", "text-white"]],
        template: function SocialSliderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngb-carousel", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SocialSliderComponent_ng_template_5_Template, 13, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SocialSliderComponent_ng_template_6_Template, 13, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SocialSliderComponent_ng_template_7_Template, 13, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ngb-carousel", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SocialSliderComponent_ng_template_12_Template, 13, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SocialSliderComponent_ng_template_13_Template, 13, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SocialSliderComponent_ng_template_14_Template, 13, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngb-carousel", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SocialSliderComponent_ng_template_19_Template, 13, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SocialSliderComponent_ng_template_20_Template, 13, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SocialSliderComponent_ng_template_21_Template, 13, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialSliderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            // tslint:disable-next-line:component-selector
            selector: 'social-slider',
            templateUrl: './social-slider.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboards/dashboard-components/to-do/todo.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/dashboards/dashboard-components/to-do/todo.component.ts ***!
      \*************************************************************************/

    /*! exports provided: TodoComponent */

    /***/
    function srcAppDashboardsDashboardComponentsToDoTodoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodoComponent", function () {
        return TodoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

      var TodoComponent = function TodoComponent() {
        _classCallCheck(this, TodoComponent);
      };

      TodoComponent.ɵfac = function TodoComponent_Factory(t) {
        return new (t || TodoComponent)();
      };

      TodoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TodoComponent,
        selectors: [["to-do"]],
        decls: 80,
        vars: 0,
        consts: [[1, "card"], [1, "card-body"], [1, "card-title"], [1, "to-do-widget", "m-t-20"], ["data-role", "tasklist", 1, "list-task", "todo-list", "list-group", "m-b-0"], ["data-role", "task", 1, "list-group-item", "todo-item"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "customCheck", 1, "custom-control-input"], ["for", "customCheck", 1, "custom-control-label", "todo-label"], [1, "todo-desc"], [1, "list-style-none", "assignedto"], [1, "assignee"], ["src", "assets/images/users/1.jpg", "alt", "user", "data-toggle", "tooltip", "data-placement", "top", "title", "", "data-original-title", "Steave", 1, "assignee-img"], ["src", "assets/images/users/2.jpg", "alt", "user", "data-toggle", "tooltip", "data-placement", "top", "title", "", "data-original-title", "Jessica", 1, "assignee-img"], ["src", "assets/images/users/3.jpg", "alt", "user", "data-toggle", "tooltip", "data-placement", "top", "title", "", "data-original-title", "Priyanka", 1, "assignee-img"], ["src", "assets/images/users/4.jpg", "alt", "user", "data-toggle", "tooltip", "data-placement", "top", "title", "", "data-original-title", "Selina", 1, "assignee-img"], ["type", "checkbox", "id", "customCheck1", 1, "custom-control-input"], ["for", "customCheck1", 1, "custom-control-label", "todo-label"], [1, "label", "label-light-danger", "float-right"], ["src", "assets/images/users/3.jpg", "alt", "user", "ngbTooltip", "Priyanka", "data-placement", "top"], ["src", "assets/images/users/4.jpg", "alt", "user", "ngbTooltip", "Selina", "data-placement", "top"], ["data-role", "task", 1, "list-group-item"], ["id", "td3", "name", "radio-stacked4", "type", "checkbox", 1, "custom-control-input"], ["for", "td3", 1, "custom-control-label"], [1, "item-date"], ["id", "td5", "name", "radio-stacked5", "type", "checkbox", 1, "custom-control-input"], ["for", "td5", 1, "custom-control-label"], [1, "label", "label-light-warning", "float-right"], ["id", "td6", "name", "radio-stacked6", "type", "checkbox", 1, "custom-control-input"], ["for", "td6", 1, "custom-control-label"], [1, "label", "label-light-success", "float-right"], [1, "assignedto"], ["src", "assets/images/users/1.jpg", "alt", "user", "ngbTooltip", "Assign to Steave", "data-placement", "top"], ["src", "assets/images/users/2.jpg", "alt", "user", "ngbTooltip", "Assign to Jessica", "data-placement", "top"], ["src", "assets/images/users/4.jpg", "alt", "user", "ngbTooltip", "Assign to Selina", "data-placement", "top"], ["id", "td7", "name", "radio-stacked4", "type", "checkbox", 1, "custom-control-input"], ["for", "td7", 1, "custom-control-label"], ["id", "td8", "name", "radio-stacked5", "type", "checkbox", 1, "custom-control-input"], ["for", "td8", 1, "custom-control-label"]],
        template: function TodoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "To Do list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Schedule meeting with");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Give Purchase report to");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Today ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Book flight for holiday");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " 26 jun 2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Forward all tasks ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "2 weeks");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " 26 jun 2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Important tasks ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "2 weeks");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ul", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Book flight for holiday");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " 26 jun 2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Forward all tasks ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "2 weeks");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " 26 jun 2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltip"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            // tslint:disable-next-line:component-selector
            selector: 'to-do',
            templateUrl: './todo.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboards/dashboard-components/total-earnings/te.component.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/dashboards/dashboard-components/total-earnings/te.component.ts ***!
      \********************************************************************************/

    /*! exports provided: TotalEarningComponent */

    /***/
    function srcAppDashboardsDashboardComponentsTotalEarningsTeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TotalEarningComponent", function () {
        return TotalEarningComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");

      function TotalEarningComponent_tr_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var totalearning_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", totalearning_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](totalearning_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label ", totalearning_r1.labelcolor, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](totalearning_r1.amount);
        }
      }

      var TotalEarningComponent = function TotalEarningComponent() {
        _classCallCheck(this, TotalEarningComponent);

        this.totalearnings = [{
          image: 'assets/images/users/1.jpg',
          name: 'Andrew Simon',
          labelcolor: 'label-light-info',
          amount: '$2600'
        }, {
          image: 'assets/images/users/2.jpg',
          name: 'Daniel Kristeen',
          labelcolor: 'label-light-success',
          amount: '$2300'
        }, {
          image: 'assets/images/users/3.jpg',
          name: 'Dany John',
          labelcolor: 'label-light-primary',
          amount: '$1200'
        }, {
          image: 'assets/images/users/4.jpg',
          name: 'Chris gyle',
          labelcolor: 'label-light-warning',
          amount: '$4400'
        }, {
          image: 'assets/images/users/5.jpg',
          name: 'Jane Doe',
          labelcolor: 'label-light-danger',
          amount: '$2500'
        }, {
          image: 'assets/images/users/6.jpg',
          name: 'Jon doe',
          labelcolor: 'label-light-megna',
          amount: '$3300'
        }];
      };

      TotalEarningComponent.ɵfac = function TotalEarningComponent_Factory(t) {
        return new (t || TotalEarningComponent)();
      };

      TotalEarningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TotalEarningComponent,
        selectors: [["te"]],
        decls: 11,
        vars: 1,
        consts: [[1, "card", "earning-widget"], [1, "card-body"], [1, "card-title"], [1, "card-title", "m-b-0"], [1, "m-t-0"], [1, "card-body", "b-t"], [1, "table", "v-middle", "no-border"], [4, "ngFor", "ngForOf"], [2, "width", "40px"], ["width", "50", "alt", "logo", 1, "img-circle", 3, "src"], [1, "text-right"]],
        template: function TotalEarningComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Total Earning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "$586");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TotalEarningComponent_tr_10_Template, 8, 6, "tr", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.totalearnings);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TotalEarningComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            // tslint:disable-next-line:component-selector
            selector: 'te',
            templateUrl: './te.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboards/dashboard-components/widget/widget.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/dashboards/dashboard-components/widget/widget.component.ts ***!
      \****************************************************************************/

    /*! exports provided: WidgetComponent */

    /***/
    function srcAppDashboardsDashboardComponentsWidgetWidgetComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WidgetComponent", function () {
        return WidgetComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var WidgetComponent = function WidgetComponent() {
        _classCallCheck(this, WidgetComponent);
      };

      WidgetComponent.ɵfac = function WidgetComponent_Factory(t) {
        return new (t || WidgetComponent)();
      };

      WidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WidgetComponent,
        selectors: [["widget"]],
        decls: 37,
        vars: 0,
        consts: [[1, "row"], [1, "col-lg-4"], [1, "card"], ["src", "assets/images/big/img1.jpg", "alt", "Card", 1, "card-img-top", "img-responsive"], [1, "card-body"], [1, "list-inline", "font-14"], [1, "p-l-0"], ["href", "javascript:void(0)", 1, "link"], [1, "font-normal"], ["src", "assets/images/big/img2.jpg", "alt", "Card", 1, "card-img-top", "img-responsive"], ["src", "assets/images/big/img4.jpg", "alt", "Card", 1, "card-img-top", "img-responsive"]],
        template: function WidgetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "20 May 2016");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "3 Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Featured Hydroflora Pots Garden & Outdoors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "20 May 2016");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "3 Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Featured Hydroflora Pots Garden & Outdoors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "20 May 2016");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "3 Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Featured Hydroflora Pots Garden & Outdoors");

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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            // tslint:disable-next-line:component-selector
            selector: 'widget',
            templateUrl: './widget.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboards/dashboard.module.ts":
    /*!************************************************!*\
      !*** ./src/app/dashboards/dashboard.module.ts ***!
      \************************************************/

    /*! exports provided: DashboardModule */

    /***/
    function srcAppDashboardsDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng2-charts */
      "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
      /* harmony import */


      var _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dashboard1/dashboard1.component */
      "./src/app/dashboards/dashboard1/dashboard1.component.ts");
      /* harmony import */


      var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dashboard2/dashboard2.component */
      "./src/app/dashboards/dashboard2/dashboard2.component.ts");
      /* harmony import */


      var _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./dashboard3/dashboard3.component */
      "./src/app/dashboards/dashboard3/dashboard3.component.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _dashboard_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./dashboard.routing */
      "./src/app/dashboards/dashboard.routing.ts");
      /* harmony import */


      var ng_chartist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-chartist */
      "./node_modules/ng-chartist/fesm2015/ng-chartist.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _dashboard_components_income_counter_income_counter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./dashboard-components/income-counter/income-counter.component */
      "./src/app/dashboards/dashboard-components/income-counter/income-counter.component.ts");
      /* harmony import */


      var _dashboard_components_project_counter_project_counter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./dashboard-components/project-counter/project-counter.component */
      "./src/app/dashboards/dashboard-components/project-counter/project-counter.component.ts");
      /* harmony import */


      var _dashboard_components_project_project_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./dashboard-components/project/project.component */
      "./src/app/dashboards/dashboard-components/project/project.component.ts");
      /* harmony import */


      var _dashboard_components_recent_comment_recent_comment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./dashboard-components/recent-comment/recent-comment.component */
      "./src/app/dashboards/dashboard-components/recent-comment/recent-comment.component.ts");
      /* harmony import */


      var _dashboard_components_recent_message_recent_message_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./dashboard-components/recent-message/recent-message.component */
      "./src/app/dashboards/dashboard-components/recent-message/recent-message.component.ts");
      /* harmony import */


      var _dashboard_components_social_slider_social_slider_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./dashboard-components/social-slider/social-slider.component */
      "./src/app/dashboards/dashboard-components/social-slider/social-slider.component.ts");
      /* harmony import */


      var _dashboard_components_to_do_todo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./dashboard-components/to-do/todo.component */
      "./src/app/dashboards/dashboard-components/to-do/todo.component.ts");
      /* harmony import */


      var _dashboard_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./dashboard-components/profile/profile.component */
      "./src/app/dashboards/dashboard-components/profile/profile.component.ts");
      /* harmony import */


      var _dashboard_components_page_analyzer_pa_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./dashboard-components/page-analyzer/pa.component */
      "./src/app/dashboards/dashboard-components/page-analyzer/pa.component.ts");
      /* harmony import */


      var _dashboard_components_widget_widget_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./dashboard-components/widget/widget.component */
      "./src/app/dashboards/dashboard-components/widget/widget.component.ts");
      /* harmony import */


      var _dashboard_components_customer_support_cs_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./dashboard-components/customer-support/cs.component */
      "./src/app/dashboards/dashboard-components/customer-support/cs.component.ts");
      /* harmony import */


      var _dashboard_components_total_earnings_te_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./dashboard-components/total-earnings/te.component */
      "./src/app/dashboards/dashboard-components/total-earnings/te.component.ts");
      /* harmony import */


      var _dashboard_components_feeds_feeds_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./dashboard-components/feeds/feeds.component */
      "./src/app/dashboards/dashboard-components/feeds/feeds.component.ts");
      /* harmony import */


      var _dashboard_components_earning_report_earning_report_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./dashboard-components/earning-report/earning-report.component */
      "./src/app/dashboards/dashboard-components/earning-report/earning-report.component.ts");
      /* harmony import */


      var _dashboard_components_activity_timeline_activity_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./dashboard-components/activity-timeline/activity.component */
      "./src/app/dashboards/dashboard-components/activity-timeline/activity.component.ts");

      var DashboardModule = function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      };

      DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DashboardModule
      });
      DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DashboardModule_Factory(t) {
          return new (t || DashboardModule)();
        },
        imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_10__["ChartistModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_9__["DashboardRoutes"]), _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, {
          declarations: [_dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_5__["Dashboard1Component"], _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_6__["Dashboard2Component"], _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_7__["Dashboard3Component"], _dashboard_components_income_counter_income_counter_component__WEBPACK_IMPORTED_MODULE_12__["IncomeCounterComponent"], _dashboard_components_project_counter_project_counter_component__WEBPACK_IMPORTED_MODULE_13__["ProjectCounterComponent"], _dashboard_components_project_project_component__WEBPACK_IMPORTED_MODULE_14__["ProjectComponent"], _dashboard_components_recent_comment_recent_comment_component__WEBPACK_IMPORTED_MODULE_15__["RecentcommentComponent"], _dashboard_components_recent_message_recent_message_component__WEBPACK_IMPORTED_MODULE_16__["RecentmessageComponent"], _dashboard_components_social_slider_social_slider_component__WEBPACK_IMPORTED_MODULE_17__["SocialSliderComponent"], _dashboard_components_to_do_todo_component__WEBPACK_IMPORTED_MODULE_18__["TodoComponent"], _dashboard_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"], _dashboard_components_page_analyzer_pa_component__WEBPACK_IMPORTED_MODULE_20__["PageAnalyzerComponent"], _dashboard_components_widget_widget_component__WEBPACK_IMPORTED_MODULE_21__["WidgetComponent"], _dashboard_components_customer_support_cs_component__WEBPACK_IMPORTED_MODULE_22__["CustomerSupportComponent"], _dashboard_components_total_earnings_te_component__WEBPACK_IMPORTED_MODULE_23__["TotalEarningComponent"], _dashboard_components_feeds_feeds_component__WEBPACK_IMPORTED_MODULE_24__["FeedsComponent"], _dashboard_components_earning_report_earning_report_component__WEBPACK_IMPORTED_MODULE_25__["EarningComponent"], _dashboard_components_activity_timeline_activity_component__WEBPACK_IMPORTED_MODULE_26__["ActivityComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_10__["ChartistModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_10__["ChartistModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_9__["DashboardRoutes"]), _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"]],
            declarations: [_dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_5__["Dashboard1Component"], _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_6__["Dashboard2Component"], _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_7__["Dashboard3Component"], _dashboard_components_income_counter_income_counter_component__WEBPACK_IMPORTED_MODULE_12__["IncomeCounterComponent"], _dashboard_components_project_counter_project_counter_component__WEBPACK_IMPORTED_MODULE_13__["ProjectCounterComponent"], _dashboard_components_project_project_component__WEBPACK_IMPORTED_MODULE_14__["ProjectComponent"], _dashboard_components_recent_comment_recent_comment_component__WEBPACK_IMPORTED_MODULE_15__["RecentcommentComponent"], _dashboard_components_recent_message_recent_message_component__WEBPACK_IMPORTED_MODULE_16__["RecentmessageComponent"], _dashboard_components_social_slider_social_slider_component__WEBPACK_IMPORTED_MODULE_17__["SocialSliderComponent"], _dashboard_components_to_do_todo_component__WEBPACK_IMPORTED_MODULE_18__["TodoComponent"], _dashboard_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"], _dashboard_components_page_analyzer_pa_component__WEBPACK_IMPORTED_MODULE_20__["PageAnalyzerComponent"], _dashboard_components_widget_widget_component__WEBPACK_IMPORTED_MODULE_21__["WidgetComponent"], _dashboard_components_customer_support_cs_component__WEBPACK_IMPORTED_MODULE_22__["CustomerSupportComponent"], _dashboard_components_total_earnings_te_component__WEBPACK_IMPORTED_MODULE_23__["TotalEarningComponent"], _dashboard_components_feeds_feeds_component__WEBPACK_IMPORTED_MODULE_24__["FeedsComponent"], _dashboard_components_earning_report_earning_report_component__WEBPACK_IMPORTED_MODULE_25__["EarningComponent"], _dashboard_components_activity_timeline_activity_component__WEBPACK_IMPORTED_MODULE_26__["ActivityComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboards/dashboard.routing.ts":
    /*!*************************************************!*\
      !*** ./src/app/dashboards/dashboard.routing.ts ***!
      \*************************************************/

    /*! exports provided: DashboardRoutes */

    /***/
    function srcAppDashboardsDashboardRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function () {
        return DashboardRoutes;
      });
      /* harmony import */


      var _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard1/dashboard1.component */
      "./src/app/dashboards/dashboard1/dashboard1.component.ts");
      /* harmony import */


      var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard2/dashboard2.component */
      "./src/app/dashboards/dashboard2/dashboard2.component.ts");
      /* harmony import */


      var _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard3/dashboard3.component */
      "./src/app/dashboards/dashboard3/dashboard3.component.ts");

      var DashboardRoutes = [{
        path: '',
        children: [{
          path: 'dashboard',
          component: _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_0__["Dashboard1Component"],
          data: {
            title: 'Dashboard',
            urls: [// { title: 'Dashboard', url: '/dashboard' },
              // { title: 'Modern Dashboard' }
            ]
          }
        }, {
          path: 'dashboard2',
          component: _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_1__["Dashboard2Component"],
          data: {
            title: 'Classic Dashboard',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Classic Dashboard'
            }]
          }
        }, {
          path: 'dashboard3',
          component: _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_2__["Dashboard3Component"],
          data: {
            title: 'Analytical Dashboard',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Analytical Dashboard'
            }]
          }
        }]
      }];
      /***/
    },

    /***/
    "./src/app/dashboards/dashboard1/dashboard1.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/dashboards/dashboard1/dashboard1.component.ts ***!
      \***************************************************************/

    /*! exports provided: Dashboard1Component */

    /***/
    function srcAppDashboardsDashboard1Dashboard1ComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Dashboard1Component", function () {
        return Dashboard1Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/api.service */
      "./src/app/service/api.service.ts");
      /* harmony import */


      var _service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/common.service */
      "./src/app/service/common.service.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng2-charts */
      "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
      /* harmony import */


      var _dashboard_components_project_counter_project_counter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../dashboard-components/project-counter/project-counter.component */
      "./src/app/dashboards/dashboard-components/project-counter/project-counter.component.ts");

      var Dashboard1Component = /*#__PURE__*/function () {
        function Dashboard1Component(router, _apiService, _commService, fb) {
          _classCallCheck(this, Dashboard1Component);

          this.router = router;
          this._apiService = _apiService;
          this._commService = _commService;
          this.fb = fb; // This is for the dashboar line chart
          // lineChart

          this.lineChartData = [{
            data: [50, 130, 80, 70, 180, 105, 250],
            label: 'Users'
          }];
          this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
          this.lineChartOptions = {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                },
                gridLines: {
                  color: 'rgba(120, 130, 140, 0.13)'
                }
              }],
              xAxes: [{
                gridLines: {
                  color: 'rgba(120, 130, 140, 0.13)'
                }
              }]
            },
            lineTension: 10,
            responsive: true,
            maintainAspectRatio: false
          };
          this.lineChartColors = [{
            // grey
            backgroundColor: 'rgba(25,118,210,0.0)',
            borderColor: 'rgba(25,118,210,1)',
            pointBackgroundColor: 'rgba(25,118,210,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(25,118,210,0.5)'
          }, {
            // dark grey
            backgroundColor: 'rgba(38,218,210,0.0)',
            borderColor: 'rgba(38,218,210,1)',
            pointBackgroundColor: 'rgba(38,218,210,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(38,218,210,0.5)'
          }];
          this.lineChartLegend = false;
          this.lineChartType = 'line'; // Doughnut

          this.doughnutChartLabels = ['Sales', 'Earning', 'Cost'];
          this.doughnutChartOptions = {
            responsive: true,
            maintainAspectRatio: false
          };
          this.doughnutChartData = [350, 450, 100];
          this.doughnutChartType = 'doughnut'; // Sales Analytics Pie chart

          this.pieChartLabels = ['Sales', 'Earning', 'Cost'];
          this.pieChartData = [300, 500, 100];
          this.pieChartType = 'pie'; // bar chart

          this.barChartData = [{
            data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3],
            label: 'Cost'
          }];
          this.barChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
          this.barChartOptions = {
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            tooltips: {
              enabled: false
            },
            scales: {
              xAxes: [{
                display: false
              }],
              yAxes: [{
                display: false
              }]
            }
          };
          this.barChartColors = [{
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            hoverBackgroundColor: 'rgba(255, 255, 255, 0.3)',
            hoverBorderWidth: 2,
            hoverBorderColor: 'rgba(255, 255, 255, 0.3)'
          }];
          this.barChartLegend = false;
          this.barChartType = 'bar';
        }

        _createClass(Dashboard1Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getDashboard(2);
          }
        }, {
          key: "getDashboard",
          value: function getDashboard(id) {
            var _this2 = this;

            var reqbody = {
              userData: id
            };
            console.log(reqbody);

            this._apiService.postRequest("api/v1/admin/dashboard", reqbody).subscribe(function (response) {
              _this2.dashboardData = response["data"];
              _this2.userCounts = response["data"]["userCounts"];
              _this2.userCountsNumber = response["data"]["countUsers"];
              _this2.volumeCountNumber = response["data"]["countVolume"];
              console.log("yyyyyyyy", _this2.userCounts);
              console.log("zzzzzzzz", _this2.userCountsNumber);
              _this2.newUserType = [];
              _this2.userlength = [];

              if (_this2.userCounts && _this2.userCounts.length > 0) {
                _this2.userCounts.forEach(function (res) {
                  _this2.userlength.push(res.count);

                  if (id == 2) {
                    _this2.newUserType.push(res.month + "/" + res.year);
                  }

                  if (id == 3) {
                    console.log("newUserCount1");

                    _this2.newUserType.push(res.year);
                  }
                });
              }

              console.log("uuuuuuuuuuuuuuu", _this2.userlength);
              console.log("oooooooooooooooo", _this2.newUserType);
              _this2.lineChartData[0].data = _this2.userlength;
              _this2.lineChartLabels = _this2.newUserType;
            }, function (err) {
              if (err.error.message) _this2._commService.errorMsg(err.error.message);else {
                _this2._commService.errorMsg("No Internet Connection");
              }

              _this2._commService.hideSpinner();
            });
          }
        }]);

        return Dashboard1Component;
      }();

      Dashboard1Component.ɵfac = function Dashboard1Component_Factory(t) {
        return new (t || Dashboard1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
      };

      Dashboard1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Dashboard1Component,
        selectors: [["ng-component"]],
        decls: 22,
        vars: 7,
        consts: [[1, "row"], [1, "col-lg-8"], [1, "card"], [1, "card-body"], [1, "d-flex", "flex-wrap", "m-b-30"], [1, "card-title"], ["ngbDropdown", "", 1, "d-inline-block", "ml-auto"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary", "btn-sm", "mr-2"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1", 1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-item", 3, "click"], [2, "height", "350px"], ["baseChart", "", 3, "datasets", "labels", "options", "colors", "legend", "chartType"], [1, "col-md-4"], [3, "item"], [1, "col-lg-6"]],
        template: function Dashboard1Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Users");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Users Reports ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dashboard1Component_Template_button_click_11_listener() {
              return ctx.getDashboard(2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Monthly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dashboard1Component_Template_button_click_13_listener() {
              return ctx.getDashboard(3);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Yearly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "canvas", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-project-counter", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.dashboardData);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownMenu"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["BaseChartDirective"], _dashboard_components_project_counter_project_counter_component__WEBPACK_IMPORTED_MODULE_7__["ProjectCounterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHMvZGFzaGJvYXJkMS9kYXNoYm9hcmQxLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dashboard1Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: './dashboard1.component.html',
            styleUrls: ['./dashboard1.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: _service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboards/dashboard2/dashboard2.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/dashboards/dashboard2/dashboard2.component.ts ***!
      \***************************************************************/

    /*! exports provided: Dashboard2Component */

    /***/
    function srcAppDashboardsDashboard2Dashboard2ComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Dashboard2Component", function () {
        return Dashboard2Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng2-charts */
      "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _dashboard_components_to_do_todo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../dashboard-components/to-do/todo.component */
      "./src/app/dashboards/dashboard-components/to-do/todo.component.ts");
      /* harmony import */


      var _dashboard_components_recent_comment_recent_comment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../dashboard-components/recent-comment/recent-comment.component */
      "./src/app/dashboards/dashboard-components/recent-comment/recent-comment.component.ts");

      var Dashboard2Component = function Dashboard2Component() {
        _classCallCheck(this, Dashboard2Component);

        // This is for the dashboar line chart
        // lineChart
        this.lineChartData = [{
          data: [0, 130, 80, 70, 180, 105, 250],
          label: 'Site A'
        }, {
          data: [0, 100, 60, 200, 150, 90, 150],
          label: 'Site B'
        }];
        this.lineChartData2 = [{
          data: [0, 5000, 15000, 8000, 15000, 9000, 30000, 0],
          label: 'Site A'
        }, {
          data: [0, 3000, 5000, 2000, 8000, 1000, 5000, 0],
          label: 'Site B'
        }];
        this.lineChartLabels2 = ['1', '2', '3', '4', '5', '6', '7', '8'];
        this.lineChartLabels = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];
        this.lineChartOptions = {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                color: 'rgba(120, 130, 140, 0.13)'
              }
            }],
            xAxes: [{
              gridLines: {
                color: 'rgba(120, 130, 140, 0.13)'
              }
            }]
          },
          responsive: true,
          maintainAspectRatio: false
        };
        this.lineChartOptions2 = {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                color: 'rgba(120, 130, 140, 0.13)'
              }
            }],
            xAxes: [{
              gridLines: {
                color: 'rgba(120, 130, 140, 0.13)'
              }
            }]
          },
          responsive: true,
          maintainAspectRatio: false,
          elements: {
            line: {
              tension: 0
            }
          }
        };
        this.lineChartColors = [{
          // grey
          backgroundColor: 'rgba(25,118,210,0.0)',
          borderColor: 'rgba(25,118,210,1)',
          pointBackgroundColor: 'rgba(25,118,210,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(25,118,210,0.5)'
        }, {
          // dark grey
          backgroundColor: 'rgba(38,218,210,0.0)',
          borderColor: 'rgba(38,218,210,1)',
          pointBackgroundColor: 'rgba(38,218,210,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(38,218,210,0.5)'
        }];
        this.lineChartLegend = true;
        this.lineChartLegend2 = false;
        this.lineChartType = 'line'; // bar chart

        this.barChartData = [{
          data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3],
          label: 'Cost'
        }];
        this.barChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
        this.barChartOptions = {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            enabled: false
          },
          scales: {
            xAxes: [{
              display: false
            }],
            yAxes: [{
              display: false
            }]
          }
        };
        this.barChartColors = [{
          backgroundColor: '#26c6da',
          hoverBackgroundColor: '#26c6da',
          hoverBorderWidth: 2,
          hoverBorderColor: '#26c6da'
        }];
        this.barChartLegend = false;
        this.barChartType = 'bar'; // bar chart

        this.barChartData1 = [{
          data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3],
          label: 'Cost'
        }];
        this.barChartLabels1 = ['1', '2', '3', '4', '5', '6', '7'];
        this.barChartOptions1 = {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            enabled: false
          },
          scales: {
            xAxes: [{
              display: false
            }],
            yAxes: [{
              display: false
            }]
          }
        };
        this.barChartColors1 = [{
          backgroundColor: '#ef5350',
          hoverBackgroundColor: '#ef5350',
          hoverBorderWidth: 2,
          hoverBorderColor: '#ef5350'
        }];
        this.barChartLegend1 = false;
        this.barChartType1 = 'bar'; // bar chart

        this.barChartData2 = [{
          data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3],
          label: 'Cost'
        }];
        this.barChartLabels2 = ['1', '2', '3', '4', '5', '6', '7'];
        this.barChartOptions2 = {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            enabled: false
          },
          scales: {
            xAxes: [{
              display: false
            }],
            yAxes: [{
              display: false
            }]
          }
        };
        this.barChartColors2 = [{
          backgroundColor: '#7460ee',
          hoverBackgroundColor: '#7460ee',
          hoverBorderWidth: 2,
          hoverBorderColor: '#7460ee'
        }];
        this.barChartLegend2 = false;
        this.barChartType2 = 'bar'; // bar chart

        this.barChartData3 = [{
          data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3, 1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3],
          label: 'Cost'
        }];
        this.barChartLabels3 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];
        this.barChartOptions3 = {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            enabled: false
          },
          scales: {
            xAxes: [{
              display: false
            }],
            yAxes: [{
              display: false
            }]
          }
        };
        this.barChartColors3 = [{
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          hoverBackgroundColor: 'rgba(255, 255, 255, 0.5)',
          hoverBorderWidth: 2,
          hoverBorderColor: 'rgba(255, 255, 255, 0.5)'
        }];
        this.barChartLegend3 = false;
        this.barChartType3 = 'bar'; // bar chart

        this.barChartData4 = [{
          data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3, 1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3],
          label: 'Cost'
        }];
        this.barChartLabels4 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];
        this.barChartOptions4 = {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            enabled: false
          },
          scales: {
            xAxes: [{
              display: false
            }],
            yAxes: [{
              display: false
            }]
          }
        };
        this.barChartColors4 = [{
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          hoverBackgroundColor: 'rgba(255, 255, 255, 0.5)',
          hoverBorderWidth: 2,
          hoverBorderColor: 'rgba(255, 255, 255, 0.5)'
        }];
        this.barChartLegend4 = false;
        this.barChartType4 = 'bar';
        this.subtitle = 'This is some text within a card block.';
      };

      Dashboard2Component.ɵfac = function Dashboard2Component_Factory(t) {
        return new (t || Dashboard2Component)();
      };

      Dashboard2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Dashboard2Component,
        selectors: [["ng-component"]],
        decls: 247,
        vars: 54,
        consts: [[1, "row"], [1, "col-lg-9", "col-xlg-9"], [1, "card"], [1, "card-body"], [1, "d-flex", "flex-wrap"], [1, "card-title"], [1, "card-subtitle"], [1, "ml-auto", "align-self-center"], [1, "list-inline", "m-b-0"], [1, "text-muted", "text-success"], [1, "fa", "fa-circle", "font-10", "m-r-10"], [1, "text-muted", "text-info"], [2, "height", "300px"], ["baseChart", "", "height", "130", 3, "datasets", "labels", "options", "colors", "legend", "chartType"], [1, "col-lg-3"], [1, "d-flex"], [1, "align-self-center"], [1, "font-medium", "m-b-0"], [1, "ti-angle-up", "text-success"], [1, "ml-auto"], [2, "height", "40px", "width", "100px"], ["baseChart", "", 3, "datasets", "labels", "options", "colors", "legend", "chartType"], [1, "ti-angle-down", "text-danger"], [1, "col-lg-12"], [1, "table-responsive", "m-t-20"], [1, "table", "nowrap", "stylish-table"], [1, "flag-icon", "flag-icon-us"], [1, "country-name"], ["type", "danger", 3, "showValue", "value"], [1, "flag-icon", "flag-icon-gb"], ["type", "success", 3, "showValue", "value"], [1, "flag-icon", "flag-icon-ca"], ["type", "info", 3, "showValue", "value"], [1, "flag-icon", "flag-icon-de"], ["type", "warning", 3, "showValue", "value"], [1, "flag-icon", "flag-icon-in"], ["type", "inverse", 3, "showValue", "value"], [1, "flag-icon", "flag-icon-au"], [1, "col-lg-4", "col-xlg-3"], [1, "table", "browser", "m-t-30", "no-border"], [2, "width", "40px"], ["src", "assets/images/browser/chrome-logo.png", "alt", "logo"], [1, "text-right"], [1, "label", "label-light-info"], ["src", "assets/images/browser/firefox-logo.png", "alt", "logo"], [1, "label", "label-light-success"], ["src", "assets/images/browser/safari-logo.png", "alt", "logo"], [1, "label", "label-light-primary"], ["src", "assets/images/browser/opera-logo.png", "alt", "logo"], [1, "label", "label-light-danger"], ["src", "assets/images/browser/internet-logo.png", "alt", "logo"], [1, "label", "label-light-megna"], [1, "col-lg-8", "col-xlg-9"], [2, "height", "320px"], [1, "col-lg-6", "col-xlg-6"], [1, "card", "card-inverse", "card-info"], [1, "m-r-20", "align-self-center"], [1, "text-white"], [1, "ti-light-bulb"], [1, "col-8", "align-self-center"], [1, "font-light", "text-white"], [1, "ti-arrow-up"], [1, "col-4", "p-t-10", "p-b-20", "text-right", "align-self-center"], [2, "height", "100px", "width", "100px"], [1, "card", "card-inverse", "card-danger"], [1, "ti-pie-chart"]],
        template: function Dashboard2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Analytics Overview");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Overview of Monthly analytics");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Site A");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h6", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Site B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "canvas", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Total Visit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " 12456");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "canvas", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Bounce rate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " 456");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "canvas", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Page Views");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " 2456");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "canvas", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Visit From Countries");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "table", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Language");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Vists");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "U.S.A");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "18,224");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "ngb-progressbar", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "50%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "U.K");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "12,347");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "ngb-progressbar", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "60%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Canada");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "11,868");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "ngb-progressbar", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "50%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Germany");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "10,346");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "ngb-progressbar", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "50%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "i", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "India");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "8,354");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "ngb-progressbar", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "80%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "i", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Australia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "7,675");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "ngb-progressbar", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "50%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Browser Stats");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "table", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Google Chrome");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "23%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "img", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Mozila Firefox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "span", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "15%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "img", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Apple Safari");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "07%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "img", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Opera mini");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "td", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "23%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "img", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Microsoft edge");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "td", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "09%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Sales Difference");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "h6", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Check the difference between two site");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "canvas", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h1", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "i", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Sales Analytics");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "h6", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "March 2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "h2", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "sup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "i", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "35487");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "canvas", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "h1", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Bandwidth usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "h6", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "March 2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "h2", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "50 GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "canvas", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "to-do");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "app-recent-comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.lineChartData2)("labels", ctx.lineChartLabels2)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend2)("chartType", ctx.lineChartType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("colors", ctx.barChartColors)("legend", ctx.barChartLegend)("chartType", ctx.barChartType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData1)("labels", ctx.barChartLabels1)("options", ctx.barChartOptions1)("colors", ctx.barChartColors1)("legend", ctx.barChartLegend1)("chartType", ctx.barChartType1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData2)("labels", ctx.barChartLabels2)("options", ctx.barChartOptions2)("colors", ctx.barChartColors2)("legend", ctx.barChartLegend2)("chartType", ctx.barChartType2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showValue", false)("value", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showValue", false)("value", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showValue", false)("value", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showValue", false)("value", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showValue", false)("value", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showValue", false)("value", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions2)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData4)("labels", ctx.barChartLabels4)("options", ctx.barChartOptions4)("colors", ctx.barChartColors4)("legend", ctx.barChartLegend4)("chartType", ctx.barChartType4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData3)("labels", ctx.barChartLabels3)("options", ctx.barChartOptions3)("colors", ctx.barChartColors3)("legend", ctx.barChartLegend3)("chartType", ctx.barChartType3);
          }
        },
        directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbar"], _dashboard_components_to_do_todo_component__WEBPACK_IMPORTED_MODULE_3__["TodoComponent"], _dashboard_components_recent_comment_recent_comment_component__WEBPACK_IMPORTED_MODULE_4__["RecentcommentComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHMvZGFzaGJvYXJkMi9kYXNoYm9hcmQyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dashboard2Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: './dashboard2.component.html',
            styleUrls: ['./dashboard2.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboards/dashboard3/company.json":
    /*!****************************************************!*\
      !*** ./src/app/dashboards/dashboard3/company.json ***!
      \****************************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, default */

    /***/
    function srcAppDashboardsDashboard3CompanyJson(module) {
      module.exports = JSON.parse("[{\"name\":\"Ethel Price\",\"status\":\"paid\",\"company\":\"Johnson, Johnson and Partners, LLC CMP DDC\",\"quantity\":22},{\"name\":\"Claudine Neal\",\"status\":\"paid\",\"company\":\"Sealoud\",\"quantity\":55},{\"name\":\"Beryl Rice\",\"status\":\"paid\",\"company\":\"Velity\",\"quantity\":67},{\"name\":\"Wilder Gonzales\",\"status\":\"pending\",\"company\":\"Geekko\",\"quantity\":22},{\"name\":\"Georgina Schultz\",\"status\":\"paid\",\"company\":\"Suretech\",\"quantity\":15},{\"name\":\"Carroll Buchanan\",\"status\":\"pending\",\"company\":\"Ecosys\",\"quantity\":20},{\"name\":\"Valarie Atkinson\",\"status\":\"paid\",\"company\":\"Hopeli\",\"quantity\":19},{\"name\":\"Schroeder Mathews\",\"status\":\"pending\",\"company\":\"Polarium\",\"quantity\":45},{\"name\":\"Lynda Mendoza\",\"status\":\"paid\",\"company\":\"Dogspa\",\"quantity\":48},{\"name\":\"Sarah Massey\",\"status\":\"paid\",\"company\":\"Bisba\",\"quantity\":50},{\"name\":\"Robles Boyle\",\"status\":\"pending\",\"company\":\"Comtract\",\"quantity\":27},{\"name\":\"Evans Hickman\",\"status\":\"pending\",\"company\":\"Parleynet\",\"quantity\":27},{\"name\":\"Dawson Barber\",\"status\":\"pending\",\"company\":\"Dymi\",\"quantity\":22},{\"name\":\"Bruce Strong\",\"status\":\"pending\",\"company\":\"Xyqag\",\"quantity\":14},{\"name\":\"Nellie Whitfield\",\"status\":\"paid\",\"company\":\"Exospace\",\"quantity\":18},{\"name\":\"Christine Compton\",\"status\":\"paid\",\"company\":\"Bleeko\",\"quantity\":48},{\"name\":\"Milagros Finch\",\"status\":\"paid\",\"company\":\"Handshake\",\"quantity\":29},{\"name\":\"Ericka Alvarado\",\"status\":\"paid\",\"company\":\"Lyrichord\",\"quantity\":48},{\"name\":\"Sylvia Sosa\",\"status\":\"paid\",\"company\":\"Circum\",\"quantity\":63},{\"name\":\"Humphrey Curtis\",\"status\":\"pending\",\"company\":\"Corepan\",\"quantity\":10}]");
      /***/
    },

    /***/
    "./src/app/dashboards/dashboard3/dashboard3.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/dashboards/dashboard3/dashboard3.component.ts ***!
      \***************************************************************/

    /*! exports provided: Dashboard3Component */

    /***/
    function srcAppDashboardsDashboard3Dashboard3ComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Dashboard3Component", function () {
        return Dashboard3Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _dashboard_components_income_counter_income_counter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../dashboard-components/income-counter/income-counter.component */
      "./src/app/dashboards/dashboard-components/income-counter/income-counter.component.ts");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-charts */
      "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var ng_chartist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-chartist */
      "./node_modules/ng-chartist/fesm2015/ng-chartist.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");

      function Dashboard3Component_ng_template_30_span_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function Dashboard3Component_ng_template_30_span_0_Template_span_dblclick_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var rowIndex_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.editing[rowIndex_r12 + "-name"] = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r13);
        }
      }

      function Dashboard3Component_ng_template_30_input_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function Dashboard3Component_ng_template_30_input_1_Template_input_blur_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var rowIndex_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.updateValue($event, "name", rowIndex_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r13);
        }
      }

      function Dashboard3Component_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dashboard3Component_ng_template_30_span_0_Template, 3, 1, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dashboard3Component_ng_template_30_input_1_Template, 1, 1, "input", 39);
        }

        if (rf & 2) {
          var rowIndex_r12 = ctx.rowIndex;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.editing[rowIndex_r12 + "-name"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.editing[rowIndex_r12 + "-name"]);
        }
      }

      function Dashboard3Component_ng_template_32_span_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function Dashboard3Component_ng_template_32_span_0_Template_span_dblclick_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var rowIndex_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.editing[rowIndex_r25 + "-status"] = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r27, " ");
        }
      }

      function Dashboard3Component_ng_template_32_select_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Dashboard3Component_ng_template_32_select_1_Template_select_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var rowIndex_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r34.updateValue($event, "status", rowIndex_r25);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Paid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pending");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Failed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r27);
        }
      }

      function Dashboard3Component_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dashboard3Component_ng_template_32_span_0_Template, 2, 1, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dashboard3Component_ng_template_32_select_1_Template, 7, 1, "select", 44);
        }

        if (rf & 2) {
          var rowIndex_r25 = ctx.rowIndex;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.editing[rowIndex_r25 + "-status"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.editing[rowIndex_r25 + "-status"]);
        }
      }

      function Dashboard3Component_ng_template_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r38 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r38, " ");
        }
      }

      function Dashboard3Component_ng_template_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r39 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r39);
        }
      }

      function Dashboard3Component_ng_template_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "25th Jan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Now Get ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "50% Off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " on buy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "- Ecommerce site");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function Dashboard3Component_ng_template_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "25th Jan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Now Get ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "60% Off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " on buy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "- Ecommerce site");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function Dashboard3Component_ng_template_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "25th Jan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Now Get ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "70% Off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " on buy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "- Ecommerce site");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function Dashboard3Component_ng_template_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Brand New Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function Dashboard3Component_ng_template_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Brand New Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function Dashboard3Component_ng_template_81_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Brand New Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function Dashboard3Component_ng_template_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Brand New Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var data2 = __webpack_require__(
      /*! ./company.json */
      "./src/app/dashboards/dashboard3/company.json");

      var data = __webpack_require__(
      /*! ./data.json */
      "./src/app/dashboards/dashboard3/data.json");

      var Dashboard3Component = /*#__PURE__*/function () {
        function Dashboard3Component() {
          var _this3 = this;

          _classCallCheck(this, Dashboard3Component);

          this.editing = {};
          this.rows = [];
          this.temp = _toConsumableArray(data2);
          this.loadingIndicator = true;
          this.reorderable = true;
          this.columns = [{
            prop: 'name'
          }, {
            name: 'Status'
          }, {
            name: 'Company'
          }]; // This is for the dashboar line chart

          this.lineChartData = [{
            data: [0, 130, 80, 70, 180, 105, 250],
            label: 'Site A'
          }, {
            data: [0, 100, 60, 200, 150, 90, 150],
            label: 'Site B'
          }];
          this.lineChartLabels = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];
          this.lineChartOptions = {
            responsive: true
          };
          this.lineChartColors = [{
            // grey
            backgroundColor: 'rgba(25,118,210,0.0)',
            borderColor: 'rgba(25,118,210,1)',
            pointBackgroundColor: 'rgba(25,118,210,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(25,118,210,0.5)'
          }, {
            // dark grey
            backgroundColor: 'rgba(38,218,210,0.0)',
            borderColor: 'rgba(38,218,210,1)',
            pointBackgroundColor: 'rgba(38,218,210,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(38,218,210,0.5)'
          }];
          this.lineChartLegend = false;
          this.lineChartType = 'line'; // This is for the donute chart

          this.donuteChart1 = {
            type: 'Pie',
            data: data['Pie'],
            options: {
              height: 200,
              donut: true,
              showLabel: false,
              donutWidth: 30
            } // events: {
            //   draw(data: any): boolean {
            //     return data;
            //   }
            // }

          };
          this.rows = data2;
          this.temp = _toConsumableArray(data2);
          setTimeout(function () {
            _this3.loadingIndicator = false;
          }, 1500);
        } // Table


        _createClass(Dashboard3Component, [{
          key: "updateFilter",
          value: function updateFilter(event) {
            var val = event.target.value.toLowerCase(); // filter our data

            var temp = this.temp.filter(function (d) {
              return d.name.toLowerCase().indexOf(val) !== -1 || !val;
            }); // update the rows

            this.rows = temp; // Whenever the filter changes, always go back to the first page

            this.table = data2;
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

        return Dashboard3Component;
      }();

      Dashboard3Component.ɵfac = function Dashboard3Component_Factory(t) {
        return new (t || Dashboard3Component)();
      };

      Dashboard3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Dashboard3Component,
        selectors: [["ng-component"]],
        viewQuery: function Dashboard3Component_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](Dashboard3Component, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 83,
        vars: 17,
        consts: [[1, "row"], [1, "col-lg-8", "col-md-7"], [1, "card"], [1, "card-body"], [1, "d-flex", "flex-wrap"], [1, "card-title"], [1, "ml-auto"], [1, "list-inline"], [1, "text-muted", "text-success"], [1, "fa", "fa-circle", "font-10", "m-r-10"], [1, "text-muted", "text-info"], ["baseChart", "", "height", "130", 3, "datasets", "labels", "options", "colors", "legend", "chartType"], [1, "card", "card-default"], [1, "card-subtitle"], [1, "table", "table-responsive"], [1, "material", 3, "headerHeight", "limit", "columnMode", "footerHeight", "rowHeight", "rows"], ["mydatatable", ""], ["name", "Name"], ["ngx-datatable-cell-template", ""], ["name", "Status"], ["name", "Quantity"], ["name", "Company"], [1, "col-lg-4", "col-md-5"], [1, "card-header"], [1, "card-title", "m-b-0"], [1, "card-body", "collapse", "show"], [2, "height", "220px"], [1, "", 3, "data", "type", "options", "responsiveOptions", "events"], [1, "list-inline", "m-t-20", "text-center"], [1, "text-muted"], [1, "fa", "fa-circle", "text-info"], [1, "m-b-0"], [1, "fa", "fa-circle", "text-danger"], [1, "fa", "fa-circle", "text-success"], [1, "card-body", "collapse", "show", "bg-info"], [1, "no-control-indicator"], ["ngbSlide", ""], [1, "card-body", "p-0", "collapse", "show", "text-center"], ["title", "Double click to edit", 3, "dblclick", 4, "ngIf"], ["class", "form-control form-control-sm", "autofocus", "", "type", "text", 3, "value", "blur", 4, "ngIf"], ["title", "Double click to edit", 3, "dblclick"], [1, "text-truncate"], ["autofocus", "", "type", "text", 1, "form-control", "form-control-sm", 3, "value", "blur"], ["title", "Double click to edit", "class", "bg-light p-1 rounded font-12", 3, "dblclick", 4, "ngIf"], ["class", "custom-select custom-select-sm", 3, "value", "change", 4, "ngIf"], ["title", "Double click to edit", 1, "bg-light", "p-1", "rounded", "font-12", 3, "dblclick"], [1, "custom-select", "custom-select-sm", 3, "value", "change"], ["value", "paid"], ["value", "pending"], ["value", "failed"], [1, ""], [1, "fa", "fa-shopping-cart", "fa-2x", "text-white"], [1, "text-white"], [1, "text-white", "font-light"], [1, "font-bold"], [1, "text-white", "m-t-20"], ["src", "assets/images/gallery/chair.png", "alt", "user"], [1, "m-b-30"], ["src", "assets/images/gallery/chair2.png", "alt", "user"], ["src", "assets/images/gallery/chair3.png", "alt", "user"], ["src", "assets/images/gallery/chair4.png", "alt", "user"]],
        template: function Dashboard3Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-income-counter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Yearly Earning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "iMac");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "iPhone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "canvas", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Filterable Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h6", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Smart data table library with sorting, filtering, pagination & add/edit/delete functions.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ngx-datatable", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ngx-datatable-column", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, Dashboard3Component_ng_template_30_Template, 2, 2, "ng-template", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ngx-datatable-column", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, Dashboard3Component_ng_template_32_Template, 2, 2, "ng-template", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ngx-datatable-column", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, Dashboard3Component_ng_template_34_Template, 1, 1, "ng-template", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ngx-datatable-column", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, Dashboard3Component_ng_template_36_Template, 2, 1, "ng-template", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h4", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Order Stats");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "x-chartist", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h6", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Order");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "8500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h6", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Pending");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h4", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "3630");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h6", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Delivered");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h4", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "4870");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h4", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Offer for you");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ngb-carousel", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, Dashboard3Component_ng_template_70_Template, 13, 0, "ng-template", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, Dashboard3Component_ng_template_71_Template, 13, 0, "ng-template", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, Dashboard3Component_ng_template_72_Template, 13, 0, "ng-template", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h4", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Latest Products");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "ngb-carousel", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, Dashboard3Component_ng_template_79_Template, 4, 0, "ng-template", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, Dashboard3Component_ng_template_80_Template, 4, 0, "ng-template", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, Dashboard3Component_ng_template_81_Template, 4, 0, "ng-template", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, Dashboard3Component_ng_template_82_Template, 4, 0, "ng-template", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerHeight", 50)("limit", 5)("columnMode", "force")("footerHeight", 50)("rowHeight", "auto")("rows", ctx.rows);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.donuteChart1.data)("type", ctx.donuteChart1.type)("options", ctx.donuteChart1.options)("responsiveOptions", ctx.donuteChart1.responsiveOptions)("events", ctx.donuteChart1.events);
          }
        },
        directives: [_dashboard_components_income_counter_income_counter_component__WEBPACK_IMPORTED_MODULE_1__["IncomeCounterComponent"], ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnCellDirective"], ng_chartist__WEBPACK_IMPORTED_MODULE_4__["ChartistComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"]],
        styles: [".ct-series-c[_ngcontent-%COMP%]   .ct-slice-donut[_ngcontent-%COMP%] {\r\n  stroke: #ef5350;\r\n}\r\n .ct-series-b[_ngcontent-%COMP%]   .ct-slice-donut[_ngcontent-%COMP%] {\r\n  stroke: #26c6da;\r\n}\r\n .ct-series-a[_ngcontent-%COMP%]   .ct-slice-donut[_ngcontent-%COMP%] {\r\n  stroke: #1976d2;\r\n}\r\n .font-12[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkcy9kYXNoYm9hcmQzL2Rhc2hib2FyZDMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQztFQUNDLGVBQWU7QUFDakI7Q0FDQztFQUNDLGVBQWU7QUFDakI7Q0FDQztFQUNDLGVBQWU7QUFDakI7Q0FHQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmRzL2Rhc2hib2FyZDMvZGFzaGJvYXJkMy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5jdC1zZXJpZXMtYyAuY3Qtc2xpY2UtZG9udXQge1xyXG4gIHN0cm9rZTogI2VmNTM1MDtcclxufVxyXG4gLmN0LXNlcmllcy1iIC5jdC1zbGljZS1kb251dCB7XHJcbiAgc3Ryb2tlOiAjMjZjNmRhO1xyXG59XHJcbiAuY3Qtc2VyaWVzLWEgLmN0LXNsaWNlLWRvbnV0IHtcclxuICBzdHJva2U6ICMxOTc2ZDI7XHJcbn1cclxuXHJcblxyXG4uZm9udC0xMiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dashboard3Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: './dashboard3.component.html',
            styleUrls: ['./dashboard3.component.css']
          }]
        }], function () {
          return [];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [Dashboard3Component, {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/dashboards/dashboard3/data.json":
    /*!*************************************************!*\
      !*** ./src/app/dashboards/dashboard3/data.json ***!
      \*************************************************/

    /*! exports provided: Pie, default */

    /***/
    function srcAppDashboardsDashboard3DataJson(module) {
      module.exports = JSON.parse("{\"Pie\":{\"series\":[20,50,30]}}");
      /***/
    }
  }]);
})();
//# sourceMappingURL=dashboards-dashboard-module-es5.js.map