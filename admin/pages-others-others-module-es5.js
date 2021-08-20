(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-others-others-module"], {
    /***/
    "./node_modules/@angular/material/fesm2015/button.js":
    /*!***********************************************************!*\
      !*** ./node_modules/@angular/material/fesm2015/button.js ***!
      \***********************************************************/

    /*! exports provided: MatAnchor, MatButton, MatButtonModule */

    /***/
    function node_modulesAngularMaterialFesm2015ButtonJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAnchor", function () {
        return MatAnchor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatButton", function () {
        return MatButton;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatButtonModule", function () {
        return MatButtonModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "./node_modules/@angular/cdk/fesm2015/a11y.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/fesm2015/animations.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Default color palette for round buttons (mat-fab and mat-mini-fab) */


      var _c0 = ["mat-button", ""];
      var _c1 = ["*"];
      var _c2 = ".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n";
      var DEFAULT_ROUND_BUTTON_COLOR = 'accent';
      /**
       * List of classes to add to MatButton instances based on host attributes to
       * style as different variants.
       */

      var BUTTON_HOST_ATTRIBUTES = ['mat-button', 'mat-flat-button', 'mat-icon-button', 'mat-raised-button', 'mat-stroked-button', 'mat-mini-fab', 'mat-fab']; // Boilerplate for applying mixins to MatButton.

      /** @docs-private */

      var MatButtonBase = function MatButtonBase(_elementRef) {
        _classCallCheck(this, MatButtonBase);

        this._elementRef = _elementRef;
      };

      var _MatButtonMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinDisableRipple"])(MatButtonBase)));
      /**
       * Material design button.
       */


      var MatButton = /*#__PURE__*/function (_MatButtonMixinBase2) {
        _inherits(MatButton, _MatButtonMixinBase2);

        var _super = _createSuper(MatButton);

        function MatButton(elementRef, _focusMonitor, _animationMode) {
          var _this;

          _classCallCheck(this, MatButton);

          _this = _super.call(this, elementRef);
          _this._focusMonitor = _focusMonitor;
          _this._animationMode = _animationMode;
          /** Whether the button is round. */

          _this.isRoundButton = _this._hasHostAttributes('mat-fab', 'mat-mini-fab');
          /** Whether the button is icon button. */

          _this.isIconButton = _this._hasHostAttributes('mat-icon-button'); // For each of the variant selectors that is present in the button's host
          // attributes, add the correct corresponding class.

          var _iterator = _createForOfIteratorHelper(BUTTON_HOST_ATTRIBUTES),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var attr = _step.value;

              if (_this._hasHostAttributes(attr)) {
                _this._getHostElement().classList.add(attr);
              }
            } // Add a class that applies to all buttons. This makes it easier to target if somebody
            // wants to target all Material buttons. We do it here rather than `host` to ensure that
            // the class is applied to derived classes.

          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          elementRef.nativeElement.classList.add('mat-button-base');

          if (_this.isRoundButton) {
            _this.color = DEFAULT_ROUND_BUTTON_COLOR;
          }

          return _this;
        }

        _createClass(MatButton, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this._focusMonitor.monitor(this._elementRef, true);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);
          }
          /** Focuses the button. */

        }, {
          key: "focus",
          value: function focus() {
            var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';
            var options = arguments.length > 1 ? arguments[1] : undefined;

            this._focusMonitor.focusVia(this._getHostElement(), origin, options);
          }
        }, {
          key: "_getHostElement",
          value: function _getHostElement() {
            return this._elementRef.nativeElement;
          }
        }, {
          key: "_isRippleDisabled",
          value: function _isRippleDisabled() {
            return this.disableRipple || this.disabled;
          }
          /** Gets whether the button has one of the given attributes. */

        }, {
          key: "_hasHostAttributes",
          value: function _hasHostAttributes() {
            var _this2 = this;

            for (var _len = arguments.length, attributes = new Array(_len), _key = 0; _key < _len; _key++) {
              attributes[_key] = arguments[_key];
            }

            return attributes.some(function (attribute) {
              return _this2._getHostElement().hasAttribute(attribute);
            });
          }
        }]);

        return MatButton;
      }(_MatButtonMixinBase);

      MatButton.ɵfac = function MatButton_Factory(t) {
        return new (t || MatButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatButton,
        selectors: [["button", "mat-button", ""], ["button", "mat-raised-button", ""], ["button", "mat-icon-button", ""], ["button", "mat-fab", ""], ["button", "mat-mini-fab", ""], ["button", "mat-stroked-button", ""], ["button", "mat-flat-button", ""]],
        viewQuery: function MatButton_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
          }
        },
        hostAttrs: [1, "mat-focus-indicator"],
        hostVars: 5,
        hostBindings: function MatButton_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.disabled || null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-button-disabled", ctx.disabled);
          }
        },
        inputs: {
          disabled: "disabled",
          disableRipple: "disableRipple",
          color: "color"
        },
        exportAs: ["matButton"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        attrs: _c0,
        ngContentSelectors: _c1,
        decls: 4,
        vars: 5,
        consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]],
        template: function MatButton_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]],
        styles: [_c2],
        encapsulation: 2,
        changeDetection: 0
      });

      MatButton.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatButton.propDecorators = {
        ripple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatButton, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],\n             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],\n             button[mat-flat-button]",
            exportAs: 'matButton',
            host: {
              '[attr.disabled]': 'disabled || null',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
              // Add a class for disabled button styling instead of the using attribute
              // selector or pseudo-selector.  This allows users to create focusabled
              // disabled buttons without recreating the styles.
              '[class.mat-button-disabled]': 'disabled',
              'class': 'mat-focus-indicator'
            },
            template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span>\n<div matRipple class=\"mat-button-ripple\"\n     [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\"\n     [matRippleDisabled]=\"_isRippleDisabled()\"\n     [matRippleCentered]=\"isIconButton\"\n     [matRippleTrigger]=\"_getHostElement()\"></div>\n<div class=\"mat-button-focus-overlay\"></div>\n",
            inputs: ['disabled', 'disableRipple', 'color'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          ripple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]]
          }]
        });
      })();
      /**
       * Material design anchor button.
       */


      var MatAnchor = /*#__PURE__*/function (_MatButton) {
        _inherits(MatAnchor, _MatButton);

        var _super2 = _createSuper(MatAnchor);

        function MatAnchor(focusMonitor, elementRef, animationMode) {
          _classCallCheck(this, MatAnchor);

          return _super2.call(this, elementRef, focusMonitor, animationMode);
        }

        _createClass(MatAnchor, [{
          key: "_haltDisabledEvents",
          value: function _haltDisabledEvents(event) {
            // A disabled button shouldn't apply any actions
            if (this.disabled) {
              event.preventDefault();
              event.stopImmediatePropagation();
            }
          }
        }]);

        return MatAnchor;
      }(MatButton);

      MatAnchor.ɵfac = function MatAnchor_Factory(t) {
        return new (t || MatAnchor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatAnchor.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatAnchor,
        selectors: [["a", "mat-button", ""], ["a", "mat-raised-button", ""], ["a", "mat-icon-button", ""], ["a", "mat-fab", ""], ["a", "mat-mini-fab", ""], ["a", "mat-stroked-button", ""], ["a", "mat-flat-button", ""]],
        hostAttrs: [1, "mat-focus-indicator"],
        hostVars: 7,
        hostBindings: function MatAnchor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatAnchor_click_HostBindingHandler($event) {
              return ctx._haltDisabledEvents($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.disabled ? 0 - 1 : ctx.tabIndex || 0)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-button-disabled", ctx.disabled);
          }
        },
        inputs: {
          disabled: "disabled",
          disableRipple: "disableRipple",
          color: "color",
          tabIndex: "tabIndex"
        },
        exportAs: ["matButton", "matAnchor"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        attrs: _c0,
        ngContentSelectors: _c1,
        decls: 4,
        vars: 5,
        consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]],
        template: function MatAnchor_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]],
        styles: [_c2],
        encapsulation: 2,
        changeDetection: 0
      });

      MatAnchor.ctorParameters = function () {
        return [{
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatAnchor.propDecorators = {
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAnchor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],\n             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]",
            exportAs: 'matButton, matAnchor',
            host: {
              // Note that we ignore the user-specified tabindex when it's disabled for
              // consistency with the `mat-button` applied on native buttons where even
              // though they have an index, they're not tabbable.
              '[attr.tabindex]': 'disabled ? -1 : (tabIndex || 0)',
              '[attr.disabled]': 'disabled || null',
              '[attr.aria-disabled]': 'disabled.toString()',
              '(click)': '_haltDisabledEvents($event)',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
              '[class.mat-button-disabled]': 'disabled',
              'class': 'mat-focus-indicator'
            },
            inputs: ['disabled', 'disableRipple', 'color'],
            template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span>\n<div matRipple class=\"mat-button-ripple\"\n     [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\"\n     [matRippleDisabled]=\"_isRippleDisabled()\"\n     [matRippleCentered]=\"isIconButton\"\n     [matRippleTrigger]=\"_getHostElement()\"></div>\n<div class=\"mat-button-focus-overlay\"></div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"]
          }]
        }], function () {
          return [{
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatButtonModule = function MatButtonModule() {
        _classCallCheck(this, MatButtonModule);
      };

      MatButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatButtonModule
      });
      MatButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatButtonModule_Factory(t) {
          return new (t || MatButtonModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatButtonModule, {
          declarations: function declarations() {
            return [MatButton, MatAnchor];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatButton, MatAnchor, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatButtonModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            exports: [MatButton, MatAnchor, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            declarations: [MatButton, MatAnchor]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=button.js.map

      /***/

    },

    /***/
    "./node_modules/@angular/material/fesm2015/datepicker.js":
    /*!***************************************************************!*\
      !*** ./node_modules/@angular/material/fesm2015/datepicker.js ***!
      \***************************************************************/

    /*! exports provided: DateRange, DefaultMatCalendarRangeStrategy, MAT_DATEPICKER_SCROLL_STRATEGY, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_DATEPICKER_VALIDATORS, MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATE_RANGE_SELECTION_STRATEGY, MAT_RANGE_DATE_SELECTION_MODEL_FACTORY, MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER, MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY, MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER, MatCalendar, MatCalendarBody, MatCalendarCell, MatCalendarHeader, MatDateRangeInput, MatDateRangePicker, MatDateSelectionModel, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerInputEvent, MatDatepickerIntl, MatDatepickerModule, MatDatepickerToggle, MatDatepickerToggleIcon, MatEndDate, MatMonthView, MatMultiYearView, MatRangeDateSelectionModel, MatSingleDateSelectionModel, MatStartDate, MatYearView, matDatepickerAnimations, yearsPerPage, yearsPerRow, ɵangular_material_src_material_datepicker_datepicker_a, ɵangular_material_src_material_datepicker_datepicker_b, ɵangular_material_src_material_datepicker_datepicker_c */

    /***/
    function node_modulesAngularMaterialFesm2015DatepickerJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateRange", function () {
        return DateRange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultMatCalendarRangeStrategy", function () {
        return DefaultMatCalendarRangeStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY", function () {
        return MAT_DATEPICKER_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY", function () {
        return MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER", function () {
        return MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_VALIDATORS", function () {
        return MAT_DATEPICKER_VALIDATORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_VALUE_ACCESSOR", function () {
        return MAT_DATEPICKER_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATE_RANGE_SELECTION_STRATEGY", function () {
        return MAT_DATE_RANGE_SELECTION_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_RANGE_DATE_SELECTION_MODEL_FACTORY", function () {
        return MAT_RANGE_DATE_SELECTION_MODEL_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER", function () {
        return MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY", function () {
        return MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER", function () {
        return MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCalendar", function () {
        return MatCalendar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCalendarBody", function () {
        return MatCalendarBody;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCalendarCell", function () {
        return MatCalendarCell;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCalendarHeader", function () {
        return MatCalendarHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDateRangeInput", function () {
        return MatDateRangeInput;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDateRangePicker", function () {
        return MatDateRangePicker;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDateSelectionModel", function () {
        return MatDateSelectionModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDatepicker", function () {
        return MatDatepicker;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDatepickerContent", function () {
        return MatDatepickerContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDatepickerInput", function () {
        return MatDatepickerInput;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDatepickerInputEvent", function () {
        return MatDatepickerInputEvent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDatepickerIntl", function () {
        return MatDatepickerIntl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDatepickerModule", function () {
        return MatDatepickerModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDatepickerToggle", function () {
        return MatDatepickerToggle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDatepickerToggleIcon", function () {
        return MatDatepickerToggleIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatEndDate", function () {
        return MatEndDate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMonthView", function () {
        return MatMonthView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMultiYearView", function () {
        return MatMultiYearView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatRangeDateSelectionModel", function () {
        return MatRangeDateSelectionModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSingleDateSelectionModel", function () {
        return MatSingleDateSelectionModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatStartDate", function () {
        return MatStartDate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatYearView", function () {
        return MatYearView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matDatepickerAnimations", function () {
        return matDatepickerAnimations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "yearsPerPage", function () {
        return yearsPerPage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "yearsPerRow", function () {
        return yearsPerRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_datepicker_datepicker_a", function () {
        return MatDatepickerBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_datepicker_datepicker_b", function () {
        return MatDatepickerInputBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_datepicker_datepicker_c", function () {
        return MAT_DATE_RANGE_INPUT_PARENT;
      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "./node_modules/@angular/cdk/fesm2015/a11y.js");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "./node_modules/@angular/cdk/fesm2015/overlay.js");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "./node_modules/@angular/cdk/fesm2015/portal.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/fesm2015/button.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/fesm2015/dialog.js");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "./node_modules/@angular/cdk/fesm2015/scrolling.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "./node_modules/@angular/cdk/fesm2015/keycodes.js");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "./node_modules/@angular/cdk/fesm2015/bidi.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/fesm2015/animations.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/fesm2015/input.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** @docs-private */


      var _c0 = ["mat-calendar-body", ""];

      function MatCalendarBody_tr_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", ctx_r0.numCols);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.label, " ");
        }
      }

      function MatCalendarBody_tr_1_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("padding-top", ctx_r4._cellPadding)("padding-bottom", ctx_r4._cellPadding);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", ctx_r4._firstRowOffset);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4._firstRowOffset >= ctx_r4.labelMinRequiredCells ? ctx_r4.label : "", " ");
        }
      }

      function MatCalendarBody_tr_1_td_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatCalendarBody_tr_1_td_2_Template_td_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);

            var item_r6 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r8._cellClicked(item_r6, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;
          var colIndex_r7 = ctx.index;

          var rowIndex_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", ctx_r5._cellWidth)("padding-top", ctx_r5._cellPadding)("padding-bottom", ctx_r5._cellPadding);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-calendar-body-disabled", !item_r6.enabled)("mat-calendar-body-active", ctx_r5._isActiveCell(rowIndex_r3, colIndex_r7))("mat-calendar-body-range-start", ctx_r5._isRangeStart(item_r6.compareValue))("mat-calendar-body-range-end", ctx_r5._isRangeEnd(item_r6.compareValue))("mat-calendar-body-in-range", ctx_r5._isInRange(item_r6.compareValue))("mat-calendar-body-comparison-bridge-start", ctx_r5._isComparisonBridgeStart(item_r6.compareValue, rowIndex_r3, colIndex_r7))("mat-calendar-body-comparison-bridge-end", ctx_r5._isComparisonBridgeEnd(item_r6.compareValue, rowIndex_r3, colIndex_r7))("mat-calendar-body-comparison-start", ctx_r5._isComparisonStart(item_r6.compareValue))("mat-calendar-body-comparison-end", ctx_r5._isComparisonEnd(item_r6.compareValue))("mat-calendar-body-in-comparison-range", ctx_r5._isInComparisonRange(item_r6.compareValue))("mat-calendar-body-preview-start", ctx_r5._isPreviewStart(item_r6.compareValue))("mat-calendar-body-preview-end", ctx_r5._isPreviewEnd(item_r6.compareValue))("mat-calendar-body-in-preview", ctx_r5._isInPreview(item_r6.compareValue));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", item_r6.cssClasses)("tabindex", ctx_r5._isActiveCell(rowIndex_r3, colIndex_r7) ? 0 : 0 - 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-mat-row", rowIndex_r3)("data-mat-col", colIndex_r7)("aria-label", item_r6.ariaLabel)("aria-disabled", !item_r6.enabled || null)("aria-selected", ctx_r5._isSelected(item_r6));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-calendar-body-selected", ctx_r5._isSelected(item_r6))("mat-calendar-body-today", ctx_r5.todayValue === item_r6.compareValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r6.displayValue, " ");
        }
      }

      function MatCalendarBody_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MatCalendarBody_tr_1_td_1_Template, 2, 6, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatCalendarBody_tr_1_td_2_Template, 4, 44, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r2 = ctx.$implicit;
          var rowIndex_r3 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rowIndex_r3 === 0 && ctx_r1._firstRowOffset);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", row_r2);
        }
      }

      function MatMonthView_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", day_r1["long"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](day_r1.narrow);
        }
      }

      var _c1 = ["*"];

      function MatCalendar_ng_template_0_Template(rf, ctx) {}

      function MatCalendar_mat_month_view_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-month-view", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("activeDateChange", function MatCalendar_mat_month_view_2_Template_mat_month_view_activeDateChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r4.activeDate = $event;
          })("_userSelection", function MatCalendar_mat_month_view_2_Template_mat_month_view__userSelection_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r6._dateSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeDate", ctx_r1.activeDate)("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass)("comparisonStart", ctx_r1.comparisonStart)("comparisonEnd", ctx_r1.comparisonEnd);
        }
      }

      function MatCalendar_mat_year_view_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-year-view", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("activeDateChange", function MatCalendar_mat_year_view_3_Template_mat_year_view_activeDateChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r7.activeDate = $event;
          })("monthSelected", function MatCalendar_mat_year_view_3_Template_mat_year_view_monthSelected_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r9._monthSelectedInYearView($event);
          })("selectedChange", function MatCalendar_mat_year_view_3_Template_mat_year_view_selectedChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r10._goToDateInView($event, "month");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeDate", ctx_r2.activeDate)("selected", ctx_r2.selected)("dateFilter", ctx_r2.dateFilter)("maxDate", ctx_r2.maxDate)("minDate", ctx_r2.minDate);
        }
      }

      function MatCalendar_mat_multi_year_view_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-multi-year-view", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("activeDateChange", function MatCalendar_mat_multi_year_view_4_Template_mat_multi_year_view_activeDateChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r11.activeDate = $event;
          })("yearSelected", function MatCalendar_mat_multi_year_view_4_Template_mat_multi_year_view_yearSelected_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r13._yearSelectedInMultiYearView($event);
          })("selectedChange", function MatCalendar_mat_multi_year_view_4_Template_mat_multi_year_view_selectedChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r14._goToDateInView($event, "year");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeDate", ctx_r3.activeDate)("selected", ctx_r3.selected)("dateFilter", ctx_r3.dateFilter)("maxDate", ctx_r3.maxDate)("minDate", ctx_r3.minDate);
        }
      }

      var _c2 = ["button"];

      function MatDatepickerToggle__svg_svg_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "svg", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var _c3 = [[["", "matDatepickerToggleIcon", ""]]];
      var _c4 = ["[matDatepickerToggleIcon]"];
      var _c5 = [[["input", "matStartDate", ""]], [["input", "matEndDate", ""]]];
      var _c6 = ["input[matStartDate]", "input[matEndDate]"];

      function createMissingDateImplError(provider) {
        return Error("MatDatepicker: No provider found for ".concat(provider, ". You must import one of the following ") + "modules at your application root: MatNativeDateModule, MatMomentDateModule, or provide a " + "custom implementation.");
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Datepicker data that requires internationalization. */


      var MatDatepickerIntl = /*#__PURE__*/function () {
        function MatDatepickerIntl() {
          _classCallCheck(this, MatDatepickerIntl);

          /**
           * Stream that emits whenever the labels here are changed. Use this to notify
           * components if the labels have changed after initialization.
           */
          this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          /** A label for the calendar popup (used by screen readers). */

          this.calendarLabel = 'Calendar';
          /** A label for the button used to open the calendar popup (used by screen readers). */

          this.openCalendarLabel = 'Open calendar';
          /** A label for the previous month button (used by screen readers). */

          this.prevMonthLabel = 'Previous month';
          /** A label for the next month button (used by screen readers). */

          this.nextMonthLabel = 'Next month';
          /** A label for the previous year button (used by screen readers). */

          this.prevYearLabel = 'Previous year';
          /** A label for the next year button (used by screen readers). */

          this.nextYearLabel = 'Next year';
          /** A label for the previous multi-year button (used by screen readers). */

          this.prevMultiYearLabel = 'Previous 20 years';
          /** A label for the next multi-year button (used by screen readers). */

          this.nextMultiYearLabel = 'Next 20 years';
          /** A label for the 'switch to month view' button (used by screen readers). */

          this.switchToMonthViewLabel = 'Choose date';
          /** A label for the 'switch to year view' button (used by screen readers). */

          this.switchToMultiYearViewLabel = 'Choose month and year';
        }
        /** Formats a range of years. */


        _createClass(MatDatepickerIntl, [{
          key: "formatYearRange",
          value: function formatYearRange(start, end) {
            return "".concat(start, " \u2013 ").concat(end);
          }
        }]);

        return MatDatepickerIntl;
      }();

      MatDatepickerIntl.ɵfac = function MatDatepickerIntl_Factory(t) {
        return new (t || MatDatepickerIntl)();
      };

      MatDatepickerIntl.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({
        factory: function MatDatepickerIntl_Factory() {
          return new MatDatepickerIntl();
        },
        token: MatDatepickerIntl,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerIntl, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * An internal class that represents the data corresponding to a single calendar cell.
       * @docs-private
       */


      var MatCalendarCell = function MatCalendarCell(value, displayValue, ariaLabel, enabled) {
        var cssClasses = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
        var compareValue = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : value;
        var rawValue = arguments.length > 6 ? arguments[6] : undefined;

        _classCallCheck(this, MatCalendarCell);

        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
        this.cssClasses = cssClasses;
        this.compareValue = compareValue;
        this.rawValue = rawValue;
      };
      /**
       * An internal component used to display calendar data in a table.
       * @docs-private
       */


      var MatCalendarBody = /*#__PURE__*/function () {
        function MatCalendarBody(_elementRef, _ngZone) {
          var _this3 = this;

          _classCallCheck(this, MatCalendarBody);

          this._elementRef = _elementRef;
          this._ngZone = _ngZone;
          /** The number of columns in the table. */

          this.numCols = 7;
          /** The cell number of the active cell in the table. */

          this.activeCell = 0;
          /** Whether a range is being selected. */

          this.isRange = false;
          /**
           * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
           * maintained even as the table resizes.
           */

          this.cellAspectRatio = 1;
          /** Start of the preview range. */

          this.previewStart = null;
          /** End of the preview range. */

          this.previewEnd = null;
          /** Emits when a new value is selected. */

          this.selectedValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when the preview has changed as a result of a user action. */

          this.previewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /**
           * Event handler for when the user enters an element
           * inside the calendar body (e.g. by hovering in or focus).
           */

          this._enterHandler = function (event) {
            if (_this3._skipNextFocus && event.type === 'focus') {
              _this3._skipNextFocus = false;
              return;
            } // We only need to hit the zone when we're selecting a range.


            if (event.target && _this3.isRange) {
              var cell = _this3._getCellFromElement(event.target);

              if (cell) {
                _this3._ngZone.run(function () {
                  return _this3.previewChange.emit({
                    value: cell.enabled ? cell : null,
                    event: event
                  });
                });
              }
            }
          };
          /**
           * Event handler for when the user's pointer leaves an element
           * inside the calendar body (e.g. by hovering out or blurring).
           */


          this._leaveHandler = function (event) {
            // We only need to hit the zone when we're selecting a range.
            if (_this3.previewEnd !== null && _this3.isRange) {
              // Only reset the preview end value when leaving cells. This looks better, because
              // we have a gap between the cells and the rows and we don't want to remove the
              // range just for it to show up again when the user moves a few pixels to the side.
              if (event.target && isTableCell(event.target)) {
                _this3._ngZone.run(function () {
                  return _this3.previewChange.emit({
                    value: null,
                    event: event
                  });
                });
              }
            }
          };

          _ngZone.runOutsideAngular(function () {
            var element = _elementRef.nativeElement;
            element.addEventListener('mouseenter', _this3._enterHandler, true);
            element.addEventListener('focus', _this3._enterHandler, true);
            element.addEventListener('mouseleave', _this3._leaveHandler, true);
            element.addEventListener('blur', _this3._leaveHandler, true);
          });
        }
        /** Called when a cell is clicked. */


        _createClass(MatCalendarBody, [{
          key: "_cellClicked",
          value: function _cellClicked(cell, event) {
            if (cell.enabled) {
              this.selectedValueChange.emit({
                value: cell.value,
                event: event
              });
            }
          }
          /** Returns whether a cell should be marked as selected. */

        }, {
          key: "_isSelected",
          value: function _isSelected(cell) {
            return this.startValue === cell.compareValue || this.endValue === cell.compareValue;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var columnChanges = changes['numCols'];
            var rows = this.rows,
                numCols = this.numCols;

            if (changes['rows'] || columnChanges) {
              this._firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
            }

            if (changes['cellAspectRatio'] || columnChanges || !this._cellPadding) {
              this._cellPadding = "".concat(50 * this.cellAspectRatio / numCols, "%");
            }

            if (columnChanges || !this._cellWidth) {
              this._cellWidth = "".concat(100 / numCols, "%");
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var element = this._elementRef.nativeElement;
            element.removeEventListener('mouseenter', this._enterHandler, true);
            element.removeEventListener('focus', this._enterHandler, true);
            element.removeEventListener('mouseleave', this._leaveHandler, true);
            element.removeEventListener('blur', this._leaveHandler, true);
          }
          /** Returns whether a cell is active. */

        }, {
          key: "_isActiveCell",
          value: function _isActiveCell(rowIndex, colIndex) {
            var cellNumber = rowIndex * this.numCols + colIndex; // Account for the fact that the first row may not have as many cells.

            if (rowIndex) {
              cellNumber -= this._firstRowOffset;
            }

            return cellNumber == this.activeCell;
          }
          /** Focuses the active cell after the microtask queue is empty. */

        }, {
          key: "_focusActiveCell",
          value: function _focusActiveCell() {
            var _this4 = this;

            var movePreview = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            this._ngZone.runOutsideAngular(function () {
              _this4._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1)).subscribe(function () {
                var activeCell = _this4._elementRef.nativeElement.querySelector('.mat-calendar-body-active');

                if (activeCell) {
                  if (!movePreview) {
                    _this4._skipNextFocus = true;
                  }

                  activeCell.focus();
                }
              });
            });
          }
          /** Gets whether a value is the start of the main range. */

        }, {
          key: "_isRangeStart",
          value: function _isRangeStart(value) {
            return isStart(value, this.startValue, this.endValue);
          }
          /** Gets whether a value is the end of the main range. */

        }, {
          key: "_isRangeEnd",
          value: function _isRangeEnd(value) {
            return isEnd(value, this.startValue, this.endValue);
          }
          /** Gets whether a value is within the currently-selected range. */

        }, {
          key: "_isInRange",
          value: function _isInRange(value) {
            return isInRange(value, this.startValue, this.endValue, this.isRange);
          }
          /** Gets whether a value is the start of the comparison range. */

        }, {
          key: "_isComparisonStart",
          value: function _isComparisonStart(value) {
            return isStart(value, this.comparisonStart, this.comparisonEnd);
          }
          /** Whether the cell is a start bridge cell between the main and comparison ranges. */

        }, {
          key: "_isComparisonBridgeStart",
          value: function _isComparisonBridgeStart(value, rowIndex, colIndex) {
            if (!this._isComparisonStart(value) || this._isRangeStart(value) || !this._isInRange(value)) {
              return false;
            }

            var previousCell = this.rows[rowIndex][colIndex - 1];

            if (!previousCell) {
              var previousRow = this.rows[rowIndex - 1];
              previousCell = previousRow && previousRow[previousRow.length - 1];
            }

            return previousCell && !this._isRangeEnd(previousCell.compareValue);
          }
          /** Whether the cell is an end bridge cell between the main and comparison ranges. */

        }, {
          key: "_isComparisonBridgeEnd",
          value: function _isComparisonBridgeEnd(value, rowIndex, colIndex) {
            if (!this._isComparisonEnd(value) || this._isRangeEnd(value) || !this._isInRange(value)) {
              return false;
            }

            var nextCell = this.rows[rowIndex][colIndex + 1];

            if (!nextCell) {
              var nextRow = this.rows[rowIndex + 1];
              nextCell = nextRow && nextRow[0];
            }

            return nextCell && !this._isRangeStart(nextCell.compareValue);
          }
          /** Gets whether a value is the end of the comparison range. */

        }, {
          key: "_isComparisonEnd",
          value: function _isComparisonEnd(value) {
            return isEnd(value, this.comparisonStart, this.comparisonEnd);
          }
          /** Gets whether a value is within the current comparison range. */

        }, {
          key: "_isInComparisonRange",
          value: function _isInComparisonRange(value) {
            return isInRange(value, this.comparisonStart, this.comparisonEnd, this.isRange);
          }
          /** Gets whether a value is the start of the preview range. */

        }, {
          key: "_isPreviewStart",
          value: function _isPreviewStart(value) {
            return isStart(value, this.previewStart, this.previewEnd);
          }
          /** Gets whether a value is the end of the preview range. */

        }, {
          key: "_isPreviewEnd",
          value: function _isPreviewEnd(value) {
            return isEnd(value, this.previewStart, this.previewEnd);
          }
          /** Gets whether a value is inside the preview range. */

        }, {
          key: "_isInPreview",
          value: function _isInPreview(value) {
            return isInRange(value, this.previewStart, this.previewEnd, this.isRange);
          }
          /** Finds the MatCalendarCell that corresponds to a DOM node. */

        }, {
          key: "_getCellFromElement",
          value: function _getCellFromElement(element) {
            var cell;

            if (isTableCell(element)) {
              cell = element;
            } else if (isTableCell(element.parentNode)) {
              cell = element.parentNode;
            }

            if (cell) {
              var row = cell.getAttribute('data-mat-row');
              var col = cell.getAttribute('data-mat-col');

              if (row && col) {
                return this.rows[parseInt(row)][parseInt(col)];
              }
            }

            return null;
          }
        }]);

        return MatCalendarBody;
      }();

      MatCalendarBody.ɵfac = function MatCalendarBody_Factory(t) {
        return new (t || MatCalendarBody)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]));
      };

      MatCalendarBody.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatCalendarBody,
        selectors: [["", "mat-calendar-body", ""]],
        hostAttrs: ["role", "grid", "aria-readonly", "true", 1, "mat-calendar-body"],
        inputs: {
          numCols: "numCols",
          activeCell: "activeCell",
          isRange: "isRange",
          cellAspectRatio: "cellAspectRatio",
          previewStart: "previewStart",
          previewEnd: "previewEnd",
          label: "label",
          rows: "rows",
          todayValue: "todayValue",
          startValue: "startValue",
          endValue: "endValue",
          labelMinRequiredCells: "labelMinRequiredCells",
          comparisonStart: "comparisonStart",
          comparisonEnd: "comparisonEnd"
        },
        outputs: {
          selectedValueChange: "selectedValueChange",
          previewChange: "previewChange"
        },
        exportAs: ["matCalendarBody"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        attrs: _c0,
        decls: 2,
        vars: 2,
        consts: [["aria-hidden", "true", 4, "ngIf"], ["role", "row", 4, "ngFor", "ngForOf"], ["aria-hidden", "true"], [1, "mat-calendar-body-label"], ["role", "row"], ["aria-hidden", "true", "class", "mat-calendar-body-label", 3, "paddingTop", "paddingBottom", 4, "ngIf"], ["role", "gridcell", "class", "mat-calendar-body-cell", 3, "ngClass", "tabindex", "mat-calendar-body-disabled", "mat-calendar-body-active", "mat-calendar-body-range-start", "mat-calendar-body-range-end", "mat-calendar-body-in-range", "mat-calendar-body-comparison-bridge-start", "mat-calendar-body-comparison-bridge-end", "mat-calendar-body-comparison-start", "mat-calendar-body-comparison-end", "mat-calendar-body-in-comparison-range", "mat-calendar-body-preview-start", "mat-calendar-body-preview-end", "mat-calendar-body-in-preview", "width", "paddingTop", "paddingBottom", "click", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "mat-calendar-body-label"], ["role", "gridcell", 1, "mat-calendar-body-cell", 3, "ngClass", "tabindex", "click"], [1, "mat-calendar-body-cell-content", "mat-focus-indicator"], [1, "mat-calendar-body-cell-preview"]],
        template: function MatCalendarBody_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MatCalendarBody_tr_0_Template, 3, 6, "tr", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MatCalendarBody_tr_1_Template, 3, 2, "tr", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx._firstRowOffset < ctx.labelMinRequiredCells);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.rows);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.7142857143%;padding-right:4.7142857143%}.mat-calendar-body-cell{position:relative;height:0;line-height:0;text-align:center;outline:none;cursor:pointer}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:\"\";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-high-contrast-active .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){outline:dotted 2px}[dir=rtl] .mat-calendar-body-label{text-align:right}@media(hover: none){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:transparent}}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatCalendarBody.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }];
      };

      MatCalendarBody.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        rows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        todayValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        startValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        endValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        labelMinRequiredCells: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        numCols: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        activeCell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        isRange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        cellAspectRatio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        comparisonStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        comparisonEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        previewStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        previewEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedValueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        previewChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatCalendarBody, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: '[mat-calendar-body]',
            template: "<!--\n  If there's not enough space in the first row, create a separate label row. We mark this row as\n  aria-hidden because we don't want it to be read out as one of the weeks in the month.\n-->\n<tr *ngIf=\"_firstRowOffset < labelMinRequiredCells\" aria-hidden=\"true\">\n  <td class=\"mat-calendar-body-label\"\n      [attr.colspan]=\"numCols\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n    {{label}}\n  </td>\n</tr>\n\n<!-- Create the first row separately so we can include a special spacer cell. -->\n<tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\">\n  <!--\n    We mark this cell as aria-hidden so it doesn't get read out as one of the days in the week.\n    The aspect ratio of the table cells is maintained by setting the top and bottom padding as a\n    percentage of the width (a variant of the trick described here:\n    https://www.w3schools.com/howto/howto_css_aspect_ratio.asp).\n  -->\n  <td *ngIf=\"rowIndex === 0 && _firstRowOffset\"\n      aria-hidden=\"true\"\n      class=\"mat-calendar-body-label\"\n      [attr.colspan]=\"_firstRowOffset\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n    {{_firstRowOffset >= labelMinRequiredCells ? label : ''}}\n  </td>\n  <td *ngFor=\"let item of row; let colIndex = index\"\n      role=\"gridcell\"\n      class=\"mat-calendar-body-cell\"\n      [ngClass]=\"item.cssClasses\"\n      [tabindex]=\"_isActiveCell(rowIndex, colIndex) ? 0 : -1\"\n      [attr.data-mat-row]=\"rowIndex\"\n      [attr.data-mat-col]=\"colIndex\"\n      [class.mat-calendar-body-disabled]=\"!item.enabled\"\n      [class.mat-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\"\n      [class.mat-calendar-body-range-start]=\"_isRangeStart(item.compareValue)\"\n      [class.mat-calendar-body-range-end]=\"_isRangeEnd(item.compareValue)\"\n      [class.mat-calendar-body-in-range]=\"_isInRange(item.compareValue)\"\n      [class.mat-calendar-body-comparison-bridge-start]=\"_isComparisonBridgeStart(item.compareValue, rowIndex, colIndex)\"\n      [class.mat-calendar-body-comparison-bridge-end]=\"_isComparisonBridgeEnd(item.compareValue, rowIndex, colIndex)\"\n      [class.mat-calendar-body-comparison-start]=\"_isComparisonStart(item.compareValue)\"\n      [class.mat-calendar-body-comparison-end]=\"_isComparisonEnd(item.compareValue)\"\n      [class.mat-calendar-body-in-comparison-range]=\"_isInComparisonRange(item.compareValue)\"\n      [class.mat-calendar-body-preview-start]=\"_isPreviewStart(item.compareValue)\"\n      [class.mat-calendar-body-preview-end]=\"_isPreviewEnd(item.compareValue)\"\n      [class.mat-calendar-body-in-preview]=\"_isInPreview(item.compareValue)\"\n      [attr.aria-label]=\"item.ariaLabel\"\n      [attr.aria-disabled]=\"!item.enabled || null\"\n      [attr.aria-selected]=\"_isSelected(item)\"\n      (click)=\"_cellClicked(item, $event)\"\n      [style.width]=\"_cellWidth\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n      <div class=\"mat-calendar-body-cell-content mat-focus-indicator\"\n        [class.mat-calendar-body-selected]=\"_isSelected(item)\"\n        [class.mat-calendar-body-today]=\"todayValue === item.compareValue\">\n        {{item.displayValue}}\n      </div>\n      <div class=\"mat-calendar-body-cell-preview\"></div>\n  </td>\n</tr>\n",
            host: {
              'class': 'mat-calendar-body',
              'role': 'grid',
              'aria-readonly': 'true'
            },
            exportAs: 'matCalendarBody',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.7142857143%;padding-right:4.7142857143%}.mat-calendar-body-cell{position:relative;height:0;line-height:0;text-align:center;outline:none;cursor:pointer}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:\"\";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-high-contrast-active .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){outline:dotted 2px}[dir=rtl] .mat-calendar-body-label{text-align:right}@media(hover: none){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:transparent}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
          }];
        }, {
          numCols: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          activeCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          isRange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          cellAspectRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          previewStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          previewEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selectedValueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          previewChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          todayValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          startValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          endValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          labelMinRequiredCells: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          comparisonStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          comparisonEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /** Checks whether a node is a table cell element. */


      function isTableCell(node) {
        return node.nodeName === 'TD';
      }
      /** Checks whether a value is the start of a range. */


      function isStart(value, start, end) {
        return end !== null && start !== end && value < end && value === start;
      }
      /** Checks whether a value is the end of a range. */


      function isEnd(value, start, end) {
        return start !== null && start !== end && value >= start && value === end;
      }
      /** Checks whether a value is inside of a range. */


      function isInRange(value, start, end, rangeEnabled) {
        return rangeEnabled && start !== null && end !== null && start !== end && value >= start && value <= end;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** A class representing a range of dates. */


      var DateRange = function DateRange(
      /** The start date of the range. */
      start,
      /** The end date of the range. */
      end) {
        _classCallCheck(this, DateRange);

        this.start = start;
        this.end = end;
      };
      /** A selection model containing a date selection. */


      var MatDateSelectionModel = /*#__PURE__*/function () {
        function MatDateSelectionModel(
        /** The current selection. */
        selection, _adapter) {
          _classCallCheck(this, MatDateSelectionModel);

          this.selection = selection;
          this._adapter = _adapter;
          this._selectionChanged = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          /** Emits when the selection has changed. */

          this.selectionChanged = this._selectionChanged.asObservable();
          this.selection = selection;
        }
        /**
         * Updates the current selection in the model.
         * @param value New selection that should be assigned.
         * @param source Object that triggered the selection change.
         */


        _createClass(MatDateSelectionModel, [{
          key: "updateSelection",
          value: function updateSelection(value, source) {
            this.selection = value;

            this._selectionChanged.next({
              selection: value,
              source: source
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._selectionChanged.complete();
          }
        }, {
          key: "_isValidDateInstance",
          value: function _isValidDateInstance(date) {
            return this._adapter.isDateInstance(date) && this._adapter.isValid(date);
          }
        }]);

        return MatDateSelectionModel;
      }();

      MatDateSelectionModel.ɵfac = function MatDateSelectionModel_Factory(t) {
        return new (t || MatDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]));
      };

      MatDateSelectionModel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatDateSelectionModel
      });

      MatDateSelectionModel.ctorParameters = function () {
        return [{
          type: undefined
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDateSelectionModel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
        }], function () {
          return [{
            type: undefined
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
          }];
        }, null);
      })();
      /**  A selection model that contains a single date. */


      var MatSingleDateSelectionModel = /*#__PURE__*/function (_MatDateSelectionMode) {
        _inherits(MatSingleDateSelectionModel, _MatDateSelectionMode);

        var _super3 = _createSuper(MatSingleDateSelectionModel);

        function MatSingleDateSelectionModel(adapter) {
          _classCallCheck(this, MatSingleDateSelectionModel);

          return _super3.call(this, null, adapter);
        }
        /**
         * Adds a date to the current selection. In the case of a single date selection, the added date
         * simply overwrites the previous selection
         */


        _createClass(MatSingleDateSelectionModel, [{
          key: "add",
          value: function add(date) {
            _get(_getPrototypeOf(MatSingleDateSelectionModel.prototype), "updateSelection", this).call(this, date, this);
          }
          /** Checks whether the current selection is valid. */

        }, {
          key: "isValid",
          value: function isValid() {
            return this.selection != null && this._isValidDateInstance(this.selection);
          }
          /**
           * Checks whether the current selection is complete. In the case of a single date selection, this
           * is true if the current selection is not null.
           */

        }, {
          key: "isComplete",
          value: function isComplete() {
            return this.selection != null;
          }
        }]);

        return MatSingleDateSelectionModel;
      }(MatDateSelectionModel);

      MatSingleDateSelectionModel.ɵfac = function MatSingleDateSelectionModel_Factory(t) {
        return new (t || MatSingleDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]));
      };

      MatSingleDateSelectionModel.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: MatSingleDateSelectionModel,
        factory: MatSingleDateSelectionModel.ɵfac
      });

      MatSingleDateSelectionModel.ctorParameters = function () {
        return [{
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatSingleDateSelectionModel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
        }], function () {
          return [{
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
          }];
        }, null);
      })();
      /**  A selection model that contains a date range. */


      var MatRangeDateSelectionModel = /*#__PURE__*/function (_MatDateSelectionMode2) {
        _inherits(MatRangeDateSelectionModel, _MatDateSelectionMode2);

        var _super4 = _createSuper(MatRangeDateSelectionModel);

        function MatRangeDateSelectionModel(adapter) {
          _classCallCheck(this, MatRangeDateSelectionModel);

          return _super4.call(this, new DateRange(null, null), adapter);
        }
        /**
         * Adds a date to the current selection. In the case of a date range selection, the added date
         * fills in the next `null` value in the range. If both the start and the end already have a date,
         * the selection is reset so that the given date is the new `start` and the `end` is null.
         */


        _createClass(MatRangeDateSelectionModel, [{
          key: "add",
          value: function add(date) {
            var _this$selection = this.selection,
                start = _this$selection.start,
                end = _this$selection.end;

            if (start == null) {
              start = date;
            } else if (end == null) {
              end = date;
            } else {
              start = date;
              end = null;
            }

            _get(_getPrototypeOf(MatRangeDateSelectionModel.prototype), "updateSelection", this).call(this, new DateRange(start, end), this);
          }
          /** Checks whether the current selection is valid. */

        }, {
          key: "isValid",
          value: function isValid() {
            var _this$selection2 = this.selection,
                start = _this$selection2.start,
                end = _this$selection2.end; // Empty ranges are valid.

            if (start == null && end == null) {
              return true;
            } // Complete ranges are only valid if both dates are valid and the start is before the end.


            if (start != null && end != null) {
              return this._isValidDateInstance(start) && this._isValidDateInstance(end) && this._adapter.compareDate(start, end) <= 0;
            } // Partial ranges are valid if the start/end is valid.


            return (start == null || this._isValidDateInstance(start)) && (end == null || this._isValidDateInstance(end));
          }
          /**
           * Checks whether the current selection is complete. In the case of a date range selection, this
           * is true if the current selection has a non-null `start` and `end`.
           */

        }, {
          key: "isComplete",
          value: function isComplete() {
            return this.selection.start != null && this.selection.end != null;
          }
        }]);

        return MatRangeDateSelectionModel;
      }(MatDateSelectionModel);

      MatRangeDateSelectionModel.ɵfac = function MatRangeDateSelectionModel_Factory(t) {
        return new (t || MatRangeDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]));
      };

      MatRangeDateSelectionModel.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: MatRangeDateSelectionModel,
        factory: MatRangeDateSelectionModel.ɵfac
      });

      MatRangeDateSelectionModel.ctorParameters = function () {
        return [{
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatRangeDateSelectionModel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
        }], function () {
          return [{
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
          }];
        }, null);
      })();
      /** @docs-private */


      function MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
        return parent || new MatSingleDateSelectionModel(adapter);
      }
      /** Used to provide a single selection model to a component. */


      var MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER = {
        provide: MatDateSelectionModel,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"](), MatDateSelectionModel], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]],
        useFactory: MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY
      };
      /** @docs-private */

      function MAT_RANGE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
        return parent || new MatRangeDateSelectionModel(adapter);
      }
      /** Used to provide a range selection model to a component. */


      var MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER = {
        provide: MatDateSelectionModel,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"](), MatDateSelectionModel], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]],
        useFactory: MAT_RANGE_DATE_SELECTION_MODEL_FACTORY
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token used to customize the date range selection behavior. */

      var MAT_DATE_RANGE_SELECTION_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MAT_DATE_RANGE_SELECTION_STRATEGY');
      /** Provides the default date range selection behavior. */

      var DefaultMatCalendarRangeStrategy = /*#__PURE__*/function () {
        function DefaultMatCalendarRangeStrategy(_dateAdapter) {
          _classCallCheck(this, DefaultMatCalendarRangeStrategy);

          this._dateAdapter = _dateAdapter;
        }

        _createClass(DefaultMatCalendarRangeStrategy, [{
          key: "selectionFinished",
          value: function selectionFinished(date, currentRange) {
            var start = currentRange.start,
                end = currentRange.end;

            if (start == null) {
              start = date;
            } else if (end == null && date && this._dateAdapter.compareDate(date, start) >= 0) {
              end = date;
            } else {
              start = date;
              end = null;
            }

            return new DateRange(start, end);
          }
        }, {
          key: "createPreview",
          value: function createPreview(activeDate, currentRange) {
            var start = null;
            var end = null;

            if (currentRange.start && !currentRange.end && activeDate) {
              start = currentRange.start;
              end = activeDate;
            }

            return new DateRange(start, end);
          }
        }]);

        return DefaultMatCalendarRangeStrategy;
      }();

      DefaultMatCalendarRangeStrategy.ɵfac = function DefaultMatCalendarRangeStrategy_Factory(t) {
        return new (t || DefaultMatCalendarRangeStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]));
      };

      DefaultMatCalendarRangeStrategy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: DefaultMatCalendarRangeStrategy,
        factory: DefaultMatCalendarRangeStrategy.ɵfac
      });

      DefaultMatCalendarRangeStrategy.ctorParameters = function () {
        return [{
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DefaultMatCalendarRangeStrategy, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
        }], function () {
          return [{
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var DAYS_PER_WEEK = 7;
      /**
       * An internal component used to display a single month in the datepicker.
       * @docs-private
       */

      var MatMonthView = /*#__PURE__*/function () {
        function MatMonthView(_changeDetectorRef, _dateFormats, _dateAdapter, _dir, _rangeStrategy) {
          _classCallCheck(this, MatMonthView);

          this._changeDetectorRef = _changeDetectorRef;
          this._dateFormats = _dateFormats;
          this._dateAdapter = _dateAdapter;
          this._dir = _dir;
          this._rangeStrategy = _rangeStrategy;
          this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          /** Emits when a new date is selected. */

          this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when any date is selected. */

          this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when any date is activated. */

          this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();

          if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
          }

          if (!this._dateFormats) {
            throw createMissingDateImplError('MAT_DATE_FORMATS');
          }

          this._activeDate = this._dateAdapter.today();
        }
        /**
         * The date to display in this month view (everything other than the month and year is ignored).
         */


        _createClass(MatMonthView, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this5 = this;

            this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null)).subscribe(function () {
              return _this5._init();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._rerenderSubscription.unsubscribe();
          }
          /** Handles when a new date is selected. */

        }, {
          key: "_dateSelected",
          value: function _dateSelected(event) {
            var date = event.value;

            var selectedYear = this._dateAdapter.getYear(this.activeDate);

            var selectedMonth = this._dateAdapter.getMonth(this.activeDate);

            var selectedDate = this._dateAdapter.createDate(selectedYear, selectedMonth, date);

            var rangeStartDate;
            var rangeEndDate;

            if (this._selected instanceof DateRange) {
              rangeStartDate = this._getDateInCurrentMonth(this._selected.start);
              rangeEndDate = this._getDateInCurrentMonth(this._selected.end);
            } else {
              rangeStartDate = rangeEndDate = this._getDateInCurrentMonth(this._selected);
            }

            if (rangeStartDate !== date || rangeEndDate !== date) {
              this.selectedChange.emit(selectedDate);
            }

            this._userSelection.emit({
              value: selectedDate,
              event: event.event
            });
          }
          /** Handles keydown events on the calendar body when calendar is in month view. */

        }, {
          key: "_handleCalendarBodyKeydown",
          value: function _handleCalendarBodyKeydown(event) {
            // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
            // disabled ones from being selected. This may not be ideal, we should look into whether
            // navigation should skip over disabled dates, and if so, how to implement that efficiently.
            var oldActiveDate = this._activeDate;

            var isRtl = this._isRtl();

            switch (event.keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["LEFT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["RIGHT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["END"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, this._dateAdapter.getNumDaysInMonth(this._activeDate) - this._dateAdapter.getDate(this._activeDate));
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_UP"]:
                this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, -1) : this._dateAdapter.addCalendarMonths(this._activeDate, -1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_DOWN"]:
                this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, 1) : this._dateAdapter.addCalendarMonths(this._activeDate, 1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"]:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]:
                if (!this.dateFilter || this.dateFilter(this._activeDate)) {
                  this._dateSelected({
                    value: this._dateAdapter.getDate(this._activeDate),
                    event: event
                  }); // Prevent unexpected default actions such as form submission.


                  event.preventDefault();
                }

                return;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"]:
                // Abort the current range selection if the user presses escape mid-selection.
                if (this._previewEnd != null) {
                  this._previewStart = this._previewEnd = null;
                  this.selectedChange.emit(null);

                  this._userSelection.emit({
                    value: null,
                    event: event
                  });

                  event.preventDefault();
                  event.stopPropagation(); // Prevents the overlay from closing.
                }

                return;

              default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
            }

            if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
              this.activeDateChange.emit(this.activeDate);
            }

            this._focusActiveCell(); // Prevent unexpected default actions such as form submission.


            event.preventDefault();
          }
          /** Initializes this month view. */

        }, {
          key: "_init",
          value: function _init() {
            this._setRanges(this.selected);

            this._todayDate = this._getCellCompareValue(this._dateAdapter.today());
            this._monthLabel = this._dateAdapter.getMonthNames('short')[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase();

            var firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);

            this._firstWeekOffset = (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) - this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;

            this._initWeekdays();

            this._createWeekCells();

            this._changeDetectorRef.markForCheck();
          }
          /** Focuses the active cell after the microtask queue is empty. */

        }, {
          key: "_focusActiveCell",
          value: function _focusActiveCell(movePreview) {
            this._matCalendarBody._focusActiveCell(movePreview);
          }
          /** Called when the user has activated a new cell and the preview needs to be updated. */

        }, {
          key: "_previewChanged",
          value: function _previewChanged(_ref) {
            var event = _ref.event,
                cell = _ref.value;

            if (this._rangeStrategy) {
              // We can assume that this will be a range, because preview
              // events aren't fired for single date selections.
              var _value = cell ? cell.rawValue : null;

              var previewRange = this._rangeStrategy.createPreview(_value, this.selected, event);

              this._previewStart = this._getCellCompareValue(previewRange.start);
              this._previewEnd = this._getCellCompareValue(previewRange.end); // Note that here we need to use `detectChanges`, rather than `markForCheck`, because
              // the way `_focusActiveCell` is set up at the moment makes it fire at the wrong time
              // when navigating one month back using the keyboard which will cause this handler
              // to throw a "changed after checked" error when updating the preview state.

              this._changeDetectorRef.detectChanges();
            }
          }
          /** Initializes the weekdays. */

        }, {
          key: "_initWeekdays",
          value: function _initWeekdays() {
            var firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();

            var narrowWeekdays = this._dateAdapter.getDayOfWeekNames('narrow');

            var longWeekdays = this._dateAdapter.getDayOfWeekNames('long'); // Rotate the labels for days of the week based on the configured first day of the week.


            var weekdays = longWeekdays.map(function (_long, i) {
              return {
                "long": _long,
                narrow: narrowWeekdays[i]
              };
            });
            this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
          }
          /** Creates MatCalendarCells for the dates in this month. */

        }, {
          key: "_createWeekCells",
          value: function _createWeekCells() {
            var daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);

            var dateNames = this._dateAdapter.getDateNames();

            this._weeks = [[]];

            for (var i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
              if (cell == DAYS_PER_WEEK) {
                this._weeks.push([]);

                cell = 0;
              }

              var date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);

              var enabled = this._shouldEnableDate(date);

              var ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);

              var cellClasses = this.dateClass ? this.dateClass(date) : undefined;

              this._weeks[this._weeks.length - 1].push(new MatCalendarCell(i + 1, dateNames[i], ariaLabel, enabled, cellClasses, this._getCellCompareValue(date), date));
            }
          }
          /** Date filter for the month */

        }, {
          key: "_shouldEnableDate",
          value: function _shouldEnableDate(date) {
            return !!date && (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) && (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0) && (!this.dateFilter || this.dateFilter(date));
          }
          /**
           * Gets the date in this month that the given Date falls on.
           * Returns null if the given Date is in another month.
           */

        }, {
          key: "_getDateInCurrentMonth",
          value: function _getDateInCurrentMonth(date) {
            return date && this._hasSameMonthAndYear(date, this.activeDate) ? this._dateAdapter.getDate(date) : null;
          }
          /** Checks whether the 2 dates are non-null and fall within the same month of the same year. */

        }, {
          key: "_hasSameMonthAndYear",
          value: function _hasSameMonthAndYear(d1, d2) {
            return !!(d1 && d2 && this._dateAdapter.getMonth(d1) == this._dateAdapter.getMonth(d2) && this._dateAdapter.getYear(d1) == this._dateAdapter.getYear(d2));
          }
          /** Gets the value that will be used to one cell to another. */

        }, {
          key: "_getCellCompareValue",
          value: function _getCellCompareValue(date) {
            if (date) {
              // We use the time since the Unix epoch to compare dates in this view, rather than the
              // cell values, because we need to support ranges that span across multiple months/years.
              var year = this._dateAdapter.getYear(date);

              var month = this._dateAdapter.getMonth(date);

              var day = this._dateAdapter.getDate(date);

              return new Date(year, month, day).getTime();
            }

            return null;
          }
          /**
           * @param obj The object to check.
           * @returns The given object if it is both a date instance and valid, otherwise null.
           */

        }, {
          key: "_getValidDateOrNull",
          value: function _getValidDateOrNull(obj) {
            return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
          }
          /** Determines whether the user has the RTL layout direction. */

        }, {
          key: "_isRtl",
          value: function _isRtl() {
            return this._dir && this._dir.value === 'rtl';
          }
          /** Sets the current range based on a model value. */

        }, {
          key: "_setRanges",
          value: function _setRanges(selectedValue) {
            if (selectedValue instanceof DateRange) {
              this._rangeStart = this._getCellCompareValue(selectedValue.start);
              this._rangeEnd = this._getCellCompareValue(selectedValue.end);
              this._isRange = true;
            } else {
              this._rangeStart = this._rangeEnd = this._getCellCompareValue(selectedValue);
              this._isRange = false;
            }

            this._comparisonRangeStart = this._getCellCompareValue(this.comparisonStart);
            this._comparisonRangeEnd = this._getCellCompareValue(this.comparisonEnd);
          }
        }, {
          key: "activeDate",
          get: function get() {
            return this._activeDate;
          },
          set: function set(value) {
            var oldActiveDate = this._activeDate;

            var validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();

            this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

            if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
              this._init();
            }
          }
          /** The currently selected date. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(value) {
            if (value instanceof DateRange) {
              this._selected = value;
            } else {
              this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            }

            this._setRanges(this._selected);
          }
          /** The minimum selectable date. */

        }, {
          key: "minDate",
          get: function get() {
            return this._minDate;
          },
          set: function set(value) {
            this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
          /** The maximum selectable date. */

        }, {
          key: "maxDate",
          get: function get() {
            return this._maxDate;
          },
          set: function set(value) {
            this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
        }]);

        return MatMonthView;
      }();

      MatMonthView.ɵfac = function MatMonthView_Factory(t) {
        return new (t || MatMonthView)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_DATE_RANGE_SELECTION_STRATEGY, 8));
      };

      MatMonthView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatMonthView,
        selectors: [["mat-month-view"]],
        viewQuery: function MatMonthView_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatCalendarBody, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
          }
        },
        inputs: {
          activeDate: "activeDate",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          dateFilter: "dateFilter",
          dateClass: "dateClass",
          comparisonStart: "comparisonStart",
          comparisonEnd: "comparisonEnd"
        },
        outputs: {
          selectedChange: "selectedChange",
          _userSelection: "_userSelection",
          activeDateChange: "activeDateChange"
        },
        exportAs: ["matMonthView"],
        decls: 7,
        vars: 13,
        consts: [["role", "presentation", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["scope", "col", 4, "ngFor", "ngForOf"], ["colspan", "7", "aria-hidden", "true", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "label", "rows", "todayValue", "startValue", "endValue", "comparisonStart", "comparisonEnd", "previewStart", "previewEnd", "isRange", "labelMinRequiredCells", "activeCell", "selectedValueChange", "previewChange", "keydown"], ["scope", "col"]],
        template: function MatMonthView_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MatMonthView_th_3_Template, 2, 2, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "tbody", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedValueChange", function MatMonthView_Template_tbody_selectedValueChange_6_listener($event) {
              return ctx._dateSelected($event);
            })("previewChange", function MatMonthView_Template_tbody_previewChange_6_listener($event) {
              return ctx._previewChanged($event);
            })("keydown", function MatMonthView_Template_tbody_keydown_6_listener($event) {
              return ctx._handleCalendarBodyKeydown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx._weekdays);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", ctx._monthLabel)("rows", ctx._weeks)("todayValue", ctx._todayDate)("startValue", ctx._rangeStart)("endValue", ctx._rangeEnd)("comparisonStart", ctx._comparisonRangeStart)("comparisonEnd", ctx._comparisonRangeEnd)("previewStart", ctx._previewStart)("previewEnd", ctx._previewEnd)("isRange", ctx._isRange)("labelMinRequiredCells", 3)("activeCell", ctx._dateAdapter.getDate(ctx.activeDate) - 1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], MatCalendarBody],
        encapsulation: 2,
        changeDetection: 0
      });

      MatMonthView.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      };

      MatMonthView.propDecorators = {
        activeDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        minDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        maxDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        comparisonStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        comparisonEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _userSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        activeDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _matCalendarBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatCalendarBody]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatMonthView, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-month-view',
            template: "<table class=\"mat-calendar-table\" role=\"presentation\">\n  <thead class=\"mat-calendar-table-header\">\n    <tr>\n      <th scope=\"col\" *ngFor=\"let day of _weekdays\" [attr.aria-label]=\"day.long\">{{day.narrow}}</th>\n    </tr>\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"7\" aria-hidden=\"true\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]=\"_monthLabel\"\n         [rows]=\"_weeks\"\n         [todayValue]=\"_todayDate!\"\n         [startValue]=\"_rangeStart!\"\n         [endValue]=\"_rangeEnd!\"\n         [comparisonStart]=\"_comparisonRangeStart\"\n         [comparisonEnd]=\"_comparisonRangeEnd\"\n         [previewStart]=\"_previewStart\"\n         [previewEnd]=\"_previewEnd\"\n         [isRange]=\"_isRange\"\n         [labelMinRequiredCells]=\"3\"\n         [activeCell]=\"_dateAdapter.getDate(activeDate) - 1\"\n         (selectedValueChange)=\"_dateSelected($event)\"\n         (previewChange)=\"_previewChanged($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
            exportAs: 'matMonthView',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }];
        }, {
          selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          _userSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          comparisonStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          comparisonEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          _matCalendarBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatCalendarBody]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var yearsPerPage = 24;
      var yearsPerRow = 4;
      /**
       * An internal component used to display a year selector in the datepicker.
       * @docs-private
       */

      var MatMultiYearView = /*#__PURE__*/function () {
        function MatMultiYearView(_changeDetectorRef, _dateAdapter, _dir) {
          _classCallCheck(this, MatMultiYearView);

          this._changeDetectorRef = _changeDetectorRef;
          this._dateAdapter = _dateAdapter;
          this._dir = _dir;
          this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          /** Emits when a new year is selected. */

          this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits the selected year. This doesn't imply a change on the selected date */

          this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when any date is activated. */

          this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();

          if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
          }

          this._activeDate = this._dateAdapter.today();
        }
        /** The date to display in this multi-year view (everything other than the year is ignored). */


        _createClass(MatMultiYearView, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this6 = this;

            this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null)).subscribe(function () {
              return _this6._init();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._rerenderSubscription.unsubscribe();
          }
          /** Initializes this multi-year view. */

        }, {
          key: "_init",
          value: function _init() {
            var _this7 = this;

            this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today()); // We want a range years such that we maximize the number of
            // enabled dates visible at once. This prevents issues where the minimum year
            // is the last item of a page OR the maximum year is the first item of a page.
            // The offset from the active year to the "slot" for the starting year is the
            // *actual* first rendered year in the multi-year view.

            var activeYear = this._dateAdapter.getYear(this._activeDate);

            var minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
            this._years = [];

            for (var i = 0, row = []; i < yearsPerPage; i++) {
              row.push(minYearOfPage + i);

              if (row.length == yearsPerRow) {
                this._years.push(row.map(function (year) {
                  return _this7._createCellForYear(year);
                }));

                row = [];
              }
            }

            this._changeDetectorRef.markForCheck();
          }
          /** Handles when a new year is selected. */

        }, {
          key: "_yearSelected",
          value: function _yearSelected(event) {
            var year = event.value;
            this.yearSelected.emit(this._dateAdapter.createDate(year, 0, 1));

            var month = this._dateAdapter.getMonth(this.activeDate);

            var daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(year, month, 1));

            this.selectedChange.emit(this._dateAdapter.createDate(year, month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
          }
          /** Handles keydown events on the calendar body when calendar is in multi-year view. */

        }, {
          key: "_handleCalendarBodyKeydown",
          value: function _handleCalendarBodyKeydown(event) {
            var oldActiveDate = this._activeDate;

            var isRtl = this._isRtl();

            switch (event.keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["LEFT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["RIGHT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate));
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["END"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_UP"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_DOWN"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"]:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]:
                this._yearSelected({
                  value: this._dateAdapter.getYear(this._activeDate),
                  event: event
                });

                break;

              default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
            }

            if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
              this.activeDateChange.emit(this.activeDate);
            }

            this._focusActiveCell(); // Prevent unexpected default actions such as form submission.


            event.preventDefault();
          }
        }, {
          key: "_getActiveCell",
          value: function _getActiveCell() {
            return getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
          }
          /** Focuses the active cell after the microtask queue is empty. */

        }, {
          key: "_focusActiveCell",
          value: function _focusActiveCell() {
            this._matCalendarBody._focusActiveCell();
          }
          /** Creates an MatCalendarCell for the given year. */

        }, {
          key: "_createCellForYear",
          value: function _createCellForYear(year) {
            var yearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(year, 0, 1));

            return new MatCalendarCell(year, yearName, yearName, this._shouldEnableYear(year));
          }
          /** Whether the given year is enabled. */

        }, {
          key: "_shouldEnableYear",
          value: function _shouldEnableYear(year) {
            // disable if the year is greater than maxDate lower than minDate
            if (year === undefined || year === null || this.maxDate && year > this._dateAdapter.getYear(this.maxDate) || this.minDate && year < this._dateAdapter.getYear(this.minDate)) {
              return false;
            } // enable if it reaches here and there's no filter defined


            if (!this.dateFilter) {
              return true;
            }

            var firstOfYear = this._dateAdapter.createDate(year, 0, 1); // If any date in the year is enabled count the year as enabled.


            for (var date = firstOfYear; this._dateAdapter.getYear(date) == year; date = this._dateAdapter.addCalendarDays(date, 1)) {
              if (this.dateFilter(date)) {
                return true;
              }
            }

            return false;
          }
          /**
           * @param obj The object to check.
           * @returns The given object if it is both a date instance and valid, otherwise null.
           */

        }, {
          key: "_getValidDateOrNull",
          value: function _getValidDateOrNull(obj) {
            return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
          }
          /** Determines whether the user has the RTL layout direction. */

        }, {
          key: "_isRtl",
          value: function _isRtl() {
            return this._dir && this._dir.value === 'rtl';
          }
          /** Sets the currently-highlighted year based on a model value. */

        }, {
          key: "_setSelectedYear",
          value: function _setSelectedYear(value) {
            this._selectedYear = null;

            if (value instanceof DateRange) {
              var displayValue = value.start || value.end;

              if (displayValue) {
                this._selectedYear = this._dateAdapter.getYear(displayValue);
              }
            } else if (value) {
              this._selectedYear = this._dateAdapter.getYear(value);
            }
          }
        }, {
          key: "activeDate",
          get: function get() {
            return this._activeDate;
          },
          set: function set(value) {
            var oldActiveDate = this._activeDate;

            var validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();

            this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

            if (!isSameMultiYearView(this._dateAdapter, oldActiveDate, this._activeDate, this.minDate, this.maxDate)) {
              this._init();
            }
          }
          /** The currently selected date. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(value) {
            if (value instanceof DateRange) {
              this._selected = value;
            } else {
              this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            }

            this._setSelectedYear(value);
          }
          /** The minimum selectable date. */

        }, {
          key: "minDate",
          get: function get() {
            return this._minDate;
          },
          set: function set(value) {
            this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
          /** The maximum selectable date. */

        }, {
          key: "maxDate",
          get: function get() {
            return this._maxDate;
          },
          set: function set(value) {
            this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
        }]);

        return MatMultiYearView;
      }();

      MatMultiYearView.ɵfac = function MatMultiYearView_Factory(t) {
        return new (t || MatMultiYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], 8));
      };

      MatMultiYearView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatMultiYearView,
        selectors: [["mat-multi-year-view"]],
        viewQuery: function MatMultiYearView_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatCalendarBody, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
          }
        },
        inputs: {
          activeDate: "activeDate",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          dateFilter: "dateFilter"
        },
        outputs: {
          selectedChange: "selectedChange",
          yearSelected: "yearSelected",
          activeDateChange: "activeDateChange"
        },
        exportAs: ["matMultiYearView"],
        decls: 5,
        vars: 7,
        consts: [["role", "presentation", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "rows", "todayValue", "startValue", "endValue", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "keydown"]],
        template: function MatMultiYearView_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tbody", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedValueChange", function MatMultiYearView_Template_tbody_selectedValueChange_4_listener($event) {
              return ctx._yearSelected($event);
            })("keydown", function MatMultiYearView_Template_tbody_keydown_4_listener($event) {
              return ctx._handleCalendarBodyKeydown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", ctx._years)("todayValue", ctx._todayYear)("startValue", ctx._selectedYear)("endValue", ctx._selectedYear)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._getActiveCell());
          }
        },
        directives: [MatCalendarBody],
        encapsulation: 2,
        changeDetection: 0
      });

      MatMultiYearView.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      };

      MatMultiYearView.propDecorators = {
        activeDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        minDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        maxDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        yearSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        activeDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _matCalendarBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatCalendarBody]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatMultiYearView, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-multi-year-view',
            template: "<table class=\"mat-calendar-table\" role=\"presentation\">\n  <thead class=\"mat-calendar-table-header\">\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [rows]=\"_years\"\n         [todayValue]=\"_todayYear\"\n         [startValue]=\"_selectedYear!\"\n         [endValue]=\"_selectedYear!\"\n         [numCols]=\"4\"\n         [cellAspectRatio]=\"4 / 7\"\n         [activeCell]=\"_getActiveCell()\"\n         (selectedValueChange)=\"_yearSelected($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
            exportAs: 'matMultiYearView',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }];
        }, {
          selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          _matCalendarBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatCalendarBody]
          }]
        });
      })();

      function isSameMultiYearView(dateAdapter, date1, date2, minDate, maxDate) {
        var year1 = dateAdapter.getYear(date1);
        var year2 = dateAdapter.getYear(date2);
        var startingYear = getStartingYear(dateAdapter, minDate, maxDate);
        return Math.floor((year1 - startingYear) / yearsPerPage) === Math.floor((year2 - startingYear) / yearsPerPage);
      }
      /**
       * When the multi-year view is first opened, the active year will be in view.
       * So we compute how many years are between the active year and the *slot* where our
       * "startingYear" will render when paged into view.
       */


      function getActiveOffset(dateAdapter, activeDate, minDate, maxDate) {
        var activeYear = dateAdapter.getYear(activeDate);
        return euclideanModulo(activeYear - getStartingYear(dateAdapter, minDate, maxDate), yearsPerPage);
      }
      /**
       * We pick a "starting" year such that either the maximum year would be at the end
       * or the minimum year would be at the beginning of a page.
       */


      function getStartingYear(dateAdapter, minDate, maxDate) {
        var startingYear = 0;

        if (maxDate) {
          var maxYear = dateAdapter.getYear(maxDate);
          startingYear = maxYear - yearsPerPage + 1;
        } else if (minDate) {
          startingYear = dateAdapter.getYear(minDate);
        }

        return startingYear;
      }
      /** Gets remainder that is non-negative, even if first number is negative */


      function euclideanModulo(a, b) {
        return (a % b + b) % b;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * An internal component used to display a single year in the datepicker.
       * @docs-private
       */


      var MatYearView = /*#__PURE__*/function () {
        function MatYearView(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
          _classCallCheck(this, MatYearView);

          this._changeDetectorRef = _changeDetectorRef;
          this._dateFormats = _dateFormats;
          this._dateAdapter = _dateAdapter;
          this._dir = _dir;
          this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          /** Emits when a new month is selected. */

          this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits the selected month. This doesn't imply a change on the selected date */

          this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when any date is activated. */

          this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();

          if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
          }

          if (!this._dateFormats) {
            throw createMissingDateImplError('MAT_DATE_FORMATS');
          }

          this._activeDate = this._dateAdapter.today();
        }
        /** The date to display in this year view (everything other than the year is ignored). */


        _createClass(MatYearView, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this8 = this;

            this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null)).subscribe(function () {
              return _this8._init();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._rerenderSubscription.unsubscribe();
          }
          /** Handles when a new month is selected. */

        }, {
          key: "_monthSelected",
          value: function _monthSelected(event) {
            var month = event.value;

            var normalizedDate = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);

            this.monthSelected.emit(normalizedDate);

            var daysInMonth = this._dateAdapter.getNumDaysInMonth(normalizedDate);

            this.selectedChange.emit(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
          }
          /** Handles keydown events on the calendar body when calendar is in year view. */

        }, {
          key: "_handleCalendarBodyKeydown",
          value: function _handleCalendarBodyKeydown(event) {
            // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
            // disabled ones from being selected. This may not be ideal, we should look into whether
            // navigation should skip over disabled dates, and if so, how to implement that efficiently.
            var oldActiveDate = this._activeDate;

            var isRtl = this._isRtl();

            switch (event.keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["LEFT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["RIGHT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["END"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_UP"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_DOWN"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"]:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]:
                this._monthSelected({
                  value: this._dateAdapter.getMonth(this._activeDate),
                  event: event
                });

                break;

              default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
            }

            if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
              this.activeDateChange.emit(this.activeDate);
            }

            this._focusActiveCell(); // Prevent unexpected default actions such as form submission.


            event.preventDefault();
          }
          /** Initializes this year view. */

        }, {
          key: "_init",
          value: function _init() {
            var _this9 = this;

            this._setSelectedMonth(this.selected);

            this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
            this._yearLabel = this._dateAdapter.getYearName(this.activeDate);

            var monthNames = this._dateAdapter.getMonthNames('short'); // First row of months only contains 5 elements so we can fit the year label on the same row.


            this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map(function (row) {
              return row.map(function (month) {
                return _this9._createCellForMonth(month, monthNames[month]);
              });
            });

            this._changeDetectorRef.markForCheck();
          }
          /** Focuses the active cell after the microtask queue is empty. */

        }, {
          key: "_focusActiveCell",
          value: function _focusActiveCell() {
            this._matCalendarBody._focusActiveCell();
          }
          /**
           * Gets the month in this year that the given Date falls on.
           * Returns null if the given Date is in another year.
           */

        }, {
          key: "_getMonthInCurrentYear",
          value: function _getMonthInCurrentYear(date) {
            return date && this._dateAdapter.getYear(date) == this._dateAdapter.getYear(this.activeDate) ? this._dateAdapter.getMonth(date) : null;
          }
          /** Creates an MatCalendarCell for the given month. */

        }, {
          key: "_createCellForMonth",
          value: function _createCellForMonth(month, monthName) {
            var ariaLabel = this._dateAdapter.format(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1), this._dateFormats.display.monthYearA11yLabel);

            return new MatCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._shouldEnableMonth(month));
          }
          /** Whether the given month is enabled. */

        }, {
          key: "_shouldEnableMonth",
          value: function _shouldEnableMonth(month) {
            var activeYear = this._dateAdapter.getYear(this.activeDate);

            if (month === undefined || month === null || this._isYearAndMonthAfterMaxDate(activeYear, month) || this._isYearAndMonthBeforeMinDate(activeYear, month)) {
              return false;
            }

            if (!this.dateFilter) {
              return true;
            }

            var firstOfMonth = this._dateAdapter.createDate(activeYear, month, 1); // If any date in the month is enabled count the month as enabled.


            for (var date = firstOfMonth; this._dateAdapter.getMonth(date) == month; date = this._dateAdapter.addCalendarDays(date, 1)) {
              if (this.dateFilter(date)) {
                return true;
              }
            }

            return false;
          }
          /**
           * Tests whether the combination month/year is after this.maxDate, considering
           * just the month and year of this.maxDate
           */

        }, {
          key: "_isYearAndMonthAfterMaxDate",
          value: function _isYearAndMonthAfterMaxDate(year, month) {
            if (this.maxDate) {
              var maxYear = this._dateAdapter.getYear(this.maxDate);

              var maxMonth = this._dateAdapter.getMonth(this.maxDate);

              return year > maxYear || year === maxYear && month > maxMonth;
            }

            return false;
          }
          /**
           * Tests whether the combination month/year is before this.minDate, considering
           * just the month and year of this.minDate
           */

        }, {
          key: "_isYearAndMonthBeforeMinDate",
          value: function _isYearAndMonthBeforeMinDate(year, month) {
            if (this.minDate) {
              var minYear = this._dateAdapter.getYear(this.minDate);

              var minMonth = this._dateAdapter.getMonth(this.minDate);

              return year < minYear || year === minYear && month < minMonth;
            }

            return false;
          }
          /**
           * @param obj The object to check.
           * @returns The given object if it is both a date instance and valid, otherwise null.
           */

        }, {
          key: "_getValidDateOrNull",
          value: function _getValidDateOrNull(obj) {
            return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
          }
          /** Determines whether the user has the RTL layout direction. */

        }, {
          key: "_isRtl",
          value: function _isRtl() {
            return this._dir && this._dir.value === 'rtl';
          }
          /** Sets the currently-selected month based on a model value. */

        }, {
          key: "_setSelectedMonth",
          value: function _setSelectedMonth(value) {
            if (value instanceof DateRange) {
              this._selectedMonth = this._getMonthInCurrentYear(value.start) || this._getMonthInCurrentYear(value.end);
            } else {
              this._selectedMonth = this._getMonthInCurrentYear(value);
            }
          }
        }, {
          key: "activeDate",
          get: function get() {
            return this._activeDate;
          },
          set: function set(value) {
            var oldActiveDate = this._activeDate;

            var validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();

            this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

            if (this._dateAdapter.getYear(oldActiveDate) !== this._dateAdapter.getYear(this._activeDate)) {
              this._init();
            }
          }
          /** The currently selected date. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(value) {
            if (value instanceof DateRange) {
              this._selected = value;
            } else {
              this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            }

            this._setSelectedMonth(value);
          }
          /** The minimum selectable date. */

        }, {
          key: "minDate",
          get: function get() {
            return this._minDate;
          },
          set: function set(value) {
            this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
          /** The maximum selectable date. */

        }, {
          key: "maxDate",
          get: function get() {
            return this._maxDate;
          },
          set: function set(value) {
            this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
        }]);

        return MatYearView;
      }();

      MatYearView.ɵfac = function MatYearView_Factory(t) {
        return new (t || MatYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], 8));
      };

      MatYearView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatYearView,
        selectors: [["mat-year-view"]],
        viewQuery: function MatYearView_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatCalendarBody, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
          }
        },
        inputs: {
          activeDate: "activeDate",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          dateFilter: "dateFilter"
        },
        outputs: {
          selectedChange: "selectedChange",
          monthSelected: "monthSelected",
          activeDateChange: "activeDateChange"
        },
        exportAs: ["matYearView"],
        decls: 5,
        vars: 9,
        consts: [["role", "presentation", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "label", "rows", "todayValue", "startValue", "endValue", "labelMinRequiredCells", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "keydown"]],
        template: function MatYearView_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tbody", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedValueChange", function MatYearView_Template_tbody_selectedValueChange_4_listener($event) {
              return ctx._monthSelected($event);
            })("keydown", function MatYearView_Template_tbody_keydown_4_listener($event) {
              return ctx._handleCalendarBodyKeydown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", ctx._yearLabel)("rows", ctx._months)("todayValue", ctx._todayMonth)("startValue", ctx._selectedMonth)("endValue", ctx._selectedMonth)("labelMinRequiredCells", 2)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._dateAdapter.getMonth(ctx.activeDate));
          }
        },
        directives: [MatCalendarBody],
        encapsulation: 2,
        changeDetection: 0
      });

      MatYearView.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      };

      MatYearView.propDecorators = {
        activeDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        minDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        maxDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        monthSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        activeDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _matCalendarBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatCalendarBody]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatYearView, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-year-view',
            template: "<table class=\"mat-calendar-table\" role=\"presentation\">\n  <thead class=\"mat-calendar-table-header\">\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]=\"_yearLabel\"\n         [rows]=\"_months\"\n         [todayValue]=\"_todayMonth!\"\n         [startValue]=\"_selectedMonth!\"\n         [endValue]=\"_selectedMonth!\"\n         [labelMinRequiredCells]=\"2\"\n         [numCols]=\"4\"\n         [cellAspectRatio]=\"4 / 7\"\n         [activeCell]=\"_dateAdapter.getMonth(activeDate)\"\n         (selectedValueChange)=\"_monthSelected($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
            exportAs: 'matYearView',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }];
        }, {
          selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          _matCalendarBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatCalendarBody]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Default header for MatCalendar */


      var MatCalendarHeader = /*#__PURE__*/function () {
        function MatCalendarHeader(_intl, calendar, _dateAdapter, _dateFormats, changeDetectorRef) {
          _classCallCheck(this, MatCalendarHeader);

          this._intl = _intl;
          this.calendar = calendar;
          this._dateAdapter = _dateAdapter;
          this._dateFormats = _dateFormats;
          this.calendar.stateChanges.subscribe(function () {
            return changeDetectorRef.markForCheck();
          });
        }
        /** The label for the current calendar view. */


        _createClass(MatCalendarHeader, [{
          key: "currentPeriodClicked",

          /** Handles user clicks on the period label. */
          value: function currentPeriodClicked() {
            this.calendar.currentView = this.calendar.currentView == 'month' ? 'multi-year' : 'month';
          }
          /** Handles user clicks on the previous button. */

        }, {
          key: "previousClicked",
          value: function previousClicked() {
            this.calendar.activeDate = this.calendar.currentView == 'month' ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? -1 : -yearsPerPage);
          }
          /** Handles user clicks on the next button. */

        }, {
          key: "nextClicked",
          value: function nextClicked() {
            this.calendar.activeDate = this.calendar.currentView == 'month' ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? 1 : yearsPerPage);
          }
          /** Whether the previous period button is enabled. */

        }, {
          key: "previousEnabled",
          value: function previousEnabled() {
            if (!this.calendar.minDate) {
              return true;
            }

            return !this.calendar.minDate || !this._isSameView(this.calendar.activeDate, this.calendar.minDate);
          }
          /** Whether the next period button is enabled. */

        }, {
          key: "nextEnabled",
          value: function nextEnabled() {
            return !this.calendar.maxDate || !this._isSameView(this.calendar.activeDate, this.calendar.maxDate);
          }
          /** Whether the two dates represent the same view in the current view mode (month or year). */

        }, {
          key: "_isSameView",
          value: function _isSameView(date1, date2) {
            if (this.calendar.currentView == 'month') {
              return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2) && this._dateAdapter.getMonth(date1) == this._dateAdapter.getMonth(date2);
            }

            if (this.calendar.currentView == 'year') {
              return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2);
            } // Otherwise we are in 'multi-year' view.


            return isSameMultiYearView(this._dateAdapter, date1, date2, this.calendar.minDate, this.calendar.maxDate);
          }
        }, {
          key: "periodButtonText",
          get: function get() {
            if (this.calendar.currentView == 'month') {
              return this._dateAdapter.format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase();
            }

            if (this.calendar.currentView == 'year') {
              return this._dateAdapter.getYearName(this.calendar.activeDate);
            } // The offset from the active year to the "slot" for the starting year is the
            // *actual* first rendered year in the multi-year view, and the last year is
            // just yearsPerPage - 1 away.


            var activeYear = this._dateAdapter.getYear(this.calendar.activeDate);

            var minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.calendar.activeDate, this.calendar.minDate, this.calendar.maxDate);
            var maxYearOfPage = minYearOfPage + yearsPerPage - 1;

            var minYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(minYearOfPage, 0, 1));

            var maxYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(maxYearOfPage, 0, 1));

            return this._intl.formatYearRange(minYearName, maxYearName);
          }
        }, {
          key: "periodButtonLabel",
          get: function get() {
            return this.calendar.currentView == 'month' ? this._intl.switchToMultiYearViewLabel : this._intl.switchToMonthViewLabel;
          }
          /** The label for the previous button. */

        }, {
          key: "prevButtonLabel",
          get: function get() {
            return {
              'month': this._intl.prevMonthLabel,
              'year': this._intl.prevYearLabel,
              'multi-year': this._intl.prevMultiYearLabel
            }[this.calendar.currentView];
          }
          /** The label for the next button. */

        }, {
          key: "nextButtonLabel",
          get: function get() {
            return {
              'month': this._intl.nextMonthLabel,
              'year': this._intl.nextYearLabel,
              'multi-year': this._intl.nextMultiYearLabel
            }[this.calendar.currentView];
          }
        }]);

        return MatCalendarHeader;
      }();

      MatCalendarHeader.ɵfac = function MatCalendarHeader_Factory(t) {
        return new (t || MatCalendarHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
          return MatCalendar;
        })), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
      };

      MatCalendarHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatCalendarHeader,
        selectors: [["mat-calendar-header"]],
        exportAs: ["matCalendarHeader"],
        ngContentSelectors: _c1,
        decls: 9,
        vars: 8,
        consts: [[1, "mat-calendar-header"], [1, "mat-calendar-controls"], ["mat-button", "", "type", "button", "cdkAriaLive", "polite", 1, "mat-calendar-period-button", 3, "click"], [1, "mat-calendar-arrow"], [1, "mat-calendar-spacer"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-previous-button", 3, "disabled", "click"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-next-button", 3, "disabled", "click"]],
        template: function MatCalendarHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_2_listener() {
              return ctx.currentPeriodClicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_7_listener() {
              return ctx.previousClicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_8_listener() {
              return ctx.nextClicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx.periodButtonLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.periodButtonText, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-calendar-invert", ctx.calendar.currentView != "month");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.previousEnabled());

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx.prevButtonLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.nextEnabled());

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx.nextButtonLabel);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["CdkAriaLive"]],
        encapsulation: 2,
        changeDetection: 0
      });

      MatCalendarHeader.ctorParameters = function () {
        return [{
          type: MatDatepickerIntl
        }, {
          type: MatCalendar,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
              return MatCalendar;
            })]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatCalendarHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-calendar-header',
            template: "<div class=\"mat-calendar-header\">\n  <div class=\"mat-calendar-controls\">\n    <button mat-button type=\"button\" class=\"mat-calendar-period-button\"\n            (click)=\"currentPeriodClicked()\" [attr.aria-label]=\"periodButtonLabel\"\n            cdkAriaLive=\"polite\">\n      {{periodButtonText}}\n      <div class=\"mat-calendar-arrow\"\n           [class.mat-calendar-invert]=\"calendar.currentView != 'month'\"></div>\n    </button>\n\n    <div class=\"mat-calendar-spacer\"></div>\n\n    <ng-content></ng-content>\n\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-previous-button\"\n            [disabled]=\"!previousEnabled()\" (click)=\"previousClicked()\"\n            [attr.aria-label]=\"prevButtonLabel\">\n    </button>\n\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-next-button\"\n            [disabled]=\"!nextEnabled()\" (click)=\"nextClicked()\"\n            [attr.aria-label]=\"nextButtonLabel\">\n    </button>\n  </div>\n</div>\n",
            exportAs: 'matCalendarHeader',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: MatDatepickerIntl
          }, {
            type: MatCalendar,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
                return MatCalendar;
              })]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }];
        }, null);
      })();
      /**
       * A calendar that is used as part of the datepicker.
       * @docs-private
       */


      var MatCalendar = /*#__PURE__*/function () {
        function MatCalendar(_intl, _dateAdapter, _dateFormats, _changeDetectorRef) {
          var _this10 = this;

          _classCallCheck(this, MatCalendar);

          this._dateAdapter = _dateAdapter;
          this._dateFormats = _dateFormats;
          this._changeDetectorRef = _changeDetectorRef;
          /**
           * Used for scheduling that focus should be moved to the active cell on the next tick.
           * We need to schedule it, rather than do it immediately, because we have to wait
           * for Angular to re-evaluate the view children.
           */

          this._moveFocusOnNextTick = false;
          /** Whether the calendar should be started in month or year view. */

          this.startView = 'month';
          /**
           * Emits when the currently selected date changes.
           * @breaking-change 11.0.0 Emitted value to change to `D | null`.
           */

          this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /**
           * Emits the year chosen in multiyear view.
           * This doesn't imply a change on the selected date.
           */

          this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /**
           * Emits the month chosen in year view.
           * This doesn't imply a change on the selected date.
           */

          this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when any date is selected. */

          this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /**
           * Emits whenever there is a state change that the header may need to respond to.
           */

          this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();

          if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
          }

          if (!this._dateFormats) {
            throw createMissingDateImplError('MAT_DATE_FORMATS');
          }

          this._intlChanges = _intl.changes.subscribe(function () {
            _changeDetectorRef.markForCheck();

            _this10.stateChanges.next();
          });
        }
        /** A date representing the period (month or year) to start the calendar in. */


        _createClass(MatCalendar, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this._calendarHeaderPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](this.headerComponent || MatCalendarHeader);
            this.activeDate = this.startAt || this._dateAdapter.today(); // Assign to the private property since we don't want to move focus on init.

            this._currentView = this.startView;
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            if (this._moveFocusOnNextTick) {
              this._moveFocusOnNextTick = false;
              this.focusActiveCell();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._intlChanges.unsubscribe();

            this.stateChanges.complete();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var change = changes['minDate'] || changes['maxDate'] || changes['dateFilter'];

            if (change && !change.firstChange) {
              var view = this._getCurrentViewComponent();

              if (view) {
                // We need to `detectChanges` manually here, because the `minDate`, `maxDate` etc. are
                // passed down to the view via data bindings which won't be up-to-date when we call `_init`.
                this._changeDetectorRef.detectChanges();

                view._init();
              }
            }

            this.stateChanges.next();
          }
        }, {
          key: "focusActiveCell",
          value: function focusActiveCell() {
            this._getCurrentViewComponent()._focusActiveCell(false);
          }
          /** Updates today's date after an update of the active date */

        }, {
          key: "updateTodaysDate",
          value: function updateTodaysDate() {
            var currentView = this.currentView;
            var view;

            if (currentView === 'month') {
              view = this.monthView;
            } else if (currentView === 'year') {
              view = this.yearView;
            } else {
              view = this.multiYearView;
            }

            view._init();
          }
          /** Handles date selection in the month view. */

        }, {
          key: "_dateSelected",
          value: function _dateSelected(event) {
            var date = event.value;

            if (this.selected instanceof DateRange || date && !this._dateAdapter.sameDate(date, this.selected)) {
              // @breaking-change 11.0.0 remove non-null assertion
              // once the `selectedChange` is allowed to be null.
              this.selectedChange.emit(date);
            }

            this._userSelection.emit(event);
          }
          /** Handles year selection in the multiyear view. */

        }, {
          key: "_yearSelectedInMultiYearView",
          value: function _yearSelectedInMultiYearView(normalizedYear) {
            this.yearSelected.emit(normalizedYear);
          }
          /** Handles month selection in the year view. */

        }, {
          key: "_monthSelectedInYearView",
          value: function _monthSelectedInYearView(normalizedMonth) {
            this.monthSelected.emit(normalizedMonth);
          }
          /** Handles year/month selection in the multi-year/year views. */

        }, {
          key: "_goToDateInView",
          value: function _goToDateInView(date, view) {
            this.activeDate = date;
            this.currentView = view;
          }
          /**
           * @param obj The object to check.
           * @returns The given object if it is both a date instance and valid, otherwise null.
           */

        }, {
          key: "_getValidDateOrNull",
          value: function _getValidDateOrNull(obj) {
            return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
          }
          /** Returns the component instance that corresponds to the current calendar view. */

        }, {
          key: "_getCurrentViewComponent",
          value: function _getCurrentViewComponent() {
            return this.monthView || this.yearView || this.multiYearView;
          }
        }, {
          key: "startAt",
          get: function get() {
            return this._startAt;
          },
          set: function set(value) {
            this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
          /** The currently selected date. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(value) {
            if (value instanceof DateRange) {
              this._selected = value;
            } else {
              this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            }
          }
          /** The minimum selectable date. */

        }, {
          key: "minDate",
          get: function get() {
            return this._minDate;
          },
          set: function set(value) {
            this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
          /** The maximum selectable date. */

        }, {
          key: "maxDate",
          get: function get() {
            return this._maxDate;
          },
          set: function set(value) {
            this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
          /**
           * The current active date. This determines which time period is shown and which date is
           * highlighted when using keyboard navigation.
           */

        }, {
          key: "activeDate",
          get: function get() {
            return this._clampedActiveDate;
          },
          set: function set(value) {
            this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
            this.stateChanges.next();

            this._changeDetectorRef.markForCheck();
          }
          /** Whether the calendar is in month view. */

        }, {
          key: "currentView",
          get: function get() {
            return this._currentView;
          },
          set: function set(value) {
            this._currentView = value;
            this._moveFocusOnNextTick = true;

            this._changeDetectorRef.markForCheck();
          }
        }]);

        return MatCalendar;
      }();

      MatCalendar.ɵfac = function MatCalendar_Factory(t) {
        return new (t || MatCalendar)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
      };

      MatCalendar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatCalendar,
        selectors: [["mat-calendar"]],
        viewQuery: function MatCalendar_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatMonthView, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatYearView, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatMultiYearView, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.monthView = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.yearView = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.multiYearView = _t.first);
          }
        },
        hostAttrs: [1, "mat-calendar"],
        inputs: {
          startView: "startView",
          startAt: "startAt",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          headerComponent: "headerComponent",
          dateFilter: "dateFilter",
          dateClass: "dateClass",
          comparisonStart: "comparisonStart",
          comparisonEnd: "comparisonEnd"
        },
        outputs: {
          selectedChange: "selectedChange",
          yearSelected: "yearSelected",
          monthSelected: "monthSelected",
          _userSelection: "_userSelection"
        },
        exportAs: ["matCalendar"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        decls: 5,
        vars: 5,
        consts: [[3, "cdkPortalOutlet"], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "mat-calendar-content", 3, "ngSwitch"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "activeDateChange", "_userSelection", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "activeDateChange", "monthSelected", "selectedChange", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "activeDateChange", "yearSelected", "selectedChange", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "activeDateChange", "_userSelection"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "activeDateChange", "monthSelected", "selectedChange"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "activeDateChange", "yearSelected", "selectedChange"]],
        template: function MatCalendar_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MatCalendar_ng_template_0_Template, 0, 0, "ng-template", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatCalendar_mat_month_view_2_Template, 1, 8, "mat-month-view", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MatCalendar_mat_year_view_3_Template, 1, 5, "mat-year-view", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MatCalendar_mat_multi_year_view_4_Template, 1, 5, "mat-multi-year-view", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkPortalOutlet", ctx._calendarHeaderPortal);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx.currentView);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "month");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "year");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "multi-year");
          }
        },
        directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["CdkMonitorFocus"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], MatMonthView, MatYearView, MatMultiYearView],
        styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;margin:5% calc(33% / 7 - 16px)}.mat-calendar-controls .mat-icon-button:hover .mat-button-focus-overlay{opacity:.04}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top-width:5px;border-top-style:solid;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-calendar-previous-button::after,.mat-calendar-next-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:\"\";position:absolute;top:0;left:-8px;right:-8px;height:1px}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatCalendar.ctorParameters = function () {
        return [{
          type: MatDatepickerIntl
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      };

      MatCalendar.propDecorators = {
        headerComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        startAt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        startView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        minDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        maxDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        comparisonStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        comparisonEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        yearSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        monthSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _userSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        monthView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatMonthView]
        }],
        yearView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatYearView]
        }],
        multiYearView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatMultiYearView]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatCalendar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-calendar',
            template: "<ng-template [cdkPortalOutlet]=\"_calendarHeaderPortal\"></ng-template>\n\n<div class=\"mat-calendar-content\" [ngSwitch]=\"currentView\" cdkMonitorSubtreeFocus tabindex=\"-1\">\n  <mat-month-view\n      *ngSwitchCase=\"'month'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      [dateClass]=\"dateClass\"\n      [comparisonStart]=\"comparisonStart\"\n      [comparisonEnd]=\"comparisonEnd\"\n      (_userSelection)=\"_dateSelected($event)\">\n  </mat-month-view>\n\n  <mat-year-view\n      *ngSwitchCase=\"'year'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      (monthSelected)=\"_monthSelectedInYearView($event)\"\n      (selectedChange)=\"_goToDateInView($event, 'month')\">\n  </mat-year-view>\n\n  <mat-multi-year-view\n      *ngSwitchCase=\"'multi-year'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      (yearSelected)=\"_yearSelectedInMultiYearView($event)\"\n      (selectedChange)=\"_goToDateInView($event, 'year')\">\n  </mat-multi-year-view>\n</div>\n",
            host: {
              'class': 'mat-calendar'
            },
            exportAs: 'matCalendar',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            providers: [MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER],
            styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;margin:5% calc(33% / 7 - 16px)}.mat-calendar-controls .mat-icon-button:hover .mat-button-focus-overlay{opacity:.04}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top-width:5px;border-top-style:solid;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-calendar-previous-button::after,.mat-calendar-next-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:\"\";position:absolute;top:0;left:-8px;right:-8px;height:1px}\n"]
          }]
        }], function () {
          return [{
            type: MatDatepickerIntl
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }];
        }, {
          startView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          _userSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          startAt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          headerComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          comparisonStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          comparisonEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          monthView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatMonthView]
          }],
          yearView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatYearView]
          }],
          multiYearView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatMultiYearView]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Animations used by the Material datepicker.
       * @docs-private
       */


      var matDatepickerAnimations = {
        /** Transforms the height of the datepicker's calendar. */
        transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 0,
          transform: 'scale(1, 0.8)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 1,
          transform: 'scale(1, 1)'
        }))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 0
        })))]),

        /** Fades in the content of the calendar. */
        fadeInCalendar: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('fadeInCalendar', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 1
        })), // TODO(crisbeto): this animation should be removed since it isn't quite on spec, but we
        // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'))])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Used to generate a unique ID for each datepicker instance. */

      var datepickerUid = 0;
      /** Injection token that determines the scroll handling while the calendar is open. */

      var MAT_DATEPICKER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('mat-datepicker-scroll-strategy');
      /** @docs-private */

      function MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.reposition();
        };
      }
      /** @docs-private */


      var MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
        provide: MAT_DATEPICKER_SCROLL_STRATEGY,
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]],
        useFactory: MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY
      }; // Boilerplate for applying mixins to MatDatepickerContent.

      /** @docs-private */

      var MatDatepickerContentBase = function MatDatepickerContentBase(_elementRef) {
        _classCallCheck(this, MatDatepickerContentBase);

        this._elementRef = _elementRef;
      };

      var _MatDatepickerContentMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinColor"])(MatDatepickerContentBase);
      /**
       * Component used as the content for the datepicker dialog and popup. We use this instead of using
       * MatCalendar directly as the content so we can control the initial focus. This also gives us a
       * place to put additional features of the popup that are not part of the calendar itself in the
       * future. (e.g. confirmation buttons).
       * @docs-private
       */


      var MatDatepickerContent = /*#__PURE__*/function (_MatDatepickerContent) {
        _inherits(MatDatepickerContent, _MatDatepickerContent);

        var _super5 = _createSuper(MatDatepickerContent);

        function MatDatepickerContent(elementRef,
        /**
         * @deprecated `_changeDetectorRef`, `_model` and `_rangeSelectionStrategy`
         * parameters to become required.
         * @breaking-change 11.0.0
         */
        _changeDetectorRef, _model, _dateAdapter, _rangeSelectionStrategy) {
          var _this11;

          _classCallCheck(this, MatDatepickerContent);

          _this11 = _super5.call(this, elementRef);
          _this11._changeDetectorRef = _changeDetectorRef;
          _this11._model = _model;
          _this11._dateAdapter = _dateAdapter;
          _this11._rangeSelectionStrategy = _rangeSelectionStrategy;
          _this11._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"]();
          /** Current state of the animation. */

          _this11._animationState = 'enter';
          /** Emits when an animation has finished. */

          _this11._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          return _this11;
        }

        _createClass(MatDatepickerContent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this12 = this;

            // @breaking-change 11.0.0 Remove null check for `_changeDetectorRef.
            if (this._changeDetectorRef) {
              this._subscriptions.add(this.datepicker._stateChanges.subscribe(function () {
                _this12._changeDetectorRef.markForCheck();
              }));
            }

            this._calendar.focusActiveCell();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._subscriptions.unsubscribe();

            this._animationDone.complete();
          }
        }, {
          key: "_handleUserSelection",
          value: function _handleUserSelection(event) {
            // @breaking-change 11.0.0 Remove null checks for _model,
            // _rangeSelectionStrategy and _dateAdapter.
            if (this._model && this._dateAdapter) {
              var selection = this._model.selection;
              var _value2 = event.value;
              var isRange = selection instanceof DateRange; // If we're selecting a range and we have a selection strategy, always pass the value through
              // there. Otherwise don't assign null values to the model, unless we're selecting a range.
              // A null value when picking a range means that the user cancelled the selection (e.g. by
              // pressing escape), whereas when selecting a single value it means that the value didn't
              // change. This isn't very intuitive, but it's here for backwards-compatibility.

              if (isRange && this._rangeSelectionStrategy) {
                var newSelection = this._rangeSelectionStrategy.selectionFinished(_value2, selection, event.event);

                this._model.updateSelection(newSelection, this);
              } else if (_value2 && (isRange || !this._dateAdapter.sameDate(_value2, selection))) {
                this._model.add(_value2);
              }
            }

            if (!this._model || this._model.isComplete()) {
              this.datepicker.close();
            }
          }
        }, {
          key: "_startExitAnimation",
          value: function _startExitAnimation() {
            this._animationState = 'void'; // @breaking-change 11.0.0 Remove null check for `_changeDetectorRef`.

            if (this._changeDetectorRef) {
              this._changeDetectorRef.markForCheck();
            }
          }
        }, {
          key: "_getSelected",
          value: function _getSelected() {
            // @breaking-change 11.0.0 Remove null check for `_model`.
            return this._model ? this._model.selection : null;
          }
        }]);

        return MatDatepickerContent;
      }(_MatDatepickerContentMixinBase);

      MatDatepickerContent.ɵfac = function MatDatepickerContent_Factory(t) {
        return new (t || MatDatepickerContent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatDateSelectionModel), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_DATE_RANGE_SELECTION_STRATEGY, 8));
      };

      MatDatepickerContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatDatepickerContent,
        selectors: [["mat-datepicker-content"]],
        viewQuery: function MatDatepickerContent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatCalendar, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._calendar = _t.first);
          }
        },
        hostAttrs: [1, "mat-datepicker-content"],
        hostVars: 3,
        hostBindings: function MatDatepickerContent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsyntheticHostListener"]("@transformPanel.done", function MatDatepickerContent_animation_transformPanel_done_HostBindingHandler() {
              return ctx._animationDone.next();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsyntheticHostProperty"]("@transformPanel", ctx._animationState);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-datepicker-content-touch", ctx.datepicker.touchUi);
          }
        },
        inputs: {
          color: "color"
        },
        exportAs: ["matDatepickerContent"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 13,
        consts: [["cdkTrapFocus", "", 3, "id", "ngClass", "startAt", "startView", "minDate", "maxDate", "dateFilter", "headerComponent", "selected", "dateClass", "comparisonStart", "comparisonEnd", "yearSelected", "monthSelected", "_userSelection"]],
        template: function MatDatepickerContent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-calendar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("yearSelected", function MatDatepickerContent_Template_mat_calendar_yearSelected_0_listener($event) {
              return ctx.datepicker._selectYear($event);
            })("monthSelected", function MatDatepickerContent_Template_mat_calendar_monthSelected_0_listener($event) {
              return ctx.datepicker._selectMonth($event);
            })("_userSelection", function MatDatepickerContent_Template_mat_calendar__userSelection_0_listener($event) {
              return ctx._handleUserSelection($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx.datepicker.id)("ngClass", ctx.datepicker.panelClass)("startAt", ctx.datepicker.startAt)("startView", ctx.datepicker.startView)("minDate", ctx.datepicker._getMinDate())("maxDate", ctx.datepicker._getMaxDate())("dateFilter", ctx.datepicker._getDateFilter())("headerComponent", ctx.datepicker.calendarHeaderComponent)("selected", ctx._getSelected())("dateClass", ctx.datepicker.dateClass)("comparisonStart", ctx.comparisonStart)("comparisonEnd", ctx.comparisonEnd)("@fadeInCalendar", "enter");
          }
        },
        directives: [MatCalendar, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["CdkTrapFocus"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        styles: [".mat-datepicker-content{display:block;border-radius:4px}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content-touch{display:block;max-height:80vh;overflow:auto;margin:-24px}.mat-datepicker-content-touch .mat-calendar{min-width:250px;min-height:312px;max-width:750px;max-height:788px}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-calendar{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-calendar{width:80vw;height:100vw}}\n"],
        encapsulation: 2,
        data: {
          animation: [matDatepickerAnimations.transformPanel, matDatepickerAnimations.fadeInCalendar]
        },
        changeDetection: 0
      });

      MatDatepickerContent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: MatDateSelectionModel
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
          }]
        }];
      };

      MatDatepickerContent.propDecorators = {
        _calendar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatCalendar]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-datepicker-content',
            template: "<mat-calendar cdkTrapFocus\n    [id]=\"datepicker.id\"\n    [ngClass]=\"datepicker.panelClass\"\n    [startAt]=\"datepicker.startAt\"\n    [startView]=\"datepicker.startView\"\n    [minDate]=\"datepicker._getMinDate()\"\n    [maxDate]=\"datepicker._getMaxDate()\"\n    [dateFilter]=\"datepicker._getDateFilter()\"\n    [headerComponent]=\"datepicker.calendarHeaderComponent\"\n    [selected]=\"_getSelected()\"\n    [dateClass]=\"datepicker.dateClass\"\n    [comparisonStart]=\"comparisonStart\"\n    [comparisonEnd]=\"comparisonEnd\"\n    [@fadeInCalendar]=\"'enter'\"\n    (yearSelected)=\"datepicker._selectYear($event)\"\n    (monthSelected)=\"datepicker._selectMonth($event)\"\n    (_userSelection)=\"_handleUserSelection($event)\">\n</mat-calendar>\n",
            host: {
              'class': 'mat-datepicker-content',
              '[@transformPanel]': '_animationState',
              '(@transformPanel.done)': '_animationDone.next()',
              '[class.mat-datepicker-content-touch]': 'datepicker.touchUi'
            },
            animations: [matDatepickerAnimations.transformPanel, matDatepickerAnimations.fadeInCalendar],
            exportAs: 'matDatepickerContent',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            inputs: ['color'],
            styles: [".mat-datepicker-content{display:block;border-radius:4px}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content-touch{display:block;max-height:80vh;overflow:auto;margin:-24px}.mat-datepicker-content-touch .mat-calendar{min-width:250px;min-height:312px;max-width:750px;max-height:788px}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-calendar{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-calendar{width:80vw;height:100vw}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: MatDateSelectionModel
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
            }]
          }];
        }, {
          _calendar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatCalendar]
          }]
        });
      })();
      /** Base class for a datepicker. */


      var MatDatepickerBase = /*#__PURE__*/function () {
        function MatDatepickerBase(_dialog, _overlay, _ngZone, _viewContainerRef, scrollStrategy, _dateAdapter, _dir, _document, _model) {
          _classCallCheck(this, MatDatepickerBase);

          this._dialog = _dialog;
          this._overlay = _overlay;
          this._ngZone = _ngZone;
          this._viewContainerRef = _viewContainerRef;
          this._dateAdapter = _dateAdapter;
          this._dir = _dir;
          this._document = _document;
          this._model = _model;
          this._inputStateChanges = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          /** The view that the calendar should start in. */

          this.startView = 'month';
          this._touchUi = false;
          /** Preferred position of the datepicker in the X axis. */

          this.xPosition = 'start';
          /** Preferred position of the datepicker in the Y axis. */

          this.yPosition = 'below';
          /**
           * Emits selected year in multiyear view.
           * This doesn't imply a change on the selected date.
           */

          this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /**
           * Emits selected month in year view.
           * This doesn't imply a change on the selected date.
           */

          this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when the datepicker has been opened. */

          this.openedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when the datepicker has been closed. */

          this.closedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this._opened = false;
          /** The id for the datepicker calendar. */

          this.id = "mat-datepicker-".concat(datepickerUid++);
          /** The element that was focused before the datepicker was opened. */

          this._focusedElementBeforeOpen = null;
          /** Emits when the datepicker's state changes. */

          this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();

          if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
          }

          this._scrollStrategy = scrollStrategy;
        }
        /** The date to open the calendar to initially. */


        _createClass(MatDatepickerBase, [{
          key: "_getMinDate",

          /** The minimum selectable date. */
          value: function _getMinDate() {
            return this._datepickerInput && this._datepickerInput.min;
          }
          /** The maximum selectable date. */

        }, {
          key: "_getMaxDate",
          value: function _getMaxDate() {
            return this._datepickerInput && this._datepickerInput.max;
          }
        }, {
          key: "_getDateFilter",
          value: function _getDateFilter() {
            return this._datepickerInput && this._datepickerInput.dateFilter;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var positionChange = changes['xPosition'] || changes['yPosition'];

            if (positionChange && !positionChange.firstChange && this._popupRef) {
              this._setConnectedPositions(this._popupRef.getConfig().positionStrategy);

              if (this.opened) {
                this._popupRef.updatePosition();
              }
            }

            this._stateChanges.next(undefined);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyPopup();

            this.close();

            this._inputStateChanges.unsubscribe();

            this._stateChanges.complete();
          }
          /** Selects the given date */

        }, {
          key: "select",
          value: function select(date) {
            this._model.add(date);
          }
          /** Emits the selected year in multiyear view */

        }, {
          key: "_selectYear",
          value: function _selectYear(normalizedYear) {
            this.yearSelected.emit(normalizedYear);
          }
          /** Emits selected month in year view */

        }, {
          key: "_selectMonth",
          value: function _selectMonth(normalizedMonth) {
            this.monthSelected.emit(normalizedMonth);
          }
          /**
           * Register an input with this datepicker.
           * @param input The datepicker input to register with this datepicker.
           * @returns Selection model that the input should hook itself up to.
           */

        }, {
          key: "_registerInput",
          value: function _registerInput(input) {
            var _this13 = this;

            if (this._datepickerInput) {
              throw Error('A MatDatepicker can only be associated with a single input.');
            }

            this._inputStateChanges.unsubscribe();

            this._datepickerInput = input;
            this._inputStateChanges = input._stateChanges.subscribe(function () {
              return _this13._stateChanges.next(undefined);
            });
            return this._model;
          }
          /** Open the calendar. */

        }, {
          key: "open",
          value: function open() {
            if (this._opened || this.disabled) {
              return;
            }

            if (!this._datepickerInput) {
              throw Error('Attempted to open an MatDatepicker with no associated input.');
            }

            if (this._document) {
              this._focusedElementBeforeOpen = this._document.activeElement;
            }

            this.touchUi ? this._openAsDialog() : this._openAsPopup();
            this._opened = true;
            this.openedStream.emit();
          }
          /** Close the calendar. */

        }, {
          key: "close",
          value: function close() {
            var _this14 = this;

            if (!this._opened) {
              return;
            }

            if (this._popupComponentRef && this._popupRef) {
              var instance = this._popupComponentRef.instance;

              instance._startExitAnimation();

              instance._animationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1)).subscribe(function () {
                return _this14._destroyPopup();
              });
            }

            if (this._dialogRef) {
              this._dialogRef.close();

              this._dialogRef = null;
            }

            var completeClose = function completeClose() {
              // The `_opened` could've been reset already if
              // we got two events in quick succession.
              if (_this14._opened) {
                _this14._opened = false;

                _this14.closedStream.emit();

                _this14._focusedElementBeforeOpen = null;
              }
            };

            if (this._focusedElementBeforeOpen && typeof this._focusedElementBeforeOpen.focus === 'function') {
              // Because IE moves focus asynchronously, we can't count on it being restored before we've
              // marked the datepicker as closed. If the event fires out of sequence and the element that
              // we're refocusing opens the datepicker on focus, the user could be stuck with not being
              // able to close the calendar at all. We work around it by making the logic, that marks
              // the datepicker as closed, async as well.
              this._focusedElementBeforeOpen.focus();

              setTimeout(completeClose);
            } else {
              completeClose();
            }
          }
          /** Open the calendar as a dialog. */

        }, {
          key: "_openAsDialog",
          value: function _openAsDialog() {
            var _this15 = this;

            // Usually this would be handled by `open` which ensures that we can only have one overlay
            // open at a time, however since we reset the variables in async handlers some overlays
            // may slip through if the user opens and closes multiple times in quick succession (e.g.
            // by holding down the enter key).
            if (this._dialogRef) {
              this._dialogRef.close();
            }

            this._dialogRef = this._dialog.open(MatDatepickerContent, {
              direction: this._dir ? this._dir.value : 'ltr',
              viewContainerRef: this._viewContainerRef,
              panelClass: 'mat-datepicker-dialog',
              // These values are all the same as the defaults, but we set them explicitly so that the
              // datepicker dialog behaves consistently even if the user changed the defaults.
              hasBackdrop: true,
              disableClose: false,
              width: '',
              height: '',
              minWidth: '',
              minHeight: '',
              maxWidth: '80vw',
              maxHeight: '',
              position: {},
              autoFocus: true,
              // `MatDialog` has focus restoration built in, however we want to disable it since the
              // datepicker also has focus restoration for dropdown mode. We want to do this, in order
              // to ensure that the timing is consistent between dropdown and dialog modes since `MatDialog`
              // restores focus when the animation is finished, but the datepicker does it immediately.
              // Furthermore, this avoids any conflicts where the datepicker consumer might move focus
              // inside the `closed` event which is dispatched immediately.
              restoreFocus: false
            });

            this._dialogRef.afterClosed().subscribe(function () {
              return _this15.close();
            });

            this._forwardContentValues(this._dialogRef.componentInstance);
          }
          /** Open the calendar as a popup. */

        }, {
          key: "_openAsPopup",
          value: function _openAsPopup() {
            var _this16 = this;

            var portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](MatDatepickerContent, this._viewContainerRef);

            this._destroyPopup();

            this._createPopup();

            this._popupComponentRef = this._popupRef.attach(portal);

            this._forwardContentValues(this._popupComponentRef.instance); // Update the position once the calendar has rendered.


            this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1)).subscribe(function () {
              _this16._popupRef.updatePosition();
            });
          }
          /** Forwards relevant values from the datepicker to the datepicker content inside the overlay. */

        }, {
          key: "_forwardContentValues",
          value: function _forwardContentValues(instance) {
            instance.datepicker = this;
            instance.color = this.color;
          }
          /** Create the popup. */

        }, {
          key: "_createPopup",
          value: function _createPopup() {
            var _this17 = this;

            var positionStrategy = this._overlay.position().flexibleConnectedTo(this._datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn('.mat-datepicker-content').withFlexibleDimensions(false).withViewportMargin(8).withLockedPosition();

            var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayConfig"]({
              positionStrategy: this._setConnectedPositions(positionStrategy),
              hasBackdrop: true,
              backdropClass: 'mat-overlay-transparent-backdrop',
              direction: this._dir,
              scrollStrategy: this._scrollStrategy(),
              panelClass: 'mat-datepicker-popup'
            });
            this._popupRef = this._overlay.create(overlayConfig);

            this._popupRef.overlayElement.setAttribute('role', 'dialog');

            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this._popupRef.backdropClick(), this._popupRef.detachments(), this._popupRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["filter"])(function (event) {
              // Closing on alt + up is only valid when there's an input associated with the datepicker.
              return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"] || _this17._datepickerInput && event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"];
            }))).subscribe(function (event) {
              if (event) {
                event.preventDefault();
              }

              _this17.close();
            });
          }
          /** Destroys the current popup overlay. */

        }, {
          key: "_destroyPopup",
          value: function _destroyPopup() {
            if (this._popupRef) {
              this._popupRef.dispose();

              this._popupRef = this._popupComponentRef = null;
            }
          }
          /** Sets the positions of the datepicker in dropdown mode based on the current configuration. */

        }, {
          key: "_setConnectedPositions",
          value: function _setConnectedPositions(strategy) {
            var primaryX = this.xPosition === 'end' ? 'end' : 'start';
            var secondaryX = primaryX === 'start' ? 'end' : 'start';
            var primaryY = this.yPosition === 'above' ? 'bottom' : 'top';
            var secondaryY = primaryY === 'top' ? 'bottom' : 'top';
            return strategy.withPositions([{
              originX: primaryX,
              originY: secondaryY,
              overlayX: primaryX,
              overlayY: primaryY
            }, {
              originX: primaryX,
              originY: primaryY,
              overlayX: primaryX,
              overlayY: secondaryY
            }, {
              originX: secondaryX,
              originY: secondaryY,
              overlayX: secondaryX,
              overlayY: primaryY
            }, {
              originX: secondaryX,
              originY: primaryY,
              overlayX: secondaryX,
              overlayY: secondaryY
            }]);
          }
          /**
           * @param obj The object to check.
           * @returns The given object if it is both a date instance and valid, otherwise null.
           */

        }, {
          key: "_getValidDateOrNull",
          value: function _getValidDateOrNull(obj) {
            return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
          }
        }, {
          key: "startAt",
          get: function get() {
            // If an explicit startAt is set we start there, otherwise we start at whatever the currently
            // selected value is.
            return this._startAt || (this._datepickerInput ? this._datepickerInput.getStartValue() : null);
          },
          set: function set(value) {
            this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          }
          /** Color palette to use on the datepicker's calendar. */

        }, {
          key: "color",
          get: function get() {
            return this._color || (this._datepickerInput ? this._datepickerInput.getThemePalette() : undefined);
          },
          set: function set(value) {
            this._color = value;
          }
          /**
           * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
           * than a popup and elements have more padding to allow for bigger touch targets.
           */

        }, {
          key: "touchUi",
          get: function get() {
            return this._touchUi;
          },
          set: function set(value) {
            this._touchUi = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);
          }
          /** Whether the datepicker pop-up should be disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled === undefined && this._datepickerInput ? this._datepickerInput.disabled : !!this._disabled;
          },
          set: function set(value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);

            if (newValue !== this._disabled) {
              this._disabled = newValue;

              this._stateChanges.next(undefined);
            }
          }
          /** Whether the calendar is open. */

        }, {
          key: "opened",
          get: function get() {
            return this._opened;
          },
          set: function set(value) {
            value ? this.open() : this.close();
          }
        }]);

        return MatDatepickerBase;
      }();

      MatDatepickerBase.ɵfac = function MatDatepickerBase_Factory(t) {
        return new (t || MatDatepickerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_DATEPICKER_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatDateSelectionModel));
      };

      MatDatepickerBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatDatepickerBase,
        inputs: {
          startView: "startView",
          xPosition: "xPosition",
          yPosition: "yPosition",
          startAt: "startAt",
          color: "color",
          touchUi: "touchUi",
          disabled: "disabled",
          opened: "opened",
          calendarHeaderComponent: "calendarHeaderComponent",
          panelClass: "panelClass",
          dateClass: "dateClass"
        },
        outputs: {
          yearSelected: "yearSelected",
          monthSelected: "monthSelected",
          openedStream: "opened",
          closedStream: "closed"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
      });

      MatDatepickerBase.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_DATEPICKER_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }, {
          type: MatDateSelectionModel
        }];
      };

      MatDatepickerBase.propDecorators = {
        calendarHeaderComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        startAt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        startView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        touchUi: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        xPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        yPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        yearSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        monthSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        openedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
          args: ['opened']
        }],
        closedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
          args: ['closed']
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }, {
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [MAT_DATEPICKER_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }, {
            type: MatDateSelectionModel
          }];
        }, {
          startView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          xPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          yPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          openedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
            args: ['opened']
          }],
          closedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
            args: ['closed']
          }],
          startAt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          touchUi: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          calendarHeaderComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
      // template reference variables (e.g. #d vs #d="matDatepicker"). We can change this to a directive
      // if angular adds support for `exportAs: '$implicit'` on directives.

      /** Component responsible for managing the datepicker popup/dialog. */


      var MatDatepicker = /*#__PURE__*/function (_MatDatepickerBase) {
        _inherits(MatDatepicker, _MatDatepickerBase);

        var _super6 = _createSuper(MatDatepicker);

        function MatDatepicker() {
          _classCallCheck(this, MatDatepicker);

          return _super6.apply(this, arguments);
        }

        return MatDatepicker;
      }(MatDatepickerBase);

      MatDatepicker.ɵfac = function MatDatepicker_Factory(t) {
        return ɵMatDatepicker_BaseFactory(t || MatDatepicker);
      };

      MatDatepicker.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatDatepicker,
        selectors: [["mat-datepicker"]],
        exportAs: ["matDatepicker"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
        decls: 0,
        vars: 0,
        template: function MatDatepicker_Template(rf, ctx) {},
        encapsulation: 2,
        changeDetection: 0
      });

      var ɵMatDatepicker_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](MatDatepicker);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepicker, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-datepicker',
            template: '',
            exportAs: 'matDatepicker',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            providers: [MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * An event used for datepicker input and change events. We don't always have access to a native
       * input or change event because the event may have been triggered by the user clicking on the
       * calendar popup. For consistency, we always use MatDatepickerInputEvent instead.
       */


      var MatDatepickerInputEvent = function MatDatepickerInputEvent(
      /** Reference to the datepicker input component that emitted the event. */
      target,
      /** Reference to the native input element associated with the datepicker input. */
      targetElement) {
        _classCallCheck(this, MatDatepickerInputEvent);

        this.target = target;
        this.targetElement = targetElement;
        this.value = this.target.value;
      };
      /** Base class for datepicker inputs. */


      var MatDatepickerInputBase = /*#__PURE__*/function () {
        function MatDatepickerInputBase(_elementRef, _dateAdapter, _dateFormats) {
          var _this18 = this;

          _classCallCheck(this, MatDatepickerInputBase);

          this._elementRef = _elementRef;
          this._dateAdapter = _dateAdapter;
          this._dateFormats = _dateFormats;
          /** Emits when a `change` event is fired on this `<input>`. */

          this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when an `input` event is fired on this `<input>`. */

          this.dateInput = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when the value changes (either due to user input or programmatic change). */

          this._valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when the internal state has changed */

          this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();

          this._onTouched = function () {};

          this._validatorOnChange = function () {};

          this._cvaOnChange = function () {};

          this._valueChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          this._localeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          /** The form control validator for whether the input parses. */

          this._parseValidator = function () {
            return _this18._lastValueValid ? null : {
              'matDatepickerParse': {
                'text': _this18._elementRef.nativeElement.value
              }
            };
          };
          /** The form control validator for the date filter. */


          this._filterValidator = function (control) {
            var controlValue = _this18._getValidDateOrNull(_this18._dateAdapter.deserialize(control.value));

            var dateFilter = _this18._getDateFilter();

            return !dateFilter || !controlValue || dateFilter(controlValue) ? null : {
              'matDatepickerFilter': true
            };
          };
          /** The form control validator for the min date. */


          this._minValidator = function (control) {
            var controlValue = _this18._getValidDateOrNull(_this18._dateAdapter.deserialize(control.value));

            var min = _this18._getMinDate();

            return !min || !controlValue || _this18._dateAdapter.compareDate(min, controlValue) <= 0 ? null : {
              'matDatepickerMin': {
                'min': min,
                'actual': controlValue
              }
            };
          };
          /** The form control validator for the max date. */


          this._maxValidator = function (control) {
            var controlValue = _this18._getValidDateOrNull(_this18._dateAdapter.deserialize(control.value));

            var max = _this18._getMaxDate();

            return !max || !controlValue || _this18._dateAdapter.compareDate(max, controlValue) >= 0 ? null : {
              'matDatepickerMax': {
                'max': max,
                'actual': controlValue
              }
            };
          };
          /** Whether the last value set on the input was valid. */


          this._lastValueValid = false;

          if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
          }

          if (!this._dateFormats) {
            throw createMissingDateImplError('MAT_DATE_FORMATS');
          } // Update the displayed date when the locale changes.


          this._localeSubscription = _dateAdapter.localeChanges.subscribe(function () {
            _this18.value = _this18.value;
          });
        }
        /** The value of the input. */


        _createClass(MatDatepickerInputBase, [{
          key: "_getValidators",

          /** Gets the base validator functions. */
          value: function _getValidators() {
            return [this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator];
          }
          /** Registers a date selection model with the input. */

        }, {
          key: "_registerModel",
          value: function _registerModel(model) {
            var _this19 = this;

            this._model = model;

            this._valueChangesSubscription.unsubscribe();

            if (this._pendingValue) {
              this._assignValue(this._pendingValue);
            }

            this._valueChangesSubscription = this._model.selectionChanged.subscribe(function (event) {
              if (event.source !== _this19) {
                var _value3 = _this19._getValueFromModel(event.selection);

                _this19._lastValueValid = _this19._isValidValue(_value3);

                _this19._cvaOnChange(_value3);

                _this19._onTouched();

                _this19._formatValue(_value3); // Note that we can't wrap the entire block with this logic, because for the range inputs
                // we want to revalidate whenever either one of the inputs changes and we don't have a
                // good way of distinguishing it at the moment.


                if (_this19._canEmitChangeEvent(event)) {
                  _this19.dateInput.emit(new MatDatepickerInputEvent(_this19, _this19._elementRef.nativeElement));

                  _this19.dateChange.emit(new MatDatepickerInputEvent(_this19, _this19._elementRef.nativeElement));
                }

                if (_this19._outsideValueChanged) {
                  _this19._outsideValueChanged();
                }
              }
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this._isInitialized = true;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this._stateChanges.next(undefined);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._valueChangesSubscription.unsubscribe();

            this._localeSubscription.unsubscribe();

            this._valueChange.complete();

            this._stateChanges.complete();
          }
          /** @docs-private */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._validatorOnChange = fn;
          }
          /** @docs-private */

        }, {
          key: "validate",
          value: function validate(c) {
            return this._validator ? this._validator(c) : null;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.value = value;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._cvaOnChange = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
          }
        }, {
          key: "_onKeydown",
          value: function _onKeydown(event) {
            var isAltDownArrow = event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"];

            if (isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
              this._openPopup();

              event.preventDefault();
            }
          }
        }, {
          key: "_onInput",
          value: function _onInput(value) {
            var lastValueWasValid = this._lastValueValid;

            var date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);

            this._lastValueValid = this._isValidValue(date);
            date = this._getValidDateOrNull(date);

            if (!this._dateAdapter.sameDate(date, this.value)) {
              this._assignValue(date);

              this._cvaOnChange(date);

              this._valueChange.emit(date);

              this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
            } else {
              // Call the CVA change handler for invalid values
              // since this is what marks the control as dirty.
              if (value && !this.value) {
                this._cvaOnChange(date);
              }

              if (lastValueWasValid !== this._lastValueValid) {
                this._validatorOnChange();
              }
            }
          }
        }, {
          key: "_onChange",
          value: function _onChange() {
            this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
          }
          /** Handles blur events on the input. */

        }, {
          key: "_onBlur",
          value: function _onBlur() {
            // Reformat the input only if we have a valid value.
            if (this.value) {
              this._formatValue(this.value);
            }

            this._onTouched();
          }
          /** Formats a value and sets it on the input element. */

        }, {
          key: "_formatValue",
          value: function _formatValue(value) {
            this._elementRef.nativeElement.value = value ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : '';
          }
          /**
           * @param obj The object to check.
           * @returns The given object if it is both a date instance and valid, otherwise null.
           */

        }, {
          key: "_getValidDateOrNull",
          value: function _getValidDateOrNull(obj) {
            return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
          }
          /** Assigns a value to the model. */

        }, {
          key: "_assignValue",
          value: function _assignValue(value) {
            // We may get some incoming values before the model was
            // assigned. Save the value so that we can assign it later.
            if (this._model) {
              this._assignValueToModel(value);

              this._pendingValue = null;
            } else {
              this._pendingValue = value;
            }
          }
          /** Whether a value is considered valid. */

        }, {
          key: "_isValidValue",
          value: function _isValidValue(value) {
            return !value || this._dateAdapter.isValid(value);
          }
          /**
           * Checks whether a parent control is disabled. This is in place so that it can be overridden
           * by inputs extending this one which can be placed inside of a group that can be disabled.
           */

        }, {
          key: "_parentDisabled",
          value: function _parentDisabled() {
            return false;
          }
        }, {
          key: "value",
          get: function get() {
            return this._model ? this._getValueFromModel(this._model.selection) : this._pendingValue;
          },
          set: function set(value) {
            value = this._dateAdapter.deserialize(value);
            this._lastValueValid = this._isValidValue(value);
            value = this._getValidDateOrNull(value);
            var oldDate = this.value;

            this._assignValue(value);

            this._formatValue(value);

            if (!this._dateAdapter.sameDate(oldDate, value)) {
              this._valueChange.emit(value);
            }
          }
          /** Whether the datepicker-input is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return !!this._disabled || this._parentDisabled();
          },
          set: function set(value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);
            var element = this._elementRef.nativeElement;

            if (this._disabled !== newValue) {
              this._disabled = newValue;

              this._stateChanges.next(undefined);
            } // We need to null check the `blur` method, because it's undefined during SSR.
            // In Ivy static bindings are invoked earlier, before the element is attached to the DOM.
            // This can cause an error to be thrown in some browsers (IE/Edge) which assert that the
            // element has been inserted.


            if (newValue && this._isInitialized && element.blur) {
              // Normally, native input elements automatically blur if they turn disabled. This behavior
              // is problematic, because it would mean that it triggers another change detection cycle,
              // which then causes a changed after checked error if the input element was focused before.
              element.blur();
            }
          }
        }]);

        return MatDatepickerInputBase;
      }();

      MatDatepickerInputBase.ɵfac = function MatDatepickerInputBase_Factory(t) {
        return new (t || MatDatepickerInputBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8));
      };

      MatDatepickerInputBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatDatepickerInputBase,
        inputs: {
          value: "value",
          disabled: "disabled"
        },
        outputs: {
          dateChange: "dateChange",
          dateInput: "dateInput"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
      });

      MatDatepickerInputBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
          }]
        }];
      };

      MatDatepickerInputBase.propDecorators = {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        dateInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerInputBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }]
          }];
        }, {
          dateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          dateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** @docs-private */


      var MAT_DATEPICKER_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
          return MatDatepickerInput;
        }),
        multi: true
      };
      /** @docs-private */

      var MAT_DATEPICKER_VALIDATORS = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
          return MatDatepickerInput;
        }),
        multi: true
      };
      /** Directive used to connect an input to a MatDatepicker. */

      var MatDatepickerInput = /*#__PURE__*/function (_MatDatepickerInputBa) {
        _inherits(MatDatepickerInput, _MatDatepickerInputBa);

        var _super7 = _createSuper(MatDatepickerInput);

        function MatDatepickerInput(elementRef, dateAdapter, dateFormats, _formField) {
          var _thisSuper, _this20;

          _classCallCheck(this, MatDatepickerInput);

          _this20 = _super7.call(this, elementRef, dateAdapter, dateFormats);
          _this20._formField = _formField;
          _this20._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].compose(_get((_thisSuper = _assertThisInitialized(_this20), _getPrototypeOf(MatDatepickerInput.prototype)), "_getValidators", _thisSuper).call(_thisSuper));
          return _this20;
        }
        /** The datepicker that this input is associated with. */


        _createClass(MatDatepickerInput, [{
          key: "getConnectedOverlayOrigin",

          /**
           * Gets the element that the datepicker popup should be connected to.
           * @return The element to connect the popup to.
           */
          value: function getConnectedOverlayOrigin() {
            return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
          }
          /** Returns the palette used by the input's form field, if any. */

        }, {
          key: "getThemePalette",
          value: function getThemePalette() {
            return this._formField ? this._formField.color : undefined;
          }
          /** Gets the value at which the calendar should start. */

        }, {
          key: "getStartValue",
          value: function getStartValue() {
            return this.value;
          }
          /**
           * @deprecated
           * @breaking-change 8.0.0 Use `getConnectedOverlayOrigin` instead
           */

        }, {
          key: "getPopupConnectionElementRef",
          value: function getPopupConnectionElementRef() {
            return this.getConnectedOverlayOrigin();
          }
          /** Opens the associated datepicker. */

        }, {
          key: "_openPopup",
          value: function _openPopup() {
            if (this._datepicker) {
              this._datepicker.open();
            }
          }
        }, {
          key: "_getValueFromModel",
          value: function _getValueFromModel(modelValue) {
            return modelValue;
          }
        }, {
          key: "_assignValueToModel",
          value: function _assignValueToModel(value) {
            if (this._model) {
              this._model.updateSelection(value, this);
            }
          }
          /** Gets the input's minimum date. */

        }, {
          key: "_getMinDate",
          value: function _getMinDate() {
            return this._min;
          }
          /** Gets the input's maximum date. */

        }, {
          key: "_getMaxDate",
          value: function _getMaxDate() {
            return this._max;
          }
          /** Gets the input's date filtering function. */

        }, {
          key: "_getDateFilter",
          value: function _getDateFilter() {
            return this._dateFilter;
          }
        }, {
          key: "_canEmitChangeEvent",
          value: function _canEmitChangeEvent() {
            return true;
          }
        }, {
          key: "matDatepicker",
          set: function set(datepicker) {
            if (datepicker) {
              this._datepicker = datepicker;

              this._registerModel(datepicker._registerInput(this));
            }
          }
          /** The minimum valid date. */

        }, {
          key: "min",
          get: function get() {
            return this._min;
          },
          set: function set(value) {
            this._min = this._getValidDateOrNull(this._dateAdapter.deserialize(value));

            this._validatorOnChange();
          }
          /** The maximum valid date. */

        }, {
          key: "max",
          get: function get() {
            return this._max;
          },
          set: function set(value) {
            this._max = this._getValidDateOrNull(this._dateAdapter.deserialize(value));

            this._validatorOnChange();
          }
          /** Function that can be used to filter out dates within the datepicker. */

        }, {
          key: "dateFilter",
          get: function get() {
            return this._dateFilter;
          },
          set: function set(value) {
            this._dateFilter = value;

            this._validatorOnChange();
          }
        }]);

        return MatDatepickerInput;
      }(MatDatepickerInputBase);

      MatDatepickerInput.ɵfac = function MatDatepickerInput_Factory(t) {
        return new (t || MatDatepickerInput)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MAT_FORM_FIELD"], 8));
      };

      MatDatepickerInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatDatepickerInput,
        selectors: [["input", "matDatepicker", ""]],
        hostVars: 5,
        hostBindings: function MatDatepickerInput_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function MatDatepickerInput_input_HostBindingHandler($event) {
              return ctx._onInput($event.target.value);
            })("change", function MatDatepickerInput_change_HostBindingHandler() {
              return ctx._onChange();
            })("blur", function MatDatepickerInput_blur_HostBindingHandler() {
              return ctx._onBlur();
            })("keydown", function MatDatepickerInput_keydown_HostBindingHandler($event) {
              return ctx._onKeydown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵhostProperty"]("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-haspopup", ctx._datepicker ? "dialog" : null)("aria-owns", (ctx._datepicker == null ? null : ctx._datepicker.opened) && ctx._datepicker.id || null)("min", ctx.min ? ctx._dateAdapter.toIso8601(ctx.min) : null)("max", ctx.max ? ctx._dateAdapter.toIso8601(ctx.max) : null);
          }
        },
        inputs: {
          matDatepicker: "matDatepicker",
          min: "min",
          max: "max",
          dateFilter: ["matDatepickerFilter", "dateFilter"]
        },
        exportAs: ["matDatepickerInput"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, {
          provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MAT_INPUT_VALUE_ACCESSOR"],
          useExisting: MatDatepickerInput
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      MatDatepickerInput.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
          }]
        }, {
          type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MAT_FORM_FIELD"]]
          }]
        }];
      };

      MatDatepickerInput.propDecorators = {
        matDatepicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['matDatepickerFilter']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerInput, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: 'input[matDatepicker]',
            providers: [MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, {
              provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MAT_INPUT_VALUE_ACCESSOR"],
              useExisting: MatDatepickerInput
            }],
            host: {
              '[attr.aria-haspopup]': '_datepicker ? "dialog" : null',
              '[attr.aria-owns]': '(_datepicker?.opened && _datepicker.id) || null',
              '[attr.min]': 'min ? _dateAdapter.toIso8601(min) : null',
              '[attr.max]': 'max ? _dateAdapter.toIso8601(max) : null',
              '[disabled]': 'disabled',
              '(input)': '_onInput($event.target.value)',
              '(change)': '_onChange()',
              '(blur)': '_onBlur()',
              '(keydown)': '_onKeydown($event)'
            },
            exportAs: 'matDatepickerInput'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }]
          }, {
            type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MAT_FORM_FIELD"]]
            }]
          }];
        }, {
          matDatepicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['matDatepickerFilter']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Can be used to override the icon of a `matDatepickerToggle`. */


      var MatDatepickerToggleIcon = function MatDatepickerToggleIcon() {
        _classCallCheck(this, MatDatepickerToggleIcon);
      };

      MatDatepickerToggleIcon.ɵfac = function MatDatepickerToggleIcon_Factory(t) {
        return new (t || MatDatepickerToggleIcon)();
      };

      MatDatepickerToggleIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatDatepickerToggleIcon,
        selectors: [["", "matDatepickerToggleIcon", ""]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerToggleIcon, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: '[matDatepickerToggleIcon]'
          }]
        }], null, null);
      })();

      var MatDatepickerToggle = /*#__PURE__*/function () {
        function MatDatepickerToggle(_intl, _changeDetectorRef, defaultTabIndex) {
          _classCallCheck(this, MatDatepickerToggle);

          this._intl = _intl;
          this._changeDetectorRef = _changeDetectorRef;
          this._stateChanges = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          var parsedTabIndex = Number(defaultTabIndex);
          this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
        }
        /** Whether the toggle button is disabled. */


        _createClass(MatDatepickerToggle, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes['datepicker']) {
              this._watchStateChanges();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.unsubscribe();
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this._watchStateChanges();
          }
        }, {
          key: "_open",
          value: function _open(event) {
            if (this.datepicker && !this.disabled) {
              this.datepicker.open();
              event.stopPropagation();
            }
          }
        }, {
          key: "_watchStateChanges",
          value: function _watchStateChanges() {
            var _this21 = this;

            var datepickerStateChanged = this.datepicker ? this.datepicker._stateChanges : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])();
            var inputStateChanged = this.datepicker && this.datepicker._datepickerInput ? this.datepicker._datepickerInput._stateChanges : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])();
            var datepickerToggled = this.datepicker ? Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this.datepicker.openedStream, this.datepicker.closedStream) : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])();

            this._stateChanges.unsubscribe();

            this._stateChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this._intl.changes, datepickerStateChanged, inputStateChanged, datepickerToggled).subscribe(function () {
              return _this21._changeDetectorRef.markForCheck();
            });
          }
        }, {
          key: "disabled",
          get: function get() {
            if (this._disabled === undefined && this.datepicker) {
              return this.datepicker.disabled;
            }

            return !!this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);
          }
        }]);

        return MatDatepickerToggle;
      }();

      MatDatepickerToggle.ɵfac = function MatDatepickerToggle_Factory(t) {
        return new (t || MatDatepickerToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinjectAttribute"]('tabindex'));
      };

      MatDatepickerToggle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatDatepickerToggle,
        selectors: [["mat-datepicker-toggle"]],
        contentQueries: function MatDatepickerToggle_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatDatepickerToggleIcon, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._customIcon = _t.first);
          }
        },
        viewQuery: function MatDatepickerToggle_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._button = _t.first);
          }
        },
        hostAttrs: [1, "mat-datepicker-toggle"],
        hostVars: 7,
        hostBindings: function MatDatepickerToggle_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("focus", function MatDatepickerToggle_focus_HostBindingHandler() {
              return ctx._button.focus();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("tabindex", ctx.disabled ? null : 0 - 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-datepicker-toggle-active", ctx.datepicker && ctx.datepicker.opened)("mat-accent", ctx.datepicker && ctx.datepicker.color === "accent")("mat-warn", ctx.datepicker && ctx.datepicker.color === "warn");
          }
        },
        inputs: {
          tabIndex: "tabIndex",
          disabled: "disabled",
          datepicker: ["for", "datepicker"],
          disableRipple: "disableRipple"
        },
        exportAs: ["matDatepickerToggle"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c4,
        decls: 4,
        vars: 6,
        consts: [["mat-icon-button", "", "type", "button", 3, "disabled", "disableRipple", "click"], ["button", ""], ["class", "mat-datepicker-toggle-default-icon", "viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 4, "ngIf"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 1, "mat-datepicker-toggle-default-icon"], ["d", "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],
        template: function MatDatepickerToggle_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"](_c3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatDatepickerToggle_Template_button_click_0_listener($event) {
              return ctx._open($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatDatepickerToggle__svg_svg_2_Template, 2, 0, "svg", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disabled)("disableRipple", ctx.disableRipple);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-haspopup", ctx.datepicker ? "dialog" : null)("aria-label", ctx._intl.openCalendarLabel)("tabindex", ctx.disabled ? 0 - 1 : ctx.tabIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx._customIcon);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-datepicker-toggle-default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-datepicker-toggle-default-icon{margin:auto}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatDatepickerToggle.ctorParameters = function () {
        return [{
          type: MatDatepickerIntl
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
            args: ['tabindex']
          }]
        }];
      };

      MatDatepickerToggle.propDecorators = {
        datepicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['for']
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        _customIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: [MatDatepickerToggleIcon]
        }],
        _button: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['button']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerToggle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-datepicker-toggle',
            template: "<button\n  #button\n  mat-icon-button\n  type=\"button\"\n  [attr.aria-haspopup]=\"datepicker ? 'dialog' : null\"\n  [attr.aria-label]=\"_intl.openCalendarLabel\"\n  [attr.tabindex]=\"disabled ? -1 : tabIndex\"\n  [disabled]=\"disabled\"\n  [disableRipple]=\"disableRipple\"\n  (click)=\"_open($event)\">\n\n  <svg\n    *ngIf=\"!_customIcon\"\n    class=\"mat-datepicker-toggle-default-icon\"\n    viewBox=\"0 0 24 24\"\n    width=\"24px\"\n    height=\"24px\"\n    fill=\"currentColor\"\n    focusable=\"false\">\n    <path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"/>\n  </svg>\n\n  <ng-content select=\"[matDatepickerToggleIcon]\"></ng-content>\n</button>\n",
            host: {
              'class': 'mat-datepicker-toggle',
              // Always set the tabindex to -1 so that it doesn't overlap with any custom tabindex the
              // consumer may have provided, while still being able to receive focus.
              '[attr.tabindex]': 'disabled ? null : -1',
              '[class.mat-datepicker-toggle-active]': 'datepicker && datepicker.opened',
              '[class.mat-accent]': 'datepicker && datepicker.color === "accent"',
              '[class.mat-warn]': 'datepicker && datepicker.color === "warn"',
              '(focus)': '_button.focus()'
            },
            exportAs: 'matDatepickerToggle',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-datepicker-toggle-default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-datepicker-toggle-default-icon{margin:auto}\n"]
          }]
        }], function () {
          return [{
            type: MatDatepickerIntl
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
              args: ['tabindex']
            }]
          }];
        }, {
          tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          datepicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['for']
          }],
          disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          _customIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
            args: [MatDatepickerToggleIcon]
          }],
          _button: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['button']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Used to provide the date range input wrapper component
       * to the parts without circular dependencies.
       */


      var MAT_DATE_RANGE_INPUT_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MAT_DATE_RANGE_INPUT_PARENT');
      /**
       * Base class for the individual inputs that can be projected inside a `mat-date-range-input`.
       */

      var MatDateRangeInputPartBase = /*#__PURE__*/function (_MatDatepickerInputBa2) {
        _inherits(MatDateRangeInputPartBase, _MatDatepickerInputBa2);

        var _super8 = _createSuper(MatDateRangeInputPartBase);

        function MatDateRangeInputPartBase(_rangeInput, elementRef, _defaultErrorStateMatcher, _injector, _parentForm, _parentFormGroup, dateAdapter, dateFormats) {
          var _this22;

          _classCallCheck(this, MatDateRangeInputPartBase);

          _this22 = _super8.call(this, elementRef, dateAdapter, dateFormats);
          _this22._rangeInput = _rangeInput;
          _this22._defaultErrorStateMatcher = _defaultErrorStateMatcher;
          _this22._injector = _injector;
          _this22._parentForm = _parentForm;
          _this22._parentFormGroup = _parentFormGroup;

          _this22._outsideValueChanged = function () {
            // Whenever the value changes outside the input we need to revalidate, because
            // the validation state of each of the inputs depends on the other one.
            _this22._validatorOnChange();
          };

          return _this22;
        }

        _createClass(MatDateRangeInputPartBase, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // We need the date input to provide itself as a `ControlValueAccessor` and a `Validator`, while
            // injecting its `NgControl` so that the error state is handled correctly. This introduces a
            // circular dependency, because both `ControlValueAccessor` and `Validator` depend on the input
            // itself. Usually we can work around it for the CVA, but there's no API to do it for the
            // validator. We work around it here by injecting the `NgControl` in `ngOnInit`, after
            // everything has been resolved.
            var ngControl = this._injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControl"], null, _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectFlags"].Self);

            if (ngControl) {
              this.ngControl = ngControl;
            }
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.ngControl) {
              // We need to re-evaluate this on every change detection cycle, because there are some
              // error triggers that we can't subscribe to (e.g. parent form submissions). This means
              // that whatever logic is in here has to be super lean or we risk destroying the performance.
              this.updateErrorState();
            }
          }
          /** Gets whether the input is empty. */

        }, {
          key: "isEmpty",
          value: function isEmpty() {
            return this._elementRef.nativeElement.value.length === 0;
          }
          /** Gets the placeholder of the input. */

        }, {
          key: "_getPlaceholder",
          value: function _getPlaceholder() {
            return this._elementRef.nativeElement.placeholder;
          }
          /** Focuses the input. */

        }, {
          key: "focus",
          value: function focus() {
            this._elementRef.nativeElement.focus();
          }
          /** Handles `input` events on the input element. */

        }, {
          key: "_onInput",
          value: function _onInput(value) {
            _get(_getPrototypeOf(MatDateRangeInputPartBase.prototype), "_onInput", this).call(this, value);

            this._rangeInput._handleChildValueChange();
          }
          /** Opens the datepicker associated with the input. */

        }, {
          key: "_openPopup",
          value: function _openPopup() {
            this._rangeInput._openDatepicker();
          }
          /** Gets the minimum date from the range input. */

        }, {
          key: "_getMinDate",
          value: function _getMinDate() {
            return this._rangeInput.min;
          }
          /** Gets the maximum date from the range input. */

        }, {
          key: "_getMaxDate",
          value: function _getMaxDate() {
            return this._rangeInput.max;
          }
          /** Gets the date filter function from the range input. */

        }, {
          key: "_getDateFilter",
          value: function _getDateFilter() {
            return this._rangeInput.dateFilter;
          }
        }, {
          key: "_parentDisabled",
          value: function _parentDisabled() {
            return this._rangeInput._groupDisabled;
          }
        }]);

        return MatDateRangeInputPartBase;
      }(MatDatepickerInputBase);

      MatDateRangeInputPartBase.ɵfac = function MatDateRangeInputPartBase_Factory(t) {
        return new (t || MatDateRangeInputPartBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8));
      };

      MatDateRangeInputPartBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatDateRangeInputPartBase,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      MatDateRangeInputPartBase.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_DATE_RANGE_INPUT_PARENT]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDateRangeInputPartBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [MAT_DATE_RANGE_INPUT_PARENT]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }]
          }];
        }, null);
      })();

      var _MatDateRangeInputBase = // Needs to be `as any`, because the base class is abstract.
      Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinErrorState"])(MatDateRangeInputPartBase);
      /** Input for entering the start date in a `mat-date-range-input`. */


      var MatStartDate = /*#__PURE__*/function (_MatDateRangeInputBas) {
        _inherits(MatStartDate, _MatDateRangeInputBas);

        var _super9 = _createSuper(MatStartDate);

        function MatStartDate(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
          var _thisSuper2, _this23;

          _classCallCheck(this, MatStartDate);

          // TODO(crisbeto): this constructor shouldn't be necessary, but ViewEngine doesn't seem to
          // handle DI correctly when it is inherited from `MatDateRangeInputPartBase`. We can drop this
          // constructor once ViewEngine is removed.
          _this23 = _super9.call(this, rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
          /** Validator that checks that the start date isn't after the end date. */

          _this23._startValidator = function (control) {
            var start = _this23._getValidDateOrNull(_this23._dateAdapter.deserialize(control.value));

            var end = _this23._model ? _this23._model.selection.end : null;
            return !start || !end || _this23._dateAdapter.compareDate(start, end) <= 0 ? null : {
              'matStartDateInvalid': {
                'end': end,
                'actual': start
              }
            };
          };

          _this23._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].compose([].concat(_toConsumableArray(_get((_thisSuper2 = _assertThisInitialized(_this23), _getPrototypeOf(MatStartDate.prototype)), "_getValidators", _thisSuper2).call(_thisSuper2)), [_this23._startValidator]));

          _this23._canEmitChangeEvent = function (event) {
            return event.source !== _this23._rangeInput._endInput;
          };

          return _this23;
        }

        _createClass(MatStartDate, [{
          key: "_getValueFromModel",
          value: function _getValueFromModel(modelValue) {
            return modelValue.start;
          }
        }, {
          key: "_assignValueToModel",
          value: function _assignValueToModel(value) {
            if (this._model) {
              var range = new DateRange(value, this._model.selection.end);

              this._model.updateSelection(range, this);

              this._cvaOnChange(value);
            }
          }
        }, {
          key: "_formatValue",
          value: function _formatValue(value) {
            _get(_getPrototypeOf(MatStartDate.prototype), "_formatValue", this).call(this, value); // Any time the input value is reformatted we need to tell the parent.


            this._rangeInput._handleChildValueChange();
          }
          /** Gets the value that should be used when mirroring the input's size. */

        }, {
          key: "getMirrorValue",
          value: function getMirrorValue() {
            var element = this._elementRef.nativeElement;
            var value = element.value;
            return value.length > 0 ? value : element.placeholder;
          }
        }]);

        return MatStartDate;
      }(_MatDateRangeInputBase);

      MatStartDate.ɵfac = function MatStartDate_Factory(t) {
        return new (t || MatStartDate)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8));
      };

      MatStartDate.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatStartDate,
        selectors: [["input", "matStartDate", ""]],
        hostAttrs: ["type", "text", 1, "mat-date-range-input-inner"],
        hostVars: 6,
        hostBindings: function MatStartDate_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function MatStartDate_input_HostBindingHandler($event) {
              return ctx._onInput($event.target.value);
            })("change", function MatStartDate_change_HostBindingHandler() {
              return ctx._onChange();
            })("keydown", function MatStartDate_keydown_HostBindingHandler($event) {
              return ctx._onKeydown($event);
            })("blur", function MatStartDate_blur_HostBindingHandler() {
              return ctx._onBlur();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵhostProperty"]("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("id", ctx._rangeInput.id)("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALUE_ACCESSOR"],
          useExisting: MatStartDate,
          multi: true
        }, {
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALIDATORS"],
          useExisting: MatStartDate,
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      MatStartDate.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_DATE_RANGE_INPUT_PARENT]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatStartDate, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: 'input[matStartDate]',
            host: {
              'class': 'mat-date-range-input-inner',
              '[disabled]': 'disabled',
              '(input)': '_onInput($event.target.value)',
              '(change)': '_onChange()',
              '(keydown)': '_onKeydown($event)',
              '[attr.id]': '_rangeInput.id',
              '[attr.aria-haspopup]': '_rangeInput.rangePicker ? "dialog" : null',
              '[attr.aria-owns]': '(_rangeInput.rangePicker?.opened && _rangeInput.rangePicker.id) || null',
              '[attr.min]': '_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()) : null',
              '[attr.max]': '_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()) : null',
              '(blur)': '_onBlur()',
              'type': 'text'
            },
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALUE_ACCESSOR"],
              useExisting: MatStartDate,
              multi: true
            }, {
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALIDATORS"],
              useExisting: MatStartDate,
              multi: true
            }]
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [MAT_DATE_RANGE_INPUT_PARENT]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }]
          }];
        }, null);
      })();
      /** Input for entering the end date in a `mat-date-range-input`. */


      var MatEndDate = /*#__PURE__*/function (_MatDateRangeInputBas2) {
        _inherits(MatEndDate, _MatDateRangeInputBas2);

        var _super10 = _createSuper(MatEndDate);

        function MatEndDate(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
          var _thisSuper3, _this24;

          _classCallCheck(this, MatEndDate);

          // TODO(crisbeto): this constructor shouldn't be necessary, but ViewEngine doesn't seem to
          // handle DI correctly when it is inherited from `MatDateRangeInputPartBase`. We can drop this
          // constructor once ViewEngine is removed.
          _this24 = _super10.call(this, rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
          /** Validator that checks that the end date isn't before the start date. */

          _this24._endValidator = function (control) {
            var end = _this24._getValidDateOrNull(_this24._dateAdapter.deserialize(control.value));

            var start = _this24._model ? _this24._model.selection.start : null;
            return !end || !start || _this24._dateAdapter.compareDate(end, start) >= 0 ? null : {
              'matEndDateInvalid': {
                'start': start,
                'actual': end
              }
            };
          };

          _this24._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].compose([].concat(_toConsumableArray(_get((_thisSuper3 = _assertThisInitialized(_this24), _getPrototypeOf(MatEndDate.prototype)), "_getValidators", _thisSuper3).call(_thisSuper3)), [_this24._endValidator]));

          _this24._canEmitChangeEvent = function (event) {
            return event.source !== _this24._rangeInput._startInput;
          };

          return _this24;
        }

        _createClass(MatEndDate, [{
          key: "_getValueFromModel",
          value: function _getValueFromModel(modelValue) {
            return modelValue.end;
          }
        }, {
          key: "_assignValueToModel",
          value: function _assignValueToModel(value) {
            if (this._model) {
              var range = new DateRange(this._model.selection.start, value);

              this._model.updateSelection(range, this);

              this._cvaOnChange(value);
            }
          }
        }, {
          key: "_onKeydown",
          value: function _onKeydown(event) {
            // If the user is pressing backspace on an empty end input, move focus back to the start.
            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["BACKSPACE"] && !this._elementRef.nativeElement.value) {
              this._rangeInput._startInput.focus();
            }

            _get(_getPrototypeOf(MatEndDate.prototype), "_onKeydown", this).call(this, event);
          }
        }]);

        return MatEndDate;
      }(_MatDateRangeInputBase);

      MatEndDate.ɵfac = function MatEndDate_Factory(t) {
        return new (t || MatEndDate)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8));
      };

      MatEndDate.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: MatEndDate,
        selectors: [["input", "matEndDate", ""]],
        hostAttrs: ["type", "text", 1, "mat-date-range-input-inner"],
        hostVars: 5,
        hostBindings: function MatEndDate_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function MatEndDate_input_HostBindingHandler($event) {
              return ctx._onInput($event.target.value);
            })("change", function MatEndDate_change_HostBindingHandler() {
              return ctx._onChange();
            })("keydown", function MatEndDate_keydown_HostBindingHandler($event) {
              return ctx._onKeydown($event);
            })("blur", function MatEndDate_blur_HostBindingHandler() {
              return ctx._onBlur();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵhostProperty"]("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALUE_ACCESSOR"],
          useExisting: MatEndDate,
          multi: true
        }, {
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALIDATORS"],
          useExisting: MatEndDate,
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
      });

      MatEndDate.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_DATE_RANGE_INPUT_PARENT]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatEndDate, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: 'input[matEndDate]',
            host: {
              'class': 'mat-date-range-input-inner',
              '[disabled]': 'disabled',
              '(input)': '_onInput($event.target.value)',
              '(change)': '_onChange()',
              '(keydown)': '_onKeydown($event)',
              '[attr.aria-haspopup]': '_rangeInput.rangePicker ? "dialog" : null',
              '[attr.aria-owns]': '(_rangeInput.rangePicker?.opened && _rangeInput.rangePicker.id) || null',
              '[attr.min]': '_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()) : null',
              '[attr.max]': '_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()) : null',
              '(blur)': '_onBlur()',
              'type': 'text'
            },
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALUE_ACCESSOR"],
              useExisting: MatEndDate,
              multi: true
            }, {
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALIDATORS"],
              useExisting: MatEndDate,
              multi: true
            }]
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [MAT_DATE_RANGE_INPUT_PARENT]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
      // template reference variables (e.g. #d vs #d="matDateRangePicker"). We can change this to a
      // directive if angular adds support for `exportAs: '$implicit'` on directives.

      /** Component responsible for managing the date range picker popup/dialog. */


      var MatDateRangePicker = /*#__PURE__*/function (_MatDatepickerBase2) {
        _inherits(MatDateRangePicker, _MatDatepickerBase2);

        var _super11 = _createSuper(MatDateRangePicker);

        function MatDateRangePicker() {
          _classCallCheck(this, MatDateRangePicker);

          return _super11.apply(this, arguments);
        }

        _createClass(MatDateRangePicker, [{
          key: "_forwardContentValues",
          value: function _forwardContentValues(instance) {
            _get(_getPrototypeOf(MatDateRangePicker.prototype), "_forwardContentValues", this).call(this, instance);

            var input = this._datepickerInput;

            if (input) {
              instance.comparisonStart = input.comparisonStart;
              instance.comparisonEnd = input.comparisonEnd;
            }
          }
        }]);

        return MatDateRangePicker;
      }(MatDatepickerBase);

      MatDateRangePicker.ɵfac = function MatDateRangePicker_Factory(t) {
        return ɵMatDateRangePicker_BaseFactory(t || MatDateRangePicker);
      };

      MatDateRangePicker.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatDateRangePicker,
        selectors: [["mat-date-range-picker"]],
        exportAs: ["matDateRangePicker"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
        decls: 0,
        vars: 0,
        template: function MatDateRangePicker_Template(rf, ctx) {},
        encapsulation: 2,
        changeDetection: 0
      });

      var ɵMatDateRangePicker_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](MatDateRangePicker);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDateRangePicker, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-date-range-picker',
            template: '',
            exportAs: 'matDateRangePicker',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            providers: [MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var nextUniqueId = 0;

      var MatDateRangeInput = /*#__PURE__*/function () {
        function MatDateRangeInput(_changeDetectorRef, _elementRef, control, _dateAdapter, _formField) {
          _classCallCheck(this, MatDateRangeInput);

          this._changeDetectorRef = _changeDetectorRef;
          this._elementRef = _elementRef;
          this._dateAdapter = _dateAdapter;
          this._formField = _formField;
          /** Emits when the input's state has changed. */

          this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          /** Unique ID for the input. */

          this.id = "mat-date-range-input-".concat(nextUniqueId++);
          /** Whether the control is focused. */

          this.focused = false;
          /** Name of the form control. */

          this.controlType = 'mat-date-range-input';
          this._groupDisabled = false;
          /** Value for the `aria-describedby` attribute of the inputs. */

          this._ariaDescribedBy = null;
          /** Separator text to be shown between the inputs. */

          this.separator = '–';
          /** Start of the comparison range that should be shown in the calendar. */

          this.comparisonStart = null;
          /** End of the comparison range that should be shown in the calendar. */

          this.comparisonEnd = null;
          /** Emits when the input's state changes. */

          this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();

          if (!_dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
          } // TODO(crisbeto): remove `as any` after #18206 lands.


          this.ngControl = control;
        }
        /** Current value of the range input. */


        _createClass(MatDateRangeInput, [{
          key: "setDescribedByIds",

          /**
           * Implemented as a part of `MatFormFieldControl`.
           * @docs-private
           */
          value: function setDescribedByIds(ids) {
            this._ariaDescribedBy = ids.length ? ids.join(' ') : null;
          }
          /**
           * Implemented as a part of `MatFormFieldControl`.
           * @docs-private
           */

        }, {
          key: "onContainerClick",
          value: function onContainerClick() {
            if (!this.focused && !this.disabled) {
              if (!this._model || !this._model.selection.start) {
                this._startInput.focus();
              } else {
                this._endInput.focus();
              }
            }
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this25 = this;

            if (!this._startInput) {
              throw Error('mat-date-range-input must contain a matStartDate input');
            }

            if (!this._endInput) {
              throw Error('mat-date-range-input must contain a matEndDate input');
            }

            if (this._model) {
              this._registerModel(this._model);
            } // We don't need to unsubscribe from this, because we
            // know that the input streams will be completed on destroy.


            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this._startInput.stateChanges, this._endInput.stateChanges).subscribe(function () {
              _this25._stateChanges.next(undefined);
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this._stateChanges.next(undefined);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.stateChanges.complete();

            this._stateChanges.unsubscribe();
          }
          /** Gets the date at which the calendar should start. */

        }, {
          key: "getStartValue",
          value: function getStartValue() {
            return this.value ? this.value.start : null;
          }
          /** Gets the input's theme palette. */

        }, {
          key: "getThemePalette",
          value: function getThemePalette() {
            return this._formField ? this._formField.color : undefined;
          }
          /** Gets the element to which the calendar overlay should be attached. */

        }, {
          key: "getConnectedOverlayOrigin",
          value: function getConnectedOverlayOrigin() {
            return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
          }
          /** Gets the value that is used to mirror the state input. */

        }, {
          key: "_getInputMirrorValue",
          value: function _getInputMirrorValue() {
            return this._startInput ? this._startInput.getMirrorValue() : '';
          }
          /** Whether the input placeholders should be hidden. */

        }, {
          key: "_shouldHidePlaceholders",
          value: function _shouldHidePlaceholders() {
            return this._startInput ? !this._startInput.isEmpty() : false;
          }
          /** Handles the value in one of the child inputs changing. */

        }, {
          key: "_handleChildValueChange",
          value: function _handleChildValueChange() {
            this.stateChanges.next(undefined);

            this._changeDetectorRef.markForCheck();
          }
          /** Opens the date range picker associated with the input. */

        }, {
          key: "_openDatepicker",
          value: function _openDatepicker() {
            if (this._rangePicker) {
              this._rangePicker.open();
            }
          }
          /** Whether the separate text should be hidden. */

        }, {
          key: "_shouldHideSeparator",
          value: function _shouldHideSeparator() {
            return (!this._formField || this._formField._hideControlPlaceholder()) && this.empty;
          }
          /** Gets the value for the `aria-labelledby` attribute of the inputs. */

        }, {
          key: "_getAriaLabelledby",
          value: function _getAriaLabelledby() {
            var formField = this._formField;
            return formField && formField._hasFloatingLabel() ? formField._labelId : null;
          }
          /**
           * @param obj The object to check.
           * @returns The given object if it is both a date instance and valid, otherwise null.
           */

        }, {
          key: "_getValidDateOrNull",
          value: function _getValidDateOrNull(obj) {
            return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
          }
          /** Re-runs the validators on the start/end inputs. */

        }, {
          key: "_revalidate",
          value: function _revalidate() {
            if (this._startInput) {
              this._startInput._validatorOnChange();
            }

            if (this._endInput) {
              this._endInput._validatorOnChange();
            }
          }
          /** Registers the current date selection model with the start/end inputs. */

        }, {
          key: "_registerModel",
          value: function _registerModel(model) {
            if (this._startInput) {
              this._startInput._registerModel(model);
            }

            if (this._endInput) {
              this._endInput._registerModel(model);
            }
          }
        }, {
          key: "value",
          get: function get() {
            return this._model ? this._model.selection : null;
          }
          /** Whether the control's label should float. */

        }, {
          key: "shouldLabelFloat",
          get: function get() {
            return this.focused || !this.empty;
          }
          /**
           * Implemented as a part of `MatFormFieldControl`.
           * Set the placeholder attribute on `matStartDate` and `matEndDate`.
           * @docs-private
           */

        }, {
          key: "placeholder",
          get: function get() {
            var _a, _b;

            var start = ((_a = this._startInput) === null || _a === void 0 ? void 0 : _a._getPlaceholder()) || '';
            var end = ((_b = this._endInput) === null || _b === void 0 ? void 0 : _b._getPlaceholder()) || '';
            return start || end ? "".concat(start, " ").concat(this.separator, " ").concat(end) : '';
          }
          /** The range picker that this input is associated with. */

        }, {
          key: "rangePicker",
          get: function get() {
            return this._rangePicker;
          },
          set: function set(rangePicker) {
            if (rangePicker) {
              this._model = rangePicker._registerInput(this);
              this._rangePicker = rangePicker;

              this._registerModel(this._model);
            }
          }
          /** Whether the input is required. */

        }, {
          key: "required",
          get: function get() {
            return !!this._required;
          },
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);
          }
          /** Function that can be used to filter out dates within the date range picker. */

        }, {
          key: "dateFilter",
          get: function get() {
            return this._dateFilter;
          },
          set: function set(value) {
            this._dateFilter = value;

            this._revalidate();
          }
          /** The minimum valid date. */

        }, {
          key: "min",
          get: function get() {
            return this._min;
          },
          set: function set(value) {
            this._min = this._getValidDateOrNull(this._dateAdapter.deserialize(value));

            this._revalidate();
          }
          /** The maximum valid date. */

        }, {
          key: "max",
          get: function get() {
            return this._max;
          },
          set: function set(value) {
            this._max = this._getValidDateOrNull(this._dateAdapter.deserialize(value));

            this._revalidate();
          }
          /** Whether the input is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._startInput && this._endInput ? this._startInput.disabled && this._endInput.disabled : this._groupDisabled;
          },
          set: function set(value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);

            if (newValue !== this._groupDisabled) {
              this._groupDisabled = newValue;

              this._stateChanges.next(undefined);
            }
          }
          /** Whether the input is in an error state. */

        }, {
          key: "errorState",
          get: function get() {
            if (this._startInput && this._endInput) {
              return this._startInput.errorState || this._endInput.errorState;
            }

            return false;
          }
          /** Whether the datepicker input is empty. */

        }, {
          key: "empty",
          get: function get() {
            var startEmpty = this._startInput ? this._startInput.isEmpty() : false;
            var endEmpty = this._endInput ? this._endInput.isEmpty() : false;
            return startEmpty && endEmpty;
          }
        }]);

        return MatDateRangeInput;
      }();

      MatDateRangeInput.ɵfac = function MatDateRangeInput_Factory(t) {
        return new (t || MatDateRangeInput)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["ControlContainer"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MAT_FORM_FIELD"], 8));
      };

      MatDateRangeInput.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MatDateRangeInput,
        selectors: [["mat-date-range-input"]],
        contentQueries: function MatDateRangeInput_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatStartDate, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatEndDate, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._startInput = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._endInput = _t.first);
          }
        },
        hostAttrs: ["role", "group", 1, "mat-date-range-input"],
        hostVars: 5,
        hostBindings: function MatDateRangeInput_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("id", null)("aria-labelledby", ctx._getAriaLabelledby())("aria-describedby", ctx._ariaDescribedBy);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-date-range-input-hide-placeholders", ctx._shouldHidePlaceholders());
          }
        },
        inputs: {
          separator: "separator",
          comparisonStart: "comparisonStart",
          comparisonEnd: "comparisonEnd",
          rangePicker: "rangePicker",
          required: "required",
          dateFilter: "dateFilter",
          min: "min",
          max: "max",
          disabled: "disabled"
        },
        exportAs: ["matDateRangeInput"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldControl"],
          useExisting: MatDateRangeInput
        }, {
          provide: MAT_DATE_RANGE_INPUT_PARENT,
          useExisting: MatDateRangeInput
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c6,
        decls: 9,
        vars: 4,
        consts: [["cdkMonitorSubtreeFocus", "", 1, "mat-date-range-input-container", 3, "cdkFocusChange"], [1, "mat-date-range-input-start-wrapper"], ["aria-hidden", "true", 1, "mat-date-range-input-mirror"], [1, "mat-date-range-input-separator"], [1, "mat-date-range-input-end-wrapper"]],
        template: function MatDateRangeInput_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"](_c5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkFocusChange", function MatDateRangeInput_Template_div_cdkFocusChange_0_listener($event) {
              return ctx.focused = $event !== null;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](8, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx._getInputMirrorValue());

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-date-range-input-separator-hidden", ctx._shouldHideSeparator());

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.separator);
          }
        },
        directives: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["CdkMonitorFocus"]],
        styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px}.mat-date-range-input-separator-hidden{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-inner{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%}.mat-date-range-input-inner::-ms-clear,.mat-date-range-input-inner::-ms-reveal{display:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-date-range-input-mirror{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-date-range-input-start-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-start-wrapper .mat-date-range-input-inner{position:absolute;top:0;left:0}.mat-date-range-input-end-wrapper{flex-grow:1;max-width:calc(50% - 4px)}.mat-form-field-type-mat-date-range-input .mat-form-field-infix{width:200px}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatDateRangeInput.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ControlContainer"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Self"]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MAT_FORM_FIELD"]]
          }]
        }];
      };

      MatDateRangeInput.propDecorators = {
        rangePicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        separator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        comparisonStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        comparisonEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        _startInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: [MatStartDate]
        }],
        _endInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: [MatEndDate]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDateRangeInput, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mat-date-range-input',
            template: "<div\n  class=\"mat-date-range-input-container\"\n  cdkMonitorSubtreeFocus\n  (cdkFocusChange)=\"focused = $event !== null\">\n  <div class=\"mat-date-range-input-start-wrapper\">\n    <ng-content select=\"input[matStartDate]\"></ng-content>\n    <span\n      class=\"mat-date-range-input-mirror\"\n      aria-hidden=\"true\">{{_getInputMirrorValue()}}</span>\n  </div>\n\n  <span\n    class=\"mat-date-range-input-separator\"\n    [class.mat-date-range-input-separator-hidden]=\"_shouldHideSeparator()\">{{separator}}</span>\n\n  <div class=\"mat-date-range-input-end-wrapper\">\n    <ng-content select=\"input[matEndDate]\"></ng-content>\n  </div>\n</div>\n\n",
            exportAs: 'matDateRangeInput',
            host: {
              'class': 'mat-date-range-input',
              '[class.mat-date-range-input-hide-placeholders]': '_shouldHidePlaceholders()',
              '[attr.id]': 'null',
              'role': 'group',
              '[attr.aria-labelledby]': '_getAriaLabelledby()',
              '[attr.aria-describedby]': '_ariaDescribedBy'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            providers: [{
              provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldControl"],
              useExisting: MatDateRangeInput
            }, {
              provide: MAT_DATE_RANGE_INPUT_PARENT,
              useExisting: MatDateRangeInput
            }],
            styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px}.mat-date-range-input-separator-hidden{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-inner{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%}.mat-date-range-input-inner::-ms-clear,.mat-date-range-input-inner::-ms-reveal{display:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-date-range-input-mirror{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-date-range-input-start-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-start-wrapper .mat-date-range-input-inner{position:absolute;top:0;left:0}.mat-date-range-input-end-wrapper{flex-grow:1;max-width:calc(50% - 4px)}.mat-form-field-type-mat-date-range-input .mat-form-field-infix{width:200px}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ControlContainer"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Self"]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MAT_FORM_FIELD"]]
            }]
          }];
        }, {
          separator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          comparisonStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          comparisonEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          rangePicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          _startInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
            args: [MatStartDate]
          }],
          _endInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
            args: [MatEndDate]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatDatepickerModule = function MatDatepickerModule() {
        _classCallCheck(this, MatDatepickerModule);
      };

      MatDatepickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: MatDatepickerModule
      });
      MatDatepickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function MatDatepickerModule_Factory(t) {
          return new (t || MatDatepickerModule)();
        },
        providers: [MatDatepickerIntl, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, {
          provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
          useClass: DefaultMatCalendarRangeStrategy
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MatDatepickerModule, {
          declarations: function declarations() {
            return [MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"]];
          },
          exports: function exports() {
            return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"], MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"]],
            exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"], MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker],
            declarations: [MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker],
            providers: [MatDatepickerIntl, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, {
              provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
              useClass: DefaultMatCalendarRangeStrategy
            }],
            entryComponents: [MatDatepickerContent, MatCalendarHeader]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=datepicker.js.map

      /***/

    },

    /***/
    "./src/app/pages/others/analytics/analytics.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/others/analytics/analytics.component.ts ***!
      \***************************************************************/

    /*! exports provided: AnalyticsComponent */

    /***/
    function srcAppPagesOthersAnalyticsAnalyticsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function () {
        return AnalyticsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "./node_modules/@angular/material/fesm2015/datepicker.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng2-charts */
      "./node_modules/ng2-charts/fesm2015/ng2-charts.js");

      var AnalyticsComponent = /*#__PURE__*/function () {
        function AnalyticsComponent() {
          _classCallCheck(this, AnalyticsComponent);

          // This is line chart
          // bar chart
          this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            barThickness: 10
          };
          this.barChartLabels = ['2011', '2012', '2013', '2014', '2015', '2016', '2017'];
          this.barChartType = 'bar';
          this.barChartLegend = true;
          this.barChartData = [{
            data: [65, 59, 80, 81, 56, 55, 40],
            label: 'Total sales'
          }];
          this.barChartColors = [{
            backgroundColor: '#36bea6'
          }, {
            backgroundColor: '#2962FF'
          }];
          this.lineChartLegend = true;
          this.lineChartType = 'line';
        }

        _createClass(AnalyticsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // events

        }, {
          key: "chartClicked",
          value: function chartClicked(e) {// console.log(e);
          }
        }, {
          key: "chartHovered",
          value: function chartHovered(e) {// console.log(e);
          }
        }, {
          key: "randomize",
          value: function randomize() {
            // Only Change 3 values
            var data = [Math.round(Math.random() * 100), 59, 80, Math.random() * 100, 56, Math.random() * 100, 40];
            var clone = JSON.parse(JSON.stringify(this.barChartData));
            clone[0].data = data;
            this.barChartData = clone;
            /**
             * (My guess), for Angular to recognize the change in the dataset
             * it has to change the dataset variable directly,
             * so one way around it, is to clone the data, change it and then
             * assign it;
             */
          }
        }]);

        return AnalyticsComponent;
      }();

      AnalyticsComponent.ɵfac = function AnalyticsComponent_Factory(t) {
        return new (t || AnalyticsComponent)();
      };

      AnalyticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AnalyticsComponent,
        selectors: [["app-analytics"]],
        decls: 36,
        vars: 8,
        consts: [[1, "card"], [1, "card-body"], [1, "row"], [1, "col-md-12", "text-right"], [1, "d-flex", "w-100"], [1, "ml-auto"], [1, "example-form-field", "ml-auto"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date"], ["matEndDate", "", "placeholder", "End date"], ["matSuffix", "", 3, "for"], ["rangePicker", ""], [1, "d-block", "text-right", "ml-2", "mr-2"], ["ngbDropdown", "", 1, "d-inline-block"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [1, "dropdown-item"], ["ngbDropdownItem", "", 1, "dropdown-item"], [1, ""], [1, "btn", "btn-primary"], [1, "col-lg-6"], ["baseChart", "", 3, "datasets", "labels", "options", "legend", "chartType", "colors", "chartHover", "chartClick"]],
        template: function AnalyticsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Enter a date range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-date-range-input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-datepicker-toggle", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-date-range-picker", null, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Filter by order status ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Day ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Week ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Year");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Export CSV");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "canvas", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("chartHover", function AnalyticsComponent_Template_canvas_chartHover_35_listener($event) {
              return ctx.chartHovered($event);
            })("chartClick", function AnalyticsComponent_Template_canvas_chartClick_35_listener($event) {
              return ctx.chartClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rangePicker", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("legend", ctx.barChartLegend)("chartType", ctx.barChartType)("colors", ctx.barChartColors);
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatStartDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDateRangePicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownItem"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["BaseChartDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL290aGVycy9hbmFseXRpY3MvYW5hbHl0aWNzLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalyticsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-analytics',
            templateUrl: './analytics.component.html',
            styleUrls: ['./analytics.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/others/group-volume-form/group-volume-form.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/others/group-volume-form/group-volume-form.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: GroupVolumeFormComponent */

    /***/
    function srcAppPagesOthersGroupVolumeFormGroupVolumeFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupVolumeFormComponent", function () {
        return GroupVolumeFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var GroupVolumeFormComponent = /*#__PURE__*/function () {
        function GroupVolumeFormComponent() {
          _classCallCheck(this, GroupVolumeFormComponent);
        }

        _createClass(GroupVolumeFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GroupVolumeFormComponent;
      }();

      GroupVolumeFormComponent.ɵfac = function GroupVolumeFormComponent_Factory(t) {
        return new (t || GroupVolumeFormComponent)();
      };

      GroupVolumeFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GroupVolumeFormComponent,
        selectors: [["app-group-volume-form"]],
        decls: 102,
        vars: 0,
        consts: [[1, "card"], [1, "card-body"], [1, "pl-0", "volume_element"], [1, "col-md-4"], [1, "volume_element_group"], [1, "custom-control", "custom-checkbox"], ["id", "customCheck2", "type", "checkbox", 1, "custom-control-input"], ["for", "customCheck2", 1, "custom-control-label"], ["id", "customCheck3", "type", "checkbox", 1, "custom-control-input"], ["for", "customCheck3", 1, "custom-control-label"], ["id", "customCheck4", "type", "checkbox", 1, "custom-control-input"], ["for", "customCheck4", 1, "custom-control-label"], ["id", "customCheck5", "type", "checkbox", 1, "custom-control-input"], ["for", "customCheck5", 1, "custom-control-label"], ["id", "customCheck6", "type", "checkbox", 1, "custom-control-input"], ["for", "customCheck6", 1, "custom-control-label"], ["id", "customCheck7", "type", "checkbox", 1, "custom-control-input"], ["for", "customCheck7", 1, "custom-control-label"], ["id", "customCheck8", "type", "checkbox", 1, "custom-control-input"], ["for", "customCheck8", 1, "custom-control-label"], ["id", "customCheck9", "type", "checkbox", 1, "custom-control-input"], ["for", "customCheck9", 1, "custom-control-label"], ["id", "customCheck9a", "type", "checkbox", 1, "custom-control-input"], ["for", "customCheck9a", 1, "custom-control-label"], ["id", "customCheck10", "type", "checkbox", 1, "custom-control-input"], ["for", "customCheck10", 1, "custom-control-label"], ["id", "customCheck11", "type", "checkbox", 1, "custom-control-input"], ["for", "customCheck11", 1, "custom-control-label"], [1, "pl-2", "pb-3"], [1, "btn", "btn-primary"], [1, "pl-2"], ["id", "cadence1", "type", "checkbox", 1, "custom-control-input"], ["for", "cadence1", 1, "custom-control-label"], ["id", "cadence2", "type", "checkbox", 1, "custom-control-input"], ["for", "cadence2", 1, "custom-control-label"], ["id", "cadence3", "type", "checkbox", 1, "custom-control-input"], ["for", "cadence3", 1, "custom-control-label"], ["id", "cadence4", "type", "checkbox", 1, "custom-control-input"], ["for", "cadence4", 1, "custom-control-label"]],
        template: function GroupVolumeFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Save the Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "The Health Check");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "The peak");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "My Pit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "The Snapshot");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " My Jam");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "The Recommendation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "The Lesson");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "The forecast");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Free Space");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Free Space");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h3", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Cadence");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "07 Days Weekly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "14 Days Bi-Weekly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "30 Days Monthly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "input", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "label", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "90 Days Quarterly ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["@import url(\"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\");\n\n\n\n\n\n\n\n.preloader[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  position: fixed;\n  z-index: 99999;\n  background: #fff;\n}\n.preloader[_ngcontent-%COMP%]   .cssload-speeding-wheel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(50% - 3.5px);\n  left: calc(50% - 3.5px);\n}\n.volume_element[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.volume_element_group[_ngcontent-%COMP%] {\n  background: linear-gradient(#27c3c8, #09e3a9);\n  padding: 15px;\n  color: #ffffff;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy92YXJpYWJsZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vdGhlcnMvZ3JvdXAtdm9sdW1lLWZvcm0vZ3JvdXAtdm9sdW1lLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQU9BLGtGQUFZO0FBUFo7Ozs7O0NDS0M7QURRRCxlQUFBO0FBa0JBLGtCQUFBO0FBYUEsZUFBQTtBQXNDQSxlQUFBO0FBUUEsaUJBQUE7QUFVQSxZQUFBO0FBRUE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFFBQU87RUFDUCxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQ3hGcEI7QURrRkE7RUFRUSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQ3RGL0I7QUF4QkE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQTJCakI7QUExQkE7RUFDSSw2Q0FBcUQ7RUFDckQsYUFBYTtFQUNmLGNEMkVhO0VDMUVYLG1CQUFtQjtBQTZCdkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vdGhlcnMvZ3JvdXAtdm9sdW1lLWZvcm0vZ3JvdXAtdm9sdW1lLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5UZW1wbGF0ZSBOYW1lOiBBZG1pbiBQcmVzcyBBZG1pblxyXG5BdXRob3I6IFRoZW1lZGVzaWduZXJcclxuRW1haWw6IG5pcmF2am9zaGk4N0BnbWFpbC5jb21cclxuRmlsZTogc2Nzc1xyXG4qL1xyXG4vLyBWYXJpYWJsZXNcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjMwMCw0MDAsNTAwLDYwMCw3MDAnKTtcclxuXHJcbiRib2R5Zm9udDonUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiRoZWFkaW5nZm9udDonUG9wcGlucycsIHNhbnMtc2VyaWY7IFxyXG5cclxuXHJcbi8qVGhlbWUgQ29sb3JzKi9cclxuXHJcbiR0b3BiYXI6ICMyMjY2QTY7XHJcbiRzaWRlYmFyOiAjZmZmO1xyXG4kc2lkZWJhci13aGl0ZTogI2U1ZWRlZjtcclxuJHNpZGViYXItYWx0OiNmMmY2Zjg7XHJcbiRib2R5Y29sb3I6ICNlZWY1Zjk7XHJcbiRoZWFkaW5ndGV4dDogIzQ1NWE2NDtcclxuJGJvZHl0ZXh0OiAjN2Q4YjkyOyBcclxuJHNpZGViYXItdGV4dDogI2ZmZjtcclxuJHNpZGViYXItaWNvbnM6ICNmZmYgO1xyXG5cclxuJGxpZ2h0LXRleHQ6ICNhNmI3YmY7XHJcbiR0aGVtZWNvbG9yOiAjMjdjM2M4O1xyXG4kdGhlbWVjb2xvcjE6ICMwOWUzYTk7XHJcbiR0aGVtZWNvbG9yLWFsdDogIzI2YzZkYTtcclxuJHRoZW1lY29sb3ItZGFyazogIzAyOGVlMTtcclxuXHJcbi8qYm9vdHN0cmFwIENvbG9yKi9cclxuJGRhbmdlcjogI2VmNTM1MDtcclxuJHN1Y2Nlc3M6ICMyNmRhZDI7XHJcbiR3YXJuaW5nOiAjZmZiMjJiO1xyXG4kcHJpbWFyeTogIzg1NmVkYTtcclxuJGluZm86ICMxOTc2ZDI7XHJcbiRpbnZlcnNlOiAjMmYzZDRhO1xyXG4kbXV0ZWQ6ICM5OWFiYjQ7XHJcbiRkYXJrOiAjMjYzMjM4O1xyXG4kbGlnaHQ6ICNmMmY0Zjg7XHJcbiRleHRyYS1saWdodDogI2ViZjNmNTtcclxuJGJnbGlnaHQ6cmdiYSgwLCAwLCAwLCAwLjAyKTtcclxuXHJcbi8qTGlnaHQgY29sb3JzKi9cclxuJGxpZ2h0LWRhbmdlcjogI2Y5ZTdlYjtcclxuJGxpZ2h0LXN1Y2Nlc3M6ICNlOGZkZWI7XHJcbiRsaWdodC13YXJuaW5nOiAjZmZmOGVjO1xyXG4kbGlnaHQtcHJpbWFyeTogI2YxZWZmZDtcclxuJGxpZ2h0LWluZm86ICNjZmVjZmU7XHJcbiRsaWdodC1pbnZlcnNlOiAjZjZmNmY2O1xyXG4kbGlnaHQtbWVnbmE6ICNlMGYyZjQ7IFxyXG5cclxuXHJcblxyXG4kZGFuZ2VyLWRhcms6ICNlNjI5NGI7XHJcbiRzdWNjZXNzLWRhcms6ICMxZWFjYmU7XHJcbiR3YXJuaW5nLWRhcms6ICNlOWFiMmU7XHJcbiRwcmltYXJ5LWRhcms6ICMyMjY2QTY7IFxyXG4kaW5mby1kYXJrOiAjMDI4ZWUxO1xyXG4kcmVkLWRhcms6ICNkNjFmMWY7XHJcbiRpbnZlcnNlLWRhcms6ICMyMzJhMzc7XHJcbiRkYXJrLXRyYW5zcGFyZW50OnJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcblxyXG4kaW5mby1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoNjYsMTY1LDI0NSwuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDY2LDE2NSwyNDUsLjIpLCAwIDFweCA1cHggMCByZ2JhKDY2LDE2NSwyNDUsLjEyKTtcclxuJGluZm8tc2hhZG93LWhvdmVyOjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoMjMsMTA1LDI1NSwuNDIpLCAwIDRweCAyM3B4IDAgcmdiYSgwLDAsMCwuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgyMywxMDUsMjU1LC4yKTtcclxuXHJcbiR3YXJuaW5nLXNoYWRvdzowIDJweCAycHggMCByZ2JhKDI0OCwxOTQsMCwuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDI0OCwxOTQsMCwuMiksIDAgMXB4IDVweCAwIHJnYmEoMjQ4LDE5NCwwLC4xMik7XHJcbiR3YXJuaW5nLXNoYWRvdy1ob3ZlcjowIDE0cHggMjZweCAtMTJweCByZ2JhKDI0OCwxOTQsMCwuNDIpLCAwIDRweCAyM3B4IDAgcmdiYSgwLDAsMCwuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgyNDgsMTk0LDAsLjIpO1xyXG5cclxuJGRhbmdlci1zaGFkb3c6MCAycHggMnB4IDAgcmdiYSgyMzksODMsODAsLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgyMzksODMsODAsLjIpLCAwIDFweCA1cHggMCByZ2JhKDIzOSw4Myw4MCwuMTIpO1xyXG4kZGFuZ2VyLXNoYWRvdy1ob3ZlcjowIDE0cHggMjZweCAtMTJweCByZ2JhKDIzOSw4Myw4MCwuNDIpLCAwIDRweCAyM3B4IDAgcmdiYSgwLDAsMCwuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgyMzksODMsODAsLjIpO1xyXG5cclxuJHN1Y2Nlc3Mtc2hhZG93OjAgMnB4IDJweCAwIHJnYmEoNDAsMTkwLDE4OSwuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDQwLDE5MCwxODksLjIpLCAwIDFweCA1cHggMCByZ2JhKDQwLDE5MCwxODksLjEyKTtcclxuJHN1Y2Nlc3Mtc2hhZG93LWhvdmVyOjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoNDAsMTkwLDE4OSwuNDIpLCAwIDRweCAyM3B4IDAgcmdiYSgwLDAsMCwuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSg0MCwxOTAsMTg5LC4yKTtcclxuICAgIFxyXG4kcHJpbWFyeS1zaGFkb3c6MCAycHggMnB4IDAgcmdiYSgxMTYsOTYsMjM4LC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMTE2LDk2LDIzOCwuMiksIDAgMXB4IDVweCAwIHJnYmEoMTE2LDk2LDIzOCwuMTIpO1xyXG4kcHJpbWFyeS1zaGFkb3ctaG92ZXI6MCAxNHB4IDI2cHggLTEycHggcmdiYSgxMTYsOTYsMjM4LC40MiksIDAgNHB4IDIzcHggMCByZ2JhKDAsMCwwLC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDExNiw5NiwyMzgsLjIpO1xyXG5cclxuJGRlZmF1bHQtc2hhZG93OjAgMnB4IDJweCAwIHJnYmEoMTY5LDE2OSwxNjksLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgxNjksMTY5LDE2OSwuMiksIDAgMXB4IDVweCAwIHJnYmEoMTY5LDE2OSwxNjksLjEyKTtcclxuJGRlZmF1bHQtc2hhZG93LWhvdmVyOjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoMTY5LDE2OSwxNjksLjQyKSwgMCA0cHggMjNweCAwIHJnYmEoMCwwLDAsLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMTY5LDE2OSwxNjksLjIpO1xyXG5cclxuLypOb3JtYWwgQ29sb3IqL1xyXG4kd2hpdGU6ICNmZmZmZmY7XHJcbiRyZWQ6ICNmYjNhM2E7XHJcbiR5ZWxsb3c6ICNhMGFlYzQ7XHJcbiRwdXJwbGU6ICM3NDYwZWU7XHJcbiRibHVlOiAjMDJiZWM5O1xyXG4kbWVnbmE6ICMwMDg5N2I7XHJcblxyXG4vKkV4dHJhIFZhcmlhYmxlKi9cclxuJHJndDogcmlnaHQ7XHJcbiRsZnQ6IGxlZnQ7XHJcbiRib3JkZXI6IHJnYmEoMTIwLCAxMzAsIDE0MCwgMC4xMyk7XHJcbiR0YWJsZS1ib3JkZXI6I2YzZjFmMTtcclxuJGNhcmQtYnJkOiNkN2RmZTM7XHJcbiRkYXJrLXRleHQ6ICM4NDhhOTY7XHJcbiRyYWRpdXM6IDRweDtcclxuJGZvcm0tYnJkOiAjYjFiOGJiO1xyXG5cclxuLypQcmVsb2FkZXIqL1xyXG5cclxuLnByZWxvYWRlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOjBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC5jc3Nsb2FkLXNwZWVkaW5nLXdoZWVse1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMy41cHgpO1xyXG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMy41cHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCIvKlxyXG5UZW1wbGF0ZSBOYW1lOiBBZG1pbiBQcmVzcyBBZG1pblxyXG5BdXRob3I6IFRoZW1lZGVzaWduZXJcclxuRW1haWw6IG5pcmF2am9zaGk4N0BnbWFpbC5jb21cclxuRmlsZTogc2Nzc1xyXG4qL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwXCIpO1xuLypUaGVtZSBDb2xvcnMqL1xuLypib290c3RyYXAgQ29sb3IqL1xuLypMaWdodCBjb2xvcnMqL1xuLypOb3JtYWwgQ29sb3IqL1xuLypFeHRyYSBWYXJpYWJsZSovXG4vKlByZWxvYWRlciovXG4ucHJlbG9hZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5wcmVsb2FkZXIgLmNzc2xvYWQtc3BlZWRpbmctd2hlZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyg1MCUgLSAzLjVweCk7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMy41cHgpO1xufVxuXG4udm9sdW1lX2VsZW1lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi52b2x1bWVfZWxlbWVudF9ncm91cCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMjdjM2M4LCAjMDllM2E5KTtcbiAgcGFkZGluZzogMTVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupVolumeFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-group-volume-form',
            templateUrl: './group-volume-form.component.html',
            styleUrls: ['./group-volume-form.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/others/others-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/others/others-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: OthersRoutingModule */

    /***/
    function srcAppPagesOthersOthersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OthersRoutingModule", function () {
        return OthersRoutingModule;
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


      var _others_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./others.component */
      "./src/app/pages/others/others.component.ts");
      /* harmony import */


      var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./analytics/analytics.component */
      "./src/app/pages/others/analytics/analytics.component.ts");
      /* harmony import */


      var _group_volume_form_group_volume_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./group-volume-form/group-volume-form.component */
      "./src/app/pages/others/group-volume-form/group-volume-form.component.ts");

      var routes = [{
        path: '',
        component: _others_component__WEBPACK_IMPORTED_MODULE_2__["OthersComponent"],
        children: [{
          path: 'analytics',
          component: _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_3__["AnalyticsComponent"],
          data: {
            title: "Analytics"
          }
        }, {
          path: 'groupform',
          component: _group_volume_form_group_volume_form_component__WEBPACK_IMPORTED_MODULE_4__["GroupVolumeFormComponent"],
          data: {
            title: "Group Volume Form"
          }
        }]
      }];

      var OthersRoutingModule = function OthersRoutingModule() {
        _classCallCheck(this, OthersRoutingModule);
      };

      OthersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: OthersRoutingModule
      });
      OthersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function OthersRoutingModule_Factory(t) {
          return new (t || OthersRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OthersRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OthersRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/others/others.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/pages/others/others.component.ts ***!
      \**************************************************/

    /*! exports provided: OthersComponent */

    /***/
    function srcAppPagesOthersOthersComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OthersComponent", function () {
        return OthersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");

      var OthersComponent = /*#__PURE__*/function () {
        function OthersComponent() {
          _classCallCheck(this, OthersComponent);
        }

        _createClass(OthersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OthersComponent;
      }();

      OthersComponent.ɵfac = function OthersComponent_Factory(t) {
        return new (t || OthersComponent)();
      };

      OthersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OthersComponent,
        selectors: [["app-others"]],
        decls: 1,
        vars: 0,
        template: function OthersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL290aGVycy9vdGhlcnMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OthersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-others',
            templateUrl: './others.component.html',
            styleUrls: ['./others.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/others/others.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/others/others.module.ts ***!
      \***********************************************/

    /*! exports provided: OthersModule */

    /***/
    function srcAppPagesOthersOthersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OthersModule", function () {
        return OthersModule;
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


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "./node_modules/@angular/material/fesm2015/datepicker.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/fesm2015/core.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/fesm2015/form-field.js");
      /* harmony import */


      var _others_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./others-routing.module */
      "./src/app/pages/others/others-routing.module.ts");
      /* harmony import */


      var _others_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./others.component */
      "./src/app/pages/others/others.component.ts");
      /* harmony import */


      var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./analytics/analytics.component */
      "./src/app/pages/others/analytics/analytics.component.ts");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng2-charts */
      "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      "./node_modules/@swimlane/ngx-charts/fesm2015/swimlane-ngx-charts.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _group_volume_form_group_volume_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./group-volume-form/group-volume-form.component */
      "./src/app/pages/others/group-volume-form/group-volume-form.component.ts");

      var OthersModule = function OthersModule() {
        _classCallCheck(this, OthersModule);
      };

      OthersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: OthersModule
      });
      OthersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function OthersModule_Factory(t) {
          return new (t || OthersModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _others_routing_module__WEBPACK_IMPORTED_MODULE_5__["OthersRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_9__["NgxChartsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OthersModule, {
          declarations: [_others_component__WEBPACK_IMPORTED_MODULE_6__["OthersComponent"], _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_7__["AnalyticsComponent"], _group_volume_form_group_volume_form_component__WEBPACK_IMPORTED_MODULE_11__["GroupVolumeFormComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _others_routing_module__WEBPACK_IMPORTED_MODULE_5__["OthersRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_9__["NgxChartsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OthersModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_others_component__WEBPACK_IMPORTED_MODULE_6__["OthersComponent"], _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_7__["AnalyticsComponent"], _group_volume_form_group_volume_form_component__WEBPACK_IMPORTED_MODULE_11__["GroupVolumeFormComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _others_routing_module__WEBPACK_IMPORTED_MODULE_5__["OthersRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_9__["NgxChartsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-others-others-module-es5.js.map