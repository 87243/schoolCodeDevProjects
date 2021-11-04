function bereken() {
    let som = parseInt(document.getElementById("getal1").value * document.getElementById("getal2").value);
    

    if (getal1.value == 0){
        document.getElementById("result").innerHTML = "Fout";
    }

    else if (getal2.value == 0){
        document.getElementById("result").innerHTML = "Fout";
    }
    
    else{
    document.getElementById("result").innerHTML = "Totaalprijs: $ "+`${som}`;
    }
}
