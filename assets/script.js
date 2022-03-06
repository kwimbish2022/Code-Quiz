// define-link buttons from html
const start = document.getElementById("0");
const intro = document.getElementById("intro");
const questionsection = document.getElementById("questionsection");
const question = document.getElementById("question");
const btnOption1 = document.getElementById("1");
const btnOption2 = document.getElementById("2");
const btnOption3 = document.getElementById("3");
const btnOption4 = document.getElementById("4");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const result = document.getElementById("result");
const scoreDiv = document.getElementById("score");

// define questions for quiz
let questions = [
  {
    question: "Commonly used data types DO NOT include:",
    btnOption1 : "1. Strings",
    btnOption2 : "2. Booleans",
    btnOption3 : "3. Alerts",
    btnOption4 : "4. Numbers",
    correct : "3"   
  },
  {
    question: "The condition in an if/else statement is enclosed with ____",
    btnOption1 :"1. Quotes",
    btnOption2 :"2. Curly Brackets",
    btnOption3 :"3. Parenthesis",
    btnOption4 :"4. Square Brackets",
    correct : "3"     
  },
  {
    question: "Arrays in JavasScript can be used to store:",
    btnOption1 : "1. Numbers and Strings",
    btnOption2 : "2. Other Arrays",
    btnOption3 : "3. Booleans",
    btnOption4 : "4. All of the above",
    correct : "4"      
  },
  {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    btnOption1 : "1. Commas",
    btnOption2 : "2. Curly Brackets",
    btnOption3: "3. Quotes",
    btnOption4 : "4. Parenthesis",  
    correct : "3"    
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    btnOption1 : "1. JavaScript",
    btnOption2 : "2. Terminal/Bash",
    btnOption3 : "3. For Loops",
    btnOption4 : "4. console.log",
    correct : "4"      
  }
];

//  define variables
const lastQuestion = questions.length - 1;
let currentQuestion = 0;
let count = 90;
const questionTIME = 0; //10 seconds
let TIMER;
let score = 0;

// render question
function renderQuestion() {
  let q = questions[currentQuestion];
  
  question.innerHTML = "<p>"+ q.question +"</p>";
  btnOption1.innerHTML = q.btnOption1;
  btnOption2.innerHTML = q.btnOption2;
  btnOption3.innerHTML = q.btnOption3;
  btnOption4.innerHTML = q.btnOption4;
}

// create function to render timer and decrement for wrong answers
var renderCounter = function (){
  if(count >= questionTIME) {
    counter.innerHTML = count;
    count--;
  }else{
    count = 0;
    answerIsWrong();
    if(currentQuestion < lastQuestion){
      currentQuestion++;
      renderQuestion();
    }else{
      clearInterval(TIMER); 
    }
  }
};

// create function to begin the quiz
var startQuiz = function () {  
  renderQuestion();
  intro.classList.add("hidden");
  questionsection.classList.remove("hidden");
  TIMER = setInterval(renderCounter,1000);
}

// add event listeners to button
start.addEventListener('click',startQuiz);

//for progress to render
function renderResult(answerText) {
  result.innerHTML = answerText;
}

// for counter to render
function renderCounter(){
  if(count <= questionTIME) {
    counter.innerHTML = count;
    count++
  }else{
    count = 0;
    checkAnswer();
    if(currentQuestion < lastQuestion){
      currentQuestion++;
      renderQuestion();
    }else{
      clearInterval(TIMER);
    }
  }
}

function checkAnswer(answer) {
  if( answer == questions[currentQuestion].correct){
    // answer is correct
    renderResult("Correct");
  }else{
    //answer is wrong
    renderResult("Incorrect");
    count -= 10;
  }

  if(currentQuestion < lastQuestion){
    currentQuestion++;
    renderQuestion();
  }else{
    // end the quiz and show the score
    questionsection.classList.add("hidden");
    scoreDiv.classList.remove("hidden");
    score = count + 1;
    clearInterval(TIMER);
    scoreelement.innerHTML = "Your final score " + score;
    // checkHighScore(account.score);
  }
}

// highscore functions
