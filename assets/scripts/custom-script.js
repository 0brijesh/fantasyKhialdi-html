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