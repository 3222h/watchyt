(function () {
    // Override document.hidden and document.visibilityState
    Object.defineProperty(document, 'hidden', { get: () => false, configurable: true });
    Object.defineProperty(document, 'visibilityState', { get: () => 'visible', configurable: true });

    setInterval(() => {
        try {
            Object.defineProperty(document, 'hidden', { get: () => false, configurable: true });
            Object.defineProperty(document, 'visibilityState', { get: () => 'visible', configurable: true });
        } catch (e) {
            console.error('Error reinforcing visibility state:', e);
        }
    }, 1000);

    // Spoof window focus/blur
    const originalAddEventListener = window.addEventListener;
    window.addEventListener = function (type, listener, options) {
        if (type === 'blur') return; // Block blur events
        if (type === 'focus') listener();
        originalAddEventListener.call(window, type, listener, options);
    };

    // Dispatch a manual focus event
    window.dispatchEvent(new Event('focus'));
    console.log('Tab visibility spoofing active');

    // Function to randomly trigger pause/play
    function randomPausePlay() {
        let video = document.querySelector('video');
        if (!video) return;

        let interval = [618000, 768000, 876000][Math.floor(Math.random() * 3)];

        setInterval(() => {
            if (!video.paused) {
                document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', code: 'KeyK' }));
                let delay = [1000, 2000, 3000, 4000][Math.floor(Math.random() * 4)];
                setTimeout(() => {
                    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', code: 'KeyK' }));
                }, delay);
            }
        }, interval);
    }

    // Function to randomly skip forward
    function randomSkipKeyPress() {
        let video = document.querySelector('video');
        if (video) {
            let intervals = [318000, 444000, 480000, 564000];
            setInterval(() => {
                document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', code: 'ArrowRight' }));
            }, intervals[Math.floor(Math.random() * intervals.length)]);
        }
    }

    // Function to randomly seek backward
    function randomSeekBackward() {
        let video = document.querySelector('video');
        if (video) {
            let intervals = [477000, 666000, 720000, 846000];
            setInterval(() => {
                document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', code: 'ArrowLeft' }));
            }, intervals[Math.floor(Math.random() * intervals.length)]);
        }
    }

    // Auto-resume if paused for 1 minute
    function autoResumeVideo() {
        let video = document.querySelector('video');
        let pauseStartTime = null;

        if (video) {
            setInterval(() => {
                if (video.paused) {
                    if (!pauseStartTime) {
                        pauseStartTime = Date.now();
                    } else {
                        let pausedDuration = (Date.now() - pauseStartTime) / 1000;
                        if (pausedDuration >= 60) {
                            document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', code: 'KeyK' }));
                            pauseStartTime = null;
                        }
                    }
                } else {
                    pauseStartTime = null;
                }
            }, 1000);
        }
    }

    // Start features
    randomPausePlay();
    randomSkipKeyPress();
    randomSeekBackward();
    autoResumeVideo();
})();
