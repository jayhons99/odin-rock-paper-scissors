let COMPUTER_WINS = 0;
let PLAYER_WINS = 0;

function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * choice.length);
  return choice[random];
}

function playRound(playerSelection, computerSelection) {
  let result = "";
  let didPlayerWin = false;
  if (playerSelection === computerSelection) {
    checkWinner();
    return "You both play " + playerSelection + ". Draw!";
  }
  switch (playerSelection.toLowerCase()) {
    case "rock":
      if (computerSelection === "scissors") {
        result = "You win!";
        didPlayerWin = true;
      } else {
        result = "You lose!";
      }
      break;
    case "scissors":
      if (computerSelection === "paper") {
        result = "You win!";
        didPlayerWin = true;
      } else {
        result = "You lose!";
      }
      break;
    case "paper":
      if (computerSelection === "rock") {
        result = "You win!";
        didPlayerWin = true;
      } else {
        result = "You lose!";
      }
      break;
  }

  updateScore(didPlayerWin);
  checkWinner();

  return (
    "The opponent plays " +
    computerSelection +
    " and you play " +
    playerSelection +
    ". " +
    result
  );
}

function updateScore(didPlayerWin) {
  const compScore = document.querySelector("#compScore");
  const playerScore = document.querySelector("#playerScore");

  if (didPlayerWin) {
    PLAYER_WINS++;
  } else {
    COMPUTER_WINS++;
  }

  compScore.textContent = COMPUTER_WINS;
  playerScore.textContent = PLAYER_WINS;
}

function checkWinner() {
  const outcome = document.querySelector("#isGameOver");
  if (PLAYER_WINS === 5) {
    outcome.textContent = "You have won, congratulations!";
    PLAYER_WINS = 0;
    COMPUTER_WINS = 0;
  } else if (COMPUTER_WINS === 5) {
    outcome.textContent = "You have lost. Try again.";
    PLAYER_WINS = 0;
    COMPUTER_WINS = 0;
  } else {
    outcome.textContent = "First to win 5 rounds wins the game!";
  }
}

function game() {
  const buttons = document.querySelectorAll(".choice");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const display = document.querySelector("#result");
      const compChoice = getComputerChoice();
      const outcome = playRound(btn.textContent.toLowerCase(), compChoice);
      display.textContent = outcome;
    });
  });
}

game();
