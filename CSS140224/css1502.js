const splitTargets = document.querySelectorAll("[data-split]");
//splitte teksten på ("")


//loope hver bogstav ind i et span tag

splitTargets.forEach(target=>{
    const content = target.textContent;

    const splittedText = splitIntoChars(content);
    //split content

    //target.innerHTML = splittedTexet; 

    target.innerHTML = ``;

    splittedText.forEach(char=>{
        target.append(char)
    })
})

function splitIntoChars(string){
    return string.split(``).map(wrapInSpan)}

function wrapInSpan(node, i){
    // const span = document.createElement("span");

    // span.classList.add("char");

    // span.textContent=node;

    // span.style.setProperty("--i", i);

    // return span;


   return `<span class="char" style"--i: ${i};>${node}</span>`;
}