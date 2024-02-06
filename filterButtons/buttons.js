document.querySelectorAll("button").forEach(button=>{
button.addEventListener("click", btnFilterEVTListen)});

function btnFilterEVTListen(evt){
    console.log(evt.currentTarget.dataset.filter);

}