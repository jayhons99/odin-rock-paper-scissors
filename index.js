function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * choice.length);
  return choice[random];
}

// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  let result = "";
  if (playerSelection === computerSelection) {
    return "You both play " + playerSelection + ". Draw!";
  }
  switch (playerSelection.toLowerCase()) {
    case "rock":
      if (computerSelection === "scissors") {
        result = "You win!";
      } else {
        result = "You lose!";
      }
      break;
    case "scissors":
      if (computerSelection === "paper") {
        result = "You win!";
      } else {
        result = "You lose!";
      }
      break;
    case "paper":
      if (computerSelection === "rock") {
        result = "You win!";
      } else {
        result = "You lose!";
      }
      break;
  }
  return (
    "The opponent plays " +
    computerSelection +
    " and you play " +
    playerSelection +
    ". " +
    result
  );
}

// console.log(playRound("rock", getComputerChoice()));

function game() {
  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt(
      "Let's play rock, paper, scissors! What do you play?"
    );
    let normalizedChoice = playerChoice.toLowerCase();
    console.log(playRound(normalizedChoice, getComputerChoice()));
  }
}

game();
