<?php
  if (isset($_POST['dbName']) === true && empty($_POST['dbName']) === false &&
      isset($_POST['dbUser']) === true && empty($_POST['dbUser']) === false &&
      isset($_POST['dbPassword']) === true && empty($_POST['dbPassword']) === false) {
    include("dbconnect.php");
    $login = (trim($_POST['login']));
    $password = (trim($_POST['password']));
    // mysql_real_escape_string
    // echo($login);
    date_default_timezone_set("UTC"); // Устанавливаем часовой пояс по Гринвичу
    $time = time(); // Вот это значение отправляем в базу
    $time += 11 * 3600; // Добавляем 3 часа к времени по Гринвичу
    $dateTimeDoc = date("Y-m-d H:i:s", $time); // Выводим время пользователя, согласно его часовому поясу

    $date = date("Y-m-d H:i:s");
    $date = strtotime($dateTimeDoc);
    $date = strtotime("-14 day", $date);
    // $dateTime = date('Y-m-d H:i:s', $date);
    $dateTime = "2019-06-10 00:00:00";
    $areaArray[0] = 'invoice_one';
    $areaArray[1] = 'invoice_two';
    $areaArray[2] = 'invoice_three';
    $areaArray[3] = 'invoice_four';
    $areaArray[4] = 'invoice_five';
    $resultArray = array();
    $tempArray = array();
    for ($i = 4; $i < 5; $i++) {
      $areaArrayTmp = $areaArray[$i];
      $sql = "SELECT ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
      ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
      InvoiceSum, номенклатура.Наименование FROM $areaArrayTmp INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул WHERE DateTimeDocLocal >= '$dateTime'  ";
      if ($result = mysqli_query($dbconnect, $sql)){
        while($row = $result->fetch_object()){
          $tempArray = $row;
          array_push($resultArray, $tempArray);
        }
        // while($row = mysqli_fetch_array($result)) {
        //   echo $row['InvoiceSum'];
        // }

      } else {
        $json["failed"] = 'Login failed. Invalid login
        and/or password';
        echo json_encode($json, JSON_UNESCAPED_UNICODE);
        mysqli_close($dbconnect);
      }
    }
    echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
    mysqli_close($dbconnect);
  }
?>
