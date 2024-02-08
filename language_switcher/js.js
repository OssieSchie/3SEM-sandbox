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
const locale = "da";
//let locale = "da";

// console.log(texts.de.texts[0].text);

// console.log(texts["da"].texts[0].text);

texts[locale].texts.forEach((each) =>{
  console.log(each);
})
