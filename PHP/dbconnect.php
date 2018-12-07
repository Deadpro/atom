<?php
   if (isset($_POST["dbName"], $_POST["dbUser"], $_POST["dbPassword"])) {
      $dbName = $_POST["dbName"];
      $dbUser = $_POST["dbUser"];
      $dbPassword = $_POST["dbPassword"];

      if (!empty($dbName) && !empty($dbUser) && !empty($dbPassword)) {
         $encrypted_password = md5($dbPassword);
         $dbconnect = mysqli_connect("localhost", $dbUser, $encrypted_password,
         $dbName);
      } else {
         echo json_encode("You must fill all DB Settings fields");
      }
   }  

   if (mysqli_connect_errno()){
      echo "Connection failed:".mysqli_connect_errno();
      exit;
   }

   printf("Изначальная кодировка: %s\n", $mysqli->character_set_name());

   /* изменение набора символов на utf8 */
   if (!$mysqli->set_charset("utf8")) {
       printf("Ошибка при загрузке набора символов utf8: %s\n", $mysqli->error);
       exit();
   } else {
       printf("Текущий набор символов: %s\n", $mysqli->character_set_name());
   }
?>
