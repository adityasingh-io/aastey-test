$('.product-grid__container').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left product-grid__container-prev'><</button>",
    nextArrow:"<button type='button' class='slick-next pull-right product-grid__container-next'>></button>",
    responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });