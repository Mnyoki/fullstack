<?php
//phpinfo();
echo date("l");
echo strrev("\n.dlrow olleh\n");
echo str_repeat("hip \n",3);
echo strtoupper("hooray! \n");

echo "what's your name? \n";
fscanf(STDIN, "%s\n", $name);           // Reading input from STDIN
echo "Hi, ".$name.".\n";
echo "please enter a number to find its square \n";
fscanf(STDIN, "%s\n", $num);
echo "square of $num is: \n". $num * $num . "\n\n";
echo strtolower("THANK YOU \n");
echo ucfirst("am glad to be doing all this. I know i have laying to me that am doing any thing good but procrastinatting is real. whatch out you don't slep over. you got this.\n");
echo ucfirst(strtolower("hello all\n"));
echo ucfirst($name);

?>
