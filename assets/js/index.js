//Get all relevant elements from the DOM
const quizRules = document.getElementById('quiz-rules');
const quizBox = document.getElementById('quiz-box');
const startBtn = document.getElementById('start-btn');
const exitBtn = document.getElementsByClassName('exit-btn');
const questionSection = document.getElementsByClassName('question-section');

function startQuiz() {
    alert("Goodluck!");
    quizRules.style.display = "none";
    quizBox.style.display = "block";
}

function exitQuiz() {
    alert("You are about to exit game!");
    quizBox.style.display = "none";
    quizRules.style.display = "block";
}


