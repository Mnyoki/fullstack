<?php

$fileHandle = fopen("testfile.txt", 'r+') or die("failed to open file");
$text = <<<_ARTICLE

you better lock the files that can be accessed by multiple users or else you corrupt the file..
_ARTICLE;

if (FLOCK($fileHandle, LOCK_EX))
{
fseek($fileHandle, 0, SEEK_END);
fwrite($fileHandle, "$text") or die("could not write to file.");
flock($fileHandle, LOCK_UN);
}

fclose($fileHandle);
echo "file successfully updated \n";
echo date(DATE_RSS);

?>