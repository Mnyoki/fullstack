<?php
for ($count = 1; $count <= 15; ++$count)
{
	echo "$count times 15 is " . $count * 15 . "\n";
}

for ($i = 1, $j = 1; $i + $j <= 10; $i++, $j++)
{
	echo "php can be this easy if you keep on doing what you are doing. \n waiting to tackle mysql cos i just have a gist of databases. \n classes never helped that much but thanks to the enlightment \n" . "\n\n";


}

$fp = fopen("text.txt", 'wb');
for ($j = 0; $j < 4; ++$j)
{
	$written = fwrite($fp, "data\n\n");
	if ($written == FALSE) break;
}
fclose($fp);
$artic = <<<__END
	HELLO ALL
__END;
$section = "tak care of yourself. Let no external factor dertermine what to do . be a master of selfthought. \n";
$text = fopen("write.txt", 'wb');
$take = fwrite($text, $section);
if ($take == false );
fclose ($text);

?>
