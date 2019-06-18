// var dbName;
// var dbUser;
// var dbPassword;
// var login;
// var password;

// loadLoginData();

if ($.trim(dbName) != '' && $.trim(dbUser) != '' && $.trim(dbPassword) != '' && $.trim(login) != '' && $.trim(password) != '') {
  $.post('../ajax/loginAdmin.php', {dbName: localStorage.getItem('dbName'), dbUser: localStorage.getItem('dbUser'),
                                    dbPassword: localStorage.getItem('dbPassword'), login: localStorage.getItem('login'),
                                    password: localStorage.getItem('password')}, function(data) {
    // $('div#connection-data').text(data);
    if (data == 'Успешный вход') {
      getAgentStatus();
    }
  });
}

this.loadLoginData = function() {
  dbName = localStorage.getItem('dbName');
  dbUser = localStorage.getItem('dbUser');
  dbPassword = localStorage.getItem('dbPassword');
  login = localStorage.getItem('login');
  password = localStorage.getItem('password');
}

this.getAgentStatus = function() {
   // $('div#connection-data').append(" \
   //   <div id='menuContainer' class='menuContainer'> \
   //     <div class='col-60'>" + local.dateStart + "</div><div class='col-40'><input type='text' id='dateStart'></div> \
   //     <div class='col-60'>" + local.dateEnd + "</div><div class='col-40'><input type='text' id='dateEnd'></div> \
   //     <div class='col-50'><input type='submit' id='report-ceo' value='Подробный отчет'></div> \
   //     <div class='col-50'><input type='submit' id='report-sales-manager' value='Краткий отчет'></div> \
   //   </div> \
   // ");
}
