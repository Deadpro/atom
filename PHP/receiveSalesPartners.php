<?php
  mysqli_set_charset("utf8");
  include("dbconnect.php");
  if (isset($_POST['area']) === false && empty($_POST['area']) === true) {
    if($_SERVER["REQUEST_METHOD"]=="POST") {
      $sql = "SELECT Наименование FROM salespartners ";
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
    $login = (trim($_POST['login']));
    $password = (trim($_POST['password']));
    // mysql_real_escape_string
    if (isset($_POST['area']) === true && empty($_POST['area']) === false &&
        isset($_POST['root']) === false && empty($_POST['root']) === true) {
      $area = trim($_POST['area']);
      $sql = "SELECT Наименование, ID FROM salespartners WHERE Район LIKE '$area'";
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
    if (isset($_POST['area']) === true && empty($_POST['area']) === false &&
        isset($_POST['root']) === true && empty($_POST['root']) === false) {
      $area = trim($_POST['area']);
      $root = trim($_POST['root']);
      $sql = "SELECT Наименование, ID FROM salespartners WHERE Район LIKE '$area'
              AND DayOfTheWeek LIKE '$root'";
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
