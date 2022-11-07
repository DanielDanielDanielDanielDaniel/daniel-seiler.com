/* global $ */

$(function () {
  // Menu

  // $('.menu .menu-item').click(function (e) {
  //   e.preventDefault(), $('.menu .menu-item').removeClass('active')
  //   $(this).toggleClass('active')
  // })

  // Menu button
  $('.menu-mobile-button').click(function () {
    $('.menu').toggleClass('open-nav')
  })
})
