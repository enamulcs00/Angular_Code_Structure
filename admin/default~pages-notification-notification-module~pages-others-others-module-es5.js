(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-notification-notification-module~pages-others-others-module"], {
    /***/
    "./node_modules/@angular/cdk/fesm2015/text-field.js":
    /*!**********************************************************!*\
      !*** ./node_modules/@angular/cdk/fesm2015/text-field.js ***!
      \**********************************************************/

    /*! exports provided: AutofillMonitor, CdkAutofill, CdkTextareaAutosize, TextFieldModule */

    /***/
    function node_modulesAngularCdkFesm2015TextFieldJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutofillMonitor", function () {
        return AutofillMonitor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkAutofill", function () {
        return CdkAutofill;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkTextareaAutosize", function () {
        return CdkTextareaAutosize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextFieldModule", function () {
        return TextFieldModule;
      });
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "./node_modules/@angular/cdk/fesm2015/platform.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Options to pass to the animationstart listener. */


      var listenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({
        passive: true
      });
      /**
       * An injectable service that can be used to monitor the autofill state of an input.
       * Based on the following blog post:
       * https://medium.com/@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
       */

      var AutofillMonitor = /*#__PURE__*/function () {
        function AutofillMonitor(_platform, _ngZone) {
          _classCallCheck(this, AutofillMonitor);

          this._platform = _platform;
          this._ngZone = _ngZone;
          this._monitoredElements = new Map();
        }

        _createClass(AutofillMonitor, [{
          key: "monitor",
          value: function monitor(elementOrRef) {
            var _this = this;

            if (!this._platform.isBrowser) {
              return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
            }

            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceElement"])(elementOrRef);

            var info = this._monitoredElements.get(element);

            if (info) {
              return info.subject.asObservable();
            }

            var result = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            var cssClass = 'cdk-text-field-autofilled';

            var listener = function listener(event) {
              // Animation events fire on initial element render, we check for the presence of the autofill
              // CSS class to make sure this is a real change in state, not just the initial render before
              // we fire off events.
              if (event.animationName === 'cdk-text-field-autofill-start' && !element.classList.contains(cssClass)) {
                element.classList.add(cssClass);

                _this._ngZone.run(function () {
                  return result.next({
                    target: event.target,
                    isAutofilled: true
                  });
                });
              } else if (event.animationName === 'cdk-text-field-autofill-end' && element.classList.contains(cssClass)) {
                element.classList.remove(cssClass);

                _this._ngZone.run(function () {
                  return result.next({
                    target: event.target,
                    isAutofilled: false
                  });
                });
              }
            };

            this._ngZone.runOutsideAngular(function () {
              element.addEventListener('animationstart', listener, listenerOptions);
              element.classList.add('cdk-text-field-autofill-monitored');
            });

            this._monitoredElements.set(element, {
              subject: result,
              unlisten: function unlisten() {
                element.removeEventListener('animationstart', listener, listenerOptions);
              }
            });

            return result.asObservable();
          }
        }, {
          key: "stopMonitoring",
          value: function stopMonitoring(elementOrRef) {
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceElement"])(elementOrRef);

            var info = this._monitoredElements.get(element);

            if (info) {
              info.unlisten();
              info.subject.complete();
              element.classList.remove('cdk-text-field-autofill-monitored');
              element.classList.remove('cdk-text-field-autofilled');

              this._monitoredElements["delete"](element);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this2 = this;

            this._monitoredElements.forEach(function (_info, element) {
              return _this2.stopMonitoring(element);
            });
          }
        }]);

        return AutofillMonitor;
      }();

      AutofillMonitor.ɵfac = function AutofillMonitor_Factory(t) {
        return new (t || AutofillMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      AutofillMonitor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function AutofillMonitor_Factory() {
          return new AutofillMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
        },
        token: AutofillMonitor,
        providedIn: "root"
      });

      AutofillMonitor.ctorParameters = function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AutofillMonitor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, null);
      })();
      /** A directive that can be used to monitor the autofill state of an input. */


      var CdkAutofill = /*#__PURE__*/function () {
        function CdkAutofill(_elementRef, _autofillMonitor) {
          _classCallCheck(this, CdkAutofill);

          this._elementRef = _elementRef;
          this._autofillMonitor = _autofillMonitor;
          /** Emits when the autofill state of the element changes. */

          this.cdkAutofill = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(CdkAutofill, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this._autofillMonitor.monitor(this._elementRef).subscribe(function (event) {
              return _this3.cdkAutofill.emit(event);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._autofillMonitor.stopMonitoring(this._elementRef);
          }
        }]);

        return CdkAutofill;
      }();

      CdkAutofill.ɵfac = function CdkAutofill_Factory(t) {
        return new (t || CdkAutofill)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](AutofillMonitor));
      };

      CdkAutofill.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkAutofill,
        selectors: [["", "cdkAutofill", ""]],
        outputs: {
          cdkAutofill: "cdkAutofill"
        }
      });

      CdkAutofill.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: AutofillMonitor
        }];
      };

      CdkAutofill.propDecorators = {
        cdkAutofill: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkAutofill, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdkAutofill]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: AutofillMonitor
          }];
        }, {
          cdkAutofill: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
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

      /** Directive to automatically resize a textarea to fit its content. */


      var CdkTextareaAutosize = /*#__PURE__*/function () {
        function CdkTextareaAutosize(_elementRef, _platform, _ngZone,
        /** @breaking-change 11.0.0 make document required */
        document) {
          _classCallCheck(this, CdkTextareaAutosize);

          this._elementRef = _elementRef;
          this._platform = _platform;
          this._ngZone = _ngZone;
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this._enabled = true;
          /**
           * Value of minRows as of last resize. If the minRows has decreased, the
           * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
           * does not have the same problem because it does not affect the textarea's scrollHeight.
           */

          this._previousMinRows = -1;
          this._document = document;
          this._textareaElement = this._elementRef.nativeElement;
          this._measuringClass = _platform.FIREFOX ? 'cdk-textarea-autosize-measuring-firefox' : 'cdk-textarea-autosize-measuring';
        }
        /** Minimum amount of rows in the textarea. */


        _createClass(CdkTextareaAutosize, [{
          key: "_setMinHeight",

          /** Sets the minimum height of the textarea as determined by minRows. */
          value: function _setMinHeight() {
            var minHeight = this.minRows && this._cachedLineHeight ? "".concat(this.minRows * this._cachedLineHeight, "px") : null;

            if (minHeight) {
              this._textareaElement.style.minHeight = minHeight;
            }
          }
          /** Sets the maximum height of the textarea as determined by maxRows. */

        }, {
          key: "_setMaxHeight",
          value: function _setMaxHeight() {
            var maxHeight = this.maxRows && this._cachedLineHeight ? "".concat(this.maxRows * this._cachedLineHeight, "px") : null;

            if (maxHeight) {
              this._textareaElement.style.maxHeight = maxHeight;
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this4 = this;

            if (this._platform.isBrowser) {
              // Remember the height which we started with in case autosizing is disabled
              this._initialHeight = this._textareaElement.style.height;
              this.resizeToFitContent();

              this._ngZone.runOutsideAngular(function () {
                var window = _this4._getWindow();

                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["auditTime"])(16), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this4._destroyed)).subscribe(function () {
                  return _this4.resizeToFitContent(true);
                });
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();
          }
          /**
           * Cache the height of a single-row textarea if it has not already been cached.
           *
           * We need to know how large a single "row" of a textarea is in order to apply minRows and
           * maxRows. For the initial version, we will assume that the height of a single line in the
           * textarea does not ever change.
           */

        }, {
          key: "_cacheTextareaLineHeight",
          value: function _cacheTextareaLineHeight() {
            if (this._cachedLineHeight) {
              return;
            } // Use a clone element because we have to override some styles.


            var textareaClone = this._textareaElement.cloneNode(false);

            textareaClone.rows = 1; // Use `position: absolute` so that this doesn't cause a browser layout and use
            // `visibility: hidden` so that nothing is rendered. Clear any other styles that
            // would affect the height.

            textareaClone.style.position = 'absolute';
            textareaClone.style.visibility = 'hidden';
            textareaClone.style.border = 'none';
            textareaClone.style.padding = '0';
            textareaClone.style.height = '';
            textareaClone.style.minHeight = '';
            textareaClone.style.maxHeight = ''; // In Firefox it happens that textarea elements are always bigger than the specified amount
            // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
            // As a workaround that removes the extra space for the scrollbar, we can just set overflow
            // to hidden. This ensures that there is no invalid calculation of the line height.
            // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654

            textareaClone.style.overflow = 'hidden';

            this._textareaElement.parentNode.appendChild(textareaClone);

            this._cachedLineHeight = textareaClone.clientHeight;

            this._textareaElement.parentNode.removeChild(textareaClone); // Min and max heights have to be re-calculated if the cached line height changes


            this._setMinHeight();

            this._setMaxHeight();
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this._platform.isBrowser) {
              this.resizeToFitContent();
            }
          }
          /**
           * Resize the textarea to fit its content.
           * @param force Whether to force a height recalculation. By default the height will be
           *    recalculated only if the value changed since the last call.
           */

        }, {
          key: "resizeToFitContent",
          value: function resizeToFitContent() {
            var _this5 = this;

            var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            // If autosizing is disabled, just skip everything else
            if (!this._enabled) {
              return;
            }

            this._cacheTextareaLineHeight(); // If we haven't determined the line-height yet, we know we're still hidden and there's no point
            // in checking the height of the textarea.


            if (!this._cachedLineHeight) {
              return;
            }

            var textarea = this._elementRef.nativeElement;
            var value = textarea.value; // Only resize if the value or minRows have changed since these calculations can be expensive.

            if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
              return;
            }

            var placeholderText = textarea.placeholder; // Reset the textarea height to auto in order to shrink back to its default size.
            // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
            // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
            // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
            // need to be removed temporarily.

            textarea.classList.add(this._measuringClass);
            textarea.placeholder = ''; // The measuring class includes a 2px padding to workaround an issue with Chrome,
            // so we account for that extra space here by subtracting 4 (2px top + 2px bottom).

            var height = textarea.scrollHeight - 4; // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.

            textarea.style.height = "".concat(height, "px");
            textarea.classList.remove(this._measuringClass);
            textarea.placeholder = placeholderText;

            this._ngZone.runOutsideAngular(function () {
              if (typeof requestAnimationFrame !== 'undefined') {
                requestAnimationFrame(function () {
                  return _this5._scrollToCaretPosition(textarea);
                });
              } else {
                setTimeout(function () {
                  return _this5._scrollToCaretPosition(textarea);
                });
              }
            });

            this._previousValue = value;
            this._previousMinRows = this._minRows;
          }
          /**
           * Resets the textarea to its original size
           */

        }, {
          key: "reset",
          value: function reset() {
            // Do not try to change the textarea, if the initialHeight has not been determined yet
            // This might potentially remove styles when reset() is called before ngAfterViewInit
            if (this._initialHeight !== undefined) {
              this._textareaElement.style.height = this._initialHeight;
            }
          } // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
          // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
          // can move this back into `host`.
          // tslint:disable:no-host-decorator-in-concrete

        }, {
          key: "_noopInputHandler",
          value: function _noopInputHandler() {// no-op handler that ensures we're running change detection on input events.
          }
          /** Access injected document if available or fallback to global document reference */

        }, {
          key: "_getDocument",
          value: function _getDocument() {
            return this._document || document;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            var doc = this._getDocument();

            return doc.defaultView || window;
          }
          /**
           * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
           * prevent it from scrolling to the caret position. We need to re-set the selection
           * in order for it to scroll to the proper position.
           */

        }, {
          key: "_scrollToCaretPosition",
          value: function _scrollToCaretPosition(textarea) {
            var selectionStart = textarea.selectionStart,
                selectionEnd = textarea.selectionEnd;

            var document = this._getDocument(); // IE will throw an "Unspecified error" if we try to set the selection range after the
            // element has been removed from the DOM. Assert that the directive hasn't been destroyed
            // between the time we requested the animation frame and when it was executed.
            // Also note that we have to assert that the textarea is focused before we set the
            // selection range. Setting the selection range on a non-focused textarea will cause
            // it to receive focus on IE and Edge.


            if (!this._destroyed.isStopped && document.activeElement === textarea) {
              textarea.setSelectionRange(selectionStart, selectionEnd);
            }
          }
        }, {
          key: "minRows",
          get: function get() {
            return this._minRows;
          },
          set: function set(value) {
            this._minRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);

            this._setMinHeight();
          }
          /** Maximum amount of rows in the textarea. */

        }, {
          key: "maxRows",
          get: function get() {
            return this._maxRows;
          },
          set: function set(value) {
            this._maxRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);

            this._setMaxHeight();
          }
          /** Whether autosizing is enabled or not */

        }, {
          key: "enabled",
          get: function get() {
            return this._enabled;
          },
          set: function set(value) {
            value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); // Only act if the actual value changed. This specifically helps to not run
            // resizeToFitContent too early (i.e. before ngAfterViewInit)

            if (this._enabled !== value) {
              (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
            }
          }
        }]);

        return CdkTextareaAutosize;
      }();

      CdkTextareaAutosize.ɵfac = function CdkTextareaAutosize_Factory(t) {
        return new (t || CdkTextareaAutosize)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
      };

      CdkTextareaAutosize.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkTextareaAutosize,
        selectors: [["textarea", "cdkTextareaAutosize", ""]],
        hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"],
        hostBindings: function CdkTextareaAutosize_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function CdkTextareaAutosize_input_HostBindingHandler() {
              return ctx._noopInputHandler();
            });
          }
        },
        inputs: {
          minRows: ["cdkAutosizeMinRows", "minRows"],
          maxRows: ["cdkAutosizeMaxRows", "maxRows"],
          enabled: ["cdkTextareaAutosize", "enabled"]
        },
        exportAs: ["cdkTextareaAutosize"]
      });

      CdkTextareaAutosize.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      };

      CdkTextareaAutosize.propDecorators = {
        minRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkAutosizeMinRows']
        }],
        maxRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkAutosizeMaxRows']
        }],
        enabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkTextareaAutosize']
        }],
        _noopInputHandler: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['input']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkTextareaAutosize, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'textarea[cdkTextareaAutosize]',
            exportAs: 'cdkTextareaAutosize',
            host: {
              'class': 'cdk-textarea-autosize',
              // Textarea elements that have the directive applied should have a single row by default.
              // Browsers normally show two rows by default and therefore this limits the minRows binding.
              'rows': '1'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }]
          }];
        }, {
          minRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkAutosizeMinRows']
          }],
          maxRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkAutosizeMaxRows']
          }],
          enabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkTextareaAutosize']
          }],
          _noopInputHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['input']
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


      var TextFieldModule = function TextFieldModule() {
        _classCallCheck(this, TextFieldModule);
      };

      TextFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: TextFieldModule
      });
      TextFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function TextFieldModule_Factory(t) {
          return new (t || TextFieldModule)();
        },
        imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TextFieldModule, {
          declarations: function declarations() {
            return [CdkAutofill, CdkTextareaAutosize];
          },
          imports: function imports() {
            return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]];
          },
          exports: function exports() {
            return [CdkAutofill, CdkTextareaAutosize];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TextFieldModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [CdkAutofill, CdkTextareaAutosize],
            imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]],
            exports: [CdkAutofill, CdkTextareaAutosize]
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
      //# sourceMappingURL=text-field.js.map

      /***/

    },

    /***/
    "./node_modules/@angular/material/fesm2015/form-field.js":
    /*!***************************************************************!*\
      !*** ./node_modules/@angular/material/fesm2015/form-field.js ***!
      \***************************************************************/

    /*! exports provided: MAT_ERROR, MAT_FORM_FIELD, MAT_FORM_FIELD_DEFAULT_OPTIONS, MAT_PREFIX, MAT_SUFFIX, MatError, MatFormField, MatFormFieldControl, MatFormFieldModule, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix, _MAT_HINT, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, getMatFormFieldPlaceholderConflictError, matFormFieldAnimations */

    /***/
    function node_modulesAngularMaterialFesm2015FormFieldJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_ERROR", function () {
        return MAT_ERROR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD", function () {
        return MAT_FORM_FIELD;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD_DEFAULT_OPTIONS", function () {
        return MAT_FORM_FIELD_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PREFIX", function () {
        return MAT_PREFIX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SUFFIX", function () {
        return MAT_SUFFIX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatError", function () {
        return MatError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFormField", function () {
        return MatFormField;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFormFieldControl", function () {
        return MatFormFieldControl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFormFieldModule", function () {
        return MatFormFieldModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatHint", function () {
        return MatHint;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatLabel", function () {
        return MatLabel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPlaceholder", function () {
        return MatPlaceholder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPrefix", function () {
        return MatPrefix;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSuffix", function () {
        return MatSuffix;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MAT_HINT", function () {
        return _MAT_HINT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatFormFieldDuplicatedHintError", function () {
        return getMatFormFieldDuplicatedHintError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatFormFieldMissingControlError", function () {
        return getMatFormFieldMissingControlError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatFormFieldPlaceholderConflictError", function () {
        return getMatFormFieldPlaceholderConflictError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matFormFieldAnimations", function () {
        return matFormFieldAnimations;
      });
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "./node_modules/@angular/cdk/fesm2015/observers.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "./node_modules/@angular/cdk/fesm2015/bidi.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/fesm2015/animations.js");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "./node_modules/@angular/cdk/fesm2015/platform.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/fesm2015/animations.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _c0 = ["underline"];
      var _c1 = ["connectionContainer"];
      var _c2 = ["inputContainer"];
      var _c3 = ["label"];

      function MatFormField_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }
      }

      function MatFormField_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function MatFormField_label_9_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10._control.placeholder);
        }
      }

      function MatFormField_label_9_ng_content_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 3, ["*ngSwitchCase", "true"]);
        }
      }

      function MatFormField_label_9_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function MatFormField_label_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkObserveContent", function MatFormField_label_9_Template_label_cdkObserveContent_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r13.updateOutlineGap();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MatFormField_label_9_ng_container_2_Template, 4, 1, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MatFormField_label_9_ng_content_3_Template, 1, 0, "ng-content", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MatFormField_label_9_span_4_Template, 2, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat())("mat-form-field-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat())("mat-accent", ctx_r4.color == "accent")("mat-warn", ctx_r4.color == "warn");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkObserveContentDisabled", ctx_r4.appearance != "outline")("id", ctx_r4._labelId)("ngSwitch", ctx_r4._hasLabel());

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("for", ctx_r4._control.id)("aria-owns", ctx_r4._control.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.hideRequiredMarker && ctx_r4._control.required && !ctx_r4._control.disabled);
        }
      }

      function MatFormField_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function MatFormField_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-accent", ctx_r6.color == "accent")("mat-warn", ctx_r6.color == "warn");
        }
      }

      function MatFormField_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transitionMessages", ctx_r7._subscriptAnimationState);
        }
      }

      function MatFormField_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r16._hintLabelId);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r16.hintLabel);
        }
      }

      function MatFormField_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MatFormField_div_14_div_1_Template, 2, 2, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transitionMessages", ctx_r8._subscriptAnimationState);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.hintLabel);
        }
      }

      var _c4 = ["*", [["", "matPrefix", ""]], [["mat-placeholder"]], [["mat-label"]], [["", "matSuffix", ""]], [["mat-error"]], [["mat-hint", 3, "align", "end"]], [["mat-hint", "align", "end"]]];
      var _c5 = ["*", "[matPrefix]", "mat-placeholder", "mat-label", "[matSuffix]", "mat-error", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
      var nextUniqueId = 0;
      /**
       * Injection token that can be used to reference instances of `MatError`. It serves as
       * alternative token to the actual `MatError` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var MAT_ERROR = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatError');
      /** Single error message to be shown underneath the form field. */

      var MatError = function MatError() {
        _classCallCheck(this, MatError);

        this.id = "mat-error-".concat(nextUniqueId++);
      };

      MatError.ɵfac = function MatError_Factory(t) {
        return new (t || MatError)();
      };

      MatError.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatError,
        selectors: [["mat-error"]],
        hostAttrs: ["role", "alert", 1, "mat-error"],
        hostVars: 1,
        hostBindings: function MatError_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id);
          }
        },
        inputs: {
          id: "id"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: MAT_ERROR,
          useExisting: MatError
        }])]
      });
      MatError.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatError, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-error',
            host: {
              'class': 'mat-error',
              'role': 'alert',
              '[attr.id]': 'id'
            },
            providers: [{
              provide: MAT_ERROR,
              useExisting: MatError
            }]
          }]
        }], function () {
          return [];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
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
       * Animations used by the MatFormField.
       * @docs-private
       */


      var matFormFieldAnimations = {
        /** Animation that transitions the form field's error and hint messages. */
        transitionMessages: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('transitionMessages', [// TODO(mmalerba): Use angular animations for label animation as well.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 1,
          transform: 'translateY(0%)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('void => enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 0,
          transform: 'translateY(-100%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('300ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** An interface which allows a control to work inside of a `MatFormField`. */

      var MatFormFieldControl = function MatFormFieldControl() {
        _classCallCheck(this, MatFormFieldControl);
      };

      MatFormFieldControl.ɵfac = function MatFormFieldControl_Factory(t) {
        return new (t || MatFormFieldControl)();
      };

      MatFormFieldControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatFormFieldControl
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatFormFieldControl, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** @docs-private */


      function getMatFormFieldPlaceholderConflictError() {
        return Error('Placeholder attribute and child element were both specified.');
      }
      /** @docs-private */


      function getMatFormFieldDuplicatedHintError(align) {
        return Error("A hint was already declared for 'align=\"".concat(align, "\"'."));
      }
      /** @docs-private */


      function getMatFormFieldMissingControlError() {
        return Error('mat-form-field must contain a MatFormFieldControl.');
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var nextUniqueId$1 = 0;
      /**
       * Injection token that can be used to reference instances of `MatHint`. It serves as
       * alternative token to the actual `MatHint` class which could cause unnecessary
       * retention of the class and its directive metadata.
       *
       * *Note*: This is not part of the public API as the MDC-based form-field will not
       * need a lightweight token for `MatHint` and we want to reduce breaking changes.
       */

      var _MAT_HINT = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatHint');
      /** Hint text to be shown underneath the form field control. */


      var MatHint = function MatHint() {
        _classCallCheck(this, MatHint);

        /** Whether to align the hint label at the start or end of the line. */
        this.align = 'start';
        /** Unique ID for the hint. Used for the aria-describedby on the form field control. */

        this.id = "mat-hint-".concat(nextUniqueId$1++);
      };

      MatHint.ɵfac = function MatHint_Factory(t) {
        return new (t || MatHint)();
      };

      MatHint.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatHint,
        selectors: [["mat-hint"]],
        hostAttrs: [1, "mat-hint"],
        hostVars: 4,
        hostBindings: function MatHint_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id)("align", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-right", ctx.align == "end");
          }
        },
        inputs: {
          align: "align",
          id: "id"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: _MAT_HINT,
          useExisting: MatHint
        }])]
      });
      MatHint.propDecorators = {
        align: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatHint, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-hint',
            host: {
              'class': 'mat-hint',
              '[class.mat-right]': 'align == "end"',
              '[attr.id]': 'id',
              // Remove align attribute to prevent it from interfering with layout.
              '[attr.align]': 'null'
            },
            providers: [{
              provide: _MAT_HINT,
              useExisting: MatHint
            }]
          }]
        }], function () {
          return [];
        }, {
          align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
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

      /** The floating label for a `mat-form-field`. */


      var MatLabel = function MatLabel() {
        _classCallCheck(this, MatLabel);
      };

      MatLabel.ɵfac = function MatLabel_Factory(t) {
        return new (t || MatLabel)();
      };

      MatLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatLabel,
        selectors: [["mat-label"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatLabel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-label'
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
       * The placeholder text for an `MatFormField`.
       * @deprecated Use `<mat-label>` to specify the label and the `placeholder` attribute to specify the
       *     placeholder.
       * @breaking-change 8.0.0
       */


      var MatPlaceholder = function MatPlaceholder() {
        _classCallCheck(this, MatPlaceholder);
      };

      MatPlaceholder.ɵfac = function MatPlaceholder_Factory(t) {
        return new (t || MatPlaceholder)();
      };

      MatPlaceholder.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatPlaceholder,
        selectors: [["mat-placeholder"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatPlaceholder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-placeholder'
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
       * Injection token that can be used to reference instances of `MatPrefix`. It serves as
       * alternative token to the actual `MatPrefix` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var MAT_PREFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatPrefix');
      /** Prefix to be placed in front of the form field. */

      var MatPrefix = function MatPrefix() {
        _classCallCheck(this, MatPrefix);
      };

      MatPrefix.ɵfac = function MatPrefix_Factory(t) {
        return new (t || MatPrefix)();
      };

      MatPrefix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatPrefix,
        selectors: [["", "matPrefix", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: MAT_PREFIX,
          useExisting: MatPrefix
        }])]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatPrefix, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[matPrefix]',
            providers: [{
              provide: MAT_PREFIX,
              useExisting: MatPrefix
            }]
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
       * Injection token that can be used to reference instances of `MatSuffix`. It serves as
       * alternative token to the actual `MatSuffix` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var MAT_SUFFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatSuffix');
      /** Suffix to be placed at the end of the form field. */

      var MatSuffix = function MatSuffix() {
        _classCallCheck(this, MatSuffix);
      };

      MatSuffix.ɵfac = function MatSuffix_Factory(t) {
        return new (t || MatSuffix)();
      };

      MatSuffix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatSuffix,
        selectors: [["", "matSuffix", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: MAT_SUFFIX,
          useExisting: MatSuffix
        }])]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSuffix, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[matSuffix]',
            providers: [{
              provide: MAT_SUFFIX,
              useExisting: MatSuffix
            }]
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


      var nextUniqueId$2 = 0;
      var floatingLabelScale = 0.75;
      var outlineGapPadding = 5;
      /**
       * Boilerplate for applying mixins to MatFormField.
       * @docs-private
       */

      var MatFormFieldBase = function MatFormFieldBase(_elementRef) {
        _classCallCheck(this, MatFormFieldBase);

        this._elementRef = _elementRef;
      };
      /**
       * Base class to which we're applying the form field mixins.
       * @docs-private
       */


      var _MatFormFieldMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinColor"])(MatFormFieldBase, 'primary');
      /**
       * Injection token that can be used to configure the
       * default options for all form field within an app.
       */


      var MAT_FORM_FIELD_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MAT_FORM_FIELD_DEFAULT_OPTIONS');
      /**
       * Injection token that can be used to inject an instances of `MatFormField`. It serves
       * as alternative token to the actual `MatFormField` class which would cause unnecessary
       * retention of the `MatFormField` class and its component metadata.
       */

      var MAT_FORM_FIELD = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatFormField');
      /** Container for form controls that applies Material Design styling and behavior. */

      var MatFormField = /*#__PURE__*/function (_MatFormFieldMixinBas) {
        _inherits(MatFormField, _MatFormFieldMixinBas);

        var _super = _createSuper(MatFormField);

        function MatFormField(_elementRef, _changeDetectorRef, labelOptions, _dir, _defaults, _platform, _ngZone, _animationMode) {
          var _this6;

          _classCallCheck(this, MatFormField);

          _this6 = _super.call(this, _elementRef);
          _this6._elementRef = _elementRef;
          _this6._changeDetectorRef = _changeDetectorRef;
          _this6._dir = _dir;
          _this6._defaults = _defaults;
          _this6._platform = _platform;
          _this6._ngZone = _ngZone;
          /**
           * Whether the outline gap needs to be calculated
           * immediately on the next change detection run.
           */

          _this6._outlineGapCalculationNeededImmediately = false;
          /** Whether the outline gap needs to be calculated next time the zone has stabilized. */

          _this6._outlineGapCalculationNeededOnStable = false;
          _this6._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** Override for the logic that disables the label animation in certain cases. */

          _this6._showAlwaysAnimate = false;
          /** State of the mat-hint and mat-error animations. */

          _this6._subscriptAnimationState = '';
          _this6._hintLabel = ''; // Unique id for the hint label.

          _this6._hintLabelId = "mat-hint-".concat(nextUniqueId$2++); // Unique id for the internal form field label.

          _this6._labelId = "mat-form-field-label-".concat(nextUniqueId$2++);
          _this6._labelOptions = labelOptions ? labelOptions : {};
          _this6.floatLabel = _this6._getDefaultFloatLabelState();
          _this6._animationsEnabled = _animationMode !== 'NoopAnimations'; // Set the default through here so we invoke the setter on the first run.

          _this6.appearance = _defaults && _defaults.appearance ? _defaults.appearance : 'legacy';
          _this6._hideRequiredMarker = _defaults && _defaults.hideRequiredMarker != null ? _defaults.hideRequiredMarker : false;
          return _this6;
        }
        /** The form-field appearance style. */


        _createClass(MatFormField, [{
          key: "_shouldAlwaysFloat",

          /** Whether the floating label should always float or not. */
          value: function _shouldAlwaysFloat() {
            return this.floatLabel === 'always' && !this._showAlwaysAnimate;
          }
          /** Whether the label can float or not. */

        }, {
          key: "_canLabelFloat",
          value: function _canLabelFloat() {
            return this.floatLabel !== 'never';
          }
          /** Text for the form field hint. */

        }, {
          key: "getConnectedOverlayOrigin",

          /**
           * Gets an ElementRef for the element that a overlay attached to the form-field should be
           * positioned relative to.
           */
          value: function getConnectedOverlayOrigin() {
            return this._connectionContainerRef || this._elementRef;
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this7 = this;

            this._validateControlChild();

            var control = this._control;

            if (control.controlType) {
              this._elementRef.nativeElement.classList.add("mat-form-field-type-".concat(control.controlType));
            } // Subscribe to changes in the child control state in order to update the form field UI.


            control.stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(function () {
              _this7._validatePlaceholders();

              _this7._syncDescribedByIds();

              _this7._changeDetectorRef.markForCheck();
            }); // Run change detection if the value changes.

            if (control.ngControl && control.ngControl.valueChanges) {
              control.ngControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(function () {
                return _this7._changeDetectorRef.markForCheck();
              });
            } // Note that we have to run outside of the `NgZone` explicitly,
            // in order to avoid throwing users into an infinite loop
            // if `zone-patch-rxjs` is included.


            this._ngZone.runOutsideAngular(function () {
              _this7._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this7._destroyed)).subscribe(function () {
                if (_this7._outlineGapCalculationNeededOnStable) {
                  _this7.updateOutlineGap();
                }
              });
            }); // Run change detection and update the outline if the suffix or prefix changes.


            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(function () {
              _this7._outlineGapCalculationNeededOnStable = true;

              _this7._changeDetectorRef.markForCheck();
            }); // Re-validate when the number of hints changes.

            this._hintChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(function () {
              _this7._processHints();

              _this7._changeDetectorRef.markForCheck();
            }); // Update the aria-described by when the number of errors changes.


            this._errorChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(function () {
              _this7._syncDescribedByIds();

              _this7._changeDetectorRef.markForCheck();
            });

            if (this._dir) {
              this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(function () {
                if (typeof requestAnimationFrame === 'function') {
                  _this7._ngZone.runOutsideAngular(function () {
                    requestAnimationFrame(function () {
                      return _this7.updateOutlineGap();
                    });
                  });
                } else {
                  _this7.updateOutlineGap();
                }
              });
            }
          }
        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            this._validateControlChild();

            if (this._outlineGapCalculationNeededImmediately) {
              this.updateOutlineGap();
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // Avoid animations on load.
            this._subscriptAnimationState = 'enter';

            this._changeDetectorRef.detectChanges();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();
          }
          /** Determines whether a class from the NgControl should be forwarded to the host element. */

        }, {
          key: "_shouldForward",
          value: function _shouldForward(prop) {
            var ngControl = this._control ? this._control.ngControl : null;
            return ngControl && ngControl[prop];
          }
        }, {
          key: "_hasPlaceholder",
          value: function _hasPlaceholder() {
            return !!(this._control && this._control.placeholder || this._placeholderChild);
          }
        }, {
          key: "_hasLabel",
          value: function _hasLabel() {
            return !!(this._labelChildNonStatic || this._labelChildStatic);
          }
        }, {
          key: "_shouldLabelFloat",
          value: function _shouldLabelFloat() {
            return this._canLabelFloat() && (this._control && this._control.shouldLabelFloat || this._shouldAlwaysFloat());
          }
        }, {
          key: "_hideControlPlaceholder",
          value: function _hideControlPlaceholder() {
            // In the legacy appearance the placeholder is promoted to a label if no label is given.
            return this.appearance === 'legacy' && !this._hasLabel() || this._hasLabel() && !this._shouldLabelFloat();
          }
        }, {
          key: "_hasFloatingLabel",
          value: function _hasFloatingLabel() {
            // In the legacy appearance the placeholder is promoted to a label if no label is given.
            return this._hasLabel() || this.appearance === 'legacy' && this._hasPlaceholder();
          }
          /** Determines whether to display hints or errors. */

        }, {
          key: "_getDisplayedMessages",
          value: function _getDisplayedMessages() {
            return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? 'error' : 'hint';
          }
          /** Animates the placeholder up and locks it in position. */

        }, {
          key: "_animateAndLockLabel",
          value: function _animateAndLockLabel() {
            var _this8 = this;

            if (this._hasFloatingLabel() && this._canLabelFloat()) {
              // If animations are disabled, we shouldn't go in here,
              // because the `transitionend` will never fire.
              if (this._animationsEnabled && this._label) {
                this._showAlwaysAnimate = true;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this._label.nativeElement, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function () {
                  _this8._showAlwaysAnimate = false;
                });
              }

              this.floatLabel = 'always';

              this._changeDetectorRef.markForCheck();
            }
          }
          /**
           * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
           * or child element with the `mat-placeholder` directive).
           */

        }, {
          key: "_validatePlaceholders",
          value: function _validatePlaceholders() {
            if (this._control.placeholder && this._placeholderChild) {
              throw getMatFormFieldPlaceholderConflictError();
            }
          }
          /** Does any extra processing that is required when handling the hints. */

        }, {
          key: "_processHints",
          value: function _processHints() {
            this._validateHints();

            this._syncDescribedByIds();
          }
          /**
           * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
           * attribute being considered as `align="start"`.
           */

        }, {
          key: "_validateHints",
          value: function _validateHints() {
            var _this9 = this;

            if (this._hintChildren) {
              var startHint;
              var endHint;

              this._hintChildren.forEach(function (hint) {
                if (hint.align === 'start') {
                  if (startHint || _this9.hintLabel) {
                    throw getMatFormFieldDuplicatedHintError('start');
                  }

                  startHint = hint;
                } else if (hint.align === 'end') {
                  if (endHint) {
                    throw getMatFormFieldDuplicatedHintError('end');
                  }

                  endHint = hint;
                }
              });
            }
          }
          /** Gets the default float label state. */

        }, {
          key: "_getDefaultFloatLabelState",
          value: function _getDefaultFloatLabelState() {
            return this._defaults && this._defaults.floatLabel || this._labelOptions["float"] || 'auto';
          }
          /**
           * Sets the list of element IDs that describe the child control. This allows the control to update
           * its `aria-describedby` attribute accordingly.
           */

        }, {
          key: "_syncDescribedByIds",
          value: function _syncDescribedByIds() {
            if (this._control) {
              var ids = [];

              if (this._getDisplayedMessages() === 'hint') {
                var startHint = this._hintChildren ? this._hintChildren.find(function (hint) {
                  return hint.align === 'start';
                }) : null;
                var endHint = this._hintChildren ? this._hintChildren.find(function (hint) {
                  return hint.align === 'end';
                }) : null;

                if (startHint) {
                  ids.push(startHint.id);
                } else if (this._hintLabel) {
                  ids.push(this._hintLabelId);
                }

                if (endHint) {
                  ids.push(endHint.id);
                }
              } else if (this._errorChildren) {
                ids = this._errorChildren.map(function (error) {
                  return error.id;
                });
              }

              this._control.setDescribedByIds(ids);
            }
          }
          /** Throws an error if the form field's control is missing. */

        }, {
          key: "_validateControlChild",
          value: function _validateControlChild() {
            if (!this._control) {
              throw getMatFormFieldMissingControlError();
            }
          }
          /**
           * Updates the width and position of the gap in the outline. Only relevant for the outline
           * appearance.
           */

        }, {
          key: "updateOutlineGap",
          value: function updateOutlineGap() {
            var labelEl = this._label ? this._label.nativeElement : null;

            if (this.appearance !== 'outline' || !labelEl || !labelEl.children.length || !labelEl.textContent.trim()) {
              return;
            }

            if (!this._platform.isBrowser) {
              // getBoundingClientRect isn't available on the server.
              return;
            } // If the element is not present in the DOM, the outline gap will need to be calculated
            // the next time it is checked and in the DOM.


            if (!this._isAttachedToDOM()) {
              this._outlineGapCalculationNeededImmediately = true;
              return;
            }

            var startWidth = 0;
            var gapWidth = 0;
            var container = this._connectionContainerRef.nativeElement;
            var startEls = container.querySelectorAll('.mat-form-field-outline-start');
            var gapEls = container.querySelectorAll('.mat-form-field-outline-gap');

            if (this._label && this._label.nativeElement.children.length) {
              var containerRect = container.getBoundingClientRect(); // If the container's width and height are zero, it means that the element is
              // invisible and we can't calculate the outline gap. Mark the element as needing
              // to be checked the next time the zone stabilizes. We can't do this immediately
              // on the next change detection, because even if the element becomes visible,
              // the `ClientRect` won't be reclaculated immediately. We reset the
              // `_outlineGapCalculationNeededImmediately` flag some we don't run the checks twice.

              if (containerRect.width === 0 && containerRect.height === 0) {
                this._outlineGapCalculationNeededOnStable = true;
                this._outlineGapCalculationNeededImmediately = false;
                return;
              }

              var containerStart = this._getStartEnd(containerRect);

              var labelChildren = labelEl.children;

              var labelStart = this._getStartEnd(labelChildren[0].getBoundingClientRect());

              var labelWidth = 0;

              for (var i = 0; i < labelChildren.length; i++) {
                labelWidth += labelChildren[i].offsetWidth;
              }

              startWidth = Math.abs(labelStart - containerStart) - outlineGapPadding;
              gapWidth = labelWidth > 0 ? labelWidth * floatingLabelScale + outlineGapPadding * 2 : 0;
            }

            for (var _i = 0; _i < startEls.length; _i++) {
              startEls[_i].style.width = "".concat(startWidth, "px");
            }

            for (var _i2 = 0; _i2 < gapEls.length; _i2++) {
              gapEls[_i2].style.width = "".concat(gapWidth, "px");
            }

            this._outlineGapCalculationNeededOnStable = this._outlineGapCalculationNeededImmediately = false;
          }
          /** Gets the start end of the rect considering the current directionality. */

        }, {
          key: "_getStartEnd",
          value: function _getStartEnd(rect) {
            return this._dir && this._dir.value === 'rtl' ? rect.right : rect.left;
          }
          /** Checks whether the form field is attached to the DOM. */

        }, {
          key: "_isAttachedToDOM",
          value: function _isAttachedToDOM() {
            var element = this._elementRef.nativeElement;

            if (element.getRootNode) {
              var rootNode = element.getRootNode(); // If the element is inside the DOM the root node will be either the document
              // or the closest shadow root, otherwise it'll be the element itself.

              return rootNode && rootNode !== element;
            } // Otherwise fall back to checking if it's in the document. This doesn't account for
            // shadow DOM, however browser that support shadow DOM should support `getRootNode` as well.


            return document.documentElement.contains(element);
          }
        }, {
          key: "appearance",
          get: function get() {
            return this._appearance;
          },
          set: function set(value) {
            var oldValue = this._appearance;
            this._appearance = value || this._defaults && this._defaults.appearance || 'legacy';

            if (this._appearance === 'outline' && oldValue !== value) {
              this._outlineGapCalculationNeededOnStable = true;
            }
          }
          /** Whether the required marker should be hidden. */

        }, {
          key: "hideRequiredMarker",
          get: function get() {
            return this._hideRequiredMarker;
          },
          set: function set(value) {
            this._hideRequiredMarker = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "hintLabel",
          get: function get() {
            return this._hintLabel;
          },
          set: function set(value) {
            this._hintLabel = value;

            this._processHints();
          }
          /**
           * Whether the label should always float, never float or float as the user types.
           *
           * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
           * way to make the floating label emulate the behavior of a standard input placeholder. However
           * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
           * appearances the `never` option has been disabled in favor of just using the placeholder.
           */

        }, {
          key: "floatLabel",
          get: function get() {
            return this.appearance !== 'legacy' && this._floatLabel === 'never' ? 'auto' : this._floatLabel;
          },
          set: function set(value) {
            if (value !== this._floatLabel) {
              this._floatLabel = value || this._getDefaultFloatLabelState();

              this._changeDetectorRef.markForCheck();
            }
          }
        }, {
          key: "_control",
          get: function get() {
            // TODO(crisbeto): we need this workaround in order to support both Ivy and ViewEngine.
            //  We should clean this up once Ivy is the default renderer.
            return this._explicitFormFieldControl || this._controlNonStatic || this._controlStatic;
          },
          set: function set(value) {
            this._explicitFormFieldControl = value;
          }
        }]);

        return MatFormField;
      }(_MatFormFieldMixinBase);

      MatFormField.ɵfac = function MatFormField_Factory(t) {
        return new (t || MatFormField)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_FORM_FIELD_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatFormField.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MatFormField,
        selectors: [["mat-form-field"]],
        contentQueries: function MatFormField_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatFormFieldControl, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticContentQuery"](dirIndex, MatFormFieldControl, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatLabel, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticContentQuery"](dirIndex, MatLabel, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatPlaceholder, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MAT_ERROR, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _MAT_HINT, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MAT_PREFIX, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MAT_SUFFIX, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._controlNonStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._controlStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._labelChildNonStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._labelChildStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._placeholderChild = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._errorChildren = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._hintChildren = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._prefixChildren = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._suffixChildren = _t);
          }
        },
        viewQuery: function MatFormField_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.underlineRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._connectionContainerRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._inputContainerRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._label = _t.first);
          }
        },
        hostAttrs: [1, "mat-form-field"],
        hostVars: 44,
        hostBindings: function MatFormField_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-form-field-appearance-standard", ctx.appearance == "standard")("mat-form-field-appearance-fill", ctx.appearance == "fill")("mat-form-field-appearance-outline", ctx.appearance == "outline")("mat-form-field-appearance-legacy", ctx.appearance == "legacy")("mat-form-field-invalid", ctx._control.errorState)("mat-form-field-can-float", ctx._canLabelFloat())("mat-form-field-should-float", ctx._shouldLabelFloat())("mat-form-field-has-label", ctx._hasFloatingLabel())("mat-form-field-hide-placeholder", ctx._hideControlPlaceholder())("mat-form-field-disabled", ctx._control.disabled)("mat-form-field-autofilled", ctx._control.autofilled)("mat-focused", ctx._control.focused)("mat-accent", ctx.color == "accent")("mat-warn", ctx.color == "warn")("ng-untouched", ctx._shouldForward("untouched"))("ng-touched", ctx._shouldForward("touched"))("ng-pristine", ctx._shouldForward("pristine"))("ng-dirty", ctx._shouldForward("dirty"))("ng-valid", ctx._shouldForward("valid"))("ng-invalid", ctx._shouldForward("invalid"))("ng-pending", ctx._shouldForward("pending"))("_mat-animation-noopable", !ctx._animationsEnabled);
          }
        },
        inputs: {
          color: "color",
          floatLabel: "floatLabel",
          appearance: "appearance",
          hideRequiredMarker: "hideRequiredMarker",
          hintLabel: "hintLabel"
        },
        exportAs: ["matFormField"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: MAT_FORM_FIELD,
          useExisting: MatFormField
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c5,
        decls: 15,
        vars: 8,
        consts: [[1, "mat-form-field-wrapper"], [1, "mat-form-field-flex", 3, "click"], ["connectionContainer", ""], [4, "ngIf"], ["class", "mat-form-field-prefix", 4, "ngIf"], [1, "mat-form-field-infix"], ["inputContainer", ""], [1, "mat-form-field-label-wrapper"], ["class", "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "mat-empty", "mat-form-field-empty", "mat-accent", "mat-warn", "ngSwitch", "cdkObserveContent", 4, "ngIf"], ["class", "mat-form-field-suffix", 4, "ngIf"], ["class", "mat-form-field-underline", 4, "ngIf"], [1, "mat-form-field-subscript-wrapper", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "mat-form-field-hint-wrapper", 4, "ngSwitchCase"], [1, "mat-form-field-outline"], [1, "mat-form-field-outline-start"], [1, "mat-form-field-outline-gap"], [1, "mat-form-field-outline-end"], [1, "mat-form-field-outline", "mat-form-field-outline-thick"], [1, "mat-form-field-prefix"], [1, "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "ngSwitch", "cdkObserveContent"], ["label", ""], ["class", "mat-placeholder-required mat-form-field-required-marker", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "mat-placeholder-required", "mat-form-field-required-marker"], [1, "mat-form-field-suffix"], [1, "mat-form-field-underline"], ["underline", ""], [1, "mat-form-field-ripple"], [1, "mat-form-field-hint-wrapper"], ["class", "mat-hint", 3, "id", 4, "ngIf"], [1, "mat-form-field-hint-spacer"], [1, "mat-hint", 3, "id"]],
        template: function MatFormField_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatFormField_Template_div_click_1_listener($event) {
              return ctx._control.onContainerClick && ctx._control.onContainerClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MatFormField_ng_container_3_Template, 9, 0, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MatFormField_div_4_Template, 2, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MatFormField_label_9_Template, 5, 16, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MatFormField_div_10_Template, 2, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, MatFormField_div_11_Template, 3, 4, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, MatFormField_div_13_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, MatFormField_div_14_Template, 5, 2, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.appearance == "outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._prefixChildren.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._hasFloatingLabel());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._suffixChildren.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.appearance != "outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx._getDisplayedMessages());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "error");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "hint");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["CdkObserveContent"]],
        styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"],
        encapsulation: 2,
        data: {
          animation: [matFormFieldAnimations.transitionMessages]
        },
        changeDetection: 0
      });

      MatFormField.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatFormField.propDecorators = {
        appearance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        hideRequiredMarker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        hintLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        floatLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        underlineRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['underline']
        }],
        _connectionContainerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['connectionContainer', {
            "static": true
          }]
        }],
        _inputContainerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['inputContainer']
        }],
        _label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['label']
        }],
        _controlNonStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatFormFieldControl]
        }],
        _controlStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatFormFieldControl, {
            "static": true
          }]
        }],
        _labelChildNonStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatLabel]
        }],
        _labelChildStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatLabel, {
            "static": true
          }]
        }],
        _placeholderChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatPlaceholder]
        }],
        _errorChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [MAT_ERROR, {
            descendants: true
          }]
        }],
        _hintChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_MAT_HINT, {
            descendants: true
          }]
        }],
        _prefixChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [MAT_PREFIX, {
            descendants: true
          }]
        }],
        _suffixChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [MAT_SUFFIX, {
            descendants: true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatFormField, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'mat-form-field',
            exportAs: 'matFormField',
            template: "<div class=\"mat-form-field-wrapper\">\n  <div class=\"mat-form-field-flex\" #connectionContainer\n       (click)=\"_control.onContainerClick && _control.onContainerClick($event)\">\n\n    <!-- Outline used for outline appearance. -->\n    <ng-container *ngIf=\"appearance == 'outline'\">\n      <div class=\"mat-form-field-outline\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n      <div class=\"mat-form-field-outline mat-form-field-outline-thick\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n    </ng-container>\n\n    <div class=\"mat-form-field-prefix\" *ngIf=\"_prefixChildren.length\">\n      <ng-content select=\"[matPrefix]\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-infix\" #inputContainer>\n      <ng-content></ng-content>\n\n      <span class=\"mat-form-field-label-wrapper\">\n        <!-- We add aria-owns as a workaround for an issue in JAWS & NVDA where the label isn't\n             read if it comes before the control in the DOM. -->\n        <label class=\"mat-form-field-label\"\n               (cdkObserveContent)=\"updateOutlineGap()\"\n               [cdkObserveContentDisabled]=\"appearance != 'outline'\"\n               [id]=\"_labelId\"\n               [attr.for]=\"_control.id\"\n               [attr.aria-owns]=\"_control.id\"\n               [class.mat-empty]=\"_control.empty && !_shouldAlwaysFloat()\"\n               [class.mat-form-field-empty]=\"_control.empty && !_shouldAlwaysFloat()\"\n               [class.mat-accent]=\"color == 'accent'\"\n               [class.mat-warn]=\"color == 'warn'\"\n               #label\n               *ngIf=\"_hasFloatingLabel()\"\n               [ngSwitch]=\"_hasLabel()\">\n\n          <!-- @breaking-change 8.0.0 remove in favor of mat-label element an placeholder attr. -->\n          <ng-container *ngSwitchCase=\"false\">\n            <ng-content select=\"mat-placeholder\"></ng-content>\n            <span>{{_control.placeholder}}</span>\n          </ng-container>\n\n          <ng-content select=\"mat-label\" *ngSwitchCase=\"true\"></ng-content>\n\n          <!-- @breaking-change 8.0.0 remove `mat-placeholder-required` class -->\n          <span\n            class=\"mat-placeholder-required mat-form-field-required-marker\"\n            aria-hidden=\"true\"\n            *ngIf=\"!hideRequiredMarker && _control.required && !_control.disabled\">&#32;*</span>\n        </label>\n      </span>\n    </div>\n\n    <div class=\"mat-form-field-suffix\" *ngIf=\"_suffixChildren.length\">\n      <ng-content select=\"[matSuffix]\"></ng-content>\n    </div>\n  </div>\n\n  <!-- Underline used for legacy, standard, and box appearances. -->\n  <div class=\"mat-form-field-underline\" #underline\n       *ngIf=\"appearance != 'outline'\">\n    <span class=\"mat-form-field-ripple\"\n          [class.mat-accent]=\"color == 'accent'\"\n          [class.mat-warn]=\"color == 'warn'\"></span>\n  </div>\n\n  <div class=\"mat-form-field-subscript-wrapper\"\n       [ngSwitch]=\"_getDisplayedMessages()\">\n    <div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\">\n      <ng-content select=\"mat-error\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\"\n      [@transitionMessages]=\"_subscriptAnimationState\">\n      <!-- TODO(mmalerba): use an actual <mat-hint> once all selectors are switched to mat-* -->\n      <div *ngIf=\"hintLabel\" [id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div>\n      <ng-content select=\"mat-hint:not([align='end'])\"></ng-content>\n      <div class=\"mat-form-field-hint-spacer\"></div>\n      <ng-content select=\"mat-hint[align='end']\"></ng-content>\n    </div>\n  </div>\n</div>\n",
            animations: [matFormFieldAnimations.transitionMessages],
            host: {
              'class': 'mat-form-field',
              '[class.mat-form-field-appearance-standard]': 'appearance == "standard"',
              '[class.mat-form-field-appearance-fill]': 'appearance == "fill"',
              '[class.mat-form-field-appearance-outline]': 'appearance == "outline"',
              '[class.mat-form-field-appearance-legacy]': 'appearance == "legacy"',
              '[class.mat-form-field-invalid]': '_control.errorState',
              '[class.mat-form-field-can-float]': '_canLabelFloat()',
              '[class.mat-form-field-should-float]': '_shouldLabelFloat()',
              '[class.mat-form-field-has-label]': '_hasFloatingLabel()',
              '[class.mat-form-field-hide-placeholder]': '_hideControlPlaceholder()',
              '[class.mat-form-field-disabled]': '_control.disabled',
              '[class.mat-form-field-autofilled]': '_control.autofilled',
              '[class.mat-focused]': '_control.focused',
              '[class.mat-accent]': 'color == "accent"',
              '[class.mat-warn]': 'color == "warn"',
              '[class.ng-untouched]': '_shouldForward("untouched")',
              '[class.ng-touched]': '_shouldForward("touched")',
              '[class.ng-pristine]': '_shouldForward("pristine")',
              '[class.ng-dirty]': '_shouldForward("dirty")',
              '[class.ng-valid]': '_shouldForward("valid")',
              '[class.ng-invalid]': '_shouldForward("invalid")',
              '[class.ng-pending]': '_shouldForward("pending")',
              '[class._mat-animation-noopable]': '!_animationsEnabled'
            },
            inputs: ['color'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            providers: [{
              provide: MAT_FORM_FIELD,
              useExisting: MatFormField
            }],
            styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          floatLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          hideRequiredMarker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          hintLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          underlineRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['underline']
          }],
          _connectionContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['connectionContainer', {
              "static": true
            }]
          }],
          _inputContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['inputContainer']
          }],
          _label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['label']
          }],
          _controlNonStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatFormFieldControl]
          }],
          _controlStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatFormFieldControl, {
              "static": true
            }]
          }],
          _labelChildNonStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatLabel]
          }],
          _labelChildStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatLabel, {
              "static": true
            }]
          }],
          _placeholderChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatPlaceholder]
          }],
          _errorChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [MAT_ERROR, {
              descendants: true
            }]
          }],
          _hintChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [_MAT_HINT, {
              descendants: true
            }]
          }],
          _prefixChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [MAT_PREFIX, {
              descendants: true
            }]
          }],
          _suffixChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [MAT_SUFFIX, {
              descendants: true
            }]
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


      var MatFormFieldModule = function MatFormFieldModule() {
        _classCallCheck(this, MatFormFieldModule);
      };

      MatFormFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: MatFormFieldModule
      });
      MatFormFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function MatFormFieldModule_Factory(t) {
          return new (t || MatFormFieldModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatFormFieldModule, {
          declarations: function declarations() {
            return [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]];
          },
          exports: function exports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatFormFieldModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]],
            exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix]
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
      //# sourceMappingURL=form-field.js.map

      /***/

    },

    /***/
    "./node_modules/@angular/material/fesm2015/input.js":
    /*!**********************************************************!*\
      !*** ./node_modules/@angular/material/fesm2015/input.js ***!
      \**********************************************************/

    /*! exports provided: MAT_INPUT_VALUE_ACCESSOR, MatInput, MatInputModule, MatTextareaAutosize, getMatInputUnsupportedTypeError */

    /***/
    function node_modulesAngularMaterialFesm2015InputJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_INPUT_VALUE_ACCESSOR", function () {
        return MAT_INPUT_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatInput", function () {
        return MatInput;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatInputModule", function () {
        return MatInputModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTextareaAutosize", function () {
        return MatTextareaAutosize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatInputUnsupportedTypeError", function () {
        return getMatInputUnsupportedTypeError;
      });
      /* harmony import */


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      "./node_modules/@angular/cdk/fesm2015/text-field.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "./node_modules/@angular/cdk/fesm2015/platform.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/fesm2015/core.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/fesm2015/form-field.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Directive to automatically resize a textarea to fit its content.
       * @deprecated Use `cdkTextareaAutosize` from `@angular/cdk/text-field` instead.
       * @breaking-change 8.0.0
       */


      var MatTextareaAutosize = /*#__PURE__*/function (_angular_cdk_text_fie) {
        _inherits(MatTextareaAutosize, _angular_cdk_text_fie);

        var _super2 = _createSuper(MatTextareaAutosize);

        function MatTextareaAutosize() {
          _classCallCheck(this, MatTextareaAutosize);

          return _super2.apply(this, arguments);
        }

        _createClass(MatTextareaAutosize, [{
          key: "matAutosizeMinRows",
          get: function get() {
            return this.minRows;
          },
          set: function set(value) {
            this.minRows = value;
          }
        }, {
          key: "matAutosizeMaxRows",
          get: function get() {
            return this.maxRows;
          },
          set: function set(value) {
            this.maxRows = value;
          }
        }, {
          key: "matAutosize",
          get: function get() {
            return this.enabled;
          },
          set: function set(value) {
            this.enabled = value;
          }
        }, {
          key: "matTextareaAutosize",
          get: function get() {
            return this.enabled;
          },
          set: function set(value) {
            this.enabled = value;
          }
        }]);

        return MatTextareaAutosize;
      }(_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["CdkTextareaAutosize"]);

      MatTextareaAutosize.ɵfac = function MatTextareaAutosize_Factory(t) {
        return ɵMatTextareaAutosize_BaseFactory(t || MatTextareaAutosize);
      };

      MatTextareaAutosize.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatTextareaAutosize,
        selectors: [["textarea", "mat-autosize", ""], ["textarea", "matTextareaAutosize", ""]],
        hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize", "mat-autosize"],
        inputs: {
          cdkAutosizeMinRows: "cdkAutosizeMinRows",
          cdkAutosizeMaxRows: "cdkAutosizeMaxRows",
          matAutosizeMinRows: "matAutosizeMinRows",
          matAutosizeMaxRows: "matAutosizeMaxRows",
          matAutosize: ["mat-autosize", "matAutosize"],
          matTextareaAutosize: "matTextareaAutosize"
        },
        exportAs: ["matTextareaAutosize"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
      });
      MatTextareaAutosize.propDecorators = {
        matAutosizeMinRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        matAutosizeMaxRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        matAutosize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['mat-autosize']
        }],
        matTextareaAutosize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };

      var ɵMatTextareaAutosize_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatTextareaAutosize);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTextareaAutosize, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'textarea[mat-autosize], textarea[matTextareaAutosize]',
            exportAs: 'matTextareaAutosize',
            inputs: ['cdkAutosizeMinRows', 'cdkAutosizeMaxRows'],
            host: {
              'class': 'cdk-textarea-autosize mat-autosize',
              // Textarea elements that have the directive applied should have a single row by default.
              // Browsers normally show two rows by default and therefore this limits the minRows binding.
              'rows': '1'
            }
          }]
        }], null, {
          matAutosizeMinRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          matAutosizeMaxRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          matAutosize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mat-autosize']
          }],
          matTextareaAutosize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
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


      function getMatInputUnsupportedTypeError(type) {
        return Error("Input type \"".concat(type, "\" isn't supported by matInput."));
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * This token is used to inject the object whose value should be set into `MatInput`. If none is
       * provided, the native `HTMLInputElement` is used. Directives like `MatDatepickerInput` can provide
       * themselves for this token, in order to make `MatInput` delegate the getting and setting of the
       * value to them.
       */


      var MAT_INPUT_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MAT_INPUT_VALUE_ACCESSOR');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Invalid input type. Using one of these will throw an MatInputUnsupportedTypeError.

      var MAT_INPUT_INVALID_TYPES = ['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'range', 'reset', 'submit'];
      var nextUniqueId = 0; // Boilerplate for applying mixins to MatInput.

      /** @docs-private */

      var MatInputBase = function MatInputBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup,
      /** @docs-private */
      ngControl) {
        _classCallCheck(this, MatInputBase);

        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
      };

      var _MatInputMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinErrorState"])(MatInputBase);
      /** Directive that allows a native input to work inside a `MatFormField`. */


      var MatInput = /*#__PURE__*/function (_MatInputMixinBase2) {
        _inherits(MatInput, _MatInputMixinBase2);

        var _super3 = _createSuper(MatInput);

        function MatInput(_elementRef, _platform,
        /** @docs-private */
        ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, inputValueAccessor, _autofillMonitor, ngZone, // @breaking-change 8.0.0 `_formField` parameter to be made required.
        _formField) {
          var _this10;

          _classCallCheck(this, MatInput);

          _this10 = _super3.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
          _this10._elementRef = _elementRef;
          _this10._platform = _platform;
          _this10.ngControl = ngControl;
          _this10._autofillMonitor = _autofillMonitor;
          _this10._formField = _formField;
          _this10._uid = "mat-input-".concat(nextUniqueId++);
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

          _this10.focused = false;
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

          _this10.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

          _this10.controlType = 'mat-input';
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

          _this10.autofilled = false;
          _this10._disabled = false;
          _this10._required = false;
          _this10._type = 'text';
          _this10._readonly = false;
          _this10._neverEmptyInputTypes = ['date', 'datetime', 'datetime-local', 'month', 'time', 'week'].filter(function (t) {
            return Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["getSupportedInputTypes"])().has(t);
          });
          var element = _this10._elementRef.nativeElement;
          var nodeName = element.nodeName.toLowerCase(); // If no input value accessor was explicitly specified, use the element as the input value
          // accessor.

          _this10._inputValueAccessor = inputValueAccessor || element;
          _this10._previousNativeValue = _this10.value; // Force setter to be called in case id was not specified.

          _this10.id = _this10.id; // On some versions of iOS the caret gets stuck in the wrong place when holding down the delete
          // key. In order to get around this we need to "jiggle" the caret loose. Since this bug only
          // exists on iOS, we only bother to install the listener on iOS.

          if (_platform.IOS) {
            ngZone.runOutsideAngular(function () {
              _elementRef.nativeElement.addEventListener('keyup', function (event) {
                var el = event.target;

                if (!el.value && !el.selectionStart && !el.selectionEnd) {
                  // Note: Just setting `0, 0` doesn't fix the issue. Setting
                  // `1, 1` fixes it for the first time that you type text and
                  // then hold delete. Toggling to `1, 1` and then back to
                  // `0, 0` seems to completely fix it.
                  el.setSelectionRange(1, 1);
                  el.setSelectionRange(0, 0);
                }
              });
            });
          }

          _this10._isServer = !_this10._platform.isBrowser;
          _this10._isNativeSelect = nodeName === 'select';
          _this10._isTextarea = nodeName === 'textarea';

          if (_this10._isNativeSelect) {
            _this10.controlType = element.multiple ? 'mat-native-select-multiple' : 'mat-native-select';
          }

          return _this10;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */


        _createClass(MatInput, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this11 = this;

            if (this._platform.isBrowser) {
              this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(function (event) {
                _this11.autofilled = event.isAutofilled;

                _this11.stateChanges.next();
              });
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.stateChanges.next();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.stateChanges.complete();

            if (this._platform.isBrowser) {
              this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
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
            } // We need to dirty-check the native element's value, because there are some cases where
            // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
            // updating the value using `emitEvent: false`).


            this._dirtyCheckNativeValue(); // We need to dirty-check and set the placeholder attribute ourselves, because whether it's
            // present or not depends on a query which is prone to "changed after checked" errors.


            this._dirtyCheckPlaceholder();
          }
          /** Focuses the input. */

        }, {
          key: "focus",
          value: function focus(options) {
            this._elementRef.nativeElement.focus(options);
          } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.

          /** Callback for the cases where the focused state of the input changes. */
          // tslint:disable:no-host-decorator-in-concrete
          // tslint:enable:no-host-decorator-in-concrete

        }, {
          key: "_focusChanged",
          value: function _focusChanged(isFocused) {
            if (isFocused !== this.focused && (!this.readonly || !isFocused)) {
              this.focused = isFocused;
              this.stateChanges.next();
            }
          } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete

        }, {
          key: "_onInput",
          value: function _onInput() {// This is a noop function and is used to let Angular know whenever the value changes.
            // Angular will run a new change detection each time the `input` event has been dispatched.
            // It's necessary that Angular recognizes the value change, because when floatingLabel
            // is set to false and Angular forms aren't used, the placeholder won't recognize the
            // value changes and will not disappear.
            // Listening to the input event wouldn't be necessary when the input is using the
            // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.
          }
          /** Does some manual dirty checking on the native input `placeholder` attribute. */

        }, {
          key: "_dirtyCheckPlaceholder",
          value: function _dirtyCheckPlaceholder() {
            // If we're hiding the native placeholder, it should also be cleared from the DOM, otherwise
            // screen readers will read it out twice: once from the label and once from the attribute.
            // TODO: can be removed once we get rid of the `legacy` style for the form field, because it's
            // the only one that supports promoting the placeholder to a label.
            var formField = this._formField;
            var placeholder = !formField || !formField._hideControlPlaceholder() ? this.placeholder : null;

            if (placeholder !== this._previousPlaceholder) {
              var element = this._elementRef.nativeElement;
              this._previousPlaceholder = placeholder;
              placeholder ? element.setAttribute('placeholder', placeholder) : element.removeAttribute('placeholder');
            }
          }
          /** Does some manual dirty checking on the native input `value` property. */

        }, {
          key: "_dirtyCheckNativeValue",
          value: function _dirtyCheckNativeValue() {
            var newValue = this._elementRef.nativeElement.value;

            if (this._previousNativeValue !== newValue) {
              this._previousNativeValue = newValue;
              this.stateChanges.next();
            }
          }
          /** Make sure the input is a supported type. */

        }, {
          key: "_validateType",
          value: function _validateType() {
            if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1) {
              throw getMatInputUnsupportedTypeError(this._type);
            }
          }
          /** Checks whether the input type is one of the types that are never empty. */

        }, {
          key: "_isNeverEmpty",
          value: function _isNeverEmpty() {
            return this._neverEmptyInputTypes.indexOf(this._type) > -1;
          }
          /** Checks whether the input is invalid based on the native validation. */

        }, {
          key: "_isBadInput",
          value: function _isBadInput() {
            // The `validity` property won't be present on platform-server.
            var validity = this._elementRef.nativeElement.validity;
            return validity && validity.badInput;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "setDescribedByIds",

          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */
          value: function setDescribedByIds(ids) {
            this._ariaDescribedby = ids.join(' ');
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "onContainerClick",
          value: function onContainerClick() {
            // Do not re-focus the input element if the element is already focused. Otherwise it can happen
            // that someone clicks on a time input and the cursor resets to the "hours" field while the
            // "minutes" field was actually clicked. See: https://github.com/angular/components/issues/12849
            if (!this.focused) {
              this.focus();
            }
          }
        }, {
          key: "disabled",
          get: function get() {
            if (this.ngControl && this.ngControl.disabled !== null) {
              return this.ngControl.disabled;
            }

            return this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); // Browsers may not fire the blur event if the input is disabled too quickly.
            // Reset from here to ensure that the element doesn't become stuck.

            if (this.focused) {
              this.focused = false;
              this.stateChanges.next();
            }
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "id",
          get: function get() {
            return this._id;
          },
          set: function set(value) {
            this._id = value || this._uid;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
          }
          /** Input type of the element. */

        }, {
          key: "type",
          get: function get() {
            return this._type;
          },
          set: function set(value) {
            this._type = value || 'text';

            this._validateType(); // When using Angular inputs, developers are no longer able to set the properties on the native
            // input element. To ensure that bindings for `type` work, we need to sync the setter
            // with the native property. Textarea elements don't support the type property or attribute.


            if (!this._isTextarea && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["getSupportedInputTypes"])().has(this._type)) {
              this._elementRef.nativeElement.type = this._type;
            }
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "value",
          get: function get() {
            return this._inputValueAccessor.value;
          },
          set: function set(value) {
            if (value !== this.value) {
              this._inputValueAccessor.value = value;
              this.stateChanges.next();
            }
          }
          /** Whether the element is readonly. */

        }, {
          key: "readonly",
          get: function get() {
            return this._readonly;
          },
          set: function set(value) {
            this._readonly = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "empty",
          get: function get() {
            return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "shouldLabelFloat",
          get: function get() {
            if (this._isNativeSelect) {
              // For a single-selection `<select>`, the label should float when the selected option has
              // a non-empty display value. For a `<select multiple>`, the label *always* floats to avoid
              // overlapping the label with the options.
              var selectElement = this._elementRef.nativeElement;
              var firstOption = selectElement.options[0]; // On most browsers the `selectedIndex` will always be 0, however on IE and Edge it'll be
              // -1 if the `value` is set to something, that isn't in the list of options, at a later point.

              return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
            } else {
              return this.focused || !this.empty;
            }
          }
        }]);

        return MatInput;
      }(_MatInputMixinBase);

      MatInput.ɵfac = function MatInput_Factory(t) {
        return new (t || MatInput)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_INPUT_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], 8));
      };

      MatInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatInput,
        selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]],
        hostAttrs: [1, "mat-input-element", "mat-form-field-autofill-control"],
        hostVars: 10,
        hostBindings: function MatInput_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatInput_focus_HostBindingHandler() {
              return ctx._focusChanged(true);
            })("blur", function MatInput_blur_HostBindingHandler() {
              return ctx._focusChanged(false);
            })("input", function MatInput_input_HostBindingHandler() {
              return ctx._onInput();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("disabled", ctx.disabled)("required", ctx.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id)("data-placeholder", ctx.placeholder)("readonly", ctx.readonly && !ctx._isNativeSelect || null)("aria-describedby", ctx._ariaDescribedby || null)("aria-invalid", ctx.errorState)("aria-required", ctx.required.toString());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-input-server", ctx._isServer);
          }
        },
        inputs: {
          id: "id",
          disabled: "disabled",
          required: "required",
          type: "type",
          value: "value",
          readonly: "readonly",
          placeholder: "placeholder",
          errorStateMatcher: "errorStateMatcher"
        },
        exportAs: ["matInput"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"],
          useExisting: MatInput
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });

      MatInput.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_INPUT_VALUE_ACCESSOR]
          }]
        }, {
          type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      };

      MatInput.propDecorators = {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        errorStateMatcher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        _focusChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['focus', ['true']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['blur', ['false']]
        }],
        _onInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['input']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatInput, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: "input[matInput], textarea[matInput], select[matNativeControl],\n      input[matNativeControl], textarea[matNativeControl]",
            exportAs: 'matInput',
            host: {
              /**
               * @breaking-change 8.0.0 remove .mat-form-field-autofill-control in favor of AutofillMonitor.
               */
              'class': 'mat-input-element mat-form-field-autofill-control',
              '[class.mat-input-server]': '_isServer',
              // Native input properties that are overwritten by Angular inputs need to be synced with
              // the native input element. Otherwise property bindings for those don't work.
              '[attr.id]': 'id',
              // At the time of writing, we have a lot of customer tests that look up the input based on its
              // placeholder. Since we sometimes omit the placeholder attribute from the DOM to prevent screen
              // readers from reading it twice, we have to keep it somewhere in the DOM for the lookup.
              '[attr.data-placeholder]': 'placeholder',
              '[disabled]': 'disabled',
              '[required]': 'required',
              '[attr.readonly]': 'readonly && !_isNativeSelect || null',
              '[attr.aria-describedby]': '_ariaDescribedby || null',
              '[attr.aria-invalid]': 'errorState',
              '[attr.aria-required]': 'required.toString()'
            },
            providers: [{
              provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"],
              useExisting: MatInput
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [MAT_INPUT_VALUE_ACCESSOR]
            }]
          }, {
            type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          _focusChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['focus', ['true']]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['blur', ['false']]
          }],
          _onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['input']
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
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


      var MatInputModule = function MatInputModule() {
        _classCallCheck(this, MatInputModule);
      };

      MatInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: MatInputModule
      });
      MatInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function MatInputModule_Factory(t) {
          return new (t || MatInputModule)();
        },
        providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]],
        imports: [[_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
        // be used together with `MatFormField`.
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatInputModule, {
          declarations: function declarations() {
            return [MatInput, MatTextareaAutosize];
          },
          imports: function imports() {
            return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]];
          },
          exports: function exports() {
            return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
            // be used together with `MatFormField`.
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], MatInput, MatTextareaAutosize];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatInputModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [MatInput, MatTextareaAutosize],
            imports: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]],
            exports: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
            // be used together with `MatFormField`.
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], MatInput, MatTextareaAutosize],
            providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]]
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
      //# sourceMappingURL=input.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~pages-notification-notification-module~pages-others-others-module-es5.js.map