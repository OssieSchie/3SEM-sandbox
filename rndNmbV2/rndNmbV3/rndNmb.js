import { $, $$ } from "../../utils/dom.js";

let computerGuess;
let lowNmb = 0;
let highNmb = 100;
//let GuessNmb = 0;

$("#btnHigh").addEventListener("click", ()=>{tooLowOrHigh(evt)});
$("#btnLow").addEventListener("click", ()=>{tooLowOrHigh(evt)});

computerGuesser();

function computerGuesser(){

    computerGuess = lowNmb + (highNmb-lowNmb)/2;

}

// function tooHigh(){
//     GuessNmb++;
//     highNmb = computerGuess
//     return `too high`;
// }

// function tooLow(){
//     GuessNmb++;
//     lowNmb = computerGuess
//     return `too low`;
// }

function tooLowOrHigh(){
    //console.log(evt);
    if (evt.taget.id === "tooLow"){
        lowNmb = computerGuess;
        computerGuesser();
    } else if(evt.target.id==="tooHigh"){
        highNmb = computerGuess;
        computerGuesser();
    } else{
        winner();
    };

    return computerGuess;
}