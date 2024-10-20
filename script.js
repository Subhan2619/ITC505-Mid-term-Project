const gameStages = {
    start: {
        text: "You stand before an ancient, mysterious forest. Do you enter or turn back?",
        choices: [
            { text: "Enter the forest", consequence: "forestPath" },
            { text: "Turn back", consequence: "endingCoward" }
        ],
        image: "images/forest.jpg"
    },
    forestPath: {
        text: "You encounter a fork in the path. Do you go left towards a glowing light or right into the dark shadows?",
        choices: [
            { text: "Go left", consequence: "glowPath" },
            { text: "Go right", consequence: "shadowPath" }
        ],
        image: "images/fork.jpg"
    },
    glowPath: {
        text: "You discover a glowing gem on the ground. Do you pick it up or leave it?",
        choices: [
            { text: "Pick up the gem", consequence: "endingGem" },
            { text: "Leave it", consequence: "endingNoGem" }
        ],
        image: "images/gem.jpg"
    },
    shadowPath: {
        text: "You are surrounded by dark shadows, and you see red eyes staring at you. Do you run or confront them?",
        choices: [
            { text: "Run away", consequence: "endingRun" },
            { text: "Confront the shadows", consequence: "endingConfront" }
        ],
        image: "images/shadows.jpg"
    },
    endingCoward: {
        text: "You turned back, never knowing what wonders or dangers lay ahead. The adventure ends here.",
        image: "images/coward.jpg"
    },
    endingGem: {
        text: "The gem glows brightly, revealing a hidden treasure. You found great fortune!",
        image: "images/treasure.jpg"
    },
    endingNoGem: {
        text: "You walk away, but you hear mysterious sounds in the distance. Perhaps there's more to explore.",
        image: "images/forestPath.jpg"
    },
    endingRun: {
        text: "You run as fast as you can, barely escaping the shadows. You're safe, but the adventure remains unsolved.",
        image: "images/run.jpg"
    },
    endingConfront: {
        text: "You confront the shadows, and they vanish, revealing a path to a hidden kingdom. You are a true adventurer!",
        image: "images/kingdom.jpg"
    }
};

function startGame() {
    displayStage("start");
}

function displayStage(stage) {
    const stageData = gameStages[stage];
    document.getElementById("story").innerText = stageData.text;
    document.getElementById("image").innerHTML = `<img src="${stageData.image}" alt="">`;
    document.getElementById("choices").innerHTML = "";

    if (stageData.choices) {
        stageData.choices.forEach(choice => {
            const button = document.createElement("button");
            button.innerText = choice.text;
            button.addEventListener("click", () => displayStage(choice.consequence));
            document.getElementById("choices").appendChild(button);
        });
    }
}

window.onload = startGame;
