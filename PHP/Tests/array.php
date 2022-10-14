<?php
//arrays
//1. single dimential array
 $carears = array("hacking", "bug bounting", "web dev", "network admin", "isp");
echo $carears[4];

echo ' <br> ';

//Double dimensional array
$countrie = array(array('mali', 'burundi', 'rwanda', 'ethiopia'),
	          array('kenya', 'congo', 'sudan', 'tanzania'));
echo $countrie[0][2] . "\nCountries";
print_r($countrie);

echo ' <br> ';

// multi dimensional array
	//
	$food = array(array('mango', 'pineapple', 'passion', 'orange', 'pawpaw', array('lemoned', 'caracus', 'cucambers')),
		      array('kales', 'spinach', 'cabbage', 'mchicha', 'managu'),
		      array('ginger', 'garlic', 'corionde', 'onion', 'carrot'));

echo $food[1][3];
print_R($food);

print_r($carears);


