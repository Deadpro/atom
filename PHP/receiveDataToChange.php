<?php
  mysqli_set_charset("utf8");
  include("dbconnect.php");
  $areaStr = trim($_POST['area']);
  $areaInt = (int)$areaStr;
  $loadType = trim($_POST['loadType']);
  if($_SERVER["REQUEST_METHOD"]=="POST") {
    if ($loadType == "areaToChange") {
      $sql = "SELECT ID, Наименование, Юр_Наименование, Район, DayOfTheWeek, ИНН, Учет, Адрес,
      Контакты, CurrState, Latitude, Longitude, addressLoadByPass, accSubject, accAddress
      FROM salespartners WHERE Район LIKE '$areaInt' AND CurrState=1 ";
      if ($result = mysqli_query($dbconnect, $sql)) {
         $resultArray = array();
         $tempArray = array();
         while($row = $result->fetch_object()) {
            $tempArray = $row;
            array_push($resultArray, $tempArray);
         }
         echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
         mysqli_close($dbconnect);
      } else {
         $json['error'] = 'Something went wrong';
         echo json_encode($json, JSON_UNESCAPED_UNICODE);
         mysqli_close($dbconnect);
      }
    }
    if ($loadType == "itemsToChange") {
      $sql = "SELECT ID, Наименование, Юр_Наименование, Район, DayOfTheWeek, ИНН, Учет, Адрес, Контакты,
      CurrState, Latitude, Longitude, addressLoadByPass
      FROM salespartners WHERE Район=0 AND (Longitude NOT LIKE '' OR Longitude NOT LIKE Null)
      AND (Latitude NOT LIKE '' OR Latitude NOT LIKE Null)";
      if ($result = mysqli_query($dbconnect, $sql)) {
         $resultArray = array();
         $tempArray = array();
         while($row = $result->fetch_object()) {
            $tempArray = $row;
            array_push($resultArray, $tempArray);
         }
         echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
         mysqli_close($dbconnect);
      } else {
         $json['error'] = 'Something went wrong';
         echo json_encode($json, JSON_UNESCAPED_UNICODE);
         mysqli_close($dbconnect);
      }
    }
    if ($loadType == "salesToChange") {
      $sql = "SELECT ID, Наименование, Юр_Наименование, Район, DayOfTheWeek, ИНН, Учет, Адрес,
      Контакты, CurrState, Latitude, Longitude, addressLoadByPass
      FROM salespartners WHERE Район LIKE '$area' AND
      (Longitude NOT LIKE '' OR NOT Null) AND (Latitude NOT LIKE '' OR NOT Null)";
      if ($result = mysqli_query($dbconnect, $sql)) {
         $resultArray = array();
         $tempArray = array();
         while($row = $result->fetch_object()) {
            $tempArray = $row;
            array_push($resultArray, $tempArray);
         }
         echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
         mysqli_close($dbconnect);
      } else {
         $json['error'] = 'Something went wrong';
         echo json_encode($json, JSON_UNESCAPED_UNICODE);
         mysqli_close($dbconnect);
      }
    }
    if ($loadType == "receiveToChange") {
      $sql = "SELECT ID, Наименование, Юр_Наименование, Район, DayOfTheWeek, ИНН, Учет, Адрес,
      Контакты, CurrState, Latitude, Longitude, addressLoadByPass
      FROM salespartners WHERE Район LIKE '$area' AND
      (Longitude NOT LIKE '' OR NOT Null) AND (Latitude NOT LIKE '' OR NOT Null)";
      if ($result = mysqli_query($dbconnect, $sql)) {
         $resultArray = array();
         $tempArray = array();
         while($row = $result->fetch_object()) {
            $tempArray = $row;
            array_push($resultArray, $tempArray);
         }
         echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
         mysqli_close($dbconnect);
      } else {
         $json['error'] = 'Something went wrong';
         echo json_encode($json, JSON_UNESCAPED_UNICODE);
         mysqli_close($dbconnect);
      }
    }
  }
?>
