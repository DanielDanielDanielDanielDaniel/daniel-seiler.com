/* global $, AOS, tippy, glowCookies */

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

  // Expand/collapse button
  $('.nucleus-icon-list .collapsable-button').click(function () {
    $('.nucleus-icon-list').toggleClass('expand')
  })

  // Tippy - Tooltips

  tippy('.js-tippy', {
    // default
    placement: 'bottom',
    arrow: true,
    animation: 'fade'
  })

  // Cookies

  glowCookies.start('en', {
    style: 1,
    analytics: 'UA-52418709-9',
    policyLink: '/legal.html',
    hideAfterClick: true,
    acceptBtnBackground: '#171717',
    position: 'right'
  })
})
