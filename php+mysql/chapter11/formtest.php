<?php
if (isset($_POST['name'])) 
{
    $name = $_POST['name'];
    echo "helo $name";
}
else $name = "(not entered)";

echo <<<_END
<html>
<head>
<title>Form Test</title>
</head>
<body>
helo $name
<form method="post" action="formtest.php" autocomplete="on" autofocus>
<h1>What is your name?</h1>
<input type="text" name="name" >
<input type="submit">
</form>
</body>
</html>
_END;
?>