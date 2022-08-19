<?php
echo "a: [" . true . "]\n";
echo "b: [" . false . "]\n";
echo "c: [" . (20 > 9) . "]\n";
echo "d: [" . (5 == 6) . "]\n";
echo "e: [" . (1 == 0) . "]\n";
echo "f: [" . (1 == 1) . "]\n \n \n";

// (===) compares items without doing converion
$a = 1;
$b = 0;
echo "php is much interestingbut my study speed is too low. \n";
if ($a != $b) echo "1 \n";
if ($a === $b) echo "2 \n";

if ($a <= $b) echo "$a: wow! \n";

echo  ($a AND $b) . " : and \n";
echo ($a OR $b) . "  : or \n";
echo !$b . " : not \n";
?>
