/* global $, AOS, tippy*/

$(function () {
  // Aos
  AOS.init({
    once: true,
    duration: 600,
    easing: 'ease-in-out-cubic',
    placement: 'top-bottom',
    offset: 0
  })

  // Menu button
  $('.menu-mobile-button').click(function () {
    $('.menu').toggleClass('open-nav')
  })

  // Expand/collapse button
  $('.collapsable-button').click(function () {
    $(this).siblings('.collapsable-content').toggleClass('expand')
  })

  // Tippy - Tooltips

  tippy('.js-tippy', {
    // default
    placement: 'bottom',
    arrow: true,
    animation: 'fade'
  })
})
