'use strict';

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener
('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input 
    if (!guess) {
        //document.querySelector('.message').textContent = 'No number!';
        displayMessage('No number!');

    // When player wins     
    } else if (guess === SecretNumber) {
        //document.querySelector('.message').textContent = 'Correct number!';
        displayMessage('Correct number!');
        document.querySelector('.number').textContent = SecretNumber;

        document.querySelector('body').style.backgroundColor = '#f49f1c';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
      
    } else if (guess !== SecretNumber) {
        if (score > 1) {
            //document.querySelector('.message').textContent = guess > SecretNumber ? 'Too high!' : 'Too low!';
            displayMessage(guess > SecretNumber ? 'Too high!' : 'Too low!');
            score--;
            document.querySelector('.score').textContent = score;

        } else {
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    };
        

    /*    // When guess is too high  
    } else if (guess > SecretNumber) {
        if (score > 1) {
        document.querySelector('.message').textContent = 'Too high!';
        score--;
        document.querySelector('.score').textContent = score;
     } else {
         document.querySelector('.message').textContent = 'You lost the game!';
         document.querySelector('.score').textContent = 0;
     }

    // When guess is too low 
    } else if (guess < SecretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
         } else {
             document.querySelector('.message').textContent = 'You lost the game!';
             document.querySelector('.score').textContent = 0;
         }
    } */

});

document.querySelector('.again').addEventListener('click', function () {
     score = 20;
     SecretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#143d59';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
});