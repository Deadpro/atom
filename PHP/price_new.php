<?php
   include("dbconnect.php");

   if($_SERVER["REQUEST_METHOD"]=="POST") {
     if (isset($_POST["salesPartner"], $_POST["array"])) {
        $salesPartner = $_POST["salesPartner"];
        $array = $_POST["array"];
        $new_array = json_decode($array, true);
        if (!empty($salesPartner) && !empty($array)) {

          $sql = "SELECT номенклатура.Цена, скидка.Скидка, скидка.Тип_скидки FROM (((номенклатура
            INNER JOIN номенклатурасоскидкой ON номенклатура.Артикул = номенклатурасоскидкой.Артикул)
            INNER JOIN скидка ON скидка.ID = номенклатурасоскидкой.ID_скидки)
            INNER JOIN salespartners ON salespartners.ID LIKE номенклатурасоскидкой.ID_контрагента)
            WHERE номенклатура.Наименование LIKE '$itemName' AND salespartners.Наименование LIKE '$salesPartner' ";
            if ($result = mysqli_query($dbconnect, $sql)) {
               $resultArray = array();
               $tempArray = array();
               while($row = $result->fetch_object()) {
                  $tempArray = $row;
                  array_push($resultArray, $tempArray);
               }
               if (mysqli_num_rows($result) != 0) {
                  echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
               }
               if (mysqli_num_rows($result) == 0) {
                  $sql = "SELECT номенклатура.Цена FROM номенклатура
                   WHERE номенклатура.Наименование LIKE '$itemName' ";
                  if ($result = mysqli_query($dbconnect, $sql)) {
                    while($row = $result->fetch_object()) {
                      $tempArray = $row;
                      array_push($resultArray, $tempArray);
                    }
                    if (mysqli_num_rows($result) != 0) {
                      echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
                    }
                    if (mysqli_num_rows($result) == 0) {
                      $json['ошибка'] = 'Пустой результат';
                      echo json_encode($json, JSON_UNESCAPED_UNICODE);
                    }
                  }
               }
               mysqli_close($dbconnect);
            }else{
               $json['ошибка'] = 'Что-то пошло не так';
               echo json_encode($json, JSON_UNESCAPED_UNICODE);
               mysqli_close($dbconnect);
            }
        }else{
            echo json_encode("Не все поля заполнены");
        }
     }
   }
?>
