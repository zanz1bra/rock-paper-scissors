let options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "Rock") {
        return "This is a tie!";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper") {
        return "You choose poorly! Paper beats Rock!";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors") {
        return "You choose wisely! Rock beats Scissors";

    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Paper") {
        return "This is a tie!";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors") {
        return "You choose poorly! Scissors beat Paper!";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") {
        return "You choose wisely! Paper beats Rock";
        
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Scissors") {
        return "This is a tie!";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock") {
        return "You choose poorly! Rock beats Scissors!";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper") {
        return "You choose wisely! Scissors beat Paper";
    }
}

let playerSelection = prompt("Rock, Paper or Scissors? Choose wisely!");
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
