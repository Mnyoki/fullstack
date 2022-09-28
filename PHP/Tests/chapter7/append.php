<?php

$file = fopen("testfile.txt", 'a') or die("failed to create file");

$text = <<<_END

dealing with file system is fun untill google isn't around then you know you fucked up.

i love my me time . i am all alone at this struggles and i know am capable of getting the best in it .

accept the learning curve and the changes that comes with it.

thanks
_END;

fwrite($file, $text) or die("could not write to file");
fclose($file);
echo "file 'testfile.txt' appended successfully. \n";

?>