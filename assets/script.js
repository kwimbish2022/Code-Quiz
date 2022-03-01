// TODO: how to have correct/incorrect popup under question after click ?on html? //
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
const forBtn = document.getElementById('for');
const consoleBtn = document.getElementById('console');

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