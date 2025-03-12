document.getElementById('start').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab) {
    chrome.runtime.sendMessage({ action: 'start', tabId: tab.id });
  } else {
    alert('No active tab found');
  }
});

document.getElementById('stop').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'stop' });
});

chrome.runtime.onMessage.addListener((message) => {
  if (message.status) {
    document.getElementById('status').textContent = `Status: ${message.status.charAt(0).toUpperCase() + message.status.slice(1)}`;
  }
});
