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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/web3 */ \"./lib/web3.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Account__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Account */ \"./components/Account.js\");\n/* harmony import */ var _components_EthName__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/EthName */ \"./components/EthName.js\");\n/* harmony import */ var _components_Answer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Answer */ \"./components/Answer.js\");\n/* harmony import */ var _components_AnswerForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/AnswerForm */ \"./components/AnswerForm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/komolkin/Library/Mobile Documents/com~apple~CloudDocs/wanna.tips/pages/index.js\",\n    _s = $RefreshSig$();\n\n// for next.js's <head> tag and rendering images\n\n // import the web3 library with setup from lib/web3.js\n\n // import react hooks\n\n // all from our components folder\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  // todo:\n  // 1. make the connect button work!\n  // 2. get the answers from the API (see /api/answers.js file)\n  // 3. add tipping like project 1\n  // 4. make the user name look good\n  // 5. let the user post their own reply\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),\n      accounts = _useState[0],\n      setAccounts = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),\n      isLoggedIn = _useState2[0],\n      setIsLoggedIn = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(),\n      isLoading = _useState3[0],\n      setIsLoading = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),\n      answers = _useState4[0],\n      setAnswers = _useState4[1];\n\n  var connect = /*#__PURE__*/function () {\n    var _ref = (0,_Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var a;\n      return _Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return window.ethereum.request({\n                method: \"eth_requestAccounts\"\n              });\n\n            case 2:\n              a = _context.sent;\n              setAccounts(a);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function connect() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {\n    if (accounts.length > 0) {\n      setIsLoggedIn(true);\n    } else {\n      setIsLoggedIn(false);\n    }\n  }, [accounts]);\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)( /*#__PURE__*/(0,_Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n    var a;\n    return _Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return window.ethereum.request({\n              method: \"eth_accounts\"\n            });\n\n          case 2:\n            a = _context2.sent;\n            setAccounts(a);\n            window.ethereum.on(\"accountsChanged\", function (a) {\n              setAccounts(a);\n            });\n            fetch(\"/api/answers\").then(function (response) {\n              return response.json();\n            }).then(function (data) {\n              setAnswers(data.answers);\n              setIsLoading(false);\n            });\n\n          case 6:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  })), []);\n\n  var answersArea = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"loading\",\n    children: \"Loading ideas...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 5\n  }, this);\n\n  if (!isLoading) {\n    answersArea = answers.map(function (answer, index) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Answer__WEBPACK_IMPORTED_MODULE_9__.default, {\n        number: index + 1,\n        answer: answer,\n        accounts: accounts,\n        isLoggedIn: isLoggedIn\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 14\n      }, this);\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Wanna.tips\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          placeholder: \"Search\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Account__WEBPACK_IMPORTED_MODULE_7__.default, {\n        accounts: accounts,\n        isLoggedIn: isLoggedIn,\n        connect: connect\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n      className: \"question\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n          children: \"Feedback forum\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          children: \"Looking for feedback as a beginner\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: \"Hey everyone, I'm a new potter, just 4 weeks into my journey, and I'm looking to get some feedback on what I've made so far. I'm particularly interested in how to make rustic looking bowls and pots, and I'd love to know what the best tools to use would be!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"slides\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n            src: \"/image-1.jpg\",\n            width: \"600\",\n            height: \"800\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n            src: \"/image-2.jpg\",\n            width: \"600\",\n            height: \"800\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n            src: \"/image-3.jpg\",\n            width: \"600\",\n            height: \"800\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n            src: \"/image-4.jpg\",\n            width: \"600\",\n            height: \"800\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"meta\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"eth-name\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"https://ipfs.io/ipfs/QmbctVN8tPaDLiLysVDwThf7JTJhMejbSypZ4a3v5H2G3a\",\n            alt: \"Avatar of riklomas.eth\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"name\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              className: \"primary\",\n              children: \"riklomas.eth\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 100,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              className: \"secondary\",\n              children: \"0xb25bf3...aaf4\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 101,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n      className: \"answers\",\n      children: [answersArea, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnswerForm__WEBPACK_IMPORTED_MODULE_10__.default, {\n        accounts: accounts,\n        setAnswers: setAnswers,\n        isLoggedIn: isLoggedIn\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Looking for feedback as a beginner \\u2013 Feedback forum \\u2013 Potstop \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:title\",\n        content: \"Looking for feedback as a beginner on Potstop\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:description\",\n        content: \"This is a project on the SuperHi Crypto + Web3 for Creatives course\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:image\",\n        content: \"/social.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"0c8y/DmYhOZFWJnzw4Okv34E8W0=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFmO0FBQTBCLGVBQU8sRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFNLGdCQUFRLEVBQUMsZ0JBQWY7QUFBZ0MsZUFBTyxFQUFDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFO0FBQU0sZ0JBQVEsRUFBQyxVQUFmO0FBQTBCLGVBQU8sRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBN0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0REOztHQTFHdUJIOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZvciBuZXh0LmpzJ3MgPGhlYWQ+IHRhZyBhbmQgcmVuZGVyaW5nIGltYWdlc1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbi8vIGltcG9ydCB0aGUgd2ViMyBsaWJyYXJ5IHdpdGggc2V0dXAgZnJvbSBsaWIvd2ViMy5qc1xuaW1wb3J0IHsgd2ViMyB9IGZyb20gJy4uL2xpYi93ZWIzJztcblxuLy8gaW1wb3J0IHJlYWN0IGhvb2tzXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBhbGwgZnJvbSBvdXIgY29tcG9uZW50cyBmb2xkZXJcbmltcG9ydCBBY2NvdW50IGZyb20gJy4uL2NvbXBvbmVudHMvQWNjb3VudCdcbmltcG9ydCBFdGhOYW1lIGZyb20gJy4uL2NvbXBvbmVudHMvRXRoTmFtZSdcbmltcG9ydCBBbnN3ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9BbnN3ZXInXG5pbXBvcnQgQW5zd2VyRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0Fuc3dlckZvcm0nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vIHRvZG86XG4gIC8vIDEuIG1ha2UgdGhlIGNvbm5lY3QgYnV0dG9uIHdvcmshXG4gIC8vIDIuIGdldCB0aGUgYW5zd2VycyBmcm9tIHRoZSBBUEkgKHNlZSAvYXBpL2Fuc3dlcnMuanMgZmlsZSlcbiAgLy8gMy4gYWRkIHRpcHBpbmcgbGlrZSBwcm9qZWN0IDFcbiAgLy8gNC4gbWFrZSB0aGUgdXNlciBuYW1lIGxvb2sgZ29vZFxuICAvLyA1LiBsZXQgdGhlIHVzZXIgcG9zdCB0aGVpciBvd24gcmVwbHlcblxuY29uc3QgW2FjY291bnRzLCBzZXRBY2NvdW50c10gPSB1c2VTdGF0ZShbXSlcbmNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKVxuY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKClcbmNvbnN0IFthbnN3ZXJzLCBzZXRBbnN3ZXJzXSA9IHVzZVN0YXRlKFtdKVxuXG4gIGNvbnN0IGNvbm5lY3QgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGEgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSlcbiAgICBzZXRBY2NvdW50cyhhKVxuICB9XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgc2V0SXNMb2dnZWRJbih0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJc0xvZ2dlZEluKGZhbHNlKVxuICAgIH1cbiAgfSwgW2FjY291bnRzXSApXG5cbiAgdXNlRWZmZWN0KGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYSA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9hY2NvdW50c1wiIH0pXG4gICAgc2V0QWNjb3VudHMoYSlcblxuICAgIHdpbmRvdy5ldGhlcmV1bS5vbihcImFjY291bnRzQ2hhbmdlZFwiLCBmdW5jdGlvbiAoYSkge1xuICAgICAgc2V0QWNjb3VudHMoYSlcbiAgICB9KVxuXG4gICAgZmV0Y2goXCIvYXBpL2Fuc3dlcnNcIilcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBzZXRBbnN3ZXJzKGRhdGEuYW5zd2VycylcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgICAgfSlcbiAgfSwgW10pXG5cbiAgbGV0IGFuc3dlcnNBcmVhID0gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPkxvYWRpbmcgaWRlYXMuLi48L2Rpdj5cbiAgKVxuXG4gIGlmICghaXNMb2FkaW5nKSB7XG4gICAgYW5zd2Vyc0FyZWEgPSBhbnN3ZXJzLm1hcChmdW5jdGlvbiAoYW5zd2VyLCBpbmRleCkge1xuICAgICAgcmV0dXJuIDxBbnN3ZXIgbnVtYmVyPXtpbmRleCArIDF9IGFuc3dlcj17YW5zd2VyfSBhY2NvdW50cz17YWNjb3VudHN9IGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IC8+XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8aDE+V2FubmEudGlwczwvaDE+XG5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiAvPlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPEFjY291bnQgYWNjb3VudHM9e2FjY291bnRzfSBpc0xvZ2dlZEluPXtpc0xvZ2dlZElufSBjb25uZWN0PXtjb25uZWN0fSAvPlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInF1ZXN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgIDxoMz5GZWVkYmFjayBmb3J1bTwvaDM+XG4gICAgICAgICAgPGgyPkxvb2tpbmcgZm9yIGZlZWRiYWNrIGFzIGEgYmVnaW5uZXI8L2gyPlxuICAgICAgICAgIDxwPkhleSBldmVyeW9uZSwgSSZhcG9zO20gYSBuZXcgcG90dGVyLCBqdXN0IDQgd2Vla3MgaW50byBteSBqb3VybmV5LCBhbmQgSSZhcG9zO20gbG9va2luZyB0byBnZXQgc29tZSBmZWVkYmFjayBvbiB3aGF0IEkmYXBvczt2ZSBtYWRlIHNvIGZhci4gSSZhcG9zO20gcGFydGljdWxhcmx5IGludGVyZXN0ZWQgaW4gaG93IHRvIG1ha2UgcnVzdGljIGxvb2tpbmcgYm93bHMgYW5kIHBvdHMsIGFuZCBJJmFwb3M7ZCBsb3ZlIHRvIGtub3cgd2hhdCB0aGUgYmVzdCB0b29scyB0byB1c2Ugd291bGQgYmUhPC9wPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXNcIj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2UtMS5qcGdcIiB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjgwMFwiIC8+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlLTIuanBnXCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI4MDBcIiAvPlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZS0zLmpwZ1wiIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiODAwXCIgLz5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2UtNC5qcGdcIiB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjgwMFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFcIj5cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogRXRoTmFtZSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV0aC1uYW1lXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaXBmcy5pby9pcGZzL1FtYmN0Vk44dFBhRExpTHlzVkR3VGhmN0pUSmhNZWpiU3lwWjRhM3Y1SDJHM2FcIiBhbHQ9XCJBdmF0YXIgb2YgcmlrbG9tYXMuZXRoXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmltYXJ5XCI+cmlrbG9tYXMuZXRoPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWNvbmRhcnlcIj4weGIyNWJmMy4uLmFhZjQ8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogZW5kIEV0aE5hbWUgKi99XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFuc3dlcnNcIj5cbiAgICAgICAge2Fuc3dlcnNBcmVhfVxuXG4gICAgICAgIDxBbnN3ZXJGb3JtIGFjY291bnRzPXthY2NvdW50c30gc2V0QW5zd2Vycz17c2V0QW5zd2Vyc30gaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0gLz5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Mb29raW5nIGZvciBmZWVkYmFjayBhcyBhIGJlZ2lubmVyIOKAkyBGZWVkYmFjayBmb3J1bSDigJMgUG90c3RvcCA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIkxvb2tpbmcgZm9yIGZlZWRiYWNrIGFzIGEgYmVnaW5uZXIgb24gUG90c3RvcFwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVGhpcyBpcyBhIHByb2plY3Qgb24gdGhlIFN1cGVySGkgQ3J5cHRvICsgV2ViMyBmb3IgQ3JlYXRpdmVzIGNvdXJzZVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiL3NvY2lhbC5wbmdcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsIndlYjMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFjY291bnQiLCJFdGhOYW1lIiwiQW5zd2VyIiwiQW5zd2VyRm9ybSIsIkhvbWUiLCJhY2NvdW50cyIsInNldEFjY291bnRzIiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJhbnN3ZXJzIiwic2V0QW5zd2VycyIsImNvbm5lY3QiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJhIiwibGVuZ3RoIiwib24iLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiYW5zd2Vyc0FyZWEiLCJtYXAiLCJhbnN3ZXIiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});