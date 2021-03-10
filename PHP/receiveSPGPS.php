<?php
  mysqli_set_charset("utf8");
  include("dbconnect.php");
  if ($_SERVER["REQUEST_METHOD"]=="POST" &&
      isset($_POST['dbName']) === true && empty($_POST['dbName']) === false &&
      isset($_POST['dbUser']) === true && empty($_POST['dbUser']) === false &&
      isset($_POST['dbPassword']) === true && empty($_POST['dbPassword']) === false &&
      isset($_POST['area']) === true && empty($_POST['area']) === false &&
      isset($_POST['loadType']) === true && empty($_POST['loadType']) === false) {
    $area = trim($_POST['area']);
    $areaStr = trim($_POST['area']);
    $areaInt = (int)$areaStr;
    $loadType = trim($_POST['loadType']);
    if ($areaInt == 0) {
      if ($loadType == "загрузка по адресу") {
        $sql = "SELECT ID, Наименование, Юр_Наименование, Район, DayOfTheWeek, ИНН, Учет, Адрес,
        Контакты, CurrState, Latitude, Longitude, addressLoadByPass
        FROM salespartners WHERE Адрес NOT LIKE '' AND CurrState=1";
        // if ($result = mysqli_query($dbconnect, $sql)) {
        //    $resultArray = array();
        //    $tempArray = array();
        //    while($row = $result->fetch_object()) {
        //       $tempArray = $row;
        //       array_push($resultArray, $tempArray);
        //    }
        //    echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
        //    mysqli_close($dbconnect);
        // } else {
        //    $json['error'] = 'Something went wrong';
        //    echo json_encode($json, JSON_UNESCAPED_UNICODE);
        //    mysqli_close($dbconnect);
        // }
      } else {
        $sql = "SELECT ID, Наименование, Юр_Наименование, Район, DayOfTheWeek, ИНН, Учет, Адрес,
        Контакты, CurrState, Latitude, Longitude, addressLoadByPass
        FROM salespartners WHERE (Longitude NOT LIKE '' OR Longitude NOT LIKE Null)
        AND (Latitude NOT LIKE '' OR Latitude NOT LIKE Null) AND CurrState=1";
      }
    }
    if ($areaInt == 6) {
      if ($loadType == "загрузка по адресу") {
        $sql = "SELECT ID, Наименование, Юр_Наименование, Район, DayOfTheWeek, ИНН, Учет, Адрес, Контакты,
        CurrState, Latitude, Longitude, addressLoadByPass
        FROM salespartners WHERE Район=0 AND Адрес NOT LIKE '' ";
        // if ($result = mysqli_query($dbconnect, $sql)) {
        //    $resultArray = array();
        //    $tempArray = array();
        //    while($row = $result->fetch_object()) {
        //       $tempArray = $row;
        //       array_push($resultArray, $tempArray);
        //    }
        //    echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
        //    mysqli_close($dbconnect);
        // } else {
        //    $json['error'] = 'Something went wrong';
        //    echo json_encode($json, JSON_UNESCAPED_UNICODE);
        //    mysqli_close($dbconnect);
        // }
      } else {
        $sql = "SELECT ID, Наименование, Юр_Наименование, Район, DayOfTheWeek, ИНН, Учет, Адрес, Контакты,
        CurrState, Latitude, Longitude, addressLoadByPass
        FROM salespartners WHERE Район=0 AND (Longitude NOT LIKE '' OR Longitude NOT LIKE Null)
        AND (Latitude NOT LIKE '' OR Latitude NOT LIKE Null)";
      }
    }
    if ($areaInt > 0 && $areaInt < 6) {
      if ($loadType == "загрузка по адресу") {
        $sql = "SELECT ID, Наименование, Юр_Наименование, Район, DayOfTheWeek, ИНН, Учет, Адрес,
        Контакты, CurrState, Latitude, Longitude, addressLoadByPass
        FROM salespartners WHERE Район LIKE '$area' AND Адрес NOT LIKE '' AND CurrState=1";
      } else {
        $sql = "SELECT ID, Наименование, Юр_Наименование, Район, DayOfTheWeek, ИНН, Учет, Адрес,
        Контакты, CurrState, Latitude, Longitude, addressLoadByPass
        FROM salespartners WHERE Район LIKE '$area' AND (Longitude NOT LIKE '' OR Longitude NOT LIKE Null)
        AND (Latitude NOT LIKE '' OR Latitude NOT LIKE Null) AND CurrState=1";
      }
    }
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
?>
