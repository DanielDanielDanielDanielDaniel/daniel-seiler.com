/* global $, AOS, tippy, glowCookies, dataLayer*/

$(function () {
  // Hotjar
  // Hotjar Tracking Code for https://www.daniel-seiler.com
  ;(function (h, o, t, j, a, r) {
    h.hj =
      h.hj ||
      function () {
        ;(h.hj.q = h.hj.q || []).push(arguments)
      }
    h._hjSettings = { hjid: 622012, hjsv: 6 }
    a = o.getElementsByTagName('head')[0]
    r = o.createElement('script')
    r.async = 1
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
    a.appendChild(r)
  })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')

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
    position: 'left',
    bannerHeading: '<h2>We use Cookies</h2>'
  })

  // Aos
  AOS.init({
    once: true,
    duration: 600,
    easing: 'ease-in-out-cubic',
    placement: 'top-bottom',
    offset: 0
  })

  // Slick carousel

  $('.custom-carousel').on('init', () => {
    AOS.refreshHard()
  })
  $('.custom-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    centerMode: true,
    centerPadding: '20%'
  })

  // Tippy - Tooltips
  tippy('.js-tippy', {
    // default
    placement: 'bottom',
    arrow: true,
    animation: 'fade'
  })

  // Cursor
  const cursor = document.querySelector('#cursor')
  let mouse = { x: 300, y: 300 }
  let pos = { x: 0, y: 0 }
  const speed = 1 // between 0 and 1

  const updatePosition = () => {
    pos.x += (mouse.x - pos.x) * speed
    pos.y += (mouse.y - pos.y) * speed
    cursor.style.transform = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)'
  }

  const updateCoordinates = e => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  }

  window.addEventListener('mousemove', updateCoordinates)

  function loop() {
    updatePosition()
    requestAnimationFrame(loop)
  }

  requestAnimationFrame(loop)
})
