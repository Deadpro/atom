<!DOCTYPE html>
<html lang="en">
<head>
  <title>Login</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"> -->
  <link href="https://fonts.googleapis.com/css?family=Carter+One|Chewy|Cinzel+Decorative|Della+Respira|El+Messiri|Fahkwang|Kalam|Lobster|Merienda|Mirza|Oleo+Script|Oswald|Playfair+Display|Pridi|Righteous|Shrikhand" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Indie+Flower|Pacifico" rel="stylesheet">
  <link rel="stylesheet" href="../CSS/menuLayout.css">
  <link rel="stylesheet" href="../CSS/report.css">
  <link rel="stylesheet" href="../CSS/adminMenu.css">
  <link rel="stylesheet" href="../CSS/accounting.css">
  <link rel="stylesheet" href="../CSS/map.css">
  <link rel="stylesheet" href="../CSS/settings.css">
  <link rel="stylesheet" href="../CSS/changeDBTables.css">
  <script type="text/javascript" src="../sheetjs/dist/xlsx.full.min.js"></script>
  <script type="text/javascript" src="../filesaver/dist/FileSaver.min.js"></script>
  <script type="text/javascript" src="../js/globalVariables.js"></script>
  <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=a707736f-d679-4409-8f92-30a0132ceb93" type="text/javascript"></script>
  <script src="https://yandex.st/jquery/2.2.3/jquery.min.js" type="text/javascript"></script>
  <script src="https://cdn.jsdelivr.net/npm/exif-js"></script>
</head>
<body  onload="starter();">
  <!-- <script>
    $('.navbar-collapse input').click(function (e) {
        $('.navbar-collapse').collapse('toggle');
    });
  </script> -->
  <div class="navigationContainer">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#menu">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse" id="menu">
      <ul class="nav navbar-nav">
        <li><div id="home" data-toggle="collapse" data-target=".navbar-collapse.in" ><img src="../images/icons/home.ico"></div></li>
        <li><input type="submit" id="reports" data-toggle="collapse" data-target=".navbar-collapse.in" value="ОТЧЕТЫ"></li>
        <li><input type="submit" id="accounting" data-toggle="collapse" data-target=".navbar-collapse.in"  value="БУХГАЛТЕРИЯ"></li>
        <li><input type="submit" id="analytics" data-toggle="collapse" data-target=".navbar-collapse.in" value="АНАЛИТИКА"></li>
        <li><input type="submit" id="printReport" data-toggle="collapse" data-target=".navbar-collapse.in" value="ПЕЧАТЬ"></li>
        <li><input type="submit" id="changeDataBaseTables" data-toggle="collapse" data-target=".navbar-collapse.in" value="ИЗМЕНИТЬ"></li>
        <li><input type="submit" id="warehouse" data-toggle="collapse" data-target=".navbar-collapse.in" value="СКЛАД"></li>
        <li><input type="submit" id="mapCaiman" data-toggle="collapse" data-target=".navbar-collapse.in" value="КАРТА"></li>
        <li><input type="submit" id="adminSettings" data-toggle="collapse" data-target=".navbar-collapse.in" value="НАСТРОЙКИ"></li>
      </ul>
    </div>
  </div>
  <!-- <table id="tableData"><tbody><tr><td>Test</td></tr></tbody></table>
  <button id='button-a'>Create Excel</button> -->
  <div id="connection-data"></div>
  <script type="text/javascript" src="../js/globalVariables.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script> -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="../js/receiveAgentStatus.js"></script>
  <script type="text/javascript" src="../js/loginAdmin.js"></script>
  <script type="text/javascript" src="../js/reports.js"></script>
  <script type="text/javascript" src="../js/settings.js"></script>
  <script type="text/javascript" src="../js/analytics.js"></script>
  <script type="text/javascript" src="../js/accounting.js"></script>
  <script type="text/javascript" src="../js/createexcel.js"></script>
  <script type="text/javascript" src="../js/request_map.js"></script>
  <script type="text/javascript" src="../js/changeDataBaseTables.js"></script>
  <script type="text/javascript" src="../js/warehouse.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/exif-js"></script>
  <!-- Yandex Disk REST API jQuery Plugin -->
  <script type="text/javascript" src="../js/jquery.ydisk.js"></script>
  <!-- <script type="text/javascript" src="../sheetjs/dist/xlsx.full.min.js"></script>
  <script type="text/javascript" src="../filesaver/dist/FileSaver.min.js"></script>
  <script type="text/javascript" src="../js/createexcel.js"></script> -->

</body>
</html>
