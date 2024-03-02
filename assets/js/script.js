var score = 0;
var questionContainer = 0;
var container = document.querySelector("#questionContainer");
var quizContent = document.querySelector("#insideContainer");
var questionsTitle = document.querySelector("#questionsTitle")
var timer = document.querySelector("#quiTimer");



var questions = [
  {
    title: "What does HTML stand for?",
    choices: ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markuo Language'],
    answer: 'Hyper Text Markup Language'
  },

  {
    title: "What does HTML stand for?",
    choices: ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markuo Language'],
    answer: 'Hyper Text Markup Language'
  },

  {
    title: " What does HTML stand for?",
    choices: ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markuo Language'],
    answer: 'Hyper Text Markup Language'
  },

  {
    title: " What does HTML stand for?",
    choices: ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markuo Language'],
    answer: 'Hyper Text Markup Language'
  }

];

const quizContenttimer = document.getElementById("quiz-timer");
const btnStart = document.getElementById("btn-start");

let count = 0;
var timerEl = document.getElementById("quiz-timer")
var timeRemaining = questions.length * 15;
var questionIndex = 0

//app starts here
btnStart.addEventListener("click',startQuiz ")

//clock 
function startTimer() {
  // countdownElement.textContent = timeRemaining;
  // const timeInterval = setInterval(function () {
  timeRemaining--;
  timerEl.textContent = timeRemaining;
  // Acceptance Criteria: When all questions are answered or the 
}
//starting the quiz
function startQuiz() {
  var intro = document.getElementById("intro-div");
  intro.setAttribute("class", "hide");
  var questionContainer = document.getElementById("question-container");

  questionContainer.removeAttribute("class");

  timer = setInterval(startTimer, 1000);
  timerEl.textContent = timeRemaining;


  getQuestion()

}


/*const el = document.getElementById('container');*/
const hiddenContainer = document.getElementById('hidden-question-answers');
var questionsEl = document.getElementById("questions")

function getQuestion() {
  questionsEl.textContent = questions[questionIndex].question
  hiddenContainer.innerHTML = "";
  for (let i = 0; i < questions[questionIndex].choices.length; i++) {

    const choice = questions[questionIndex].choices[i];
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class", "choice");
    choiceBtn.setAttribute("value", choice);
    choiceBtn.textContent = i + 1 + ". " + choice
    hiddenContainer.appendChild(choiceBtn)

  }

}

function answerClick(event)