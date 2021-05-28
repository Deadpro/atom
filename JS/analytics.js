$('#analytics').on('click', function() {
  renderAnalyticsOptions();
  toTop("connection-data");
});

$('#analyticsExecuteChoiceDetailed').on('click', function() {
  recieveAnalyticsData('analyticsExecuteChoiceDetailed');
});

$('#analyticsExecuteChoiceSummary').on('click', function() {
  recieveAnalyticsData('analyticsExecuteChoiceSummary');
});

$('#analyticsExecuteChoiceRaw').on('click', function() {
  recieveAnalyticsData('analyticsExecuteChoiceRaw');
});

this.recieveAnalyticsData = async function(type) {
  analytics.dateControl = document.querySelector('input[type="date"]');
  let analyticsType = document.getElementById(type).value;
  for (var i = 0; i < 6; i++) {
    if (document.getElementById(analytics.checkRadio[i]).checked == true) {
      analytics.checkedValue = document.getElementById(analytics.checkRadio[i]).value;
    }
  }
  analytics.dateStart = $('input#dateStart').val();
  analytics.dateEnd = $('input#dateEnd').val();
  await $.post('../php/receiveReportData.php', {dbName: localStorage.getItem('dbName'), dbUser: localStorage.getItem('dbUser'),
                                          dbPassword: localStorage.getItem('dbPassword'), dateStart: analytics.dateStart,
                                          dateEnd: analytics.dateEnd, area: analytics.checkedValue,
                                          reportType: "analytics"}, function(data) {
    analytics.tmp = JSON.parse(data);
  });
  if (analyticsType == "Сводный анализ") {
    // await calcAnalytics();
    createAnalyticsReport(analyticsType);
  } else {
    createAnalyticsReport(analyticsType);
  }
}

this.tableHeaderRowFunc = function() {
   commonLabels.tableHeaderRow  = tableConstructor.tbodyOpen + tableConstructor.trOpen +
                                         tableConstructor.tdOpen + commonLabels.ID + tableConstructor.tdClose +
                                         tableConstructor.tdOpen + commonLabels.invoiceID + tableConstructor.tdClose +
                                         tableConstructor.tdOpen + commonLabels.areaID + tableConstructor.tdClose +
                                         tableConstructor.tdOpen + commonLabels.salesPartnerName + tableConstructor.tdClose +
                                         tableConstructor.tdOpen + commonLabels.itemName + tableConstructor.tdClose +
                                         tableConstructor.tdOpen + commonLabels.quantity + tableConstructor.tdClose +
                                         tableConstructor.tdOpen + commonLabels.returnQuantity + tableConstructor.tdClose +
                                         tableConstructor.tdOpen + commonLabels.invoiceSum + tableConstructor.tdClose +
                                         tableConstructor.tdOpen + commonLabels.date + tableConstructor.tdClose +
                                         tableConstructor.trClose + tableConstructor.tbodyClose;
}

this.renderAnalyticsOptions = function() {
  let currScriptName = "analytics";
  $('div#connection-data').html("");
  $('div#connection-data').append(" \
    <div id='" + currScriptName + " menuContainer' class='" + currScriptName + " menuContainer'> \
      <div class='panel panel-custom border'> \
        <div class='panel-heading col-100'><span>" + commonLabels.choosePeriod + "</span></div> \
        <div class='panel-body'> \
          <div class='col-60'>" + commonLabels.dateStartLabel + "</div><div class='col-40'><input type='date' id='dateStart'></div> \
          <div class='col-60'>" + commonLabels.dateEndLabel + "</div><div class='col-40'><input type='date' id='dateEnd'></div> \
        </div> \
      </div> \
      <div class='panel panel-custom border'> \
        <div class='panel-heading col-100'><span>" + commonLabels.chooseArea + "</span></div> \
        <div class='panel-body'> \
           <div class='radioContainer'><input type='radio' id='checkOne' name='chooseone' value='1'><label for='Район 1' id='radioLabel'>Район 1</label></div> \
           <div class='radioContainer'><input type='radio' id='checkTwo' name='chooseone' value='2'><label for='Район 2' id='radioLabel'>Район 2</label></div> \
           <div class='radioContainer'><input type='radio' id='checkThree' name='chooseone' value='3'><label for='Район 3' id='radioLabel'>Район 3</label></div> \
           <div class='radioContainer'><input type='radio' id='checkFour' name='chooseone' value='4'><label for='Район 4' id='radioLabel'>Район 4</label></div> \
           <div class='radioContainer'><input type='radio' id='checkFive' name='chooseone' value='5'><label for='Район 5' id='radioLabel'>Район 5</label></div> \
           <div class='radioContainer'><input type='radio' id='checkSeven' name='chooseone' value='7'><label for='Район 7' id='radioLabel'>Район 7</label></div> \
        </div> \
      </div> \
      <div class='panel panel-custom border'> \
        <div class='panel-body'> \
          <div class='col-50'><input type='submit' id='analyticsExecuteChoiceDetailed' value='Подробный анализ'></div> \
          <div class='col-50'><input type='submit' id='analyticsExecuteChoiceSummary' value='Сводный анализ'></div> \
          <div class='col-50'><input type='submit' id='analyticsExecuteChoiceRaw' value='Без анализа'></div> \
        </div> \
      </div> \
    </div> \
    <script src='../js/globalVariables.js' type='text/javascript' ></script> \
    <script src='../js/analytics.js' type='text/javascript' ></script> \
  ");
  if (commonLabels.dateStart != "" && commonLabels.dateEnd != "") {
     $('input#dateStart').val(commonLabels.dateStart);
     $('input#dateEnd').val(commonLabels.dateEnd);
  }
  $(".loginContainer").html("");
  $(".loginContainer").hide();
}

this.createAnalyticsReport = function(analyticsType) {
  let currScriptName = "analytics";
  tableHeaderRowFunc();
  $('div#connection-data').html("");
  $(".analytics").show();
  $('div#connection-data').append(" \
    <div id='" + currScriptName + "Container' class='" + currScriptName + " container'> \
      <div id='closeAnalytics' href='#' onclick='closeAnalyticsTable();'> \
        <img width='30px' style='float:right' src='../images/icons/black-close-icon-3.png' /> \
        <div class='analyticsSubject' style='float:left'>" + analytics.subjectHead + ' ' + analytics.dateStart + ' ' + commonLabels.dash + ' ' + analytics.dateEnd + "</div> \
      </div> \
      <div id='tableContainer'> \
        <table class='tableDataAnalytics' id='tableDataAnalytics'></table> \
      </div> \
    </div> \
  ");
  renderAnalyticsTable(analyticsType);
  let saveTrigger = false;
  for (var i = 0; i < Object.keys(analytics.tmp).length; i++) {
    if (analytics.tmp[i].Quantity > 0 && saveTrigger == false) {
      saveTrigger = true;
    }
  }
  if (saveTrigger == true) {
    $("#tableContainer").append(" \
                                <br><br> \
                                <button id='saveAnalytics'>Сохранить Аналитику</button> \
                                <br><br> \
                                <script type='text/javascript' src='../js/createexcel.js'></script> \
                                ");
  }
}

this.renderAnalyticsTable = function(analyticsType) {

  var tableHeaderRow = commonLabels.tableHeaderRow;
  var count = 0;
  let triggerAnalytics = true;
  var tableRow;
  for (var i = 0; i < Object.keys(analytics.tmp).length; i++) {
    if (analyticsType == 'Подробный анализ') {
      if (parseFloat(analytics.tmp[i].ExchangeQuantity) >= parseFloat(analytics.tmp[i].Quantity)) {

        var dTStrSource = analytics.tmp[i].DateTimeDocLocal;
        var dt = new Date(dTStrSource);
        var dTStrOut = formatDate(dt);
        count += 1;
        tableRow = '<tbody><tr> \
                            <td>' + count + '</td> \
                            <td>' + analytics.tmp[i].InvoiceNumber + '</td> \
                            <td>' + analytics.tmp[i].AgentID + '</td> \
                            <td>' + analytics.tmp[i].spName + '</td> \
                            <td>' + analytics.tmp[i].itemName + '</td> \
                            <td>' + analytics.tmp[i].Quantity + '</td> \
                            <td>' + analytics.tmp[i].ExchangeQuantity + '</td> \
                            <td>' + analytics.tmp[i].InvoiceSum + '</td> \
                            <td>' + dTStrOut + '</td> \
                          </tr></tbody>';
        if (triggerAnalytics == true) {
           $("#tableDataAnalytics").html("");
           $("#tableDataAnalytics").append(tableHeaderRow);
           triggerAnalytics = false;
        }
        $("#tableDataAnalytics").append(tableRow);
      }
    }
    if (analyticsType == 'Сводный анализ') {
      var dTStrSource = analytics.tmp[i].DateTimeDocLocal;
      var dt = new Date(dTStrSource);
      var dTStrOut = formatDate(dt);
      // if (analytics.tmp[i].InvoiceNumber == analytics.tmp[i + 1].InvoiceNumber) {
      //   if (analytics.tmp[i].itemName == analytics.tmp[i + 1].itemName) {
      //
      //   }
      // }
      count += 1;
      tableRow = '<tbody><tr> \
                          <td>' + count + '</td> \
                          <td>' + analytics.tmp[i].InvoiceNumber + '</td> \
                          <td>' + analytics.tmp[i].AgentID + '</td> \
                          <td>' + analytics.tmp[i].spName + '</td> \
                          <td>' + analytics.tmp[i].itemName + '</td> \
                          <td>' + analytics.tmp[i].Quantity + '</td> \
                          <td>' + analytics.tmp[i].ExchangeQuantity + '</td> \
                          <td>' + analytics.tmp[i].InvoiceSum + '</td> \
                          <td>' + dTStrOut + '</td> \
                        </tr></tbody>';

      if (triggerAnalytics == true) {
         $("#tableDataAnalytics").html("");
         $("#tableDataAnalytics").append(tableHeaderRow);
         triggerAnalytics = false;
      }
      $("#tableDataAnalytics").append(tableRow);
    }
    if (analyticsType == 'Без анализа') {
      var dTStrSource = analytics.tmp[i].DateTimeDocLocal;
      var dt = new Date(dTStrSource);
      var dTStrOut = formatDate(dt);
      count += 1;
      tableRow = '<tbody><tr> \
                          <td>' + count + '</td> \
                          <td>' + analytics.tmp[i].InvoiceNumber + '</td> \
                          <td>' + analytics.tmp[i].AgentID + '</td> \
                          <td>' + analytics.tmp[i].spName + '</td> \
                          <td>' + analytics.tmp[i].itemName + '</td> \
                          <td>' + analytics.tmp[i].Quantity + '</td> \
                          <td>' + analytics.tmp[i].ExchangeQuantity + '</td> \
                          <td>' + analytics.tmp[i].InvoiceSum + '</td> \
                          <td>' + dTStrOut + '</td> \
                        </tr></tbody>';

      if (triggerAnalytics == true) {
         $("#tableDataAnalytics").html("");
         $("#tableDataAnalytics").append(tableHeaderRow);
         triggerAnalytics = false;
      }
      $("#tableDataAnalytics").append(tableRow);
    }
  }
}

this.calcAnalytics = function() {

  for (var i = 0; i < Object.keys(analytics.tmp).length; i++) {
    if (Object.keys(analytics.salesQuantity).length > 0) {
      for (var key in analytics.salesQuantity) {
        if (key == analytics.tmp[i].InvoiceNumber + " " + analytics.tmp[i].SalesPartnerID + " " + analytics.tmp[i].itemName) {
          createObject(0, 1, i);
        }
      }
      if (analytics.trigger == false) {
        createObject(0, 0, i);
      }
    } else {
      createObject(0, 0, i);
    }
  }
}

this.createObject = function(paramOne, paramTwo, i) {

  analytics.tmpName = analytics.tmp[i].InvoiceNumber + " " + analytics.tmp[i].SalesPartnerID + " " + analytics.tmp[i].itemName
  reportsLocalVars.tmpQuantity = parseFloat(analytics.tmp[i].Quantity, 10);

  if (paramTwo == 0) {

    Object.defineProperty(analytics.salesQuantity, analytics.tmpName, {
       value: analytics.tmpQuantity,
       writable: true,
       enumerable: true,
       configurable: true
    });
  }
  if (paramTwo == 1) {

    analytics.quantity = parseFloat(analytics.salesQuantity[analytics.tmpName], 10) + parseFloat(analytics.tmpQuantity, 10);
    analytics.salesQuantity[analytics.tmpName] = analytics.quantity;
    analytics.trigger = true;
  }
}

this.closeAnalyticsTable = function() {
  $(".analytics container").html("");
  $(".analytics container").hide();
  $("#connection-data").html("");
  $(".analytics menuContainer").show();
  renderAnalyticsOptions();
}
