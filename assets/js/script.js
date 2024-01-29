let player;
let playerScore = 0;
let opponent;
let opponentScore = 0;

const weapons = ["rock", "paper", "scissors", "lizard", "spock"]; 

window.onload = function imagePusher() {

    for (let i = 0; i < 5; i++) {

        let weapon = document.createElement("img");
        weapon.setAttribute('id', weapons[i])
        weapon.src = weapons[i] + ".png";
        weapon.addEventListener("click", selectWeapon);
        document.getElementById("weapons").append(weapon);

    }

}

function selectWeapon() {

    player = this.id;
    document.getElementById("player-weapon").src = player + ".png";

    opponent = weapons[Math.floor(Math.random() * 5)];
    document.getElementById("opponent-weapon").src = opponent + ".png";

    

}