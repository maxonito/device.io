<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Thank you!</title>
	<!-- Custom styles for this template -->
	<link href="css/style.css" rel="stylesheet">
</head>
	<body>
	<div class="contain">
		<div class="message">
			Спасибо, что оставили заявку! <br>
			В ближайшее время мы <br>
			с Вами свяжемся
		</div>
		<div class="copyright">© 2017 Девайс сервис. All rights reserved.</div>
	</div>
	</body>
</html>
 
<?php 


$name = $_POST['name'];
$number = $_POST['number'];
$text = $_POST['text'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'glass-gun@mail.ru';                 // Наш логин
$mail->Password = 'blackfriday';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('glass-gun@mail.ru', '');   // От кого письмо 
$mail->addAddress('devaisservice@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Новый заказ';
$mail->Body    = '
	Пользователь оставил свои данные <br><br> 
	Имя: '.$name.' <br>
	Номер телефона: '.$number.' <br>
	Проблема: '.$text.' <br>';
	
if(strlen($name) < 3) {
	echo'<meta http-equiv="refresh" content="0; url=index.html">';
	return false;
};

if(strlen($number) < 3) {
	echo'<meta http-equiv="refresh" content="0; url=index.html">';
	return false;
};

if(strlen($text) < 5) {
	echo'<meta http-equiv="refresh" content="0; url=index.html">';
	return false;
};

if(!$mail->send()) {
    return false;
} else {
echo('<meta http-equiv="refresh" content="3; url=index.html">');
}

?>