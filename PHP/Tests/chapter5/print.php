<?php
include "hello.php";
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
echo "WELCOME! \n";
echo "Sir : ";
echo fix_names($fname, $sname, $lname);
echo date(DATE_RSS) . "\n";
//$names = fix_names($fname, $sname, $lname);
//echo $names[0] . " " . $names[1] . " " . $names[2] . " ";
//function fix_names($n1, $n2, $n3)
function fix_names()
{
	/*
	$n1 = ucfirst(strtolower($n1));
	$n2 = ucfirst(strtolower($n2));
	$n3 = ucfirst(strtolower($n3));
	 */
	   //declearing global variable that can be accessed all through the program.
	global $fname; $fname =  ucfirst(strtolower($fname));
	global $sname; $sname = ucfirst(strtolower($sname));
	global $lname; $lname = ucfirst(strtolower($lname));

//	return $n1 . " " . $n2 . " " . $n3  . ".\n";
//	return array($n1, $n2, $n3);
        return $fname . " " . $sname . " " . $lname . ".\n";
}
//echo time("l");
echo "Day : ";
echo date("l.");
echo "\n\nDo you love math or take a qoute?\n";
echo "1: Math.\n2: Give a qoute.\n";
fscanf(STDIN, "%s\n", $option);
global $option;
	if (($option == 1) or ($option == "Math"))
	{
		echo ucfirst(strtolower("TRY AGAIN!\n"));
	}
	else if (($option == 2) or ($option == "Qoute"))
	{
		echo ucfirst(strtolower("life is awosome. LIVE IT! LIKE IT!.\n"));
	}
	else
	{
		echo ucfirst(strtolower("please! peak a valid number."));
	}


	// checking if a function exists.
	if (function_exists("fix_names"))
	{
		echo "Function exists!\n";
	}
	else
	{
		echo "function does not exist - better write our own.\n";
	}
?>
