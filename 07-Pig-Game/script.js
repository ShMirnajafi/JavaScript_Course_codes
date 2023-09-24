'use strict';

const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.getElementById('score--0');
const score1EL = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

let gameState = true;
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];

const setGame = () => {
  gameState = true;
  score0EL.textContent = '0';
  score1EL.textContent = '0';
  current0EL.textContent = '0';
  current1EL.textContent = '0';
  scores[0] = 0;
  scores[1] = 0;
  activePlayer = 0;
  currentScore = 0;

  diceEL.classList.add('hidden');
  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');
  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');
};

const rollDice = () => {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceEL.classList.remove('hidden');
  diceEL.src = `dice-${dice}.png`;
  return dice;
};

const setPlayerScore = score => {
  document.getElementById(`current--${activePlayer}`).textContent = score;
};

const toggleActivePlayer = () => {
  currentScore = 0;
  setPlayerScore(currentScore);
  activePlayer = activePlayer === 1 ? 0 : 1;
  player1EL.classList.toggle('player--active');
  player0EL.classList.toggle('player--active');
};

setGame();

btnRoll.addEventListener('click', function () {
  if (gameState) {
    const dice = rollDice();

    if (dice !== 1) {
      currentScore += dice;
      setPlayerScore(currentScore);
    } else {
      toggleActivePlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (gameState) {
    scores[activePlayer] += currentScore;
    activePlayer === 0
      ? (score0EL.textContent = scores[0])
      : (score1EL.textContent = scores[1]);

    if (scores[activePlayer] >= 100) {
      gameState = false;
      diceEL.classList.add('hidden');
      if (activePlayer === 1) {
        player1EL.classList.add('player--winner');
        player1EL.classList.remove('active--player');
      } else {
        player0EL.classList.add('player--winner');
        player0EL.classList.remove('active--player');
      }
    } else {
      toggleActivePlayer();
    }
  }
});

btnNew.addEventListener('click', setGame);
