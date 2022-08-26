<?php
/*
print ucfirst("enter a number to print.\n");
fscanf(STDIN, "%s\n", $num);
print ucfirst("enter a second number.\n");
fscanf(STDIN, "%s\n", $num1);
print ucfirst("your lucky number $num - $num1 is: ");
print $num - $num1 . ".\n";
print(abs($num - $num1));
 */

print ucfirst("please enter your first name!\n");
fscanf(STDIN, "%s\n", $fname);
print ucfirst("please enter your second name!\n");
fscanf(STDIN, "%s\n", $sname);
print ucfirst("please enter your last name!\n");
fscanf(STDIN, "%s\n", $lname);
echo "\n";
$names = fix_names($fname, $sname, $lname);
echo $names[0] . " " . $names[1] . " " . $names[2] . " ";
function fix_names($n1, $n2, $n3)
{
	$n1 = ucfirst(strtolower($n1));
	$n2 = ucfirst(strtolower($n2));
	$n3 = ucfirst(strtolower($n3));
	
	//return $n1 . " " . $n2 . " " . $n3  . ".\n";
	return array($n1, $n2, $n3);
}
//echo time("l");
echo ": ";
echo date("l.");

?>
