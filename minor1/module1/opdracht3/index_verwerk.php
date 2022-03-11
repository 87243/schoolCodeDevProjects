<?php
    $name = $_POST["name"];
    $studentnumber = $_POST["studentnumber"];
    $class = $_POST["class"];

    $leerlijn1 = $_POST["leerlijn1"];
    $leerlijn2 = $_POST["leerlijn2"];
    $leerlijn3 = $_POST["leerlijn3"];
    $leerlijn4 = $_POST["leerlijn4"];
    $cijfer1 = $_POST["cijfer1"];
    $cijfer2 = $_POST["cijfer2"];
    $cijfer3 = $_POST["cijfer3"];
    $cijfer4 = $_POST["cijfer4"];

    $cijfers = array(
        array($leerlijn1, $cijfer1),
        array($leerlijn2, $cijfer2),
        array($leerlijn3, $cijfer3),
        array($leerlijn4, $cijfer4)
    );

    $gemiddeldeCijfer = ($cijfer1 + $cijfer2 + $cijfer3 + $cijfer4) / 4;
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>GLR Minor1 Module1 Opdracht3 D1A1 87243</title>
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/index_verwerkStyle.css">
    </head>
    <body>
        <div id="content">
            <p>Jouw naam is: <?php echo $name;?></p>
            <p>Jouw studentnummer is: <?php echo $studentnumber;?></p>
            <p>Jouw klas is: <?php echo $class;?></p>
            <br>
            <table>
                <thead>
                    <tr>
                        <th>Leerlijn:</th>
                        <th>Cijfer:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><?php echo $cijfers[0][0];?></td>
                        <td><?php echo $cijfers[0][1];?></td>
                    </tr>
                    <tr>
                        <td><?php echo $cijfers[1][0];?></td>
                        <td><?php echo $cijfers[1][1];?></td>
                    </tr>
                    <tr>
                        <td><?php echo $cijfers[2][0];?></td>
                        <td><?php echo $cijfers[2][1];?></td>
                    </tr>
                    <tr>
                        <td><?php echo $cijfers[3][0];?></td>
                        <td><?php echo $cijfers[3][1];?></td>
                    </tr>
                </tbody>
            </table>
            <?php
                if($gemiddeldeCijfer >= 5.5){
                    echo "<p class='inline'>Gemiddelde cijfer:&nbsp;</p><p class='inline' style='color: green'>$gemiddeldeCijfer</p>";
                }
                else{
                    echo "<p class='inline'>Gemiddelde cijfer:&nbsp;</p><p class='inline' style='color: red'>$gemiddeldeCijfer</p>";
                }
            ?>
        </div>
    </body>
</html>