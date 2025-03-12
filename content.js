function playNextVideo() {
  const nextButton = document.querySelector('a.ytp-next-button');
  if (nextButton) {
    nextButton.click();
  }
}

// Play next video every 60 seconds
setInterval(playNextVideo, 60000);
