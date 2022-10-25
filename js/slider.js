$(document).ready(function(){
    $('.header__slider').slick({
        dots: true,
        arrows: false,
        // autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        fade: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              dots: false,
            }
          }
        ]
    });
  });


  $(document).ready(function(){
    $('.cards').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            dots: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }  
        }
      ]
    });
  });