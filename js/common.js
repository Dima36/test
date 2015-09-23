$(document).ready(function () {

    var init = function () {
        grayBg();
        console.log("init success");
    }

    init();

    function grayBg() {
        var windowWidth = $('body').width(),
            bgWidth = (windowWidth - 960) / 2,
            rightWidth = $('.container-wrap .right-container').innerWidth(),
            leftWidth = $('.container-wrap .left-container').innerWidth();
        $('.container-wrap .gray-bg').css({
            width: bgWidth + rightWidth,
            left: leftWidth
        });
    };

    $(window).resize(function () {
        grayBg();
    });


});
