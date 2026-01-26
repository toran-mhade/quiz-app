const main = document.querySelector("main");

//home page html elements
const resumeButton = document.querySelector(".resume-button");
const startButton = document.querySelector(".start-button");
const startButtonText = document.querySelector(".start-button-text");
const highestScoreText = document.querySelector(".highest-score-text");
const buttonsContainer = document.querySelector(".buttons-container");

//quiz page html elements
const nextButton = document.querySelector(".next-button");
const currentQuestionNumberSpan = document.querySelector(
  ".current-question-number"
);
const questionText = document.querySelector(".question-text");
const option1Text = document.querySelector("#option1-text");
const option2Text = document.querySelector("#option2-text");
const option3Text = document.querySelector("#option3-text");
const option4Text = document.querySelector("#option4-text");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const timer = document.querySelector(".timer");
const body = document.querySelector("body");
const answers = document.querySelectorAll(".answer-container");
const volumeIcon = document.querySelector(".volume-icon");

// result page html elements
const correctPointerWhole = document.querySelector(
  ".correct-pointer-setup-container"
);
const wrongPointerWhole = document.querySelector(
  ".wrong-pointer-setup-container"
);
const correctPercentageText = document.querySelector(
  ".correct-percentage-text"
);
const wrongPercentageText = document.querySelector(".wrong-percentage-text");
const lineGraphCorrectBar = document.querySelector(
  ".linear-graph-fg-green-div"
);
const resultMotivationalQuote = document.querySelector(
  ".result-motivational-quote"
);
const retryButton = document.querySelector(".retry-button");
const homeButton = document.querySelector(".home-button");
const marksText = document.querySelector(".marks-text");

const correctSoundEFfect = new Audio("audios/correct.mp3");
const wrongSoundEffect = new Audio("audios/wrong.mp3");

const shareScoreIcons = document.querySelectorAll(".share-score-icon");

//basic functionalities
let defaultQuizzes = [
  {
    quizName: "Java Script",
    quizQuestions: [
      {
        questionText:
          "Which keyword is used to declare a variable in JavaScript?",
        answers: ["var", "int", "let", "both var and let"],
        correctAnswerIndex: 3,
        selectedIndex: -1,
        seconds: 30,
      },
      {
        questionText: "Which of the following is NOT a JavaScript data type?",
        answers: ["Number", "String", "Boolean", "Float"],
        correctAnswerIndex: 3,
        selectedIndex: -1,
        seconds: 30,
      },
      {
        questionText:
          "What symbol is used for single-line comments in JavaScript?",
        answers: ["<!-- -->", "#", "//", "/* */"],
        correctAnswerIndex: 2,
        selectedIndex: -1,
        seconds: 30,
      },
      {
        questionText: 'How do you write "Hello World" to the console?',
        answers: [
          'console.log("Hello World")',
          'print("Hello World")',
          'echo("Hello World")',
          'log("Hello World")',
        ],
        correctAnswerIndex: 0,
        selectedIndex: -1,
        seconds: 30,
      },
      {
        questionText: "Which operator is used to assign a value to a variable?",
        answers: ["==", "=", "===", ":="],
        correctAnswerIndex: 1,
        selectedIndex: -1,
        seconds: 30,
      },
      {
        questionText: "Which of the following is a strict equality operator?",
        answers: ["==", "=", "===", "!="],
        correctAnswerIndex: 2,
        selectedIndex: -1,
        seconds: 30,
      },
      {
        questionText: 'What does "typeof" operator do?',
        answers: [
          "Changes a variable's type",
          "Returns the data type of a variable",
          "Declares a type",
          "Compares two values",
        ],
        correctAnswerIndex: 1,
        selectedIndex: -1,
        seconds: 30,
      },
      {
        questionText:
          "Which of the following is used to create a function in JavaScript?",
        answers: [
          "function = myFunc()",
          "function myFunc()",
          "def myFunc()",
          "void myFunc()",
        ],
        correctAnswerIndex: 1,
        selectedIndex: -1,
        seconds: 30,
      },
      {
        questionText: "How can you add a comment block in JavaScript?",
        answers: [
          "// this is a comment",
          "/* this is a comment */",
          "<!-- comment -->",
          "# comment",
        ],
        correctAnswerIndex: 1,
        selectedIndex: -1,
        seconds: 30,
      },
      {
        questionText:
          "Which method is used to convert JSON to a JavaScript object?",
        answers: [
          "JSON.stringify()",
          "JSON.parse()",
          "parse.JSON()",
          "JSON.toObject()",
        ],
        correctAnswerIndex: 1,
        selectedIndex: -1,
        seconds: 30,
      },
      {
        questionText:
          "Which loop runs at least once even if the condition is false?",
        answers: ["for", "while", "do...while", "foreach"],
        correctAnswerIndex: 2,
        selectedIndex: -1,
        seconds: 30,
      },
      {
        questionText: "Which method adds an item to the end of an array?",
        answers: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswerIndex: 0,
        selectedIndex: -1,
        seconds: 30,
      },
      {
        questionText: "What will `typeof null` return?",
        answers: ['"null"', '"undefined"', '"object"', '"false"'],
        correctAnswerIndex: 2,
        selectedIndex: -1,
        seconds: 30,
      },
      {
        questionText: "How do you round the number 4.7 down to 4?",
        answers: [
          "Math.floor(4.7)",
          "Math.round(4.7)",
          "Math.ceil(4.7)",
          "Math.trunc(4.7)",
        ],
        correctAnswerIndex: 0,
        selectedIndex: -1,
        seconds: 30,
      },
      {
        questionText:
          "Which method joins all elements of an array into a string?",
        answers: ["join()", "concat()", "combine()", "merge()"],
        correctAnswerIndex: 0,
        selectedIndex: -1,
        seconds: 30,
      },
      {
        questionText: "Which of these is not a loop in JavaScript?",
        answers: ["for", "foreach", "loop", "while"],
        correctAnswerIndex: 2,
        selectedIndex: -1,
        seconds: 30,
      },
      {
        questionText: "Which symbol is used for OR operation?",
        answers: ["&&", "||", "==", "??"],
        correctAnswerIndex: 1,
        selectedIndex: -1,
        seconds: 30,
      },
      {
        questionText: "How do you declare a constant in JavaScript?",
        answers: ["let x = 5;", "const x = 5;", "var x = 5;", "#x = 5"],
        correctAnswerIndex: 1,
        selectedIndex: -1,
        seconds: 30,
      },
      {
        questionText: 'What will `"2" + 2` evaluate to?',
        answers: ["4", "22", "NaN", "Error"],
        correctAnswerIndex: 1,
        selectedIndex: -1,
        seconds: 30,
      },
      {
        questionText: "Which object is used for date and time in JavaScript?",
        answers: ["Clock", "Time", "Date", "Calendar"],
        correctAnswerIndex: 2,
        selectedIndex: -1,
        seconds: 30,
      },
      {
        questionText:
          "What is the default value of a declared but uninitialized variable?",
        answers: ["null", "0", "undefined", "false"],
        correctAnswerIndex: 2,
        selectedIndex: -1,
        seconds: 30,
      },
      {
        questionText: "Which built-in method returns the length of a string?",
        answers: ["getLength()", "len()", "length()", "length"],
        correctAnswerIndex: 3,
        selectedIndex: -1,
        seconds: 30,
      },
      {
        questionText:
          "How can you convert a string to an integer in JavaScript?",
        answers: ["parseInt()", "int()", "toInt()", "convertToInt()"],
        correctAnswerIndex: 0,
        selectedIndex: -1,
        seconds: 30,
      },
      {
        questionText: "Which function is used to delay code execution?",
        answers: ["setInterval()", "setTimeout()", "delay()", "pause()"],
        correctAnswerIndex: 1,
        selectedIndex: -1,
        seconds: 30,
      },
      {
        questionText:
          "Which object allows you to interact with the webpage DOM?",
        answers: ["console", "window", "document", "html"],
        correctAnswerIndex: 2,
        selectedIndex: -1,
        seconds: 30,
      },
    ],
  },
];

let isMuted = false;
let correctPercentage = 0;
let wrongPercentage = 0;

let isSelected = false;
let quizzes = JSON.parse(localStorage.getItem("quizzes")) || defaultQuizzes;
let quizIndex = 0;
let lastTimeQuestionIndex = quizzes[quizIndex].quizQuestions.findIndex(
  (question) => question.selectedIndex < 0
);
let currentQuestionIndex = lastTimeQuestionIndex;
let currentQuestion = quizzes[quizIndex].quizQuestions[currentQuestionIndex];
let totalQuestions = quizzes[quizIndex].quizQuestions.length;
let highestScore = localStorage.getItem(`highestScoreIn${quizIndex}`) || 0;
let highestPercentage =
  localStorage.getItem(`highestPercentageInQuiz${quizIndex}`) || 0;
let highestMarks =
  localStorage.getItem(`highestMarksInQuiz${quizIndex}`) || "0/0";

let correctPointerPlacementAdjustment = -42;
let wrongPointerPlacementAdjustment = -42;

let userWasHalfWay =
  quizzes[quizIndex].quizQuestions.some((question) => {
    return [-1].includes(question.selectedIndex);
  }) &&
  quizzes[quizIndex].quizQuestions.some((question) => {
    return [0, 1, 2, 3].includes(question.selectedIndex);
  });
if (userWasHalfWay) {
  buttonsContainer.classList.add("user-was-half-way");
} else {
  buttonsContainer.classList.remove("user-was-half-way");
}
//homepage functionalities
let lastScore = quizzes[quizIndex].quizQuestions.filter((question) => {
  return question.selectedIndex === question.correctAnswerIndex;
}).length;
if (lastTimeQuestionIndex === -1) {
  resumeButton.classList.add("hidden");
  startButtonText.innerText = "Restart >>>";
} else {
  resumeButton.classList.remove("hidden");
}
highestMarks = localStorage.getItem(`highestMarksInQuiz${quizIndex}`);
console.log(`Highest Score is ${highestScore}`);
if (highestMarks) {
  highestScoreText.innerText = `Highest Score: ${highestMarks}`;
} else highestScoreText.innerText = ``;
resumeButton.addEventListener("click", () => {
  setUpQuestionOnPage(currentQuestionIndex);
  main.classList.remove("home");
  main.classList.add("quiz");
  main.classList.remove("result");
});

startButton.addEventListener("click", startQuizFromScratch);
volumeIcon.addEventListener("click", toggleVolume);

homeButton.addEventListener("click", () => {
  main.classList.remove("result");
  main.classList.add("home");
  main.classList.remove("quiz");
});
retryButton.addEventListener("click", startQuizFromScratch);

function startQuizFromScratch() {
  isSelected = false;
  quizzes = defaultQuizzes;
  quizIndex = 0;
  lastTimeQuestionIndex = 0;
  currentQuestionIndex = 0;
  currentQuestion = quizzes[quizIndex].quizQuestions[0];
  totalQuestions = quizzes[quizIndex].quizQuestions.length;
  localStorage.setItem("quizzes", JSON.stringify(quizzes));
  setUpQuestionOnPage(currentQuestionIndex);
  main.classList.remove("home");
  main.classList.add("quiz");
  main.classList.remove("result");
}

addEventListenersToAnswers();
// if( lastTimeQuestionIndex === -1){
//     gotoHomePage()
// } else {
//     setUpQuestionOnPage(currentQuestionIndex)
// }

function gotoHomePage() {
  alert("quiz already completed");
}

function setUpQuestionOnPage(questionIndex) {
  if (questionIndex < quizzes[quizIndex].quizQuestions.length) {
    answers.forEach((answer) => {
      answer.classList.add("clickable");
    });
    nextButton.removeEventListener("click", nextButtonHandler);
    currentQuestionNumberSpan.innerText = `${
      questionIndex + 1
    }/${totalQuestions}`;
    questionText.innerText = currentQuestion.questionText;
    option1Text.innerText = currentQuestion.answers[0];
    option2Text.innerText = currentQuestion.answers[1];
    option3Text.innerText = currentQuestion.answers[2];
    option4Text.innerText = currentQuestion.answers[3];
    startTimerFor(currentQuestion);
  } else displayResult();
}

function startTimerFor(question) {
  body.classList.remove("half-time-passed");
  body.classList.remove("time-about-to-end");
  body.classList.remove("result-being-displayed");
  let secondsRemaining = Math.round(question.seconds);
  const countdown = setInterval(() => {
    secondsRemaining--;
    timer.innerText = String(secondsRemaining).padStart(2, "0");
    // console.log(secondsRemaining);
    if (secondsRemaining == Math.ceil(question.seconds / 2)) {
      body.classList.add("half-time-passed");
    }
    if (secondsRemaining == 5) {
      body.classList.remove("half-time-passed");
      body.classList.add("time-about-to-end");
      body.classList.remove("result-being-displayed");
    }
    if (secondsRemaining == 0) {
      clearInterval(countdown);
      console.log("Timer Stopped");
      markSelectionByUser(4);
    }
    if (isSelected) {
      clearInterval(countdown);
    }
  }, 1000);
}

function addEventListenersToAnswers() {
  answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
      if (!isSelected) {
        markSelectionByUser(
          answer === option1
            ? 0
            : answer === option2
            ? 1
            : answer === option3
            ? 2
            : answer === option4
            ? 3
            : -1
        );
      }
    });
  });
}

shareScoreIcons.forEach((shareScoreIcon) => {
  shareScoreIcon.addEventListener("click", () => {
    alert("Learning to apply this functionality");
  });
});

function markSelectionByUser(selectedAnswerIndex) {
  let currentCorrectIndex =
    quizzes[quizIndex].quizQuestions[currentQuestionIndex].correctAnswerIndex;
  if (selectedAnswerIndex >= 0) {
    if (!isMuted) {
      if (selectedAnswerIndex == currentCorrectIndex) {
        correctSoundEFfect.play();
      } else {
        wrongSoundEffect.play();
      }
    }

    console.log(`user selected ${selectedAnswerIndex}`);
    quizzes[quizIndex].quizQuestions[currentQuestionIndex].selectedIndex =
      selectedAnswerIndex;
    if ([0, 1, 2, 3].includes(selectedAnswerIndex)) {
      answers[selectedAnswerIndex].classList.add("selected");
      answers[
        quizzes[quizIndex].quizQuestions[currentQuestionIndex]
          .correctAnswerIndex
      ].classList.add("correct");
    } else {
      answers[
        quizzes[quizIndex].quizQuestions[currentQuestionIndex]
          .correctAnswerIndex
      ].classList.add("correct-unsolved");
    }
    nextButton.addEventListener("click", nextButtonHandler);
    isSelected = true;
    lockCurrentQuestionAndResetForNextQuestion();
  }
}

function lockCurrentQuestionAndResetForNextQuestion() {
  answers.forEach((answer) => {
    answer.classList.remove("clickable");
  });
  localStorage.setItem("quizzes", JSON.stringify(quizzes));
}

function nextButtonHandler(event) {
  if (currentQuestionIndex < quizzes[quizIndex].quizQuestions.length) {
    currentQuestion = quizzes[quizIndex].quizQuestions[++currentQuestionIndex];
    isSelected = false;
    answers.forEach((answer) => {
      answer.classList.remove("selected");
      answer.classList.remove("correct-unsolved");
      answer.classList.remove("correct");
    });
    console.log(
      `Page for question number ${currentQuestionIndex + 1} being set`
    );
    setUpQuestionOnPage(currentQuestionIndex);
  } else {
    alert("something wrong");
  }
}

function displayResult() {
  lastScore = quizzes[quizIndex].quizQuestions.filter((question) => {
    return question.selectedIndex === question.correctAnswerIndex;
  }).length;

  correctPercentage = (lastScore / totalQuestions) * 100;
  wrongPercentage = 100 - correctPercentage;

  if (correctPercentage > highestPercentage) {
    highestPercentage = correctPercentage;
    highestMarks = `${lastScore}/${totalQuestions}`;
    localStorage.setItem(
      `highestPercentageInQuiz${quizIndex}`,
      highestPercentage
    );
    localStorage.setItem(`highestMarksInQuiz${quizIndex}`, highestMarks);
  }

  correctPercentageText.innerText = `${correctPercentage}%`;
  wrongPercentageText.innerText = `${100 - correctPercentage}%`;
  lineGraphCorrectBar.style.width = `${correctPercentage}%`;
  marksText.innerText = `${lastScore}/${totalQuestions}`;

  correctPointerPlacementAdjustment =
    correctPercentage <= 10 ? -correctPercentage / 3 - 8 : -42;
  wrongPointerPlacementAdjustment =
    wrongPercentage <= 10 ? -wrongPercentage / 3 - 8 : -42;
  console.log(correctPointerWhole); // Should not be null or undefined

  correctPointerWhole.style.marginRight = `${correctPointerPlacementAdjustment}px`;
  wrongPointerWhole.style.marginLeft = `${wrongPointerPlacementAdjustment}px`;

  if (correctPercentage >= 90) {
    resultMotivationalQuote.innerHTML =
      "You didn’t just pass, you mastered it! Keep soaring!";
  } else if (correctPercentage >= 75) {
    resultMotivationalQuote.innerHTML =
      "You’re on the right path—just a few steps from perfect!";
  } else if (correctPercentage >= 60) {
    resultMotivationalQuote.innerHTML =
      "A solid attempt! Review a bit more, and you’ll level up fast.";
  } else if (correctPercentage >= 50) {
    resultMotivationalQuote.innerHTML =
      "You’re getting there! Don’t stop now—keep practicing.";
  } else if (correctPercentage >= 40) {
    resultMotivationalQuote.innerHTML =
      "Mistakes are proof you're trying. Reflect, revise, rise!";
  } else {
    resultMotivationalQuote.innerHTML =
      "Every expert was once a beginner—keep going!";
  }

  console.log("result to be displayed");

  main.classList.remove("quiz");
  main.classList.remove("home");
  main.classList.add("result");
  body.classList.remove("half-time-passed");
  body.classList.remove("time-about-to-end");
  body.classList.add("result-being-displayed");
}

function toggleVolume() {
  console.log("volume icon clicked");
  if (!isMuted) {
    volumeIcon.classList.remove("volume-open");
    volumeIcon.classList.add("volume-mute");
  } else {
    volumeIcon.classList.remove("volume-mute");
    volumeIcon.classList.add("volume-open");
  }
  isMuted = !isMuted;
}
