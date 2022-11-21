/* global $ */

$(function () {
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
