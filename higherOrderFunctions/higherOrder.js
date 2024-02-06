const people = ["Harry", "Ron", "Hermione", "Neville"];

// function sayHello(person){
//     console.log(`Hello ${person}`);
// }

function testParams(a ,b, c, d){
    console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`)
}
//people.forEach(sayHello);
people.forEach(testParams); //forRach send 3 params, 1. item, 2. index, 3. copy of arraymkdir

// people.forEach((person) =>{
//     sayHello(person);
// });