<?php
session_start();
if (!isset($_SESSION['user_id']) || $_SESSION['role'] != 'admin') {
    header("Location: login.php");
    exit;
}

echo "Welcome to the admin panel, " . $_SESSION['username'] . "!";
?>

<a href="dashboard.php">Back to Dashboard</a>
<a href="logout.php">Logout</a>