/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n// import Example from \"./scripts/example\";\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     // console.log(\"Hello, this is's from index.js\");\n//     console.log(\"HELLO WORLD\");\n//     const main = document.getElementById(\"main\")\n//     new Example(main);\n// })\n\n\nconst canvas = document.getElementById('runner_game');\nconst game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\ngame.gameLoop();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtDO0FBRWxDLE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDO0FBQ3JELE1BQU1DLElBQUksR0FBRyxJQUFJSixxREFBSSxDQUFDQyxNQUFNLENBQUM7QUFDN0JHLElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9leGFtcGxlXCI7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhcIkhlbGxvLCB0aGlzIGlzJ3MgZnJvbSBpbmRleC5qc1wiKTtcbi8vICAgICBjb25zb2xlLmxvZyhcIkhFTExPIFdPUkxEXCIpO1xuLy8gICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIilcbi8vICAgICBuZXcgRXhhbXBsZShtYWluKTtcbi8vIH0pXG5cbmltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncnVubmVyX2dhbWUnKTtcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xuZ2FtZS5nYW1lTG9vcCgpO1xuXG5cblxuXG4iXSwibmFtZXMiOlsiR2FtZSIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnYW1lIiwiZ2FtZUxvb3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\nconst square = {\n  width: 30,\n  height: 30,\n  jumpHeight: 100,\n  jumping: false,\n  jumpStartY: 0,\n  jumpSpeed: 5\n};\nclass Game {\n  constructor(canvas) {\n    this.canvas = canvas;\n    this.ctx = canvas.getContext(\"2d\");\n    this.x = 50; // initial x position\n    this.y = canvas.height - 200; // Initial Y position\n    // this.x = this.canvas.width / 3;\n    // this.y = this.canvas.height / 2;\n    this.vel = 0;\n\n    // this.obstacles = new Obstacles(this.dimensions);\n  }\n\n  drawBaseline() {\n    this.ctx.beginPath();\n    this.ctx.moveTo(50, 500);\n    this.ctx.lineTo(750, 500);\n    this.ctx.lineWidth = 1;\n    this.ctx.strokeStyle = \"black\";\n    this.ctx.stroke();\n  }\n\n  // drawCharactor(){\n  //     this.ctx.fillStyle = \"purple\";\n  //     // ctx.fillRect(this.x, this.y, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT);\n  //     this.ctx.fillRect(100, 450, 50, 50 );\n  // }\n\n  // Update and draw the square\n  update() {\n    // debugger\n    if (square.jumping) {\n      this.y -= square.jumpSpeed;\n      if (this.y <= square.jumpStartY - square.jumpHeight) {\n        square.jumping = false;\n      }\n    } else {\n      square.y += square.jumpSpeed;\n      if (this.y > this.canvas.height - square.height) {\n        this.y = this.canvas.height - square.height;\n      }\n    }\n  }\n  draw() {\n    // Clear the canvas\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\n    // Draw baseline\n    this.drawBaseline();\n\n    // Draw the square\n    // debugger\n    this.ctx.fillStyle = 'blue';\n    this.ctx.fillRect(this.x, this.y, square.width, square.height);\n\n    // Request the next frame\n    requestAnimationFrame(gameLoop);\n  }\n  gameLoop() {\n    this.update();\n    this.draw();\n  }\n\n  // Start the game loop\n\n  // jump() {\n  // }\n\n  // animate(){\n\n  //     requestAnimationFrame(this.animate);\n  //     // this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);\n  //     game.drawBaseline();\n  //     game.drawCharactor();\n  // }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDO0VBQ2Y7O0VBRUE7O0VBT0E7RUFDQTs7RUFFQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCBzcXVhcmUgPSB7XG4gICAgd2lkdGg6IDMwLFxuICAgIGhlaWdodDogMzAsXG4gICAganVtcEhlaWdodDogMTAwLFxuICAgIGp1bXBpbmc6IGZhbHNlLFxuICAgIGp1bXBTdGFydFk6IDAsXG4gICAganVtcFNwZWVkOiA1LFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcyl7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMueCA9IDUwOyAvLyBpbml0aWFsIHggcG9zaXRpb25cbiAgICAgICAgdGhpcy55ID0gY2FudmFzLmhlaWdodC0yMDA7IC8vIEluaXRpYWwgWSBwb3NpdGlvblxuICAgICAgICAvLyB0aGlzLnggPSB0aGlzLmNhbnZhcy53aWR0aCAvIDM7XG4gICAgICAgIC8vIHRoaXMueSA9IHRoaXMuY2FudmFzLmhlaWdodCAvIDI7XG4gICAgICAgIHRoaXMudmVsID0gMDtcbiAgICAgICAgXG4gICAgICAgIC8vIHRoaXMub2JzdGFjbGVzID0gbmV3IE9ic3RhY2xlcyh0aGlzLmRpbWVuc2lvbnMpO1xuXG4gICAgfVxuXG4gICAgZHJhd0Jhc2VsaW5lKCl7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTAsIDUwMCk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyg3NTAsIDUwMCk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICAvLyBkcmF3Q2hhcmFjdG9yKCl7XG4gICAgLy8gICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicHVycGxlXCI7XG4gICAgLy8gICAgIC8vIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgQ09OU1RBTlRTLkJJUkRfV0lEVEgsIENPTlNUQU5UUy5CSVJEX0hFSUdIVCk7XG4gICAgLy8gICAgIHRoaXMuY3R4LmZpbGxSZWN0KDEwMCwgNDUwLCA1MCwgNTAgKTtcbiAgICAvLyB9XG5cblxuICAgIC8vIFVwZGF0ZSBhbmQgZHJhdyB0aGUgc3F1YXJlXG4gICAgdXBkYXRlKCkge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICBpZiAoc3F1YXJlLmp1bXBpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnkgLT0gc3F1YXJlLmp1bXBTcGVlZDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy55IDw9IHNxdWFyZS5qdW1wU3RhcnRZIC0gc3F1YXJlLmp1bXBIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBzcXVhcmUuanVtcGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNxdWFyZS55ICs9IHNxdWFyZS5qdW1wU3BlZWQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMueSA+IHRoaXMuY2FudmFzLmhlaWdodCAtIHNxdWFyZS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gc3F1YXJlLmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIC8vIENsZWFyIHRoZSBjYW52YXNcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIERyYXcgYmFzZWxpbmVcbiAgICAgICAgdGhpcy5kcmF3QmFzZWxpbmUoKTtcblxuICAgICAgICAvLyBEcmF3IHRoZSBzcXVhcmVcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ2JsdWUnO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgc3F1YXJlLndpZHRoLCBzcXVhcmUuaGVpZ2h0KTtcblxuICAgICAgICAvLyBSZXF1ZXN0IHRoZSBuZXh0IGZyYW1lXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgfVxuXG4gICAgZ2FtZUxvb3AoKXtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG4gICAgLy8gU3RhcnQgdGhlIGdhbWUgbG9vcFxuICAgXG5cblxuXG5cblxuICAgIC8vIGp1bXAoKSB7XG4gICAgLy8gfVxuXG4gICAgLy8gYW5pbWF0ZSgpe1xuXG4gICAgLy8gICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgIC8vICAgICAvLyB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMuaGVpZ2h0LCB0aGlzLmNhbnZhcy53aWR0aCk7XG4gICAgLy8gICAgIGdhbWUuZHJhd0Jhc2VsaW5lKCk7XG4gICAgLy8gICAgIGdhbWUuZHJhd0NoYXJhY3RvcigpO1xuICAgIC8vIH1cblxufVxuXG4iXSwibmFtZXMiOlsic3F1YXJlIiwid2lkdGgiLCJoZWlnaHQiLCJqdW1wSGVpZ2h0IiwianVtcGluZyIsImp1bXBTdGFydFkiLCJqdW1wU3BlZWQiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwieCIsInkiLCJ2ZWwiLCJkcmF3QmFzZWxpbmUiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsInVwZGF0ZSIsImRyYXciLCJjbGVhclJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImdhbWVMb29wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;