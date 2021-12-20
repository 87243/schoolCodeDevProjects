// Variabeles en data:
let amountOfDivs = 10;
let text = new Array(
    "Welkom in mijn website.","Dit is de tweede tekst.","Dit is de 3e tekst, ja je weet toch.","Northface.","Joey bravo now out in cinemas.","Basis1 module4 opdracht4.","Banaan.","Appel.","Meloen.","Rood."
    );
let r = 50;
let g = 50;
let b = 50;

// Maak gekleurde DIVs met tekst.
for(let i = 0; i < amountOfDivs; i++){
    // r += 10.25;
    g += 10.25;
    b += 20.5;
    document.body.innerHTML += `<div id="divInsideDiv${i}" style="background-color: rgb(${r},${g},${b});"><p>${text[i]}</p></div>`;
}