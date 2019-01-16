<?php
  include("dbconnect.php");

  if($_SERVER["REQUEST_METHOD"]=="POST"){
    $tableName = $_POST["tableName"];
    if($tableName == "salesPartners"){
      $sql = "SELECT ID, Наименование, Район, Учет, DayOfTheWeek, Автор FROM salespartners ";

      if ($result = mysqli_query($dbconnect, $sql)){
        $resultArray = array();
        $tempArray = array();
        while($row = $result->fetch_object()){
          $tempArray = $row;
          array_push($resultArray, $tempArray);
        }
        echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
        mysqli_close($dbconnect);
      } else {
        $json["failed"] = 'Login failed. Invalid login
        and/or password';
        echo json_encode($json, JSON_UNESCAPED_UNICODE);
        mysqli_close($dbconnect);
      }
    }
    if($tableName == "items"){
      $sql = "SELECT Артикул, Наименование, Цена FROM номенклатура ";

      if ($result = mysqli_query($dbconnect, $sql)){
        $resultArray = array();
        $tempArray = array();
        while($row = $result->fetch_object()){
          $tempArray = $row;
          array_push($resultArray, $tempArray);
        }
        echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
        mysqli_close($dbconnect);
      } else {
        $json["failed"] = 'Login failed. Invalid login
        and/or password';
        echo json_encode($json, JSON_UNESCAPED_UNICODE);
        mysqli_close($dbconnect);
      }
    }
    if($tableName == "номенклатурасоскидкой"){
      $sql = "SELECT ID, Артикул, ID_скидки, ID_контрагента, Автор FROM номенклатурасоскидкой ";

      if ($result = mysqli_query($dbconnect, $sql)){
        $resultArray = array();
        $tempArray = array();
        while($row = $result->fetch_object()){
          $tempArray = $row;
          array_push($resultArray, $tempArray);
        }
        echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
        mysqli_close($dbconnect);
      } else {
        $json["failed"] = 'Login failed. Invalid login
        and/or password';
        echo json_encode($json, JSON_UNESCAPED_UNICODE);
        mysqli_close($dbconnect);
      }
    }
    if($tableName == "скидка"){
      $sql = "SELECT ID, Тип_скидки, Скидка, Автор FROM скидка ";

      if ($result = mysqli_query($dbconnect, $sql)){
        $resultArray = array();
        $tempArray = array();
        while($row = $result->fetch_object()){
          $tempArray = $row;
          array_push($resultArray, $tempArray);
        }
        echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
        mysqli_close($dbconnect);
      } else {
        $json["failed"] = 'Login failed. Invalid login
        and/or password';
        echo json_encode($json, JSON_UNESCAPED_UNICODE);
        mysqli_close($dbconnect);
      }
    }
    if($tableName == "invoice"){
      $sql = "SELECT ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
      ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDoc,
      InvoiceSum, Comment FROM invoice ";

      if ($result = mysqli_query($dbconnect, $sql)){
        $resultArray = array();
        $tempArray = array();
        while($row = $result->fetch_object()){
          $tempArray = $row;
          array_push($resultArray, $tempArray);
        }
        echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
        mysqli_close($dbconnect);
      } else {
        $json["failed"] = 'Login failed. Invalid login
        and/or password';
        echo json_encode($json, JSON_UNESCAPED_UNICODE);
        mysqli_close($dbconnect);
      }
    }
    if($tableName == "платежи"){
      $sql = "SELECT ID, дата_платежа, №_накладной, сумма_внесения, автор FROM платежи ";

      if ($result = mysqli_query($dbconnect, $sql)){
        $resultArray = array();
        $tempArray = array();
        while($row = $result->fetch_object()){
          $tempArray = $row;
          array_push($resultArray, $tempArray);
        }
        echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
        mysqli_close($dbconnect);
      } else {
        $json["failed"] = 'Login failed. Invalid login
        and/or password';
        echo json_encode($json, JSON_UNESCAPED_UNICODE);
        mysqli_close($dbconnect);
      }
    }
  }
?>
