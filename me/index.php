<?php
$file = "./me.vcf";  

header('Content-Type: text/x-vcard');  
header('Content-Disposition: inline; filename= "'.$file.'"');  
header('Content-Length: '.filesize($file));  

exec('pushover Downloaded vCard.');

readfile($file);
?>