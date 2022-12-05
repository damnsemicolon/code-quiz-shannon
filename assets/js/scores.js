// DOM set up
var highscores = document.querySelector("#highscores");
var clear = document.querySelector("#clear");

// Get score
function retrieveHighScores() {
    var scoreArr = JSON.parse(localStorage.getItem("score"));

    for(var i = 0; i < scoreArr.length; i++) {
        var li = document.createElement("li");
        li.textContent = scoreArr[i];
        highscores.appendChild(li);
    }
}
retrieveHighScores();

// Create listener for "Clear Highscore Button"
clear.addEventListener("click", function() {

    localStorage.clear();

    while (highscores.hasChildNodes()) {
        highscores.removeChild(highscores.firstChild);
    }
});