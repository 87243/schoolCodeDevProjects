function voegToe(){
    let naam = document.getElementById("naamInput").value;
    let leeftijd = parseInt(document.getElementById("leeftijdInput").value);
    let plaats = document.getElementById("plaatsInput").value;
    document.getElementById("inhoud").innerHTML += `<tr><td>${naam}</td><td>${leeftijd}</td><td>${plaats}</td></tr>`;
}