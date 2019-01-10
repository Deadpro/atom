<?php
   include("dbconnect.php");

   if($_SERVER["REQUEST_METHOD"]=="POST"){
      if (isset($_POST["Area"]){
         $area = $_POST["Area"];
      }
      if (isset($_POST["AccountingType"]){
         $accountingType = $_POST["AccountingType"];
      }
      if (isset($_POST["DayOfTheWeek"]){
         $dayOfTheWeek = $_POST["DayOfTheWeek"];
      }
      if (!empty($area) && !empty($accountingType) && !empty($dayOfTheWeek)){
         //$encrypted_password = md5($password);
         //$user -> does_user_exist($login, $encrypted_password);
         $sql = "SELECT Наименование FROM salespartners where Район LIKE '$area'
         and Учет LIKE '$accountingType' and DayOfTheWeek LIKE '$dayOfTheWeek' ";
      } else {
         echo json_encode("Вы ничего не выбрали", JSON_UNESCAPED_UNICODE);
      }

      if (empty($area) && !empty($accountingType) && !empty($dayOfTheWeek)){
         $sql = "SELECT Наименование FROM salespartners Учет LIKE '$accountingType' and DayOfTheWeek LIKE '$dayOfTheWeek' ";
      }
      if (!empty($area) && empty($accountingType) && !empty($dayOfTheWeek)){
         $sql = "SELECT Наименование FROM salespartners where Район LIKE '$area'
         and DayOfTheWeek LIKE '$dayOfTheWeek' ";
      }
      if (empty($area) && !empty($accountingType) && empty($dayOfTheWeek)){
         $sql = "SELECT Наименование FROM salespartners Учет LIKE '$accountingType' ";
      }
      if (empty($area) && empty($accountingType) && !empty($dayOfTheWeek)){
         $sql = "SELECT Наименование FROM salespartners where DayOfTheWeek LIKE '$dayOfTheWeek' ";
      }
      if (!empty($area) && !empty($accountingType) && empty($dayOfTheWeek)){
         $sql = "SELECT Наименование FROM salespartners where Учет LIKE '$accountingType' ";
      }
      if (!empty($area) && empty($accountingType) && empty($dayOfTheWeek)){
         $sql = "SELECT Наименование FROM salespartners where Район LIKE '$area' ";   
      }
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
         $json['error'] = 'Something went wrong';
         echo json_encode($json, JSON_UNESCAPED_UNICODE);
         mysqli_close($dbconnect);
      }
   }
?>
