//europe trivia game

$(document).ready(function () {


    //generates initial screen / home page
    function initialScreen() {
        startScreen = "<center><p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block startbtn' href='#' role='button'>Click Here For Music</a></p></center>";
        $(".mainDiv").html(startScreen);
    }

    initialScreen();

    //when the user clicks 'start'
    $("body").on("click", ".startbtn", function (event) {
        event.preventDefault();  // added line to test scrolling issue
        clickSound.play();
    });

  

});


//variable to store audio for the game
var clickSound = new Audio("Queen.mp3");



