'use strict';

let Shops = [];

let Config = {
    layers: {
        level_zero: 300,
        level_one: 200,
        level_two: 50,
        level_three: -50
    }
};

function GetShops() {
    fetch('/json/shop.json')
        .then(response => {
            return response.json()
        })
        .then(data => {
            Shops = data.shop;
            console.log('Good download');
            InnerShops();
        })
        .catch(err => {
            console.log('Error: ' + err);
        });
}

function InnerShops() {
    let html = '';
    Shops.forEach(function (data) {
        html += '<div class="list-cat" >';
        html += '<p class="title">' + data.title + '</p>';
        data.shops.item.forEach(function (shop) {
            html += `
            <p
                    data-level='${shop.level}'
                    data-image='${shop.img}'
                    data-phone='${shop.phone}'
                    data-category='${shop.title}'
                    data-id='${shop.id}'
                    class='shop'>
                ${shop.title}
            </p>
            `
        })
        html += '</div>';
    });
    document.querySelector('.map-list__wrapper').innerHTML = html;
}

function ShowShop(id, image, title, level, phone) {

}

function ActiveLevel(num) {
    document.querySelector('.level-0, .level-1, .level-2, .level-3').classList.remove('layers-out');
    document.querySelector('.level-0, .level-1, .level-2, .level-3').classList.remove('layers-active');
    document.querySelector('.level-1').style.top = Config.layers.level_one;
    document.querySelector('.level-2').style.top = Config.layers.level_two;
    document.querySelector('.level-3').style.top = Config.layers.level_three;
    document.querySelector('.level-0').style.top = Config.layers.level_zero;
    switch (num) {
        case 0:
            document.querySelector('.level-1').style.top = -1300;
            document.querySelector('.level-2').style.top = -1000;
            document.querySelector('.level-3').style.top = -900;
            document.querySelector('.level-0').classList.add('layers-active');
            break;
        case 1:
            document.querySelector('.level-0').style.top = 1300;
            document.querySelector('.level-2').style.top = -1000;
            document.querySelector('.level-3').style.top = -900;
            document.querySelector('.level-1').classList.add('layers-active');
            break;
        case 2:
            document.querySelector('.level-0').style.top = 1300;
            document.querySelector('.level-1').style.top = 1000;
            document.querySelector('.level-3').style.top = -900;
            document.querySelector('.level-2').classList.add('layers-active');
            break;
        case 3:
            document.querySelector('.level-0').style.top = 1300;
            document.querySelector('.level-1').style.top = 1000;
            document.querySelector('.level-2').style.top = 900;
            document.querySelector('.level-3').classList.add('layers-active');
            break
    }
}



function Init() {
    GetShops();
}

Init();