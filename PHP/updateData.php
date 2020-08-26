<?php
  mysqli_set_charset("utf8");
  include("dbconnect.php");

  date_default_timezone_set("UTC"); // Устанавливаем часовой пояс по Гринвичу
  $time = time(); // Вот это значение отправляем в базу
  $time += 11 * 3600; // Добавляем 3 часа к времени по Гринвичу
  $dateTimeDoc = date("Y-m-d H:i:s", $time);

  $updateType = trim($_POST['updateType']);
  $updateValue = trim($_POST['updateValue']);
  $spName = trim($_POST['spName']);
  $area = trim($_POST['spArea']);
  $areaStr = (int)$area;
  $spID = trim($_POST['spID']);
  if($_SERVER["REQUEST_METHOD"]=="POST") {
    if (isset($_POST['dbName']) === true && empty($_POST['dbName']) === false &&
        isset($_POST['dbUser']) === true && empty($_POST['dbUser']) === false &&
        isset($_POST['dbPassword']) === true && empty($_POST['dbPassword']) === false) {
      if ($updateType == "spName") {
        $sql = "UPDATE salespartners SET Наименование = '$updateValue'
        WHERE Наименование LIKE '$spName' AND Район LIKE '$areaStr' AND ID LIKE '$spID'";
        if (mysqli_query($dbconnect, $sql)) {
          $sql = "INSERT INTO changehistorydata_ceo (tableName, tableField, idOfRecordToChange, beforeValue,
             afterValue, author, typeOfChange, changeGroupID, dateTimeOfChange)
             VALUES ('salespartners', 'Наименование', $spID, '$spName', '$updateValue', 'ceo', 'new', 1, '$dateTimeDoc') ";
          if (mysqli_query($dbconnect, $sql)) {
             $logSuccess = "success";
          } else {
             echo "failed";
          }
          if ($logSuccess == "success") {
             echo "success";
          }
        } else {
           echo "failed";
        }
      }
      // if () {
      //
      // }
      // if () {
      //
      // }
      // if () {
      //
      // }
      // if () {
      //
      // }
      // if () {
      //
      // }
      // if () {
      //
      // }
      // if () {
      //
      // }
      // if () {
      //
      // }
      // if () {
      //
      // }
      // if () {
      //
      // }
      // if () {
      //
      // }
      // if () {
      //
      // }
    }
  }
  mysqli_close($dbconnect);
?>
