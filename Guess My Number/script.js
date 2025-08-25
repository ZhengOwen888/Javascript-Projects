"use strict";

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = '?';
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 0;
const maxScore = 10;
const maxGuess = 100;
const minGuess = 1;
let secretNumber = Math.trunc(Math.random() * maxGuess) + minGuess;
let score = maxScore;
let highscore = 0;

const displayContent = function (element, message) {
    document.querySelector(element).textContent = message;
};

// Check button
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    if (!guess || typeof guess !== "number") {
        displayContent(".message", "No number!");

        // Correct guess
    } else if (guess === secretNumber) {
        displayContent(".message", "Correct Number!");
        displayContent(".number", secretNumber);
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        // Save highscore
        if (score > highscore) {
            highscore = score;
            displayContent(".highscore", highscore);
        }
        // Wrong guess
    } else if (guess !== secretNumber) {
        if (score > 1) {
            score--;
            displayContent(".score", score);
            displayContent(
                ".message",
                guess > secretNumber ? "Too high!" : "Too low"
            );

            // Game lost
        } else {
            displayContent(".message", "You lost the game!.");
            displayContent(".score", 0);
            document.querySelector("body").style.backgroundColor = "#d64a4aff";
            document.querySelector(".number").style.width = "30rem";
        }
    }
});

// Restart button
document.querySelector(".again").addEventListener("click", function () {
    score = maxScore;
    secretNumber = Math.trunc(Math.random() * maxGuess) + minGuess;
    displayContent(".message", "Start guessing...");
    displayContent(".score", score);
    displayContent(".number", "?");
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});
