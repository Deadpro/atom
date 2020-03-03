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
        <div class='panel-body'> \
          <div class='col-50'><input type='button' id='toggle' value='Карта'></div> \
          <div id='map'></div> \
        </div> \
      </div> \
    </div> \
    <script src='../js/request_map.js' type='text/javascript'></script> \
  ");
}

// Инициализация и уничтожение карты при нажатии на кнопку.
function init () {
    var myMap;

    $('#toggle').bind({
        click: function () {
            if (!myMap) {
                myMap = new ymaps.Map('map', {
                    center: [55.010251, 86.958437], // Новосибирск
                    zoom: 9
                }, {
                    searchControlProvider: 'yandex#search'
                });
                $("#toggle").attr('value', 'Скрыть карту');
            }
            else {
                myMap.destroy();// Деструктор карты
                myMap = null;
                $("#toggle").attr('value', 'Показать карту снова');
            }
        }
    });
}
