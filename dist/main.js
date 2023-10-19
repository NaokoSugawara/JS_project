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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n// import Example from \"./scripts/example\";\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     // console.log(\"Hello, this is's from index.js\");\n//     console.log(\"HELLO WORLD\");\n//     const main = document.getElementById(\"main\")\n//     new Example(main);\n// })\n\n\nconst canvas = document.getElementById('runner_game');\nconst game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\ngame.drawBaseline();\ngame.player.drawSquare();\ndocument.addEventListener('keydown', e => {\n  if (e.code === 'Space') {\n    game.gameLoop();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtDO0FBRWxDLE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDO0FBQ3JELE1BQU1DLElBQUksR0FBRyxJQUFJSixxREFBSSxDQUFDQyxNQUFNLENBQUM7QUFFN0JHLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7QUFDbkJELElBQUksQ0FBQ0UsTUFBTSxDQUFDQyxVQUFVLENBQUMsQ0FBQztBQUV4QkwsUUFBUSxDQUFDTSxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUdDLENBQUMsSUFBSztFQUN4QyxJQUFJQSxDQUFDLENBQUNDLElBQUksS0FBSyxPQUFPLEVBQUU7SUFDcEJOLElBQUksQ0FBQ08sUUFBUSxDQUFDLENBQUM7RUFDbkI7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9leGFtcGxlXCI7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhcIkhlbGxvLCB0aGlzIGlzJ3MgZnJvbSBpbmRleC5qc1wiKTtcbi8vICAgICBjb25zb2xlLmxvZyhcIkhFTExPIFdPUkxEXCIpO1xuLy8gICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIilcbi8vICAgICBuZXcgRXhhbXBsZShtYWluKTtcbi8vIH0pXG5cbmltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncnVubmVyX2dhbWUnKTtcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xuXG5nYW1lLmRyYXdCYXNlbGluZSgpO1xuZ2FtZS5wbGF5ZXIuZHJhd1NxdWFyZSgpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS5jb2RlID09PSAnU3BhY2UnKSB7XG4gICAgICAgIGdhbWUuZ2FtZUxvb3AoKTtcbiAgICB9XG59KTtcblxuXG5cblxuXG4iXSwibmFtZXMiOlsiR2FtZSIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnYW1lIiwiZHJhd0Jhc2VsaW5lIiwicGxheWVyIiwiZHJhd1NxdWFyZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29kZSIsImdhbWVMb29wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n\nclass Game {\n  constructor(canvas) {\n    this.canvas = canvas;\n    this.ctx = canvas.getContext(\"2d\");\n    this.x = 50; // initial x position\n    this.y = canvas.height - 350; // Initial Y position\n\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this, this.canvas, this.ctx, this.x, this.y);\n  }\n  drawBaseline(x, y) {\n    this.ctx.beginPath();\n    this.ctx.moveTo(50, 500);\n    this.ctx.lineTo(750, 500);\n    this.ctx.lineWidth = 1;\n    this.ctx.strokeStyle = \"black\";\n    this.ctx.stroke();\n  }\n  gameLoop() {\n    debugger;\n    this.player.update();\n    this.player.draw();\n  }\n\n  // jump() {\n  // }\n\n  // animate(){\n\n  //     requestAnimationFrame(this.animate);\n  //     // this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);\n  //     game.drawBaseline();\n  //     game.drawCharactor();\n  // }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQThCO0FBRWYsTUFBTUMsSUFBSSxDQUFDO0VBRXRCQyxXQUFXQSxDQUFDQyxNQUFNLEVBQUM7SUFDZixJQUFJLENBQUNBLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ2xDLElBQUksQ0FBQ0MsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxDQUFDQyxDQUFDLEdBQUdKLE1BQU0sQ0FBQ0ssTUFBTSxHQUFDLEdBQUcsQ0FBQyxDQUFDOztJQUU1QixJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJVCwrQ0FBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUNHLE1BQU0sRUFBRSxJQUFJLENBQUNDLEdBQUcsRUFBRSxJQUFJLENBQUNFLENBQUMsRUFBRSxJQUFJLENBQUNDLENBQUMsQ0FBQztFQUN6RTtFQUVBRyxZQUFZQSxDQUFDSixDQUFDLEVBQUVDLENBQUMsRUFBQztJQUNkLElBQUksQ0FBQ0gsR0FBRyxDQUFDTyxTQUFTLENBQUMsQ0FBQztJQUNwQixJQUFJLENBQUNQLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUM7SUFDeEIsSUFBSSxDQUFDUixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ3pCLElBQUksQ0FBQ1QsR0FBRyxDQUFDVSxTQUFTLEdBQUcsQ0FBQztJQUN0QixJQUFJLENBQUNWLEdBQUcsQ0FBQ1csV0FBVyxHQUFHLE9BQU87SUFDOUIsSUFBSSxDQUFDWCxHQUFHLENBQUNZLE1BQU0sQ0FBQyxDQUFDO0VBQ3JCO0VBRUFDLFFBQVFBLENBQUEsRUFBRTtJQUNOO0lBQ0EsSUFBSSxDQUFDUixNQUFNLENBQUNTLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLElBQUksQ0FBQ1QsTUFBTSxDQUFDVSxJQUFJLENBQUMsQ0FBQztFQUN0Qjs7RUFJQTtFQUNBOztFQUVBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpe1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLnggPSA1MDsgLy8gaW5pdGlhbCB4IHBvc2l0aW9uXG4gICAgICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQtMzUwOyAvLyBJbml0aWFsIFkgcG9zaXRpb25cblxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcywgdGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuXG4gICAgZHJhd0Jhc2VsaW5lKHgsIHkpe1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKDUwLCA1MDApO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8oNzUwLCA1MDApO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgZ2FtZUxvb3AoKXtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgdGhpcy5wbGF5ZXIudXBkYXRlKCk7XG4gICAgICAgIHRoaXMucGxheWVyLmRyYXcoKTtcbiAgICB9XG4gICBcblxuXG4gICAgLy8ganVtcCgpIHtcbiAgICAvLyB9XG5cbiAgICAvLyBhbmltYXRlKCl7XG5cbiAgICAvLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgLy8gICAgIC8vIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy5oZWlnaHQsIHRoaXMuY2FudmFzLndpZHRoKTtcbiAgICAvLyAgICAgZ2FtZS5kcmF3QmFzZWxpbmUoKTtcbiAgICAvLyAgICAgZ2FtZS5kcmF3Q2hhcmFjdG9yKCk7XG4gICAgLy8gfVxuXG59XG5cbiJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwieCIsInkiLCJoZWlnaHQiLCJwbGF5ZXIiLCJkcmF3QmFzZWxpbmUiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsImdhbWVMb29wIiwidXBkYXRlIiwiZHJhdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Player; }\n/* harmony export */ });\nconst square = {\n  width: 30,\n  height: 30,\n  jumpHeight: 100,\n  jumping: true,\n  jumpStartY: 0,\n  jumpSpeed: 5,\n  verocity: 0\n};\nclass Player {\n  constructor(game, canvas, ctx, x, y) {\n    this.game = game;\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.x = x;\n    this.y = y;\n  }\n\n  // Update and draw the square\n  update() {\n    if (square.jumping) {\n      this.y -= square.jumpSpeed;\n      if (this.y <= square.jumpStartY - square.jumpHeight) {\n        square.jumping = false;\n        debugger;\n      }\n    } else {\n      // debugger;\n      // this.y += square.jumpSpeed;\n      if (this.y > this.canvas.height - square.height) {\n        this.y = this.canvas.height - square.height;\n      }\n    }\n  }\n  drawSquare() {\n    // Draw the square\n    this.ctx.fillStyle = 'green';\n    this.ctx.fillRect(this.x, this.y, square.width, square.height);\n  }\n  draw() {\n    // Clear the canvas\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\n    // Draw baseline\n    this.game.drawBaseline();\n\n    // Draw the square\n    this.drawSquare();\n\n    // Request the next frame\n    debugger;\n    requestAnimationFrame(this.game.gameLoop.bind(this.game));\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE1BQU1BLE1BQU0sR0FBRztFQUNYQyxLQUFLLEVBQUUsRUFBRTtFQUNUQyxNQUFNLEVBQUUsRUFBRTtFQUNWQyxVQUFVLEVBQUUsR0FBRztFQUNmQyxPQUFPLEVBQUUsSUFBSTtFQUNiQyxVQUFVLEVBQUUsQ0FBQztFQUNiQyxTQUFTLEVBQUUsQ0FBQztFQUNaQyxRQUFRLEVBQUU7QUFDZCxDQUFDO0FBRWMsTUFBTUMsTUFBTSxDQUFDO0VBRXhCQyxXQUFXQSxDQUFDQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsR0FBRyxFQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBQztJQUNoQyxJQUFJLENBQUNKLElBQUksR0FBR0EsSUFBSTtJQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0MsQ0FBQyxHQUFHQSxDQUFDO0lBQ1YsSUFBSSxDQUFDQyxDQUFDLEdBQUdBLENBQUM7RUFDZDs7RUFFQTtFQUNBQyxNQUFNQSxDQUFBLEVBQUc7SUFDTCxJQUFJZixNQUFNLENBQUNJLE9BQU8sRUFBRTtNQUNaLElBQUksQ0FBQ1UsQ0FBQyxJQUFJZCxNQUFNLENBQUNNLFNBQVM7TUFDMUIsSUFBSSxJQUFJLENBQUNRLENBQUMsSUFBSWQsTUFBTSxDQUFDSyxVQUFVLEdBQUdMLE1BQU0sQ0FBQ0csVUFBVSxFQUFFO1FBQ3JESCxNQUFNLENBQUNJLE9BQU8sR0FBRyxLQUFLO1FBQ3RCO01BQ0o7SUFDSixDQUFDLE1BQU07TUFDSDtNQUNJO01BQ0EsSUFBSSxJQUFJLENBQUNVLENBQUMsR0FBRyxJQUFJLENBQUNILE1BQU0sQ0FBQ1QsTUFBTSxHQUFHRixNQUFNLENBQUNFLE1BQU0sRUFBRTtRQUM3QyxJQUFJLENBQUNZLENBQUMsR0FBRyxJQUFJLENBQUNILE1BQU0sQ0FBQ1QsTUFBTSxHQUFHRixNQUFNLENBQUNFLE1BQU07TUFDbkQ7SUFDSjtFQUNKO0VBRUFjLFVBQVVBLENBQUEsRUFBRztJQUNUO0lBQ0EsSUFBSSxDQUFDSixHQUFHLENBQUNLLFNBQVMsR0FBRyxPQUFPO0lBQzVCLElBQUksQ0FBQ0wsR0FBRyxDQUFDTSxRQUFRLENBQUMsSUFBSSxDQUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDQyxDQUFDLEVBQUVkLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFRCxNQUFNLENBQUNFLE1BQU0sQ0FBQztFQUNsRTtFQUVBaUIsSUFBSUEsQ0FBQSxFQUFHO0lBQ0g7SUFDQSxJQUFJLENBQUNQLEdBQUcsQ0FBQ1EsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDVCxNQUFNLENBQUNWLEtBQUssRUFBRSxJQUFJLENBQUNVLE1BQU0sQ0FBQ1QsTUFBTSxDQUFDOztJQUUvRDtJQUNBLElBQUksQ0FBQ1EsSUFBSSxDQUFDVyxZQUFZLENBQUMsQ0FBQzs7SUFFeEI7SUFDQSxJQUFJLENBQUNMLFVBQVUsQ0FBQyxDQUFDOztJQUVqQjtJQUNBO0lBQ0FNLHFCQUFxQixDQUFDLElBQUksQ0FBQ1osSUFBSSxDQUFDYSxRQUFRLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNkLElBQUksQ0FBQyxDQUFDO0VBQzdEO0FBR0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvcGxheWVyLmpzPzY0NzEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBzcXVhcmUgPSB7XG4gICAgd2lkdGg6IDMwLFxuICAgIGhlaWdodDogMzAsXG4gICAganVtcEhlaWdodDogMTAwLFxuICAgIGp1bXBpbmc6IHRydWUsXG4gICAganVtcFN0YXJ0WTogMCxcbiAgICBqdW1wU3BlZWQ6IDUsXG4gICAgdmVyb2NpdHk6IDBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG5cbiAgICBjb25zdHJ1Y3RvcihnYW1lLCBjYW52YXMsIGN0eCwgeCwgeSl7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgYW5kIGRyYXcgdGhlIHNxdWFyZVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHNxdWFyZS5qdW1waW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy55IC09IHNxdWFyZS5qdW1wU3BlZWQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMueSA8PSBzcXVhcmUuanVtcFN0YXJ0WSAtIHNxdWFyZS5qdW1wSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMueSArPSBzcXVhcmUuanVtcFNwZWVkO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnkgPiB0aGlzLmNhbnZhcy5oZWlnaHQgLSBzcXVhcmUuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IHRoaXMuY2FudmFzLmhlaWdodCAtIHNxdWFyZS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3U3F1YXJlKCkge1xuICAgICAgICAvLyBEcmF3IHRoZSBzcXVhcmVcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ2dyZWVuJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHNxdWFyZS53aWR0aCwgc3F1YXJlLmhlaWdodCk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgLy8gQ2xlYXIgdGhlIGNhbnZhc1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgLy8gRHJhdyBiYXNlbGluZVxuICAgICAgICB0aGlzLmdhbWUuZHJhd0Jhc2VsaW5lKCk7XG5cbiAgICAgICAgLy8gRHJhdyB0aGUgc3F1YXJlXG4gICAgICAgIHRoaXMuZHJhd1NxdWFyZSgpO1xuXG4gICAgICAgIC8vIFJlcXVlc3QgdGhlIG5leHQgZnJhbWVcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZS5nYW1lTG9vcC5iaW5kKHRoaXMuZ2FtZSkpO1xuICAgIH1cblxuXG59Il0sIm5hbWVzIjpbInNxdWFyZSIsIndpZHRoIiwiaGVpZ2h0IiwianVtcEhlaWdodCIsImp1bXBpbmciLCJqdW1wU3RhcnRZIiwianVtcFNwZWVkIiwidmVyb2NpdHkiLCJQbGF5ZXIiLCJjb25zdHJ1Y3RvciIsImdhbWUiLCJjYW52YXMiLCJjdHgiLCJ4IiwieSIsInVwZGF0ZSIsImRyYXdTcXVhcmUiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXciLCJjbGVhclJlY3QiLCJkcmF3QmFzZWxpbmUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJnYW1lTG9vcCIsImJpbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

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