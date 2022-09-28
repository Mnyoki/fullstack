<?php

$products = array(
    'paper' => array(
        'copier' => "copier & multipurpose",
        'inkjet' => "inkjet printer",
        'laser' => "laser printer",
        'photo' => "photogeaphic paper",
    ),

    'pens' => array(
        'ball' => "ball point",
        'hilite' => "highlighters",
        'marker' => "markers",
    ),

    'misc' => array(
        'tape' => "sticky tape",
        'glue' => "adhesives",
        'clips' => "paper clips"
    )
    );

    echo "\n";

    foreach($products as $section => $items)
    {
        foreach($items as $key => $value)
        {
            echo "$section: \t$key\t($value)\n";
        }
    }

    echo "\n";

    echo $products ['misc']['glue'] . "\n";

    $chessboard = array(
        array('r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'),
        array('p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'),
        array(' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '),
        array(' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '),
        array(' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '),
        array(' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '),
        array('P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'),
        array('R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R')
        );
        echo "\n";
        foreach($chessboard as $row)
        {
        foreach ($row as $piece)
        echo "$piece ";
        echo "\n";
        }
        echo $chessboard[7][3];
        echo "\n";

        echo (is_array($chessboard)) ? "is an array" : "is not an array" ; echo "\n";

        echo count($chessboard, 1);echo "\n";

        sort($chessboard); echo "\n";
        shuffle($chessboard); echo "\n";


        $temp = explode(' ', "this is a sentence with seven words");
       
       /*
        foreach ($temp as $items)
        {
            echo "$items";
        }
       */
      print_r($temp);

      $fname = "Doctor";
 $sname = "Who";
 $planet = "Gallifrey";
 $system = "Gridlock";
 $constellation = "Kasterborous";
 $contact = compact('fname', 'sname', 'planet', 'system', 'constellation');
 print_r($contact);echo "\n";

 $j = 23;
 $temp = "Hello";
 $address = "1 Old Street";
 $age = 61;
 print_r(compact(explode(' ', 'j temp address age')));

        ?>