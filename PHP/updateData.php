<?php
  mysqli_set_charset("utf8");
  include("dbconnect.php");
  $updateType = trim($_POST['updateType']);
  $updateValue = trim($_POST['updateValue']);
  $spName = trim($_POST['spName']);
  $areaStr = (int)trim($_POST['spArea']);
  $spID = trim($_POST['spID']);
  if($_SERVER["REQUEST_METHOD"]=="POST") {
    if (isset($_POST['dbName']) === true && empty($_POST['dbName']) === false &&
        isset($_POST['dbUser']) === true && empty($_POST['dbUser']) === false &&
        isset($_POST['dbPassword']) === true && empty($_POST['dbPassword']) === false) {
      if ($updateType == "spName") {
        $sql = "UPDATE salespartners SET Наименование = '$updateValue'
        WHERE Наименование LIKE '$spName' AND Район LIKE '$areaStr' AND ID LIKE '$spID'";
        if (mysqli_query($dbconnect, $sql)) {
           echo "success";
        } else {
           echo "failed";
        }
      }
      if () {

      }
      if () {

      }
      if () {

      }
      if () {

      }
      if () {

      }
      if () {

      }
      if () {

      }
      if () {

      }
      if () {

      }
      if () {

      }
      if () {

      }
      if () {

      }
    }
  }
  mysqli_close($dbconnect);
?>
