const box = document.getElementById("box");
const startBtn = document.getElementById("startBtn");
const message = document.getElementById("message");
const result = document.getElementById("result");

let startTime;
let timeout;
let waiting = false;

startBtn.addEventListener("click", startGame);
box.addEventListener("click", handleClick);

function startGame() {
  result.textContent = "";
  message.textContent = "Wait for green...";
  box.style.background = "red";
  waiting = true;

  const randomTime = Math.random() * 3000 + 2000; // 2-5 sec

  timeout = setTimeout(() => {
    box.style.background = "green";
    message.textContent = "CLICK NOW!";
    startTime = Date.now();
    waiting = false;
  }, randomTime);
}

function handleClick() {
  if (waiting) {
    clearTimeout(timeout);
    message.textContent = "Too soon! 😅";
    result.textContent = "";
    return;
  }

  if (box.style.background === "green") {
    const reactionTime = Date.now() - startTime;
    result.textContent = `Your reaction time: ${reactionTime} ms`;
    message.textContent = "Click Start to try again";
    box.style.background = "red";
  }
}
