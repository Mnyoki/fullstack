<?php

copy('testfile.txt', 'testfile.pdf') or die("could not copy file");
echo "file successfully copied . \n";

echo date(DATE_RSS);

?>