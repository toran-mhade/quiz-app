let stateOne = document.querySelector(".state-one");

let stateTwo = document.querySelector(".state-two");

let stateThree = document.querySelector(".state-three");

let timerOutput = document.querySelector(".timer-p");
let stateOneStartBtn = document.querySelector(".startBtn-stateOne");


let timerDiv = document.querySelector(".timer-div");

let nextBtn = document.querySelector(".stateTwo-nextBtn");
// stateTwo.classList.add("activeTwo");

let questionInputBox = document.querySelector(".question-text");

let AllOptionsBox = document.querySelectorAll(".options-div-child");

let questionCurrentIndex = document.querySelector(".currentQuestionIndex");

let rightImgDivContainer = document.querySelectorAll(".correct-div-sign");

let wrongDiv = document.querySelector(".wrong-div");

let wrongDivImg = document.querySelector(".try-wrong-div");

let audioOnBtn = document.querySelector("#volume-btn");

let audioOffBtn = document.querySelector("#volume-mute");

let audioPlay = document.querySelector(".audioPlayer");

let startbtnInnerText = document.querySelector(".stateOne-startBtn-innerText");

let scoreCard = document.querySelector(".score-card-p");

let scoreUpdate = document.querySelector(".scoreUpdate");

let restartBtn = document.querySelector(".restartBtn");

// let rightImg = document.querySelector(".correct-img");

let currentRightAns = Number(localStorage.getItem("currentRightAns"));

console.log(currentRightAns);
 let rightAnsCount = 0;

let bestScore = localStorage.getItem("freshRightScore") || 0;
// console.log(bestScore);

let check = localStorage.getItem("check") 
console.log(check);

if (check === null) {
  scoreCard.style.display = "none"
}

scoreUpdate.textContent = bestScore;




// scoreCard.classList.add("activeScore");

let state = "stateOne"

  render();

  let restartStatus = localStorage.getItem("restartStatus")
  if (restartStatus === "progress") {
    restartBtn.style.display = "block"
    
  }else{
    restartBtn.style.display = "none"
  }


let nxtBtnClick =  0;
let indexDisplay =  1;
// query selectors end here


// state management
function render() {
  stateOne.classList.add("activeOne")
  stateTwo.classList.add("activeOne")
  stateThree.classList.add("activeOne")

  if (state === "stateOne") {
    stateOne.classList.remove("activeOne");
  } else if (state === "stateTwo") {
    stateTwo.classList.remove("activeOne");
  } else if (state === "stateThree") {
    stateThree.classList.remove("activeOne");
stateThreeFn(rightAnsCount)
  }



}
// render()

function startQuiz() {
  state = "stateTwo"
  render()
  clearInterval(timerId)
  timerFn()
  


  
  updateQuestionFN(nxtBtnClick)
}

function retryFn() {
  // console.log("retry");
  
  state = "stateOne";
  render();
  localStorage.setItem("state",state)

  nxtBtnClick = 0;
  // console.log(nxtBtnClick);

  updateQuestionFN(nxtBtnClick);
  timerFn();
 
  localStorage.removeItem("index")
 
  localStorage.removeItem("indexDisplay")
}



// state management ends here
stateOneStartBtn.addEventListener("click",()=>{
 currentRightAns = 0
  localStorage.removeItem("index")
  // localStorage.removeItem("state")
  // localStorage.removeItem("resultScore")
  localStorage.removeItem("indexDisplay")
  localStorage.setItem("restartStatus", "progress");
  startQuiz();
})


restartBtn.addEventListener("click",()=>{
nxtBtnClick = Number(localStorage.getItem("index"));
// console.log(nxtBtnClick);

indexDisplay = Number(localStorage.getItem("indexDisplay"));

customisedIndexDisplay(indexDisplay);
startQuiz()
})
// state one starts here

// state one ends here

// state two start here>>>

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

let answerArr = [];



let questionIndex = 0;

let questionNumber = 1;



let time = 30;
let timerId = null;
let timeOut = false

let timeOver = false
let isClick  = false
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
  timeOver = true
   AllOptionsBox.forEach((option) => {
    if (isClick) {
      return
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
    if (time < 10) {
      timerOutput.innerHTML = "0" + time;
    }
    
    
    return time;
  }, 1000);
}
let audio = true;



function updateQuestionFN(nxtBtnClick) {

// console.log("returne");

  questionInputBox.textContent = questions[nxtBtnClick].question;

  // console.log(questionInputBox.textContent);

  AllOptionsBox.forEach((option, index) => {
    option.textContent = questions[nxtBtnClick].options[index];
    // console.log(questions[i].options[index]);
  });
  
  localStorage.setItem("index",nxtBtnClick)
// console.log(localStorage.setItem("index", nxtBtnClick));

}

audioOffBtn.classList.add("volume-btn-toggle");

audioOnBtn.addEventListener("click", () => {


  audioOnBtn.classList.add("volume-btn-toggle");
  audioOffBtn.classList.remove("volume-btn-toggle");
  audio = false
});



// 1
audioOffBtn.addEventListener("click", () => {
  audio = true;
  console.log(audio);
  
  audioOffBtn.classList.add("volume-btn-toggle");
  audioOnBtn.classList.remove("volume-btn-toggle");
});
let currentOpt = null


// righAns is real count
// console.log(isClick);

  AllOptionsBox.forEach((element) => {
    // console.log(element.textContent);

    element.addEventListener("click", () => {
      console.log("cli");
if (timerId !== null) {
  clearInterval(timerId);
  timeOut.innerHTML = time;
}

      if (timeOut) {
        // console.log(timeOut);

        return;
      }

      // clearInterval(timerId)
      // timerFn()
      // console.log(isClick);

      if (isClick) {
        return;
      }
      // console.log("c");

      let rightAns = questions[nxtBtnClick].correct;
      // console.log(rightAns, nxtBtnClick);

      if (rightAns === element.textContent) {
        currentRightAns++
        console.log(currentRightAns);
     
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
   
      isClick = true;
    });
  });


if (indexDisplay > 24) {
  indexDisplay = 1
}
let resultInGreen = 0;

function customisedIndexDisplay(indexDisplay) {
    if(indexDisplay < 1){
      indexDisplay = 1
    }
     if (indexDisplay < 10) {
     questionCurrentIndex.textContent = "0" + Number(indexDisplay);
   } else if (indexDisplay >= 10 && indexDisplay <= 25) {
     questionCurrentIndex.textContent = Number(indexDisplay);
    //  console.log(false);
   }
}

nextBtn.addEventListener("click",()=>{
   localStorage.setItem("currentRightAns", currentRightAns);
  timeOut = false

  if (nxtBtnClick === 24) {
    state = "stateThree";
    // rightWrongIcons()
    render();
    // questionIndex = 0
    clearInterval(timerId);
    timerFn();
    indexDisplay = 0;
    nxtBtnClick = 0;
  let freshRightScore = Number(localStorage.getItem("currentRightAns"));
     rightAnsCount = freshRightScore

console.log(rightAnsCount);
bestScore = freshRightScore
// scoreUpdate.textContent = bestScore
// localStorage.setItem("bestScore",freshRightScore)
if (bestScore < freshRightScore) {
 localStorage.setItem("bestScore",freshRightScore)
 
}


localStorage.removeItem("currentRightAns")
    updateQuestionFN(nxtBtnClick);
    stateThreeFn(rightAnsCount);
    localStorage.setItem("rightAnsCheck","true")

    localStorage.removeItem("restartStatus");

    // return
  }


indexDisplay++


if (time <= 0) {
  isClick = true
}
if (!isClick) {
  return;
}

timerFn();
// if (nxtBtnClick >= 25) {
  //   return
  // }
  
  customisedIndexDisplay(indexDisplay)
  // console.log( );
  
  
  localStorage.setItem("indexDisplay", indexDisplay);

  // console.log(localStorage.setItem("indexDisplay", indexDisplay));
  
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
  
rightWrongIcons()

  isClick = false
  // console.log("click");
  nxtBtnClick++;
  // console.log( nxtBtnClick);
  updateQuestionFN(nxtBtnClick);
  // timeOut = false
})


// state three starts here

let resultAns = document.querySelector(".state-three-result-index");

let greenMark = document.querySelector(".green-marks-number");

let mainContainerColor = document.querySelector(".circle-div-container");

let redMark = document.querySelector(".red-marks-number");

let greenContainer = document.querySelector(".green-container");

let redContainer = document.querySelector(".red-container");

let resultTagLine = document.querySelector(".state-three-last-greetin-p");

let retryBtn = document.querySelector(".state-three-retry-btn");

function stateThreeFn(rightAnsCount) {

  localStorage.setItem("state",state)
// console.log(state);

// localStorage.setItem("resultScore",rightAnsCount)


  resultInGreen = rightAnsCount
  console.log(resultInGreen);
  
let percentage = Math.floor((resultInGreen / 25) * 100);
// console.log(resultInGreen);
let redResult = 100 - percentage;
// console.log(redResult);
redMark.textContent = `${redResult}%`;
greenMark.textContent = `${percentage}%`;
resultAns.textContent = resultInGreen;

mainContainerColor.style.background = `
conic-gradient(
    from 63deg,
    rgba(53, 189, 58, 1) 0% ${percentage}%, rgba(255, 122, 122, 1) ${percentage}% ${redResult}% 
  )`;

// resultAns.textContent = percentage
// console.log(resultAns.textContent);
if (percentage <= 0) {
  greenContainer.classList.add("activeTwo");
} else if (percentage <= 40) {
  mainContainerColor.style.background = `
conic-gradient(
    from 250deg,
    rgba(53, 189, 58, 1) 0% ${percentage}%, rgba(255, 122, 122, 1) ${percentage}% ${redResult}% 
  )`;
} else if (percentage > 40 && percentage < 56) {
  mainContainerColor.style.background = `
conic-gradient(
    from 110deg,
    rgba(53, 189, 58, 1) 0% ${percentage}%, rgba(255, 122, 122, 1) ${percentage}% ${redResult}% 
  )`;
} else if (percentage > 75 && percentage <= 96) {
  mainContainerColor.style.background = `
conic-gradient(
    from 65deg,
    rgba(53, 189, 58, 1) 0% ${percentage}%, rgba(255, 122, 122, 1) ${percentage}% ${redResult}% 
  )`;
} else if (percentage > 96) {
  redContainer.classList.add("activeTwo");

  mainContainerColor.style.background = `
conic-gradient(
    from 65deg,
    rgba(53, 189, 58, 1) 0% ${percentage}%
  )`;
}

if (percentage <= 20) {
  resultTagLine.innerHTML = '"Every expert was once a beginner"';
} else if (percentage <= 40) {
  resultTagLine.textContent = '"Progress is visible, not complete"';
} else if (percentage > 40 && percentage <= 75) {
  resultTagLine.textContent = '"This shows real progress"';
} else if (percentage > 75 && percentage <= 96) {
  resultTagLine.textContent = '"Confidence level: high"';
} else if (percentage > 96) {
  resultTagLine.textContent = '"Top-tier result"';
}

}
// let scoreCard = document.querySelector(".score-card-p");

// let scoreUpdate = document.querySelector(".scoreUpdate");



retryBtn.addEventListener("click", () => {
  retryFn();
localStorage.setItem(check, "check");

});
