 
let playerScore = 0;
let computerScore = 0;
let gameOver = false;
let winner;

function game(){
    let input = prompt("Rock, Paper, or Scissors?");
    let playerSelection = input.toLowerCase();
    let computerSelection = computerPlay();

    function computerPlay() {
        const choiceArray = ["rock", "paper", "scissors"];
        index = getRandomIndex();

        function getRandomIndex(){
            return Math.floor(Math.random()*choiceArray.length);
        }

        return choiceArray[index];
    }

    function playRound(playerSelection, computerSelection){
        if (playerSelection == "rock" && computerSelection == "paper"){
            computerScore++;
            return "You Lose! " + computerSelection + " beats " + playerSelection; 
        }
        else if (playerSelection == "rock" && computerSelection == "scissors"){
            playerScore++;
            return "You Win! " + playerSelection + " beats " + computerSelection;
        }
        else if (playerSelection == "paper" && computerSelection == "scissors"){
            computerScore++;
            return "You Lose! " + computerSelection + " beats " + playerSelection; 
        }
        else if (playerSelection == "paper" && computerSelection == "rock"){
            playerScore++;
            return "You Win! " + playerSelection + " beats " + computerSelection;
        }
        else if (playerSelection == "scissors" && computerSelection == "rock"){
            computerScore++;
            return "You Lose! " + computerSelection + " beats " + playerSelection; 
        }
        else if (playerSelection == "scissors" && computerSelection == "paper"){
            playerScore++;
            return "You Win! " + playerSelection + " beats " + computerSelection;
        }
        else{
            return "Draw"
        }
    }

    console.log(playRound(playerSelection, computerSelection));
}

while (!gameOver){
    if(playerScore == 5 || computerScore == 5){
        console.log("Game Over");
        gameOver = true;
        winner = (playerScore == 5) ? "You Win" : "The Computer Won";
        console.log(winner);
    }
    else{
        game();
        console.log("player: " + playerScore + "\n" + "computer: " + computerScore);
    }
}