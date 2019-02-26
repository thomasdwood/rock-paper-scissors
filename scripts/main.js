var round = 0;
var playerScore = 0;
var computerScore = 0;
var ties = 0;


var rockButton = document.querySelector('#rock');
var paperButton = document.querySelector('#paper');
var scissorsButton = document.querySelector('#scissors');
var resetButton = document.querySelector('#reset');

rockButton.addEventListener('click', function() { playRound('rock'); })
paperButton.addEventListener('click', function() { playRound('paper'); })
scissorsButton.addEventListener('click', function() { playRound('scissors'); })
resetButton.addEventListener('click', function() { resetAll(); })

function playRound(playerPlays) {
    var result = ""
    round++;

    const roundDisplay = document.querySelector('#round')
    roundDisplay.textContent = `Round: ${round}`;

    const computerPlays = computerPlay();

    displayChoices(playerPlays, computerPlays);

    const winLose = document.querySelectorAll('.displayChoice > h4')

    

    if (playerPlays == computerPlays) {
        result = "It's a tie!";
        ties++;
        winLose[0].textContent = ""
        winLose[1].textContent = ""

        winLose[0].classList = ""
        winLose[1].classList = ""

    } else if ((playerPlays == 'rock' && computerPlays == 'scissors') ||
            (playerPlays == 'scissors' && computerPlays == 'paper') ||
            (playerPlays == 'paper' && computerPlays == 'rock')) {

        playerScore++;
        result = `You win - ${playerPlays} beats ${computerPlays}`;

        winLose[0].classList = "winner"
        winLose[1].classList = "loser"
        
        winLose[0].textContent = "Winner!"
        winLose[1].textContent = "Loser!"

        
    } else {

        computerScore++;
        result = `You lose - ${computerPlays} beats ${playerPlays}`;

        winLose[0].classList = "loser"
        winLose[1].classList = "winner"
        

        winLose[0].textContent = "Loser!"
        winLose[1].textContent = "Winner!"
        
    
    }

    const roundResult = document.querySelector('#roundResult');
    roundResult.textContent = result;

    updateScores()

    
}

function computerPlay() {
    var play = Math.floor(Math.random() * 3)

    switch (play) {
        case 0: 
            return "rock";
            break;
        case 1: 
            return "paper";
            break;
        case 2: 
            return "scissors";
            break;
        default: 
            break;
    }

}

function displayChoices(player, computer) {
    const playerDisplay = document.querySelector("#playerRound > .weapon");
    const compDisplay = document.querySelector("#computerRound > .weapon");

    switch (player) {
    case 'rock': 
        playerDisplay.textContent = "💎";
        break;
    case 'paper': 
        playerDisplay.textContent = "📄";
        break;
    case 'scissors':
        playerDisplay.textContent = "✂️";
    default:
        break;
    }
    
    switch (computer) {
        case 'rock': 
            compDisplay.textContent = "💎";
            break;
        case 'paper': 
            compDisplay.textContent = "📄";
            break;
        case 'scissors':
            compDisplay.textContent = "✂️";
        default:
            break;
        }
}

function updateScores() {
    const fields = document.querySelectorAll('#footer > div');

    fields[0].textContent = `Player: ${playerScore}`;
    fields[1].textContent = `Computer: ${computerScore}`;
    fields[2].textContent = `Ties: ${ties}`;
}

function resetAll() {
    round = 0;
    playerScore = 0;
    computerScore = 0;
    ties = 0;

    updateScores();

    const playerDisplay = document.querySelector("#playerRound > .weapon");
    const compDisplay = document.querySelector("#computerRound > .weapon");
    const roundResult = document.querySelector('#roundResult');


    playerDisplay.textContent = "";
    compDisplay.textContent = "";
    roundResult.textContent = String.fromCharCode(160);

    const roundDisplay = document.querySelector('#round')
    roundDisplay.textContent = `Round: ${round}`;

    const winLose = document.querySelectorAll('.displayChoice > h4')
    winLose[0].classList = ""
    winLose[1].classList = ""

    winLose[0].textContent = ""
    winLose[1].textContent = ""

}



