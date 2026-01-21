//Accessing elements
const container = document.querySelector(".container");
const resetButton = document.querySelector(".reset");
const correctNumber = document.querySelector(".correct");
const input = document.querySelector("input");
const checkButton = document.querySelector(".check");
const message = document.querySelector(".message");
const userScore = document.querySelector(".score");
const userHighscore = document.querySelector(".highscore");
let secretNumber = Math.floor(Math.random() * 20) + 1
let score = 20;
let highscore = 0;
checkButton.addEventListener("click", () => {
    if (+input.value === secretNumber) {
        container.style.backgroundColor = "green";
        message.textContent = "Correct Number!"
        correctNumber.textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            userHighscore.textContent = `Highscore: ${highscore}`;
        }
    } else {
        score--;
        userScore.textContent = `Score: ${score}`;
        if (input.value === "") {
            score = 20;
            userScore.textContent = `Score: ${score}`;
            message.textContent = "Invalid number...";
            input.style.border = "4px solid red";
            message.style.color = "red"
        } else if (score < 1) {
            userScore.textContent = "Game over...";
            message.style.color = 'white'
            checkButton.style.opacity = ".5";
            container.style.backgroundColor = "red";
            message.textContent = "You lose...";
            message.style.color = "white"
            input.style.border = "2px solid white";
        }
        else if (input.value > secretNumber) {
            message.textContent = "Too High";
            message.style.color = "white"
            input.style.border = "2px solid white";

        } else {
            message.textContent = "Too Low";
            message.style.color = "white"
            input.style.border = "2px solid white";
        }
    }
})

resetButton.addEventListener("click", () => {
    container.style.backgroundColor = "#1f2937";
    correctNumber.textContent = "?";
    input.value = "";
    message.textContent = "Start guessing..."
    message.style.color = "#fff";
    input.style.border = "2px solid white";
    score = 20;
    userScore.textContent = `Score: ${score}`;
    checkButton.style.opacity = "1"
    secretNumber = Math.floor(Math.random() * 20) + 1;
    console.log(secretNumber);
})