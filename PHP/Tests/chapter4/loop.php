<?php
$fuel = 10;
$count = 1;
$var = 1;

/*
 for ($num = 1; $num <= 15; ++num) {
	 echo "$num times 15 is " . $num * 15 . "\n";
 }
*/

echo "display ! \n ";
/*
while (++$count <=12)
{
	echo "$count times 12 is: " . $count * 12 . "\n";
	//++$count;

	//echo $count === 6 ? "stop " : "continue ";
}
 */
while (--$fuel >= 5)
{
	echo "$fuel KEEP DRIVING! \n";
}

echo ($fuel < 5) ? "please refile! \n" : "keep driving\n";

do
 echo "$count times 13 is " . $count * 13 . "\n" ;
while (++$count <= 13);
do {
	echo "$var times 14  is " . $var * 14 . "\n";
}
while (++$var <= 14);

?>
