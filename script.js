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


function ctrlinput (plyrChoice) {  // function that checks the input text from the player
    if (plyrChoice.toLowerCase() == Rock || plyrChoice.toLowerCase() == Paper || plyrChoice.toLowerCase() == Scissors ) {
        return true;
    } else {
        return false;
    }
}

let comptrChoice;
let plyrChoice ;
let plyrScore = Number(0);
let comptrScore = Number(0);
function playRound (comptrChoice,plyrChoice) { // function that plays a round of the game
    if (comptrChoice == plyrChoice) {  
        return comptrScore + " - " + plyrScore;
        //console.log("Tie"); // if both CPU and player picked the same option then it's a tie
    }
    if (comptrChoice == Scissors && plyrChoice == Paper) {
        ++comptrScore;
        return comptrScore + " - " + plyrScore;
    }
    if (comptrChoice == Paper && plyrChoice == Scissors) {
        ++plyrScore;
        //return plyrScore;
        return comptrScore + " - " + plyrScore;
    }
    if (comptrChoice == Scissors && plyrChoice == Rock) {
        ++plyrScore;
        //return plyrScore;
        return comptrScore + " - " + plyrScore;
    }
    if (comptrChoice == Rock && plyrChoice == Scissors) {
        ++comptrScore;
        //return comptrScore;
        return comptrScore + " - " + plyrScore;
    }
    if (comptrChoice == Paper && plyrChoice == Rock) {
        ++plyrScore;
        //return plyrScore;
        return comptrScore + " - " + plyrScore;
    }
    if (comptrChoice == Rock && plyrChoice == Paper) {
        ++comptrScore;
        //return comptrScore;
        return comptrScore + " - " + plyrScore;
    }

}

function game () {
    for (let i = 0; i < 5; i++) {
        let comptrChoice = getComputerChoice();
        let plyrChoice = prompt("Choose between 'Rock','Paper' or 'Scissors' to play.");
        if (ctrlinput (plyrChoice) == false) { // if the input is invalid i'll block the script
            throw Error ("Text Invalid. \nPlease input the correct text to play.");
        }
        playRound (comptrChoice,plyrChoice);
    }
    if (plyrScore > comptrScore) {
        return "Congratulations, you won the match. Score: " + plyrScore + " - " + comptrScore;
    }else {
        return "Too bad, you lost, maybe next time. Score: " + plyrScore + " - " + comptrScore;
    }
}



//console.log(playRound (comptrChoice,plyrChoice))
console.log(game())