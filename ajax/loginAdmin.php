<?php
  if (isset($_POST['dbName']) === true && empty($_POST['dbName']) === false &&
      isset($_POST['dbUser']) === true && empty($_POST['dbUser']) === false &&
      isset($_POST['dbPassword']) === true && empty($_POST['dbPassword']) === false) {
    include("../php/dbconnect.php");
    $login = (trim($_POST['login']));
    $password = (trim($_POST['password']));
    // mysql_real_escape_string
    // echo($login);
    $sql = "SELECT firstname, secondname, middlename, attribute, агент_old.Район as agentArea FROM security
    INNER JOIN агент_old ON security.login = агент_old.login
    WHERE security.login LIKE '$login' AND security.password LIKE '$password' ";
    // $query = mysqli_query($dbconnect, $sql);
    // if (mysqli_num_rows($query) !== 0) {
    //   // mysql_result($query, 0, 'firstname');
    //   while($row = mysqli_fetch_array($query)) {
    //     // echo $row['firstname'];
    //     echo 'Успешный вход';
    //   }
    // } else {
    //   echo 'Нет такого пользователя или неверный пароль';
    // }
    if ($result = mysqli_query($dbconnect, $sql)) {
       $resultArray = array();
       $tempArray = array();
       while($row = $result->fetch_object()) {
          $tempArray = $row;
          array_push($resultArray, $tempArray);
       }
       echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
    } else {
       $json['error'] = 'Нет такого пользователя или неверный пароль';
       echo json_encode($json, JSON_UNESCAPED_UNICODE);
    }
  }
  mysqli_close($dbconnect);
?>
