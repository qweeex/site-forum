$(document).ready(() => {

    let config = {
        layers: {
            level_zero: 300,
            level_one: 200,
            level_two: 50,
            level_three: -50
        }
    };
    var store;
    let map = new Vue({
        el: '#list',
        data: {
            shop: [],
            search: ''
        },
        created(){
            this.getShop();
        },
        methods: {
            getShop: function () {
                $.getJSON('json/shop.json', function(data){
                    map.shop = data.shop;
                    console.log(map.shop);
                });
                this.GetShop();
            },
            GetLevel: function (level, image, phone, name, cat, lev, id) {
                ActiveLevel(level);
                $('.st1, .cls-2').removeClass('shop-active');
                $('.card-image a img').attr('src', image);
                $('.card-title p').text(name);
                $('.card-category p').text(cat);
                $('.card-floor p').text(lev);
                $('.card-phone').html(`<a href="tel:${phone}">${phone}</a>`);
                $('.st1[data-shop='+id+'], .cls-2[data-shop='+id+']').addClass('shop-active');
                $('.map-popup').show();
            },
            ViewLayers: function () {
                $('.level-0, .level-1, .level-2, .level-3').removeClass('layers-out');
                $('.level-0, .level-1, .level-2, .level-3').removeClass('layers-active');
                $('.level-1').css('top', config.layers.level_one);
                $('.level-2').css('top', config.layers.level_two);
                $('.level-3').css('top', config.layers.level_three);
                $('.level-0').css('top', config.layers.level_zero);
            },
            GetShop: function () {
                if (window.location.search.replace( '?', '') !== ''){
                    let get = window.location.search.replace( '?', '');
                    let id = get.replace('shop=', '');
                    let tovar = $('.shop[data-id='+ parseInt(id) +']')[0];
                    console.log(tovar);
                }
            }
        }
    });

    if (document.body.clientWidth <= 1100){
        document.querySelectorAll('.btn-layer')[0].classList.add('btn-active');
        document.querySelector('.level-0').classList.add('layers-active');
    }

    $('.btn-layer').on('click', (e) => {
       let id = e.target.dataset.layer;
       $('.btn-layer').removeClass('btn-active');
       e.target.classList.add('btn-active');
       ShowLevel(id);
    });

    function ShowLevel(el){
        $('.layers').removeClass('layers-active');
        $('.level-'+el).addClass('layers-active');
    }

    $('.level-3').on('click', (e) => {
        $('.level-0').css('top', 1300);
        $('.level-1').css('top', 1000);
        $('.level-2').css('top', 900);
        $('.level-3').addClass('layers-active');
    });
    $('.level-2').on('click', (e) => {
        $('.level-0').css('top', 1300);
        $('.level-1').css('top', 1000);
        $('.level-3').css('top', -900);
        $('.level-2').addClass('layers-active');
    });
    $('.level-1').on('click', (e) => {
        $('.level-0').css('top', 1300);
        $('.level-2').css('top', -1000);
        $('.level-3').css('top', -900);
        $('.level-1').addClass('layers-active');
    });
    $('.level-0').on('click', (e) => {
        $('.level-1').css('top', -1300);
        $('.level-2').css('top', -1000);
        $('.level-3').css('top', -900);
        $('.level-0').addClass('layers-active');
    });

    $('.st1, .cls-2').on('click', (e) => {
        e.preventDefault();
       let id = e.target.dataset.shop;
       console.log(id);
       $('.shop[data-id='+ id +']')[0].click();
    });

    $('.card-close__btn').on('click', (e) => {
       e.preventDefault();
        $('.map-popup').hide();
    });

    function ActiveLevel(num) {
        $('.level-0, .level-1, .level-2, .level-3').removeClass('layers-out');
        $('.level-0, .level-1, .level-2, .level-3').removeClass('layers-active');
        $('.level-1').css('top', config.layers.level_one);
        $('.level-2').css('top', config.layers.level_two);
        $('.level-3').css('top', config.layers.level_three);
        $('.level-0').css('top', config.layers.level_zero);
        switch (num) {
            case 0:
                $('.level-1').css('top', -1300);
                $('.level-2').css('top', -1000);
                $('.level-3').css('top', -900);
                $('.level-0').addClass('layers-active');
                break;
            case 1:
                $('.level-0').css('top', 1300);
                $('.level-2').css('top', -1000);
                $('.level-3').css('top', -900);
                $('.level-1').addClass('layers-active');
                break;
            case 2:
                $('.level-0').css('top', 1300);
                $('.level-1').css('top', 1000);
                $('.level-3').css('top', -900);
                $('.level-2').addClass('layers-active');
                break;
            case 3:
                $('.level-0').css('top', 1300);
                $('.level-1').css('top', 1000);
                $('.level-2').css('top', 900);
                $('.level-3').addClass('layers-active');
                break
        }
    }


});