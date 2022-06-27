

function computerPlay () {
    const cchoices = ["rock", "paper", "scissors"];
    const cplay = Math.floor (Math.random() * cchoices.length);
    console.log ("Computer chooses " + cchoices[cplay] + ".");
} 

function playerSelection() {
    const pchoice = prompt("RPS: What is your choice?");
    const actualchoice = pchoice.toLowerCase("");
    }

function playGame(cplay, actualchoice){
    
playerSelection()
computerPlay()

 if (actualchoice == "rock" && cplay == "scissors") {
        console.log ("Rock beats scissors, player win!")
    } else if (actualchoice == "scissors" && cplay == "rock") {
        console.log ("Rock beats scissors, computer win!")
    } else if (actualchoice == "paper" && cplay == "rock") {
        console.log ("Paper beats rock, player win!")
    } else if (actualchoice == "rock" && cplay == "paper") {
        console.log ("Paper beats rock, computer win!")
    } else if (actualchoice == "scissors" && cplay == "paper") {
        console.log ("Scissors beat paper, player win!")
    } else if (actualchoice == "paper" && cplay == "scissors") {
        console.log ("Scissors beat paper, computer win!")
    } else {
        console.log ("Something went wrong, try again.")
    }
}