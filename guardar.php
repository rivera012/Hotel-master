<?php
$nombre= utf8_decode(mysql_real_escape_string($_POST['nom']));
$lugar= utf8_decode(mysql_real_escape_string($_POST['lug']));
$email= utf8_decode(mysql_real_escape_string($_POST['mai']));
$telefono= utf8_decode(mysql_real_escape_string($_POST['tel']));

if($nombre && $lugar && $email && $telefono):
	echo "1";
else:
	echo "0";
endif;
?>