let theText = "hej hej hej hej ord hej hej";

let splitText = theText.split("ord");

console.log(splitText);
console.log(splitText.join("joe"));

console.log(theText.replaceAll("ord", "Johnny"));

//brug loop til at erstatte alle slemme ord med de rigtige