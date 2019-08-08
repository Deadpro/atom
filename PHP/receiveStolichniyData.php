<?php
  if (isset($_POST['dbName']) === true && empty($_POST['dbName']) === false &&
      isset($_POST['dbUser']) === true && empty($_POST['dbUser']) === false &&
      isset($_POST['dbPassword']) === true && empty($_POST['dbPassword']) === false) {
    include("dbconnect.php");

    $resultArray = array();
    $tempArray = array();
    if ($reportType == 'report') {
      if ($salesPartnerTrigger == false && $areaTrigger == false) {
        for ($i = 0; $i < count($areaArray); $i++) {
          $areaArrayTmp = $areaArray[$i];
          $sql = "SELECT ID, Наименование, Район, Адрес FROM salespartners
          WHERE Юр_Наименование LIKE 'ООО СКЦ' ";
          if ($result = mysqli_query($dbconnect, $sql)){
            while($row = $result->fetch_object()){
              $tempArray = $row;
              array_push($resultArray, $tempArray);
            }
          } else {
            $json["failed"] = 'Login failed. Invalid login
            and/or password';
            echo json_encode($json, JSON_UNESCAPED_UNICODE);
            mysqli_close($dbconnect);
          }
        }
      }
      echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
      mysqli_close($dbconnect);
    }
  }
?>
