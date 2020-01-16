$(document).ready(() => {


   // Top Slider
  let swiper = new Swiper('.top-block', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  $('.arrow-left').on('click', () => {
    $('.swiper-button-prev').trigger('click');
  });
  $('.arrow-right').on('click', () => {
    $('.swiper-button-next').trigger('click');
  });


  // Shop Slider
  let shops = new Swiper('.shops-slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });

  // Header Menu
  $('.menu-link').on('click', (e) => {
    e.preventDefault();
    $('.header-menu').toggleClass('header-menu__active');
  });


  // Stock sort btn

  // Btn all card
  $('.sort-all').on('click', (e) => {
    $('.sort-btn').removeClass('sort-active');
    $('.sort-all').addClass('sort-active');
    $('.card-event, .card-stock').show(500);
  });

  // Btn stock card
  $('.sort-stock').on('click', (e) => {
    e.preventDefault();
    $('.sort-btn').removeClass('sort-active');
    $('.sort-stock').addClass('sort-active');
    $('.card-stock').show(500);
    $('.card-event').hide(500);
  });

  // Btn event card
  $('.sort-event').on('click', (e) => {
    e.preventDefault();
    $('.sort-btn').removeClass('sort-active');
    $('.sort-event').addClass('sort-active');
    $('.card-stock').hide(500);
    $('.card-event').show(500);
  });

  // Parking popup
  $('.button-park').on('click', (e) => {
    $('.road-popup').addClass('road-popup__active');
  });

  $('.road-popup__close').on('click', (e) => {
    e.preventDefault();
    $('.road-popup').removeClass('road-popup__active');
  });

});