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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n// import Example from \"./scripts/example\";\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     // console.log(\"Hello, this is's from index.js\");\n//     console.log(\"HELLO WORLD\");\n//     const main = document.getElementById(\"main\")\n//     new Example(main);\n// })\n\n\nconst canvas = document.getElementById('runner_game');\nconst game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n\n// game.drawBaseline();\n// game.player.drawSquare();\n\n// document.addEventListener('keydown', (e) => {\n//     if (e.code === 'Space') {\n//         const jumping = true;\n//         game.gameLoop(jumping);\n//     }\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtDO0FBRWxDLE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDO0FBQ3JELE1BQU1DLElBQUksR0FBRyxJQUFJSixxREFBSSxDQUFDQyxNQUFNLENBQUM7O0FBRTdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiO1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4vLyAgICAgLy8gY29uc29sZS5sb2coXCJIZWxsbywgdGhpcyBpcydzIGZyb20gaW5kZXguanNcIik7XG4vLyAgICAgY29uc29sZS5sb2coXCJIRUxMTyBXT1JMRFwiKTtcbi8vICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpXG4vLyAgICAgbmV3IEV4YW1wbGUobWFpbik7XG4vLyB9KVxuXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3J1bm5lcl9nYW1lJyk7XG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcblxuLy8gZ2FtZS5kcmF3QmFzZWxpbmUoKTtcbi8vIGdhbWUucGxheWVyLmRyYXdTcXVhcmUoKTtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4vLyAgICAgaWYgKGUuY29kZSA9PT0gJ1NwYWNlJykge1xuLy8gICAgICAgICBjb25zdCBqdW1waW5nID0gdHJ1ZTtcbi8vICAgICAgICAgZ2FtZS5nYW1lTG9vcChqdW1waW5nKTtcbi8vICAgICB9XG4vLyB9KTtcblxuXG5cblxuXG4iXSwibmFtZXMiOlsiR2FtZSIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n\nclass Game {\n  constructor(canvas) {\n    this.canvas = canvas;\n    this.ctx = canvas.getContext(\"2d\");\n    this.x = 375; // initial x position\n    this.y = canvas.height - 150; // Initial Y position\n\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this, this.canvas, this.ctx, this.x, this.y);\n    this.img = new Image();\n    this.img.src = './src/img/background.jpg';\n    this.drawBackground(this.img);\n    // debugger\n    // this.img.addEventListener(\n    //     \"load\",\n\n    //     this.ctx.drawImage.call(this, args),\n    //     false,\n    // );\n\n    this.gameLoop();\n  }\n  drawBaseline() {\n    this.ctx.beginPath();\n    this.ctx.moveTo(50, 500);\n    this.ctx.lineTo(750, 500);\n    this.ctx.lineWidth = 1;\n    this.ctx.strokeStyle = \"black\";\n    this.ctx.stroke();\n  }\n  gameLoop(img) {\n    this.player.draw();\n    this.drawBaseline();\n    requestAnimationFrame(this.gameLoop.bind(this));\n  }\n  drawBackground(img) {\n    // debugger\n    this.ctx.drawImage(img, 0, 0);\n    // img.onload = () => {\n    //     this.ctx.drawImage(img.src, 0, 0);\n    // }\n    // img.onload();\n  }\n\n  // jump() {\n  // }\n\n  // animate(){\n\n  //     requestAnimationFrame(this.animate);\n  //     // this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);\n  //     game.drawBaseline();\n  //     game.drawCharactor();\n  // }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQThCO0FBRWYsTUFBTUMsSUFBSSxDQUFDO0VBRXRCQyxXQUFXQSxDQUFDQyxNQUFNLEVBQUM7SUFDZixJQUFJLENBQUNBLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ2xDLElBQUksQ0FBQ0MsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsSUFBSSxDQUFDQyxDQUFDLEdBQUdKLE1BQU0sQ0FBQ0ssTUFBTSxHQUFDLEdBQUcsQ0FBQyxDQUFDOztJQUU1QixJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJVCwrQ0FBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUNHLE1BQU0sRUFBRSxJQUFJLENBQUNDLEdBQUcsRUFBRSxJQUFJLENBQUNFLENBQUMsRUFBRSxJQUFJLENBQUNDLENBQUMsQ0FBQztJQUVyRSxJQUFJLENBQUNHLEdBQUcsR0FBRyxJQUFJQyxLQUFLLENBQUMsQ0FBQztJQUN0QixJQUFJLENBQUNELEdBQUcsQ0FBQ0UsR0FBRyxHQUFHLDBCQUEwQjtJQUN6QyxJQUFJLENBQUNDLGNBQWMsQ0FBQyxJQUFJLENBQUNILEdBQUcsQ0FBQztJQUM3QjtJQUNBO0lBQ0E7O0lBRUE7SUFDQTtJQUNBOztJQUVBLElBQUksQ0FBQ0ksUUFBUSxDQUFDLENBQUM7RUFDbkI7RUFFQUMsWUFBWUEsQ0FBQSxFQUFFO0lBQ1YsSUFBSSxDQUFDWCxHQUFHLENBQUNZLFNBQVMsQ0FBQyxDQUFDO0lBQ3BCLElBQUksQ0FBQ1osR0FBRyxDQUFDYSxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQztJQUN4QixJQUFJLENBQUNiLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDekIsSUFBSSxDQUFDZCxHQUFHLENBQUNlLFNBQVMsR0FBRyxDQUFDO0lBQ3RCLElBQUksQ0FBQ2YsR0FBRyxDQUFDZ0IsV0FBVyxHQUFHLE9BQU87SUFDOUIsSUFBSSxDQUFDaEIsR0FBRyxDQUFDaUIsTUFBTSxDQUFDLENBQUM7RUFDckI7RUFFQVAsUUFBUUEsQ0FBQ0osR0FBRyxFQUFDO0lBQ1QsSUFBSSxDQUFDRCxNQUFNLENBQUNhLElBQUksQ0FBQyxDQUFDO0lBQ2xCLElBQUksQ0FBQ1AsWUFBWSxDQUFDLENBQUM7SUFDbkJRLHFCQUFxQixDQUFDLElBQUksQ0FBQ1QsUUFBUSxDQUFDVSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDbkQ7RUFFQVgsY0FBY0EsQ0FBQ0gsR0FBRyxFQUFDO0lBQ2Y7SUFDQSxJQUFJLENBQUNOLEdBQUcsQ0FBQ3FCLFNBQVMsQ0FBQ2YsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0I7SUFDQTtJQUNBO0lBQ0E7RUFFSjs7RUFHQTtFQUNBOztFQUVBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpe1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLnggPSAzNzU7IC8vIGluaXRpYWwgeCBwb3NpdGlvblxuICAgICAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0LTE1MDsgLy8gSW5pdGlhbCBZIHBvc2l0aW9uXG5cbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMsIHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcy54LCB0aGlzLnkpO1xuXG4gICAgICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1nLnNyYyA9ICcuL3NyYy9pbWcvYmFja2dyb3VuZC5qcGcnO1xuICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKHRoaXMuaW1nKTtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgLy8gdGhpcy5pbWcuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgLy8gICAgIFwibG9hZFwiLFxuICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UuY2FsbCh0aGlzLCBhcmdzKSxcbiAgICAgICAgLy8gICAgIGZhbHNlLFxuICAgICAgICAvLyApO1xuXG4gICAgICAgIHRoaXMuZ2FtZUxvb3AoKTtcbiAgICB9XG5cbiAgICBkcmF3QmFzZWxpbmUoKXtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1MCwgNTAwKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKDc1MCwgNTAwKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIGdhbWVMb29wKGltZyl7XG4gICAgICAgIHRoaXMucGxheWVyLmRyYXcoKTtcbiAgICAgICAgdGhpcy5kcmF3QmFzZWxpbmUoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3AuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgXG4gICAgZHJhd0JhY2tncm91bmQoaW1nKXtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAgIC8vIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaW1nLnNyYywgMCwgMCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaW1nLm9ubG9hZCgpO1xuICAgICAgICBcbiAgICB9XG4gICAgICAgIFxuXG4gICAgLy8ganVtcCgpIHtcbiAgICAvLyB9XG5cbiAgICAvLyBhbmltYXRlKCl7XG5cbiAgICAvLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgLy8gICAgIC8vIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy5oZWlnaHQsIHRoaXMuY2FudmFzLndpZHRoKTtcbiAgICAvLyAgICAgZ2FtZS5kcmF3QmFzZWxpbmUoKTtcbiAgICAvLyAgICAgZ2FtZS5kcmF3Q2hhcmFjdG9yKCk7XG4gICAgLy8gfVxuXG59XG5cbiJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwieCIsInkiLCJoZWlnaHQiLCJwbGF5ZXIiLCJpbWciLCJJbWFnZSIsInNyYyIsImRyYXdCYWNrZ3JvdW5kIiwiZ2FtZUxvb3AiLCJkcmF3QmFzZWxpbmUiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsImRyYXciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwiZHJhd0ltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Player; }\n/* harmony export */ });\nclass Player {\n  constructor(game, canvas, ctx, x, y) {\n    this.game = game;\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.position = {\n      x: 100,\n      y: 100\n    };\n    this.velocity = {\n      y: 0,\n      x: 0\n    };\n    this.gravity = 1;\n    this.width = 100;\n    this.height = 100;\n    this.addEventHandlers();\n  }\n  addEventHandlers() {\n    document.addEventListener(\"keydown\", e => {\n      // console.log(e);\n      if (e.code === \"ArrowLeft\") {\n        this.velocity.x = -3;\n      } else if (e.code === \"ArrowRight\") {\n        this.velocity.x = 3;\n      }\n      if (e.code === \"ArrowUp\") {\n        this.velocity.y = -15;\n      }\n    });\n\n    // stop movement\n    document.addEventListener(\"keyup\", e => {\n      // console.log(e);\n      if (e.code === \"ArrowLeft\") {\n        this.velocity.x = 0;\n      } else if (e.code === \"ArrowRight\") {\n        this.velocity.x = 0;\n      }\n    });\n  }\n  animate() {\n    // 位置を決めている\n\n    // debugger\n    // if (this.position.y > this.canvas.height - this.height - this.velocity.y - 100) {\n    //     // debugger;\n    //     this.velocity.y = 0;\n    // }\n    if (this.position.y + this.height + this.velocity.y + 100 < this.canvas.height) {\n      this.velocity.y += this.gravity;\n    } else {\n      this.velocity.y = 0;\n    }\n    this.position.x += this.velocity.x;\n    this.position.y += this.velocity.y;\n    // console.log(this.velocity.y);\n    // console.log(this.canvas.height);\n    // console.log(this.position.y);\n    // console.log(this.position.y + this.height + this.velocity.y);\n  }\n\n  drawPlayer() {\n    // Draw the square\n    this.ctx.fillStyle = 'green';\n    this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);\n  }\n  draw() {\n    // Clear the canvas\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.animate();\n\n    // Draw the square\n    this.drawPlayer();\n\n    // Request the next frame\n    // debugger\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNFLFFBQVEsQ0FBQ0QsQ0FBQyxFQUFFLElBQUksQ0FBQ0ksS0FBSyxFQUFFLElBQUksQ0FBQ0MsTUFBTSxDQUFDO0VBQ2hGO0VBRUFVLElBQUlBLENBQUEsRUFBRztJQUNIO0lBQ0EsSUFBSSxDQUFDakIsR0FBRyxDQUFDa0IsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDbkIsTUFBTSxDQUFDTyxLQUFLLEVBQUUsSUFBSSxDQUFDUCxNQUFNLENBQUNRLE1BQU0sQ0FBQztJQUMvRCxJQUFJLENBQUNNLE9BQU8sQ0FBQyxDQUFDOztJQUdkO0lBQ0EsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQzs7SUFFakI7SUFDQTtFQUVKO0FBR0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvcGxheWVyLmpzPzY0NzEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgY2FudmFzLCBjdHgsIHgsIHkpe1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiAxMDAsXG4gICAgICAgICAgICB5OiAxMDBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIHg6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IDE7XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IDEwMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMDA7XG5cbiAgICAgICAgdGhpcy5hZGRFdmVudEhhbmRsZXJzKCk7XG5cbiAgICB9XG5cbiAgICBhZGRFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLTM7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUuY29kZSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSBcIkFycm93VXBcIikge1xuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IC0xNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvLyBzdG9wIG1vdmVtZW50XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5jb2RlID09PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHsgLy8g5L2N572u44KS5rG644KB44Gm44GE44KLXG4gICAgICAgIFxuLy8gZGVidWdnZXJcbiAgICAgICAgLy8gaWYgKHRoaXMucG9zaXRpb24ueSA+IHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMuaGVpZ2h0IC0gdGhpcy52ZWxvY2l0eS55IC0gMTAwKSB7XG4gICAgICAgIC8vICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgLy8gICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ICsgdGhpcy52ZWxvY2l0eS55ICsgMTAwIDwgdGhpcy5jYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgKz0gdGhpcy5ncmF2aXR5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy52ZWxvY2l0eS54O1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy52ZWxvY2l0eS55O1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnZlbG9jaXR5LnkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBvc2l0aW9uLnkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCArIHRoaXMudmVsb2NpdHkueSk7XG4gICAgICAgIFxuXG4gICAgfVxuXG4gICAgZHJhd1BsYXllcigpIHtcbiAgICAgICAgLy8gRHJhdyB0aGUgc3F1YXJlXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdncmVlbic7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgLy8gQ2xlYXIgdGhlIGNhbnZhc1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuXG5cbiAgICAgICAgLy8gRHJhdyB0aGUgc3F1YXJlXG4gICAgICAgIHRoaXMuZHJhd1BsYXllcigpO1xuXG4gICAgICAgIC8vIFJlcXVlc3QgdGhlIG5leHQgZnJhbWVcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICBcbiAgICB9XG5cblxufSJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJjb25zdHJ1Y3RvciIsImdhbWUiLCJjYW52YXMiLCJjdHgiLCJ4IiwieSIsInBvc2l0aW9uIiwidmVsb2NpdHkiLCJncmF2aXR5Iiwid2lkdGgiLCJoZWlnaHQiLCJhZGRFdmVudEhhbmRsZXJzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvZGUiLCJhbmltYXRlIiwiZHJhd1BsYXllciIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZHJhdyIsImNsZWFyUmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

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