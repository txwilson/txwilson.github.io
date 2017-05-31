// $("#a").click(function(){
//     randomizeTitle();
// });

function getTitle(){
    var title = $("#name").text();
    return title;
}

function splitTitle(){
    var split = getTitle().split(" ");
    return split;
}

var i = 0;
var newTitle = "";
function randomizeTitle(){
    getTitle()[4] = "i";
}

function randomLetter(){
    var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var random = Math.floor((Math.random() * 24) + 1);

    return upperCaseLetters.slice(random, random + 1);
}

var randomCounter = 0;
function fiveRandom(){
    if(randomCounter != 5) {
        setTimeout(function () {
            fiveRandom();
            randomCounter++;
        }, 90);
    }
    return randomLetter();
}