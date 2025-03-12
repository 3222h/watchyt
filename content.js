// Function to simulate tab being in focus using Page Visibility API spoofing
function keepTabInFocus() {
  Object.defineProperty(document, 'hidden', { value: false, writable: false });
  Object.defineProperty(document, 'visibilityState', { value: 'visible', writable: false });
  window.dispatchEvent(new Event('focus')); // Dispatch focus event
}

// Function to randomly pause and play the video with randomized intervals
function randomPausePlay() {
  let video = document.querySelector('video');
  if (video) {
    // Randomize interval between 10.3, 12.8, or 14.6 minutes
    let interval = [618000, 768000, 876000][Math.floor(Math.random() * 3)];

    setInterval(() => {
      if (!video.paused) {
        video.pause(); // Pause the video
        
        // Randomize the play time between 1, 2, 3, or 4 seconds
        let randomPlayDelay = [1000, 2000, 3000, 4000][Math.floor(Math.random() * 4)];
        
        setTimeout(() => video.play(), randomPlayDelay); // Play it again after the randomized delay
      }
    }, interval); // Random interval between 10.3, 12.8, or 14.6 minutes
  }
}

// Function to skip the video ahead by a random time every random interval
function randomSkip() {
  let video = document.querySelector('video');
  if (video) {
    // Randomize the skip time between 7.5, 11.3, or 14.8 seconds
    let skipTimes = [7.5, 11.3, 14.8];
    
    // Randomize the interval between 5.3, 7.4, 2.8, or 9.4 minutes
    let intervals = [318000, 444000, 168000, 564000]; 

    setInterval(() => {
      let randomSkipTime = skipTimes[Math.floor(Math.random() * skipTimes.length)];
      video.currentTime += randomSkipTime; // Skip ahead by the random time
    }, intervals[Math.floor(Math.random() * intervals.length)]); // Random interval
  }
}

// Function to randomly scroll down and then back up with random timings
function randomScroll() {
  setInterval(() => {
    let scrollAmount = Math.floor(Math.random() * 21) + 20; // Random scroll between 20 to 40 pixels
    window.scrollBy(0, scrollAmount); // Scroll down

    // Randomize scroll back time between 1.5, 2, or 3.4 seconds
    let scrollBackTime = [1500, 2000, 3400][Math.floor(Math.random() * 3)];
    
    setTimeout(() => {
      window.scrollBy(0, -scrollAmount); // Scroll back up
    }, scrollBackTime); // Random scroll back delay
  }, [58000, 70000, 100000][Math.floor(Math.random() * 3)]); // Random scroll interval between 58, 70, or 100 seconds
}

// Function to auto-resume the video if paused for 1 minute
function autoResumeVideo() {
  let video = document.querySelector('video');
  let pauseStartTime = null;

  if (video) {
    setInterval(() => {
      if (video.paused) {
        if (!pauseStartTime) {
          pauseStartTime = Date.now(); // Start tracking time when paused
        } else {
          const pausedDuration = (Date.now() - pauseStartTime) / 1000; // Calculate paused duration in seconds
          if (pausedDuration >= 60) {
            video.play(); // Resume the video
            pauseStartTime = null; // Reset pause tracking
          }
        }
      } else {
        pauseStartTime = null; // Reset if the video is playing
      }
    }, 1000); // Check every second
  }
}

// Function to play the next video at specified intervals
function autoPlayNextVideo() {
  let video = document.querySelector('video');
  if (video) {
    // Array of intervals in milliseconds
    const intervals = [60000, 30000, 30000, 30000, 30000, 30000, 30000, 30000, 30000, 30000, 30000];
    
    let currentIndex = 0;

    // Function to play the next video
    function playNext() {
      if (currentIndex < intervals.length) {
        // Check if the video has ended
        if (video.ended) {
          // Load the next video (implement logic to get the next video ID)
          let nextVideoId = getNextVideoId();
          if (nextVideoId) {
            // Load and play the next video
            video.src = `https://www.youtube.com/watch?v=${nextVideoId}`;
            video.play();
            currentIndex++;
            // Set timeout for the next interval
            setTimeout(playNext, intervals[currentIndex - 1]);
          }
        } else {
          // If the video is still playing, check again after a short delay
          setTimeout(playNext, 1000);
        }
      }
    }

    // Start the auto-play process
    playNext();
  }
}

// Function to get the next video ID (implement your logic here)
function getNextVideoId() {
  // Example logic to get the next video ID
  // This could involve parsing the DOM or using the YouTube API
  // Return the next video ID as a string
  return 'NEXT_VIDEO_ID'; // Replace with actual logic
}

// Keep spoofing tab focus every 1 second to ensure tab stays "active"
setInterval(keepTabInFocus, 1000);

// Start random pause/play, skip, random scroll, auto resume, and auto-play
randomPausePlay();
randomSkip();
randomScroll();
autoResumeVideo();
autoPlayNextVideo();
