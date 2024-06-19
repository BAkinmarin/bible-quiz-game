//Get all relevant elements from the DOM
const quizRules = document.getElementById('quiz-rules');
const quizBox = document.getElementById('quiz-box');
const startBtn = document.getElementById('start-btn');
const exitBtn = document.getElementsByClassName('exit-btn');
const questionSection = document.getElementsByClassName('question-section');

//Define startQuiz function to hide quiz rules and display quiz box
function startQuiz() {
    alert("Goodluck!");
    quizRules.style.display = "none";
    quizBox.style.display = "block";
}

//Define exitQuiz function to leave game and return to quiz rules page
function exitQuiz() {
    alert("You are about to exit game!");
    quizBox.style.display = "none";
    quizRules.style.display = "block";
}

//Get questions and options values from array in questions.js file and display in new span and div
function getQuestions(index) {
   questionSection = '<span>'+ questions[index].num + "." + questions[index].question +'</span>';
   answerSection = '<div class="options"><span>'+ questions[index].options[0] + '</span></div>' + '<div class="options"></div>'
}


