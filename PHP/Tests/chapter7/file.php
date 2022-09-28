<?php

$file = fopen("testfile.txt", 'w') or die("failed to create file");

$text = <<<_END
the progress is amaizing. the struggles are real. if there is nothing you can do about the situation, why grief?
its best to not worry about what you can't solve. 

have been trying to be a good persons but it high time i incoporate a budget and a plan in everything i do cos i can't be this broke. i need to account for every penny i use.
_END;

fwrite($file, $text) or die("could not write to file");
fclose($file);
echo "file 'testfile.txt' written successfully. \n";

?>