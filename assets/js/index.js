//Get all relevant elements from the DOM
const quizRules = document.getElementById('quiz-rules');
const quizBox = document.getElementById('quiz-box');
const startBtn = document.getElementById('start-btn');
const exitBtn = document.getElementsByClassName('exit-btn');
const questionText = document.getElementById('question');
const optionText = Array.from(document.getElementsByClassName('option-text'));

//Initialise score and question counter, create empty array for questions and empty object for current question
let availableQuestions = [];
let questionCounter = 0;
let score = 0;
let currentQuestion = {};
let acceptingAnswers = true;

//Define fixed variables for max score and max number of questions
const MAX_SCORE = 100;
const MAX_QUESTIONS = 5;

//Define startQuiz function to hide quiz rules and display quiz box
function startQuiz() {
    alert("Goodluck!");
    quizRules.style.display = "none";
    quizBox.style.display = "block";
    score = 0;
    questionCounter= 0;
    startTimer(15);
    //Spread operator to get questions from array - seen on Coding Nepal YouTube Channel
    availableQuestions = [...questions];
    getNewQuestion();
}

/**
 * The getNewQuestion function checks the number of available questions and 
 */

//Define exitQuiz function to leave game and return to quiz rules page
function exitQuiz() {
    alert("You are about to exit game!");
    quizBox.style.display = "none";
    quizRules.style.display = "block";
}

//Retrieve and display questions and options values from array in questions.js file