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

/***/ "./components/Tip.js":
/*!***************************!*\
  !*** ./components/Tip.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/web3 */ \"./lib/web3.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/komolkin/Library/Mobile Documents/com~apple~CloudDocs/wanna.tips/components/Tip.js\";\n\n\n\nvar Tip = function Tip(_ref) {\n  var isLoggedIn = _ref.isLoggedIn,\n      accounts = _ref.accounts,\n      address = _ref.address;\n\n  var send = function send() {\n    if (isLoggedIn) {\n      var price = _lib_web3__WEBPACK_IMPORTED_MODULE_1__.web3.utils.toWei(\"0.01\", \"ether\");\n      window.ethereum.request({\n        method: \"eth_sendTransaction\",\n        params: [{\n          from: accounts[0],\n          to: address,\n          value: _lib_web3__WEBPACK_IMPORTED_MODULE_1__.web3.utils.toHex(price)\n        }]\n      });\n    } else {\n      alert(\"Please connect your wallet\");\n    }\n  };\n\n  if (accounts[0] === address) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n    disabled: !isLoggedIn,\n    onClick: send,\n    children: \"Tip 0.01 ETH\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, this);\n};\n\n_c = Tip;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tip);\n\nvar _c;\n\n$RefreshReg$(_c, \"Tip\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RpcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNRyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUE2QztBQUFBLE1BQWpDQyxVQUFpQyxRQUFqQ0EsVUFBaUM7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXOztBQUN2RCxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFZO0FBQ3ZCLFFBQUlILFVBQUosRUFBZ0I7QUFDZCxVQUFNSSxLQUFLLEdBQUdSLHVEQUFBLENBQWlCLE1BQWpCLEVBQXlCLE9BQXpCLENBQWQ7QUFFQVcsTUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QjtBQUN0QkMsUUFBQUEsTUFBTSxFQUFFLHFCQURjO0FBRXRCQyxRQUFBQSxNQUFNLEVBQUUsQ0FBQztBQUNQQyxVQUFBQSxJQUFJLEVBQUVYLFFBQVEsQ0FBQyxDQUFELENBRFA7QUFFUFksVUFBQUEsRUFBRSxFQUFFWCxPQUZHO0FBR1BZLFVBQUFBLEtBQUssRUFBRWxCLHVEQUFBLENBQWlCUSxLQUFqQjtBQUhBLFNBQUQ7QUFGYyxPQUF4QjtBQVFELEtBWEQsTUFXTztBQUNMWSxNQUFBQSxLQUFLLENBQUMsNEJBQUQsQ0FBTDtBQUNEO0FBQ0YsR0FmRDs7QUFpQkEsTUFBSWYsUUFBUSxDQUFDLENBQUQsQ0FBUixLQUFnQkMsT0FBcEIsRUFBNkI7QUFDM0Isd0JBQ0UsNklBREY7QUFHRDs7QUFFRCxzQkFDRTtBQUFRLFlBQVEsRUFBRSxDQUFDRixVQUFuQjtBQUErQixXQUFPLEVBQUVHLElBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFHRCxDQTNCRDs7S0FBTUo7QUE2Qk4sK0RBQWVBLEdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UaXAuanM/OWViYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3ZWIzIH0gZnJvbSAnLi4vbGliL3dlYjMnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IFRpcCA9IGZ1bmN0aW9uICh7IGlzTG9nZ2VkSW4sIGFjY291bnRzLCBhZGRyZXNzIH0pIHtcbiAgY29uc3Qgc2VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaXNMb2dnZWRJbikge1xuICAgICAgY29uc3QgcHJpY2UgPSB3ZWIzLnV0aWxzLnRvV2VpKFwiMC4wMVwiLCBcImV0aGVyXCIpXG5cbiAgICAgIHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiBcImV0aF9zZW5kVHJhbnNhY3Rpb25cIixcbiAgICAgICAgcGFyYW1zOiBbe1xuICAgICAgICAgIGZyb206IGFjY291bnRzWzBdLFxuICAgICAgICAgIHRvOiBhZGRyZXNzLFxuICAgICAgICAgIHZhbHVlOiB3ZWIzLnV0aWxzLnRvSGV4KHByaWNlKVxuICAgICAgICB9XVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgY29ubmVjdCB5b3VyIHdhbGxldFwiKVxuICAgIH1cbiAgfVxuXG4gIGlmIChhY2NvdW50c1swXSA9PT0gYWRkcmVzcykge1xuICAgIHJldHVybiAoXG4gICAgICA8PjwvPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBkaXNhYmxlZD17IWlzTG9nZ2VkSW59IG9uQ2xpY2s9e3NlbmR9PlRpcCAwLjAxIEVUSDwvYnV0dG9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpcCJdLCJuYW1lcyI6WyJ3ZWIzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUaXAiLCJpc0xvZ2dlZEluIiwiYWNjb3VudHMiLCJhZGRyZXNzIiwic2VuZCIsInByaWNlIiwidXRpbHMiLCJ0b1dlaSIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsInBhcmFtcyIsImZyb20iLCJ0byIsInZhbHVlIiwidG9IZXgiLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Tip.js\n");

/***/ })

});