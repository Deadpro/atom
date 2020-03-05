var mapLocalVars = {
  "showMapTest" : "Показать Карту Тест"
};

// Как только будет загружен API и готов DOM, выполняем инициализацию
ymaps.ready(init);

$('#mapTest').on('click', function() {
  renderMap();
});

this.renderMap = function() {
  $('div#connection-data').html("");
  $('div#connection-data').append(" \
    <div id='mapMenuContainer' class='mapMenuContainer'> \
      <div class='panel panel-custom border'> \
        <div class='panel-heading col-100'><span>" + mapLocalVars.showMapTest + "</span></div> \
        <div class='panel-body'> \
          <div class='col-50'><input type='button' id='toggle' value='Карта'></div> \
          <div id='mapHolder'></div> \
        </div> \
      </div> \
    </div> \
    <script src='../js/request_map.js' type='text/javascript'></script> \
  ");
}

// Инициализация и уничтожение карты при нажатии на кнопку.
function init () {
    var myMap;
    objectManager = new ymaps.ObjectManager({
        // Чтобы метки начали кластеризоваться, выставляем опцию.
        clusterize: true,
        geoObjectOpenBalloonOnClick: false,
        clusterOpenBalloonOnClick: false
    });

    myMap.geoObjects.add(objectManager);

    $.ajax({
        url: "data.json"
    }).done(function(data) {
        objectManager.add(data);
    });

    $('#toggle').bind({
        click: function () {
            if (!myMap) {
                $('div#mapHolder').append("<div id='map'></div>");
                myMap = new ymaps.Map('map', {
                    center: [55.010251, 86.958437], // Новосибирск
                    zoom: 9
                }, {
                    searchControlProvider: 'yandex#search'
                });
                $("#toggle").attr('value', 'Скрыть карту');
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

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);

alert(typeof json); // мы получили строку!

alert(json);

function initTest () {
    var myMap = new ymaps.Map('map', {
            center: [55.76, 37.64],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        }),
        objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
            clusterize: true,
            geoObjectOpenBalloonOnClick: false,
            clusterOpenBalloonOnClick: false
        });

    myMap.geoObjects.add(objectManager);

    $.ajax({
        url: "data.json"
    }).done(function(data) {
        objectManager.add(data);
    });

    function onObjectEvent (e) {
        var objectId = e.get('objectId');
        if (e.get('type') == 'mouseenter') {
            // Метод setObjectOptions позволяет задавать опции объекта "на лету".
            objectManager.objects.setObjectOptions(objectId, {
                preset: 'islands#yellowIcon'
            });
        } else {
            objectManager.objects.setObjectOptions(objectId, {
                preset: 'islands#blueIcon'
            });
        }
    }

    function onClusterEvent (e) {
        var objectId = e.get('objectId');
        if (e.get('type') == 'mouseenter') {
            objectManager.clusters.setClusterOptions(objectId, {
                preset: 'islands#yellowClusterIcons'
            });
        } else {
            objectManager.clusters.setClusterOptions(objectId, {
                preset: 'islands#blueClusterIcons'
            });
        }
    }

    objectManager.objects.events.add(['mouseenter', 'mouseleave'], onObjectEvent);
    objectManager.clusters.events.add(['mouseenter', 'mouseleave'], onClusterEvent);
}
