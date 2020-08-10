var request_mapLocalVars = {
  "showMap" : "Карта сети Кайман",
  "areaCurrentValue" : 0,
  "chooseAreaLable" : "Выберите район",
  "areaTrigger" : false,
  "salesPartnersList" : new Object(),
  "spInfo" : new Object(),
  "areaColor" : ["#ff0000", "#ffff00", "#15ff00", "#00f7ff", "#0400ff", "#ff00ee", "#ff00ee"],
  "checkLoadTypeRadio" : ["checkByCoordsLoad", "checkByAddressLoad"],
  "checkedLoadTypeValue" : "загрузка по координатам",
  "areaTrigger" : true,
  "myPoints" : new Array(),
  "myPlacemark" : "",
  "objGetName" : new Object(),
  "objGetSPArea" : new Object(),
  "objGetSPID" : new Object(),
  "objGetSPAddress" : new Object(),
  "spID" : "",
  "objectName" : "",
  "objectLatitude" : "",
  "objectLongitude" : "",
  "objectNewLatitude" : "",
  "objectNewLongitude" : "",
  "objGetLatitude" : new Object(),
  "objGetLongitude" : new Object(),
  "updateSPCoordsLabel" : "Включить режим правки координат",
  "loadTypeSPPlacementLabel" : "Выберите вариант загрузки",
  "checkCoordsUpdateTrigger" : false,
  "checkAddressUpdateTrigger" : false,
  "onObjectEventTrigger" : false,
  "onClusterEventTrigger" : false
};

// dataJson.features.push({type: "Feature"}); alert(dataJson.features[0].type)
// dataJson = JSON.stringify(dataJson);
// {type: 'Feature', id: 0, geometry: {type: 'Point', coordinates: [55.831903, 37.411961]}, properties: {balloonContent: 'Содержимое', clusterCaption: 'Метка', hintContent: 'Текст подсказки'}}
var dataObject;
// Как только будет загружен API и готов DOM, выполняем инициализацию
// ymaps.ready(init);
// window.onload=getExif;

$('#mapCaiman').on('click', function() {
  renderMap();
});
// $('#jpgmetadata').on('click', function() {
//   getExif();
// });

this.chooseArea = function(myRadio) {
  for (var i = 0; i < 2; i++) {
    if (document.getElementById(request_mapLocalVars.checkLoadTypeRadio[i]).checked == true) {
      request_mapLocalVars.checkedLoadTypeValue = document.getElementById(request_mapLocalVars.checkLoadTypeRadio[i]).value;
      // request_mapLocalVars.radioCheckedLoadTypeTrigger = true;
    }
  }
  request_mapLocalVars.areaCurrentValue = myRadio.value;
  $.post('../php/receiveSPGPS.php', {dbName: localStorage.getItem('dbName'), dbUser: localStorage.getItem('dbUser'),
                                          dbPassword: localStorage.getItem('dbPassword'),
                                          loadType: request_mapLocalVars.checkedLoadTypeValue,
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
      + "<br/>Маршрут: " + request_mapLocalVars.salesPartnersList[i].DayOfTheWeek
      + "<br/>Динамика за месяц: " + "<br/>Динамика за все время: " + "<br/>Средний чек: " + "<br/>Поледний чек: "
      + "<br/>Последнее посещение: ",
      clusterCaption: request_mapLocalVars.salesPartnersList[i].Наименование,
      hintContent: request_mapLocalVars.salesPartnersList[i].Наименование, iconCaption: request_mapLocalVars.salesPartnersList[i].Наименование},
      options: {iconColor: request_mapLocalVars.areaColor[parseInt(request_mapLocalVars.salesPartnersList[i].Район) - 1]}});

      request_mapLocalVars.myPoints.push({ coords: [request_mapLocalVars.salesPartnersList[i].Latitude, request_mapLocalVars.salesPartnersList[i].Longitude], text: request_mapLocalVars.salesPartnersList[i].Наименование });
      request_mapLocalVars.objGetName[i] = request_mapLocalVars.salesPartnersList[i].Наименование;
      request_mapLocalVars.objGetSPID[i] = request_mapLocalVars.salesPartnersList[i].ID;
      request_mapLocalVars.objGetSPArea[i] = request_mapLocalVars.salesPartnersList[i].Район;
      request_mapLocalVars.objGetSPAddress[i] = request_mapLocalVars.salesPartnersList[i].Адрес;
      request_mapLocalVars.objGetLatitude[i] = request_mapLocalVars.salesPartnersList[i].Latitude;
      request_mapLocalVars.objGetLongitude[i] = request_mapLocalVars.salesPartnersList[i].Longitude;
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
        <div class='panel-heading col-100'><span>" + request_mapLocalVars.showMap + "</span></div> \
        <div class='panel-body'> \
          <div class='panel panel-custom border'> \
            <div class='panel-heading col-100'><span>" + request_mapLocalVars.chooseAreaLable + "</span></div> \
            <div class='panel-body'> \
              <div class='radioContainer'><input type='radio' id='checkAreaZero' name='choosearea' onclick='chooseArea(this);' value='6'><label for='Вне сети' id='radioLabel'>Вне сети</label></div> \
              <div class='radioContainer'><input type='radio' id='checkAreaOne' name='choosearea' onclick='chooseArea(this);' value='1'><label for='Район 1' id='radioLabel'>Район 1</label></div> \
              <div class='radioContainer'><input type='radio' id='checkAreaTwo' name='choosearea' onclick='chooseArea(this);' value='2'><label for='Район 2' id='radioLabel'>Район 2</label></div> \
              <div class='radioContainer'><input type='radio' id='checkAreaThree' name='choosearea' onclick='chooseArea(this);' value='3'><label for='Район 3' id='radioLabel'>Район 3</label></div> \
              <div class='radioContainer'><input type='radio' id='checkAreaFour' name='choosearea' onclick='chooseArea(this);' value='4'><label for='Район 4' id='radioLabel'>Район 4</label></div> \
              <div class='radioContainer'><input type='radio' id='checkAreaFive' name='choosearea' onclick='chooseArea(this);' value='5'><label for='Район 5' id='radioLabel'>Район 5</label></div> \
              <div class='radioContainer'><input type='radio' id='checkAllAreas' name='choosearea' onclick='chooseArea(this);' value='0'><label for='Все районы' id='radioLabel'>Все районы</label></div> \
            </div> \
          </div> \
          <div class='panel panel-custom border'> \
            <div class='panel-heading col-100'><span>" + request_mapLocalVars.updateSPCoordsLabel + "</span></div> \
            <div class='panel-body'> \
              <div class='radioContainer'><input type='radio' id='checkCoordsUpdate' name='checkUpdate' value='правка по координатам'><label for='По координатам' id='radioLabel'>По координатам</label></div> \
              <div class='radioContainer'><input type='radio' id='checkAddressUpdate' name='checkUpdate' value='правка по адресу'><label for='По адресу' id='radioLabel'>По адресу</label></div> \
            </div> \
          </div> \
          <div class='panel panel-custom border'> \
            <div class='panel-heading col-100'><span>" + request_mapLocalVars.loadTypeSPPlacementLabel + "</span></div> \
            <div class='panel-body'> \
              <div class='radioContainer'><input type='radio' id='checkByCoordsLoad' name='checkLoadType' value='загрузка по координатам'><label for='Местоположение по координатам' id='radioLabel'>Местоположение по координатам</label></div> \
              <div class='radioContainer'><input type='radio' id='checkByAddressLoad' name='checkLoadType' value='загрузка по адресу'><label for='Местоположение по адресу' id='radioLabel'>Местоположение по адресу</label></div> \
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

              myCollection = new ymaps.GeoObjectCollection();
              // Создаем экземпляр класса ymaps.control.SearchControl
              var mySearchControl = new ymaps.control.SearchControl({
                options: {
                  // Заменяем стандартный провайдер данных (геокодер) нашим собственным.
                  provider: new CustomSearchProvider(request_mapLocalVars.myPoints),
                  // Не будем показывать еще одну метку при выборе результата поиска,
                  // т.к. метки коллекции myCollection уже добавлены на карту.
                  noPlacemark: true,
                  resultsPerPage: 5
                }});

              // Добавляем контрол в верхний правый угол,
              myMap.controls
                  .add(mySearchControl, { float: 'right' });

              // Слушаем клик на карте.
              myMap.events.add('click', function (e) {
                  request_mapLocalVars.onClusterEventTrigger = false;
                  var coords = e.get('coords');
                  var position;
                  if (request_mapLocalVars.checkCoordsUpdateTrigger == true && request_mapLocalVars.onObjectEventTrigger == true) {
                    request_mapLocalVars.onObjectEventTrigger = false;
                    position = coords.indexOf(',');
                    // alert(coords + "   " + coords.slice(position));
                    request_mapLocalVars.objectNewLatitude = JSON.stringify(coords.slice(0, position));
                    request_mapLocalVars.objectNewLongitude = JSON.stringify(coords.slice(position));
                    position = request_mapLocalVars.objectNewLatitude.indexOf(']');
                    request_mapLocalVars.objectNewLatitude = request_mapLocalVars.objectNewLatitude.slice(1, position);
                    position = request_mapLocalVars.objectNewLongitude.indexOf(']');
                    request_mapLocalVars.objectNewLongitude = request_mapLocalVars.objectNewLongitude.slice(1, position);
                    let isConfirmed = confirm("Изменить координаты для магазина:  " + request_mapLocalVars.objectName);
                    if (isConfirmed) {
                      updateSPCoords(request_mapLocalVars.spArea, request_mapLocalVars.objectNewLatitude, request_mapLocalVars.objectNewLongitude, request_mapLocalVars.spID);
                    }
                  }

                  // Если метка уже создана – просто передвигаем ее.
                  if (request_mapLocalVars.myPlacemark) {
                      request_mapLocalVars.myPlacemark.geometry.setCoordinates(coords);
                  }
                  // Если нет – создаем.
                  else {
                      request_mapLocalVars.myPlacemark = createPlacemark(coords);
                      myMap.geoObjects.add(request_mapLocalVars.myPlacemark);
                      // Слушаем событие окончания перетаскивания на метке.
                      request_mapLocalVars.myPlacemark.events.add('dragend', function () {
                          getAddress(request_mapLocalVars.myPlacemark.geometry.getCoordinates());
                      });
                  }
                  getAddress(coords);
              });

              function onObjectEvent (e) {
                  request_mapLocalVars.onClusterEventTrigger = false;
                  var objectId = e.get('objectId');
                  var objectCoords = e.get('coords');
                  if (e.get('type') == 'click') {
                    alert("Вы выбрали магазин:  " + request_mapLocalVars.objGetName[objectId]);
                    request_mapLocalVars.objectName = request_mapLocalVars.objGetName[objectId];
                    request_mapLocalVars.spID = request_mapLocalVars.objGetSPID[objectId];
                    request_mapLocalVars.spArea = request_mapLocalVars.objGetSPArea[objectId];
                    request_mapLocalVars.objectLatitude = request_mapLocalVars.objGetLatitude[objectId];
                    request_mapLocalVars.objectLongitude = request_mapLocalVars.objGetLongitude[objectId];
                    request_mapLocalVars.onObjectEventTrigger = true;
                    getСheckUpdateStatus();
                      // Метод setObjectOptions позволяет задавать опции объекта "на лету".
                      // objectManager.objects.setObjectOptions(objectId, {
                      //     preset: 'islands#yellowIcon'
                      // });
                  } else {
                      // objectManager.objects.setObjectOptions(objectId, {
                      //     preset: 'islands#blueIcon'
                      // });
                  }
              }

              objectManager.objects.events.add(['click'], onObjectEvent);

              var currentObject = objectManager.clusters.state.get('activeObject');

              objectManager.clusters.events.add('balloonopen', function () {
                debugger;
                // var clusterId = e.get('objectId');
                currentObject = objectManager.clusters.state.get('activeObject');

                <!-- Нам нужен id объекта, чтобы получить данные балуна -->
                objectId = currentObject.id;
                getСheckUpdateStatus();

                // if (!hasBalloonData(objectId)) {
                //   getBalloonData(objectId).done(function (data) {
                //     var obj = objectManager.objects.getById(objectId);
                //     obj.properties.balloonContent = data;
                //     objectManager.clusters.balloon.open(clusterId);
                //   });
                // }
              });

              <!-- пытаемся формировать содержимое балуна кластера -->
              objectManager.clusters.state.events.add('change', function () {
                 var newCurrentObject = objectManager.clusters.state.get('activeObject');
                 if (newCurrentObject && (!currentObject || (newCurrentObject.id != currentObject.id))) {
                   currentObject = newCurrentObject;
                   <!-- Нам нужен id объекта, чтобы получить данные балуна -->
                   objectId = currentObject.id;

                   <!-- Нам нужен id кластера, чтобы знать чей балун менять -->
                   // clusterId = objectManager.getObjectState(currentObject.id).cluster.id;
                   // if (!hasBalloonData(objectId)) {
                   //   getBalloonData(objectId).done(function (data) {
                   //     var obj = objectManager.objects.getById(objectId);
                   //     obj.properties.balloonContent = data;
                   //     objectManager.clusters.balloon.open(clusterId);
                   //   });
                   // }

                    // && request_mapLocalVars.onClusterEventTrigger == true
                   if (request_mapLocalVars.checkAddressUpdateTrigger == true) {
                     alert(request_mapLocalVars.objGetSPID[objectId]);
                     // request_mapLocalVars.onObjectEventTrigger = false;
                     // position = coords.indexOf(',');
                     // request_mapLocalVars.objectNewLatitude = JSON.stringify(coords.slice(0, position));
                     // request_mapLocalVars.objectNewLongitude = JSON.stringify(coords.slice(position));
                     // position = request_mapLocalVars.objectNewLatitude.indexOf(']');
                     // request_mapLocalVars.objectNewLatitude = request_mapLocalVars.objectNewLatitude.slice(1, position);
                     // position = request_mapLocalVars.objectNewLongitude.indexOf(']');
                     // request_mapLocalVars.objectNewLongitude = request_mapLocalVars.objectNewLongitude.slice(1, position);
                     // let isConfirmed = confirm("Изменить координаты для магазина:  " + request_mapLocalVars.objectName);
                     // if (isConfirmed) {
                     //   updateSPCoords(request_mapLocalVars.spArea, request_mapLocalVars.objectNewLatitude, request_mapLocalVars.objectNewLongitude);
                     // }
                   }
                 }
              });
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

function getСheckUpdateStatus() {
  request_mapLocalVars.checkCoordsUpdateTrigger = document.getElementById("checkCoordsUpdate").checked;
  request_mapLocalVars.checkAddressUpdateTrigger = document.getElementById("checkAddressUpdate").checked;
  // alert(request_mapLocalVars.checkCoordsUpdateTrigger);
}

function updateSPCoords(area, latitude, longitude, spID) {
  $.post('../php/updateSPCoords.php', {dbName: localStorage.getItem('dbName'), dbUser: localStorage.getItem('dbUser'),
                                          dbPassword: localStorage.getItem('dbPassword'),
                                          area: area, spID: spID, spName: request_mapLocalVars.objectName,
                                          latitude: request_mapLocalVars.objectLatitude,
                                          longitude: request_mapLocalVars.objectLongitude,
                                          newLatitude: latitude,
                                          newLongitude: longitude}, function(data) {
    let isConfirmed;
    if (data == "success") {
      isConfirmed = confirm("Координаты обновлены, перезагрузить страницу?");
    } else {
      alert("Что-то пошло не так");
    }
    if (isConfirmed) {
      location.reload();
    }
  })
}

// Создание метки.
function createPlacemark(coords) {
    return new ymaps.Placemark(coords, {
        iconCaption: 'поиск...'
    }, {
        preset: 'islands#violetDotIconWithCaption',
        draggable: true
    });
}

// Определяем адрес по координатам (обратное геокодирование).
function getAddress(coords) {
    request_mapLocalVars.myPlacemark.properties.set('iconCaption', 'поиск...');
    ymaps.geocode(coords).then(function (res) {
        var firstGeoObject = res.geoObjects.get(0);

        request_mapLocalVars.myPlacemark.properties
            .set({
                // Формируем строку с данными об объекте.
                iconCaption: [
                    // Название населенного пункта или вышестоящее административно-территориальное образование.
                    firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
                    // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
                    firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
                ].filter(Boolean).join(', '),
                // В качестве контента балуна задаем строку с адресом объекта.
                balloonContent: firstGeoObject.getAddressLine()
            });
    });
}

// Определяем координаты по адресу
function getCoords(address) {
    request_mapLocalVars.myPlacemark.properties.set('iconCaption', 'поиск...');
    ymaps.geocode(address).then(function (res) {
        var firstGeoObject = res.geoObjects.get(0),
        // Координаты геообъекта.
        coords = firstGeoObject.geometry.getCoordinates();
        alert(coords);
    });
}
// Провайдер данных для элемента управления ymaps.control.SearchControl.
// Осуществляет поиск геообъектов в по массиву points.
// Реализует интерфейс IGeocodeProvider.
function CustomSearchProvider(points) {
    this.points = points;
}

// Провайдер ищет по полю text стандартным методом String.ptototype.indexOf.
CustomSearchProvider.prototype.geocode = function (request, options) {
    var deferred = new ymaps.vow.defer(),
        geoObjects = new ymaps.GeoObjectCollection(),
    // Сколько результатов нужно пропустить.
        offset = options.skip || 0,
    // Количество возвращаемых результатов.
        limit = options.results || 20;

    var points = [];
    // Ищем в свойстве text каждого элемента массива.
    for (var i = 0, l = this.points.length; i < l; i++) {
        var point = this.points[i];
        if (point.text.toLowerCase().indexOf(request.toLowerCase()) != -1) {
            points.push(point);
        }
    }
    // При формировании ответа можно учитывать offset и limit.
    points = points.splice(offset, limit);
    // Добавляем точки в результирующую коллекцию.
    for (var i = 0, l = points.length; i < l; i++) {
        var point = points[i],
            coords = point.coords,
                    text = point.text;

        geoObjects.add(new ymaps.Placemark(coords, {
            name: text + ' name',
            description: text + ' description',
            balloonContentBody: '<p>' + text + '</p>',
            boundedBy: [coords, coords]
        }));
    }

    deferred.resolve({
        // Геообъекты поисковой выдачи.
        geoObjects: geoObjects,
        // Метаинформация ответа.
        metaData: {
            geocoder: {
                // Строка обработанного запроса.
                request: request,
                // Количество найденных результатов.
                found: geoObjects.getLength(),
                // Количество возвращенных результатов.
                results: limit,
                // Количество пропущенных результатов.
                skip: offset
            }
        }
    });

    // Возвращаем объект-обещание.
    return deferred.promise();
};

// alert(typeof json); // мы получили строку!
//
// alert(json);
//
// $(document).ready(function() {
//     $("a.ydisk-onclick").attr('target', '_blank').ydisk(); // с параметрами по умолчанию
// });
//
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
//
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
