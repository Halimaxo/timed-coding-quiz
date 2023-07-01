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

var userInputs = document.querySelector(".userInput");

var submitBttn = document.querySelector(".submitButton");

var score = 0;

var highestScore = [];

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
  answerBox.innerHTML = "";
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
  if (
    answer === questions[globalIndex].Correct &&
    globalIndex <= questions.length
  ) {
    console.log("correct");
    score += 5;
  }
  globalIndex++;
  if (globalIndex < questions.length) {
    displayQuestion(globalIndex);
  } else {
    console.log(globalIndex);
    console.log("quiz finished");
    questionBox.style.display = "none";
    finishedQuiz.style.display = "block";
    timeEl.style.display = "none";
  }
}

startBtn.addEventListener("click", function () {
  setTime();
  startBtn.style.display = "none";
  questionBox.style.display = "block";
  displayQuestion(globalIndex);
});

function submitForm() {
  var userInfo = {
    name: userInputs.value,
    score: score,
  };

  highestScore.push(userInfo);

  localStorage.setItem("high scores", JSON.stringify(highestScore));
  userInputs.value = "";
}

submitBttn.addEventListener("click", submitForm);
