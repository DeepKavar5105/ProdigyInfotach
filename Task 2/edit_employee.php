<?php
require 'config.php';
session_start();

if (!isset($_SESSION['user_id']) || $_SESSION['role'] != 'admin') {
    header("Location: login.php");
    exit;
}

$id = $_GET['id'];
$stmt = $pdo->prepare("SELECT * FROM employees WHERE id = ?");
$stmt->execute([$id]);
$employee = $stmt->fetch();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $position = $_POST['position'];

    $stmt = $pdo->prepare("UPDATE employees SET name = ?, email = ?, position = ? WHERE id = ?");
    $stmt->execute([$name, $email, $position, $id]);

    header("Location: employees.php");
}
?>

<h1>Edit Employee</h1>

<form method="POST" action="edit_employee.php?id=<?php echo $id; ?>">
    <input type="text" name="name" value="<?php echo $employee['name']; ?>" required placeholder="Name">
    <input type="email" name="email" value="<?php echo $employee['email']; ?>" required placeholder="Email">
    <input type="text" name="position" value="<?php echo $employee['position']; ?>" required placeholder="Position">
    <button type="submit">Update Employee</button>
</form>

<a href="employees.php">Back to Employee List</a>