<?php 

/*
$paper [] = "inkjet";
$paper [] = "printer";
$paper [] = "copier";
$paper [] ="photo";

for ($i=0; $i<4; ++$i)
{
    print $i+1 . ": " . $paper[$i] . "\n";
}
*/

#associative array
$paper ['copier'] = "copier &  multipurpose";
$paper ['inkjet'] = "inkjet printer";
$paper ['laser'] = "laser printer";
$paper ['photo'] ="photographic paper";

/*
for ($i=0; $i<4; ++$i)
{
    print $i+1 . ": " . $paper['inkjet'] . "\n";
}
*/

print ($paper['copier'] . "\n");

//foreach

$pape = array ('copier', 'inkjet', 'laser', 'photo');
 
$j = 0;

foreach($pape as $item)
{
    echo "$j: $item \n";

    $j++;
}

/*
$pap = array 
(
'copier' => "copier & miltipurpose",
'inkjet' => "inkjet printer",
'laser' => "laser printer",
'photo' => "photographic paper"
);

foreach ($pap as $item => $description)
{
echo "$item: $description\n";
}
*/

$pa = array 
(
'copier' => "copier & miltipurpose",
'inkjet' => "inkjet printer",
'laser' => "laser printer",
'photo' => "photographic paper"
);

while (list($item, $description) = each($pa))
{
    echo "$item: $description \n";
}

?>