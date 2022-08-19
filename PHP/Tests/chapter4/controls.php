<?php

$a = 1;
$b = 0;
$age = 18;
$person = 19;
/*
if ($person < $age)
{
	echo "too young to be around \n";
}
elseif ($person === $age)
{
	echo "please get in \n";
}
else
{
	echo " you are fucking old \n";
}*/

switch ($person)
{
case "19":
	echo "too young! \n";
	break;
case ">= $age":
	echo "get in \n";
	break;
}


echo $b . "\n";
$fuel = 1;
echo $fuel <= 1 ? "fill tank now" : "there is enough fuel";

?>
