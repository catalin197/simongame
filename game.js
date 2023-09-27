var level = 0;

var gamePattern = [];


var userClickedPattern = [];


var buttonColours = ["red", "blue", "green", "yellow"];
 var randomChosenColour = buttonColours[nextSequence];





function nextSequence() {
    level++;
    $("h1").text("Level " + level);
    var randomNumber = Math.floor(Math.random()*4);  
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    var colorHere = randomChosenColour;
    $("."+colorHere).fadeOut();
    $("."+colorHere).fadeIn();
    console.log("color is " + colorHere);
}


    var audio = new Audio("sounds/" + randomChosenColour + '.mp3');
    audio.play(); 


    
    



$(".btn").on("click", function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    


    playSound(userChosenColour);
    animatePress(userChosenColour);


    
    checkAnswer();
});



function playSound(name) {

    var audio = new Audio("sounds/" + name + '.mp3');
    audio.play();

}

function animatePress(name) {
    $("#"+name).addClass("pressed");
        setTimeout( function() {
            $("#"+name).removeClass("pressed");
        }, 100)
}




$(document).on("keypress", function() {
    if(level===0){
        
        nextSequence();
    } else {
        
    }
    
});






function gameOver() {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
        setTimeout( function() {
            $("body").removeClass("game-over");
        }, 200)
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();

}

function checkAnswer() {

    for(let i = 0; i<userClickedPattern.length; i++) {

        if(userClickedPattern[i] === gamePattern[i] && userClickedPattern.length===gamePattern.length && userClickedPattern.length === (i+1)) {
            console.log("1finished" + userClickedPattern.length + gamePattern.length + i);
            userClickedPattern = [];
            nextSequence();
        } else if(userClickedPattern[i] === gamePattern[i]) {
            console.log("2keepgoing" + userClickedPattern.length + " " + gamePattern.length + " " + i);
            console.log("2keepgoing");
        } else {
            console.log("3failed");
            gameOver();
        }



    }
} 


function startOver() {
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
}