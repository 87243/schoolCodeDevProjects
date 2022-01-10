function goed(){
    document.getElementById("resultaatVeld").innerHTML = "Goed zo!";
    document.getElementById("resultaatImgAside").innerHTML = '<img src="media/ok.gif" id="resultaatImg"></img>';
}

function lager(){
    document.getElementById("resultaatVeld").innerHTML = "Kies lager.";
    document.getElementById("resultaatImgAside").innerHTML = '<img src="media/arrow-down.gif" id="resultaatImg"></img>';
}

function hoger(){
    document.getElementById("resultaatVeld").innerHTML = "Kies hoger.";
    document.getElementById("resultaatImgAside").innerHTML = '<img src="media/arrow-up.gif" id="resultaatImg"></img>';
}

function error(){
    document.getElementById("resultaatVeld").innerHTML = "Er is iets fout gegaan.";
}

function hond(){
    let leeftijd = 5.5;
    let leeftijdInput = document.getElementById("leeftijd").valueAsNumber;
    if (leeftijdInput == leeftijd){
        goed();
        return;
    }
    if (leeftijdInput <= leeftijd){
        hoger();
        return;
    }
    if (leeftijdInput >= leeftijd){
        lager();
        return;
    }
    error();
}

function gecko(){
    let leeftijd = 11;
    let leeftijdInput = document.getElementById("leeftijd").valueAsNumber;
    if (leeftijdInput == leeftijd){
        goed();
        return;
    }
    if (leeftijdInput <= leeftijd){
        hoger();
        return;
    }
    if (leeftijdInput >= leeftijd){
        lager();
        return;
    }
    error();
}

function olifant(){
    let leeftijd = 1.6;
    let leeftijdInput = document.getElementById("leeftijd").valueAsNumber;
    if (leeftijdInput == leeftijd){
        goed();
        return;
    }
    if (leeftijdInput <= leeftijd){
        hoger();
        return;
    }
    if (leeftijdInput >= leeftijd){
        lager();
        return;
    }
    error();
}

function vlieg(){
    let leeftijd = 1216;
    let leeftijdInput = document.getElementById("leeftijd").valueAsNumber;
    if (leeftijdInput == leeftijd){
        goed();
        return;
    }
    if (leeftijdInput <= leeftijd){
        hoger();
        return;
    }
    if (leeftijdInput >= leeftijd){
        lager();
        return;
    }
    error();
}