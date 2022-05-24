const bikeSlider = document.querySelector('.bike-slider');
const mainSlider = document.querySelector('.slider-main');

new Swiper(bikeSlider, {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  simulateTouch: true,
  touchRatio: 2,
  touchAngle: 45,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  speed: 300,
  direction: 'vertical',
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

new Swiper(mainSlider, {
  pagination: {
    el: '.swiper-pagination2',
    clickable: true,
  },
  loop: true,
  simulateTouch: true,
  touchRatio: 2,
  touchAngle: 45,
  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.bike-slider'
  },
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  speed: 300,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});