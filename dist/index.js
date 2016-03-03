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
	__webpack_require__(1);

	var DEFAULT_SETTING = {
	    FALLBACK: 'http://cv.qiaobutang.com/help/getApp'
	};

	var isWechat = /MicroMessenger/.test(window.navigator.userAgent);
	var isAndroid = /Android/.test(window.navigator.userAgent);
	var isIOS = /iPad|iPhone|iPod/.test(window.navigator.userAgent);
	var setting = Object.assign({}, DEFAULT_SETTING);

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
	    setting = Object.assign({}, setting, option);
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

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApQAAAEEBAMAAABkb7nRAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAN4aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Y2I0ZmQ2NDctN2I1My00ZWVjLWEyYzAtNzFlMjBjMTA4OGMzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJBMTlENDk5QzBCQjExRTVBMUYwQkI5Qzc4N0FDMTYyIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJBMTlENDk4QzBCQjExRTVBMUYwQkI5Qzc4N0FDMTYyIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Y2I0ZmQ2NDctN2I1My00ZWVjLWEyYzAtNzFlMjBjMTA4OGMzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmNiNGZkNjQ3LTdiNTMtNGVlYy1hMmMwLTcxZTIwYzEwODhjMyIvPiA8L3Jk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"

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApQAAAEEBAMAAABkb7nRAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAN4aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Y2I0ZmQ2NDctN2I1My00ZWVjLWEyYzAtNzFlMjBjMTA4OGMzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJBMTlENDk1QzBCQjExRTVBMUYwQkI5Qzc4N0FDMTYyIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJBMTlENDk0QzBCQjExRTVBMUYwQkI5Qzc4N0FDMTYyIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Y2I0ZmQ2NDctN2I1My00ZWVjLWEyYzAtNzFlMjBjMTA4OGMzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmNiNGZkNjQ3LTdiNTMtNGVlYy1hMmMwLTcxZTIwYzEwODhjMyIvPiA8L3Jk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"

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