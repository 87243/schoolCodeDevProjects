function inhoud() {
    let leeftijd = lt.value;
    if (leeftijd >= 0 && leeftijd < 1){
        document.getElementById("result").innerHTML = "Baby";
    }
    else if (leeftijd >= 1 && leeftijd < 3){
        document.getElementById("result").innerHTML = "Peuter";
    }
    else if (leeftijd >= 3 && leeftijd < 6){
        document.getElementById("result").innerHTML = "Kleuter";
    }
    else if (leeftijd >= 6 && leeftijd < 12){
        document.getElementById("result").innerHTML = "Kind";
    }
    else if (leeftijd >= 12 && leeftijd < 16){
        document.getElementById("result").innerHTML = "Puber";
    }
    else if (leeftijd >= 16 && leeftijd < 21){
        document.getElementById("result").innerHTML = "Adolescent";
    }
    else if (leeftijd >= 21 && leeftijd < 111){
        document.getElementById("result").innerHTML = "Volwassen";
    }
    else if (leeftijd >= 111){
        document.getElementById("result").innerHTML = "Vreemde invoer";
    }
    else if (leeftijd < 0){
        document.getElementById("result").innerHTML = "Vreemde invoer";
    }
}

// function inhoud() {
//     document.write(lt);
//     let lt2 = parseInt(lt);
//     document.getElementById("result").innerHTML = lt.valueAsNumber;
// }