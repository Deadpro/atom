$('#analytics').on('click', function() {
  renderAnalyticsOptions();
});

$('#analyticsExecuteChoice').on('click', function() {
  analytics.dateControl = document.querySelector('input[type="date"]');
  for (var i = 0; i < 6; i++) {
    if (document.getElementById(analytics.checkRadio[i]).checked == true) {
      analytics.checkedValue = document.getElementById(analytics.checkRadio[i]).value;
    }
  }
  analytics.dateStart = $('input#dateStart').val();
  analytics.dateEnd = $('input#dateEnd').val();
  $.post('../php/receiveReportData.php', {dbName: localStorage.getItem('dbName'), dbUser: localStorage.getItem('dbUser'),
                                          dbPassword: localStorage.getItem('dbPassword'), dateStart: analytics.dateStart,
                                          dateEnd: analytics.dateEnd, area: analytics.checkedValue,
                                          reportType: "analytics"}, function(data) {
    analytics.tmp = JSON.parse(data);
    createAnalyticsReport();
  });
});

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
        <div class='panel-body'><input type='submit' id='analyticsExecuteChoice' value='Анализ'></div> \
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

this.createAnalyticsReport = function() {            alert("в разработке!!!!!!");
  tableHeaderRowFunc();
  $('div#connection-data').html("");
  $(".accountantContainer").show();
  $('div#connection-data').append(" \
    <div id='accountantContainer' class='accountantContainer'> \
      <div id='closeAccountant' href='#' onclick='closeAccountantTable();'> \
        <div class='accountantSubject' style='float:left'>" + accountingLocalVars.accountantSubjectHead + ' ' + accountingLocalVars.dateStart + ' ' + accountingLocalVars.accountantSubjectDash + ' ' + accountingLocalVars.dateEnd + "</div> \
        <img width='30px' style='float:right' src='../images/icons/black-close-icon-3.png' /> \
      </div> \
      <div id='tableContainer'> \
        <table class='tableDataChe' id='tableDataChe'></table> \
        <table class='tableDataLee' id='tableDataLee'></table> \
        <table class='tableDataCheRoma' id='tableDataCheRoma'></table> \
      </div> \
    </div> \
  ");
  var tableHeaderRow = accountingLocalVars.tableHeaderRow;
  var count = 0;
  var triggerLee = true;
  var triggerChe = true;
  var triggerCheRoma = true;
  var tableRow;
  for (var i = 0; i < Object.keys(accountingLocalVars.tmp).length; i++) {
    if (accountingLocalVars.tmp[i].Quantity > 0) {
      if (accountingLocalVars.tmp[i].type === "На Ли Ген Сун") {
        // accountingLocalVars.countLee += 1;
        // count += 1;
        var dTStrSource = accountingLocalVars.tmp[i].DateTimeDocLocal;
        var dt = new Date(dTStrSource);
        var dTStrOut = formatDate(dt);
        var taxNumber = accountingLocalVars.tmp[i].ИНН;
        var spID = accountingLocalVars.tmp[i].ID;

        if (accountingLocalVars.tmp[i].AgentID != 7) {
          if (taxNumber.trim().toString() != "2543122686") {
            accountingLocalVars.countLee += 1;
            count += 1;
            tableRow = '<tbody><tr> \
                                <td>' + count + '</td> \
                                <td>' + accountingLocalVars.tmp[i].InvoiceNumber + '</td> \
                                <td>' + accountingLocalVars.tmp[i].AgentID + '</td> \
                                <td>' + accountingLocalVars.tmp[i].Наименование + '</td> \
                                <td>' + taxNumber + '</td> \
                                <td>' + accountingLocalVars.tmp[i].itemName + '</td> \
                                <td>' + accountingLocalVars.tmp[i].item + '</td> \
                                <td>' + accountingLocalVars.tmp[i].Price + '</td> \
                                <td>' + accountingLocalVars.tmp[i].Quantity + '</td> \
                                <td>' + accountingLocalVars.tmp[i].Total + '</td> \
                                <td>' + accountingLocalVars.tmp[i].InvoiceSum + '</td> \
                                <td>' + dTStrOut + '</td> \
                                <td>' + count + '</td> \
                                <td>' + accountingLocalVars.tmp[i].accAddress + '</td> \
                              </tr></tbody>';
            if (triggerLee == true) {
               $("#tableDataLee").html("Продажи на ИП Ли Ген Сун");
               $("#tableDataLee").append(tableHeaderRow);
               triggerLee = false;
            }
            $("#tableDataLee").append(tableRow);
          }
          if (accountingLocalVars.tmp[i].AgentID == 5) {
            if (spID.trim() == 1208) {
              accountingLocalVars.countLee += 1;
              count += 1;
              tableRow = '<tbody><tr> \
                                  <td>' + count + '</td> \
                                  <td>' + accountingLocalVars.tmp[i].InvoiceNumber + '</td> \
                                  <td>' + accountingLocalVars.tmp[i].AgentID + '</td> \
                                  <td>' + accountingLocalVars.tmp[i].Наименование + '</td> \
                                  <td>' + taxNumber + '</td> \
                                  <td>' + accountingLocalVars.tmp[i].itemName + '</td> \
                                  <td>' + accountingLocalVars.tmp[i].item + '</td> \
                                  <td>' + accountingLocalVars.tmp[i].Price + '</td> \
                                  <td>' + accountingLocalVars.tmp[i].Quantity + '</td> \
                                  <td>' + accountingLocalVars.tmp[i].Total + '</td> \
                                  <td>' + accountingLocalVars.tmp[i].InvoiceSum + '</td> \
                                  <td>' + dTStrOut + '</td> \
                                  <td>' + count + '</td> \
                                  <td>' + accountingLocalVars.tmp[i].accAddress + '</td> \
                                </tr></tbody>';
              if (triggerLee == true) {
                 $("#tableDataLee").html("Продажи на ИП Ли Ген Сун");
                 $("#tableDataLee").append(tableHeaderRow);
                 triggerLee = false;
              }
              $("#tableDataLee").append(tableRow);
            }
          }
        }
        // if (accountingLocalVars.tmp[i].AgentID == 7) {
        //   tableRow = '<tbody><tr> \
        //                       <td>' + count + '</td> \
        //                       <td>' + accountingLocalVars.tmp[i].InvoiceNumber + '</td> \
        //                       <td>' + accountingLocalVars.tmp[i].AgentID + '</td> \
        //                       <td>' + accountingLocalVars.tmp[i].Наименование + '</td> \
        //                       <td>' + taxNumber + '</td> \
        //                       <td>' + accountingLocalVars.tmp[i].itemName + '</td> \
        //                       <td>' + accountingLocalVars.tmp[i].item + '</td> \
        //                       <td>' + accountingLocalVars.tmp[i].Price + '</td> \
        //                       <td>' + accountingLocalVars.tmp[i].Quantity + '</td> \
        //                       <td>' + accountingLocalVars.tmp[i].Total + '</td> \
        //                       <td>' + accountingLocalVars.tmp[i].InvoiceSum + '</td> \
        //                       <td>' + dTStrOut + '</td> \
        //                     </tr></tbody>';
        // }
        //
        // if (triggerLee == true) {
        //    $("#tableDataLee").html("Продажи на ИП Ли Ген Сун");
        //    $("#tableDataLee").append(tableHeaderRow);
        //    triggerLee = false;
        // }
        // $("#tableDataLee").append(tableRow);
      }
      if (accountingLocalVars.tmp[i].type === "На Че Роман Енгунович") {
        var dTStrSource = accountingLocalVars.tmp[i].DateTimeDocLocal;
        var dt = new Date(dTStrSource);
        var dTStrOut = formatDate(dt);
        var taxNumber = accountingLocalVars.tmp[i].ИНН;

        if (accountingLocalVars.tmp[i].AgentID != 7) {
          if (taxNumber.trim().toString() != "2543122686" && taxNumber.trim().toString() != "2543115022") {
            accountingLocalVars.countCheRoma += 1;
            count += 1;
            tableRow = '<tbody><tr> \
                                <td>' + count + '</td> \
                                <td>' + accountingLocalVars.tmp[i].InvoiceNumber + '</td> \
                                <td>' + accountingLocalVars.tmp[i].AgentID + '</td> \
                                <td>' + accountingLocalVars.tmp[i].Наименование + '</td> \
                                <td>' + taxNumber + '</td> \
                                <td>' + accountingLocalVars.tmp[i].itemName + '</td> \
                                <td>' + accountingLocalVars.tmp[i].item + '</td> \
                                <td>' + accountingLocalVars.tmp[i].Price + '</td> \
                                <td>' + accountingLocalVars.tmp[i].Quantity + '</td> \
                                <td>' + accountingLocalVars.tmp[i].Total + '</td> \
                                <td>' + accountingLocalVars.tmp[i].InvoiceSum + '</td> \
                                <td>' + dTStrOut + '</td> \
                                <td>' + count + '</td> \
                                <td>' + accountingLocalVars.tmp[i].accAddress + '</td> \
                              </tr></tbody>';
            if (triggerCheRoma == true) {
               $("#tableDataCheRoma").html("Продажи на ИП Че Роман Енгунович");
               $("#tableDataCheRoma").append(tableHeaderRow);
               triggerCheRoma = false;
            }
            $("#tableDataCheRoma").append(tableRow);
          }
        }
      }
      if (accountingLocalVars.tmp[i].type === "") {
        var dTStrSource = accountingLocalVars.tmp[i].DateTimeDocLocal;
        var dt = new Date(dTStrSource);
        var dTStrOut = formatDate(dt);
        var taxNumber = accountingLocalVars.tmp[i].ИНН;

        if (accountingLocalVars.tmp[i].AgentID != 7) {
          if (accountingLocalVars.tmp[i].Юр_Наименование.trim() != "ООО СКЦ" && accountingLocalVars.tmp[i].Юр_Наименование.trim() != "ООО Спецторг" && taxNumber.trim().toString() != "6501158938") {
            count += 1;
            accountingLocalVars.countChe += 1;
            tableRow = '<tbody><tr> \
                                <td>' + count + '</td> \
                                <td>' + accountingLocalVars.tmp[i].InvoiceNumber + '</td> \
                                <td>' + accountingLocalVars.tmp[i].AgentID + '</td> \
                                <td>' + accountingLocalVars.tmp[i].Наименование + '</td> \
                                <td>' + taxNumber + '</td> \
                                <td>' + accountingLocalVars.tmp[i].itemName + '</td> \
                                <td>' + accountingLocalVars.tmp[i].item + '</td> \
                                <td>' + accountingLocalVars.tmp[i].Price + '</td> \
                                <td>' + accountingLocalVars.tmp[i].Quantity + '</td> \
                                <td>' + accountingLocalVars.tmp[i].Total + '</td> \
                                <td>' + accountingLocalVars.tmp[i].InvoiceSum + '</td> \
                                <td>' + dTStrOut + '</td> \
                              </tr></tbody>';
            if (triggerChe == true) {
               $("#tableDataChe").html("Продажи на ИП Че Владимир Енгунович");
               $("#tableDataChe").append(tableHeaderRow);
               triggerChe = false;
            }
            $("#tableDataChe").append(tableRow);
          }
        }
        if (accountingLocalVars.tmp[i].AgentID == 7) {
          count += 1;
          accountingLocalVars.countChe += 1;
          tableRow = '<tbody><tr> \
                              <td>' + count + '</td> \
                              <td>' + accountingLocalVars.tmp[i].InvoiceNumber + '</td> \
                              <td>' + accountingLocalVars.tmp[i].AgentID + '</td> \
                              <td>' + accountingLocalVars.tmp[i].Наименование + '</td> \
                              <td>' + taxNumber + '</td> \
                              <td>' + accountingLocalVars.tmp[i].itemName + '</td> \
                              <td>' + accountingLocalVars.tmp[i].item + '</td> \
                              <td>' + accountingLocalVars.tmp[i].Price + '</td> \
                              <td>' + accountingLocalVars.tmp[i].Quantity + '</td> \
                              <td>' + accountingLocalVars.tmp[i].Total + '</td> \
                              <td>' + accountingLocalVars.tmp[i].InvoiceSum + '</td> \
                              <td>' + dTStrOut + '</td> \
                            </tr></tbody>';
          if (triggerChe == true) {
             $("#tableDataChe").html("Продажи на ИП Че Владимир Енгунович");
             $("#tableDataChe").append(tableHeaderRow);
             triggerChe = false;
          }
          $("#tableDataChe").append(tableRow);
        }
      }
    }
  }
  var saveTriggerLee = false;
  var saveTriggerChe = false;
  var saveTriggerCheRoma = false;
  var saveTriggerBtn = false;
  for (var i = 0; i < Object.keys(accountingLocalVars.tmp).length; i++) {
    if (accountingLocalVars.tmp[i].type == "На Ли Ген Сун" && accountingLocalVars.tmp[i].Quantity > 0
        && saveTriggerLee == false) {
      saveTriggerLee = true;
    }
    if (accountingLocalVars.tmp[i].type == "" && accountingLocalVars.tmp[i].Quantity > 0
        && saveTriggerChe == false) {
      saveTriggerChe = true;
    }
    if (accountingLocalVars.tmp[i].type == "На Че Роман Енгунович" && accountingLocalVars.tmp[i].Quantity > 0
        && saveTriggerCheRoma == false) {
      saveTriggerCheRoma = true;
    }
  }
  if (saveTriggerCheRoma == true) {
    saveTriggerBtn = true;
    $("#tableContainer").append(" \
                                <br><br> \
                                <button id='saveAccountantCheRoma'>Сохранить ИП Рома</button> \
                                <br><br> \
                                <script type='text/javascript' src='../js/createexcel.js'></script> \
                                ");
  }
  if ((saveTriggerLee == true && saveTriggerChe == true) && saveTriggerBtn == false) {
    saveTriggerBtn = true;
    $("#tableContainer").append(" \
                                <br><br> \
                                <button id='saveAccountantLee'>Сохранить ИП Ли</button> \
                                <button id='saveAccountantChe'>Сохранить ИП Че</button> \
                                <br><br> \
                                <script type='text/javascript' src='../js/createexcel.js'></script> \
                                ");
  }
  if ((saveTriggerLee == false && saveTriggerChe == true) && saveTriggerBtn == false) {
    saveTriggerBtn = true;
    $("#tableContainer").append(" \
                                <br><br> \
                                <button id='saveAccountantChe'>Сохранить ИП Че</button> \
                                <br><br> \
                                <script type='text/javascript' src='../js/createexcel.js'></script> \
                                ");
  }
  if ((saveTriggerLee == true && saveTriggerChe == false) && saveTriggerBtn == false) {
    saveTriggerBtn = true;
    $("#tableContainer").append(" \
                                <br><br> \
                                <button id='saveAccountantLee'>Сохранить ИП Ли</button> \
                                <br><br> \
                                <script type='text/javascript' src='../js/createexcel.js'></script> \
                                ");
  }
}
