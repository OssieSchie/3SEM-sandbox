document.querySelector("button").addEventListener("click", btn_klik);
document.querySelector("button").addEventListener("pointerdown", (evt)=>{
    console.log(evt.pressure);
});

// function btn_klik(evt){
//     //console.log("evt", evt);
//     document.querySelector("#ball").classList.add("ani");
//     document.querySelector("button").removeEventListener("click", btn_klik);

//     console.log(evt.target);
//     console.log(evt.currentTarget);

//     console.log("clicked ball")
//     document.querySelector("#ball").addEventListener("animationend", ()=>{
    //         document.querySelector("#ball").classList.remove("ani");
    //         document.querySelector("button").addEventListener("click", btn_klik);
    //     })
    
    // }
    
    function btn_klik(){
        document.querySelector("#ball").classList.add("ani");
        document.querySelector("#ball").addEventListener("animationiteration",checkBall);
        document.querySelector("#ball").addEventListener("animationend",checkBall);
    }
    
    function checkBall(evt){
        //console.log(evt.tartget);
        if(evt.type === "animationend"){
            document.querySelector("#ball").classList.remove("ani");
        }else{
            console.log("evt.type: ", evt.type);
        }
    }