function playNextVideo() {
  const nextButton = document.querySelector('a.ytp-next-button');
  if (nextButton) {
    nextButton.click();
  }
}

setTimeout(playNextVideo, 10000);
setTimeout(playNextVideo, 20000);
setTimeout(playNextVideo, 40000);
setTimeout(playNextVideo, 30000);
