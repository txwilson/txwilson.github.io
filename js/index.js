$(document).ready(function(){
    alert("This website is still under construction, so please excuse my bugs, however you are still welcome to look around.");
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

var deleteCounter = 27;

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
    return "TYLER WILSON LOOKS FOR JOB!";
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
    }, 1000);
});

function goToPage(page){
    switch(page){
        case "Home":
            break;
        case "Education":
            window.location.replace("./html/Education.html");
            break;
        case "Projects":
            window.location.replace("./html/Projects.html");
            break;
        default:
            window.location.replace("./index.html");
            return;
    }
}