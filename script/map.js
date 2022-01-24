ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [59.968322, 30.317359],
        zoom: 16
    }, {
        searchControlProvider: 'yandex#search'
    }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'наб. Реки Карповки, 5 лит П, Санкт-Петербург',
            balloonContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/geoposition.svg',
            // Размеры метки.
            iconImageSize: [80, 140],
            // Смещение левого верхнего угла иконки относительно
            // её 'ножки' (точки привязки).
            iconImageOffset: [-40, -140]
        });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
});