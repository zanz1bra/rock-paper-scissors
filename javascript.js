let options = ["Rock", "Paper", "Scissors"];

let tie = "This is a tie!";
let rockPaper = "You choose poorly! Paper beats Rock!";
let rockScissors = "You choose wisely! Rock beats Scissors";
let paperScissors = "You choose poorly! Scissors beat Paper!";
let paperRock = "You choose wisely! Paper beats Rock";
let scissorsRock = "You choose poorly! Rock beats Scissors!";
let scissorsPaper = "You choose wisely! Scissors beat Paper";

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "Rock") {
        return tie;
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper") {
        return rockPaper;
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors") {
        return rockScissors;

    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Paper") {
        return tie;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors") {
        return paperScissors;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") {
        return paperRock;

    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Scissors") {
        return tie;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock") {
        return scissorsRock;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper") {
        return scissorsPaper;
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        console.log("Round: " + round);
        let playerSelection = prompt("Rock, Paper or Scissors? Choose wisely!");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result.includes("You choose wisely")) {
            playerScore++
        } else if (result.includes("You choose poorly")) {
            computerScore++
        } else {
            console.log(tie)
        }
    }


    if (playerScore > computerScore) {
        console.log("You win! Great job!");
    } else {
        console.log("You lose! But at least you still have a face! :)")
    }
}

playGame();