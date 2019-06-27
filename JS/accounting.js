var accountingLocalVars = {
  "itemName" : "Номенклатура",
  "itenmPrice" : "Цена",
  "quantity" : "Кол-во",
  "invoiceSum" : "Всего",
  "itemID" : "Артикул",
  "ID" : "№",
  "total" : "Сумма",
  "invoiceID" : "Накладная №",
  "areaID" : "Район",
  "salesPartnerName" : "Контрагент(наименование)",
  "taxPayerID" : "ИНН",
  "date" : "Дата",
  "salesPartnerOfficialName" : "Организация",
  "dateStartLabel" : "Начало (год-месяц-день часы:минуты):",
  "dateEndLabel" : "Конец (год-месяц-день часы:минуты):",
  "dateStart" : "",
  "dateEnd" : "",
  "dash" : "---",
  "choosePeriod" : "Выберите период",
  "chooseArea" : "Выберите район",
  "checkRadio" : ["checkOne", "checkTwo", "checkThree", "checkFour", "checkFive"],
  "checkedValue" : "",
  "tmp" : new Object(),
  "accounting" : "1",
  "salesListLee" : [],
  "salesListChe" : [],
  "listLeeElem" : [],
  "listCheElem" : [],
  "accountantSubjectHead" : "Продажи провод за период: ",
  "accountantSubjectDash" : " --- "
};

$('#accounting').on('click', function() {
  renderAccountingOptions();
});

$('#executeChoice').on('click', function() {
  // alert(document.getElementById(accountingLocalVars.checkRadio[0]).value);
  for (var i = 0; i < 5; i++) {
    if (document.getElementById(accountingLocalVars.checkRadio[i]).checked == true) {
      accountingLocalVars.checkedValue = document.getElementById(accountingLocalVars.checkRadio[i]).value;
    }
  }
  accountingLocalVars.dateStart = $('input#dateStart').val();
  accountingLocalVars.dateEnd = $('input#dateEnd').val();
  $.post('../php/receiveReportData.php', {dbName: localStorage.getItem('dbName'), dbUser: localStorage.getItem('dbUser'),
                                          dbPassword: localStorage.getItem('dbPassword'), dateStart: accountingLocalVars.dateStart,
                                          dateEnd: accountingLocalVars.dateEnd, area: accountingLocalVars.checkedValue, accounting: accountingLocalVars.accounting}, function(data) {
    accountingLocalVars.tmp = JSON.parse(data);
    createAccountantTables();
    // for (var i = 0; i < Object.keys(accountingLocalVars.tmp).length; i++) {
    //   for (var j = 0; j < Object.keys(accountingLocalVars.tmp[i]).length; j++) {
    //     if (accountingLocalVars.tmp[i].type == "На Ли Ген Сун" && accountingLocalVars.tmp[i].Quantity > 0) {
    //
    //     } else {
    //
    //     }
    //   }
    //   // alert(Object.keys(accountingLocalVars.tmp[i]).length);
    // }
  });
});

this.createAccountantTables = function() {alert(Object.keys(accountingLocalVars.tmp).length);
  $('div#connection-data').html("");
  $(".accountantContainer").show();
  $('div#connection-data').append(" \
    <div id='accountantContainer' class='accountantContainer'> \
      <div id='closeAccountant' href='#' onclick='closeAccountantTable();'> \
        <div class='accountantSubject' style='float:left'>" + accountingLocalVars.accountantSubjectHead + ' ' + accountingLocalVars.dateStart + ' ' + accountingLocalVars.accountantSubjectDash + ' ' + accountingLocalVars.dateEnd + "</div> \
        <img width='30px' style='float:right' src='../images/icons/black-close-icon-3.png' /> \
      </div> \
      <div id='tableContainer'> \
        <table class='tableDataLee' id='tableDataLee'></table> \
        <table class='tableDataChe' id='tableDataChe'></table> \
      </div> \
      <button id='saveAccountant'>Сохранить</button> \
    </div> \
    <script type='text/javascript' src='../js/createexcel.js'></script> \
  ");
  var tableHeaderRow = '<tbody><tr> \
                      <td>' + accountingLocalVars.ID + '</td> \
                      <td>' + accountingLocalVars.invoiceID + '</td> \
                      <td>' + accountingLocalVars.areaID + '</td> \
                      <td>' + accountingLocalVars.salesPartnerName + '</td> \
                      <td>' + accountingLocalVars.taxPayerID + '</td> \
                      <td>' + accountingLocalVars.itemName + '</td> \
                      <td>' + accountingLocalVars.itemID + '</td> \
                      <td>' + accountingLocalVars.itenmPrice + '</td> \
                      <td>' + accountingLocalVars.quantity + '</td> \
                      <td>' + accountingLocalVars.total + '</td> \
                      <td>' + accountingLocalVars.invoiceSum + '</td> \
                      <td>' + accountingLocalVars.date + '</td> \
                    </tr></tbody>';
  var countLee = 0;
  var countChe = 0;
  var triggerLee = true;
  var triggerChe = true;
  var tableRow;
  for (var i = 0; i < Object.keys(accountingLocalVars.tmp).length; i++) {
    if (accountingLocalVars.tmp[i].type == "На Ли Ген Сун" && accountingLocalVars.tmp[i].Quantity > 0) {
      countLee += 1;
      tableRow = '<tbody><tr> \
                          <td>' + countLee + '</td> \
                          <td>' + accountingLocalVars.tmp[i].InvoiceNumber + '</td> \
                          <td>' + accountingLocalVars.tmp[i].AgentID + '</td> \
                          <td>' + accountingLocalVars.tmp[i].Наименование + '</td> \
                          <td>' + accountingLocalVars.tmp[i].ИНН + '</td> \
                          <td>' + accountingLocalVars.tmp[i].itemName + '</td> \
                          <td>' + accountingLocalVars.tmp[i].item + '</td> \
                          <td>' + accountingLocalVars.tmp[i].Price + '</td> \
                          <td>' + accountingLocalVars.tmp[i].Quantity + '</td> \
                          <td>' + accountingLocalVars.tmp[i].Total + '</td> \
                          <td>' + accountingLocalVars.tmp[i].InvoiceSum + '</td> \
                          <td>' + accountingLocalVars.tmp[i].DateTimeDocLocal + '</td> \
                        </tr></tbody>';
      if (triggerLee == true) {
         $("#tableDataLee").html("Продажи на ИП Ли Ген Сун");
         $("#tableDataLee").append(tableHeaderRow);
         triggerLee = false;
      }
      $("#tableDataLee").append(tableRow);
    }
    if (accountingLocalVars.tmp[i].type != "На Ли Ген Сун" && accountingLocalVars.tmp[i].Quantity > 0) {
      countChe += 1;
      tableRow = '<tbody><tr> \
                          <td>' + countChe + '</td> \
                          <td>' + accountingLocalVars.tmp[i].InvoiceNumber + '</td> \
                          <td>' + accountingLocalVars.tmp[i].AgentID + '</td> \
                          <td>' + accountingLocalVars.tmp[i].Наименование + '</td> \
                          <td>' + accountingLocalVars.tmp[i].ИНН + '</td> \
                          <td>' + accountingLocalVars.tmp[i].itemName + '</td> \
                          <td>' + accountingLocalVars.tmp[i].item + '</td> \
                          <td>' + accountingLocalVars.tmp[i].Price + '</td> \
                          <td>' + accountingLocalVars.tmp[i].Quantity + '</td> \
                          <td>' + accountingLocalVars.tmp[i].Total + '</td> \
                          <td>' + accountingLocalVars.tmp[i].InvoiceSum + '</td> \
                          <td>' + accountingLocalVars.tmp[i].DateTimeDocLocal + '</td> \
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

this.closeAccountantTable = function() {
  $(".accountantContainer").html("");
  $(".accountantContainer").hide();
  $("#connection-data").html("");
  $(".accountingMenuContainer").show();
  renderAccountingOptions();
}

this.renderAccountingOptions = function() {
  $('div#connection-data').html("");
  $('div#connection-data').append(" \
    <div id='accountingMenuContainer' class='accountingMenuContainer'> \
      <div class='panel panel-custom border'> \
        <div class='panel-heading col-100'><span>" + accountingLocalVars.choosePeriod + "</span></div> \
        <div class='panel-body'> \
          <div class='col-60'>" + accountingLocalVars.dateStartLabel + "</div><div class='col-40'><input type='text' id='dateStart'></div> \
          <div class='col-60'>" + accountingLocalVars.dateEndLabel + "</div><div class='col-40'><input type='text' id='dateEnd'></div> \
        </div> \
      </div> \
      <div class='panel panel-custom border'> \
        <div class='panel-heading col-100'><span>" + accountingLocalVars.chooseArea + "</span></div> \
        <div class='panel-body'> \
           <div class='radioContainer'><input type='radio' id='checkOne' name='chooseone' value='1'><label for='Район 1' id='radioLabel'>Район 1</label></div> \
           <div class='radioContainer'><input type='radio' id='checkTwo' name='chooseone' value='2'><label for='Район 2' id='radioLabel'>Район 2</label></div> \
           <div class='radioContainer'><input type='radio' id='checkThree' name='chooseone' value='3'><label for='Район 3' id='radioLabel'>Район 3</label></div> \
           <div class='radioContainer'><input type='radio' id='checkFour' name='chooseone' value='4'><label for='Район 4' id='radioLabel'>Район 4</label></div> \
           <div class='radioContainer'><input type='radio' id='checkFive' name='chooseone' value='5'><label for='Район 5' id='radioLabel'>Район 5</label></div> \
        </div> \
      </div> \
      <div class='panel panel-custom border'> \
        <div class='panel-body'><input type='submit' id='executeChoice' value='Загрузить данные'></div> \
      </div> \
    </div> \
    <script src='../js/accounting.js' type='text/javascript' ></script> \
  ");
  if (accountingLocalVars.dateStart != "" && accountingLocalVars.dateEnd != "") {
     $('input#dateStart').val(accountingLocalVars.dateStart);
     $('input#dateEnd').val(accountingLocalVars.dateEnd);
  }
  $(".loginContainer").html("");
  $(".loginContainer").hide();
}
