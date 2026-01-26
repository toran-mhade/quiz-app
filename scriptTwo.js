
let startBtn = document.querySelector(".StartBtn")

let stopBtn = document.querySelector(".stopBtn")

let resetBtn = document.querySelector(".resetBtn")

let timer = document.querySelector(".timer-current");

let timerCount = 3

let timerId = null  
let timerValue = null
function timerFn() {
  if (timerId !== null) {
    clearInterval(timerId)
  }
timerValue = Number(localStorage.getItem("timerValue"));
  timerCount = 3
   timerId = setInterval(() => {
     timer.textContent = timerCount
    if (timerCount <= 0) {
      clearInterval(timerId)
    }
    timerCount--;
  }, 1000);
}

startBtn.addEventListener("click",()=>{
timerFn()
})

stopBtn.addEventListener("click",()=>{
  if (timerId !== null) {
    clearInterval(timerId);
    timerCount = Number(timer.textContent);
   localStorage.setItem("timerValue",timerCount)
  console.log(timer.textContent);
  
  }
})
