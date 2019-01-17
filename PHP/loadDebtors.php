<?php
  mysqli_set_charset("utf8");
  include("dbconnect.php");

  $time = '00:00:00';
  $dateEnd = date("Y-m-d H:i:s");
  $dateStart = date("Y-m-d H:i:s");
  $loginSecurity = $_POST["loginSecurity"];


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

  if (isset($_POST["dateStart"])) {
    $dateStart = $_POST["dateStart"].' '.$time;
  } else {
    $dateStart = "2019-01-01 00:00:00";
  }
  if (isset($_POST["dateEnd"])) {
    $dateEnd = $_POST["dateEnd"].' '.$time;
  } else {
    date_default_timezone_set("UTC"); // Устанавливаем часовой пояс по Гринвичу
    $time = time(); // Вот это значение отправляем в базу
    $offset = 3; // Допустим, у пользователя смещение относительно Гринвича составляет +3 часа
    $time += 11 * 3600; // Добавляем 3 часа к времени по Гринвичу
    $dateEnd = date("Y-m-d H:i:s", $time);
  }

  if (isset($_POST["accountingType"])) {
    $accountingType = $_POST["accountingType"];
    if (!empty($dateStart) && !empty($dateEnd) && !empty($accountingType)) {
      $sql = "SELECT DISTINCT InvoiceNumber, InvoiceSum FROM invoice
      WHERE invoice.AgentID LIKE '$agentID' AND (DateTimeDoc BETWEEN '$dateStart' AND '$dateEnd')
      AND invoice.AccountingType LIKE '$accountingType' ";
      if ($result = mysqli_query($dbconnect, $sql)) {
        while($row = mysqli_fetch_array($result)) {
          if (mysqli_num_rows($result) != 0) {
            $invoiceNumber[] = $row['InvoiceNumber'];
            $invoiceSum[] = $row['InvoiceSum'];
          }
        }
      }
    }
  }

  // print_r($invoiceNumber);

  $paymentSum = array();
  $paymentSumKey = array();
  $debtsList = array();
  for ($i = 0; $i < count($invoiceNumber); $i++) {
    $tmpInvoiceNumber = $invoiceNumber[$i];
    $sql = "SELECT сумма_внесения FROM платежи
    WHERE платежи.№_накладной LIKE '$tmpInvoiceNumber' ";
    if ($result = mysqli_query($dbconnect, $sql)) {
      while($row = mysqli_fetch_array($result)) {
        if (mysqli_num_rows($result) != 0) {
          if (array_key_exists($tmpInvoiceNumber, $paymentSum)) {
            $paymentSum[$tmpInvoiceNumber] = $paymentSum[$tmpInvoiceNumber] + $row['сумма_внесения'];
          } else {
            $paymentSum[$tmpInvoiceNumber] = $row['сумма_внесения'];
            // $paymentSumKey[] = $tmpInvoiceNumber;
          }
        }
      }
    }
    if (array_key_exists($tmpInvoiceNumber, $paymentSum)) {
      if ($paymentSum[$tmpInvoiceNumber] < $invoiceSum[$i]) {
         $debtsList[$tmpInvoiceNumber] = $invoiceSum[$i] - $paymentSum[$tmpInvoiceNumber];
         $paymentSumKey[] = $tmpInvoiceNumber;
      }
      if ($paymentSum[$tmpInvoiceNumber] > $invoiceSum[$i]) {
         $debtsList[$tmpInvoiceNumber] = $invoiceSum[$i] - $paymentSum[$tmpInvoiceNumber];
         $paymentSumKey[] = $tmpInvoiceNumber;
      }
      if ($paymentSum[$tmpInvoiceNumber] == $invoiceSum[$i]) {

      }
    } else {
      $debtsList[$tmpInvoiceNumber] = $invoiceSum[$i];
      $paymentSumKey[] = $tmpInvoiceNumber;
    }
  }

  $resultArray = array();
  $tempArray = array();
   // foreach(array_keys($paymentSum) as $key){
   //    $myObj->invoiceNumber = $key;
   //    $myObj->paymentSum = $paymentSum[$key];
   //    $tempArray[] = $myObj;
   //    array_push($resultArray, $tempArray);
   // }

  for ($i = 0; $i < count($paymentSumKey); $i++) {
    $tempArray = array('invoiceNumber' => $paymentSumKey[$i], 'paymentSum' => $debtsList[$paymentSumKey[$i]]);
    array_push($resultArray, $tempArray);
  }
  // print_r($resultArray);
  echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);

  // for ($i = 0; $i < count($invoiceNumberPay) - 1; $i++) {
  //   if ($invoiceNumberPay[$i] == $invoiceNumberPay[$i + 1]) {
  //     array_splice($invoiceNumberPay, $i, 1);
  //   }
  // }
  // print_r($invoiceNumberPay);


   // $sql = "SELECT ID FROM salespartners WHERE salespartners.Наименование LIKE '$salesPartner'
   // AND salespartners.Район LIKE '$area' AND salespartners.Учет LIKE '$accountingType' ";
   // if ($result = mysqli_query($dbconnect, $sql)) {
   //   while($row = mysqli_fetch_array($result)) {
   //     if (mysqli_num_rows($result) != 0) {
   //       $salesPartnerID = $row['ID'];
   //     }
   //   }
   // }
   //
   // for ($i = 0; $i < count($new_array); $i++) {
   //   $item = $new_array[$i]['item'];
   //   $quantity = $new_array[$i]['quantity'];
   //   $price = $new_array[$i]['price'];
   //   $totalCost = $new_array[$i]['totalCost'];
   //   $exchange = $new_array[$i]['exchange'];
   //   $returns = $new_array[$i]['returns'];
   //
   //   $sql = "SELECT Артикул FROM номенклатура WHERE номенклатура.Наименование LIKE '$item' ";
   //   if ($result = mysqli_query($dbconnect, $sql)) {
   //     while($row = mysqli_fetch_array($result)) {
   //      if (mysqli_num_rows($result) != 0) {
   //        $itemID = $row['Артикул'];
   //      }
   //    }
   //  }
   //
   //  $sql = "INSERT INTO invoice (InvoiceNumber, AgentID, SalesPartnerID,
   //    AccountingType, ItemID, Quantity, Price, Total, ExchangeQuantity,
   //   ReturnQuantity, DateTimeDoc) VALUES ($invoiceNumber, $agentID, $salesPartnerID,
   //     '$accountingType', $itemID, $quantity, $price, $totalCost, $exchange,
   //     $returns, '$dateTimeDoc') ";
   //
   //    if (mysqli_query($dbconnect, $sql)) {
   //    } else {
   //       echo "Error: " . $sql . "<br>" . mysqli_error($dbconnect);
   //    }
   // }
   // echo $invoiceNumber;
   mysqli_close($dbconnect);
?>
