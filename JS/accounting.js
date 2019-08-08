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
  "dateStartLabel" : "Начало периода:",
  "dateEndLabel" : "Конец периода:",
  "dateStart" : "",
  "dateEnd" : "",
  "dash" : "---",
  "choosePeriod" : "Выберите период",
  "chooseArea" : "Выберите район",
  "checkRadio" : ["checkOne", "checkTwo", "checkThree", "checkFour", "checkFive", "checkSeven"],
  "checkedValue" : "",
  "tmp" : new Object(),
  "spNamesStolichiySales" : new Object(),
  "stolichniySalesData" : [],
  "stolichniyItems" : new Object(),
  "stolichniyQuantity" : new Object(),
  "stolichniyExchange" : new Object(),
  "accounting" : "1",
  "salesListLee" : [],
  "salesListChe" : [],
  "listLeeElem" : [],
  "listCheElem" : [],
  "accountantSubjectHead" : "Продажи провод за период: ",
  "accountantSubjectDash" : " --- ",
  "countChe" : 0,
  "countLee" : 0,
  "radioCheckedTrigger" : false,
  "dateControl" : "",
  "chooseFileLabel" : "Выберите файл (Столичные)",
  "spNameStolichniy" : ["Гастроном В-Лазер", "Столичный 41-ый км (ж/д 83Б)", "Столичный №16", "Столичный Дальнее", "Столичный Егорка (1-ый этаж)",
  "Столичный Калинка (Продукты)", "Столичный Луговое (Продукты)", "Столичный Мегаполис (Продукты)", "Столичный Мозаика", "Столичный Москва",
  "Столичный Невельск", "Столичный Родной", "Столичный Северный ветер", "Столичный Сити-Молл", "Столичный Славянский базар", "Столичный ТДЦ",
  "Столичный Холмск 1", "Столичный Холмск 3", "Столичный Час Пик", "Фабрика Вкуса Пограничная", "Столичный Поронайск", "Фабрика Вкуса Макаров"]
};

if ($('.fileInput').length > 0)	{
  document.getElementById('file-input').addEventListener('change', readFile, false);
}

function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  hours = hours < 10 ? '0'+hours : hours;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  seconds = seconds < 10 ? '0'+seconds : seconds;
  day = day < 10 ? '0'+day : day;
  month = month < 10 ? '0'+month : month;
  var strTime = hours + ':' + minutes + ':' + seconds;
  return  year + "." + month + "." + day + "  " + strTime;
}

function receiveStolichniySPNames() {
  $.post('../php/receiveStolichniyData.php', {dbName: localStorage.getItem('dbName'), dbUser: localStorage.getItem('dbUser'),
                                          dbPassword: localStorage.getItem('dbPassword')}, function(data) {
    accountingLocalVars.tmp = JSON.parse(data);
  });
}

function readFile(e) {
  receiveStolichniySPNames();
  var files = e.target.files, f = files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    var data = new Uint8Array(e.target.result);
    var workbook = XLSX.read(data, {type: 'array'});
    var sheet = workbook.Sheets[workbook.SheetNames[0]];
    // var cellE = 'E' + 11;
    // var valueCell = sheet[cellE].v;
    // var strCell = valueCell.toString();
    // var resultArray = sheet2arr(sheet);
    // alert(resultArray);
    var itemIDColNum;
    var itemIDRowNum;
    var range = XLSX.utils.decode_range(sheet['!ref']);
    for (rowNum = range.s.r; rowNum <= range.e.r; rowNum++) {
        for (colNum=range.s.c; colNum<=range.e.c; colNum++) {
           var nextCell = sheet[
              XLSX.utils.encode_cell({r: rowNum, c: colNum})
           ];
           if (typeof nextCell === 'undefined') {
              // row.push(void 0);
           } else {
             if (nextCell.w == "Код") {
               itemIDColNum = colNum;
               itemIDRowNumStart = rowNum + 1;
               // row.push(nextCell.w);
               var tmpCell = sheet[XLSX.utils.encode_cell({r: rowNum + 1, c: colNum})];
               alert(tmpCell.v);
             }
             for (var i = 0; i < Object.keys(accountingLocalVars.tmp).length; i++) {
               if (accountingLocalVars.tmp[i].Адрес == nextCell.v) {

               }
             }
           }
        }
        // result.push(row);
    }

  };
  reader.readAsArrayBuffer(f);
}

function sheet2arr(sheet) {
   var result = [];
   var row;
   var rowNum;
   var colNum;
   var range = XLSX.utils.decode_range(sheet['!ref']);
   for(rowNum = range.s.r; rowNum <= range.e.r; rowNum++){
      row = [];
       for(colNum=range.s.c; colNum<=range.e.c; colNum++){
          var nextCell = sheet[
             XLSX.utils.encode_cell({r: rowNum, c: colNum})
          ];
          if( typeof nextCell === 'undefined' ){
             row.push(void 0);
          } else row.push(nextCell.w);
       }
       result.push(row);
   }
   return result;
}

function numToAlpha(num) {
  var alpha = '';
  for (; num >= 0; num = parseInt(num / 26, 10) - 1) {
    alpha = String.fromCharCode(num % 26 + 0x41) + alpha;
  }
  return alpha;
}

function createObject() {

}

// function displayContents(contents) {
//   var element = document.getElementById('file-content');
//   element.textContent = contents;
// }

$('#accounting').on('click', function() {
  renderAccountingOptions();
});

$('#executeChoice').on('click', function() {
  accountingLocalVars.dateControl = document.querySelector('input[type="date"]');
  // alert(document.getElementById(accountingLocalVars.checkRadio[0]).value);
  for (var i = 0; i < 6; i++) {
    if (document.getElementById(accountingLocalVars.checkRadio[i]).checked == true) {
      accountingLocalVars.checkedValue = document.getElementById(accountingLocalVars.checkRadio[i]).value;
      accountingLocalVars.radioCheckedTrigger = true;
    }
  }
  if (accountingLocalVars.radioCheckedTrigger == false) {
    document.getElementById(accountingLocalVars.checkRadio[0]).checked = true;
    accountingLocalVars.checkedValue = document.getElementById(accountingLocalVars.checkRadio[0]).value;
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

function createAccountantTables() {
  alert("Всего строк: " + Object.keys(accountingLocalVars.tmp).length);
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
    </div> \
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
      accountingLocalVars.countLee += 1;
      var dTStrSource = accountingLocalVars.tmp[i].DateTimeDocLocal;
      var dt = new Date(dTStrSource);
      var dTStrOut = formatDate(dt);
      var taxNumber = accountingLocalVars.tmp[i].ИНН;
      // var strTaxNumber = taxNumber.toString();
      tableRow = '<tbody><tr> \
                          <td>' + countLee + '</td> \
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
      if (triggerLee == true) {
         $("#tableDataLee").html("Продажи на ИП Ли Ген Сун");
         $("#tableDataLee").append(tableHeaderRow);
         triggerLee = false;
      }
      $("#tableDataLee").append(tableRow);
    }
    if (accountingLocalVars.tmp[i].type != "На Ли Ген Сун" && accountingLocalVars.tmp[i].Quantity > 0) {
      countChe += 1;
      accountingLocalVars.countChe += 1;
      var dTStrSource = accountingLocalVars.tmp[i].DateTimeDocLocal;
      var dt = new Date(dTStrSource);
      var dTStrOut = formatDate(dt);
      var taxNumber = accountingLocalVars.tmp[i].ИНН;
      // var strTaxNumber = taxNumber.toString();
      tableRow = '<tbody><tr> \
                          <td>' + countChe + '</td> \
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
  var saveTriggerLee = false;
  var saveTriggerChe = false;
  var saveTriggerBtn = false;
  for (var i = 0; i < Object.keys(accountingLocalVars.tmp).length; i++) {
    if (accountingLocalVars.tmp[i].type == "На Ли Ген Сун" && accountingLocalVars.tmp[i].Quantity > 0
        && saveTriggerLee == false) {
      saveTriggerLee = true;
    }
    if (accountingLocalVars.tmp[i].type != "На Ли Ген Сун" && accountingLocalVars.tmp[i].Quantity > 0
        && saveTriggerChe == false) {
      saveTriggerChe = true;
    }
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
          <div class='col-60'>" + accountingLocalVars.dateStartLabel + "</div><div class='col-40'><input type='date' id='dateStart'></div> \
          <div class='col-60'>" + accountingLocalVars.dateEndLabel + "</div><div class='col-40'><input type='date' id='dateEnd'></div> \
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
           <div class='radioContainer'><input type='radio' id='checkSeven' name='chooseone' value='7'><label for='Район 7' id='radioLabel'>Район 7</label></div> \
        </div> \
      </div> \
      <div class='panel panel-custom border'> \
        <div class='panel-heading col-100'><span>" + accountingLocalVars.chooseFileLabel + "</span></div> \
        <div class='panel-body'> \
           <div class='fileInput'><input type='file' id='file-input'></div> \
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
