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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/context/AuthContext */ \"./src/context/AuthContext.js\");\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/itstime/Client/SpringGreens-Client/test/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/itstime/Client/SpringGreens-Client/test/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDNEI7QUFFM0MsU0FBU0MsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxxQkFDRSw4REFBQ0gsa0VBQVlBO2tCQUNYLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwLW5leHQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJy4uL3NyYy9jb250ZXh0L0F1dGhDb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gIChcbiAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/context/AuthContext.js":
/*!************************************!*\
  !*** ./src/context/AuthContext.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Context 생성\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n// AuthProvider 컴포넌트\nconst AuthProvider = ({ children })=>{\n    const [accessToken, setAccessToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            accessToken,\n            setAccessToken\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/itstime/Client/SpringGreens-Client/test/src/context/AuthContext.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, undefined);\n};\n// Custom hook to use the AuthContext\nconst useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9BdXRoQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1FO0FBRW5FLGFBQWE7QUFDYixNQUFNSSw0QkFBY0gsb0RBQWFBO0FBRWpDLG9CQUFvQjtBQUNiLE1BQU1JLGVBQWUsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDckMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdMLCtDQUFRQSxDQUFDO0lBRS9DLHFCQUNJLDhEQUFDQyxZQUFZSyxRQUFRO1FBQUNDLE9BQU87WUFBRUg7WUFBYUM7UUFBZTtrQkFDdERGOzs7Ozs7QUFHYixFQUFFO0FBRUYscUNBQXFDO0FBQzlCLE1BQU1LLFVBQVUsSUFBTVQsaURBQVVBLENBQUNFLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXAtbmV4dC8uL3NyYy9jb250ZXh0L0F1dGhDb250ZXh0LmpzPzRiYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG4vLyBDb250ZXh0IOyDneyEsVxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbi8vIEF1dGhQcm92aWRlciDsu7Ttj6zrhIztirhcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgW2FjY2Vzc1Rva2VuLCBzZXRBY2Nlc3NUb2tlbl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBhY2Nlc3NUb2tlbiwgc2V0QWNjZXNzVG9rZW4gfX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbn07XG5cbi8vIEN1c3RvbSBob29rIHRvIHVzZSB0aGUgQXV0aENvbnRleHRcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJhY2Nlc3NUb2tlbiIsInNldEFjY2Vzc1Rva2VuIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/AuthContext.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();