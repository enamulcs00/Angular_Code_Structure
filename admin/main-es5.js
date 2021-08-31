(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./src/$$_lazy_route_resource lazy recursive":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function src$$_lazy_route_resourceLazyRecursive(module, exports) {
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
      webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: routes, AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./layouts/full/full.component */
      "./src/app/layouts/full/full.component.ts");
      /* harmony import */


      var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./layouts/blank/blank.component */
      "./src/app/layouts/blank/blank.component.ts");
      /* harmony import */


      var _service_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./service/auth-guard/auth.guard */
      "./src/app/service/auth-guard/auth.guard.ts");

      var routes = [{
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_3__["FullComponent"],
        canActivate: [_service_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        children: [{
          path: '',
          redirectTo: '/dashboard/dashboard',
          pathMatch: 'full'
        }, {
          path: 'dashboard',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | dashboards-dashboard-module */
            [__webpack_require__.e("default~charts-charts-module~dashboards-dashboard-module~pages-others-others-module"), __webpack_require__.e("default~dashboards-dashboard-module~table-tables-module"), __webpack_require__.e("default~charts-charts-module~dashboards-dashboard-module"), __webpack_require__.e("dashboards-dashboard-module")]).then(__webpack_require__.bind(null,
            /*! ./dashboards/dashboard.module */
            "./src/app/dashboards/dashboard.module.ts")).then(function (m) {
              return m.DashboardModule;
            });
          }
        }, {
          path: 'starter',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | starter-starter-module */
            "starter-starter-module").then(__webpack_require__.bind(null,
            /*! ./starter/starter.module */
            "./src/app/starter/starter.module.ts")).then(function (m) {
              return m.StarterModule;
            });
          }
        }, {
          path: 'component',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | component-component-module */
            "component-component-module").then(__webpack_require__.bind(null,
            /*! ./component/component.module */
            "./src/app/component/component.module.ts")).then(function (m) {
              return m.ComponentsModule;
            });
          }
        }, {
          path: 'icons',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | icons-icons-module */
            "icons-icons-module").then(__webpack_require__.bind(null,
            /*! ./icons/icons.module */
            "./src/app/icons/icons.module.ts")).then(function (m) {
              return m.IconsModule;
            });
          }
        }, {
          path: 'forms',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | form-forms-module */
            [__webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module~form-forms-module"), __webpack_require__.e("form-forms-module")]).then(__webpack_require__.bind(null,
            /*! ./form/forms.module */
            "./src/app/form/forms.module.ts")).then(function (m) {
              return m.FormModule;
            });
          }
        }, {
          path: 'tables',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | table-tables-module */
            [__webpack_require__.e("default~dashboards-dashboard-module~table-tables-module"), __webpack_require__.e("table-tables-module")]).then(__webpack_require__.bind(null,
            /*! ./table/tables.module */
            "./src/app/table/tables.module.ts")).then(function (m) {
              return m.TablesModule;
            });
          }
        }, {
          path: 'charts',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | charts-charts-module */
            [__webpack_require__.e("default~charts-charts-module~pages-cms-cms-module~pages-notification-notification-module~pages-other~97031e96"), __webpack_require__.e("default~charts-charts-module~dashboards-dashboard-module~pages-others-others-module"), __webpack_require__.e("default~charts-charts-module~pages-others-others-module"), __webpack_require__.e("default~charts-charts-module~dashboards-dashboard-module"), __webpack_require__.e("charts-charts-module")]).then(__webpack_require__.bind(null,
            /*! ./charts/charts.module */
            "./src/app/charts/charts.module.ts")).then(function (m) {
              return m.ChartModule;
            });
          }
        }, {
          path: 'widgets',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | widgets-widgets-module */
            "widgets-widgets-module").then(__webpack_require__.bind(null,
            /*! ./widgets/widgets.module */
            "./src/app/widgets/widgets.module.ts")).then(function (m) {
              return m.WidgetsModule;
            });
          }
        }, {
          path: 'extra-component',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | extra-component-extra-component-module */
            [__webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module~pages-cms-cms-module~pages-notificat~a809a9f7"), __webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module~pages-cms-cms-module~pages-notificat~e3d754ca"), __webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module~pages-cms-cms-module"), __webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module~form-forms-module"), __webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module"), __webpack_require__.e("extra-component-extra-component-module")]).then(__webpack_require__.bind(null,
            /*! ./extra-component/extra-component.module */
            "./src/app/extra-component/extra-component.module.ts")).then(function (m) {
              return m.ExtraComponentModule;
            });
          }
        }, {
          path: 'apps',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | apps-apps-module */
            [__webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module~pages-cms-cms-module~pages-notificat~a809a9f7"), __webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module~pages-cms-cms-module~pages-notificat~e3d754ca"), __webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module~pages-cms-cms-module"), __webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module~form-forms-module"), __webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module"), __webpack_require__.e("common"), __webpack_require__.e("apps-apps-module")]).then(__webpack_require__.bind(null,
            /*! ./apps/apps.module */
            "./src/app/apps/apps.module.ts")).then(function (m) {
              return m.AppsModule;
            });
          }
        }, {
          path: 'apps/email',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | apps-email-mail-module */
            [__webpack_require__.e("common"), __webpack_require__.e("apps-email-mail-module")]).then(__webpack_require__.bind(null,
            /*! ./apps/email/mail.module */
            "./src/app/apps/email/mail.module.ts")).then(function (m) {
              return m.MailModule;
            });
          }
        }, {
          path: 'sample-pages',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | sample-pages-sample-pages-module */
            "sample-pages-sample-pages-module").then(__webpack_require__.bind(null,
            /*! ./sample-pages/sample-pages.module */
            "./src/app/sample-pages/sample-pages.module.ts")).then(function (m) {
              return m.SamplePagesModule;
            });
          }
        }, {
          path: 'users',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-users-users-module */
            [__webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module~pages-cms-cms-module~pages-notificat~a809a9f7"), __webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module~pages-cms-cms-module~pages-notificat~e3d754ca"), __webpack_require__.e("default~pages-cms-cms-module~pages-notification-notification-module~pages-others-others-module~pages~db1e6954"), __webpack_require__.e("default~charts-charts-module~pages-cms-cms-module~pages-notification-notification-module~pages-other~97031e96"), __webpack_require__.e("default~pages-notification-notification-module~pages-others-others-module~pages-subscription-subscri~a4dd8711"), __webpack_require__.e("default~pages-notification-notification-module~pages-others-others-module~pages-users-users-module"), __webpack_require__.e("default~pages-notification-notification-module~pages-sub-admin-sub-admin-module~pages-users-users-module"), __webpack_require__.e("default~pages-notification-notification-module~pages-users-users-module"), __webpack_require__.e("default~pages-others-others-module~pages-users-users-module"), __webpack_require__.e("pages-users-users-module")]).then(__webpack_require__.bind(null,
            /*! ./pages/users/users.module */
            "./src/app/pages/users/users.module.ts")).then(function (m) {
              return m.UsersModule;
            });
          }
        }, {
          path: 'vendors',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-vendors-vendors-module */
            "pages-vendors-vendors-module").then(__webpack_require__.bind(null,
            /*! ./pages/vendors/vendors.module */
            "./src/app/pages/vendors/vendors.module.ts")).then(function (m) {
              return m.VendorsModule;
            });
          }
        }, {
          path: 'review',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-review-review-module */
            "pages-review-review-module").then(__webpack_require__.bind(null,
            /*! ./pages/review/review.module */
            "./src/app/pages/review/review.module.ts")).then(function (m) {
              return m.ReviewModule;
            });
          }
        }, {
          path: 'notification',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-notification-notification-module */
            [__webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module~pages-cms-cms-module~pages-notificat~a809a9f7"), __webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module~pages-cms-cms-module~pages-notificat~e3d754ca"), __webpack_require__.e("default~pages-cms-cms-module~pages-notification-notification-module~pages-others-others-module~pages~db1e6954"), __webpack_require__.e("default~charts-charts-module~pages-cms-cms-module~pages-notification-notification-module~pages-other~97031e96"), __webpack_require__.e("default~pages-notification-notification-module~pages-others-others-module~pages-subscription-subscri~a4dd8711"), __webpack_require__.e("default~pages-notification-notification-module~pages-others-others-module~pages-users-users-module"), __webpack_require__.e("default~pages-notification-notification-module~pages-sub-admin-sub-admin-module~pages-users-users-module"), __webpack_require__.e("default~pages-notification-notification-module~pages-users-users-module"), __webpack_require__.e("default~pages-notification-notification-module~pages-others-others-module"), __webpack_require__.e("pages-notification-notification-module")]).then(__webpack_require__.bind(null,
            /*! ./pages/notification/notification.module */
            "./src/app/pages/notification/notification.module.ts")).then(function (m) {
              return m.NotificationModule;
            });
          }
        }, {
          path: 'inventory',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-inventory-inventory-module */
            "pages-inventory-inventory-module").then(__webpack_require__.bind(null,
            /*! ./pages/inventory/inventory.module */
            "./src/app/pages/inventory/inventory.module.ts")).then(function (m) {
              return m.InventoryModule;
            });
          }
        }, {
          path: 'setting',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-setting-setting-module */
            "pages-setting-setting-module").then(__webpack_require__.bind(null,
            /*! ./pages/setting/setting.module */
            "./src/app/pages/setting/setting.module.ts")).then(function (m) {
              return m.SettingModule;
            });
          }
        }, {
          path: 'cms',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-cms-cms-module */
            [__webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module~pages-cms-cms-module~pages-notificat~a809a9f7"), __webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module~pages-cms-cms-module~pages-notificat~e3d754ca"), __webpack_require__.e("default~pages-cms-cms-module~pages-notification-notification-module~pages-others-others-module~pages~db1e6954"), __webpack_require__.e("default~charts-charts-module~pages-cms-cms-module~pages-notification-notification-module~pages-other~97031e96"), __webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module~pages-cms-cms-module"), __webpack_require__.e("pages-cms-cms-module")]).then(__webpack_require__.bind(null,
            /*! ./pages/cms/cms.module */
            "./src/app/pages/cms/cms.module.ts")).then(function (m) {
              return m.CmsModule;
            });
          }
        }, {
          path: 'subscription',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-subscription-subscription-module */
            [__webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module~pages-cms-cms-module~pages-notificat~a809a9f7"), __webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module~pages-cms-cms-module~pages-notificat~e3d754ca"), __webpack_require__.e("default~pages-cms-cms-module~pages-notification-notification-module~pages-others-others-module~pages~db1e6954"), __webpack_require__.e("default~charts-charts-module~pages-cms-cms-module~pages-notification-notification-module~pages-other~97031e96"), __webpack_require__.e("default~pages-notification-notification-module~pages-others-others-module~pages-subscription-subscri~a4dd8711"), __webpack_require__.e("default~pages-others-others-module~pages-subscription-subscription-module"), __webpack_require__.e("pages-subscription-subscription-module")]).then(__webpack_require__.bind(null,
            /*! ./pages/subscription/subscription.module */
            "./src/app/pages/subscription/subscription.module.ts")).then(function (m) {
              return m.SubscriptionModule;
            });
          }
        }, {
          path: 'revenue',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-revenue-revenue-module */
            "pages-revenue-revenue-module").then(__webpack_require__.bind(null,
            /*! ./pages/revenue/revenue.module */
            "./src/app/pages/revenue/revenue.module.ts")).then(function (m) {
              return m.RevenueModule;
            });
          }
        }, {
          path: 'subadmin',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-sub-admin-sub-admin-module */
            [__webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module~pages-cms-cms-module~pages-notificat~a809a9f7"), __webpack_require__.e("default~pages-cms-cms-module~pages-notification-notification-module~pages-others-others-module~pages~db1e6954"), __webpack_require__.e("default~pages-notification-notification-module~pages-sub-admin-sub-admin-module~pages-users-users-module"), __webpack_require__.e("pages-sub-admin-sub-admin-module")]).then(__webpack_require__.bind(null,
            /*! ./pages/sub-admin/sub-admin.module */
            "./src/app/pages/sub-admin/sub-admin.module.ts")).then(function (m) {
              return m.SubAdminModule;
            });
          }
        }, {
          path: 'orders',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-orders-orders-module */
            "pages-orders-orders-module").then(__webpack_require__.bind(null,
            /*! ./pages/orders/orders.module */
            "./src/app/pages/orders/orders.module.ts")).then(function (m) {
              return m.OrdersModule;
            });
          }
        }, {
          path: 'product',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-product-product-module */
            "pages-product-product-module").then(__webpack_require__.bind(null,
            /*! ./pages/product/product.module */
            "./src/app/pages/product/product.module.ts")).then(function (m) {
              return m.ProductModule;
            });
          }
        }, {
          path: 'others',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-others-others-module */
            [__webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module~pages-cms-cms-module~pages-notificat~a809a9f7"), __webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module~pages-cms-cms-module~pages-notificat~e3d754ca"), __webpack_require__.e("default~pages-cms-cms-module~pages-notification-notification-module~pages-others-others-module~pages~db1e6954"), __webpack_require__.e("default~charts-charts-module~pages-cms-cms-module~pages-notification-notification-module~pages-other~97031e96"), __webpack_require__.e("default~pages-notification-notification-module~pages-others-others-module~pages-subscription-subscri~a4dd8711"), __webpack_require__.e("default~charts-charts-module~dashboards-dashboard-module~pages-others-others-module"), __webpack_require__.e("default~pages-notification-notification-module~pages-others-others-module~pages-users-users-module"), __webpack_require__.e("default~charts-charts-module~pages-others-others-module"), __webpack_require__.e("default~pages-others-others-module~pages-subscription-subscription-module"), __webpack_require__.e("default~pages-notification-notification-module~pages-others-others-module"), __webpack_require__.e("default~pages-others-others-module~pages-users-users-module"), __webpack_require__.e("pages-others-others-module")]).then(__webpack_require__.bind(null,
            /*! ./pages/others/others.module */
            "./src/app/pages/others/others.module.ts")).then(function (m) {
              return m.OthersModule;
            });
          }
        }]
      }, {
        path: '',
        component: _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_4__["BlankComponent"],
        children: [{
          path: 'authentication',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | authentication-authentication-module */
            "authentication-authentication-module").then(__webpack_require__.bind(null,
            /*! ./authentication/authentication.module */
            "./src/app/authentication/authentication.module.ts")).then(function (m) {
              return m.AuthenticationModule;
            });
          }
        }]
      }, {
        path: '**',
        redirectTo: '404'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/spinner.component */
      "./src/app/shared/spinner.component.ts");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'app';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/fesm2015/animations.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./layouts/full/full.component */
      "./src/app/layouts/full/full.component.ts");
      /* harmony import */


      var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./layouts/blank/blank.component */
      "./src/app/layouts/blank/blank.component.ts");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");
      /* harmony import */


      var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng6-toastr-notifications */
      "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-spinner */
      "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
      /* harmony import */


      var _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./shared/header-navigation/navigation.component */
      "./src/app/shared/header-navigation/navigation.component.ts");
      /* harmony import */


      var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./shared/sidebar/sidebar.component */
      "./src/app/shared/sidebar/sidebar.component.ts");
      /* harmony import */


      var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./shared/breadcrumb/breadcrumb.component */
      "./src/app/shared/breadcrumb/breadcrumb.component.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "./node_modules/ngx-perfect-scrollbar/fesm2015/ngx-perfect-scrollbar.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./shared/spinner.component */
      "./src/app/shared/spinner.component.ts");
      /* harmony import */


      var _shared_header_vertical_header_vertical_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./shared/header-vertical/header-vertical.component */
      "./src/app/shared/header-vertical/header-vertical.component.ts");
      /* harmony import */


      var _src_app_service_get_interceptor_get_interceptor_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../src/app/service/get-interceptor/get-interceptor.service */
      "./src/app/service/get-interceptor/get-interceptor.service.ts");
      /* harmony import */


      var _src_app_service_set_interceptor_set_interceptor_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../src/app/service/set-interceptor/set-interceptor.service */
      "./src/app/service/set-interceptor/set-interceptor.service.ts"); // import { ToastrModule } from 'ngx-toastr';


      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true,
        wheelSpeed: 2,
        wheelPropagation: true
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PERFECT_SCROLLBAR_CONFIG"],
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
          useClass: _src_app_service_set_interceptor_set_interceptor_service__WEBPACK_IMPORTED_MODULE_21__["SetInterceptorService"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
          useClass: _src_app_service_get_interceptor_get_interceptor_service__WEBPACK_IMPORTED_MODULE_20__["GetInterceptorService"],
          multi: true
        }, {
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(), ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__["NgMultiSelectDropDownModule"].forRoot(), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PerfectScrollbarModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_18__["SpinnerComponent"], _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_6__["FullComponent"], _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_7__["BlankComponent"], _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__["NavigationComponent"], _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"], _shared_header_vertical_header_vertical_component__WEBPACK_IMPORTED_MODULE_19__["HeaderVerticalComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__["NgMultiSelectDropDownModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PerfectScrollbarModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_18__["SpinnerComponent"], _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_6__["FullComponent"], _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_7__["BlankComponent"], _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__["NavigationComponent"], _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"], _shared_header_vertical_header_vertical_component__WEBPACK_IMPORTED_MODULE_19__["HeaderVerticalComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(), ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__["NgMultiSelectDropDownModule"].forRoot(), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PerfectScrollbarModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"]],
            providers: [{
              provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PERFECT_SCROLLBAR_CONFIG"],
              useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
              useClass: _src_app_service_set_interceptor_set_interceptor_service__WEBPACK_IMPORTED_MODULE_21__["SetInterceptorService"],
              multi: true
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
              useClass: _src_app_service_get_interceptor_get_interceptor_service__WEBPACK_IMPORTED_MODULE_20__["GetInterceptorService"],
              multi: true
            }, {
              provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
              useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/layouts/blank/blank.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/layouts/blank/blank.component.ts ***!
      \**************************************************/

    /*! exports provided: BlankComponent */

    /***/
    function srcAppLayoutsBlankBlankComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlankComponent", function () {
        return BlankComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");

      var BlankComponent = function BlankComponent() {
        _classCallCheck(this, BlankComponent);
      };

      BlankComponent.ɵfac = function BlankComponent_Factory(t) {
        return new (t || BlankComponent)();
      };

      BlankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BlankComponent,
        selectors: [["app-blank-layout"]],
        decls: 1,
        vars: 0,
        template: function BlankComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-blank-layout',
            templateUrl: './blank.component.html',
            styleUrls: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/layouts/full/full.component.ts":
    /*!************************************************!*\
      !*** ./src/app/layouts/full/full.component.ts ***!
      \************************************************/

    /*! exports provided: FullComponent */

    /***/
    function srcAppLayoutsFullFullComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FullComponent", function () {
        return FullComponent;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/header-navigation/navigation.component */
      "./src/app/shared/header-navigation/navigation.component.ts");
      /* harmony import */


      var _shared_header_vertical_header_vertical_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/header-vertical/header-vertical.component */
      "./src/app/shared/header-vertical/header-vertical.component.ts");
      /* harmony import */


      var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/breadcrumb/breadcrumb.component */
      "./src/app/shared/breadcrumb/breadcrumb.component.ts");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "./node_modules/ngx-perfect-scrollbar/fesm2015/ngx-perfect-scrollbar.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");

      var _c0 = function _c0(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) {
        return {
          "defaultdark": a0,
          "greendark": a1,
          "reddark": a2,
          "bluedark": a3,
          "purpledark": a4,
          "megnadark": a5,
          "default": a6,
          "green": a7,
          "red": a8,
          "blue": a9,
          "purple": a10,
          "megna": a11,
          "mini-sidebar": a12,
          "dark-theme": a13,
          "rtl-theme": a14
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "shw-rside": a0
        };
      };

      var FullComponent = /*#__PURE__*/function () {
        function FullComponent(router) {
          _classCallCheck(this, FullComponent);

          this.router = router;
          this.color = 'default';
          this.showSettings = false;
          this.showMinisidebar = false;
          this.showDarktheme = false;
          this.showRtl = false;
          this.config = {};
        }

        _createClass(FullComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.router.url === '/') {
              this.router.navigate(['/dashboard/dashboard1']);
            }

            this.handleLayout();
          }
        }, {
          key: "onResize",
          value: function onResize(event) {
            this.handleLayout();
          }
        }, {
          key: "toggleSidebar",
          value: function toggleSidebar() {
            this.showMinisidebar = !this.showMinisidebar;
          }
        }, {
          key: "handleLayout",
          value: function handleLayout() {
            this.innerWidth = window.innerWidth;

            if (this.innerWidth < 1170) {
              this.showMinisidebar = true;
            } else {
              this.showMinisidebar = false;
            }
          }
        }]);

        return FullComponent;
      }();

      FullComponent.ɵfac = function FullComponent_Factory(t) {
        return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      FullComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FullComponent,
        selectors: [["app-full-layout"]],
        hostBindings: function FullComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function FullComponent_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        decls: 122,
        vars: 36,
        consts: [["id", "main-wrapper", 1, "horizontal-wrapper", 3, "ngClass"], [1, "w-100", 3, "toggleSidebar"], [1, "top-header"], [1, "page-wrapper"], [1, "container-fluid"], [1, "right-sidebar", 3, "ngClass"], [1, "slimscrollright"], [1, "rpanel-title"], [1, "ti-close", "right-side-toggle", 3, "click"], [1, "r-panel-body", 3, "perfectScrollbar"], [1, "m-b-20", "m-t-20"], [1, "m-b-10"], [1, "custom-control", "custom-checkbox"], ["id", "customCheck11", "name", "radio-stacked", "type", "radio", "value", "default", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "customCheck11", 1, "custom-control-label"], ["id", "customCheck22", "name", "radio-stacked", "type", "radio", "value", "green", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "customCheck22", 1, "custom-control-label"], ["id", "customCheck33", "name", "radio-stacked", "type", "radio", "value", "red", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "customCheck33", 1, "custom-control-label"], ["id", "customCheck44", "name", "radio-stacked", "type", "radio", "value", "blue", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "customCheck44", 1, "custom-control-label"], ["id", "customCheck55", "name", "radio-stacked", "type", "radio", "value", "purple", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "customCheck55", 1, "custom-control-label"], ["id", "customCheck66", "name", "radio-stacked", "type", "radio", "value", "megna", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "customCheck66", 1, "custom-control-label"], [1, "m-b-20"], ["id", "customCheck77", "name", "radio-stacked", "type", "radio", "value", "defaultdark", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "customCheck77", 1, "custom-control-label"], ["id", "customCheck88", "name", "radio-stacked", "type", "radio", "value", "greendark", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "customCheck88", 1, "custom-control-label"], ["id", "customCheck99", "name", "radio-stacked", "type", "radio", "value", "reddark", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "customCheck99", 1, "custom-control-label"], ["id", "customCheck10", "name", "radio-stacked", "type", "radio", "value", "bluedark", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "customCheck10", 1, "custom-control-label"], ["id", "customCheck111", "name", "radio-stacked", "type", "radio", "value", "purpledark", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "customCheck111", 1, "custom-control-label"], ["id", "customCheck122", "name", "radio-stacked", "type", "radio", "value", "megnadark", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "customCheck122", 1, "custom-control-label"], ["id", "customCheck133", "type", "checkbox", 1, "custom-control-input", "sidebartoggler", 3, "ngModel", "ngModelChange"], ["for", "customCheck133", 1, "custom-control-label"], ["id", "customCheck144", "type", "checkbox", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "customCheck144", 1, "custom-control-label"], ["id", "customCheck145", "type", "checkbox", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "customCheck145", 1, "custom-control-label"], [1, "footer", "text-center"]],
        template: function FullComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-navigation", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleSidebar", function FullComponent_Template_app_navigation_toggleSidebar_1_listener() {
              return ctx.toggleSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-header-vertical");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Settings ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_i_click_13_listener() {
              return ctx.showSettings = !ctx.showSettings;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Light Sidebar / Colors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_input_ngModelChange_22_listener($event) {
              return ctx.color = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_input_ngModelChange_28_listener($event) {
              return ctx.color = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Green");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_input_ngModelChange_34_listener($event) {
              return ctx.color = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Red");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_input_ngModelChange_40_listener($event) {
              return ctx.color = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Blue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_input_ngModelChange_46_listener($event) {
              return ctx.color = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Purple");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_input_ngModelChange_52_listener($event) {
              return ctx.color = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Megna");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Dark Sidebar / Colors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_input_ngModelChange_63_listener($event) {
              return ctx.color = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Default Dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_input_ngModelChange_69_listener($event) {
              return ctx.color = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Green Dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_input_ngModelChange_75_listener($event) {
              return ctx.color = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Red Dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_input_ngModelChange_81_listener($event) {
              return ctx.color = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Blue Dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "input", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_input_ngModelChange_87_listener($event) {
              return ctx.color = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Purple Dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "input", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_input_ngModelChange_93_listener($event) {
              return ctx.color = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "label", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Megna Dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "General Setting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "input", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_input_ngModelChange_104_listener($event) {
              return ctx.showMinisidebar = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "label", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Mini Sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "input", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_input_ngModelChange_110_listener($event) {
              return ctx.showDarktheme = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Dark Theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "input", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_input_ngModelChange_116_listener($event) {
              return ctx.showRtl = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "label", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "RTL Theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "footer", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " \xA9 Qtrly 2021 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](18, _c0, [ctx.color == "defaultdark", ctx.color == "greendark", ctx.color == "reddark", ctx.color == "bluedark", ctx.color == "purpledark", ctx.color == "megnadark", ctx.color == "default", ctx.color == "green", ctx.color == "red", ctx.color == "blue", ctx.color == "purple", ctx.color == "megna", ctx.showMinisidebar, ctx.showDarktheme, ctx.showRtl]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c1, ctx.showSettings));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.config);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.color);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.color);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.color);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.color);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.color);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.color);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.color);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.color);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.color);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.color);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.color);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.color);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.showMinisidebar);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.showDarktheme);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.showRtl);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"], _shared_header_vertical_header_vertical_component__WEBPACK_IMPORTED_MODULE_4__["HeaderVerticalComponent"], _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"]],
        styles: [".main-container[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden;\n}\n\n@media screen and (max-width: 992px) {\n  .main-container[_ngcontent-%COMP%] {\n    margin-left: 0px !important;\n  }\n}\n\n.horizontal-wrapper[_ngcontent-%COMP%]   .page-wrapper[_ngcontent-%COMP%] {\n  margin-left: 0px;\n  height: calc(100vh - 115px);\n}\n\n.horizontal-wrapper[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  left: 0;\n  position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9mdWxsL2Z1bGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0U7SUFDRSwyQkFBMkI7RUFFN0I7QUFDRjs7QUFDQTtFQUdJLGdCQUFnQjtFQUVoQiwyQkFBMkI7QUFEL0I7O0FBSkE7RUFRSSxPQUFPO0VBQ1AsZUFBZTtBQUFuQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZnVsbC9mdWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMzVweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIC1tcy1vdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uaG9yaXpvbnRhbC13cmFwcGVye1xyXG4gXHJcbiAgLnBhZ2Utd3JhcHBlcntcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAvLyBvdmVyZmxvdzogaW5oZXJpdDtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDExNXB4KTtcclxuICB9XHJcbiAgZm9vdGVye1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICB9XHJcbiBcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-full-layout',
            templateUrl: './full.component.html',
            styleUrls: ['./full.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, {
          onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/service/auth-guard/auth.guard.ts":
    /*!**************************************************!*\
      !*** ./src/app/service/auth-guard/auth.guard.ts ***!
      \**************************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcAppServiceAuthGuardAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            //     let isBasic = false;
            //     let isOnboarding = false;
            //     let verifyndchangepass= false;
            //     let isAuth = localStorage.user ? true : false;
            //     if (next.routeConfig.path === '/authentication/login'  || next.routeConfig.path === '/authentication/forgotpwd' ) {
            //       isOnboarding = true;
            //     }
            //     if (isOnboarding && isAuth) { 
            //       isBasic = false;
            //        return this.router.navigate(['/dashboard/dashboard']);} 
            //     if (isOnboarding && !isAuth) { isBasic = true; }
            //     if (!isOnboarding && isAuth) { isBasic = true; }
            //     if (!isOnboarding && !isAuth ) {
            //        isBasic = false; 
            //        return this.router.navigate(['/authentication/login']);}
            //       //  if (!isOnboarding && !isAuth && verifyndchangepass) {
            //       //   isBasic = true; }
            //     return isBasic;
            //   }
            // }
            if (localStorage.getItem('accessToken')) {
              return true;
            } else {
              this.router.navigate(["/authentication/login"]);
            }
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/service/common.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/service/common.service.ts ***!
      \*******************************************/

    /*! exports provided: CommonService */

    /***/
    function srcAppServiceCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonService", function () {
        return CommonService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng6-toastr-notifications */
      "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-spinner */
      "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

      var CommonService = /*#__PURE__*/function () {
        function CommonService(_toastrService, spinner) {
          _classCallCheck(this, CommonService);

          this._toastrService = _toastrService;
          this.spinner = spinner;
        }

        _createClass(CommonService, [{
          key: "successMsg",
          value: function successMsg(message) {
            this._toastrService.successToastr(message, '', {
              closeButton: false,
              toastTimeout: 3000,
              progressBar: true,
              progressAnimation: "decreasing",
              maxShown: 1
            });
          }
        }, {
          key: "errorMsg",
          value: function errorMsg(message) {
            this._toastrService.errorToastr(message, '', {
              closeButton: false,
              toastTimeout: 3000,
              progressBar: true,
              progressAnimation: "decreasing",
              maxShown: 1
            });
          }
        }, {
          key: "showSpinner",
          value: function showSpinner() {
            this.spinner.show();
          }
        }, {
          key: "hideSpinner",
          value: function hideSpinner() {
            this.spinner.hide();
          }
        }, {
          key: "MustMatch",
          value: function MustMatch(controlName, matchingControlName) {
            return function (formGroup) {
              var control = formGroup.controls[controlName];
              var matchingControl = formGroup.controls[matchingControlName];

              if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
              } // set error on matchingControl if validation fails


              if (control.value !== matchingControl.value) {
                matchingControl.setErrors({
                  mustMatch: true
                });
              } else {
                matchingControl.setErrors(null);
              }
            };
          }
        }]);

        return CommonService;
      }();

      CommonService.ɵfac = function CommonService_Factory(t) {
        return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_1__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]));
      };

      CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CommonService,
        factory: CommonService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_1__["ToastrManager"]
          }, {
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/service/get-interceptor/get-interceptor.service.ts":
    /*!********************************************************************!*\
      !*** ./src/app/service/get-interceptor/get-interceptor.service.ts ***!
      \********************************************************************/

    /*! exports provided: GetInterceptorService */

    /***/
    function srcAppServiceGetInterceptorGetInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetInterceptorService", function () {
        return GetInterceptorService;
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


      var _service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../service/common.service */
      "./src/app/service/common.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var GetInterceptorService = /*#__PURE__*/function () {
        function GetInterceptorService(router, // private toastr: ToastrService,
        _comm) {
          _classCallCheck(this, GetInterceptorService);

          this.router = router;
          this._comm = _comm;
        }

        _createClass(GetInterceptorService, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this = this;

            return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (event) {
              if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
                _this._comm.hideSpinner();

                if (event.status == 211) {
                  //  this.toastr.error('Your session is expired, please log in.');
                  localStorage.clear();
                  return _this.router.navigateByUrl('/');
                }
              }
            }));
          }
        }]);

        return GetInterceptorService;
      }();

      GetInterceptorService.ɵfac = function GetInterceptorService_Factory(t) {
        return new (t || GetInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]));
      };

      GetInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GetInterceptorService,
        factory: GetInterceptorService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetInterceptorService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/service/set-interceptor/set-interceptor.service.ts":
    /*!********************************************************************!*\
      !*** ./src/app/service/set-interceptor/set-interceptor.service.ts ***!
      \********************************************************************/

    /*! exports provided: SetInterceptorService */

    /***/
    function srcAppServiceSetInterceptorSetInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SetInterceptorService", function () {
        return SetInterceptorService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _service_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/common.service */
      "./src/app/service/common.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");

      var SetInterceptorService = /*#__PURE__*/function () {
        function SetInterceptorService(commonService) {
          _classCallCheck(this, SetInterceptorService);

          this.commonService = commonService;
        }

        _createClass(SetInterceptorService, [{
          key: "intercept",
          value: function intercept(req, next) {
            this.commonService.showSpinner();
            var clonedReq = this.handleRequest(req);
            return next.handle(clonedReq); //     return next.handle(clonedReq).pipe(finalize( ()=>
            //  this.commonService.hideSpinner()
            // ));
          }
        }, {
          key: "handleRequest",
          value: function handleRequest(req) {
            var user = JSON.parse(localStorage.getItem('accessToken'));
            var admin = localStorage.getItem('isAdmin');
            var authReq;

            if ((req.method.toLowerCase() === 'post' || req.method.toLowerCase() === 'put') && req.body instanceof FormData) {
              authReq = req.clone({
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                  'Authorization': user ? user : '',
                  'cache-control': 'no-cache',
                  'isadmin': admin ? admin : ''
                })
              });
            } else {
              authReq = req.clone({
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                  'Content-Type': 'application/json',
                  'Authorization': user ? user : '',
                  'cache-control': 'no-cache',
                  'isadmin': admin ? admin : ''
                })
              });
            }

            return authReq;
          }
        }]);

        return SetInterceptorService;
      }();

      SetInterceptorService.ɵfac = function SetInterceptorService_Factory(t) {
        return new (t || SetInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]));
      };

      SetInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SetInterceptorService,
        factory: SetInterceptorService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetInterceptorService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _service_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/breadcrumb/breadcrumb.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
      \***********************************************************/

    /*! exports provided: BreadcrumbComponent */

    /***/
    function srcAppSharedBreadcrumbBreadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
        return BreadcrumbComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/add/operator/filter */
      "./node_modules/rxjs/add/operator/filter.js");
      /* harmony import */


      var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/add/operator/map */
      "./node_modules/rxjs/add/operator/map.js");
      /* harmony import */


      var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/add/operator/mergeMap */
      "./node_modules/rxjs/add/operator/mergeMap.js");
      /* harmony import */


      var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");

      function BreadcrumbComponent_ng_template_6_li_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var url_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", url_r1.url);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](url_r1.title);
        }
      }

      function BreadcrumbComponent_ng_template_6_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var url_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](url_r1.title);
        }
      }

      function BreadcrumbComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BreadcrumbComponent_ng_template_6_li_0_Template, 3, 2, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_ng_template_6_li_1_Template, 2, 1, "li", 7);
        }

        if (rf & 2) {
          var last_r2 = ctx.last;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r2);
        }
      }

      var BreadcrumbComponent = /*#__PURE__*/function () {
        function BreadcrumbComponent(router, activatedRoute, titleService) {
          var _this2 = this;

          _classCallCheck(this, BreadcrumbComponent);

          this.router = router;
          this.activatedRoute = activatedRoute;
          this.titleService = titleService;
          this.router.events.filter(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
          }).map(function () {
            return _this2.activatedRoute;
          }).map(function (route) {
            while (route.firstChild) {
              route = route.firstChild;
            }

            return route;
          }).filter(function (route) {
            return route.outlet === 'primary';
          }).mergeMap(function (route) {
            return route.data;
          }).subscribe(function (event) {
            _this2.titleService.setTitle(event['title']);

            _this2.pageInfo = event;
          });
        }

        _createClass(BreadcrumbComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BreadcrumbComponent;
      }();

      BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
        return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]));
      };

      BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BreadcrumbComponent,
        selectors: [["app-breadcrumb"]],
        inputs: {
          layout: "layout"
        },
        decls: 7,
        vars: 2,
        consts: [[1, "row", "page-titles"], [1, "col-lg-3", "col-md-4", "col-xs-12", "align-self-center"], [1, "text-themecolor", "m-b-0"], [1, "col-lg-9", "col-md-8", "col-xs-12", "align-self-center"], [1, "breadcrumb"], ["ngFor", "", 3, "ngForOf"], ["class", "breadcrumb-item", 3, "routerLink", 4, "ngIf"], ["class", "breadcrumb-item active", 4, "ngIf"], [1, "breadcrumb-item", 3, "routerLink"], ["href", "javascript:void(0)"], [1, "breadcrumb-item", "active"]],
        template: function BreadcrumbComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BreadcrumbComponent_ng_template_6_Template, 2, 2, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageInfo == null ? null : ctx.pageInfo.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageInfo == null ? null : ctx.pageInfo.urls);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-breadcrumb',
            templateUrl: './breadcrumb.component.html'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
          }];
        }, {
          layout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/header-navigation/navigation.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/shared/header-navigation/navigation.component.ts ***!
      \******************************************************************/

    /*! exports provided: NavigationComponent */

    /***/
    function srcAppSharedHeaderNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
        return NavigationComponent;
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


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "./node_modules/sweetalert2/dist/sweetalert2.all.js");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");

      var NavigationComponent = /*#__PURE__*/function () {
        function NavigationComponent(modalService, _router) {
          _classCallCheck(this, NavigationComponent);

          this.modalService = modalService;
          this._router = _router;
          this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.config = {}; // This is for Notifications

          this.notifications = [{
            round: 'round-danger',
            icon: 'ti-link',
            title: 'Luanch Admin',
            subject: 'Just see the my new admin!',
            time: '9:30 AM'
          }, {
            round: 'round-success',
            icon: 'ti-calendar',
            title: 'Event today',
            subject: 'Just a reminder that you have event',
            time: '9:10 AM'
          }, {
            round: 'round-info',
            icon: 'ti-settings',
            title: 'Settings',
            subject: 'You can customize this template as you want',
            time: '9:08 AM'
          }, {
            round: 'round-primary',
            icon: 'ti-user',
            title: 'Pavan kumar',
            subject: 'Just see the my admin!',
            time: '9:00 AM'
          }]; // This is for Mymessages

          this.mymessages = [{
            useravatar: 'assets/images/users/1.jpg',
            status: 'online',
            from: 'Pavan kumar',
            subject: 'Just see the my admin!',
            time: '9:30 AM'
          }, {
            useravatar: 'assets/images/users/2.jpg',
            status: 'busy',
            from: 'Sonu Nigam',
            subject: 'I have sung a song! See you at',
            time: '9:10 AM'
          }, {
            useravatar: 'assets/images/users/2.jpg',
            status: 'away',
            from: 'Arijit Sinh',
            subject: 'I am a singer!',
            time: '9:08 AM'
          }, {
            useravatar: 'assets/images/users/4.jpg',
            status: 'offline',
            from: 'Pavan kumar',
            subject: 'Just see the my admin!',
            time: '9:00 AM'
          }];
        }

        _createClass(NavigationComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "logout",
          value: function logout() {
            var _this3 = this;

            // localStorage.clear();
            // this._router.navigate(['authentication/login'])
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
              title: 'Are you sure?',
              text: 'You will not be able to recover this ',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Yes, logout!',
              cancelButtonText: 'No, stay here only'
            }).then(function (result) {
              if (result.isConfirmed) {
                localStorage.clear();

                _this3._router.navigate(['authentication/login']);
              } else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {// Swal.fire(
                //   'Cancelled',
                //   'Your imaginary file is safe :)',
                //   'error'
                // )
              }
            });
          }
        }]);

        return NavigationComponent;
      }();

      NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
        return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavigationComponent,
        selectors: [["app-navigation"]],
        outputs: {
          toggleSidebar: "toggleSidebar"
        },
        decls: 43,
        vars: 0,
        consts: [[1, "topbar"], [1, "d-flex", "top-navbar", "navbar-expand-md", "navbar-light"], [1, ""], [1, "navbar-collapse"], [1, "logo-box", "navbar-header"], ["href", "javascript:void()"], ["src", "assets/images/logo-text.svg", "alt", "homepage", 1, "dark-logo", "logo-text"], [1, "navbar-nav", "ml-auto", "mt-md-0"], [1, "nav-item", "m-l-10"], ["href", "javascript:void(0)", 1, "nav-link"], [1, "notify", "setpos"], [1, "heartbit"], [1, "point"], [1, "mdi", "mdi-bell"], [1, "navbar-nav", "my-lg-0"], [1, "nav-item", "hidden-sm-down", "search-box"], [1, "app-search"], ["type", "text", "placeholder", "Search & enter", 1, "form-control"], [1, "srh-btn"], [1, "ti-close"], ["ngbDropdown", "", "placement", "bottom-right", 1, "nav-item", "dropdown"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "text-muted", "waves-effect", "waves-dark"], ["src", "assets/images/users/1.jpg", "alt", "user", 1, "profile-pic"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-user"], [1, "dw-user-box"], [1, "u-img"], ["src", "assets/images/users/1.jpg", "alt", "user"], [1, "u-text"], [1, "text-muted"], ["role", "separator", 1, "divider"], ["href", "javascript:void(0)", "routerLink", "/setting/profile", 1, "dropdown-item"], [1, "ti-user"], [1, "dropdown-item", 3, "click"], [1, "fa", "fa-power-off"]],
        template: function NavigationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Steave Jobs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "varun@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "li", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " My Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_40_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

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
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: [".logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  width: 90px;\n}\n\n.logo[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.logo-box[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  position: absolute;\n  width: 100%;\n  padding: 10px 0px;\n}\n\n.logo-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 110px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci1uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxXQUFXO0FBQW5COztBQUZBO0VBS1EsV0FDSjtBQUFKOztBQUVBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ3JCOztBQUxBO0VBTVEsZUFBZTtFQUNuQixZQUFZO0FBR2hCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci1uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3tcclxuICAgIC5sb2dvLXRleHR7XHJcbiAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICB9XHJcbiAgICAubG9nby1pY29ue1xyXG4gICAgICAgIHdpZHRoOjYwcHhcclxuICAgIH1cclxufVxyXG4ubG9nby1ib3h7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIGltZ3tcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navigation',
            templateUrl: './navigation.component.html',
            styleUrls: ['./navigation.component.scss']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, {
          toggleSidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/header-vertical/header-vertical.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/shared/header-vertical/header-vertical.component.ts ***!
      \*********************************************************************/

    /*! exports provided: HeaderVerticalComponent */

    /***/
    function srcAppSharedHeaderVerticalHeaderVerticalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderVerticalComponent", function () {
        return HeaderVerticalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _menu_items___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./menu-items  */
      "./src/app/shared/header-vertical/menu-items .ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");

      var _c0 = ["autoCom"];

      function HeaderVerticalComponent_li_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var topbarnavItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](topbarnavItem_r2.title);
        }
      }

      var _c1 = function _c1(a0) {
        return [a0];
      };

      function HeaderVerticalComponent_li_3_a_2_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var topbarnavItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, topbarnavItem_r2.labelClass));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](topbarnavItem_r2.label);
        }
      }

      function HeaderVerticalComponent_li_3_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderVerticalComponent_li_3_a_2_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var topbarnavItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.addExpandClass(topbarnavItem_r2.title);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderVerticalComponent_li_3_a_2_span_4_Template, 2, 4, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var topbarnavItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", topbarnavItem_r2["class"] === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, topbarnavItem_r2.path) : null)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, topbarnavItem_r2["class"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, topbarnavItem_r2.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", topbarnavItem_r2.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", topbarnavItem_r2.label != "");
        }
      }

      function HeaderVerticalComponent_li_3_ul_3_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderVerticalComponent_li_3_ul_3_li_1_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var sidebarnavSubItem_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r17.addActiveClass(sidebarnavSubItem_r14.title);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubItem_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", sidebarnavSubItem_r14.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, sidebarnavSubItem_r14.path))("routerLinkActive", sidebarnavSubItem_r14.submenu.length > 0 ? "" : "router-link-active")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, sidebarnavSubItem_r14["class"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, sidebarnavSubItem_r14.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sidebarnavSubItem_r14.title, " ");
        }
      }

      function HeaderVerticalComponent_li_3_ul_3_li_1_ul_2_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubsubItem_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, sidebarnavSubsubItem_r22.path))("routerLinkActive", sidebarnavSubsubItem_r22.submenu.length > 0 ? "" : "router-link-active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, sidebarnavSubsubItem_r22.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sidebarnavSubsubItem_r22.title, " ");
        }
      }

      function HeaderVerticalComponent_li_3_ul_3_li_1_ul_2_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderVerticalComponent_li_3_ul_3_li_1_ul_2_li_1_a_1_Template, 3, 8, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubsubItem_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, sidebarnavSubsubItem_r22["class"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !sidebarnavSubsubItem_r22.extralink);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "in": a0
        };
      };

      function HeaderVerticalComponent_li_3_ul_3_li_1_ul_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderVerticalComponent_li_3_ul_3_li_1_ul_2_li_1_Template, 2, 4, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubItem_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, ctx_r16.showSubMenu === sidebarnavSubItem_r14.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sidebarnavSubItem_r14.submenu);
        }
      }

      function HeaderVerticalComponent_li_3_ul_3_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderVerticalComponent_li_3_ul_3_li_1_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r26.showMenu = "0";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderVerticalComponent_li_3_ul_3_li_1_a_1_Template, 3, 11, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderVerticalComponent_li_3_ul_3_li_1_ul_2_Template, 2, 4, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubItem_r14 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r13.showSubMenu === sidebarnavSubItem_r14.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", sidebarnavSubItem_r14.submenu.length > 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !sidebarnavSubItem_r14.extralink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sidebarnavSubItem_r14.submenu.length > 0);
        }
      }

      function HeaderVerticalComponent_li_3_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderVerticalComponent_li_3_ul_3_li_1_Template, 3, 5, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var topbarnavItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, ctx_r5.showMenu === topbarnavItem_r2.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", topbarnavItem_r2.submenu);
        }
      }

      function HeaderVerticalComponent_li_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderVerticalComponent_li_3_div_1_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderVerticalComponent_li_3_a_2_Template, 5, 11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderVerticalComponent_li_3_ul_3_Template, 2, 4, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var topbarnavItem_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r1.showMenu === topbarnavItem_r2.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", topbarnavItem_r2.submenu.length != 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", topbarnavItem_r2.extralink === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !topbarnavItem_r2.extralink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", topbarnavItem_r2.submenu.length > 0);
        }
      }

      var HeaderVerticalComponent = /*#__PURE__*/function () {
        function HeaderVerticalComponent(modalService, router, route) {
          _classCallCheck(this, HeaderVerticalComponent);

          this.modalService = modalService;
          this.router = router;
          this.route = route;
          this.showMenu = '';
          this.showSubMenu = '';
        } // this is for the open close


        _createClass(HeaderVerticalComponent, [{
          key: "addExpandClass",
          value: function addExpandClass(element) {
            if (element === this.showMenu) {
              this.showMenu = '0';
            } else {
              this.showMenu = element;
            }
          }
        }, {
          key: "addActiveClass",
          value: function addActiveClass(element) {
            if (element === this.showSubMenu) {
              this.showSubMenu = '0';
            } else {
              this.showSubMenu = element;
            }
          }
        }, {
          key: "onClick",
          value: function onClick(event) {
            if (!this.autoCom.nativeElement.contains(event.target)) {
              this.showMenu = '0';
              console.log("CLicked Outside");
            } // or some similar check
            else {
                console.log("Clicked Inside");
              }
          } // End open close

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.topbarnavItems = _menu_items___WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(function (topbarnavItem) {
              return topbarnavItem;
            }); // $(document).click(function (event) {
            //     var clickover = $(event.target);
            //     var _opened = $(".collapse").hasClass("in");
            //     if (_opened === true && !clickover.hasClass("in")) {
            //         $("#topbarnav li").click();
            //     }
            // });
          }
        }]);

        return HeaderVerticalComponent;
      }();

      HeaderVerticalComponent.ɵfac = function HeaderVerticalComponent_Factory(t) {
        return new (t || HeaderVerticalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      HeaderVerticalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderVerticalComponent,
        selectors: [["app-header-vertical"]],
        viewQuery: function HeaderVerticalComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.autoCom = _t.first);
          }
        },
        hostBindings: function HeaderVerticalComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderVerticalComponent_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
          }
        },
        decls: 4,
        vars: 1,
        consts: [[1, "top-nav"], ["id", "topbarnav"], ["autoCom", ""], [3, "active", "routerLinkActive", 4, "ngFor", "ngForOf"], [3, "routerLinkActive"], ["class", "nav-small-cap", 4, "ngIf"], [3, "routerLink", "ngClass", "click", 4, "ngIf"], ["class", "collapse", 3, "ngClass", 4, "ngIf"], [1, "nav-small-cap"], [3, "routerLink", "ngClass", "click"], [3, "ngClass"], [1, "hide-menu"], [3, "ngClass", 4, "ngIf"], [1, "collapse", 3, "ngClass"], [3, "active", "routerLinkActive", "click", 4, "ngFor", "ngForOf"], [3, "routerLinkActive", "click"], [3, "routerLink", "routerLinkActive", "ngClass", "click", 4, "ngIf"], [3, "routerLink", "routerLinkActive", "ngClass", "click"], ["routerLinkActive", "active", 3, "ngClass", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "ngClass"], [3, "routerLink", "routerLinkActive", 4, "ngIf"], [3, "routerLink", "routerLinkActive"]],
        template: function HeaderVerticalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderVerticalComponent_li_3_Template, 4, 6, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.topbarnavItems);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXItdmVydGljYWwvaGVhZGVyLXZlcnRpY2FsLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderVerticalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header-vertical',
            templateUrl: './header-vertical.component.html',
            styleUrls: ['./header-vertical.component.scss'],
            host: {
              '(document:click)': 'onClick($event)'
            }
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }];
        }, {
          autoCom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['autoCom']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/header-vertical/menu-items .ts":
    /*!*******************************************************!*\
      !*** ./src/app/shared/header-vertical/menu-items .ts ***!
      \*******************************************************/

    /*! exports provided: ROUTES */

    /***/
    function srcAppSharedHeaderVerticalMenuItemsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });

      var ROUTES = [// {
      //     path: '',
      //     title: 'Personal',
      //     icon: '',
      //     class: 'nav-small-cap',
      //     label: '',
      //     labelClass: '',
      //     extralink: true,
      //     submenu: []
      // },
      {
        path: "/dashboard/dashboard",
        title: "Dashboard",
        icon: "mdi mdi-view-dashboard",
        "class": "",
        label: "",
        labelClass: "",
        extralink: false,
        submenu: []
      }, {
        path: "/users/userlist",
        title: "Users",
        icon: "mdi mdi-account",
        "class": "",
        label: "",
        labelClass: "",
        extralink: false,
        submenu: []
      }, //   {
      //     path: "/vendors/vendorlist",
      //     title: "Vendors",
      //     icon: "mdi mdi-account",
      //     class: "",
      //     label: "",
      //     labelClass: "",
      //     extralink: false,
      //     submenu: [],
      //   },
      {
        path: "/review/reviewlist",
        title: "Support",
        icon: "mdi mdi-star",
        "class": "",
        label: "",
        labelClass: "",
        extralink: false,
        submenu: []
      }, // {
      //   path: "/product/productlist",
      //   title: "Product",
      //   icon: "mdi mdi-package-variant",
      //   class: "",
      //   label: "",
      //   labelClass: "",
      //   extralink: false,
      //   submenu: [],
      // },
      // {
      //   path: "/orders/orderslist",
      //   title: "Orders",
      //   icon: "mdi mdi-cart",
      //   class: "",
      //   label: "",
      //   labelClass: "",
      //   extralink: false,
      //   submenu: [],
      // },
      {
        path: "/notification/addnotification",
        title: "Notification",
        icon: "mdi mdi-bell-ring",
        "class": "",
        label: "",
        labelClass: "",
        extralink: false,
        submenu: []
      }, // {
      //   path: "/inventory/inventorylist",
      //   title: "Inventory",
      //   icon: "mdi mdi-package-variant",
      //   class: "",
      //   label: "",
      //   labelClass: "",
      //   extralink: false,
      //   submenu: [],
      // },
      {
        path: "/others/groupform",
        title: "Group Form",
        icon: "mdi mdi-account-box-outline",
        "class": "",
        label: "",
        labelClass: "",
        extralink: false,
        submenu: []
      }, {
        path: "/subadmin/adminlist",
        title: "Sub Admin",
        icon: "mdi mdi-account-box-outline",
        "class": "",
        label: "",
        labelClass: "",
        extralink: false,
        submenu: []
      }, // {
      //   path: "/subscription/plans",
      //   title: "Subscription",
      //   icon: "mdi mdi-currency-usd",
      //   class: "",
      //   label: "",
      //   labelClass: "",
      //   extralink: false,
      //   submenu: [],
      // },
      // {
      //   path: "/revenue/revenuelist",
      //   title: "Revenue",
      //   icon: "mdi mdi-account-box-outline",
      //   class: "",
      //   label: "",
      //   labelClass: "",
      //   extralink: false,
      //   submenu: [],
      // },
      // {
      //   path: "/others/analytics",
      //   title: "Analytics",
      //   icon: "mdi mdi-chart-arc",
      //   class: "",
      //   label: "",
      //   labelClass: "",
      //   extralink: false,
      //   submenu: [],
      // },
      {
        path: "cms/cmslist",
        title: "CMS",
        icon: "mdi mdi-message-settings-variant",
        "class": "",
        label: "",
        labelClass: "",
        extralink: false,
        submenu: []
      }];
      /***/
    },

    /***/
    "./src/app/shared/sidebar/menu-items.ts":
    /*!**********************************************!*\
      !*** ./src/app/shared/sidebar/menu-items.ts ***!
      \**********************************************/

    /*! exports provided: ROUTES */

    /***/
    function srcAppSharedSidebarMenuItemsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });

      var ROUTES = [// {
      //     path: '',
      //     title: 'Personal',
      //     icon: '',
      //     class: 'nav-small-cap',
      //     label: '',
      //     labelClass: '',
      //     extralink: true,
      //     submenu: []
      // },
      {
        path: "/dashboard/dashboard",
        title: "Dashboard",
        icon: "mdi mdi-view-dashboard",
        "class": "",
        label: "",
        labelClass: "",
        extralink: false,
        submenu: []
      }, {
        path: "/users/userlist",
        title: "Users",
        icon: "mdi mdi-account",
        "class": "",
        label: "",
        labelClass: "",
        extralink: false,
        submenu: []
      }, //   {
      //     path: "/vendors/vendorlist",
      //     title: "Vendors",
      //     icon: "mdi mdi-account",
      //     class: "",
      //     label: "",
      //     labelClass: "",
      //     extralink: false,
      //     submenu: [],
      //   },
      {
        path: "/review/reviewlist",
        title: "Support",
        icon: "mdi mdi-star",
        "class": "",
        label: "",
        labelClass: "",
        extralink: false,
        submenu: []
      }, // {
      //   path: "/product/productlist",
      //   title: "Product",
      //   icon: "mdi mdi-package-variant",
      //   class: "",
      //   label: "",
      //   labelClass: "",
      //   extralink: false,
      //   submenu: [],
      // },
      // {
      //   path: "/orders/orderslist",
      //   title: "Orders",
      //   icon: "mdi mdi-cart",
      //   class: "",
      //   label: "",
      //   labelClass: "",
      //   extralink: false,
      //   submenu: [],
      // },
      {
        path: "/notification/notificationlist",
        title: "Notification",
        icon: "mdi mdi-bell-ring",
        "class": "",
        label: "",
        labelClass: "",
        extralink: false,
        submenu: []
      }, // {
      //   path: "/inventory/inventorylist",
      //   title: "Inventory",
      //   icon: "mdi mdi-package-variant",
      //   class: "",
      //   label: "",
      //   labelClass: "",
      //   extralink: false,
      //   submenu: [],
      // },
      {
        path: "/others/groupform",
        title: "Group Form",
        icon: "mdi mdi-account-box-outline",
        "class": "",
        label: "",
        labelClass: "",
        extralink: false,
        submenu: []
      }, {
        path: "/subadmin/adminlist",
        title: "Sub Admin",
        icon: "mdi mdi-account-box-outline",
        "class": "",
        label: "",
        labelClass: "",
        extralink: false,
        submenu: []
      }, // {
      //   path: "/subscription/plans",
      //   title: "Subscription",
      //   icon: "mdi mdi-currency-usd",
      //   class: "",
      //   label: "",
      //   labelClass: "",
      //   extralink: false,
      //   submenu: [],
      // },
      // {
      //   path: "/revenue/revenuelist",
      //   title: "Revenue",
      //   icon: "mdi mdi-account-box-outline",
      //   class: "",
      //   label: "",
      //   labelClass: "",
      //   extralink: false,
      //   submenu: [],
      // },
      // {
      //   path: "/others/analytics",
      //   title: "Analytics",
      //   icon: "mdi mdi-chart-arc",
      //   class: "",
      //   label: "",
      //   labelClass: "",
      //   extralink: false,
      //   submenu: [],
      // },
      {
        path: "cms/cmslist",
        title: "CMS",
        icon: "mdi mdi-message-settings-variant",
        "class": "has-arrow",
        label: "",
        labelClass: "",
        extralink: false,
        submenu: []
      }];
      /***/
    },

    /***/
    "./src/app/shared/sidebar/sidebar.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
      \*****************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function srcAppSharedSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./menu-items */
      "./src/app/shared/sidebar/menu-items.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");

      function SidebarComponent_li_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sidebarnavItem_r1.title);
        }
      }

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function SidebarComponent_li_3_a_2_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, sidebarnavItem_r1.labelClass));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sidebarnavItem_r1.label);
        }
      }

      function SidebarComponent_li_3_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_li_3_a_2_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.addExpandClass(sidebarnavItem_r1.title);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_li_3_a_2_span_4_Template, 2, 4, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", sidebarnavItem_r1["class"] === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, sidebarnavItem_r1.path) : null)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, sidebarnavItem_r1["class"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, sidebarnavItem_r1.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", sidebarnavItem_r1.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sidebarnavItem_r1.label != "");
        }
      }

      function SidebarComponent_li_3_ul_3_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_li_3_ul_3_li_1_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var sidebarnavSubItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r16.addActiveClass(sidebarnavSubItem_r13.title);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", sidebarnavSubItem_r13.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, sidebarnavSubItem_r13.path))("routerLinkActive", sidebarnavSubItem_r13.submenu.length > 0 ? "" : "router-link-active")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, sidebarnavSubItem_r13["class"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, sidebarnavSubItem_r13.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sidebarnavSubItem_r13.title, " ");
        }
      }

      function SidebarComponent_li_3_ul_3_li_1_ul_2_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubsubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, sidebarnavSubsubItem_r21.path))("routerLinkActive", sidebarnavSubsubItem_r21.submenu.length > 0 ? "" : "router-link-active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, sidebarnavSubsubItem_r21.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sidebarnavSubsubItem_r21.title, " ");
        }
      }

      function SidebarComponent_li_3_ul_3_li_1_ul_2_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_3_ul_3_li_1_ul_2_li_1_a_1_Template, 3, 8, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubsubItem_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, sidebarnavSubsubItem_r21["class"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !sidebarnavSubsubItem_r21.extralink);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "in": a0
        };
      };

      function SidebarComponent_li_3_ul_3_li_1_ul_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_3_ul_3_li_1_ul_2_li_1_Template, 2, 4, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r15.showSubMenu === sidebarnavSubItem_r13.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sidebarnavSubItem_r13.submenu);
        }
      }

      function SidebarComponent_li_3_ul_3_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_3_ul_3_li_1_a_1_Template, 3, 11, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_li_3_ul_3_li_1_ul_2_Template, 2, 4, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubItem_r13 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r12.showSubMenu === sidebarnavSubItem_r13.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", sidebarnavSubItem_r13.submenu.length > 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !sidebarnavSubItem_r13.extralink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sidebarnavSubItem_r13.submenu.length > 0);
        }
      }

      function SidebarComponent_li_3_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_3_ul_3_li_1_Template, 3, 5, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r4.showMenu === sidebarnavItem_r1.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sidebarnavItem_r1.submenu);
        }
      }

      function SidebarComponent_li_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_3_div_1_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_li_3_a_2_Template, 5, 11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_li_3_ul_3_Template, 2, 4, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavItem_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.showMenu === sidebarnavItem_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", sidebarnavItem_r1.submenu.length != 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sidebarnavItem_r1.extralink === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !sidebarnavItem_r1.extralink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sidebarnavItem_r1.submenu.length > 0);
        }
      }

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(modalService, router, route) {
          _classCallCheck(this, SidebarComponent);

          this.modalService = modalService;
          this.router = router;
          this.route = route;
          this.showMenu = '';
          this.showSubMenu = '';
        } // this is for the open close


        _createClass(SidebarComponent, [{
          key: "addExpandClass",
          value: function addExpandClass(element) {
            if (element === this.showMenu) {
              this.showMenu = '0';
            } else {
              this.showMenu = element;
            }
          }
        }, {
          key: "addActiveClass",
          value: function addActiveClass(element) {
            if (element === this.showSubMenu) {
              this.showSubMenu = '0';
            } else {
              this.showSubMenu = element;
            }
          } // End open close

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sidebarnavItems = _menu_items__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(function (sidebarnavItem) {
              return sidebarnavItem;
            });
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidebarComponent,
        selectors: [["app-sidebar"]],
        decls: 4,
        vars: 1,
        consts: [[1, "nav-devider"], [1, "sidebar-nav"], ["id", "sidebarnav"], [3, "active", "routerLinkActive", 4, "ngFor", "ngForOf"], [3, "routerLinkActive"], ["class", "nav-small-cap", 4, "ngIf"], [3, "routerLink", "ngClass", "click", 4, "ngIf"], ["class", "collapse", 3, "ngClass", 4, "ngIf"], [1, "nav-small-cap"], [3, "routerLink", "ngClass", "click"], [3, "ngClass"], [1, "hide-menu"], [3, "ngClass", 4, "ngIf"], [1, "collapse", 3, "ngClass"], [3, "routerLink", "routerLinkActive", "ngClass", "click", 4, "ngIf"], [3, "routerLink", "routerLinkActive", "ngClass", "click"], ["routerLinkActive", "active", 3, "ngClass", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "ngClass"], [3, "routerLink", "routerLinkActive", 4, "ngIf"], [3, "routerLink", "routerLinkActive"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_li_3_Template, 4, 6, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sidebarnavItems);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html'
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/spinner.component.ts":
    /*!*********************************************!*\
      !*** ./src/app/shared/spinner.component.ts ***!
      \*********************************************/

    /*! exports provided: SpinnerComponent */

    /***/
    function srcAppSharedSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
        return SpinnerComponent;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");

      function SpinnerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SpinnerComponent = /*#__PURE__*/function () {
        function SpinnerComponent(router, document) {
          var _this4 = this;

          _classCallCheck(this, SpinnerComponent);

          this.router = router;
          this.document = document;
          this.isSpinnerVisible = true;
          this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
              _this4.isSpinnerVisible = true;
            } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
              _this4.isSpinnerVisible = false;
            }
          }, function () {
            _this4.isSpinnerVisible = false;
          });
        }

        _createClass(SpinnerComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.isSpinnerVisible = false;
          }
        }]);

        return SpinnerComponent;
      }();

      SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
        return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
      };

      SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SpinnerComponent,
        selectors: [["app-spinner"]],
        inputs: {
          backgroundColor: "backgroundColor"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "preloader", 4, "ngIf"], [1, "preloader"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"]],
        template: function SpinnerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 4, 0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-spinner',
            template: "<div class=\"preloader\" *ngIf=\"isSpinnerVisible\">\n        <div class=\"spinner\">\n          <div class=\"double-bounce1\"></div>\n          <div class=\"double-bounce2\"></div>\n        </div>\n    </div>",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }]
          }];
        }, {
          backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
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
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        baseUrl: 'http://appgrowthcompany.com:3022/'
      };
      /*
       * In development mode, to ignore zone related error stack frames such as
       * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
       * import the following file, but please comment it out in production mode
       * because it will have performance impact when throw error
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
      /*! C:\Users\DELL\Desktop\qtryly_angular_admin\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map