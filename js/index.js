$(".menuItems").mouseenter(function () {
    $("body").css("opacity", "0.8");
    $("#menu").css("opacity", "1");
});

$(".menuItems").mouseleave(function () {
    $("body").css("opacity", "1");
    $("#menu").css("opacity", "0.5");
});