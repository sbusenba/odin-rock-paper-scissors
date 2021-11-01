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
    document.querySelector(`.computerButton[data-compChoice="${play}"]`).classList.add('selected')
    return play;
}
function roundOfRPS(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection ==='rock'){
        if (computerSelection ==='rock') {
            tie()
            return "Tie! Rock Vs Rock!"
        }
        if (computerSelection ==='paper') {
            defeat()
            return "You lose! Paper covers Rock!"
        }
        if (computerSelection ==='scissors') {
            victory()
            return "You win! Rock smashes Scissors!"
        }
    }
    if (playerSelection === 'paper'){
        if (computerSelection ==='rock') {
            victory()
            return "You win! Paper covers Rock!!" 
        }
        if (computerSelection ==='paper') {
            tie()
            return "Tie! Paper Vs Paper!"
        }
        if (computerSelection ==='scissors') {
            defeat()
            return "You lose! Scissors cut Paper!"
        }


    }
    if (playerSelection === 'scissors'){
        if (computerSelection ==='rock') {
            defeat()
            return "You lose! Rock smashes Scissors!"
        }
        if (computerSelection ==='paper') {
            victory()
            return "You win! Scissors cut Paper!"
        }
        if (computerSelection ==='scissors') {
            tie()
            return "Tie! Scissors vs Scissors!"
        }
    }
}
function game(playerChoice){
    console.log(playerChoice)
    let computerChoice = computerPlay()
    let outcome = roundOfRPS(playerChoice , computerChoice)
    return outcome;
}
function playerChose(e){
    this.classList.add('selected')  
    toast.innerText=game(this.getAttribute('data-value'))
}
function defeat(){
    computerScore++
    document.querySelector('.computerScore').innerText = computerScore 
}
function victory(){
    playerScore++
    document.querySelector('.playerScore').innerText = playerScore
}
function tie(){
    toast.innerText="Tie!"
}

function removeTransform(e){
this.classList.remove('selected')

}
let playerScore= 0
let computerScore = 0
let toast = document.querySelector('.toast')
document.querySelector('.playerScore').innerText = playerScore
document.querySelector('.computerScore').innerText = computerScore
let playerButtons = document.querySelectorAll('.playerButton')
let buttons = document.querySelectorAll('button')
playerButtons.forEach(button => button.addEventListener('click',playerChose))
buttons.forEach(button => button.addEventListener('transitionend',removeTransform))
