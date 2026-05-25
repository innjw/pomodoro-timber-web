const savedMinutes = Number(localStorage.getItem('pomodoroMinutes')) || 25;
const INITIAL_SECONDS = savedMinutes * 60;

let remainingSeconds = INITIAL_SECONDS;
let intervalId = null;

const timeDisplay = document.querySelector('.time');
timeDisplay.textContent = formatTime(remainingSeconds);
const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');
const btnReset = document.querySelector('.btn-reset');
const linkSettings = document.querySelector('.btn-settings');

linkSettings.addEventListener('click', () => {
  localStorage.setItem('pomodoroCurrentMinutes', Math.ceil(remainingSeconds / 60));
});

function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function tick() {
  if (remainingSeconds <= 0) {
    clearInterval(intervalId);
    intervalId = null;
    return;
  }
  remainingSeconds--;
  timeDisplay.textContent = formatTime(remainingSeconds);
}

btnStart.addEventListener('click', () => {
  if (intervalId !== null) return;
  intervalId = setInterval(tick, 1000);
});

btnStop.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
});

btnReset.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
  remainingSeconds = INITIAL_SECONDS;
  timeDisplay.textContent = formatTime(remainingSeconds);
});
