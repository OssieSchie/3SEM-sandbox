const taskArray = [];
const finishedTaskArray = [];

/* window.addEventListener("load", pushLocal);

function pushLocal(){
    //console.log(taskArray);
   // console.log(taskArray);
    if (localStorage.getItem("Task Array")){
        //let localArray = localStorage.getItem("Task Array");
        
        taskArray.push(localStorage.getItem("Task Array"));
        prepareList();
    }
} */

/* const taskTemplate ={
    task: "default task",
    amount: 0,
    isDone: false,
    id: 0
} */



document.querySelector("#createToDo").addEventListener("click", makeNewTask);


function makeNewTask(){
    console.log("makeTask");
    const userText = document.querySelector("#text").value;
    const genId = Math.floor(Math.random()*1000);
    
    const amountInput = document.querySelector("#amount").value;
    let userAmount;
    
    if(amountInput<1){
        userAmount = " ";
    } else{
        userAmount = amountInput;
    }
    
    const task = {
        name: `${userText}`,
        amount:`${userAmount}`,
        done: false,
        id: `${genId}`
    }
    
    taskArray.push(task);
    
    localStorage.setItem("Task Array", JSON.stringify(taskArray));
    
    prepareList();
    
    console.table(taskArray);
}

function prepareList(){
    document.querySelector("#tasks").innerHTML = "";
    
    const localArray = localStorage.getItem("Task Array");
    
    const parsedArray = JSON.parse(localArray);
    //const parseLocalArray = JSON.parse(localArray);
    
    parsedArray.forEach(displayTask);
}

//som den er nu appender displayTask direkte fra makeNewTask, ergo tager den ikke fra local storage. makeNewTask skal KUN pushe til local storage, og prepareTask Skal kun hente data fra localStorage

function displayTask(showTask){
    const clone = document.querySelector("template#toDoListe").content.cloneNode(true);
    
    clone.querySelector("[data-field=taskString]").textContent = showTask.name;
    clone.querySelector("[data-field=taskAmount]").textContent = showTask.amount;
    clone.querySelector("[data-id=defaultID]").setAttribute("data-id", showTask.id);
    
    document.querySelector("#tasks").appendChild(clone);
    
    document.querySelectorAll("[data-type=button]").forEach(button=>{
        button.addEventListener("click", btnFunction)
    })
    
    //btnEventListener();
}

/* function btnEventListener(){
    //const cloneBtn = document.querySelector("#mCol #tasks #toDoBtns button");
    //const cloneBtn = document.querySelectorAll("[data-type=button]");
    document.querySelectorAll("[data-type=button]").addEventListener("click", btnFunction);
    //const cloneFinBtn = document.querySelectorAll("[data-field=finBtn]");
    //const cloneDelBtn = document.querySelectorAll("[data-field=DelBtn]");
    //cloneBtn.addEventListener("click", btnFunction);
    //cloneFinBtn.addEventListener("click", btnFunction);
    //cloneDelBtn.addEventListener("click", btnFunction);
    
} */

function btnFunction(evt){
    const parentID = evt.currentTarget.parentNode.parentNode.getAttribute("data-id");
    
    if(evt.currentTarget.dataset.field === "finBtn"){
        console.log("finished task, ", "id: ", parentID);

        const id = taskArray.findIndex(task => task.id === parentID);

        const removedId = taskArray.splice(id, 1)[0];

        finishedTaskArray.push(removedId);
        taskArray.push();
        
        localStorage.setItem("Finished Task Array", JSON.stringify(finishedTaskArray));
        localStorage.setItem("Task Array", JSON.stringify(taskArray));
        
        //console.table(taskArray);
        //console.table(finishedTaskArray);
        
        prepareFinishedList();
        prepareList();
        
        //get the currentTarget ID from the data-id attribute, slice the selected object out, push it to the completed array, push new taskArray - the sliced bit
    }else if(evt.currentTarget.dataset.field === "delBtn"){
        console.log("deleted task, ", "id: ", parentID);
        
        const id = taskArray.findIndex(task => task.id === parentID);
        
        const removedId = taskArray.splice(id, 1)[0];
        
        taskArray.push();
        localStorage.setItem("Task Array", JSON.stringify(taskArray));
        
        prepareList();
    }
}

function prepareFinishedList(){
    document.querySelector("#finishedTasks").innerHTML = "";
    
    const localArray = localStorage.getItem("Finished Task Array");
    
    const parsedArray = JSON.parse(localArray);
    //const parseLocalArray = JSON.parse(localArray);
    
    parsedArray.forEach(displayFinishedTask);
}

function displayFinishedTask(showTask){
    const clone = document.querySelector("template#finishedListe").content.cloneNode(true);
    
    clone.querySelector("[data-field=taskString]").textContent = showTask.name;
    clone.querySelector("[data-field=taskAmount]").textContent = showTask.amount;
    clone.querySelector("[data-id=defaultID]").setAttribute("data-id", showTask.id);
    
    document.querySelector("#finishedTasks").appendChild(clone);
    
    document.querySelectorAll("[data-type=button]").forEach(button=>{
        //button.parentNode.parentNode.removeChild(button);
        button.style.display = 'none';
        //button.style.width = '0';
        //button.style.height = '0';
    })
    
    //btnEventListener();
}
/* document.querySelectorAll("#tasks div button").forEach(button=>{
    button.addEventListener("click", btnFilterEVTListen)});
    
    function btnFilterEVTListen(evt){
        console.log(evt.currentTarget.dataset.field);
        
    }
    */
   
   
   //
   
   //DONE ----- Tilføj item til liste //generer id til liste //check om ID'et er taget (generer måske ID'et baseret på hvor mange tasks du har lavet)
   
   //fjerne item fra listen //føj til "trash array" (array med max 5 objecter, objecter kan restoreres)
   
   //Tegn hvert item i arrayet (se i animal base filtering) //clear alle elementer og tegn dem igen når funktionen bliver kaldt