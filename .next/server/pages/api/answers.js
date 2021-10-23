"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/answers";
exports.ids = ["pages/api/answers"];
exports.modules = {

/***/ "./lib/web3.js":
/*!*********************!*\
  !*** ./lib/web3.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"web3\": () => (/* binding */ web3)\n/* harmony export */ });\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"web3\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);\n\nlet web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())((web3__WEBPACK_IMPORTED_MODULE_0___default().givenProvider) || \"wss://mainnet.infura.io/ws/v3/28696900a2cf490eb160741dc63e4707\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvd2ViMy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLElBQUlDLElBQUksR0FBRyxJQUFJRCw2Q0FBSixDQUFTQSwyREFBQSxJQUFzQixnRUFBL0IsQ0FBWCIsInNvdXJjZXMiOlsid2VicGFjazovL3BvdHN0b3AvLi9saWIvd2ViMy5qcz83YTRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuXG5sZXQgd2ViMyA9IG5ldyBXZWIzKFdlYjMuZ2l2ZW5Qcm92aWRlciB8fCBcIndzczovL21haW5uZXQuaW5mdXJhLmlvL3dzL3YzLzI4Njk2OTAwYTJjZjQ5MGViMTYwNzQxZGM2M2U0NzA3XCIpXG5cbmV4cG9ydCB7IHdlYjMgfSJdLCJuYW1lcyI6WyJXZWIzIiwid2ViMyIsImdpdmVuUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/web3.js\n");

/***/ }),

/***/ "./pages/api/answers.js":
/*!******************************!*\
  !*** ./pages/api/answers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/web3 */ \"./lib/web3.js\");\n/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! markdown-it */ \"markdown-it\");\n/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_1__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n // make a new markdown renderer\n\nconst markdown = new (markdown_it__WEBPACK_IMPORTED_MODULE_1___default())(); // a list of 3 answers by default\n// usually this would come from a database\n// but to keep things simple, we're setting it here\n\nconst answers = [`That's fantastic work for a beginner! [Arteza](#) have great sculpting tools that you may want to check out!`, `From the looks of the clay, it could be a touch dry. \n  \n  Maybe consider a _slight_ bit more water on your hands while you shape and you may find that a little easier.`, `I disagree with reply #3, I think the clay looks fine, no more water needed. `].map(a => markdown.render(a)); // what happens when we ask for /api/answers\n\nfunction handler(req, res) {\n  // if sent via a form, e.g. the reply form\n  if (req.method === \"POST\") {\n    const {\n      signedMessage,\n      confirmationMessage,\n      account,\n      reply = \"\",\n      questionId = 1\n    } = req.body;\n\n    if (signedMessage !== null && confirmationMessage !== null && account !== null) {\n      // get account from the confirmation message\n      // and signed message\n      const recoveredAccount = _lib_web3__WEBPACK_IMPORTED_MODULE_0__.web3.eth.accounts.recover(confirmationMessage, signedMessage); // check if account is same\n\n      if (account.toLowerCase() === recoveredAccount.toLowerCase()) {\n        // yep, so render reply\n        // you would usually save to a database here\n        let newReply = markdown.render(reply); // return all good\n\n        res.status(200).json({\n          account,\n          reply: newReply,\n          questionId,\n          answerId: 3\n        });\n      } else {\n        // incorrect account\n        res.status(401).json({\n          error: \"incorrect account\"\n        });\n      }\n    } else {\n      // need to sign that message!\n      res.status(401).json({\n        error: \"need to sign message\"\n      });\n    }\n  } else {\n    // if fetched normally using fetch()\n    const data = [{\n      questionId: 1,\n      answerId: 1,\n      reply: answers[0],\n      account: \"0xDf7C7f491f26D35fCca74F6Fbd6b5FE437cc24C7\"\n    }, {\n      questionId: 1,\n      answerId: 2,\n      reply: answers[1],\n      account: \"0x383351e7787347fc7cfe44561c645d6b382e4525\"\n    }, {\n      questionId: 1,\n      answerId: 3,\n      reply: answers[2],\n      account: \"0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65\"\n    }];\n    res.setHeader('Content-Type', 'application/json').status(200).json({\n      answers: data\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQVgsS0FIUjtBQUlEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3RzdG9wLy4vcGFnZXMvYXBpL2Fuc3dlcnMuanM/YWY1OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IHsgd2ViMyB9IGZyb20gJy4uLy4uL2xpYi93ZWIzJ1xuaW1wb3J0IE1hcmtkb3duSXQgZnJvbSAnbWFya2Rvd24taXQnO1xuXG4vLyBtYWtlIGEgbmV3IG1hcmtkb3duIHJlbmRlcmVyXG5jb25zdCBtYXJrZG93biA9IG5ldyBNYXJrZG93bkl0KClcblxuLy8gYSBsaXN0IG9mIDMgYW5zd2VycyBieSBkZWZhdWx0XG4vLyB1c3VhbGx5IHRoaXMgd291bGQgY29tZSBmcm9tIGEgZGF0YWJhc2Vcbi8vIGJ1dCB0byBrZWVwIHRoaW5ncyBzaW1wbGUsIHdlJ3JlIHNldHRpbmcgaXQgaGVyZVxuY29uc3QgYW5zd2VycyA9IFtcbiAgYFRoYXQncyBmYW50YXN0aWMgd29yayBmb3IgYSBiZWdpbm5lciEgW0FydGV6YV0oIykgaGF2ZSBncmVhdCBzY3VscHRpbmcgdG9vbHMgdGhhdCB5b3UgbWF5IHdhbnQgdG8gY2hlY2sgb3V0IWAsXG4gIGBGcm9tIHRoZSBsb29rcyBvZiB0aGUgY2xheSwgaXQgY291bGQgYmUgYSB0b3VjaCBkcnkuIFxuICBcbiAgTWF5YmUgY29uc2lkZXIgYSBfc2xpZ2h0XyBiaXQgbW9yZSB3YXRlciBvbiB5b3VyIGhhbmRzIHdoaWxlIHlvdSBzaGFwZSBhbmQgeW91IG1heSBmaW5kIHRoYXQgYSBsaXR0bGUgZWFzaWVyLmAsXG4gIGBJIGRpc2FncmVlIHdpdGggcmVwbHkgIzMsIEkgdGhpbmsgdGhlIGNsYXkgbG9va3MgZmluZSwgbm8gbW9yZSB3YXRlciBuZWVkZWQuIGBcbl0ubWFwKGEgPT4gbWFya2Rvd24ucmVuZGVyKGEpKVxuXG5cbi8vIHdoYXQgaGFwcGVucyB3aGVuIHdlIGFzayBmb3IgL2FwaS9hbnN3ZXJzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIC8vIGlmIHNlbnQgdmlhIGEgZm9ybSwgZS5nLiB0aGUgcmVwbHkgZm9ybVxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBcbiAgICBjb25zdCB7IHNpZ25lZE1lc3NhZ2UsIGNvbmZpcm1hdGlvbk1lc3NhZ2UsIGFjY291bnQsIHJlcGx5PVwiXCIsIHF1ZXN0aW9uSWQ9MSB9ID0gcmVxLmJvZHlcblxuICAgIGlmIChzaWduZWRNZXNzYWdlICE9PSBudWxsICYmIGNvbmZpcm1hdGlvbk1lc3NhZ2UgIT09IG51bGwgJiYgYWNjb3VudCAhPT0gbnVsbCkge1xuICAgICAgLy8gZ2V0IGFjY291bnQgZnJvbSB0aGUgY29uZmlybWF0aW9uIG1lc3NhZ2VcbiAgICAgIC8vIGFuZCBzaWduZWQgbWVzc2FnZVxuICAgICAgY29uc3QgcmVjb3ZlcmVkQWNjb3VudCA9IHdlYjMuZXRoLmFjY291bnRzLnJlY292ZXIoY29uZmlybWF0aW9uTWVzc2FnZSwgc2lnbmVkTWVzc2FnZSlcblxuICAgICAgLy8gY2hlY2sgaWYgYWNjb3VudCBpcyBzYW1lXG4gICAgICBpZiAoYWNjb3VudC50b0xvd2VyQ2FzZSgpID09PSByZWNvdmVyZWRBY2NvdW50LnRvTG93ZXJDYXNlKCkpIHsgIFxuICAgICAgICAvLyB5ZXAsIHNvIHJlbmRlciByZXBseVxuICAgICAgICAvLyB5b3Ugd291bGQgdXN1YWxseSBzYXZlIHRvIGEgZGF0YWJhc2UgaGVyZVxuICAgICAgICBsZXQgbmV3UmVwbHkgPSBtYXJrZG93bi5yZW5kZXIocmVwbHkpXG4gICAgICAgIFxuICAgICAgICAvLyByZXR1cm4gYWxsIGdvb2RcbiAgICAgICAgcmVzXG4gICAgICAgICAgLnN0YXR1cygyMDApXG4gICAgICAgICAgLmpzb24oeyBhY2NvdW50LCByZXBseTogbmV3UmVwbHksIHF1ZXN0aW9uSWQsIGFuc3dlcklkOiAzIH0pXG4gICAgICB9IGVsc2UgeyAgXG4gICAgICAgIC8vIGluY29ycmVjdCBhY2NvdW50XG4gICAgICAgIHJlc1xuICAgICAgICAgIC5zdGF0dXMoNDAxKVxuICAgICAgICAgIC5qc29uKHsgZXJyb3I6IFwiaW5jb3JyZWN0IGFjY291bnRcIiB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBuZWVkIHRvIHNpZ24gdGhhdCBtZXNzYWdlIVxuICAgICAgcmVzXG4gICAgICAgIC5zdGF0dXMoNDAxKVxuICAgICAgICAuanNvbih7IGVycm9yOiBcIm5lZWQgdG8gc2lnbiBtZXNzYWdlXCIgfSlcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgZmV0Y2hlZCBub3JtYWxseSB1c2luZyBmZXRjaCgpXG4gICAgY29uc3QgZGF0YSA9IFtcbiAgICAgIHsgcXVlc3Rpb25JZDogMSwgYW5zd2VySWQ6IDEsIHJlcGx5OiBhbnN3ZXJzWzBdLCBhY2NvdW50OiBcIjB4RGY3QzdmNDkxZjI2RDM1ZkNjYTc0RjZGYmQ2YjVGRTQzN2NjMjRDN1wiIH0sXG4gICAgICB7IHF1ZXN0aW9uSWQ6IDEsIGFuc3dlcklkOiAyLCByZXBseTogYW5zd2Vyc1sxXSwgYWNjb3VudDogXCIweDM4MzM1MWU3Nzg3MzQ3ZmM3Y2ZlNDQ1NjFjNjQ1ZDZiMzgyZTQ1MjVcIiB9LFxuICAgICAgeyBxdWVzdGlvbklkOiAxLCBhbnN3ZXJJZDogMywgcmVwbHk6IGFuc3dlcnNbMl0sIGFjY291bnQ6IFwiMHgxNWQzNEFBZjU0MjY3REI3RDdjMzY3ODM5QUFmNzFBMDBhMkM2QTY1XCIgfVxuICAgIF1cbiAgXG4gICAgcmVzXG4gICAgICAuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpXG4gICAgICAuc3RhdHVzKDIwMClcbiAgICAgIC5qc29uKHsgYW5zd2VyczogZGF0YSB9KVxuICB9XG59XG4iXSwibmFtZXMiOlsid2ViMyIsIk1hcmtkb3duSXQiLCJtYXJrZG93biIsImFuc3dlcnMiLCJtYXAiLCJhIiwicmVuZGVyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInNpZ25lZE1lc3NhZ2UiLCJjb25maXJtYXRpb25NZXNzYWdlIiwiYWNjb3VudCIsInJlcGx5IiwicXVlc3Rpb25JZCIsImJvZHkiLCJyZWNvdmVyZWRBY2NvdW50IiwiZXRoIiwiYWNjb3VudHMiLCJyZWNvdmVyIiwidG9Mb3dlckNhc2UiLCJuZXdSZXBseSIsInN0YXR1cyIsImpzb24iLCJhbnN3ZXJJZCIsImVycm9yIiwiZGF0YSIsInNldEhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/answers.js\n");

/***/ }),

/***/ "markdown-it":
/*!******************************!*\
  !*** external "markdown-it" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("markdown-it");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/answers.js"));
module.exports = __webpack_exports__;

})();