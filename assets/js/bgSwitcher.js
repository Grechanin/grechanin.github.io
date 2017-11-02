$(document).ready(function() {
  $(document).scroll(function() {
var bg = "url(../img/bg04.jpg)";
    if ($(document).scrollTop() < $(window).height()) {
    $('#outer-background-image').css({'background-image': 'url(../img/bg01.jpg)', 'transition': '1s'});
 }
 else if ($(document).scrollTop() == $(document).height() - $(window).height()) {
     $('#outer-background-image').css({'background-image': 'url(../img/bg04.jpg)', 'transition': '1s',});
 }
 else if ($(document).scrollTop() > $(window).height() * 2 - '200') {
     $('#outer-background-image').css({'background-image': 'url(../img/bg03.jpg)', 'transition': '1s'});
 }
 else if ($(document).scrollTop() > $(window).height() - '200') {
     $('#outer-background-image').css({'background-image': 'url(../img/bg02.jpg)', 'transition': '1s'});
 }

  });
});
