<?php
require_once 'login.php';
$conn = new mysqli($hn, $un, $pw, $db);
if ($conn->connect_error) die("Fatal Error");

$stmt = $conn->prepare('INSERT INTO classics VALUES(?,?,?,?,?)');
$stmt->bind_param('sssss', $author, $title, $category, $year, $isbn);

$author = 'Emily Bronte';
$title = 'Wthering Heights';
$category = 'Classic Fiction';
$year = '1847';
$isbn = '1029384756123';

$stmt->execute();
print("%d Row inserted.\n" . $stmt->affected_rows);

$stmt->close();
$conn->close();
?>