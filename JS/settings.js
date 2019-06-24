var ok;
$('#adminSettings').on('click', function() {
  $('div#connection-data').html("");
  $('div#connection-data').append(" \
    <div class='loginContainer'> \
      <div class='col-25'> Имя: </div><div class='col-75'><input type='text' id='dbName'></div> \
      <div class='col-25'> Пользователь: </div><div class='col-75'><input type='text' id='dbUser'></div> \
      <div class='col-25'> Пароль: </div><div class='col-75'><input type='password' id='dbPassword'></div> \
      <div class='col-25'> Учетная запись: </div><div class='col-75'><input type='text' id='login'></div> \
      <div class='col-25'> Пароль: </div><div class='col-75'><input type='password' id='password'></div> \
      <div class='col-30'><button id='connection-save'><span>Сохранить</span></button></div> \
      <div class='col-30'><button id='connection-load'><span>Загрузить</span></button></div> \
      <div class='col-30'><button id='connection-submit'><span>Войти</span></button></div> \
    </div> \
    <script src='../js/loginAdmin.js' type='text/javascript' ></script> \
  ");
});
