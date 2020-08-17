var changeDBTablesLocalVars = {
  "someLabel" : "Nothing yet here",
  "dbChangeLabel" : "Управление Базой Данных",
  "chooseTableToChangeLabel" : "Выберите подменю для работы",
  "chooseSPTableToChangeLabel" : "Выберите район контрагентов",
  "chooseSalesTableToChangeLabel" : "Выберите район продаж",
  "chooseReceiveTableToChangeLabel" : "Выберите район загрузки",
  "chooseItemsTableToChangeLabel" : "Выберите вариант изменения номенклатуры",
  "chooseItemsBasicTableToChangeLabel" : "Изменить общую номенклатуру",
  "chooseItemsDiscountTableToChangeLabel" : "Изменить индивидуальные скидки"
};

$('#changeDataBaseTables').on('click', function() {
  renderOptions();

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
          <div class='radioContainer'><input type='radio' id='chooseChangeSPAreaOne' name='chooseareatochange' onclick='chooseAreaToChangeSP(this);' value='areaOne'><label for='Район 1' id='radioLabel'>Район 1</label></div> \
          <div class='radioContainer'><input type='radio' id='chooseChangeSPAreaTwo' name='chooseareatochange' onclick='chooseAreaToChangeSP(this);' value='areaTwo'><label for='Район 2' id='radioLabel'>Район 2</label></div> \
          <div class='radioContainer'><input type='radio' id='chooseChangeSPAreaThree' name='chooseareatochange' onclick='chooseAreaToChangeSP(this);' value='areaThree'><label for='Район 3' id='radioLabel'>Район 3</label></div> \
          <div class='radioContainer'><input type='radio' id='chooseChangeSPAreaFour' name='chooseareatochange' onclick='chooseAreaToChangeSP(this);' value='areaFour'><label for='Район 4' id='radioLabel'>Район 4</label></div> \
          <div class='radioContainer'><input type='radio' id='chooseChangeSPAreaFive' name='chooseareatochange' onclick='chooseAreaToChangeSP(this);' value='areaFive'><label for='Район 5' id='radioLabel'>Район 5</label></div> \
          <div class='radioContainer'><input type='radio' id='chooseChangeSPAreaZero' name='chooseareatochange' onclick='chooseAreaToChangeSP(this);' value='areaZero'><label for='Вне сети' id='radioLabel'>Вне сети</label></div> \
        </div> \
      </div> \
    </div> \
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

function chooseAreaToChangeSP(radio) {

}

function chooseItemMenuOptionToChange(radio) {

}

function chooseAreaToChangeSales(radio) {

}

function chooseAreaToChangeReceives(radio) {
  
}
