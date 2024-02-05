// let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
// console.log("letters[2]", letters);

// console.log(letters[4]); //console logger "e"

// let newArr = letters;
// newArr[4] = "*";
// console.log(letters[4]); //console logger "*", da vi ændrede definitionen i arrayet

// let newArr2 = letters;
// newArr2[4]= ":D";
// console.log(letters[4]);

// console.log(letters);

//------------------------------------
// const people = ["Harry", "Ron", "Hermione"];
// console.log("people", people);
// let result;
// result = people.push("Draco"); //adds Draco as an item in the array
// result = people.pop(); //removes the last element of the array and returns in as a value
// result = people.push("Neville"); //adds Neville as an item in the array
// result = people.push("Luna"); //adds Luna as an item in the array
// result = people.slice(0, 4); //returns a copy of the array between the given numbers (positions in array)
// result = people.splice(3, 0, "Cho"); //Adds/replaces item to array, first number determines position, second number determines how many items it should replace, returns deleted items from array
// people[1] = "Ginny"; //Replaces the second item with "Ginny"
// result = people.push("Fred", "George"); //Adds Fred and George at the end of the array
// result = people.indexOf("Cho"); //Returns position of item in array
// result = people.splice(result, 1); //sets value of "result" to item in array
// console.log("result", result);
// console.log("people", people);
//------------------------------------------
//let alphabet = ["a", "b", "c", "d", "e", "f","g"];
let str1 = "abcdefg";
console.log(str1);
let array1 = Array.from(str1); //creates array from input eg. string to indivisual array items
console.log("array1", array1);

const array2 = str1.split("e"); //makes an array, splits items up by input in split(""). if nothing is given = Splits after every character
console.log("array2", array2);

const array3 = [...str1];
console.log("array3", array3)
//--------------------------------------------

//lav 4 sidste slides af præsentation "JavaScript 5"




//-----------------from JavaScript 6--------------------


const person3 = {
    firstName:"Harry",
    lastName:"Potter",
    hired:false,
};
const person4 = {
    firstName:"Fred",
    lastName:"Weasly",
    hired:false,
};

function hire(person){
    person.hired = true
}

function fire(person){
    person.hired = false
}

function fireOrHire(action, person){
    action(person);
}

hire(person3);
console.log(person3);
