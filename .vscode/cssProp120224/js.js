const h1 = document.querySelector("h1");

document.querySelector("button").addEventListener("pointerdown", switchTheme);

function switchTheme(){
if(h1.dataset.filter === "bat"){
    h1.dataset.filter = "fox";
    console.log("switch 1")
} else {
    h1.dataset.filter = "bat";
    console.log("switch 2")
};
}