<?php
$lc = ""; 
if(isset($_SERVER['HTTP_ACCEPT_LANGUAGE']))
    $lc = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);

if($lc == "de"){
    header("location: /de");
    exit();
} elseif ($lc == "fr") {
	header("location: /fr");
} else {
    header("location: /en");
    exit();
}
?>
