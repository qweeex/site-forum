$(document).ready(() => {


   // Top Slider
  let swiper = new Swiper('.top-block', {
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
  });

  // Header Menu
  $('.menu-link').on('click', (e) => {
    e.preventDefault();
    $('.header-menu').toggleClass('header-menu__active');
  });

});