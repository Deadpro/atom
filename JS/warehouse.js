var warehouseLocalVars = {
  "itemNameLabel" : "Номенклатура"
};

$('#warehouse').on('click', function() {
  // alert(1234567890);
  // renderMenuPageWarehouse();
  toTop("connection-data");
});

this.renderMenuPageWarehouse = function() {
  $('div#connection-data').html("");
  $('div#connection-data').append(" \
    <div id='reportMenuContainer' class='reportMenuContainer'> \
      <div class='panel panel-custom border'> \
        <div class='panel-heading col-100'><span>" + reportsLocalVars.choosePeriodLabel + "</span></div> \
        <div class='panel-body'> \
          <div class='col-60'>" + reportsLocalVars.dateStartLabel + "</div><div class='col-40'><input type='date' id='dateStart'></div> \
          <div class='col-60'>" + reportsLocalVars.dateEndLabel + "</div><div class='col-40'><input type='date' id='dateEnd'></div> \
        </div> \
      </div> \
      <div class='panel panel-custom border'> \
        <div class='panel-heading col-100'><span>" + reportsLocalVars.chooseDayOfTheWeekLabel + "</span></div> \
        <div class='panel-body'> \
          <div class='radioContainer'><input type='radio' id='checkDayOne' name='chooseday' value='Понедельник'><label for='понедельник' id='radioLabel'>понедельник</label></div> \
          <div class='radioContainer'><input type='radio' id='checkDayTwo' name='chooseday' value='Вторник'><label for='вторник' id='radioLabel'>вторник</label></div> \
          <div class='radioContainer'><input type='radio' id='checkDayThree' name='chooseday' value='Среда'><label for='среда' id='radioLabel'>среда</label></div> \
          <div class='radioContainer'><input type='radio' id='checkDayFour' name='chooseday' value='Четверг'><label for='четверг' id='radioLabel'>четверг</label></div> \
          <div class='radioContainer'><input type='radio' id='checkDayFive' name='chooseday' value='Пятница'><label for='пятница' id='radioLabel'>пятница</label></div> \
          <div class='radioContainer'><input type='radio' id='checkDaySix' name='chooseday' value='Суббота'><label for='суббота' id='radioLabel'>суббота</label></div> \
        </div> \
      </div> \
      <div class='panel panel-custom border'> \
        <div class='panel-heading col-100'><span>" + reportsLocalVars.chooseAreaLable + "</span></div> \
        <div class='panel-body'> \
        <div class='radioContainer'><input type='radio' id='checkAreaOne' name='choosearea' onclick='handleClickArea(this);' value='1'><label for='Район 1' id='radioLabel'>Район 1</label></div> \
        <div class='radioContainer'><input type='radio' id='checkAreaTwo' name='choosearea' onclick='handleClickArea(this);' value='2'><label for='Район 2' id='radioLabel'>Район 2</label></div> \
        <div class='radioContainer'><input type='radio' id='checkAreaThree' name='choosearea' onclick='handleClickArea(this);' value='3'><label for='Район 3' id='radioLabel'>Район 3</label></div> \
        <div class='radioContainer'><input type='radio' id='checkAreaFour' name='choosearea' onclick='handleClickArea(this);' value='4'><label for='Район 4' id='radioLabel'>Район 4</label></div> \
        <div class='radioContainer'><input type='radio' id='checkAreaFive' name='choosearea' onclick='handleClickArea(this);' value='5'><label for='Район 5' id='radioLabel'>Район 5</label></div> \
        <div class='radioContainer'><input type='radio' id='checkAreaSeven' name='choosearea' onclick='handleClickArea(this);' value='7'><label for='Район 7' id='radioLabel'>Район 7</label></div> \
        </div> \
      </div> \
      <div class='panel panel-custom border'> \
        <div class='panel-heading col-100'><span>" + reportsLocalVars.chooseRootLabel + "</span></div> \
        <div class='panel-body'> \
          <div class='radioContainer'><input type='radio' id='checkRootMonday' name='chooseroot' onclick='handleClickRoot(this);' value='понедельник-четверг'><label for='понедельник-четверг' id='radioLabel'>понедельник-четверг</label></div> \
          <div class='radioContainer'><input type='radio' id='checkRootTuesday' name='chooseroot' onclick='handleClickRoot(this);' value='вторник-пятница'><label for='вторник-пятница' id='radioLabel'>вторник-пятница</label></div> \
          <div class='radioContainer'><input type='radio' id='checkRootWendsday' name='chooseroot' onclick='handleClickRoot(this);' value='среда'><label for='среда' id='radioLabel'>среда</label></div> \
          <div class='radioContainer'><input type='radio' id='checkRootAny' name='chooseroot' onclick='handleClickRoot(this);' value='любой'><label for='любой' id='radioLabel'>любой</label></div> \
          <div class='radioContainer'><input type='radio' id='checkRootNorth' name='chooseroot' onclick='handleClickRoot(this);' value='север'><label for='север' id='radioLabel'>север</label></div> \
        </div> \
      </div> \
      <div class='panel panel-custom border'> \
        <div class='panel-heading col-100'><span>" + reportsLocalVars.chooseSalesPartnerLable + "</span></div> \
        <div class='panel-body'> \
          <div class='areaList'> \
            <select name='salesPartnersList' id='optionGroup' size='5'> \
            </select> \
          </div> \
        </div> \
      </div> \
      <div class='panel panel-custom border'> \
        <div class='panel-body'> \
          <div class='col-50'><input type='submit' id='report-ceo' value='Подробный отчет'></div> \
          <div class='col-50'><input type='submit' id='report-sales-manager' value='Краткий отчет'></div> \
          <div class='col-50'><input type='submit' id='report-by-day' value='По дням'></div> \
          <div class='col-50'><input type='submit' id='report-by-netcost' value='По себестоимости'></div> \
          <div class='col-50'><input type='submit' id='report-by-sp' value='По магазинам'></div> \
        </div> \
      </div> \
    </div> \
    <script src='../js/reports.js' type='text/javascript' ></script> \
  ");
  if (reportsLocalVars.dateStart != "" && reportsLocalVars.dateEnd != "") {
     $('input#dateStart').val(reportsLocalVars.dateStart);
     $('input#dateEnd').val(reportsLocalVars.dateEnd);
  }
  $(".loginContainer").html("");
  $(".loginContainer").hide();
}
