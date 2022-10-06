<?php
require_once 'login.php';
$conn = new mysqli($hn, $un, $pw, $db);
if ($conn->connect_error) die("Fatal Error");

if (isset($_POST['delete']) && isset($_POST['isbn']))
{
    $isbn = get_post($conn, 'isbn');
    $query = "DELETE FROM classics where isbn='isbn'";
    $result = $conn->query($query);
    if(!$result) echo "Delete Failed<br><br>";
}

if (isset($_POST['author']) &&
    isset($_POST['title'])  &&
    isset($_POST['type'])   &&
    isset($_POST['year'])   &&
    isset($_POST['isbn']))
{
$author = get_post($conn, 'author');
$title  = get_post($conn, 'title');
$type   = get_post($conn, 'type');
$year   = get_post($conn, 'year');
$isbn   = get_post($conn, 'isbn');

$query = "INSERT INTO classics VALUES" . 
"('author', 'title', 'type', 'year', 'isbn' )";

$result = $conn->query($query);
if (!$result) echo "Insert Failed<br><br>";
}

echo <<<_END
<form action="sqltest.php" method="post"><pre>
Author <input type="text" name="author" placeholder="Robin Nixon" required>
Title <input type="text" name="title" placeholder="MySQL JavScript - with jQuery" required>
Type <input type="text" name="type" placeholder="Programming" required>
Year <input type="text" name="year" placeholder="2015" required>
ISBN <input type="text" name="isbn" placeholder="1234567890123" required>
     <input type="submit" value="Add Record">
</pre></form>
_END;

$query = "SELECT * FROM classics";
$result = $conn->query($query);

if (!$result) die ("Database access failed");

$rows = $result->num_rows;

for ($j = 0; $j < $rows; ++$j)
{
$row = $result->fetch_array(MYSQLI_NUM);

$r0 = htmlspecialchars($row[0]);
$r1 = htmlspecialchars($row[1]);
$r2 = htmlspecialchars($row[2]);
$r3 = htmlspecialchars($row[3]);
$r4 = htmlspecialchars($row[4]);

echo <<<_END
<pre>
Author $r0
Title  $r1
Type   $r2
Year   $r3
ISBN   $r4
</pre>

<form action='sqltest.php' method='post'>
<input type='hidden' name='delete' value='yes'>
<input type='hidden' name='isbn' value='$r4'>
<input type='submit' value='Delete Record'></form>
_END;
}

$result->close();
$conn->close();

function get_post($conn, $var)
{
    return $conn->real_escape_string($_POST[$var]);
}


?>