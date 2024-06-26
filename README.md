# Bible Quiz

![am I responsive screenshot]()

## A Bible Quiz based Website
> The Bible Quiz is an interactive and educative knowledge-based quiz game centered on the Bible.

> Questions are on topics from both the Old and New Testaments - with a focus on showcasing some of the weird and wonderful stories told in scripture.

> On loading the game, the user is shown a list of instructions to better understand the rules of the game and must then commence game mode by clicking on the 'Start' button.

> The user must play against a clock, and then select the correct answer from four options and is awarded 100 points for each correct answer.

#### - Designed and Developed by Bola Akinmarin

## **[Live site](https://bakinmarin.github.io/bible-quiz-game/)**

------------------------------------------------------------------

## **[Repository](https://github.com/BAkinmarin/bible-quiz-game/tree/main)**

------------------------------------------------------------------
  
## Table of contents

 1. [ UX ](#ux)
 2. [ Features ](#features)  
 3. [ Features Left to Implement ](#left)  
 4. [ Technology used ](#tech) 
 5. [ Testing ](#testing)  
 6. [ Bugs ](#bugs)  
 7. [ Deployment](#deployment)
 8. [ Credits](#credits)
 9. [ Content](#content)  
 10. [ Acknowledgements](#acknowledgements)  


## UX

<a name="ux"></a>
### Pre-project Planning

> For my project portfolio 2 I decided early on that I wanted to create a scripture based quiz game that would be interactive, educational and based on interesting stories. As a Christian, this theme is close to my heart and a means of creating awareness on how interesting and intriguing the Bible is.

> When deciding on the type of questions to include in the quiz, I went with both Old and New Testament, leaning heavily on the Old Testament to highlight some of the descriptions of people around in those times that led interesting lives or had distinguishing features.

> I also wanted to include a countdown timer to truly test the knowledge base of the user and a scoring system that told the user how many questions they got right. I also wanted to add in the educational piece by revealing the scripture from whence each question was inspired. 


# UX design

##### Favicon
I used a Bible emoji for the favicon as I felt this would be appropriate for the theme.

##### Color
I did not want to detract too much from the educative purpose of The Bible Quiz but I also wanted it to be engaging and interactive for the user so much so that they would be willing to play multiple times.

For this reason, I kept the color scheme clean and instead focused more on responsiveness and animating responses to user game activity.

##### Font
In keeping with a physical Bible - as well as most digital versions - I wanted to provide users with a clean interface and a clear legible font that would not impact on readability. This inspired the decision to go with Lato : sans-serif.

##### Emojis
In this project, and in keeping with the clean theme, I opted for the use of two emojis which are used in a modal display relative to if the user gets the question right or wrong.

##### Audio


## User Stories

### User
> As a user, I want to be able to play an interactive and educative game.
> As a user, I want to be able to learn about the Bible in a fun way.
> As a user, I want to be aware of the rules of the game before I play.
> As a user, I want to be rewarded for every right answers provided. 
> As a user, I want to be able to play without being interupted by advertisements.
> As a user, I want to be able to replay the game and beat my previous score.


## Wireframes

### Desktop & Mobile Wireframe
![Wireframe]()

## Features

<a name="features"></a>
### index.html

#### Welcome Page
![Welcome Page]()

#### Game Area
![Game Box]()

#### Game Rules
![Rules]()

Throughout the design process my initial approach was to have a landing page where the user would select their quiz type and be taken to the Quiz Dashboard.

However because this project was going to include Javascript I felt like I could manipulate the DOM to create a single page quiz game app which is what I have done.

By utilizing display properties effectively I was able to reduce the two / three page site down to one and create a seamless experience for my users.

 1. From page load the user will be presented with the welcome message, game choices and the rules modal button.
 2. Once they select a game the main page dashboard is hidden & the user is presented with a start game button and the rules again to go over.
 3. Once the user clicks start game button the quiz dashboard is then presented with questions, answers and a countdown clock.
 4. Once the final question has been answered, the end game modal will cover the screen and the quiz dashboard will be hidden. This endgame modal will display the users rank, their final score and show them the questions they were asked, the correct answer and their answer.

#### Pregame lobby
![Pre-Game Lobby]()

#### Quiz Dashboard
![Quiz Dashboard]()

#### Countdown Clock
> The countdown clock was an essential part of my pre-project planning. I wanted to make dynamic and it actually plays a big part in my quiz.

 - The countdown clock Starts when a question is presented to the user to display how long they have left to answer the question.
 - If the user does not answer in time the clock will state "Times Up" to the user briefly before moving on to the next question.
 - As the clock counts down it changes color.
	 - From 15 seconds to 10 seconds it is a nice safe Green Color
	 - From 10 seconds to 5 seconds it is a warning orange / amber color
	 - From 5 seconds to 1 second it is a danger red color and includes a shaking motion to add urgency to the user
	 - When it reaches 0 the clock then changes to "Times Up" and either pulls the next question or calls the end game function which brings up the end game modal.
 - The clock also is part of the scoring system in the quiz games. If your answer is correct we check and see how much time you have left and it is factored into your score. 
	 - If you have over 10 seconds left you score 100 points.
	 - If you have between 6-10 seconds left you score 75 points.
	 - If you have less than 10 seconds left you score 50 points.
	 - If you answer incorrectly or if you run out of time then you score 0 points.

#### End Game Function

![End Game]()
The end game function is called when there are either no questions left in the list or if the user reaches the max-question count. 
Once this happens the endGame function calls and it displays a final score modal that presents users with their score, ranking and a little message depending on how they did.
The user can also see a record of the questions, images, correct answer and their answer so they can learn and get feedback from their experience.


<a name="left"></a>
# Features Left to implement
> Add a high score tracker for the user so they know what score to beat each time they play the game.

> Option for user to input username to scoreboard for future reference and comparison with other users.

> Audio feedback corresponding to user interaction for an enhanced user experience.

> High Scores saved in local storage for users to refer to previous user scores.

### Additional ideas
> Create and add option for user to choose quiz game based on one of the 66 Books of The Bible.

> Separate Sections for Old and New Testament, giving user the option to play quiz game based on preference. 

> Create and add Parable of Jesus Section, giving user the option to play quiz based on this otpion.

> Create and add Creation Story Section, giving user the option to play quiz based on this option.

> Create and add Easy, Medium and Hard levels, giving user the option to select difficulty. 

> Create and add a Rewards Section where users are awarded tokens named after the Fruits of The Holy Spirit - based on number of points collected as they move through the 66 Books of THe Bible Quiz option.

<a name="tech"></a>
# Technology Used
### HTML
> The backbone of website design and function; used to provide structure to the website.

### CSS
> Used to style the layout of each web page.

### Javascript
> Used to make the site dynamic and to present, select and store the users answers and then provide a score based on the time it took them to answer.

### Font Awesome
> Source of all the icons used in this project.

### Google Fonts
> Used to define the fonts used in the project. Also used to compare and pair font-styles.

### Favicon.io
> Used to generate a favicon for the existing logo.

<a name="testing"></a>
# Testing


### Testing Phase

#### Manual Testing

| Test | Result |
|--|--|
|When flags game is selected correct game runs| Pass |
|When random facts game is selected correct game runs|Pass|
|When the rules button is clicked the modal pops up|Pass|
|The rules modal closes when user clicks the close button|Pass|
|The rules modal closes when the user clicks outside of the modal|Pass|
|When game starts question, answers and images load correctly|Pass|
|When game starts clock begins countdown|Pass|
|When user selects answer, new question and answers are pulled|Pass|
|When new question is called the clock restarts|Pass|
|The correct answers appear with the correct questions|Pass|
|The correct image appears for the correct question|Pass|
|When the user answers a question the counter increases|Pass|
|When the user answers the final question the game directs to the end game modal|Pass|
|The end game modal displays the users final score & rank|Pass|
|The end game modal displays the questions and answers the user provided and correct answer|Pass|
|When the user clicks Play Again the page reloads back to the start|Pass|

### User testing

#### Peer Code Review
> Project submitted for peer code review on Code Institute among other students.

> Only noticable issue reported was a typo on one of the answers in the Quiz.

#### User tests

> 3 users were asked to attempt the following and their scores were averaged to give the below scores
 
|Test|Result  |
|--|--|
|Read the rules to understand the game |100%|
|Check time is appropriate for user to read correct answer description |100%|
|Check user can navigate to next question when previous question has been answered |100%|
|Check user can exit game as and when they want |100%|
|Provide your rank and score to me after completing quiz |100%|

## Google Lighthouse Testing

### Desktop
![Lighthouse testing index.html]()

### Mobile
![Lighthouse testing index.html]()

## HTML W3 Validation

### index.html
![W3 Validation index.html]()
#### Result: No Errors

### CSS Validation
![W3 Validation index.html]()
#### Result: No Errors

### JS Hint Checker
![JS hint Validator]()
#### Result: No Warnings

<a name="bugs"></a>
## **Bugs**

> Unable to get user selection to turn green when correct and red when incorrect. **Fixed**

> Unable to display 'Hidden Verse' description to highlight the corresponding scripture which inspired question. **Fixed**

> Unable to get Next Question Function to work properly. **Excluded**

> Unable to get user selection to turn green / red relative to answer prior to window alert. **Fixed**

> Unable to get High Scores to save in local storage.

<a name="deployment"></a>
## Deployment

> To deploy the project I followed these steps starting from the main project repository linked above.

 1. Clicked on `Settings` on the navigation menu in the repository
 2. I then selected the `Pages` menu on the side bar.
 3. In the first dropdown menu labeled `Source` I selected the branch of the name `main` from the dropdown.
 4. In the next dropdown labeled `/root` I left as the default option.
 5. Selected Save.
 
> I then received a notification from GitHub that my project is being deployed and after about 2 minutes and a couple of refreshes of the page it was ready and live.

<a name="credits"></a>
## Credits

### [Brian Design](https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=352s) - YouTube
> Step-by-step tutorial on creating a quiz using HTML, CSS and JavaScript. Inspired the use of Arrow syntax in some function definitions.

### [PRAROZ](https://www.youtube.com/watch?v=1ydfKDwsYbU) - YouTube
> Step-by-step tutorial on creating a quiz using HTML, CSS and JavaScript. 

> Particularly useful with understanding the concept of working with countdown timers.

### [James Q Quick](https://www.youtube.com/watch?v=rFWbAj40JrQ&list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF) - YouTube
> Step-by-step tutorial used for inspiration on checking user answers.

### [LIVE BLOGGER](https://www.youtube.com/watch?v=J3VxEGcc7Zw) - YouTube
> Another step-by-step tutorial on creating a quiz using HTML, CSS and JavaScript.

### [Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k) - YouTube
> Detailed step-by-step tutorial on creating a quiz game using HTML, CSS and JavaScript.

<a name="content"></a>
## Content & Resources

### NotSoBoringBible.com
> Used for quiz questions included in project.

### w3 schools
> Used when researching how to use and style a modal.

### Stack Overflow
> Used to query issues relating programming issues relating to injecting html with JS.

### Youtube.com
> Channels like **Coding Nepal**, **Brian Design** and **James Q Quick** helped understand different JS concepts throughout this project.

> Also helped broaden my understanding of manipulating the DOM more effetively.

### Code Institute
> Project created in line with course content, walkthrough project and and within project 2 scope.

<a name="acknowlegements"></a>
## Acknowledgements

### Alan Bushell
> My mentor who helped keep me on track when overthinking things and provided positive reinforcement where applicable.