<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Burger mafia | Pay</title>
        <link rel="stylesheet" href="../css/style.css">
        <link rel="stylesheet" href="../css/payStyle.css">
    </head>
    <body>
        <!-- Navbar: -->
        <nav>
            <div>
                <div>
                    <img src="../media/logo.jpg" alt="">
                </div>
                <div>
                    <h1>Burger mafia</h1>
                </div>
            </div>
            <div>
                <ul>
                    <li><a href="../">Home</a></li>
                </ul>
            </div>
        </nav>
        <!-- End of navbar -->

        <!-- Pay: -->
        <div id="payDiv">
            <h2>#00001</h2>
            <h2 id="priceH2">€5,00</h2>
            <div id="enteredPinDiv">
                <h1 id="enteredPinH1"></h1>
            </div>
            <div id="gridDiv">
                <div><a onclick="pinButton(1)">1</a></div>
                <div><a onclick="pinButton(2)">2</a></div>
                <div><a onclick="pinButton(3)">3</a></div>
                <div><a onclick="pinButton(4)">4</a></div>
                <div><a onclick="pinButton(5)">5</a></div>
                <div><a onclick="pinButton(6)">6</a></div>
                <div><a onclick="pinButton(7)">7</a></div>
                <div><a onclick="pinButton(8)">8</a></div>
                <div><a onclick="pinButton(9)">9</a></div>
                <div><a onclick="pinButton(10)">0</a></div>
                <div><a onclick="pinButton(11)">OK</a></div>
            </div>
            <h2 id="errorH2"></h2>
        </div>
        <!-- End of pay -->

        <script>
            let product = "<?php echo $_GET['product'] ?>";
            let amount = "<?php echo $_GET['amount'] ?>";
        </script>
        <script src="../js/payScript.js"></script>
    </body>
</html>