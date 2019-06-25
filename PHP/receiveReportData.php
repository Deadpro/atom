<?php
  if (isset($_POST['dbName']) === true && empty($_POST['dbName']) === false &&
      isset($_POST['dbUser']) === true && empty($_POST['dbUser']) === false &&
      isset($_POST['dbPassword']) === true && empty($_POST['dbPassword']) === false) {
    include("dbconnect.php");
    $login = (trim($_POST['login']));
    $password = (trim($_POST['password']));
    // mysql_real_escape_string
    $accounting = trim($_POST['accounting']);
    $area = trim($_POST['area']);
    $index = (int)$area - 1;
    date_default_timezone_set("UTC"); // Устанавливаем часовой пояс по Гринвичу
    $time = time(); // Вот это значение отправляем в базу
    $time += 11 * 3600; // Добавляем 11 часов к времени по Гринвичу
    $dateTimeDoc = date("Y-m-d H:i:s", $time); // Выводим время пользователя, согласно его часовому поясу

    $date = date("Y-m-d H:i:s");
    $currDate = date("Y-m-d H:i:s");
    $currDate = strtotime($dateTimeDoc);
    $date = strtotime($dateTimeDoc);
    if ($accounting == "1") {
      $date = date('Y-m-d', $date);
    } else {
      $date = strtotime("-4 day", $date);
    }
    // $dateTime = date('Y-m-d H:i:s', $date);
    // $dateTime = "2019-06-10 00:00:00";
    if (empty($_POST['dateStart']) === false && empty($_POST['dateEnd']) === false) {
      $dateStart = (trim($_POST['dateStart']));
      $dateEnd = (trim($_POST['dateEnd']));
    } else {
      $dateStart = date('Y-m-d', $date);
      $dateEnd = date('Y-m-d H:i:s', $currDate);
    }
    $areaArray[0] = 'invoice_one';
    $areaArray[1] = 'invoice_two';
    $areaArray[2] = 'invoice_three';
    $areaArray[3] = 'invoice_four';
    $areaArray[4] = 'invoice_five';

    $resultArray = array();
    $tempArray = array();
    if ($accounting != '1') {
      for ($i = 0; $i < 5; $i++) {
        $areaArrayTmp = $areaArray[$i];
        $sql = "SELECT ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
        ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
        InvoiceSum, номенклатура.Наименование FROM $areaArrayTmp INNER JOIN номенклатура
        ON $areaArrayTmp.ItemID = номенклатура.Артикул
        WHERE DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd'  ORDER BY ItemID";
        if ($result = mysqli_query($dbconnect, $sql)){
          while($row = $result->fetch_object()){
            $tempArray = $row;
            array_push($resultArray, $tempArray);
          }
        } else {
          $json["failed"] = 'Login failed. Invalid login
          and/or password';
          echo json_encode($json, JSON_UNESCAPED_UNICODE);
          mysqli_close($dbconnect);
        }
      }
    } else {
      $areaArrayTmp = $areaArray[(int)$index];
      $sql = "SELECT InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
      ItemID, Quantity, Price, Total, DateTimeDocLocal, InvoiceSum,
      salespartners.Наименование, salespartners.ИНН, salespartners.ID, salespartners.Контакты as type, номенклатура.Наименование as itemName FROM $areaArrayTmp
      INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
      INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
      WHERE (DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd')  AND AccountingType LIKE 'провод' ";
      if ($result = mysqli_query($dbconnect, $sql)){
        while($row = $result->fetch_object()){
          $tempArray = $row;
          array_push($resultArray, $tempArray);
        }
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
