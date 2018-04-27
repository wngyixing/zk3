document.documentElement.style.fontSize = window.innerWidth / 10 + "px"

require.config({
    baseUUrl: "../stutic/js/page",
    paths: {
        "jquery": "../lib/jquery-1.10.1.min",
        "handlebars": "../lib/handlebars-v4.0.11",
        "template": "../lib/template",
        "swiper": "../lib/swiper.min",
        "bann": "../comment/bann"
    }
})


require(["jquery", "handlebars", 'template', 'swiper', "bann"], function($, Handlebars, template, swiper, bann) {
    $.ajax({
        url: "/getdata",
        data: 'get',
        dataType: 'json',
        success: function(data) {
            console.log(data)
            template("#ban", {
                data: data
            }, ".swiper-wrapper")
            bann()
        }
    })
    $.ajax({
        url: "/getlist",
        data: 'get',
        dataType: 'json',
        success: function(data) {
            console.log(data)
                // template("#ban", {
                //     data: data
                // }, ".swiper-wrapper")
                // bann()
        }
    })
})