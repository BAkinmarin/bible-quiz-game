//Get all relevant elements from the DOM
const quizRules = document.getElementById('quiz-rules');
const quizBox = document.getElementById('quiz-box');
const resultsBox = document.getElementById('results-box');
const startBtn = document.getElementById('start-btn');
const exitBtn = document.getElementsByClassName('exit-btn');
const restartBtn = document.getElementsByClassName('restart-btn');
const hiddenVerse = document.getElementById('hidden-verse');
const question = document.getElementById('question');
const optionText = Array.from(document.getElementsByClassName('option-text'));
const questionsTracker = document.getElementById('questions-tracker');

//Initialise score and question counter, create empty array for questions and empty object for current question
let availableQuestions = [];
let questionsCounter = 0;
let score = 0;
let currentQuestion = {};
let acceptingAnswers = true;
//let clock = document.getElementById('clock');
//let timeLeft = parseInt(clock.innerText);

//Define fixed variables for max score and max number of questions
const MAX_SCORE = 100;
const MAX_QUESTIONS = 5;

/**
 * Functions defined throughout this project will be defined using 'Arrow Function' syntax to simplify code.
 * This idea was inspired by Brians Designs YouTube video tutorials.
 */

//Define startQuiz function to hide quiz rules, display quiz box and initialise score and questions counter
    startQuiz = () => {
    quizRules.style.display = "none";
    resultsBox.style.display = "none";
    quizBox.style.display = "block";
    hiddenVerse.style.display = "none";
    questionsCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

/**
 * The getNewQuestion function retrieves and displays questions and answer options at random from the array in questions.js file.
 */
    getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionsCounter >= MAX_QUESTIONS) {
        exitQuiz();
        quizBox.style.display = "none";
    }

    //Increment questionCounter and display current question to user in corresponding HTML element
    questionsCounter++;
    questionsTracker.innerText = `Question ${questionsCounter} of ${MAX_QUESTIONS}`;

    //Select question at random from question array in questions.js file and display in corresponding HTML element
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    //question.innerText = currentQuestion.question;
    question.innerText = `Question ${questionsCounter}: ${currentQuestion.question}`;
}

//Define exitQuiz function to leave game and return to quiz rules page
function exitQuiz() {
    //alert("You are about to exit game!");
    quizBox.style.display = "none";
    quizRules.style.display = "block";
    resultsBox.style.display = "none";
}