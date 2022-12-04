<<<<<<< HEAD
// DOM set up
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var time = document.querySelector("#time");
var questionTitle = document.querySelector("#question-title");
var questions = document.querySelector("#questions");
var choices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var submitButton = document.querySelector("#submit");
var feedback = document.querySelector("#feedback");

// var for Timer
var startTimer = false;
var timeCountdown = 60;
var wrongPenalty = 10;
var currentQuestion = 0;
var pointsScored = 0;
var pointsToAdd = 10;
var oneSecond = 1000;
var numberOfQuestions = questionBook.length;

// Set up function to start the quiz
function showQuestion(question) {
=======
// Create a code quiz that contains the following requirements:
var numberOfQuestions = listOfQuestions.length;
var currentQuestion = 0;
var pointsScored = 0;
var pointsToAdd = 10;

// Variables to get DOM elements needed
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var startScreen = document.querySelector("#start-screen");
var questions = document.querySelector("#questions");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var submitBtn = document.querySelector("#submit");
var feedback = document.querySelector("#feedback");

// * A start button that when clicked a timer starts and the first question appears.
var startButton = document.querySelector("#start");
var time = document.querySelector("#time");
var timerStarted = false;
var timeCountdown = 60;
var timePenalty = 10;

//===========//
// FUNCTIONS //
//===========//

// Logic to "feed" questions into the right area
function addQuestion(question) { // Add question text
>>>>>>> 9970b7c7e939a89c428bd22465a84de6d0c9d442
    questionTitle.textContent = question[0];

    //Clear previous question choices and show next question choices
    while (choices.hasChildNodes()) {
        choices.removeChild(choices.firstChild);
    }

    // Add list structure with possible answers
<<<<<<< HEAD
    var ul = document.createElement("ul");
=======
    var ulEl = document.createElement("ul");
>>>>>>> 9970b7c7e939a89c428bd22465a84de6d0c9d442
    var choicesArr = question[1];
    var rightChoice = question[2];

    for (var i = 0; i < choicesArr.length; i++) {
        var liEl = document.createElement("li");
        if (i === rightChoice) { // Right choice was selected
            liEl.setAttribute("data-right-answer", true);
        } else { // Wrong choice was selected
            liEl.setAttribute("data-right-answer", false);
        }
        // * Questions contain buttons for each answer.
        var btn = document.createElement("button");
        btn.textContent = (i + 1) + ". " + choicesArr[i];
        liEl.appendChild(btn);
<<<<<<< HEAD
        ul.appendChild(liEl);
        ul.add;
        choices.appendChild(ul);
    }
    choices.add;
}
startButton.addEventListener("click", function (event) {
    // Add questions to the page

    // Step 1. Hide start screen
    startScreen.setAttribute("class", "hide");
    // Step 2. Show questions
    questions.setAttribute("class", "show");
    showQuestion(questionBook[currentQuestion]);

    // Step 3. Start the timer
    if (!startTimer) {
        startTimer = true;
        var timeLeft = setInterval(function () {
            if (timeCountdown <= 0) { 
                endGame();
            } else {
                timeCountdown--;
            }
            time.textContent = timeCountdown;
        }, oneSecond)
    }
});

// Set up function to show questions

=======
        ulEl.appendChild(liEl);
        ulEl.add;
        choices.appendChild(ulEl);
    }
    choices.add;
}
>>>>>>> 9970b7c7e939a89c428bd22465a84de6d0c9d442

function endGame() { // * When the game ends, it should display their score and give the user the ability to save their initials and their score
    // Set timer to 0
    timeCountdown = 0;
    time.textContent = timeCountdown;
    // Pass the points scored to the respective place on the page
    finalScore.textContent = pointsScored;

    // Hide questions and show end screen
    questions.setAttribute("class", "hide");
    endScreen.setAttribute("class", "start");
<<<<<<< HEAD
=======

>>>>>>> 9970b7c7e939a89c428bd22465a84de6d0c9d442
}

//===========//
// LISTENERS //
//===========//

<<<<<<< HEAD

=======
startButton.addEventListener("click", function (event) {
    event.preventDefault();
    // Add questions to the page
    addQuestion(listOfQuestions[currentQuestion]);

    // Hide start screen and show questions
    startScreen.setAttribute("class", "hide");
    questions.setAttribute("class", "show");

    // Start the timer
    if (! timerStarted) {
        timerStarted = true;
        var myTimer = setInterval(function () {
            if (timeCountdown <= 0) { 
                // * The quiz should end when the timer reaches 0
                clearInterval(myTimer);
                endGame();
            } else {
                timeCountdown--;
            }
            time.textContent = timeCountdown;
        }, 1000)
    }
});
>>>>>>> 9970b7c7e939a89c428bd22465a84de6d0c9d442

// * When answer is clicked, the next question appears
// Put a listener for the questions area
questions.addEventListener("click", function (event) {
    var element = event.target;

    // If the clicked item is a button
    if (element.matches("button") === true) { 
        
        if (element.parentElement.getAttribute("data-right-answer") === "true") { // Get the parent li element and check if data-right-answer is true
            
            pointsScored = pointsScored + pointsToAdd; // If is, add to the points scored
            currentQuestion++; // Increment the number of questions answered

            // Provide feedback to right answer
            var audioRight = new Audio("./assets/sfx/correct.wav");
            audioRight.play();
            feedback.textContent = "Right!"
            
            if (currentQuestion === numberOfQuestions) { // * The quiz should end when all questions are answered.
                endGame(); 
            } else { // Add next question
<<<<<<< HEAD
                showQuestion(questionBook[currentQuestion]);
            }
        } else { 
            // * If the answer clicked was incorrect then subtract time from the clock
            timeCountdown = timeCountdown - wrongPenalty;
=======
                addQuestion(listOfQuestions[currentQuestion]);
            }
        } else { 
            // * If the answer clicked was incorrect then subtract time from the clock
            timeCountdown = timeCountdown - timePenalty;
>>>>>>> 9970b7c7e939a89c428bd22465a84de6d0c9d442

            // Provide feedback to wrong answer
            var audioWrong = new Audio("./assets/sfx/incorrect.wav");
            audioWrong.play();
            feedback.textContent = "Wrong!"
        }
        // Show feedback element
        feedback.setAttribute("class", "feedback");
    }
})

<<<<<<< HEAD
submitButton.addEventListener("click", function() {
=======
submitBtn.addEventListener("click", function() {
>>>>>>> 9970b7c7e939a89c428bd22465a84de6d0c9d442

    // Create array to hold the score and retrieve any eventual scores already stored in the localStorage
    var scoreArr = JSON.parse(localStorage.getItem('score')) || [];

    // Add the current score to the array
    scoreArr.push(document.querySelector("#scorename").value + " - " + pointsScored);

    //Get values from page and add them to localStorage
    localStorage.setItem("score", JSON.stringify(scoreArr));

});