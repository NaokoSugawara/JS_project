// import Example from "./scripts/example";

// document.addEventListener("DOMContentLoaded", () => {
//     // console.log("Hello, this is's from index.js");
//     console.log("HELLO WORLD");
//     const main = document.getElementById("main")
//     new Example(main);
// })

import Game from "./scripts/game";

const canvas = document.getElementById('runner_game');
const game = new Game(canvas);
game.gameLoop();




