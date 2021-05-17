<?php
  if (isset($_POST['dbName']) === true && empty($_POST['dbName']) === false &&
      isset($_POST['dbUser']) === true && empty($_POST['dbUser']) === false &&
      isset($_POST['dbPassword']) === true && empty($_POST['dbPassword']) === false) {
    include("dbconnect.php");
    $login = (trim($_POST['login']));
    $password = (trim($_POST['password']));
    // mysql_real_escape_string
    if (isset($_POST['accounting']) === true && empty($_POST['accounting']) === false) {
      $accounting = trim($_POST['accounting']);
    }
    if (isset($_POST['reportType']) === true && empty($_POST['reportType']) === false) {
      $reportType = trim($_POST['reportType']);
    }
    if (isset($_POST['area']) === true && empty($_POST['area']) === false) {
      $area = trim($_POST['area']);
      $areaTrigger = true;
    } else {
      $area = '0';
      $areaTrigger = false;
    }
    if (isset($_POST['area']) === false) {
      $areaTrigger = false;
    }
    if (isset($_POST['day']) === true && empty($_POST['day']) === false) {
      $dayOfTheWeek = trim($_POST['day']);
    } else {
      $dayOfTheWeek = '0';
    }
    $salesPartnerTrigger = false;
    if (isset($_POST['salesPartnersID']) === true && empty($_POST['salesPartnersID']) === false) {
      $salesPartnerID = trim($_POST['salesPartnersID']);
      $salesPartnerTrigger = true;
    }
    $index = (int)$area - 1;
    if ((int)$area == 7) {
      $index = (int)$area - 2;
    }
    // if (isset($_POST['accSubject']) === true && empty($_POST['accSubject']) === false) {
      $accSubjectPost = trim($_POST['accSubject']);
    // } else {
    //   $accSubject = 1;
    // }
    if ($accSubjectPost == 2) {
      $accSubject = "На Ли Ген Сун";
    }
    if ($accSubjectPost == 3) {
      $accSubject = "На Че Роман Енгунович";
    }
    if ($accSubjectPost == 1) {
      $accSubject = "";
    }
    date_default_timezone_set("UTC"); // Устанавливаем часовой пояс по Гринвичу
    $time = time(); // Вот это значение отправляем в базу
    $time += 11 * 3600; // Добавляем 11 часов к времени по Гринвичу
    $dateTimeDoc = date("Y-m-d H:i:s", $time); // Выводим время пользователя, согласно его часовому поясу

    $date = date("Y-m-d H:i:s");
    $currDate = date("Y-m-d H:i:s");
    $currDate = strtotime($dateTimeDoc);
    $date = strtotime($dateTimeDoc);
    if ($accounting == "1") {
      // $date = date('Y-m-d', $date);
    } else {
      $date = strtotime("-4 day", $date);
    }
    // $dateTime = date('Y-m-d H:i:s', $date);
    // $dateTime = "2019-06-10 00:00:00";
    if (empty($_POST['dateStart']) === false && empty($_POST['dateEnd']) === false) {
      $dateStart = (trim($_POST['dateStart']));
      $dateEnd = (trim($_POST['dateEnd']));
    } else {
      $dateStart = date('Y-m-d', $date);
      $dateEnd = date('Y-m-d H:i:s', $currDate);
    }
    $areaArray[0] = 'invoice_one';
    $areaArray[1] = 'invoice_two';
    $areaArray[2] = 'invoice_three';
    $areaArray[3] = 'invoice_four';
    $areaArray[4] = 'invoice_five';
    $areaArray[5] = 'invoice_seven';

    $resultArray = array();
    $tempArray = array();
    if ($reportType == 'report') {
      if ($salesPartnerTrigger == false && $areaTrigger == false) {
        for ($i = 0; $i < count($areaArray); $i++) {
          $areaArrayTmp = $areaArray[$i];
          $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
          ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
          InvoiceSum, номенклатура.Наименование, salespartners.Юр_Наименование FROM $areaArrayTmp
          INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
          INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
          WHERE DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd'  ORDER BY ItemID";
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
      if ($salesPartnerTrigger == false && $areaTrigger == true) {
        $areaArrayTmp = $areaArray[(int)$index];
        $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
        ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
        InvoiceSum, номенклатура.Наименование, salespartners.Юр_Наименование FROM $areaArrayTmp
        INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
        INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
        WHERE DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd'  ORDER BY InvoiceNumber";
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
      if ($salesPartnerTrigger == true && $areaTrigger == true) {
        $areaArrayTmp = $areaArray[(int)$index];
        $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
        ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
        InvoiceSum, номенклатура.Наименование, salespartners.Юр_Наименование FROM $areaArrayTmp
        INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
        INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
        WHERE (DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd')  AND SalesPartnerID LIKE '$salesPartnerID'
        ORDER BY ItemID";
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

      if ($salesPartnerTrigger === true && $areaTrigger === false) {
        for ($i = 1; $i < 6; $i++) {
          $areaArrayTmp = $areaArray[$i];
          $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
          ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
          InvoiceSum, номенклатура.Наименование, salespartners.Юр_Наименование FROM $areaArrayTmp
          INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
          INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
          WHERE (DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd')  AND SalesPartnerID LIKE '$salesPartnerID'
          ORDER BY ItemID";
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
    }
    if ($accounting == '1') {
      $areaArrayTmp = $areaArray[(int)$index];
      $sql = "SELECT InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
      Quantity, Price, Total, DateTimeDocLocal, InvoiceSum,
      salespartners.Наименование, salespartners.ИНН, salespartners.ID as ID, salespartners.accSubject as type, salespartners.Юр_Наименование,
      номенклатура.Наименование as itemName, номенклатура.Артикул_1С as item, accAddress FROM $areaArrayTmp
      INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
      INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
      WHERE salespartners.accSubject LIKE '$accSubject' AND (DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd')  AND AccountingType LIKE 'провод' ";
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
    if ($reportType == 'byDayReport') {
      if ($salesPartnerTrigger == true) {
        $areaArrayTmp = $areaArray[(int)$index];
        $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
        ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
        InvoiceSum, номенклатура.Наименование, salespartners.Юр_Наименование FROM $areaArrayTmp
        INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
        INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
        WHERE DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd' AND SalesPartnerID LIKE '$salesPartnerID'
        ORDER BY ItemID, DateTimeDocLocal";;
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
      } else {
        $areaArrayTmp = $areaArray[(int)$index];
        $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
        ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
        InvoiceSum, номенклатура.Наименование, salespartners.Юр_Наименование FROM $areaArrayTmp
        INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
        INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
        WHERE DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd' ORDER BY ItemID, DateTimeDocLocal";
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
    if ($reportType == 'byNetCostReport') {
      if ($salesPartnerTrigger == false && $areaTrigger == false) {
        for ($i = 0; $i < count($areaArray); $i++) {
          $areaArrayTmp = $areaArray[$i];
          $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
          ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
          InvoiceSum, номенклатура.Наименование, номенклатура.netCost, salespartners.Юр_Наименование FROM $areaArrayTmp
          INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
          INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
          WHERE DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd'  ORDER BY ItemID";
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
      if ($salesPartnerTrigger == false && $areaTrigger == true) {
        $areaArrayTmp = $areaArray[(int)$index];
        $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
        ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
        InvoiceSum, номенклатура.Наименование, номенклатура.netCost, salespartners.Юр_Наименование FROM $areaArrayTmp
        INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
        INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
        WHERE DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd'  ORDER BY InvoiceNumber";
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
      if ($salesPartnerTrigger == true && $areaTrigger == true) {
        $areaArrayTmp = $areaArray[(int)$index];
        $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
        ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
        InvoiceSum, номенклатура.Наименование, номенклатура.netCost, salespartners.Юр_Наименование FROM $areaArrayTmp
        INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
        INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
        WHERE (DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd')  AND SalesPartnerID LIKE '$salesPartnerID'
        ORDER BY ItemID";
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
    if ($reportType == 'ingredientsReport') {
      if ($salesPartnerTrigger == false && $areaTrigger == false) {
        for ($i = 0; $i < count($areaArray); $i++) {
          $areaArrayTmp = $areaArray[$i];
          $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, ItemID, номенклатура.Наименование as itemName, Quantity,
          Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
          InvoiceSum, AgentID, SalesPartnerID, AccountingType, salespartners.Юр_Наименование FROM $areaArrayTmp
          INNER JOIN номенклатура ON $areaArrayTmp.ItemID=номенклатура.Артикул
          INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
          WHERE (DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd') AND Quantity>0 ORDER BY $areaArrayTmp.ItemID";
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
      if ($salesPartnerTrigger == false && $areaTrigger == true) {
        $areaArrayTmp = $areaArray[(int)$index];
        $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
        ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
        InvoiceSum, номенклатура.Наименование, salespartners.Юр_Наименование FROM $areaArrayTmp
        INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
        INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
        WHERE DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd'  ORDER BY InvoiceNumber";
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
      if ($salesPartnerTrigger == true && $areaTrigger == true) {
        $areaArrayTmp = $areaArray[(int)$index];
        $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
        ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
        InvoiceSum, номенклатура.Наименование, salespartners.Юр_Наименование FROM $areaArrayTmp
        INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
        INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
        WHERE (DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd')  AND SalesPartnerID LIKE '$salesPartnerID'
        ORDER BY ItemID";
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

      if ($salesPartnerTrigger === true && $areaTrigger === false) {
        for ($i = 1; $i < 6; $i++) {
          $areaArrayTmp = $areaArray[$i];
          $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
          ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
          InvoiceSum, номенклатура.Наименование, salespartners.Юр_Наименование FROM $areaArrayTmp
          INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
          INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
          WHERE (DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd')  AND SalesPartnerID LIKE '$salesPartnerID'
          ORDER BY ItemID";
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
    }
    if ($reportType == 'analytics') {
      if ($salesPartnerTrigger == false && $areaTrigger == false) {
        for ($i = 0; $i < count($areaArray); $i++) {
          $areaArrayTmp = $areaArray[$i];
          $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
          ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
          InvoiceSum, Surplus, номенклатура.Наименование as itemName, salespartners.Наименование as spName FROM $areaArrayTmp
          INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
          INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
          WHERE DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd'  ORDER BY SalesPartnerID, DateTimeDocLocal, ItemID";
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
      if ($salesPartnerTrigger == false && $areaTrigger == true) {
        $areaArrayTmp = $areaArray[(int)$index];
        $sql = "SELECT $areaArrayTmp.ID, InvoiceNumber, AgentID, SalesPartnerID, AccountingType,
        ItemID, Quantity, Price, Total, ExchangeQuantity, ReturnQuantity, DateTimeDocLocal,
        InvoiceSum, Surplus, номенклатура.Наименование as itemName, salespartners.Наименование as spName FROM $areaArrayTmp
        INNER JOIN номенклатура ON $areaArrayTmp.ItemID = номенклатура.Артикул
        INNER JOIN salespartners ON $areaArrayTmp.SalesPartnerID = salespartners.ID
        WHERE DateTimeDocLocal BETWEEN '$dateStart' AND '$dateEnd'  ORDER BY SalesPartnerID, DateTimeDocLocal, ItemID";
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
?>
