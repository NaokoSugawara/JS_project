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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n\nclass Game {\n  constructor(canvas) {\n    this.canvas = canvas;\n    this.ctx = canvas.getContext(\"2d\");\n    this.x = 375; // initial x position\n    this.y = canvas.height - 150; // Initial Y position\n\n    this.img = new Image();\n    this.img.src = './src/img/background.jpg';\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this, this.canvas, this.ctx, this.x, this.y);\n\n    // debugger\n    // this.img.addEventListener(\n    //     \"load\",\n\n    //     this.ctx.drawImage.call(this, args),\n    //     false,\n    // );\n\n    this.gameLoop();\n  }\n  drawBaseline() {\n    this.ctx.beginPath();\n    this.ctx.moveTo(50, 500);\n    this.ctx.lineTo(750, 500);\n    this.ctx.lineWidth = 1;\n    this.ctx.strokeStyle = \"black\";\n    this.ctx.stroke();\n  }\n  gameLoop() {\n    // debugger\n    this.player.draw();\n    this.drawBaseline();\n    requestAnimationFrame(this.gameLoop.bind(this));\n  }\n  drawBackground() {\n    // debugger\n    this.ctx.drawImage(this.img, 0, 0);\n    // img.onload = () => {\n    //     this.ctx.drawImage(img.src, 0, 0);\n    // }\n    // img.onload();\n  }\n\n  // jump() {\n  // }\n\n  // animate(){\n\n  //     requestAnimationFrame(this.animate);\n  //     // this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);\n  //     game.drawBaseline();\n  //     game.drawCharactor();\n  // }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQThCO0FBRWYsTUFBTUMsSUFBSSxDQUFDO0VBRXRCQyxXQUFXQSxDQUFDQyxNQUFNLEVBQUM7SUFDZixJQUFJLENBQUNBLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ2xDLElBQUksQ0FBQ0MsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsSUFBSSxDQUFDQyxDQUFDLEdBQUdKLE1BQU0sQ0FBQ0ssTUFBTSxHQUFDLEdBQUcsQ0FBQyxDQUFDOztJQUU1QixJQUFJLENBQUNDLEdBQUcsR0FBRyxJQUFJQyxLQUFLLENBQUMsQ0FBQztJQUN0QixJQUFJLENBQUNELEdBQUcsQ0FBQ0UsR0FBRyxHQUFHLDBCQUEwQjtJQUV6QyxJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJWiwrQ0FBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUNHLE1BQU0sRUFBRSxJQUFJLENBQUNDLEdBQUcsRUFBRSxJQUFJLENBQUNFLENBQUMsRUFBRSxJQUFJLENBQUNDLENBQUMsQ0FBQzs7SUFHckU7SUFDQTtJQUNBOztJQUVBO0lBQ0E7SUFDQTs7SUFFQSxJQUFJLENBQUNNLFFBQVEsQ0FBQyxDQUFDO0VBQ25CO0VBRUFDLFlBQVlBLENBQUEsRUFBRTtJQUNWLElBQUksQ0FBQ1YsR0FBRyxDQUFDVyxTQUFTLENBQUMsQ0FBQztJQUNwQixJQUFJLENBQUNYLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUM7SUFDeEIsSUFBSSxDQUFDWixHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ3pCLElBQUksQ0FBQ2IsR0FBRyxDQUFDYyxTQUFTLEdBQUcsQ0FBQztJQUN0QixJQUFJLENBQUNkLEdBQUcsQ0FBQ2UsV0FBVyxHQUFHLE9BQU87SUFDOUIsSUFBSSxDQUFDZixHQUFHLENBQUNnQixNQUFNLENBQUMsQ0FBQztFQUNyQjtFQUVBUCxRQUFRQSxDQUFBLEVBQUU7SUFDTjtJQUNBLElBQUksQ0FBQ0QsTUFBTSxDQUFDUyxJQUFJLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUNQLFlBQVksQ0FBQyxDQUFDO0lBQ25CUSxxQkFBcUIsQ0FBQyxJQUFJLENBQUNULFFBQVEsQ0FBQ1UsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ25EO0VBRUFDLGNBQWNBLENBQUEsRUFBRTtJQUNaO0lBQ0EsSUFBSSxDQUFDcEIsR0FBRyxDQUFDcUIsU0FBUyxDQUFDLElBQUksQ0FBQ2hCLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDO0lBQ0E7SUFDQTtJQUNBO0VBRUo7O0VBR0E7RUFDQTs7RUFFQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzKXtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy54ID0gMzc1OyAvLyBpbml0aWFsIHggcG9zaXRpb25cbiAgICAgICAgdGhpcy55ID0gY2FudmFzLmhlaWdodC0xNTA7IC8vIEluaXRpYWwgWSBwb3NpdGlvblxuXG4gICAgICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaW1nLnNyYyA9ICcuL3NyYy9pbWcvYmFja2dyb3VuZC5qcGcnO1xuXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLCB0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMueCwgdGhpcy55KTtcblxuXG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIC8vIHRoaXMuaW1nLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIC8vICAgICBcImxvYWRcIixcbiAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgdGhpcy5jdHguZHJhd0ltYWdlLmNhbGwodGhpcywgYXJncyksXG4gICAgICAgIC8vICAgICBmYWxzZSxcbiAgICAgICAgLy8gKTtcblxuICAgICAgICB0aGlzLmdhbWVMb29wKCk7XG4gICAgfVxuXG4gICAgZHJhd0Jhc2VsaW5lKCl7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oNTAsIDUwMCk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyg3NTAsIDUwMCk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBnYW1lTG9vcCgpe1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICB0aGlzLnBsYXllci5kcmF3KCk7XG4gICAgICAgIHRoaXMuZHJhd0Jhc2VsaW5lKCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVMb29wLmJpbmQodGhpcykpO1xuICAgIH1cbiAgIFxuICAgIGRyYXdCYWNrZ3JvdW5kKCl7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgMCwgMCk7XG4gICAgICAgIC8vIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaW1nLnNyYywgMCwgMCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaW1nLm9ubG9hZCgpO1xuICAgICAgICBcbiAgICB9XG4gICAgICAgIFxuXG4gICAgLy8ganVtcCgpIHtcbiAgICAvLyB9XG5cbiAgICAvLyBhbmltYXRlKCl7XG5cbiAgICAvLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgLy8gICAgIC8vIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy5oZWlnaHQsIHRoaXMuY2FudmFzLndpZHRoKTtcbiAgICAvLyAgICAgZ2FtZS5kcmF3QmFzZWxpbmUoKTtcbiAgICAvLyAgICAgZ2FtZS5kcmF3Q2hhcmFjdG9yKCk7XG4gICAgLy8gfVxuXG59XG5cbiJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwieCIsInkiLCJoZWlnaHQiLCJpbWciLCJJbWFnZSIsInNyYyIsInBsYXllciIsImdhbWVMb29wIiwiZHJhd0Jhc2VsaW5lIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJkcmF3IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsImRyYXdCYWNrZ3JvdW5kIiwiZHJhd0ltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Player; }\n/* harmony export */ });\nclass Player {\n  constructor(game, canvas, ctx, x, y) {\n    this.game = game;\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.position = {\n      x: 100,\n      y: 100\n    };\n    this.velocity = {\n      y: 0,\n      x: 0\n    };\n    this.gravity = 1;\n    this.width = 100;\n    this.height = 100;\n    this.addEventHandlers();\n  }\n  addEventHandlers() {\n    document.addEventListener(\"keydown\", e => {\n      // console.log(e);\n      if (e.code === \"ArrowLeft\") {\n        this.velocity.x = -3;\n      } else if (e.code === \"ArrowRight\") {\n        this.velocity.x = 3;\n      }\n      if (e.code === \"ArrowUp\") {\n        this.velocity.y = -15;\n      }\n    });\n\n    // stop movement\n    document.addEventListener(\"keyup\", e => {\n      // console.log(e);\n      if (e.code === \"ArrowLeft\") {\n        this.velocity.x = 0;\n      } else if (e.code === \"ArrowRight\") {\n        this.velocity.x = 0;\n      }\n    });\n  }\n  animate() {\n    // 位置を決めている\n\n    // debugger\n    // if (this.position.y > this.canvas.height - this.height - this.velocity.y - 100) {\n    //     // debugger;\n    //     this.velocity.y = 0;\n    // }\n    if (this.position.y + this.height + this.velocity.y + 100 < this.canvas.height) {\n      this.velocity.y += this.gravity;\n    } else {\n      this.velocity.y = 0;\n    }\n    this.position.x += this.velocity.x;\n    this.position.y += this.velocity.y;\n    // console.log(this.velocity.y);\n    // console.log(this.canvas.height);\n    // console.log(this.position.y);\n    // console.log(this.position.y + this.height + this.velocity.y);\n  }\n\n  drawPlayer() {\n    // Draw the square\n    this.ctx.fillStyle = 'green';\n    this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);\n  }\n  draw() {\n    // Clear the canvas\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.game.drawBackground();\n    // debugger\n    this.animate();\n\n    // Draw the square\n    this.drawPlayer();\n\n    // Request the next frame\n    // debugger\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNFLFFBQVEsQ0FBQ0QsQ0FBQyxFQUFFLElBQUksQ0FBQ0ksS0FBSyxFQUFFLElBQUksQ0FBQ0MsTUFBTSxDQUFDO0VBQ2hGO0VBRUFVLElBQUlBLENBQUEsRUFBRztJQUNIO0lBQ0EsSUFBSSxDQUFDakIsR0FBRyxDQUFDa0IsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDbkIsTUFBTSxDQUFDTyxLQUFLLEVBQUUsSUFBSSxDQUFDUCxNQUFNLENBQUNRLE1BQU0sQ0FBQztJQUMvRCxJQUFJLENBQUNULElBQUksQ0FBQ3FCLGNBQWMsQ0FBQyxDQUFDO0lBQzFCO0lBQ0EsSUFBSSxDQUFDTixPQUFPLENBQUMsQ0FBQzs7SUFHZDtJQUNBLElBQUksQ0FBQ0MsVUFBVSxDQUFDLENBQUM7O0lBRWpCO0lBQ0E7RUFFSjtBQUdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvamVjdC8uL3NyYy9zY3JpcHRzL3BsYXllci5qcz82NDcxIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIGNhbnZhcywgY3R4LCB4LCB5KXtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogMTAwLFxuICAgICAgICAgICAgeTogMTAwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICB4OiAwXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdyYXZpdHkgPSAxO1xuXG4gICAgICAgIHRoaXMud2lkdGggPSAxMDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTAwO1xuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRIYW5kbGVycygpO1xuXG4gICAgfVxuXG4gICAgYWRkRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IC0zO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmNvZGUgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gMztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAtMTU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc3RvcCBtb3ZlbWVudFxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUuY29kZSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7IC8vIOS9jee9ruOCkuaxuuOCgeOBpuOBhOOCi1xuICAgICAgICBcbi8vIGRlYnVnZ2VyXG4gICAgICAgIC8vIGlmICh0aGlzLnBvc2l0aW9uLnkgPiB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodCAtIHRoaXMudmVsb2NpdHkueSAtIDEwMCkge1xuICAgICAgICAvLyAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgIC8vICAgICB0aGlzLnZlbG9jaXR5LnkgPSAwO1xuICAgICAgICAvLyB9XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCArIHRoaXMudmVsb2NpdHkueSArIDEwMCA8IHRoaXMuY2FudmFzLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ICs9IHRoaXMuZ3Jhdml0eTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMudmVsb2NpdHkueDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMudmVsb2NpdHkueTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy52ZWxvY2l0eS55KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wb3NpdGlvbi55KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgKyB0aGlzLnZlbG9jaXR5LnkpO1xuICAgICAgICBcblxuICAgIH1cblxuICAgIGRyYXdQbGF5ZXIoKSB7XG4gICAgICAgIC8vIERyYXcgdGhlIHNxdWFyZVxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIC8vIENsZWFyIHRoZSBjYW52YXNcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmdhbWUuZHJhd0JhY2tncm91bmQoKTtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG5cblxuICAgICAgICAvLyBEcmF3IHRoZSBzcXVhcmVcbiAgICAgICAgdGhpcy5kcmF3UGxheWVyKCk7XG5cbiAgICAgICAgLy8gUmVxdWVzdCB0aGUgbmV4dCBmcmFtZVxuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgIFxuICAgIH1cblxuXG59Il0sIm5hbWVzIjpbIlBsYXllciIsImNvbnN0cnVjdG9yIiwiZ2FtZSIsImNhbnZhcyIsImN0eCIsIngiLCJ5IiwicG9zaXRpb24iLCJ2ZWxvY2l0eSIsImdyYXZpdHkiLCJ3aWR0aCIsImhlaWdodCIsImFkZEV2ZW50SGFuZGxlcnMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29kZSIsImFuaW1hdGUiLCJkcmF3UGxheWVyIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJkcmF3IiwiY2xlYXJSZWN0IiwiZHJhd0JhY2tncm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

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