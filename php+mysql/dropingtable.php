<?php
require_once "login.php";
$conn = new mysqli($hn, $un, $pw, $db);
if ($conn->connect_error) die("Fatal Error");

//$query = "DROP TABLE example";  //dropping/deleting a table.

//$query = "delete from cats where id=2";  // deleting a row

//$query = "update cats SET name='charlie' where name='charly'";  // changing an item in a row.
//$query = "update cats set id=3 where id=4";

$query = "INSERT INTO cats values(NULL, 'lynx', 'Stumpy', 5)";

$result = $conn->query($query);
if (!$result) die("Database access failed");

echo "the Insert ID was: " . $conn->insert_id;
?>