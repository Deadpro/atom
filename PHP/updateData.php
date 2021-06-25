<?php
  mysqli_set_charset("utf8");
  include("dbconnect.php");

  date_default_timezone_set("UTC"); // Устанавливаем часовой пояс по Гринвичу
  $time = time(); // Вот это значение отправляем в базу
  $time += 11 * 3600; // Добавляем 3 часа к времени по Гринвичу
  $dateTimeDoc = date("Y-m-d H:i:s", $time);

  $updateType = trim($_POST['updateType']);
  $beforeValue = trim($_POST['beforeValue']);
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
             VALUES ('salespartners', 'Наименование', $spID, '$beforeValue', '$updateValue', 'ceo', 'new', 1, '$dateTimeDoc') ";
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
      if ($updateType == "spLegalName") {
        $sql = "UPDATE salespartners SET Юр_Наименование = '$updateValue'
        WHERE Наименование LIKE '$spName' AND Район LIKE '$areaStr' AND ID LIKE '$spID'";
        if (mysqli_query($dbconnect, $sql)) {
          $sql = "INSERT INTO changehistorydata_ceo (tableName, tableField, idOfRecordToChange, beforeValue,
             afterValue, author, typeOfChange, changeGroupID, dateTimeOfChange)
             VALUES ('salespartners', 'Юр_Наименование', $spID, '$beforeValue', '$updateValue', 'ceo', 'new', 1, '$dateTimeDoc') ";
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
      if ($updateType == "spArea") {
        $sql = "UPDATE salespartners SET Район = '$updateValue'
        WHERE Наименование LIKE '$spName' AND Район LIKE '$areaStr' AND ID LIKE '$spID'";
        if (mysqli_query($dbconnect, $sql)) {
          $sql = "INSERT INTO changehistorydata_ceo (tableName, tableField, idOfRecordToChange, beforeValue,
             afterValue, author, typeOfChange, changeGroupID, dateTimeOfChange)
             VALUES ('salespartners', 'Район', $spID, '$beforeValue', '$updateValue', 'ceo', 'new', 1, '$dateTimeDoc') ";
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
      if ($updateType == "spRoot") {
        $sql = "UPDATE salespartners SET DayOfTheWeek = '$updateValue'
        WHERE Наименование LIKE '$spName' AND Район LIKE '$areaStr' AND ID LIKE '$spID'";
        if (mysqli_query($dbconnect, $sql)) {
          $sql = "INSERT INTO changehistorydata_ceo (tableName, tableField, idOfRecordToChange, beforeValue,
             afterValue, author, typeOfChange, changeGroupID, dateTimeOfChange)
             VALUES ('salespartners', 'DayOfTheWeek', $spID, '$beforeValue', '$updateValue', 'ceo', 'new', 1, '$dateTimeDoc') ";
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
      if ($updateType == "spTaxNumber") {
        $sql = "UPDATE salespartners SET ИНН = '$updateValue'
        WHERE Наименование LIKE '$spName' AND Район LIKE '$areaStr' AND ID LIKE '$spID'";
        if (mysqli_query($dbconnect, $sql)) {
          $sql = "INSERT INTO changehistorydata_ceo (tableName, tableField, idOfRecordToChange, beforeValue,
             afterValue, author, typeOfChange, changeGroupID, dateTimeOfChange)
             VALUES ('salespartners', 'ИНН', $spID, '$beforeValue', '$updateValue', 'ceo', 'new', 1, '$dateTimeDoc') ";
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
      if ($updateType == "spAccType") {
        $sql = "UPDATE salespartners SET Учет = '$updateValue'
        WHERE Наименование LIKE '$spName' AND Район LIKE '$areaStr' AND ID LIKE '$spID'";
        if (mysqli_query($dbconnect, $sql)) {
          $sql = "INSERT INTO changehistorydata_ceo (tableName, tableField, idOfRecordToChange, beforeValue,
             afterValue, author, typeOfChange, changeGroupID, dateTimeOfChange)
             VALUES ('salespartners', 'Учет', $spID, '$beforeValue', '$updateValue', 'ceo', 'new', 1, '$dateTimeDoc') ";
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
      if ($updateType == "spAddress") {
        $sql = "UPDATE salespartners SET Адрес = '$updateValue'
        WHERE Наименование LIKE '$spName' AND Район LIKE '$areaStr' AND ID LIKE '$spID'";
        if (mysqli_query($dbconnect, $sql)) {
          $sql = "INSERT INTO changehistorydata_ceo (tableName, tableField, idOfRecordToChange, beforeValue,
             afterValue, author, typeOfChange, changeGroupID, dateTimeOfChange)
             VALUES ('salespartners', 'Адрес', $spID, '$beforeValue', '$updateValue', 'ceo', 'new', 1, '$dateTimeDoc') ";
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
      if ($updateType == "spContacts") {
        $sql = "UPDATE salespartners SET Контакты = '$updateValue'
        WHERE Наименование LIKE '$spName' AND Район LIKE '$areaStr' AND ID LIKE '$spID'";
        if (mysqli_query($dbconnect, $sql)) {
          $sql = "INSERT INTO changehistorydata_ceo (tableName, tableField, idOfRecordToChange, beforeValue,
             afterValue, author, typeOfChange, changeGroupID, dateTimeOfChange)
             VALUES ('salespartners', 'Контакты', $spID, '$beforeValue', '$updateValue', 'ceo', 'new', 1, '$dateTimeDoc') ";
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
      if ($updateType == "spCurrState") {
        $sql = "UPDATE salespartners SET CurrState = '$updateValue'
        WHERE Наименование LIKE '$spName' AND Район LIKE '$areaStr' AND ID LIKE '$spID'";
        if (mysqli_query($dbconnect, $sql)) {
          $sql = "INSERT INTO changehistorydata_ceo (tableName, tableField, idOfRecordToChange, beforeValue,
             afterValue, author, typeOfChange, changeGroupID, dateTimeOfChange)
             VALUES ('salespartners', 'CurrState', $spID, '$beforeValue', '$updateValue', 'ceo', 'new', 1, '$dateTimeDoc') ";
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
      if ($updateType == "spLattitude") {
        $sql = "UPDATE salespartners SET Latitude = '$updateValue'
        WHERE Наименование LIKE '$spName' AND Район LIKE '$areaStr' AND ID LIKE '$spID'";
        if (mysqli_query($dbconnect, $sql)) {
          $sql = "INSERT INTO changehistorydata_ceo (tableName, tableField, idOfRecordToChange, beforeValue,
             afterValue, author, typeOfChange, changeGroupID, dateTimeOfChange)
             VALUES ('salespartners', 'Latitude', $spID, '$beforeValue', '$updateValue', 'ceo', 'new', 1, '$dateTimeDoc') ";
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
      if ($updateType == "spLongitude") {
        $sql = "UPDATE salespartners SET Longitude = '$updateValue'
        WHERE Наименование LIKE '$spName' AND Район LIKE '$areaStr' AND ID LIKE '$spID'";
        if (mysqli_query($dbconnect, $sql)) {
          $sql = "INSERT INTO changehistorydata_ceo (tableName, tableField, idOfRecordToChange, beforeValue,
             afterValue, author, typeOfChange, changeGroupID, dateTimeOfChange)
             VALUES ('salespartners', 'Longitude', $spID, '$beforeValue', '$updateValue', 'ceo', 'new', 1, '$dateTimeDoc') ";
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
      if ($updateType == "spByPass") {
        $sql = "UPDATE salespartners SET addressLoadByPass = '$updateValue'
        WHERE Наименование LIKE '$spName' AND Район LIKE '$areaStr' AND ID LIKE '$spID'";
        if (mysqli_query($dbconnect, $sql)) {
          $sql = "INSERT INTO changehistorydata_ceo (tableName, tableField, idOfRecordToChange, beforeValue,
             afterValue, author, typeOfChange, changeGroupID, dateTimeOfChange)
             VALUES ('salespartners', 'addressLoadByPass', $spID, '$beforeValue', '$updateValue', 'ceo', 'new', 1, '$dateTimeDoc') ";
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
      if ($updateType == "spAccSubject") {
        $sql = "UPDATE salespartners SET accSubject = '$updateValue'
        WHERE Наименование LIKE '$spName' AND Район LIKE '$areaStr' AND ID LIKE '$spID'";
        if (mysqli_query($dbconnect, $sql)) {
          $sql = "INSERT INTO changehistorydata_ceo (tableName, tableField, idOfRecordToChange, beforeValue,
             afterValue, author, typeOfChange, changeGroupID, dateTimeOfChange)
             VALUES ('salespartners', 'accSubject', $spID, '$beforeValue', '$updateValue', 'ceo', 'new', 1, '$dateTimeDoc') ";
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
      if ($updateType == "spAccAddress") {
        $sql = "UPDATE salespartners SET accAddress = '$updateValue'
        WHERE Наименование LIKE '$spName' AND Район LIKE '$areaStr' AND ID LIKE '$spID'";
        if (mysqli_query($dbconnect, $sql)) {
          $sql = "INSERT INTO changehistorydata_ceo (tableName, tableField, idOfRecordToChange, beforeValue,
             afterValue, author, typeOfChange, changeGroupID, dateTimeOfChange)
             VALUES ('salespartners', 'Адрес', $spID, '$beforeValue', '$updateValue', 'ceo', 'new', 1, '$dateTimeDoc') ";
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
      if ($updateType == "tmpFixInvoiceNumbers") {
        // $tmp = 11082;
        // $row_cnt = 0;
        // $row = 0;
        // $sql = "SELECT DISTINCT(InvoiceNumber), DateTimeDocLocal FROM invoice_five
        // WHERE DateTimeDoc>'2020-10-13 19:38:49' AND InvoiceNumber>11082 AND InvoiceNumber<11123";
        // if ($result = mysqli_query($dbconnect, $sql)) {
        //    // $row_cnt = mysqli_num_rows($result);
        //    while ($row = mysqli_fetch_row($result)) {
        //      $currInvoiceNumber = $row[0];
        //      $dateTimeDocLocal = $row[1];
        //      $tmpUpdateFix = $currInvoiceNumber + 1;
        //      // for ($i=0; $i < $row_cnt; $i++) {
        //        $sql = "UPDATE invoice_five SET InvoiceNumber = '$tmpUpdateFix'
        //        WHERE DateTimeDoc>'2020-10-13 19:38:49' AND InvoiceNumber = '$currInvoiceNumber'
        //        AND DateTimeDocLocal='$dateTimeDocLocal' ";
        //        if (mysqli_query($dbconnect, $sql)) {
        //          echo "success";
        //        } else {
        //           echo "failed";
        //        }
        //      // }
        //   }
        // } else {
        //    echo "failed";
        // }
      }
    }
  }
  mysqli_close($dbconnect);
?>
