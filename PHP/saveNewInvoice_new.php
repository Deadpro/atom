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
  $tmpI = array();

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


    if ($i > 0){
      if ($invoiceNumber != $tmp[count($tmp) - 1]){
        $tmpI[$i] = $invoiceNumber;
         $tempArray = array('invoiceNumber' => $invoiceNumber, 'dateTimeDoc' => $dateTimeDoc);
         array_push($resultArray, $tempArray);
      }
    } else {
      $tmp[$i] = $invoiceNumber;
      $tempArray = array('invoiceNumber' => $invoiceNumber, 'dateTimeDoc' => $dateTimeDoc);
      array_push($resultArray, $tempArray);
    }

    // $sql = "SELECT ID FROM salespartners WHERE salespartners.Наименование LIKE '$salesPartnerName'
    // AND salespartners.Район LIKE '$areaSP' AND salespartners.Учет LIKE '$accountingTypeSP' ";
    // if ($result = mysqli_query($dbconnect, $sql)) {
    //   while($row = mysqli_fetch_array($result)) {
    //     if (mysqli_num_rows($result) != 0) {
    //       $salesPartnerID = $row['ID'];
    //     }
    //   }
    // }

    $sql = "SELECT Артикул FROM номенклатура WHERE номенклатура.Наименование LIKE '$itemName' ";
    if ($result = mysqli_query($dbconnect, $sql)) {
      while($row = mysqli_fetch_array($result)) {
        if (mysqli_num_rows($result) != 0) {
          $itemID = $row['Артикул'];
        }
      }
    }
    $sql = "SELECT COUNT(InvoiceNumber) FROM $tableName WHERE InvoiceNumber LIKE $invoiceNumber LIMIT 1";
    if ($result = mysqli_query($dbconnect, $sql)) {
        $row = mysqli_fetch_row($result);
          $totalMatches = $row[0];

    } if ($totalMatches == 0) {
      $sql = "INSERT INTO $tableName (InvoiceNumber, AgentID, SalesPartnerID,
        AccountingType, ItemID, Quantity, Price, Total, ExchangeQuantity,
       ReturnQuantity, DateTimeDoc, InvoiceSum, Comment, InvoiceNumberLocal, DateTimeDocLocal)
       VALUES ($invoiceNumber, $agentID, $salesPartnerID,
         '$accountingTypeDoc', $itemID, $quantity, $price, $totalCost, $exchange,
         $returns, '$dateTimeDoc', $invoiceSum, '$comment', $invoiceNumberLocal, '$dateTimeDocLocal') ";

      if (mysqli_query($dbconnect, $sql)) {
         $tmpInfo = "New record created successfully";
      } else {
         echo "Error: " . $sql . "<br>" . mysqli_error($dbconnect);
      }
    }
  }


  if ($tmpInfo == "New record created successfully") {
    echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
  }
  mysqli_close($dbconnect);
?>
