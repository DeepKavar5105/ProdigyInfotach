<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}

echo "Welcome, " . $_SESSION['username'] . "!";

if ($_SESSION['role'] == 'admin') {
    echo "<p>You have admin access.</p>";
} else {
    echo "<p>You have user access.</p>";
}
?>

<a href="logout.php">Logout</a>