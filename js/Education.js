$(document).ready(function(){
       addLetters();
       $("#main").fadeIn(1800);
});

$(".menuItems").mouseenter(function () {
    $("body").css("opacity", "0.8");
    $("#menu").css("opacity", "1");
});

$(".menuItems").mouseleave(function () {
    $("body").css("opacity", "1");
    $("#menu").css("opacity", "0.5");
});

var deleteCounter = 35;

function deleteLetters(){
    var title = $("#name").text();
    if(deleteCounter != 0) {
        var char = title.replace(title.charAt(deleteCounter - 1 ), "");

        $("#name").text(char);
        deleteCounter--;
        setTimeout(function(){
            deleteLetters()
        }, 30);
    }
}

var addCounter = 0;
var newTitle = "";
function addLetters(){
    var title = getTitle();
    if(addCounter < getTitle().length) {
        var char = title.charAt(addCounter);
        newTitle += char;
        $("#name").text(newTitle);
        addCounter++;
        setTimeout(function(){
            addLetters();
        }, 30);
    }
}

function getTitle() {
    return "TYLER WILSON SOON TO BE GRADUATE!";
}

function fadeOutMainPage() {
    $("#main").fadeOut(800);
}

$(".menuItems").click(function(){
    var page = $(this).text();
    deleteLetters();
    fadeOutMainPage();
    setTimeout(function(){
        goToPage(page);
    }, 1400);
});

function goToPage(page){
    switch(page){
        case "Home":
            window.location.replace("../index.html");
            break;
        case "Education":
            window.location.replace("./Education.html");
            break;
        case "Projects":
            window.location.replace("./Projects.html");
            break;
        default:
            window.location.replace("../index.html");
            return;
    }
}