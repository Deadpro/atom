<!DOCTYPE html>
<html lang="en">
<head>
  <title>Login</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link href="https://fonts.googleapis.com/css?family=Carter+One|Chewy|Cinzel+Decorative|Della+Respira|El+Messiri|Fahkwang|Kalam|Lobster|Merienda|Mirza|Oleo+Script|Oswald|Playfair+Display|Pridi|Righteous|Shrikhand" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Indie+Flower|Pacifico" rel="stylesheet">
  <link rel="stylesheet" href="../CSS/report.css">
  <link rel="stylesheet" href="../CSS/adminMenu.css">
  <link rel="stylesheet" href="../CSS/accounting.css">
  <link rel="stylesheet" href="../CSS/map.css">
  <script type="text/javascript" src="../sheetjs/dist/xlsx.full.min.js"></script>
  <script type="text/javascript" src="../filesaver/dist/FileSaver.min.js"></script>
  <script type="text/javascript" src="../js/globalVariables.js"></script>
  <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=a707736f-d679-4409-8f92-30a0132ceb93" type="text/javascript"></script>
  <script src="https://yandex.st/jquery/2.2.3/jquery.min.js" type="text/javascript"></script>
  <script src="https://cdn.jsdelivr.net/npm/exif-js"></script>
</head>
<body  onload="starter();">
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
        <li><div id="home"><img src="../images/icons/home.ico"></div></li>
        <li><input type="submit" id="reports" value="ОТЧЕТЫ"></li>
        <li><input type="submit" id="accounting" value="БУХГАЛТЕРИЯ"></li>
        <li><input type="submit" id="analytics" value="АНАЛИТИКА"></li>
        <li><input type="submit" id="printReport" value="ПЕЧАТЬ"></li>
        <li><input type="submit" id="adminSettings" value="НАСТРОЙКИ"></li>
        <li><input type="submit" id="mapCaiman" value="КАРТА"></li>
      </ul>
    </div>
  </div>
  <!-- <table id="tableData"><tbody><tr><td>Test</td></tr></tbody></table>
  <button id='button-a'>Create Excel</button> -->
  <div id="connection-data"></div>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="../js/receiveAgentStatus.js" type="text/javascript" ></script>
  <script src="../js/loginAdmin.js" type="text/javascript" ></script>
  <script src="../js/reports.js" type="text/javascript" ></script>
  <script type="text/javascript" src="../js/settings.js"></script>
  <script type="text/javascript" src="../js/analytics.js"></script>
  <script type="text/javascript" src="../js/accounting.js"></script>
  <script type="text/javascript" src="../js/createexcel.js"></script>
  <script type="text/javascript" src="../js/globalVariables.js"></script>
  <script src="../js/request_map.js" type="text/javascript"></script>
  <script src="https://cdn.jsdelivr.net/npm/exif-js"></script>
  <!-- Yandex Disk REST API jQuery Plugin -->
  <script type="text/javascript" src="../js/jquery.ydisk.js"></script>
  <!-- <script type="text/javascript" src="../sheetjs/dist/xlsx.full.min.js"></script>
  <script type="text/javascript" src="../filesaver/dist/FileSaver.min.js"></script>
  <script type="text/javascript" src="../js/createexcel.js"></script> -->
</body>
</html>
