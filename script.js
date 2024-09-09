console.log('%c Start of script', 'font-weight:900; font-size: 12px; color: green;')

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

function getHumanChoice() {
    console.log(`Inside getHumanChoice`);

    let input = prompt(`Choose one: rock, paper or scissors?`);

    console.log(`You have chosen ${input}`)
    return input;
}

function getComputerChoice(){
    console.log(`Inside getComputerChoice`);

    let randomInt = getRandomDigit();

    if(randomInt <= 3){
        console.log(`getComputerChoice returning: rock`);
        return 'rock';
    } else if(randomInt <= 6){
        console.log(`getComputerChoice returning: paper`);
        return `paper`;
    } else{
        console.log(`getComputerChoice returning: scissors`);
        return `scissors`;
    }
}

function getRandomDigit(){
    console.log(`Inside getRandomDigit`);

    let randomInt = Math.floor(Math.random() * 10);

    console.log(`getRandomDigit returning: ${randomInt}`);
    return randomInt;
}

console.log('%c End of script', 'font-weight:900; font-size: 12px; color: green;')