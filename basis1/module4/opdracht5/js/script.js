let europa = [
    "Nederland","Duitsland","Polen","Frankrijk"
];
let noordAmerika = [
    "Verenigde staten","Canada","Alaska","Mexico"
];
let zuidAmerika = [
    "Argentinie","Suriname","Colombie","Brazilie"
];
let azie = [
    "Rusland","Indie","Alaska","Mexico"
];
let afrika = [
    "Egypte","Madagascar","Botswana","Algeria"
];
let australie = [
    "Australie","Nieuw zeeland","Solomon ijlanden","Palau"
];

for(let i = 0; i < 4; i++){
    if(i < 3){
        document.getElementById("divEuropa").innerHTML += europa[i]+", ";
        document.getElementById("divNoordAmerika").innerHTML += noordAmerika[i]+", ";
        document.getElementById("divZuidAmerika").innerHTML += zuidAmerika[i]+", ";
        document.getElementById("divAzie").innerHTML += azie[i]+", ";
        document.getElementById("divAfrika").innerHTML += afrika[i]+", ";
        document.getElementById("divAustralie").innerHTML += australie[i]+", ";
    }
    else if(i == 3){
        document.getElementById("divEuropa").innerHTML += europa[i]+".";
        document.getElementById("divNoordAmerika").innerHTML += noordAmerika[i]+".";
        document.getElementById("divZuidAmerika").innerHTML += zuidAmerika[i]+".";
        document.getElementById("divAzie").innerHTML += azie[i]+".";
        document.getElementById("divAfrika").innerHTML += afrika[i]+".";
        document.getElementById("divAustralie").innerHTML += australie[i]+".";
    }
}