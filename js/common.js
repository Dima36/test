$(document).ready(function () {

    var init = function () {
        grayBg();
        console.log("init success");
    }

    init();

    function grayBg() {
        var windowWidth = $('body').width(),
            bgWidth = (windowWidth - 960) / 2,
            sideBarWidth = $('.container-wrap .right-container').innerWidth();
        $('.right-container .gray-bg').css('width', bgWidth + sideBarWidth);
    };

    $(window).resize(function () {
        grayBg();
    });


});
