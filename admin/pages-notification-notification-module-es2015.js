(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notification-notification-module"],{

/***/ "./src/app/pages/notification/add-notification/add-notification.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/notification/add-notification/add-notification.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AddNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNotificationComponent", function() { return AddNotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm2015/form-field.js");















function AddNotificationComponent_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Heading is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddNotificationComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Message is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddNotificationComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddNotificationComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.sendNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddNotificationComponent {
    constructor(router, modalService, _apiService, _commService, fb) {
        this.router = router;
        this.modalService = modalService;
        this._apiService = _apiService;
        this._commService = _commService;
        this.fb = fb;
        this.isSubmitted = false;
        this.disableSelect = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.toppingList = ['All', 'User1', 'User2', 'User3', 'User4', 'User5'];
        this.toppingId = ['#334343', '#634343', '#454543', '#765654', '#334343', '#233232'];
    }
    ngOnInit() {
        this.a = JSON.parse(localStorage.getItem('user')).role;
        this.b = JSON.parse(localStorage.getItem('permissionItems'));
        console.log(this.a, this.b, "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
        if (this.a == 2) {
            this.b.forEach(element => {
                if (element.label == "Notification") {
                    this.add = element.isAdd,
                        this.edit = element.isEdit,
                        this.delete = element.isDelete;
                }
            });
            console.log(this.add);
            console.log(this.edit);
            console.log(this.delete);
        }
        this.getNotification();
        this.notificationForm = this.fb.group({
            heading: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            message: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    getNotification() {
    }
    sendNotification() {
        this.isSubmitted = true;
        if (this.isSubmitted && this.notificationForm.valid) {
        }
    }
}
AddNotificationComponent.ɵfac = function AddNotificationComponent_Factory(t) { return new (t || AddNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
AddNotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddNotificationComponent, selectors: [["app-add-notification"]], decls: 22, vars: 4, consts: [[1, "card"], [1, "card-body"], [3, "formGroup"], [1, "row"], [1, "col-md-12", "text-right"], ["routerLink", "/notification/notificationlist", 1, "btn", "btn-primary"], [1, "col-md-4"], [1, "mb-3"], [1, "form-group"], ["type", "text", "placeholder", "", "formControlName", "heading", 1, "form-control"], [4, "ngIf"], ["name", "", "id", "", "cols", "30", "formControlName", "message", "rows", "5", 1, "form-control"], [1, "col-md-12"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"]], template: function AddNotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "View Notification History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Users Notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddNotificationComponent_mat_error_14_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Add Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddNotificationComponent_mat_error_19_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddNotificationComponent_button_21_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.notificationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSubmitted && ctx.notificationForm.controls["heading"].hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSubmitted && ctx.notificationForm.controls["message"].hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.add || ctx.a == 1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi9hZGQtbm90aWZpY2F0aW9uL2FkZC1ub3RpZmljYXRpb24uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddNotificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-notification',
                templateUrl: './add-notification.component.html',
                styleUrls: ['./add-notification.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }, { type: _service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/notification/notification-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/notification/notification-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationRoutingModule", function() { return NotificationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _notificaton_list_notificaton_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notificaton-list/notificaton-list.component */ "./src/app/pages/notification/notificaton-list/notificaton-list.component.ts");
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.component */ "./src/app/pages/notification/notification.component.ts");
/* harmony import */ var _add_notification_add_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-notification/add-notification.component */ "./src/app/pages/notification/add-notification/add-notification.component.ts");







const routes = [
    {
        path: "",
        redirectTo: "addnotification",
        pathMatch: "full"
    },
    {
        path: '',
        component: _notification_component__WEBPACK_IMPORTED_MODULE_3__["NotificationComponent"],
        children: [
            {
                path: 'addnotification',
                component: _add_notification_add_notification_component__WEBPACK_IMPORTED_MODULE_4__["AddNotificationComponent"],
                data: {
                    title: "Add Notification",
                }
            },
            {
                path: 'notificationlist',
                component: _notificaton_list_notificaton_list_component__WEBPACK_IMPORTED_MODULE_2__["NotificatonListComponent"],
                data: {
                    title: "Notificaton",
                }
            }
        ]
    }
];
class NotificationRoutingModule {
}
NotificationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NotificationRoutingModule });
NotificationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NotificationRoutingModule_Factory(t) { return new (t || NotificationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotificationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/notification/notification.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/notification/notification.component.ts ***!
  \**************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



class NotificationComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) { return new (t || NotificationComponent)(); };
NotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationComponent, selectors: [["app-notification"]], decls: 1, vars: 0, template: function NotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notification',
                templateUrl: './notification.component.html',
                styleUrls: ['./notification.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/notification/notification.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/notification/notification.module.ts ***!
  \***********************************************************/
/*! exports provided: NotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationModule", function() { return NotificationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/fesm2015/select.js");
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification-routing.module */ "./src/app/pages/notification/notification-routing.module.ts");
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification.component */ "./src/app/pages/notification/notification.component.ts");
/* harmony import */ var _notificaton_list_notificaton_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notificaton-list/notificaton-list.component */ "./src/app/pages/notification/notificaton-list/notificaton-list.component.ts");
/* harmony import */ var _add_notification_add_notification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-notification/add-notification.component */ "./src/app/pages/notification/add-notification/add-notification.component.ts");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/fesm2015/paginator.js");














class NotificationModule {
}
NotificationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NotificationModule });
NotificationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NotificationModule_Factory(t) { return new (t || NotificationModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _notification_routing_module__WEBPACK_IMPORTED_MODULE_4__["NotificationRoutingModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotificationModule, { declarations: [_notification_component__WEBPACK_IMPORTED_MODULE_5__["NotificationComponent"], _notificaton_list_notificaton_list_component__WEBPACK_IMPORTED_MODULE_6__["NotificatonListComponent"], _add_notification_add_notification_component__WEBPACK_IMPORTED_MODULE_7__["AddNotificationComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _notification_routing_module__WEBPACK_IMPORTED_MODULE_4__["NotificationRoutingModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_notification_component__WEBPACK_IMPORTED_MODULE_5__["NotificationComponent"], _notificaton_list_notificaton_list_component__WEBPACK_IMPORTED_MODULE_6__["NotificatonListComponent"], _add_notification_add_notification_component__WEBPACK_IMPORTED_MODULE_7__["AddNotificationComponent"]],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _notification_routing_module__WEBPACK_IMPORTED_MODULE_4__["NotificationRoutingModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/notification/notificaton-list/notificaton-list.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/notification/notificaton-list/notificaton-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: NotificatonListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificatonListComponent", function() { return NotificatonListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/fesm2015/paginator.js");














function NotificatonListComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum dummy content It is useful for all type site and use for dummy content all type site and use for dummy content all type site and use for dummy content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r3 + ctx_r0.limit * ctx_r0.page + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.name);
} }
const _c0 = function () { return [10, 25, 100]; };
function NotificatonListComponent_mat_paginator_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-paginator", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function NotificatonListComponent_mat_paginator_14_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.handlePageEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageIndex", ctx_r1.page)("length", ctx_r1.notificationDetailsCount)("pageSize", ctx_r1.limit)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
} }
class NotificatonListComponent {
    constructor(router, modalService, _apiService, _commService, fb) {
        this.router = router;
        this.modalService = modalService;
        this._apiService = _apiService;
        this._commService = _commService;
        this.fb = fb;
        this.page = 0;
        this.limit = 10;
        this.searchText = '';
    }
    ngOnInit() {
        this.getNotificationHistory('');
    }
    getNotificationHistory(event) {
        console.log("eeeeeeeeeeeeeeeeeeeee");
        console.log(event);
        if (event != '') {
            this.page = 0;
        }
        const reqbody = { "search": this.searchText.trim(), "page": 0, "limit": this.limit };
        this._apiService.postRequest('api/v1/admin/getAllUser', reqbody).subscribe((response) => {
            console.log("response", response);
            this.notificationDetails = response.data.userData;
            this.notificationDetailsCount = response.data.count;
            console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
        }, (err) => {
            this._commService.errorMsg(err.error.message);
            this._commService.hideSpinner();
        });
    }
    handlePageEvent(event) {
        this.limit = event.pageSize;
        this.page = event.pageIndex;
        const reqbody = { "search": this.searchText.trim(), "page": this.page, "limit": this.limit };
        this._apiService.postRequest('api/v1/admin/getAllUser', reqbody).subscribe((response) => {
            console.log("response", response);
            this.notificationDetails = response.data.userData;
            this.notificationDetailsCount = response.data.count;
            console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
        }, (err) => {
            this._commService.errorMsg(err.error.message);
            this._commService.hideSpinner();
        });
    }
}
NotificatonListComponent.ɵfac = function NotificatonListComponent_Factory(t) { return new (t || NotificatonListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
NotificatonListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificatonListComponent, selectors: [["app-notificaton-list"]], decls: 15, vars: 2, consts: [[1, "row"], [1, "col-md-12", "text-right"], ["routerLink", "/notification/addnotification", 1, "btn", "btn-primary"], [1, "table-responsive"], [1, "table"], [1, "text-nowrap"], [4, "ngFor", "ngForOf"], [3, "pageIndex", "length", "pageSize", "pageSizeOptions", "page", 4, "ngIf"], [3, "pageIndex", "length", "pageSize", "pageSizeOptions", "page"]], template: function NotificatonListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NotificatonListComponent_tr_13_Template, 7, 2, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NotificatonListComponent_mat_paginator_14_Template, 1, 5, "mat-paginator", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notificationDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationDetailsCount && ctx.notificationDetailsCount > 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRvbi1saXN0L25vdGlmaWNhdG9uLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificatonListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notificaton-list',
                templateUrl: './notificaton-list.component.html',
                styleUrls: ['./notificaton-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }, { type: _service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-notification-notification-module-es2015.js.map