<?php
  include("dbconnect.php");

  date_default_timezone_set("UTC"); // Устанавливаем часовой пояс по Гринвичу
  $time = time(); // Вот это значение отправляем в базу
  $time += 11 * 3600; // Добавляем 3 часа к времени по Гринвичу
  $dateTimeDoc = date("Y-m-d H:i:s", $time); // Выводим время пользователя, согласно его часовому поясу

  $date = date("Y-m-d H:i:s");
  $date = strtotime($dateTimeDoc);
  $date = strtotime("-6 day", $date);
  $dateTime = date('Y-m-d H:i:s', $date);

  if($_SERVER["REQUEST_METHOD"]=="POST"){
    $tableName = $_POST["tableName"];
    $agentID = $_POST["agentID"];

    if($tableName == "salesPartners"){
      $sql = "SELECT ID, Наименование, ИНН, Район, Учет, DayOfTheWeek, Автор FROM salespartners
      WHERE CurrState=1 ";

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
      $sql = "SELECT Артикул, Наименование, Цена, Описание, Артикул_1С FROM номенклатура ";

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
      $sql = "SELECT tableName FROM invoicetables WHERE agentID LIKE '$agentID' ";
      if ($result = mysqli_query($dbconnect, $sql)) {
        while($row = mysqli_fetch_array($result)) {
          if (mysqli_num_rows($result) != 0) {
            $tableName = $row['tableName'];
          }
        }
      }
      $sql = "SELECT ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
      ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
      InvoiceSum, Comment FROM $tableName WHERE DateTimeDocLocal >= '$dateTime' ";

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
      $sql = "SELECT tableName FROM paymenttables WHERE agentID LIKE '$agentID' ";
      if ($result = mysqli_query($dbconnect, $sql)) {
        while($row = mysqli_fetch_array($result)) {
          if (mysqli_num_rows($result) != 0) {
            $tableName = $row['tableName'];
          }
        }
      }

      $sql = "SELECT ID, дата_платежа, №_накладной, сумма_внесения, автор FROM $tableName ";

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
    if($tableName == "receive"){
      $sql = "SELECT tableName FROM receivetables WHERE agentID LIKE '$agentID' ";
      if ($result = mysqli_query($dbconnect, $sql)) {
        while($row = mysqli_fetch_array($result)) {
          if (mysqli_num_rows($result) != 0) {
            $tableName = $row['tableName'];
          }
        }
      }

      $sql = "SELECT itemID, dateTimeDoc, quantity, agentID FROM $tableName";

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

    if($tableName == "agents"){
      $sql = "SELECT Район, Фамилия, Имя, Отчество FROM агент ";

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
