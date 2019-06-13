var local = {
  "name" : "Номенклатура",
  "price" : "Цена",
  "quantity" : "Кол-во",
  "exchangeQuantity" : "Обмен",
  "returnQuantity" : "Возврат",
  "ID" : "№",
  "dateStart" : "Начало (год-месяц-день часы:минуты):",
  "dateEnd" : "Конец (год-месяц-день часы:минуты):"
};
var quantity = 0;
var exchangeQuantity = 0;
var returnQuantity = 0;
var salesQuantity = new Object();
var salesExchange = new Object();
var salesReturn = new Object();
var tmpName;
var tmpQuantity;
var tmpExchange;
var tmpReturn;
var text = "";
var trigger = false;
var tmp = new Object();
var dbName;
var dbUser;
var dbPassword;
var login;
var password;

$('input#connection-submit').on('click', function() {
  if ($.trim($('input#dbName').val()) != '' && $.trim($('input#dbUser').val()) != '' && $.trim($('input#login').val()) != '') {
    dbName = $('input#dbName').val();
    dbUser = $('input#dbUser').val();
    dbPassword = $('input#dbPassword').val();
    login = $('input#login').val();
    password = $('input#password').val();
  } else {
    // alert("Введите данные для входа");
  }
  // var responseData;
  if ($.trim(dbName) != '' && $.trim(dbUser) != '' && $.trim(dbPassword) != '' && $.trim(login) != '' && $.trim(password) != '') {
    $.post('../ajax/loginAdmin.php', {dbName: dbName, dbUser: dbUser, dbPassword: dbPassword, login: login, password: password}, function(data) {
      // $('div#connection-data').text(data);
      if (data == 'Успешный вход') {
        renderMenuPage();
      }
    });
  }
});

this.createObject = function(paramOne, paramTwo, paramThree) {
  // alert('start: ' + paramOne + "; " + paramTwo + "; " + trigger + "; " + Object.keys(salesQuantity).length);
  if (paramOne == 0) {
    // alert(0 + ": " + paramOne);
    tmpName = tmp[paramThree].Наименование;
    tmpQuantity = tmp[paramThree].Quantity;
    tmpExchange = tmp[paramThree].ExchangeQuantity;
    tmpReturn = tmp[paramThree].ReturnQuantity;

  }
  if (paramOne == 1) {
    // alert(1);
    tmpName = "Редька по-восточному весовая";
    tmpQuantity = tmp[paramThree].Quantity * 0.5;
    tmpExchange = tmp[paramThree].ExchangeQuantity * 0.5;
    tmpReturn = tmp[paramThree].ReturnQuantity * 0.5;

  }
  if (paramOne == 2) {
    // alert(2);
    tmpName = "Ким-ча весовая";
    tmpQuantity = tmp[paramThree].Quantity * 0.7;
    tmpExchange = tmp[paramThree].ExchangeQuantity * 0.7;
    tmpReturn = tmp[paramThree].ReturnQuantity * 0.7;
    // alert(23);
  }
  if (paramTwo == 0) {
    // alert(00);
    quantity = parseFloat(tmpQuantity, 10);
    exchangeQuantity = parseFloat(tmpExchange, 10);
    returnQuantity = parseFloat(tmpReturn, 10);
    Object.defineProperty(salesQuantity, tmpName, {
       value: quantity,
       writable: true,
       enumerable: true,
       configurable: true
    });
    Object.defineProperty(salesExchange, tmpName, {
       value: exchangeQuantity,
       writable: true,
       enumerable: true,
       configurable: true
    });
    Object.defineProperty(salesReturn, tmpName, {
       value: returnQuantity,
       writable: true,
       enumerable: true,
       configurable: true
    });
  }
  if (paramTwo == 1) {
    // alert(01);
    quantity = parseFloat(salesQuantity[tmpName], 10) + parseFloat(tmpQuantity, 10);
    exchangeQuantity = parseFloat(salesExchange[tmpName], 10) + parseFloat(tmpExchange, 10);
    returnQuantity = parseFloat(salesReturn[tmpName], 10) + parseFloat(tmpReturn, 10);
    text += tmpName + ": " + quantity + " = " + parseFloat(salesQuantity[tmpName], 10) + " + " + parseFloat(tmpQuantity, 10) + "\r\n";
    salesQuantity[tmpName] = quantity;
    salesExchange[tmpName] = exchangeQuantity;
    salesReturn[tmpName] = returnQuantity;
    trigger = true;
  }
}

this.closeReportTable = function() {
   $(".reportContainer").html("");
  $(".reportContainer").hide();
  $("#connecton-data").html("");
  $(".menuContainer").show();
  // loadLoginData();
  renderMenuPage();
}

this.renderReportTable = function()	{
  $(".reportContainer").show();
  $('div#connection-data').append(" \
    <div id='reportContainer' class='reportContainer'> \
      <a id='close' href='#' onclick='closeReportTable();'> \
        <img width='30px' style='float:right' src='../images/icons/black-close-icon-3.png' /> \
      </a> \
      <table id='tableHeader'><tr><td>" + local.ID + "</td><td>" + local.exchangeQuantity + "</td><td>" + local.name + "</td><td>" + local.quantity + "</td><td>" + local.returnQuantity + "</td></tr></table> \
      <div id='tableContainer'><table class='tableData' id='tableData'></table></div> \
    </div> \
  ");
  for (var i = 0; i < Object.keys(salesQuantity).length; i++) {
    var productLine = '<tr> \
                        <td>' + (i + 1) + '</td> \
                        <td>' + salesExchange[Object.keys(salesQuantity)[i]].toFixed(2) + '</td> \
                        <td>'+ Object.keys(salesQuantity)[i] +'</td> \
                        <td>' + salesQuantity[Object.keys(salesQuantity)[i]].toFixed(2) + '</td> \
                        <td>' + salesReturn[Object.keys(salesQuantity)[i]].toFixed(2) + '</td> \
                      </tr>';
    $("#tableData").append(productLine);
    // alert(Object.keys(salesQuantity)[0]);
  }
  $(".menuContainer").html("");
  $(".menuContainer").hide();
}

$('input#connection-save').on('click', function() {
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

$('input#connection-load').on('click', function() {
  loadLoginData();
  alert('Данные загружены');
});

this.loadLoginData = function() {
  dbName = localStorage.getItem('dbName');
  dbUser = localStorage.getItem('dbUser');
  dbPassword = localStorage.getItem('dbPassword');
  login = localStorage.getItem('login');
  password = localStorage.getItem('password');
}

$('input#report-sales-manager').on('click', function() {
  $.post('../php/receiveReportData.php', {dbName: dbName, dbUser: dbUser, dbPassword: dbPassword}, function(data) {
    tmp = JSON.parse(data);
    for (var i = 0; i < Object.keys(tmp).length; i++) {
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
                createObject(2, 1, i);
              }
            }
            if (tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
              if (key == "Редька по-восточному весовая") {
                createObject(1, 1, i);
              }
            }
          } else {
            if (key == tmp[i].Наименование) {
              createObject(0, 1, i);
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
              createObject(2, 0, i);
            }
            if (tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
              createObject(1, 0, i);
            }
          } else {
            createObject(0, 0, i);
          }
        }
      } else {
         if (tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
            tmp[i].Наименование == "Ким-ча 700 гр особая цена 2" ||
            tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
            tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
            if (tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
               tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
               createObject(2, 0, i);
            }
            if (tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
               tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
               createObject(1, 0, i);
            }
         } else {
           createObject(0, 0, i);
         }
      }
   }
    // if (Object.keys(salesQuantity).includes(tmp[i].Наименование)) {
    // alert(Object.keys(salesQuantity).length);
    // alert(salesQuantity["Щике"]);
    // $('div#connection-data').text(text);
    // var text = Object.entries(salesQuantity) + "\r\n" + Object.entries(salesExchange) + "\r\n" + Object.entries(salesReturn);
    // $('div#connection-data').text(text);
    renderReportTable();
  });
});

this.renderMenuPage = function() {
  $('div#connection-data').append(" \
    <div id='menuContainer' class='menuContainer'> \
      <div class='col-60'>" + local.dateStart + "</div><div class='col-40'><input type='text' id='dateStart'></div> \
      <div class='col-60'>" + local.dateEnd + "</div><div class='col-40'><input type='text' id='dateEnd'></div> \
      <div class='col-50'><input type='submit' id='report-ceo' value='Подробный отчет'></div> \
      <div class='col-50'><input type='submit' id='report-sales-manager' value='Краткий отчет'></div> \
    </div> \
    <script src='../js/loginAdmin.js' type='text/javascript' ></script> \
  ");
  $(".loginContainer").html("");
  $(".loginContainer").hide();
}
