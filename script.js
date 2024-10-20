const choices = document.querySelectorAll('.choice');
const result = document.getElementById('result');
const score = document.getElementById('score');
let playerScore = 0;
let computerScore = 0;

choices.forEach(choice => {
    choice.addEventListener('click', playGame);
});

function playGame(e) {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showResult(winner, computerChoice);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getWinner(player, computer) {
    if (player === computer) return 'draw';
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'player';
    }
    return 'computer';
}

function showResult(winner, computerChoice) {
    if (winner === 'player') {
        playerScore++;
        result.innerHTML = `You win! Computer chose ${computerChoice}.`;
        result.style.color = 'green';
    } else if (winner === 'computer') {
        computerScore++;
        result.innerHTML = `You lose! Computer chose ${computerChoice}.`;
        result.style.color = 'red';
    } else {
        result.innerHTML = `It's a draw! Computer chose ${computerChoice}.`;
        result.style.color = 'blue';
    }
    score.innerHTML = `Player: ${playerScore} - Computer: ${computerScore}`;
}

// Update last modified date
var lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;
