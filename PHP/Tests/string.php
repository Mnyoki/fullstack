<?php
$msgs = 5;
$me = "\n I love farming. \n";
$ME = "Coding is my hobby.\n";
$me .= $ME;
$author = "Moses Munyoki";
$qoute = "Brian W. Kernighan";
$owner = "Scott Adams";
$out = <<<_END
	Normal people believe that if it aint broken, dont fix it.
Engineers believe that if it aint broken, it does not have enough features yet.
- $owner. 
_END;
$word = "\nMeasuring programming progress by lines of code is like measuring aircraft building rogress by weight.\n-$author \n";
$text = "\nshe wrote upon it, \"Return to sender\". ";
echo $text;
echo $me;
echo "you have  " . $msgs . " messages! \n";
echo  $word;

	echo <<<_END
	Debuggimg is twice as hard as writting the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart to debug it.

- $qoute

$out \n
_END;

echo <<<_SECTION1
coding is fun while the world seems harsh. loots of stuff are waiting and looking at me like boy! show us what you gat .
_SECTION1;

echo "This is line " . __LINE__ . " of file " . __FILE__ ;

?>
