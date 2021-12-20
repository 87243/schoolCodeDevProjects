// Maar array met de namen van de images:
let images = new Array;
for(let i = 1; i <= 10; i++){
    images.push("image"+i);
}

// Zet DIVs met images, tekst en HR in de DIV (In de website dus.):
for(let i = 0; i < 10; i++){
    document.getElementById("divImages2").innerHTML += "<div><h1>"+images[i]+":</h1><img src=media/"+images[i]+".jpg><hr></div>"
}