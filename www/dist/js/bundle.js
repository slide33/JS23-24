/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Controller;


function Controller(model, view) {
    let self = this;
    view.elements.addBtn.on('click', addItem);
    view.elements.listContainer.on('click', '.item-delete', removeItem);
    view.elements.listContainer.on('dblclick', 'label', editItem);
    view.elements.listContainer.on('blur', 'input', editDone);

    function addItem() {
        let newItem = view.elements.input.val();
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
    }

    function removeItem() {
        // debugger
        let item = $(this).attr('data-value');
        model.removeItem(item);
        view.renderList(model.data);


    }

    function editItem() {

        let item = $(this).attr('data-id');
        view.editItem(item);
    }

    function editDone() {
        let newItem = document.querySelector('input.edit');

        // debugger
        let item = $(this).val();
        let label = $(this).prev().attr('data-id');
        model.editDone(item, label);
        view.editDone(item);

        // model.addItem(item);
    }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Model;

////////////////////////////////////////////////////////////////////////
function Model(data) {
    let self = this;
    self.data = data;

    self.addItem = function(item) {
        if (item.length === 0) {
            return;
        }

        self.data.push(item);

        return self.data;
    };

    self.removeItem = function(item) {
        // debugger
        let index = self.data.indexOf(item);
        if (index === -1) {
            return;
        }
        self.data.splice(index, 1);
        return self.data;
    };
    self.editDone = function(item, label) {
        let index = self.data.indexOf(label);

        if (item.length === 0) {
            return;
        }

        self.data.splice(index, 1, item);

    }
}

////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////

// $(function() {
//     let firstToDo = ['test1', 'test2', 'test3'];
//     let model = new Model(firstToDo);
//
//     let view = new View(model);
//     let controller = new Controller(model, view);
// })


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = View;


function View(model) {
    let self = this;

    function init() {
        let wrapper = _.template($('#wrapper-template').html());

        $('body').append(wrapper);
        self.elements = {
            input: $('.item-value'),
            addBtn: $('.item-add'),
            listContainer: $('.item-list'),
            listItem: $('label')
        };

        self.renderList(model.data);
    };

    self.editItem = function(item) {
        var listItem = document.querySelectorAll('[data-id="' + item + '"]');
        // debugger
        // console.log(listItem);
        listItem[0].classList.add('editing');
        var input = document.createElement('input');
        input.className = 'edit';
        // debugger
        listItem[0].after(input);
        input.focus();
        input.value = item;

    };
    self.editDone = function(item) {
        // debugger
        var listItem = document.querySelector('label.editing');
        var input = document.querySelector('input.edit');
        // debugger
        listItem.textContent = input.value;
        listItem.classList.remove('editing');
        input.classList.remove('edit');
        input.remove();
        return listItem;



    };


    self.renderList = function(data) {
        // debugger
        var list = _.template($('#item-template').html());
        var list = list({
            data: data
        });
        self.elements.listContainer.html(list);
    };
    init();
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller_js__ = __webpack_require__(0);



$(function() {
    let firstToDo = ['test1', 'test2', 'test3'];
    let model = new __WEBPACK_IMPORTED_MODULE_0__model_js__["a" /* default */](firstToDo);

    let view = new __WEBPACK_IMPORTED_MODULE_1__view_js__["a" /* default */](model);
    let controller = new __WEBPACK_IMPORTED_MODULE_2__controller_js__["a" /* default */](model, view);
})


/***/ })
/******/ ]);