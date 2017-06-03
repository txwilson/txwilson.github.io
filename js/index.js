$(".menuItems").mouseenter(function () {
    $("body").css("opacity", "0.8");
    $("#menu").css("opacity", "1");
});

$(".menuItems").mouseleave(function () {
    $("body").css("opacity", "1");
    $("#menu").css("opacity", "0.5");
});

function stretchText(){
    $("#name").css({"transform": "scale(2,2)"});
}

function shrinkText() {
    $("#name").css("transform", "scale(0,0)");
}

// $("#a").click(function(){
//    stretchText();
//    setTimeout(function(){
//        shrinkText();
//    },300)
// });
