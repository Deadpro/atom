<?php
  mysqli_set_charset("utf8");
  include("dbconnect.php");

  $agentID = $_POST["agentID"];
  $agentName = $_POST["agentName"];

  if ($agentID == 1){
    $salesPartnerName = "Для Себя Район 1";
  }
  if ($agentID == 2){
    $salesPartnerName = "Для Себя Район 2";
  }
  if ($agentID == 3){
    $salesPartnerName = "Для Себя Район 3";
  }
  if ($agentID == 4){
    $salesPartnerName = "Для Себя Район 4";
  }
  if ($agentID == 5){
    $salesPartnerName = "Для Себя Район 5";
  }

  $sql = "SELECT tableName FROM invoicetables WHERE agentID LIKE '$agentID' ";
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

  $sql = "SELECT DISTINCT Comment, DateTimeDocLocal, AccountingType FROM $tableName WHERE Comment NOT LIKE '' ";
  if ($result = mysqli_query($dbconnect, $sql)) {
    $comment = array();
    $dateTimeDocLocal = array();
    $accountingType = array();
    while($row = mysqli_fetch_array($result)) {
      if (mysqli_num_rows($result) != 0) {
        $commentTmp = $row['Comment'];
        $dateTimeDocLocalTmp = $row['DateTimeDocLocal'];
        $accountingTypeTmp = $row['AccountingType'];
        $dayOfTheWeekTmp = date("w", strtotime($dateTimeDocLocalTmp));
        if ($dayOfTheWeekTmp == 1 || $dayOfTheWeekTmp == 4){
          $dayOfTheWeekString = "понедельник-четверг";
        }
        if ($dayOfTheWeekTmp == 2 || $dayOfTheWeekTmp == 5){
          $dayOfTheWeekString = "вторник-пятница";
        }
        if ($dayOfTheWeekTmp == 3){
          $dayOfTheWeekString = "среда";
        }
        array_push($comment, $commentTmp);

      }
    }
  }
  $sql = "INSERT INTO salespartners (Наименование, Район, Учет, DayOfTheWeek, Автор)
  VALUES ('$commentTmp', $agentID, '$accountingTypeTmp', '$dayOfTheWeekString', '$agentName') ";
  mysqli_query($dbconnect, $sql);
  echo json_encode($comment, JSON_UNESCAPED_UNICODE);
 //  $sql = "SELECT DISTINCT AccountingType, ItemID, Price, Comment, DateTimeDocLocal
 //   FROM $tableName WHERE Comment NOT LIKE '' ";
 //  if ($result = mysqli_query($dbconnect, $sql)) {
 //    $comment = array();
 //    $itemID = array();
 //    $price = array();
 //    $accountingType = array();
 //    $dateTimeDocLocal = array();
 //    while($row = mysqli_fetch_array($result)) {
 //      if (mysqli_num_rows($result) != 0) {
 //        $commentTmp = $row['Comment'];
 //        $itemIDTmp = $row['ItemID'];
 //        $priceTmp = $row['Price'];
 //        $accountingTypeTmp = $row['AccountingType'];
 //        $dateTimeDocLocalTmp = $row['DateTimeDocLocal'];
 //        $totalMatches += 1;
 //        array_push($accountingType, $accountingTypeTmp);
 //        array_push($dateTimeDocLocal, $dateTimeDocLocalTmp);
 //        array_push($itemID, $itemIDTmp);
 //        array_push($comment, $commentTmp);
 //        array_push($price, $priceTmp);
 //      }
 //    }
 //
 //  for ($i = 0; $i < count($itemID)){
 //    $itemIDTmp = $itemID[i];
 //    $priceTmp = $price[i];
 //    $commentTmp = $comment[i];
 //    $accountingTypeTmp = $accountingType[i];
 //    $dateTimeDocLocalTmp = $dateTimeDocLocal[i];
 //    $sql = "SELECT Цена FROM номенклатура WHERE Артикул LIKE $itemIDTmp AND Цена > $priceTmp";
 //    if ($result = mysqli_query($dbconnect, $sql)) {
 //      if (mysqli_num_rows($result) != 0) {
 //        $priceStandard = row['Цена'];
 //        $discountValue = $priceStandard - $priceTmp;
 //        if ($discountValue == 10){
 //          $discountID = 4;
 //          $discountType = 1;
 //        }
 //        if ($discountValue == 20){
 //          $discountID = 2;
 //          $discountType = 1;
 //        }
 //        if ($discountValue == 25){
 //          $discountID = 6;
 //          $discountType = 1;
 //        }
 //        if ($discountValue == 30){
 //          $discountID = 3;
 //          $discountType = 1;
 //        }
 //        if ($discountValue == 40){
 //          $discountID = 5;
 //          $discountType = 1;
 //        }
 //        if ($discountValue > 0 && $discountValue != 10 && $discountValue != 20
 //        && $discountValue != 25 && $discountValue != 30 && $discountValue != 40){
 //          $discountID = 7;
 //          $discountType = 2;
 //        }
 //        $dayOfTheWeekTmp = date("w", strtotime($dateTimeDocLocalTmp));
 //        if ($dayOfTheWeekTmp == 1 || $dayOfTheWeekTmp == 4){
 //          $dayOfTheWeekString = "понедельник-четверг";
 //        }
 //        if ($dayOfTheWeekTmp == 2 || $dayOfTheWeekTmp == 5){
 //          $dayOfTheWeekString = "вторник-пятница";
 //        }
 //        if ($dayOfTheWeekTmp == 3){
 //          $dayOfTheWeekString = "среда";
 //        }
 //        $sql = "INSERT INTO salespartners (Наименование, Район, Учет, DayOfTheWeek, Автор)
 //        VALUES ($commentTmp, $agentID, $accountingTypeTmp, $dayOfTheWeekString, $agentName) ";
 //    }
 //    echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
 //    mysqli_close($dbconnect);
 // }
 //
 //  if ($totalMatches > 0) {
 //    $sql = "INSERT INTO $tableName (InvoiceNumber, AgentID, SalesPartnerID,
 //      AccountingType, ItemID, Quantity, Price, Total, ExchangeQuantity,
 //      ReturnQuantity, DateTimeDoc, InvoiceSum, Comment, InvoiceNumberLocal, DateTimeDocLocal)
 //      VALUES ($invoiceNumber, $agentID, $salesPartnerID,
 //      '$accountingTypeDoc', $itemID, $quantity, $price, $totalCost, $exchange,
 //      $returns, '$dateTimeDoc', $invoiceSum, '$comment', $invoiceNumberLocal, '$dateTimeDocLocal') ";
 //
 //    if (mysqli_query($dbconnect, $sql)) {
 //      $tmpInfo = "New record created successfully";
 //    } else {
 //      echo "Error: " . $sql . "<br>" . mysqli_error($dbconnect);
 //    }
 //  }
 //
 //  if ($tmpInfo == "New record created successfully") {
 //    echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
 //  }
  mysqli_close($dbconnect);
?>
