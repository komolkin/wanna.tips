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

/***/ "./components/AnswerForm.js":
/*!**********************************!*\
  !*** ./components/AnswerForm.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/web3 */ \"./lib/web3.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/komolkin/Library/Mobile Documents/com~apple~CloudDocs/wanna.tips/components/AnswerForm.js\",\n    _s = $RefreshSig$();\n\n\n\n\nvar AnswerForm = function AnswerForm(_ref) {\n  _s();\n\n  var accounts = _ref.accounts,\n      setAnswers = _ref.setAnswers,\n      isLoggedIn = _ref.isLoggedIn;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"),\n      message = _useState[0],\n      setMessage = _useState[1];\n\n  var post = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {\n      var confirmationMessage, signedMessage, data;\n      return _Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              confirmationMessage = \"Verify that you are the person posting!\";\n              _context.next = 4;\n              return _lib_web3__WEBPACK_IMPORTED_MODULE_5__.web3.eth.personal.sign(confirmationMessage, accounts[0]);\n\n            case 4:\n              signedMessage = _context.sent;\n              data = {\n                questionId: 1,\n                reply: message,\n                account: accounts[0],\n                confirmationMessage: confirmationMessage,\n                signedMessage: signedMessage\n              };\n              fetch(\"/api/answers\", {\n                method: 'POST',\n                headers: {\n                  'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(data)\n              }).then(function (response) {\n                return response.json();\n              }).then(function (data) {\n                setAnswers(function (current) {\n                  return [].concat((0,_Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(current), [data]);\n                });\n                setMessage(\"\");\n              })[\"catch\"](function (error) {\n                console.error(error);\n              });\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function post(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n    onSubmit: post,\n    className: \"answer-form\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n      placeholder: \"Please be nice and courteous in your answers!\",\n      value: message,\n      onChange: function onChange(e) {\n        return setMessage(e.target.value);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      disabled: !isLoggedIn,\n      children: \"Reply\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 5\n  }, this);\n};\n\n_s(AnswerForm, \"EiOGSxO4GWQlH0sM782nQ9JwuAs=\");\n\n_c = AnswerForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnswerForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"AnswerForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Fuc3dlckZvcm0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBZ0Q7QUFBQTs7QUFBQSxNQUFwQ0MsUUFBb0MsUUFBcENBLFFBQW9DO0FBQUEsTUFBMUJDLFVBQTBCLFFBQTFCQSxVQUEwQjtBQUFBLE1BQWRDLFVBQWMsUUFBZEEsVUFBYzs7QUFBQSxrQkFDbkNMLCtDQUFRLENBQUMsRUFBRCxDQUQyQjtBQUFBLE1BQzFETSxPQUQwRDtBQUFBLE1BQ2pEQyxVQURpRDs7QUFHakUsTUFBTUMsSUFBSTtBQUFBLHNZQUFHLGlCQUFnQkMsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1hBLGNBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUVNQyxjQUFBQSxtQkFISyxHQUdpQix5Q0FIakI7QUFBQTtBQUFBLHFCQUtpQlYsNkRBQUEsQ0FBdUJVLG1CQUF2QixFQUE0Q1IsUUFBUSxDQUFDLENBQUQsQ0FBcEQsQ0FMakI7O0FBQUE7QUFLTFksY0FBQUEsYUFMSztBQU9MQyxjQUFBQSxJQVBLLEdBT0U7QUFDWEMsZ0JBQUFBLFVBQVUsRUFBRSxDQUREO0FBRVhDLGdCQUFBQSxLQUFLLEVBQUVaLE9BRkk7QUFHWGEsZ0JBQUFBLE9BQU8sRUFBRWhCLFFBQVEsQ0FBQyxDQUFELENBSE47QUFJWFEsZ0JBQUFBLG1CQUFtQixFQUFFQSxtQkFKVjtBQUtYSSxnQkFBQUEsYUFBYSxFQUFFQTtBQUxKLGVBUEY7QUFlWEssY0FBQUEsS0FBSyxDQUFDLGNBQUQsRUFBaUI7QUFDcEJDLGdCQUFBQSxNQUFNLEVBQUUsTUFEWTtBQUVwQkMsZ0JBQUFBLE9BQU8sRUFBRTtBQUFFLGtDQUFnQjtBQUFsQixpQkFGVztBQUdwQkMsZ0JBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVULElBQWY7QUFIYyxlQUFqQixDQUFMLENBS0NVLElBTEQsQ0FLTSxVQUFBQyxRQUFRO0FBQUEsdUJBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsZUFMZCxFQU1DRixJQU5ELENBTU0sVUFBQVYsSUFBSSxFQUFJO0FBQ1paLGdCQUFBQSxVQUFVLENBQUMsVUFBQXlCLE9BQU8sRUFBSTtBQUNwQiwrTkFBV0EsT0FBWCxJQUFvQmIsSUFBcEI7QUFDRCxpQkFGUyxDQUFWO0FBSUFULGdCQUFBQSxVQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0QsZUFaRCxXQWFPLFVBQUF1QixLQUFLLEVBQUk7QUFDZkMsZ0JBQUFBLE9BQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFkO0FBQ0EsZUFmRDs7QUFmVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFKdEIsSUFBSTtBQUFBO0FBQUE7QUFBQSxLQUFWOztBQWlDQSxzQkFDRTtBQUFNLFlBQVEsRUFBRUEsSUFBaEI7QUFBc0IsYUFBUyxFQUFDLGFBQWhDO0FBQUEsNEJBQ0U7QUFDRSxpQkFBVyxFQUFDLCtDQURkO0FBRUUsV0FBSyxFQUFFRixPQUZUO0FBR0UsY0FBUSxFQUFFLGtCQUFBMEIsQ0FBQztBQUFBLGVBQUl6QixVQUFVLENBQUN5QixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFkO0FBQUE7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFPRTtBQUFRLGNBQVEsRUFBRSxDQUFDN0IsVUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdELENBL0NEOztHQUFNSDs7S0FBQUE7QUFpRE4sK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbnN3ZXJGb3JtLmpzP2VhNjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgd2ViMyB9IGZyb20gXCIuLi9saWIvd2ViM1wiXG5cbmNvbnN0IEFuc3dlckZvcm0gPSBmdW5jdGlvbiAoeyBhY2NvdW50cywgc2V0QW5zd2VycywgaXNMb2dnZWRJbiB9KSB7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgY29uc3QgcG9zdCA9IGFzeW5jIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGNvbnN0IGNvbmZpcm1hdGlvbk1lc3NhZ2UgPSBcIlZlcmlmeSB0aGF0IHlvdSBhcmUgdGhlIHBlcnNvbiBwb3N0aW5nIVwiXG5cbiAgICBjb25zdCBzaWduZWRNZXNzYWdlID0gYXdhaXQgd2ViMy5ldGgucGVyc29uYWwuc2lnbihjb25maXJtYXRpb25NZXNzYWdlLCBhY2NvdW50c1swXSlcblxuICAgIGNvbnN0IGRhdGEgPSB7IFxuICAgICAgcXVlc3Rpb25JZDogMSxcbiAgICAgIHJlcGx5OiBtZXNzYWdlLCBcbiAgICAgIGFjY291bnQ6IGFjY291bnRzWzBdLFxuICAgICAgY29uZmlybWF0aW9uTWVzc2FnZTogY29uZmlybWF0aW9uTWVzc2FnZSxcbiAgICAgIHNpZ25lZE1lc3NhZ2U6IHNpZ25lZE1lc3NhZ2VcbiAgICB9XG5cbiAgICBmZXRjaChcIi9hcGkvYW5zd2Vyc1wiLCB7IFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBzZXRBbnN3ZXJzKGN1cnJlbnQgPT4ge1xuICAgICAgICByZXR1cm4gWy4uLmN1cnJlbnQsIGRhdGFdXG4gICAgICB9KVxuICBcbiAgICAgIHNldE1lc3NhZ2UoXCJcIilcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e3Bvc3R9IGNsYXNzTmFtZT1cImFuc3dlci1mb3JtXCI+XG4gICAgICA8dGV4dGFyZWEgXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiUGxlYXNlIGJlIG5pY2UgYW5kIGNvdXJ0ZW91cyBpbiB5b3VyIGFuc3dlcnMhXCIgXG4gICAgICAgIHZhbHVlPXttZXNzYWdlfSBcbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9PiAgXG4gICAgICA8L3RleHRhcmVhPlxuICAgICAgXG4gICAgICA8YnV0dG9uIGRpc2FibGVkPXshaXNMb2dnZWRJbn0+UmVwbHk8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5zd2VyRm9ybSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIndlYjMiLCJBbnN3ZXJGb3JtIiwiYWNjb3VudHMiLCJzZXRBbnN3ZXJzIiwiaXNMb2dnZWRJbiIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwicG9zdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25maXJtYXRpb25NZXNzYWdlIiwiZXRoIiwicGVyc29uYWwiLCJzaWduIiwic2lnbmVkTWVzc2FnZSIsImRhdGEiLCJxdWVzdGlvbklkIiwicmVwbHkiLCJhY2NvdW50IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY3VycmVudCIsImVycm9yIiwiY29uc29sZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AnswerForm.js\n");

/***/ })

});