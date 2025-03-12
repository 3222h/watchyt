let loopCount = 0;
let active = false;
let interval;
let phase = '60min';

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
  phase = '60min';
  startExtension();
}

function runTimer() {
  interval = setTimeout(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0].url.includes('youtube.com/watch')) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: skipVideo
        });
      }
    });

    if (phase === '60min') {
      phase = '5min';
    } else {
      loopCount++;
      phase = '60min';
      if (loopCount >= 10) {
        stopExtension();
        return;
      }
    }

    runTimer();
  }, phase === '60min' ? 3600000 : 300000);
}

function skipVideo() {
  document.querySelector('video').currentTime = document.querySelector('video').duration;
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'start') startExtension();
  if (message.action === 'stop') stopExtension();
  if (message.action === 'restart') restartExtension();
});
