$('input#connection-submit').on('click', function() {
  var dbName = $('input#dbName').val();
  var dbUser = $('input#dbUser').val();
  var dbPassword = $('input#dbPassword').val();
  var login = $('input#login').val();
  var password = $('input#password').val();
  var responseData;
  var quantity = 0;
  var salesQuantity = new Object();
  var tmpName;
  var tmpQuantity;
  var text = "";
  var trigger = false;
  if ($.trim(dbName) != '' && $.trim(dbUser) != '' && $.trim(dbPassword) != '' && $.trim(login) != '') {
    $.post('../ajax/loginAdmin.php', {dbName: dbName, dbUser: dbUser, dbPassword: dbPassword, login: login, password: password}, function(data) {
      $('div#connection-data').text(data);
      if (data == 'Успешный вход') {
        $.post('../php/receiveReportData.php', {dbName: dbName, dbUser: dbUser, dbPassword: dbPassword}, function(data) {
          var tmp = JSON.parse(data);
          // $('div#connection-data').append("<div><p>" + data[0].AgentID + "</p></div>");

          // alert(Object.keys(tmp).length);
          for (var i = 0; i < Object.keys(tmp).length; i++) {
            // if (tmp[i].Наименование == 'Щике') {
            //   var tmpName = tmp[i].Наименование;
            //   var tmpQuantity = tmp[i].Quantity;
            //   quantity = quantity + parseInt(tmpQuantity, 10);
            //   test = {tmpName : quantity};
            // }
            // alert(Object.keys(tmp).length);
            trigger = false;
            if (Object.keys(salesQuantity).length > 0) {
              for (var key in salesQuantity) {
                // if (salesQuantity.hasOwnProperty(tmp[i].Наименование)) {
                if (tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                    tmp[i].Наименование == "Ким-ча 700 гр особая цена 2" ||
                    tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                    tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                  if (tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                      tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                    if (key == "Ким-ча весовая") {
                      tmpName = "Ким-ча весовая";
                      tmpQuantity = tmp[i].Quantity * 0.7;
                      quantity = parseFloat(salesQuantity[tmpName], 10) + parseFloat(tmpQuantity, 10);
                      text += tmpName + ": " + quantity + " = " + parseFloat(salesQuantity[tmpName], 10) + " + " + parseFloat(tmpQuantity, 10) + "\r\n";
                      salesQuantity[tmpName] = quantity;
                      trigger = true;
                    }
                  }
                  if (tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                      tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                    if (key == "Редька по-восточному весовая") {
                      tmpName = "Редька по-восточному весовая";
                      tmpQuantity = tmp[i].Quantity * 0.5;
                      quantity = parseFloat(salesQuantity[tmpName], 10) + parseFloat(tmpQuantity, 10);
                      text += tmpName + ": " + quantity + " = " + parseFloat(salesQuantity[tmpName], 10) + " + " + parseFloat(tmpQuantity, 10) + "\r\n";
                      salesQuantity[tmpName] = quantity;
                      trigger = true;
                    }
                  }
                } else {
                  if (key == tmp[i].Наименование) {
                    tmpName = tmp[i].Наименование;
                    tmpQuantity = tmp[i].Quantity * 0.5;
                    quantity = parseFloat(salesQuantity[tmpName], 10) + parseFloat(tmpQuantity, 10);
                    text += tmpName + ": " + quantity + " = " + parseFloat(salesQuantity[tmpName], 10) + " + " + parseFloat(tmpQuantity, 10) + "\r\n";
                    salesQuantity[tmpName] = quantity;
                    trigger = true;
                  }
                }
              }
              if (trigger == false) {
              // if (!(tmp[i].Наименование in salesQuantity)) {
                if (tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                    tmp[i].Наименование == "Ким-ча 700 гр особая цена 2" ||
                    tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                    tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                  if (tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                      tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                    tmpName = "Ким-ча весовая";
                    tmpQuantity = tmp[i].Quantity * 0.7;
                    quantity = parseFloat(tmpQuantity, 10);
                    // salesQuantity.tmpName = quantity;
                    Object.defineProperty(salesQuantity, tmpName, {
                      value: quantity,
                      writable: true,
                      enumerable: true,
                      configurable: true
                    });
                  }
                  if (tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                      tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                    tmpName = "Редька по-восточному весовая";
                    tmpQuantity = tmp[i].Quantity * 0.5;
                    quantity = parseFloat(tmpQuantity, 10);
                    // salesQuantity.tmpName = quantity;
                    Object.defineProperty(salesQuantity, tmpName, {
                      value: quantity,
                      writable: true,
                      enumerable: true,
                      configurable: true
                    });
                  }
                } else {
                  tmpName = tmp[i].Наименование;
                  tmpQuantity = tmp[i].Quantity;
                  quantity = parseFloat(tmpQuantity, 10);
                  // salesQuantity.tmpName = quantity;
                  Object.defineProperty(salesQuantity, tmpName, {
                    value: quantity,
                    writable: true,
                    enumerable: true,
                    configurable: true
                  });
                }
              }
            } else {
              tmpName = tmp[i].Наименование;
              tmpQuantity = tmp[i].Quantity;
              quantity = parseFloat(tmpQuantity, 10);
              Object.defineProperty(salesQuantity, tmpName, {
                value: quantity,
                writable: true,
                enumerable: true,
                configurable: true
              });
            }
            // if (Object.keys(salesQuantity).includes(tmp[i].Наименование)) {
          }
          // alert(Object.keys(salesQuantity).length);
          // alert(salesQuantity["Щике"]);
          // $('div#connection-data').text(text);
          $('div#connection-data').text(Object.entries(salesQuantity));
        });
      }
    });
  }
});
