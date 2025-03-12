// Listen for when a tab is updated and check if it's a YouTube page
chrome.webNavigation.onCompleted.addListener(function (details) {
  // Check if the URL matches YouTube
  if (details.url.includes("youtube.com")) {
    // Inject the content script into the YouTube page
    chrome.scripting.executeScript({
      target: { tabId: details.tabId },
      files: ['content.js']
    });
  }
}, { url: [{ hostContains: 'youtube.com' }] });

// Optional: You can add more background logic here if needed
chrome.runtime.onInstalled.addListener(() => {
  console.log("YouTube Activity Spoofer extension installed.");
});
