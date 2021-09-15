// import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Game from './Game';
import reportWebVitals from './reportWebVitals';

function getRandomColor() {
  const h = Math.floor(Math.random() * 256);
  const s = 100;
  const l = 50;
  return [`hsl(${h},${s}%,${l}%)`, `hsl(${h + 180 % 360},${s}%,${l}%)`];
}

// step 1 - define values //
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const game = new Game();

// -------- Game ----------
document.addEventListener('keydown', game.keyDownHandler.bind(game), false);
document.addEventListener('keyup', game.keyUpHandler.bind(game), false);
document.addEventListener('mousemove', game.mouseMoveHandler.bind(game), false);

requestAnimationFrame(() => {
  game.draw();
});


ReactDOM.render(
   game.draw(),
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { getRandomColor, canvas, ctx };
