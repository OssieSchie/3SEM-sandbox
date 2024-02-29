let tileNmb = 0;

function changeBG(){
    if (tileNmb>360){
        tileNmb = 0;
    } else {
        const HShift = `hsla(${tileNmb}, 70%, 70%, 1)`;
        return HShift;
    }
}

document.querySelector("#hoverTile").addEventListener("mouseover", (event)=>{
    event.target.style.backgroundColor = changeBG();
    event.currentTarget.style.backgroundColor = `rgba(0, 0, 0, 0)`;
    tileNmb = tileNmb + 3;
})