function computerPlay(){
    let play ="";
    let playNumber = Math.floor(Math.random()*3+1)
    switch (playNumber){
        case 1:
            play ="rock"
        break;
        case 2:
            play ="paper"
        break;
        case 3:
            play = "scissors"
        break;

    }

    return play;
}
function roundOfRPS(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection ==='rock'){
        if (computerSelection ==='rock') {
            return "Tie! Rock Vs Rock!"
        }
        if (computerSelection ==='paper') {
            return "You lose! Paper covers Rock!"
        }
        if (computerSelection ==='scissors') {
            return "You win! Rock smashes Scissors!"
        }
    }
    if (playerSelection === 'paper'){
        if (computerSelection ==='rock') {
            return "You win! Paper covers Rock!!"
        }
        if (computerSelection ==='paper') {
            return "Tie! Paper Vs Paper!"
        }
        if (computerSelection ==='scissors') {
            return "You lose! Scissors cut Paper!"
        }


    }
    if (playerSelection === 'scissors'){
        if (computerSelection ==='rock') {
            return "You lose! Rock smashes Scissors!"
        }
        if (computerSelection ==='paper') {
            return "You win! Scissors cut Paper!"
        }
        if (computerSelection ==='scissors') {
            return "Tie! Scissors vs Scissors!"
        }
    }
}
function game(){
let playerChoice=''
while (playerChoice!='rock' && playerChoice!='paper' && playerChoice!='scissors'){
playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase()

}
let computerChoice = computerPlay()
let outcome = roundOfRPS(playerChoice , computerChoice)
console.log(outcome)
alert(outcome)
}
for (let i=0;i<5;i++){
    game()
}
