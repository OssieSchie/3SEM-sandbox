window.addEventListener("load", startGame);

function startGame(){
    // Generer tilfældigtr nummer mellem 1-100

    // const botNmb = Math.floor(Math.random()*100);
    // console.log(botNmb);

    // const ROCK = 'rock';
    // const PAPER = 'paper';
    // const SCISSORS = 'scissors';

    // // konverter nummer til botPick 0-32=R 33-66=P 67-100
    // let botPick; 
    
    // if (botNmb<33){
    //     botPick = ROCK;
    // } else if (botNmb>65){
    //     botPick = SCISSORS;
    // } else {
    //     botPick = PAPER;
    // }
    // console.log(botPick);

    const ROCK = 'rock';
    const PAPER = 'paper';
    const SCISSORS = 'scissors';

    let playerPick;
    let botPick; 

    document.querySelector("button.rock").addEventListener("mousedown", startRoundRock);
    document.querySelector("button.paper").addEventListener("mousedown", startRoundPaper);
    document.querySelector("button.scissors").addEventListener("mousedown", startRoundScissors);

    function startRoundRock(){
        //console.log("rock");
        playerPick = ROCK;
        startRound();
        console.log("(player)" + playerPick);
    }

    function startRoundPaper(){
        //console.log("paper");
        playerPick = PAPER;
        startRound();
        console.log("(player)" + playerPick);
    }

    function startRoundScissors(){
        //console.log("scissors");
        playerPick = SCISSORS;
        startRound();
        console.log("(player)" + playerPick);
    }
    

    function startRound(){
        document.querySelector("#win").classList.add("hidden");
        document.querySelector("#lose").classList.add("hidden");
        document.querySelector("#draw").classList.add("hidden");
        document.getElementById("player1").classList.remove('rock', 'paper', 'scissors');
        document.getElementById("player2").classList.remove('rock', 'paper', 'scissors');
        document.getElementById("player1").classList.add("shake");
        document.getElementById("player2").classList.add("shake");
        document.getElementById("player1").addEventListener("animationend", showResults)

        const botNmb = Math.floor(Math.random()*100);
        // console.log(botNmb);

        

        // konverter nummer til botPick 0-32=R 33-66=P 67-100
        
        
        if (botNmb<33){
            botPick = ROCK;
        } else if (botNmb>65){
            botPick = SCISSORS;
        } else {
            botPick = PAPER;
        }
        console.log("(bot) " + botPick);
    }
    
    function showResults(){
        document.getElementById("player1").classList.remove("shake");
        document.getElementById("player2").classList.remove("shake");

        if (botPick === ROCK){
            document.getElementById("player2").classList.add("rock");
            //console.log("botROCK");
        } else if(botPick === PAPER){
            document.getElementById("player2").classList.add("paper");
            //console.log("botPAPER");
        }else{
            document.getElementById("player2").classList.add("scissors");
            //console.log("botSCISSORS");
        };

        if (playerPick === ROCK){
            document.getElementById("player1").classList.add("rock");
            //console.log("playerROCK");
        } else if(playerPick === PAPER){
            document.getElementById("player1").classList.add("paper");
            //console.log("playerPAPER");
        }else{
            document.getElementById("player1").classList.add("scissors");
            //console.log("playerSCISSORS");
        };

        if(playerPick === ROCK && botPick === SCISSORS || playerPick === PAPER && botPick === ROCK || playerPick === SCISSORS && botPick === PAPER){
            victoryMsg();
        }else if(botPick === ROCK && playerPick === SCISSORS || botPick === PAPER && playerPick === ROCK || botPick === SCISSORS && playerPick === PAPER){
            defeatMsg();
        } else{
            drawMsg();
        }
        
    }    
    
    function victoryMsg(){
        console.log("You Won!")
        document.querySelector("#win").classList.remove("hidden");
    }
    function defeatMsg(){
        console.log("You Lost!")
        document.querySelector("#lose").classList.remove("hidden");
    }
    function drawMsg(){
        console.log("You Tied!")
        document.querySelector("#draw").classList.remove("hidden");
    }


    //MAKE ANIMATION FOR THE xMsg RELEVANT CLASSES AND REMOVE THE CLASSES AFTER THEY HAVE FINISHED THEIR ANIMATION


    // Tilføj event listeners til R/P/S knapper der tager klassen fra knappen og setter den som playerPick

    //Tilføj shake til spiller og bots hænder, ved animationend tilføj deb relevante klasse til hver hånd

    //spil logik

    //fjern .hidden klassen fra den relevante tekst

    //put .hidden klassen på alle tekstboxe, og kald startGame() igen

}