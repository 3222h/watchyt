(function autoNextVideo() { 
    let autoNextInterval;
    let specialVideoTriggered = false;

    function getCurrentVideoID() {
        let urlParams = new URLSearchParams(window.location.search);
        return urlParams.get("v");
    }

    function playNext() {
        chrome.storage.sync.get("specialVideoID", function (data) {
            let specialVideoID = data.specialVideoID;
            let currentVideoID = getCurrentVideoID();

            if (currentVideoID === specialVideoID) {
                console.log("Special video is playing. Stopping auto next.");
                clearTimeout(autoNextInterval);
                return;
            }

            // Simulate Shift + N key press to play next video
            document.dispatchEvent(new KeyboardEvent('keydown', {
                key: 'N',
                code: 'KeyN',
                keyCode: 78,
                which: 78,
                shiftKey: true
            }));

            console.log("Playing next video...");
            scheduleSpecialVideo(specialVideoID);
        });
    }

    function checkIfPlaying() {
        let playButton = document.querySelector(".ytp-play-button");
        return playButton && playButton.getAttribute("data-title-no-tooltip") === "Pause";
    }

    function loop() {
        chrome.storage.sync.get("specialVideoID", function (data) {
            let specialVideoID = data.specialVideoID;
            let currentVideoID = getCurrentVideoID();

            if (currentVideoID === specialVideoID) {
                console.log("Special video detected in loop. Stopping script.");
                clearTimeout(autoNextInterval);
                return;
            }

            if (checkIfPlaying()) {
                // 35 to 45 seconds
                let waitTime = Math.floor(Math.random() * (45 - 35 + 1) + 35) * 1000;
                console.log(`Waiting for ${waitTime / 1000} seconds...`);
                autoNextInterval = setTimeout(() => {
                    playNext();
                    loop();
                }, waitTime);
            } else {
                console.log("No video detected, retrying in 5 seconds...");
                setTimeout(loop, 5000);
            }
        });
    }

    function scheduleSpecialVideo(specialVideoID) {
        if (!specialVideoTriggered) {
            specialVideoTriggered = true;
            // 2 minutes (120s) to 2.5 minutes (150s)
            let waitTime = Math.floor(Math.random() * (150 - 120 + 1) + 120) * 1000;
            console.log(`Special video will play in ${waitTime / 1000} seconds...`);
            setTimeout(() => {
                window.location.href = `https://www.youtube.com/watch?v=${specialVideoID}`;
            }, waitTime);
        }
    }

    console.log("YouTube Auto Next Video Script Started...");
    loop();
})();
