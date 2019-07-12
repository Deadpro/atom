var reportsLocalVars = {
  "itemNameLabel" : "Номенклатура",
  "itemPriceLabel" : "Цена",
  "salesQuantityLabel" : "Кол-во",
  "sumLabel" : "Сумма",
  "exchangeQuantityLabel" : "Обмен",
  "returnQuantityLabel" : "Возврат",
  "IDLabel" : "№",
  "totalLabel" : "Сумма",
  "dateStartLabel" : "Начало периода:",
  "dateEndLabel" : "Конец периода:",
  "reportSubjectHeadSalesManagerLabel" : "Краткий отчет за период:",
  "reportSubjectHeadCEOLabel" : "Подробный отчет за период:",
  "reportSubjectDashLabel" : "---",
  "reportSubjectDash" : "",
  "totalExchangeWeightLabel" : "Всего обменов весовой (кг)",
  "totalReturnWeightLabel" : "Всего возвратов весовой (кг)",
  "totalExchangeQuantityLabel" : "Всего обменов в пачках (шт)",
  "totalReturnQuantityLabel" : "Всего возвратов в пачках (шт)",
  "totalExchangeSumLabel" : "Всего обменов",
  "totalReturnSumLabel" : "Всего возвратов",
  "totalSalesWeightLabel" : "Всего продаж весовой (кг)",
  "totalSalesQuantityLabel" : "Всего продаж в пачках (шт)",
  "totalSalesSumLabel" : "Всего продаж",
  "choosePeriodLabel" : "Выберите период",
  "quantity" : 0,
  "exchangeQuantity" : 0,
  "returnQuantity" : 0,
  "total" : 0,
  "salesQuantity" : new Object(),
  "salesExchange" : new Object(),
  "salesReturn" : new Object(),
  "salesTotal" : new Object(),
  "tmp" : new Object(),
  "tmpName" : "",
  "tmpQuantity" : 0,
  "tmpExchange" : 0,
  "tmpReturn" : 0,
  "text" : "",
  "trigger" : false,
  "dateStart" : "",
  "dateEnd" : "",
  "tmpTotal" : 0,
  "reportSubjectHead" : "",
  "reportSubjectDash" : "",
  "totalExchangeQuantity" : 0,
  "totalReturnQuantity" : 0,
  "totalExchangeQuantitySum" : 0,
  "totalReturnQuantitySum" : 0,
  "totalExchangeWeight" : 0,
  "totalReturnWeight" : 0,
  "totalExchangeWeightSum" : 0,
  "totalReturnWeightSum" : 0,
  "totalExchangeSum" : 0,
  "totalReturnSum" : 0,
  "totalSalesQuantity" : 0,
  "totalSalesQuantitySum" : 0,
  "totalSalesWeight" : 0,
  "totalSalesWeightSum" : 0,
  "totalSalesSum" : 0,
  "dateControl" : document.querySelector('input[type="date"]')
};

$('#reports').on('click', function() {
  renderMenuPage();
});

$('#report-sales-manager').on('click', function() {
  reportsLocalVars.dateStart = $('input#dateStart').val();
  reportsLocalVars.dateEnd = $('input#dateEnd').val();
  $.post('../php/receiveReportData.php', {dbName: localStorage.getItem('dbName'), dbUser: localStorage.getItem('dbUser'),
                                          dbPassword: localStorage.getItem('dbPassword'), dateStart: reportsLocalVars.dateStart, dateEnd: reportsLocalVars.dateEnd}, function(data) {
    reportsLocalVars.tmp = JSON.parse(data);
    for (var i = 0; i < Object.keys(reportsLocalVars.tmp).length; i++) {
      reportsLocalVars.trigger = false;
      if (Object.keys(reportsLocalVars.salesQuantity).length > 0) {
        for (var key in reportsLocalVars.salesQuantity) {
          // if (salesQuantity.hasOwnProperty(tmp[i].Наименование)) {
          if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
              reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2" ||
              reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
              reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
            if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
              if (key == "Ким-ча весовая") {
                createObject(2, 1, i, 0);
              }
            }
            if (reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
              if (key == "Редька по-восточному весовая") {
                createObject(1, 1, i, 0);
              }
            }
          } else {
            if (key == reportsLocalVars.tmp[i].Наименование) {
              createObject(0, 1, i, 0);
            }
          }
        }
        if (reportsLocalVars.trigger == false) {
        // if (!(tmp[i].Наименование in salesQuantity)) {
          if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
              reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2" ||
              reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
              reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
            if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
              createObject(2, 0, i, 0);
            }
            if (reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
              createObject(1, 0, i, 0);
            }
          } else {
            createObject(0, 0, i, 0);
          }
        }
      } else {
         if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
            reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2" ||
            reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
            reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
            if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
               reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
               createObject(2, 0, i, 0);
            }
            if (reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
               reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
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
  reportsLocalVars.dateStart = $('input#dateStart').val();
  reportsLocalVars.dateEnd = $('input#dateEnd').val();
  $.post('../php/receiveReportData.php', {dbName: localStorage.getItem('dbName'), dbUser: localStorage.getItem('dbUser'),
                                          dbPassword: localStorage.getItem('dbPassword'), dateStart: reportsLocalVars.dateStart, dateEnd: reportsLocalVars.dateEnd}, function(data) {
    reportsLocalVars.tmp = JSON.parse(data);
    for (var i = 0; i < Object.keys(reportsLocalVars.tmp).length; i++) {
      reportsLocalVars.trigger = false;
      if (Object.keys(reportsLocalVars.salesQuantity).length > 0) {
        for (var key in reportsLocalVars.salesQuantity) {
          // if (salesQuantity.hasOwnProperty(tmp[i].Наименование)) {
          if (key == reportsLocalVars.tmp[i].Наименование + " " + reportsLocalVars.tmp[i].Price) {
            createObject(0, 1, i, 1);
          }
        }
        if (reportsLocalVars.trigger == false) {
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

this.createObject = function(paramOne, paramTwo, paramThree, paramFour) {
  // alert('start: ' + paramOne + "; " + paramTwo + "; " + trigger + "; " + Object.keys(salesQuantity).length);
  if (reportsLocalVars.tmp[paramThree].Наименование == "Ким-ча 700 гр особая цена 1" ||
      reportsLocalVars.tmp[paramThree].Наименование == "Ким-ча 700 гр особая цена 2" ||
      reportsLocalVars.tmp[paramThree].Наименование == "Редька по-восточному 500гр особая цена 1" ||
      reportsLocalVars.tmp[paramThree].Наименование == "Редька по-восточному 500гр особая цена 2" ||
      reportsLocalVars.tmp[paramThree].Наименование == "Ким-ча весовая" ||
      reportsLocalVars.tmp[paramThree].Наименование == "Редька по-восточному весовая") {
    if (reportsLocalVars.tmp[paramThree].Наименование == "Ким-ча 700 гр особая цена 1" ||
        reportsLocalVars.tmp[paramThree].Наименование == "Ким-ча 700 гр особая цена 2") {
      reportsLocalVars.totalExchangeWeight += parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity * 0.7);
      reportsLocalVars.totalExchangeWeightSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity);
      reportsLocalVars.totalExchangeSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity);

      reportsLocalVars.totalReturnWeight += parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity * 0.7);
      reportsLocalVars.totalReturnWeightSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity);
      reportsLocalVars.totalReturnSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity);

      reportsLocalVars.totalSalesWeight += parseFloat(reportsLocalVars.tmp[paramThree].Quantity * 0.7);
      reportsLocalVars.totalSalesWeightSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].Quantity);
      reportsLocalVars.totalSalesSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].Quantity);
    }
    if (reportsLocalVars.tmp[paramThree].Наименование == "Редька по-восточному 500гр особая цена 1" ||
        reportsLocalVars.tmp[paramThree].Наименование == "Редька по-восточному 500гр особая цена 2") {
          reportsLocalVars.totalExchangeWeight += parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity * 0.5);
          reportsLocalVars.totalExchangeWeightSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity);
          reportsLocalVars.totalExchangeSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity);

          reportsLocalVars.totalReturnWeight += parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity * 0.5);
          reportsLocalVars.totalReturnWeightSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity);
          reportsLocalVars.totalReturnSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity);

          reportsLocalVars.totalSalesWeight += parseFloat(reportsLocalVars.tmp[paramThree].Quantity * 0.5);
          reportsLocalVars.totalSalesWeightSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].Quantity);
          reportsLocalVars.totalSalesSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].Quantity);
    }
    if (reportsLocalVars.tmp[paramThree].Наименование == "Ким-ча весовая" ||
        reportsLocalVars.tmp[paramThree].Наименование == "Редька по-восточному весовая") {
          reportsLocalVars.totalExchangeWeight += parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity);
          reportsLocalVars.totalExchangeWeightSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity);
          reportsLocalVars.totalExchangeSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity);

          reportsLocalVars.totalReturnWeight += parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity);
          reportsLocalVars.totalReturnWeightSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity);
          reportsLocalVars.totalReturnSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity);

          reportsLocalVars.totalSalesWeight += parseFloat(reportsLocalVars.tmp[paramThree].Quantity);
          reportsLocalVars.totalSalesWeightSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].Quantity);
          reportsLocalVars.totalSalesSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].Quantity);
    }
  } else {
    reportsLocalVars.totalExchangeQuantity += parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity);
    reportsLocalVars.totalExchangeQuantitySum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity);
    reportsLocalVars.totalExchangeSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity);

    reportsLocalVars.totalReturnQuantity += parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity);
    reportsLocalVars.totalReturnQuantitySum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity);
    reportsLocalVars.totalReturnSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity);

    reportsLocalVars.totalSalesQuantity += parseFloat(reportsLocalVars.tmp[paramThree].Quantity);
    reportsLocalVars.totalSalesQuantitySum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].Quantity);
    reportsLocalVars.totalSalesSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].Quantity);
  }

  if (paramOne == 0) {
    // alert(0 + ": " + paramOne);
    reportsLocalVars.tmpName = reportsLocalVars.tmp[paramThree].Наименование;
    reportsLocalVars.tmpQuantity = reportsLocalVars.tmp[paramThree].Quantity;
    reportsLocalVars.tmpPrice = reportsLocalVars.tmp[paramThree].Price;
    if (paramFour == 1) {
      reportsLocalVars.tmpName = reportsLocalVars.tmp[paramThree].Наименование  + " " + reportsLocalVars.tmpPrice;
    }
    reportsLocalVars.tmpTotal = reportsLocalVars.tmpQuantity * reportsLocalVars.tmpPrice;
    reportsLocalVars.tmpExchange = reportsLocalVars.tmp[paramThree].ExchangeQuantity;
    reportsLocalVars.tmpReturn = reportsLocalVars.tmp[paramThree].ReturnQuantity;
  }
  if (paramOne == 1) {
    // alert(1);
    reportsLocalVars.tmpName = "Редька по-восточному весовая";
    reportsLocalVars.tmpQuantity = reportsLocalVars.tmp[paramThree].Quantity * 0.5;
    reportsLocalVars.tmpExchange = reportsLocalVars.tmp[paramThree].ExchangeQuantity * 0.5;
    reportsLocalVars.tmpReturn = reportsLocalVars.tmp[paramThree].ReturnQuantity * 0.5;
  }
  if (paramOne == 2) {
    // alert(2);
    reportsLocalVars.tmpName = "Ким-ча весовая";
    reportsLocalVars.tmpQuantity = reportsLocalVars.tmp[paramThree].Quantity * 0.7;
    reportsLocalVars.tmpExchange = reportsLocalVars.tmp[paramThree].ExchangeQuantity * 0.7;
    reportsLocalVars.tmpReturn = reportsLocalVars.tmp[paramThree].ReturnQuantity * 0.7;
  }
  if (paramTwo == 0) {
    // alert(00);
    reportsLocalVars.quantity = parseFloat(reportsLocalVars.tmpQuantity, 10);
    reportsLocalVars.exchangeQuantity = parseFloat(reportsLocalVars.tmpExchange, 10);
    reportsLocalVars.returnQuantity = parseFloat(reportsLocalVars.tmpReturn, 10);
    reportsLocalVars.total = parseFloat(reportsLocalVars.tmpTotal, 10);
    Object.defineProperty(reportsLocalVars.salesQuantity, reportsLocalVars.tmpName, {
       value: reportsLocalVars.quantity,
       writable: true,
       enumerable: true,
       configurable: true
    });
    Object.defineProperty(reportsLocalVars.salesExchange, reportsLocalVars.tmpName, {
       value: reportsLocalVars.exchangeQuantity,
       writable: true,
       enumerable: true,
       configurable: true
    });
    Object.defineProperty(reportsLocalVars.salesReturn, reportsLocalVars.tmpName, {
       value: reportsLocalVars.returnQuantity,
       writable: true,
       enumerable: true,
       configurable: true
    });
    Object.defineProperty(reportsLocalVars.salesTotal, reportsLocalVars.tmpName, {
       value: reportsLocalVars.total,
       writable: true,
       enumerable: true,
       configurable: true
    });
  }
  if (paramTwo == 1) {
    // alert(01);
    reportsLocalVars.quantity = parseFloat(reportsLocalVars.salesQuantity[reportsLocalVars.tmpName], 10) + parseFloat(reportsLocalVars.tmpQuantity, 10);
    reportsLocalVars.exchangeQuantity = parseFloat(reportsLocalVars.salesExchange[reportsLocalVars.tmpName], 10) + parseFloat(reportsLocalVars.tmpExchange, 10);
    reportsLocalVars.returnQuantity = parseFloat(reportsLocalVars.salesReturn[reportsLocalVars.tmpName], 10) + parseFloat(reportsLocalVars.tmpReturn, 10);
    reportsLocalVars.total = parseFloat(reportsLocalVars.salesTotal[reportsLocalVars.tmpName], 10) + parseFloat(reportsLocalVars.tmpTotal, 10);
    // text += tmpName + ": " + quantity + " = " + parseFloat(salesQuantity[tmpName], 10) + " + " + parseFloat(tmpQuantity, 10) + "\r\n";
    reportsLocalVars.salesQuantity[reportsLocalVars.tmpName] = reportsLocalVars.quantity;
    reportsLocalVars.salesExchange[reportsLocalVars.tmpName] = reportsLocalVars.exchangeQuantity;
    reportsLocalVars.salesReturn[reportsLocalVars.tmpName] = reportsLocalVars.returnQuantity;
    reportsLocalVars.salesTotal[reportsLocalVars.tmpName] = reportsLocalVars.total;
    reportsLocalVars.trigger = true;
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

this.renderMenuPage = function() {
  $('div#connection-data').html("");
  $('div#connection-data').append(" \
    <div id='reportMenuContainer' class='reportMenuContainer'> \
      <div class='panel panel-custom border'> \
        <div class='panel-heading col-100'><span>" + reportsLocalVars.choosePeriodLabel + "</span></div> \
        <div class='panel-body'> \
          <div class='col-60'>" + reportsLocalVars.dateStartLabel + "</div><div class='col-40'><input type='date' id='dateStart'></div> \
          <div class='col-60'>" + reportsLocalVars.dateEndLabel + "</div><div class='col-40'><input type='date' id='dateEnd'></div> \
        </div> \
      </div> \
      <div class='panel panel-custom border'> \
        <div class='panel-body'> \
          <div class='col-50'><input type='submit' id='report-ceo' value='Подробный отчет'></div> \
          <div class='col-50'><input type='submit' id='report-sales-manager' value='Краткий отчет'></div> \
        </div> \
      </div> \
    </div> \
    <script src='../js/reports.js' type='text/javascript' ></script> \
  ");
  if (reportsLocalVars.dateStart != "" && reportsLocalVars.dateEnd != "") {
     $('input#dateStart').val(reportsLocalVars.dateStart);
     $('input#dateEnd').val(reportsLocalVars.dateEnd);
  }
  $(".loginContainer").html("");
  $(".loginContainer").hide();
}

this.renderReportTable = function(param)	{
  if ($.trim(reportsLocalVars.dateStart) != '' && $.trim(reportsLocalVars.dateEnd) != '') {
    if (param == 0) {
      reportsLocalVars.reportSubjectHead = reportsLocalVars.reportSubjectHeadSalesManagerLabel;
      reportsLocalVars.reportSubjectDash = reportsLocalVars.reportSubjectDashLabel;
    } else {
      reportsLocalVars.reportSubjectHead = reportsLocalVars.reportSubjectHeadCEOLabel;
      reportsLocalVars.reportSubjectDash = reportsLocalVars.reportSubjectDashLabel;
    }
  } else {
    if (param == 0) {
      reportsLocalVars.reportSubjectHead = "Краткий отчет за последние 5 дней";
    } else {
      reportsLocalVars.reportSubjectHead = "Подробный отчет за последние 5 дней";
    }
    reportsLocalVars.reportSubjectDash = "";
  }
  $(".reportContainer").show();
  $('div#connection-data').append(" \
    <div id='reportContainer' class='reportContainer'> \
      <a id='close' href='#' onclick='closeReportTable();'> \
        <div class='reportSubject' style='float:left'>" + reportsLocalVars.reportSubjectHead + ' ' + reportsLocalVars.dateStart + ' ' + reportsLocalVars.reportSubjectDash + ' ' + reportsLocalVars.dateEnd + "</div> \
        <img width='30px' style='float:right' src='../images/icons/black-close-icon-3.png' /> \
      </a> \
      <div id='tableContainer'><table class='tableData' id='tableData'></table></div> \
      <div id='tableSummaryHeader'><table id='tableSummaryHeaderData'></table></div> \
      <div id='tableSummaryContainer'><table id='tableSummaryData'></table></div><br /> \
      <button id='button-a'>Сохранить файл</button> \
    </div> \
  ");
  var tableHeaderRow = '<tbody><tr> \
                      <td>' + reportsLocalVars.IDLabel + '</td> \
                      <td>' + reportsLocalVars.exchangeQuantityLabel + '</td> \
                      <td>' + reportsLocalVars.itemNameLabel + '</td> \
                      <td>' + reportsLocalVars.salesQuantityLabel + '</td> \
                      <td>' + reportsLocalVars.totalLabel + '</td> \
                      <td>' + reportsLocalVars.returnQuantityLabel + '</td> \
                    </tr></tbody>';
  var triggerHeader = true;
  for (var i = 0; i < Object.keys(reportsLocalVars.salesQuantity).length; i++) {
    var productLine = '<tbody><tr> \
                        <td>' + (i + 1) + '</td> \
                        <td>' + reportsLocalVars.salesExchange[Object.keys(reportsLocalVars.salesQuantity)[i]].toFixed(2) + '</td> \
                        <td>'+ Object.keys(reportsLocalVars.salesQuantity)[i] +'</td> \
                        <td>' + reportsLocalVars.salesQuantity[Object.keys(reportsLocalVars.salesQuantity)[i]].toFixed(2) + '</td> \
                        <td>' + reportsLocalVars.salesTotal[Object.keys(reportsLocalVars.salesTotal)[i]].toFixed(2) + '</td> \
                        <td>' + reportsLocalVars.salesReturn[Object.keys(reportsLocalVars.salesQuantity)[i]].toFixed(2) + '</td> \
                      </tr></tbody>';
    if (triggerHeader == true) {
      $("#tableData").append(tableHeaderRow);
      triggerHeader = false;
    }
    $("#tableData").append(productLine);
    // alert(Object.keys(salesQuantity)[0]);
  }
  $("#tableData").append("<script type='text/javascript' src='../js/createexcel.js'></script>")
  $("#tableSummaryHeaderData").append(" \
    <tr> \
      <td></td> \
      <td>" + reportsLocalVars.salesQuantityLabel + "</td> \
      <td>" + reportsLocalVars.sumLabel + "</td> \
    </tr><tr class='tableSeparator'></tr>\
  ");
  $("#tableSummaryData").append(" \
    <tr> \
      <td>" + reportsLocalVars.totalExchangeQuantityLabel + "</td> \
      <td>" + reportsLocalVars.totalExchangeQuantity.toFixed(2) + "</td> \
      <td>" + reportsLocalVars.totalExchangeQuantitySum.toFixed(2) + "</td> \
    </tr> \
    <tr> \
      <td>" + reportsLocalVars.totalExchangeWeightLabel + "</td> \
      <td>" + reportsLocalVars.totalExchangeWeight.toFixed(2) + "</td> \
      <td>" + reportsLocalVars.totalExchangeWeightSum.toFixed(2) + "</td> \
    </tr> \
    <tr> \
      <td>" + reportsLocalVars.totalExchangeSumLabel + "</td> \
      <td></td> \
      <td>" + reportsLocalVars.totalExchangeSum.toFixed(2) + "</td> \
    </tr> <tr class='tableSeparator'></tr>\
    <tr> \
      <td>" + reportsLocalVars.totalReturnQuantityLabel + "</td> \
      <td>" + reportsLocalVars.totalReturnQuantity.toFixed(2) + "</td> \
      <td>" + reportsLocalVars.totalReturnQuantitySum.toFixed(2) + "</td> \
    </tr> \
    <tr> \
      <td>" + reportsLocalVars.totalReturnWeightLabel + "</td> \
      <td>" + reportsLocalVars.totalReturnWeight.toFixed(2) + "</td> \
      <td>" + reportsLocalVars.totalReturnWeightSum.toFixed(2) + "</td> \
    </tr> \
    <tr> \
      <td>" + reportsLocalVars.totalReturnSumLabel + "</td> \
      <td></td> \
      <td>" + reportsLocalVars.totalReturnSum.toFixed(2) + "</td> \
    </tr> <tr class='tableSeparator'></tr>\
    <tr> \
      <td>" + reportsLocalVars.totalSalesQuantityLabel + "</td> \
      <td>" + reportsLocalVars.totalSalesQuantity.toFixed(2) + "</td> \
      <td>" + reportsLocalVars.totalSalesQuantitySum.toFixed(2) + "</td> \
    </tr> \
    <tr> \
      <td>" + reportsLocalVars.totalSalesWeightLabel + "</td> \
      <td>" + reportsLocalVars.totalSalesWeight.toFixed(2) + "</td> \
      <td>" + reportsLocalVars.totalSalesWeightSum.toFixed(2) + "</td> \
    </tr> \
    <tr> \
      <td>" + reportsLocalVars.totalSalesSumLabel + "</td> \
      <td></td> \
      <td>" + reportsLocalVars.totalSalesSum.toFixed(2) + "</td> \
    </tr> \
  ");
  $(".reportMenuContainer").html("");
  $(".reportMenuContainer").hide();
}
