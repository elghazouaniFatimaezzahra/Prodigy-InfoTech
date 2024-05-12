let timer;
let isRunning = false;
let startTime;
let lapCount = 1;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById('startStop').innerText = 'Start';
    isRunning = false;
  } else {
    if (lapCount === 1) {
      startTime = Date.now();
    } else {
      startTime = Date.now() - (lapCount * 1000);
    }
    timer = setInterval(updateDisplay, 10);
    document.getElementById('startStop').innerText = 'Stop';
    isRunning = true;
  }
}

function reset() {
  clearInterval(timer);
  document.getElementById('display').innerText = '00:00:00';
  document.getElementById('startStop').innerText = 'Start';
  isRunning = false;
  lapCount = 1;
  document.getElementById('laps').innerHTML = '';
}

function lap() {
  if (isRunning) {
    const lapTime = calculateTime();
    const lapItem = document.createElement('li');
    lapItem.innerText = `Lap ${lapCount}: ${lapTime}`;
    document.getElementById('laps').appendChild(lapItem);
    lapCount++;
  }
}

function updateDisplay() {
  const elapsedTime = calculateTime();
  document.getElementById('display').innerText = elapsedTime;
}

function calculateTime() {
  const elapsedTime = Date.now() - startTime;
  const minutes = Math.floor(elapsedTime / (1000 * 60));
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  return `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
}

function padTime(time) {
  return time < 10 ? `0${time}` : time.toString();
}
