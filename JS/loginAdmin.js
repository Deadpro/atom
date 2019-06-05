$('input#connection-submit').on('click', function() {
  var dbName = $('input#dbName').val();
  var dbUser = $('input#dbUser').val();
  var dbPassword = $('input#dbPassword').val();
  var login = $('input#login').val();
  var password = $('input#password').val();
  var responseData;
  if ($.trim(dbName) != '' && $.trim(dbUser) != '' && $.trim(dbPassword) != '' && $.trim(login) != '') {
    $.post('../ajax/loginAdmin.php', {dbName: dbName, dbUser: dbUser, dbPassword: dbPassword, login: login, password: password}, function(data) {
      $('div#connection-data').text(data);
      if (data == 'success') {
        
      }
    });
  }
});
