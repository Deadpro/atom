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
  "reportSubjectHeadByNetCostLabel" : "Отчет относительно себестоимости:",
  "reportSubjectHeadCEOLabel" : "Подробный отчет за период:",
  "reportSubjectHeadByDayLabel" : "Сквозной отчет за период:",
  "reportSubjectHeadSalaryLabel" : "Расчетный лист за период: ",
  "reportSubjectDashLabel" : "---",
  "reportSubjectDash" : "",
  "totalNetWeightLabel" : "Чистая продажа вес",
  "totalNetQuantitySpecialLabel" : "Чистая продажа штучка (спец.категория)",
  "totalNetQuantityCanLabel" : "Чистая продажа ким-ча банка",
  "totalNetQuantityMustardLabel" : "Чистая продажа горчица",
  "totalNetQuantityOrdinaryLabel" : "Чистая продажа штучка (остальное)",
  "totalReturnLabel" : "Совокупный возврат",
  "totalSalaryLabel" : "Совокупный расчёт",
  "rateLabel" : "Кэф",
  "netQuantityLabel" : "Чистое",
  "salaryLabel" : "Зарплата",
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
  "chooseDayOfTheWeekLabel" : "Выберите день недели",
  "chooseAreaLable" : "Выберите район",
  "reportSubjectHeadPerDayLabel" : "Отчет по дням",
  "salary" : 0,
  "netQuantity" : 0,
  "quantity" : 0,
  "exchangeQuantity" : 0,
  "returnQuantity" : 0,
  "total" : 0,
  "totalNetCost" : 0,
  "exchangeSalaryLoss" : 0,
  "exchangeSalaryLossList" : new Object(),
  "netQuantityList" : new Object(),
  "salesQuantity" : new Object(),
  "salesExchange" : new Object(),
  "salesReturn" : new Object(),
  "salesTotal" : new Object(),
  "salesTotalNetCost" : new Object(),
  "tmp" : new Object(),
  "salesPartnersList" : new Object(),
  "agentSalaryRatesList" : new Object(),
  "agentSalaryRatesTmp" : new Object(),
  "salaryList" : new Object(),
  "tmpExchangeSalaryLoss" : 0,
  "tmpSalary" : 0,
  "tmpName" : "",
  "tmpNetQuantity" : 0,
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
  "totalNetWeight" : 0,
  "totalExchangeWeightLossSalary" : 0,
  "totalExchangeQuantityLossSalary" : 0,
  "totalReturnQuantityLossSalary" : 0,
  "totalReturnQuantityWeightLossSalary" : 0,
  "totalReturnWeightLossSalary" : 0,
  "totalNetQuantitySpecialSalary" : 0,
  "totalNetQuantityCanSalary" : 0,
  "totalNetQuantityMustardSalary" : 0,
  "totalNetQuantityOrdinarySalary" : 0,
  "totalNetWeightSalary" : 0,
  "totalSalary" : 0,
  "totalNetQuantitySpecial" : 0,
  "totalNetQuantityCan" : 0,
  "totalNetQuantityMustard" : 0,
  "totalNetQuantityOrdinary" : 0,
  "totalNetQuantity" : 0,
  "totalExchangeQuantity" : 0,
  "totalReturnQuantity" : 0,
  "totalExchangeQuantitySum" : 0,
  "totalExchangeQuantitySumNetCost" : 0,
  "totalReturnQuantitySum" : 0,
  "totalReturnQuantitySumNetCost" : 0,
  "totalExchangeWeight" : 0,
  "totalReturnWeight" : 0,
  "totalExchangeWeightSum" : 0,
  "totalExchangeWeightSumNetCost" : 0,
  "totalReturnWeightSum" : 0,
  "totalReturnWeightSumNetCost" : 0,
  "totalExchangeSum" : 0,
  "totalReturnSum" : 0,
  "totalExchangeSumNetCost" : 0,
  "totalReturnSumNetCost" : 0,
  "totalSalesQuantity" : 0,
  "totalSalesQuantitySum" : 0,
  "totalSalesQuantitySumNetCost" : 0,
  "totalSalesWeight" : 0,
  "totalSalesWeightSum" : 0,
  "totalSalesSum" : 0,
  "totalSalesWeightSumNetCost" : 0,
  "totalSalesSumNetCost" : 0,
  "dateControl" : document.querySelector('input[type="date"]'),
  "checkDayRadio" : ["checkDayOne", "checkDayTwo", "checkDayThree", "checkDayFour", "checkDayFive", "checkDaySix"],
  "checkedDayValue" : "",
  "checkAreaRadio" : ["checkAreaOne", "checkAreaTwo", "checkAreaThree", "checkAreaFour", "checkAreaFive", "checkAreaSeven"],
  "checkRootRadio" : ["checkRootMonday", "checkRootTuesday", "checkRootWendsday", "checkRootAny", "checkRootNorth"],
  "checkedAreaValue" : "",
  "radioCheckedAreaTrigger" : false,
  "radioCheckedDayTrigger" : false,
  "reportSubjectHeadCheckedDay" : "",
  "reportSubjectHeadCheckedArea" : "",
  "chooseSalesPartnerLable" : "Выберите магазин",
  "areaCurrentValue" : 0,
  "rootCurrentValue" : 0,
  "chooseRootLabel" : "Выберите маршрут",
  "areaTrigger" : false,
  "optionValue" : "",
  "checkSumErrorsTrigger" : true,
  "header" : "",
  "dummy" : ">"
};

function getDayOfTheWeek(date) {
  var dt = new Date(date);
  var days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
  var months = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
  // var hours = date.getHours();
  // var minutes = date.getMinutes();
  // var seconds = date.getSeconds();
  var day = dt.getDate();
  var month = dt.getMonth() + 1;
  var year = dt.getFullYear();
  var dayOfTheWeek = days[ dt.getDay() ];
  var monthName = months[ dt.getMonth() ];
  // hours = hours < 10 ? '0'+hours : hours;
  // minutes = minutes < 10 ? '0'+minutes : minutes;
  // seconds = seconds < 10 ? '0'+seconds : seconds;
  day = day < 10 ? '0'+day : day;
  month = month < 10 ? '0'+month : month;
  // var strTime = hours + ':' + minutes + ':' + seconds;
  // var strDateTime = year + "." + month + "." + day + "  " + strTime;
  return dayOfTheWeek;
}

function formatDate(date) {
  var dt = new Date(date);
  var day = dt.getDate();
  var month = dt.getMonth() + 1;
  var year = dt.getFullYear();
  day = day < 10 ? '0'+day : day;
  month = month < 10 ? '0'+month : month;
  var strDateTime = day + "-" + month + "-" + year;
  return strDateTime;
}

function handleClickArea(myRadio) {
  // for (var i = 0; i < 6; i++) {
  //   if (document.getElementById(reportsLocalVars.checkRootRadio[i]).checked == true) {
  //     reportsLocalVars.checkedDayValue = document.getElementById(reportsLocalVars.checkDayRadio[i]).value;
  //     reportsLocalVars.radioCheckedDayTrigger = true;
  //   }
  // }
  reportsLocalVars.areaCurrentValue = myRadio.value;
  $("#optionGroup").html("");
  $.post('../php/receiveSalesPartners.php', {dbName: localStorage.getItem('dbName'), dbUser: localStorage.getItem('dbUser'),
                                          dbPassword: localStorage.getItem('dbPassword'),
                                          area: reportsLocalVars.areaCurrentValue}, function(data) {
    reportsLocalVars.salesPartnersList = JSON.parse(data);
    alert("Полный список магазинов на районе:  " + Object.keys(reportsLocalVars.salesPartnersList).length);
    for (var i = 0; i < Object.keys(reportsLocalVars.salesPartnersList).length; i++) {
      var areaListLine = '<option value=' + reportsLocalVars.salesPartnersList[i].ID + '> \
                         ' + reportsLocalVars.salesPartnersList[i].Наименование + ' \
                         </option>';
      $("#optionGroup").append(areaListLine);
    }
    reportsLocalVars.areaTrigger = true;
    loadAgentSalaryRates(reportsLocalVars.areaCurrentValue);
  });
}

function loadAgentSalaryRates(area) {

  $.post('../php/receiveAgentSalaryRates.php', {dbName: localStorage.getItem('dbName'), dbUser: localStorage.getItem('dbUser'),
                                          dbPassword: localStorage.getItem('dbPassword'),
                                          area: area}, function(data) {
    reportsLocalVars.agentSalaryRatesTmp = JSON.parse(data);
    alert("Зарплатные коэффициенты загружены");
    for (var i = 0; i < Object.keys(reportsLocalVars.agentSalaryRatesTmp).length; i++) {
      Object.defineProperty(reportsLocalVars.agentSalaryRatesList, reportsLocalVars.agentSalaryRatesTmp[i].Наименование, {
         value: reportsLocalVars.agentSalaryRatesTmp[i].Area,
         writable: true,
         enumerable: true,
         configurable: true
      });
    }
  });
}

function handleClickRoot(myRadio) {
  if (reportsLocalVars.areaTrigger == true) {
    reportsLocalVars.rootCurrentValue = myRadio.value;
    $("#optionGroup").html("");
    $.post('../php/receiveSalesPartners.php', {dbName: localStorage.getItem('dbName'), dbUser: localStorage.getItem('dbUser'),
                                            dbPassword: localStorage.getItem('dbPassword'),
                                            area: reportsLocalVars.areaCurrentValue, root: reportsLocalVars.rootCurrentValue}, function(data) {
      reportsLocalVars.salesPartnersList = JSON.parse(data);
      alert(Object.keys(reportsLocalVars.salesPartnersList).length);
      for (var i = 0; i < Object.keys(reportsLocalVars.salesPartnersList).length; i++) {
        var areaListLine = '<option value=' + reportsLocalVars.salesPartnersList[i].ID + '> \
                           ' + reportsLocalVars.salesPartnersList[i].Наименование + ' \
                           </option>';
        $("#optionGroup").append(areaListLine);
      }
    });
  }
}

function getSalesPartnerID() {
  var x = document.getElementById("optionGroup").selectedIndex;
  $('#optionGroup option').each(function() {
    if (this.selected) {
      reportsLocalVars.optionValue = document.getElementsByTagName("option")[x].value;
    }
  });
  return reportsLocalVars.optionValue;
}

function getDay(type) {
  for (var i = 0; i < 6; i++) {
    if (document.getElementById(reportsLocalVars.checkDayRadio[i]).checked == true) {
      reportsLocalVars.checkedDayValue = document.getElementById(reportsLocalVars.checkDayRadio[i]).value;
      reportsLocalVars.radioCheckedDayTrigger = true;
    }
  }
  if (reportsLocalVars.radioCheckedDayTrigger == false && type == "byDayReport") {
    document.getElementById(reportsLocalVars.checkDayRadio[0]).checked = true;
    reportsLocalVars.checkedDayValue = document.getElementById(reportsLocalVars.checkDayRadio[0]).value;
  }
  return reportsLocalVars.checkedDayValue;
}

function getArea(type) {
  for (var i = 0; i < 6; i++) {
    if (document.getElementById(reportsLocalVars.checkAreaRadio[i]).checked == true) {
      reportsLocalVars.checkedAreaValue = document.getElementById(reportsLocalVars.checkAreaRadio[i]).value;
      reportsLocalVars.radioCheckedAreaTrigger = true;
    }
  }
  if (reportsLocalVars.radioCheckedAreaTrigger == false && type == "byDayReport") {
    document.getElementById(reportsLocalVars.checkAreaRadio[0]).checked = true;
    reportsLocalVars.checkedAreaValue = document.getElementById(reportsLocalVars.checkAreaRadio[0]).value;
  }
  return reportsLocalVars.checkedAreaValue;
}

function checkSumErrors() {
  var tmpSumTotal = 0;
  var trigger = false;
  for (var i = 0; i < Object.keys(reportsLocalVars.tmp).length - 1; i++) {
    if (reportsLocalVars.tmp[i].InvoiceNumber == reportsLocalVars.tmp[i + 1].InvoiceNumber) {
      tmpSumTotal += parseFloat(reportsLocalVars.tmp[i].Total, 10);
    } else {
      tmpSumTotal += parseFloat(reportsLocalVars.tmp[i].Total, 10);
      trigger = true;
      if (trigger == true && parseFloat(reportsLocalVars.tmp[i].InvoiceSum, 10).toFixed(2) != tmpSumTotal.toFixed(2)) {
        alert("# " + reportsLocalVars.tmp[i].InvoiceNumber + " сумма: " + tmpSumTotal);
      }
      trigger = false;
      tmpSumTotal = 0;
    }
  }
  reportsLocalVars.checkSumErrorsTrigger = false;
}

$('#reports').on('click', function() {
  renderMenuPage();
});

$('#report-sales-manager').on('click', function() {
  getSalesPartnerID();
  getArea("report");
  // alert("район: " + reportsLocalVars.checkedAreaValue); alert("магазин: " + reportsLocalVars.optionValue);
  reportsLocalVars.dateStart = $('input#dateStart').val();
  reportsLocalVars.dateEnd = $('input#dateEnd').val();
  $.post('../php/receiveReportData.php', {dbName: localStorage.getItem('dbName'), dbUser: localStorage.getItem('dbUser'),
                                          dbPassword: localStorage.getItem('dbPassword'), dateStart: reportsLocalVars.dateStart,
                                          dateEnd: reportsLocalVars.dateEnd, area: reportsLocalVars.checkedAreaValue,
                                          salesPartnersID: reportsLocalVars.optionValue, reportType: "report"}, function(data) {
    reportsLocalVars.tmp = JSON.parse(data);
    // alert(Object.keys(reportsLocalVars.tmp).length);
    for (var i = 0; i < Object.keys(reportsLocalVars.tmp).length; i++) {
      reportsLocalVars.trigger = false;
      if (reportsLocalVars.tmp[i].AgentID == 7) {
        if (reportsLocalVars.tmp[i].Юр_Наименование.trim() != "ООО СКЦ" && reportsLocalVars.tmp[i].Юр_Наименование.trim() != "ООО Спецторг") {
          if (Object.keys(reportsLocalVars.salesQuantity).length > 0) {
            for (var key in reportsLocalVars.salesQuantity) {
              // if (salesQuantity.hasOwnProperty(tmp[i].Наименование)) {
              if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                  reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2" ||
                  reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр" ||
                  reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                  reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                    reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                  if (key == "Ким-ча весовая") {
                    createObject(2, 1, i, 0);
                  }
                }
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр") {
                  if (key == "Ким-ча весовая") {
                    createObject(3, 1, i, 0);
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
                  reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр" ||
                  reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                  reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                    reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                  createObject(2, 0, i, 0);
                }
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр") {
                  createObject(3, 0, i, 0);
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
                reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр" ||
                reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                   reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                   createObject(2, 0, i, 0);
                }
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр") {
                   createObject(3, 0, i, 0);
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
      }
      if (reportsLocalVars.tmp[i].AgentID != 7) {
        if (Object.keys(reportsLocalVars.salesQuantity).length > 0) {
          for (var key in reportsLocalVars.salesQuantity) {
            // if (salesQuantity.hasOwnProperty(tmp[i].Наименование)) {
            if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2" ||
                reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр" ||
                reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
              if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                  reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                if (key == "Ким-ча весовая") {
                  createObject(2, 1, i, 0);
                }
              }
              if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр") {
                if (key == "Ким-ча весовая") {
                  createObject(3, 1, i, 0);
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
                reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр" ||
                reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
              if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                  reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                createObject(2, 0, i, 0);
              }
              if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр") {
                createObject(3, 0, i, 0);
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
              reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр" ||
              reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
              reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
              if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                 reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                 createObject(2, 0, i, 0);
              }
              if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр") {
                 createObject(3, 0, i, 0);
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
    }
    // if (Object.keys(salesQuantity).includes(tmp[i].Наименование)) {
    // alert(Object.keys(salesQuantity).length);
    // alert(salesQuantity["Щике"]);
    // $('div#connection-data').text(text);
    // var text = Object.entries(salesQuantity) + "\r\n" + Object.entries(salesExchange) + "\r\n" + Object.entries(salesReturn);
    // $('div#connection-data').text(text);
    renderReportTable(0, 0);
  });
});

$('#report-by-sp').on('click', function() {
  getSalesPartnerID();
  getArea("report");
  alert("район: " + reportsLocalVars.checkedAreaValue); alert("магазин: " + reportsLocalVars.optionValue);
  reportsLocalVars.dateStart = $('input#dateStart').val();
  reportsLocalVars.dateEnd = $('input#dateEnd').val();
  $.post('../php/receiveReportData.php', {dbName: localStorage.getItem('dbName'), dbUser: localStorage.getItem('dbUser'),
                                          dbPassword: localStorage.getItem('dbPassword'), dateStart: reportsLocalVars.dateStart,
                                          dateEnd: reportsLocalVars.dateEnd,
                                          salesPartnersID: reportsLocalVars.optionValue, reportType: "report"}, function(data) {
    reportsLocalVars.tmp = JSON.parse(data);
    // alert(Object.keys(reportsLocalVars.tmp).length);
    for (var i = 0; i < Object.keys(reportsLocalVars.tmp).length; i++) {
      reportsLocalVars.trigger = false;
      if (reportsLocalVars.tmp[i].AgentID == 7) {
        if (reportsLocalVars.tmp[i].Юр_Наименование.trim() != "ООО СКЦ" && reportsLocalVars.tmp[i].Юр_Наименование.trim() != "ООО Спецторг") {
          if (Object.keys(reportsLocalVars.salesQuantity).length > 0) {
            for (var key in reportsLocalVars.salesQuantity) {
              // if (salesQuantity.hasOwnProperty(tmp[i].Наименование)) {
              if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                  reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2" ||
                  reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр" ||
                  reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                  reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                    reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                  if (key == "Ким-ча весовая") {
                    createObject(2, 1, i, 0);
                  }
                }
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр") {
                  if (key == "Ким-ча весовая") {
                    createObject(3, 1, i, 0);
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
                  reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр" ||
                  reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                  reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                    reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                  createObject(2, 0, i, 0);
                }
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр") {
                  createObject(3, 0, i, 0);
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
                reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр" ||
                reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                   reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                   createObject(2, 0, i, 0);
                }
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр") {
                   createObject(3, 0, i, 0);
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
      } else {
        if (Object.keys(reportsLocalVars.salesQuantity).length > 0) {
          for (var key in reportsLocalVars.salesQuantity) {
            // if (salesQuantity.hasOwnProperty(tmp[i].Наименование)) {
            if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2" ||
                reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр" ||
                reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
              if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                  reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                if (key == "Ким-ча весовая") {
                  createObject(2, 1, i, 0);
                }
              }
              if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр") {
                if (key == "Ким-ча весовая") {
                  createObject(3, 1, i, 0);
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
                reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр" ||
                reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
              if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                  reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                createObject(2, 0, i, 0);
              }
              if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр") {
                createObject(3, 0, i, 0);
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
              reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр" ||
              reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
              reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
              if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                 reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                 createObject(2, 0, i, 0);
              }
              if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр") {
                 createObject(3, 0, i, 0);
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
   }
    // if (Object.keys(salesQuantity).includes(tmp[i].Наименование)) {
    // alert(Object.keys(salesQuantity).length);
    // alert(salesQuantity["Щике"]);
    // $('div#connection-data').text(text);
    // var text = Object.entries(salesQuantity) + "\r\n" + Object.entries(salesExchange) + "\r\n" + Object.entries(salesReturn);
    // $('div#connection-data').text(text);
    renderReportTable(0, 0);
  });
});

$('#report-ceo').on('click', async function() {
  getSalesPartnerID();
  getArea("report");
  reportsLocalVars.dateStart = $('input#dateStart').val();
  reportsLocalVars.dateEnd = $('input#dateEnd').val();
  await ceoFuncPost();
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  renderReportTable(1, 0);
});

$('#report-by-day').on('click', function() {
  getSalesPartnerID();
  getDay("byDayReport");
  getArea("byDayReport");
  // alert("район: " + reportsLocalVars.checkedAreaValue);
  // alert("магазин: " + reportsLocalVars.optionValue);
  // alert(reportsLocalVars.checkedDayValue);
  reportsLocalVars.dateStart = $('input#dateStart').val();
  reportsLocalVars.dateEnd = $('input#dateEnd').val();
  $.post('../php/receiveReportData.php', {dbName: localStorage.getItem('dbName'), dbUser: localStorage.getItem('dbUser'),
                                          dbPassword: localStorage.getItem('dbPassword'), dateStart: reportsLocalVars.dateStart,
                                          dateEnd: reportsLocalVars.dateEnd, area: reportsLocalVars.checkedAreaValue,
                                          salesPartnersID: reportsLocalVars.optionValue,
                                          reportType: "byDayReport"}, function(data) {
    reportsLocalVars.tmp = JSON.parse(data); alert(Object.keys(reportsLocalVars.tmp).length);
    for (var i = 0; i < Object.keys(reportsLocalVars.tmp).length; i++) {
      reportsLocalVars.trigger = false;
      // alert(reportsLocalVars.checkedDayValue);
      if (reportsLocalVars.tmp[i].AgentID == 7) {
        if (reportsLocalVars.tmp[i].Юр_Наименование.trim() != "ООО СКЦ" && reportsLocalVars.tmp[i].Юр_Наименование.trim() != "ООО Спецторг") {
          if (getDayOfTheWeek(reportsLocalVars.tmp[i].DateTimeDocLocal) == reportsLocalVars.checkedDayValue) {
            if (Object.keys(reportsLocalVars.salesQuantity).length > 0) {
              for (var key in reportsLocalVars.salesQuantity) {
                if (key == reportsLocalVars.tmp[i].Наименование + " " + formatDate(reportsLocalVars.tmp[i].DateTimeDocLocal)) {
                  createObject(0, 1, i, 2);
                }
              }
              if (reportsLocalVars.trigger == false) {
                createObject(0, 0, i, 2);
              }
            } else {
              createObject(0, 0, i, 2);
            }
          }
        }
      } else {
        if (getDayOfTheWeek(reportsLocalVars.tmp[i].DateTimeDocLocal) == reportsLocalVars.checkedDayValue) {
          if (Object.keys(reportsLocalVars.salesQuantity).length > 0) {
            for (var key in reportsLocalVars.salesQuantity) {
              if (key == reportsLocalVars.tmp[i].Наименование + " " + formatDate(reportsLocalVars.tmp[i].DateTimeDocLocal)) {
                createObject(0, 1, i, 2);
              }
            }
            if (reportsLocalVars.trigger == false) {
              createObject(0, 0, i, 2);
            }
          } else {
            createObject(0, 0, i, 2);
          }
        }
      }
   }
    renderReportTable(2, 0);
  });
});

$('#report-by-netcost').on('click', function() {
  getSalesPartnerID();
  getArea("report");
  // alert("район: " + reportsLocalVars.checkedAreaValue); alert("магазин: " + reportsLocalVars.optionValue);
  reportsLocalVars.dateStart = $('input#dateStart').val();
  reportsLocalVars.dateEnd = $('input#dateEnd').val();
  $.post('../php/receiveReportData.php', {dbName: localStorage.getItem('dbName'), dbUser: localStorage.getItem('dbUser'),
                                          dbPassword: localStorage.getItem('dbPassword'), dateStart: reportsLocalVars.dateStart,
                                          dateEnd: reportsLocalVars.dateEnd, area: reportsLocalVars.checkedAreaValue,
                                          salesPartnersID: reportsLocalVars.optionValue, reportType: "byNetCostReport"}, function(data) {
    reportsLocalVars.tmp = JSON.parse(data);
    // alert(Object.keys(reportsLocalVars.tmp).length);
    for (var i = 0; i < Object.keys(reportsLocalVars.tmp).length; i++) {
      reportsLocalVars.trigger = false;
      if (reportsLocalVars.tmp[i].AgentID == 7) {
        if (reportsLocalVars.tmp[i].Юр_Наименование.trim() != "ООО СКЦ" && reportsLocalVars.tmp[i].Юр_Наименование.trim() != "ООО Спецторг") {
          if (Object.keys(reportsLocalVars.salesQuantity).length > 0) {
            for (var key in reportsLocalVars.salesQuantity) {
              // if (salesQuantity.hasOwnProperty(tmp[i].Наименование)) {
              if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                  reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2" ||
                  reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр" ||
                  reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                  reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                    reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                  if (key == "Ким-ча весовая" + " " + reportsLocalVars.tmp[i].netCost) {
                    createObject(2, 1, i, 3);
                  }
                }
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр") {
                  if (key == "Ким-ча весовая" + " " + reportsLocalVars.tmp[i].netCost) {
                    createObject(3, 1, i, 3);
                  }
                }
                if (reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                    reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                  if (key == "Редька по-восточному весовая" + " " + reportsLocalVars.tmp[i].netCost) {
                    createObject(1, 1, i, 3);
                  }
                }
              } else {
                if (key == reportsLocalVars.tmp[i].Наименование + " " + reportsLocalVars.tmp[i].netCost) {
                  createObject(0, 1, i, 3);
                }
              }
            }
            if (reportsLocalVars.trigger == false) {
            // if (!(tmp[i].Наименование in salesQuantity)) {
              if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                  reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2" ||
                  reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр" ||
                  reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                  reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                    reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                  createObject(2, 0, i, 3);
                }
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр") {
                  createObject(3, 0, i, 3);
                }
                if (reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                    reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                  createObject(1, 0, i, 3);
                }
              } else {
                createObject(0, 0, i, 3);
              }
            }
          } else {
             if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2" ||
                reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр" ||
                reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                   reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                   createObject(2, 0, i, 3);
                }
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр") {
                   createObject(3, 0, i, 3);
                }
                if (reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                   reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                   createObject(1, 0, i, 3);
                }
             } else {
               createObject(0, 0, i, 3);
             }
          }
        }
      } else {
        if (Object.keys(reportsLocalVars.salesQuantity).length > 0) {
          for (var key in reportsLocalVars.salesQuantity) {
            // if (salesQuantity.hasOwnProperty(tmp[i].Наименование)) {
            if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2" ||
                reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр" ||
                reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
              if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                  reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                if (key == "Ким-ча весовая" + " " + reportsLocalVars.tmp[i].netCost) {
                  createObject(2, 1, i, 3);
                }
              }
              if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр") {
                if (key == "Ким-ча весовая" + " " + reportsLocalVars.tmp[i].netCost) {
                  createObject(3, 1, i, 3);
                }
              }
              if (reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                  reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                if (key == "Редька по-восточному весовая" + " " + reportsLocalVars.tmp[i].netCost) {
                  createObject(1, 1, i, 3);
                }
              }
            } else {
              if (key == reportsLocalVars.tmp[i].Наименование + " " + reportsLocalVars.tmp[i].netCost) {
                createObject(0, 1, i, 3);
              }
            }
          }
          if (reportsLocalVars.trigger == false) {
          // if (!(tmp[i].Наименование in salesQuantity)) {
            if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2" ||
                reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр" ||
                reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
              if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                  reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                createObject(2, 0, i, 3);
              }
              if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр") {
                createObject(3, 0, i, 3);
              }
              if (reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                  reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                createObject(1, 0, i, 3);
              }
            } else {
              createObject(0, 0, i, 3);
            }
          }
        } else {
           if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
              reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2" ||
              reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр" ||
              reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
              reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
              if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                 reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                 createObject(2, 0, i, 3);
              }
              if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр") {
                 createObject(3, 0, i, 3);
              }
              if (reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                 reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                 createObject(1, 0, i, 3);
              }
           } else {
             createObject(0, 0, i, 3);
           }
        }
      }
   }
    renderReportTable(3, 1);
  });
});

$('#salary-report').on('click', function() {
  getSalesPartnerID();
  getArea("report");
  reportsLocalVars.dateStart = $('input#dateStart').val();
  reportsLocalVars.dateEnd = $('input#dateEnd').val();

  if (reportsLocalVars.radioCheckedAreaTrigger == true) {
    $.post('../php/receiveReportData.php', {dbName: localStorage.getItem('dbName'), dbUser: localStorage.getItem('dbUser'),
                                            dbPassword: localStorage.getItem('dbPassword'), dateStart: reportsLocalVars.dateStart,
                                            dateEnd: reportsLocalVars.dateEnd, area: reportsLocalVars.checkedAreaValue,
                                            salesPartnersID: reportsLocalVars.optionValue, reportType: "report"}, function(data) {
      reportsLocalVars.tmp = JSON.parse(data);
      for (var i = 0; i < Object.keys(reportsLocalVars.tmp).length; i++) {
        reportsLocalVars.trigger = false;
        if (reportsLocalVars.tmp[i].AgentID != 7) {
          if (Object.keys(reportsLocalVars.salesQuantity).length > 0) {
            for (var key in reportsLocalVars.salesQuantity) {
              // if (salesQuantity.hasOwnProperty(tmp[i].Наименование)) {
              if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                  reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2" ||
                  reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр" ||
                  reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                  reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                    reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                  if (key == "Ким-ча весовая") {
                    createObject(2, 1, i, 0);
                  }
                }
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр") {
                  if (key == "Ким-ча весовая") {
                    createObject(3, 1, i, 0);
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
                  reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр" ||
                  reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                  reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                    reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                  createObject(2, 0, i, 0);
                }
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр") {
                  createObject(3, 0, i, 0);
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
                reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр" ||
                reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                   reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                   createObject(2, 0, i, 0);
                }
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр") {
                   createObject(3, 0, i, 0);
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
      }
      renderReportTable(4, 2);
    });
  }
});

$('#ingredients-report').on('click', function() {

  reportsLocalVars.dateStart = $('input#dateStart').val();
  reportsLocalVars.dateEnd = $('input#dateEnd').val();

  if (reportsLocalVars.radioCheckedAreaTrigger == true) {
    $.post('../php/receiveReportData.php', {dbName: localStorage.getItem('dbName'), dbUser: localStorage.getItem('dbUser'),
                                            dbPassword: localStorage.getItem('dbPassword'), dateStart: reportsLocalVars.dateStart,
                                            dateEnd: reportsLocalVars.dateEnd, area: reportsLocalVars.checkedAreaValue,
                                            salesPartnersID: reportsLocalVars.optionValue, reportType: "report"}, function(data) {
      reportsLocalVars.tmp = JSON.parse(data);
      for (var i = 0; i < Object.keys(reportsLocalVars.tmp).length; i++) {
        reportsLocalVars.trigger = false;
        if (reportsLocalVars.tmp[i].AgentID != 7) {
          if (Object.keys(reportsLocalVars.salesQuantity).length > 0) {
            for (var key in reportsLocalVars.salesQuantity) {
              // if (salesQuantity.hasOwnProperty(tmp[i].Наименование)) {
              if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                  reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2" ||
                  reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр" ||
                  reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                  reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                    reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                  if (key == "Ким-ча весовая") {
                    createObject(2, 1, i, 0);
                  }
                }
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр") {
                  if (key == "Ким-ча весовая") {
                    createObject(3, 1, i, 0);
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
                  reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр" ||
                  reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                  reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                    reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                  createObject(2, 0, i, 0);
                }
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр") {
                  createObject(3, 0, i, 0);
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
                reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр" ||
                reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                reportsLocalVars.tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                   reportsLocalVars.tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                   createObject(2, 0, i, 0);
                }
                if (reportsLocalVars.tmp[i].Наименование == "Ким-ча 500 гр") {
                   createObject(3, 0, i, 0);
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
      }
      renderReportTable(4, 2);
    });
  }
});

// $('#report-ceo-netcost').on('click', function() {
//   getSalesPartnerID();
//   getArea("report");
//   reportsLocalVars.dateStart = $('input#dateStart').val();
//   reportsLocalVars.dateEnd = $('input#dateEnd').val();
//   $.post('../php/receiveReportData.php', {dbName: localStorage.getItem('dbName'), dbUser: localStorage.getItem('dbUser'),
//                                           dbPassword: localStorage.getItem('dbPassword'), dateStart: reportsLocalVars.dateStart,
//                                           dateEnd: reportsLocalVars.dateEnd, area: reportsLocalVars.checkedAreaValue,
//                                           salesPartnersID: reportsLocalVars.optionValue, reportType: "byNetCostReport"}, function(data) {
//     reportsLocalVars.tmp = JSON.parse(data);
//     for (var i = 0; i < Object.keys(reportsLocalVars.tmp).length; i++) {
//       reportsLocalVars.trigger = false;
//       if (Object.keys(reportsLocalVars.salesQuantity).length > 0) {
//         for (var key in reportsLocalVars.salesQuantity) {
//           // if (salesQuantity.hasOwnProperty(tmp[i].Наименование)) {
//           if (key == reportsLocalVars.tmp[i].Наименование + " " + reportsLocalVars.tmp[i].netCost) {
//             createObject(0, 1, i, 3);
//           }
//         }
//         if (reportsLocalVars.trigger == false) {
//           createObject(0, 0, i, 3);
//         }
//       } else {
//         createObject(0, 0, i, 3);
//       }
//    }
//     // if (Object.keys(salesQuantity).includes(tmp[i].Наименование)) {
//     // alert(Object.keys(salesQuantity).length);
//     // alert(salesQuantity["Щике"]);
//     // $('div#connection-data').text(text);
//     // var text = Object.entries(salesQuantity) + "\r\n" + Object.entries(salesExchange) + "\r\n" + Object.entries(salesReturn);
//     // $('div#connection-data').text(text);
//     renderReportTable(3, 1);
//   });
// });

this.ceoFuncPost = function() {
  $.post('../php/receiveReportData.php', {dbName: localStorage.getItem('dbName'), dbUser: localStorage.getItem('dbUser'),
                                          dbPassword: localStorage.getItem('dbPassword'), dateStart: reportsLocalVars.dateStart,
                                          dateEnd: reportsLocalVars.dateEnd, area: reportsLocalVars.checkedAreaValue,
                                          salesPartnersID: reportsLocalVars.optionValue, reportType: "report"}, function(data) {
    reportsLocalVars.tmp = JSON.parse(data);
    for (var i = 0; i < Object.keys(reportsLocalVars.tmp).length; i++) {
      reportsLocalVars.trigger = false;
      if (reportsLocalVars.tmp[i].AgentID == 7) {
        if (reportsLocalVars.tmp[i].Юр_Наименование.trim() != "ООО СКЦ" && reportsLocalVars.tmp[i].Юр_Наименование.trim() != "ООО Спецторг") {
          if (Object.keys(reportsLocalVars.salesQuantity).length > 0) {
            for (var key in reportsLocalVars.salesQuantity) {
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
      }
      if (reportsLocalVars.tmp[i].AgentID != 7) {
        if (Object.keys(reportsLocalVars.salesQuantity).length > 0) {
          for (var key in reportsLocalVars.salesQuantity) {
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
    }
    // renderReportTable(1, 0);
  });
}

this.createObject = function(paramOne, paramTwo, paramThree, paramFour) {
  // if (reportsLocalVars.checkSumErrorsTrigger == true) {
  //   // checkSumErrors();
  // }
  if (reportsLocalVars.tmp[paramThree].Наименование == "Ким-ча 700 гр особая цена 1" ||
      reportsLocalVars.tmp[paramThree].Наименование == "Ким-ча 700 гр особая цена 2" ||
      reportsLocalVars.tmp[paramThree].Наименование == "Ким-ча 500 гр" ||
      reportsLocalVars.tmp[paramThree].Наименование == "Редька по-восточному 500гр особая цена 1" ||
      reportsLocalVars.tmp[paramThree].Наименование == "Редька по-восточному 500гр особая цена 2" ||
      reportsLocalVars.tmp[paramThree].Наименование == "Ким-ча весовая" ||
      reportsLocalVars.tmp[paramThree].Наименование == "Редька по-восточному весовая") {
    if (reportsLocalVars.tmp[paramThree].Наименование == "Ким-ча 700 гр особая цена 1" ||
        reportsLocalVars.tmp[paramThree].Наименование == "Ким-ча 700 гр особая цена 2") {
      reportsLocalVars.totalExchangeWeight += parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity * 0.7);
      reportsLocalVars.totalExchangeWeightSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity);
      reportsLocalVars.totalExchangeWeightSumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity * 0.7);
      reportsLocalVars.totalExchangeSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity);
      reportsLocalVars.totalExchangeSumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity * 0.7);

      reportsLocalVars.totalReturnWeight += parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity * 0.7);
      reportsLocalVars.totalReturnWeightSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity);
      reportsLocalVars.totalReturnSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity);
      reportsLocalVars.totalReturnWeightSumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity * 0.7);
      reportsLocalVars.totalReturnSumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity * 0.7);

      reportsLocalVars.totalSalesWeight += parseFloat(reportsLocalVars.tmp[paramThree].Quantity * 0.7);
      reportsLocalVars.totalSalesWeightSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].Quantity);
      // reportsLocalVars.totalSalesSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].Quantity);
      reportsLocalVars.totalSalesSum += parseFloat(reportsLocalVars.tmp[paramThree].Total);
      reportsLocalVars.totalSalesWeightSumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].Quantity * 0.7);
      reportsLocalVars.totalSalesSumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].Quantity * 0.7);
    }
    if (reportsLocalVars.tmp[paramThree].Наименование == "Ким-ча 500 гр") {
      reportsLocalVars.totalExchangeWeight += parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity * 0.5);
      reportsLocalVars.totalExchangeWeightSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity);
      reportsLocalVars.totalExchangeWeightSumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity * 0.5);
      reportsLocalVars.totalExchangeSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity);
      reportsLocalVars.totalExchangeSumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity * 0.5);

      reportsLocalVars.totalReturnWeight += parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity * 0.5);
      reportsLocalVars.totalReturnWeightSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity);
      reportsLocalVars.totalReturnSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity);
      reportsLocalVars.totalReturnWeightSumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity * 0.5);
      reportsLocalVars.totalReturnSumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity * 0.5);

      reportsLocalVars.totalSalesWeight += parseFloat(reportsLocalVars.tmp[paramThree].Quantity * 0.5);
      reportsLocalVars.totalSalesWeightSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].Quantity);
      // reportsLocalVars.totalSalesSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].Quantity);
      reportsLocalVars.totalSalesSum += parseFloat(reportsLocalVars.tmp[paramThree].Total);
      reportsLocalVars.totalSalesWeightSumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].Quantity * 0.5);
      reportsLocalVars.totalSalesSumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].Quantity * 0.5);
    }
    if (reportsLocalVars.tmp[paramThree].Наименование == "Редька по-восточному 500гр особая цена 1" ||
        reportsLocalVars.tmp[paramThree].Наименование == "Редька по-восточному 500гр особая цена 2") {
          reportsLocalVars.totalExchangeWeight += parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity * 0.5);
          reportsLocalVars.totalExchangeWeightSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity);
          reportsLocalVars.totalExchangeWeightSumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity * 0.5);
          reportsLocalVars.totalExchangeSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity);
          reportsLocalVars.totalExchangeSumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity * 0.5);

          reportsLocalVars.totalReturnWeight += parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity * 0.5);
          reportsLocalVars.totalReturnWeightSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity);
          reportsLocalVars.totalReturnSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity);
          reportsLocalVars.totalReturnWeightSumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity * 0.5);
          reportsLocalVars.totalReturnSumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity * 0.5);

          reportsLocalVars.totalSalesWeight += parseFloat(reportsLocalVars.tmp[paramThree].Quantity * 0.5);
          reportsLocalVars.totalSalesWeightSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].Quantity);
          // reportsLocalVars.totalSalesSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].Quantity);
          reportsLocalVars.totalSalesSum += parseFloat(reportsLocalVars.tmp[paramThree].Total);
          reportsLocalVars.totalSalesWeightSumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].Quantity * 0.5);
          reportsLocalVars.totalSalesSumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].Quantity * 0.5);

    }
    if (reportsLocalVars.tmp[paramThree].Наименование == "Ким-ча весовая" ||
        reportsLocalVars.tmp[paramThree].Наименование == "Редька по-восточному весовая") {
          reportsLocalVars.totalExchangeWeight += parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity);
          reportsLocalVars.totalExchangeWeightSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity);
          reportsLocalVars.totalExchangeWeightSumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity);
          reportsLocalVars.totalExchangeSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity);
          reportsLocalVars.totalExchangeSumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity);

          reportsLocalVars.totalReturnWeight += parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity);
          reportsLocalVars.totalReturnWeightSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity);
          reportsLocalVars.totalReturnSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity);
          reportsLocalVars.totalReturnWeightSumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity);
          reportsLocalVars.totalReturnSumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity);

          reportsLocalVars.totalSalesWeight += parseFloat(reportsLocalVars.tmp[paramThree].Quantity);
          reportsLocalVars.totalSalesWeightSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].Quantity);
          reportsLocalVars.totalSalesWeightSumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].Quantity);
          reportsLocalVars.totalSalesSumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].Quantity);
          reportsLocalVars.totalSalesSum += parseFloat(reportsLocalVars.tmp[paramThree].Total);
    }
  } else {
    reportsLocalVars.totalExchangeQuantity += parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity);
    reportsLocalVars.totalExchangeQuantitySum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity);
    reportsLocalVars.totalExchangeSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity);
    reportsLocalVars.totalExchangeQuantitySumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity);
    reportsLocalVars.totalExchangeSumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].ExchangeQuantity);

    reportsLocalVars.totalReturnQuantity += parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity);
    reportsLocalVars.totalReturnQuantitySum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity);
    reportsLocalVars.totalReturnSum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity);
    reportsLocalVars.totalReturnQuantitySumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity);
    reportsLocalVars.totalReturnSumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].ReturnQuantity);

    reportsLocalVars.totalSalesQuantity += parseFloat(reportsLocalVars.tmp[paramThree].Quantity);
    reportsLocalVars.totalSalesQuantitySum += parseFloat(reportsLocalVars.tmp[paramThree].Price) * parseFloat(reportsLocalVars.tmp[paramThree].Quantity);
    reportsLocalVars.totalSalesQuantitySumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].Quantity);
    // if (reportsLocalVars.tmp[paramThree].Total < 0) {
    //   alert("итого до: " + reportsLocalVars.totalSalesSum);
    //   alert("возврат: " + parseFloat(reportsLocalVars.tmp[paramThree].Total));
    // }
    reportsLocalVars.totalSalesSum += parseFloat(reportsLocalVars.tmp[paramThree].Total);
    reportsLocalVars.totalSalesSumNetCost += parseFloat(reportsLocalVars.tmp[paramThree].netCost) * parseFloat(reportsLocalVars.tmp[paramThree].Quantity);
    // if (reportsLocalVars.tmp[paramThree].Total < 0) {
    //   alert("итого после: " + reportsLocalVars.totalSalesSum);
    // }
    // reportsLocalVars.totalNetQuantity += reportsLocalVars.totalSalesQuantity - reportsLocalVars.totalExchangeQuantity - reportsLocalVars.totalReturnQuantity;
  }

  if (paramOne == 0) {

    reportsLocalVars.tmpName = reportsLocalVars.tmp[paramThree].Наименование;
    reportsLocalVars.tmpQuantity = reportsLocalVars.tmp[paramThree].Quantity;
    reportsLocalVars.tmpPrice = reportsLocalVars.tmp[paramThree].Price;
    if (paramFour == 1) {
      reportsLocalVars.tmpName = reportsLocalVars.tmp[paramThree].Наименование  + " " + reportsLocalVars.tmpPrice;
    }
    if (paramFour == 2) {
      reportsLocalVars.tmpName = reportsLocalVars.tmp[paramThree].Наименование  + " " + formatDate(reportsLocalVars.tmp[paramThree].DateTimeDocLocal);
    }
    if (paramFour == 3) {
      reportsLocalVars.tmpName = reportsLocalVars.tmp[paramThree].Наименование  + " " + reportsLocalVars.tmp[paramThree].netCost;
    }
    // reportsLocalVars.tmpTotal = reportsLocalVars.tmpQuantity * reportsLocalVars.tmpPrice;
    reportsLocalVars.tmpTotal = reportsLocalVars.tmp[paramThree].Total;
    reportsLocalVars.tmpExchange = reportsLocalVars.tmp[paramThree].ExchangeQuantity;
    reportsLocalVars.tmpReturn = reportsLocalVars.tmp[paramThree].ReturnQuantity;
    reportsLocalVars.tmpTotalNetCost = reportsLocalVars.tmpQuantity * reportsLocalVars.tmp[paramThree].netCost;
    reportsLocalVars.tmpNetQuantity = parseFloat(reportsLocalVars.tmpQuantity) - parseFloat(reportsLocalVars.tmpExchange) - parseFloat(reportsLocalVars.tmpReturn);
    reportsLocalVars.tmpSalary = reportsLocalVars.tmpNetQuantity * parseFloat(reportsLocalVars.agentSalaryRatesList[reportsLocalVars.tmpName]);
    reportsLocalVars.tmpExchangeSalaryLoss = reportsLocalVars.tmpExchange * parseFloat(reportsLocalVars.agentSalaryRatesList[reportsLocalVars.tmpName]);
    if (paramFour === 1) {
      if (reportsLocalVars.tmp[paramThree].Наименование == "Ким-ча 700 гр особая цена 1" ||
          reportsLocalVars.tmp[paramThree].Наименование == "Ким-ча 700 гр особая цена 2") {
        reportsLocalVars.tmpTotalNetCost = parseFloat(reportsLocalVars.tmpQuantity * 0.7) * reportsLocalVars.tmp[paramThree].netCost;
      }
      if (reportsLocalVars.tmp[paramThree].Наименование == "Ким-ча 500 гр") {
        reportsLocalVars.tmpTotalNetCost = parseFloat(reportsLocalVars.tmpQuantity * 0.5) * reportsLocalVars.tmp[paramThree].netCost;
      }
      if (reportsLocalVars.tmp[paramThree].Наименование == "Редька по-восточному 500гр особая цена 1" ||
          reportsLocalVars.tmp[paramThree].Наименование == "Редька по-восточному 500гр особая цена 2") {
        reportsLocalVars.tmpTotalNetCost = parseFloat(reportsLocalVars.tmpQuantity * 0.5) * reportsLocalVars.tmp[paramThree].netCost;
      }
    }
  }
  if (paramOne == 1) {

    reportsLocalVars.tmpName = "Редька по-восточному весовая";
    reportsLocalVars.tmpTotal = reportsLocalVars.tmp[paramThree].Total;
    reportsLocalVars.tmpQuantity = reportsLocalVars.tmp[paramThree].Quantity * 0.5;
    reportsLocalVars.tmpExchange = reportsLocalVars.tmp[paramThree].ExchangeQuantity * 0.5;
    reportsLocalVars.tmpReturn = reportsLocalVars.tmp[paramThree].ReturnQuantity * 0.5;
    reportsLocalVars.tmpTotalNetCost = reportsLocalVars.tmpQuantity * reportsLocalVars.tmp[paramThree].netCost;
    reportsLocalVars.tmpNetQuantity = parseFloat(reportsLocalVars.tmpQuantity) - parseFloat(reportsLocalVars.tmpExchange) - parseFloat(reportsLocalVars.tmpReturn);
    reportsLocalVars.tmpSalary = reportsLocalVars.tmpNetQuantity * parseFloat(reportsLocalVars.agentSalaryRatesList[reportsLocalVars.tmpName]);
    reportsLocalVars.tmpExchangeSalaryLoss = reportsLocalVars.tmpExchange * parseFloat(reportsLocalVars.agentSalaryRatesList[reportsLocalVars.tmpName]);
    if (paramFour == 3) {
      reportsLocalVars.tmpName = "Редька по-восточному весовая" + " " + reportsLocalVars.tmp[paramThree].netCost;
    }
  }
  if (paramOne == 2) {

    reportsLocalVars.tmpName = "Ким-ча весовая";
    reportsLocalVars.tmpTotal = reportsLocalVars.tmp[paramThree].Total;
    reportsLocalVars.tmpQuantity = reportsLocalVars.tmp[paramThree].Quantity * 0.7;
    reportsLocalVars.tmpExchange = reportsLocalVars.tmp[paramThree].ExchangeQuantity * 0.7;
    reportsLocalVars.tmpReturn = reportsLocalVars.tmp[paramThree].ReturnQuantity * 0.7;
    reportsLocalVars.tmpTotalNetCost = reportsLocalVars.tmpQuantity * reportsLocalVars.tmp[paramThree].netCost;
    reportsLocalVars.tmpNetQuantity = parseFloat(reportsLocalVars.tmpQuantity) - parseFloat(reportsLocalVars.tmpExchange) - parseFloat(reportsLocalVars.tmpReturn);
    reportsLocalVars.tmpSalary = reportsLocalVars.tmpNetQuantity * parseFloat(reportsLocalVars.agentSalaryRatesList[reportsLocalVars.tmpName]);
    reportsLocalVars.tmpExchangeSalaryLoss = reportsLocalVars.tmpExchange * parseFloat(reportsLocalVars.agentSalaryRatesList[reportsLocalVars.tmpName]);
    if (paramFour == 3) {
      reportsLocalVars.tmpName = "Ким-ча весовая" + " " + reportsLocalVars.tmp[paramThree].netCost;
    }
  }
  if (paramOne == 3) {

    reportsLocalVars.tmpName = "Ким-ча весовая";
    reportsLocalVars.tmpTotal = reportsLocalVars.tmp[paramThree].Total;
    reportsLocalVars.tmpQuantity = reportsLocalVars.tmp[paramThree].Quantity * 0.5;
    reportsLocalVars.tmpExchange = reportsLocalVars.tmp[paramThree].ExchangeQuantity * 0.5;
    reportsLocalVars.tmpReturn = reportsLocalVars.tmp[paramThree].ReturnQuantity * 0.5;
    reportsLocalVars.tmpTotalNetCost = reportsLocalVars.tmpQuantity * reportsLocalVars.tmp[paramThree].netCost;
    reportsLocalVars.tmpNetQuantity = parseFloat(reportsLocalVars.tmpQuantity) - parseFloat(reportsLocalVars.tmpExchange) - parseFloat(reportsLocalVars.tmpReturn);
    reportsLocalVars.tmpSalary = reportsLocalVars.tmpNetQuantity * parseFloat(reportsLocalVars.agentSalaryRatesList[reportsLocalVars.tmpName]);
    reportsLocalVars.tmpExchangeSalaryLoss = reportsLocalVars.tmpExchange * parseFloat(reportsLocalVars.agentSalaryRatesList[reportsLocalVars.tmpName]);
    if (paramFour == 3) {
      reportsLocalVars.tmpName = "Ким-ча весовая" + " " + reportsLocalVars.tmp[paramThree].netCost;
    }
  }
  if (paramTwo == 0) {

    reportsLocalVars.salary = parseFloat(reportsLocalVars.tmpSalary, 4);
    reportsLocalVars.netQuantity = parseFloat(reportsLocalVars.tmpNetQuantity, 10);
    reportsLocalVars.quantity = parseFloat(reportsLocalVars.tmpQuantity, 10);
    reportsLocalVars.exchangeQuantity = parseFloat(reportsLocalVars.tmpExchange, 10);
    reportsLocalVars.returnQuantity = parseFloat(reportsLocalVars.tmpReturn, 10);
    reportsLocalVars.total = parseFloat(reportsLocalVars.tmpTotal, 10);
    reportsLocalVars.totalNetCost = parseFloat(reportsLocalVars.tmpTotalNetCost, 10);
    reportsLocalVars.exchangeSalaryLoss = parseFloat(reportsLocalVars.tmpExchangeSalaryLoss, 4);
    reportsLocalVars.tmpName;

    Object.defineProperty(reportsLocalVars.exchangeSalaryLossList, reportsLocalVars.tmpName, {
       value: reportsLocalVars.exchangeSalaryLoss,
       writable: true,
       enumerable: true,
       configurable: true
    });
    Object.defineProperty(reportsLocalVars.salaryList, reportsLocalVars.tmpName, {
       value: reportsLocalVars.salary,
       writable: true,
       enumerable: true,
       configurable: true
    });
    Object.defineProperty(reportsLocalVars.netQuantityList, reportsLocalVars.tmpName, {
       value: reportsLocalVars.netQuantity,
       writable: true,
       enumerable: true,
       configurable: true
    });
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
    Object.defineProperty(reportsLocalVars.salesTotalNetCost, reportsLocalVars.tmpName, {
       value: reportsLocalVars.totalNetCost,
       writable: true,
       enumerable: true,
       configurable: true
    });
  }
  if (paramTwo == 1) {

    reportsLocalVars.quantity = parseFloat(reportsLocalVars.salesQuantity[reportsLocalVars.tmpName], 10) + parseFloat(reportsLocalVars.tmpQuantity, 10);
    reportsLocalVars.exchangeQuantity = parseFloat(reportsLocalVars.salesExchange[reportsLocalVars.tmpName], 10) + parseFloat(reportsLocalVars.tmpExchange, 10);
    reportsLocalVars.returnQuantity = parseFloat(reportsLocalVars.salesReturn[reportsLocalVars.tmpName], 10) + parseFloat(reportsLocalVars.tmpReturn, 10);
    reportsLocalVars.total = parseFloat(reportsLocalVars.salesTotal[reportsLocalVars.tmpName], 10) + parseFloat(reportsLocalVars.tmpTotal, 10);
    reportsLocalVars.totalNetCost = parseFloat(reportsLocalVars.salesTotalNetCost[reportsLocalVars.tmpName], 10) + parseFloat(reportsLocalVars.tmpTotalNetCost, 10);
    reportsLocalVars.netQuantity = parseFloat(reportsLocalVars.netQuantityList[reportsLocalVars.tmpName], 10) + parseFloat(reportsLocalVars.tmpNetQuantity, 10);
    reportsLocalVars.salary = parseFloat(reportsLocalVars.salaryList[reportsLocalVars.tmpName], 4) + parseFloat(reportsLocalVars.tmpSalary, 4);
    reportsLocalVars.exchangeSalaryLoss = parseFloat(reportsLocalVars.exchangeSalaryLossList[reportsLocalVars.tmpName], 4) + parseFloat(reportsLocalVars.tmpExchangeSalaryLoss, 4);

    reportsLocalVars.salesQuantity[reportsLocalVars.tmpName] = reportsLocalVars.quantity;
    reportsLocalVars.salesExchange[reportsLocalVars.tmpName] = reportsLocalVars.exchangeQuantity;
    reportsLocalVars.salesReturn[reportsLocalVars.tmpName] = reportsLocalVars.returnQuantity;
    reportsLocalVars.salesTotal[reportsLocalVars.tmpName] = reportsLocalVars.total;
    reportsLocalVars.salesTotalNetCost[reportsLocalVars.tmpName] = reportsLocalVars.totalNetCost;
    reportsLocalVars.netQuantityList[reportsLocalVars.tmpName] = reportsLocalVars.netQuantity;
    reportsLocalVars.salaryList[reportsLocalVars.tmpName] = reportsLocalVars.salary;
    reportsLocalVars.exchangeSalaryLossList[reportsLocalVars.tmpName] = reportsLocalVars.exchangeSalaryLoss;
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
        <div class='panel-heading col-100'><span>" + reportsLocalVars.chooseDayOfTheWeekLabel + "</span></div> \
        <div class='panel-body'> \
          <div class='radioContainer'><input type='radio' id='checkDayOne' name='chooseday' value='Понедельник'><label for='понедельник' id='radioLabel'>понедельник</label></div> \
          <div class='radioContainer'><input type='radio' id='checkDayTwo' name='chooseday' value='Вторник'><label for='вторник' id='radioLabel'>вторник</label></div> \
          <div class='radioContainer'><input type='radio' id='checkDayThree' name='chooseday' value='Среда'><label for='среда' id='radioLabel'>среда</label></div> \
          <div class='radioContainer'><input type='radio' id='checkDayFour' name='chooseday' value='Четверг'><label for='четверг' id='radioLabel'>четверг</label></div> \
          <div class='radioContainer'><input type='radio' id='checkDayFive' name='chooseday' value='Пятница'><label for='пятница' id='radioLabel'>пятница</label></div> \
          <div class='radioContainer'><input type='radio' id='checkDaySix' name='chooseday' value='Суббота'><label for='суббота' id='radioLabel'>суббота</label></div> \
        </div> \
      </div> \
      <div class='panel panel-custom border'> \
        <div class='panel-heading col-100'><span>" + reportsLocalVars.chooseAreaLable + "</span></div> \
        <div class='panel-body'> \
        <div class='radioContainer'><input type='radio' id='checkAreaOne' name='choosearea' onclick='handleClickArea(this);' value='1'><label for='Район 1' id='radioLabel'>Район 1</label></div> \
        <div class='radioContainer'><input type='radio' id='checkAreaTwo' name='choosearea' onclick='handleClickArea(this);' value='2'><label for='Район 2' id='radioLabel'>Район 2</label></div> \
        <div class='radioContainer'><input type='radio' id='checkAreaThree' name='choosearea' onclick='handleClickArea(this);' value='3'><label for='Район 3' id='radioLabel'>Район 3</label></div> \
        <div class='radioContainer'><input type='radio' id='checkAreaFour' name='choosearea' onclick='handleClickArea(this);' value='4'><label for='Район 4' id='radioLabel'>Район 4</label></div> \
        <div class='radioContainer'><input type='radio' id='checkAreaFive' name='choosearea' onclick='handleClickArea(this);' value='5'><label for='Район 5' id='radioLabel'>Район 5</label></div> \
        <div class='radioContainer'><input type='radio' id='checkAreaSeven' name='choosearea' onclick='handleClickArea(this);' value='7'><label for='Район 7' id='radioLabel'>Район 7</label></div> \
        </div> \
      </div> \
      <div class='panel panel-custom border'> \
        <div class='panel-heading col-100'><span>" + reportsLocalVars.chooseRootLabel + "</span></div> \
        <div class='panel-body'> \
          <div class='radioContainer'><input type='radio' id='checkRootMonday' name='chooseroot' onclick='handleClickRoot(this);' value='понедельник-четверг'><label for='понедельник-четверг' id='radioLabel'>понедельник-четверг</label></div> \
          <div class='radioContainer'><input type='radio' id='checkRootTuesday' name='chooseroot' onclick='handleClickRoot(this);' value='вторник-пятница'><label for='вторник-пятница' id='radioLabel'>вторник-пятница</label></div> \
          <div class='radioContainer'><input type='radio' id='checkRootWendsday' name='chooseroot' onclick='handleClickRoot(this);' value='среда'><label for='среда' id='radioLabel'>среда</label></div> \
          <div class='radioContainer'><input type='radio' id='checkRootAny' name='chooseroot' onclick='handleClickRoot(this);' value='любой'><label for='любой' id='radioLabel'>любой</label></div> \
          <div class='radioContainer'><input type='radio' id='checkRootNorth' name='chooseroot' onclick='handleClickRoot(this);' value='север'><label for='север' id='radioLabel'>север</label></div> \
        </div> \
      </div> \
      <div class='panel panel-custom border'> \
        <div class='panel-heading col-100'><span>" + reportsLocalVars.chooseSalesPartnerLable + "</span></div> \
        <div class='panel-body'> \
          <div class='areaList'> \
            <select name='salesPartnersList' id='optionGroup' size='5'> \
            </select> \
          </div> \
        </div> \
      </div> \
      <div class='panel panel-custom border'> \
        <div class='panel-body'> \
          <div class='col-50'><input type='submit' id='report-ceo' value='Подробный отчет'></div> \
          <div class='col-50'><input type='submit' id='report-sales-manager' value='Краткий отчет'></div> \
          <div class='col-50'><input type='submit' id='report-by-day' value='По дням'></div> \
          <div class='col-50'><input type='submit' id='salary-report' value='Зарплата'></div> \
          <div class='col-50'><input type='submit' id='report-by-netcost' value='По себестоимости'></div> \
          <div class='col-50'><input type='submit' id='report-by-sp' value='По магазинам'></div> \
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

this.renderReportTable = function(paramOne, paramTwo)	{
  if ($.trim(reportsLocalVars.dateStart) != '' && $.trim(reportsLocalVars.dateEnd) != '') {
    if (paramOne == 0) {
      reportsLocalVars.reportSubjectHead = reportsLocalVars.reportSubjectHeadSalesManagerLabel;
      reportsLocalVars.reportSubjectDash = reportsLocalVars.reportSubjectDashLabel;
    }
    if (paramOne == 1) {
      reportsLocalVars.reportSubjectHead = reportsLocalVars.reportSubjectHeadCEOLabel;
      reportsLocalVars.reportSubjectDash = reportsLocalVars.reportSubjectDashLabel;
    }
    if (paramOne == 2) {
      reportsLocalVars.reportSubjectHead = reportsLocalVars.reportSubjectHeadByDayLabel;
      reportsLocalVars.reportSubjectDash = reportsLocalVars.reportSubjectDashLabel;
      reportsLocalVars.reportSubjectHeadCheckedDay = ", " + reportsLocalVars.checkedDayValue;
      reportsLocalVars.reportSubjectHeadCheckedArea = ", район: " + reportsLocalVars.checkedAreaValue;
    }
    if (paramOne == 3) {
      reportsLocalVars.reportSubjectHead = reportsLocalVars.reportSubjectHeadByNetCostLabel;
      reportsLocalVars.reportSubjectDash = reportsLocalVars.reportSubjectDashLabel;
    }
    if (paramOne == 4) {
      reportsLocalVars.reportSubjectHead = reportsLocalVars.reportSubjectHeadSalaryLabel;
      reportsLocalVars.reportSubjectDash = reportsLocalVars.reportSubjectDashLabel;
      reportsLocalVars.reportSubjectHeadCheckedArea = "  " + reportsLocalVars.checkedAreaValue;
    }
  } else {
    if (paramOne == 0) {
      reportsLocalVars.reportSubjectHead = "Краткий отчет за последние 5 дней";
    }
    if (paramOne == 1) {
      reportsLocalVars.reportSubjectHead = "Подробный отчет за последние 5 дней";
    }
    if (paramOne == 2) {
      reportsLocalVars.reportSubjectHead = "Сквозной отчет за " + reportsLocalVars.checkedDayValue + ", район: " + reportsLocalVars.checkedAreaValue + ", за последние 5 дней";
    }
    if (paramOne == 3) {
      reportsLocalVars.reportSubjectHead = "Отчет относительно себестоимости за последние 5 дней";
    }
    if (paramOne == 4) {
      reportsLocalVars.reportSubjectHead = "Расчетный лист за последние 5 дней";
      reportsLocalVars.reportSubjectHeadCheckedArea = "  " + reportsLocalVars.checkedAreaValue;
    }
    reportsLocalVars.reportSubjectDash = "";
  }

  if (paramTwo == 0) {
     // <div class='reportSubject' style='float:left'>" + reportsLocalVars.header + "</div>
     reportsLocalVars.header = reportsLocalVars.reportSubjectHead + ' ' + reportsLocalVars.dateStart + ' ' + reportsLocalVars.reportSubjectDash + ' ' + reportsLocalVars.dateEnd +  ' ' + reportsLocalVars.reportSubjectHeadCheckedDay +  ' ' + reportsLocalVars.reportSubjectHeadCheckedArea;
     $(".reportContainer").show();
     $('div#connection-data').append(" \
       <div id='reportContainer' class='reportContainer'> \
         <a id='close' href='#' onclick='closeReportTable();'> \
           <div id='reportSubject'><table class='tableReportSubject' id='tableReportSubjectData'></table></div> \
           <img width='30px' style='float:right' src='../images/icons/black-close-icon-3.png' /> \
         </a> \
         <div id='tableContainer'><table class='tableData' id='tableData'></table></div> \
         <div id='tableSummaryHeader'><table id='tableSummaryHeaderData'></table></div> \
         <div id='tableSummaryContainer'><table id='tableSummaryData'></table></div><br /> \
         <button id='button-a'>Сохранить файл</button> \
       </div> \
     ");
     var tableReportSubjectRow = '<tbody><tr> \
                         <td>' + reportsLocalVars.dummy + '</td> \
                         <td>' + reportsLocalVars.dummy + '</td> \
                         <td>' + reportsLocalVars.header + '</td> \
                       </tr></tbody>';
     $("#tableReportSubjectData").append(tableReportSubjectRow);
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
                           <td>' + Object.keys(reportsLocalVars.salesQuantity)[i] + '</td> \
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
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.salesQuantityLabel + "</td> \
         <td>" + reportsLocalVars.sumLabel + "</td> \
       </tr><tr class='tableSeparator'></tr>\
     ");
     $("#tableSummaryData").append(" \
       <tr> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.totalExchangeQuantityLabel + "</td> \
         <td>" + reportsLocalVars.totalExchangeQuantity.toFixed(2) + "</td> \
         <td>" + reportsLocalVars.totalExchangeQuantitySum.toFixed(2) + "</td> \
       </tr> \
       <tr> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.totalExchangeWeightLabel + "</td> \
         <td>" + reportsLocalVars.totalExchangeWeight.toFixed(2) + "</td> \
         <td>" + reportsLocalVars.totalExchangeWeightSum.toFixed(2) + "</td> \
       </tr> \
       <tr> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.totalExchangeSumLabel + "</td> \
         <td></td> \
         <td>" + reportsLocalVars.totalExchangeSum.toFixed(2) + "</td> \
       </tr> <tr class='tableSeparator'></tr>\
       <tr> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.totalReturnQuantityLabel + "</td> \
         <td>" + reportsLocalVars.totalReturnQuantity.toFixed(2) + "</td> \
         <td>" + reportsLocalVars.totalReturnQuantitySum.toFixed(2) + "</td> \
       </tr> \
       <tr> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.totalReturnWeightLabel + "</td> \
         <td>" + reportsLocalVars.totalReturnWeight.toFixed(2) + "</td> \
         <td>" + reportsLocalVars.totalReturnWeightSum.toFixed(2) + "</td> \
       </tr> \
       <tr> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.totalReturnSumLabel + "</td> \
         <td></td> \
         <td>" + reportsLocalVars.totalReturnSum.toFixed(2) + "</td> \
       </tr> <tr class='tableSeparator'></tr>\
       <tr> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.totalSalesQuantityLabel + "</td> \
         <td>" + reportsLocalVars.totalSalesQuantity.toFixed(2) + "</td> \
         <td>" + reportsLocalVars.totalSalesQuantitySum.toFixed(2) + "</td> \
       </tr> \
       <tr> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.totalSalesWeightLabel + "</td> \
         <td>" + reportsLocalVars.totalSalesWeight.toFixed(2) + "</td> \
         <td>" + reportsLocalVars.totalSalesWeightSum.toFixed(2) + "</td> \
       </tr> \
       <tr> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.totalSalesSumLabel + "</td> \
         <td></td> \
         <td>" + reportsLocalVars.totalSalesSum.toFixed(2) + "</td> \
       </tr> \
     ");
   }

  if (paramTwo == 1) {
    reportsLocalVars.header = reportsLocalVars.reportSubjectHead + ' ' + reportsLocalVars.dateStart + ' ' + reportsLocalVars.reportSubjectDash + ' ' + reportsLocalVars.dateEnd + reportsLocalVars.reportSubjectHeadCheckedDay + reportsLocalVars.reportSubjectHeadCheckedArea;
    $(".reportContainer").show();
    $('div#connection-data').append(" \
      <div id='reportContainer' class='reportContainer'> \
        <a id='close' href='#' onclick='closeReportTable();'> \
          <div id='reportSubject'><table class='tableReportSubject' id='tableReportSubjectData'></table></div> \
          <img width='30px' style='float:right' src='../images/icons/black-close-icon-3.png' /> \
        </a> \
        <div id='tableContainer'><table class='tableData' id='tableData'></table></div> \
        <div id='tableSummaryHeader'><table id='tableSummaryHeaderData'></table></div> \
        <div id='tableSummaryContainer'><table id='tableSummaryData'></table></div><br /> \
        <button id='button-a'>Сохранить файл</button> \
      </div> \
    ");
    var tableReportSubjectRow = '<tbody><tr> \
                        <td>' + reportsLocalVars.dummy + '</td> \
                        <td>' + reportsLocalVars.dummy + '</td> \
                        <td>' + reportsLocalVars.header + '</td> \
                      </tr></tbody>';
    $("#tableReportSubjectData").append(tableReportSubjectRow);
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
                          <td>' + Object.keys(reportsLocalVars.salesQuantity)[i] + '</td> \
                          <td>' + reportsLocalVars.salesQuantity[Object.keys(reportsLocalVars.salesQuantity)[i]].toFixed(2) + '</td> \
                          <td>' + reportsLocalVars.salesTotalNetCost[Object.keys(reportsLocalVars.salesTotalNetCost)[i]].toFixed(2) + '</td> \
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
        <td>" + reportsLocalVars.dummy + "</td> \
        <td>" + reportsLocalVars.dummy + "</td> \
        <td>" + reportsLocalVars.dummy + "</td> \
        <td>" + reportsLocalVars.salesQuantityLabel + "</td> \
        <td>" + reportsLocalVars.sumLabel + "</td> \
      </tr><tr class='tableSeparator'></tr>\
    ");
    $("#tableSummaryData").append(" \
      <tr> \
        <td>" + reportsLocalVars.dummy + "</td> \
        <td>" + reportsLocalVars.dummy + "</td> \
        <td>" + reportsLocalVars.totalExchangeQuantityLabel + "</td> \
        <td>" + reportsLocalVars.totalExchangeQuantity.toFixed(2) + "</td> \
        <td>" + reportsLocalVars.totalExchangeQuantitySumNetCost.toFixed(2) + "</td> \
      </tr> \
      <tr> \
        <td>" + reportsLocalVars.dummy + "</td> \
        <td>" + reportsLocalVars.dummy + "</td> \
        <td>" + reportsLocalVars.totalExchangeWeightLabel + "</td> \
        <td>" + reportsLocalVars.totalExchangeWeight.toFixed(2) + "</td> \
        <td>" + reportsLocalVars.totalExchangeWeightSumNetCost.toFixed(2) + "</td> \
      </tr> \
      <tr> \
        <td>" + reportsLocalVars.dummy + "</td> \
        <td>" + reportsLocalVars.dummy + "</td> \
        <td>" + reportsLocalVars.totalExchangeSumLabel + "</td> \
        <td></td> \
        <td>" + reportsLocalVars.totalExchangeSumNetCost.toFixed(2) + "</td> \
      </tr> <tr class='tableSeparator'></tr>\
      <tr> \
        <td>" + reportsLocalVars.dummy + "</td> \
        <td>" + reportsLocalVars.dummy + "</td> \
        <td>" + reportsLocalVars.totalReturnQuantityLabel + "</td> \
        <td>" + reportsLocalVars.totalReturnQuantity.toFixed(2) + "</td> \
        <td>" + reportsLocalVars.totalReturnQuantitySumNetCost.toFixed(2) + "</td> \
      </tr> \
      <tr> \
        <td>" + reportsLocalVars.dummy + "</td> \
        <td>" + reportsLocalVars.dummy + "</td> \
        <td>" + reportsLocalVars.totalReturnWeightLabel + "</td> \
        <td>" + reportsLocalVars.totalReturnWeight.toFixed(2) + "</td> \
        <td>" + reportsLocalVars.totalReturnWeightSumNetCost.toFixed(2) + "</td> \
      </tr> \
      <tr> \
        <td>" + reportsLocalVars.dummy + "</td> \
        <td>" + reportsLocalVars.dummy + "</td> \
        <td>" + reportsLocalVars.totalReturnSumLabel + "</td> \
        <td></td> \
        <td>" + reportsLocalVars.totalReturnSumNetCost.toFixed(2) + "</td> \
      </tr> <tr class='tableSeparator'></tr>\
      <tr> \
        <td>" + reportsLocalVars.dummy + "</td> \
        <td>" + reportsLocalVars.dummy + "</td> \
        <td>" + reportsLocalVars.totalSalesQuantityLabel + "</td> \
        <td>" + reportsLocalVars.totalSalesQuantity.toFixed(2) + "</td> \
        <td>" + reportsLocalVars.totalSalesQuantitySumNetCost.toFixed(2) + "</td> \
      </tr> \
      <tr> \
        <td>" + reportsLocalVars.dummy + "</td> \
        <td>" + reportsLocalVars.dummy + "</td> \
        <td>" + reportsLocalVars.totalSalesWeightLabel + "</td> \
        <td>" + reportsLocalVars.totalSalesWeight.toFixed(2) + "</td> \
        <td>" + reportsLocalVars.totalSalesWeightSumNetCost.toFixed(2) + "</td> \
      </tr> \
      <tr> \
        <td>" + reportsLocalVars.dummy + "</td> \
        <td>" + reportsLocalVars.dummy + "</td> \
        <td>" + reportsLocalVars.totalSalesSumLabel + "</td> \
        <td></td> \
        <td>" + reportsLocalVars.totalSalesSumNetCost.toFixed(2) + "</td> \
      </tr> \
    ");
  }

  if (paramTwo == 2) {

     reportsLocalVars.header = reportsLocalVars.reportSubjectHead + ' ' + reportsLocalVars.dateStart + ' ' + reportsLocalVars.reportSubjectDash + ' ' + reportsLocalVars.dateEnd +  ' Район № ' + reportsLocalVars.reportSubjectHeadCheckedArea;
     $(".reportContainer").show();
     $('div#connection-data').append(" \
       <div id='reportContainer' class='reportContainer'> \
         <a id='close' href='#' onclick='closeReportTable();'> \
           <div id='reportSubject'><table class='tableReportSubject' id='tableReportSubjectData'></table></div> \
           <img width='30px' style='float:right' src='../images/icons/black-close-icon-3.png' /> \
         </a> \
         <div id='tableContainer'><table class='tableData' id='tableData'></table></div> \
         <div id='tableSummaryHeader'><table id='tableSummaryHeaderData'></table></div> \
         <div id='tableSummaryContainer'><table id='tableSummaryData'></table></div><br /> \
         <button id='button-a'>Сохранить файл</button> \
       </div> \
     ");
     var tableReportSubjectRow = '<tbody><tr> \
                         <td>' + reportsLocalVars.dummy + '</td> \
                         <td>' + reportsLocalVars.dummy + '</td> \
                         <td>' + reportsLocalVars.header + '</td> \
                       </tr></tbody>';
     $("#tableReportSubjectData").append(tableReportSubjectRow);
     var tableHeaderRow = '<tbody><tr> \
                         <td>' + reportsLocalVars.IDLabel + '</td> \
                         <td>' + reportsLocalVars.rateLabel + '</td> \
                         <td>' + reportsLocalVars.itemNameLabel + '</td> \
                         <td>' + reportsLocalVars.netQuantityLabel + '</td> \
                         <td>' + reportsLocalVars.salaryLabel + '</td> \
                       </tr></tbody>';
     var triggerHeader = true;
     for (var i = 0; i < Object.keys(reportsLocalVars.salesQuantity).length; i++) {

       reportsLocalVars.totalSalary += parseFloat(reportsLocalVars.salaryList[Object.keys(reportsLocalVars.salesQuantity)[i]]);

       if (Object.keys(reportsLocalVars.salesQuantity)[i] == "Ким-ча весовая" ||
        Object.keys(reportsLocalVars.salesQuantity)[i] == "Редька по-восточному весовая" ||
        Object.keys(reportsLocalVars.salesQuantity)[i] == "Ким-ча традиционная 500" ||
        Object.keys(reportsLocalVars.salesQuantity)[i] == "Ким-ча традиционная 250" ||
        Object.keys(reportsLocalVars.salesQuantity)[i] == "Ким-ча премиум 500" ||
        Object.keys(reportsLocalVars.salesQuantity)[i] == "Ким-ча премиум 250" ||
        Object.keys(reportsLocalVars.salesQuantity)[i] == "Ким-ча 450" ||
        Object.keys(reportsLocalVars.salesQuantity)[i] == "Ким-ча 250" ||
        Object.keys(reportsLocalVars.salesQuantity)[i] == "Горчица") {
          if (Object.keys(reportsLocalVars.salesQuantity)[i] == "Ким-ча весовая") {
            reportsLocalVars.totalExchangeWeightLossSalary += parseFloat(reportsLocalVars.exchangeSalaryLossList[Object.keys(reportsLocalVars.salesQuantity)[i]]);
            reportsLocalVars.totalReturnWeight += reportsLocalVars.salesReturn[Object.keys(reportsLocalVars.salesQuantity)[i]];
            reportsLocalVars.totalReturnWeightLossSalary += reportsLocalVars.salesReturn[Object.keys(reportsLocalVars.salesQuantity)[i]] * parseFloat(reportsLocalVars.agentSalaryRatesList[Object.keys(reportsLocalVars.salesQuantity)[i]]);
            reportsLocalVars.totalNetWeight += parseFloat(reportsLocalVars.netQuantityList[Object.keys(reportsLocalVars.salesQuantity)[i]]);
            reportsLocalVars.totalNetWeightSalary += parseFloat(reportsLocalVars.netQuantityList[Object.keys(reportsLocalVars.salesQuantity)[i]]) * parseFloat(reportsLocalVars.agentSalaryRatesList[Object.keys(reportsLocalVars.salesQuantity)[i]]);
          }
          if (Object.keys(reportsLocalVars.salesQuantity)[i] == "Редька по-восточному весовая") {
            reportsLocalVars.totalExchangeWeightLossSalary += parseFloat(reportsLocalVars.exchangeSalaryLossList[Object.keys(reportsLocalVars.salesQuantity)[i]]);
            reportsLocalVars.totalReturnWeight += reportsLocalVars.salesReturn[Object.keys(reportsLocalVars.salesQuantity)[i]];
            reportsLocalVars.totalReturnWeightLossSalary += reportsLocalVars.salesReturn[Object.keys(reportsLocalVars.salesQuantity)[i]] * parseFloat(reportsLocalVars.agentSalaryRatesList[Object.keys(reportsLocalVars.salesQuantity)[i]]);
            reportsLocalVars.totalNetWeight += parseFloat(reportsLocalVars.netQuantityList[Object.keys(reportsLocalVars.salesQuantity)[i]]);
            reportsLocalVars.totalNetWeightSalary += parseFloat(reportsLocalVars.netQuantityList[Object.keys(reportsLocalVars.salesQuantity)[i]]) * parseFloat(reportsLocalVars.agentSalaryRatesList[Object.keys(reportsLocalVars.salesQuantity)[i]]);
          }
          if (Object.keys(reportsLocalVars.salesQuantity)[i] == "Горчица") {
            reportsLocalVars.totalExchangeQuantityLossSalary += parseFloat(reportsLocalVars.exchangeSalaryLossList[Object.keys(reportsLocalVars.salesQuantity)[i]]);
            reportsLocalVars.totalReturnQuantity += reportsLocalVars.salesReturn[Object.keys(reportsLocalVars.salesQuantity)[i]];
            reportsLocalVars.totalReturnQuantityLossSalary += reportsLocalVars.salesReturn[Object.keys(reportsLocalVars.salesQuantity)[i]] * parseFloat(reportsLocalVars.agentSalaryRatesList[Object.keys(reportsLocalVars.salesQuantity)[i]]);
            reportsLocalVars.totalNetQuantityMustard += reportsLocalVars.netQuantityList[Object.keys(reportsLocalVars.salesQuantity)[i]];
            reportsLocalVars.totalNetQuantityMustardSalary += reportsLocalVars.netQuantityList[Object.keys(reportsLocalVars.salesQuantity)[i]] * parseFloat(reportsLocalVars.agentSalaryRatesList[Object.keys(reportsLocalVars.salesQuantity)[i]]);
          }
          if (Object.keys(reportsLocalVars.salesQuantity)[i] == "Ким-ча традиционная 500" ||
             Object.keys(reportsLocalVars.salesQuantity)[i] == "Ким-ча традиционная 250" ||
             Object.keys(reportsLocalVars.salesQuantity)[i] == "Ким-ча премиум 500" ||
             Object.keys(reportsLocalVars.salesQuantity)[i] == "Ким-ча премиум 250") {
               reportsLocalVars.totalExchangeQuantityLossSalary += parseFloat(reportsLocalVars.exchangeSalaryLossList[Object.keys(reportsLocalVars.salesQuantity)[i]]);
               reportsLocalVars.totalReturnQuantity += reportsLocalVars.salesReturn[Object.keys(reportsLocalVars.salesQuantity)[i]];
               reportsLocalVars.totalReturnQuantityLossSalary += reportsLocalVars.salesReturn[Object.keys(reportsLocalVars.salesQuantity)[i]] * parseFloat(reportsLocalVars.agentSalaryRatesList[Object.keys(reportsLocalVars.salesQuantity)[i]]);
               reportsLocalVars.totalNetQuantitySpecial += reportsLocalVars.netQuantityList[Object.keys(reportsLocalVars.salesQuantity)[i]];
               reportsLocalVars.totalNetQuantitySpecialSalary += reportsLocalVars.netQuantityList[Object.keys(reportsLocalVars.salesQuantity)[i]] * parseFloat(reportsLocalVars.agentSalaryRatesList[Object.keys(reportsLocalVars.salesQuantity)[i]]);
          }
          if (Object.keys(reportsLocalVars.salesQuantity)[i] == "Ким-ча 450" ||
             Object.keys(reportsLocalVars.salesQuantity)[i] == "Ким-ча 250") {
               reportsLocalVars.totalExchangeQuantityLossSalary += parseFloat(reportsLocalVars.exchangeSalaryLossList[Object.keys(reportsLocalVars.salesQuantity)[i]]);
               reportsLocalVars.totalReturnQuantity += reportsLocalVars.salesReturn[Object.keys(reportsLocalVars.salesQuantity)[i]];
               reportsLocalVars.totalReturnQuantityLossSalary += reportsLocalVars.salesReturn[Object.keys(reportsLocalVars.salesQuantity)[i]] * parseFloat(reportsLocalVars.agentSalaryRatesList[Object.keys(reportsLocalVars.salesQuantity)[i]]);
               reportsLocalVars.totalNetQuantityCan += reportsLocalVars.netQuantityList[Object.keys(reportsLocalVars.salesQuantity)[i]];
               reportsLocalVars.totalNetQuantityCanSalary += reportsLocalVars.netQuantityList[Object.keys(reportsLocalVars.salesQuantity)[i]] * parseFloat(reportsLocalVars.agentSalaryRatesList[Object.keys(reportsLocalVars.salesQuantity)[i]]);
          }
       } else {
         reportsLocalVars.totalExchangeQuantityLossSalary += parseFloat(reportsLocalVars.exchangeSalaryLossList[Object.keys(reportsLocalVars.salesQuantity)[i]]);
         reportsLocalVars.totalReturnQuantity += reportsLocalVars.salesReturn[Object.keys(reportsLocalVars.salesQuantity)[i]] * parseFloat(reportsLocalVars.agentSalaryRatesList[Object.keys(reportsLocalVars.salesQuantity)[i]]);
         reportsLocalVars.totalReturnQuantityLossSalary += reportsLocalVars.salesReturn[Object.keys(reportsLocalVars.salesQuantity)[i]] * parseFloat(reportsLocalVars.agentSalaryRatesList[Object.keys(reportsLocalVars.salesQuantity)[i]]);
         reportsLocalVars.totalNetQuantityOrdinary += reportsLocalVars.netQuantityList[Object.keys(reportsLocalVars.salesQuantity)[i]];
         reportsLocalVars.totalNetQuantityOrdinarySalary += reportsLocalVars.netQuantityList[Object.keys(reportsLocalVars.salesQuantity)[i]] * parseFloat(reportsLocalVars.agentSalaryRatesList[Object.keys(reportsLocalVars.salesQuantity)[i]]);
       }

      reportsLocalVars.totalReturnQuantityWeightLossSalary = reportsLocalVars.totalReturnQuantityLossSalary + reportsLocalVars.totalReturnWeightLossSalary;

       var productLine = '<tbody><tr> \
                           <td>' + (i + 1) + '</td> \
                           <td>' + reportsLocalVars.agentSalaryRatesList[Object.keys(reportsLocalVars.salesQuantity)[i]] + '</td> \
                           <td>' + Object.keys(reportsLocalVars.salesQuantity)[i] + '</td> \
                           <td>' + reportsLocalVars.netQuantityList[Object.keys(reportsLocalVars.salesQuantity)[i]].toFixed(2) + '</td> \
                           <td>' + reportsLocalVars.salaryList[Object.keys(reportsLocalVars.salesQuantity)[i]].toFixed(2) + '</td> \
                         </tr></tbody>';
       if (triggerHeader == true) {
         $("#tableData").append(tableHeaderRow);
         triggerHeader = false;
       }
       $("#tableData").append(productLine);
     }
     $("#tableData").append("<script type='text/javascript' src='../js/createexcel.js'></script>")
     $("#tableSummaryHeaderData").append(" \
       <tr> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.salesQuantityLabel + "</td> \
         <td>" + reportsLocalVars.sumLabel + "</td> \
       </tr><tr class='tableSeparator'></tr>\
     ");
     $("#tableSummaryData").append(" \
       <tr> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.totalSalesSumLabel + "</td> \
         <td></td> \
         <td>" + reportsLocalVars.totalSalesSum.toFixed(2) + "</td> \
       </tr> \
       <tr> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.totalExchangeSumLabel + "</td> \
         <td></td> \
         <td>" + reportsLocalVars.totalExchangeSum.toFixed(2) + "</td> \
       </tr><tr class='tableSeparator'></tr>\
       <tr> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.totalExchangeQuantityLabel + "</td> \
         <td>" + reportsLocalVars.totalExchangeQuantity.toFixed(2) + "</td> \
         <td>" + reportsLocalVars.totalExchangeQuantityLossSalary.toFixed(2) + "</td> \
       </tr> \
       <tr> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.totalExchangeWeightLabel + "</td> \
         <td>" + reportsLocalVars.totalExchangeWeight.toFixed(2) + "</td> \
         <td>" + reportsLocalVars.totalExchangeWeightLossSalary.toFixed(2) + "</td> \
       </tr> \
       <tr> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.totalReturnLabel + "</td> \
         <td></td> \
         <td>" + reportsLocalVars.totalReturnQuantityWeightLossSalary.toFixed(2) + "</td> \
       </tr> <tr class='tableSeparator'></tr>\
       <tr> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.totalNetQuantitySpecialLabel + "</td> \
         <td>" + reportsLocalVars.totalNetQuantitySpecial + "</td> \
         <td>" + reportsLocalVars.totalNetQuantitySpecialSalary.toFixed(2) + "</td> \
       </tr> \
       <tr> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.totalNetQuantityCanLabel + "</td> \
         <td>" + reportsLocalVars.totalNetQuantityCan + "</td> \
         <td>" + reportsLocalVars.totalNetQuantityCanSalary.toFixed(2) + "</td> \
       </tr> \
       <tr> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.totalNetQuantityMustardLabel + "</td> \
         <td>" + reportsLocalVars.totalNetQuantityMustard + "</td> \
         <td>" + reportsLocalVars.totalNetQuantityMustardSalary.toFixed(2) + "</td> \
       </tr> <tr class='tableSeparator'></tr>\
       <tr> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.totalNetQuantityOrdinaryLabel + "</td> \
         <td>" + reportsLocalVars.totalNetQuantityOrdinary + "</td> \
         <td>" + reportsLocalVars.totalNetQuantityOrdinarySalary.toFixed(2) + "</td> \
       </tr> \
       <tr> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.totalNetWeightLabel + "</td> \
         <td>" + reportsLocalVars.totalNetWeight.toFixed(2) + "</td> \
         <td>" + reportsLocalVars.totalNetWeightSalary.toFixed(2) + "</td> \
       </tr> \
       <tr> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.dummy + "</td> \
         <td>" + reportsLocalVars.totalSalaryLabel + "</td> \
         <td></td> \
         <td>" + reportsLocalVars.totalSalary.toFixed(2) + "</td> \
       </tr> \
     ");
   }

  $(".reportMenuContainer").html("");
  $(".reportMenuContainer").hide();
}
