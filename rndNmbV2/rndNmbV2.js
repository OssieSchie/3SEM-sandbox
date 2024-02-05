import { getRandomNumber } from "../utils/getRandomNumber.js";
import { $, $$ } from "../utils/dom.js";

window.addEventListener("load", startGame());


function startGame(){
    console.log("play ball, hahahahaha");
    let result;
    const currGuess = [50]
    //result = currGuess;
    
    $("#compGuess").innerText = currGuess;
    
    $("#btn1").addEventListener("mousedown", guessHigher1st)
    $("#btn2").addEventListener("mousedown", guessLower1st)
    
    
    $("#btn3").addEventListener("mousedown", epicWin);
    
    function epicWin(){
        $("#congrats").classList.add("show");
        //$("#btn3").addEventListener("animationend", startGame);
        $("#congrats").classList.remove("show");
        result = 50;
    
    }
    //---------------------------------------------------------------------------//
    
    function guessHigher1st(){
        console.log("GH1");
        $("#btn1").removeEventListener("mousedown", guessHigher1st);
        $("#btn2").removeEventListener("mousedown", guessLower1st);
        
        result = currGuess.splice(0, 1, 75);
        $("#compGuess").innerText = currGuess;
        
        $("#btn1").addEventListener("mousedown", guessHigher);
        $("#btn2").addEventListener("mousedown", guessLower);
    }
    
    function guessLower1st(){
        console.log("GL1");
        $("#btn2").removeEventListener("mousedown", guessLower1st);
        $("#btn1").removeEventListener("mousedown", guessHigher1st);
        
        result = currGuess.splice(0, 1, 25);
        $("#compGuess").innerText = currGuess;
        
        $("#btn2").addEventListener("mousedown", guessLower);
        $("#btn1").addEventListener("mousedown", guessHigher);
    }
    
    //---------------------------------------------------------------------------//
    
    function guessHigher(){
        //$("#btn1").removeEventListener("mousedown", guessHigher1st);
        //$("#btn2").removeEventListener("mousedown", guessLower1st);
        
        const currGuessNum = parseFloat(currGuess);
        
        let randomValue = getRandomNumber(currGuessNum/2);
        
        result = currGuess.splice(0, 1, Math.min(currGuessNum+randomValue, 100));
        
        $("#compGuess").innerText = currGuess;
        $("#btn1").addEventListener("mousedown", guessHigher);
        //console.log(currGuess, randomValue, typeof currGuess, typeof randomValue, result);
        console.log(`current guess: ${currGuess}`, `random value: ${randomValue}`, typeof currGuess, typeof randomValue, result);
    }
    
    function guessLower(){
        // $("#btn2").removeEventListener("mousedown", guessLower1st);
        //$("#btn1").removeEventListener("mousedown", guessHigher1st);
        
        const currGuessNum = parseFloat(currGuess);
        
        let randomValue = getRandomNumber(currGuessNum/2);   //tager stadig 75 i stedet for 25, fix her og i guessHigher()
        
        result = currGuess.splice(0, 1, Math.max(currGuessNum-randomValue, 1));
        
        $("#compGuess").innerText = currGuess;
        $("#btn2").addEventListener("mousedown", guessLower);
        $("#btn1").addEventListener("mousedown", guessHigher);
        console.log(`current guess: ${currGuess}`, `random value: ${randomValue}`, typeof currGuess, typeof randomValue, result);
    }
}













// function startGame(){
//     $("#compGuess").innerText = `50`;

//     $("#btn1").addEventListener("click", guessHigher1st)

//     function guessHigher1st(){
//         $("#compGuess").innerText = `75`;
//         $("btn1").removeEventlistener("click", guessHigher1st);
//         $("btn1").addEventlistener("click", guessHigher);
//         return 75;
//     }

//     function guessHigher(prevGuess){

//     }
// }