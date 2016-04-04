<?php
$file = "../pubkey.asc";  

header('Content-Type: text/plain');  
header('Content-Disposition: inline; filename= "'.$file.'"');  
header('Content-Length: '.filesize($file));  

readfile($file);
?>