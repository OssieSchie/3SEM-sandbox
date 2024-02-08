import { getRandomNumber } from "../utils/getRandomNumber.js";

const list = document.querySelector("ul");

const dataArray = [];

setInterval(()=>checkPillar(dataArray), 1000);

function checkPillar(data){
    if(data.length>20){
        data.shift();
        list.removeChild(list.firstChild);
        //console.log(dataArray);
    }
    genPillar(data);
}

function genPillar(data){
    const li = document.createElement("li");
    let rndNmb = getRandomNumber(100);
    li.style.setProperty("--height", rndNmb);
    list.appendChild(li);
    data.push(data);
    console.log(data);
};

