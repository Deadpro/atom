var request_mapLocalVars = {
  "showMapTest" : "Показать Карту Тест",
  "areaCurrentValue" : 0,
  "chooseAreaLable" : "Выберите район",
  "areaTrigger" : false,
  "salesPartnersList" : new Object(),
  "spInfo" : new Object(),
  "areaColor" : ["#ff0000", "#ffff00", "#15ff00", "#00f7ff", "#0400ff", "#ff00ee", "#ff00ee"],
  "areaTrigger" : true
};

// dataJson.features.push({type: "Feature"}); alert(dataJson.features[0].type)
// dataJson = JSON.stringify(dataJson);
// {type: 'Feature', id: 0, geometry: {type: 'Point', coordinates: [55.831903, 37.411961]}, properties: {balloonContent: 'Содержимое', clusterCaption: 'Метка', hintContent: 'Текст подсказки'}}
var dataObject;
// Как только будет загружен API и готов DOM, выполняем инициализацию
// ymaps.ready(init);
// window.onload=getExif;

$('#mapTest').on('click', function() {
  renderMap();
});
// $('#jpgmetadata').on('click', function() {
//   getExif();
// });

this.chooseArea = function(myRadio) {
  // for (var i = 0; i < 6; i++) {
  //   if (document.getElementById(reportsLocalVars.checkRootRadio[i]).checked == true) {
  //     reportsLocalVars.checkedDayValue = document.getElementById(reportsLocalVars.checkDayRadio[i]).value;
  //     reportsLocalVars.radioCheckedDayTrigger = true;
  //   }
  // }
  request_mapLocalVars.areaCurrentValue = myRadio.value;
  $.post('../php/receiveSPGPS.php', {dbName: localStorage.getItem('dbName'), dbUser: localStorage.getItem('dbUser'),
                                          dbPassword: localStorage.getItem('dbPassword'),
                                          area: request_mapLocalVars.areaCurrentValue}, function(data) {
    request_mapLocalVars.salesPartnersList = JSON.parse(data);

    // alert(Object.keys(request_mapLocalVars.salesPartnersList).length);
    // alert(request_mapLocalVars.salesPartnersList[0].Наименование);
    // dataObject = JSON.parse(dataJson);
    var dataJson = new Object();
    dataJson = {"type": 'FeatureCollection', "features": []};
    for (var i = 0; i < Object.keys(request_mapLocalVars.salesPartnersList).length; i++) {
      dataJson.features.push({type: "Feature", id: i, geometry: {type: "Point", coordinates:
      [request_mapLocalVars.salesPartnersList[i].Latitude, request_mapLocalVars.salesPartnersList[i].Longitude]},
      properties: {balloonContent: "Название: " + request_mapLocalVars.salesPartnersList[i].Наименование + "<br/>Адрес: " +
        request_mapLocalVars.salesPartnersList[i].Адрес + "<br/>Учет: " +
      request_mapLocalVars.salesPartnersList[i].Учет + "<br/>Контакты: " + request_mapLocalVars.salesPartnersList[i].Контакты
      + "<br/>Юридическое Наименование: " + request_mapLocalVars.salesPartnersList[i].Юр_Наименование
      + "<br/>Маршрут: " + request_mapLocalVars.salesPartnersList[i].DayOfTheWeek,
      clusterCaption: "Много магазинов",
      hintContent: request_mapLocalVars.salesPartnersList[i].Наименование, iconCaption: request_mapLocalVars.salesPartnersList[i].Наименование},
      options: {iconColor: request_mapLocalVars.areaColor[parseInt(request_mapLocalVars.salesPartnersList[i].Район) - 1]}});
    }

    dataObject = JSON.stringify(dataJson);
    // alert(dataObject);
  })
  init();
}

this.renderMap = function() {
  $('div#connection-data').html("");
  $('div#connection-data').append(" \
    <div id='mapMenuContainer' class='mapMenuContainer'> \
      <div class='panel panel-custom border'> \
        <div class='panel-heading col-100'><span>" + request_mapLocalVars.showMapTest + "</span></div> \
        <div class='panel-body'> \
          <div class='panel panel-custom border'> \
            <div class='panel-heading col-100'><span>" + request_mapLocalVars.chooseAreaLable + "</span></div> \
            <div class='panel-body'> \
              <div class='radioContainer'><input type='radio' id='checkAreaOne' name='choosearea' onclick='chooseArea(this);' value='1'><label for='Район 1' id='radioLabel'>Район 1</label></div> \
              <div class='radioContainer'><input type='radio' id='checkAreaTwo' name='choosearea' onclick='chooseArea(this);' value='2'><label for='Район 2' id='radioLabel'>Район 2</label></div> \
              <div class='radioContainer'><input type='radio' id='checkAreaThree' name='choosearea' onclick='chooseArea(this);' value='3'><label for='Район 3' id='radioLabel'>Район 3</label></div> \
              <div class='radioContainer'><input type='radio' id='checkAreaFour' name='choosearea' onclick='chooseArea(this);' value='4'><label for='Район 4' id='radioLabel'>Район 4</label></div> \
              <div class='radioContainer'><input type='radio' id='checkAreaFive' name='choosearea' onclick='chooseArea(this);' value='5'><label for='Район 5' id='radioLabel'>Район 5</label></div> \
              <div class='radioContainer'><input type='radio' id='checkAllAreas' name='choosearea' onclick='chooseArea(this);' value='0'><label for='Все районы' id='radioLabel'>Все районы</label></div> \
            </div> \
          </div> \
          <div class='col-50'><input type='button' id='toggle' value='Карта'></div> \
          <div id='mapHolder'></div> \
        </div> \
      </div> \
    </div> \
    <script src='../js/request_map.js' type='text/javascript'></script> \
  ");
}

// <div class='col-50'><input type='button' id='jpgmetadata' value='jpgmetadata'></div>
// <img src='../images/sp/2020-04-03 09-14-10.jpg' id='img2' />
// <div id='allMetaDataSpan'></div>
// <br/>
// <a class='ydisk-onclick' href='https://yadi.sk/i/Jw1fIYxbwKW2aw' id='img3'  data-width='31' data-height='41'> asdfkhjasf </a> \

// Инициализация и уничтожение карты при нажатии на кнопку.
function init () {
    var myMap;
    $('#toggle').bind({
        click: function () {
            if (!myMap) {
                $('div#mapHolder').append("<div id='map'></div>");
                myMap = new ymaps.Map('map', {
                    center: [46.9541, 142.736], // Южно-Сахалинск
                    zoom: 6,
                    // controls: []
                }, {
                    searchControlProvider: 'yandex#search'
                });
                $("#toggle").attr('value', 'Скрыть карту');
                objectManager = new ymaps.ObjectManager({
                    // Чтобы метки начали кластеризоваться, выставляем опцию.
                    clusterize: true,
                    geoObjectOpenBalloonOnClick: true,
                    clusterOpenBalloonOnClick: true
                });

                myMap.geoObjects.add(objectManager);
                objectManager.add(dataObject);
            }
            else {
                $('div#mapHolder').html("");
                myMap.destroy();// Деструктор карты
                myMap = null;
                $("#toggle").attr('value', 'Показать карту снова');
            }
        }
    });
}



// alert(typeof json); // мы получили строку!
//
// alert(json);

// $(document).ready(function() {
//     $("a.ydisk-onclick").attr('target', '_blank').ydisk(); // с параметрами по умолчанию
// });

// function getExif() {
//     // var img1 = document.getElementById("img1");
//     // EXIF.getData(img1, function() {
//     //     var make = EXIF.getTag(this, "Make");
//     //     var model = EXIF.getTag(this, "Model");
//     //     var makeAndModel = document.getElementById("makeAndModel");
//     //     makeAndModel.innerHTML = `${make} ${model}`;
//     // });
//     // alert("hi");
//     var img2 = document.getElementById("img3");
//     EXIF.getData(img2, function() {
//         var latitude = EXIF.getTag(this, "GPSLatitude");
//         var longitude = EXIF.getTag(this, "GPSLongitude");
//         // var allMetaData = EXIF.getAllTags(this);
//         var allMetaData = "gps coordinates: ";
//         var allMetaDataSpan = document.getElementById("allMetaDataSpan");
//         allMetaDataSpan.innerHTML = JSON.stringify(allMetaData, null, "\t") + " " + `${latitude}` + " " + `${longitude}` ;
//     });
// }

// function init () {
//     var myMap = new ymaps.Map('map', {
//             center: [55.76, 37.64],
//             zoom: 10
//         }, {
//             searchControlProvider: 'yandex#search'
//         }),
//         objectManager = new ymaps.ObjectManager({
//             // Чтобы метки начали кластеризоваться, выставляем опцию.
//             clusterize: true,
//             geoObjectOpenBalloonOnClick: false,
//             clusterOpenBalloonOnClick: false
//         });
//
//     myMap.geoObjects.add(objectManager);
//
//     $.ajax({
//         url: "data.json"
//     }).done(function(data) {
//         objectManager.add(data);
//     });
//
//     function onObjectEvent (e) {
//         var objectId = e.get('objectId');
//         if (e.get('type') == 'mouseenter') {
//             // Метод setObjectOptions позволяет задавать опции объекта "на лету".
//             objectManager.objects.setObjectOptions(objectId, {
//                 preset: 'islands#yellowIcon'
//             });
//         } else {
//             objectManager.objects.setObjectOptions(objectId, {
//                 preset: 'islands#blueIcon'
//             });
//         }
//     }
//
//     function onClusterEvent (e) {
//         var objectId = e.get('objectId');
//         if (e.get('type') == 'mouseenter') {
//             objectManager.clusters.setClusterOptions(objectId, {
//                 preset: 'islands#yellowClusterIcons'
//             });
//         } else {
//             objectManager.clusters.setClusterOptions(objectId, {
//                 preset: 'islands#blueClusterIcons'
//             });
//         }
//     }
//
//     objectManager.objects.events.add(['mouseenter', 'mouseleave'], onObjectEvent);
//     objectManager.clusters.events.add(['mouseenter', 'mouseleave'], onClusterEvent);
// }
