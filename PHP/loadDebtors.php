<?php
  mysqli_set_charset("utf8");
  include("dbconnect.php");

  $time = '00:00:00';
  $dateEnd = date("Y-m-d H:i:s");
  $dateStart = date("Y-m-d H:i:s");
  $accountingType = $_POST["accountingType"];
  $loginSecurity = $_POST["loginSecurity"];
  $dateStart = $_POST["dateStart"].' '.$time;
  $dateEnd = $_POST["dateEnd"].' '.$time;

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

  $sql = "SELECT DISTINCT InvoiceNumber, InvoiceSum FROM invoice
  WHERE invoice.AgentID LIKE '$agentID' AND (DateTimeDoc BETWEEN '$dateStart' AND '$dateEnd') ";
  if ($result = mysqli_query($dbconnect, $sql)) {
    while($row = mysqli_fetch_array($result)) {
      if (mysqli_num_rows($result) != 0) {
        $invoiceNumber[] = $row['InvoiceNumber'];
        $invoiceSum[] = $row['InvoiceSum'];
      }
    }
  }

  $sql = "SELECT №_накладной, сумма_внесения FROM платежи ";
  if ($result = mysqli_query($dbconnect, $sql)) {
    while($row = mysqli_fetch_array($result)) {
      if (mysqli_num_rows($result) != 0) {
        $invoiceNumberPay[] = $row['№_накладной'];
        $paymentSum[] = $row['сумма_внесения'];
      }
    }
  }

  for ($i = 0; $i < count($invoiceNumberPay); $i++) {
    if ($invoiceNumberPay[0] == $invoiceNumberPay[1]) {
      $invoiceNumberPayDistinct[0] = $invoiceNumberPay[0];
    }
    if ($invoiceNumberPay[0] != $invoiceNumberPay[1]) {
      $invoiceNumberPayDistinct[0] = $invoiceNumberPay[0];
    }
    if ($i > 0) {
      if ($invoiceNumberPay[$i] == $invoiceNumberPay[$i + 1]) {

      }
      if ($invoiceNumberPay[$i] != $invoiceNumberPay[$i + 1]) {
        $invoiceNumberPayDistinct[$i] = $invoiceNumberPay[$i + 1];
      }
    }

  }


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
