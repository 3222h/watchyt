function playNextVideo() {
  console.log('Checking for next video button...');

  const nextButton = document.querySelector('.ytp-next-button');

  if (nextButton && nextButton.offsetParent !== null) { 
    console.log('Next button found and visible:', nextButton);
    nextButton.click();
  } else {
    console.log('Next button not found or not visible.');
  }
}

// Schedule the function at specific timeouts
setTimeout(playNextVideo, 60000);   // After 1 minute
setTimeout(playNextVideo, 120000);  // After 2 minutes
setTimeout(playNextVideo, 240000);  // After 4 minutes
setTimeout(playNextVideo, 360000);  // After 6 minutes
