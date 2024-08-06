<?php
$host = 'localhost';
$db = 'employee_management';
$user = 'root'; // Change this according to your database configuration
$pass = ''; // Change this according to your database configuration

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Could not connect to the database: " . $e->getMessage());
}
?>