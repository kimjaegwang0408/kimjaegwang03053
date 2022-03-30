
$(function () {
    $(".Anchor").on("click", function(){
        var headerHeight = $(".navbar").outerHeight();
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "body" : href);
        var position = target.offset().top - headerHeight;
        $("html, body").animate({ scrollTop: position }, 600, "swing");
    });
});


$(function () {
    $('li').on('click', function(){
        $('li').removeClass('active');
        $(this).addClass('active');
        });
});
