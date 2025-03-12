document.getElementById('start').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.runtime.sendMessage({ action: 'start', tabId: tab.id });
});

document.getElementById('stop').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'stop' });
});
