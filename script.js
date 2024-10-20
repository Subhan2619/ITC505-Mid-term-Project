const gameStages = {
    start: {
        text: "You find yourself at the entrance of a forgotten temple deep within the jungle. Do you dare to step inside or retreat?",
        choices: [
            { text: "Enter the temple", consequence: "templeHall" },
            { text: "Retreat to the jungle", consequence: "endingRetreat" }
        ],
        image: "https://images.pexels.com/photos/277663/pexels-photo-277663.jpeg"
    },
    templeHall: {
        text: "The air is thick, and the walls are adorned with ancient carvings. You see two paths ahead: one leads down a dark staircase, and the other into a dimly lit hall. Which path do you take?",
        choices: [
            { text: "Descend the dark staircase", consequence: "darkStaircase" },
            { text: "Enter the dimly lit hall", consequence: "litHall" }
        ],
        image: "https://images.pexels.com/photos/2372858/pexels-photo-2372858.jpeg"
    },
    darkStaircase: {
        text: "You find an ancient chest at the bottom of the stairs. It’s locked. Do you try to open it or return upstairs?",
        choices: [
            { text: "Open the chest", consequence: "endingTreasure" },
            { text: "Return upstairs", consequence: "templeHall" }
        ],
        image: "https://images.pexels.com/photos/280235/pexels-photo-280235.jpeg"
    },
    litHall: {
        text: "A serpent statue stands before you, its eyes glowing faintly. It almost seems alive. Do you approach or keep your distance?",
        choices: [
            { text: "Approach the statue", consequence: "endingStatue" },
            { text: "Keep your distance", consequence: "endingEscape" }
        ],
        image: "https://images.pexels.com/photos/1485548/pexels-photo-1485548.jpeg"
    },
    endingRetreat: {
        text: "You turn back, deciding the mysteries of the temple are not for you. Sometimes, caution is the wisest choice.",
        image: "https://images.pexels.com/photos/15286/pexels-photo.jpg"
    },
    endingTreasure: {
        text: "The chest opens, revealing a treasure trove of gold and jewels. Congratulations, adventurer! You've found the Lost Treasure.",
        image: "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg"
    },
    endingStatue: {
        text: "The statue’s eyes glow brighter, and you are suddenly paralyzed. The temple claims another soul. Perhaps next time, caution will prevail.",
        image: "https://images.pexels.com/photos/315644/pexels-photo-315644.jpeg"
    },
    endingEscape: {
        text: "You manage to escape the hall, feeling a cold presence watching you. The adventure isn't over, but you live to fight another day.",
        image: "https://images.pexels.com/photos/3727186/pexels-photo-3727186.jpeg"
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
