import { getRandomNumber } from "../utils/getRandomNumber.js";



//--kald til at generere en søjle på timer



//--generer ny søjle og putter den i et array måske array.shift


const list = document.querySelector("ul");

const dataArray = [];

setInterval(()=>checkPillar(dataArray), 1000);

function checkPillar(data){
    if(data.length>20){
        data.shift();
        console.log(dataArray);
    }
    genPillar(data);
}
// function checkPillar(data){
//     if(data.length>20){
//         data.shift();
//         genPillar(data);
//         console.log(dataArray);
//     } else{;
//         genPillar(data);
//     }
// }

//arrayet maxer ikke ud på 20

function genPillar(data){
    const li = document.createElement("li");
    let rndNmb = getRandomNumber(100);
    li.style.setProperty("--height", rndNmb);
    // li.style.setProperty("--height", "30");
    list.appendChild(li);
    data.push(data);
};






//if statement der checker om arrayet er over 20, hvis den ikke er array.push(søjle) eller array.shift (måske showArray = array.slice(1,21))

//generer tilfældigt nummer

//tilføj nummeret til et array

//lav en ny bar med det nummer

//efter 20 bare slet den ældste bar før den nye skabes
