<?php
$arith = new Sum;
$object = new User;
print_r($object); echo "<br>";
print_r($arith); echo "<br>";
//print $arith->
$object->name = "moses"; 

//echo "<br>"; //fscanf(STDIN, "%s\n", $name);

//global $name; global $password;
$object->password = "mun";

//fscanf(STDIN, "%s\n", $password);
print_r($object); echo "<br>";

$object->saveUser();

$arith->num1 = 4;
$arith->num2 = 6;
print_r($arith); echo "<br>";
print  $arith->add() . PHP_EOL;
//echo "\nname: $name.\npasword: $password";

class User
{
    public $name, $password;
    

    function saveUser()
    {
        echo "Saved user code goes here.";
    }
}

class Sum
{
    public $num1, $num2;
    //global $num1; 
    public function add()
    {
        $add = $this->num1 +$this->num2;

        return $add;
    }
}

class Product
{
    public $num1=4, $num2=5;
    public function multi()
    {
        $multi = $this->num1 * $this->num2;

        return $multi;
    }
}

$prod = new Product();
print PHP_EOL . "the product of $prod->num1 and $prod->num2 is: " . $prod->multi() . PHP_EOL;
//print $prod->multi();

?>