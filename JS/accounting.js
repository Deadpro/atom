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
  "listCheElem" : []
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
    for (var i = 0; i < Object.keys(accountingLocalVars.tmp).length; i++) {
      alert(Object.keys(accountingLocalVars.tmp).length);
      alert(accountingLocalVars.tmp[i].itemName + " " + accountingLocalVars.tmp[i].Наименование);
      if (accountingLocalVars.tmp[i].type == "На Ли Ген Сун" && accountingLocalVars.tmp[i].Quantity > 0) {
         accountingLocalVars.salesListLee.push(accountingLocalVars.listLeeElem);
      }
   //    trigger = false;
   //    if (Object.keys(salesQuantity).length > 0) {
   //      for (var key in salesQuantity) {
   //      }
   //      if (trigger == false) {
   //      }
   //    } else {
   //    }
   }
   //  renderReportTable(0);
  });
});

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
