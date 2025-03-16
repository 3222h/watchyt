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
    
    let waitTime = Math.floor(Math.random() * (120 - 60 + 1) + 60) * 1000;
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
        let waitTime = data.waitTime || 3600000; // Default to 1 hour (60 minutes) if not set

        if (getYouTubeVideoId() === specialVideoID) {
            console.log(`Video ID matched! Starting countdown of ${waitTime / 60000} minutes...`);
            setTimeout(playNextVideo, waitTime);
        } else {
            console.log("Video ID does not match. Checking again in 5 seconds...");
            setTimeout(checkVideoIdAndStart, 5000);
        }
    });
}

checkVideoIdAndStart();
