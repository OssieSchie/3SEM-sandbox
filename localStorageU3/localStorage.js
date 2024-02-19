const root = document.documentElement,
    btn = document.querySelector("button");

let isDark = localStorage.getItem("theme") === "dark";

function applyTheme(){
    
    if(isDark === true){
        console.log("APPLYTheme");
        root.dataset.theme = "dark";
        localStorage.setItem("theme", "dark");
    }else{
        root.dataset.theme = "";
        localStorage.removeItem("theme");
    }
}

function toggleTheme(){
    console.log("toggleTheme");
    if(isDark === true){
        isDark = false;
    }else{
        isDark = true;
    }

    applyTheme();
}

applyTheme();

btn.addEventListener("click", toggleTheme);