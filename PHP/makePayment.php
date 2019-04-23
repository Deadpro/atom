<?php
   mysqli_set_charset("utf8");
   include("dbconnect.php");

   $array = $_POST["array"];
   $author = $_POST["agent"];
   $agentID = $_POST['agentID'];

   $new_array = json_decode($array, true);

   $sql = "SELECT tableName FROM paymenttables WHERE agentID LIKE '$agentID' ";
   if ($result = mysqli_query($dbconnect, $sql)) {
     while($row = mysqli_fetch_array($result)) {
       if (mysqli_num_rows($result) != 0) {
         $tableName = $row['tableName'];
       }
     }
   }

   date_default_timezone_set("UTC"); // Устанавливаем часовой пояс по Гринвичу
   $time = time(); // Вот это значение отправляем в базу
   $offset = 3; // Допустим, у пользователя смещение относительно Гринвича составляет +3 часа
   $time += 11 * 3600; // Добавляем 3 часа к времени по Гринвичу
   $dateTimeDoc = date("Y-m-d H:i:s", $time); // Выводим время пользователя, согласно его часовому поясу
   $resultArray = array();
   $tempArray = array();
   // $sql = "SELECT Фамилия, Имя, Отчество FROM агент WHERE Район LIKE '$author' ";
   // if ($result = mysqli_query($dbconnect, $sql)) {
   //   while($row = mysqli_fetch_array($result)) {
   //     if (mysqli_num_rows($result) != 0) {
   //       $secondName = $row['Фамилия'];
   //       $firstName = $row['Имя'];
   //       $middleName = $row['Отчество'];
   //     }
   //   }
   //   $author = $secondName + " " + $firstName + " " + $middleName;
   // }

    for ($i = 0; $i < count($new_array); $i++) {
      $paymentAmount = $new_array[$i]['payment'];
      $invoiceNumber = $new_array[$i]['invoiceNumber'];



      $sql = "INSERT INTO $tableName (дата_платежа, №_накладной, сумма_внесения, автор)
      VALUES ('$dateTimeDoc', $invoiceNumber, $paymentAmount, '$author') ";

      if (mysqli_query($dbconnect, $sql)) {
        $tempArray = array('invoiceNumber' => $invoiceNumber, 'status' => "Бабло внесено");
        array_push($resultArray, $tempArray);
         $tmpInfo = "New record created successfully";
      } else {
         echo "Error: " . $sql . "<br>" . mysqli_error($dbconnect);
      }
    }

    if ($tmpInfo == "New record created successfully") {
      echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
    }
    mysqli_close($dbconnect);


?>
