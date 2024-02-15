document.querySelector("body").addEventListener("mousemove", changeColor);
//document.querySelector("body").addEventListener("mousemove", changeColorY);

function changeColor(event){
    let xPos = `${event.clientX}`
    let yPos = `${event.clientY}`
    //console.log("xPos: ", xPos)
    event.target.style.setProperty("--x", xPos/window.innerWidth*360);
    event.target.style.setProperty("--y", yPos/window.innerHeight*100);
    changeSmiley(xPos, yPos); //<not working
}

// function changeColorY(event){
//     //console.log("yPos: ", yPos)
//     console.log(event.target.style);
//     changeSmiley(yPos);
// }

//----------------------------------------------------------
// function changeColorX(event){
//     let xPos = `${event.clientX}`
//     //console.log("xPos: ", xPos)
//     event.target.style.setProperty("--x", xPos/window.innerWidth*360);
//     changeSmiley(xPos);
// }

// function changeColorY(event){
//     let yPos = `${event.clientY}`
//     //console.log("yPos: ", yPos)
//     event.target.style.setProperty("--y", yPos/window.innerHeight*100);
//     console.log(event.target.style);
//     changeSmiley(yPos);
// }
//----------------------------------------------------------

function changeSmiley(col1, col2){   //<not working
    const smiley = document.querySelector("h2");

    console.log("event activating")

    smiley.style.setProperty("--x2", (col1/window.innerWidth*360)/2);
    smiley.style.setProperty("--y2", (col2/window.innerHeight*100)/2);
}

//document.querySelector("body").style.setProperty("--x", clientX/window.innerWidth*100)