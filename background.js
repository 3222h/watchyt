let intervalId = null;
const timeIntervals = [300000, 60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000];

function startSkipping(tabId) {
  let count = 0;
  intervalId = setInterval(() => {
    chrome.scripting.executeScript({
      target: { tabId },
      function: nextVideo
    });
    count++;
    if (count >= timeIntervals.length) stopSkipping();
  }, timeIntervals[count]);
  chrome.runtime.sendMessage({ status: 'running' });
}

function stopSkipping() {
  if (intervalId) clearInterval(intervalId);
  intervalId = null;
  chrome.runtime.sendMessage({ status: 'stopped' });
}

function nextVideo() {
  let nextButton = document.querySelector('.ytp-next-button');
  if (nextButton) nextButton.click();
}
