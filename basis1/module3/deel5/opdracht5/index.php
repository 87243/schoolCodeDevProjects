<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>basis1 module3 deel5 opdracht5 D1A1 87243</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <fieldset>
    <legend>Form:</legend>
    <form action="">
        <div><label>Aanhef:</label><select id="aanhef" required>
            <option value="maak een keuze" disabled selected>Maak een keuze</option>
            <option value="meneer">Meneer</option>
            <option value="mevrouw">Mevrouw</option>
        </select></div>
        <div><label>Voornaam:</label><input id="voornaam" type="text" placeholder="Voornaam" required></div>
        <div><label>Achternaam:</label><input id="achternaam" type="text" placeholder="Achternaam" required></div>
        <div><label>Straatnaam:</label><input id="straatnaam" type="text" placeholder="Straatnaam" required></div>
        <div><label>Huisnummer:</label><input id="huisnummer" type="text" placeholder="Huisnummer" required></div>
        <div><label>Postcode:</label><input id="postcode" type="text" placeholder="Postcode" required></div>

        <div><label>Plaatsnaam:</label><input id="plaatsnaam" type="text" placeholder="Plaatsnaam" required></div>
        <div><label>Email address:</label><input id="emailAddress" type="email" placeholder="Email" required></div>
        <div><label>Wachtwoord:</label><input id="wachtwoord" type="password" placeholder="Wachtwoord" required></div>
        <div><label>Wachtwoord herhaling:</label><input id="wachtwoordHerhaling" placeholder="Wachtwoord herhaling" type="password" required></div>
        <!-- <div><input type="submit" value="Verzend"></div> -->
    </form>
    <button onclick="onSubmit()">Verzend</button>
    </fieldset>
    <!-- <p id="voornaam"></p> -->
    <script src="script.js"></script>
</body>
</html>