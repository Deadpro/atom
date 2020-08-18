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
  "spGetAccSubject" : new Object()
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
      <div class='panel panel-custom border'> \
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
    $('div#subMenuPopUpHolder').append("<div id='subMenu'> \
      <div class='panel panel-custom border'> \
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
      <div class='panel panel-custom border'> \
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
        <div id='moreInfoParent'></div> \
      </div> \
    </div> \
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
  changeDBTablesLocalVars.areaCurrentValue = radio.value;
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
  var tmpName;
  var tmpID;
  alert(Object.keys(changeDBTablesLocalVars.salesPartnersList).length);
  for (var i = 0; i < Object.keys(changeDBTablesLocalVars.salesPartnersList).length; i++) {
    tmpName = changeDBTablesLocalVars.salesPartnersList[i].Наименование.toString();
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
}

function getSelectedSPID(){
  const Value = document.querySelector('#sp-list').value;
  if(!Value) return;
  Text = document.querySelector('option[value="' + Value + '"]').id;
  changeDBTablesLocalVars.selectedSPID = Text;
  // const option=document.createElement("option");
  // option.value=Value;
  // option.text=Text;
  //
  // document.getElementById('Colors').appendChild(option);
  this.showSPInfoToChange();
}

this.showSPInfoToChange = function() {
  $('div#moreInfoParent').append("<div id='moreInfoChild'> \
    <div class='panel panel-custom border'> \
      <div class='panel-heading col-100'><span>" + changeDBTablesLocalVars.chooseSalesPartnerLable + "</span></div> \
      <div class='panel-body'> \
        <label for='sp'>Тест:</label> \
        <input class='col-100' id='sp' name='sp' type='text'/> \
      </div> \
    </div> \
  </div> \
  ");
}

function chooseItemMenuOptionToChange(radio) {

}

function chooseAreaToChangeSales(radio) {

}

function chooseAreaToChangeReceives(radio) {

}
