$(document).ready(function(){
    $("#main").show();
});


function getHomeLetters(){
    var a = $("#homeLeftText").text();
    console.log(a.charAt(19));
}

function changeLetter(){
    var a = $("#name").text();

    if(i <  getEducationLetters().length) {
        checkForSpace(a);
        i++;
        setTimeout(function(){
            changeLetter();
        }, 800);
    }
}


function checkForSpace(a){
    if(a.charAt(i) == ' '){
        return;
        var b = a.replace(' ', getEducationLetters()[i]);
        $("#name").text(b);
        console.log(i);
    }else if(getEducationLetters().charAt(i) == ' '){
        var b = a.replace(a.charAt(i), ' ');
        $("#name").text(b);
    }else{
        var b = a.replace(a.charAt(i), getEducationLetters()[i]);
        $("#name").text(b);
    }
}

var i = 27;

function deleteLetters(){
    var a = $("#name").text();
    if(i != 0) {
        var b = a.replace(a.charAt(i - 1 ), "");

        $("#name").text(b);
        i--;
        setTimeout(function(){
            deleteLetters()
        }, 30);
    }
}

var d = 0;
var newTitle = "";
function addLetters(){
    var a = getEducationLetters();
    if(d < getEducationLetters().length) {
        var b = a.charAt(d);
        newTitle += b;
        $("#name").text(newTitle);
        d++;
        setTimeout(function(){
            addLetters();
        }, 80);
    }
    console.log(b);
}

function getEducationLetters() {
    return "SOON TO BE GRADUATE!";
}

function fadeOutMainPage() {
    $("#main").fadeOut(800);
}


$(".menuItems").click(function(){
    deleteLetters();
    fadeOutMainPage();
        setTimeout(function(){
            window.location.replace("./html/Education.html")
        }, 1000);
});