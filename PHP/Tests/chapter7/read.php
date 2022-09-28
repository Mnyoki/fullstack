<?php

$fileHandle = fopen("testfile.txt", 'r') or die("file does not exist or you lack permission to open it");

//fgets - returns some portion of the text.
//fread works best with binary but you have to add the number of words to be displayed.

$text = fread($fileHandle, 10000);
fclose($fileHandle);
echo $text . "\n";
echo "\n" . date(DATE_RSS) . "\n";

?>