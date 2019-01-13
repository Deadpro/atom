<?php
   include("dbconnect.php");

   if($_SERVER["REQUEST_METHOD"]=="POST"){
      if (isset($_POST["Login"], $_POST["Password"])) {
         $login = $_POST["Login"];
         $password = $_POST["Password"];

         if (!empty($login) && !empty($password)){
            $encrypted_password = md5($password);

            $sql = "SELECT * FROM security where login LIKE '$login' AND password LIKE '$password' ";

            if ($result = mysqli_query($dbconnect, $sql)){
               while($row = mysqli_fetch_array($result)){
                  if (mysqli_num_rows($result) != 0){
                     $agentAttribute = $row['attribute'];
                  } else {
                     echo "Login.php error 001";
                  }
               }
            }

            if ($agentAttribute == "agent"){
               $sql = "SELECT Район FROM агент INNER JOIN security ON агент.Фамилия = security.secondname
               where login LIKE '$login' AND password LIKE '$password' ";
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
                  $json["failed"] = 'Login failed. Invalid login
                  and/or password';
                  echo json_encode($json, JSON_UNESCAPED_UNICODE);
                  mysqli_close($dbconnect);
            }
         } else {
            echo json_encode("Почему-то пустой Логин и/или Пароль");
         }
      } else {
         $resultArray = array();
         $tempArray = array();
         $tempArray = array("dayOfTheWeek" => date("N"));
         array_push($resultArray, $tempArray);
         echo json_encode($resultArray);
      }
   }
?>
