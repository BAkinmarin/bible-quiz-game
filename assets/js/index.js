//Get all relevant elements from the DOM
const quizRules = document.getElementById('quiz-rules');
const quizBox = document.getElementById('quiz-box');
const resultsBox = document.getElementById('results-box');
const startBtn = document.getElementById('start-btn');
const exitBtn = document.getElementsByClassName('exit-btn');
const restartBtn = document.getElementsByClassName('restart-btn');
const nextBtn = document.getElementsByClassName('next-btn');
const hiddenVerse = document.getElementById('hidden-verse');
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionsTracker = document.getElementById('questions-tracker');
const clock = document.getElementById('clock');

//Initialise score and question counter, create empty array for questions and empty object for current question
let availableQuestions = [];
let questionsCounter = 0;
let score = 0;
let currentQuestion = {};
let acceptingAnswers = true;

//Define fixed variables for max score and max number of questions
const MAX_SCORE = 100;
const MAX_QUESTIONS = 5;

//Define timer variable - inspired by Live Blogger - YouTube tutorial
let timerInterval;

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
    startTimer(15);
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

    //Select question at random from questions array in questions.js file and display in corresponding HTML element
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    //Select answer options from questions array in questions.js file and display in corresponding HTML element
    choices.forEach(choice => {
        //Assign number as dataset options defined in HTML file
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    //Remove randomly displayed question from array and allow user to select answer
    availableQuestions.splice(questionsIndex, 1);
    acceptingAnswers = true;
}

/**
 * This is the countdown timer function.
 * It is passed a parameter of an integer which is the countdown value applied.
 */
startTimer = (time) => {

}

//Define exitQuiz function to leave game and return to quiz rules page  
exitQuiz = () => {
    quizBox.style.display = "none";
    quizRules.style.display = "none";
    resultsBox.style.display = "block";
}

//Define restartQuiz function
restartQuiz = () => {
    quizBox.style.display = "none";
    quizRules.style.display = "block";
    resultsBox.style.display = "none";
    startQuiz();
}