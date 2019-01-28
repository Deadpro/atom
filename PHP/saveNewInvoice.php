<?php
   mysqli_set_charset("utf8");
   include("dbconnect.php");

  // if($_SERVER["REQUEST_METHOD"]=="POST") {
  //   if (isset($_POST["array"]) {
      $array = $_POST["array"];
      // if (isset($_POST["area"], $_POST["accountingType"], $_POST["dayOfTheWeek"])) {
         $area = $_POST["areaDefault"];
         $accountingTypeDefault = $_POST["accountingType"];
         $loginSecurity = $_POST["loginSecurity"];
         $invoiceNumberLocal = $_POST["invoiceNumberLocal"];
         $dateTimeDocLocal = $_POST["dateTimeDocLocal"];
         // $dayOfTheWeek = $_POST["dayOfTheWeek"];
      // }
      // if (!empty($array)) {
        $new_array = json_decode($array, true);
        // print_r($new_array);
        // $accType = $new_array['accountingType'];
        // print_r($loginSecurity);
        // print_r(date('H:i:s'));
        date_default_timezone_set("UTC"); // Устанавливаем часовой пояс по Гринвичу
        $time = time(); // Вот это значение отправляем в базу
        $offset = 3; // Допустим, у пользователя смещение относительно Гринвича составляет +3 часа
        $time += 11 * 3600; // Добавляем 3 часа к времени по Гринвичу
        $dateTimeDoc = date("Y-m-d H:i:s", $time); // Выводим время пользователя, согласно его часовому поясу
        // $dateTimeDocLocal = date($dateTimeDocLocal);
        // print_r(time());
        $sql = "SELECT агент.ID FROM агент
        INNER JOIN security ON агент.Фамилия = security.secondname
        WHERE security.login LIKE '$loginSecurity' ";
        if ($result = mysqli_query($dbconnect, $sql)) {
           while($row = mysqli_fetch_array($result)) {
             if (mysqli_num_rows($result) != 0) {
               $agentID = $row['ID'];
             } else {
               echo "Fuck";
             }
           }
        }
        // print_r("Agent ID: ".$agentID);

        $invoiceNumber = 1;
        $id = 0;

        $sql = "SELECT ID, InvoiceNumber FROM invoice ORDER BY ID DESC LIMIT 1 ";
        if ($result = mysqli_query($dbconnect, $sql)) {
           // $resultArray = array();
           // $tempArray = array();
           while($row = mysqli_fetch_array($result)) {
             if (mysqli_num_rows($result) != 0) {
               $invoiceNumber = $row['InvoiceNumber'] + 1;
               $id = $row['ID'] + 1;
             }
           }
        }
        // print_r("Invoice number: ".$invoiceNumber);
        // print_r("Invoice ID: " + $id);

        $salesPartner = $new_array[0]['salesPartner'];

        $sql = "SELECT ID FROM salespartners WHERE salespartners.Наименование LIKE '$salesPartner'
        AND salespartners.Район LIKE '$area' AND salespartners.Учет LIKE '$accountingTypeDefault' ";
        // AND salesPartner.dayoftheweek LIKE '$dayOfTheWeek'
        if ($result = mysqli_query($dbconnect, $sql)) {
           while($row = mysqli_fetch_array($result)) {
             if (mysqli_num_rows($result) != 0) {
               $salesPartnerID = $row['ID'];
             }
           }
        }
        // print_r("SalesPartner ID: ".$salesPartnerID);

        $accountingType = $new_array[0]['accountingType'];
        for ($i = 0; $i < count($new_array); $i++) {
           $item = $new_array[$i]['item'];
           $quantity = $new_array[$i]['quantity'];
           $price = $new_array[$i]['price'];
           $totalCost = $new_array[$i]['totalCost'];
           $exchange = $new_array[$i]['exchange'];
           $returns = $new_array[$i]['returns'];
           $invoiceSum = $new_array[$i]['invoiceSum'];

           $sql = "SELECT Артикул FROM номенклатура WHERE номенклатура.Наименование LIKE '$item' ";
           if ($result = mysqli_query($dbconnect, $sql)) {
             while($row = mysqli_fetch_array($result)) {
              if (mysqli_num_rows($result) != 0) {
                $itemID = $row['Артикул'];
              }
            }
          }

          $sql = "INSERT INTO invoice (InvoiceNumber, AgentID, SalesPartnerID,
            AccountingType, ItemID, Quantity, Price, Total, ExchangeQuantity,
           ReturnQuantity, DateTimeDoc, InvoiceSum, InvoiceNumberLocal, DateTimeDocLocal)
           VALUES ($invoiceNumber, $agentID, $salesPartnerID,
             '$accountingType', $itemID, $quantity, $price, $totalCost, $exchange,
             $returns, '$dateTimeDoc', $invoiceSum, $invoiceNumberLocal, '$dateTimeDocLocal') ";

          if (mysqli_query($dbconnect, $sql)) {
             $tmpInfo = "New record created successfully";
          } else {
             echo "Error: " . $sql . "<br>" . mysqli_error($dbconnect);
          }
        }
        if ($tmpInfo == "New record created successfully") {
          $tempArray = array('invoiceNumber' => $invoiceNumber, 'dateTimeDoc' => $dateTimeDoc);
          array_push($resultArray, $tempArray);
          echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
        }
        mysqli_close($dbconnect);
    //   }
    // }
  // }
?>
