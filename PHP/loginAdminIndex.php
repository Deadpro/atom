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
</head>
<body  onload="starter();">
  <div class="loginContainer">
    <div class="col-25"> DBName: </div><div class="col-75"><input type="text" id="dbName"></div>
    <div class="col-25"> DBUser: </div><div class="col-75"><input type="text" id="dbUser"></div>
    <div class="col-25"> DBPassword: </div><div class="col-75"><input type="password" id="dbPassword"></div>
    <div class="col-25"> Login: </div><div class="col-75"><input type="text" id="login"></div>
    <div class="col-25"> Password: </div><div class="col-75"><input type="password" id="password"></div>
    <div class="col-30"><button id="connection-save"><span>Сохранить</span></button></div>
    <div class="col-30"><button id="connection-load"><span>Загрузить</span></button></div>
    <div class="col-30"><button id="connection-submit"><span>Войти</span></button></div>
  </div>
  <div id="connection-data"></div>


  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="../js/receiveAgentStatus.js" type="text/javascript" ></script>
  <script src="../js/loginAdmin.js" type="text/javascript" ></script>
  <script lang="javascript" src="../sheetjs/dist/xlsx.full.min.js"></script>
</body>
</html>
