$(document).ready(function () {

    var sk = skrollr.init();

    //Hack to make Skrollr parallax the whole document background
    window.dispatchEvent(new Event('resize'));

});