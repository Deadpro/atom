<?php
  mysqli_set_charset("utf8");
  include("dbconnect.php");

  if (isset($_POST['dbName']) === true && empty($_POST['dbName']) === false &&
      isset($_POST['dbUser']) === true && empty($_POST['dbUser']) === false &&
      isset($_POST['dbPassword']) === true && empty($_POST['dbPassword']) === false) {
    if (isset($_POST['area']) === true && empty($_POST['area']) === false) {
      $area = trim($_POST['area']);
      if ($area == "1") {
        $area = 'Район_1';
      }
      if ($area == "2") {
        $area = 'Район_2';
      }
      if ($area == "3") {
        $area = 'Район_3';
      }
      if ($area == "4") {
        $area = 'Район_4';
      }
      if ($area == "5") {
        $area = 'Район_5';
      }
      $sql = "SELECT Артикул, Наименование, $area as Area FROM agentsSalaryRates";
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
