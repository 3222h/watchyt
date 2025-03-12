document.getElementById('start').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.runtime.sendMessage({ action: 'start', tabId: tab.id });
});

document.getElementById('stop').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'stop' });
});

chrome.runtime.onMessage.addListener((message) => {
  if (message.status) {
    document.getElementById('status').textContent = `Status: ${message.status.charAt(0).toUpperCase() + message.status.slice(1)}`;
  }
});

// background message listener
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'start') startSkipping(message.tabId);
  else if (message.action === 'stop') stopSkipping();
});
