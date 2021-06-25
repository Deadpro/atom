var tableConstructor = {
   "tbodyOpen" : "<tbody>",
   "tbodyClose" : "</tbody>",
   "tdOpen" : "<td>",
   "tdClose" : "</td>",
   "trOpen" : "<tr>",
   "trClose" : "</tr>"
};

var blocks = {
   "divOpen" : "",
   "divClose" : "</div>",
   "spanOpen" : "",
   "spanClose" : "</span>",
   "labelOpen" : "",
   "labelClose" : "</label>",
   "input" : ""
};

var loginAdmin = {
  "loginSecurityData" : new Object(),
  "firstname" : "",
  "secondname" : "",
  "middlename" : "",
  "attribute" : ""
};

var agentStatus = {
  "area" : "Район: ",
  "endTriggerOne" : "",
  "endTriggerTwo" : "",
  "endTriggerThree" : "",
  "tmpAgentID" : "",
  "endTriggerFour" : "",
  "space" : " ",
  "salesTotal" : "На сумму: ",
  "salesCash" : "Наличный: ",
  "salesCashless" : "Безналичный: ",
  "debtSale" : "Реализация: ",
  "salesInvoicesQuantity" : "Накладных: ",
  "areaDevelopmentStatusLabel" : "Развитие: ",
  "lastSyncDateTime" : "Завершение: ",
  "responseDataObject" : new Object(),
  "areaStatusSalesSum" : new Object(),
  "areaStatusInvoicesNumber" : new Object(),
  "areaStatusLastSyncDateTime" : new Object(),
  "areaCashStatus" : new Object(),
  "areaCashlessStatus" : new Object(),
  "areaDevelopmentStatus" : new Object(),
  "tmpAgentID" : "",
  "endTriggerOne" : "",
  "endTriggerTwo" : "",
  "endTriggerThree" : "",
  "endTriggerFour" : "",
  "trigger" : false,
  "loginSecurityData" : new Object()
};

var analytics = {
  "checkRadio" : ["checkOne", "checkTwo", "checkThree", "checkFour", "checkFive", "checkSeven"],
  "checkedValue" : "",
  "dateControl" : "",
  "dateStart" : "",
  "dateEnd" : "",
  "tmp" : new Object(),
  "executeChoice" : "analyticsExecuteChoice",
  "subjectHead" : "Анализ продаж за период: ",
  "trigger" : false,
  "tmpQuantity" : 0,
  "quantity" : 0,
  "tmpExchangeQuantity" : 0,
  "exchange" : 0,
  "tmpName" : "",
  "salesQuantity" : new Object(),
  "exchangeQuantity" : new Object()
};

var commonLabels = {
  "itemName" : "Номенклатура",
  "itenmPrice" : "Цена",
  "quantity" : "Кол-во",
  "exchangeQuantity" : "Обмен",
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
  "tableHeaderRow" : "",
  "difference" : "разница",
  "evaluation" : "оценка"
};

var analyticsStyles = {
  "styles" : ["", "", "", "", "", ""],
  "style" : ""
};

var changeDBTablesLocalVars = {
  "someLabel" : "Nothing yet here",
  "dbChangeLabel" : "Управление Базой Данных",
  "chooseTableToChangeLabel" : "Выберите подменю для работы",
  "chooseSPTableToChangeLabel" : "Выберите район контрагентов",
  "chooseSalesTableToChangeLabel" : "Выберите район продаж",
  "chooseReceiveTableToChangeLabel" : "Выберите район загрузки",
  "chooseItemsTableToChangeLabel" : "Выберите вариант изменения номенклатуры",
  "chooseItemsBasicTableToChangeLabel" : "Изменить общую номенклатуру",
  "chooseItemsDiscountTableToChangeLabel" : "Изменить индивидуальные скидки",
  "areaCurrentValue" : "",
  "salesPartnersList" : new Object(),
  "chooseSalesPartnerLable" : "Выберите контрагента из списка",
  "selectedSPID" : "",
  "spGetName" : new Object(),
  "spGetLegalName" : new Object(),
  "spGetArea" : new Object(),
  "spGetDayOfTheWeek" : new Object(),
  "spGetTaxNumber" : new Object(),
  "spGetAccType" : new Object(),
  "spGetAddress" : new Object(),
  "spGetContacts" : new Object(),
  "spGetCurrState" : new Object(),
  "spGetLattitude" : new Object(),
  "spGetLongitude" : new Object(),
  "spGetByPass" : new Object(),
  "spGetAccSubject" : new Object(),
  "spGetAccAddress" : new Object(),
  "tmpName" : "",
  "tmpID" : "",
  "spInfoLable" : "Подробные сведения об контрагенте",
  "statusUpdateData" : new Object(),
  "reloadTrigger" : false,
  "backButton" : new Object(),
  "backButtonTriggers" : ["spName", "spLegalName", "spArea", "spRoot", "spTaxNumber", "spAccType", "spAddress", "spContacts", "spCurrState", "spLattitude", "spLongitude", "spByPass", "spAccSubject", "spAccAddress"],
  "logFileData" : ""
};

function blockConstructor(blockBlock, classBlock, idBlock, typeBlock, nameBlock, forBlock, valueBlock) {

}

function toTop(el) {

  let element = document.getElementById(el);
  element.scrollIntoView();
  element.scrollIntoView(false);
  element.scrollIntoView({block: "end"});
  element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

// вариант 1:

// var h = document.getElementById('menu_bottom').clientHeight;
// var h = document.getElementById('menu_bottom').offsetHeight;
// var h = document.getElementById('menu_bottom').scrollHeight;

// clientHeight высота содержимого вместе с полями padding, но без полосы прокрутки.
// offsetHeight «внешняя» высота блока, включая рамки.
// scrollHeight полная внутренняя высота, включая прокрученную область.

// вариант 2:

// var test = document.getElementById("menu_bottom");
// var height = window.getComputedStyle(test, null).height;

// отслеживание ширины экрана
// window.addEventListener('resize',function(){
//     watchResizeWindow();
// });
//
// function watchResizeWindow() {
//   var h = document.getElementById('menu').offsetHeight;
//   if (h > 47){
//
//   }
// }
