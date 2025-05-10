'use strict';

// starting values
const startScore = 20;
const minNumber = 1;
const maxNumber = 20;

let secretNumber = Math.trunc(Math.random() * maxNumber) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  return (document.querySelector('.message').textContent = message);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When entering invalid number
  if (!guess || guess < minNumber || guess > maxNumber) {
    displayMessage('🛑 Enter a valid number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.check').disabled = true;
    document.querySelector('.guess').disabled = true;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🔺 Too high!' : '🔻 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost!');
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * maxNumber) + 1;
  score = startScore;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
});
