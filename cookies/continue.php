<?php
session_start();

if (isset($_SESSION['forename']))
{
    $forename = htmlspecialchars($_SESSION['forename']);
    $surname = htmlspecialchars($_SESSION['surname']);

    echo "welcome back $forename.<br> Your full name is $forename $surname. <br>";
}
else echo "please <a href='authenticate2.php'>Click here to sign up!</a>";
?>