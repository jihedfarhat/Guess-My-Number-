'use strict';
/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 5;
console.log(document.querySelector('.guess').value); */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
let highscore = 0;
// funct Display Message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// funct Body BACKGROUND Color
const bodyBackground = function (bodycolor) {
  document.querySelector('body').style.backgroundColor = bodycolor;
};
// funct Number Width
const numberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
// funct Score
const numberScore = function (score) {
  document.querySelector('.score').textContent = score;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When Guess no number
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');
    // When Player Win
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');

    bodyBackground('#60b347');

    numberWidth('30rem');

    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too Hight' : '📉Too Low');
      score--;
      numberScore(score);
    } else {
      displayMessage('💥You lost the game!');
      numberScore(0);
    }
  }
});
// Game Again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  numberScore('20');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  bodyBackground('#222');

  numberWidth('15rem');
});
