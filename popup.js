const startBtn = document.getElementById('start');
const restartBtn = document.getElementById('restart');
const stopBtn = document.getElementById('stop');

startBtn.addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'start' });
});

restartBtn.addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'restart' });
});

stopBtn.addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'stop' });
});

chrome.runtime.onMessage.addListener((message) => {
  if (message.loopCount !== undefined) {
    document.getElementById('status').textContent = `Loops completed: ${message.loopCount}`;
  }
});
