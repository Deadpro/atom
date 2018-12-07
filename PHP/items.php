<?php
   include("dbconnect.php");

   if($_SERVER["REQUEST_METHOD"]=="POST")
   {
      $sql = "SELECT Наименование FROM номенклатура ";

      if ($result = mysqli_query($dbconnect, $sql)) {
         $resultArray = array();
         $tempArray = array();
         while($row = $result->fetch_object()) {
            $tempArray = $row;
            array_push($resultArray, $tempArray);
         }
      }else{
         $json['failed'] = 'Something went wrong with this query';
         echo json_encode($json, JSON_UNESCAPED_UNICODE);
         mysqli_close($dbconnect);
      }
      echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
      mysqli_close($dbconnect);
   }
?>
