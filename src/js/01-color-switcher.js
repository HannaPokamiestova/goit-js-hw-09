const startBtn = document.querySelector("[data-start]");
const body = document.querySelector("body");
const stopBtn = document.querySelector("[data-stop]");

startBtn.addEventListener("click", startColorChange);
stopBtn.addEventListener("click", stopColorChange);

let timerId = null;

function startColorChange() {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
}

function stopColorChange() {
  clearInterval(timerId);
  startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
