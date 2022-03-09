<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>GLR Minor1 Module1 Opdracht2 D1A1 87243</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        
    </body>
</html>

<?php
    $naam = "Kewin";
    $studentennummer = "87243";
    $klas = "D1A1";
    $cijfers = [8.8, 7.5, 5.8, 7.9];

    echo 'Mijn naam is ';
    echo $naam;
    echo '.<br>';
    echo 'Mijn studentennummer is ';
    echo $studentennummer;
    echo '.<br>';
    echo 'Mijn klas is ';
    echo $klas;
    echo '.<br>';
    echo '<br>';
    echo 'Mijn cijfers momenteel:<br>';
    echo 'Beheer: ';
    echo $cijfers[0];
    echo '<br>';
    echo 'Interface: ';
    echo $cijfers[1];
    echo '<br>';
    echo 'Proces: ';
    echo $cijfers[2];
    echo '<br>';
    echo 'Program: ';
    echo $cijfers [3];
    echo '<br>';
    echo '<br>';
    echo 'Al mijn cijfers momenteel: ';
    
    foreach ($cijfers as $Cijfer) {
        echo "$Cijfer, ";
    }
?>