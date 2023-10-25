
import Game from "./scripts/game";

const canvas = document.getElementById('runner_game');
const game = new Game(canvas);
// debugger
// game.drawBaseline();
// game.player.drawSquare();

// document.addEventListener('keydown', (e) => {
//     if (e.code === 'Space') {
//         const jumping = true;
//         game.gameLoop(jumping);
//     }
// });

const btn3 = document.getElementById('btn3');
const mask = document.getElementById('mask');
const modal = document.getElementById('modal');

btn3.addEventListener('click', () => {
  mask.classList.remove('hidden');
  modal.classList.remove('hidden');
});

mask.addEventListener('click', () => {
  mask.classList.add('hidden');
  modal.classList.add('hidden');
});



