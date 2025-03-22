function setVideoQuality() {
    let qualityMenu = document.querySelector('.ytp-settings-button');

    if (qualityMenu) {
        qualityMenu.click();
        setTimeout(() => {
            let qualityOptions = document.querySelectorAll('.ytp-menuitem');
            qualityOptions[qualityOptions.length - 1].click(); // Open quality menu
            setTimeout(() => {
                let resolutions = document.querySelectorAll('.ytp-menuitem');
                let selected = false;

                resolutions.forEach(item => {
                    if (item.innerText.includes('144p')) {
                        item.click(); // Select 144p if available
                        selected = true;
                    }
                });

                if (!selected) {
                    console.warn("144p not available. Selecting lowest resolution instead.");
                    resolutions[resolutions.length - 1].click(); // Select lowest available quality
                }
            }, 500);
        }, 500);
    } else {
        console.warn("Settings menu not found. Try opening the video first.");
    }
}

// Check if the video is loaded every 500ms
let videoInterval = setInterval(() => {
    let video = document.querySelector('video');
    if (video) {
        clearInterval(videoInterval);
        video.addEventListener('playing', () => {
            setTimeout(setVideoQuality, 15000); // Delay before changing quality
        }, { once: true });
    }
}, 500);
