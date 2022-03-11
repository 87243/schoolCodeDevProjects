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
        <div id="content">
            <?php
                $naam = "Kewin";
                $studentennummer = "87243";
                $klas = "D1A1";

                $leerlijn1 = "Beheer";
                $leerlijn2 = "Interface";
                $leerlijn3 = "Proces";
                $leerlijn4 = "Program";

                $beheerCijfer = 8.8;
                $interfaceCijfer = 7.5;
                $procesCijfer = 5.8;
                $programCijfer = 7.9;

                $mijnCijfers = [8.8, 7.5, 5.8, 7.9];

                echo "Mijn naam is $naam.<br>";
                echo "Mijn studentennummer is $studentennummer.<br>";
                echo "Mijn klas is $klas.<br>";
                echo "<br>";
                echo "Mijn cijfers momenteel:<br>";
                echo "$leerlijn1: $beheerCijfer<br>";
                echo "$leerlijn2: $interfaceCijfer<br>";
                echo "$leerlijn3: $procesCijfer<br>";
                echo "$leerlijn4: $programCijfer<br>";
                echo "<br>";
                echo "Al mijn cijfers momenteel: ";

                for($i = 0; $i < 3; $i++){
                    echo "$mijnCijfers[$i], ";
                }
                echo "$mijnCijfers[3].";
            ?>
        </div>
    </body>
</html>