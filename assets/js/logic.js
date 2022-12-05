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
var timeCountdown = 69; //😉, and you say "nice".
var wrongAnswerPenalty = 10;
var currentQuestion = 0;
var totalScore = 0;
var rightAnswerReward = 10;
var oneSecond = 1000;
var numberOfQuestions = questionBook.length;

// Set up audio feedback
var correctWav = new Audio("./assets/sfx/correct.wav");
var incorrectWav = new Audio("./assets/sfx/incorrect.wav");

// Set up function to start the quiz
function showQuestion(question) {
    questionTitle.textContent = question[0];

    // Clear previous question choices and show next question choices
    while (choices.hasChildNodes()) {
        choices.removeChild(choices.firstChild);
    }

    // Add list of answers choices for the questions
    var ul = document.createElement("ul");
    var answerChoices = question[1];
    var correctAnswer = question[2];

    for (var i = 0; i < answerChoices.length; i++) {
        var li = document.createElement("li");
        if (i === correctAnswer) {
            li.setAttribute("data-right-answer", true);
        } else {
            li.setAttribute("data-right-answer", false);
        }

    // Create buttons for each answer
    var answerButton = document.createElement("button");
    answerButton.textContent = answerChoices[i];
    choices.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(answerButton);
    }
}

startButton.addEventListener("click", function (event) {
    // Add questions to the page

    // Step 1. Hide start screen
    startScreen.setAttribute("class", "hide");
    
    // Step 2. Show questions from questionBook
    questions.setAttribute("class", "show");
    showQuestion(questionBook[currentQuestion]);

    // Step 3. Start the timer and start countdown
    if (!startTimer) {
        startTimer = true;
        var timeLeft = setInterval(function () {
            if (timeCountdown <= 0) { 
                endQuiz();
            } else {
                timeCountdown--;
            }
            time.textContent = timeCountdown;
        }, oneSecond)
    }
});

// Create listener for the quiz choices
questions.addEventListener("click", function (event) {
    var element = event.target;

    // Set up for if the user clicked an correct / wrong button
    if (element.matches("button") === true) { 
        feedback.setAttribute("class", "feedback");
        //Feedback that User choice is the correct choice, +10 points to score, play correctWav audio feedback
        if (element.parentElement.getAttribute("data-right-answer") === "true") {
            
            totalScore = totalScore + rightAnswerReward;
            currentQuestion++; 
            correctWav.play();
            feedback.textContent = "Correct! +10 Score!"
            setTimeout(function(){
                document.getElementById("feedback").innerHTML = '';
            }, oneSecond);
            
            if (currentQuestion === numberOfQuestions) { 
                endQuiz(); 
            } else {
                showQuestion(questionBook[currentQuestion]);
            }
        } else { 
        //Feedback that User choice is the wrong choice, -10 seconds to timer , play incorrectWav audio feedback
            timeCountdown = timeCountdown - wrongAnswerPenalty;
            incorrectWav.play();
            feedback.textContent = "Wrong! -10 Seconds."
            setTimeout(function(){
                document.getElementById("feedback").innerHTML = '';
            }, oneSecond);
        }
    }
})

// Show final score and let user save their name and score
function endQuiz() { 
    // Step 1. Hide questions
    questions.setAttribute("class", "hide");
    
    // Step 2.Show end screen
    endScreen.setAttribute("class", "start");

    // Step 3. Stop the timer by setting timer to 0
    timeCountdown = 0;
    time.textContent = timeCountdown;
    finalScore.textContent = totalScore;
}

submitButton.addEventListener("click", function() {
    // Create array to hold the score and retrieve any eventual scores already stored in the localStorage
    var scoreArr = JSON.parse(localStorage.getItem('score')) || [];

    // Add the current score to the array
    scoreArr.push(document.querySelector("#scorename").value + ": " + totalScore);

    //Get values from page and add them to localStorage
    localStorage.setItem("score", JSON.stringify(scoreArr));
});