const curseWords = [  {    bad: "var",    good: "const",  },  {    bad: "float",    good: "grid",  },  {    bad: "marquee",    good: "just don't",  },]; 
document.querySelector("button").addEventListener("pointerdown", sfw);

function sfw(){
    console.log("hej");
    let theText = document.querySelector("p").textContent;
    curseWords.forEach((wordObj)=>{
        theText = theText.replaceAll(wordObj.bad, wordObj.good);

    })
    document.querySelector("p").textContent = theText;
}

function isItSafe(){
    return !curseWords.some((item) => theText.includes(item.bad));
}
// function sfw(){
//     console.log("hej");
//     let theText = document.querySelector("p").textContent;
//     theText = theText.replaceAll(curseWords[0].bad, curseWords[0].good);
//     document.querySelector("p").textContent = theText;
// }