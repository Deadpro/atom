$('#home').on('click', function() {

  agentStatus.areaStatusSalesSum = [];
  agentStatus.areaStatusInvoicesNumber = [];
  agentStatus.areaStatusLastSyncDateTime = [];
  agentStatus.areaCashStatus = [];
  agentStatus.areaCashlessStatus = [];
  agentStatus.areaDevelopmentStatus = [];
  starter();
  toTop("connection-data");
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
     agentStatus.loginSecurityData = JSON.parse(data);
     // alert($.trim(agentStatus.loginSecurityData[0].attribute));
     if ($.trim(agentStatus.loginSecurityData[0].attribute) == 'ceo') {
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
    processResponse(data, agentStatus.areaCashStatus, 1);
  });
}

this.getAgentStatus = function(dbName, dbUser, dbPassword, login, password) {
  $.post('../php/agentSyncStatus.php', {dbName: dbName, dbUser: dbUser,
                                        dbPassword: dbPassword, login: login,
                                        password: password}, function(data) {
    processResponse(data, agentStatus.areaStatusSalesSum, 0);
    processResponse(data, agentStatus.areaCashlessStatus, 2);
    processResponse(data, agentStatus.areaDevelopmentStatus, 3);
  });
  if (Object.keys(agentStatus.responseDataObject).length == 0) {
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
  agentStatus.responseDataObject = JSON.parse(response);
  for (var i = 0; i < Object.keys(agentStatus.responseDataObject).length; i++) {
    agentStatus.trigger = false;
    if (Object.keys(obj).length > 0) {
      for (var key in obj) {
        if (key == agentStatus.responseDataObject[i].AgentID) {
          createObj(0, i, type);
        }
      }
      if (agentStatus.trigger == false) {
        createObj(1, i, type);
      }
    } else {
      createObj(1, i, type);
    }
  }

  if (agentStatus.endTriggerOne == true && agentStatus.endTriggerThree == true && agentStatus.endTriggerFour == true) {
    showAgentStatus();
  }
}

this.createObj = function(paramOne, paramTwo, paramThree) {
  if (paramOne == 0) {
    if (paramThree == 0) {
      total = parseFloat(agentStatus.areaStatusSalesSum[agentStatus.responseDataObject[paramTwo].AgentID], 10) + parseFloat(agentStatus.responseDataObject[paramTwo].InvoiceSum, 10);
      invoicesNumber = agentStatus.areaStatusInvoicesNumber[agentStatus.responseDataObject[paramTwo].AgentID] + 1;
      lastSyncDateTime = agentStatus.responseDataObject[paramTwo].DateTimeDocLocal;
      agentStatus.areaStatusSalesSum[agentStatus.responseDataObject[paramTwo].AgentID] = total;
      agentStatus.areaStatusInvoicesNumber[agentStatus.responseDataObject[paramTwo].AgentID] = invoicesNumber;
      agentStatus.areaStatusLastSyncDateTime[agentStatus.responseDataObject[paramTwo].AgentID] = lastSyncDateTime;
      agentStatus.trigger = true;
      if (paramTwo == Object.keys(agentStatus.responseDataObject).length - 1) {
        agentStatus.endTriggerOne = true;
      }
    }
    if (paramThree == 1) {
      if (agentStatus.responseDataObject[paramTwo].AccountingType == "провод") {
        cash = parseFloat(agentStatus.areaCashStatus[agentStatus.responseDataObject[paramTwo].AgentID], 10) + parseFloat(agentStatus.responseDataObject[paramTwo].InvoiceSum, 10);
        agentStatus.areaCashStatus[agentStatus.responseDataObject[paramTwo].AgentID] = cash;
        agentStatus.trigger = true;
      } else {
        agentStatus.areaCashStatus[agentStatus.responseDataObject[paramTwo].AgentID] += 0;
        agentStatus.trigger = true;
      }
      if (paramTwo == Object.keys(agentStatus.responseDataObject).length - 1) {
        agentStatus.endTriggerTwo = true;
      }
    }
    if (paramThree == 2) {
      if (agentStatus.responseDataObject[paramTwo].AccountingType == "провод") {
        cashless = parseFloat(agentStatus.areaCashlessStatus[agentStatus.responseDataObject[paramTwo].AgentID], 10) + parseFloat(agentStatus.responseDataObject[paramTwo].InvoiceSum, 10);
        agentStatus.areaCashlessStatus[agentStatus.responseDataObject[paramTwo].AgentID] = cashless;
        agentStatus.trigger = true;
      } else {
        agentStatus.areaCashlessStatus[agentStatus.responseDataObject[paramTwo].AgentID] += 0;
        agentStatus.trigger = true;
      }
      if (paramTwo == Object.keys(agentStatus.responseDataObject).length - 1) {
        agentStatus.endTriggerThree = true;
      }
    }
    if (paramThree == 3) {
      if (agentStatus.responseDataObject[paramTwo].Comment != "") {
        agentStatus.areaDevelopmentStatus[agentStatus.responseDataObject[paramTwo].AgentID] += 1;
        agentStatus.trigger = true;
      } else {
        agentStatus.areaDevelopmentStatus[agentStatus.responseDataObject[paramTwo].AgentID] += 0;
        agentStatus.trigger = true;
      }
      if (paramTwo == Object.keys(agentStatus.responseDataObject).length - 1) {
        agentStatus.endTriggerFour = true;
      }
    }
  }
  if (paramOne == 1) {
    if (paramThree == 0) {
      Object.defineProperty(agentStatus.areaStatusSalesSum, agentStatus.responseDataObject[paramTwo].AgentID, {
         value: parseFloat(agentStatus.responseDataObject[paramTwo].InvoiceSum, 10),
         writable: true,
         enumerable: true,
         configurable: true
      });
      Object.defineProperty(agentStatus.areaStatusInvoicesNumber, agentStatus.responseDataObject[paramTwo].AgentID, {
         value: 1,
         writable: true,
         enumerable: true,
         configurable: true
      });
      Object.defineProperty(agentStatus.areaStatusLastSyncDateTime, agentStatus.responseDataObject[paramTwo].AgentID, {
         value: agentStatus.responseDataObject[paramTwo].DateTimeDocLocal,
         writable: true,
         enumerable: true,
         configurable: true
      });
      if (paramTwo == Object.keys(agentStatus.responseDataObject).length - 1) {
        agentStatus.endTriggerOne = true;
      }
    }
    if (paramThree == 1) {
      if (agentStatus.responseDataObject[paramTwo].AccountingType == "непровод") {
        Object.defineProperty(agentStatus.areaCashStatus, agentStatus.responseDataObject[paramTwo].AgentID, {
           value: parseFloat(agentStatus.responseDataObject[paramTwo].InvoiceSum, 10),
           writable: true,
           enumerable: true,
           configurable: true
        });
      } else {
        Object.defineProperty(agentStatus.areaCashStatus, agentStatus.responseDataObject[paramTwo].AgentID, {
           value: 0,
           writable: true,
           enumerable: true,
           configurable: true
        });
      }
      if (paramTwo == Object.keys(agentStatus.responseDataObject).length - 1) {
        agentStatus.endTriggerTwo = true;
      }
    }
    if (paramThree == 2) {
      if (agentStatus.responseDataObject[paramTwo].AccountingType == "провод") {
         Object.defineProperty(agentStatus.areaCashlessStatus, agentStatus.responseDataObject[paramTwo].AgentID, {
           value: parseFloat(agentStatus.responseDataObject[paramTwo].InvoiceSum, 10),
           writable: true,
           enumerable: true,
           configurable: true
         });
      } else {
        Object.defineProperty(agentStatus.areaCashlessStatus, agentStatus.responseDataObject[paramTwo].AgentID, {
          value: 0,
          writable: true,
          enumerable: true,
          configurable: true
        });
      }
      if (paramTwo == Object.keys(agentStatus.responseDataObject).length - 1) {
       agentStatus.endTriggerThree = true;
      }
    }
    if (paramThree == 3) {
      if (agentStatus.responseDataObject[paramTwo].Comment != "") {
        Object.defineProperty(agentStatus.areaDevelopmentStatus, agentStatus.responseDataObject[paramTwo].AgentID, {
          value: 1,
          writable: true,
          enumerable: true,
          configurable: true
        });
      } else {
        Object.defineProperty(agentStatus.areaDevelopmentStatus, agentStatus.responseDataObject[paramTwo].AgentID, {
          value: 0,
          writable: true,
          enumerable: true,
          configurable: true
        });
      }
      if (paramTwo == Object.keys(agentStatus.responseDataObject).length - 1) {
       agentStatus.endTriggerFour = true;
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
  for (var i = 0; i < Object.keys(agentStatus.areaStatusSalesSum).length; i++) {
    if (Object.keys(agentStatus.areaStatusSalesSum)[i] == Object.keys(agentStatus.areaCashStatus)[i]) {
      var cashTmp = agentStatus.areaCashStatus[Object.keys(agentStatus.areaCashStatus)[i]].toFixed(2);
    } else {
      var cashTmp = 0;
    }
    if (Object.keys(agentStatus.areaStatusSalesSum)[i] == Object.keys(agentStatus.areaCashlessStatus)[i]) {
      var cashlessTmp = agentStatus.areaCashlessStatus[Object.keys(agentStatus.areaCashlessStatus)[i]].toFixed(2);
    } else {
      var cashlessTmp = 0;
    }
    if (cashTmp > 0) {
      var debtSaleTmp = Math.abs(cashlessTmp - cashTmp).toFixed(2);
    } else {
      var debtSaleTmp = 0;
    }
    if (Object.keys(agentStatus.areaStatusSalesSum)[i] == Object.keys(agentStatus.areaDevelopmentStatus)[i]) {
      var devStatus = agentStatus.areaDevelopmentStatus[Object.keys(agentStatus.areaDevelopmentStatus)[i]];
    } else {
      var devStatus = 0;
    }
    // devStatus = agentStatus.areaDevelopmentStatus[Object.keys(agentStatus.areaDevelopmentStatus)[i]];
    var statusLine = '<tr> \
                        <td>' + agentStatus.area + Object.keys(agentStatus.areaStatusSalesSum)[i] + '</td> \
                        <td>' + agentStatus.salesTotal + agentStatus.areaStatusSalesSum[Object.keys(agentStatus.areaStatusSalesSum)[i]].toFixed(2) + '</td> \
                        <td>' + agentStatus.salesCash + cashTmp + linebreak + agentStatus.salesCashless + cashlessTmp + linebreak + agentStatus.debtSale + debtSaleTmp + '</td> \
                        <td>' + agentStatus.salesInvoicesQuantity + agentStatus.areaStatusInvoicesNumber[Object.keys(agentStatus.areaStatusInvoicesNumber)[i]] + linebreak + agentStatus.areaDevelopmentStatusLabel + devStatus + '</td> \
                        <td>' + agentStatus.lastSyncDateTime + agentStatus.areaStatusLastSyncDateTime[Object.keys(agentStatus.areaStatusLastSyncDateTime)[i]] + '</td> \
                      </tr>';
    $("#agentStatusTableData").append(statusLine);
  }
}
