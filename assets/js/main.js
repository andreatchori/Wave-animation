$(function() {
    "use strict";
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
        // 2. show elements
        setTimeout(function() {
            $("body").addClass("page-loaded");
        }, 400);
        $("body").addClass("page-ready");
    });
	
});