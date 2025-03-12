(function() {
  function goToNextVideo() {
    const nextButton = document.querySelector("a.ytp-next-button");
    if (nextButton) {
      nextButton.click();
    }
  }

  setInterval(goToNextVideo, 60000); // 1 minute interval
})();
