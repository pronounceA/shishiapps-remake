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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pagePath.ts":
/*!*************************!*\
  !*** ./src/pagePath.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PagePath\": () => (/* binding */ PagePath)\n/* harmony export */ });\nconst PagePath = {\n    DASHBOARD: \"/dashboard\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZVBhdGgudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLFFBQVEsR0FBRztJQUN0QkMsU0FBUyxFQUFFLFlBQVk7Q0FDeEIsQ0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL3NoaXNoaWFwcHMtcmVtYWtlLy4vc3JjL3BhZ2VQYXRoLnRzPzljOWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFBhZ2VQYXRoID0ge1xuICBEQVNIQk9BUkQ6ICcvZGFzaGJvYXJkJyxcbn0gYXMgY29uc3RcbiJdLCJuYW1lcyI6WyJQYWdlUGF0aCIsIkRBU0hCT0FSRCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pagePath.ts\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pagePath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pagePath */ \"./src/pagePath.ts\");\n\n\n\nconst RootPage = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const setRedirectUrl = ()=>{\n        const redirectUrl = _pagePath__WEBPACK_IMPORTED_MODULE_2__.PagePath.DASHBOARD;\n        return redirectUrl;\n    };\n    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(()=>{\n        const redirectUrl = setRedirectUrl();\n        router.push(redirectUrl);\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, []);\n    return null;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RootPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5QjtBQUdjO0FBRUQ7QUFFdEMsTUFBTUcsUUFBUSxHQUFhLElBQU07SUFDL0IsTUFBTUMsTUFBTSxHQUFHSCxzREFBUyxFQUFFO0lBRTFCLE1BQU1JLGNBQWMsR0FBRyxJQUFNO1FBQzNCLE1BQU1DLFdBQVcsR0FBWUoseURBQWtCO1FBQy9DLE9BQU9JLFdBQVc7SUFDcEIsQ0FBQztJQUVETixzREFBZSxDQUFDLElBQU07UUFDbEIsTUFBTU0sV0FBVyxHQUFXRCxjQUFjLEVBQUU7UUFDNUNELE1BQU0sQ0FBQ0ssSUFBSSxDQUFDSCxXQUFXLENBQUM7SUFDMUIsdURBQXVEO0lBQ3pELENBQUMsRUFBRSxFQUFFLENBQUM7SUFFTixPQUFPLElBQUk7QUFDYixDQUFDO0FBRUQsaUVBQWVILFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGlzaGlhcHBzLXJlbWFrZS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCB7IFBhZ2VQYXRoIH0gZnJvbSAnLi4vcGFnZVBhdGgnXG5cbmNvbnN0IFJvb3RQYWdlOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCBzZXRSZWRpcmVjdFVybCA9ICgpID0+IHtcbiAgICBjb25zdCByZWRpcmVjdFVybDogc3RyaW5nID0gIFBhZ2VQYXRoLkRBU0hCT0FSRFxuICAgIHJldHVybiByZWRpcmVjdFVybFxuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IHJlZGlyZWN0VXJsOiBzdHJpbmcgPSBzZXRSZWRpcmVjdFVybCgpXG4gICAgICByb3V0ZXIucHVzaChyZWRpcmVjdFVybClcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtdKVxuXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvb3RQYWdlXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJQYWdlUGF0aCIsIlJvb3RQYWdlIiwicm91dGVyIiwic2V0UmVkaXJlY3RVcmwiLCJyZWRpcmVjdFVybCIsIkRBU0hCT0FSRCIsInVzZUVmZmVjdCIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();