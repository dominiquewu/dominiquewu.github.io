$(document).ready(function () {

    var sk = skrollr.init();

    $(".wrapper").imagesLoaded({ background: true }, function () {
        console.log(".wrapper background image loaded");
    });

    //Hack to make Skrollr parallax the whole document background
    window.dispatchEvent(new Event('resize'));

});