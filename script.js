console.log('%c Start of script', 'font-weight:900; font-size: 12px; color: green;')

playGame();

function playGame(){
    // console.log(`Inside playGame`);
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice().toLocaleLowerCase();
        const computerChoice = getComputerChoice();

        console.log(`You have chosen: ${humanChoice}`);
        console.log(`The computer has chosen: ${computerChoice}`);

        playRound(humanChoice, computerChoice);
        console.log(`Your score: ${humanScore}, computer score: ${computerScore}`);
    }

    function playRound(humanChoice, computerChoice){
        // console.log(`Inside playRound`);
    
        switch(humanChoice) {
            case `rock`:
                if (computerChoice == `rock`) { 
                    console.log(`Ìt's a tie!`); }
                else if (computerChoice == `paper`) { 
                    console.log(`You lose! Paper beats Rock.`); 
                    computerScore++; 
                }
                else { 
                    console.log(`You win! Rock beats Scissors.`); 
                    humanScore++;
                }
                break;
            case `paper`:
                if (computerChoice == `rock`) { 
                    console.log(`You win! Paper beats Rock.`); 
                    humanScore++;
                }
                else if (computerChoice == `paper`) { console.log(`It's a tie!`); }
                else { console.log(`You lose! Scissors beat Paper.`); computerScore++; }
                break;
            case `scissors`:
                if (computerChoice == `rock`) { console.log(`You lose! Rock beats Scissors.`); computerScore++;}
                else if (computerChoice == `paper`) { console.log(`You win! Scissors beat Paper`); humanScore++;}
                else console.log(`It's a tie!`);
                break;
            default:
                console.log(`Try typing rock, paper, or scissors`);
                break;
        }
    }
}



function getHumanChoice() {
    // console.log(`Inside getHumanChoice`);

    let input = prompt(`Choose one: rock, paper or scissors?`);

    // console.log(`You have chosen ${input}`)
    return input;
}

function getComputerChoice(){
    // console.log(`Inside getComputerChoice`);

    let randomInt = getRandomDigit();

    if(randomInt <= 3){
        // console.log(`getComputerChoice returning: rock`);
        return 'rock';
    } else if(randomInt <= 6){
        // console.log(`getComputerChoice returning: paper`);
        return `paper`;
    } else{
        // console.log(`getComputerChoice returning: scissors`);
        return `scissors`;
    }
}

function getRandomDigit(){
    // console.log(`Inside getRandomDigit`);

    let randomInt = Math.floor(Math.random() * 10);

    // console.log(`getRandomDigit returning: ${randomInt}`);
    return randomInt;
}

console.log('%c End of script', 'font-weight:900; font-size: 12px; color: green;')