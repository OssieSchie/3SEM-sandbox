document.querySelector("select").addEventListener("change", selectChange);
let currentCol = "orangez";

function selectChange(evt) {
  currentCol = evt.target.value;

  document.querySelector("body").addEventListener("animationend", changeBG);
  console.log("change", evt.target.value);
  document.querySelector("body").style.setProperty("--bgColor", currentCol);
  document.querySelector("body").classList.add("ani");
  // document.querySelector("body").style.setProperty("--bgColor", `${evt.target.value}`)
}

function changeBG(){  
  document.querySelector("body").classList.remove("ani");
  document.querySelector("body").style.backgroundColor = currentCol;
}
