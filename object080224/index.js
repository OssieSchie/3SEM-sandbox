// const object = {
//     firstName: "Osvald",
//     age: 22,
//     student: true,
// };

// console.log(object);

// const nameToGet = "firstName";

// console.log(`${object[nameToGet]} is ${object.age} years old. Poor old ${object["firstName"]}`);

// object.firstName = "Johan";

// console.log(`${object[nameToGet]} is ${object.age} years old. Poor old ${object["firstName"]}`);

// object.lastName = "Børgesen";

// console.log(`${object[nameToGet]} ${object["lastName"]} is ${object.age} years old. Poor old ${object["firstName"]}`);

// console.log(object);

// // object.firstName = undefined;
// // console.log(object);

// delete object.lastName;
// console.log(object)

// if(object.student){
//     console.log(`congratulations ${object["firstName"]} on your transferral to sonic high, en excellent start to  your ${object["age"]}nd year on this earth`)
// }


const object = {
    firstName: "Osvald",
    age: 22,
    student: true,
};

object.age += 4;

//console.log(object);

// const object2 = {
//     firstName: "Troels",
//     age: 45,
//     student: false,
// };

const object2 = object;

//console.log(object2);

object2.firstName = "John";

//console.log(object2);

const person1 = {
    firstName: "Harry",
    lastName: "Potter",
};

const person2 = {
    firstName: "Harry",
    lastName: "Potter",
};

person1.firstName = person2.lastName;
person1.lastName = person2.lastName;

if (person1 === person2){
    console.log("they are the same!!");
}else{
    console.log("they are not the same D:");
};
