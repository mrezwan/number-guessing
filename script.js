'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const messageDisplay = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input

  if (!guess) {
    // document.querySelector('.message').textContent = 'Please enter a number';
    messageDisplay('Please enter a number');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'The number is correct!';
    messageDisplay('The number is correct!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When the number is higher
  } else if (score !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Number is too high' : '📈 Number is too low';
      messageDisplay(
        guess > secretNumber ? '📈 Number is too high' : '📈 Number is too low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').innerText = '😥 You lost the game';
      messageDisplay('😥 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  } // else if (guess > secretNumber) {
  //   // When the number is lower
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').innerText = '😥 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  messageDisplay('Start guessing...');
  document.querySelector('.score').innerText = score;
  document.querySelector('.number').innerText = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
