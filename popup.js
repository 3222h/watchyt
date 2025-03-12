// Event listener for the "Start Spoofing" button
document.getElementById('start').addEventListener('click', () => {
  chrome.scripting.executeScript({
    target: { allFrames: true },
    func: enableSpoofing
  });
});

// Event listener for the "Stop Spoofing" button
document.getElementById('stop').addEventListener('click', () => {
  chrome.scripting.executeScript({
    target: { allFrames: true },
    func: disableSpoofing
  });
});

// Function to enable spoofing
function enableSpoofing() {
  localStorage.setItem('spoofing', 'true');
  // Optionally, you can also call the function to start the auto-play feature here
  autoPlayNextVideo(); // Start auto-playing the next video
}

// Function to disable spoofing
function disableSpoofing() {
  localStorage.setItem('spoofing', 'false');
}

// Function to auto-play the next video (if needed)
function autoPlayNextVideo() {
  // This function can be defined here or in content.js
  // Ensure that the logic for getting the next video ID is implemented
  console.log("Auto-play next video function called.");
}
