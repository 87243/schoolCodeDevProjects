// Zeg zo vaak "Ik feliciteer je x keer" wat de getal is dat je in de input zet:
// (x is het getal wat je in de input zet.)
function go(){
    let number = document.getElementById("inputNumber").value;
    document.getElementById("divJS").innerHTML = "";
    let i = 0
    while(i < number){
        i++;
        document.getElementById("divJS").innerHTML += "<p>Ik feliciteer je "+i+" keer.</p>";
    }
}