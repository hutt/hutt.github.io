<?php
$file = "./me.vcf";  

header('Content-Type: text/x-vcard');  
header('Content-Disposition: inline; filename= "'.$file.'"');  
header('Content-Length: '.filesize($file));  

readfile($file);
exec('/home/hutt/bin/pushover "vCard wurde heruntergeladen."');
?>