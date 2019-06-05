<?php
  if (isset($_POST["dbName"], $_POST["dbUser"], $_POST["dbPassword"])) {
    $dbName = $_POST["dbName"];
    $dbUser = $_POST["dbUser"];
    $dbPassword = $_POST["dbPassword"];
    if (!empty($dbName) && !empty($dbUser) && !empty($dbPassword)) {
      $dbconnect = mysqli_connect("localhost", $dbUser, $dbPassword,
      $dbName);
    } else {
      // echo json_encode("You must fill all DB Settings fields");
      echo ("You must fill all DB Settings fields");
    }
  }
  if (mysqli_connect_errno()){
    echo "Connection failed:".mysqli_connect_errno();
    exit;
  } else {
    // echo 'success';
  }
  //printf("Изначальная кодировка: %s\n", $dbconnect->character_set_name());

  /* изменение набора символов на utf8 */
  if (!$dbconnect->set_charset("utf8")) {
    printf("Ошибка при загрузке набора символов utf8: %s\n", $dbconnect->error);
    exit();
  } else {
    //printf("Текущий набор символов: %s\n",
  	$dbconnect->character_set_name();
  }
?>
