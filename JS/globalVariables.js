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
  "trigger" : false
};

var commonLabels = {
  "itemName" : "Номенклатура",
  "itenmPrice" : "Цена",
  "quantity" : "Кол-во",
  "returnQuantity" : "Обмен",
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
  "tableHeaderRow" : ""
};

var analyticsStyles = {
  "styles" : ["", "", "", "", "", ""],
  "style" : ""
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
