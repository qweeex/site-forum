$(document).ready(() => {
    ymaps.ready(init);
    // Метки
    let mapB = '51.546939, 46.014664';
    let mapA;
    var types = "pedestrian";

    // Type road
    $('.btn-type').on('click', (e) => {
        let type = e.target.dataset.type;
        types = type;
        $('.btn-type').removeClass('btn-type__active');
        e.target.classList.add('btn-type__active');
        $('#road').html('');
        ymaps.ready(init);
    });

    // Roadmap form
    $('.road-selector_input').on('submit', (e) => {
        e.preventDefault();
        mapA = $('.road-selector_input input').val();
        $('#road').html('');
        ymaps.ready(init);
    });

    // Roadmap autocompiled

    /*$('.road-selector_input input').on('keydown', () => {
       mapA = $('.road-selector_input input').val();
        /!*var availableTags;
        ymaps.suggest(mapA)
            .then(function (items) {
                // items - массив поисковых подсказок.
                //console.log(items);
                availableTags = items.value;
                $('.road-selector_input input').autocomplete({
                    source: availableTags
                });
            });*!/
        $('#road').html('');
        $('#road').html('');
       ymaps.ready(init);
    });*/

    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("road", {
            center: [mapB],
            zoom: 5,
            controls: ['zoomControl']
        });
        // Создание экземпляра маршрута.
        if (types === "masstransit"){
            var multiRoute = new ymaps.multiRouter.MultiRoute({
                referencePoints: [
                    mapA,
                    mapB
                ],
                params: {
                    // Тип маршрута: на общественном транспорте.
                    routingMode: "masstransit"
                }
            }, {
                // Автоматически устанавливать границы карты так,
                // чтобы маршрут был виден целиком.
                boundsAutoApply: true
            });
        }
        if (types === "driving"){
            var multiRoute = new ymaps.multiRouter.MultiRoute({
                referencePoints: [
                    mapA,
                    mapB
                ],
                params: {
                    // Тип маршрута: на общественном транспорте.
                    routingMode: "driving"
                }
            }, {
                // Автоматически устанавливать границы карты так,
                // чтобы маршрут был виден целиком.
                boundsAutoApply: true
            });
        }
        if (types === "pedestrian"){
            var multiRoute = new ymaps.multiRouter.MultiRoute({
                referencePoints: [
                    mapA,
                    mapB
                ],
                params: {
                    // Тип маршрута: на общественном транспорте.
                    routingMode: "pedestrian"
                }
            }, {
                // Автоматически устанавливать границы карты так,
                // чтобы маршрут был виден целиком.
                boundsAutoApply: true
            });
        }
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            //... отключаем перетаскивание карты
            myMap.behaviors.disable('drag');
        }
        // Добавление маршрута на карту.
        myMap.geoObjects.add(multiRoute);

    }

});