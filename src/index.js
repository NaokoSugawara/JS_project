
import Game from "./scripts/game";

const canvas = document.getElementById('runner_game');
const game = new Game(canvas);

// Instruction popup
const btn = document.getElementById('btn');
const mask = document.getElementById('mask');
const modal = document.getElementById('modal');

btn.addEventListener('click', () => {
  mask.classList.remove('hidden');
  modal.classList.remove('hidden');
});

mask.addEventListener('click', () => {
  mask.classList.add('hidden');
  modal.classList.add('hidden');
});



