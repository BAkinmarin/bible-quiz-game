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
const timerDisplay = document.getElementById('timer-display');
const scoreText = document.getElementsByClassName('score-text');

//Initialise score and question counter, create empty array for questions and empty object for current question
let availableQuestions = [];
let questionsCounter = 0;
let score = 0;
let currentQuestion = {};
let acceptingAnswers = true;

//Define fixed variables for max score and max number of questions
const MAX_SCORE = 100;
const MAX_QUESTIONS = 5;

//Define timer variable
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
}

/**
 * The getNewQuestion function retrieves and displays questions and answer options at random from the array in questions.js file.
 * It also includes a timer feature inspired by Live Blogger - YouTube tutorial
 */
getNewQuestion = () => {

    //Code to initialise timer
    clearInterval(timerInterval);

    //Set timer value and innerText
    let timeLeft = 15;
    timerDisplay.innerText = `Time Left: 15s`;

    //Set timer to run every 1000 milliseconds (1 second)
    timerInterval = setInterval(() => {
        timerDisplay.innerText = `Time Left: ${timeLeft}s`;
        //Decrement seconds by 1
        timeLeft--;

        //Stop timer counting down when at 0 and move to next question
        if (timeLeft < 0) {
            clearInterval(timerInterval);
            getNewQuestion();
        }
    }, 1000);

    //Check if any questions available to display or if counter has reached max question limit set
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

//Check if user answer is correct or incorrect and apply defined styles


//Define nextQuestion function to allow user move to next question when ready
nextQuestion = () => {
    getNewQuestion();
}

//Define exitQuiz function to leave game and return to quiz rules page  
exitQuiz = () => {
    quizBox.style.display = "none";
    quizRules.style.display = "none";
    resultsBox.style.display = "block";
}

//Define restartQuiz function
restartQuiz = () => {
    startQuiz();
}