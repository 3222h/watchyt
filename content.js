function playNextVideo() {
  console.log('Checking for next video button...');

  const nextButton = document.querySelector('button.ytp-next-button') || document.querySelector('a.ytp-next-button');
  
  if (nextButton) {
    console.log('Next button found:', nextButton);
    console.log('Is button visible?', nextButton.offsetParent !== null);
    console.log('Clicking the next button...');

    nextButton.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
  } else {
    console.log('Next button not found.');
  }
}

// Schedule video play with different intervals: 5min, then 1min repeatedly
const intervals = [300000, 60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000];
let index = 0;

function scheduleNext() {
  playNextVideo();
  const nextInterval = intervals[index % intervals.length];
  index++;
  setTimeout(scheduleNext, nextInterval);
}

scheduleNext();
