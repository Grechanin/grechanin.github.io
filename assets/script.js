$(document).ready(function () {

    background_switch();

    $(document).on('click', ".click_scroll", function (e) {
        e.preventDefault();
        var link = $(this).attr('href');
        $('html,body').animate({scrollTop: ($(link).offset().top)}, 500);
        console.log(1);
    });

    function background_switch() {
        var home_height = $('#home').offset().top;
        var history_height = $('#history').offset().top;
        var what_we_do_height = $('#what-we-do').offset().top;
        var contacts_height = $('#contacts').offset().top;

        if ($(document).scrollTop() >= (contacts_height - 50)) {
            $('.background').css({'background-image': 'url(image/bg04.jpg)', 'transition': '1s'});
        }
        else if ($(document).scrollTop() > (what_we_do_height - 50)) {
            $('.background').css({'background-image': 'url(image/bg03.jpg)', 'transition': '1s'});
        }
        else if ($(document).scrollTop() > (history_height - 50)) {
            $('.background').css({'background-image': 'url(image/bg02.jpg)', 'transition': '1s'});
        }
        else if ($(document).scrollTop() > home_height) {
            $('.background').css({'background-image': 'url(image/bg01.jpg)', 'transition': '1s'});
        }
    }

    $(document).scroll(function () {
            // alert($('#history').height());
            background_switch();


            // if ($('#home').scrollTop() < '50') {
            //     $('.background').css({'background-image': 'url(image/bg01.jpg)', 'transition': '1s'});
            // }
            // else if ($('#history').scrollTop() < '50') {
            //     $('.background').css({'background-image': 'url(image/bg02.jpg)', 'transition': '1s'});
            // }
            // else if ($('#what-we-do').scrollTop() < '50') {
            //     $('.background').css({'background-image': 'url(image/bg03.jpg)', 'transition': '1s'});
            // }
            // else if ($('#contacts').scrollTop() < '50') {
            //     $('.background').css({'background-image': 'url(image/bg04.jpg)', 'transition': '1s'});
            // }
        }
    );


});

//
// if ($(document).scrollTop() < $(window).height()) {
//     $('.background').css({'background-image': 'url(image/bg01.jpg)', 'transition': '1s'});
// }
// else if ($(document).scrollTop() == $(document).height() - $(window).height()) {
//     $('.background').css({'background-image': 'url(image/bg04.jpg)', 'transition': '1s'});
// }
// else if ($(document).scrollTop() > $(window).height() * 2 - '200') {
//     $('.background').css({'background-image': 'url(image/bg03.jpg)', 'transition': '1s'});
// }
// else if ($(document).scrollTop() > $(window).height() - '200') {
//     $('.background').css({'background-image': 'url(image/bg02.jpg)', 'transition': '1s'});
// }
