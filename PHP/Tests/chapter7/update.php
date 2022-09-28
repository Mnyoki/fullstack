<?php

$fileHandle = fopen("test.pdf", 'r+') or die("failed to open file");
$text = <<<_SECTION
 
ITS A FUCKING WORLD..

_SECTION;

#SEEK_END - places the string at the end.
#SEEK_SET - Places the string at a specific position after counting the placeholders.
#SEEK_CUR sets the file ponter to plus what you have

fseek($fileHandle, 0, SEEK_END);
//fseek($fileHandle, 1000, SEEK_SET);
//fseek($fileHandle, 100, SEEK_CUR);

fwrite($fileHandle, "$text") or die("could not write to file");
fclose($fileHandle);

echo "file successfully updated \n";

echo date("l jS F Y - g:iA", time());

?>