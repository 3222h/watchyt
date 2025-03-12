function playNextVideo() {
  console.log('Checking for next video button...');

  const nextButton = document.querySelector('button.ytp-next-button') || document.querySelector('a.ytp-next-button');
  
  if (nextButton && nextButton.offsetParent !== null) { // Ensure button is visible
    console.log('Next button found and visible:', nextButton);
    nextButton.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
  } else {
    console.log('Next button not found or not visible.');
  }
}

// Schedule video play with a 5 min initial delay, then every 1 min
const intervals = [300000, 60000];
let index = 0;

function scheduleNext() {
  playNextVideo();
  const nextInterval = intervals[Math.min(index, 1)]; // 5 min first, then 1 min
  index++;
  setTimeout(scheduleNext, nextInterval);
}

scheduleNext();
