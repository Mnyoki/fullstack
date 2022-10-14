<?php
if (isset($_SERVER['PHP_AUTH_USER']) && 
     isset($_SERVER['PHP_AUTH_PW']))
     {
        ECHO "WELCOME USER: " . htmlspecialchars($_SERVER['PHP_AUTH_USER']) . "<br>" .
              "PASSWORD: " . htmlspecialchars($_SERVER['PHP_AUTH_PW']);
     }
     else
     {
        header('WWW-Authenticate: Basic realm="Restricted"');
        header('HTTP/1.0 401 Unauthorized');
        die("please enter your username and password");
     }

     echo '0e123' == '0e456';
     echo hash('ripemd128', "saltstringmypassword") . "harsh";
     echo password_hash("munyoki", PASSWORD_DEFAULT);
     ?>