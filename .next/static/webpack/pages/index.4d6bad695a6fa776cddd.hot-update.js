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

/***/ "./components/EthName.js":
/*!*******************************!*\
  !*** ./components/EthName.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/web3 */ \"./lib/web3.js\");\n/* harmony import */ var react_jazzicon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jazzicon */ \"./node_modules/react-jazzicon/lib/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/komolkin/Library/Mobile Documents/com~apple~CloudDocs/wanna.tips/components/EthName.js\";\n\n\n\n\nvar EnsName = function EnsName(_ref) {\n  var address = _ref.address;\n  // TODO!\n  // get the address from outside\n  // format it\n  // check for ENS domain\n  // get image if it has one\n  // make jazzicon if not\n  var formattedAddress = address.substr(0, 6) + \"...\" + address.substr(-4);\n\n  var icon = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jazzicon__WEBPACK_IMPORTED_MODULE_3__.default, {\n    diameter: 32,\n    seed: (0,react_jazzicon__WEBPACK_IMPORTED_MODULE_3__.jsNumberForAddress)(address)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"eth-name\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"icon\",\n      children: icon\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"name\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"primary\",\n        children: formattedAddress\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"secondary\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, this);\n};\n\n_c = EnsName;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EnsName);\n\nvar _c;\n\n$RefreshReg$(_c, \"EnsName\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V0aE5hbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNSyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUF1QjtBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFJQyxnQkFBZ0IsR0FBR0QsT0FBTyxDQUFDRSxNQUFSLENBQWUsQ0FBZixFQUFrQixDQUFsQixJQUF1QixLQUF2QixHQUErQkYsT0FBTyxDQUFDRSxNQUFSLENBQWUsQ0FBQyxDQUFoQixDQUF0RDs7QUFFQSxNQUFJQyxJQUFJLGdCQUNOLDhEQUFDLG1EQUFEO0FBQVUsWUFBUSxFQUFFLEVBQXBCO0FBQXdCLFFBQUksRUFBRUwsa0VBQWtCLENBQUNFLE9BQUQ7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGOztBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsZ0JBQ0dHO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUNFO0FBQU0saUJBQVMsRUFBQyxTQUFoQjtBQUFBLGtCQUNHRjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFO0FBQU0saUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQkQsQ0FoQ0Q7O0tBQU1GO0FBa0NOLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRXRoTmFtZS5qcz9jZjViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgd2ViMyB9IGZyb20gJy4uL2xpYi93ZWIzJztcblxuaW1wb3J0IEphenppY29uLCB7IGpzTnVtYmVyRm9yQWRkcmVzcyB9IGZyb20gJ3JlYWN0LWphenppY29uJ1xuXG5jb25zdCBFbnNOYW1lID0gZnVuY3Rpb24gKHsgYWRkcmVzcyB9KSB7XG4gIC8vIFRPRE8hXG4gIC8vIGdldCB0aGUgYWRkcmVzcyBmcm9tIG91dHNpZGVcbiAgLy8gZm9ybWF0IGl0XG4gIC8vIGNoZWNrIGZvciBFTlMgZG9tYWluXG4gIC8vIGdldCBpbWFnZSBpZiBpdCBoYXMgb25lXG4gIC8vIG1ha2UgamF6emljb24gaWYgbm90XG5cbiAgbGV0IGZvcm1hdHRlZEFkZHJlc3MgPSBhZGRyZXNzLnN1YnN0cigwLCA2KSArIFwiLi4uXCIgKyBhZGRyZXNzLnN1YnN0cigtNClcblxuICBsZXQgaWNvbiA9IChcbiAgICA8SmF6emljb24gZGlhbWV0ZXI9ezMyfSBzZWVkPXtqc051bWJlckZvckFkZHJlc3MoYWRkcmVzcyl9IC8+XG4gIClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZXRoLW5hbWVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICB7aWNvbn1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpbWFyeVwiPlxuICAgICAgICAgIHtmb3JtYXR0ZWRBZGRyZXNzfVxuICAgICAgICAgIHsvKiBFTlMgbmFtZSBpZiBvbmUgaGVyZSAqL31cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICB7LyogZm9ybWF0dGVkIGFkZHJlc3MgaGVyZSAqL31cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgIFxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVuc05hbWUiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ3ZWIzIiwiSmF6emljb24iLCJqc051bWJlckZvckFkZHJlc3MiLCJFbnNOYW1lIiwiYWRkcmVzcyIsImZvcm1hdHRlZEFkZHJlc3MiLCJzdWJzdHIiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/EthName.js\n");

/***/ })

});