<?php
  mysqli_set_charset("utf8");
  include("dbconnect.php");

  $array = $_POST["array"];
  $new_array = json_decode($array, true);
  $agentID = $new_array[0]['agentID'];

  $sql = "SELECT tableName FROM invoicetables WHERE agentID LIKE '$agentID' ";
  if ($result = mysqli_query($dbconnect, $sql)) {
    while($row = mysqli_fetch_array($result)) {
      if (mysqli_num_rows($result) != 0) {
        $tableName = $row['tableName'];
        $postfix = $row['tableName'];
        $clone = $row['tableName'];
      }
    }
  }

  $postfix.="_twin";
  $clone.="_clone";

  date_default_timezone_set("UTC"); // Устанавливаем часовой пояс по Гринвичу
  $time = time(); // Вот это значение отправляем в базу
  $offset = 3; // Допустим, у пользователя смещение относительно Гринвича составляет +3 часа
  $time += 11 * 3600; // Добавляем 3 часа к времени по Гринвичу
  $dateTimeDoc = date("Y-m-d H:i:s", $time); // Выводим время пользователя, согласно его часовому поясу
  $date = date("Y-m-d H:i:s");
  $date = strtotime($dateTimeDoc);
  $date = strtotime("-14 day", $date);
  $dateTime = date('Y-m-d H:i:s', $date);
  $resultArray = array();
  $tempArray = array();
  $tmpInfo;

  for ($i = 0; $i < count($new_array); $i++) {
    $invoiceNumber = $new_array[$i]['invoiceNumber'];
    $invoiceNumberLocal = $invoiceNumber;
    $agentID = $new_array[$i]['agentID'];
    $salesPartnerID = $new_array[$i]['salesPartnerID'];
    $accountingTypeDoc = $new_array[$i]['accountingTypeDoc'];
    $accountingTypeSP = $new_array[$i]['accountingTypeSP'];
    $areaSP = $new_array[$i]['areaSP'];
    $itemName = $new_array[$i]['itemName'];
    $quantity = $new_array[$i]['quantity'];
    $price = $new_array[$i]['price'];
    $totalCost = $new_array[$i]['totalCost'];
    $exchange = $new_array[$i]['exchange'];
    $returns = $new_array[$i]['returns'];
    $dateTimeDocLocal = $new_array[$i]['dateTimeDocLocal'];
    $invoiceSum = $new_array[$i]['invoiceSum'];
    $comment = $new_array[$i]['comment'];

    $sql = "SELECT Артикул FROM номенклатура WHERE номенклатура.Наименование LIKE '$itemName' ";
    if ($result = mysqli_query($dbconnect, $sql)) {
      while($row = mysqli_fetch_array($result)) {
        if (mysqli_num_rows($result) != 0) {
          $itemID = $row['Артикул'];
        }
      }
    }

    $sql = "INSERT INTO $postfix (InvoiceNumber, AgentID, SalesPartnerID,
      AccountingType, ItemID, Quantity, Price, Total, ExchangeQuantity,
      ReturnQuantity, DateTimeDoc, InvoiceSum, Comment, InvoiceNumberLocal, DateTimeDocLocal)
      VALUES ($invoiceNumber, $agentID, $salesPartnerID,
      '$accountingTypeDoc', $itemID, $quantity, $price, $totalCost, $exchange,
      $returns, '$dateTimeDoc', $invoiceSum, '$comment', $invoiceNumberLocal, '$dateTimeDocLocal') ";
    mysqli_query($dbconnect, $sql);

    $sql = "SELECT COUNT(*) FROM $tableName WHERE InvoiceNumber LIKE $invoiceNumber AND ItemID LIKE $itemID
      ORDER BY ID LIMIT 1000";
    if ($result = mysqli_query($dbconnect, $sql)) {
      $row = mysqli_fetch_row($result);
      $totalMatches = $row[0];
    }
    if ($totalMatches == 0) {
      $sql = "INSERT INTO $tableName (InvoiceNumber, AgentID, SalesPartnerID,
        AccountingType, ItemID, Quantity, Price, Total, ExchangeQuantity,
        ReturnQuantity, DateTimeDoc, InvoiceSum, Comment, InvoiceNumberLocal, DateTimeDocLocal)
        VALUES ($invoiceNumber, $agentID, $salesPartnerID,
        '$accountingTypeDoc', $itemID, $quantity, $price, $totalCost, $exchange,
        $returns, '$dateTimeDoc', $invoiceSum, '$comment', $invoiceNumberLocal, '$dateTimeDocLocal') ";

      if (mysqli_query($dbconnect, $sql)) {
         $sqlClone = "INSERT INTO $clone (InvoiceNumber, AgentID, SalesPartnerID,
           AccountingType, ItemID, Quantity, Price, Total, ExchangeQuantity,
           ReturnQuantity, DateTimeDoc, InvoiceSum, Comment, InvoiceNumberLocal, DateTimeDocLocal)
           VALUES ($invoiceNumber, $agentID, $salesPartnerID,
           '$accountingTypeDoc', $itemID, $quantity, $price, $totalCost, $exchange,
           $returns, '$dateTimeDoc', $invoiceSum, '$comment', $invoiceNumberLocal, '$dateTimeDocLocal') ";
         if (mysqli_query($dbconnect, $sqlClone)) {
         }
      } else {
         echo "Error: " . $sql . "<br>" . mysqli_error($dbconnect);
         $tmpInfo = "Error";
      }
    }
  }
  $sql = "SELECT DISTINCT InvoiceNumber FROM $tableName WHERE DateTimeDoc LIKE '$dateTimeDoc' ";
  if ($result = mysqli_query($dbconnect, $sql)) {
     $resultArray = array();
     $tempArray = array();
     while($row = $result->fetch_object()) {

        $tempArray = $row;
        array_push($resultArray, $tempArray);
     }

     echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
     mysqli_close($dbconnect);
  }
?>
