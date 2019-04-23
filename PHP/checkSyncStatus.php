<?php
  mysqli_set_charset("utf8");
  include("dbconnect.php");

  $invoiceNumberFirst = $_POST["invoiceNumberFirst"];
  $agentID = $_POST["areaDefault"];

  $sql = "SELECT tableName FROM invoicetables WHERE agentID LIKE '$agentID' ";
  if ($result = mysqli_query($dbconnect, $sql)) {
    while($row = mysqli_fetch_array($result)) {
      if (mysqli_num_rows($result) != 0) {
        $tableName = $row['tableName'];
      }
    }
  }

  $sql = "SELECT InvoiceNumber FROM $tableName WHERE InvoiceNumber > ($invoiceNumberFirst - 1) ";
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
