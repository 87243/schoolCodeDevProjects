<?php
    $name = SQLite3::escapeString($_POST["namePost"]);
    $score = SQLite3::escapeString($_POST["scorePost"]);

    $db = new SQLite3("demoDB.db");
    $db -> busyTimeout(5000);

    $query = "INSERT INTO Highscores (ID, Naam, Score) VALUES (NULL, '$name', '$score')";

    $db -> exec($query);

    echo "Naam: ". $name. "<br>";
    echo "Score: ". $score. "<br>";
?>