let options = document.getElementsByClassName("option");
let choices = ["rock", "paper", "scissors"];
let winState = { rock: "scissors", paper: "rock", scissors: "paper"};
let battle_elem = document.getElementById("battle");
let reset_elem = document.getElementById("reset");

let score = 0;
let storage = window.localStorage;

if (storage.getItem("score"));

for (let i = 0; i < options.length; i++) {
    let option = options[i];

    option.addEventListener("click", function () {
      this.classList.add("selected");
      disableOptions();
      battle(this);
    });
    
}

function disableOptions () {
    for (let i = 0; i < options.length; i++) {
        let option = options[i];

        if (!option.classList.contains("selected")) {
            option.classList.add("disabled");
        }
    }
}

function battle (option) {
    let choice = option.dataset.choice;
    let aiChoice = choices[rand(2, 0)];

    if (choice === aiChoice) {
        option.classList.add("draw")
        console.log("It's a Draw");
        
    } else if (aiChoice === winState[choice]) {
        option.classList.add("winner");
        console.log("Player wins");
    } else {
        option.classList.add("loser");
        console.log("Ai wins");
        
    }
    DisplayChoices(choice, aiChoice);
}


function DisplayChoices (player, ai) {
    let choice_elem = document.createElement("div");
    choice_elem.classList.add("aiChoice", ai);

    battle_elem.appendChild(choice_elem)
    document.getElementById("reset").classList.remove("hide");
}

function rand(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

reset_elem.addEventListener("click", reset);

function reset () {
    for (let i = 0; i < options.length; i++) {
        let option = options[i];

        option.classList.remove("selected");
        option.classList.remove("disabled");
        option.classList.remove("winner");
        option.classList.remove("loser");
        option.classList.remove("draw");
        
    }
    battle_elem.innerHTML = "<h3>AI CHOICE</h3>"
    reset_elem.classList.add("hide")

}
