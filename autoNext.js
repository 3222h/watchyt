(function() {
  function goToNextVideo() {
    const nextButton = document.querySelector("a.ytp-next-button");
    if (nextButton && !document.hidden) {
      nextButton.click();
      console.log("Next video triggered");
    } else {
      console.log("Next button not found or tab not active");
    }
  }

  setInterval(goToNextVideo, 60000); // 1 minute interval
})();
