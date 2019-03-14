<?php
   include("dbconnect.php");

   if($_SERVER["REQUEST_METHOD"]=="POST"){
      date_default_timezone_set("UTC"); // Устанавливаем часовой пояс по Гринвичу
      $time = time(); // Вот это значение отправляем в базу
      $offset = 3; // Допустим, у пользователя смещение относительно Гринвича составляет +3 часа
      $time += 11 * 3600; // Добавляем 3 часа к времени по Гринвичу
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
               $sql = "SELECT * FROM агент INNER JOIN security ON агент.Фамилия = security.secondname
               AND агент.Имя = security.firstname AND агент.Отчество = security.middlename
               where login LIKE '$login' AND password LIKE '$password' ";
               if ($result = mysqli_query($dbconnect, $sql)){
                  $resultArray = array();
                  $tempArray = array();
               //    while($row = $result->fetch_object()){
               //       $tempArray = $row;
               //       array_push($resultArray, $tempArray);
               //    }
               //    echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
               //    mysqli_close($dbconnect);
               // }
                 while($row = mysqli_fetch_array($result)) {
                   if (mysqli_num_rows($result) != 0) {
                     $attribute = $row['Район'];
                     $firstName = $row['Имя'];
                     $secondName = $row['Фамилия'];
                     $middlename = $row['Отчество'];
                     $tempArray = array('Район' => $attribute, 'Фамилия' => $secondName,
                      'Имя' => $firstName, 'Отчество' => $middleName);
                   }
                 }
                array_push($resultArray, $tempArray);
              }
              echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
              mysqli_close($dbconnect);
            }
               // else {
               //       $json["failed"] = 'Login failed. Invalid login
               //       and/or password';
               //       echo json_encode($json, JSON_UNESCAPED_UNICODE);
               //       mysqli_close($dbconnect);
               // }
            // }

            if ($agentAttribute == "accountant"){
              $sql = "SELECT * FROM security WHERE login LIKE '$login' AND password LIKE '$password' ";
              if ($result = mysqli_query($dbconnect, $sql)){
                 $resultArray = array();
                 $tempArray = array();
                 while($row = mysqli_fetch_array($result)) {
                   if (mysqli_num_rows($result) != 0) {
                     $attribute = $row['attribute'];
                     $firstName = $row['firstname'];
                     $secondName = $row['secondname'];
                     $middlename = $row['middlename'];
                     $tempArray = array('Район' => $attribute, 'Фамилия' => $secondName,
                      'Имя' => $firstName, 'Отчество' => $middleName);
                   }
                 }
                array_push($resultArray, $tempArray);
              }
              echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
              mysqli_close($dbconnect);
            }
            // else {
            //       $json["failed"] = 'Login failed. Invalid login
            //       and/or password';
            //       echo json_encode($json, JSON_UNESCAPED_UNICODE);
            //       mysqli_close($dbconnect);
            // }

            if ($agentAttribute == "ceo"){
              $sql = "SELECT * FROM security WHERE login LIKE '$login' AND password LIKE '$password' ";
              if ($result = mysqli_query($dbconnect, $sql)){
                 $resultArray = array();
                 $tempArray = array();
                 while($row = mysqli_fetch_array($result)) {
                   if (mysqli_num_rows($result) != 0) {
                     $attribute = $row['attribute'];
                     $firstName = $row['firstname'];
                     $secondName = $row['secondname'];
                     $middlename = $row['middlename'];
                     $tempArray = array('Район' => $attribute, 'Фамилия' => $secondName,
                      'Имя' => $firstName, 'Отчество' => $middleName);
                   }
                 }
                array_push($resultArray, $tempArray);
              }
              echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
              mysqli_close($dbconnect);
            }
            // else {
            //       $json["failed"] = 'Login failed. Invalid login
            //       and/or password';
            //       echo json_encode($json, JSON_UNESCAPED_UNICODE);
            //       mysqli_close($dbconnect);
            // }
         } else {
            echo json_encode("Почему-то пустой Логин и/или Пароль");
         }
      } else {
         $resultArray = array();
         $tempArray = array();
         $tempArray = array("dayOfTheWeek" => date("N", $time ));
         array_push($resultArray, $tempArray);
         echo json_encode($resultArray);
      }
   }
?>
