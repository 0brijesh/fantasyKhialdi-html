// header js start
$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
});
// header js end
// mobile menu js start
$(document).ready(function () {
  $(".mobile-menu-ico").click(function () {
    $(".mobile-menu-wrap").addClass("mobile-menu-wrap-show");
  });

  $(".close-ico").click(function () {
    $(".mobile-menu-wrap").removeClass("mobile-menu-wrap-show");
  });
});

$(document).mouseup(function (e) {
  var popup = $(".mobile-menu-wrap");
  if (
    !$(".mobile-menu-ico").is(e.target) &&
    !popup.is(e.target) &&
    popup.has(e.target).length == 0
  ) {
    popup.removeClass("mobile-menu-wrap-show");
  }
});
$(document).ready(function () {
  $(".list-menu .link").click(function () {
    $(".mobile-menu-wrap").removeClass("mobile-menu-wrap-show");
  });
});
// mobile menu js end
// _BEGIN > PLAY FANTASY SECTION < SHB -->
var swiper = new Swiper(".play-fantasy-swiper", {
  slidesPerView: 1,
  spaceBetween: 32,
  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank: true,
  // autoplay: {
  //   delay: 2000,
  // },
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    375: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    1200: {
      slidesPerView: 3.8,
      spaceBetween: 25,
    },
    1366: {
      slidesPerView: 3.8,
      spaceBetween: 32,
    },
  },
});
// _BEGIN > PLAY FANTASY SECTION < SHB -->
// _BEGIN > PLAY FANTASY SECTION MODAL < SHB -->
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
// _BEGIN > PLAY FANTASY SECTION MODAL < SHB -->
