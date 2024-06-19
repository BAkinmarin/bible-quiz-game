//Getting all relevant elements from the DOM
const quizRules = document.getElementById('quiz-rules');
const quizBox = document.getElementById('quiz-box');
const startBtn = document.getElementById('start-btn');
const exitBtn = document.getElementsByClassName('exit-btn');

function startQuiz() {
    alert("Goodluck!");
    document.getElementById('quiz-rules').style.display = "none";
    document.getElementById('quiz-box').style.display = "block";
}





