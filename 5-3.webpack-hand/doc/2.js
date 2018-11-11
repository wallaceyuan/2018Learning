 (function(modules) { // webpackBootstrap
 	// The module cache
 	var installedModules = {};

 	// The require function
 	function __webpack_require__(moduleId) {

 		// Check if module is in cache
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		// Create a new module (and put it into the cache)
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};

 		// Execute the module function
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

 		// Flag the module as loaded
 		module.l = true;

 		// Return the exports of the module
 		return module.exports;
 	}

 	// Load entry module and return exports
 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
 })
/************************************************************************/
 ({

/***/ "./src/a.js":
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
eval("let b = __webpack_require__(/*! ./base/b */ \"./src/base/b.js\")\n\nmodule.exports = 'a'+b\n\n//# sourceURL=webpack:///./src/a.js?");
/***/ }),

/***/ "./src/base/b.js":
/***/ (function(module, exports) {
eval("module.exports  = 'b'\n\n//# sourceURL=webpack:///./src/base/b.js?");
/***/ }),

/***/ "./src/index.js":
/***/ (function(module, exports, __webpack_require__) {
eval("let a = __webpack_require__(/*! ./a */ \"./src/a.js\")\n\nalert(a)\n\n//# sourceURL=webpack:///./src/index.js?");
/***/ })
 });



// 1.所有的模块ID都要转换成相对于根目录路径
// 2.原来文件没有加后缀