const animals = [
    {name: "Mandu", type: "Cat"},
    {name: "Mia", type: "Cat"},
    {name: "Leeloo", type: "Dog"},
    {name: "ScoobyDoo", type: "Dog"}
];

function isCat(animal){
    if(animal.type==="Cat"){
        return true;
    }else{
        return false;
    };
}
function isDog(animal){
    if(animal.type==="Dog"){
        return true;
    }else{
        return false;
    };
}

let onlyCats = animals.filter(isCat);

console.log(onlyCats);

let onlyDogs = animals.filter(isDog);

console.log(onlyDogs);