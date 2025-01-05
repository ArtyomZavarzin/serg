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
    slidesPerView: 1.5,
    loop: true,
    // centeredSlides: true,
    slideToClickedSlide: true,
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      // when window width is >= 640px
      1750: {
        slidesPerView: 3,
        spaceBetween: 80,
      },
    },
  });

  this.document.getElementById('prev-btn').addEventListener('click', () => {
    swiper.slidePrev();
  });
  this.document.getElementById('next-btn').addEventListener('click', () => {
    swiper.slideNext();
  });

  const video = this.document.getElementById('video-block');

  // video.addEventListener('ended', () => {
  //   video.classList.add('hide');
  // });

  let isMuted = true;
  const soundBtn = this.document.getElementById('sound');
  soundBtn.addEventListener('click', () => {
    video.muted = !isMuted;
    if (isMuted) {
      soundBtn.style.backgroundImage = 'url(assets/svg/soundOn.svg)';
    } else {
      soundBtn.style.backgroundImage = 'url(assets/svg/soundOff.svg)';
    }
    isMuted = !isMuted;
  });
});
