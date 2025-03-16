(function skipAds() {
    function skip() {
        const videoPlayer = document.querySelector(".html5-video-player");
        const video = videoPlayer?.querySelector("video");

        if (videoPlayer && video && videoPlayer.classList.contains("ad-showing")) {
            video.currentTime = 10000;
        }

        const skipBtn = document.querySelector(".ytp-ad-skip-button, .ytp-ad-skip-button-modern");
        if (skipBtn) {
            skipBtn.click();
            console.log("Skipped Ad!");
            if (video) video.currentTime = 0;
        }
    }

    setInterval(skip, 1000);
})();
