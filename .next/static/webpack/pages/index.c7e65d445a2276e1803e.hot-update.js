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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/web3 */ \"./lib/web3.js\");\n/* harmony import */ var react_jazzicon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jazzicon */ \"./node_modules/react-jazzicon/lib/index.js\");\n/* harmony import */ var _ensdomains_ensjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ensdomains/ensjs */ \"./node_modules/@ensdomains/ensjs/dist/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/komolkin/Library/Mobile Documents/com~apple~CloudDocs/wanna.tips/components/EthName.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar ens = new _ensdomains_ensjs__WEBPACK_IMPORTED_MODULE_4__.default({\n  provider: _lib_web3__WEBPACK_IMPORTED_MODULE_2__.web3.currentProvider,\n  ensAddress: (0,_ensdomains_ensjs__WEBPACK_IMPORTED_MODULE_4__.getEnsAddress)(\"1\")\n});\n\nvar EnsName = function EnsName(_ref) {\n  _s();\n\n  var address = _ref.address;\n\n  // TODO!\n  // check for ENS domain\n  // get image if it has one\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      name = _useState[0],\n      setName = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {}, [address]);\n  var formattedAddress = address.substr(0, 6) + \"...\" + address.substr(-4);\n\n  var icon = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jazzicon__WEBPACK_IMPORTED_MODULE_3__.default, {\n    diameter: 32,\n    seed: (0,react_jazzicon__WEBPACK_IMPORTED_MODULE_3__.jsNumberForAddress)(address)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, this);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"eth-name\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"icon\",\n      children: icon\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"name\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"primary\",\n        children: formattedAddress\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"secondary\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, this);\n};\n\n_s(EnsName, \"K2nkAw2z+E1qr5bv5LIAa5Kt6gY=\");\n\n_c = EnsName;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EnsName);\n\nvar _c;\n\n$RefreshReg$(_c, \"EnsName\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V0aE5hbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1PLEdBQUcsR0FBSSxJQUFJRixzREFBSixDQUFRO0FBQ25CRyxFQUFBQSxRQUFRLEVBQUVOLDJEQURTO0FBRW5CUSxFQUFBQSxVQUFVLEVBQUVKLGdFQUFhLENBQUMsR0FBRDtBQUZOLENBQVIsQ0FBYjs7QUFLQSxJQUFNSyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUF1QjtBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVzs7QUFDckM7QUFDQTtBQUNBO0FBSHFDLGtCQUtiWiwrQ0FBUSxFQUxLO0FBQUEsTUFLOUJhLElBTDhCO0FBQUEsTUFLeEJDLE9BTHdCOztBQU9yQ2IsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFZLENBRXJCLENBRlEsRUFFTixDQUFFVyxPQUFGLENBRk0sQ0FBVDtBQUlBLE1BQUlHLGdCQUFnQixHQUFHSCxPQUFPLENBQUNJLE1BQVIsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLElBQXVCLEtBQXZCLEdBQStCSixPQUFPLENBQUNJLE1BQVIsQ0FBZSxDQUFDLENBQWhCLENBQXREOztBQUVBLE1BQUlDLElBQUksZ0JBQ04sOERBQUMsbURBQUQ7QUFBVSxZQUFRLEVBQUUsRUFBcEI7QUFBd0IsUUFBSSxFQUFFYixrRUFBa0IsQ0FBQ1EsT0FBRDtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7O0FBSUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSxnQkFDR0s7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsOEJBQ0U7QUFBTSxpQkFBUyxFQUFDLFNBQWhCO0FBQUEsa0JBQ0dGO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0U7QUFBTSxpQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtCRCxDQW5DRDs7R0FBTUo7O0tBQUFBO0FBcUNOLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRXRoTmFtZS5qcz9jZjViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgd2ViMyB9IGZyb20gJy4uL2xpYi93ZWIzJztcblxuaW1wb3J0IEphenppY29uLCB7IGpzTnVtYmVyRm9yQWRkcmVzcyB9IGZyb20gJ3JlYWN0LWphenppY29uJ1xuaW1wb3J0IEVOUywgeyBnZXRFbnNBZGRyZXNzIH0gZnJvbSAnQGVuc2RvbWFpbnMvZW5zanMnXG5cbmNvbnN0IGVucyA9ICBuZXcgRU5TKHtcbiAgcHJvdmlkZXI6IHdlYjMuY3VycmVudFByb3ZpZGVyLFxuICBlbnNBZGRyZXNzOiBnZXRFbnNBZGRyZXNzKFwiMVwiKVxufSlcblxuY29uc3QgRW5zTmFtZSA9IGZ1bmN0aW9uICh7IGFkZHJlc3MgfSkge1xuICAvLyBUT0RPIVxuICAvLyBjaGVjayBmb3IgRU5TIGRvbWFpblxuICAvLyBnZXQgaW1hZ2UgaWYgaXQgaGFzIG9uZVxuXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKClcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuXG4gIH0sIFsgYWRkcmVzcyBdKVxuXG4gIGxldCBmb3JtYXR0ZWRBZGRyZXNzID0gYWRkcmVzcy5zdWJzdHIoMCwgNikgKyBcIi4uLlwiICsgYWRkcmVzcy5zdWJzdHIoLTQpXG5cbiAgbGV0IGljb24gPSAoXG4gICAgPEphenppY29uIGRpYW1ldGVyPXszMn0gc2VlZD17anNOdW1iZXJGb3JBZGRyZXNzKGFkZHJlc3MpfSAvPlxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImV0aC1uYW1lXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cbiAgICAgICAge2ljb259XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaW1hcnlcIj5cbiAgICAgICAgICB7Zm9ybWF0dGVkQWRkcmVzc31cbiAgICAgICAgICB7LyogRU5TIG5hbWUgaWYgb25lIGhlcmUgKi99XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgey8qIGZvcm1hdHRlZCBhZGRyZXNzIGhlcmUgKi99XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICBcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnNOYW1lIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwid2ViMyIsIkphenppY29uIiwianNOdW1iZXJGb3JBZGRyZXNzIiwiRU5TIiwiZ2V0RW5zQWRkcmVzcyIsImVucyIsInByb3ZpZGVyIiwiY3VycmVudFByb3ZpZGVyIiwiZW5zQWRkcmVzcyIsIkVuc05hbWUiLCJhZGRyZXNzIiwibmFtZSIsInNldE5hbWUiLCJmb3JtYXR0ZWRBZGRyZXNzIiwic3Vic3RyIiwiaWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/EthName.js\n");

/***/ })

});