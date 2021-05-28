var settingsLocalVars = {
  "nameLabel" : "Имя",
  "userLabel" : "Пользователь",
  "passLabel" : "Пароль",
  "userAccountLabel" : "Учетная запись",
  "userPasswordLabel" : "Пароль",
  "buttonsLabel" : "Обработка введенных данных"
};
// var ok;
$('#adminSettings').on('click', function() {
  toTop("connection-data");
  $('div#connection-data').html("");
  $('div#connection-data').append(" \
    <div class='loginContainer'> \
      <div class='loginMenuContainer'> \
        <div class='panel panel-custom border'> \
          <div class='panel-heading col-100'><span>" + settingsLocalVars.nameLabel + "</span></div> \
          <div class='panel-body'> \
            <div class='col-25'> база данных: </div><div class='col-75'><input type='text' id='dbName'></div> \
          </div> \
        </div> \
        <div class='panel panel-custom border'> \
          <div class='panel-heading col-100'><span>" + settingsLocalVars.userLabel + "</span></div> \
          <div class='panel-body'> \
            <div class='col-25'> пользователь БД: </div><div class='col-75'><input type='text' id='dbUser'></div> \
          </div> \
        </div> \
        <div class='panel panel-custom border'> \
          <div class='panel-heading col-100'><span>" + settingsLocalVars.passLabel + "</span></div> \
          <div class='panel-body'> \
            <div class='col-25'> пароль БД: </div><div class='col-75'><input type='password' id='dbPassword'></div> \
          </div> \
        </div> \
        <div class='panel panel-custom border'> \
          <div class='panel-heading col-100'><span>" + settingsLocalVars.userAccountLabel + "</span></div> \
          <div class='panel-body'> \
            <div class='col-25'> учетная запись сотрудника: </div><div class='col-75'><input type='text' id='login'></div> \
          </div> \
        </div> \
        <div class='panel panel-custom border'> \
          <div class='panel-heading col-100'><span>" + settingsLocalVars.userPasswordLabel + "</span></div> \
          <div class='panel-body'> \
            <div class='col-25'> пароль сотрудника: </div><div class='col-75'><input type='password' id='password'></div> \
          </div> \
        </div> \
        <div class='panel panel-custom border'> \
          <div class='panel-heading col-100'><span>" + settingsLocalVars.buttonsLabel + "</span></div> \
          <div class='panel-body'> \
            <div class='col-30'><button id='connection-save'><span>Сохранить</span></button></div> \
            <div class='col-30'><button id='connection-load'><span>Загрузить</span></button></div> \
            <div class='col-30'><button id='connection-submit'><span>Войти</span></button></div> \
          </div> \
        </div> \
      </div> \
    </div> \
    <script src='../js/loginAdmin.js' type='text/javascript' ></script> \
  ");
});
