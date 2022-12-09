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



let plyrScore = 0;
let comptrScore = 0;
function game (plyrScore,comptrScore) {
    for (let i = 0; i < 5; i++) {
        let comptrChoice = getComputerChoice()
        let plyrChoice = prompt("Choose between 'Rock','Paper' or 'Scissors' to play.")
        if (ctrlinput (plyrChoice) == false) { // if the input is invalid i'll block the script
            throw Error ("Text Invalid. \nPlease input the correct text to play.")
        }
        function playRound (comptrChoice,plyrChoice) { // function that plays a round of the game
            if (comptrChoice == plyrChoice) {  
                console.log("Tie") // if both CPU and player picked the same option then it's a tie
            }
            if (comptrChoice == Scissors && plyrChoice == Paper) {
                ++comptrScore
                return comptrScore
            }
            if (comptrChoice == Paper && plyrChoice == Scissors) {
                ++plyrScore
                return plyrScore
            }
            if (comptrChoice == Scissors && plyrChoice == Rock) {
                ++plyrScore
                return plyrScore
            }
            if (comptrChoice == Rock && plyrChoice == Scissors) {
                ++comptrScore
                return comptrScore
            }
            if (comptrChoice == Paper && plyrChoice == Rock) {
                ++plyrScore
                return plyrScore
            }
            if (comptrChoice == Rock && plyrChoice == Paper) {
                ++comptrScore
                return comptrScore
            }
    
        }
    }
    if (plyrScore > comptrScore) {
        console.log("Congratulations, you won the match. Score: " + plyrScore + " - " + comptrScore)
    }else {
        console.log("Too bad, you lost, maybe next time. Score: " + plyrScore + " - " + comptrScore)
    }
}

console.log(game(plyrScore,comptrScore))
//console.log(playRound(comptrChoice,plyrChoice))


