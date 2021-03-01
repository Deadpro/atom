<?php
  mysqli_set_charset("utf8");
  include("dbconnect.php");

  if (isset($_POST['dbName']) === true && empty($_POST['dbName']) === false &&
      isset($_POST['dbUser']) === true && empty($_POST['dbUser']) === false &&
      isset($_POST['dbPassword']) === true && empty($_POST['dbPassword']) === false) {
    $type = trim($_POST['type']);
    if ($type == "main") {
      $sql = "SELECT номенклатура.Артикул as itemID, номенклатура.Наименование as itemName, справочник.Артикул as ingredientsID,
      справочник.Наименование as ingredientsName, состав.Количество as ingredientsQuantity, справочник.Цена as ingredientsPrice FROM номенклатура
      INNER JOIN состав ON номенклатура.Артикул=состав.Номенклатура
      INNER JOIN справочник ON состав.Справочник=справочник.Артикул WHERE 1 ORDER BY номенклатура.Артикул";
      if ($result = mysqli_query($dbconnect, $sql)) {
         $resultArray = array();
         $tempArray = array();
         while($row = $result->fetch_object()) {
            $tempArray = $row;
            array_push($resultArray, $tempArray);
         }
         echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
         mysqli_close($dbconnect);
      } else {
         $json['error'] = 'Something went wrong';
         echo json_encode($json, JSON_UNESCAPED_UNICODE);
         mysqli_close($dbconnect);
      }
    }
    if ($type == "additional") {
      $sql = "SELECT справочник.Артикул as ingredientsID, справочник.Наименование as ingredientsName, состав.Количество as ingredientsQuantity,
      справочник.Цена as ingredientsPrice FROM состав
      INNER JOIN справочник ON состав.Справочник=справочник.Артикул WHERE состав.Номенклатура=0";
      if ($result = mysqli_query($dbconnect, $sql)) {
         $resultArray = array();
         $tempArray = array();
         while($row = $result->fetch_object()) {
            $tempArray = $row;
            array_push($resultArray, $tempArray);
         }
         echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
         mysqli_close($dbconnect);
      } else {
         $json['error'] = 'Something went wrong';
         echo json_encode($json, JSON_UNESCAPED_UNICODE);
         mysqli_close($dbconnect);
      }
    }
  }
?>
