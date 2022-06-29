

function computerPlay () {
    const cchoices = ["rock", "paper", "scissors"];
    cplay = Math.floor (Math.random() * cchoices.length);
    console.log ("Computer chooses " + cchoices[cplay] + ".");
    c = cchoices[cplay]
} 

function playerSelection() {
    const pchoice = prompt("RPS: What is your choice?");
    actualchoice = pchoice.toLowerCase("");
    console.log ("Player chooses " + actualchoice + ".");}

function playRound(){

playerSelection()
computerPlay()

 if (actualchoice == "rock" && cplay == 2) {
        console.log ("Rock beats scissors, player win!")
    } else if (actualchoice == "scissors" && cplay == 0) {
        console.log ("Rock beats scissors, computer win!")
    } else if (actualchoice == "paper" && cplay == 0) {
        console.log ("Paper beats rock, player win!")
    } else if (actualchoice == "rock" && cplay == 1) {
        console.log ("Paper beats rock, computer win!")
    } else if (actualchoice == "scissors" && cplay == 1) {
        console.log ("Scissors beat paper, player win!")
    } else if (actualchoice == "paper" && cplay == 2) {
        console.log ("Scissors beat paper, computer win!")
    } else if (c == actualchoice) {
        console.log ("Tie!")
    } else {
        console.log ("ERROR!")
    }}

function playGame() {
    for (let g = 0; g <5; g++){
        playRound()}}

playGame();