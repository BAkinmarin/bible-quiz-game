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
const scoreText = document.getElementById('score-text');
const finalScore = document.getElementById('final-score');
const correctAnswer = document.getElementById('correct-answer');

//Initialise score and question counter, create empty array for questions and empty object for current question
let availableQuestions = [];
let questionsCounter = 0;
let score = 0;
let currentQuestion = {};
let acceptingAnswers = false;

//Define fixed variables for max score and max number of questions
const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;

//Define timer variable
let timerInterval;

/**
 * Some functions defined using 'Arrow Function' syntax to simplify code.
 * This idea was inspired by Brian Design YouTube video tutorials.
 */

//Define startQuiz function to hide quiz rules, display quiz box and initialise score and questions counter
startQuiz = () => {
    quizRules.style.display = "none";
    resultsBox.style.display = "none";
    hiddenVerse.style.display = "none";
    correctAnswer.style.display = "none";
    quizBox.style.display = "block";
    questionsCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

/**
 * The getNewQuestion function retrieves and displays questions and answer options at random from the array in questions.js file.
 * It also includes a timer feature inspired by Live Blogger - YouTube tutorial
 */
getNewQuestion = () => {

    //Code to initialise timer
    clearInterval(timerInterval);

    //Ensure 'Correct Answer' and 'Hidden Verse' are hidden
    correctAnswer.style.display = "none";
    hiddenVerse.style.display = "none";

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
        //Assign number as dataset options defined in HTML file and display choice options
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    //Remove randomly displayed question from array and allow user to select answer
    availableQuestions.splice(questionsIndex, 1);
    acceptingAnswers = true;
};

/**
 * This function checks user answers by listening for a click event denoted as 'e'.
 * It then checks against answer defined in questions array and adds class from CSS if correct or incorrect.
 * Concept used here is inspired by my mentor's steer to James Quick - YouTube tutorial.
 */
choices.forEach((choice) => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

    acceptingAnswers = false;
    /* Set user selection as event*/
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];

    /* Apply appropriate class based on correct / incorrect answer */
    const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
    selectedChoice.classList.add(classToApply);

    //Use in-built JavaScript to set delay to removal of incorrect / correct class
    setTimeout ( () => {
        selectedChoice.classList.remove(classToApply);
        getNewQuestion();
    }, 5000);

    /* Look through questions array to select corresponding answer */
    if (currentQuestion.answer === 1) {
        correctAnswer.innerText =
        `Correct Answer: ${currentQuestion.choice1}`;
        hiddenVerse.innerText = 
        `Verse: ${currentQuestion.verse}`;
        finalScore.innerText = 
        `Your Final Score: ${score} / ${MAX_QUESTIONS}`;
    } else if (currentQuestion.answer === 2) {
        correctAnswer.innerText =
        `Correct Answer: ${currentQuestion.choice2}`;
        hiddenVerse.innerText = 
        `Verse: ${currentQuestion.verse}`;
        finalScore.innerText = 
        `Your Final Score: ${score} / ${MAX_QUESTIONS}`;
    } else if (currentQuestion.answer === 3) {
        correctAnswer.innerText =
        `Correct Answer: ${currentQuestion.choice3}`;
        hiddenVerse.innerText = 
        `Verse: ${currentQuestion.verse}`;
        finalScore.innerText = 
        `Your Final Score: ${score} / ${MAX_QUESTIONS}`;
    } else if (currentQuestion.answer === 4) {
        correctAnswer.innerText =
        `Correct Answer: ${currentQuestion.choice4}`;
        hiddenVerse.innerText = 
        `Verse: ${currentQuestion.verse}`;
        finalScore.innerText = 
        `Your Final Score: ${score} / ${MAX_QUESTIONS}`;
    }

    /* Call getNewQuestion Function while there are questions remaining in MAX_QUESTIONS array */
     if (classToApply == 'correct') {
        //Display 'Hidden Verse' in window alert
        let message = hiddenVerse.innerText;
        alert("Yes! That's right!" + "\n" + message);
        //Increment score
        score += SCORE_POINTS;
        scoreText.innerText = `Score: ${score}`;
     } else if (classToApply == 'incorrect') {
        //Display both 'Correct Answer' and 'Hidden Verse' in window alert
        let message = hiddenVerse.innerText;
        let feedback = correctAnswer.innerText;
        alert("Oh No! That's the wrong answer!" + "\n" + feedback + "\n" + message);
        score += 0;
     }
  });
});

//Define nextQuestion function to allow user move to next question when ready
nextQuestion = () => {
    getNewQuestion();
};

/**
 * This exitQuiz function qill throwout a window alert asking the user if they want to leave the game.
 * It will also inform the user that all progress will be lost.
 * If user agrees to continue, they will be redirected to game rules page.  
 */
exitQuiz = () => {
    //Check if user wants to exit game and lose all progress
    if (confirm("Are you sure you want to exit game? All progress will be lost!")) {
        return window.location.assign('index.html');
    } else {
        return;
    }
};

//Define restartQuiz function