(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Cesium"));
	else if(typeof define === 'function' && define.amd)
		define(["Cesium"], factory);
	else if(typeof exports === 'object')
		exports["vue-cesium-viewer"] = factory(require("Cesium"));
	else
		root["vue-cesium-viewer"] = factory(root["Cesium"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__89__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 89:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__89__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Viewer: function() { return /* reexport */ viewer; },
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/viewer/Viewer.vue?vue&type=template&id=9e1df29c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "viewer",
    staticStyle: {
      "width": "100%",
      "height": "100%"
    }
  }, [_vm._t("default")], 2);
};
var staticRenderFns = [];

// EXTERNAL MODULE: external "Cesium"
var external_Cesium_ = __webpack_require__(89);
;// CONCATENATED MODULE: ./src/package/utils/utils.js
/**
 * 移除对象中的空值。
 * @param {*} o
 * @returns {Object}
 */
function removeNullItem(o) {
  const s = {}.toString.call(o);
  if (s === '[object Array]') {
    processArray(o);
  } else if (s === '[object Object]') {
    proccessObject(o);
  }
}

/**
 * 处理数组。
 * @param {*} arr
 */
function processArray(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (typeof arr[i] === 'object') {
      removeNullItem(arr[i]);
    }
  }
  return arr.length === 0;
}

/**
 * 处理对象。
 * @param {*} o
 */
function proccessObject(o) {
  for (const attr in o) {
    if (o[attr] === null || o[attr] === undefined) delete o[attr];else if (typeof o[attr] === 'object') {
      if (isEmptyObj(o[attr])) delete o[attr];
    }
  }
}
function isEmptyObj(o) {
  if (isUndefined(o)) {
    return true;
  }
  if (o instanceof Element) {
    return false;
  }
  const arr = Object.keys(o);
  return arr.length === 0;
}
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return Object.prototype.toString.call(val) === '[object Array]';
}
;// CONCATENATED MODULE: ./src/package/utils/events.js
/**
 * @const {Array} Cesium 事件集合。
 */
const Events = {
  'vc-viewer': ['selectedEntityChanged', 'trackedEntityChanged'],
  'vc-primitive-tileset': ['allTilesLoaded', 'initialTilesLoaded', 'loadProgress', 'tileFailed', 'tileLoad', 'tileUnload', 'tileVisible'],
  'vc-primitive-particle': ['complete'],
  'viewer-property-events': [{
    name: 'imageryLayers',
    events: ['layerAdded', 'layerMoved', 'layerRemoved', 'layerShownOrHidden']
  }, {
    // viewer.dataSources
    name: 'dataSources',
    events: ['dataSourceAdded', 'dataSourceMoved', 'dataSourceRemoved']
  }, {
    // viewer.entities
    name: 'entities',
    events: ['collectionChanged']
  }, {
    // viewer.scene
    name: 'scene',
    events: ['morphComplete', 'morphStart', 'postRender', 'postUpdate', 'preRender', 'preUpdate', 'renderError', 'terrainProviderChanged']
  }, {
    // viewer.camera
    name: 'camera',
    events: ['changed', 'moveEnd', 'moveStart']
  }, {
    // viewer.clock
    name: 'clock',
    events: ['onStop', 'onTick']
  }, {
    // viewer.terrainProvider
    name: 'terrainProvider',
    events: ['errorEvent']
  }, {
    // viewer.infoBox.viewModel
    name: ['infoBox', 'viewModel'],
    events: ['cameraClicked', 'closeClicked']
  },
  // viewer.scene.globe
  {
    name: ['scene', 'globe'],
    events: ['imageryLayersUpdatedEvent', 'terrainProviderChanged', 'tileLoadProgressEvent']
  }],
  'viewer-mouse-events': ['LEFT_CLICK', 'LEFT_DOUBLE_CLICK', 'LEFT_DOWN', 'LEFT_UP', 'MIDDLE_CLICK', 'MIDDLE_DOWN', 'MIDDLE_UP', 'MOUSE_MOVE', 'PINCH_END', 'PINCH_MOVE', 'PINCH_START', 'RIGHT_CLICK', 'RIGHT_DOWN', 'RIGHT_UP', 'WHEEL'],
  'imagery-layer-events': ['errorEvent'],
  'entity-events': ['definitionChanged'],
  'datasource-events': ['changedEvent', 'errorEvent', 'loadingEvent'],
  'datasource-property-events': [{
    name: 'clock',
    events: ['definitionChanged']
  }, {
    name: 'clustering',
    events: ['clusterEvent']
  }, {
    name: 'entities',
    events: ['collectionChanged']
  }],
  'mouse-events': ['mousedown', 'mouseup', 'click', 'clickout', 'dblclick', 'mousemove', 'mouseover', 'mouseout']
};
;// CONCATENATED MODULE: ./src/package/utils/bindEvent.js


/**
 * 将 Cesium 对象事件注册为 Vue 组件事件。
 * @param {Object} instance Cesium 对象。
 * @param {Array} eventList 该 Cesium 对象的事件数组。
 * @param {Boolean} flag true 注册事件，false 注销事件。
 */
/* harmony default export */ function bindEvent(instance, eventList, flag = true) {
  const ev = eventList || Events[this.$options.name];
  ev && ev.forEach(eventName => {
    if (instance && instance[eventName]) {
      const listener = this?.$listeners?.[eventName];
      const methodName = flag ? 'addEventListener' : 'removeEventListener';
      listener && instance[eventName][methodName](listener.fns);
    }
  });
}
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/viewer/Viewer.vue?vue&type=script&lang=js&




/* harmony default export */ var Viewervue_type_script_lang_js_ = ({
  name: "y-viewer",
  props: {
    // cesium viewer options
    animation: {
      type: Boolean,
      default: false
    },
    baseLayerPicker: {
      type: Boolean,
      default: false
    },
    fullscreenButton: {
      type: Boolean,
      default: false
    },
    geocoder: {
      type: [Boolean, Array],
      default: false
    },
    homeButton: {
      type: Boolean,
      default: false
    },
    infoBox: {
      type: Boolean,
      default: false
    },
    sceneModePicker: {
      type: Boolean,
      default: false
    },
    timeline: {
      type: Boolean,
      default: false
    },
    navigationHelpButton: {
      type: Boolean,
      default: false
    },
    navigationInstructionsInitiallyVisible: {
      type: Boolean,
      default: false
    },
    // custom option
    logo: {
      type: Boolean,
      default: false
    },
    accessToken: {
      type: String,
      default: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2YzVlMWU5Zi1mODcwLTQzZDEtYTYwOS1hM2IyOTZkOWJkNDkiLCJpZCI6NTgxMjQsImlhdCI6MTYyMjg3OTkyM30.O7_u_MGY66QR8oJOmr1xgKHN_sd3cD2zL195HV7fRu8"
    },
    camera: {
      type: Object,
      default: function () {
        return {
          position: {
            lng: 105,
            lat: 29.999999999999993,
            height: 19059568.497290563
          },
          heading: 360,
          pitch: -90,
          roll: 0
        };
      }
    },
    viewerCreator: Function,
    autoSortImageryLayers: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.load();
  },
  destroyed() {
    this.unload();
  },
  methods: {
    init() {
      const $el = this.$refs.viewer;
      const options = this.viewerOptions();
      external_Cesium_.Ion.defaultAccessToken = this.accessToken;
      let viewer = this.viewerCreator ? this.viewerCreator(this, $el, options) : new external_Cesium_.Viewer($el, options);
      this.viewer = viewer;
      if (this.camera) {
        this.setCamera(this.camera);
      }
      if (!this.logo) {
        viewer.cesiumWidget.creditContainer.style.display = 'none';
      }
      if (external_Cesium_.defined(viewer.animation)) {
        viewer.animation.viewModel.dateFormatter = this.localeDateTimeFormatter;
        viewer.animation.viewModel.timeFormatter = this.localeTimeFormatter;
      }
      if (external_Cesium_.defined(viewer.timeline)) {
        viewer.timeline.makeLabel = time => {
          return this.localeDateTimeFormatter(time);
        };
        viewer.timeline.zoomTo(viewer.clock.startTime, viewer.clock.stopTime);
      }
      viewer.widgetResizeed = new external_Cesium_.Event();
      this.registerCameraChangedEvent();
      this.registerEvents(true);
      const readyObj = {
        viewer,
        vm: this,
        cesium: external_Cesium_
      };
      this.$emit('ready', readyObj);
      this._mounted = true;
      return readyObj;
    },
    viewerOptions() {
      let {
        animation,
        baseLayerPicker,
        fullscreenButton,
        geocoder,
        homeButton,
        infoBox,
        sceneModePicker,
        timeline,
        navigationHelpButton,
        navigationInstructionsInitiallyVisible
      } = this;
      let options = {
        animation,
        baseLayerPicker,
        fullscreenButton,
        geocoder,
        homeButton,
        infoBox,
        sceneModePicker,
        timeline,
        navigationHelpButton,
        navigationInstructionsInitiallyVisible
      };
      removeNullItem(options);
      return options;
    },
    setCamera(val) {
      const {
        viewer
      } = this;
      const position = val.position;
      if (position.lng && position.lat) {
        viewer.camera.setView({
          destination: external_Cesium_.Cartesian3.fromDegrees(position.lng, position.lat, position.height || 0, viewer.scene.globe.ellipsoid),
          orientation: {
            heading: external_Cesium_.Math.toRadians(val.heading || 360),
            pitch: external_Cesium_.Math.toRadians(val.pitch || -90),
            roll: external_Cesium_.Math.toRadians(val.roll || 0)
          }
        });
      } else if (position.x && position.y && position.z) {
        viewer.camera.setView({
          destination: new external_Cesium_.Cartesian3(position.x, position.y, position.z),
          orientation: {
            heading: val.heading || 2 * Math.PI,
            pitch: val.pitch || -Math.PI / 2,
            roll: val.roll || 0
          }
        });
      }
    },
    registerEvents(flag) {
      const {
        viewer
      } = this;
      const methodName = flag ? 'addEventListener' : 'removeEventListener';
      viewer.imageryLayers.layerAdded[methodName](this.layerAdded);
      bindEvent.call(this, viewer, undefined, flag);
      Events['viewer-property-events'].forEach(eventName => {
        const instance = isArray(eventName.name) && viewer[eventName.name[0]] ? viewer?.[eventName.name[0]]?.[eventName.name[1]] : viewer[eventName.name];
        instance && bindEvent.call(this, instance, eventName.events, flag);
      });
      const handler = new external_Cesium_.ScreenSpaceEventHandler(viewer.canvas);
      Events['viewer-mouse-events'].forEach(eventName => {
        const listener = this.$listeners[eventName];
        if (flag) {
          listener && handler.setInputAction(listener.fns, external_Cesium_.ScreenSpaceEventType[eventName]);
        } else {
          listener && handler.removeInputAction(external_Cesium_.ScreenSpaceEventType[eventName]);
        }
      });
    },
    registerCameraChangedEvent() {
      const {
        viewer
      } = this;
      const listener = this.$listeners['update:camera'];
      listener && viewer.camera.changed.addEventListener(() => {
        const cartographic = viewer.camera.positionCartographic;
        let camera;
        if (this.camera.position.lng) {
          camera = {
            position: {
              lng: external_Cesium_.Math.toDegrees(cartographic.longitude),
              lat: external_Cesium_.Math.toDegrees(cartographic.latitude),
              height: cartographic.height
            },
            heading: external_Cesium_.Math.toDegrees(viewer.camera.heading || 360),
            pitch: external_Cesium_.Math.toDegrees(viewer.camera.pitch || -90),
            roll: external_Cesium_.Math.toDegrees(viewer.camera.roll || 0)
          };
        } else {
          camera = {
            position: {
              x: viewer.camera.position.x,
              y: viewer.camera.position.y,
              z: viewer.camera.position.z
            },
            heading: viewer.camera.heading || 2 * Math.PI,
            pitch: viewer.camera.pitch || -Math.PI / 2,
            roll: viewer.camera.roll || 0
          };
        }
        if (listener) {
          this.$emit('update:camera', camera);
        }
      });
    },
    layerAdded(layer) {
      const {
        viewer,
        autoSortImageryLayers
      } = this;
      if (viewer.baseLayerPicker) {
        viewer.imageryLayers.raiseToTop(layer);
      }

      // 维护影像图层顺序
      if (autoSortImageryLayers) {
        layer.sortOrder = external_Cesium_.defined(layer.sortOrder) ? layer.sortOrder : 9999;
        viewer.imageryLayers._layers.sort((a, b) => a.sortOrder - b.sortOrder);
        viewer.imageryLayers._update();
      }
    },
    localeDateTimeFormatter(date, viewModel, ignoredate) {
      const {
        JulianDate
      } = external_Cesium_;
      let TZCode = new Date().getTimezoneOffset() === 0 ? 'UTC' : 'UTC' + '+' + -(new Date().getTimezoneOffset() / 60);
      const jsDate = JulianDate.toDate(date);
      const timeString = jsDate.toLocaleString("zh-hans", {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
      }).replace(/,/g, '');
      const dateString = jsDate.toLocaleString("zh-hans", {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }).replace(/,/g, '');
      if (!ignoredate && (viewModel || jsDate.getHours() + jsDate.getMinutes() === 0)) {
        return dateString;
      }
      return ignoredate ? `${timeString} ${TZCode}` : `${dateString} ${timeString} ${TZCode}`;
    },
    localeTimeFormatter(time, viewModel) {
      return this.localeDateTimeFormatter(time, viewModel, true);
    },
    load() {
      if (this._mounted) {
        return false;
      }
      this.beforeLoad();
      this.init();
    },
    unload() {
      if (!this._mounted) {
        return false;
      }
      this.registerEvents(false);
      const {
        viewer
      } = this;
      viewer && viewer.destroy();
      this.viewer = undefined;
      this._mounted = false;
      this.$listeners['destroyed'] && this.$emit('destroyed', this);
    },
    reload() {
      this.unload();
      this.load();
    },
    beforeLoad() {
      this.$listeners['beforeLoad'] && this.$emit("beforeLoad");
    }
  }
});
;// CONCATENATED MODULE: ./src/package/viewer/Viewer.vue?vue&type=script&lang=js&
 /* harmony default export */ var viewer_Viewervue_type_script_lang_js_ = (Viewervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/package/viewer/Viewer.vue





/* normalize component */
;
var component = normalizeComponent(
  viewer_Viewervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "9e1df29c",
  null
  
)

/* harmony default export */ var Viewer = (component.exports);
;// CONCATENATED MODULE: ./src/package/viewer/index.js

Viewer.install = Vue => {
  Vue.component(Viewer.name, Viewer);
};
/* harmony default export */ var viewer = (Viewer);
;// CONCATENATED MODULE: ./src/package/index.js

const components = {
  Viewer: viewer
};
const install = Vue => {
  // 判断组件是否安装，如果已经安装了就不在安装。
  if (install.installed) return;
  install.installed = true;
  // 遍历的方式注册所有的组件
  for (let key in components) {
    Vue.use(components[key]);
  }
};

/* harmony default export */ var src_package = ({
  install
});
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_package);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=vue-cesium-viewer.umd.js.map