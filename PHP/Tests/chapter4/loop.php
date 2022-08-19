<?php
$fuel = 10;
$count = 1;

while ($count <=12)
{
	echo "$count times 12 is: " . $count * 12 . "\n";
	++$count;

	echo $count === 6 ? "stop " : "continue ";
}

/*while ($fuel >1)
{
	echo "KEEP DRIVING! \n";
}*/


?>
