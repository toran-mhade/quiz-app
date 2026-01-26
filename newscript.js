let stateOne = document.querySelector(".state-one");
let stateTwo = document.querySelector(".state-two");

let stateThree = document.querySelector(".state-three");

let questionInputBox = document.querySelector(".question-text");

let AllOptionsBox = document.querySelectorAll(".options-div-child");

let questionCurrentIndex = document.querySelector(".currentQuestionIndex");

let stateOneStartBtn = document.querySelector(".startBtn-stateOne");

let timerOutput = document.querySelector(".timer-p");

let nextBtn = document.querySelector(".stateTwo-nextBtn");

    let nxtBtnClick = 0;


// stateOne.classList.add("activeOne");
stateTwo.classList.add("activeOne");
stateThree.classList.add("activeOne");
let state = null

function render() {
  
  if (state === "quiz") {
    console.log(state);
    stateOne.classList.add("activeOne");
    stateTwo.classList.remove("activeOne");
nxtBtnClick = 0
updateQuestionFN(nxtBtnClick)
clearInterval(timerId)
timerFn()
  }
}

stateOneStartBtn.addEventListener("click",()=>{
  console.log("clic");
  
  state = "quiz"

  render()
})


const questions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Transfer Markup Level",
      "Hyperlinks Text Module Language",
      "Home Tool Markup Language",
    ],
    correct: "Hyper Text Markup Language",
  },
  {
    id: 2,
    question: "Which HTML tag is used to link an external CSS file?",
    options: ["<style>", "<script>", "<link>", "<css>"],
    correct: "<link>",
  },
  {
    id: 3,
    question: "Which CSS property controls text size?",
    options: ["font-style", "font-size", "text-size", "text-style"],
    correct: "font-size",
  },
  {
    id: 4,
    question: "Which HTML element is used for the largest heading?",
    options: ["<h1>", "<h6>", "<heading>", "<head>"],
    correct: "<h1>",
  },
  {
    id: 5,
    question: "Which symbol is used for comments in CSS?",
    options: ["/* comment */", "// comment", "# comment", "<!-- comment -->"],
    correct: "/* comment */",
  },
  {
    id: 6,
    question:
      "Which attribute is used to provide an alternative text for an image?",
    options: ["title", "alt", "src", "value"],
    correct: "alt",
  },
  {
    id: 7,
    question: "Which method is used to select an element by ID in JavaScript?",
    options: ["querySelector()", "getElementById()", "selectId()", "getId()"],
    correct: "getElementById()",
  },
  {
    id: 8,
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Colorful Style System",
      "Computer Styled Sheets",
      "Creative Styling System",
    ],
    correct: "Cascading Style Sheets",
  },
  {
    id: 9,
    question: "Which HTML tag is used to display a table?",
    options: ["<tab>", "<table>", "<grid>", "<t>"],
    correct: "<table>",
  },
  {
    id: 10,
    question: "What is the default JavaScript data type for numbers?",
    options: ["int", "float", "number", "double"],
    correct: "number",
  },
  {
    id: 11,
    question: "Which CSS property is used to change text color?",
    options: ["font-color", "color", "text-color", "foreground"],
    correct: "color",
  },
  {
    id: 12,
    question: "Which tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    correct: "<a>",
  },
  {
    id: 13,
    question: "Which method removes the last element from an array?",
    options: ["shift()", "pop()", "remove()", "deleteLast()"],
    correct: "pop()",
  },
  {
    id: 14,
    question: "Which CSS property is used to make text bold?",
    options: ["text-weight", "font-style", "font-weight", "font-bold"],
    correct: "font-weight",
  },
  {
    id: 15,
    question: "Which event fires when a user clicks an element?",
    options: ["onpress", "onclick", "onhover", "onload"],
    correct: "onclick",
  },
  {
    id: 16,
    question: "Which HTML tag is used for an unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    correct: "<ul>",
  },
  {
    id: 17,
    question: "Which array method adds a new element at the end?",
    options: ["push()", "add()", "insert()", "append()"],
    correct: "push()",
  },
  {
    id: 18,
    question: "Which CSS property sets the background color?",
    options: ["bgcolor", "background-color", "color-bg", "bg"],
    correct: "background-color",
  },
  {
    id: 19,
    question: "Which HTML attribute is used to set inline CSS?",
    options: ["style", "css", "inline", "design"],
    correct: "style",
  },
  {
    id: 20,
    question: "Which JavaScript keyword declares a block-scoped variable?",
    options: ["var", "let", "static", "define"],
    correct: "let",
  },
  {
    id: 21,
    question: "Which CSS unit is relative to the root font-size?",
    options: ["px", "em", "rem", "%"],
    correct: "rem",
  },
  {
    id: 22,
    question: "Which method converts a JSON string to a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.objectify()",
      "JSON.convert()",
    ],
    correct: "JSON.parse()",
  },
  {
    id: 23,
    question: "Which semantic tag represents main content of a page?",
    options: ["<section>", "<main>", "<content>", "<body>"],
    correct: "<main>",
  },
  {
    id: 24,
    question: "Which keyword stops the execution of a loop?",
    options: ["exit", "stop", "break", "end"],
    correct: "break",
  },
  {
    id: 25,
    question: "Which CSS property controls element spacing outside the border?",
    options: ["space", "padding", "gap", "margin"],
    correct: "margin",
  },
];


function updateQuestionFN(nxtBtnClick) {
  questionInputBox.textContent = questions[nxtBtnClick].question;
  // console.log(questionInputBox.textContent);

  AllOptionsBox.forEach((option, index) => {
    option.textContent = questions[nxtBtnClick].options[index];
    // console.log(questions[i].options[index]);
  });
  // if (nxtBtnClick === 24) {
  //   nxtBtnClick = 0;
  // }
}


let time = 30;
let timerId = null;
let timeOut = false;

let timeOver = false;
let isClick = false;
function timerFn() {
  if (timerId !== null) {
    clearInterval(timerId);
  }
  time = 30;
  timerId = setInterval(() => {
    time--;
    timerOutput.innerHTML = time;
    if (time <= 0) {
      timerOutput.innerHTML = "00";
      timeOver = true;
      AllOptionsBox.forEach((option) => {
        if (isClick) {
          return;
        }
        //  console.log("true hai");
        if (option.textContent === questions[nxtBtnClick].correct) {
          console.log(questions[nxtBtnClick].correct);

          option.parentElement.style.border = "1px solid grey";
        }
      });

      timeOut = true;
      clearInterval(timerId);
      // timerId = null
    }

     if (time < 10) {
      //  console.log("decreased");

       timerOutput.innerHTML = "0" + time;
     }

    if (time <= 30 && time > 15) {
      stateTwo.style.backgroundColor = "rgba(204, 226, 194, 1)";

      timerDiv.style.backgroundColor = "rgb(24, 156, 31)";
      timerDiv.style.boxShadow =
        " 1px -1px 0px 1px rgba(2, 164, 9, 0.43),-1px 1px 0px 1px  rgba(2, 164, 9, 0.43)";
      nextBtn.style.backgroundColor = "rgba(204, 226, 194, 1)";
      nextBtn.style.color = "rgb(24, 156, 31)";
    } else if (time <= 15 && time > 5) {
      stateTwo.style.backgroundColor = " rgba(228, 229, 199, 1)";
      timerDiv.style.backgroundColor = "rgba(197, 136, 0, 1)";
      timerDiv.style.boxShadow =
        " 1px -1px 0px 1px rgba(199, 185, 53, 0.93),-1px 1px 0px 1px  rgba(194, 182, 79, 0.93)";

      // timerDiv.style.boxShadow.backgroundColor = "  rgba(197, 136, 0, 1)";

      nextBtn.style.color = "rgba(197, 136, 0, 1)";
      nextBtn.style.backgroundColor = "rgba(228, 229, 199, 1)";
    } else if (time <= 5) {
      stateTwo.style.backgroundColor = "rgba(219, 173, 173, 1)";
      timerDiv.style.backgroundColor = "rgba(197, 0, 0, 1)";
      nextBtn.style.color = "rgba(197, 0, 0, 1)";
      nextBtn.style.backgroundColor = "rgba(219, 173, 173, 1)";
      timerDiv.style.boxShadow =
        " 1px -1px 0px 1px rgba(195, 62, 64, 0.93),-1px 1px 0px 1px  rgba(194, 79, 79, 0.93)";
    }
   

    return time;
  }, 1000);
}


let rightAnsCount = 0;
// console.log(isClick);

AllOptionsBox.forEach((element) => {
  // console.log(element.textContent);

  element.addEventListener("click", () => {
    // console.log("cli");

    if (timeOut) {
      console.log(timeOut);

      return;
    }
    // console.log(isClick);

    if (isClick) {
      return;
    }
    // console.log("c");

    let rightAns = questions[nxtBtnClick].correct;
    console.log(rightAns, nxtBtnClick);

    if (rightAns === element.textContent) {
      rightAnsCount++;
      console.log(rightAnsCount);
      if (audio) {
        audioPlay.play();
      }
      element.parentElement.children[2].classList.remove("display-icon-div");
    } else {
      element.parentElement.children[1].classList.remove("display-icon-div");

      AllOptionsBox.forEach((opt) => {
        if (opt.textContent === rightAns) {
          opt.parentElement.children[2].classList.remove("display-icon-div");
        }
      });
    }
    // console.log(element.parentElement.children[2]);

    // console.log(element.textContent);
    isClick = true;
  });
});




let indexDisplay = 1;
let resultInGreen = 0;

nextBtn.addEventListener("click", () => {
  console.log("isclick");

  // if (indexDisplay === 25) {
  //   indexDisplay = 0
  // }
  indexDisplay++;
  timeOut = false;

  if (nxtBtnClick === 24) {
    state = "stateThree";
    // rightWrongIcons()
    render();
    // questionIndex = 0
    // updateQuestionFN(0)
    return;
  }

  if (time <= 0) {
    isClick = true;
  }
  if (!isClick) {
    return;
  }

  // if (nxtBtnClick >= 25) {
  //   return
  // }
  timerFn();

  if (indexDisplay < 10) {
    questionCurrentIndex.textContent = "0" + Number(indexDisplay);
    console.log(indexDisplay);
  } else if (indexDisplay >= 10 && indexDisplay <= 25) {
    questionCurrentIndex.textContent = Number(indexDisplay);
    console.log(false);
  }
  // console.log( );

  function rightWrongIcons() {
    AllOptionsBox.forEach((opt) => {
      // opt.parentElement.style.border =
      if (
        !opt.parentElement.children[2].classList.contains("display-icon-div")
      ) {
        opt.parentElement.children[2].classList.add("display-icon-div");
      }
      opt.parentElement.style.border = "1px solid lightgray";
      if (
        !opt.parentElement.children[1].classList.contains("display-icon-div")
      ) {
        opt.parentElement.children[1].classList.add("display-icon-div");
      }
    });
  }

  rightWrongIcons();

  isClick = false;
  console.log("click");
  nxtBtnClick++;
  console.log(nxtBtnClick);
  updateQuestionFN(nxtBtnClick);
  // timeOut = false
});

