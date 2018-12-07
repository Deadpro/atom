<?php
   //class User {
      include("dbconnect.php");
   //}

   //$user = new User();
   if($_SERVER["REQUEST_METHOD"]=="POST")
   {
      if (isset($_POST["Area"], $_POST["AccountingType"])) {
         $area = $_POST["Area"];
         $accountingType = $_POST["AccountingType"];

         if (!empty($area) && !empty($accountingType)) {
            //$encrypted_password = md5($password);
            //$user -> does_user_exist($login, $encrypted_password);
            $sql = "SELECT Наименование FROM контрагент where Район LIKE '$area'
            and Учет LIKE '$accountingType' ";

            if ($result = mysqli_query($dbconnect, $sql)) {
               $resultArray = array();
               $tempArray = array();
               while($row = $result->fetch_object()) {
                  $tempArray = $row;
                  array_push($resultArray, $tempArray);
               }
               echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
               //$json['success'] = 'Login Successfull '.$login;
               //echo json_encode($json, JSON_UNESCAPED_UNICODE);
               mysqli_close($dbconnect);
            }else{
               $json['ошибка'] = 'Что-то пошло не так';
               echo json_encode($json, JSON_UNESCAPED_UNICODE);
               mysqli_close($dbconnect);
            }
         } else {
            echo json_encode("Не все поля заполнены!!!");
         }
      }
      //testQuery();
   }

   //function testQuery() {

   //}
?>
