function playNextVideo() {
  console.log("Playing next video...");
  // Add logic to trigger next video here
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "startTimer") {
    setTimeout(() => {
      playNextVideo();
      startOneMinuteTimers(10);
    }, 5 * 60 * 1000);
  }
});

function startOneMinuteTimers(times) {
  let count = 0;
  const interval = setInterval(() => {
    playNextVideo();
    count++;
    if (count >= times) clearInterval(interval);
  }, 60 * 1000);
}
