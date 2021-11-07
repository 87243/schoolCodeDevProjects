function inhoud() {
    let som = parseInt(document.getElementById("getal1").value * document.getElementById("getal2").value * document.getElementById("getal3").value);
    document.getElementById("result").innerHTML = `${som}`;
}