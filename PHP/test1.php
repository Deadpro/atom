<?php
   //class User {
      include("dbconnect.php");
   //}

   //$user = new User();
   if($_SERVER["REQUEST_METHOD"]=="POST")
   {
      if (isset($_POST["Login"], $_POST["Password"])) {
         $login = $_POST["Login"];
         $password = $_POST["Password"];

         if (!empty($login) && !empty($password)) {
            $encrypted_password = md5($password);
            //$user -> does_user_exist($login, $encrypted_password);
            $sql = "SELECT firstname, secondname, middlename FROM security where login = '$login'
            and password = '$encrypted_password' ";

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
               $json['failed'] = 'Login failed. Invalid login
               and/or passord';
               echo json_encode($json, JSON_UNESCAPED_UNICODE);
               mysqli_close($dbconnect);
            }
         } else {
            echo json_encode("You must fill both fields");
         }
      }
      //testQuery();
   }

   //function testQuery() {

   //}
?>
