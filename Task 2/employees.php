<?php
require 'config.php';
session_start();

if (!isset($_SESSION['user_id']) || $_SESSION['role'] != 'admin') {
    header("Location: login.php");
    exit;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $position = $_POST['position'];

    $stmt = $pdo->prepare("INSERT INTO employees (name, email, position) VALUES (?, ?, ?)");
    $stmt->execute([$name, $email, $position]);

    header("Location: employees.php");
}

$stmt = $pdo->query("SELECT * FROM employees");
$employees = $stmt->fetchAll();
?>

<h1>Employee Management</h1>

<form method="POST" action="employees.php">
    <input type="text" name="name" required placeholder="Name">
    <input type="email" name="email" required placeholder="Email">
    <input type="text" name="position" required placeholder="Position">
    <button type="submit">Add Employee</button>
</form>

<table>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Position</th>
        <th>Actions</th>
    </tr>
    <?php foreach ($employees as $employee): ?>
    <tr>
        <td><?php echo $employee['id']; ?></td>
        <td><?php echo $employee['name']; ?></td>
        <td><?php echo $employee['email']; ?></td>
        <td><?php echo $employee['position']; ?></td>
        <td>
            <a href="edit_employee.php?id=<?php echo $employee['id']; ?>">Edit</a>
            <a href="delete_employee.php?id=<?php echo $employee['id']; ?>">Delete</a>
        </td>
    </tr>
    <?php endforeach; ?>
</table>

<a href="logout.php">Logout</a>