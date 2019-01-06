<?php
   mysqli_set_charset("utf8");
   include("dbconnect.php");

   $accountingType = $_POST["accountingType"];
   $loginSecurity = $_POST["loginSecurity"];
   $dateStart = $_POST["dateStart"];
   $dateEnd = $_POST["dateEnd"];

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

   $sql = "SELECT ID, InvoiceNumber FROM invoice ";
   if ($result = mysqli_query($dbconnect, $sql)) {
     while($row = mysqli_fetch_array($result)) {
       if (mysqli_num_rows($result) != 0) {
         $invoiceNumber[] = $row['InvoiceNumber'];
       }
     }
   }

   $sql = "SELECT ID FROM salespartners WHERE salespartners.Наименование LIKE '$salesPartner'
   AND salespartners.Район LIKE '$area' AND salespartners.Учет LIKE '$accountingType' ";
   if ($result = mysqli_query($dbconnect, $sql)) {
     while($row = mysqli_fetch_array($result)) {
       if (mysqli_num_rows($result) != 0) {
         $salesPartnerID = $row['ID'];
       }
     }
   }

   for ($i = 0; $i < count($new_array); $i++) {
     $item = $new_array[$i]['item'];
     $quantity = $new_array[$i]['quantity'];
     $price = $new_array[$i]['price'];
     $totalCost = $new_array[$i]['totalCost'];
     $exchange = $new_array[$i]['exchange'];
     $returns = $new_array[$i]['returns'];

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
     ReturnQuantity, DateTimeDoc) VALUES ($invoiceNumber, $agentID, $salesPartnerID,
       '$accountingType', $itemID, $quantity, $price, $totalCost, $exchange,
       $returns, '$dateTimeDoc') ";

      if (mysqli_query($dbconnect, $sql)) {
      } else {
         echo "Error: " . $sql . "<br>" . mysqli_error($dbconnect);
      }
   }
   echo $invoiceNumber;
   mysqli_close($dbconnect);
?>
