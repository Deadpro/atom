<?php
  include("dbconnect.php");

  // if($_SERVER["REQUEST_METHOD"]=="POST") {
  //   if (isset($_POST["array"]) {
      $array = $_POST["array"];

      // if (!empty($array)) {
        $new_array = json_decode($array, true);
        print_r($new_array);
    //   }
    // }
  // }
?>
