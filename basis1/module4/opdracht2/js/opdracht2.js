// Zeg zo vaak "Ik feliciteer je x keer" wat de getal is dat je in de input zet:
// (x is het getal wat je in de input zet.)
function go(){
    let number = document.getElementById("inputNumber").value;
    document.getElementById("divJS").innerHTML = "";
    for(let i = 0; i < number; i++){
        let i2 = i + 1;
        document.getElementById("divJS").innerHTML += "<p>Ik feliciteer je "+i2+" keer.</p>";
    }
}