(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-notification-notification-module~pages-others-others-module~pages-subscription-subscri~5eec4b58"], {
    /***/
    "./node_modules/@angular/cdk/fesm2015/overlay.js":
    /*!*******************************************************!*\
      !*** ./node_modules/@angular/cdk/fesm2015/overlay.js ***!
      \*******************************************************/

    /*! exports provided: CdkScrollable, ScrollDispatcher, ViewportRuler, BlockScrollStrategy, CdkConnectedOverlay, CdkOverlayOrigin, CloseScrollStrategy, ConnectedOverlayPositionChange, ConnectedPositionStrategy, ConnectionPositionPair, FlexibleConnectedPositionStrategy, FullscreenOverlayContainer, GlobalPositionStrategy, NoopScrollStrategy, OVERLAY_PROVIDERS, Overlay, OverlayConfig, OverlayContainer, OverlayKeyboardDispatcher, OverlayModule, OverlayOutsideClickDispatcher, OverlayPositionBuilder, OverlayRef, RepositionScrollStrategy, ScrollStrategyOptions, ScrollingVisibility, validateHorizontalPosition, validateVerticalPosition, ɵangular_material_src_cdk_overlay_overlay_a, ɵangular_material_src_cdk_overlay_overlay_b, ɵangular_material_src_cdk_overlay_overlay_c, ɵangular_material_src_cdk_overlay_overlay_d, ɵangular_material_src_cdk_overlay_overlay_e, ɵangular_material_src_cdk_overlay_overlay_f, ɵangular_material_src_cdk_overlay_overlay_g, ɵangular_material_src_cdk_overlay_overlay_h */

    /***/
    function node_modulesAngularCdkFesm2015OverlayJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlockScrollStrategy", function () {
        return BlockScrollStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkConnectedOverlay", function () {
        return CdkConnectedOverlay;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkOverlayOrigin", function () {
        return CdkOverlayOrigin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CloseScrollStrategy", function () {
        return CloseScrollStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectedOverlayPositionChange", function () {
        return ConnectedOverlayPositionChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectedPositionStrategy", function () {
        return ConnectedPositionStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectionPositionPair", function () {
        return ConnectionPositionPair;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexibleConnectedPositionStrategy", function () {
        return FlexibleConnectedPositionStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FullscreenOverlayContainer", function () {
        return FullscreenOverlayContainer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalPositionStrategy", function () {
        return GlobalPositionStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoopScrollStrategy", function () {
        return NoopScrollStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OVERLAY_PROVIDERS", function () {
        return OVERLAY_PROVIDERS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Overlay", function () {
        return Overlay;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayConfig", function () {
        return OverlayConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayContainer", function () {
        return OverlayContainer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayKeyboardDispatcher", function () {
        return OverlayKeyboardDispatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayModule", function () {
        return OverlayModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayOutsideClickDispatcher", function () {
        return OverlayOutsideClickDispatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayPositionBuilder", function () {
        return OverlayPositionBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayRef", function () {
        return OverlayRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RepositionScrollStrategy", function () {
        return RepositionScrollStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollStrategyOptions", function () {
        return ScrollStrategyOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollingVisibility", function () {
        return ScrollingVisibility;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateHorizontalPosition", function () {
        return validateHorizontalPosition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateVerticalPosition", function () {
        return validateVerticalPosition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_a", function () {
        return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_b", function () {
        return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_c", function () {
        return OVERLAY_CONTAINER_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_d", function () {
        return OVERLAY_CONTAINER_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_e", function () {
        return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_f", function () {
        return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_g", function () {
        return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_h", function () {
        return BaseOverlayDispatcher;
      });
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "./node_modules/@angular/cdk/fesm2015/scrolling.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "./node_modules/@angular/cdk/fesm2015/platform.js");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "./node_modules/@angular/cdk/fesm2015/bidi.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CdkScrollable", function () {
        return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkScrollable"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function () {
        return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ViewportRuler", function () {
        return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"];
      });
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "./node_modules/@angular/cdk/fesm2015/portal.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "./node_modules/@angular/cdk/fesm2015/keycodes.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Strategy that will prevent the user from scrolling while the overlay is visible.
       */


      var BlockScrollStrategy = /*#__PURE__*/function () {
        function BlockScrollStrategy(_viewportRuler, document) {
          _classCallCheck(this, BlockScrollStrategy);

          this._viewportRuler = _viewportRuler;
          this._previousHTMLStyles = {
            top: '',
            left: ''
          };
          this._isEnabled = false;
          this._document = document;
        }
        /** Attaches this scroll strategy to an overlay. */


        _createClass(BlockScrollStrategy, [{
          key: "attach",
          value: function attach() {}
          /** Blocks page-level scroll while the attached overlay is open. */

        }, {
          key: "enable",
          value: function enable() {
            if (this._canBeEnabled()) {
              var root = this._document.documentElement;
              this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition(); // Cache the previous inline styles in case the user had set them.

              this._previousHTMLStyles.left = root.style.left || '';
              this._previousHTMLStyles.top = root.style.top || ''; // Note: we're using the `html` node, instead of the `body`, because the `body` may
              // have the user agent margin, whereas the `html` is guaranteed not to have one.

              root.style.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(-this._previousScrollPosition.left);
              root.style.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(-this._previousScrollPosition.top);
              root.classList.add('cdk-global-scrollblock');
              this._isEnabled = true;
            }
          }
          /** Unblocks page-level scroll while the attached overlay is open. */

        }, {
          key: "disable",
          value: function disable() {
            if (this._isEnabled) {
              var html = this._document.documentElement;
              var body = this._document.body;
              var htmlStyle = html.style;
              var bodyStyle = body.style;
              var previousHtmlScrollBehavior = htmlStyle.scrollBehavior || '';
              var previousBodyScrollBehavior = bodyStyle.scrollBehavior || '';
              this._isEnabled = false;
              htmlStyle.left = this._previousHTMLStyles.left;
              htmlStyle.top = this._previousHTMLStyles.top;
              html.classList.remove('cdk-global-scrollblock'); // Disable user-defined smooth scrolling temporarily while we restore the scroll position.
              // See https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior

              htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = 'auto';
              window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
              htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
              bodyStyle.scrollBehavior = previousBodyScrollBehavior;
            }
          }
        }, {
          key: "_canBeEnabled",
          value: function _canBeEnabled() {
            // Since the scroll strategies can't be singletons, we have to use a global CSS class
            // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
            // scrolling multiple times.
            var html = this._document.documentElement;

            if (html.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
              return false;
            }

            var body = this._document.body;

            var viewport = this._viewportRuler.getViewportSize();

            return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
          }
        }]);

        return BlockScrollStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
       */


      function getMatScrollStrategyAlreadyAttachedError() {
        return Error("Scroll strategy has already been attached.");
      }
      /**
       * Strategy that will close the overlay as soon as the user starts scrolling.
       */


      var CloseScrollStrategy = /*#__PURE__*/function () {
        function CloseScrollStrategy(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
          var _this = this;

          _classCallCheck(this, CloseScrollStrategy);

          this._scrollDispatcher = _scrollDispatcher;
          this._ngZone = _ngZone;
          this._viewportRuler = _viewportRuler;
          this._config = _config;
          this._scrollSubscription = null;
          /** Detaches the overlay ref and disables the scroll strategy. */

          this._detach = function () {
            _this.disable();

            if (_this._overlayRef.hasAttached()) {
              _this._ngZone.run(function () {
                return _this._overlayRef.detach();
              });
            }
          };
        }
        /** Attaches this scroll strategy to an overlay. */


        _createClass(CloseScrollStrategy, [{
          key: "attach",
          value: function attach(overlayRef) {
            if (this._overlayRef) {
              throw getMatScrollStrategyAlreadyAttachedError();
            }

            this._overlayRef = overlayRef;
          }
          /** Enables the closing of the attached overlay on scroll. */

        }, {
          key: "enable",
          value: function enable() {
            var _this2 = this;

            if (this._scrollSubscription) {
              return;
            }

            var stream = this._scrollDispatcher.scrolled(0);

            if (this._config && this._config.threshold && this._config.threshold > 1) {
              this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
              this._scrollSubscription = stream.subscribe(function () {
                var scrollPosition = _this2._viewportRuler.getViewportScrollPosition().top;

                if (Math.abs(scrollPosition - _this2._initialScrollPosition) > _this2._config.threshold) {
                  _this2._detach();
                } else {
                  _this2._overlayRef.updatePosition();
                }
              });
            } else {
              this._scrollSubscription = stream.subscribe(this._detach);
            }
          }
          /** Disables the closing the attached overlay on scroll. */

        }, {
          key: "disable",
          value: function disable() {
            if (this._scrollSubscription) {
              this._scrollSubscription.unsubscribe();

              this._scrollSubscription = null;
            }
          }
        }, {
          key: "detach",
          value: function detach() {
            this.disable();
            this._overlayRef = null;
          }
        }]);

        return CloseScrollStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Scroll strategy that doesn't do anything. */


      var NoopScrollStrategy = /*#__PURE__*/function () {
        function NoopScrollStrategy() {
          _classCallCheck(this, NoopScrollStrategy);
        }

        _createClass(NoopScrollStrategy, [{
          key: "enable",

          /** Does nothing, as this scroll strategy is a no-op. */
          value: function enable() {}
          /** Does nothing, as this scroll strategy is a no-op. */

        }, {
          key: "disable",
          value: function disable() {}
          /** Does nothing, as this scroll strategy is a no-op. */

        }, {
          key: "attach",
          value: function attach() {}
        }]);

        return NoopScrollStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // TODO(jelbourn): move this to live with the rest of the scrolling code
      // TODO(jelbourn): someday replace this with IntersectionObservers

      /**
       * Gets whether an element is scrolled outside of view by any of its parent scrolling containers.
       * @param element Dimensions of the element (from getBoundingClientRect)
       * @param scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
       * @returns Whether the element is scrolled out of view
       * @docs-private
       */


      function isElementScrolledOutsideView(element, scrollContainers) {
        return scrollContainers.some(function (containerBounds) {
          var outsideAbove = element.bottom < containerBounds.top;
          var outsideBelow = element.top > containerBounds.bottom;
          var outsideLeft = element.right < containerBounds.left;
          var outsideRight = element.left > containerBounds.right;
          return outsideAbove || outsideBelow || outsideLeft || outsideRight;
        });
      }
      /**
       * Gets whether an element is clipped by any of its scrolling containers.
       * @param element Dimensions of the element (from getBoundingClientRect)
       * @param scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
       * @returns Whether the element is clipped
       * @docs-private
       */


      function isElementClippedByScrolling(element, scrollContainers) {
        return scrollContainers.some(function (scrollContainerRect) {
          var clippedAbove = element.top < scrollContainerRect.top;
          var clippedBelow = element.bottom > scrollContainerRect.bottom;
          var clippedLeft = element.left < scrollContainerRect.left;
          var clippedRight = element.right > scrollContainerRect.right;
          return clippedAbove || clippedBelow || clippedLeft || clippedRight;
        });
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Strategy that will update the element position as the user is scrolling.
       */


      var RepositionScrollStrategy = /*#__PURE__*/function () {
        function RepositionScrollStrategy(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
          _classCallCheck(this, RepositionScrollStrategy);

          this._scrollDispatcher = _scrollDispatcher;
          this._viewportRuler = _viewportRuler;
          this._ngZone = _ngZone;
          this._config = _config;
          this._scrollSubscription = null;
        }
        /** Attaches this scroll strategy to an overlay. */


        _createClass(RepositionScrollStrategy, [{
          key: "attach",
          value: function attach(overlayRef) {
            if (this._overlayRef) {
              throw getMatScrollStrategyAlreadyAttachedError();
            }

            this._overlayRef = overlayRef;
          }
          /** Enables repositioning of the attached overlay on scroll. */

        }, {
          key: "enable",
          value: function enable() {
            var _this3 = this;

            if (!this._scrollSubscription) {
              var throttle = this._config ? this._config.scrollThrottle : 0;
              this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(function () {
                _this3._overlayRef.updatePosition(); // TODO(crisbeto): make `close` on by default once all components can handle it.


                if (_this3._config && _this3._config.autoClose) {
                  var overlayRect = _this3._overlayRef.overlayElement.getBoundingClientRect();

                  var _this3$_viewportRuler = _this3._viewportRuler.getViewportSize(),
                      width = _this3$_viewportRuler.width,
                      height = _this3$_viewportRuler.height; // TODO(crisbeto): include all ancestor scroll containers here once
                  // we have a way of exposing the trigger element to the scroll strategy.


                  var parentRects = [{
                    width: width,
                    height: height,
                    bottom: height,
                    right: width,
                    top: 0,
                    left: 0
                  }];

                  if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                    _this3.disable();

                    _this3._ngZone.run(function () {
                      return _this3._overlayRef.detach();
                    });
                  }
                }
              });
            }
          }
          /** Disables repositioning of the attached overlay on scroll. */

        }, {
          key: "disable",
          value: function disable() {
            if (this._scrollSubscription) {
              this._scrollSubscription.unsubscribe();

              this._scrollSubscription = null;
            }
          }
        }, {
          key: "detach",
          value: function detach() {
            this.disable();
            this._overlayRef = null;
          }
        }]);

        return RepositionScrollStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Options for how an overlay will handle scrolling.
       *
       * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
       * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
       */


      var ScrollStrategyOptions = function ScrollStrategyOptions(_scrollDispatcher, _viewportRuler, _ngZone, document) {
        var _this4 = this;

        _classCallCheck(this, ScrollStrategyOptions);

        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        /** Do nothing on scroll. */

        this.noop = function () {
          return new NoopScrollStrategy();
        };
        /**
         * Close the overlay as soon as the user scrolls.
         * @param config Configuration to be used inside the scroll strategy.
         */


        this.close = function (config) {
          return new CloseScrollStrategy(_this4._scrollDispatcher, _this4._ngZone, _this4._viewportRuler, config);
        };
        /** Block scrolling. */


        this.block = function () {
          return new BlockScrollStrategy(_this4._viewportRuler, _this4._document);
        };
        /**
         * Update the overlay's position on scroll.
         * @param config Configuration to be used inside the scroll strategy.
         * Allows debouncing the reposition calls.
         */


        this.reposition = function (config) {
          return new RepositionScrollStrategy(_this4._scrollDispatcher, _this4._viewportRuler, _this4._ngZone, config);
        };

        this._document = document;
      };

      ScrollStrategyOptions.ɵfac = function ScrollStrategyOptions_Factory(t) {
        return new (t || ScrollStrategyOptions)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      };

      ScrollStrategyOptions.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function ScrollStrategyOptions_Factory() {
          return new ScrollStrategyOptions(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
        },
        token: ScrollStrategyOptions,
        providedIn: "root"
      });

      ScrollStrategyOptions.ctorParameters = function () {
        return [{
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollStrategyOptions, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
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

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Initial configuration used when creating an overlay. */


      var OverlayConfig = function OverlayConfig(config) {
        _classCallCheck(this, OverlayConfig);

        /** Strategy to be used when handling scroll events while the overlay is open. */
        this.scrollStrategy = new NoopScrollStrategy();
        /** Custom class to add to the overlay pane. */

        this.panelClass = '';
        /** Whether the overlay has a backdrop. */

        this.hasBackdrop = false;
        /** Custom class to add to the backdrop */

        this.backdropClass = 'cdk-overlay-dark-backdrop';
        /**
         * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */

        this.disposeOnNavigation = false;
        /**
         * Array of HTML elements clicking on which should not be considered as outside click
         */

        this.excludeFromOutsideClick = [];

        if (config) {
          // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
          // loses the array generic type in the `for of`. But we *also* have to use `Array` because
          // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`
          var configKeys = Object.keys(config);

          for (var _i = 0, _configKeys = configKeys; _i < _configKeys.length; _i++) {
            var key = _configKeys[_i];

            if (config[key] !== undefined) {
              // TypeScript, as of version 3.5, sees the left-hand-side of this expression
              // as "I don't know *which* key this is, so the only valid value is the intersection
              // of all the posible values." In this case, that happens to be `undefined`. TypeScript
              // is not smart enough to see that the right-hand-side is actually an access of the same
              // exact type with the same exact key, meaning that the value type must be identical.
              // So we use `any` to work around this.
              this[key] = config[key];
            }
          }
        }
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** The points of the origin element and the overlay element to connect. */


      var ConnectionPositionPair = function ConnectionPositionPair(origin, overlay,
      /** Offset along the X axis. */
      offsetX,
      /** Offset along the Y axis. */
      offsetY,
      /** Class(es) to be applied to the panel while this position is active. */
      panelClass) {
        _classCallCheck(this, ConnectionPositionPair);

        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.panelClass = panelClass;
        this.originX = origin.originX;
        this.originY = origin.originY;
        this.overlayX = overlay.overlayX;
        this.overlayY = overlay.overlayY;
      };
      /**
       * Set of properties regarding the position of the origin and overlay relative to the viewport
       * with respect to the containing Scrollable elements.
       *
       * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
       * bounds of any one of the strategy's Scrollable's bounding client rectangle.
       *
       * The overlay and origin are outside view if there is no overlap between their bounding client
       * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
       *
       *       -----------                    -----------
       *       | outside |                    | clipped |
       *       |  view   |              --------------------------
       *       |         |              |     |         |        |
       *       ----------               |     -----------        |
       *  --------------------------    |                        |
       *  |                        |    |      Scrollable        |
       *  |                        |    |                        |
       *  |                        |     --------------------------
       *  |      Scrollable        |
       *  |                        |
       *  --------------------------
       *
       *  @docs-private
       */


      var ScrollingVisibility = function ScrollingVisibility() {
        _classCallCheck(this, ScrollingVisibility);
      };
      /** The change event emitted by the strategy when a fallback position is used. */


      var ConnectedOverlayPositionChange = function ConnectedOverlayPositionChange(
      /** The position used as a result of this change. */
      connectionPair,
      /** @docs-private */
      scrollableViewProperties) {
        _classCallCheck(this, ConnectedOverlayPositionChange);

        this.connectionPair = connectionPair;
        this.scrollableViewProperties = scrollableViewProperties;
      };

      ConnectedOverlayPositionChange.ctorParameters = function () {
        return [{
          type: ConnectionPositionPair
        }, {
          type: ScrollingVisibility,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      };
      /**
       * Validates whether a vertical position property matches the expected values.
       * @param property Name of the property being validated.
       * @param value Value of the property being validated.
       * @docs-private
       */


      function validateVerticalPosition(property, value) {
        if (value !== 'top' && value !== 'bottom' && value !== 'center') {
          throw Error("ConnectedPosition: Invalid ".concat(property, " \"").concat(value, "\". ") + "Expected \"top\", \"bottom\" or \"center\".");
        }
      }
      /**
       * Validates whether a horizontal position property matches the expected values.
       * @param property Name of the property being validated.
       * @param value Value of the property being validated.
       * @docs-private
       */


      function validateHorizontalPosition(property, value) {
        if (value !== 'start' && value !== 'end' && value !== 'center') {
          throw Error("ConnectedPosition: Invalid ".concat(property, " \"").concat(value, "\". ") + "Expected \"start\", \"end\" or \"center\".");
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Service for dispatching events that land on the body to appropriate overlay ref,
       * if any. It maintains a list of attached overlays to determine best suited overlay based
       * on event target and order of overlay opens.
       */


      var BaseOverlayDispatcher = /*#__PURE__*/function () {
        function BaseOverlayDispatcher(document) {
          _classCallCheck(this, BaseOverlayDispatcher);

          /** Currently attached overlays in the order they were attached. */
          this._attachedOverlays = [];
          this._document = document;
        }

        _createClass(BaseOverlayDispatcher, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.detach();
          }
          /** Add a new overlay to the list of attached overlay refs. */

        }, {
          key: "add",
          value: function add(overlayRef) {
            // Ensure that we don't get the same overlay multiple times.
            this.remove(overlayRef);

            this._attachedOverlays.push(overlayRef);
          }
          /** Remove an overlay from the list of attached overlay refs. */

        }, {
          key: "remove",
          value: function remove(overlayRef) {
            var index = this._attachedOverlays.indexOf(overlayRef);

            if (index > -1) {
              this._attachedOverlays.splice(index, 1);
            } // Remove the global listener once there are no more overlays.


            if (this._attachedOverlays.length === 0) {
              this.detach();
            }
          }
        }]);

        return BaseOverlayDispatcher;
      }();

      BaseOverlayDispatcher.ɵfac = function BaseOverlayDispatcher_Factory(t) {
        return new (t || BaseOverlayDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      };

      BaseOverlayDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function BaseOverlayDispatcher_Factory() {
          return new BaseOverlayDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
        },
        token: BaseOverlayDispatcher,
        providedIn: "root"
      });

      BaseOverlayDispatcher.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BaseOverlayDispatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
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

      /**
       * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
       * if any. It maintains a list of attached overlays to determine best suited overlay based
       * on event target and order of overlay opens.
       */


      var OverlayKeyboardDispatcher = /*#__PURE__*/function (_BaseOverlayDispatche) {
        _inherits(OverlayKeyboardDispatcher, _BaseOverlayDispatche);

        var _super = _createSuper(OverlayKeyboardDispatcher);

        function OverlayKeyboardDispatcher(document) {
          var _this5;

          _classCallCheck(this, OverlayKeyboardDispatcher);

          _this5 = _super.call(this, document);
          /** Keyboard event listener that will be attached to the body. */

          _this5._keydownListener = function (event) {
            var overlays = _this5._attachedOverlays;

            for (var i = overlays.length - 1; i > -1; i--) {
              // Dispatch the keydown event to the top overlay which has subscribers to its keydown events.
              // We want to target the most recent overlay, rather than trying to match where the event came
              // from, because some components might open an overlay, but keep focus on a trigger element
              // (e.g. for select and autocomplete). We skip overlays without keydown event subscriptions,
              // because we don't want overlays that don't handle keyboard events to block the ones below
              // them that do.
              if (overlays[i]._keydownEvents.observers.length > 0) {
                overlays[i]._keydownEvents.next(event);

                break;
              }
            }
          };

          return _this5;
        }
        /** Add a new overlay to the list of attached overlay refs. */


        _createClass(OverlayKeyboardDispatcher, [{
          key: "add",
          value: function add(overlayRef) {
            _get(_getPrototypeOf(OverlayKeyboardDispatcher.prototype), "add", this).call(this, overlayRef); // Lazily start dispatcher once first overlay is added


            if (!this._isAttached) {
              this._document.body.addEventListener('keydown', this._keydownListener);

              this._isAttached = true;
            }
          }
          /** Detaches the global keyboard event listener. */

        }, {
          key: "detach",
          value: function detach() {
            if (this._isAttached) {
              this._document.body.removeEventListener('keydown', this._keydownListener);

              this._isAttached = false;
            }
          }
        }]);

        return OverlayKeyboardDispatcher;
      }(BaseOverlayDispatcher);

      OverlayKeyboardDispatcher.ɵfac = function OverlayKeyboardDispatcher_Factory(t) {
        return new (t || OverlayKeyboardDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      };

      OverlayKeyboardDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function OverlayKeyboardDispatcher_Factory() {
          return new OverlayKeyboardDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
        },
        token: OverlayKeyboardDispatcher,
        providedIn: "root"
      });

      OverlayKeyboardDispatcher.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayKeyboardDispatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /** @docs-private @deprecated @breaking-change 8.0.0 */


      function OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY(dispatcher, _document) {
        return dispatcher || new OverlayKeyboardDispatcher(_document);
      }
      /** @docs-private @deprecated @breaking-change 8.0.0 */


      var OVERLAY_KEYBOARD_DISPATCHER_PROVIDER = {
        // If there is already an OverlayKeyboardDispatcher available, use that.
        // Otherwise, provide a new one.
        provide: OverlayKeyboardDispatcher,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), OverlayKeyboardDispatcher], // Coerce to `InjectionToken` so that the `deps` match the "shape"
        // of the type expected by Angular
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]],
        useFactory: OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Service for dispatching mouse click events that land on the body to appropriate overlay ref,
       * if any. It maintains a list of attached overlays to determine best suited overlay based
       * on event target and order of overlay opens.
       */

      var OverlayOutsideClickDispatcher = /*#__PURE__*/function (_BaseOverlayDispatche2) {
        _inherits(OverlayOutsideClickDispatcher, _BaseOverlayDispatche2);

        var _super2 = _createSuper(OverlayOutsideClickDispatcher);

        function OverlayOutsideClickDispatcher(document, _platform) {
          var _this6;

          _classCallCheck(this, OverlayOutsideClickDispatcher);

          _this6 = _super2.call(this, document);
          _this6._platform = _platform;
          _this6._cursorStyleIsSet = false;
          /** Click event listener that will be attached to the body propagate phase. */

          _this6._clickListener = function (event) {
            // Get the target through the `composedPath` if possible to account for shadow DOM.
            var target = event.composedPath ? event.composedPath()[0] : event.target;
            var overlays = _this6._attachedOverlays; // Dispatch the mouse event to the top overlay which has subscribers to its mouse events.
            // We want to target all overlays for which the click could be considered as outside click.
            // As soon as we reach an overlay for which the click is not outside click we break off
            // the loop.

            for (var i = overlays.length - 1; i > -1; i--) {
              var overlayRef = overlays[i];

              if (overlayRef._outsidePointerEvents.observers.length < 1) {
                continue;
              }

              var config = overlayRef.getConfig();
              var excludeElements = [].concat(_toConsumableArray(config.excludeFromOutsideClick), [overlayRef.overlayElement]);
              var isInsideClick = excludeElements.some(function (e) {
                return e.contains(target);
              }); // If it is inside click just break - we should do nothing
              // If it is outside click dispatch the mouse event, and proceed with the next overlay

              if (isInsideClick) {
                break;
              }

              overlayRef._outsidePointerEvents.next(event);
            }
          };

          return _this6;
        }
        /** Add a new overlay to the list of attached overlay refs. */


        _createClass(OverlayOutsideClickDispatcher, [{
          key: "add",
          value: function add(overlayRef) {
            _get(_getPrototypeOf(OverlayOutsideClickDispatcher.prototype), "add", this).call(this, overlayRef); // tslint:disable: max-line-length
            // Safari on iOS does not generate click events for non-interactive
            // elements. However, we want to receive a click for any element outside
            // the overlay. We can force a "clickable" state by setting
            // `cursor: pointer` on the document body.
            // See https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event#Safari_Mobile
            // and https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html
            // tslint:enable: max-line-length


            if (!this._isAttached) {
              this._document.body.addEventListener('click', this._clickListener, true); // click event is not fired on iOS. To make element "clickable" we are
              // setting the cursor to pointer


              if (this._platform.IOS && !this._cursorStyleIsSet) {
                this._cursorOriginalValue = this._document.body.style.cursor;
                this._document.body.style.cursor = 'pointer';
                this._cursorStyleIsSet = true;
              }

              this._isAttached = true;
            }
          }
          /** Detaches the global keyboard event listener. */

        }, {
          key: "detach",
          value: function detach() {
            if (this._isAttached) {
              this._document.body.removeEventListener('click', this._clickListener, true);

              if (this._platform.IOS && this._cursorStyleIsSet) {
                this._document.body.style.cursor = this._cursorOriginalValue;
                this._cursorStyleIsSet = false;
              }

              this._isAttached = false;
            }
          }
        }]);

        return OverlayOutsideClickDispatcher;
      }(BaseOverlayDispatcher);

      OverlayOutsideClickDispatcher.ɵfac = function OverlayOutsideClickDispatcher_Factory(t) {
        return new (t || OverlayOutsideClickDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
      };

      OverlayOutsideClickDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function OverlayOutsideClickDispatcher_Factory() {
          return new OverlayOutsideClickDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
        },
        token: OverlayOutsideClickDispatcher,
        providedIn: "root"
      });

      OverlayOutsideClickDispatcher.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayOutsideClickDispatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
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

      /**
       * Whether we're in a testing environment.
       * TODO(crisbeto): remove this once we have an overlay testing module.
       */


      var isTestEnvironment = typeof window !== 'undefined' && !!window && !!(window.__karma__ || window.jasmine);
      /** Container inside which all overlays will render. */

      var OverlayContainer = /*#__PURE__*/function () {
        function OverlayContainer(document,
        /**
         * @deprecated `platform` parameter to become required.
         * @breaking-change 10.0.0
         */
        _platform) {
          _classCallCheck(this, OverlayContainer);

          this._platform = _platform;
          this._document = document;
        }

        _createClass(OverlayContainer, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var container = this._containerElement;

            if (container && container.parentNode) {
              container.parentNode.removeChild(container);
            }
          }
          /**
           * This method returns the overlay container element. It will lazily
           * create the element the first time  it is called to facilitate using
           * the container in non-browser environments.
           * @returns the container element
           */

        }, {
          key: "getContainerElement",
          value: function getContainerElement() {
            if (!this._containerElement) {
              this._createContainer();
            }

            return this._containerElement;
          }
          /**
           * Create the overlay container element, which is simply a div
           * with the 'cdk-overlay-container' class on the document body.
           */

        }, {
          key: "_createContainer",
          value: function _createContainer() {
            // @breaking-change 10.0.0 Remove null check for `_platform`.
            var isBrowser = this._platform ? this._platform.isBrowser : typeof window !== 'undefined';
            var containerClass = 'cdk-overlay-container';

            if (isBrowser || isTestEnvironment) {
              var oppositePlatformContainers = this._document.querySelectorAll(".".concat(containerClass, "[platform=\"server\"], ") + ".".concat(containerClass, "[platform=\"test\"]")); // Remove any old containers from the opposite platform.
              // This can happen when transitioning from the server to the client.


              for (var i = 0; i < oppositePlatformContainers.length; i++) {
                oppositePlatformContainers[i].parentNode.removeChild(oppositePlatformContainers[i]);
              }
            }

            var container = this._document.createElement('div');

            container.classList.add(containerClass); // A long time ago we kept adding new overlay containers whenever a new app was instantiated,
            // but at some point we added logic which clears the duplicate ones in order to avoid leaks.
            // The new logic was a little too aggressive since it was breaking some legitimate use cases.
            // To mitigate the problem we made it so that only containers from a different platform are
            // cleared, but the side-effect was that people started depending on the overly-aggressive
            // logic to clean up their tests for them. Until we can introduce an overlay-specific testing
            // module which does the cleanup, we try to detect that we're in a test environment and we
            // always clear the container. See #17006.
            // TODO(crisbeto): remove the test environment check once we have an overlay testing module.

            if (isTestEnvironment) {
              container.setAttribute('platform', 'test');
            } else if (!isBrowser) {
              container.setAttribute('platform', 'server');
            }

            this._document.body.appendChild(container);

            this._containerElement = container;
          }
        }]);

        return OverlayContainer;
      }();

      OverlayContainer.ɵfac = function OverlayContainer_Factory(t) {
        return new (t || OverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
      };

      OverlayContainer.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function OverlayContainer_Factory() {
          return new OverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
        },
        token: OverlayContainer,
        providedIn: "root"
      });

      OverlayContainer.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
          }];
        }, null);
      })();
      /** @docs-private @deprecated @breaking-change 8.0.0 */


      function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer, _document) {
        return parentContainer || new OverlayContainer(_document);
      }
      /** @docs-private @deprecated @breaking-change 8.0.0 */


      var OVERLAY_CONTAINER_PROVIDER = {
        // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
        provide: OverlayContainer,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), OverlayContainer], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"] // We need to use the InjectionToken somewhere to keep TS happy
        ],
        useFactory: OVERLAY_CONTAINER_PROVIDER_FACTORY
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Reference to an overlay that has been created with the Overlay service.
       * Used to manipulate or dispose of said overlay.
       */

      var OverlayRef = /*#__PURE__*/function () {
        function OverlayRef(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, // @breaking-change 8.0.0 `_location` parameter to be made required.
        _location, // @breaking-change 9.0.0 `_mouseClickDispatcher` parameter to be made required.
        _outsideClickDispatcher) {
          var _this7 = this;

          _classCallCheck(this, OverlayRef);

          this._portalOutlet = _portalOutlet;
          this._host = _host;
          this._pane = _pane;
          this._config = _config;
          this._ngZone = _ngZone;
          this._keyboardDispatcher = _keyboardDispatcher;
          this._document = _document;
          this._location = _location;
          this._outsideClickDispatcher = _outsideClickDispatcher;
          this._backdropElement = null;
          this._backdropClick = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          this._attachments = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          this._detachments = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          this._locationChanges = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;

          this._backdropClickHandler = function (event) {
            return _this7._backdropClick.next(event);
          };
          /** Stream of keydown events dispatched to this overlay. */


          this._keydownEvents = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /** Stream of mouse outside events dispatched to this overlay. */

          this._outsidePointerEvents = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();

          if (_config.scrollStrategy) {
            this._scrollStrategy = _config.scrollStrategy;

            this._scrollStrategy.attach(this);
          }

          this._positionStrategy = _config.positionStrategy;
        }
        /** The overlay's HTML element */


        _createClass(OverlayRef, [{
          key: "attach",

          /**
           * Attaches content, given via a Portal, to the overlay.
           * If the overlay is configured to have a backdrop, it will be created.
           *
           * @param portal Portal instance to which to attach the overlay.
           * @returns The portal attachment result.
           */
          value: function attach(portal) {
            var _this8 = this;

            var attachResult = this._portalOutlet.attach(portal); // Update the pane element with the given configuration.


            if (!this._host.parentElement && this._previousHostParent) {
              this._previousHostParent.appendChild(this._host);
            }

            if (this._positionStrategy) {
              this._positionStrategy.attach(this);
            }

            this._updateStackingOrder();

            this._updateElementSize();

            this._updateElementDirection();

            if (this._scrollStrategy) {
              this._scrollStrategy.enable();
            } // Update the position once the zone is stable so that the overlay will be fully rendered
            // before attempting to position it, as the position may depend on the size of the rendered
            // content.


            this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(function () {
              // The overlay could've been detached before the zone has stabilized.
              if (_this8.hasAttached()) {
                _this8.updatePosition();
              }
            }); // Enable pointer events for the overlay pane element.


            this._togglePointerEvents(true);

            if (this._config.hasBackdrop) {
              this._attachBackdrop();
            }

            if (this._config.panelClass) {
              this._toggleClasses(this._pane, this._config.panelClass, true);
            } // Only emit the `attachments` event once all other setup is done.


            this._attachments.next(); // Track this overlay by the keyboard dispatcher


            this._keyboardDispatcher.add(this); // @breaking-change 8.0.0 remove the null check for `_location`
            // once the constructor parameter is made required.


            if (this._config.disposeOnNavigation && this._location) {
              this._locationChanges = this._location.subscribe(function () {
                return _this8.dispose();
              });
            } // @breaking-change 9.0.0 remove the null check for `_mouseClickDispatcher`


            if (this._outsideClickDispatcher) {
              this._outsideClickDispatcher.add(this);
            }

            return attachResult;
          }
          /**
           * Detaches an overlay from a portal.
           * @returns The portal detachment result.
           */

        }, {
          key: "detach",
          value: function detach() {
            if (!this.hasAttached()) {
              return;
            }

            this.detachBackdrop(); // When the overlay is detached, the pane element should disable pointer events.
            // This is necessary because otherwise the pane element will cover the page and disable
            // pointer events therefore. Depends on the position strategy and the applied pane boundaries.

            this._togglePointerEvents(false);

            if (this._positionStrategy && this._positionStrategy.detach) {
              this._positionStrategy.detach();
            }

            if (this._scrollStrategy) {
              this._scrollStrategy.disable();
            }

            var detachmentResult = this._portalOutlet.detach(); // Only emit after everything is detached.


            this._detachments.next(); // Remove this overlay from keyboard dispatcher tracking.


            this._keyboardDispatcher.remove(this); // Keeping the host element in the DOM can cause scroll jank, because it still gets
            // rendered, even though it's transparent and unclickable which is why we remove it.


            this._detachContentWhenStable(); // Stop listening for location changes.


            this._locationChanges.unsubscribe(); // @breaking-change 9.0.0 remove the null check for `_outsideClickDispatcher`


            if (this._outsideClickDispatcher) {
              this._outsideClickDispatcher.remove(this);
            }

            return detachmentResult;
          }
          /** Cleans up the overlay from the DOM. */

        }, {
          key: "dispose",
          value: function dispose() {
            var isAttached = this.hasAttached();

            if (this._positionStrategy) {
              this._positionStrategy.dispose();
            }

            this._disposeScrollStrategy();

            this.detachBackdrop();

            this._locationChanges.unsubscribe();

            this._keyboardDispatcher.remove(this);

            this._portalOutlet.dispose();

            this._attachments.complete();

            this._backdropClick.complete();

            this._keydownEvents.complete();

            this._outsidePointerEvents.complete(); // @breaking-change 9.0.0 remove the null check for `_outsideClickDispatcher`


            if (this._outsideClickDispatcher) {
              this._outsideClickDispatcher.remove(this);
            }

            if (this._host && this._host.parentNode) {
              this._host.parentNode.removeChild(this._host);

              this._host = null;
            }

            this._previousHostParent = this._pane = null;

            if (isAttached) {
              this._detachments.next();
            }

            this._detachments.complete();
          }
          /** Whether the overlay has attached content. */

        }, {
          key: "hasAttached",
          value: function hasAttached() {
            return this._portalOutlet.hasAttached();
          }
          /** Gets an observable that emits when the backdrop has been clicked. */

        }, {
          key: "backdropClick",
          value: function backdropClick() {
            return this._backdropClick.asObservable();
          }
          /** Gets an observable that emits when the overlay has been attached. */

        }, {
          key: "attachments",
          value: function attachments() {
            return this._attachments.asObservable();
          }
          /** Gets an observable that emits when the overlay has been detached. */

        }, {
          key: "detachments",
          value: function detachments() {
            return this._detachments.asObservable();
          }
          /** Gets an observable of keydown events targeted to this overlay. */

        }, {
          key: "keydownEvents",
          value: function keydownEvents() {
            return this._keydownEvents.asObservable();
          }
          /** Gets an observable of pointer events targeted outside this overlay. */

        }, {
          key: "outsidePointerEvents",
          value: function outsidePointerEvents() {
            return this._outsidePointerEvents.asObservable();
          }
          /** Gets the current overlay configuration, which is immutable. */

        }, {
          key: "getConfig",
          value: function getConfig() {
            return this._config;
          }
          /** Updates the position of the overlay based on the position strategy. */

        }, {
          key: "updatePosition",
          value: function updatePosition() {
            if (this._positionStrategy) {
              this._positionStrategy.apply();
            }
          }
          /** Switches to a new position strategy and updates the overlay position. */

        }, {
          key: "updatePositionStrategy",
          value: function updatePositionStrategy(strategy) {
            if (strategy === this._positionStrategy) {
              return;
            }

            if (this._positionStrategy) {
              this._positionStrategy.dispose();
            }

            this._positionStrategy = strategy;

            if (this.hasAttached()) {
              strategy.attach(this);
              this.updatePosition();
            }
          }
          /** Update the size properties of the overlay. */

        }, {
          key: "updateSize",
          value: function updateSize(sizeConfig) {
            this._config = Object.assign(Object.assign({}, this._config), sizeConfig);

            this._updateElementSize();
          }
          /** Sets the LTR/RTL direction for the overlay. */

        }, {
          key: "setDirection",
          value: function setDirection(dir) {
            this._config = Object.assign(Object.assign({}, this._config), {
              direction: dir
            });

            this._updateElementDirection();
          }
          /** Add a CSS class or an array of classes to the overlay pane. */

        }, {
          key: "addPanelClass",
          value: function addPanelClass(classes) {
            if (this._pane) {
              this._toggleClasses(this._pane, classes, true);
            }
          }
          /** Remove a CSS class or an array of classes from the overlay pane. */

        }, {
          key: "removePanelClass",
          value: function removePanelClass(classes) {
            if (this._pane) {
              this._toggleClasses(this._pane, classes, false);
            }
          }
          /**
           * Returns the layout direction of the overlay panel.
           */

        }, {
          key: "getDirection",
          value: function getDirection() {
            var direction = this._config.direction;

            if (!direction) {
              return 'ltr';
            }

            return typeof direction === 'string' ? direction : direction.value;
          }
          /** Switches to a new scroll strategy. */

        }, {
          key: "updateScrollStrategy",
          value: function updateScrollStrategy(strategy) {
            if (strategy === this._scrollStrategy) {
              return;
            }

            this._disposeScrollStrategy();

            this._scrollStrategy = strategy;

            if (this.hasAttached()) {
              strategy.attach(this);
              strategy.enable();
            }
          }
          /** Updates the text direction of the overlay panel. */

        }, {
          key: "_updateElementDirection",
          value: function _updateElementDirection() {
            this._host.setAttribute('dir', this.getDirection());
          }
          /** Updates the size of the overlay element based on the overlay config. */

        }, {
          key: "_updateElementSize",
          value: function _updateElementSize() {
            if (!this._pane) {
              return;
            }

            var style = this._pane.style;
            style.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.width);
            style.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.height);
            style.minWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.minWidth);
            style.minHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.minHeight);
            style.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.maxWidth);
            style.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.maxHeight);
          }
          /** Toggles the pointer events for the overlay pane element. */

        }, {
          key: "_togglePointerEvents",
          value: function _togglePointerEvents(enablePointer) {
            this._pane.style.pointerEvents = enablePointer ? 'auto' : 'none';
          }
          /** Attaches a backdrop for this overlay. */

        }, {
          key: "_attachBackdrop",
          value: function _attachBackdrop() {
            var _this9 = this;

            var showingClass = 'cdk-overlay-backdrop-showing';
            this._backdropElement = this._document.createElement('div');

            this._backdropElement.classList.add('cdk-overlay-backdrop');

            if (this._config.backdropClass) {
              this._toggleClasses(this._backdropElement, this._config.backdropClass, true);
            } // Insert the backdrop before the pane in the DOM order,
            // in order to handle stacked overlays properly.


            this._host.parentElement.insertBefore(this._backdropElement, this._host); // Forward backdrop clicks such that the consumer of the overlay can perform whatever
            // action desired when such a click occurs (usually closing the overlay).


            this._backdropElement.addEventListener('click', this._backdropClickHandler); // Add class to fade-in the backdrop after one frame.


            if (typeof requestAnimationFrame !== 'undefined') {
              this._ngZone.runOutsideAngular(function () {
                requestAnimationFrame(function () {
                  if (_this9._backdropElement) {
                    _this9._backdropElement.classList.add(showingClass);
                  }
                });
              });
            } else {
              this._backdropElement.classList.add(showingClass);
            }
          }
          /**
           * Updates the stacking order of the element, moving it to the top if necessary.
           * This is required in cases where one overlay was detached, while another one,
           * that should be behind it, was destroyed. The next time both of them are opened,
           * the stacking will be wrong, because the detached element's pane will still be
           * in its original DOM position.
           */

        }, {
          key: "_updateStackingOrder",
          value: function _updateStackingOrder() {
            if (this._host.nextSibling) {
              this._host.parentNode.appendChild(this._host);
            }
          }
          /** Detaches the backdrop (if any) associated with the overlay. */

        }, {
          key: "detachBackdrop",
          value: function detachBackdrop() {
            var _this10 = this;

            var backdropToDetach = this._backdropElement;

            if (!backdropToDetach) {
              return;
            }

            var timeoutId;

            var finishDetach = function finishDetach() {
              // It may not be attached to anything in certain cases (e.g. unit tests).
              if (backdropToDetach) {
                backdropToDetach.removeEventListener('click', _this10._backdropClickHandler);
                backdropToDetach.removeEventListener('transitionend', finishDetach);

                if (backdropToDetach.parentNode) {
                  backdropToDetach.parentNode.removeChild(backdropToDetach);
                }
              } // It is possible that a new portal has been attached to this overlay since we started
              // removing the backdrop. If that is the case, only clear the backdrop reference if it
              // is still the same instance that we started to remove.


              if (_this10._backdropElement == backdropToDetach) {
                _this10._backdropElement = null;
              }

              if (_this10._config.backdropClass) {
                _this10._toggleClasses(backdropToDetach, _this10._config.backdropClass, false);
              }

              clearTimeout(timeoutId);
            };

            backdropToDetach.classList.remove('cdk-overlay-backdrop-showing');

            this._ngZone.runOutsideAngular(function () {
              backdropToDetach.addEventListener('transitionend', finishDetach);
            }); // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
            // In this case we make it unclickable and we try to remove it after a delay.


            backdropToDetach.style.pointerEvents = 'none'; // Run this outside the Angular zone because there's nothing that Angular cares about.
            // If it were to run inside the Angular zone, every test that used Overlay would have to be
            // either async or fakeAsync.

            timeoutId = this._ngZone.runOutsideAngular(function () {
              return setTimeout(finishDetach, 500);
            });
          }
          /** Toggles a single CSS class or an array of classes on an element. */

        }, {
          key: "_toggleClasses",
          value: function _toggleClasses(element, cssClasses, isAdd) {
            var classList = element.classList;
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceArray"])(cssClasses).forEach(function (cssClass) {
              // We can't do a spread here, because IE doesn't support setting multiple classes.
              // Also trying to add an empty string to a DOMTokenList will throw.
              if (cssClass) {
                isAdd ? classList.add(cssClass) : classList.remove(cssClass);
              }
            });
          }
          /** Detaches the overlay content next time the zone stabilizes. */

        }, {
          key: "_detachContentWhenStable",
          value: function _detachContentWhenStable() {
            var _this11 = this;

            // Normally we wouldn't have to explicitly run this outside the `NgZone`, however
            // if the consumer is using `zone-patch-rxjs`, the `Subscription.unsubscribe` call will
            // be patched to run inside the zone, which will throw us into an infinite loop.
            this._ngZone.runOutsideAngular(function () {
              // We can't remove the host here immediately, because the overlay pane's content
              // might still be animating. This stream helps us avoid interrupting the animation
              // by waiting for the pane to become empty.
              var subscription = _this11._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(_this11._attachments, _this11._detachments))).subscribe(function () {
                // Needs a couple of checks for the pane and host, because
                // they may have been removed by the time the zone stabilizes.
                if (!_this11._pane || !_this11._host || _this11._pane.children.length === 0) {
                  if (_this11._pane && _this11._config.panelClass) {
                    _this11._toggleClasses(_this11._pane, _this11._config.panelClass, false);
                  }

                  if (_this11._host && _this11._host.parentElement) {
                    _this11._previousHostParent = _this11._host.parentElement;

                    _this11._previousHostParent.removeChild(_this11._host);
                  }

                  subscription.unsubscribe();
                }
              });
            });
          }
          /** Disposes of a scroll strategy. */

        }, {
          key: "_disposeScrollStrategy",
          value: function _disposeScrollStrategy() {
            var scrollStrategy = this._scrollStrategy;

            if (scrollStrategy) {
              scrollStrategy.disable();

              if (scrollStrategy.detach) {
                scrollStrategy.detach();
              }
            }
          }
        }, {
          key: "overlayElement",
          get: function get() {
            return this._pane;
          }
          /** The overlay's backdrop HTML element. */

        }, {
          key: "backdropElement",
          get: function get() {
            return this._backdropElement;
          }
          /**
           * Wrapper around the panel element. Can be used for advanced
           * positioning where a wrapper with specific styling is
           * required around the overlay pane.
           */

        }, {
          key: "hostElement",
          get: function get() {
            return this._host;
          }
        }]);

        return OverlayRef;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // TODO: refactor clipping detection into a separate thing (part of scrolling module)
      // TODO: doesn't handle both flexible width and height when it has to scroll along both axis.

      /** Class to be added to the overlay bounding box. */


      var boundingBoxClass = 'cdk-overlay-connected-position-bounding-box';
      /** Regex used to split a string on its CSS units. */

      var cssUnitPattern = /([A-Za-z%]+)$/;
      /**
       * A strategy for positioning overlays. Using this strategy, an overlay is given an
       * implicit position relative some origin element. The relative position is defined in terms of
       * a point on the origin element that is connected to a point on the overlay element. For example,
       * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
       * of the overlay.
       */

      var FlexibleConnectedPositionStrategy = /*#__PURE__*/function () {
        function FlexibleConnectedPositionStrategy(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
          _classCallCheck(this, FlexibleConnectedPositionStrategy);

          this._viewportRuler = _viewportRuler;
          this._document = _document;
          this._platform = _platform;
          this._overlayContainer = _overlayContainer;
          /** Last size used for the bounding box. Used to avoid resizing the overlay after open. */

          this._lastBoundingBoxSize = {
            width: 0,
            height: 0
          };
          /** Whether the overlay was pushed in a previous positioning. */

          this._isPushed = false;
          /** Whether the overlay can be pushed on-screen on the initial open. */

          this._canPush = true;
          /** Whether the overlay can grow via flexible width/height after the initial open. */

          this._growAfterOpen = false;
          /** Whether the overlay's width and height can be constrained to fit within the viewport. */

          this._hasFlexibleDimensions = true;
          /** Whether the overlay position is locked. */

          this._positionLocked = false;
          /** Amount of space that must be maintained between the overlay and the edge of the viewport. */

          this._viewportMargin = 0;
          /** The Scrollable containers used to check scrollable view properties on position change. */

          this._scrollables = [];
          /** Ordered list of preferred positions, from most to least desirable. */

          this._preferredPositions = [];
          /** Subject that emits whenever the position changes. */

          this._positionChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /** Subscription to viewport size changes. */

          this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
          /** Default offset for the overlay along the x axis. */

          this._offsetX = 0;
          /** Default offset for the overlay along the y axis. */

          this._offsetY = 0;
          /** Keeps track of the CSS classes that the position strategy has applied on the overlay panel. */

          this._appliedPanelClasses = [];
          /** Observable sequence of position changes. */

          this.positionChanges = this._positionChanges.asObservable();
          this.setOrigin(connectedTo);
        }
        /** Ordered list of preferred positions, from most to least desirable. */


        _createClass(FlexibleConnectedPositionStrategy, [{
          key: "attach",

          /** Attaches this position strategy to an overlay. */
          value: function attach(overlayRef) {
            var _this12 = this;

            if (this._overlayRef && overlayRef !== this._overlayRef) {
              throw Error('This position strategy is already attached to an overlay');
            }

            this._validatePositions();

            overlayRef.hostElement.classList.add(boundingBoxClass);
            this._overlayRef = overlayRef;
            this._boundingBox = overlayRef.hostElement;
            this._pane = overlayRef.overlayElement;
            this._isDisposed = false;
            this._isInitialRender = true;
            this._lastPosition = null;

            this._resizeSubscription.unsubscribe();

            this._resizeSubscription = this._viewportRuler.change().subscribe(function () {
              // When the window is resized, we want to trigger the next reposition as if it
              // was an initial render, in order for the strategy to pick a new optimal position,
              // otherwise position locking will cause it to stay at the old one.
              _this12._isInitialRender = true;

              _this12.apply();
            });
          }
          /**
           * Updates the position of the overlay element, using whichever preferred position relative
           * to the origin best fits on-screen.
           *
           * The selection of a position goes as follows:
           *  - If any positions fit completely within the viewport as-is,
           *      choose the first position that does so.
           *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
           *      choose the position with the greatest available size modified by the positions' weight.
           *  - If pushing is enabled, take the position that went off-screen the least and push it
           *      on-screen.
           *  - If none of the previous criteria were met, use the position that goes off-screen the least.
           * @docs-private
           */

        }, {
          key: "apply",
          value: function apply() {
            // We shouldn't do anything if the strategy was disposed or we're on the server.
            if (this._isDisposed || !this._platform.isBrowser) {
              return;
            } // If the position has been applied already (e.g. when the overlay was opened) and the
            // consumer opted into locking in the position, re-use the old position, in order to
            // prevent the overlay from jumping around.


            if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
              this.reapplyLastPosition();
              return;
            }

            this._clearPanelClasses();

            this._resetOverlayElementStyles();

            this._resetBoundingBoxStyles(); // We need the bounding rects for the origin and the overlay to determine how to position
            // the overlay relative to the origin.
            // We use the viewport rect to determine whether a position would go off-screen.


            this._viewportRect = this._getNarrowedViewportRect();
            this._originRect = this._getOriginRect();
            this._overlayRect = this._pane.getBoundingClientRect();
            var originRect = this._originRect;
            var overlayRect = this._overlayRect;
            var viewportRect = this._viewportRect; // Positions where the overlay will fit with flexible dimensions.

            var flexibleFits = []; // Fallback if none of the preferred positions fit within the viewport.

            var fallback; // Go through each of the preferred positions looking for a good fit.
            // If a good fit is found, it will be applied immediately.

            var _iterator = _createForOfIteratorHelper(this._preferredPositions),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var pos = _step.value;

                // Get the exact (x, y) coordinate for the point-of-origin on the origin element.
                var originPoint = this._getOriginPoint(originRect, pos); // From that point-of-origin, get the exact (x, y) coordinate for the top-left corner of the
                // overlay in this position. We use the top-left corner for calculations and later translate
                // this into an appropriate (top, left, bottom, right) style.


                var overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos); // Calculate how well the overlay would fit into the viewport with this point.


                var overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos); // If the overlay, without any further work, fits into the viewport, use this position.


                if (overlayFit.isCompletelyWithinViewport) {
                  this._isPushed = false;

                  this._applyPosition(pos, originPoint);

                  return;
                } // If the overlay has flexible dimensions, we can use this position
                // so long as there's enough space for the minimum dimensions.


                if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
                  // Save positions where the overlay will fit with flexible dimensions. We will use these
                  // if none of the positions fit *without* flexible dimensions.
                  flexibleFits.push({
                    position: pos,
                    origin: originPoint,
                    overlayRect: overlayRect,
                    boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
                  });
                  continue;
                } // If the current preferred position does not fit on the screen, remember the position
                // if it has more visible area on-screen than we've seen and move onto the next preferred
                // position.


                if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
                  fallback = {
                    overlayFit: overlayFit,
                    overlayPoint: overlayPoint,
                    originPoint: originPoint,
                    position: pos,
                    overlayRect: overlayRect
                  };
                }
              } // If there are any positions where the overlay would fit with flexible dimensions, choose the
              // one that has the greatest area available modified by the position's weight

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (flexibleFits.length) {
              var bestFit = null;
              var bestScore = -1;

              var _iterator2 = _createForOfIteratorHelper(flexibleFits),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var fit = _step2.value;
                  var score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);

                  if (score > bestScore) {
                    bestScore = score;
                    bestFit = fit;
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              this._isPushed = false;

              this._applyPosition(bestFit.position, bestFit.origin);

              return;
            } // When none of the preferred positions fit within the viewport, take the position
            // that went off-screen the least and attempt to push it on-screen.


            if (this._canPush) {
              // TODO(jelbourn): after pushing, the opening "direction" of the overlay might not make sense.
              this._isPushed = true;

              this._applyPosition(fallback.position, fallback.originPoint);

              return;
            } // All options for getting the overlay within the viewport have been exhausted, so go with the
            // position that went off-screen the least.


            this._applyPosition(fallback.position, fallback.originPoint);
          }
        }, {
          key: "detach",
          value: function detach() {
            this._clearPanelClasses();

            this._lastPosition = null;
            this._previousPushAmount = null;

            this._resizeSubscription.unsubscribe();
          }
          /** Cleanup after the element gets destroyed. */

        }, {
          key: "dispose",
          value: function dispose() {
            if (this._isDisposed) {
              return;
            } // We can't use `_resetBoundingBoxStyles` here, because it resets
            // some properties to zero, rather than removing them.


            if (this._boundingBox) {
              extendStyles(this._boundingBox.style, {
                top: '',
                left: '',
                right: '',
                bottom: '',
                height: '',
                width: '',
                alignItems: '',
                justifyContent: ''
              });
            }

            if (this._pane) {
              this._resetOverlayElementStyles();
            }

            if (this._overlayRef) {
              this._overlayRef.hostElement.classList.remove(boundingBoxClass);
            }

            this.detach();

            this._positionChanges.complete();

            this._overlayRef = this._boundingBox = null;
            this._isDisposed = true;
          }
          /**
           * This re-aligns the overlay element with the trigger in its last calculated position,
           * even if a position higher in the "preferred positions" list would now fit. This
           * allows one to re-align the panel without changing the orientation of the panel.
           */

        }, {
          key: "reapplyLastPosition",
          value: function reapplyLastPosition() {
            if (!this._isDisposed && (!this._platform || this._platform.isBrowser)) {
              this._originRect = this._getOriginRect();
              this._overlayRect = this._pane.getBoundingClientRect();
              this._viewportRect = this._getNarrowedViewportRect();
              var lastPosition = this._lastPosition || this._preferredPositions[0];

              var originPoint = this._getOriginPoint(this._originRect, lastPosition);

              this._applyPosition(lastPosition, originPoint);
            }
          }
          /**
           * Sets the list of Scrollable containers that host the origin element so that
           * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
           * Scrollable must be an ancestor element of the strategy's origin element.
           */

        }, {
          key: "withScrollableContainers",
          value: function withScrollableContainers(scrollables) {
            this._scrollables = scrollables;
            return this;
          }
          /**
           * Adds new preferred positions.
           * @param positions List of positions options for this overlay.
           */

        }, {
          key: "withPositions",
          value: function withPositions(positions) {
            this._preferredPositions = positions; // If the last calculated position object isn't part of the positions anymore, clear
            // it in order to avoid it being picked up if the consumer tries to re-apply.

            if (positions.indexOf(this._lastPosition) === -1) {
              this._lastPosition = null;
            }

            this._validatePositions();

            return this;
          }
          /**
           * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
           * @param margin Required margin between the overlay and the viewport edge in pixels.
           */

        }, {
          key: "withViewportMargin",
          value: function withViewportMargin(margin) {
            this._viewportMargin = margin;
            return this;
          }
          /** Sets whether the overlay's width and height can be constrained to fit within the viewport. */

        }, {
          key: "withFlexibleDimensions",
          value: function withFlexibleDimensions() {
            var flexibleDimensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._hasFlexibleDimensions = flexibleDimensions;
            return this;
          }
          /** Sets whether the overlay can grow after the initial open via flexible width/height. */

        }, {
          key: "withGrowAfterOpen",
          value: function withGrowAfterOpen() {
            var growAfterOpen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._growAfterOpen = growAfterOpen;
            return this;
          }
          /** Sets whether the overlay can be pushed on-screen if none of the provided positions fit. */

        }, {
          key: "withPush",
          value: function withPush() {
            var canPush = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._canPush = canPush;
            return this;
          }
          /**
           * Sets whether the overlay's position should be locked in after it is positioned
           * initially. When an overlay is locked in, it won't attempt to reposition itself
           * when the position is re-applied (e.g. when the user scrolls away).
           * @param isLocked Whether the overlay should locked in.
           */

        }, {
          key: "withLockedPosition",
          value: function withLockedPosition() {
            var isLocked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._positionLocked = isLocked;
            return this;
          }
          /**
           * Sets the origin, relative to which to position the overlay.
           * Using an element origin is useful for building components that need to be positioned
           * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
           * used for cases like contextual menus which open relative to the user's pointer.
           * @param origin Reference to the new origin.
           */

        }, {
          key: "setOrigin",
          value: function setOrigin(origin) {
            this._origin = origin;
            return this;
          }
          /**
           * Sets the default offset for the overlay's connection point on the x-axis.
           * @param offset New offset in the X axis.
           */

        }, {
          key: "withDefaultOffsetX",
          value: function withDefaultOffsetX(offset) {
            this._offsetX = offset;
            return this;
          }
          /**
           * Sets the default offset for the overlay's connection point on the y-axis.
           * @param offset New offset in the Y axis.
           */

        }, {
          key: "withDefaultOffsetY",
          value: function withDefaultOffsetY(offset) {
            this._offsetY = offset;
            return this;
          }
          /**
           * Configures that the position strategy should set a `transform-origin` on some elements
           * inside the overlay, depending on the current position that is being applied. This is
           * useful for the cases where the origin of an animation can change depending on the
           * alignment of the overlay.
           * @param selector CSS selector that will be used to find the target
           *    elements onto which to set the transform origin.
           */

        }, {
          key: "withTransformOriginOn",
          value: function withTransformOriginOn(selector) {
            this._transformOriginSelector = selector;
            return this;
          }
          /**
           * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
           */

        }, {
          key: "_getOriginPoint",
          value: function _getOriginPoint(originRect, pos) {
            var x;

            if (pos.originX == 'center') {
              // Note: when centering we should always use the `left`
              // offset, otherwise the position will be wrong in RTL.
              x = originRect.left + originRect.width / 2;
            } else {
              var startX = this._isRtl() ? originRect.right : originRect.left;
              var endX = this._isRtl() ? originRect.left : originRect.right;
              x = pos.originX == 'start' ? startX : endX;
            }

            var y;

            if (pos.originY == 'center') {
              y = originRect.top + originRect.height / 2;
            } else {
              y = pos.originY == 'top' ? originRect.top : originRect.bottom;
            }

            return {
              x: x,
              y: y
            };
          }
          /**
           * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
           * origin point to which the overlay should be connected.
           */

        }, {
          key: "_getOverlayPoint",
          value: function _getOverlayPoint(originPoint, overlayRect, pos) {
            // Calculate the (overlayStartX, overlayStartY), the start of the
            // potential overlay position relative to the origin point.
            var overlayStartX;

            if (pos.overlayX == 'center') {
              overlayStartX = -overlayRect.width / 2;
            } else if (pos.overlayX === 'start') {
              overlayStartX = this._isRtl() ? -overlayRect.width : 0;
            } else {
              overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
            }

            var overlayStartY;

            if (pos.overlayY == 'center') {
              overlayStartY = -overlayRect.height / 2;
            } else {
              overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
            } // The (x, y) coordinates of the overlay.


            return {
              x: originPoint.x + overlayStartX,
              y: originPoint.y + overlayStartY
            };
          }
          /** Gets how well an overlay at the given point will fit within the viewport. */

        }, {
          key: "_getOverlayFit",
          value: function _getOverlayFit(point, overlay, viewport, position) {
            var x = point.x,
                y = point.y;

            var offsetX = this._getOffset(position, 'x');

            var offsetY = this._getOffset(position, 'y'); // Account for the offsets since they could push the overlay out of the viewport.


            if (offsetX) {
              x += offsetX;
            }

            if (offsetY) {
              y += offsetY;
            } // How much the overlay would overflow at this position, on each side.


            var leftOverflow = 0 - x;
            var rightOverflow = x + overlay.width - viewport.width;
            var topOverflow = 0 - y;
            var bottomOverflow = y + overlay.height - viewport.height; // Visible parts of the element on each axis.

            var visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);

            var visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);

            var visibleArea = visibleWidth * visibleHeight;
            return {
              visibleArea: visibleArea,
              isCompletelyWithinViewport: overlay.width * overlay.height === visibleArea,
              fitsInViewportVertically: visibleHeight === overlay.height,
              fitsInViewportHorizontally: visibleWidth == overlay.width
            };
          }
          /**
           * Whether the overlay can fit within the viewport when it may resize either its width or height.
           * @param fit How well the overlay fits in the viewport at some position.
           * @param point The (x, y) coordinates of the overlat at some position.
           * @param viewport The geometry of the viewport.
           */

        }, {
          key: "_canFitWithFlexibleDimensions",
          value: function _canFitWithFlexibleDimensions(fit, point, viewport) {
            if (this._hasFlexibleDimensions) {
              var availableHeight = viewport.bottom - point.y;
              var availableWidth = viewport.right - point.x;
              var minHeight = getPixelValue(this._overlayRef.getConfig().minHeight);
              var minWidth = getPixelValue(this._overlayRef.getConfig().minWidth);
              var verticalFit = fit.fitsInViewportVertically || minHeight != null && minHeight <= availableHeight;
              var horizontalFit = fit.fitsInViewportHorizontally || minWidth != null && minWidth <= availableWidth;
              return verticalFit && horizontalFit;
            }

            return false;
          }
          /**
           * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
           * the viewport, the top-left corner will be pushed on-screen (with overflow occuring on the
           * right and bottom).
           *
           * @param start Starting point from which the overlay is pushed.
           * @param overlay Dimensions of the overlay.
           * @param scrollPosition Current viewport scroll position.
           * @returns The point at which to position the overlay after pushing. This is effectively a new
           *     originPoint.
           */

        }, {
          key: "_pushOverlayOnScreen",
          value: function _pushOverlayOnScreen(start, overlay, scrollPosition) {
            // If the position is locked and we've pushed the overlay already, reuse the previous push
            // amount, rather than pushing it again. If we were to continue pushing, the element would
            // remain in the viewport, which goes against the expectations when position locking is enabled.
            if (this._previousPushAmount && this._positionLocked) {
              return {
                x: start.x + this._previousPushAmount.x,
                y: start.y + this._previousPushAmount.y
              };
            }

            var viewport = this._viewportRect; // Determine how much the overlay goes outside the viewport on each
            // side, which we'll use to decide which direction to push it.

            var overflowRight = Math.max(start.x + overlay.width - viewport.right, 0);
            var overflowBottom = Math.max(start.y + overlay.height - viewport.bottom, 0);
            var overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
            var overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0); // Amount by which to push the overlay in each axis such that it remains on-screen.

            var pushX = 0;
            var pushY = 0; // If the overlay fits completely within the bounds of the viewport, push it from whichever
            // direction is goes off-screen. Otherwise, push the top-left corner such that its in the
            // viewport and allow for the trailing end of the overlay to go out of bounds.

            if (overlay.width <= viewport.width) {
              pushX = overflowLeft || -overflowRight;
            } else {
              pushX = start.x < this._viewportMargin ? viewport.left - scrollPosition.left - start.x : 0;
            }

            if (overlay.height <= viewport.height) {
              pushY = overflowTop || -overflowBottom;
            } else {
              pushY = start.y < this._viewportMargin ? viewport.top - scrollPosition.top - start.y : 0;
            }

            this._previousPushAmount = {
              x: pushX,
              y: pushY
            };
            return {
              x: start.x + pushX,
              y: start.y + pushY
            };
          }
          /**
           * Applies a computed position to the overlay and emits a position change.
           * @param position The position preference
           * @param originPoint The point on the origin element where the overlay is connected.
           */

        }, {
          key: "_applyPosition",
          value: function _applyPosition(position, originPoint) {
            this._setTransformOrigin(position);

            this._setOverlayElementStyles(originPoint, position);

            this._setBoundingBoxStyles(originPoint, position);

            if (position.panelClass) {
              this._addPanelClasses(position.panelClass);
            } // Save the last connected position in case the position needs to be re-calculated.


            this._lastPosition = position; // Notify that the position has been changed along with its change properties.
            // We only emit if we've got any subscriptions, because the scroll visibility
            // calculcations can be somewhat expensive.

            if (this._positionChanges.observers.length) {
              var scrollableViewProperties = this._getScrollVisibility();

              var changeEvent = new ConnectedOverlayPositionChange(position, scrollableViewProperties);

              this._positionChanges.next(changeEvent);
            }

            this._isInitialRender = false;
          }
          /** Sets the transform origin based on the configured selector and the passed-in position.  */

        }, {
          key: "_setTransformOrigin",
          value: function _setTransformOrigin(position) {
            if (!this._transformOriginSelector) {
              return;
            }

            var elements = this._boundingBox.querySelectorAll(this._transformOriginSelector);

            var xOrigin;
            var yOrigin = position.overlayY;

            if (position.overlayX === 'center') {
              xOrigin = 'center';
            } else if (this._isRtl()) {
              xOrigin = position.overlayX === 'start' ? 'right' : 'left';
            } else {
              xOrigin = position.overlayX === 'start' ? 'left' : 'right';
            }

            for (var i = 0; i < elements.length; i++) {
              elements[i].style.transformOrigin = "".concat(xOrigin, " ").concat(yOrigin);
            }
          }
          /**
           * Gets the position and size of the overlay's sizing container.
           *
           * This method does no measuring and applies no styles so that we can cheaply compute the
           * bounds for all positions and choose the best fit based on these results.
           */

        }, {
          key: "_calculateBoundingBoxRect",
          value: function _calculateBoundingBoxRect(origin, position) {
            var viewport = this._viewportRect;

            var isRtl = this._isRtl();

            var height, top, bottom;

            if (position.overlayY === 'top') {
              // Overlay is opening "downward" and thus is bound by the bottom viewport edge.
              top = origin.y;
              height = viewport.height - top + this._viewportMargin;
            } else if (position.overlayY === 'bottom') {
              // Overlay is opening "upward" and thus is bound by the top viewport edge. We need to add
              // the viewport margin back in, because the viewport rect is narrowed down to remove the
              // margin, whereas the `origin` position is calculated based on its `ClientRect`.
              bottom = viewport.height - origin.y + this._viewportMargin * 2;
              height = viewport.height - bottom + this._viewportMargin;
            } else {
              // If neither top nor bottom, it means that the overlay is vertically centered on the
              // origin point. Note that we want the position relative to the viewport, rather than
              // the page, which is why we don't use something like `viewport.bottom - origin.y` and
              // `origin.y - viewport.top`.
              var smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
              var previousHeight = this._lastBoundingBoxSize.height;
              height = smallestDistanceToViewportEdge * 2;
              top = origin.y - smallestDistanceToViewportEdge;

              if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
                top = origin.y - previousHeight / 2;
              }
            } // The overlay is opening 'right-ward' (the content flows to the right).


            var isBoundedByRightViewportEdge = position.overlayX === 'start' && !isRtl || position.overlayX === 'end' && isRtl; // The overlay is opening 'left-ward' (the content flows to the left).

            var isBoundedByLeftViewportEdge = position.overlayX === 'end' && !isRtl || position.overlayX === 'start' && isRtl;
            var width, left, right;

            if (isBoundedByLeftViewportEdge) {
              right = viewport.width - origin.x + this._viewportMargin;
              width = origin.x - this._viewportMargin;
            } else if (isBoundedByRightViewportEdge) {
              left = origin.x;
              width = viewport.right - origin.x;
            } else {
              // If neither start nor end, it means that the overlay is horizontally centered on the
              // origin point. Note that we want the position relative to the viewport, rather than
              // the page, which is why we don't use something like `viewport.right - origin.x` and
              // `origin.x - viewport.left`.
              var _smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);

              var previousWidth = this._lastBoundingBoxSize.width;
              width = _smallestDistanceToViewportEdge * 2;
              left = origin.x - _smallestDistanceToViewportEdge;

              if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
                left = origin.x - previousWidth / 2;
              }
            }

            return {
              top: top,
              left: left,
              bottom: bottom,
              right: right,
              width: width,
              height: height
            };
          }
          /**
           * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
           * origin's connection point and stetches to the bounds of the viewport.
           *
           * @param origin The point on the origin element where the overlay is connected.
           * @param position The position preference
           */

        }, {
          key: "_setBoundingBoxStyles",
          value: function _setBoundingBoxStyles(origin, position) {
            var boundingBoxRect = this._calculateBoundingBoxRect(origin, position); // It's weird if the overlay *grows* while scrolling, so we take the last size into account
            // when applying a new size.


            if (!this._isInitialRender && !this._growAfterOpen) {
              boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
              boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
            }

            var styles = {};

            if (this._hasExactPosition()) {
              styles.top = styles.left = '0';
              styles.bottom = styles.right = styles.maxHeight = styles.maxWidth = '';
              styles.width = styles.height = '100%';
            } else {
              var maxHeight = this._overlayRef.getConfig().maxHeight;

              var maxWidth = this._overlayRef.getConfig().maxWidth;

              styles.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.height);
              styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.top);
              styles.bottom = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.bottom);
              styles.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.width);
              styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.left);
              styles.right = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.right); // Push the pane content towards the proper direction.

              if (position.overlayX === 'center') {
                styles.alignItems = 'center';
              } else {
                styles.alignItems = position.overlayX === 'end' ? 'flex-end' : 'flex-start';
              }

              if (position.overlayY === 'center') {
                styles.justifyContent = 'center';
              } else {
                styles.justifyContent = position.overlayY === 'bottom' ? 'flex-end' : 'flex-start';
              }

              if (maxHeight) {
                styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(maxHeight);
              }

              if (maxWidth) {
                styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(maxWidth);
              }
            }

            this._lastBoundingBoxSize = boundingBoxRect;
            extendStyles(this._boundingBox.style, styles);
          }
          /** Resets the styles for the bounding box so that a new positioning can be computed. */

        }, {
          key: "_resetBoundingBoxStyles",
          value: function _resetBoundingBoxStyles() {
            extendStyles(this._boundingBox.style, {
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              height: '',
              width: '',
              alignItems: '',
              justifyContent: ''
            });
          }
          /** Resets the styles for the overlay pane so that a new positioning can be computed. */

        }, {
          key: "_resetOverlayElementStyles",
          value: function _resetOverlayElementStyles() {
            extendStyles(this._pane.style, {
              top: '',
              left: '',
              bottom: '',
              right: '',
              position: '',
              transform: ''
            });
          }
          /** Sets positioning styles to the overlay element. */

        }, {
          key: "_setOverlayElementStyles",
          value: function _setOverlayElementStyles(originPoint, position) {
            var styles = {};

            var hasExactPosition = this._hasExactPosition();

            var hasFlexibleDimensions = this._hasFlexibleDimensions;

            var config = this._overlayRef.getConfig();

            if (hasExactPosition) {
              var scrollPosition = this._viewportRuler.getViewportScrollPosition();

              extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
              extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
            } else {
              styles.position = 'static';
            } // Use a transform to apply the offsets. We do this because the `center` positions rely on
            // being in the normal flex flow and setting a `top` / `left` at all will completely throw
            // off the position. We also can't use margins, because they won't have an effect in some
            // cases where the element doesn't have anything to "push off of". Finally, this works
            // better both with flexible and non-flexible positioning.


            var transformString = '';

            var offsetX = this._getOffset(position, 'x');

            var offsetY = this._getOffset(position, 'y');

            if (offsetX) {
              transformString += "translateX(".concat(offsetX, "px) ");
            }

            if (offsetY) {
              transformString += "translateY(".concat(offsetY, "px)");
            }

            styles.transform = transformString.trim(); // If a maxWidth or maxHeight is specified on the overlay, we remove them. We do this because
            // we need these values to both be set to "100%" for the automatic flexible sizing to work.
            // The maxHeight and maxWidth are set on the boundingBox in order to enforce the constraint.
            // Note that this doesn't apply when we have an exact position, in which case we do want to
            // apply them because they'll be cleared from the bounding box.

            if (config.maxHeight) {
              if (hasExactPosition) {
                styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(config.maxHeight);
              } else if (hasFlexibleDimensions) {
                styles.maxHeight = '';
              }
            }

            if (config.maxWidth) {
              if (hasExactPosition) {
                styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(config.maxWidth);
              } else if (hasFlexibleDimensions) {
                styles.maxWidth = '';
              }
            }

            extendStyles(this._pane.style, styles);
          }
          /** Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing. */

        }, {
          key: "_getExactOverlayY",
          value: function _getExactOverlayY(position, originPoint, scrollPosition) {
            // Reset any existing styles. This is necessary in case the
            // preferred position has changed since the last `apply`.
            var styles = {
              top: '',
              bottom: ''
            };

            var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);

            if (this._isPushed) {
              overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
            }

            var virtualKeyboardOffset = this._overlayContainer.getContainerElement().getBoundingClientRect().top; // Normally this would be zero, however when the overlay is attached to an input (e.g. in an
            // autocomplete), mobile browsers will shift everything in order to put the input in the middle
            // of the screen and to make space for the virtual keyboard. We need to account for this offset,
            // otherwise our positioning will be thrown off.


            overlayPoint.y -= virtualKeyboardOffset; // We want to set either `top` or `bottom` based on whether the overlay wants to appear
            // above or below the origin and the direction in which the element will expand.

            if (position.overlayY === 'bottom') {
              // When using `bottom`, we adjust the y position such that it is the distance
              // from the bottom of the viewport rather than the top.
              var documentHeight = this._document.documentElement.clientHeight;
              styles.bottom = "".concat(documentHeight - (overlayPoint.y + this._overlayRect.height), "px");
            } else {
              styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(overlayPoint.y);
            }

            return styles;
          }
          /** Gets the exact left/right for the overlay when not using flexible sizing or when pushing. */

        }, {
          key: "_getExactOverlayX",
          value: function _getExactOverlayX(position, originPoint, scrollPosition) {
            // Reset any existing styles. This is necessary in case the preferred position has
            // changed since the last `apply`.
            var styles = {
              left: '',
              right: ''
            };

            var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);

            if (this._isPushed) {
              overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
            } // We want to set either `left` or `right` based on whether the overlay wants to appear "before"
            // or "after" the origin, which determines the direction in which the element will expand.
            // For the horizontal axis, the meaning of "before" and "after" change based on whether the
            // page is in RTL or LTR.


            var horizontalStyleProperty;

            if (this._isRtl()) {
              horizontalStyleProperty = position.overlayX === 'end' ? 'left' : 'right';
            } else {
              horizontalStyleProperty = position.overlayX === 'end' ? 'right' : 'left';
            } // When we're setting `right`, we adjust the x position such that it is the distance
            // from the right edge of the viewport rather than the left edge.


            if (horizontalStyleProperty === 'right') {
              var documentWidth = this._document.documentElement.clientWidth;
              styles.right = "".concat(documentWidth - (overlayPoint.x + this._overlayRect.width), "px");
            } else {
              styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(overlayPoint.x);
            }

            return styles;
          }
          /**
           * Gets the view properties of the trigger and overlay, including whether they are clipped
           * or completely outside the view of any of the strategy's scrollables.
           */

        }, {
          key: "_getScrollVisibility",
          value: function _getScrollVisibility() {
            // Note: needs fresh rects since the position could've changed.
            var originBounds = this._getOriginRect();

            var overlayBounds = this._pane.getBoundingClientRect(); // TODO(jelbourn): instead of needing all of the client rects for these scrolling containers
            // every time, we should be able to use the scrollTop of the containers if the size of those
            // containers hasn't changed.


            var scrollContainerBounds = this._scrollables.map(function (scrollable) {
              return scrollable.getElementRef().nativeElement.getBoundingClientRect();
            });

            return {
              isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
              isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
              isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
              isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds)
            };
          }
          /** Subtracts the amount that an element is overflowing on an axis from its length. */

        }, {
          key: "_subtractOverflows",
          value: function _subtractOverflows(length) {
            for (var _len = arguments.length, overflows = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              overflows[_key - 1] = arguments[_key];
            }

            return overflows.reduce(function (currentValue, currentOverflow) {
              return currentValue - Math.max(currentOverflow, 0);
            }, length);
          }
          /** Narrows the given viewport rect by the current _viewportMargin. */

        }, {
          key: "_getNarrowedViewportRect",
          value: function _getNarrowedViewportRect() {
            // We recalculate the viewport rect here ourselves, rather than using the ViewportRuler,
            // because we want to use the `clientWidth` and `clientHeight` as the base. The difference
            // being that the client properties don't include the scrollbar, as opposed to `innerWidth`
            // and `innerHeight` that do. This is necessary, because the overlay container uses
            // 100% `width` and `height` which don't include the scrollbar either.
            var width = this._document.documentElement.clientWidth;
            var height = this._document.documentElement.clientHeight;

            var scrollPosition = this._viewportRuler.getViewportScrollPosition();

            return {
              top: scrollPosition.top + this._viewportMargin,
              left: scrollPosition.left + this._viewportMargin,
              right: scrollPosition.left + width - this._viewportMargin,
              bottom: scrollPosition.top + height - this._viewportMargin,
              width: width - 2 * this._viewportMargin,
              height: height - 2 * this._viewportMargin
            };
          }
          /** Whether the we're dealing with an RTL context */

        }, {
          key: "_isRtl",
          value: function _isRtl() {
            return this._overlayRef.getDirection() === 'rtl';
          }
          /** Determines whether the overlay uses exact or flexible positioning. */

        }, {
          key: "_hasExactPosition",
          value: function _hasExactPosition() {
            return !this._hasFlexibleDimensions || this._isPushed;
          }
          /** Retrieves the offset of a position along the x or y axis. */

        }, {
          key: "_getOffset",
          value: function _getOffset(position, axis) {
            if (axis === 'x') {
              // We don't do something like `position['offset' + axis]` in
              // order to avoid breking minifiers that rename properties.
              return position.offsetX == null ? this._offsetX : position.offsetX;
            }

            return position.offsetY == null ? this._offsetY : position.offsetY;
          }
          /** Validates that the current position match the expected values. */

        }, {
          key: "_validatePositions",
          value: function _validatePositions() {
            if (!this._preferredPositions.length) {
              throw Error('FlexibleConnectedPositionStrategy: At least one position is required.');
            } // TODO(crisbeto): remove these once Angular's template type
            // checking is advanced enough to catch these cases.


            this._preferredPositions.forEach(function (pair) {
              validateHorizontalPosition('originX', pair.originX);
              validateVerticalPosition('originY', pair.originY);
              validateHorizontalPosition('overlayX', pair.overlayX);
              validateVerticalPosition('overlayY', pair.overlayY);
            });
          }
          /** Adds a single CSS class or an array of classes on the overlay panel. */

        }, {
          key: "_addPanelClasses",
          value: function _addPanelClasses(cssClasses) {
            var _this13 = this;

            if (this._pane) {
              Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceArray"])(cssClasses).forEach(function (cssClass) {
                if (cssClass !== '' && _this13._appliedPanelClasses.indexOf(cssClass) === -1) {
                  _this13._appliedPanelClasses.push(cssClass);

                  _this13._pane.classList.add(cssClass);
                }
              });
            }
          }
          /** Clears the classes that the position strategy has applied from the overlay panel. */

        }, {
          key: "_clearPanelClasses",
          value: function _clearPanelClasses() {
            var _this14 = this;

            if (this._pane) {
              this._appliedPanelClasses.forEach(function (cssClass) {
                _this14._pane.classList.remove(cssClass);
              });

              this._appliedPanelClasses = [];
            }
          }
          /** Returns the ClientRect of the current origin. */

        }, {
          key: "_getOriginRect",
          value: function _getOriginRect() {
            var origin = this._origin;

            if (origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]) {
              return origin.nativeElement.getBoundingClientRect();
            } // Check for Element so SVG elements are also supported.


            if (origin instanceof Element) {
              return origin.getBoundingClientRect();
            }

            var width = origin.width || 0;
            var height = origin.height || 0; // If the origin is a point, return a client rect as if it was a 0x0 element at the point.

            return {
              top: origin.y,
              bottom: origin.y + height,
              left: origin.x,
              right: origin.x + width,
              height: height,
              width: width
            };
          }
        }, {
          key: "positions",
          get: function get() {
            return this._preferredPositions;
          }
        }]);

        return FlexibleConnectedPositionStrategy;
      }();
      /** Shallow-extends a stylesheet object with another stylesheet object. */


      function extendStyles(destination, source) {
        for (var key in source) {
          if (source.hasOwnProperty(key)) {
            destination[key] = source[key];
          }
        }

        return destination;
      }
      /**
       * Extracts the pixel value as a number from a value, if it's a number
       * or a CSS pixel string (e.g. `1337px`). Otherwise returns null.
       */


      function getPixelValue(input) {
        if (typeof input !== 'number' && input != null) {
          var _input$split = input.split(cssUnitPattern),
              _input$split2 = _slicedToArray(_input$split, 2),
              value = _input$split2[0],
              units = _input$split2[1];

          return !units || units === 'px' ? parseFloat(value) : null;
        }

        return input || null;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * A strategy for positioning overlays. Using this strategy, an overlay is given an
       * implicit position relative to some origin element. The relative position is defined in terms of
       * a point on the origin element that is connected to a point on the overlay element. For example,
       * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
       * of the overlay.
       * @deprecated Use `FlexibleConnectedPositionStrategy` instead.
       * @breaking-change 8.0.0
       */


      var ConnectedPositionStrategy = /*#__PURE__*/function () {
        function ConnectedPositionStrategy(originPos, overlayPos, connectedTo, viewportRuler, document, platform, overlayContainer) {
          _classCallCheck(this, ConnectedPositionStrategy);

          /** Ordered list of preferred positions, from most to least desirable. */
          this._preferredPositions = []; // Since the `ConnectedPositionStrategy` is deprecated and we don't want to maintain
          // the extra logic, we create an instance of the positioning strategy that has some
          // defaults that make it behave as the old position strategy and to which we'll
          // proxy all of the API calls.

          this._positionStrategy = new FlexibleConnectedPositionStrategy(connectedTo, viewportRuler, document, platform, overlayContainer).withFlexibleDimensions(false).withPush(false).withViewportMargin(0);
          this.withFallbackPosition(originPos, overlayPos);
        }
        /** Emits an event when the connection point changes. */


        _createClass(ConnectedPositionStrategy, [{
          key: "attach",

          /** Attach this position strategy to an overlay. */
          value: function attach(overlayRef) {
            this._overlayRef = overlayRef;

            this._positionStrategy.attach(overlayRef);

            if (this._direction) {
              overlayRef.setDirection(this._direction);
              this._direction = null;
            }
          }
          /** Disposes all resources used by the position strategy. */

        }, {
          key: "dispose",
          value: function dispose() {
            this._positionStrategy.dispose();
          }
          /** @docs-private */

        }, {
          key: "detach",
          value: function detach() {
            this._positionStrategy.detach();
          }
          /**
           * Updates the position of the overlay element, using whichever preferred position relative
           * to the origin fits on-screen.
           * @docs-private
           */

        }, {
          key: "apply",
          value: function apply() {
            this._positionStrategy.apply();
          }
          /**
           * Re-positions the overlay element with the trigger in its last calculated position,
           * even if a position higher in the "preferred positions" list would now fit. This
           * allows one to re-align the panel without changing the orientation of the panel.
           */

        }, {
          key: "recalculateLastPosition",
          value: function recalculateLastPosition() {
            this._positionStrategy.reapplyLastPosition();
          }
          /**
           * Sets the list of Scrollable containers that host the origin element so that
           * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
           * Scrollable must be an ancestor element of the strategy's origin element.
           */

        }, {
          key: "withScrollableContainers",
          value: function withScrollableContainers(scrollables) {
            this._positionStrategy.withScrollableContainers(scrollables);
          }
          /**
           * Adds a new preferred fallback position.
           * @param originPos
           * @param overlayPos
           */

        }, {
          key: "withFallbackPosition",
          value: function withFallbackPosition(originPos, overlayPos, offsetX, offsetY) {
            var position = new ConnectionPositionPair(originPos, overlayPos, offsetX, offsetY);

            this._preferredPositions.push(position);

            this._positionStrategy.withPositions(this._preferredPositions);

            return this;
          }
          /**
           * Sets the layout direction so the overlay's position can be adjusted to match.
           * @param dir New layout direction.
           */

        }, {
          key: "withDirection",
          value: function withDirection(dir) {
            // Since the direction might be declared before the strategy is attached,
            // we save the value in a temporary property and we'll transfer it to the
            // overlay ref on attachment.
            if (this._overlayRef) {
              this._overlayRef.setDirection(dir);
            } else {
              this._direction = dir;
            }

            return this;
          }
          /**
           * Sets an offset for the overlay's connection point on the x-axis
           * @param offset New offset in the X axis.
           */

        }, {
          key: "withOffsetX",
          value: function withOffsetX(offset) {
            this._positionStrategy.withDefaultOffsetX(offset);

            return this;
          }
          /**
           * Sets an offset for the overlay's connection point on the y-axis
           * @param  offset New offset in the Y axis.
           */

        }, {
          key: "withOffsetY",
          value: function withOffsetY(offset) {
            this._positionStrategy.withDefaultOffsetY(offset);

            return this;
          }
          /**
           * Sets whether the overlay's position should be locked in after it is positioned
           * initially. When an overlay is locked in, it won't attempt to reposition itself
           * when the position is re-applied (e.g. when the user scrolls away).
           * @param isLocked Whether the overlay should locked in.
           */

        }, {
          key: "withLockedPosition",
          value: function withLockedPosition(isLocked) {
            this._positionStrategy.withLockedPosition(isLocked);

            return this;
          }
          /**
           * Overwrites the current set of positions with an array of new ones.
           * @param positions Position pairs to be set on the strategy.
           */

        }, {
          key: "withPositions",
          value: function withPositions(positions) {
            this._preferredPositions = positions.slice();

            this._positionStrategy.withPositions(this._preferredPositions);

            return this;
          }
          /**
           * Sets the origin element, relative to which to position the overlay.
           * @param origin Reference to the new origin element.
           */

        }, {
          key: "setOrigin",
          value: function setOrigin(origin) {
            this._positionStrategy.setOrigin(origin);

            return this;
          }
        }, {
          key: "onPositionChange",
          get: function get() {
            return this._positionStrategy.positionChanges;
          }
          /** Ordered list of preferred positions, from most to least desirable. */

        }, {
          key: "positions",
          get: function get() {
            return this._preferredPositions;
          }
        }]);

        return ConnectedPositionStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Class to be added to the overlay pane wrapper. */


      var wrapperClass = 'cdk-global-overlay-wrapper';
      /**
       * A strategy for positioning overlays. Using this strategy, an overlay is given an
       * explicit position relative to the browser's viewport. We use flexbox, instead of
       * transforms, in order to avoid issues with subpixel rendering which can cause the
       * element to become blurry.
       */

      var GlobalPositionStrategy = /*#__PURE__*/function () {
        function GlobalPositionStrategy() {
          _classCallCheck(this, GlobalPositionStrategy);

          this._cssPosition = 'static';
          this._topOffset = '';
          this._bottomOffset = '';
          this._leftOffset = '';
          this._rightOffset = '';
          this._alignItems = '';
          this._justifyContent = '';
          this._width = '';
          this._height = '';
        }

        _createClass(GlobalPositionStrategy, [{
          key: "attach",
          value: function attach(overlayRef) {
            var config = overlayRef.getConfig();
            this._overlayRef = overlayRef;

            if (this._width && !config.width) {
              overlayRef.updateSize({
                width: this._width
              });
            }

            if (this._height && !config.height) {
              overlayRef.updateSize({
                height: this._height
              });
            }

            overlayRef.hostElement.classList.add(wrapperClass);
            this._isDisposed = false;
          }
          /**
           * Sets the top position of the overlay. Clears any previously set vertical position.
           * @param value New top offset.
           */

        }, {
          key: "top",
          value: function top() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this._bottomOffset = '';
            this._topOffset = value;
            this._alignItems = 'flex-start';
            return this;
          }
          /**
           * Sets the left position of the overlay. Clears any previously set horizontal position.
           * @param value New left offset.
           */

        }, {
          key: "left",
          value: function left() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this._rightOffset = '';
            this._leftOffset = value;
            this._justifyContent = 'flex-start';
            return this;
          }
          /**
           * Sets the bottom position of the overlay. Clears any previously set vertical position.
           * @param value New bottom offset.
           */

        }, {
          key: "bottom",
          value: function bottom() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this._topOffset = '';
            this._bottomOffset = value;
            this._alignItems = 'flex-end';
            return this;
          }
          /**
           * Sets the right position of the overlay. Clears any previously set horizontal position.
           * @param value New right offset.
           */

        }, {
          key: "right",
          value: function right() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this._leftOffset = '';
            this._rightOffset = value;
            this._justifyContent = 'flex-end';
            return this;
          }
          /**
           * Sets the overlay width and clears any previously set width.
           * @param value New width for the overlay
           * @deprecated Pass the `width` through the `OverlayConfig`.
           * @breaking-change 8.0.0
           */

        }, {
          key: "width",
          value: function width() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            if (this._overlayRef) {
              this._overlayRef.updateSize({
                width: value
              });
            } else {
              this._width = value;
            }

            return this;
          }
          /**
           * Sets the overlay height and clears any previously set height.
           * @param value New height for the overlay
           * @deprecated Pass the `height` through the `OverlayConfig`.
           * @breaking-change 8.0.0
           */

        }, {
          key: "height",
          value: function height() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            if (this._overlayRef) {
              this._overlayRef.updateSize({
                height: value
              });
            } else {
              this._height = value;
            }

            return this;
          }
          /**
           * Centers the overlay horizontally with an optional offset.
           * Clears any previously set horizontal position.
           *
           * @param offset Overlay offset from the horizontal center.
           */

        }, {
          key: "centerHorizontally",
          value: function centerHorizontally() {
            var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this.left(offset);
            this._justifyContent = 'center';
            return this;
          }
          /**
           * Centers the overlay vertically with an optional offset.
           * Clears any previously set vertical position.
           *
           * @param offset Overlay offset from the vertical center.
           */

        }, {
          key: "centerVertically",
          value: function centerVertically() {
            var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this.top(offset);
            this._alignItems = 'center';
            return this;
          }
          /**
           * Apply the position to the element.
           * @docs-private
           */

        }, {
          key: "apply",
          value: function apply() {
            // Since the overlay ref applies the strategy asynchronously, it could
            // have been disposed before it ends up being applied. If that is the
            // case, we shouldn't do anything.
            if (!this._overlayRef || !this._overlayRef.hasAttached()) {
              return;
            }

            var styles = this._overlayRef.overlayElement.style;
            var parentStyles = this._overlayRef.hostElement.style;

            var config = this._overlayRef.getConfig();

            var width = config.width,
                height = config.height,
                maxWidth = config.maxWidth,
                maxHeight = config.maxHeight;
            var shouldBeFlushHorizontally = (width === '100%' || width === '100vw') && (!maxWidth || maxWidth === '100%' || maxWidth === '100vw');
            var shouldBeFlushVertically = (height === '100%' || height === '100vh') && (!maxHeight || maxHeight === '100%' || maxHeight === '100vh');
            styles.position = this._cssPosition;
            styles.marginLeft = shouldBeFlushHorizontally ? '0' : this._leftOffset;
            styles.marginTop = shouldBeFlushVertically ? '0' : this._topOffset;
            styles.marginBottom = this._bottomOffset;
            styles.marginRight = this._rightOffset;

            if (shouldBeFlushHorizontally) {
              parentStyles.justifyContent = 'flex-start';
            } else if (this._justifyContent === 'center') {
              parentStyles.justifyContent = 'center';
            } else if (this._overlayRef.getConfig().direction === 'rtl') {
              // In RTL the browser will invert `flex-start` and `flex-end` automatically, but we
              // don't want that because our positioning is explicitly `left` and `right`, hence
              // why we do another inversion to ensure that the overlay stays in the same position.
              // TODO: reconsider this if we add `start` and `end` methods.
              if (this._justifyContent === 'flex-start') {
                parentStyles.justifyContent = 'flex-end';
              } else if (this._justifyContent === 'flex-end') {
                parentStyles.justifyContent = 'flex-start';
              }
            } else {
              parentStyles.justifyContent = this._justifyContent;
            }

            parentStyles.alignItems = shouldBeFlushVertically ? 'flex-start' : this._alignItems;
          }
          /**
           * Cleans up the DOM changes from the position strategy.
           * @docs-private
           */

        }, {
          key: "dispose",
          value: function dispose() {
            if (this._isDisposed || !this._overlayRef) {
              return;
            }

            var styles = this._overlayRef.overlayElement.style;
            var parent = this._overlayRef.hostElement;
            var parentStyles = parent.style;
            parent.classList.remove(wrapperClass);
            parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop = styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = '';
            this._overlayRef = null;
            this._isDisposed = true;
          }
        }]);

        return GlobalPositionStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Builder for overlay position strategy. */


      var OverlayPositionBuilder = /*#__PURE__*/function () {
        function OverlayPositionBuilder(_viewportRuler, _document, _platform, _overlayContainer) {
          _classCallCheck(this, OverlayPositionBuilder);

          this._viewportRuler = _viewportRuler;
          this._document = _document;
          this._platform = _platform;
          this._overlayContainer = _overlayContainer;
        }
        /**
         * Creates a global position strategy.
         */


        _createClass(OverlayPositionBuilder, [{
          key: "global",
          value: function global() {
            return new GlobalPositionStrategy();
          }
          /**
           * Creates a relative position strategy.
           * @param elementRef
           * @param originPos
           * @param overlayPos
           * @deprecated Use `flexibleConnectedTo` instead.
           * @breaking-change 8.0.0
           */

        }, {
          key: "connectedTo",
          value: function connectedTo(elementRef, originPos, overlayPos) {
            return new ConnectedPositionStrategy(originPos, overlayPos, elementRef, this._viewportRuler, this._document, this._platform, this._overlayContainer);
          }
          /**
           * Creates a flexible position strategy.
           * @param origin Origin relative to which to position the overlay.
           */

        }, {
          key: "flexibleConnectedTo",
          value: function flexibleConnectedTo(origin) {
            return new FlexibleConnectedPositionStrategy(origin, this._viewportRuler, this._document, this._platform, this._overlayContainer);
          }
        }]);

        return OverlayPositionBuilder;
      }();

      OverlayPositionBuilder.ɵfac = function OverlayPositionBuilder_Factory(t) {
        return new (t || OverlayPositionBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayContainer));
      };

      OverlayPositionBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function OverlayPositionBuilder_Factory() {
          return new OverlayPositionBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(OverlayContainer));
        },
        token: OverlayPositionBuilder,
        providedIn: "root"
      });

      OverlayPositionBuilder.ctorParameters = function () {
        return [{
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: OverlayContainer
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayPositionBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
          }, {
            type: OverlayContainer
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

      /** Next overlay unique ID. */


      var nextUniqueId = 0; // Note that Overlay is *not* scoped to the app root because of the ComponentFactoryResolver
      // which needs to be different depending on where OverlayModule is imported.

      /**
       * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
       * used as a low-level building block for other components. Dialogs, tooltips, menus,
       * selects, etc. can all be built using overlays. The service should primarily be used by authors
       * of re-usable components rather than developers building end-user applications.
       *
       * An overlay *is* a PortalOutlet, so any kind of Portal can be loaded into one.
       */

      var Overlay = /*#__PURE__*/function () {
        function Overlay(
        /** Scrolling strategies that can be used when creating an overlay. */
        scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _injector, _ngZone, _document, _directionality, // @breaking-change 8.0.0 `_location` parameter to be made required.
        _location, // @breaking-change 9.0.0 `_outsideClickDispatcher` parameter to be made required.
        _outsideClickDispatcher) {
          _classCallCheck(this, Overlay);

          this.scrollStrategies = scrollStrategies;
          this._overlayContainer = _overlayContainer;
          this._componentFactoryResolver = _componentFactoryResolver;
          this._positionBuilder = _positionBuilder;
          this._keyboardDispatcher = _keyboardDispatcher;
          this._injector = _injector;
          this._ngZone = _ngZone;
          this._document = _document;
          this._directionality = _directionality;
          this._location = _location;
          this._outsideClickDispatcher = _outsideClickDispatcher;
        }
        /**
         * Creates an overlay.
         * @param config Configuration applied to the overlay.
         * @returns Reference to the created overlay.
         */


        _createClass(Overlay, [{
          key: "create",
          value: function create(config) {
            var host = this._createHostElement();

            var pane = this._createPaneElement(host);

            var portalOutlet = this._createPortalOutlet(pane);

            var overlayConfig = new OverlayConfig(config);
            overlayConfig.direction = overlayConfig.direction || this._directionality.value;
            return new OverlayRef(portalOutlet, host, pane, overlayConfig, this._ngZone, this._keyboardDispatcher, this._document, this._location, this._outsideClickDispatcher);
          }
          /**
           * Gets a position builder that can be used, via fluent API,
           * to construct and configure a position strategy.
           * @returns An overlay position builder.
           */

        }, {
          key: "position",
          value: function position() {
            return this._positionBuilder;
          }
          /**
           * Creates the DOM element for an overlay and appends it to the overlay container.
           * @returns Newly-created pane element
           */

        }, {
          key: "_createPaneElement",
          value: function _createPaneElement(host) {
            var pane = this._document.createElement('div');

            pane.id = "cdk-overlay-".concat(nextUniqueId++);
            pane.classList.add('cdk-overlay-pane');
            host.appendChild(pane);
            return pane;
          }
          /**
           * Creates the host element that wraps around an overlay
           * and can be used for advanced positioning.
           * @returns Newly-create host element.
           */

        }, {
          key: "_createHostElement",
          value: function _createHostElement() {
            var host = this._document.createElement('div');

            this._overlayContainer.getContainerElement().appendChild(host);

            return host;
          }
          /**
           * Create a DomPortalOutlet into which the overlay content can be loaded.
           * @param pane The DOM element to turn into a portal outlet.
           * @returns A portal outlet for the given DOM element.
           */

        }, {
          key: "_createPortalOutlet",
          value: function _createPortalOutlet(pane) {
            // We have to resolve the ApplicationRef later in order to allow people
            // to use overlay-based providers during app initialization.
            if (!this._appRef) {
              this._appRef = this._injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]);
            }

            return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["DomPortalOutlet"](pane, this._componentFactoryResolver, this._appRef, this._injector, this._document);
          }
        }]);

        return Overlay;
      }();

      Overlay.ɵfac = function Overlay_Factory(t) {
        return new (t || Overlay)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ScrollStrategyOptions), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayPositionBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayKeyboardDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayOutsideClickDispatcher, 8));
      };

      Overlay.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: Overlay,
        factory: Overlay.ɵfac
      });

      Overlay.ctorParameters = function () {
        return [{
          type: ScrollStrategyOptions
        }, {
          type: OverlayContainer
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }, {
          type: OverlayPositionBuilder
        }, {
          type: OverlayKeyboardDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: OverlayOutsideClickDispatcher,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Overlay, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: ScrollStrategyOptions
          }, {
            type: OverlayContainer
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
          }, {
            type: OverlayPositionBuilder
          }, {
            type: OverlayKeyboardDispatcher
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: OverlayOutsideClickDispatcher,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
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

      /** Default set of positions for the overlay. Follows the behavior of a dropdown. */


      var defaultPositionList = [{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      }, {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
      }, {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom'
      }, {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
      }];
      /** Injection token that determines the scroll handling while the connected overlay is open. */

      var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-connected-overlay-scroll-strategy');
      /** @docs-private @deprecated @breaking-change 8.0.0 */

      function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_FACTORY(overlay) {
        return function (config) {
          return overlay.scrollStrategies.reposition(config);
        };
      }
      /**
       * Directive applied to an element to make it usable as an origin for an Overlay using a
       * ConnectedPositionStrategy.
       */


      var CdkOverlayOrigin = function CdkOverlayOrigin(
      /** Reference to the element on which the directive is applied. */
      elementRef) {
        _classCallCheck(this, CdkOverlayOrigin);

        this.elementRef = elementRef;
      };

      CdkOverlayOrigin.ɵfac = function CdkOverlayOrigin_Factory(t) {
        return new (t || CdkOverlayOrigin)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      CdkOverlayOrigin.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkOverlayOrigin,
        selectors: [["", "cdk-overlay-origin", ""], ["", "overlay-origin", ""], ["", "cdkOverlayOrigin", ""]],
        exportAs: ["cdkOverlayOrigin"]
      });

      CdkOverlayOrigin.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkOverlayOrigin, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]',
            exportAs: 'cdkOverlayOrigin'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * Directive to facilitate declarative creation of an
       * Overlay using a FlexibleConnectedPositionStrategy.
       */


      var CdkConnectedOverlay = /*#__PURE__*/function () {
        // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
        function CdkConnectedOverlay(_overlay, templateRef, viewContainerRef, scrollStrategyFactory, _dir) {
          _classCallCheck(this, CdkConnectedOverlay);

          this._overlay = _overlay;
          this._dir = _dir;
          this._hasBackdrop = false;
          this._lockPosition = false;
          this._growAfterOpen = false;
          this._flexibleDimensions = false;
          this._push = false;
          this._backdropSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
          this._attachSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
          this._detachSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
          this._positionSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
          /** Margin between the overlay and the viewport edges. */

          this.viewportMargin = 0;
          /** Whether the overlay is open. */

          this.open = false;
          /** Event emitted when the backdrop is clicked. */

          this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Event emitted when the position has changed. */

          this.positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Event emitted when the overlay has been attached. */

          this.attach = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Event emitted when the overlay has been detached. */

          this.detach = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Emits when there are keyboard events that are targeted at the overlay. */

          this.overlayKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Emits when there are mouse outside click events that are targeted at the overlay. */

          this.overlayOutsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this._templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["TemplatePortal"](templateRef, viewContainerRef);
          this._scrollStrategyFactory = scrollStrategyFactory;
          this.scrollStrategy = this._scrollStrategyFactory();
        }
        /** The offset in pixels for the overlay connection point on the x-axis */


        _createClass(CdkConnectedOverlay, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._attachSubscription.unsubscribe();

            this._detachSubscription.unsubscribe();

            this._backdropSubscription.unsubscribe();

            this._positionSubscription.unsubscribe();

            if (this._overlayRef) {
              this._overlayRef.dispose();
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (this._position) {
              this._updatePositionStrategy(this._position);

              this._overlayRef.updateSize({
                width: this.width,
                minWidth: this.minWidth,
                height: this.height,
                minHeight: this.minHeight
              });

              if (changes['origin'] && this.open) {
                this._position.apply();
              }
            }

            if (changes['open']) {
              this.open ? this._attachOverlay() : this._detachOverlay();
            }
          }
          /** Creates an overlay */

        }, {
          key: "_createOverlay",
          value: function _createOverlay() {
            var _this15 = this;

            if (!this.positions || !this.positions.length) {
              this.positions = defaultPositionList;
            }

            var overlayRef = this._overlayRef = this._overlay.create(this._buildConfig());

            this._attachSubscription = overlayRef.attachments().subscribe(function () {
              return _this15.attach.emit();
            });
            this._detachSubscription = overlayRef.detachments().subscribe(function () {
              return _this15.detach.emit();
            });
            overlayRef.keydownEvents().subscribe(function (event) {
              _this15.overlayKeydown.next(event);

              if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["hasModifierKey"])(event)) {
                event.preventDefault();

                _this15._detachOverlay();
              }
            });

            this._overlayRef.outsidePointerEvents().subscribe(function (event) {
              _this15.overlayOutsideClick.next(event);
            });
          }
          /** Builds the overlay config based on the directive's inputs */

        }, {
          key: "_buildConfig",
          value: function _buildConfig() {
            var positionStrategy = this._position = this.positionStrategy || this._createPositionStrategy();

            var overlayConfig = new OverlayConfig({
              direction: this._dir,
              positionStrategy: positionStrategy,
              scrollStrategy: this.scrollStrategy,
              hasBackdrop: this.hasBackdrop
            });

            if (this.width || this.width === 0) {
              overlayConfig.width = this.width;
            }

            if (this.height || this.height === 0) {
              overlayConfig.height = this.height;
            }

            if (this.minWidth || this.minWidth === 0) {
              overlayConfig.minWidth = this.minWidth;
            }

            if (this.minHeight || this.minHeight === 0) {
              overlayConfig.minHeight = this.minHeight;
            }

            if (this.backdropClass) {
              overlayConfig.backdropClass = this.backdropClass;
            }

            if (this.panelClass) {
              overlayConfig.panelClass = this.panelClass;
            }

            return overlayConfig;
          }
          /** Updates the state of a position strategy, based on the values of the directive inputs. */

        }, {
          key: "_updatePositionStrategy",
          value: function _updatePositionStrategy(positionStrategy) {
            var _this16 = this;

            var positions = this.positions.map(function (currentPosition) {
              return {
                originX: currentPosition.originX,
                originY: currentPosition.originY,
                overlayX: currentPosition.overlayX,
                overlayY: currentPosition.overlayY,
                offsetX: currentPosition.offsetX || _this16.offsetX,
                offsetY: currentPosition.offsetY || _this16.offsetY,
                panelClass: currentPosition.panelClass || undefined
              };
            });
            return positionStrategy.setOrigin(this.origin.elementRef).withPositions(positions).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector);
          }
          /** Returns the position strategy of the overlay to be set on the overlay config */

        }, {
          key: "_createPositionStrategy",
          value: function _createPositionStrategy() {
            var strategy = this._overlay.position().flexibleConnectedTo(this.origin.elementRef);

            this._updatePositionStrategy(strategy);

            return strategy;
          }
          /** Attaches the overlay and subscribes to backdrop clicks if backdrop exists */

        }, {
          key: "_attachOverlay",
          value: function _attachOverlay() {
            var _this17 = this;

            if (!this._overlayRef) {
              this._createOverlay();
            } else {
              // Update the overlay size, in case the directive's inputs have changed
              this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
            }

            if (!this._overlayRef.hasAttached()) {
              this._overlayRef.attach(this._templatePortal);
            }

            if (this.hasBackdrop) {
              this._backdropSubscription = this._overlayRef.backdropClick().subscribe(function (event) {
                _this17.backdropClick.emit(event);
              });
            } else {
              this._backdropSubscription.unsubscribe();
            }

            this._positionSubscription.unsubscribe(); // Only subscribe to `positionChanges` if requested, because putting
            // together all the information for it can be expensive.


            if (this.positionChange.observers.length > 0) {
              this._positionSubscription = this._position.positionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeWhile"])(function () {
                return _this17.positionChange.observers.length > 0;
              })).subscribe(function (position) {
                _this17.positionChange.emit(position);

                if (_this17.positionChange.observers.length === 0) {
                  _this17._positionSubscription.unsubscribe();
                }
              });
            }
          }
          /** Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists */

        }, {
          key: "_detachOverlay",
          value: function _detachOverlay() {
            if (this._overlayRef) {
              this._overlayRef.detach();
            }

            this._backdropSubscription.unsubscribe();

            this._positionSubscription.unsubscribe();
          }
        }, {
          key: "offsetX",
          get: function get() {
            return this._offsetX;
          },
          set: function set(offsetX) {
            this._offsetX = offsetX;

            if (this._position) {
              this._updatePositionStrategy(this._position);
            }
          }
          /** The offset in pixels for the overlay connection point on the y-axis */

        }, {
          key: "offsetY",
          get: function get() {
            return this._offsetY;
          },
          set: function set(offsetY) {
            this._offsetY = offsetY;

            if (this._position) {
              this._updatePositionStrategy(this._position);
            }
          }
          /** Whether or not the overlay should attach a backdrop. */

        }, {
          key: "hasBackdrop",
          get: function get() {
            return this._hasBackdrop;
          },
          set: function set(value) {
            this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** Whether or not the overlay should be locked when scrolling. */

        }, {
          key: "lockPosition",
          get: function get() {
            return this._lockPosition;
          },
          set: function set(value) {
            this._lockPosition = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** Whether the overlay's width and height can be constrained to fit within the viewport. */

        }, {
          key: "flexibleDimensions",
          get: function get() {
            return this._flexibleDimensions;
          },
          set: function set(value) {
            this._flexibleDimensions = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** Whether the overlay can grow after the initial open when flexible positioning is turned on. */

        }, {
          key: "growAfterOpen",
          get: function get() {
            return this._growAfterOpen;
          },
          set: function set(value) {
            this._growAfterOpen = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** Whether the overlay can be pushed on-screen if none of the provided positions fit. */

        }, {
          key: "push",
          get: function get() {
            return this._push;
          },
          set: function set(value) {
            this._push = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** The associated overlay reference. */

        }, {
          key: "overlayRef",
          get: function get() {
            return this._overlayRef;
          }
          /** The element's layout direction. */

        }, {
          key: "dir",
          get: function get() {
            return this._dir ? this._dir.value : 'ltr';
          }
        }]);

        return CdkConnectedOverlay;
      }();

      CdkConnectedOverlay.ɵfac = function CdkConnectedOverlay_Factory(t) {
        return new (t || CdkConnectedOverlay)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8));
      };

      CdkConnectedOverlay.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkConnectedOverlay,
        selectors: [["", "cdk-connected-overlay", ""], ["", "connected-overlay", ""], ["", "cdkConnectedOverlay", ""]],
        inputs: {
          viewportMargin: ["cdkConnectedOverlayViewportMargin", "viewportMargin"],
          open: ["cdkConnectedOverlayOpen", "open"],
          scrollStrategy: ["cdkConnectedOverlayScrollStrategy", "scrollStrategy"],
          offsetX: ["cdkConnectedOverlayOffsetX", "offsetX"],
          offsetY: ["cdkConnectedOverlayOffsetY", "offsetY"],
          hasBackdrop: ["cdkConnectedOverlayHasBackdrop", "hasBackdrop"],
          lockPosition: ["cdkConnectedOverlayLockPosition", "lockPosition"],
          flexibleDimensions: ["cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions"],
          growAfterOpen: ["cdkConnectedOverlayGrowAfterOpen", "growAfterOpen"],
          push: ["cdkConnectedOverlayPush", "push"],
          positions: ["cdkConnectedOverlayPositions", "positions"],
          origin: ["cdkConnectedOverlayOrigin", "origin"],
          positionStrategy: ["cdkConnectedOverlayPositionStrategy", "positionStrategy"],
          width: ["cdkConnectedOverlayWidth", "width"],
          height: ["cdkConnectedOverlayHeight", "height"],
          minWidth: ["cdkConnectedOverlayMinWidth", "minWidth"],
          minHeight: ["cdkConnectedOverlayMinHeight", "minHeight"],
          backdropClass: ["cdkConnectedOverlayBackdropClass", "backdropClass"],
          panelClass: ["cdkConnectedOverlayPanelClass", "panelClass"],
          transformOriginSelector: ["cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"]
        },
        outputs: {
          backdropClick: "backdropClick",
          positionChange: "positionChange",
          attach: "attach",
          detach: "detach",
          overlayKeydown: "overlayKeydown",
          overlayOutsideClick: "overlayOutsideClick"
        },
        exportAs: ["cdkConnectedOverlay"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });

      CdkConnectedOverlay.ctorParameters = function () {
        return [{
          type: Overlay
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      };

      CdkConnectedOverlay.propDecorators = {
        origin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOrigin']
        }],
        positions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPositions']
        }],
        positionStrategy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPositionStrategy']
        }],
        offsetX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOffsetX']
        }],
        offsetY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOffsetY']
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayWidth']
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayHeight']
        }],
        minWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayMinWidth']
        }],
        minHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayMinHeight']
        }],
        backdropClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayBackdropClass']
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPanelClass']
        }],
        viewportMargin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayViewportMargin']
        }],
        scrollStrategy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayScrollStrategy']
        }],
        open: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOpen']
        }],
        transformOriginSelector: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayTransformOriginOn']
        }],
        hasBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayHasBackdrop']
        }],
        lockPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayLockPosition']
        }],
        flexibleDimensions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayFlexibleDimensions']
        }],
        growAfterOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayGrowAfterOpen']
        }],
        push: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPush']
        }],
        backdropClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        positionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        attach: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        detach: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        overlayKeydown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        overlayOutsideClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkConnectedOverlay, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]',
            exportAs: 'cdkConnectedOverlay'
          }]
        }], function () {
          return [{
            type: Overlay
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }];
        }, {
          viewportMargin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayViewportMargin']
          }],
          open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayOpen']
          }],
          backdropClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          positionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          attach: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          detach: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          overlayKeydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          overlayOutsideClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          scrollStrategy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayScrollStrategy']
          }],
          offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayOffsetX']
          }],
          offsetY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayOffsetY']
          }],
          hasBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayHasBackdrop']
          }],
          lockPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayLockPosition']
          }],
          flexibleDimensions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayFlexibleDimensions']
          }],
          growAfterOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayGrowAfterOpen']
          }],
          push: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayPush']
          }],
          positions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayPositions']
          }],
          origin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayOrigin']
          }],
          positionStrategy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayPositionStrategy']
          }],
          width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayWidth']
          }],
          height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayHeight']
          }],
          minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayMinWidth']
          }],
          minHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayMinHeight']
          }],
          backdropClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayBackdropClass']
          }],
          panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayPanelClass']
          }],
          transformOriginSelector: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkConnectedOverlayTransformOriginOn']
          }]
        });
      })();
      /** @docs-private */


      function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.reposition();
        };
      }
      /** @docs-private */


      var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
        provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
        deps: [Overlay],
        useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var OverlayModule = function OverlayModule() {
        _classCallCheck(this, OverlayModule);
      };

      OverlayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: OverlayModule
      });
      OverlayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function OverlayModule_Factory(t) {
          return new (t || OverlayModule)();
        },
        providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER],
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OverlayModule, {
          declarations: function declarations() {
            return [CdkConnectedOverlay, CdkOverlayOrigin];
          },
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]];
          },
          exports: function exports() {
            return [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]],
            exports: [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]],
            declarations: [CdkConnectedOverlay, CdkOverlayOrigin],
            providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER]
          }]
        }], null, null);
      })();
      /**
       * @deprecated Use `OverlayModule` instead.
       * @breaking-change 8.0.0
       * @docs-private
       */


      var OVERLAY_PROVIDERS = [Overlay, OverlayPositionBuilder, OVERLAY_KEYBOARD_DISPATCHER_PROVIDER, OVERLAY_CONTAINER_PROVIDER, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER];
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Alternative to OverlayContainer that supports correct displaying of overlay elements in
       * Fullscreen mode
       * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
       *
       * Should be provided in the root component.
       */

      var FullscreenOverlayContainer = /*#__PURE__*/function (_OverlayContainer) {
        _inherits(FullscreenOverlayContainer, _OverlayContainer);

        var _super3 = _createSuper(FullscreenOverlayContainer);

        function FullscreenOverlayContainer(_document,
        /**
         * @deprecated `platform` parameter to become required.
         * @breaking-change 10.0.0
         */
        platform) {
          _classCallCheck(this, FullscreenOverlayContainer);

          return _super3.call(this, _document, platform);
        }

        _createClass(FullscreenOverlayContainer, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(FullscreenOverlayContainer.prototype), "ngOnDestroy", this).call(this);

            if (this._fullScreenEventName && this._fullScreenListener) {
              this._document.removeEventListener(this._fullScreenEventName, this._fullScreenListener);
            }
          }
        }, {
          key: "_createContainer",
          value: function _createContainer() {
            var _this18 = this;

            _get(_getPrototypeOf(FullscreenOverlayContainer.prototype), "_createContainer", this).call(this);

            this._adjustParentForFullscreenChange();

            this._addFullscreenChangeListener(function () {
              return _this18._adjustParentForFullscreenChange();
            });
          }
        }, {
          key: "_adjustParentForFullscreenChange",
          value: function _adjustParentForFullscreenChange() {
            if (!this._containerElement) {
              return;
            }

            var fullscreenElement = this.getFullscreenElement();
            var parent = fullscreenElement || this._document.body;
            parent.appendChild(this._containerElement);
          }
        }, {
          key: "_addFullscreenChangeListener",
          value: function _addFullscreenChangeListener(fn) {
            var eventName = this._getEventName();

            if (eventName) {
              if (this._fullScreenListener) {
                this._document.removeEventListener(eventName, this._fullScreenListener);
              }

              this._document.addEventListener(eventName, fn);

              this._fullScreenListener = fn;
            }
          }
        }, {
          key: "_getEventName",
          value: function _getEventName() {
            if (!this._fullScreenEventName) {
              var _document = this._document;

              if (_document.fullscreenEnabled) {
                this._fullScreenEventName = 'fullscreenchange';
              } else if (_document.webkitFullscreenEnabled) {
                this._fullScreenEventName = 'webkitfullscreenchange';
              } else if (_document.mozFullScreenEnabled) {
                this._fullScreenEventName = 'mozfullscreenchange';
              } else if (_document.msFullscreenEnabled) {
                this._fullScreenEventName = 'MSFullscreenChange';
              }
            }

            return this._fullScreenEventName;
          }
          /**
           * When the page is put into fullscreen mode, a specific element is specified.
           * Only that element and its children are visible when in fullscreen mode.
           */

        }, {
          key: "getFullscreenElement",
          value: function getFullscreenElement() {
            var _document = this._document;
            return _document.fullscreenElement || _document.webkitFullscreenElement || _document.mozFullScreenElement || _document.msFullscreenElement || null;
          }
        }]);

        return FullscreenOverlayContainer;
      }(OverlayContainer);

      FullscreenOverlayContainer.ɵfac = function FullscreenOverlayContainer_Factory(t) {
        return new (t || FullscreenOverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
      };

      FullscreenOverlayContainer.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function FullscreenOverlayContainer_Factory() {
          return new FullscreenOverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
        },
        token: FullscreenOverlayContainer,
        providedIn: "root"
      });

      FullscreenOverlayContainer.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FullscreenOverlayContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
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

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=overlay.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~pages-notification-notification-module~pages-others-others-module~pages-subscription-subscri~5eec4b58-es5.js.map