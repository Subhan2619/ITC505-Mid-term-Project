const choices = ["rock", "paper", "scissors"];
const outcomes = {
    rock: { scissors: "Rock crushes Scissors", paper: "Rock gets wrapped by Paper" },
    paper: { rock: "Paper wraps Rock", scissors: "Paper gets cut by Scissors" },
    scissors: { paper: "Scissors cut Paper", rock: "Scissors get crushed by Rock" }
};

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result, playerChoice, computerChoice);
}

function determineWinner(player, computer) {
    if (player === computer) {
        return `It's a tie! Both chose ${player}`;
    } else if (outcomes[player][computer]) {
        return `You win! ${outcomes[player][computer]}`;
    } else {
        return `You lose! ${outcomes[computer][player]}`;
    }
}

function displayResult(resultText, player, computer) {
    document.getElementById("result").innerHTML = `
        <p>${resultText}</p>
        <p>You chose: <strong>${player}</strong></p>
        <p>Computer chose: <strong>${computer}</strong></p>`;
}
