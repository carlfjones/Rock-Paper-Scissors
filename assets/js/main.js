let options = document.getElementsByClassName("option");
let choices = ["rock", "paper", "scissors"];


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
    
    let aiChoice = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    console.log(aiChoice);
    
    console.log(choices[aiChoice]);
    
}