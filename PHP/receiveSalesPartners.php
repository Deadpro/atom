<?php
  mysqli_set_charset("utf8");
  include("dbconnect.php");

  if($_SERVER["REQUEST_METHOD"]=="POST") {
    $sql = "SELECT Наименование FROM salespartners ";
    // where Район LIKE '$area' and Учет LIKE '$accountingType'
    if ($result = mysqli_query($dbconnect, $sql)) {
       $resultArray = array();
       $tempArray = array();
       while($row = $result->fetch_object()) {
          $tempArray = $row;
          array_push($resultArray, $tempArray);
       }
       echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
       mysqli_close($dbconnect);
    }else{
       $json['error'] = 'Something went wrong';
       echo json_encode($json, JSON_UNESCAPED_UNICODE);
       mysqli_close($dbconnect);
    }
  }
?>
