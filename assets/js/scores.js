var highscores = document.querySelector("#highscores");
var clear = document.querySelector("#clear");

function retrieveHighScores() {

    var scoreArr = JSON.parse(localStorage.getItem("score"));

    for(var i = 0; i < scoreArr.length; i++) {
        var liEl = document.createElement("li");
        liEl.textContent = scoreArr[i];
        highscores.appendChild(liEl);
        highscores.add;
    }
}

retrieveHighScores();

clear.addEventListener("click", function() {

    localStorage.clear();

    while (highscores.hasChildNodes()) {
        highscores.removeChild(highscores.firstChild);
    }

});