let playerScore = 0;
let computerScore = 0;
let winner;
let playerSelection;
let computerSelection;
let fontIncrease = 0;
const announcement = document.querySelector(".announcement");
const computersChoice = document.querySelector(".computers-choice")
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const buttons = document.querySelectorAll(".buttons");
const modal = document.querySelector(".modal");
const resetButton = document.querySelector(".reset-button");

function isGameOver(){
    return playerScore == 5 || computerScore == 5;
}

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
        announcement.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
        fontsize = 20 + fontIncrease;
        announcement.setAttribute("style", "font-size: " + fontsize + "px");
        fontIncrease+=2;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        playerScore++;
        announcement.textContent =  "You Win! " + playerSelection + " beats " + computerSelection;
        fontsize = 20 + fontIncrease;
        announcement.setAttribute("style", "font-size: " + fontsize + "px");
        fontIncrease+=2;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++;
        announcement.textContent =  "You Lose! " + computerSelection + " beats " + playerSelection;
        fontsize = 20 + fontIncrease;
        announcement.setAttribute("style", "font-size: " + fontsize + "px")
        fontIncrease+=2;
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore++;
        announcement.textContent =  "You Win! " + playerSelection + " beats " + computerSelection;
        fontsize = 20 + fontIncrease;
        announcement.setAttribute("style", "font-size: " + fontsize + "px");
        fontIncrease+=2;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++;
        announcement.textContent =  "You Lose! " + computerSelection + " beats " + playerSelection;
        fontsize = 20 + fontIncrease;
        announcement.setAttribute("style", "font-size: " + fontsize + "px");
        fontIncrease+=2;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++;
        announcement.textContent =  "You Win! " + playerSelection + " beats " + computerSelection;
        fontsize = 20 + fontIncrease;
        announcement.setAttribute("style", "font-size: " + fontsize + "px");
        fontIncrease+=2;
    }
    else{
        announcement.textContent =  "Draw";
        fontsize = 20 + fontIncrease;
        announcement.setAttribute("style", "font-size: " + fontsize + "px");
        fontIncrease+=2;
    }

    computersChoice.textContent = "The computer chose " + computerSelection;
    player.textContent = "Player: " + playerScore;
    computer.textContent = "Computer: " + computerScore;
}


function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none"
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    fontIncrease = 0;
    announcement.textContent =  "";
    announcement.setAttribute("style", "font-size: 20px");
    computersChoice.textContent = "";
    player.textContent = "Player: 0";
    computer.textContent = "Computer: 0";
}



buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(isGameOver()){
            return
        }

        playerSelection = button.id;
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);

        if(isGameOver()){
            winner = (playerScore == 5) ? "You Win" : "The Computer Won";
            announcement.textContent = "Game Over! " + winner;
            openModal();
        }
        
    });
});

resetButton.addEventListener('click', () => {
    resetGame(); 
    closeModal();
});