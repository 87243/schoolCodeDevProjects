function function1() {
    let naam = document.getElementById("nm").value;
    if (naam == ""){
        document.getElementById("result").innerHTML = "";
    }
    else{
    document.getElementById("result").innerHTML = "Jouw naam is " + naam;
    }
}

function function2() {
    let leeftijd = document.getElementById("ld").valueAsNumber;
    if (!isNaN(leeftijd)){
        document.getElementById("result2").innerHTML = " je bent " + leeftijd + " jaar oud.";
    }
    else{
        document.getElementById("result2").innerHTML = "";
    }

    if (leeftijd >= 13 && leeftijd < 20){
        document.getElementById("result3").innerHTML = "Je bent een tiener."
    }
    else if (isNaN(leeftijd)){
        document.getElementById("result3").innerHTML = "";
    }
    else{
        document.getElementById("result3").innerHTML = "Je bent geen tiener."
    }
}