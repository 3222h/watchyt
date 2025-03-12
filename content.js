function playNextVideo() {
  const nextButton = document.querySelector('a.ytp-next-button');
  if (nextButton) {
    nextButton.click();
  }
}

setInterval(playNextVideo, 60000);
