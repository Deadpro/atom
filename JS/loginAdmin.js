var local = {
  "name" : "Номенклатура",
  "price" : "Цена",
  "quantity" : "Кол-во",
  "exchangeQuantity" : "Обмен",
  "returnQuantity" : "Возврат",
  "ID" : "№"
};
var quantity = 0;
var exchangeQuantity = 0;
var returnQuantity = 0;
var salesQuantity = new Object();
var salesExchange = new Object();
var salesReturn = new Object();
var tmpName;
var tmpQuantity;
var tmpExchange;
var tmpReturn;
var text = "";
var trigger = false;
var tmp = new Object();
$('input#connection-submit').on('click', function() {
  var dbName = $('input#dbName').val();
  var dbUser = $('input#dbUser').val();
  var dbPassword = $('input#dbPassword').val();
  var login = $('input#login').val();
  var password = $('input#password').val();
  var responseData;
  if ($.trim(dbName) != '' && $.trim(dbUser) != '' && $.trim(dbPassword) != '' && $.trim(login) != '') {
    $.post('../ajax/loginAdmin.php', {dbName: dbName, dbUser: dbUser, dbPassword: dbPassword, login: login, password: password}, function(data) {
      $('div#connection-data').text(data);
      if (data == 'Успешный вход') {
        $.post('../php/receiveReportData.php', {dbName: dbName, dbUser: dbUser, dbPassword: dbPassword}, function(data) {
          tmp = JSON.parse(data);
          // $('div#connection-data').append("<div><p>" + data[0].AgentID + "</p></div>");

          // alert(Object.keys(tmp).length);
          for (var i = 0; i < Object.keys(tmp).length; i++) {
            // if (tmp[i].Наименование == 'Щике') {
            //   var tmpName = tmp[i].Наименование;
            //   var tmpQuantity = tmp[i].Quantity;
            //   quantity = quantity + parseInt(tmpQuantity, 10);
            //   test = {tmpName : quantity};
            // }
            // alert(Object.keys(tmp).length);
            trigger = false;
            if (Object.keys(salesQuantity).length > 0) {
              for (var key in salesQuantity) {
                // if (salesQuantity.hasOwnProperty(tmp[i].Наименование)) {
                if (tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                    tmp[i].Наименование == "Ким-ча 700 гр особая цена 2" ||
                    tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                    tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                  if (tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                      tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                    if (key == "Ким-ча весовая") {
                      createObject(2, 1, i);
                    }
                  }
                  if (tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                      tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                    if (key == "Редька по-восточному весовая") {
                      createObject(1, 1, i);
                    }
                  }
                } else {
                  if (key == tmp[i].Наименование) {
                    createObject(0, 1, i);
                  }
                }
              }
              if (trigger == false) {
              // if (!(tmp[i].Наименование in salesQuantity)) {
                if (tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                    tmp[i].Наименование == "Ким-ча 700 гр особая цена 2" ||
                    tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                    tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                  if (tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                      tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                    createObject(2, 0, i);
                  }
                  if (tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                      tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                    createObject(1, 0, i);
                  }
                } else {
                  createObject(0, 0, i);
                }
              }
            } else {
               if (tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                  tmp[i].Наименование == "Ким-ча 700 гр особая цена 2" ||
                  tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                  tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                  if (tmp[i].Наименование == "Ким-ча 700 гр особая цена 1" ||
                     tmp[i].Наименование == "Ким-ча 700 гр особая цена 2") {
                     createObject(2, 0, i);
                  }
                  if (tmp[i].Наименование == "Редька по-восточному 500гр особая цена 1" ||
                     tmp[i].Наименование == "Редька по-восточному 500гр особая цена 2") {
                     createObject(1, 0, i);
                  }
               } else {
                 createObject(0, 0, i);
               }
            }
         }
               // if (Object.keys(salesQuantity).includes(tmp[i].Наименование)) {

               // alert(Object.keys(salesQuantity).length);
               // alert(salesQuantity["Щике"]);
               // $('div#connection-data').text(text);
               var text = Object.entries(salesQuantity) + "\r\n" + Object.entries(salesExchange) + "\r\n" + Object.entries(salesReturn);
               $('div#connection-data').text(text);
               renderReportTable();
            });
         }
      });
   }
});

this.createObject = function(paramOne, paramTwo, paramThree) {
  // alert('start: ' + paramOne + "; " + paramTwo + "; " + trigger + "; " + Object.keys(salesQuantity).length);
  if (paramOne == 0) {
    // alert(0 + ": " + paramOne);
    tmpName = tmp[paramThree].Наименование;
    tmpQuantity = tmp[paramThree].Quantity;
    tmpExchange = tmp[paramThree].ExchangeQuantity;
    tmpReturn = tmp[paramThree].ReturnQuantity;

  }
  if (paramOne == 1) {
    // alert(1);
    tmpName = "Редька по-восточному весовая";
    tmpQuantity = tmp[paramThree].Quantity * 0.5;
    tmpExchange = tmp[paramThree].ExchangeQuantity * 0.5;
    tmpReturn = tmp[paramThree].ReturnQuantity * 0.5;

  }
  if (paramOne == 2) {
    // alert(2);
    tmpName = "Ким-ча весовая";
    tmpQuantity = tmp[paramThree].Quantity * 0.7;
    tmpExchange = tmp[paramThree].ExchangeQuantity * 0.7;
    tmpReturn = tmp[paramThree].ReturnQuantity * 0.7;
    // alert(23);
  }
  if (paramTwo == 0) {
    // alert(00);
    quantity = parseFloat(tmpQuantity, 10);
    exchangeQuantity = parseFloat(tmpExchange, 10);
    returnQuantity = parseFloat(tmpReturn, 10);
    Object.defineProperty(salesQuantity, tmpName, {
       value: quantity,
       writable: true,
       enumerable: true,
       configurable: true
    });
    Object.defineProperty(salesExchange, tmpName, {
       value: exchangeQuantity,
       writable: true,
       enumerable: true,
       configurable: true
    });
    Object.defineProperty(salesReturn, tmpName, {
       value: returnQuantity,
       writable: true,
       enumerable: true,
       configurable: true
    });
  }
  if (paramTwo == 1) {
    // alert(01);
    quantity = parseFloat(salesQuantity[tmpName], 10) + parseFloat(tmpQuantity, 10);
    exchangeQuantity = parseFloat(salesExchange[tmpName], 10) + parseFloat(tmpExchange, 10);
    returnQuantity = parseFloat(salesReturn[tmpName], 10) + parseFloat(tmpReturn, 10);
    text += tmpName + ": " + quantity + " = " + parseFloat(salesQuantity[tmpName], 10) + " + " + parseFloat(tmpQuantity, 10) + "\r\n";
    salesQuantity[tmpName] = quantity;
    salesExchange[tmpName] = exchangeQuantity;
    salesReturn[tmpName] = returnQuantity;
    trigger = true;
  }
}

this.renderReportTable = function()	{
  // if ($('#bcontainer').length == 0)	{
    $('div#connection-data').append(" \
      <div id='container' class='container'> \
        <table id='tableHeader'><tr><td>local.ID</td><td>" + local.exchangeQuantity + "</td><td>" + local.name + "</td><td>" + local.quantity + "</td><td>" + local.returnQuantity + "</td><td></td></tr></table> \
        <div id='tableContainer'><table class='tableData' id='tableData'></table></div> \
      </div> \
    ");
  // }	else {
  //   $("#btable").html("");
  // }
  // this.center( $("#bcontainer") )

  for(var idkey in this.DATA)	{
    with (this.DATA[idkey])	{
      var productLine = '<tr class="bitem" id="wigoodline-' + id + '"> \
                        <td>'+ id +'</td> \
                        <td><a href="' + url + '">' + photo + name +'</a></td> \
                        <td id="lineprice_' + id + '"class="wigoodprice">' + price + ' руб.</td> \
                        <td> \
                        <div class="basket_num_buttons" id="minus_' + id + '">-</div> \
                        <span class="basket_num" id="basket_num_' + id + '">'+ num +'</span> \
                        <div class="basket_num_buttons" id="plus_' + id + '">+</div></td> \
                        <td id="linesum_' + id + '">'+ parseFloat(price * num) +' руб.</td> \
                        <td><a href="#" onclick="' + this.objNAME + '.delItem(\'' + id + '\')"><img width="30px" src="images/icons/delete-icon.png" /></a></td> \
                        </tr>';
    }
    $("#btable").append(productLine);
    $(".basket_num_buttons").data("min-value");
  }
