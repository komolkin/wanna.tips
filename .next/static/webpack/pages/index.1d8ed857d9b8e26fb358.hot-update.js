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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/web3 */ \"./lib/web3.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Account__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Account */ \"./components/Account.js\");\n/* harmony import */ var _components_EthName__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/EthName */ \"./components/EthName.js\");\n/* harmony import */ var _components_Answer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Answer */ \"./components/Answer.js\");\n/* harmony import */ var _components_AnswerForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/AnswerForm */ \"./components/AnswerForm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/komolkin/Library/Mobile Documents/com~apple~CloudDocs/wanna.tips/pages/index.js\",\n    _s = $RefreshSig$();\n\n// for next.js's <head> tag and rendering images\n\n // import the web3 library with setup from lib/web3.js\n\n // import react hooks\n\n // all from our components folder\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  // todo:\n  // 1. make the connect button work!\n  // 2. get the answers from the API (see /api/answers.js file)\n  // 3. add tipping like project 1\n  // 4. make the user name look good\n  // 5. let the user post their own reply\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),\n      accounts = _useState[0],\n      setAccounts = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),\n      isLoggedIn = _useState2[0],\n      setIsLoggedIn = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(),\n      isLoading = _useState3[0],\n      setIsLoading = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),\n      answers = _useState4[0],\n      setAnswers = _useState4[1];\n\n  var connect = /*#__PURE__*/function () {\n    var _ref = (0,_Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var a;\n      return _Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return window.ethereum.request({\n                method: \"eth_requestAccounts\"\n              });\n\n            case 2:\n              a = _context.sent;\n              setAccounts(a);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function connect() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {\n    if (accounts.length > 0) {\n      setIsLoggedIn(true);\n    } else {\n      setIsLoggedIn(false);\n    }\n  }, [accounts]);\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)( /*#__PURE__*/(0,_Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n    var a;\n    return _Users_komolkin_Library_Mobile_Documents_com_apple_CloudDocs_wanna_tips_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return window.ethereum.request({\n              method: \"eth_accounts\"\n            });\n\n          case 2:\n            a = _context2.sent;\n            setAccounts(a);\n            window.ethereum.on(\"accountsChanged\", function (a) {\n              setAccounts(a);\n            });\n            fetch(\"/api/answers\").then(function (response) {\n              return response.json();\n            }).then(function (data) {\n              setAnswers(data.answers);\n              setIsLoading(false);\n            });\n\n          case 6:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  })), []);\n\n  var answersArea = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"loading\",\n    children: \"Loading ideas...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 5\n  }, this);\n\n  if (!isLoading) {\n    answersArea = answers.map(function (answer, index) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Answer__WEBPACK_IMPORTED_MODULE_9__.default, {\n        number: index + 1,\n        answer: answer,\n        accounts: accounts,\n        isLoggedIn: isLoggedIn\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 14\n      }, this);\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Wanna.tips\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          placeholder: \"Search\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Account__WEBPACK_IMPORTED_MODULE_7__.default, {\n        accounts: accounts,\n        isLoggedIn: isLoggedIn,\n        connect: connect\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n      className: \"question\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n          children: \"Feedback forum\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          children: \"Looking for feedback as a beginner\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: \"Hey everyone, I'm a new potter, just 4 weeks into my journey, and I'm looking to get some feedback on what I've made so far. I'm particularly interested in how to make rustic looking bowls and pots, and I'd love to know what the best tools to use would be!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"slides\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n            src: \"/image-1.jpg\",\n            width: \"600\",\n            height: \"800\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n            src: \"/image-2.jpg\",\n            width: \"600\",\n            height: \"800\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n            src: \"/image-3.jpg\",\n            width: \"600\",\n            height: \"800\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n            src: \"/image-4.jpg\",\n            width: \"600\",\n            height: \"800\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"meta\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"eth-name\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"https://ipfs.io/ipfs/QmbctVN8tPaDLiLysVDwThf7JTJhMejbSypZ4a3v5H2G3a\",\n            alt: \"Avatar of riklomas.eth\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"name\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              className: \"primary\",\n              children: \"riklomas.eth\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 100,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              className: \"secondary\",\n              children: \"0xb25bf3...aaf4\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 101,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n      className: \"answers\",\n      children: answersArea\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Looking for feedback as a beginner \\u2013 Feedback forum \\u2013 Potstop \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:title\",\n        content: \"Looking for feedback as a beginner on Potstop\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:description\",\n        content: \"This is a project on the SuperHi Crypto + Web3 for Creatives course\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:image\",\n        content: \"/social.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"0c8y/DmYhOZFWJnzw4Okv34E8W0=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztDQUdBOztDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU1MsSUFBVCxHQUFnQjtBQUFBOztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFONkIsa0JBUUNOLCtDQUFRLENBQUMsRUFBRCxDQVJUO0FBQUEsTUFReEJPLFFBUndCO0FBQUEsTUFRZEMsV0FSYzs7QUFBQSxtQkFTS1IsK0NBQVEsQ0FBQyxLQUFELENBVGI7QUFBQSxNQVN4QlMsVUFUd0I7QUFBQSxNQVNaQyxhQVRZOztBQUFBLG1CQVVHViwrQ0FBUSxFQVZYO0FBQUEsTUFVeEJXLFNBVndCO0FBQUEsTUFVYkMsWUFWYTs7QUFBQSxtQkFXRFosK0NBQVEsQ0FBQyxFQUFELENBWFA7QUFBQSxNQVd4QmEsT0FYd0I7QUFBQSxNQVdmQyxVQVhlOztBQWE3QixNQUFNQyxPQUFPO0FBQUEscVlBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDQUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QjtBQUFFQyxnQkFBQUEsTUFBTSxFQUFFO0FBQVYsZUFBeEIsQ0FEQTs7QUFBQTtBQUNWQyxjQUFBQSxDQURVO0FBRWRaLGNBQUFBLFdBQVcsQ0FBQ1ksQ0FBRCxDQUFYOztBQUZjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVBMLE9BQU87QUFBQTtBQUFBO0FBQUEsS0FBYjs7QUFLQWQsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFZO0FBQ3BCLFFBQUlNLFFBQVEsQ0FBQ2MsTUFBVCxHQUFrQixDQUF0QixFQUF5QjtBQUN2QlgsTUFBQUEsYUFBYSxDQUFDLElBQUQsQ0FBYjtBQUNELEtBRkQsTUFFTztBQUNMQSxNQUFBQSxhQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0Q7QUFDRixHQU5RLEVBTU4sQ0FBQ0gsUUFBRCxDQU5NLENBQVQ7QUFRQU4sRUFBQUEsZ0RBQVMscVlBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDTWUsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QjtBQUFFQyxjQUFBQSxNQUFNLEVBQUU7QUFBVixhQUF4QixDQUROOztBQUFBO0FBQ0pDLFlBQUFBLENBREk7QUFFUlosWUFBQUEsV0FBVyxDQUFDWSxDQUFELENBQVg7QUFFQUosWUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCSyxFQUFoQixDQUFtQixpQkFBbkIsRUFBc0MsVUFBVUYsQ0FBVixFQUFhO0FBQ2pEWixjQUFBQSxXQUFXLENBQUNZLENBQUQsQ0FBWDtBQUNELGFBRkQ7QUFJQUcsWUFBQUEsS0FBSyxDQUFDLGNBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsVUFBQUMsUUFBUTtBQUFBLHFCQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLGFBRGhCLEVBRUdGLElBRkgsQ0FFUSxVQUFBRyxJQUFJLEVBQUk7QUFDWmIsY0FBQUEsVUFBVSxDQUFDYSxJQUFJLENBQUNkLE9BQU4sQ0FBVjtBQUNBRCxjQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0QsYUFMSDs7QUFSUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBY04sRUFkTSxDQUFUOztBQWdCQSxNQUFJZ0IsV0FBVyxnQkFDYjtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7O0FBSUEsTUFBSSxDQUFDakIsU0FBTCxFQUFnQjtBQUNkaUIsSUFBQUEsV0FBVyxHQUFHZixPQUFPLENBQUNnQixHQUFSLENBQVksVUFBVUMsTUFBVixFQUFrQkMsS0FBbEIsRUFBeUI7QUFDakQsMEJBQU8sOERBQUMsdURBQUQ7QUFBUSxjQUFNLEVBQUVBLEtBQUssR0FBRyxDQUF4QjtBQUEyQixjQUFNLEVBQUVELE1BQW5DO0FBQTJDLGdCQUFRLEVBQUV2QixRQUFyRDtBQUErRCxrQkFBVSxFQUFFRTtBQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDRCxLQUZhLENBQWQ7QUFHRDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUdFO0FBQUEsK0JBQ0U7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixxQkFBVyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFPRSw4REFBQyx3REFBRDtBQUFTLGdCQUFRLEVBQUVGLFFBQW5CO0FBQTZCLGtCQUFVLEVBQUVFLFVBQXpDO0FBQXFELGVBQU8sRUFBRU07QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBV0U7QUFBUyxlQUFTLEVBQUMsVUFBbkI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixlQUtFO0FBQUssbUJBQVMsRUFBQyxRQUFmO0FBQUEsa0NBQ0UsOERBQUMsbURBQUQ7QUFBTyxlQUFHLEVBQUMsY0FBWDtBQUEwQixpQkFBSyxFQUFDLEtBQWhDO0FBQXNDLGtCQUFNLEVBQUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFLDhEQUFDLG1EQUFEO0FBQU8sZUFBRyxFQUFDLGNBQVg7QUFBMEIsaUJBQUssRUFBQyxLQUFoQztBQUFzQyxrQkFBTSxFQUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFHRSw4REFBQyxtREFBRDtBQUFPLGVBQUcsRUFBQyxjQUFYO0FBQTBCLGlCQUFLLEVBQUMsS0FBaEM7QUFBc0Msa0JBQU0sRUFBQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLGVBSUUsOERBQUMsbURBQUQ7QUFBTyxlQUFHLEVBQUMsY0FBWDtBQUEwQixpQkFBSyxFQUFDLEtBQWhDO0FBQXNDLGtCQUFNLEVBQUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFhRTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLCtCQUdFO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsa0NBQ0U7QUFBSyxlQUFHLEVBQUMscUVBQVQ7QUFBK0UsZUFBRyxFQUFDO0FBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFLLHFCQUFTLEVBQUMsTUFBZjtBQUFBLG9DQUNFO0FBQU0sdUJBQVMsRUFBQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQU0sdUJBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGLGVBdUNFO0FBQVMsZUFBUyxFQUFDLFNBQW5CO0FBQUEsZ0JBQ0dhO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZDRixlQTJDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLGdCQUFRLEVBQUMsVUFBZjtBQUEwQixlQUFPLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBTSxnQkFBUSxFQUFDLGdCQUFmO0FBQWdDLGVBQU8sRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRTtBQUFNLGdCQUFRLEVBQUMsVUFBZjtBQUEwQixlQUFPLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9ERDs7R0F4R3VCdEI7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZm9yIG5leHQuanMncyA8aGVhZD4gdGFnIGFuZCByZW5kZXJpbmcgaW1hZ2VzXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuLy8gaW1wb3J0IHRoZSB3ZWIzIGxpYnJhcnkgd2l0aCBzZXR1cCBmcm9tIGxpYi93ZWIzLmpzXG5pbXBvcnQgeyB3ZWIzIH0gZnJvbSAnLi4vbGliL3dlYjMnO1xuXG4vLyBpbXBvcnQgcmVhY3QgaG9va3NcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbi8vIGFsbCBmcm9tIG91ciBjb21wb25lbnRzIGZvbGRlclxuaW1wb3J0IEFjY291bnQgZnJvbSAnLi4vY29tcG9uZW50cy9BY2NvdW50J1xuaW1wb3J0IEV0aE5hbWUgZnJvbSAnLi4vY29tcG9uZW50cy9FdGhOYW1lJ1xuaW1wb3J0IEFuc3dlciBmcm9tICcuLi9jb21wb25lbnRzL0Fuc3dlcidcbmltcG9ydCBBbnN3ZXJGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQW5zd2VyRm9ybSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gdG9kbzpcbiAgLy8gMS4gbWFrZSB0aGUgY29ubmVjdCBidXR0b24gd29yayFcbiAgLy8gMi4gZ2V0IHRoZSBhbnN3ZXJzIGZyb20gdGhlIEFQSSAoc2VlIC9hcGkvYW5zd2Vycy5qcyBmaWxlKVxuICAvLyAzLiBhZGQgdGlwcGluZyBsaWtlIHByb2plY3QgMVxuICAvLyA0LiBtYWtlIHRoZSB1c2VyIG5hbWUgbG9vayBnb29kXG4gIC8vIDUuIGxldCB0aGUgdXNlciBwb3N0IHRoZWlyIG93biByZXBseVxuXG5jb25zdCBbYWNjb3VudHMsIHNldEFjY291bnRzXSA9IHVzZVN0YXRlKFtdKVxuY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpXG5jb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoKVxuY29uc3QgW2Fuc3dlcnMsIHNldEFuc3dlcnNdID0gdXNlU3RhdGUoW10pXG5cbiAgY29uc3QgY29ubmVjdCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYSA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KVxuICAgIHNldEFjY291bnRzKGEpXG4gIH1cblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBzZXRJc0xvZ2dlZEluKHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldElzTG9nZ2VkSW4oZmFsc2UpXG4gICAgfVxuICB9LCBbYWNjb3VudHNdIClcblxuICB1c2VFZmZlY3QoYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGxldCBhID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX2FjY291bnRzXCIgfSlcbiAgICBzZXRBY2NvdW50cyhhKVxuXG4gICAgd2luZG93LmV0aGVyZXVtLm9uKFwiYWNjb3VudHNDaGFuZ2VkXCIsIGZ1bmN0aW9uIChhKSB7XG4gICAgICBzZXRBY2NvdW50cyhhKVxuICAgIH0pXG5cbiAgICBmZXRjaChcIi9hcGkvYW5zd2Vyc1wiKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHNldEFuc3dlcnMoZGF0YS5hbnN3ZXJzKVxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgICB9KVxuICB9LCBbXSlcblxuICBsZXQgYW5zd2Vyc0FyZWEgPSAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+TG9hZGluZyBpZGVhcy4uLjwvZGl2PlxuICApXG5cbiAgaWYgKCFpc0xvYWRpbmcpIHtcbiAgICBhbnN3ZXJzQXJlYSA9IGFuc3dlcnMubWFwKGZ1bmN0aW9uIChhbnN3ZXIsIGluZGV4KSB7XG4gICAgICByZXR1cm4gPEFuc3dlciBudW1iZXI9e2luZGV4ICsgMX0gYW5zd2VyPXthbnN3ZXJ9IGFjY291bnRzPXthY2NvdW50c30gaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0gLz5cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxoMT5XYW5uYS50aXBzPC9oMT5cblxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIC8+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8QWNjb3VudCBhY2NvdW50cz17YWNjb3VudHN9IGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IGNvbm5lY3Q9e2Nvbm5lY3R9IC8+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicXVlc3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgPGgzPkZlZWRiYWNrIGZvcnVtPC9oMz5cbiAgICAgICAgICA8aDI+TG9va2luZyBmb3IgZmVlZGJhY2sgYXMgYSBiZWdpbm5lcjwvaDI+XG4gICAgICAgICAgPHA+SGV5IGV2ZXJ5b25lLCBJJmFwb3M7bSBhIG5ldyBwb3R0ZXIsIGp1c3QgNCB3ZWVrcyBpbnRvIG15IGpvdXJuZXksIGFuZCBJJmFwb3M7bSBsb29raW5nIHRvIGdldCBzb21lIGZlZWRiYWNrIG9uIHdoYXQgSSZhcG9zO3ZlIG1hZGUgc28gZmFyLiBJJmFwb3M7bSBwYXJ0aWN1bGFybHkgaW50ZXJlc3RlZCBpbiBob3cgdG8gbWFrZSBydXN0aWMgbG9va2luZyBib3dscyBhbmQgcG90cywgYW5kIEkmYXBvcztkIGxvdmUgdG8ga25vdyB3aGF0IHRoZSBiZXN0IHRvb2xzIHRvIHVzZSB3b3VsZCBiZSE8L3A+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlc1wiPlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZS0xLmpwZ1wiIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiODAwXCIgLz5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2UtMi5qcGdcIiB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjgwMFwiIC8+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlLTMuanBnXCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI4MDBcIiAvPlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZS00LmpwZ1wiIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiODAwXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YVwiPlxuICAgICAgICAgIFxuICAgICAgICAgIHsvKiBFdGhOYW1lICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXRoLW5hbWVcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1iY3RWTjh0UGFETGlMeXNWRHdUaGY3SlRKaE1lamJTeXBaNGEzdjVIMkczYVwiIGFsdD1cIkF2YXRhciBvZiByaWtsb21hcy5ldGhcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaW1hcnlcIj5yaWtsb21hcy5ldGg8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlY29uZGFyeVwiPjB4YjI1YmYzLi4uYWFmNDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiBlbmQgRXRoTmFtZSAqL31cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYW5zd2Vyc1wiPlxuICAgICAgICB7YW5zd2Vyc0FyZWF9XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TG9va2luZyBmb3IgZmVlZGJhY2sgYXMgYSBiZWdpbm5lciDigJMgRmVlZGJhY2sgZm9ydW0g4oCTIFBvdHN0b3AgPC90aXRsZT5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJMb29raW5nIGZvciBmZWVkYmFjayBhcyBhIGJlZ2lubmVyIG9uIFBvdHN0b3BcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRoaXMgaXMgYSBwcm9qZWN0IG9uIHRoZSBTdXBlckhpIENyeXB0byArIFdlYjMgZm9yIENyZWF0aXZlcyBjb3Vyc2VcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cIi9zb2NpYWwucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJ3ZWIzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBY2NvdW50IiwiRXRoTmFtZSIsIkFuc3dlciIsIkFuc3dlckZvcm0iLCJIb21lIiwiYWNjb3VudHMiLCJzZXRBY2NvdW50cyIsImlzTG9nZ2VkSW4iLCJzZXRJc0xvZ2dlZEluIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiYW5zd2VycyIsInNldEFuc3dlcnMiLCJjb25uZWN0Iiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiYSIsImxlbmd0aCIsIm9uIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImFuc3dlcnNBcmVhIiwibWFwIiwiYW5zd2VyIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});