$(document).ready(function() {
  	bgSwicher();
  	glyphiconShow();
});


$(document).scroll(function() {
	bgSwicher();
	glyphiconShow();
});

function bgSwicher (){
    if ($(document).scrollTop() < $(window).height()) {
    $('#outer-background-image').css({'background-image': 'url(assets/img/bg01.jpg)', 'transition': '1s'});
 }
 	else if ($('#menu-item-history').attr('class') == 'active') {
    $('#outer-background-image').css({'background-image': 'url(assets/img/bg02.jpg)', 'transition': '1s',});
 }
 	else if ($('#menu-item-text').attr('class') == 'active') {
    $('#outer-background-image').css({'background-image': 'url(assets/img/bg03.jpg)', 'transition': '1s'});
 }
 	else if ($('#menu-item-contact').attr('class') == 'active') {
    $('#outer-background-image').css({'background-image': 'url(assets/img/bg04.jpg)', 'transition': '1s'});
 }
};

function glyphiconShow(){
	if ($(document).scrollTop() > $(window).height()){
		$('#go-to-top').addClass('active');
	}
	else $('#go-to-top').removeClass('active');
}
