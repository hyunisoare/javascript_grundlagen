let playerOne = "paper";
let computer = "rock";

switch (playerOne) {
    case computer:
        console.log("Tie game!");
        break;
    
    case "rock":
        if (computer === "paper"){
            console.log("computer wins!");
        } else {
            console.log("playerOne wins!");
        }
        break;
    case "scissors":
        if (computer === "rock"){
            console.log("computer wins!");
        } else {
            console.log("playerOne wins!");
        }
        break;
    default:
        if (computer === "scissors"){
            console.log("playerOne wins!");
        } else {
            console.log("computer wins!");
        }
}

