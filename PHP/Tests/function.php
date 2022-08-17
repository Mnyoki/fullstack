<?php
/*
$temp = "20 days before was";
function longdate($timestamp)
{
	return date("l F jS Y", $timestamp);
}

function past($text, $timestamp)
{
	return date ("l F jS Y", $timestamp);
}
echo "today is: " . longdate(time());
echo "\n";
echo (time());
echo "\n";
echo past($temp, time() - 20*24*60*60);
 */

$temp = "The date is: ";
echo longdate($temp, time());

function longdate($text, $timestamp)
{
	return $text . date("l F jS Y", $timestamp);
}

// static variables
 function test()
 {
	 static $count = 0;
	 echo $count;
	 $count++;
 }
test();
echo "display";
echo test();
echo test() . __LINE__;
echo 8 + 4;

$j = 3;
$k = 4;
$p = "lovely place";
++$j;
$k++;
$t = $p + $k;
echo " \n ++j : \n" . $j;
echo "\n k++ : \n" . $k;
echo "\n" . $p;
?>
