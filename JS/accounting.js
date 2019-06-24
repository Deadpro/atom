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
  "dateStart" : "Начало (год-месяц-день часы:минуты):",
  "dateEnd" : "Конец (год-месяц-день часы:минуты):",
  "dash" : "---",
  "choosePeriod" : "Выберите период",
  "chooseArea" : "Выберите район"
};

$('#accounting').on('click', function() {
  renderAccountingOptions();
});

this.renderAccountingOptions = function() {
  $('div#connection-data').html("");
  $('div#connection-data').append(" \
    <div id='menuContainer' class='menuContainer row text-center products-row'> \
      <div class='panel panel-custom border'> \
        <div class='panel-heading col-100'><span>" + accountingLocalVars.choosePeriod + "</span></div> \
        <div class='panel-body'> \
          <div class='col-60'>" + accountingLocalVars.dateStart + "</div><div class='col-40'><input type='text' id='dateStart'></div> \
          <div class='col-60'>" + accountingLocalVars.dateEnd + "</div><div class='col-40'><input type='text' id='dateEnd'></div> \
        </div> \
      </div> \
      <div class='panel panel-custom border'> \
        <div class='panel-heading col-100'><span>" + accountingLocalVars.chooseArea + "</span></div> \
        <div class='panel-body'><input type='submit' id='executeChoice' value='Загрузить данные'></div> \
      </div> \
    </div> \
    <script src='../js/accounting.js' type='text/javascript' ></script> \
  ");
  if (dateStart != "" && dateEnd != "") {
     $('input#dateStart').val(dateStart);
     $('input#dateEnd').val(dateEnd);
  }
  $(".loginContainer").html("");
  $(".loginContainer").hide();
}
