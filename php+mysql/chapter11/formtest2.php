<?php
 if (isset($_GET['name'])) $name = $_GET['name'];
 else $name = "(Not entered)";
 echo <<<_END
 <html>
 <head>
 <title>Form Test</title>
 </head>
 <body>
 Your name is: $name<br>
 <form method="get" action="formtest2.php">
 What is your name?
 <input type="text" name="name">
 <input type="submit">
 HELO $name
 </form>
 </body>
 </html>
_END;

?>