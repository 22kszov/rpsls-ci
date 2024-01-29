let player;
let playerScore = 0;
let opponent;
let opponentScore = 0;

const weapons = ["rock", "paper", "scissors", "lizard", "spock"]; 

window.onload = function imagePusher() {

    for (let i = 0; i < 5; i++) {

        let weapon = document.createElement("img");
        weapon.setAttribute('id', weapons[i]);
        weapon.src = weapons[i] + ".png";
        weapon.addEventListener("click", selectWeapon);
        document.getElementById("weapons").append(weapon);

    }

};

function selectWeapon() {

    player = this.id;
    document.getElementById("player-weapon").src = player + ".png";

    opponent = weapons[Math.floor(Math.random() * 5)];
    document.getElementById("opponent-weapon").src = opponent + ".png";

    if (player == opponent) {
        playerScore++;
        opponentScore++;
    } else {
        if (player == "rock") {
            if (opponent == "paper") {
                opponentScore++;
            } else {
                if (opponent == "scissors") {
                    playerScore++;
                } else {
                    if (opponent == "lizard") {
                        playerScore++;
                    } else {
                        if (opponent == "spock") {
                            opponentScore++;
                        }
                    }
                }
            }
        } else {
            if (player == "paper") {
                if (opponent == "scissors") {
                    opponentScore++;
                } else {
                    if (opponent == "spock") {
                        playerScore++;
                    } else {
                        if (opponent == "rock") {
                            playerScore++;
                        } else {
                            if (opponent == "lizard") {
                                opponentScore++;
                            }
                        }
                    }
                }
            } else {
                if (player == "scissors") {
                    if (opponent == "rock") {
                    opponentScore++;
                } else {
                    if (opponent == "paper") {
                    playerScore++;
                        } else {
                            if (opponent == "lizard") {
                                playerScore++;
                            } else {
                                if (opponent == "spock") {
                                    opponentScore++;
                                }
                            }
                        }
                    }
                } else {
                    if (player == "lizard") {
                        if (opponent == "scissors") {
                            opponentScore++;
                        } else {
                            if (opponent == "spock") {
                                playerScore++;
                            } else {
                                if (opponent == "paper") {
                                    playerScore++;
                                } else {
                                    if (opponent == "rock") {
                                        opponentScore++;
                                    }
                                }
                            }
                        }
                    } else {
                        if (player == "spock") {
                            if (opponent == "lizard") {
                                opponentScore++;
                            } else {
                                if (opponent == "rock") {
                                    playerScore++;
                                } else {
                                    if (opponent == "scissors") {
                                        playerScore++;
                                    } else {
                                        if (opponent == "paper") {
                                            opponentScore++;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("opponent-score").innerHTML = opponentScore;

}