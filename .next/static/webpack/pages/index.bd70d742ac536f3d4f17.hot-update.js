"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Answer.js":
/*!******************************!*\
  !*** ./components/Answer.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Tip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tip */ \"./components/Tip.js\");\n/* harmony import */ var _EthName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EthName */ \"./components/EthName.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/komolkin/Library/Mobile Documents/com~apple~CloudDocs/wanna.tips/components/Answer.js\";\n\n\n\nvar Answer = function Answer(_ref) {\n  var number = _ref.number,\n      answer = _ref.answer,\n      accounts = _ref.accounts,\n      isLoggedIn = _ref.isLoggedIn;\n  var reply = {\n    __html: answer.reply\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"answer\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      children: [\"Idea #\", number]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"main\",\n      dangerouslySetInnerHTML: reply\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"meta\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EthName__WEBPACK_IMPORTED_MODULE_2__.default, {\n        address: answer.account\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Tip__WEBPACK_IMPORTED_MODULE_1__.default, {\n        isLoggedIn: isLoggedIn,\n        accounts: accounts,\n        address: answer.account\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n};\n\n_c = Answer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Answer);\n\nvar _c;\n\n$RefreshReg$(_c, \"Answer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Fuc3dlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBb0Q7QUFBQSxNQUF4Q0MsTUFBd0MsUUFBeENBLE1BQXdDO0FBQUEsTUFBaENDLE1BQWdDLFFBQWhDQSxNQUFnQztBQUFBLE1BQXhCQyxRQUF3QixRQUF4QkEsUUFBd0I7QUFBQSxNQUFkQyxVQUFjLFFBQWRBLFVBQWM7QUFDakUsTUFBTUMsS0FBSyxHQUFHO0FBQUNDLElBQUFBLE1BQU0sRUFBRUosTUFBTSxDQUFDRztBQUFoQixHQUFkO0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBLDRCQUNFO0FBQUEsMkJBQVdKLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQXNCLDZCQUF1QixFQUFFSTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsOEJBQ0UsOERBQUMsNkNBQUQ7QUFBUyxlQUFPLEVBQUVILE1BQU0sQ0FBQ0s7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMseUNBQUQ7QUFBSyxrQkFBVSxFQUFFSCxVQUFqQjtBQUE2QixnQkFBUSxFQUFFRCxRQUF2QztBQUFpRCxlQUFPLEVBQUVELE1BQU0sQ0FBQ0s7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQsQ0FaRDs7S0FBTVA7QUFjTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Fuc3dlci5qcz9lMDFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaXAgZnJvbSAnLi9UaXAnXG5pbXBvcnQgRXRoTmFtZSBmcm9tICcuL0V0aE5hbWUnXG5cbmNvbnN0IEFuc3dlciA9IGZ1bmN0aW9uICh7IG51bWJlciwgYW5zd2VyLCBhY2NvdW50cywgaXNMb2dnZWRJbiB9KSB7XG4gIGNvbnN0IHJlcGx5ID0ge19faHRtbDogYW5zd2VyLnJlcGx5fVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zd2VyXCI+XG4gICAgICA8aDM+SWRlYSAje251bWJlcn08L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3JlcGx5fT48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YVwiPlxuICAgICAgICA8RXRoTmFtZSBhZGRyZXNzPXthbnN3ZXIuYWNjb3VudH0gLz5cbiAgICAgICAgPFRpcCBpc0xvZ2dlZEluPXtpc0xvZ2dlZElufSBhY2NvdW50cz17YWNjb3VudHN9IGFkZHJlc3M9e2Fuc3dlci5hY2NvdW50fSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5zd2VyOyJdLCJuYW1lcyI6WyJUaXAiLCJFdGhOYW1lIiwiQW5zd2VyIiwibnVtYmVyIiwiYW5zd2VyIiwiYWNjb3VudHMiLCJpc0xvZ2dlZEluIiwicmVwbHkiLCJfX2h0bWwiLCJhY2NvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Answer.js\n");

/***/ })

});