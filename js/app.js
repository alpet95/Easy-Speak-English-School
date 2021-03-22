$(document).ready(function () {
  $('#headerMenu').click(function () {
    $(this).toggleClass('fa-times');
    $('#headerNavbar').toggleClass('header_navbar__toggle');
  });

  $('#headerLogin').click(function () {
    $('#loginForm').addClass('popup');
  });

  $('#loginClose').click(function () {
    $('#loginForm').removeClass('popup');
  })

  $(window).on('load scroll', function () {
    $('#headerMenu').removeClass('fa-times');
    $('#headerNavbar').removeClass('header_navbar__toggle');
    $('#loginForm').removeClass('popup');
    $('section').each(function () {
      let top = $(window).scrollTop();
      let height = $(this).height();
      let id = $(this).attr('id');
      let offset = $(this).offset().top - 100;
      if (top > offset && top < offset + height) {
        $('.header_navbar ul a').removeClass('navlink_active');
        $('.header_navbar').find(`[href="#${id}"]`).addClass('navlink_active');
      }
    });
  });
});