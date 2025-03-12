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
setTimeout(playNextVideo, 10000);   // After 1 minute
setTimeout(playNextVideo, 20000);  // After 2 minutes
setTimeout(playNextVideo, 30000);  // After 4 minutes
setTimeout(playNextVideo, 40000);  // After 6 minutes
setTimeout(playNextVideo, 50000);
setTimeout(playNextVideo, 60000);
setTimeout(playNextVideo, 70000);
setTimeout(playNextVideo, 80000);
setTimeout(playNextVideo, 90000);
