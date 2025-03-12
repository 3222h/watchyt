(function () {
  function keepTabInFocus() {
    Object.defineProperty(document, 'hidden', { value: false, writable: false });
    Object.defineProperty(document, 'visibilityState', { value: 'visible', writable: false });
    window.dispatchEvent(new Event('focus'));
  }

  function randomPausePlay() {
    let video = document.querySelector('video');
    if (video) {
      let interval = [618000, 768000, 876000][Math.floor(Math.random() * 3)];

      setInterval(() => {
        if (!video.paused) {
          video.pause();
          setTimeout(() => video.play(), 1000); // Always resumes after 1 second
        }
      }, interval);
    }
  }

  function autoNextVideo() {
    let times = [120000, 60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000];
    let index = 0;

    function playNext() {
      let nextButton = document.querySelector('a.ytp-next-button');
      if (nextButton && index < times.length) {
        nextButton.click();
        setTimeout(playNext, times[index]);
        index++;
      }
    }

    setTimeout(playNext, times[index]);
  }

  function autoResumeVideo() {
    let video = document.querySelector('video');
    let pauseStartTime = null;

    if (video) {
      setInterval(() => {
        if (video.paused) {
          if (!pauseStartTime) {
            pauseStartTime = Date.now();
          } else {
            const pausedDuration = (Date.now() - pauseStartTime) / 1000;
            if (pausedDuration >= 60) {
              video.play();
              pauseStartTime = null;
            }
          }
        } else {
          pauseStartTime = null;
        }
      }, 1000);
    }
  }

  setInterval(keepTabInFocus, 1000);
  randomPausePlay();
  autoNextVideo();
  autoResumeVideo();
})();
