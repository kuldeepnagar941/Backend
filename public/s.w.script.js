
    let timer;
let elapsed = 0;
let isRunning = false;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function updateDisplay() {
  let hours = Math.floor(elapsed / 3600);
  let minutes = Math.floor((elapsed % 3600) / 60);
  let seconds = elapsed % 60;

  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;
  if (seconds < 10) seconds = '0' + seconds;

  display.textContent = `${hours}:${minutes}:${seconds}`;
}

function start() {
  if (!isRunning) {
    timer = setInterval(() => {
      elapsed++;
      updateDisplay();
    }, 1000);
    isRunning = true;
  }
}

function stop() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
  }
}

function reset() {
  stop();
  elapsed = 0;
  updateDisplay();
}

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);

updateDisplay();

