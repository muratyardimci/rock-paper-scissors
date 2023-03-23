const SCISSORS = "scissors";
const PAPER = "paper";
const ROCK ="rock";
const moves = ["scissors", "paper", "rock"];
const options = document.querySelector(".game-options");
const message = document.getElementById("message");
const playerOneImg = document.querySelector(".player-1-choice img");
const playerTwoImg = document.querySelector(".player-2-choice img");
let playerScore1 = 0;
let playerScore2 = 0;

let playerOneMove = playerTwoMove = "";

function getRandomMove(){
    return moves[Math.floor(Math.random() * 3)];
}

options.addEventListener("click", function(event){
    playerTwoMove = getRandomMove();
    playerOneMove = event.target.dataset.id;
    options.style.pointerEvents = "none";
    playerOneImg.src = `images/${playerOneMove}.png`;
    playerOneImg.classList.remove("animate-1");
    playerTwoImg.src = `images/${playerTwoMove}.png`;
    playerTwoImg.classList.remove("animate-2");
    checkWinner();
});

function checkWinner(){
    if(playerOneMove === playerTwoMove){
        message.innerHTML = "draw!";
    }else if((playerOneMove === SCISSORS && playerTwoMove === PAPER) || (playerOneMove === PAPER && playerTwoMove === ROCK) || (playerOneMove === ROCK && playerTwoMove === SCISSORS)){
        message.innerHTML = "you win!";
        playerScore1++;
        console.log(playerScore1);
}else{
    message.innerHTML = "you lose!";
    playerScore2++;
    console.log(playerScore2);
}
restart();
}

function restart(){
    setTimeout(function(){
        playerTwoMove = getRandomMove();
        message.innerHTML = "Start!";
        playerOneImg.src = `images/hand.png`;
        playerOneImg.classList.add("animate-1");
        playerTwoImg.src = `images/hand.png`;
        playerTwoImg.classList.add("animate-2");
        options.style.pointerEvents =  "";
    }, 2000);
}

