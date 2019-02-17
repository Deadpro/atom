<?php
  mysqli_set_charset("utf8");
  include("dbconnect.php");

  if($_SERVER["REQUEST_METHOD"]=="POST"){
    $agentID = $_POST["agentID"];
    $array = $_POST["array"];

    $new_array = json_decode($array, true);

    $sql = "SELECT tableName FROM receivetables WHERE agentID LIKE '$agentID' ";
    if ($result = mysqli_query($dbconnect, $sql)) {
      while($row = mysqli_fetch_array($result)) {
        if (mysqli_num_rows($result) != 0) {
          $tableName = $row['tableName'];
        }
      }
    }

    for ($i = 0; $i < count($new_array); $i++) {
      $itemID = $new_array[$i]['itemID'];
      $agentID = $new_array[$i]['agentID'];
      $quantity = $new_array[$i]['quantity'];
      $dateTimeDoc = $new_array[$i]['dateTimeDoc'];
      $resultArray = array();
      $tempArray = array();
      $sql = "INSERT INTO $tableName (itemID, agentID, quantity, dateTimeDoc)
      VALUES ($itemID, $agentID, $quantity, '$dateTimeDoc') ";
      if (mysqli_query($dbconnect, $sql)) {
         $tmpInfo = "New record created successfully";
         $tempArray = array('requestMessage' => $tmpInfo);
         array_push($resultArray, $tempArray);
      } else {
         echo "Error: " . $sql . "<br>" . mysqli_error($dbconnect);
      }
    }
    echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
    mysqli_close($dbconnect);
  }
?>
