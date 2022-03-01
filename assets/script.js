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