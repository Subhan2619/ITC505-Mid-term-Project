const choices = document.querySelectorAll('.choice');
const userChoiceSpan = document.getElementById('user-choice');
const computerChoiceSpan = document.getElementById('computer-choice');
const message = document.getElementById('message');
const restartButton = document.getElementById('restart');

const choicesArray = ['rock', 'paper', 'scissors'];

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.id;
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);
        
        displayResult(userChoice, computerChoice, result);
        
        // Add hover class on user choice
        choice.classList.add('active');
        setTimeout(() => choice.classList.remove('active'), 500); // Remove class after 0.5s
    });
});

restartButton.addEventListener('click', () => {
    userChoiceSpan.textContent = '';
    computerChoiceSpan.textContent = '';
    message.textContent = 'Make your choice:';
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    return choicesArray[randomIndex];
}

function determineWinner(user, computer) {
    if (user === computer) {
        return 'It\'s a tie!';
    }
    if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return 'You Win!';
    }
    return 'You Lose!';
}

function displayResult(user, computer, result) {
    userChoiceSpan.textContent = capitalize(user);
    computerChoiceSpan.textContent = capitalize(computer);
    message.textContent = result;
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
