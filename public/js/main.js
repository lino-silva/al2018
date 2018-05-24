/* globals Swiper, document, google, */

const swiper = new Swiper('.swiper-container', {
  // eslint-disable-line no-unused-vars
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});
