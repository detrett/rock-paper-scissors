console.log('%c Start of script', 'font-weight:900; font-size: 12px; color: green;')

let humanScore = 0;
let computerScore = 0;

let container = document.querySelector('#container');
let playerChoice = document.querySelector('#playerChoice');
let computerSelection = document.querySelector('#computerChoice');
let score = document.querySelector('#score');

container.addEventListener('click', (event) => {    
    let target = event.target;

    switch(target.id) {
        case 'rock': {
            playerChoice.textContent = `You have chosen: ${target.id}!`
            playGame('rock');
            break;
        }
        case 'paper': {
            playerChoice.textContent = `You have chosen: ${target.id}!`
            playGame('paper');
            break;
        }
        case 'scissors': {
            playerChoice.textContent = `You have chosen: ${target.id}!`
            playGame('scissors');
            break;
        }
    }
});

function playGame(playerChoice) {
    // console.log(`Inside playGame`);

    const computerChoice = getComputerChoice();

    computerSelection.textContent = `The computer has chosen: ${computerChoice}!`;

    playRound(playerChoice, computerChoice);

    score.textContent = `Your score: ${humanScore}, computer score: ${computerScore}`;

    if(humanScore === 5 || computerScore === 5) {
        score.setAttribute('style', 'white-space: pre;');
        humanScore === 5 ? score.textContent += `\r\nThe winner is YOU!` 
        : score.textContent += '\r\nThe winner is the computer!';
        humanScore = 0;
        computerScore = 0;
    }

    function playRound(playerChoice, computerChoice) {
        // console.log(`Inside playRound`);

        switch (playerChoice) {
            case `rock`:
                if (computerChoice == `rock`) {
                    console.log(`Ìt's a tie!`);
                }
                else if (computerChoice == `paper`) {
                    computerScore++;
                }
                else {
                    humanScore++;
                }
                break;
            case `paper`:
                if (computerChoice == `rock`) {
                    humanScore++;
                }
                else if (computerChoice == `paper`) { console.log(`It's a tie!`); }
                else { computerScore++; }
                break;
            case `scissors`:
                if (computerChoice == `rock`) { computerScore++; }
                else if (computerChoice == `paper`) { humanScore++; }
                else console.log(`It's a tie!`);
                break;
            default:
                console.log(`Try typing rock, paper, or scissors`);
                break;
        }
    }
}

function getComputerChoice() {
    // console.log(`Inside getComputerChoice`);

    let randomInt = getRandomDigit();

    if (randomInt <= 3) {
        // console.log(`getComputerChoice returning: rock`);
        return 'rock';
    } else if (randomInt <= 6) {
        // console.log(`getComputerChoice returning: paper`);
        return `paper`;
    } else {
        // console.log(`getComputerChoice returning: scissors`);
        return `scissors`;
    }
}

function getRandomDigit() {
    // console.log(`Inside getRandomDigit`);

    let randomInt = Math.floor(Math.random() * 10);

    // console.log(`getRandomDigit returning: ${randomInt}`);
    return randomInt;
}

console.log('%c End of script', 'font-weight:900; font-size: 12px; color: green;')