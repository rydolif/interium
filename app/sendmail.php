<?php
	$SITE_TITLE = 'Alfaiterium';
	$SITE_DESCR = '';

	if ( isset($_POST) ) {
		$name = htmlspecialchars(trim($_POST['name']));
		$phone = htmlspecialchars(trim($_POST['phone']));
		$mail = htmlspecialchars(trim($_POST['mail']));
		$comments = isset($_POST['comments']) ? htmlspecialchars(trim($_POST['comments'])) : '';

		$rated = htmlspecialchars(trim($_POST['rated']));
		$number = htmlspecialchars(trim($_POST['number']));
		$time = htmlspecialchars(trim($_POST['time']));
		$reservation = htmlspecialchars(trim($_POST['reservation']));
		$textarea = htmlspecialchars(trim($_POST['textarea']));
		$position = htmlspecialchars(trim($_POST['position']));
		$company = htmlspecialchars(trim($_POST['company']));
		$addres = htmlspecialchars(trim($_POST['addres']));
		$subject = $_POST['subject'] ? htmlspecialchars(trim($_POST['subject'])) : '';

		$to = 'zakaz@alfaiterium.ru';

		$headers = "From: $SITE_TITLE \r\n";
		$headers .= "Reply-To: ". $email . "\r\n";
		$headers .= 'MIME-Version: 1.0' . "\r\n";
		$headers .= "Content-Type: text/html; charset=utf-8\r\n";

		$data .= 'Имя: '.$name."<br>";
		$data .= 'Почта: '.$mail."<br>";
		$data .= 'Телефон: '.$phone."<br>";
		$data .= 'Комментарий: '.$comments."<br>";

		$data .= 'Номинальное потребление нагрузки в ВА или ВТ: '.$rated."<br>";
		$data .= 'Количество фаз на входе/выходе ИБП: '.$number."<br>";
		$data .= 'Необходимое время автономной работы в минутах: '.$time."<br>";
		$data .= 'Необходимо ли резервирование N+1 или 2N: '.$reservation."<br>";
		$data .= 'Дополнительные сведения: '.$textarea."<br>";
		$data .= 'Должность: '.$position."<br>";
		$data .= 'Наименование компании: '.$company."<br>";
		$data .= 'Адрес: '.$addres."<br>";

		$message = "<div style='background:#ccc;border-radius:10px;padding:20px;'>
				".$data."
				<br>\n
				<hr>\n
				<br>\n
				<small>это сообщение было отправлено с сайта ".$SITE_TITLE." - ".$SITE_DESCR.", отвечать на него не надо</small>\n</div>";
		$send = mail($to, $subject, $message, $headers);

		if ( $send ) {
			echo '';
		} else {
				echo '<div class="error">Ошибка отправки формы</div>';
		}

	}
	else {
			echo '<div class="error">Ошибка, данные формы не переданы.</div>';
	}
	die();
?>