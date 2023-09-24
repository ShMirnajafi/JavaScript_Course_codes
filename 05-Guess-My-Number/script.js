'use strict';

let randNum = Math.trunc(Math.random() * 20) + 1;
console.log(randNum);

document.querySelector('.check').addEventListener('click', function () {
  const gussedNumber = Number(document.querySelector('.guess').value);
  console.log(gussedNumber);
  if (document.querySelector('.score').textContent === '0') {
    document.querySelector('.message').textContent = 'you are a losser...';
    return;
  }
  if (typeof gussedNumber !== 'number') {
    document.querySelector('.message').textContent = 'enter a number';
  } else {
    if (gussedNumber <= 20 && gussedNumber >= 1) {
      if (gussedNumber !== randNum) {
        // if (gussedNumber > randNum) {
        //   document.querySelector('.message').textContent = 'to high...';
        // } else if (gussedNumber < randNum) {
        //   document.querySelector('.message').textContent = 'to low...';
        // }
        document.querySelector('.message').textContent =
          gussedNumber > randNum ? 'to high...' : 'to low...';
        document.querySelector('.score').textContent =
          Number(document.querySelector('.score').textContent) - 1;
      } else {
        document.querySelector('.message').textContent = 'Correct!';
        document.querySelector('.number').textContent = randNum;
        document.querySelector('.highscore').textContent =
          document.querySelector('.score').textContent;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
      }
    } else {
      document.querySelector('.message').textContent =
        'choose between 1 to 20...';
      document.querySelector('.score').textContent =
        Number(document.querySelector('.score').textContent) - 1;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
});
