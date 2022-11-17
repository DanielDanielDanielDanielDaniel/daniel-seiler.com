/* global $, gsap, Observer */

$(() => {
  // fullscreen slides

  class Slide {
    constructor(DOM_el) {
      this.el = DOM_el
      this.inner = this.el.querySelector('.slide__inner')
      this.img = this.el.querySelector('.slide__img')
      this.imgInner = this.el.querySelector('.slide__img-inner')
      const slideTheme = this.el.getAttribute('data-theme') || 'light'
      this.theme = `${slideTheme}-theme`
    }
  }

  // dom elements
  const DOM = {
    slides: [...document.querySelectorAll('.slide')],
    navigationItems: document.querySelectorAll(
      '.frame__nav > .frame__nav-button'
    )
  }

  // slide objects

  const totalSlides = DOM.slides.length
  let slidesArr = DOM.slides.map(slide => new Slide(slide))
  if (slidesArr.length > 0) document.body.classList.add(slidesArr[0].theme)

  // execution state

  let current = 0
  let isAnimating = false

  // navigation

  function next() {
    const newPosition = current < totalSlides - 1 ? current + 1 : 0
    navigate(newPosition)
  }

  function prev() {
    const newPosition = current > 0 ? current - 1 : totalSlides - 1
    navigate(newPosition)
  }

  function navigate(newPosition) {
    isAnimating = true

    // change navigation current class
    // DOM.navigationItems[current].classList.remove('frame__nav-button--current')
    // DOM.navigationItems[newPosition].classList.add('frame__nav-button--current')

    const direction =
      current < newPosition
        ? current === 0 && newPosition === totalSlides - 1
          ? 'prev'
          : 'next'
        : current === totalSlides - 1 && newPosition === 0
        ? 'next'
        : 'prev'

    const currentSlide = slidesArr[current]
    current = newPosition
    const upcomingSlide = slidesArr[current]

    gsap
      .timeline({
        defaults: {
          duration: 1.6,
          ease: 'power3.inOut'
        },
        onComplete: () => {
          currentSlide.el.classList.remove('slide--current')
          isAnimating = false
        }
      })
      .addLabel('start', 0)

      .set(
        [currentSlide.imgInner, upcomingSlide.imgInner],
        {
          transformOrigin: direction === 'next' ? '50% 0%' : '50% 100%'
        },
        'start'
      )
      .set(
        upcomingSlide.el,
        {
          yPercent: direction === 'next' ? 100 : -100
        },
        'start'
      )
      .set(
        upcomingSlide.inner,
        {
          yPercent: direction === 'next' ? -100 : 100
        },
        'start'
      )
      .add(() => {
        upcomingSlide.el.classList.add('slide--current')
      }, 'start')

      .add(() => {
        const currentTheme = currentSlide.theme
        const upcomingTheme = upcomingSlide.theme
        if (currentTheme !== upcomingTheme) {
          document.body.classList.remove(currentTheme)
          document.body.classList.add(upcomingTheme)
        }
      })
      .to(
        currentSlide.el,
        {
          yPercent: direction === 'next' ? -100 : 100
        },
        'start'
      )
      .to(
        currentSlide.imgInner,
        {
          scaleY: 2
        },
        'start'
      )
      // Upcoming slide translates to 0
      .to(
        [upcomingSlide.el, upcomingSlide.inner],
        {
          yPercent: 0
        },
        'start'
      )
      .to(
        upcomingSlide.imgInner,
        {
          ease: 'power2.inOut',
          startAt: { scaleY: 2 },
          scaleY: 1
        },
        'start'
      )
  }

  // setup

  Observer.create({
    type: 'wheel,touch,pointer',
    onDown: () => !isAnimating && prev(),
    onUp: () => !isAnimating && next(),
    // invert the mouse wheel delta
    wheelSpeed: -1,
    tolerance: 10
  })
})

// disable rubber banding
document.body.addEventListener(
  'touchmove',
  function (event) {
    event.preventDefault()
  },
  {
    passive: false,
    useCapture: false
  }
)

window.onresize = function () {
  $(document.body).width(window.innerWidth).height(window.innerHeight)
}
$(() => window.onresize())
