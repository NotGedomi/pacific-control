
// HEADER ONSCROLL :

window.addEventListener('scroll', function() {
  const container = document.querySelector('.header-bottom');

  if (window.scrollY > 15) {
    // Usuario ha comenzado a hacer scroll
    container.classList.add('active')

  } else {
    // Scroll ha vuelto a 0%
    container.classList.remove('active')
  }
});


// SPLIDE :

document.addEventListener('DOMContentLoaded', function () {
  let mainBannerSlider = document.getElementById('main-banner-slider');
  let mainPageSlider = document.getElementById('main-page-categories');
  let mainNewsSlider = document.getElementById('main-page-news');
  let mainCertificationsSlider = document.getElementById('main-page-certifications');
  let arrowPath = 'M12.8099 13.5387C11.7154 12.4876 10.7926 11.6081 9.89124 10.7071C8.28168 9.09826 6.67212 7.4894 5.06256 5.88054C3.6676 4.46474 3.6676 2.34105 5.06256 0.989607C6.41459 -0.340384 8.49629 -0.340385 9.89124 1.05396C13.1962 4.33603 16.4797 7.6181 19.7632 10.9216C21.3299 12.4876 21.3298 14.4826 19.7847 16.0271C16.5012 19.3306 13.2177 22.6341 9.9127 25.9162C8.49628 27.332 6.39313 27.3534 5.01963 26.0235C3.64614 24.672 3.64614 22.5054 5.10547 21.0682C7.61639 18.6012 10.1488 16.1558 12.8099 13.5387Z';

  if (mainBannerSlider) {
    new Splide(mainBannerSlider, {
      arrowPath: arrowPath,
      type: 'loop',
      perPage: 1,
      autoplay: true,
    }).mount();
  }
  if (mainPageSlider) {
    new Splide(mainPageSlider, {
      arrowPath: arrowPath,
      type: 'loop',
      perPage: 3,
      autoplay: true,
      omitEnd: true,
      pagination: false,
    }).mount();
  }
  if (mainNewsSlider) {
    new Splide(mainNewsSlider, {
      arrowPath: arrowPath,
      perPage: 3,
      autoplay: false,
      arrows: false,
      pagination: false,
    }).mount();
  }
  if (mainCertificationsSlider) {
    new Splide(mainCertificationsSlider, {
      arrowPath: arrowPath,
      type: 'loop',
      perPage: 6,
      perMove: 1,
      autoScroll: true,
      interval: 2000,
      pauseOnHover: false,
      pagination: false,
      arrows: false,
    }).mount(window.splide.Extensions);
  }
});

// ACCORDION