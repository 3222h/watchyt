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

// Schedule video play: 5 min first, then 1 min repeatedly
function scheduleNext(initial = true) {
  const delay = initial ? 300000 : 60000; // 5 min first, then 1 min
  setTimeout(() => {
    playNextVideo();
    scheduleNext(false); // After first run, always use 1 min interval
  }, delay);
}

scheduleNext();
