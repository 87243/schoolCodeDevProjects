function check() {
    let gotnaam = "false";
    let gotleeftijd = "false";
    document.getElementById("result").innerHTML = "";
    document.getElementById("result2").innerHTML = "";
    document.getElementById("result3").innerHTML = "";
    let symptonen2 = "";
    let symptonen3 = "";
    let naam = document.getElementById("nm").value;
    console.log("naam= "+naam);
    if (naam == ""){
        document.getElementById("nmr").innerHTML = " <-- Vul hier uw naam in (verplicht)";
    } else if (!isNaN(naam)) {
        document.getElementById("nmr").innerHTML = " <-- Vul hier uw naam in (verplicht)";
    } else {
        document.getElementById("nmr").innerHTML = "";
        gotnaam = "true";
        console.log("gotnaam= "+gotnaam);
    }

    let leeftijd = document.getElementById("ld").valueAsNumber;
    console.log("leeftijd= "+leeftijd);
    if (!isNaN(leeftijd)){
        document.getElementById("ldr").innerHTML = "";
        gotleeftijd = "true";
        console.log("gotleeftijd= "+gotleeftijd);
    } else {
        document.getElementById("ldr").innerHTML = " <-- Vul hier uw leeftijd in (verplicht)";
    }
    // checking symptom's 
    let symptoon1 = document.getElementById("sn1").checked;
    let symptoon2 = document.getElementById("sn2").checked;
    let symptoon3 = document.getElementById("sn3").checked;
    let symptoon4 = document.getElementById("sn4").checked;
    let symptoon5 = document.getElementById("sn5").checked;
    console.log("symptoon1="+symptoon1);
    console.log("symptoon2="+symptoon2);
    console.log("symptoon3="+symptoon3);
    console.log("symptoon4="+symptoon4);
    console.log("symptoon5="+symptoon5);

    let symptonen = symptoon1+symptoon2+symptoon3+symptoon4+symptoon5;
    console.log("symptonen= "+symptonen);
    if (gotnaam == "true" && gotleeftijd == "true"){
        if (leeftijd >= 18){
            if (symptonen >= 2){
                document.getElementById("result").innerHTML = "Waarschuwing!";
                document.getElementById("result2").innerHTML = "Symptonen:";
                if (symptoon1 == true){
                    symptonen2 = symptonen2+"Niezen<br>";
                    symptonen3 = symptonen3+"Niezen\n";
                    document.getElementById("result3").innerHTML = symptonen2;
                }
                if (symptoon2 == true){
                    symptonen2 = symptonen2+"Verkouwdheid<br>";
                    symptonen3 = symptonen3+"Verkoudheid\n";
                    document.getElementById("result3").innerHTML = symptonen2;
                }
                if (symptoon3 == true){
                    symptonen2 = symptonen2+"Hoofdpijn<br>";
                    symptonen3 = symptonen3+"Hoofdpijn\n";
                    document.getElementById("result3").innerHTML = symptonen2;
                }
                if (symptoon4 == true){
                    symptonen2 = symptonen2+"Hoesten<br>";
                    symptonen3 = symptonen3+"Hoesten\n";
                    document.getElementById("result3").innerHTML = symptonen2;
                }
                if (symptoon5 == true){
                    symptonen2 = symptonen2+"Geen ruik/smaak<br>";
                    symptonen3 = symptonen3+"Geen ruik/smaak\n";
                    document.getElementById("result3").innerHTML = symptonen2;
                }
            } else {
                document.getElementById("result").innerHTML = "";
                document.getElementById("result2").innerHTML = "";
            }
        }
        if (leeftijd > 0 && leeftijd < 18){
            if (symptonen >= 3){
                document.getElementById("result").innerHTML = "Waarschuwing!";
                document.getElementById("result2").innerHTML = "Symptonen:";
                if (symptoon1 == true){
                    symptonen2 = symptonen2+"Niezen<br>";
                    symptonen3 = symptonen3+"Niezen\n";
                    document.getElementById("result3").innerHTML = symptonen2;
                }
                if (symptoon2 == true){
                    symptonen2 = symptonen2+"Verkouwdheid<br>";
                    symptonen3 = symptonen3+"Verkoudheid\n";
                    document.getElementById("result3").innerHTML = symptonen2;
                }
                if (symptoon3 == true){
                    symptonen2 = symptonen2+"Hoofdpijn<br>";
                    symptonen3 = symptonen3+"Hoofdpijn\n";
                    document.getElementById("result3").innerHTML = symptonen2;
                }
                if (symptoon4 == true){
                    symptonen2 = symptonen2+"Hoesten<br>";
                    symptonen3 = symptonen3+"Hoesten\n";
                    document.getElementById("result3").innerHTML = symptonen2;
                }
                if (symptoon5 == true){
                    symptonen2 = symptonen2+"Geen ruik/smaak<br>";
                    symptonen3 = symptonen3+"Geen ruik/smaak\n";
                    document.getElementById("result3").innerHTML = symptonen2;
                }
                window.alert("Waarschuwing!\nSymptonen:\n"+symptonen3);
            } else {
                document.getElementById("result").innerHTML = "";
                document.getElementById("result2").innerHTML = "";
            }
        }
    }
    console.log("result3= "+symptonen2);
}