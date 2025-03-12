document.getElementById('start').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.runtime.sendMessage({ action: 'start', tabId: tab.id });
});

document.getElementById('stop').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'stop' });
});

// background message listener
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'start') startSkipping(message.tabId);
  else if (message.action === 'stop') stopSkipping();
});
