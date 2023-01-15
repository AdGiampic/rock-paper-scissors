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


function getplyrChoice (event) {
    plyrChoice = event.target.id;
    return plyrChoice;
}

function game () {
    let comptrChoice = getComputerChoice();
    let plyrChoice = getplyrChoice (event);
    playRound (comptrChoice,plyrChoice); //plays round
    let score = document.querySelector("#score"); 
    score.innerHTML = "Score: " +plyrScore +" - " + comptrScore // keeps track of the score
    if (plyrScore == 5 || comptrScore == 5) { // once one of the players reaches 5 points, the game ends
        if (plyrScore > comptrScore) { //if the plyrScore is higher than comptrScore then the player wins
            score.innerHTML = "Nice! You won the game!"
        }else {
            score.innerHTML = "Too bad, you lost" 
        }
        // hide game buttons
        document.getElementById("rock").style.visibility = "hidden"
        document.getElementById("paper").style.visibility = "hidden"
        document.getElementById("scissors").style.visibility = "hidden"
        const replay = document.createElement("button"); // creating replay button
        replay.innerHTML = "Replay"
        replay.setAttribute("style", "margin-right :150px")
        document.getElementById("buttons").appendChild(replay) // if the user clicks the button the page will be reloaded
        replay.addEventListener("click", () => {
            window.location.reload()
        })
    }
}
