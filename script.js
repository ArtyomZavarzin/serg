window.addEventListener('load', function () {
  var swiper = new Swiper('.mySwiper', {
    spaceBetween: 80,

    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 'auto',
    loop: true,
    slideToClickedSlide: true,
  });

  this.document.getElementById('prev-btn').addEventListener('click', () => {
    swiper.slidePrev();
  });
  this.document.getElementById('next-btn').addEventListener('click', () => {
    swiper.slideNext();
  });
});
