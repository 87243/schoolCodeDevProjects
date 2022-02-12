function goed(){
    document.getElementById("resultaatVeld").innerHTML = "Goed zo!";
    document.getElementById("resultaatImgAside").innerHTML = '<img src="media/ok.gif"></img>';
};

function lager(){
    document.getElementById("resultaatVeld").innerHTML = "Kies lager.";
    document.getElementById("resultaatImgAside").innerHTML = '<img src="media/arrow-down.gif"></img>';
};

function hoger(){
    document.getElementById("resultaatVeld").innerHTML = "Kies hoger.";
    document.getElementById("resultaatImgAside").innerHTML = '<img src="media/arrow-up.gif"></img>';
};

function error(){
    document.getElementById("resultaatVeld").innerHTML = "Er is iets fout gegaan.";
};

function dier(dier){
    if (dier == "hond"){
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
    else if (dier == "gecko"){
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
    else if (dier == "olifant"){
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
    else if (dier == "vlieg"){
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
    };
};