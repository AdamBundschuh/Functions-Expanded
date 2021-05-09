const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS!';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS!';

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`,'').toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS 
    ) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you.`);
        return;
    }
    return selection;
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

// General syntax: (arg1, arg2) => { ... }
// const add = (a, b) => a + b;

// const add2 = function(a, b) {
//     return a + b;
// }

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => 
    cChoice === pChoice 
      ? RESULT_DRAW 
      : cChoice === ROCK && pChoice === PAPER || 
        cChoice === PAPER && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK 
      ? RESULT_PLAYER_WINS 
      : RESULT_COMPUTER_WINS;
    
    // if (cChoice === pChoice) {
    //     return RESULT_DRAW;
    // } else if (
    //     cChoice === ROCK && pChoice === PAPER || 
    //     cChoice === PAPER && pChoice === SCISSORS ||
    //     cChoice === SCISSORS && pChoice === ROCK
    //     ) {
    //     return RESULT_PLAYER_WINS;
    // } else {
    //     return RESULT_COMPUTER_WINS;
    // }


startGameBtn.addEventListener('click', () => {
    if (gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let winner;
    if (playerChoice) {
        winner = getWinner(computerChoice, playerChoice);
    } else {
        winner = getWinner(computerChoice, playerChoice);
    }

    let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore `;
    
    if (winner === RESULT_DRAW) {
        message = message + `it's a draw.`;
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + `you won!`;
    } else {
        message = message + `you lost! Hah, loser.`;
    }
    alert(message);
    gameIsRunning = false;
});

// not related

const sumUp = (...numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
};

console.log(sumUp([1, 5, 13, 34, 33, 21, 87]));