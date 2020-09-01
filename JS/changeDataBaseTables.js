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
  "tmpName" : "",
  "tmpID" : "",
  "spInfoLable" : "Подробные сведения об контрагенте",
  "statusUpdateData" : new Object(),
  "reloadTrigger" : false,
  "backButton" : new Object(),
  "backButtonTriggers" : ["spName", "spLegalName", "spArea", "spRoot", "spTaxNumber", "spAccType", "spAddress", "spContacts", "spCurrState", "spLattitude", "spLongitude", "spByPass", "spAccSubject"],
  "logFileData" : ""
};

$('#changeDataBaseTables').on('click', function() {
  renderOptions();
});

$('#showSPInfo').on('click', function() {
  getSelectedSPID();
});

function renderOptions() {
  $('div#connection-data').html("");
  $('div#connection-data').append(" \
    <div id='changeDBTablesMenuContainer' class='changeDBTablesMenuContainer'> \
      <div class='panel panel-custom border' id='dbCL'> \
        <div class='panel-heading col-100'><span>" + changeDBTablesLocalVars.dbChangeLabel + "</span></div> \
        <div class='panel-body'> \
          <div class='panel panel-custom border'> \
            <div class='panel-heading col-100'><span>" + changeDBTablesLocalVars.chooseTableToChangeLabel + "</span></div> \
            <div class='panel-body'> \
              <div class='radioContainer'><input type='radio' id='chooseChangeSalesPartners' name='choostabletochange' onclick='chooseSubMenuChangeDBTables(this);' value='SalesPartners'><label for='Контрагенты' id='radioLabel'>Контрагенты</label></div> \
              <div class='radioContainer'><input type='radio' id='chooseChangeItems' name='choostabletochange' onclick='chooseSubMenuChangeDBTables(this);' value='Items'><label for='Номенклатура' id='radioLabel'>Номенклатура</label></div> \
              <div class='radioContainer'><input type='radio' id='chooseChangeSales' name='choostabletochange' onclick='chooseSubMenuChangeDBTables(this);' value='Sales'><label for='Накладные' id='radioLabel'>Накладные</label></div> \
              <div class='radioContainer'><input type='radio' id='chooseChangeReceive' name='choostabletochange' onclick='chooseSubMenuChangeDBTables(this);' value='Receives'><label for='Загрузка' id='radioLabel'>Загрузка</label></div> \
            </div> \
          </div> \
          <div id='subMenuPopUpHolder'></div> \
        </div> \
      </div> \
    </div> \
    <script src='../js/request_map.js' type='text/javascript'></script> \
  ");
}

function chooseSubMenuChangeDBTables(radio) {
  if (radio.value == "SalesPartners"){
    $('div#subMenuPopUpHolder').html("");
    $('div#subMenuPopUpHolder').append(
      "<div class='panel panel-custom border' id='chooseSPT'> \
        <div class='panel-heading col-100'><span>" + changeDBTablesLocalVars.chooseSPTableToChangeLabel + "</span></div> \
        <div class='panel-body'> \
          <div class='radioContainer'><input type='radio' id='chooseChangeSPAreaOne' name='chooseareatochange' onclick='chooseAreaToChangeSP(this);' value='1'><label for='Район 1' id='radioLabel'>Район 1</label></div> \
          <div class='radioContainer'><input type='radio' id='chooseChangeSPAreaTwo' name='chooseareatochange' onclick='chooseAreaToChangeSP(this);' value='2'><label for='Район 2' id='radioLabel'>Район 2</label></div> \
          <div class='radioContainer'><input type='radio' id='chooseChangeSPAreaThree' name='chooseareatochange' onclick='chooseAreaToChangeSP(this);' value='3'><label for='Район 3' id='radioLabel'>Район 3</label></div> \
          <div class='radioContainer'><input type='radio' id='chooseChangeSPAreaFour' name='chooseareatochange' onclick='chooseAreaToChangeSP(this);' value='4'><label for='Район 4' id='radioLabel'>Район 4</label></div> \
          <div class='radioContainer'><input type='radio' id='chooseChangeSPAreaFive' name='chooseareatochange' onclick='chooseAreaToChangeSP(this);' value='5'><label for='Район 5' id='radioLabel'>Район 5</label></div> \
          <div class='radioContainer'><input type='radio' id='chooseChangeSPAreaSeven' name='chooseareatochange' onclick='chooseAreaToChangeSP(this);' value='7'><label for='Район 7' id='radioLabel'>Район 7</label></div> \
          <div class='radioContainer'><input type='radio' id='chooseChangeSPAreaZero' name='chooseareatochange' onclick='chooseAreaToChangeSP(this);' value='0'><label for='Вне сети' id='radioLabel'>Вне сети</label></div> \
        </div> \
      </div> \
      <div class='panel panel-custom border' id='chooseSPL'> \
        <div class='panel-heading col-100'><span>" + changeDBTablesLocalVars.chooseSalesPartnerLable + "</span></div> \
        <div class='panel-body'> \
          <div class='areaList'> \
            <label for='sp-list'>Контрагенты:</label> \
            <input class='col-100' list='list-of-sps' id='sp-list' name='sp-list'/> \
            <datalist id='list-of-sps'> \
            </datalist> \
            <div class='col-40'><input type='submit' id='showSPInfo' value='подробно'></div> \
          </div> \
        </div> \
      </div> \
      <div id='moreInfoParent'></div> \
    <script src='../js/changeDataBaseTables.js' type='text/javascript' ></script> \
    ");
  }
  if (radio.value == "Items"){
    $('div#subMenuPopUpHolder').html("");
    $('div#subMenuPopUpHolder').append("<div id='subMenu'> \
    <div class='panel panel-custom border'> \
      <div class='panel-heading col-100'><span>" + changeDBTablesLocalVars.chooseItemsTableToChangeLabel + "</span></div> \
      <div class='panel-body'> \
        <div class='radioContainer'><input type='radio' id='chooseChangeBasicPrices' name='chooseitemmenuoptiontochange' onclick='chooseItemMenuOptionToChange(this);' value='changeBasicItems'><label for='Изменить общие цены' id='radioLabel'>Изменить общие цены</label></div> \
        <div class='radioContainer'><input type='radio' id='chooseChangeDiscounts' name='chooseitemmenuoptiontochange' onclick='chooseItemMenuOptionToChange(this);' value='changeDiscounts'><label for='Изменить скидки' id='radioLabel'>Изменить скидки</label></div> \
        </div> \
    </div> \
    </div> \
    ");
  }
  if (radio.value == "Sales"){
    $('div#subMenuPopUpHolder').html("");
    $('div#subMenuPopUpHolder').append("<div id='subMenu'> \
      <div class='panel panel-custom border'> \
        <div class='panel-heading col-100'><span>" + changeDBTablesLocalVars.chooseSalesTableToChangeLabel + "</span></div> \
        <div class='panel-body'> \
          <div class='radioContainer'><input type='radio' id='chooseChangeSalesAreaTwo' name='chooseareatochangesales' onclick='chooseAreaToChangeSales(this);' value='areaTwo'><label for='Продажи район 2' id='radioLabel'>Продажи район 2</label></div> \
          <div class='radioContainer'><input type='radio' id='chooseChangeSalesAreaThree' name='chooseareatochangesales' onclick='chooseAreaToChangeSales(this);' value='areaThree'><label for='Продажи район 3' id='radioLabel'>Продажи район 3</label></div> \
          <div class='radioContainer'><input type='radio' id='chooseChangeSalesAreaFour' name='chooseareatochangesales' onclick='chooseAreaToChangeSales(this);' value='areaFour'><label for='Продажи район 4' id='radioLabel'>Продажи район 4</label></div> \
          <div class='radioContainer'><input type='radio' id='chooseChangeSalesAreaFive' name='chooseareatochangesales' onclick='chooseAreaToChangeSales(this);' value='areaFive'><label for='Продажи район 5' id='radioLabel'>Продажи район 5</label></div> \
          <div class='radioContainer'><input type='radio' id='chooseChangeSalesPAreaSeven' name='chooseareatochangesales' onclick='chooseAreaToChangeSales(this);' value='areaSeven'><label for='Продажи район 7' id='radioLabel'>Продажи район 7</label></div> \
        </div> \
      </div> \
    </div> \
    ");
  }
  if (radio.value == "Receives"){
    $('div#subMenuPopUpHolder').html("");
    $('div#subMenuPopUpHolder').append("<div id='subMenu'> \
    <div class='panel panel-custom border'> \
      <div class='panel-heading col-100'><span>" + changeDBTablesLocalVars.chooseReceiveTableToChangeLabel + "</span></div> \
      <div class='panel-body'> \
        <div class='radioContainer'><input type='radio' id='chooseChangeReceivesAreaTwo' name='chooseareatochangereceives' onclick='chooseAreaToChangeReceives(this);' value='areaTwo'><label for='Загрузки район 2' id='radioLabel'>Загрузки район 2</label></div> \
        <div class='radioContainer'><input type='radio' id='chooseChangeReceivesAreaThree' name='chooseareatochangereceives' onclick='chooseAreaToChangeReceives(this);' value='areaThree'><label for='Загрузки район 3' id='radioLabel'>Загрузки район 3</label></div> \
        <div class='radioContainer'><input type='radio' id='chooseChangeReceivesAreaFour' name='chooseareatochangereceives' onclick='chooseAreaToChangeReceives(this);' value='areaFour'><label for='Загрузки район 4' id='radioLabel'>Загрузки район 4</label></div> \
        <div class='radioContainer'><input type='radio' id='chooseChangeReceivesAreaFive' name='chooseareatochangereceives' onclick='chooseAreaToChangeReceives(this);' value='areaFive'><label for='Загрузки район 5' id='radioLabel'>Загрузки район 5</label></div> \
      </div> \
    </div> \
    </div> \
    ");
  }
}
// <select name='salesPartnersList' id='optionGroup' size='5'>
// </select>
function chooseAreaToChangeSP(radio) {
  // for (var i=0; i<13; i++) {
  //   changeDBTablesLocalVars.backButton[changeDBTablesLocalVars.backButtonTriggers[i]] = "";
  // }
  changeDBTablesLocalVars.salesPartnersList = new Object();
  if (changeDBTablesLocalVars.reloadTrigger == true) {
    changeDBTablesLocalVars.areaCurrentValue = radio;
    changeDBTablesLocalVars.reloadTrigger = false;
  } else {
    changeDBTablesLocalVars.areaCurrentValue = radio.value;
  }
  // alert(changeDBTablesLocalVars.areaCurrentValue);
  $.post('../php/receiveDataToChange.php', {dbName: localStorage.getItem('dbName'), dbUser: localStorage.getItem('dbUser'),
                                          dbPassword: localStorage.getItem('dbPassword'),
                                          loadType: "areaToChange",
                                          area: changeDBTablesLocalVars.areaCurrentValue}, function(data) {
    changeDBTablesLocalVars.salesPartnersList = JSON.parse(data);
    populateOptionList();
  })
}

// this.getSalesPartnerID = function(){
//   var x = document.getElementById("optionGroup").selectedIndex;
//   $('#optionGroup option').each(function() {
//     if (this.selected) {
//       reportsLocalVars.optionValue = document.getElementsByTagName("option")[x].value;
//     }
//   });
//   alert(reportsLocalVars.optionValue);
//   return reportsLocalVars.optionValue;
// }

function populateOptionList() {
  // changeDBTablesLocalVars.reloadTrigger = false;
  changeDBTablesLocalVars.spGetName = new Object();
  changeDBTablesLocalVars.spGetLegalName = new Object();
  changeDBTablesLocalVars.spGetArea = new Object();
  changeDBTablesLocalVars.spGetDayOfTheWeek = new Object();
  changeDBTablesLocalVars.spGetTaxNumber = new Object();
  changeDBTablesLocalVars.spGetAccType = new Object();
  changeDBTablesLocalVars.spGetAddress = new Object();
  changeDBTablesLocalVars.spGetContacts = new Object();
  changeDBTablesLocalVars.spGetCurrState = new Object();
  changeDBTablesLocalVars.spGetLattitude = new Object();
  changeDBTablesLocalVars.spGetLongitude = new Object();
  changeDBTablesLocalVars.spGetByPass = new Object();
  changeDBTablesLocalVars.spGetAccSubject = new Object();
  $("#list-of-sps").html("");
  $("#sp-list").html("");
  document.querySelector('#sp-list').value = "";
  var tmpName;
  var tmpID;
  var areaListLine = new String();
  // alert(Object.keys(changeDBTablesLocalVars.salesPartnersList).length);
  for (var i = 0; i < Object.keys(changeDBTablesLocalVars.salesPartnersList).length; i++) {
    tmpName = changeDBTablesLocalVars.salesPartnersList[i].Наименование;
    tmpID = changeDBTablesLocalVars.salesPartnersList[i].ID;
    areaListLine = "<option id='" + tmpID + "' value='" + tmpName + "' \
                    text='" + tmpName + "'></option>";
    $("#list-of-sps").append(areaListLine);
    changeDBTablesLocalVars.spGetName[tmpID] = tmpName;
    changeDBTablesLocalVars.spGetLegalName[tmpID] = changeDBTablesLocalVars.salesPartnersList[i].Юр_Наименование;
    changeDBTablesLocalVars.spGetArea[tmpID] = changeDBTablesLocalVars.salesPartnersList[i].Район;
    changeDBTablesLocalVars.spGetDayOfTheWeek[tmpID] = changeDBTablesLocalVars.salesPartnersList[i].DayOfTheWeek;
    changeDBTablesLocalVars.spGetTaxNumber[tmpID] = changeDBTablesLocalVars.salesPartnersList[i].ИНН;
    changeDBTablesLocalVars.spGetAccType[tmpID] = changeDBTablesLocalVars.salesPartnersList[i].Учет;
    changeDBTablesLocalVars.spGetAddress[tmpID] = changeDBTablesLocalVars.salesPartnersList[i].Адрес;
    changeDBTablesLocalVars.spGetContacts[tmpID] = changeDBTablesLocalVars.salesPartnersList[i].Контакты;
    changeDBTablesLocalVars.spGetCurrState[tmpID] = changeDBTablesLocalVars.salesPartnersList[i].CurrState;
    changeDBTablesLocalVars.spGetLattitude[tmpID] = changeDBTablesLocalVars.salesPartnersList[i].Latitude;
    changeDBTablesLocalVars.spGetLongitude[tmpID] = changeDBTablesLocalVars.salesPartnersList[i].Longitude;
    changeDBTablesLocalVars.spGetByPass[tmpID] = changeDBTablesLocalVars.salesPartnersList[i].addressLoadByPass;
    changeDBTablesLocalVars.spGetAccSubject[tmpID] = changeDBTablesLocalVars.salesPartnersList[i].accSubject;
  }
  // $("#sp-list").blur();
  // $("#list-of-sps").blur();
  // $("#chooseSPL").focus();
}

function getSelectedSPID(){
  const Value = document.querySelector('#sp-list').value;
  if(!Value) return;
  Text = document.querySelector('option[value="' + Value + '"]').id;
  changeDBTablesLocalVars.selectedSPID = Text;
  // const option=document.createElement("option");
  // option.value=Value;
  // option.text=Text;
  // document.getElementById('Colors').appendChild(option);
  this.showSPInfoToChange(Text, 0);
}

this.showSPInfoToChange = function(spIDToChange, autoTrigger) {
  if (autoTrigger == 0) {
    for (var i=0; i<13; i++) {
      changeDBTablesLocalVars.backButton[changeDBTablesLocalVars.backButtonTriggers[i]] = "";
    }
  }
  $('div#moreInfoParent').html("");
  $('div#moreInfoParent').append(
    '<div class="panel panel-custom border"> \
      <div class="panel-heading col-100"><span>' + changeDBTablesLocalVars.spInfoLable + '</span></div> \
      <div class="panel-body"> \
        <label for="spName">Наименование:</label> \
        <input class="col-100" id="spName" type="text" value="' + changeDBTablesLocalVars.spGetName[spIDToChange] + '"/> \
        <div class="col-100"><input type="button" value="внести изменения" onclick="saveChangesToSPName();"></div> \
        ' + changeDBTablesLocalVars.backButton["spName"] + ' \
        <div class="separator"></div>\
        <label for="spName">Юр.Наименование:</label> \
        <input class="col-100" id="spLegalName" type="text" value="' + changeDBTablesLocalVars.spGetLegalName[spIDToChange] + '"/> \
        <div class="col-100"><input type="button" value="внести изменения" onclick="saveChangesToSPLegalName();"></div> \
        ' + changeDBTablesLocalVars.backButton["spLegalName"] + ' \
        <div class="separator"></div>\
        <label for="spName">Район:</label> \
        <input class="col-100" id="spArea" type="text" value="' + changeDBTablesLocalVars.spGetArea[spIDToChange] + '"/> \
        <div class="col-100"><input type="button" value="внести изменения" onclick="saveChangesToSPArea();"></div> \
        <div class="separator"></div>\
        <label for="spName">Маршрут:</label> \
        <input class="col-100" id="spRoot" type="text" value="' + changeDBTablesLocalVars.spGetDayOfTheWeek[spIDToChange] + '"/> \
        <div class="col-100"><input type="button" value="внести изменения" onclick="saveChangesToSPRoot();"></div> \
        <div class="separator"></div>\
        <label for="spName">ИНН:</label> \
        <input class="col-100" id="spTaxNumber" type="text" value="' + changeDBTablesLocalVars.spGetTaxNumber[spIDToChange] + '"/> \
        <div class="col-100"><input type="button" value="внести изменения" onclick="saveChangesToSPTaxNumber();"></div> \
        <div class="separator"></div>\
        <label for="spName">Тип Учета:</label> \
        <input class="col-100" id="spAccType" type="text" value="' + changeDBTablesLocalVars.spGetAccType[spIDToChange] + '"/> \
        <div class="col-100"><input type="button" value="внести изменения" onclick="saveChangesToSPAccType();"></div> \
        <div class="separator"></div>\
        <label for="spName">Адрес:</label> \
        <input class="col-100" id="spAddress" type="text" value="' + changeDBTablesLocalVars.spGetAddress[spIDToChange] + '"/> \
        <div class="col-100"><input type="button" value="внести изменения" onclick="saveChangesToSPAddress();"></div> \
        <div class="separator"></div>\
        <label for="spName">Контакты:</label> \
        <input class="col-100" id="spContacts" type="text" value="' + changeDBTablesLocalVars.spGetContacts[spIDToChange] + '"/> \
        <div class="col-100"><input type="button" value="внести изменения" onclick="saveChangesToSPContacts();"></div> \
        <div class="separator"></div>\
        <label for="spName">Состояние:</label> \
        <input class="col-100" id="spCurrState" type="text" value="' + changeDBTablesLocalVars.spGetCurrState[spIDToChange] + '"/> \
        <div class="col-100"><input type="button" value="внести изменения" onclick="saveChangesToSPCurrState();"></div> \
        <div class="separator"></div>\
        <label for="spName">Широта:</label> \
        <input class="col-100" id="spLattitude" type="text" value="' + changeDBTablesLocalVars.spGetLattitude[spIDToChange] + '"/> \
        <div class="col-100"><input type="button" value="внести изменения" onclick="saveChangesToSPLattitude();"></div> \
        <div class="separator"></div>\
        <label for="spName">Долгота:</label> \
        <input class="col-100" id="spLongitude" type="text" value="' + changeDBTablesLocalVars.spGetLongitude[spIDToChange] + '"/> \
        <div class="col-100"><input type="button" value="внести изменения" onclick="saveChangesToSPLongitude();"></div> \
        <div class="separator"></div>\
        <label for="spName">Исключение:</label> \
        <input class="col-100" id="spByPass" type="text" value="' + changeDBTablesLocalVars.spGetByPass[spIDToChange] + '"/> \
        <div class="col-100"><input type="button" value="внести изменения" onclick="saveChangesToSPByPass();"></div> \
        <div class="separator"></div>\
        <label for="spName">Категория отчетности:</label> \
        <input class="col-100" id="spAccSubject" type="text" value="' + changeDBTablesLocalVars.spGetAccSubject[spIDToChange] + '"/> \
        <div class="col-100"><input type="button" value="внести изменения" onclick="saveChangesToSPAccSubject();"></div> \
      </div> \
    </div> \
  ');
}

this.saveChangesToSPName = function() {
  processChangesToSp("spName", changeDBTablesLocalVars.spGetName);
}
this.saveChangesToSPLegalName = function() {
  processChangesToSp("spLegalName", changeDBTablesLocalVars.spGetLegalName);
}
this.saveChangesToSPArea = function() {
  processChangesToSp("spArea", changeDBTablesLocalVars.spGetArea);
}
this.saveChangesToSPRoot = function() {
  processChangesToSp("spRoot", changeDBTablesLocalVars.spGetDayOfTheWeek);
}
this.saveChangesToSPTaxNumber = function() {
  processChangesToSp("spTaxNumber", changeDBTablesLocalVars.spGetTaxNumber);
}
this.saveChangesToSPAccType = function() {
  processChangesToSp("spAccType", changeDBTablesLocalVars.spGetAccType);
}
this.saveChangesToSPAddress = function() {
  processChangesToSp("spAddress", changeDBTablesLocalVars.spGetAddress);
}
this.saveChangesToSPContacts = function() {
  processChangesToSp("spContacts", changeDBTablesLocalVars.spGetContacts);
}
this.saveChangesToSPCurrState = function() {
  processChangesToSp("spCurrState", changeDBTablesLocalVars.spGetCurrState);
}
this.saveChangesToSPLattitude = function() {
  processChangesToSp("spLattitude", changeDBTablesLocalVars.spGetLattitude);
}
this.saveChangesToSPLongitude = function() {
  processChangesToSp("spLongitude", changeDBTablesLocalVars.spGetLongitude);
}
this.saveChangesToSPByPass = function() {
  processChangesToSp("spByPass", changeDBTablesLocalVars.spGetByPass);
}
this.saveChangesToSPAccSubject = function() {
  processChangesToSp("spAccSubject", changeDBTablesLocalVars.spGetAccSubject);
}

this.processChangesToSp = function(trigger, table) {
  let idTmp = changeDBTablesLocalVars.selectedSPID;
  let nameTmp = changeDBTablesLocalVars.spGetName[idTmp];
  let areaTmp = changeDBTablesLocalVars.spGetArea[idTmp];
  const Value = document.querySelector('#' + trigger).value;
  if (Value != table[idTmp]) {
    // alert(Value + " " + areaTmp + " " + nameTmp + " " + idTmp + " " + trigger + " " + table[idTmp]);
    let toChange;
    toChange = confirm("Заменить " + table[idTmp] + " -- на -- " + Value + "  -- ?");
    if (toChange) {
      $.post('../php/updateData.php', {dbName: localStorage.getItem('dbName'), dbUser: localStorage.getItem('dbUser'),
                                              dbPassword: localStorage.getItem('dbPassword'),
                                              updateType: trigger, spName: nameTmp, spArea: areaTmp, spID: idTmp,
                                              beforeValue: table[idTmp], updateValue: Value}, function(data) {
        // changeDBTablesLocalVars.statusUpdateData = JSON.parse(data);
        let isConfirmed;
        if (data == "success") {
          isConfirmed = confirm("Данные обновлены, перезагрузить страницу?");
        } else {
          alert("Что-то пошло не так");
        }
        if (isConfirmed) {
          // location.reload();
          reloadData(trigger);
        }
      })
    }
  } else {alert("Вы не внесли изменения");}
}

this.reloadData = function(trigger) {
  changeDBTablesLocalVars.backButton = new Object();
  changeDBTablesLocalVars.reloadTrigger = true;
  chooseAreaToChangeSP(changeDBTablesLocalVars.areaCurrentValue);
  for (var i=0; i<13; i++) {
    if (changeDBTablesLocalVars.backButtonTriggers[i] == trigger) {
      changeDBTablesLocalVars.backButton[trigger] = '<div class="col-100"><input type="button" value="Отменить" id="' + trigger + '" onclick="stepBack(this);"></div>';
    } else {
      changeDBTablesLocalVars.backButton[changeDBTablesLocalVars.backButtonTriggers[i]] = "";
    }
  }
  setTimeout(() => this.showSPInfoToChange(changeDBTablesLocalVars.selectedSPID, 1), 2000);
}

this.stepBack = function(trigger) {
  alert(trigger.id);
  // $.post('../php/checkLogFile.php', {dbName: localStorage.getItem('dbName'), dbUser: localStorage.getItem('dbUser'),
  //                                     dbPassword: localStorage.getItem('dbPassword'),
  //                                     updateType: trigger}, function(data) {
  //   changeDBTablesLocalVars.logFileData = JSON.parse(data);
  //   let isConfirmed;
  //   if (data == "success") {
  //     isConfirmed = confirm("Заменить " + table[idTmp] + " -- на -- " + Value + "  -- ?");
  //   } else {
  //     alert("Что-то пошло не так");
  //   }
  //   if (isConfirmed) {
  //     // location.reload();
  //     reloadData(trigger);
  //   }
  // })
}

function chooseItemMenuOptionToChange(radio) {

}

function chooseAreaToChangeSales(radio) {

}

function chooseAreaToChangeReceives(radio) {

}
