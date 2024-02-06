//window.addEventListener("load", ()=>{showTheseVehicles(allVehi)});
//^Tilføj hvis jeg finder ud af hvordan man fjerner tidligere arrays^

const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];


document.querySelectorAll("button").forEach(button=>button.addEventListener("click", callButton));

function callButton(evt){
  if(evt.currentTarget.dataset.filter==="all"){
    showTheseVehicles(allVehi);
  }else if(evt.currentTarget.dataset.filter==="elec"){
    showTheseVehicles(electricVehi);
  }else if(evt.currentTarget.dataset.filter==="2sea"){
    showTheseVehicles(seats);
  }else if(evt.currentTarget.dataset.filter==="jona"){
    showTheseVehicles(seats);
  }else{
    showTheseVehicles(showRye);
  }
}


function showAll(vehicles){
  if(vehicles.type){
    return vehicles;
    // showVehicles = vehicles.filter(showAll);
  }
}

const allVehi = vehicles.filter(showAll);

//-----electric vehicles

function showElectric(vehicles){
  if(vehicles.isElectric===true){
    return vehicles;
    // showVehicles = vehicles.filter(showElectric);
  }
}

const electricVehi = vehicles.filter(showElectric);

//-----more than 2 seats

function showSeats(vehicles){
  if(vehicles.passengers>2){
    return vehicles;
  }
}

const seats = vehicles.filter(showSeats);

//-----alle el fartøjer ejet af jonas

function showJonas(vehicles){
  if(vehicles.isElectric===true&&vehicles.ownedBy==="Jonas"){
    return vehicles;
  }
}

const jonasVehi = vehicles.filter(showJonas);

//------rye>1

function ryePlusOne(vehicles){
  if(vehicles.fuel==="Rugbrød"&&vehicles.passengers>1){
    return vehicles;
  }
}

const showRye = vehicles.filter(ryePlusOne);


const ulPointer = document.querySelector("ul");

// showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    
    if(each.stops===undefined){
      each.stops = " ";
    }
    if(each.passengers===undefined){
      each.passengers = " ";
    }
    if(each.fuel===undefined){
      each.fuel = " ";
    }
    if(each.ownedBy===undefined){
      each.ownedBy = " ";
    }
    if(each.isElectric===undefined){
      each.isElectric = " ";
    }
    if(each.isTandem===undefined){
      each.isTandem = " ";
    }

    ulPointer.innerHTML += `<li style="background-color:rgba(0, 0, 0, 0.2);">${each.type}</li>`;
    ulPointer.innerHTML += `<li>${each.fuel}</li>`;
    ulPointer.innerHTML += `<li>${each.passengers}</li>`;
    ulPointer.innerHTML += `<li>${each.stops}</li>`;
    ulPointer.innerHTML += `<li>${each.ownedBy}</li>`;
    ulPointer.innerHTML += `<li>${each.isElectric}</li>`;
    ulPointer.innerHTML += `<li>${each.isTandem}</li>`;

  });
  console.log(arr);
}

//hvordan fanden sletter man det tegnede array??