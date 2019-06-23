var local = {
  "name" : "Номенклатура",
  "price" : "Цена",
  "quantity" : "Кол-во",
  "sum" : "Сумма",
  "exchangeQuantity" : "Обмен",
  "returnQuantity" : "Возврат",
  "ID" : "№",
  "total" : "Сумма",
  "dateStart" : "Начало (год-месяц-день часы:минуты):",
  "dateEnd" : "Конец (год-месяц-день часы:минуты):",
  "reportSubjectHeadSalesManager" : "Краткий отчет за период:",
  "reportSubjectHeadCEO" : "Подробный отчет за период:",
  "reportSubjectDash" : "---",
  "totalExchangeWeight" : "Всего обменов весовой (кг)",
  "totalReturnWeight" : "Всего возвратов весовой (кг)",
  "totalExchangeQuantity" : "Всего обменов в пачках (шт)",
  "totalReturnQuantity" : "Всего возвратов в пачках (шт)",
  "totalExchangeSum" : "Всего обменов",
  "totalReturnSum" : "Всего возвратов",
  "totalSalesWeight" : "Всего продаж весовой (кг)",
  "totalSalesQuantity" : "Всего продаж в пачках (шт)",
  "totalSalesSum" : "Всего продаж",
  "choosePeriod" : "Выберите период"
};
var quantity = 0;
var exchangeQuantity = 0;
var returnQuantity = 0;
var total = 0;
var salesQuantity = new Object();
var salesExchange = new Object();
var salesReturn = new Object();
var salesTotal = new Object();
var tmpName;
var tmpQuantity;
var tmpExchange;
var tmpReturn;
var text = "";
var trigger = false;
var tmp = new Object();
var dateStart;
var dateEnd;
var tmpTotal = 0;
var reportSubjectHead;
var reportSubjectDash;
var totalExchangeQuantity = 0;
var totalReturnQuantity = 0;
var totalExchangeQuantitySum = 0;
var totalReturnQuantitySum = 0;
var totalExchangeWeight = 0;
var totalReturnWeight = 0;
var totalExchangeWeightSum = 0;
var totalReturnWeightSum = 0;
var totalExchangeSum = 0;
var totalReturnSum = 0;
var totalSalesQuantity = 0;
var totalSalesQuantitySum = 0;
var totalSalesWeight = 0;
var totalSalesWeightSum = 0;
var totalSalesSum = 0;

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

this.login = function(dbName, dbUser, dbPassword, login, password) {
   $.post('../ajax/loginAdmin.php', {dbName: dbName, dbUser: dbUser,
                                     dbPassword: dbPassword, login: login,
                                     password: password}, function(data) {
     // $('div#connection-data').text(data);
     if (data == 'Успешный вход') {
       renderMenuPage();
     }
   });
}

this.createObject = function(paramOne, paramTwo, paramThree, paramFour) {
  // alert('start: ' + paramOne + "; " + paramTwo + "; " + trigger + "; " + Object.keys(salesQuantity).length);
  if (tmp[paramThree].Наименование == "Ким-ча 700 гр особая цена 1" ||
      tmp[paramThree].Наименование == "Ким-ча 700 гр особая цена 2" ||
      tmp[paramThree].Наименование == "Редька по-восточному 500гр особая цена 1" ||
      tmp[paramThree].Наименование == "Редька по-восточному 500гр особая цена 2" ||
      tmp[paramThree].Наименование == "Ким-ча весовая" ||
      tmp[paramThree].Наименование == "Редька по-восточному весовая") {
    if (tmp[paramThree].Наименование == "Ким-ча 700 гр особая цена 1" ||
        tmp[paramThree].Наименование == "Ким-ча 700 гр особая цена 2") {
      totalExchangeWeight += parseFloat(tmp[paramThree].ExchangeQuantity * 0.7);
      totalExchangeWeightSum += parseFloat(tmp[paramThree].Price) * parseFloat(tmp[paramThree].ExchangeQuantity);
      totalExchangeSum += parseFloat(tmp[paramThree].Price) * parseFloat(tmp[paramThree].ExchangeQuantity);

      totalReturnWeight += parseFloat(tmp[paramThree].ReturnQuantity * 0.7);
      totalReturnWeightSum += parseFloat(tmp[paramThree].Price) * parseFloat(tmp[paramThree].ReturnQuantity);
      totalReturnSum += parseFloat(tmp[paramThree].Price) * parseFloat(tmp[paramThree].ReturnQuantity);

      totalSalesWeight += parseFloat(tmp[paramThree].Quantity * 0.7);
      totalSalesWeightSum += parseFloat(tmp[paramThree].Price) * parseFloat(tmp[paramThree].Quantity);
      totalSalesSum += parseFloat(tmp[paramThree].Price) * parseFloat(tmp[paramThree].Quantity);
    }
    if (tmp[paramThree].Наименование == "Редька по-восточному 500гр особая цена 1" ||
        tmp[paramThree].Наименование == "Редька по-восточному 500гр особая цена 2") {
          totalExchangeWeight += parseFloat(tmp[paramThree].ExchangeQuantity * 0.5);
          totalExchangeWeightSum += parseFloat(tmp[paramThree].Price) * parseFloat(tmp[paramThree].ExchangeQuantity);
          totalExchangeSum += parseFloat(tmp[paramThree].Price) * parseFloat(tmp[paramThree].ExchangeQuantity);

          totalReturnWeight += parseFloat(tmp[paramThree].ReturnQuantity * 0.5);
          totalReturnWeightSum += parseFloat(tmp[paramThree].Price) * parseFloat(tmp[paramThree].ReturnQuantity);
          totalReturnSum += parseFloat(tmp[paramThree].Price) * parseFloat(tmp[paramThree].ReturnQuantity);

          totalSalesWeight += parseFloat(tmp[paramThree].Quantity * 0.5);
          totalSalesWeightSum += parseFloat(tmp[paramThree].Price) * parseFloat(tmp[paramThree].Quantity);
          totalSalesSum += parseFloat(tmp[paramThree].Price) * parseFloat(tmp[paramThree].Quantity);
    }
    if (tmp[paramThree].Наименование == "Ким-ча весовая" ||
        tmp[paramThree].Наименование == "Редька по-восточному весовая") {
          totalExchangeWeight += parseFloat(tmp[paramThree].ExchangeQuantity);
          totalExchangeWeightSum += parseFloat(tmp[paramThree].Price) * parseFloat(tmp[paramThree].ExchangeQuantity);
          totalExchangeSum += parseFloat(tmp[paramThree].Price) * parseFloat(tmp[paramThree].ExchangeQuantity);

          totalReturnWeight += parseFloat(tmp[paramThree].ReturnQuantity);
          totalReturnWeightSum += parseFloat(tmp[paramThree].Price) * parseFloat(tmp[paramThree].ReturnQuantity);
          totalReturnSum += parseFloat(tmp[paramThree].Price) * parseFloat(tmp[paramThree].ReturnQuantity);

          totalSalesWeight += parseFloat(tmp[paramThree].Quantity);
          totalSalesWeightSum += parseFloat(tmp[paramThree].Price) * parseFloat(tmp[paramThree].Quantity);
          totalSalesSum += parseFloat(tmp[paramThree].Price) * parseFloat(tmp[paramThree].Quantity);
    }
  } else {
    totalExchangeQuantity += parseFloat(tmp[paramThree].ExchangeQuantity);
    totalExchangeQuantitySum += parseFloat(tmp[paramThree].Price) * parseFloat(tmp[paramThree].ExchangeQuantity);
    totalExchangeSum += parseFloat(tmp[paramThree].Price) * parseFloat(tmp[paramThree].ExchangeQuantity);

    totalReturnQuantity += parseFloat(tmp[paramThree].ReturnQuantity);
    totalReturnQuantitySum += parseFloat(tmp[paramThree].Price) * parseFloat(tmp[paramThree].ReturnQuantity);
    totalReturnSum += parseFloat(tmp[paramThree].Price) * parseFloat(tmp[paramThree].ReturnQuantity);

    totalSalesQuantity += parseFloat(tmp[paramThree].Quantity);
    totalSalesQuantitySum += parseFloat(tmp[paramThree].Price) * parseFloat(tmp[paramThree].Quantity);
    totalSalesSum += parseFloat(tmp[paramThree].Price) * parseFloat(tmp[paramThree].Quantity);
  }

  if (paramOne == 0) {
    // alert(0 + ": " + paramOne);
    tmpName = tmp[paramThree].Наименование;
    tmpQuantity = tmp[paramThree].Quantity;
    tmpPrice = tmp[paramThree].Price;
    if (paramFour == 1) {
      tmpName = tmp[paramThree].Наименование  + " " + tmpPrice;
    }
    tmpTotal = tmpQuantity * tmpPrice;
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
  }
  if (paramTwo == 0) {
    // alert(00);
    quantity = parseFloat(tmpQuantity, 10);
    exchangeQuantity = parseFloat(tmpExchange, 10);
    returnQuantity = parseFloat(tmpReturn, 10);
    total = parseFloat(tmpTotal, 10);
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
    Object.defineProperty(salesTotal, tmpName, {
       value: total,
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
    total = parseFloat(salesTotal[tmpName], 10) + parseFloat(tmpTotal, 10);
    // text += tmpName + ": " + quantity + " = " + parseFloat(salesQuantity[tmpName], 10) + " + " + parseFloat(tmpQuantity, 10) + "\r\n";
    salesQuantity[tmpName] = quantity;
    salesExchange[tmpName] = exchangeQuantity;
    salesReturn[tmpName] = returnQuantity;
    salesTotal[tmpName] = total;
    trigger = true;
  }
}

this.closeReportTable = function() {
  $(".reportContainer").html("");
  $(".reportContainer").hide();
  $("#connection-data").html("");
  $(".menuContainer").show();
  // loadLoginData();
  renderMenuPage();
}

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

this.loadLoginData = function() {
  if ($.trim(localStorage.getItem('dbName')) != '' && $.trim(localStorage.getItem('dbUser')) != '' &&
      $.trim(localStorage.getItem('dbPassword')) != '' && $.trim(localStorage.getItem('login')) != '' &&
      $.trim(localStorage.getItem('password')) != '') {
    alert('Данные загружены');
  } else {
    alert('Нет данных. Заполните поля для авторизации');
  }
}

$('#report-sales-manager').on('click', function() {
  dateStart = $('input#dateStart').val();
  dateEnd = $('input#dateEnd').val();
  $.post('../php/receiveReportData.php', {dbName: localStorage.getItem('dbName'), dbUser: localStorage.getItem('dbUser'),
                                          dbPassword: localStorage.getItem('dbPassword'), dateStart: dateStart, dateEnd: dateEnd}, function(data) {
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
                createObject(2, 1, i, 0);
              }
            }
            if (tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
              if (key == "Редька по-восточному весовая") {
                createObject(1, 1, i, 0);
              }
            }
          } else {
            if (key == tmp[i].Наименование) {
              createObject(0, 1, i, 0);
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
              createObject(2, 0, i, 0);
            }
            if (tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
              createObject(1, 0, i, 0);
            }
          } else {
            createObject(0, 0, i, 0);
          }
        }
      } else {
         if (tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
            tmp[i].Наименование == "Ким-ча 700 гр особая цена 2" ||
            tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
            tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
            if (tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
               tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
               createObject(2, 0, i, 0);
            }
            if (tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
               tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
               createObject(1, 0, i, 0);
            }
         } else {
           createObject(0, 0, i, 0);
         }
      }
   }
    // if (Object.keys(salesQuantity).includes(tmp[i].Наименование)) {
    // alert(Object.keys(salesQuantity).length);
    // alert(salesQuantity["Щике"]);
    // $('div#connection-data').text(text);
    // var text = Object.entries(salesQuantity) + "\r\n" + Object.entries(salesExchange) + "\r\n" + Object.entries(salesReturn);
    // $('div#connection-data').text(text);
    renderReportTable(0);
  });
});

$('#report-ceo').on('click', function() {
  dateStart = $('input#dateStart').val();
  dateEnd = $('input#dateEnd').val();
  $.post('../php/receiveReportData.php', {dbName: localStorage.getItem('dbName'), dbUser: localStorage.getItem('dbUser'),
                                          dbPassword: localStorage.getItem('dbPassword'), dateStart: dateStart, dateEnd: dateEnd}, function(data) {
    tmp = JSON.parse(data);
    for (var i = 0; i < Object.keys(tmp).length; i++) {
      trigger = false;
      if (Object.keys(salesQuantity).length > 0) {
        for (var key in salesQuantity) {
          // if (salesQuantity.hasOwnProperty(tmp[i].Наименование)) {
          if (key == tmp[i].Наименование + " " + tmp[i].Price) {
            createObject(0, 1, i, 1);
          }
        }
        if (trigger == false) {
          createObject(0, 0, i, 1);
        }
      } else {
        createObject(0, 0, i, 1);
      }
   }
    // if (Object.keys(salesQuantity).includes(tmp[i].Наименование)) {
    // alert(Object.keys(salesQuantity).length);
    // alert(salesQuantity["Щике"]);
    // $('div#connection-data').text(text);
    // var text = Object.entries(salesQuantity) + "\r\n" + Object.entries(salesExchange) + "\r\n" + Object.entries(salesReturn);
    // $('div#connection-data').text(text);
    renderReportTable(1);
  });
});

this.renderReportTable = function(param)	{
  if ($.trim(dateStart) != '' && $.trim(dateEnd) != '') {
    if (param == 0) {
      reportSubjectHead = local.reportSubjectHeadSalesManager;
      reportSubjectDash = local.reportSubjectDash;
    } else {
      reportSubjectHead = local.reportSubjectHeadCEO;
      reportSubjectDash = local.reportSubjectDash;
    }
  } else {
    if (param == 0) {
      reportSubjectHead = "Краткий отчет за последние 5 дней";
    } else {
      reportSubjectHead = "Подробный отчет за последние 5 дней";
    }
    var reportSubjectDash = "";
  }
  $(".reportContainer").show();
  $('div#connection-data').append(" \
    <div id='reportContainer' class='reportContainer'> \
      <a id='close' href='#' onclick='closeReportTable();'> \
        <div class='reportSubject' style='float:left'>" + reportSubjectHead + ' ' + dateStart + ' ' + reportSubjectDash + ' ' + dateEnd + "</div> \
        <img width='30px' style='float:right' src='../images/icons/black-close-icon-3.png' /> \
      </a> \
      <table id='tableHeader'><tr><td>" + local.ID + "</td><td>" + local.exchangeQuantity + "</td><td>" + local.name + "</td><td>" + local.quantity + "</td><td>" + local.total + "</td><td>" + local.returnQuantity + "</td></tr></table> \
      <div id='tableContainer'><table class='tableData' id='tableData'></table></div> \
      <div id='tableSummaryHeader'><table id='tableSummaryHeaderData'></table></div> \
      <div id='tableSummaryContainer'><table id='tableSummaryData'></table></div><br /> \
      <button id='button-a'>Сохранить файл</button> \
    </div> \
    <script type='text/javascript' src='../js/createexcel.js'></script> \
  ");
  for (var i = 0; i < Object.keys(salesQuantity).length; i++) {
    var productLine = '<tbody><tr> \
                        <td>' + (i + 1) + '</td> \
                        <td>' + salesExchange[Object.keys(salesQuantity)[i]].toFixed(2) + '</td> \
                        <td>'+ Object.keys(salesQuantity)[i] +'</td> \
                        <td>' + salesQuantity[Object.keys(salesQuantity)[i]].toFixed(2) + '</td> \
                        <td>' + salesTotal[Object.keys(salesTotal)[i]].toFixed(2) + '</td> \
                        <td>' + salesReturn[Object.keys(salesQuantity)[i]].toFixed(2) + '</td> \
                      </tr></tbody>';
    $("#tableData").append(productLine);
    // alert(Object.keys(salesQuantity)[0]);
  }
  $("#tableData").append("<script type='text/javascript' src='../js/createexcel.js'></script>")
  $("#tableSummaryHeaderData").append(" \
    <tr> \
      <td></td> \
      <td>" + local.quantity + "</td> \
      <td>" + local.sum + "</td> \
    </tr><tr class='tableSeparator'></tr>\
  ");
  $("#tableSummaryData").append(" \
    <tr> \
      <td>" + local.totalExchangeQuantity + "</td> \
      <td>" + totalExchangeQuantity.toFixed(2) + "</td> \
      <td>" + totalExchangeQuantitySum.toFixed(2) + "</td> \
    </tr> \
    <tr> \
      <td>" + local.totalExchangeWeight + "</td> \
      <td>" + totalExchangeWeight.toFixed(2) + "</td> \
      <td>" + totalExchangeWeightSum.toFixed(2) + "</td> \
    </tr> \
    <tr> \
      <td>" + local.totalExchangeSum + "</td> \
      <td></td> \
      <td>" + totalExchangeSum.toFixed(2) + "</td> \
    </tr> <tr class='tableSeparator'></tr>\
    <tr> \
      <td>" + local.totalReturnQuantity + "</td> \
      <td>" + totalReturnQuantity.toFixed(2) + "</td> \
      <td>" + totalReturnQuantitySum.toFixed(2) + "</td> \
    </tr> \
    <tr> \
      <td>" + local.totalReturnWeight + "</td> \
      <td>" + totalReturnWeight.toFixed(2) + "</td> \
      <td>" + totalReturnWeightSum.toFixed(2) + "</td> \
    </tr> \
    <tr> \
      <td>" + local.totalReturnSum + "</td> \
      <td></td> \
      <td>" + totalReturnSum.toFixed(2) + "</td> \
    </tr> <tr class='tableSeparator'></tr>\
    <tr> \
      <td>" + local.totalSalesQuantity + "</td> \
      <td>" + totalSalesQuantity.toFixed(2) + "</td> \
      <td>" + totalSalesQuantitySum.toFixed(2) + "</td> \
    </tr> \
    <tr> \
      <td>" + local.totalSalesWeight + "</td> \
      <td>" + totalSalesWeight.toFixed(2) + "</td> \
      <td>" + totalSalesWeightSum.toFixed(2) + "</td> \
    </tr> \
    <tr> \
      <td>" + local.totalSalesSum + "</td> \
      <td></td> \
      <td>" + totalSalesSum.toFixed(2) + "</td> \
    </tr> \
  ");
  $(".menuContainer").html("");
  $(".menuContainer").hide();
}

this.renderMenuPage = function() {
  $('div#connection-data').html("");
  $('div#connection-data').append(" \
    <div id='menuContainer' class='menuContainer'> \
      <div class='col-60'>" + local.dateStart + "</div><div class='col-40'><input type='text' id='dateStart'></div> \
      <div class='col-60'>" + local.dateEnd + "</div><div class='col-40'><input type='text' id='dateEnd'></div> \
      <div class='col-50'><input type='submit' id='report-ceo' value='Подробный отчет'></div> \
      <div class='col-50'><input type='submit' id='report-sales-manager' value='Краткий отчет'></div> \
    </div> \
    <script src='../js/loginAdmin.js' type='text/javascript' ></script> \
  ");
  if (dateStart != "" && dateEnd != "") {
     $('input#dateStart').val(dateStart);
     $('input#dateEnd').val(dateEnd);
  }
  $(".loginContainer").html("");
  $(".loginContainer").hide();
}
