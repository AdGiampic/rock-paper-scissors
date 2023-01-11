const Rock = "rock";
const Paper = "paper";
const Scissors = "scissors";


function getComputerChoice () { //function that lets the CPU pick between Rock Paper Scissors"

    const min = 1;
    const max = 3;
    let nmb = Math.floor(Math.random() *(max - min + 1)) + min; // random number between 1 and 3
    if (nmb == 1) {  // 1 is rock
        return Rock;
    } else if (nmb == 2) { // 2 is paper
        return Paper;
    }else{
        return Scissors; // 3 is scissors
    }
}


let plyrScore = Number(0);
let comptrScore = Number(0);
function playRound (comptrChoice,plyrChoice) { // function that plays a round of the game
    if (comptrChoice == plyrChoice) {   
        return comptrScore + " - " + plyrScore; // if both picked the same thing is a tie
    }
    if (comptrChoice == Scissors && plyrChoice == Paper) { //scissors beats paper
        ++comptrScore;
        return comptrScore + " - " + plyrScore;
    }
    if (comptrChoice == Paper && plyrChoice == Scissors) {
        ++plyrScore;
        return comptrScore + " - " + plyrScore;
    }
    if (comptrChoice == Scissors && plyrChoice == Rock) { // rock beats Scissors
        ++plyrScore;
        return comptrScore + " - " + plyrScore;
    }
    if (comptrChoice == Rock && plyrChoice == Scissors) {
        ++comptrScore;
        return comptrScore + " - " + plyrScore;
    }
    if (comptrChoice == Paper && plyrChoice == Rock) { // paper beats rock
        ++comptrScore;
        return comptrScore + " - " + plyrScore;
    }
    if (comptrChoice == Rock && plyrChoice == Paper) {
        ++plyrScore;
        return comptrScore + " - " + plyrScore;
    }

}

function getplyrChoice () {
    const btnr = document.querySelector('#rock');
    const btnp = document.querySelector('#paper');
    const btns = document.querySelector('#scissors');
    btnr.onclick = () => Rock; // if button rock is clicked return rock
    btnp.onclick = () => Paper; // paper
    btns.onclick = () => Scissors;
    
}
document.addEventListener("click",getplyrChoice());

function game () {
    let comptrChoice = getComputerChoice();
    let plyrChoice = "";
    playRound (comptrChoice,plyrChoice);
    if (plyrScore > comptrScore) {
        return console.log("Congratulations, you won the match. Score: " + plyrScore + " - " + comptrScore);
    }else {
        return console.log("Too bad, you lost, maybe next time. Score: " + plyrScore + " - " + comptrScore);
    }
}
