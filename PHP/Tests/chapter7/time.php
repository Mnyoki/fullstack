<?php

echo date("l F jS,Y - g:iA", time()) . "\n";

echo "we are on week: " . date("W") . "\n";
echo date("z") . " day of the year. \n";

echo date(DATE_RSS) . "\n";
//echo date(DATE_ATOM) . "\n";
//echo date(DATE_COOKIE) . "\n";
//echo date(DATE_W3C) . "\n";

$month = 9;
$day = 31;
$year = 2022;

if (checkdate($month, $day, $year)) echo "date is valid";
else echo "date is invalid";
?>