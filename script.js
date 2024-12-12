console.log("First to score 5 wins the Game");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const ties = document.querySelector("#ties");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
let tiesCounter = 0;

let hScore = 0,
  cScore = 0;

const result = document.querySelector(".result");

function addDisabled() {
  document.querySelector("section").classList.add("disabled");
}

function removeDisabled() {
  document.querySelector("section").classList.remove("disabled");
}

function getComputerChoice() {
  let randomNum = Math.random();

  if (randomNum <= 0.33) {
    return "ROCK🪨";
  } else if (randomNum <= 0.66) {
    return "PAPER📜";
  } else {
    return "SCISSOR✂️";
  }
}

function playRound(hChoice) {
  let cChoice = getComputerChoice();
  if (hChoice == "ROCK🪨" || hChoice == "PAPER📜" || hChoice == "SCISSOR✂️") {
    result.innerHTML = `<p>You chose ${hChoice} and Computer chose ${cChoice}</p>`;
    if (hChoice == cChoice) {
      result.innerHTML += `<p>IT'S A DRAW!</p>`;
      ties.style.fontSize = "25px";
      ties.innerHTML = `<span style = "font-weight: 800";>Ties: ${++tiesCounter}</span>`;
    } else if (
      (hChoice == "ROCK🪨" && cChoice == "SCISSOR✂️") ||
      (hChoice == "SCISSOR✂️" && cChoice == "PAPER📜") ||
      (hChoice == "PAPER📜" && cChoice == "ROCK🪨")
    ) {
      result.innerHTML += `<p>YOU WIN 🎉</p>`;
      hScore++;
      playerScore.innerHTML = `<span>Player Score: ${hScore}</span>`;
      if (hScore == 5) {
        startButtonArea.style.display = "none";
        result.innerHTML = `<span style = "font-size: 50px">YAYY! YOU WON 🎉</span>`;
        result.innerHTML += `<p style = "font-size: 15px">LAST ROUND: You chose ${hChoice} and Computer chose ${cChoice}</p>`;
        addDisabled();
        console.log("REFRESH TO RESTART THE GAME");
      }
    } else {
      startButtonArea.style.display = "none";
      result.innerHTML += `<p>COMPUTER WINS 🎉</p>`;
      cScore++;
      computerScore.innerHTML = `<span>Computer Score: ${cScore}</span>`;
      if (cScore == 5) {
        startButtonArea.style.display = "none";
        result.innerHTML = `<span style = "font-size: 50px">YOU LOST BOOO!👎</span>`;
        result.innerHTML += `<p style = "font-size: 15px">LAST ROUND: You chose ${hChoice} and Computer chose ${cChoice}</p>`;
        addDisabled();
        console.log("REFRESH TO RESTART THE GAME");
      }
    }
  } else {
    console.log("Invalid Input");
  }
}

const startButtonArea = document.querySelector(".playButton");
const startButton = document.querySelector("#play");

startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  startButtonArea.textContent = "Game Begins ! Start By Choosing Your Move 🎯";
  startButtonArea.style.fontSize = "20px";
  startButtonArea.style.margin = "5px";
  startButtonArea.style.padding = "5px";
});

rock.addEventListener("click", () => playRound("ROCK🪨"));
paper.addEventListener("click", () => playRound("PAPER📜"));
scissor.addEventListener("click", () => playRound("SCISSOR✂️"));
