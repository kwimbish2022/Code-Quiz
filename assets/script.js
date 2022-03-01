// TODO: how to have correct/incorrect popup under question after click ?on html? //

// define-link buttons from html
const startBtn = document.getElementById('start-quiz');
const stringsBtn = document.getElementById('strings');
const booleansBtn = document.getElementById('booleans');
const alertsBtn = document.getElementById('alerts');
const numbersBtn = document.getElementById('numbers');
const quotesBtn = document.getElementById('quotes');
const curlyBtn = document.getElementById('curly');
const parenthesisBtn = document.getElementById('parenthesis');
const squareBtn = document.getElementById('square');
const numbstringBtn = document.getElementById('numbstring');
const otherBtn = document.getElementById('other');
const boolBtn = document.getElementById('bool');
const allBtn = document.getElementById('all');
const commasBtn = document.getElementById('commas');
const bracketsBtn = document.getElementById('brackets');
const quotes2Btn = document.getElementById('quotes2');
const parenthBtn = document.getElementById('parenth');
const javaBtn = document.getElementById('java');
const terminalBtn = document.getElementById('terminal');
const for1Btn = document.getElementById('for1');
const consoleBtn = document.getElementById('console');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const restartBtn = document.getElementById('restart');

// define questions for quiz
let currentQuestion = 0;
var score = 0;

let questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: [
      {option:"1. Strings",answer:false},
      {option:"2. Booleans",answer:false},
      {option:"3. Alerts",answer:true},
      {option:"4. Numbers",answer:false}      
    ]
  },
  {
    question: "The condition in an if/else statement is enclosed with ____",
    answers: [
      {option:"1. Quotes",answer:false},
      {option:"2. Curly Brackets",answer:false},
      {option:"3. Parenthesis",answer:true},
      {option:"4. Square Brackets",answer:false}      
    ]
  },
  {
    question: "Arrays in JavasScript can be used to store:",
    answers: [
      {option:"1. Numbers and Strings",answer:false},
      {option:"2. Other Arrays",answer:false},
      {option:"3. Booleans",answer:false},
      {option:"4. All of the above",answer:true}      
    ]
  },
  {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    answers: [
      {option:"1. Commas",answer:false},
      {option:"2. Curly Brackets",answer:false},
      {option:"3. Quotes",answer:true},
      {option:"4. Parenthesis",answer:false}      
    ]
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      {option:"1. JavaScript",answer:false},
      {option:"2. Terminal/Bash",answer:false},
      {option:"3. For Loops",answer:false},
      {option:"4. console.log",answer:true}      
    ]
  },
]

// add event listeners to buttons
startBtn.addEventListener('click',start-quiz);
stringsBtn.addEventListener('click',strings);
booleansBtn.addEventListener('click',booleans);
alertsBtn.addEventListener('click',alerts);
numbersBtn.addEventListener('click',numbers);
quotesBtn.addEventListener('click',quotes);
curlyBtn.addEventListener('click',curly);
parenthesisBtn.addEventListener('click',parenthesis);
squareBtn.addEventListener('click',square);
numbstringBtn.addEventListener('click',numbstring);
otherBtn.addEventListener('click',other);
boolBtn.addEventListener('click',bool);
allBtn.addEventListener('click',all);
commasBtn.addEventListener('click',commas);
bracketsBtn.addEventListener('click',brackets);
quotes2Btn.addEventListener('click',quotes2);
parenthBtn.addEventListener('click',parenth);
javaBtn.addEventListener('click',java);
terminalBtn.addEventListener('click',terminal);
for1Btn.addEventListener('click',for1);
consoleBtn.addEventListener('click',console);
prevBtn.addEventListener('click',prev);
nextBtn.addEventListener('click',next);
submitBtn.addEventListener('click',submit);
restartBtn.addEventListener('click',restart);

// create function to begin the quiz
function beginQuiz() {
  currentQuestion = 0;
  questionText.innerHTML = questions[currentQuestion].question;
  trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    let ano=0;
    if(questions[currentQuestion].answers[ano].answer){
      if(score<3){
        score++;
      }
    }
    userScore.innerHTML = score;
    if(currentQuestion<2){
      next();      
    }
  }
  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    let ano=1;
    if(questions[currentQuestion].answers[ano].answer){
      if(score<3){
        sccore++;
      }
    }
    userScore.innerHTML = score;
    if(currentQuestion<2){
      next();
    }
  }
  prevBtn.classList.add('hide');
}

beginQuiz();

// create function to restart-reset score
function restart(){
  currentQuestion = 0;
  prevBtn.classList.remove('hide');
  nextBtn.classList.remove('hide');
  submitBtn.classList.remove('hide');
  trueBtn.classList.remove('hide');
  falseBtn.classList.remove('hide');
  score = 0;
  userScore.innerHTML = score;
  beginQuiz();
}

// create function to go to next question

function next(){
  currentQuestion++;
  if(currentQuestion>=2){
    nextBtn.classList.add('hide');
    prevBtn.classList.remove('hide');
  }
  questionText.innerHTML = questions[currentQuestion].question;
  trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    let ano=0;
    if(questions[currentQuestion].answers[ano].answer){
      if(score<3){
        score++;
      }
    }
    userScore.innerHTML = score;
    if(currentQuestion<2){
      next();
    }
  }
  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    let ano=1;
    if(questions[currentQuestion].answers[ano].answer){
      if(score<3){
        score++;
      }
    }
    userScore.innerHTML = score;
    if(currentQuestion<2){
      next();
    }
  }
  prevBtn.classList.remove('hide');
}

var timerEl = document.getElementById('countdown');

// Timer that counts down from 60
function countdown() {
  var timeLeft = 60;
  
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}