let hScore = 0,
  cScore = 0;

function getComputerChoice() {
  let randomNum = Math.random();

  if (randomNum <= 0.33) {
    return "Rock";
  } else if (randomNum <= 0.66) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

function getHumanChoice() {
  let humanChoice;
  humanChoice = prompt(
    "Choose between Rock, Paper & Scissor (Case-insensitive):"
  );
  return humanChoice;
}

function playRound(hChoice, cChoice) {
  if (hChoice == "rock" || hChoice == "paper" || hChoice == "scissor") {
    console.log(`You chose ${hChoice}`);
    console.log(`Computer's Choice ${cChoice}`);
    if (hChoice == cChoice) {
      console.log("It's a Draw!");
    } else if (
      (hChoice == "rock" && cChoice == "scissor") ||
      (hChoice == "scissor" && cChoice == "paper") ||
      (hChoice == "paper" && cChoice == "rock")
    ) {
      console.log("You Win!");
      hScore++;
    } else {
      console.log("Computer Wins!");
      cScore++;
    }
  } else {
    console.log("Invalid Input");
  }
}

let hChoice;
let cChoice;

hChoice = getHumanChoice();
cChoice = getComputerChoice();
cChoice = cChoice.toLowerCase();
hChoice = hChoice.toLowerCase();
playRound(hChoice, cChoice);

hChoice = getHumanChoice();
cChoice = getComputerChoice();
cChoice = cChoice.toLowerCase();
hChoice = hChoice.toLowerCase();
playRound(hChoice, cChoice);

hChoice = getHumanChoice();
cChoice = getComputerChoice();
cChoice = cChoice.toLowerCase();
hChoice = hChoice.toLowerCase();
playRound(hChoice, cChoice);

console.log(`Your Score: ${hScore} | Computer Score: ${cScore}`);
