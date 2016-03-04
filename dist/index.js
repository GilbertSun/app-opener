(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AppOpener"] = factory();
	else
		root["AppOpener"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	__webpack_require__(1);

	var DEFAULT_SETTING = {
	    FALLBACK: 'http://cv.qiaobutang.com/help/getApp'
	};

	var isWechat = /MicroMessenger/.test(window.navigator.userAgent);
	var isAndroid = /Android/.test(window.navigator.userAgent);
	var isIOS = /iPad|iPhone|iPod/.test(window.navigator.userAgent);
	var setting = _extends({}, DEFAULT_SETTING);

	/**
	 * convert normal path to intent path
	 * @param path {String} `qiaobutangapp://career/${uid}`
	 * @param fallback {String} fallback url when app isn't installed
	 */
	var intentConvert = function intentConvert(path, fallback) {
	    var tmp = path.split('://');
	    var intentPath = tmp[1];
	    var syntax = {
	        scheme: tmp[0],
	        package: 'com.qiaobutang',
	        'S.browser_fallback_url': fallback ? encodeURIComponent(setting.FALLBACK) : null
	    };

	    var intentParam = Object.keys(syntax).filter(function (key) {
	        return syntax[key] !== null;
	    }).map(function (key) {
	        return key + '=' + syntax[key];
	    }).join(';');
	    return 'intent://' + intentPath + '/#Intent;' + intentParam + ';end';
	};

	var showOpenBrowserTip = function showOpenBrowserTip(platform) {
	    var className = 'open-browser_' + platform;
	    var tip = document.createElement('div');
	    tip.className = 'open-browser ' + className;
	    document.body.appendChild(tip);
	    tip.addEventListener('click', function () {
	        tip.parentNode.removeChild(tip);
	    });
	};
	var config = function config(option) {
	    setting = _extends({}, setting, option);
	};
	var openApp = function openApp(path, fallback) {
	    var intent = intentConvert(path, fallback);
	    if (isWechat) {
	        if (isAndroid) {
	            showOpenBrowserTip('android');
	        } else if (isIOS) {
	            showOpenBrowserTip('ios');
	        }
	    } else if (isAndroid) {
	        location.href = intent;
	    } else if (isIOS) {
	        location.href = path;
	    }
	};

	exports.openApp = openApp;
	exports.config = config;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".open-browser {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #333;\n  opacity: 0.8;\n  z-index: 100;\n}\n.open-browser.open-browser_android:after {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 300px;\n  content: '';\n  background: transparent url(" + __webpack_require__(4) + ") no-repeat;\n  background-size: contain;\n}\n.open-browser.open-browser_ios:after {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 300px;\n  content: '';\n  background: transparent url(" + __webpack_require__(5) + ") no-repeat;\n  background-size: contain;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApQAAAEEBAMAAABkb7nRAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAANwaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Y2I0ZmQ2NDctN2I1My00ZWVjLWEyYzAtNzFlMjBjMTA4OGMzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkEwN0IyRkZFRDg3MTExRTVCMUMzQjJGM0FEQ0ZEMzlCIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkEwN0IyRkZERDg3MTExRTVCMUMzQjJGM0FEQ0ZEMzlCIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkExOUQ0OThDMEJCMTFFNUExRjBCQjlDNzg3QUMxNjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkExOUQ0OTlDMEJCMTFFNUExRjBCQjlDNzg3QUMxNjIiLz4gPC9yZGY6RGVzY3Jp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"

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApQAAAEEBAMAAABkb7nRAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAANwaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Y2I0ZmQ2NDctN2I1My00ZWVjLWEyYzAtNzFlMjBjMTA4OGMzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYxMjNDNEIzRDhGNDExRTVCMUMzQjJGM0FEQ0ZEMzlCIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYxMjNDNEIyRDhGNDExRTVCMUMzQjJGM0FEQ0ZEMzlCIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkExOUQ0OTRDMEJCMTFFNUExRjBCQjlDNzg3QUMxNjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkExOUQ0OTVDMEJCMTFFNUExRjBCQjlDNzg3QUMxNjIiLz4gPC9yZGY6RGVzY3Jp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"

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;