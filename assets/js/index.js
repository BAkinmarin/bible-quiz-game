//Get all relevant elements from the DOM
const quizRules = document.getElementById('quiz-rules');
const quizBox = document.getElementById('quiz-box');
const resultsBox = document.getElementById('results-box');
const startBtn = document.getElementById('start-btn');
const exitBtn = document.getElementsByClassName('exit-btn');
const restartBtn = document.getElementsByClassName('restart-btn');
const question = document.getElementById('question');
const optionText = Array.from(document.getElementsByClassName('option-text'));
const questionTracker = document.getElementById('question-tracker');

//Initialise score and question counter, create empty array for questions and empty object for current question
let availableQuestions = [];
let questionCounter = 0;
let score = 0;
let currentQuestion = {};
let acceptingAnswers = true;
let clock = document.getElementById('clock');
let timeLeft = parseInt(clock.innerText);

//Define fixed variables for max score and max number of questions
const MAX_SCORE = 100;
const MAX_QUESTIONS = 5;

//Define startQuiz function to hide quiz rules and display quiz box
function startQuiz() {
    //alert("Goodluck!");
    quizRules.style.display = "none";
    quizBox.style.display = "block";
    score = 0;
    questionCounter = 0;
    startTimer(15);
    //Spread operator to get questions from array as seen on Brian's Design YouTube Channel
    availableQuestions = [...questions];
    getNewQuestion();
}

/**
 * The getNewQuestion function retrieves and displays questions and answer options at random from the array in questions.js file.
 * This function is defined using 'Arrow Function' syntax to simplify code.
 */
    getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionsCounter >= MAX_QUESTIONS) {
        exitQuiz();
        quizBox.style.display = "none";
    }

    //Pick question at random from question array in questions.js file
    questionCounter++;
    questionTracker.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
}

//Define exitQuiz function to leave game and return to quiz rules page
function exitQuiz() {
    //alert("You are about to exit game!");
    quizBox.style.display = "none";
    quizRules.style.display = "block";
    resultsBox.style.display = "none";
}