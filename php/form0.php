<?php
if (isset($_POST['call-control']) && $_POST['call-control'] == 0){
    $myaddr = "<trigun123@yandex.ru>" . ", " ;
    $myaddr .= "<kvaskov@ecotelecom.ru>" . ", " ;
    $myaddr .= "<sharonov.ecotelecom@gmail.com>" . ", " ;
    $myaddr .= "<hr@ecotelecom.ru>";

	$vacancy = $_POST['vacancy'];
	$name = $_POST['name'];
	$city = $_POST['city'];
	$number = $_POST['number'];
	$address = $_POST['address'];
	
	$utm_source = $_POST['utm_source'];
	$utm_medium = $_POST['utm_medium'];
	$utm_campaign = $_POST['utm_campaign'];
	$utm_term = $_POST['utm_term'];


	$headers = "MIME-Version: 1.0\r\n";
	$headers = "Content-Type: text/plain;charset=utf-8";
  	$headers = "From: promo@ecotelecom.ru";
	$subj = "=?utf-8?b?".base64_encode('Заявка с лэндинга')."?=";
	$text = "Тариф: ".$vacancy."\nИмя: ".$name." \nТелефон: ".$number." \nГород: ".$city." \nАдрес: ".$address;
	if (!empty($utm_source)) $text .= "\nИсточник перехода по ссылке:".$utm_source;

	if (!empty($utm_campaign)) $text .= "\nКомпания:".$utm_campaign;

	if (!empty($utm_medium)) $text .= "\nКлючевой запрос:".$utm_medium;
	
	if (!empty($utm_term)) $text .= "\nКлючевые слова:".$utm_term;

    mail($myaddr, $subj, $text, $headers);
	
	} else {echo "Нет ПОСТА";} 
?>