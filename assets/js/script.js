let player;
let playerScore = 0;
let opponent;
let opponentScore = 0;

const weapons = ["rock", "paper", "scissors", "lizard", "spock"]; 

window.onload = function() {

    for (let i = 0; i < 5; i++) {

        let weapon = document.createElement("img");
        weapon.id = weapon[i];
        weapon.src = weapons[i] + ".png";
        document.getElementById("weapons").append(weapon);

    }

}