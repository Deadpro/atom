<?php
   mysqli_set_charset("utf8");
   include("dbconnect.php");

   $array = $_POST["paymentAmount"];
   $invoiceNumber = $_POST["invoiceNumber"];
   $author = $_POST["author"];
   $new_array = json_decode($array, true);

   date_default_timezone_set("UTC"); // Устанавливаем часовой пояс по Гринвичу
   $time = time(); // Вот это значение отправляем в базу
   $offset = 3; // Допустим, у пользователя смещение относительно Гринвича составляет +3 часа
   $time += 11 * 3600; // Добавляем 3 часа к времени по Гринвичу
   $dateTimeDoc = date("Y-m-d H:i:s", $time); // Выводим время пользователя, согласно его часовому поясу

   // for ($i = 0; $i < count($new_array); $i++) {
      $paymentAmount = $new_array[0]['payment'];

      $sql = "INSERT INTO платежи (дата_платежа, №_накладной, сумма_внесения, автор) VALUES ('$dateTimeDoc', $invoiceNumber, $paymentAmount, '$author') ";

      if (mysqli_query($dbconnect, $sql)) {
         echo "Бабло внесено";
      } else {
         echo "Error: " . $sql . "<br>" . mysqli_error($dbconnect);
      }
   // }
?>
