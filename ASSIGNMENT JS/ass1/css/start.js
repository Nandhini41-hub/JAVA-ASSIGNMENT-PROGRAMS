let counter = 0;
let intervalId = null;

function updateDisplay() {
  document.getElementById('counterDisplay').innerText = counter;
}

function startCounter() {
  if (intervalId === null) {
    intervalId = setInterval(() => {
      counter++;
      updateDisplay();
    }, 1000);
  }
}

function stopCounter() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

function resetCounter() {
  stopCounter();
  counter = 0;
  updateDisplay();
}
