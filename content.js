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

// Schedule the function at specific timeouts
setTimeout(playNextVideo, 60000);   // After 1 minute
setTimeout(playNextVideo, 120000);  // After 2 minutes
setTimeout(playNextVideo, 240000);  // After 4 minutes
setTimeout(playNextVideo, 360000);  // After 6 minutes
