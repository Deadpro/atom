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
  }
?>
