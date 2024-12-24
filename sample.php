<?php

if (isset($_POST['submit'])){
    $title = $_POST['title'];
    $img = $_POST['img'];
    $description = $_POST['description'];
    $createdAt = $_POST['createdAt']; // Added semicolon here

    $hostname = "localhost";
    $username = "root";
    $password = "";
    $dbname = "capstonedb";

    // Create connection
    $conn = new mysqli($hostname, $username, $password, $dbname); // Added dbname here

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepared statement for inserting values
    $sql = "INSERT INTO lessonsdb (title, img, description, createdAt) VALUES ('$title', '$img', '$description', '$createdAt')";

    // Execute query
    if (mysqli_query($conn, $sql)) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    // Close connection
    $conn->close();
}
?>
