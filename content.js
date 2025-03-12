function playNextVideo() {
  console.log('Checking for next video button...');

  const nextButton = document.querySelector('.ytp-next-button');

  if (!nextButton) {
    console.log('Next button not found.');
    return;
  }

  console.log('Next button found:', nextButton);
  console.log('Is button visible?', nextButton.offsetParent !== null);

  if (nextButton.offsetParent === null) {
    console.log('Button is hidden and not clickable.');
    return;
  }

  console.log('Clicking the next button...');
  nextButton.focus();
  nextButton.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
}

// Schedule playNextVideo with specific timeouts
setTimeout(playNextVideo, 10000);   // After 10 seconds
setTimeout(playNextVideo, 20000);   // After 20 seconds
setTimeout(playNextVideo, 30000);   // After 30 seconds
setTimeout(playNextVideo, 40000);   // After 40 seconds
setTimeout(playNextVideo, 50000);   // After 50 seconds
setTimeout(playNextVideo, 60000);   // After 1 minute
setTimeout(playNextVideo, 70000);   // After 1 minute 10 seconds
setTimeout(playNextVideo, 80000);   // After 1 minute 20 seconds
setTimeout(playNextVideo, 90000);   // After 1 minute 30 seconds
