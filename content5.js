(function () {
    // Override document.hidden and document.visibilityState
    Object.defineProperty(document, 'hidden', {
        get: () => false,
        configurable: true
    });

    Object.defineProperty(document, 'visibilityState', {
        get: () => 'visible',
        configurable: true
    });

    // Continuously enforce the properties every second in case they get reset
    setInterval(() => {
        try {
            Object.defineProperty(document, 'hidden', {
                get: () => false,
                configurable: true
            });

            Object.defineProperty(document, 'visibilityState', {
                get: () => 'visible',
                configurable: true
            });
        } catch (e) {
            console.error('Error reinforcing visibility state:', e);
        }
    }, 1000);

    // Spoof window focus and blur events
    const originalAddEventListener = window.addEventListener;
    window.addEventListener = function (type, listener, options) {
        if (type === 'blur') return; // Block blur events entirely
        if (type === 'focus') listener(); // Immediately call focus listeners
        originalAddEventListener.call(window, type, listener, options);
    };

    // Manually dispatch focus event
    window.dispatchEvent(new Event('focus'));

    console.log('Tab visibility spoofing active');
    
// Function to randomly trigger a play and pause
function randomPausePlay() {
  let video = document.querySelector('video');
  if (!video) return;

  let interval = [618000, 768000, 876000][Math.floor(Math.random() * 3)];

  setInterval(() => {
    if (!video.paused) {
      // Simulate pressing 'K' to pause
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', code: 'KeyK', keyCode: 75, which: 75 }));

      let randomPlayDelay = [1000, 2000, 3000, 4000][Math.floor(Math.random() * 4)];

      setTimeout(() => {
        // Simulate pressing 'K' to resume
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', code: 'KeyK', keyCode: 75, which: 75 }));
      }, randomPlayDelay);
    }
  }, interval);
}


// Function to randomly trigger a right arrow key press to skip forward
function randomSkipKeyPress() {
  let video = document.querySelector('video');
  if (video) {
    let intervals = [318000, 444000, 480000, 564000]; // Intervals in milliseconds
    
    setInterval(() => {
      // Simulate right arrow key press to skip forward
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', code: 'ArrowRight', keyCode: 39, which: 39 }));
    }, intervals[Math.floor(Math.random() * intervals.length)]);
  }
}

    // Function to randomly trigger a left arrow key press to seek backward
function randomSeekBackward() {
  let video = document.querySelector('video');
  if (video) {
    let intervals = [477000, 666000, 720000, 846000]; // Intervals in milliseconds
    
    setInterval(() => {
      // Simulate right arrow key press to skip backward
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', code: 'ArrowLeft', keyCode: 37, which: 37 }));
    }, intervals[Math.floor(Math.random() * intervals.length)]);
  }
}

    // Function to randomly scroll down and then back up with random timings
function simulateMouseScroll() {
    const scrollSequences = [
        // First scroll sequence
        [
            { direction: "down", amount: 100, delay: 0 },
            { direction: "down", amount: 100, delay: 1000 },
            { direction: "up", amount: 100, delay: 2000 }
        ],
        // Second scroll sequence
        [
            { direction: "down", amount: 100, delay: 0 },
            { direction: "up", amount: 100, delay: 1000 }
        ],
        // Third scroll sequence
        [
            { direction: "down", amount: 100, delay: 0 },
            { direction: "up", amount: 100, delay: 1000 }
        ],
        // Fourth scroll sequence
        [
            { direction: "down", amount: 100, delay: 0 },
            { direction: "up", amount: 100, delay: 1000 },
            { direction: "down", amount: 100, delay: 2000 },
            { direction: "up", amount: 100, delay: 3000 },
            { direction: "up", amount: 100, delay: 4000 }
        ]
    ];

    function executeScrollSequence() {
        let selectedSequence = scrollSequences[Math.floor(Math.random() * scrollSequences.length)]; // Pick a random sequence

        selectedSequence.forEach((scroll) => {
            setTimeout(() => {
                let scrollAmount = scroll.direction === "down" ? scroll.amount : -scroll.amount;

                // Simulate real mouse wheel scrolling
                let event = new WheelEvent("wheel", {
                    deltaY: scrollAmount,
                    bubbles: true,
                    cancelable: true,
                    composed: true
                });

                // Dispatch event to simulate scroll
                let target = document.documentElement || document.body;
                target.dispatchEvent(event);

                // Fallback: Ensure scrolling works
                window.scrollBy({
                    top: scrollAmount,
                    left: 0,
                    behavior: "smooth" // Optional for smooth scrolling
                });

                console.log(`[${new Date().toLocaleTimeString()}] Simulated scroll ${scroll.direction} | Amount: ${scroll.amount}`);
            }, scroll.delay);
        });

        // Schedule next scroll sequence at a random interval between 1 to 2 minutes
        let nextExecutionTime = Math.floor(Math.random() * (120000 - 60000) + 60000); // Random between 60s and 120s
        console.log(`Next scroll sequence will run in ${(nextExecutionTime / 1000).toFixed(1)} seconds.`);

        setTimeout(executeScrollSequence, nextExecutionTime); // Recursively loop with random time
    }

    executeScrollSequence(); // Start loop
}

// Function to auto-resume the video if paused for 1 minute
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
            document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', code: 'KeyK', keyCode: 75, which: 75 }));
            pauseStartTime = null;
          }
        }
      } else {
        pauseStartTime = null;
      }
    }, 1000);
  }
}


    // Start random pause/play, skip, random scroll, and auto resume
    randomPausePlay();
    randomSkipKeyPress();
    randomSeekBackward();
    simulateMouseScroll();
    autoResumeVideo();
})();
