// Accessing elements
// Same inputs
const resetButton = document.querySelector(".new-game");
const rollingDice1 = document.querySelector(".dice");
const holdButton = document.querySelector(".hold");
const dice = document.querySelector("img");
let diceNumber = Math.floor(Math.random() * 6) + 1;
let currentScore = 0;
let curentPlayer = 0;

// Player 1 selection
let player1 = document.querySelector("#player1");
let diceScore1 = document.querySelector("#player1 .dice-score span")
let player1CurrentScore = document.querySelector("#player1 .current-score span");

// Player 2 selection
let player2 = document.querySelector("#player2");
let diceScore2 = document.querySelector("#player2 .dice-score span")
let player2CurrentScore = document.querySelector("#player2 .current-score span");

// Logic
// Rolling dice logic
rollingDice1.addEventListener("click", () => {
    dice.style.visibility = "visible";
    diceNumber = Math.floor(Math.random() * 6) + 1;
    dice.src = `dice-${diceNumber}.png`;
    currentScore += diceNumber;
    player1CurrentScore.textContent = currentScore;
    if (diceNumber === 1) {
        player2.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        player1.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
        diceNumber = 0;
        player1CurrentScore.textContent = 0;
    } else {
        player2.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
        player1.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    }
})

// Holding score logic
holdButton.addEventListener("click", () => {
    diceScore1.textContent = currentScore;
    player1CurrentScore.textContent = 0;
    if (curentPlayer === 0) {
        player2.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        player1.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
    }
    else {
        curentPlayer = 1;
        player2.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
        player1.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    }
})