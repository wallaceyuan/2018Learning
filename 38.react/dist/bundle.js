/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/element.js":
/*!************************!*\
  !*** ./src/element.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

let utils = __webpack_require__(/*! ./utils */ "./src/utils.js");
/**
 * 1.标签类型 h1 div
 * 2.属性 className id
 * 3.子元素 可能是一个数组
 */
class Element {
    //标签名 属性对象 子元素数组
    constructor(tagName, attrs, children) {
        this.tagName = tagName;
        this.attrs = attrs;
        this.children = children || [];
    }
    //把一个虚拟的DOM节点渲染成一个真实的DOM节点
    render() {
        //创建一个真实的DOM节点
        let element = document.createElement(this.tagName);
        //给此真实的DOM元素节点增加属性
        for (let attr in this.attrs) {
            utils.setAttr(element, attr, this.attrs[attr]);
        }
        //先序深度遍历
        this.children.forEach(child => {
            //如果子节点是一个元素的话，就调用它的render方法创建子节点的真实DOM，如果是一个字符串的话，创建一个文件节点就可以了
            let childElement = (child instanceof Element) ? child.render() : document.createTextNode(child);
            element.appendChild(childElement);
        });
        return element;
    }
}
function createElement(tagName, attrs, children) {
    return new Element(tagName, attrs, children);
}
module.exports = { createElement };

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


let { createElement } = __webpack_require__(/*! ./element */ "./src/element.js");
// let diff = require('./diff');
// let patch = require('./patch');
let ul1 = createElement('ul', { class: 'list' }, [
    createElement('li', { class: 'item' }, ['1']),
    createElement('li', { class: 'item' }, ['2']),
    createElement('li', { class: 'item' }, ['3'])
]);
let root = ul1.render();
document.body.appendChild(root);
// let ul2 = createElement('ul', { class: 'list' }, [
//     createElement('li', { class: 'item' }, ['1']),
//     createElement('li', { class: 'item' }, ['2']),
//     createElement('li', { class: 'item' }, ['3']),
//     createElement('li', { class: 'item' }, ['4'])
// ]);
// let patches = diff(ul1, ul2);
// console.log(patches);
//{2:[{type:'TEXT',content:3},4:[{type:'TEXT',content:2},6:[{type:'TEXT',content:1}]
//patch(root, patches);



/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

let utils = {
    //元素变化有哪些种类
    REMOVE: 'REMOVE',//此节点被移除
    ATTRS: "ATTRS",//属性被改变
    TEXT: "TEXT",//文本内容被改变
    REPLACE: "REPLACE", //节点要被整个替换
    setAttr(element, attr, value) {
        switch (attr) {
            case 'style':
                element.style.cssText = value;
                break;
            case 'value':
                let tagName = element.tagName.toLowerCase();
                if (tagName == 'input' || tagName == 'textarea') {
                    element.value = value;
                } else {
                    element.setAttribute(attr, value);
                }
                break;
            default:
                element.setAttribute(attr, value);
                break;
        }

    },
    type(obj) {
        // [object String]
        return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, '');
    },
    isString(str) {
        return utils.type(str) == 'String';
    }
}
module.exports = utils;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map