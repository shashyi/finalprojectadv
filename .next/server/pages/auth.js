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
exports.id = "pages/auth";
exports.ids = ["pages/auth"];
exports.modules = {

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyAhla2K2N6djPBDGjEV8m6HfyqMF1lZT14\",\n    authDomain: \"adv-final-project-b8937.firebaseapp.com\",\n    projectId: \"adv-final-project-b8937\",\n    storageBucket: \"adv-final-project-b8937.appspot.com\",\n    messagingSenderId: \"964300728139\",\n    appId: \"1:964300728139:web:639e71cb776e4fca232ace\",\n    measurementId: \"G-B45DMDL4EJ\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QztBQUNMO0FBQ1U7QUFFbEQsTUFBTUcsY0FBYyxHQUFHO0lBQ3JCQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pEQyxVQUFVLEVBQUUseUNBQXlDO0lBQ3JEQyxTQUFTLEVBQUUseUJBQXlCO0lBQ3BDQyxhQUFhLEVBQUUscUNBQXFDO0lBQ3BEQyxpQkFBaUIsRUFBRSxjQUFjO0lBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0lBQ2xEQyxhQUFhLEVBQUUsY0FBYztDQUM5QjtBQUVDLE1BQU1DLEdBQUcsR0FBR1gsMkRBQWEsQ0FBQ0csY0FBYyxDQUFDO0FBRTNDLE1BQU1TLEVBQUUsR0FBR1YsZ0VBQVksQ0FBQ1MsR0FBRyxDQUFDO0FBRVQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJlYmFzZS10b2RvLy4vZmlyZWJhc2UuanM/NGQ5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjsgXHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lBaGxhMksyTjZkalBCREdqRVY4bTZIZnlxTUYxbFpUMTRcIixcclxuICBhdXRoRG9tYWluOiBcImFkdi1maW5hbC1wcm9qZWN0LWI4OTM3LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJhZHYtZmluYWwtcHJvamVjdC1iODkzN1wiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwiYWR2LWZpbmFsLXByb2plY3QtYjg5MzcuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI5NjQzMDA3MjgxMzlcIixcclxuICBhcHBJZDogXCIxOjk2NDMwMDcyODEzOTp3ZWI6NjM5ZTcxY2I3NzZlNGZjYTIzMmFjZVwiLFxyXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1CNDVETURMNEVKXCJcclxufTtcclxuXHJcbiAgY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcblxyXG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xyXG5cclxuZXhwb3J0IHsgYXBwLCBkYiB9OyJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsImdldEZpcmVzdG9yZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImRiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/auth.js":
/*!***********************!*\
  !*** ./pages/auth.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n//pages/auth.js//\n\n\n\n\n\nconst AuthPage = ()=>{\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleLogin = async ()=>{\n        if (!email || !password) {\n            setError(\"Email and password are required.\");\n            return;\n        }\n        setLoading(true);\n        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(_firebase__WEBPACK_IMPORTED_MODULE_4__.app);\n        setError(\"\");\n        try {\n            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(auth, email, password);\n            router.push(\"/\");\n        } catch (error) {\n            setError(error.message);\n        } finally{\n            setLoading(false);\n        }\n    };\n    const handleRegister = async ()=>{\n        if (!email || !password) {\n            setError(\"Email and password are required.\");\n            return;\n        }\n        setLoading(true);\n        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(_firebase__WEBPACK_IMPORTED_MODULE_4__.app);\n        setError(\"\");\n        try {\n            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(auth, email, password);\n            router.push(\"/\");\n        } catch (error) {\n            setError(error.message);\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"auth-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Login / Register\"\n            }, void 0, false, {\n                fileName: \"C:\\\\CFLog\\\\pages\\\\auth.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    color: \"red\"\n                },\n                children: error\n            }, void 0, false, {\n                fileName: \"C:\\\\CFLog\\\\pages\\\\auth.js\",\n                lineNumber: 58,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"email\",\n                placeholder: \"Email\",\n                value: email,\n                onChange: (e)=>setEmail(e.target.value),\n                className: \"auth-input\"\n            }, void 0, false, {\n                fileName: \"C:\\\\CFLog\\\\pages\\\\auth.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"password\",\n                placeholder: \"Password\",\n                value: password,\n                onChange: (e)=>setPassword(e.target.value),\n                className: \"auth-input\"\n            }, void 0, false, {\n                fileName: \"C:\\\\CFLog\\\\pages\\\\auth.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleLogin,\n                disabled: loading,\n                className: \"auth-btn\",\n                children: loading ? \"Logging in...\" : \"Login\"\n            }, void 0, false, {\n                fileName: \"C:\\\\CFLog\\\\pages\\\\auth.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleRegister,\n                disabled: loading,\n                className: \"auth-btn\",\n                children: loading ? \"Registering...\" : \"Register\"\n            }, void 0, false, {\n                fileName: \"C:\\\\CFLog\\\\pages\\\\auth.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\CFLog\\\\pages\\\\auth.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUMsVUFBVTtnQkFDZkMsV0FBVyxFQUFDLFVBQVU7Z0JBQ3RCQyxLQUFLLEVBQUVyQixRQUFRO2dCQUNmc0IsUUFBUSxFQUFFLENBQUNDLENBQUMsR0FBS3RCLFdBQVcsQ0FBQ3NCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLLENBQUM7Z0JBQzVDUixTQUFTLEVBQUMsWUFBWTs7Ozs7eUJBQ3RCOzBCQUdGLDhEQUFDWSxRQUFNO2dCQUFDQyxPQUFPLEVBQUVuQixXQUFXO2dCQUFFb0IsUUFBUSxFQUFFekIsT0FBTztnQkFBRVcsU0FBUyxFQUFDLFVBQVU7MEJBQ2xFWCxPQUFPLEdBQUcsZUFBZSxHQUFHLE9BQU87Ozs7O3lCQUM3QjswQkFDVCw4REFBQ3VCLFFBQU07Z0JBQUNDLE9BQU8sRUFBRWYsY0FBYztnQkFBRWdCLFFBQVEsRUFBRXpCLE9BQU87Z0JBQUVXLFNBQVMsRUFBQyxVQUFVOzBCQUNyRVgsT0FBTyxHQUFHLGdCQUFnQixHQUFHLFVBQVU7Ozs7O3lCQUNqQzs7Ozs7O2lCQUNMLENBQ047QUFDSixDQUFDO0FBRUQsaUVBQWVMLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpcmViYXNlLXRvZG8vLi9wYWdlcy9hdXRoLmpzP2RmNTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy9wYWdlcy9hdXRoLmpzLy9cclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldEF1dGgsIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgYXBwIH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7IFxyXG5cclxuY29uc3QgQXV0aFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkKSB7XHJcbiAgICAgIHNldEVycm9yKFwiRW1haWwgYW5kIHBhc3N3b3JkIGFyZSByZXF1aXJlZC5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApOyBcclxuICAgIHNldEVycm9yKFwiXCIpOyBcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpOyBcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpOyBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpOyAgXHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVnaXN0ZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCkge1xyXG4gICAgICBzZXRFcnJvcihcIkVtYWlsIGFuZCBwYXNzd29yZCBhcmUgcmVxdWlyZWQuXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTsgXHJcbiAgICBzZXRFcnJvcihcIlwiKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKTsgIFxyXG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7IFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7ICBcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtY29udGFpbmVyXCI+XHJcbiAgICAgIDxoMT5Mb2dpbiAvIFJlZ2lzdGVyPC9oMT5cclxuICAgICAgXHJcbiAgICAgIHt9XHJcbiAgICAgIHtlcnJvciAmJiA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT57ZXJyb3J9PC9wPn1cclxuICAgICAgXHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImF1dGgtaW5wdXRcIlxyXG4gICAgICAvPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJhdXRoLWlucHV0XCJcclxuICAgICAgLz5cclxuICAgICAgXHJcbiAgICAgIHt9XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9naW59IGRpc2FibGVkPXtsb2FkaW5nfSBjbGFzc05hbWU9XCJhdXRoLWJ0blwiPlxyXG4gICAgICAgIHtsb2FkaW5nID8gXCJMb2dnaW5nIGluLi4uXCIgOiBcIkxvZ2luXCJ9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVJlZ2lzdGVyfSBkaXNhYmxlZD17bG9hZGluZ30gY2xhc3NOYW1lPVwiYXV0aC1idG5cIj5cclxuICAgICAgICB7bG9hZGluZyA/IFwiUmVnaXN0ZXJpbmcuLi5cIiA6IFwiUmVnaXN0ZXJcIn1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImdldEF1dGgiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInVzZVJvdXRlciIsImFwcCIsIkF1dGhQYWdlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJoYW5kbGVMb2dpbiIsImF1dGgiLCJwdXNoIiwibWVzc2FnZSIsImhhbmRsZVJlZ2lzdGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwic3R5bGUiLCJjb2xvciIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth.js\n");

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

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth.js"));
module.exports = __webpack_exports__;

})();