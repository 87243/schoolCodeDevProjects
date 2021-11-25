function onSubmit(){
    let aanhef = document.getElementById("aanhef").value;
    let voornaam = document.getElementById("voornaam").value;
    let achternaam = document.getElementById("achternaam").value;
    let straatnaam = document.getElementById("straatnaam").value;
    let huisnummer = document.getElementById("huisnummer").value;
    let postcode = document.getElementById("postcode").value;

    let plaatsnaam = document.getElementById("plaatsnaam").value;
    let emailAddress = document.getElementById("emailAddress").value;
    let wachtwoord = document.getElementById("wachtwoord").value;
    let wachtwoordHerhaling = document.getElementById("wachtwoordHerhaling").value;

    console.log("Aanhef: "+aanhef);
    console.log("Voornaam: "+voornaam);
    console.log("Achternaam: "+achternaam);
    console.log("Straatnaam: "+straatnaam);
    console.log("Huisnummer: "+huisnummer);
    console.log("Postcode: "+postcode);

    console.log("Plaatsnaam: "+plaatsnaam);
    console.log("Email address: "+emailAddress);
    console.log("Wachtwoord: "+wachtwoord);
    console.log("Wachtwoord herhaling:"+wachtwoordHerhaling);
}