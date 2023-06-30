var timeEl = document.querySelector(".time");

var mainEl = document.getElementById("main");

var startBtn = document.querySelector(".start-button");

var secondsLeft = 30;

var pageOne = document.querySelector(".startContainer");

var questionBox = document.querySelector(".questionContainer");

var answerBox = document.querySelector(".answersContainer");

var finishedQuiz = document.querySelector(".endContainer");

var questionText = document.querySelector(".questionText");

var globalIndex = 0;

questionBox.style.display = "none";

finishedQuiz.style.display = "none";

var questions = [
  {
    Text: "What is your favorite color?",
    Choices: ["red", "blue", "lilac", "pink"],
    Correct: "lilac",
  },
  {
    Text: "What is the best state?",
    Choices: ["Illinois", "Texas", "California", "New York"],
    Correct: "Illinois",
  },
  {
    Text: "What is the best food?",
    Choices: ["Korean", "Iraqi", "Bengali", "Yemeni"],
    Correct: "Bengali",
  },
];

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till quiz finishes.";

    if (secondsLeft < 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";
}

function displayQuestion(i) {
  questionText.textContent = questions[i].Text;
  questions[i].Choices.forEach(function (choice) {
    var btn = document.createElement("button");
    btn.textContent = choice;
    answerBox.appendChild(btn);
    btn.addEventListener("click", function () {
      verifyAnswer(btn.textContent);
    });
  });
}
function verifyAnswer(answer) {
  if (answer === questions[globalIndex].Correct) {
    console.log("correct");
  }
  if (globalIndex !== questions.length) {
    globalIndex++;
    displayQuestion(globalIndex);
  }
}

startBtn.addEventListener("click", function () {
  setTime();
  startBtn.style.display = "none";
  questionBox.style.display = "block";
  displayQuestion(globalIndex);
});
