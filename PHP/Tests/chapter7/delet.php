<?php

unlink('test.pdf') or die("could not delete file");

echo "file successfully deleted! \n";

echo date(DATE_RSS);

?>