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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\nconst canvas = document.getElementById('runner_game');\nconst game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n\n// game.drawBaseline();\n// game.player.drawSquare();\n\n// document.addEventListener('keydown', (e) => {\n//     if (e.code === 'Space') {\n//         const jumping = true;\n//         game.gameLoop(jumping);\n//     }\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFDa0M7QUFFbEMsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUM7QUFDckQsTUFBTUMsSUFBSSxHQUFHLElBQUlKLHFEQUFJLENBQUNDLE1BQU0sQ0FBQzs7QUFFN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3J1bm5lcl9nYW1lJyk7XG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcblxuLy8gZ2FtZS5kcmF3QmFzZWxpbmUoKTtcbi8vIGdhbWUucGxheWVyLmRyYXdTcXVhcmUoKTtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4vLyAgICAgaWYgKGUuY29kZSA9PT0gJ1NwYWNlJykge1xuLy8gICAgICAgICBjb25zdCBqdW1waW5nID0gdHJ1ZTtcbi8vICAgICAgICAgZ2FtZS5nYW1lTG9vcChqdW1waW5nKTtcbi8vICAgICB9XG4vLyB9KTtcblxuXG5cblxuXG4iXSwibmFtZXMiOlsiR2FtZSIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n/* harmony import */ var _obstacles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obstacles */ \"./src/scripts/obstacles.js\");\n\n\nclass Game {\n  constructor(canvas) {\n    this.canvas = canvas;\n    this.ctx = canvas.getContext(\"2d\");\n    this.x = 375; // initial x position\n    this.y = canvas.height - 150; // Initial Y position\n\n    this.img = new Image();\n    this.img.src = './src/img/background.jpg';\n    this.obstacles = new _obstacles__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx);\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this, this.obstacles, this.canvas, this.ctx, this.x, this.y);\n    this.gameLoop();\n  }\n  drawBaseline() {\n    this.ctx.beginPath();\n    this.ctx.moveTo(50, 500);\n    this.ctx.lineTo(750, 500);\n    this.ctx.lineWidth = 1;\n    this.ctx.strokeStyle = \"black\";\n    this.ctx.stroke();\n  }\n  gameLoop() {\n    // debugger\n    this.player.draw();\n    this.drawBaseline();\n    requestAnimationFrame(this.gameLoop.bind(this));\n  }\n  drawBackground() {\n    this.ctx.drawImage(this.img, 0, 0);\n  }\n\n  // jump() {\n  // }\n\n  // animate(){\n\n  //     requestAnimationFrame(this.animate);\n  //     // this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);\n  //     game.drawBaseline();\n  //     game.drawCharactor();\n  // }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QjtBQUNNO0FBRXJCLE1BQU1FLElBQUksQ0FBQztFQUV0QkMsV0FBV0EsQ0FBQ0MsTUFBTSxFQUFDO0lBQ2YsSUFBSSxDQUFDQSxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDQyxHQUFHLEdBQUdELE1BQU0sQ0FBQ0UsVUFBVSxDQUFDLElBQUksQ0FBQztJQUNsQyxJQUFJLENBQUNDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNkLElBQUksQ0FBQ0MsQ0FBQyxHQUFHSixNQUFNLENBQUNLLE1BQU0sR0FBQyxHQUFHLENBQUMsQ0FBQzs7SUFFNUIsSUFBSSxDQUFDQyxHQUFHLEdBQUcsSUFBSUMsS0FBSyxDQUFDLENBQUM7SUFDdEIsSUFBSSxDQUFDRCxHQUFHLENBQUNFLEdBQUcsR0FBRywwQkFBMEI7SUFFekMsSUFBSSxDQUFDQyxTQUFTLEdBQUcsSUFBSVosa0RBQVMsQ0FBQyxJQUFJLENBQUNJLEdBQUcsQ0FBQztJQUN4QyxJQUFJLENBQUNTLE1BQU0sR0FBRyxJQUFJZCwrQ0FBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUNhLFNBQVMsRUFBRSxJQUFJLENBQUNULE1BQU0sRUFBRSxJQUFJLENBQUNDLEdBQUcsRUFBRSxJQUFJLENBQUNFLENBQUMsRUFBRSxJQUFJLENBQUNDLENBQUMsQ0FBQztJQUdyRixJQUFJLENBQUNPLFFBQVEsQ0FBQyxDQUFDO0VBQ25CO0VBRUFDLFlBQVlBLENBQUEsRUFBRTtJQUNWLElBQUksQ0FBQ1gsR0FBRyxDQUFDWSxTQUFTLENBQUMsQ0FBQztJQUNwQixJQUFJLENBQUNaLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUM7SUFDeEIsSUFBSSxDQUFDYixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ3pCLElBQUksQ0FBQ2QsR0FBRyxDQUFDZSxTQUFTLEdBQUcsQ0FBQztJQUN0QixJQUFJLENBQUNmLEdBQUcsQ0FBQ2dCLFdBQVcsR0FBRyxPQUFPO0lBQzlCLElBQUksQ0FBQ2hCLEdBQUcsQ0FBQ2lCLE1BQU0sQ0FBQyxDQUFDO0VBQ3JCO0VBRUFQLFFBQVFBLENBQUEsRUFBRTtJQUNOO0lBQ0EsSUFBSSxDQUFDRCxNQUFNLENBQUNTLElBQUksQ0FBQyxDQUFDO0lBQ2xCLElBQUksQ0FBQ1AsWUFBWSxDQUFDLENBQUM7SUFDbkJRLHFCQUFxQixDQUFDLElBQUksQ0FBQ1QsUUFBUSxDQUFDVSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDbkQ7RUFFQUMsY0FBY0EsQ0FBQSxFQUFFO0lBQ1osSUFBSSxDQUFDckIsR0FBRyxDQUFDc0IsU0FBUyxDQUFDLElBQUksQ0FBQ2pCLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ3JDOztFQUdEO0VBQ0E7O0VBRUE7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvamVjdC8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IE9ic3RhY2xlcyBmcm9tIFwiLi9vYnN0YWNsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpe1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLnggPSAzNzU7IC8vIGluaXRpYWwgeCBwb3NpdGlvblxuICAgICAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0LTE1MDsgLy8gSW5pdGlhbCBZIHBvc2l0aW9uXG5cbiAgICAgICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWcuc3JjID0gJy4vc3JjL2ltZy9iYWNrZ3JvdW5kLmpwZyc7XG5cbiAgICAgICAgdGhpcy5vYnN0YWNsZXMgPSBuZXcgT2JzdGFjbGVzKHRoaXMuY3R4KTtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMsIHRoaXMub2JzdGFjbGVzLCB0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMueCwgdGhpcy55KTtcbiAgIFxuXG4gICAgICAgIHRoaXMuZ2FtZUxvb3AoKTtcbiAgICB9XG5cbiAgICBkcmF3QmFzZWxpbmUoKXtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyg1MCwgNTAwKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKDc1MCwgNTAwKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIGdhbWVMb29wKCl7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIHRoaXMucGxheWVyLmRyYXcoKTtcbiAgICAgICAgdGhpcy5kcmF3QmFzZWxpbmUoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3AuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgXG4gICAgZHJhd0JhY2tncm91bmQoKXtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1nLCAwLCAwKTtcbiAgICAgfVxuICAgICAgICBcblxuICAgIC8vIGp1bXAoKSB7XG4gICAgLy8gfVxuXG4gICAgLy8gYW5pbWF0ZSgpe1xuXG4gICAgLy8gICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgIC8vICAgICAvLyB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMuaGVpZ2h0LCB0aGlzLmNhbnZhcy53aWR0aCk7XG4gICAgLy8gICAgIGdhbWUuZHJhd0Jhc2VsaW5lKCk7XG4gICAgLy8gICAgIGdhbWUuZHJhd0NoYXJhY3RvcigpO1xuICAgIC8vIH1cblxufVxuXG4iXSwibmFtZXMiOlsiUGxheWVyIiwiT2JzdGFjbGVzIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsIngiLCJ5IiwiaGVpZ2h0IiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJvYnN0YWNsZXMiLCJwbGF5ZXIiLCJnYW1lTG9vcCIsImRyYXdCYXNlbGluZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwiZHJhdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJkcmF3QmFja2dyb3VuZCIsImRyYXdJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/obstacles.js":
/*!**********************************!*\
  !*** ./src/scripts/obstacles.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Obstacles; }\n/* harmony export */ });\nclass Obstacles {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.position = {\n      x: 700,\n      y: 450\n    };\n    this.velocity = 1;\n    this.obstacles = [];\n    for (let i = 0; i < 3; i++) {\n      const randomDistance = Math.floor(Math.random() * 1000) + 700;\n      // debugger \n      this.obstacles.push(this.generateObstacle(randomDistance));\n    }\n  }\n  generateObstacle(x) {\n    const obstacle = {\n      left: x\n      // right: 50 + x, \n    };\n\n    return obstacle;\n  }\n  moveObstacles() {\n    this.eachObstacles(function (obstacle) {\n      obstacle.left -= this.velocity;\n      // obstacle.right -= this.velocity\n    });\n\n    // If a obstacles has left the screen, add a new one to the end.\n    // if (this.obstacles[0].right <= 0) {\n    //     this.obstacles.shift();\n    //     const newX = this.obstacles[1].left;\n    //     this.obstacles.push(this.generateObstacle(newX));\n    // }\n  }\n\n  drawObstacles(ctx) {\n    // debugger\n    this.eachObstacles(function (obstacle) {\n      ctx.fillStyle = \"red\";\n      // debugger\n      ctx.fillRect(obstacle.left, 450, 50, 50);\n    });\n  }\n  animate() {\n    this.moveObstacles();\n    this.drawObstacles(this.ctx);\n  }\n  eachObstacles(callback) {\n    this.obstacles.forEach(callback.bind(this));\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9vYnN0YWNsZXMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNlLE1BQU1BLFNBQVMsQ0FBQztFQUMzQkMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFDO0lBQ1osSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBRztNQUNaQyxDQUFDLEVBQUUsR0FBRztNQUNOQyxDQUFDLEVBQUU7SUFDUCxDQUFDO0lBQ0QsSUFBSSxDQUFDQyxRQUFRLEdBQUcsQ0FBQztJQUVqQixJQUFJLENBQUNDLFNBQVMsR0FBRyxFQUFFO0lBRW5CLEtBQUssSUFBSUMsQ0FBQyxHQUFDLENBQUMsRUFBRUEsQ0FBQyxHQUFDLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7TUFDcEIsTUFBTUMsY0FBYyxHQUFJQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUc7TUFDOUQ7TUFDQSxJQUFJLENBQUNMLFNBQVMsQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNMLGNBQWMsQ0FBQyxDQUFDO0lBQzlEO0VBQ0o7RUFHQUssZ0JBQWdCQSxDQUFDVixDQUFDLEVBQUU7SUFDaEIsTUFBTVcsUUFBUSxHQUFHO01BQ2JDLElBQUksRUFBRVo7TUFDTjtJQUNKLENBQUM7O0lBQ0QsT0FBT1csUUFBUTtFQUNuQjtFQUVBRSxhQUFhQSxDQUFBLEVBQUc7SUFDWixJQUFJLENBQUNDLGFBQWEsQ0FBRSxVQUFTSCxRQUFRLEVBQUU7TUFDbkNBLFFBQVEsQ0FBQ0MsSUFBSSxJQUFJLElBQUksQ0FBQ1YsUUFBUTtNQUM5QjtJQUNKLENBQUMsQ0FBQzs7SUFFRjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFDSjs7RUFFQWEsYUFBYUEsQ0FBQ2pCLEdBQUcsRUFBQztJQUNkO0lBQ0EsSUFBSSxDQUFDZ0IsYUFBYSxDQUFDLFVBQVNILFFBQVEsRUFBRTtNQUNsQ2IsR0FBRyxDQUFDa0IsU0FBUyxHQUFHLEtBQUs7TUFDckI7TUFDQWxCLEdBQUcsQ0FBQ21CLFFBQVEsQ0FDUk4sUUFBUSxDQUFDQyxJQUFJLEVBQ2IsR0FBRyxFQUNILEVBQUUsRUFDRixFQUNKLENBQUM7SUFDTCxDQUFDLENBQUM7RUFDTjtFQUVBTSxPQUFPQSxDQUFBLEVBQUc7SUFDTixJQUFJLENBQUNMLGFBQWEsQ0FBQyxDQUFDO0lBQ3BCLElBQUksQ0FBQ0UsYUFBYSxDQUFDLElBQUksQ0FBQ2pCLEdBQUcsQ0FBQztFQUNoQztFQUVBZ0IsYUFBYUEsQ0FBQ0ssUUFBUSxFQUFFO0lBQ3BCLElBQUksQ0FBQ2hCLFNBQVMsQ0FBQ2lCLE9BQU8sQ0FBQ0QsUUFBUSxDQUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDN0M7QUFDTiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvc2NyaXB0cy9vYnN0YWNsZXMuanM/MGIxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic3RhY2xlcyB7XG4gICAgY29uc3RydWN0b3IoY3R4KXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiA3MDAsXG4gICAgICAgICAgICB5OiA0NTBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gMTtcblxuICAgICAgICB0aGlzLm9ic3RhY2xlcyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbURpc3RhbmNlID0gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApICsgNzAwO1xuICAgICAgICAgICAgLy8gZGVidWdnZXIgXG4gICAgICAgICAgICB0aGlzLm9ic3RhY2xlcy5wdXNoKHRoaXMuZ2VuZXJhdGVPYnN0YWNsZShyYW5kb21EaXN0YW5jZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG4gICAgZ2VuZXJhdGVPYnN0YWNsZSh4KSB7XG4gICAgICAgIGNvbnN0IG9ic3RhY2xlID0ge1xuICAgICAgICAgICAgbGVmdDogeCwgXG4gICAgICAgICAgICAvLyByaWdodDogNTAgKyB4LCBcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG9ic3RhY2xlO1xuICAgIH1cblxuICAgIG1vdmVPYnN0YWNsZXMoKSB7XG4gICAgICAgIHRoaXMuZWFjaE9ic3RhY2xlcyAoZnVuY3Rpb24ob2JzdGFjbGUpIHtcbiAgICAgICAgICAgIG9ic3RhY2xlLmxlZnQgLT0gdGhpcy52ZWxvY2l0eVxuICAgICAgICAgICAgLy8gb2JzdGFjbGUucmlnaHQgLT0gdGhpcy52ZWxvY2l0eVxuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgLy8gSWYgYSBvYnN0YWNsZXMgaGFzIGxlZnQgdGhlIHNjcmVlbiwgYWRkIGEgbmV3IG9uZSB0byB0aGUgZW5kLlxuICAgICAgICAvLyBpZiAodGhpcy5vYnN0YWNsZXNbMF0ucmlnaHQgPD0gMCkge1xuICAgICAgICAvLyAgICAgdGhpcy5vYnN0YWNsZXMuc2hpZnQoKTtcbiAgICAgICAgLy8gICAgIGNvbnN0IG5ld1ggPSB0aGlzLm9ic3RhY2xlc1sxXS5sZWZ0O1xuICAgICAgICAvLyAgICAgdGhpcy5vYnN0YWNsZXMucHVzaCh0aGlzLmdlbmVyYXRlT2JzdGFjbGUobmV3WCkpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgZHJhd09ic3RhY2xlcyhjdHgpe1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICB0aGlzLmVhY2hPYnN0YWNsZXMoZnVuY3Rpb24ob2JzdGFjbGUpIHtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChcbiAgICAgICAgICAgICAgICBvYnN0YWNsZS5sZWZ0LCBcbiAgICAgICAgICAgICAgICA0NTAsIFxuICAgICAgICAgICAgICAgIDUwLCBcbiAgICAgICAgICAgICAgICA1MFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5tb3ZlT2JzdGFjbGVzKCk7XG4gICAgICAgIHRoaXMuZHJhd09ic3RhY2xlcyh0aGlzLmN0eCk7XG4gICAgfVxuXG4gICAgZWFjaE9ic3RhY2xlcyhjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm9ic3RhY2xlcy5mb3JFYWNoKGNhbGxiYWNrLmJpbmQodGhpcykpO1xuICAgICAgfVxufSJdLCJuYW1lcyI6WyJPYnN0YWNsZXMiLCJjb25zdHJ1Y3RvciIsImN0eCIsInBvc2l0aW9uIiwieCIsInkiLCJ2ZWxvY2l0eSIsIm9ic3RhY2xlcyIsImkiLCJyYW5kb21EaXN0YW5jZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJnZW5lcmF0ZU9ic3RhY2xlIiwib2JzdGFjbGUiLCJsZWZ0IiwibW92ZU9ic3RhY2xlcyIsImVhY2hPYnN0YWNsZXMiLCJkcmF3T2JzdGFjbGVzIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJhbmltYXRlIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwiYmluZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/obstacles.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Player; }\n/* harmony export */ });\nclass Player {\n  constructor(game, obstacles, canvas, ctx, x, y) {\n    this.game = game;\n    this.obstacles = obstacles;\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.position = {\n      x: 330,\n      y: 400\n    };\n    this.velocity = {\n      y: 0,\n      x: 0\n    };\n    this.gravity = 1;\n    this.width = 100;\n    this.height = 100;\n    this.addEventHandlers();\n  }\n  addEventHandlers() {\n    document.addEventListener(\"keydown\", e => {\n      // console.log(e);\n      if (e.code === \"ArrowLeft\") {\n        this.velocity.x = -3;\n      } else if (e.code === \"ArrowRight\") {\n        this.velocity.x = 3;\n      }\n      if (e.code === \"ArrowUp\") {\n        this.velocity.y = -15;\n      }\n    });\n\n    // stop movement\n    document.addEventListener(\"keyup\", e => {\n      // console.log(e);\n      if (e.code === \"ArrowLeft\") {\n        this.velocity.x = 0;\n      } else if (e.code === \"ArrowRight\") {\n        this.velocity.x = 0;\n      }\n    });\n  }\n  animate() {\n    // 位置を決めている\n\n    if (this.position.y + this.height + this.velocity.y + 100 < this.canvas.height) {\n      this.velocity.y += this.gravity;\n    } else {\n      this.velocity.y = 0;\n    }\n    this.position.x += this.velocity.x;\n    this.position.y += this.velocity.y;\n  }\n  drawPlayer() {\n    // Draw the square\n    this.ctx.fillStyle = 'green';\n    this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);\n  }\n  draw() {\n    // Clear the canvas\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\n    // Draw background\n    this.game.drawBackground();\n    this.animate();\n\n    // Draw obstacles;\n    this.obstacles.animate();\n\n    // Draw player\n    this.drawPlayer();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsQ0FBQ0QsQ0FBQyxFQUFFLElBQUksQ0FBQ0ksS0FBSyxFQUFFLElBQUksQ0FBQ0MsTUFBTSxDQUFDO0VBQ2hGO0VBRUFVLElBQUlBLENBQUEsRUFBRztJQUNIO0lBQ0EsSUFBSSxDQUFDakIsR0FBRyxDQUFDa0IsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDbkIsTUFBTSxDQUFDTyxLQUFLLEVBQUUsSUFBSSxDQUFDUCxNQUFNLENBQUNRLE1BQU0sQ0FBQzs7SUFFL0Q7SUFDQSxJQUFJLENBQUNWLElBQUksQ0FBQ3NCLGNBQWMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQ04sT0FBTyxDQUFDLENBQUM7O0lBRWQ7SUFDQSxJQUFJLENBQUNmLFNBQVMsQ0FBQ2UsT0FBTyxDQUFDLENBQUM7O0lBRXhCO0lBQ0EsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztFQUdyQjtBQUdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvamVjdC8uL3NyYy9zY3JpcHRzL3BsYXllci5qcz82NDcxIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIG9ic3RhY2xlcywgY2FudmFzLCBjdHgsIHgsIHkpe1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLm9ic3RhY2xlcyA9IG9ic3RhY2xlcztcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogMzMwLFxuICAgICAgICAgICAgeTogNDAwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICB4OiAwXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdyYXZpdHkgPSAxO1xuXG4gICAgICAgIHRoaXMud2lkdGggPSAxMDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTAwO1xuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRIYW5kbGVycygpO1xuXG4gICAgfVxuXG4gICAgYWRkRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IC0zO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmNvZGUgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gMztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAtMTU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc3RvcCBtb3ZlbWVudFxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUuY29kZSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7IC8vIOS9jee9ruOCkuaxuuOCgeOBpuOBhOOCi1xuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCArIHRoaXMudmVsb2NpdHkueSArIDEwMCA8IHRoaXMuY2FudmFzLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ICs9IHRoaXMuZ3Jhdml0eTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMudmVsb2NpdHkueDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMudmVsb2NpdHkueTtcblxuICAgIH1cblxuICAgIGRyYXdQbGF5ZXIoKSB7XG4gICAgICAgIC8vIERyYXcgdGhlIHNxdWFyZVxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIC8vIENsZWFyIHRoZSBjYW52YXNcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIERyYXcgYmFja2dyb3VuZFxuICAgICAgICB0aGlzLmdhbWUuZHJhd0JhY2tncm91bmQoKTtcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG5cbiAgICAgICAgLy8gRHJhdyBvYnN0YWNsZXM7XG4gICAgICAgIHRoaXMub2JzdGFjbGVzLmFuaW1hdGUoKTtcblxuICAgICAgICAvLyBEcmF3IHBsYXllclxuICAgICAgICB0aGlzLmRyYXdQbGF5ZXIoKTtcblxuICAgICAgIFxuICAgIH1cblxuXG59Il0sIm5hbWVzIjpbIlBsYXllciIsImNvbnN0cnVjdG9yIiwiZ2FtZSIsIm9ic3RhY2xlcyIsImNhbnZhcyIsImN0eCIsIngiLCJ5IiwicG9zaXRpb24iLCJ2ZWxvY2l0eSIsImdyYXZpdHkiLCJ3aWR0aCIsImhlaWdodCIsImFkZEV2ZW50SGFuZGxlcnMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29kZSIsImFuaW1hdGUiLCJkcmF3UGxheWVyIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJkcmF3IiwiY2xlYXJSZWN0IiwiZHJhd0JhY2tncm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

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