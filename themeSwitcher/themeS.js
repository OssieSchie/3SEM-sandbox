//tger value input fra drop down og smider dem ind i data-theme i html, kig i languageSwitcher, kald dataset.theme = evt.target.value

//document.querySelector("#language").addEventListener("change", (event) => {

document.querySelector("#theme-select").addEventListener("change", changeTheme);

function changeTheme(){
    let theme = event.target.value;

    document.querySelector("body").dataset.theme = theme;

    if(theme === "light"){
        localStorage.setItem("theme", "light")
    }else if(theme === "dark"){
        localStorage.setItem("theme", "dark")
    }else{
        localStorage.setItem("theme", "hawaii")
    }
}

function setTheme(){
    let getTheme = localStorage.getItem("theme");
    document.querySelector("body").dataset.theme = getTheme;
}

setTheme();

