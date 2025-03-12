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

setTimeout(playNextVideo, 60000);
setTimeout(playNextVideo, 120000);
setTimeout(playNextVideo, 240000);
setTimeout(playNextVideo, 360000);
