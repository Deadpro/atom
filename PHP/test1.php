<?php
  include("dbconnect.php");

  date_default_timezone_set("UTC"); // Устанавливаем часовой пояс по Гринвичу
  $time = time(); // Вот это значение отправляем в базу
  $time += 11 * 3600; // Добавляем 3 часа к времени по Гринвичу
  $dateTimeDoc = date("Y-m-d H:i:s", $time); // Выводим время пользователя, согласно его часовому поясу

  $date = date("Y-m-d H:i:s");
  $date = strtotime($dateTimeDoc);
  $date = strtotime("-14 day", $date);
  $date = date('Y-m-d H:i:s"', $date);

  $sql = "SELECT ID, DateTimeDocLocal FROM invoice_one WHERE DateTimeDocLocal >= '$date' ";

  if ($result = mysqli_query($dbconnect, $sql)){
    $resultArray = array();
    $tempArray = array();
    while($row = $result->fetch_object()){
      $tempArray = $row;
      array_push($resultArray, $tempArray);
    }
    echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
    mysqli_close($dbconnect);
  } else {
    $json["failed"] = 'Login failed. Invalid login
    and/or password';
    echo json_encode($json, JSON_UNESCAPED_UNICODE);
    mysqli_close($dbconnect);
  }
?>
