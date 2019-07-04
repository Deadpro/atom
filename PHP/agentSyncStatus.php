<?php
  if (isset($_POST['dbName']) === true && empty($_POST['dbName']) === false &&
      isset($_POST['dbUser']) === true && empty($_POST['dbUser']) === false &&
      isset($_POST['dbPassword']) === true && empty($_POST['dbPassword']) === false) {
    include("dbconnect.php");
    $login = (trim($_POST['login']));
    $password = (trim($_POST['password']));
    date_default_timezone_set("UTC"); // Устанавливаем часовой пояс по Гринвичу
    $time = time(); // Вот это значение отправляем в базу
    $time += 11 * 3600; // Добавляем 11 часов к времени по Гринвичу
    $dateTimeDoc = date("Y-m-d H:i:s", $time); // Выводим время пользователя, согласно его часовому поясу
    $date = date("Y-m-d H:i:s");
    $date = strtotime($dateTimeDoc);
    $dateTime = date('Y-m-d', $date);
    // $dateTime->setTime(00, 00, 00);
    // $dateTime->format('Y-m-d H:i:s');
    // $dateTime = "2019-06-20 22:00:00";
    $areaArray[0] = 'invoice_one';
    $areaArray[1] = 'invoice_two';
    $areaArray[2] = 'invoice_three';
    $areaArray[3] = 'invoice_four';
    $areaArray[4] = 'invoice_five';
    $areaArray[5] = 'invoice_seven';
    $resultArray = array();
    $tempArray = array();
    for ($i = 0; $i < 6; $i++) {
      $areaArrayTmp = $areaArray[$i];
      $sql = "SELECT DISTINCT InvoiceNumber, AccountingType, Comment, SalesPartnerID, AgentID, DateTimeDocLocal, DateTimeDoc, InvoiceSum
              FROM $areaArrayTmp WHERE DateTimeDoc > '$dateTime' ";
      if ($result = mysqli_query($dbconnect, $sql)){
        while($row = $result->fetch_object()){
          $tempArray = $row;
          array_push($resultArray, $tempArray);
        }
      } else {
        $json["failed"] = 'Сбой. Запрос не удался';
        echo json_encode($json, JSON_UNESCAPED_UNICODE);
        mysqli_close($dbconnect);
      }
    }
    echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
    mysqli_close($dbconnect);
  }
?>
