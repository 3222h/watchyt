function autoScrollYouTubeShorts() {
    let isScrolling = true;

    // Function to generate random number between min and max (inclusive)
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to simulate pressing the down arrow key
    function scrollToNextShort() {
        if (!isScrolling) return;

        const videoContainer = document.querySelector('#shorts-container');
        if (videoContainer) {
            // Simulate a single down arrow key press
            const downArrowEvent = new KeyboardEvent('keydown', {
                key: 'ArrowDown',
                code: 'ArrowDown',
                keyCode: 40,
                bubbles: true
            });
            videoContainer.dispatchEvent(downArrowEvent);
            console.log('Scrolled to next Short');
            
            // Schedule next scroll with random interval between 10 and 15 seconds
            const randomInterval = getRandomInt(10, 15) * 1000; // Convert to milliseconds
            setTimeout(scrollToNextShort, randomInterval);
        } else {
            console.log('Shorts container not found. Stopping scroll.');
            isScrolling = false;
        }
    }

    // Start the first scroll with a random interval
    const randomInterval = getRandomInt(10, 15) * 1000; // Convert to milliseconds
    setTimeout(scrollToNextShort, randomInterval);

    // Function to stop scrolling
    function stopScrolling() {
        isScrolling = false;
        console.log('Auto-scroll stopped.');
    }

    // Log instructions to stop scrolling
    console.log('Auto-scrolling started. To stop, run: stopScrolling()');

    // Expose stopScrolling function to the console
    window.stopScrolling = stopScrolling;
}

// Start the auto-scroll
autoScrollYouTubeShorts();
