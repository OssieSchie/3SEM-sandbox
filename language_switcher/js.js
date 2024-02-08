"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

// document.querySelector("#language").addEventListener("change", (event)=> locale = event.target.value);

window.addEventListener("load", ()=>{
  let locale = "da";
  texts[locale].texts.forEach((each) => {
    document.querySelector(each.location).textContent = each.text;
  });  
});


// texts[locale].texts.forEach((each) =>{
//   document.querySelector(each.location).textContent = each.text;
// })

document.querySelector("#language").addEventListener("change", (event) => {
  let locale = event.target.value;
  texts[locale].texts.forEach((each) => {
    document.querySelector(each.location).textContent = each.text;
  });
});
