const swiper = new Swiper('.swiper', {
  loop: true,
  effect: 'fade',
  autoplay: { delay: 1000, disableOnInteraction: false },
  speed: 2000,
  pagination: { el: '.swiper-pagination', clickable: true },
})
