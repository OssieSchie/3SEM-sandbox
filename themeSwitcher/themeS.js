//tger value input fra drop down og smider dem ind i data-theme i html, kig i languageSwitcher, kald dataset.theme = evt.target.value

//document.querySelector("#language").addEventListener("change", (event) => {

document.querySelector("#theme-select").addEventListener("change", changeTheme);

function changeTheme(){
    document.querySelector("body").dataset.theme = event.target.value;
}