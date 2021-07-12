var buttonWrongEl = document.querySelector("#wrong-answer");
var buttonCorrectEl = document.querySelector("#correct-answer");
var timerEl = document.querySelector("#time-remaining");
var timer = 60
// make a for loop to cycle through questions using an array
var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive]

var questionOne = ("How many Rings of Power were given to the Elves?")
// Three
var questionTwo = ("Who had 'The One Ring' before Bilbo?")
// Gollum
var questionThree = ("What birthday was Bilbo celebrating in 'The Fellowship of the Ring'?")
// One Hundred and Eleventy
var questionFour = ("What was the name Aragorn was going by when he met the Hobbits?")
// Strider
var questionFive = ("What was the word needed to open the gate to enter Moria?")
// Friend


var timerCountdown = function(){
    timer--;
      if (timer === 0){
          endQuiz;
      };
}

var startQuiz = function(){
    // place code to start quiz here
}

var startTimer = setInterval(timerCountdown, 1000);

var subtractTime = function() {
    timer = timer - 10;
}

var endQuiz = function() {
    // place code to end quiz here
}

buttonWrongEl.addEventListener("click", subtractTime);