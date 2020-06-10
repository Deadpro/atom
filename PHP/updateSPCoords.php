<?php
  mysqli_set_charset("utf8");
  include("dbconnect.php");
  $areaStr = trim($_POST['area']);
  $areaInt = (int)$areaStr;
  $spID = trim($_POST['spID']);
  $spName = trim($_POST['spName']);
  $spLatitude = trim($_POST['latitude']);
  $spLongitude = trim($_POST['longitude']);
  $spNewLatitude = trim($_POST['newLatitude']);
  $spNewLongitude = trim($_POST['newLongitude']);
  if($_SERVER["REQUEST_METHOD"]=="POST") {
    if (isset($_POST['dbName']) === true && empty($_POST['dbName']) === false &&
        isset($_POST['dbUser']) === true && empty($_POST['dbUser']) === false &&
        isset($_POST['dbPassword']) === true && empty($_POST['dbPassword']) === false) {
      $sql = "UPDATE salespartners SET Latitude = '$spNewLatitude', Longitude = '$spNewLongitude'
      WHERE Наименование LIKE '$spName' AND Район LIKE '$areaStr' AND ID LIKE '$spID'";
      if (mysqli_query($dbconnect, $sql)) {
         echo "success";
      } else {
         echo "failed";
      }
    }
  }
  mysqli_close($dbconnect);
?>
