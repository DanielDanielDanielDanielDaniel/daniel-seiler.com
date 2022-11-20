/* global $, AOS, tippy, glowCookies, dataLayer */

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

  // Google analytics

  window.dataLayer = window.dataLayer || []
  function gtag() {
    dataLayer.push(arguments)
  }
  gtag('js', new Date())

  gtag('config', 'UA-52418709-9')

  // Cookies

  glowCookies.start('en', {
    style: 1,
    analytics: 'UA-52418709-9',
    policyLink: '/legal.html',
    hideAfterClick: true,
    acceptBtnBackground: '#171717',
    position: 'right',
    bannerHeading: '<h2>We use Cookies</h2>'
  })

  // app height

  const appHeight = () => {
    const root = document.documentElement
    root.style.setProperty('--app-height', `${window.innerHeight}px`)
  }
  window.addEventListener('resize', appHeight)
  appHeight()

  // Hide menu on scroll

  // Hide Header on on scroll down
  var didScroll
  var lastScrollTop = 0
  var delta = 5
  var navbarHeight = $('.menu').outerHeight()

  $(window).scroll(function () {
    didScroll = true
  })

  setInterval(function () {
    if (didScroll) {
      hasScrolled()
      didScroll = false
    }
  }, 250)

  function hasScrolled() {
    var st = $(this).scrollTop()

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $('.menu').removeClass('nav-down').addClass('nav-up')
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $('.menu').removeClass('nav-up').addClass('nav-down')
      }
    }

    lastScrollTop = st
  }
})
