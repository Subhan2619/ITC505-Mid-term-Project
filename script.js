const choices = ["rock", "paper", "scissors"];
const images = {
    rock: "https://images.pexels.com/photos/1567590/pexels-photo-1567590.jpeg",
    paper: "https://images.pexels.com/photos/933255/pexels-photo-933255.jpeg",
    scissors: "https://images.pexels.com/photos/1704146/pexels-photo-1704146.jpeg"
};

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const resultText = determineWinner(playerChoice, computerChoice);
    displayResult(resultText, playerChoice, computerChoice);
}

function determineWinner(player, computer) {
    if (player === computer) {
        return `It's a draw! Both chose ${player}.`;
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock")
    ) {
        return `You win! ${player} beats ${computer}.`;
    } else {
        return `You lose! ${computer} beats ${player}.`;
    }
}

function displayResult(resultText, player, computer) {
    document.getElementById("result").innerHTML = `
        <p>${resultText}</p>
        <p>You chose: ${player}</p>
        <p>Computer chose: ${computer}</p>`;
    document.getElementById("image").innerHTML = `
        <img src="${images[player]}" alt="${player}">`;
}

// Initialize game display on page load
window.onload = () => {
    document.getElementById("result").textContent = "Make your choice to start!";
    document.getElementById("image").innerHTML = `<img src="${images.rock}" alt="rock">`;
};
