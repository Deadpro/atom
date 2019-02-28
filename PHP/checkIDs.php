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
  if ($agentID == 6){
    $salesPartnerName = "Для Себя Район 6";
  }

  $sql = "SELECT ID FROM salespartners WHERE Наименование LIKE '$salesPartnerName' ";
  if ($result = mysqli_query($dbconnect, $sql)) {
    while($row = mysqli_fetch_array($result)) {
      if (mysqli_num_rows($result) != 0) {
        $salesPartnerID = $row['ID'];
      }
    }
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
  $salesPartnerIDList = array();

  $sql = "SELECT DISTINCT Comment, DateTimeDocLocal, AccountingType, ItemID, Price FROM $tableName WHERE Comment NOT LIKE ''
  -- AND SalesPartnerID LIKE '$salesPartnerID' ";
  if ($result = mysqli_query($dbconnect, $sql)) {
    $comment = array();
    $dateTimeDocLocal = array();
    $accountingType = array();
    $itemID = array();
    $price = array();
    while($row = mysqli_fetch_array($result)) {
      if (mysqli_num_rows($result) != 0) {
        $itemIDTmp = $row['ItemID'];
        $priceTmp = $row['Price'];
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
        array_push($itemID, $itemIDTmp);
        array_push($price, $priceTmp);
        array_push($comment, $commentTmp);
        array_push($dateTimeDocLocal, $dateTimeDocLocalTmp);
        array_push($accountingType, $accountingTypeTmp);

        $sql_new = "SELECT ID FROM salespartners  WHERE Наименование LIKE '$commentTmp'
        AND Район LIKE $agentID AND Автор LIKE '$agentName' ";
        if ($result_new = mysqli_query($dbconnect, $sql_new)) {
          while($row_new = mysqli_fetch_array($result_new)) {
            if (mysqli_num_rows($result_new) != 0) {
              $salesPartnerIDTmp = $row_new['ID'];
              array_push($salesPartnerIDList, $salesPartnerIDTmp);
            }
          }
        }
      }
    }
  }

  for ($i = 0; $i < count($salesPartnerIDList); $i++){
    $salesPartnerIDTmp = $salesPartnerIDList[$i];
    $commentTmp = $comment[$i];
    $sql = "UPDATE $tableName SET SalesPartnerID = '$salesPartnerIDTmp' WHERE
    Comment LIKE '$commentTmp' ";
    mysqli_query($dbconnect, $sql);
  }

  echo count($itemID);
   // echo $tableName;
  echo json_encode($itemID, JSON_UNESCAPED_UNICODE);

  for ($i = 0; $i < count($itemID); $i++){
    $itemIDTmp = $itemID[$i];
    $priceTmp = $price[$i];
    $commentTmp = $comment[$i];
    $accountingTypeTmp = $accountingType[$i];
    $dateTimeDocLocalTmp = $dateTimeDocLocal[$i];
    $salesPartnerIDTmp = $salesPartnerIDList[$i];
    $sql = "SELECT Цена FROM номенклатура WHERE Артикул LIKE $itemIDTmp ";
    if ($result = mysqli_query($dbconnect, $sql)) {
      if (mysqli_num_rows($result) != 0) {
         while($row = mysqli_fetch_array($result)) {
           $priceStandard = $row['Цена'];
           if ($priceStandard > $priceTmp) {
             $discountValue = $priceStandard - $priceTmp;
             if ($discountValue == 10){
               $discountID = 4;
               $discountType = 1;
             }
             if ($discountValue == 20){
               $discountID = 2;
               $discountType = 1;
             }
             if ($discountValue == 25){
               $discountID = 6;
               $discountType = 1;
             }
             if ($discountValue == 30){
               $discountID = 3;
               $discountType = 1;
             }
             if ($discountValue == 40){
               $discountID = 5;
               $discountType = 1;
             }
             if ($discountValue != 10 && $discountValue != 40 && $discountValue != 20 && $discountValue != 25
             && $discountValue != 30) {
               $sql = "INSERT INTO скидка (Тип_скидки, Скидка, Автор)
               VALUES (1, $discountValue, '$agentName') ";
               mysqli_query($dbconnect, $sql);
               $sql = "SELECT ID FROM скидка ORDER BY ID DESC LIMIT 1 ";
               if ($result = mysqli_query($dbconnect, $sql)) {
                 if (mysqli_num_rows($result) != 0) {
                   while($row = mysqli_fetch_array($result)) {
                     $lastIDTmp = $row['ID'];
                   }
                 }
               }
             }

             if ($discountValue == 10 || $discountValue == 20 || $discountValue == 25
             || $discountValue == 30 || $discountValue == 40){
               $sql = "INSERT INTO номенклатурасоскидкой (Артикул, ID_скидки, ID_контрагента, Автор)
               VALUES ($itemIDTmp, $discountID, $salesPartnerIDTmp, '$agentName') ";
               mysqli_query($dbconnect, $sql);
             } else {
               $sql = "INSERT INTO номенклатурасоскидкой (Артикул, ID_скидки, ID_контрагента, Автор)
               VALUES ($itemIDTmp, $lastIDTmp, $salesPartnerIDTmp, '$agentName') ";
               mysqli_query($dbconnect, $sql);
             }
           }
         }
      }
    }
 }
mysqli_close($dbconnect);
?>
