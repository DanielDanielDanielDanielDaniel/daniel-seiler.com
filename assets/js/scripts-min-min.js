$((function(){function n(){dataLayer.push(arguments)}AOS.init({once:!0,duration:600,easing:"ease-in-out-cubic",placement:"top-bottom",offset:0}),$(".menu-mobile-button").click((function(){$(".menu").toggleClass("open-nav")})),$(".collapsable-button").click((function(){$(this).siblings(".collapsable-content").toggleClass("expand")})),$(".nucleus-icon-list .collapsable-button").click((function(){$(".nucleus-icon-list").toggleClass("expand")})),tippy(".js-tippy",{placement:"bottom",arrow:!0,animation:"fade"}),window.dataLayer=window.dataLayer||[],n("js",new Date),n("config","UA-52418709-9"),glowCookies.start("en",{style:1,analytics:"UA-52418709-9",policyLink:"/legal.html",hideAfterClick:!0,acceptBtnBackground:"#171717",position:"right",bannerHeading:"<h2>We use Cookies</h2>"});const e=()=>{document.documentElement.style.setProperty("--app-height",`${window.innerHeight}px`)};var t;window.addEventListener("resize",e),e();var o=0,a=$(".menu").outerHeight();$(window).scroll((function(){t=!0})),setInterval((function(){t&&(!function(){var n=$(this).scrollTop();if(Math.abs(o-n)<=5)return;n>o&&n>a?$(".menu").removeClass("nav-down").addClass("nav-up"):n+$(window).height()<$(document).height()&&$(".menu").removeClass("nav-up").addClass("nav-down");o=n}(),t=!1)}),250)}));