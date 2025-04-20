function playNextVideo() {
    console.log("Next video played using Shift + N. Generating random wait time...");

    // Simulate Shift + N key press to play the next video
    document.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'N',
        code: 'KeyN',
        keyCode: 78,
        which: 78,
        shiftKey: true
    }));

    // Random wait time between 35 to 45 seconds
    let waitTime = Math.floor(Math.random() * (45 - 35 + 1) + 35) * 1000;
    console.log(`Waiting for ${waitTime / 1000} seconds before playing the next video.`);

    setTimeout(playNextVideo, waitTime);
}

function getYouTubeVideoId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("v");
}

function checkVideoIdAndStart() {
    chrome.storage.sync.get(["specialVideoID", "waitTime"], function (data) {
        let specialVideoID = data.specialVideoID;
        let userDefinedWait = data.waitTime;

        let finalWaitTime;

        if (getYouTubeVideoId() === specialVideoID) {
            // If user has set a wait time, add up to 30 seconds randomly
            if (userDefinedWait && typeof userDefinedWait === "number") {
                finalWaitTime = Math.floor(Math.random() * (30000 + 1)) + userDefinedWait; // waitTime to waitTime + 30s
                console.log(`User-defined wait time: ${userDefinedWait / 60000} minutes. Actual wait: ${finalWaitTime / 1000} seconds.`);
            } else {
                // Default wait time between 2 to 2.5 minutes
                finalWaitTime = Math.floor(Math.random() * (150 - 120 + 1) + 120) * 1000;
                console.log(`No user-defined wait time. Using default: ${finalWaitTime / 60000} minutes.`);
            }

            setTimeout(playNextVideo, finalWaitTime);
        } else {
            console.log("Video ID does not match. Checking again in 5 seconds...");
            setTimeout(checkVideoIdAndStart, 5000);
        }
    });
}

checkVideoIdAndStart();
