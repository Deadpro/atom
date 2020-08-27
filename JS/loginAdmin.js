var loginAdminLocalVars = {
  "loginSecurityData" : new Object(),
  "firstname" : "",
  "secondname" : "",
  "middlename" : "",
  "attribute" : ""
};

$('#connection-submit').on('click', function() {
  if ($.trim(localStorage.getItem('dbName')) != '' && $.trim(localStorage.getItem('dbUser')) != '' &&
      $.trim(localStorage.getItem('dbPassword')) != '' && $.trim(localStorage.getItem('login')) != '' &&
      $.trim(localStorage.getItem('password')) != '') {
    login(localStorage.getItem('dbName'), localStorage.getItem('dbUser'), localStorage.getItem('dbPassword'),
          localStorage.getItem('login'), localStorage.getItem('password'));
  } else {
    login($('input#dbName').val(), $('input#dbUser').val(), $('input#dbPassword').val(), $('input#login').val(), $('input#password').val());
  }
});

$('#connection-save').on('click', function() {
  if ($.trim($('input#dbName').val()) != '' && $.trim($('input#dbUser').val()) != '' && $.trim($('input#dbPassword').val()) != '' && $.trim($('input#login').val()) != '' && $.trim($('input#password').val()) != '') {
    localStorage.setItem('dbName', $('input#dbName').val());
    localStorage.setItem('dbUser', $('input#dbUser').val());
    localStorage.setItem('dbPassword', $('input#dbPassword').val());
    localStorage.setItem('login', $('input#login').val());
    localStorage.setItem('password', $('input#password').val());
  } else {
    alert("Не все поля заполнены");
  }
});

$('#connection-load').on('click', function() {
  loadLoginData();
});

this.login = function(dbName, dbUser, dbPassword, login, password) {
   $.post('../ajax/loginAdmin.php', {dbName: dbName, dbUser: dbUser,
                                     dbPassword: dbPassword, login: login,
                                     password: password}, function(data) {
     // // $('div#connection-data').text(data);
     // if (data == 'Успешный вход') {
     //   // renderMenuPage();
     //   alert('Успешный вход');
     // }
     loginAdminLocalVars.loginSecurityData = JSON.parse(data);
     checkReceivedLoginSecurityData();
   });
}

this.checkReceivedLoginSecurityData = function() {
  // alert(Object.keys(loginAdminLocalVars.loginSecurityData).length);
  for (var i = 0; i < Object.keys(loginAdminLocalVars.loginSecurityData).length; i++) {
    loginAdminLocalVars.firstname = loginAdminLocalVars.loginSecurityData[i].firstname;
    loginAdminLocalVars.middlename = loginAdminLocalVars.loginSecurityData[i].middlename;
    loginAdminLocalVars.secondname = loginAdminLocalVars.loginSecurityData[i].secondname;
    loginAdminLocalVars.attribute = loginAdminLocalVars.loginSecurityData[i].attribute;
    alert('Успешный вход');
  }
}

this.loadLoginData = function() {
  if ($.trim(localStorage.getItem('dbName')) != '' && $.trim(localStorage.getItem('dbUser')) != '' &&
      $.trim(localStorage.getItem('dbPassword')) != '' && $.trim(localStorage.getItem('login')) != '' &&
      $.trim(localStorage.getItem('password')) != '') {
    alert('Данные загружены');
  } else {
    alert('Нет данных. Заполните поля для авторизации');
  }
}
