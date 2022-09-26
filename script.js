"use-strict";

const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
const score1 = document.querySelector(".score-1");
const score2 = document.querySelector(".score-2");
const current1 = document.querySelector(".current-score-1");
const current2 = document.querySelector(".current-score-2");
const dice = document.querySelector("img");
const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");

let scores, currentScore, activePlayer, playing;

const switchPlayer = function () {
  document.querySelector(`.current-score-${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 1 ? 2 : 1;
  currentScore = 0;
  player1.classList.toggle("player-active");
  player2.classList.toggle("player-active");
};

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 1;
  playing = true;

  current1.textContent = 0;
  current2.textContent = 0;
  score1.textContent = 0;
  score2.textContent = 0;

  player1.classList.add("player-active");
  player2.classList.remove("player-active");
  player1.classList.remove("player-winner");
  player2.classList.remove("player-winner");
  dice.classList.add("hidden");
};
init();

// rolling dice
btnRoll.addEventListener("click", function () {
  if (playing) {
    // setting dice
    const diceValue = Math.trunc(Math.random() * 6) + 1;

    // displaying dice
    dice.classList.remove("hidden");
    dice.src = `./assets/dice-${diceValue}.png`;

    // checking for ralled 1
    if (diceValue !== 1) {
      // add diceValue to current score
      currentScore += diceValue;
      document.querySelector(`.current-score-${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch player
      switchPlayer();
    }
  }
});

// adding score
btnHold.addEventListener("click", function () {
  if (playing) {
    // add current score to active player
    scores[activePlayer - 1] += currentScore;
    document.querySelector(`.score-${activePlayer}`).textContent =
      scores[activePlayer - 1];

    // check if player score is >= 50
    // finish the game
    if (scores[activePlayer - 1] >= 50) {
      playing = false;
      dice.classList.add("hidden");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add("player-winner");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove("player-active");
    } else {
      switchPlayer();
    }
  }
});

// start new game
btnNew.addEventListener("click", init);
