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
  "objectByAddressLatitude" : "",
  "objectByAddressLongitude" : "",
  "objGetLatitude" : new Object(),
  "objGetLongitude" : new Object(),
  "updateSPCoordsLabel" : "Включить режим правки координат",
  "loadTypeSPPlacementLabel" : "Выберите вариант загрузки",
  "checkCoordsUpdateTrigger" : false,
  "checkAddressUpdateTrigger" : false,
  "onObjectEventTrigger" : false,
  "onClusterEventTrigger" : false,
  "dataJson" : new Object(),
  "dataObject" : new Object(),
  "myMap" : "",
  "addressTrigger" : false,
  "firstRunTrigger" : false
};

$('#mapCaiman').on('click', function() {
  renderMap();
});

this.chooseArea = async function(myRadio) {

  await receiveSPGPSPost(myRadio);
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  await createPoints();
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  if (request_mapLocalVars.firstRunTrigger == false) {
    init();
    request_mapLocalVars.firstRunTrigger = true;
  }
}

function receiveSPGPSPost(myRadio) {

  request_mapLocalVars.areaCurrentValue = myRadio.value;
  $.post('../php/receiveSPGPS.php', {dbName: localStorage.getItem('dbName'), dbUser: localStorage.getItem('dbUser'),
                                          dbPassword: localStorage.getItem('dbPassword'),
                                          loadType: request_mapLocalVars.checkedLoadTypeValue,
                                          area: request_mapLocalVars.areaCurrentValue}, function(data) {
    request_mapLocalVars.salesPartnersList = JSON.parse(data);
  })
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
              <div class='radioContainer'><input type='radio' id='checkCoordsUpdate' name='checkUpdate' value='правка по координатам'><label for='Правка по координатам' id='radioLabel'>Правка по координатам</label></div> \
              <div class='radioContainer'><input type='radio' id='checkAddressUpdate' name='checkUpdate' value='правка по адресу'><label for='Правка по адресу' id='radioLabel'>Правка по адресу</label></div> \
            </div> \
          </div> \
          <div class='panel panel-custom border'> \
            <div class='panel-heading col-100'><span>" + request_mapLocalVars.loadTypeSPPlacementLabel + "</span></div> \
            <div class='panel-body'> \
              <div class='radioContainer'><input type='radio' id='checkByCoordsLoad' name='checkLoadType' onclick='chooseLoadType(this);' value='загрузка по координатам'><label for='Точки по координатам' id='radioLabel'>Точки по координатам</label></div> \
              <div class='radioContainer'><input type='radio' id='checkByAddressLoad' name='checkLoadType' onclick='chooseLoadType(this);' value='загрузка по адресу'><label for='Точки по адресу' id='radioLabel'>Точки по адресу</label></div> \
            </div> \
          </div> \
          <div class='col-50'><input type='button' id='toggle' value='Карта'></div> \
          <div id='mapHolder'></div> \
          <div><a href='#navigateHere'></a></div> \
        </div> \
      </div> \
    </div> \
    <script src='../js/request_map.js' type='text/javascript'></script> \
  ");
}

this.chooseLoadType = function(myRadio) {

    createPoints();
}

function scrollTop() {

  var element = document.getElementById("map");
  element.scrollIntoView();
  element.scrollIntoView(false);
  element.scrollIntoView({block: "end"});
  element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}
// Открытие и уничтожение карты при нажатии на кнопку.
function init() {

  $('#toggle').bind({
      click: function () {
          if (!request_mapLocalVars.myMap) {
                $('div#connection-data').append("<div class='sleepHoverParent'><div class='sleepHoverContent'><p>ИДЕТ ЗАГРУЗКА ДАННЫХ</p></div></div>");
                setTimeout(() => $('div.sleepHoverParent').remove(), 6000);
                request_mapLocalVars.firstRunTrigger = true;
                setTimeout(() => onClickNoMyMapInit(), 6000);
                setTimeout(() => scrollTop(), 6000);
          } else {
              $('div#map').remove();
              request_mapLocalVars.myMap.destroy();// Деструктор карты
              request_mapLocalVars.myMap = null;
              $("#toggle").attr('value', 'Показать карту снова');
          }
      }
  });
}

async function createPoints() {
  if (Object.keys(request_mapLocalVars.salesPartnersList).length > 0){
    request_mapLocalVars.dataJson = {"type": 'FeatureCollection', "features": []};
    for (var i = 0; i < Object.keys(request_mapLocalVars.salesPartnersList).length; i++) {

      if (document.getElementById(request_mapLocalVars.checkLoadTypeRadio[1]).checked == true) {
        await new Promise((resolve, reject) => setTimeout(resolve, 500));
        await getCoords(request_mapLocalVars.salesPartnersList[i].Адрес, i);
      }
      if (document.getElementById(request_mapLocalVars.checkLoadTypeRadio[1]).checked == false) {
        request_mapLocalVars.dataJson.features.push({type: "Feature", id: i, geometry: {type: "Point", coordinates:
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
      }
      request_mapLocalVars.objGetName[i] = request_mapLocalVars.salesPartnersList[i].Наименование;
      request_mapLocalVars.objGetSPID[i] = request_mapLocalVars.salesPartnersList[i].ID;
      request_mapLocalVars.objGetSPArea[i] = request_mapLocalVars.salesPartnersList[i].Район;
      request_mapLocalVars.objGetSPAddress[i] = request_mapLocalVars.salesPartnersList[i].Адрес;
      request_mapLocalVars.objGetLatitude[i] = request_mapLocalVars.salesPartnersList[i].Latitude;
      request_mapLocalVars.objGetLongitude[i] = request_mapLocalVars.salesPartnersList[i].Longitude;
    }
  } else {
    alert("выберите район");
  }
}

function onClickNoMyMapInit() {
  $('div#mapHolder').append("<div id='map'></div>");
  $("#toggle").attr('value', 'Перезагрузить карту');
  request_mapLocalVars.myMap = new ymaps.Map('map', {
      center: [46.9541, 142.736], // Южно-Сахалинск
      zoom: 6,
      // controls: []
  }, {
      searchControlProvider: 'yandex#search'
  }),
  objectManager = new ymaps.ObjectManager({
      // Чтобы метки начали кластеризоваться, выставляем опцию.
      clusterize: true,
      geoObjectOpenBalloonOnClick: true,
      clusterOpenBalloonOnClick: true
  });
  request_mapLocalVars.dataObject = JSON.stringify(request_mapLocalVars.dataJson);
  request_mapLocalVars.myMap.geoObjects.add(objectManager);
  objectManager.add(request_mapLocalVars.dataObject);

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
  request_mapLocalVars.myMap.controls
      .add(mySearchControl, { float: 'right' });

  // Слушаем клик на карте.
  request_mapLocalVars.myMap.events.add('click', function (e) {
      request_mapLocalVars.onClusterEventTrigger = false;
      var coords = e.get('coords');
      var position;
      if (request_mapLocalVars.checkCoordsUpdateTrigger == true && request_mapLocalVars.onObjectEventTrigger == true) {
        request_mapLocalVars.onObjectEventTrigger = false;
        position = coords.indexOf(',');
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
          request_mapLocalVars.myMap.geoObjects.add(request_mapLocalVars.myPlacemark);
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
      }
    }

  objectManager.objects.events.add(['click'], onObjectEvent);
  var currentObject = objectManager.clusters.state.get('activeObject');
  objectManager.clusters.events.add('balloonopen', function () {
    debugger;
    currentObject = objectManager.clusters.state.get('activeObject');
    <!-- Нам нужен id объекта, чтобы получить данные балуна -->
    objectId = currentObject.id;
    getСheckUpdateStatus();
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

function sleep(milliseconds) {
    var start = new Date().getTime();
    while (1) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function getСheckUpdateStatus() {
  request_mapLocalVars.checkCoordsUpdateTrigger = document.getElementById("checkCoordsUpdate").checked;
  request_mapLocalVars.checkAddressUpdateTrigger = document.getElementById("checkAddressUpdate").checked;
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
function getCoords(address, i) {
  if (address != "" && request_mapLocalVars.salesPartnersList[i].addressLoadByPass != 1) {
    // request_mapLocalVars.myPlacemark.properties.set('iconCaption', 'поиск...');
    ymaps.geocode(address).then(function (res) {
        var firstGeoObject = res.geoObjects.get(0);
        // Координаты геообъекта.
        coords = firstGeoObject.geometry.getCoordinates();
        request_mapLocalVars.objectByAddressLatitude = String(coords).slice(0, parseInt(String(coords).indexOf(',')));
        request_mapLocalVars.objectByAddressLongitude = String(coords).slice(parseInt(String(coords).indexOf(',')) + 1);
        request_mapLocalVars.myPoints.push({ coords: [request_mapLocalVars.objectByAddressLatitude, request_mapLocalVars.objectByAddressLongitude], text: request_mapLocalVars.salesPartnersList[i].Наименование });

        request_mapLocalVars.dataJson.features.push({type: "Feature", id: i, geometry: {type: "Point", coordinates:
        [request_mapLocalVars.objectByAddressLatitude, request_mapLocalVars.objectByAddressLongitude]},
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
    });
  }
  if (address == "" || request_mapLocalVars.salesPartnersList[i].addressLoadByPass == 1) {
    request_mapLocalVars.dataJson.features.push({type: "Feature", id: i, geometry: {type: "Point", coordinates:
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
    // alert(2 + " --- " + request_mapLocalVars.salesPartnersList[i].Наименование);
  }
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
