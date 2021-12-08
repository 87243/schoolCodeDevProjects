let amountOfDivs = 10;
for(let i = 0; i <= amountOfDivs; i++){
    // document.getElementById("div1").innerHTML +=
    document.body.innerHTML += `<div id="divInsideDiv${i}"></div>`;
}