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

var analytics = {
  "checkRadio" : ["checkOne", "checkTwo", "checkThree", "checkFour", "checkFive", "checkSeven"],
  "checkedValue" : "",
  "dateControl" : "",
  "dateStart" : "",
  "dateEnd" : "",
  "tmp" : new Object(),
  "executeChoice" : "analyticsExecuteChoice",
  "subjectHead" : "Анализ продаж за период: "
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
