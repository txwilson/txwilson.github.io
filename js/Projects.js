$(document).ready(function(){
    $("#arrow").hide()
});

$(".project").mouseenter(function () {
    moveArrow($(this).text());
});

function moveArrow(text){
    switch(text){
        case "Base Conversion":
            positionArrow(46);
            break;
        case "Daily Overview":
            positionArrow(59);
            break;
        case "Swift Game":
            positionArrow(72);
            break;
        case "Diabetes Dashboard":
            positionArrow(85);
            break;
        default:
            return;
    }
}

$(".project").click(function () {
    $(".project").css("font-weight","normal");
    $(this).css("font-weight","bold");
    selectProjectImage($(this).text());
   selectProjectTitle($(this).text());
   selectProjectText($(this).text());
});

function positionArrow(position){
    $("#arrow").fadeOut(200);
    $("#arrow").css("top",position + "%");
    $("#arrow").fadeIn(200);
}

function selectProjectImage(text){
    $(".convProject").hide();
    switch(text){
        case "Base Conversion":
            location.reload();
            break;
        case "Daily Overview":
            $("#projectImages").css("content","url(../images/overview.png)");
            break;
        case "Swift Game":
            $("#projectImages").css("content","url(../images/game.png)");
            break;
        case "Diabetes Dashboard":
            $("#projectImages").css("content","url(../images/dashboard.png)");
            break;
        default:
            return;
    }
}

function selectProjectTitle(text) {
    switch(text){
        case "Daily Overview":
            $("#projectTitle").text("Daily Overview");
            break;
        case "Swift Game":
            $("#projectTitle").text("Swift Game");
            break;
        case "Diabetes Dashboard":
            $("#projectTitle").text("Diabetes Dashboard");
            break;
        default:
            return;
    }
}

function selectProjectText(text){
    switch(text){
        case "Daily Overview":
            $("#projectDesc").text("This simple IOS app displays the hourly, every three hours, using the Open Weather Map API, uses your " +
                "phones calendar to get the events for that current day, and uses Fox Sports xml to get the current sports headlines.");
            break;
        case "Swift Game":
            $("#projectDesc").text("This is just a simple point and shoot game I made for a class project in my IOS development class. " +
                "The hooks fall from the top of the screen and you (the shark) shoot bubbles at the hooks.");
            break;
        case "Diabetes Dashboard":
            $("#projectDesc").text("This is my project I work on when I have some spare time. I wanted a project to do where I can try to use a " +
                "database. This is my first attempt at using a database and SQL. Being a type 1 diabetic, I decided to create a system where I can log my " +
                "blood glucose numbers. This application will allow me to see past numbers, a weekly average, and a monthly average. You will also be able to " +
                "log meals so you can see what your blood glucose levels are during each meal to see if you need to adjust your insulin doses. Below is a rough mock up of the main menu.");
            break;
        default:
            return;
    }
}