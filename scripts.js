$(document).ready(function () {
  $(".box-programas").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  if (window.matchMedia("(max-width: 992px)").matches) {
    $(".box-numbers").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,

      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,
          },
        },
      ],
    });

    $(".box-destinos").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      dots: true,

      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          },
        },
      ],
    });

    $(".box-blog").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      dots: true,

      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          },
        },
      ],
    });
  }

  $(".box-depoimentos").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          adaptiveHeight: true,
        },
      },
    ],
  });
});

$(".toggle-menu").click(() => {
  const menuMobile = document.querySelector(".menu-mobile"),
    header = document.querySelector("header"),
    body = document.body;

  menuMobile.classList.toggle("active");
  header.classList.toggle("active");
  body.classList.toggle("mobile-active");
});
