$(document).ready(function(){
    $("#alertButton").click(function(){
        alert("Button clicked!");
    });
});

$(document).ready(function(){
    $(".hoverEffect").hover(
        function(){
            $(this).css({"color": "red", "font-size": "20px"});
        },
        function(){
            $(this).css({"color": "", "font-size": ""});
        }
    );
});

$(document).ready(function(){
    $(".toggleText").click(function(){
        $(this).next(".text").slideToggle();
    });
});

$(document).ready(function(){
    var hour = new Date().getHours();
    if(hour >= 6 && hour < 18){
        $("body").css("background-color", "#FFFAF0"); // Light color for day
    } else {
        $("body").css("background-color", "#2F4F4F"); // Dark color for night
    }
});

$(document).ready(function(){
    $(".changeColor").css("color", "blue");
    $("#changeFontButton").click(function(){
        $(".changeFont").css({"font-family": "Arial", "font-weight": "bold"});
    });
});

