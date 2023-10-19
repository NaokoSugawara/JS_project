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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n\nclass Game {\n  constructor(canvas) {\n    this.canvas = canvas;\n    this.ctx = canvas.getContext(\"2d\");\n    this.x = 375; // initial x position\n    this.y = canvas.height - 150; // Initial Y position\n\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this, this.canvas, this.ctx, this.x, this.y);\n    this.gameLoop();\n  }\n  drawBaseline() {\n    this.ctx.beginPath();\n    this.ctx.moveTo(50, 500);\n    this.ctx.lineTo(750, 500);\n    this.ctx.lineWidth = 1;\n    this.ctx.strokeStyle = \"black\";\n    this.ctx.stroke();\n  }\n  gameLoop() {\n    this.player.draw();\n    this.drawBaseline();\n    requestAnimationFrame(this.gameLoop.bind(this));\n  }\n\n  // jump() {\n  // }\n\n  // animate(){\n\n  //     requestAnimationFrame(this.animate);\n  //     // this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);\n  //     game.drawBaseline();\n  //     game.drawCharactor();\n  // }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQThCO0FBRWYsTUFBTUMsSUFBSSxDQUFDO0VBRXRCQyxXQUFXQSxDQUFDQyxNQUFNLEVBQUM7SUFDZixJQUFJLENBQUNBLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ2xDLElBQUksQ0FBQ0MsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsSUFBSSxDQUFDQyxDQUFDLEdBQUdKLE1BQU0sQ0FBQ0ssTUFBTSxHQUFDLEdBQUcsQ0FBQyxDQUFDOztJQUU1QixJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJVCwrQ0FBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUNHLE1BQU0sRUFBRSxJQUFJLENBQUNDLEdBQUcsRUFBRSxJQUFJLENBQUNFLENBQUMsRUFBRSxJQUFJLENBQUNDLENBQUMsQ0FBQztJQUNyRSxJQUFJLENBQUNHLFFBQVEsQ0FBQyxDQUFDO0VBQ25CO0VBRUFDLFlBQVlBLENBQUEsRUFBRTtJQUNWLElBQUksQ0FBQ1AsR0FBRyxDQUFDUSxTQUFTLENBQUMsQ0FBQztJQUNwQixJQUFJLENBQUNSLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUM7SUFDeEIsSUFBSSxDQUFDVCxHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ3pCLElBQUksQ0FBQ1YsR0FBRyxDQUFDVyxTQUFTLEdBQUcsQ0FBQztJQUN0QixJQUFJLENBQUNYLEdBQUcsQ0FBQ1ksV0FBVyxHQUFHLE9BQU87SUFDOUIsSUFBSSxDQUFDWixHQUFHLENBQUNhLE1BQU0sQ0FBQyxDQUFDO0VBQ3JCO0VBRUFQLFFBQVFBLENBQUEsRUFBRTtJQUNOLElBQUksQ0FBQ0QsTUFBTSxDQUFDUyxJQUFJLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUNQLFlBQVksQ0FBQyxDQUFDO0lBQ25CUSxxQkFBcUIsQ0FBQyxJQUFJLENBQUNULFFBQVEsQ0FBQ1UsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ25EOztFQUlBO0VBQ0E7O0VBRUE7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvamVjdC8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcyl7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMueCA9IDM3NTsgLy8gaW5pdGlhbCB4IHBvc2l0aW9uXG4gICAgICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQtMTUwOyAvLyBJbml0aWFsIFkgcG9zaXRpb25cblxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcywgdGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzLngsIHRoaXMueSk7XG4gICAgICAgIHRoaXMuZ2FtZUxvb3AoKTtcbiAgICB9XG5cbiAgICBkcmF3QmFzZWxpbmUoKXtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1MCwgNTAwKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKDc1MCwgNTAwKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIGdhbWVMb29wKCl7XG4gICAgICAgIHRoaXMucGxheWVyLmRyYXcoKTtcbiAgICAgICAgdGhpcy5kcmF3QmFzZWxpbmUoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3AuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgXG5cblxuICAgIC8vIGp1bXAoKSB7XG4gICAgLy8gfVxuXG4gICAgLy8gYW5pbWF0ZSgpe1xuXG4gICAgLy8gICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgIC8vICAgICAvLyB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMuaGVpZ2h0LCB0aGlzLmNhbnZhcy53aWR0aCk7XG4gICAgLy8gICAgIGdhbWUuZHJhd0Jhc2VsaW5lKCk7XG4gICAgLy8gICAgIGdhbWUuZHJhd0NoYXJhY3RvcigpO1xuICAgIC8vIH1cblxufVxuXG4iXSwibmFtZXMiOlsiUGxheWVyIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsIngiLCJ5IiwiaGVpZ2h0IiwicGxheWVyIiwiZ2FtZUxvb3AiLCJkcmF3QmFzZWxpbmUiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsImRyYXciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Player; }\n/* harmony export */ });\n// const square = {\n//     width: 30,\n//     height: 30,\n//     jumpHeight: 100,\n//     // jumping: true,\n//     jumpingUp: true,\n//     jumpStartY: 0,\n//     jumpSpeed: 20,\n//     verocity: 0\n// };\n\nclass Player {\n  constructor(game, canvas, ctx, x, y) {\n    this.game = game;\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.position = {\n      x: 100,\n      y: 100\n    };\n    this.velocity = {\n      y: 0,\n      x: 0\n    };\n    this.gravity = 1;\n    this.width = 100;\n    this.height = 100;\n    this.addEventHandlers();\n  }\n  addEventHandlers() {\n    document.addEventListener(\"keydown\", e => {\n      // console.log(e);\n      if (e.code === \"ArrowLeft\") {\n        this.velocity.x = -3;\n      } else if (e.code === \"ArrowRight\") {\n        this.velocity.x = 3;\n      }\n      if (e.code === \"ArrowUp\") {\n        this.velocity.y = -15;\n      }\n    });\n    document.addEventListener(\"keyup\", e => {\n      // console.log(e);\n      if (e.code === \"ArrowLeft\") {\n        this.velocity.x = 0;\n      } else if (e.code === \"ArrowRight\") {\n        this.velocity.x = 0;\n      }\n    });\n  }\n  animate() {\n    this.velocity.y += this.gravity;\n    if (this.position.y > this.canvas.height - this.height - this.velocity.y - 100) {\n      // debugger;\n      this.velocity.y = 0;\n    }\n    this.position.x += this.velocity.x;\n    console.log(this.velocity.y);\n    console.log(this.position.y);\n    this.position.y += this.velocity.y;\n  }\n  drawPlayer() {\n    // Draw the square\n    this.ctx.fillStyle = 'green';\n    this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);\n  }\n  draw() {\n    // Clear the canvas\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.animate();\n\n    // Draw the square\n    this.drawPlayer();\n\n    // Request the next frame\n    // debugger\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLENBQUNpQixTQUFTLEdBQUcsT0FBTztJQUM1QixJQUFJLENBQUNqQixHQUFHLENBQUNrQixRQUFRLENBQUMsSUFBSSxDQUFDZixRQUFRLENBQUNGLENBQUMsRUFBRSxJQUFJLENBQUNFLFFBQVEsQ0FBQ0QsQ0FBQyxFQUFFLElBQUksQ0FBQ0ksS0FBSyxFQUFFLElBQUksQ0FBQ0MsTUFBTSxDQUFDO0VBQ2hGO0VBRUFZLElBQUlBLENBQUEsRUFBRztJQUNIO0lBQ0EsSUFBSSxDQUFDbkIsR0FBRyxDQUFDb0IsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDckIsTUFBTSxDQUFDTyxLQUFLLEVBQUUsSUFBSSxDQUFDUCxNQUFNLENBQUNRLE1BQU0sQ0FBQztJQUMvRCxJQUFJLENBQUNNLE9BQU8sQ0FBQyxDQUFDOztJQUdkO0lBQ0EsSUFBSSxDQUFDRyxVQUFVLENBQUMsQ0FBQzs7SUFFakI7SUFDQTtFQUVKO0FBR0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvcGxheWVyLmpzPzY0NzEiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBjb25zdCBzcXVhcmUgPSB7XG4vLyAgICAgd2lkdGg6IDMwLFxuLy8gICAgIGhlaWdodDogMzAsXG4vLyAgICAganVtcEhlaWdodDogMTAwLFxuLy8gICAgIC8vIGp1bXBpbmc6IHRydWUsXG4vLyAgICAganVtcGluZ1VwOiB0cnVlLFxuLy8gICAgIGp1bXBTdGFydFk6IDAsXG4vLyAgICAganVtcFNwZWVkOiAyMCxcbi8vICAgICB2ZXJvY2l0eTogMFxuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIGNhbnZhcywgY3R4LCB4LCB5KXtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogMTAwLFxuICAgICAgICAgICAgeTogMTAwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICB4OiAwXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdyYXZpdHkgPSAxO1xuXG4gICAgICAgIHRoaXMud2lkdGggPSAxMDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTAwO1xuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRIYW5kbGVycygpO1xuXG4gICAgfVxuXG4gICAgYWRkRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IC0zO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmNvZGUgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gMztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAtMTU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmNvZGUgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhbmltYXRlKCkgeyBcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ICs9IHRoaXMuZ3Jhdml0eTtcblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ID4gdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgLSB0aGlzLnZlbG9jaXR5LnkgLSAxMDApIHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy52ZWxvY2l0eS54O1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnZlbG9jaXR5LnkpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBvc2l0aW9uLnkpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy52ZWxvY2l0eS55O1xuICAgIH1cblxuICAgIGRyYXdQbGF5ZXIoKSB7XG4gICAgICAgIC8vIERyYXcgdGhlIHNxdWFyZVxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIC8vIENsZWFyIHRoZSBjYW52YXNcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcblxuXG4gICAgICAgIC8vIERyYXcgdGhlIHNxdWFyZVxuICAgICAgICB0aGlzLmRyYXdQbGF5ZXIoKTtcblxuICAgICAgICAvLyBSZXF1ZXN0IHRoZSBuZXh0IGZyYW1lXG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgXG4gICAgfVxuXG5cbn0iXSwibmFtZXMiOlsiUGxheWVyIiwiY29uc3RydWN0b3IiLCJnYW1lIiwiY2FudmFzIiwiY3R4IiwieCIsInkiLCJwb3NpdGlvbiIsInZlbG9jaXR5IiwiZ3Jhdml0eSIsIndpZHRoIiwiaGVpZ2h0IiwiYWRkRXZlbnRIYW5kbGVycyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb2RlIiwiYW5pbWF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkcmF3UGxheWVyIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJkcmF3IiwiY2xlYXJSZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

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