let intervalId = null;
const timeIntervals = [300000, 60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'start') startSkipping(message.tabId);
  else if (message.action === 'stop') stopSkipping();
});

function startSkipping(tabId) {
  let count = 0;
  function skip() {
    if (count >= timeIntervals.length) {
      stopSkipping();
      return;
    }
    chrome.scripting.executeScript({
      target: { tabId },
      function: nextVideo
    });
    intervalId = setTimeout(skip, timeIntervals[count]);
    count++;
  }
  skip();
  chrome.runtime.sendMessage({ status: 'running' });
}

function stopSkipping() {
  if (intervalId) clearTimeout(intervalId);
  intervalId = null;
  chrome.runtime.sendMessage({ status: 'stopped' });
}

function nextVideo() {
  let nextButton = document.querySelector('.ytp-next-button');
  if (nextButton) nextButton.click();
}
