// Displays 'Welcome!' text
const maincont = document.querySelector ("#welcomemain");
const welcome = document.createElement ('p');
const welcome2 = document.createElement ('p');
welcome.textContent = 'Welcome to Rock Paper Scissors!';
welcome2.textContent = '- Choose one -';
welcomemain.appendChild(welcome);
welcomemain.appendChild (welcome2);


// Logs results, keeps score.
const gameresult = document.querySelector('#results');
const compmove = document.createElement ('p');
const result = document.createElement('p');
const pscore = document.createElement('p');
const cscore = document.createElement('p');
results.appendChild(compmove);
results.appendChild(result);
results.appendChild(pscore);
results.appendChild(cscore);
const reset = document.createElement('button');
reset.textContent = 'Reset';
reset.addEventListener('click', () => {
    playerscore = 0;
    compscore = 0;
    compmove.textContent = ("");
    result.textContent = ("");
    pscore.textContent = ("");
    cscore.textContent = ("");
    welcome2.textContent = '- Choose one -';
    

 })
 results.appendChild(reset);

// Creates buttons and listeners on the HTML page
const rpsgamecontainer = document.querySelector ("#rpsgame");
 const rock = document.createElement('button');
 const paper = document.createElement('button');
 const scissors = document.createElement('button');
 rock.textContent = 'Rock';
 rock.innerHTML = '<img src = "./images/147847-200.png">'
 paper.textContent = 'Paper';
 paper.innerHTML = '<img src = "./images/147844-200.png">'
 scissors.textContent = 'Scissors';
 scissors.innerHTML = '<img src = "./images/147845-200.png">'
 rpsgame.appendChild(rock);
 rpsgame.appendChild(paper);
 rpsgame.appendChild(scissors);
 rock.addEventListener('click', () => {
    pchoice = "rock";
    console.log (pchoice)
    welcome2.textContent = '';
    playGame();

 })

 paper.addEventListener('click', () => {
    pchoice = "paper";
    console.log (pchoice);
    welcome2.textContent = '';
    playGame();

 })
 scissors.addEventListener('click', () => {
    pchoice = "scissors";
    console.log (pchoice);
    welcome2.textContent = '';
    playGame();

 })


// Game logic

playerscore = 0
compscore = 0

function computerPlay () {
    const cchoices = ["rock", "paper", "scissors"];
    cplay = Math.floor (Math.random() * cchoices.length);
    c = cchoices[cplay]
} 

function playerSelection() {
    actualchoice = pchoice.toLowerCase("");
    console.log ("Player chooses " + actualchoice + ".");}

function playRound(){

playerSelection()
computerPlay()

 if (actualchoice == "rock" && cplay == 2) {
        result.textContent = ("Rock beats scissors, player win!");
        playerscore += 1;
    } else if (actualchoice == "scissors" && cplay == 0) {
        result.textContent =("Rock beats scissors, computer win!");
        compscore += 1;
    } else if (actualchoice == "paper" && cplay == 0) {
        result.textContent = ("Paper beats rock, player win!");
        playerscore += 1;
    } else if (actualchoice == "rock" && cplay == 1) {
        result.textContent = ("Paper beats rock, computer win!");
        compscore += 1;
    } else if (actualchoice == "scissors" && cplay == 1) {
        result.textContent = ("Scissors beat paper, player win!");
        playerscore += 1;
    } else if (actualchoice == "paper" && cplay == 2) {
        result.textContent =("Scissors beat paper, computer win!");
        compscore += 1;
    } else if (c == actualchoice) {
        result.textContent = ("Tie!");
    } else {
        result.textContent = ("ERROR!");
    }

}

function playGame() {
    //for (let g = 0; g <5; g++){
     //   playRound()}}

     playRound();
     compmove.textContent = ("Computer chooses " + c + ".");
     pscore.textContent = ("Player score is " + playerscore + ".");
     cscore.textContent = ("Computer score is " + compscore + ".");

     if (playerscore > 5) {
        compmove.textContent = ("");
        result.textContent = ("");
        pscore.textContent = ("");
        cscore.textContent = ("");
        welcome2.textContent = 'You win! Reset to play again.';
    
    }
    
    if (compscore > 5) {
        compmove.textContent = ("");
        result.textContent = ("");
        pscore.textContent = ("");
        cscore.textContent = ("");
        welcome2.textContent = 'Computer wins! Reset to play again';
    
    }
    
    
    }