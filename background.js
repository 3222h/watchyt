chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'start') startSkipping(message.tabId);
  else if (message.action === 'stop') stopSkipping();
});
