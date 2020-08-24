var areaStatusSalesSum = new Object();
var areaStatusInvoicesNumber = new Object();
var areaStatusLastSyncDateTime = new Object();
var areaCashStatus = new Object();
var areaCashlessStatus = new Object();
var areaDevelopmentStatus = new Object();
var tmpAgentID;
var endTriggerOne;
var endTriggerTwo;
var endTriggerThree;
var endTriggerFour;
var localVars = {
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
  "trigger" : false,
  "loginSecurityData" : new Object()
};

$('#home').on('click', function() {
  starter();
});

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
     localVars.loginSecurityData = JSON.parse(data);
     // alert($.trim(localVars.loginSecurityData[0].attribute));
     if ($.trim(localVars.loginSecurityData[0].attribute) == 'ceo') {
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
    processResponse(data, areaCashlessStatus, 2);
    processResponse(data, areaDevelopmentStatus, 3);
  });
  if (Object.keys(localVars.responseDataObject).length == 0) {
    $('div#connection-data').html("");
    $('#connection-data').append(" \
      <div id='agentStatusContainer' class='agentStatusContainer'> \
        <span><h3>Конец смены</h3></span> \
        <span><p>Пока еще ни один район не закончил работу.</p></span> \
      </div> \
    ");
  }
}

this.processResponse = function(response, obj, type) {
  localVars.responseDataObject = JSON.parse(response);
  for (var i = 0; i < Object.keys(localVars.responseDataObject).length; i++) {
    localVars.trigger = false;
    if (Object.keys(obj).length > 0) {
      for (var key in obj) {
        if (key == localVars.responseDataObject[i].AgentID) {
          createObj(0, i, type);
        }
      }
      if (localVars.trigger == false) {
        createObj(1, i, type);
      }
    } else {
      createObj(1, i, type);
    }
  }

  if (endTriggerOne == true && endTriggerThree == true && endTriggerFour == true) {
    showAgentStatus();
  }
}

this.createObj = function(paramOne, paramTwo, paramThree) {
  if (paramOne == 0) {
    if (paramThree == 0) {
      total = parseFloat(areaStatusSalesSum[localVars.responseDataObject[paramTwo].AgentID], 10) + parseFloat(localVars.responseDataObject[paramTwo].InvoiceSum, 10);
      invoicesNumber = areaStatusInvoicesNumber[localVars.responseDataObject[paramTwo].AgentID] + 1;
      lastSyncDateTime = localVars.responseDataObject[paramTwo].DateTimeDocLocal;
      areaStatusSalesSum[localVars.responseDataObject[paramTwo].AgentID] = total;
      areaStatusInvoicesNumber[localVars.responseDataObject[paramTwo].AgentID] = invoicesNumber;
      areaStatusLastSyncDateTime[localVars.responseDataObject[paramTwo].AgentID] = lastSyncDateTime;
      localVars.trigger = true;
      if (paramTwo == Object.keys(localVars.responseDataObject).length - 1) {
        endTriggerOne = true;
      }
    }
    if (paramThree == 1) {
      if (localVars.responseDataObject[paramTwo].AccountingType == "провод") {
        cash = parseFloat(areaCashStatus[localVars.responseDataObject[paramTwo].AgentID], 10) + parseFloat(localVars.responseDataObject[paramTwo].InvoiceSum, 10);
        areaCashStatus[localVars.responseDataObject[paramTwo].AgentID] = cash;
        localVars.trigger = true;
      } else {
        areaCashStatus[localVars.responseDataObject[paramTwo].AgentID] += 0;
        localVars.trigger = true;
      }
      if (paramTwo == Object.keys(localVars.responseDataObject).length - 1) {
        endTriggerTwo = true;
      }
    }
    if (paramThree == 2) {
      if (localVars.responseDataObject[paramTwo].AccountingType == "провод") {
        cashless = parseFloat(areaCashlessStatus[localVars.responseDataObject[paramTwo].AgentID], 10) + parseFloat(localVars.responseDataObject[paramTwo].InvoiceSum, 10);
        areaCashlessStatus[localVars.responseDataObject[paramTwo].AgentID] = cashless;
        localVars.trigger = true;
      } else {
        areaCashlessStatus[localVars.responseDataObject[paramTwo].AgentID] += 0;
        localVars.trigger = true;
      }
      if (paramTwo == Object.keys(localVars.responseDataObject).length - 1) {
        endTriggerThree = true;
      }
    }
    if (paramThree == 3) {
      if (localVars.responseDataObject[paramTwo].Comment != "") {
        areaDevelopmentStatus[localVars.responseDataObject[paramTwo].AgentID] += 1;
        localVars.trigger = true;
      } else {
        areaDevelopmentStatus[localVars.responseDataObject[paramTwo].AgentID] += 0;
        localVars.trigger = true;
      }
      if (paramTwo == Object.keys(localVars.responseDataObject).length - 1) {
        endTriggerFour = true;
      }
    }
  }
  if (paramOne == 1) {
    if (paramThree == 0) {
      Object.defineProperty(areaStatusSalesSum, localVars.responseDataObject[paramTwo].AgentID, {
         value: parseFloat(localVars.responseDataObject[paramTwo].InvoiceSum, 10),
         writable: true,
         enumerable: true,
         configurable: true
      });
      Object.defineProperty(areaStatusInvoicesNumber, localVars.responseDataObject[paramTwo].AgentID, {
         value: 1,
         writable: true,
         enumerable: true,
         configurable: true
      });
      Object.defineProperty(areaStatusLastSyncDateTime, localVars.responseDataObject[paramTwo].AgentID, {
         value: localVars.responseDataObject[paramTwo].DateTimeDocLocal,
         writable: true,
         enumerable: true,
         configurable: true
      });
      if (paramTwo == Object.keys(localVars.responseDataObject).length - 1) {
        endTriggerOne = true;
      }
    }
    if (paramThree == 1) {
      if (localVars.responseDataObject[paramTwo].AccountingType == "непровод") {
        Object.defineProperty(areaCashStatus, localVars.responseDataObject[paramTwo].AgentID, {
           value: parseFloat(localVars.responseDataObject[paramTwo].InvoiceSum, 10),
           writable: true,
           enumerable: true,
           configurable: true
        });
      } else {
        Object.defineProperty(areaCashStatus, localVars.responseDataObject[paramTwo].AgentID, {
           value: 0,
           writable: true,
           enumerable: true,
           configurable: true
        });
      }
      if (paramTwo == Object.keys(localVars.responseDataObject).length - 1) {
        endTriggerTwo = true;
      }
    }
    if (paramThree == 2) {
      if (localVars.responseDataObject[paramTwo].AccountingType == "провод") {
         Object.defineProperty(areaCashlessStatus, localVars.responseDataObject[paramTwo].AgentID, {
           value: parseFloat(localVars.responseDataObject[paramTwo].InvoiceSum, 10),
           writable: true,
           enumerable: true,
           configurable: true
         });
      } else {
        Object.defineProperty(areaCashlessStatus, localVars.responseDataObject[paramTwo].AgentID, {
          value: 0,
          writable: true,
          enumerable: true,
          configurable: true
        });
      }
      if (paramTwo == Object.keys(localVars.responseDataObject).length - 1) {
       endTriggerThree = true;
      }
    }
    if (paramThree == 3) {
      if (localVars.responseDataObject[paramTwo].Comment != "") {
        Object.defineProperty(areaDevelopmentStatus, localVars.responseDataObject[paramTwo].AgentID, {
          value: 1,
          writable: true,
          enumerable: true,
          configurable: true
        });
      } else {
        Object.defineProperty(areaDevelopmentStatus, localVars.responseDataObject[paramTwo].AgentID, {
          value: 0,
          writable: true,
          enumerable: true,
          configurable: true
        });
      }
      if (paramTwo == Object.keys(localVars.responseDataObject).length - 1) {
       endTriggerFour = true;
      }
    }
  }
}

this.showAgentStatus = function() {
  $('div#connection-data').html("");
  $('#connection-data').append(" \
    <div id='agentStatusContainer' class='agentStatusContainer'> \
      <table id='agentStatusTableData'></table> \
    </div> \
  ");
  linebreak = "<br />";
  for (var i = 0; i < Object.keys(areaStatusSalesSum).length; i++) {
    if (Object.keys(areaStatusSalesSum)[i] == Object.keys(areaCashStatus)[i]) {
      var cashTmp = areaCashStatus[Object.keys(areaCashStatus)[i]].toFixed(2);
    } else {
      var cashTmp = 0;
    }
    if (Object.keys(areaStatusSalesSum)[i] == Object.keys(areaCashlessStatus)[i]) {
      var cashlessTmp = areaCashlessStatus[Object.keys(areaCashlessStatus)[i]].toFixed(2);
    } else {
      var cashlessTmp = 0;
    }
    if (cashTmp > 0) {
      var debtSaleTmp = Math.abs(cashlessTmp - cashTmp).toFixed(2);
    } else {
      var debtSaleTmp = 0;
    }
    if (Object.keys(areaStatusSalesSum)[i] == Object.keys(areaDevelopmentStatus)[i]) {
      var devStatus = areaDevelopmentStatus[Object.keys(areaDevelopmentStatus)[i]];
    } else {
      var devStatus = 0;
    }
    // devStatus = areaDevelopmentStatus[Object.keys(areaDevelopmentStatus)[i]];
    var statusLine = '<tr> \
                        <td>' + localVars.area + Object.keys(areaStatusSalesSum)[i] + '</td> \
                        <td>' + localVars.salesTotal + areaStatusSalesSum[Object.keys(areaStatusSalesSum)[i]].toFixed(2) + '</td> \
                        <td>' + localVars.salesCash + cashTmp + linebreak + localVars.salesCashless + cashlessTmp + linebreak + localVars.debtSale + debtSaleTmp + '</td> \
                        <td>' + localVars.salesInvoicesQuantity + areaStatusInvoicesNumber[Object.keys(areaStatusInvoicesNumber)[i]] + linebreak + localVars.areaDevelopmentStatusLabel + devStatus + '</td> \
                        <td>' + localVars.lastSyncDateTime + areaStatusLastSyncDateTime[Object.keys(areaStatusLastSyncDateTime)[i]] + '</td> \
                      </tr>';
    $("#agentStatusTableData").append(statusLine);
  }
}
