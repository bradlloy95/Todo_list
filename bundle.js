/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --graige: #b0a999;\r\n  --graige-light: #d2cdc0;\r\n  --graige-lightest: #c5c2b3;\r\n  --button-red: rgb(233, 21, 21)\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  font-family: Arial, sans-serif;\r\n  overflow-x: hidden; /* Hide horizontal overflow */\r\n  width: 100vw;\r\n}\r\n\r\nheader {\r\n  background-color: var(--graige);\r\n  height: 50px;\r\n  display: flex;\r\n  justify-content: center;\r\n  box-shadow: 0 4px 8px -4px gray;\r\n}\r\n\r\nh1 {\r\n  color: #ffffff;\r\n  margin: auto;\r\n}\r\n\r\nnav {\r\n  width: 20vw;\r\n  height: calc(100vh - 50px - 40px);\r\n  background-color: var(--graige-light);\r\n  padding: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\n#main-content {\r\n  display: flex;\r\n}\r\n\r\nnav button {\r\n  border: none;\r\n  border-radius: 5px;\r\n  padding: 5px 10px;\r\n  background-color: var(--graige-light);\r\n  color: white;\r\n  font-weight: 600;\r\n  font-size: 18px;\r\n}\r\n\r\nnav button:hover {\r\n  text-shadow: 2px 2px 4px black;\r\n}\r\n\r\nmain {\r\n  width: 80vw;\r\n  max-height: calc(100vh - 50px);\r\n  height: fit-content;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  padding: 10px;\r\n}\r\n\r\nmain h2, h4 {\r\n  padding: 5px 20px;\r\n  \r\n  color: var(--graige);\r\n  border-bottom: 1px solid var(--graige-lightest);\r\n}\r\n\r\n\r\n\r\n/* The Modal (background) */\r\n.modal, .todoModal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto;\r\n  background-color: rgb(0, 0, 0);\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  padding-top: 60px;\r\n}\r\n\r\n/* Modal Content/Box */\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: 5% auto;\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 80%;\r\n  max-width: 500px;\r\n  border-radius: 10px;\r\n}\r\n\r\n/* Close Button */\r\n.close {\r\n  color: #aaa;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n  color: black;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.todos {\r\n  display: flex;\r\n}\r\n\r\n.todos button {\r\n  background-color: var(--button-red);\r\n  color: white;\r\n  border: none;\r\n  border-radius: 7px;\r\n  padding: 5px 10px;\r\n  margin: 5px;\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\n.todosHead {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  border-bottom: var(--graige-light) 1px solid;\r\n  padding: 5px;\r\n}\r\n.todosHead:hover {\r\n  background-color: var(--graige-light);\r\n}\r\n.complete {\r\n  width: 15%;\r\n  height: 15px;\r\n}\r\n.name {\r\n  width: 20%;\r\n  height: 15px;\r\n}\r\n.dueDate {\r\n  width: 20%;\r\n  height: 15px;\r\n}\r\n.description {\r\n  width: 30%;\r\n  height: 15px;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n\r\n\r\n/* Media Query for Mobile Devices */\r\n@media (max-width: 420px) {\r\n  .todos {\r\n    flex: 1 1 100%; /* Take up full width */\r\n    max-width: 99%;\r\n  }\r\n}\r\n\r\nbutton:hover {\r\n  transform: scale(1.1);\r\n  \r\n}\r\n\r\n/* .circle-checkbox {\r\n  display: none;\r\n}\r\n\r\n.circle-checkbox + label {\r\n  display: inline-block;\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 2px solid #696969;\r\n  border-radius: 50%;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n\r\n.circle-checkbox:checked + label::after,\r\n        .circle-checkbox + label.checked::after {\r\n            content: '';\r\n            width: 20px;\r\n            height: 20px;\r\n            border: 2px solid #14329b;\r\n            background-color: #002aff;\r\n            border-radius: 50%;\r\n            position: absolute;\r\n            top: 50%;\r\n            left: 50%;\r\n            transform: translate(-50%, -50%);\r\n        } */`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo_list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo_list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/model */ \"./src/modules/model.js\");\n/* harmony import */ var _modules_newTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/newTask */ \"./src/modules/newTask.js\");\n/* harmony import */ var _modules_loadTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/loadTask */ \"./src/modules/loadTask.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// render home page when loaded\r\ndocument.addEventListener(\"DOMContentLoaded\", (event) => {\r\n  (0,_modules_home__WEBPACK_IMPORTED_MODULE_4__.renderHomePage)();\r\n});\r\n\r\nconst homeBTN = document.getElementById(\"homeBTN\");\r\nhomeBTN.addEventListener(\"click\", function () {\r\n  (0,_modules_home__WEBPACK_IMPORTED_MODULE_4__.renderHomePage)();\r\n});\r\n\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHomePage: () => (/* binding */ renderHomePage)\n/* harmony export */ });\n/* harmony import */ var _loadTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadTask */ \"./src/modules/loadTask.js\");\n\r\n\r\nfunction renderHomePage() {\r\n  (0,_loadTask__WEBPACK_IMPORTED_MODULE_0__.renderToDos)();\r\n}\r\n\n\n//# sourceURL=webpack://todo_list/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/loadTask.js":
/*!*********************************!*\
  !*** ./src/modules/loadTask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderToDos: () => (/* binding */ renderToDos)\n/* harmony export */ });\n/* harmony import */ var _localstorsge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorsge */ \"./src/modules/localstorsge.js\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ \"./src/modules/model.js\");\n/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newTask */ \"./src/modules/newTask.js\");\n\r\n\r\n\r\nconst content = document.getElementById(\"content\");\r\n\r\nfunction renderToDos() {\r\n  content.innerHTML = \"\";\r\n  // get all todos from local storage\r\n  const allTasks = (0,_localstorsge__WEBPACK_IMPORTED_MODULE_0__.getAllToDosFromLocalStorage)();\r\n  if (Object.keys(allTasks).length == 0) {\r\n    const messageBox = document.createElement(\"h4\");\r\n    messageBox.innerText = \"No Tasks\";\r\n    content.appendChild(messageBox);\r\n  } else {\r\n    const head = todoDiv(true);\r\n    content.appendChild(head);\r\n    renderTodos(allTasks);\r\n  }\r\n}\r\n\r\n// Function to create a to-do item element\r\nfunction createTodoElement(todo) {\r\n  const todoItem = todoDiv(false, todo);\r\n\r\n  return todoItem;\r\n}\r\n\r\nfunction renderTodos(todos) {\r\n  for (const key in todos) {\r\n    if (todos.hasOwnProperty(key)) {\r\n      const todoElement = createTodoElement(todos[key]);\r\n      content.appendChild(todoElement);\r\n    }\r\n  }\r\n}\r\n\r\nfunction todoDiv(forHead, todo = null) {\r\n  const item = document.createElement(\"div\");\r\n  item.classList.add(\"todosHead\");\r\n\r\n  const completeCTR = document.createElement(\"div\");\r\n  completeCTR.classList.add(\"complete\");\r\n\r\n  const nameCTR = document.createElement(\"div\");\r\n  nameCTR.classList.add(\"name\");\r\n\r\n  const descriptionCTR = document.createElement(\"div\");\r\n  descriptionCTR.classList.add(\"description\");\r\n\r\n  const dueDateCTR = document.createElement(\"div\");\r\n  dueDateCTR.classList.add(\"dueDate\");\r\n\r\n  if (forHead === true) {\r\n    completeCTR.innerText = \"Complete\";\r\n\r\n    nameCTR.innerText = \"Task Name\";\r\n\r\n    descriptionCTR.innerText = \"Task Description\";\r\n\r\n    dueDateCTR.innerText = \"Due Date\";\r\n  } else {\r\n    const checkbox = document.createElement(\"input\");\r\n    checkbox.type = \"checkbox\";\r\n    checkbox.checked = todo.isComplete;\r\n    checkbox.classList.add(\"circle-checkbox\");\r\n    const label = document.createElement(\"label\");\r\n    completeCTR.appendChild(checkbox);\r\n    completeCTR.appendChild(label);\r\n    if (todo.isComplete) {\r\n      // Set the checkbox state based on the isComplete property\r\n      checkbox.checked = todo.isComplete;\r\n    }\r\n\r\n    checkbox.addEventListener(\"click\", function () {\r\n      //checkbox.checked = !checkbox.checked;\r\n      let item = (0,_localstorsge__WEBPACK_IMPORTED_MODULE_0__.getSingleItem)(todo.name);\r\n      if (item.isComplete === false) {\r\n        item.isComplete = true;\r\n      } else {\r\n        item.isComplete = false;\r\n      }\r\n\r\n      (0,_localstorsge__WEBPACK_IMPORTED_MODULE_0__.addToDoToLocalStorage)(item);\r\n      renderToDos()\r\n    });\r\n    nameCTR.innerText = todo.name;\r\n\r\n    descriptionCTR.innerText = todo.description;\r\n\r\n    if (todo.dueDate === \"\") {\r\n      dueDateCTR.innerText = \"No due date!\";\r\n    } else {\r\n      dueDateCTR.innerText = todo.dueDate;\r\n    }\r\n  }\r\n  item.appendChild(completeCTR);\r\n  item.appendChild(nameCTR);\r\n  item.appendChild(descriptionCTR);\r\n  item.appendChild(dueDateCTR);\r\n\r\n  // Add event listener to the item\r\nitem.addEventListener('click', function(event) {\r\n    // Check if the click target is not the completeCTR\r\n    if (event.target !== completeCTR && !completeCTR.contains(event.target)) {\r\n        console.log('item clicked');\r\n        (0,_model__WEBPACK_IMPORTED_MODULE_1__.todoModel)(todo)\r\n    }\r\n  })\r\n\r\n  return item;\r\n}\r\n\n\n//# sourceURL=webpack://todo_list/./src/modules/loadTask.js?");

/***/ }),

/***/ "./src/modules/localstorsge.js":
/*!*************************************!*\
  !*** ./src/modules/localstorsge.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToDoToLocalStorage: () => (/* binding */ addToDoToLocalStorage),\n/* harmony export */   deleteToDoFromLocalStorage: () => (/* binding */ deleteToDoFromLocalStorage),\n/* harmony export */   getAllToDosFromLocalStorage: () => (/* binding */ getAllToDosFromLocalStorage),\n/* harmony export */   getSingleItem: () => (/* binding */ getSingleItem)\n/* harmony export */ });\n// Function to add a ToDo object to localStorage\r\nfunction addToDoToLocalStorage(todo) {\r\n  try {\r\n    let allToDos = JSON.parse(localStorage.getItem(\"allToDos\")) || {};\r\n    allToDos[todo.name] = todo;\r\n    localStorage.setItem(\"allToDos\", JSON.stringify(allToDos));\r\n  } catch (error) {\r\n    console.error(\"Error adding ToDo to localStorage:\", error);\r\n  }\r\n}\r\n\r\n// Function to retrieve all ToDo objects from localStorage\r\nfunction getAllToDosFromLocalStorage() {\r\n  try {\r\n    return JSON.parse(localStorage.getItem(\"allToDos\")) || {};\r\n  } catch (error) {\r\n    console.error(\"Error retrieving ToDos from localStorage:\", error);\r\n    return {};\r\n  }\r\n}\r\n\r\n// Function to delete a ToDo object from localStorage\r\nfunction deleteToDoFromLocalStorage(todoName) {\r\n  try {\r\n    let allToDos = JSON.parse(localStorage.getItem(\"allToDos\")) || {};\r\n    delete allToDos[todoName];\r\n    localStorage.setItem(\"allToDos\", JSON.stringify(allToDos));\r\n  } catch (error) {\r\n    console.error(\"Error deleting ToDo from localStorage:\", error);\r\n  }\r\n}\r\n\r\n// Function to retrieve a single item from localStorage\r\nfunction getSingleItem(todoName) {\r\n  try {\r\n    // Retrieve the entire 'allToDos' object from localStorage\r\n    const allToDos = localStorage.getItem(\"allToDos\");\r\n\r\n    // Check if 'allToDos' is not null and parse it\r\n    if (allToDos) {\r\n      const todosObject = JSON.parse(allToDos);\r\n\r\n      // Retrieve the specific ToDo item by its name\r\n      return todosObject[todoName] || null;\r\n    } else {\r\n      // If 'allToDos' is null, return null\r\n      return null;\r\n    }\r\n  } catch (error) {\r\n    console.error(\"Error retrieving item from localStorage:\", error);\r\n    return null;\r\n  }\r\n}\r\n\r\n// Example usage\r\n// let todo1 = new ToDo('Buy groceries', 'Buy milk, bread, and eggs');\r\n// let todo2 = new ToDo('Complete assignment', 'Finish the math assignment by Monday');\r\n\r\n// addToDoToLocalStorage(todo1);\r\n// addToDoToLocalStorage(todo2);\r\n\r\n// console.log(getAllToDosFromLocalStorage());\r\n\r\n// deleteToDoFromLocalStorage('Buy groceries');\r\n\r\n// console.log(getAllToDosFromLocalStorage());\r\n\n\n//# sourceURL=webpack://todo_list/./src/modules/localstorsge.js?");

/***/ }),

/***/ "./src/modules/model.js":
/*!******************************!*\
  !*** ./src/modules/model.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resetForm: () => (/* binding */ resetForm),\n/* harmony export */   todoModel: () => (/* binding */ todoModel)\n/* harmony export */ });\n/* harmony import */ var _localstorsge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorsge */ \"./src/modules/localstorsge.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/modules/home.js\");\n\r\n\r\n\r\nconst newTaskBTN = document.getElementById(\"new-task-btn\");\r\nconst popUpForm = document.getElementById(\"popUpForm\");\r\nconst closeFormButton = document.getElementById(\"closeFormButton\");\r\nconst todocloseFormButton = document.getElementById(\"todo-closeFormButton\");\r\n\r\nconst todoForm = document.getElementById(\"todoForm\");\r\nconst todoPopup = document.getElementById(\"todoPopup\");\r\n\r\nnewTaskBTN.addEventListener(\"click\", () => {\r\n  popUpForm.style.display = \"block\";\r\n});\r\n\r\ncloseFormButton.addEventListener(\"click\", () => {\r\n  popUpForm.style.display = \"none\";\r\n});\r\ntodocloseFormButton.addEventListener(\"click\", () => {\r\n  todoPopup.style.display = \"none\";\r\n});\r\n\r\nwindow.addEventListener(\"click\", (event) => {\r\n  if (event.target == popUpForm) {\r\n    popUpForm.style.display = \"none\";\r\n  }\r\n});\r\n\r\nfunction resetForm() {\r\n  todoForm.reset();\r\n  popUpForm.style.display = \"none\";\r\n}\r\n\r\nfunction todoModel(todo) {\r\n  const todoModalContent = document.getElementById(\"todoModalContent\");\r\n  todoPopup.style.display = \"block\";\r\n  const modelName = document.getElementById(\"todoModelName\");\r\n  modelName.innerText = todo.name;\r\n  const modeldesc = document.getElementById(\"todoModelDesc\");\r\n  modeldesc.innerText = todo.description;\r\n\r\n  const modelduedate = document.getElementById(\"todoModelDueDate\");\r\n  modelduedate.innerText = todo.dueDate;\r\n\r\n  const modeliscomplete = document.getElementById(\"todoIsComplete\");\r\n  modeliscomplete.innerText = `Status: ${todo.isComplete}`;\r\n  // console.log('inmodel')\r\n\r\n  const button = document.getElementById(\"todoDelete\");\r\n  \r\n  button.addEventListener(\"click\", function () {\r\n    (0,_localstorsge__WEBPACK_IMPORTED_MODULE_0__.deleteToDoFromLocalStorage)(todo.name);\r\n    todoPopup.style.display = \"none\";\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__.renderHomePage)();\r\n  });\r\n\r\n  \r\n}\r\n\n\n//# sourceURL=webpack://todo_list/./src/modules/model.js?");

/***/ }),

/***/ "./src/modules/newTask.js":
/*!********************************!*\
  !*** ./src/modules/newTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ToDo: () => (/* binding */ ToDo)\n/* harmony export */ });\n/* harmony import */ var _localstorsge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorsge */ \"./src/modules/localstorsge.js\");\n/* harmony import */ var _loadTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadTask */ \"./src/modules/loadTask.js\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ \"./src/modules/model.js\");\n\r\n\r\n\r\n\r\n// Define the ToDo class\r\nclass ToDo {\r\n    constructor(name, description, dueDate = null) {\r\n        this.name = name;\r\n        this.dayMade = new Date().toLocaleDateString(); // Stores the current date\r\n        this.description = description;\r\n        this.dueDate = dueDate;\r\n        this.isComplete = false;\r\n    }\r\n\r\n    toggleComplete() {\r\n        console.log('Checked');\r\n        this.isComplete = !this.isComplete; // Toggles the boolean value\r\n    }\r\n}\r\n\r\n\r\n\r\ndocument.getElementById('todoForm').addEventListener('submit', function(event) {\r\n    event.preventDefault(); // Prevent the form from submitting normally\r\n    \r\n    // Extract form data\r\n    let name = document.getElementById('name').value;\r\n    let description = document.getElementById('description').value;\r\n    let dueDate = document.getElementById('dueDate').value;\r\n\r\n    \r\n\r\n    // Example: Save the form data to localStorage\r\n    let todo = new ToDo(name, description, dueDate);\r\n    (0,_localstorsge__WEBPACK_IMPORTED_MODULE_0__.addToDoToLocalStorage)(todo);\r\n    (0,_model__WEBPACK_IMPORTED_MODULE_2__.resetForm)()\r\n    ;(0,_loadTask__WEBPACK_IMPORTED_MODULE_1__.renderToDos)()\r\n    \r\n});\r\n\r\n\n\n//# sourceURL=webpack://todo_list/./src/modules/newTask.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;