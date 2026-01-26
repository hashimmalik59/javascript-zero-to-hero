// Accessing elements

// Dynamic name from user
const player1 = prompt("Enter player1 name");
const player2 = prompt("Enter player2 name");

// Buttons
const resetButton = document.querySelector(".new-game");
const diceButton = document.querySelector(".dice");
const holdButton = document.querySelector(".hold");

// Image
const dice = document.querySelector("img");

// Player name
const player1Name = document.querySelector(`.name0`);
const player2Name = document.querySelector(`.name1`);


function playerName(name1, name2) {
    player1Name.textContent = name1 || "Player 1";
    player2Name.textContent = name2 || "Player 2";

}
playerName(player1, player2);

// Switch player
let activePlayer = 0;

// Currrent score
let scores = [0, 0];

// Playing or not
let isPlaying = true;

// Starting score
let currentScore = 0;

function switchPlayer() {
    currentScore = 0;
    document.querySelector(`.current${activePlayer}`).textContent = currentScore;
    document.querySelector(`.player${activePlayer}`).classList.toggle("player-active");
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player${activePlayer}`).classList.toggle("player-active");
}

diceButton.addEventListener("click", () => {
    if (isPlaying) {
        // Show a dice
        dice.classList.remove("hidden");
        // Generate random dice number
        let diceNumber = Math.floor(Math.random() * 6) + 1;
        // Display dice
        dice.src = `dice-${diceNumber}.png`;
        // roll === 1 => switch player
        if (diceNumber !== 1) {
            currentScore += diceNumber;
            document.querySelector(`.current${activePlayer}`).textContent = currentScore;
        } else {
            // add dice number into current
            switchPlayer();
        }
    }
})

holdButton.addEventListener("click", () => {
    if (isPlaying) {
        // add current score to the active player
        scores[activePlayer] += currentScore;
        // show the active player main score
        document.querySelector(`.score${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 100) {
            // Finish game
            isPlaying = false;
            document.querySelector(`.player${activePlayer}`).classList.add("player-winner");
            document.querySelector(`.player${activePlayer}`).classList.remove("player-active");
            document.querySelector(`.current${activePlayer}`).textContent = 0;
            dice.classList.add("hidden");
        } else {
            // switch active player
            switchPlayer();
        }
    }
})

resetButton.addEventListener("click", () => {
    // All data is zero
    isPlaying = true;
    currentScore = 0;
    scores = [0, 0];
    activePlayer = 0
    document.querySelector(`.score0`).textContent = 0;
    document.querySelector(`.score1`).textContent = 0
    document.querySelector(`.current0`).textContent = 0;
    document.querySelector(`.current1`).textContent = 0;

    // Remoing winners class
    document.querySelector(`.player0`).classList.remove("player-winner");
    document.querySelector(`.player1`).classList.remove("player-winner");

    // Activating active player
    document.querySelector(`.player0`).classList.add("player-active");

    // Dynamic name from user
    const player1 = prompt("Enter player1 name");
    const player2 = prompt("Enter player2 name");
    // Player name
    const player1Name = document.querySelector(`.name0`);
    const player2Name = document.querySelector(`.name1`);
    // Getting dynamic names from user name
    function playerName(name1, name2) {
        player1Name.textContent = name1 || "Player 1";
        player2Name.textContent = name2 || "Player 2";

    }
    playerName(player1, player2);
})