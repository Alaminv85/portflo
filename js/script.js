$(".service-slider").slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
//    prevArrow: '<i class="fas fa-long-arrow-alt-left prev"></i>',
//    nextArrow: '<i class="fas fa-long-arrow-alt-right next"></i>',
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
          arrows: true,
          
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          arrows: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



$(".testi-slider").slick({
    dots: false,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
//    prevArrow: '<i class="fas fa-long-arrow-alt-left prev"></i>',
//    nextArrow: '<i class="fas fa-long-arrow-alt-right next"></i>',
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
          arrows: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
          arrows: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          arrows: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

var mixer = mixitup('.img-part');