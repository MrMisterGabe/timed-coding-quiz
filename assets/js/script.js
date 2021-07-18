var quizPromptEl = document.querySelector("#quiz-prompt");
var buttonStartEl = document.querySelector("#button-start");
var buttonEl = document.querySelector("#answer");
var timerEl = document.querySelector("#time-remaining");
var questionEl = document.querySelector("#question-prompt");
var timer = 100
var questions = [
    {
        question: "How many Rings of Power were given to the Elves?",
        answers: [
            {text: "3", correct: true},
            {text: "7", correct: false},
            {text: "9", correct: false},
            {text: "1", correct: false}
        ]
    },
    {
        question: "What did Bilbo have to win in against Gollum",
        answers: [
            {text: "Tag", correct: false},
            {text: "Chess", correct: false},
            {text: "Rock, Paper, Scissors", correct: false},
            {text: "Riddles", correct: true}
        ]
    },
    {
        question: "What birthday was Bilbo celebrating in 'The Fellowship of the Ring'?",
        answers: [
            {text: "One Hundred and Eleventy", correct: true},
            {text: "One Hundred and Thirty", correct: false},
            {text: "Ninety-Nine", correct: false},
            {text: "One Hundredth and One", correct: false}
        ]
    },
    {
        question: "What was the name Aragorn was going by when he met the Hobbits?",
        answers: [
            {text: "Viggo", correct: false},
            {text: "Strider", correct: true},
            {text: "Rogue", correct: false},
            {text: "Ranger", correct: false}
        ]
    },
    {
        question: "What was the word needed to open the gate to enter Moria?",
        answers: [
            {text: "Sesame", correct: false},
            {text: "Please", correct: false},
            {text: "Friend", correct: true},
            {text: "Family", correct: false}
        ]
    }
]


var startQuiz = function() {
    // startTimer
    // begin questionPrompt
    buttonStartEl.className = "hide";
    quizPromptEl.className = "hide";
    questionEl.classList.remove("hide");
    buttonEl.classList.remove("hide");
    questionPrompt;
}

var questionPrompt = function() {
    questionEl.innerText = questions[i].question;
    buttonEl.innerText = questions[i].answers;

    questions++
}

// what happens when question is answered?
var answerQuestion = function() {
    // check if answer is correct or false
    for (var i = 0; i < questions.length; i++) {
        if (buttonEl === true) {
            timer = timer + 10;
            questionPrompt;
            questions++;
        } else {
            timer = timer - 10;
            questionPrompt;
            questions++;
        }
    }
    // if correct, move onto next question
    // if wrong, subtract time and move onto next question
    // if time = 0, end quiz
}

var endQuiz = function() {
    // place code to end quiz here
    // prompt user to enter name
    // display username and score
}

// function to go to highscores
var resultsQuiz = function() {
}

// Event Listener to run startQuiz function once buttonStartEl is clicked
buttonStartEl.addEventListener("click", startQuiz)

// make a for loop to cycle through questions using an array
// for (var i = 0; i < questions.length; i++) {
// }

