/* global $ */

$(function() {

  // Anchor scroll
  $(".anchor-link").click(function() {
      return $("html, body").animate({
          scrollTop: $($.attr(this, "href")).offset().top
      }, 600),
      !1
  })

  // Menu
  $(".main-header .menu-button").click(function() {
    $(".main-header").toggleClass("open-nav");
  })
});
