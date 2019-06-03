<?php
  if (isset($_POST['name']) === true && empty($_POST['name']) === false) {
    require 'php/connectAdmin.php';

    $query = mysqli_query("
      SELECT `name`.`location`
      FROM `names`
      WHERE `names`.`name` = '" . mysqli_real_escape_string(trim($_POST['name'])) ."'
    ");

    echo (mysqli_num_rows($query) !== 0) ? mysqli_result($query, 0, 'location') : 'Name not found';
  }
