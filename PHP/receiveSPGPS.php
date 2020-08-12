<?php
  mysqli_set_charset("utf8");
  include("dbconnect.php");
  $areaStr = trim($_POST['area']);
  $areaInt = (int)$areaStr;
  $loadType = trim($_POST['loadType']);
  if ($areaInt == 0) {
    if($_SERVER["REQUEST_METHOD"]=="POST") {
      $sql = "SELECT ID, Наименование, Юр_Наименование, Район, DayOfTheWeek, ИНН, Учет, Адрес,
      Контакты, CurrState, Latitude, Longitude, addressLoadByPass
      FROM salespartners WHERE (Longitude NOT LIKE '' OR NOT Null)
      AND (Latitude NOT LIKE '' OR NOT Null)";
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

  if (trim($_POST['area']) == 6) {
    if($_SERVER["REQUEST_METHOD"]=="POST") {
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
  }

  if (isset($_POST['dbName']) === true && empty($_POST['dbName']) === false &&
      isset($_POST['dbUser']) === true && empty($_POST['dbUser']) === false &&
      isset($_POST['dbPassword']) === true && empty($_POST['dbPassword']) === false) {
    include("dbconnect.php");
    // $login = (trim($_POST['login']));
    // $password = (trim($_POST['password']));
    if (isset($_POST['area']) === true && empty($_POST['area']) === false && trim($_POST['area']) > 0 && trim($_POST['area']) < 6) {
      $area = trim($_POST['area']);
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
