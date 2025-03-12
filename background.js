let loopCount = 0;
let active = false;
let interval;
let phase = '5min';
let timeRemaining = 300000;

function startExtension() {
  if (active) return;
  active = true;
  loopCount = loopCount || 0;
  runTimer();
}

function stopExtension() {
  clearInterval(interval);
  active = false;
}

function restartExtension() {
  clearInterval(interval);
  loopCount = 0;
  phase = '5min';
  timeRemaining = 300000;
  startExtension();
}

function runTimer() {
  const startTime = Date.now();
  interval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    timeRemaining -= 1000;
    const minutes = Math.floor(timeRemaining / 60000);
    const seconds = Math.floor((timeRemaining % 60000) / 1000);

    chrome.runtime.sendMessage({
      timeRemaining: `${minutes}m ${seconds}s`,
      loopCount
    });

    if (elapsed >= timeRemaining) {
      clearInterval(interval);
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0].url.includes('youtube.com/watch')) {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: skipVideo
          });
        }
      });

      if (phase === '5min') {
        phase = '1min';
        timeRemaining = 60000;
      } else {
        loopCount++;
        phase = '5min';
        timeRemaining = 300000;
        if (loopCount >= 10) {
          stopExtension();
          return;
        }
      }

      runTimer();
    }
  }, 1000);
}

function skipVideo() {
  document.querySelector('video').currentTime = document.querySelector('video').duration;
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'start') startExtension();
  if (message.action === 'stop') stopExtension();
  if (message.action === 'restart') restartExtension();
});
