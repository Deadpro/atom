<?php
  if (isset($_POST['dbName']) === true && empty($_POST['dbName']) === false &&
      isset($_POST['dbUser']) === true && empty($_POST['dbUser']) === false &&
      isset($_POST['dbPassword']) === true && empty($_POST['dbPassword']) === false) {
    include("../php/dbconnect.php");
    $login = (trim($_POST['login']));
    $password = (trim($_POST['password']));
    // mysql_real_escape_string
    // echo($login);
    $sql = "SELECT firstname FROM security WHERE login LIKE '$login' AND password LIKE '$password' ";
    $query = mysqli_query($dbconnect, $sql);
    if (mysqli_num_rows($query) !== 0) {
      // mysql_result($query, 0, 'firstname');
      while($row = mysqli_fetch_array($query)) {
        // echo $row['firstname'];
        echo 'success';
      }
    } else {
      echo 'Name not found';
    }
  }
  mysqli_close($dbconnect);
?>
