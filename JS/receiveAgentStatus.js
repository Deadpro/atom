var tmp = new Object();
var areaStatusSalesSum = new Object();
var areaStatusInvoicesNumber = new Object();
var areaStatusLastSyncDateTime = new Object();
var areaCashStatus = new Object();
var trigger = false;
var tmpAgentID;
var localVars = {
  "area" : "Район: ",
  "space" : " ",
  "salesTotal" : "На сумму: ",
  "salesCash" : "Наличными: ",
  "salesInvoicesQuantity" : "Накладных: ",
  "lastSyncDateTime" : "Завершение: "
};

this.starter = function() {
  if ($.trim(localStorage.getItem('dbName')) != '' && $.trim(localStorage.getItem('dbUser')) != '' &&
      $.trim(localStorage.getItem('dbPassword')) != '' && $.trim(localStorage.getItem('login')) != '' &&
      $.trim(localStorage.getItem('password')) != '') {
    silentLogin(localStorage.getItem('dbName'), localStorage.getItem('dbUser'), localStorage.getItem('dbPassword'),
          localStorage.getItem('login'), localStorage.getItem('password'));
  } else {
    silentLogin($('input#dbName').val(), $('input#dbUser').val(), $('input#dbPassword').val(), $('input#login').val(), $('input#password').val());
  }
}

this.silentLogin = function(dbName, dbUser, dbPassword, login, password) {
   $.post('../ajax/loginAdmin.php', {dbName: dbName, dbUser: dbUser,
                                     dbPassword: dbPassword, login: login,
                                     password: password}, function(data) {
     // $('div#connection-data').text(data);
     if (data == 'Успешный вход') {
       getAgentStatus(localStorage.getItem('dbName'), localStorage.getItem('dbUser'), localStorage.getItem('dbPassword'),
             localStorage.getItem('login'), localStorage.getItem('password'));
       getCashStatus(localStorage.getItem('dbName'), localStorage.getItem('dbUser'), localStorage.getItem('dbPassword'),
             localStorage.getItem('login'), localStorage.getItem('password'));
     }
   });
}

this.getCashStatus = function(dbName, dbUser, dbPassword, login, password) {
  $.post('../php/agentCashStatus.php', {dbName: dbName, dbUser: dbUser,
                                        dbPassword: dbPassword, login: login,
                                        password: password}, function(data) {
    processResponse(data, areaCashStatus, 1);
  });
}

this.getAgentStatus = function(dbName, dbUser, dbPassword, login, password) {
  $.post('../php/agentSyncStatus.php', {dbName: dbName, dbUser: dbUser,
                                        dbPassword: dbPassword, login: login,
                                        password: password}, function(data) {
    processResponse(data, areaStatusSalesSum, 0);
  });
}

this.processResponse = function(response, obj, type) {
  tmp = JSON.parse(response);
  // alert(Object.keys(tmp).length);
  for (var i = 0; i < Object.keys(tmp).length; i++) {
    trigger = false;
    if (Object.keys(obj).length > 0) {
      for (var key in obj) {
        if (key == tmp[i].AgentID) {
          createObj(0, i, type);
        }
      }
      if (trigger == false) {
        createObj(1, i, type);
      }
    } else {
      createObj(1, i, type);
    }
  }
  if (type == 1) {
    showAgentStatus();
  }
}

this.createObj = function(paramOne, paramTwo, paramThree) {
  if (paramOne == 0) {
    if (paramThree == 0) {
      total = parseFloat(areaStatusSalesSum[tmp[paramTwo].AgentID], 10) + parseFloat(tmp[paramTwo].InvoiceSum, 10);
      invoicesNumber = areaStatusInvoicesNumber[tmp[paramTwo].AgentID] + 1;
      lastSyncDateTime = tmp[paramTwo].DateTimeDocLocal;
      areaStatusSalesSum[tmp[paramTwo].AgentID] = total;
      areaStatusInvoicesNumber[tmp[paramTwo].AgentID] = invoicesNumber;
      areaStatusLastSyncDateTime[tmp[paramTwo].AgentID] = lastSyncDateTime;
      trigger = true;
    }
    if (paramThree == 1) {
      cash = parseFloat(areaCashStatus[tmp[paramTwo].AgentID], 10) + parseFloat(tmp[paramTwo].InvoiceSum, 10);
      areaCashStatus[tmp[paramTwo].AgentID] = cash;
      trigger = true;
    }
  }
  if (paramOne == 1) {
    if (paramThree == 0) {
      Object.defineProperty(areaStatusSalesSum, tmp[paramTwo].AgentID, {
         value: parseFloat(tmp[paramTwo].InvoiceSum, 10),
         writable: true,
         enumerable: true,
         configurable: true
      });
      Object.defineProperty(areaStatusInvoicesNumber, tmp[paramTwo].AgentID, {
         value: 1,
         writable: true,
         enumerable: true,
         configurable: true
      });
      Object.defineProperty(areaStatusLastSyncDateTime, tmp[paramTwo].AgentID, {
         value: tmp[paramTwo].DateTimeDocLocal,
         writable: true,
         enumerable: true,
         configurable: true
      });
    }
    if (paramThree == 1) {
      Object.defineProperty(areaCashStatus, tmp[paramTwo].AgentID, {
         value: parseFloat(tmp[paramTwo].InvoiceSum, 10),
         writable: true,
         enumerable: true,
         configurable: true
      });
    }
  }
}

this.showAgentStatus = function() {
  $('.loginContainer').append(" \
    <div id='agentStatusContainer' class='agentStatusContainer'> \
      <table id='agentStatusTableData'></table> \
    </div> \
  ");
  for (var i = 0; i < Object.keys(areaStatusSalesSum).length; i++) {
    if (Object.keys(areaStatusSalesSum)[i] == Object.keys(areaCashStatus)[i]) {
      var cashTmp = areaCashStatus[Object.keys(areaCashStatus)[i]].toFixed(2);
    } else {
      var cashTmp = 0;
    }
    var statusLine = '<tr> \
                        <td>' + localVars.area + Object.keys(areaStatusSalesSum)[i] + '</td> \
                        <td>' + localVars.salesTotal + areaStatusSalesSum[Object.keys(areaStatusSalesSum)[i]].toFixed(2) + '</td> \
                        <td>' + localVars.salesCash + cashTmp + '</td> \
                        <td>' + localVars.salesInvoicesQuantity + areaStatusInvoicesNumber[Object.keys(areaStatusInvoicesNumber)[i]] + '</td> \
                        <td>' + localVars.lastSyncDateTime + areaStatusLastSyncDateTime[Object.keys(areaStatusLastSyncDateTime)[i]] + '</td> \
                      </tr>';
    $("#agentStatusTableData").append(statusLine);
  }
}
