function function1(){
    let naam = document.getElementById("nm").value;
    let leeftijd = document.getElementById("ld").value;
    document.getElementById("result").innerHTML = "Jouw naam is "+naam+" je bent "+leeftijd+" jaar oud.";
    if (leeftijd >= 13 && leeftijd < 20){
        document.getElementById("result2").innerHTML = "Je bent een tiener."
    }
    else{
        document.getElementById("result2").innerHTML = "Je bent geen tiener."
    }

}