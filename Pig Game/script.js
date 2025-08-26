"use strict";

// Get property value
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");
const score0Element = document.getElementById("score--0");
const score1Element = document.getElementById("score--1");
const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");

const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting condition
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add("hidden");

const winScore = 20; 
let scores, currentScore, activePlayer, playing; // global variables

// Starting condition
const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    diceElement.classList.add("hidden");
    player0Element.classList.remove("player--winner");
    player1Element.classList.remove("player--winner");
    player0Element.classList.add("player--active");
    player1Element.classList.remove("player--active");

    score0Element.textContent = 0;
    score1Element.textContent = 0;
    current0Element.textContent = 0;
    current1Element.textContent = 0;
};

// Initialize the game
init();

const switchPlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Element.classList.toggle("player--active");
    player1Element.classList.toggle("player--active");
};

// Roll dice
btnRoll.addEventListener("click", function () {
    if (playing) {
        // Generate a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // Display dice
        diceElement.classList.remove("hidden");
        diceElement.src = `dice-${dice}.png`;

        // Check for roll 1 and 4
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore;
        } else {
            // Switch to next player
            switchPlayer();
        }
    }
});

// Hold points
btnHold.addEventListener("click", function () {
    if (playing) {
        // Add current score to active player's score
        scores[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

        // Check if score reached winning score
        if (scores[activePlayer] >= winScore) {
            // End game
            playing = false;
            diceElement.classList.add("hidden");
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add("player--winner");
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove("player--active");
        } else {
            // Switch to next player
            switchPlayer();
        }
    }
});

// New game
btnNew.addEventListener("click", init);
