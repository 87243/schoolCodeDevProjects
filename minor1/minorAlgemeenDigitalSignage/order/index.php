<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Burger mafia | Order</title>
        <link rel="stylesheet" href="../css/style.css">
        <link rel="stylesheet" href="../css/orderStyle.css">
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

        <script>
            let product = "<?php echo $_GET['product'] ?>";
        </script>
        <script src="../js/orderScript.js"></script>
    </body>
</html>