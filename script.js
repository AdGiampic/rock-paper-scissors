const Rock = "rock";
const Paper = "paper";
const Scissors = "scissors";


function getComputerChoice () { //funzione che seleziona casualmente tra "Sasso,carta e forbice"

    const min = 1;
    const max = 3;
    let nmb = Math.floor(Math.random() *(max - min + 1)) + min; // genero un numero casuale da 1 a 3
    if (nmb == 1) {  // se il numero è 1 è sassp
        return Rock;
    } else if (nmb == 2) { // se 2 è carta
        return Paper;
    }else{
        return Scissors; // se non è nè 1 nè 2 è forbici
    }
}

let comptrChoice = getComputerChoice()

let plyrChoice = prompt("Choose between 'Rock','Paper' or 'Scissors' to play.")  // chiedo di immettere un testo

function ctrlinput (plyrChoice) {  // funzione che controlla la corretteza del testo
    if (plyrChoice.toLowerCase() == Rock || plyrChoice.toLowerCase() == Paper || plyrChoice.toLowerCase() == Scissors ) {
        return true;
    } else {
        return false;
    }
}

if (ctrlinput (plyrChoice) == false) { // se il testo non è valido interrompo
    throw Error ("Text Invalid. \nPlease input the correct text to play.")
}

let plyrScore = 0;
let comptrScore = 0;
function playRound (comptrChoice,plyrChoice) { // funzione che gioca il round tra pc e giocatore
    if (comptrChoice == plyrChoice) {  
        return "tie" // se entrambi hanno scelto la stessa opzione allora è pari
    }
    if (comptrChoice == Scissors && plyrChoice == Paper) {
        return comptrScore +=1;
        //return "You lost" + " computer: " + comptrChoice + ",plyr: " + plyrChoice // forbice carta
    }
    if (comptrChoice == Paper && plyrChoice == Scissors) {
        return plyrScore +=1;
        // return "You won" + " computer: " + comptrChoice + ",plyr: " + plyrChoice // carta forbice
    }
    if (comptrChoice == Scissors && plyrChoice == Rock) {
        return plyrScore +=1;
        //return "You won" + " computer: " + comptrChoice + ",plyr: " + plyrChoice //forbice sasso
    }
    if (comptrChoice == Rock && plyrChoice == Scissors) {
        return comptrScore +=1;
        //return "You lost" + " computer: " + comptrChoice + ",plyr: " + plyrChoice // sasso forbice
    }
    if (comptrChoice == Paper && plyrChoice == Rock) {
        return plyrScore +=1;
        //return "You won" + " computer: " + comptrChoice + ",plyr: " + plyrChoice  //carta sasso
    }
    if (comptrChoice == Rock && plyrChoice == Paper) {
        return comptrScore +=1;
        //return "You lost" + " computer: " + comptrChoice + ",plyr: " + plyrChoice  //sasso carta
    }
    
}

function game () {
    for (let i = 0; i < 5; i++) {
        comptrChoice = getComputerChoice()
        plyrChoice = prompt("Choose between 'Rock','Paper' or 'Scissors' to play.")
        playRound (comptrChoice,plyrChoice)
        return plyrScore + " - " +comptrScore
    }
}

console.log(game(plyrScore,comptrScore))
//console.log(playRound(comptrChoice,plyrChoice))


