$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var fadeElements = $(".fade-in");

    fadeElements.each(function () {
        var element = $(this);
        var elementTop = element.offset().top;

        if (elementTop < pageBottom) {
            element.addClass("visible");
        } else {
            element.removeClass("visible");
        }
    });
});
