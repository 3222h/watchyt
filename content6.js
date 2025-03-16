function runSimulation() {
  chrome.storage.local.get("trackingData", function(result) {
    const trackingData = result.trackingData || [];

    function timeToMilliseconds(time) {
      return new Date(time).getTime();
    }

    function simulateMouseEvent(type, x, y) {
      const event = new MouseEvent(type, {
        bubbles: true,
        cancelable: true,
        clientX: x,
        clientY: y,
      });
      document.dispatchEvent(event);
    }

    function adjustCoordinates(x, y) {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const maxWidth = 1920;
      const maxHeight = 1080;

      const adjustedX = (x / maxWidth) * screenWidth;
      const adjustedY = (y / maxHeight) * screenHeight;

      return { x: adjustedX, y: adjustedY };
    }

    function synchronizeWithRealTime() {
      const currentTime = new Date().getTime();
      const firstEventTime = timeToMilliseconds(trackingData[0].time);
      const timeDifference = currentTime - firstEventTime;

      return trackingData.map(entry => {
        const adjustedTime = timeToMilliseconds(entry.time) + timeDifference;
        return {
          ...entry,
          time: new Date(adjustedTime).toISOString(),
        };
      });
    }

    function simulateEvents() {
      const adjustedTrackingData = synchronizeWithRealTime();
      
      adjustedTrackingData.forEach((entry, index) => {
        const { time, event, x, y } = entry;
        const adjusted = adjustCoordinates(x, y);

        setTimeout(() => {
          simulateMouseEvent(event, adjusted.x, adjusted.y);
        }, timeToMilliseconds(time) - timeToMilliseconds(adjustedTrackingData[0].time));
      });
    }

    // Start the simulation
    simulateEvents();

    // Set a random interval between 3 to 4 minutes for the next run
    const randomTime = (Math.random() * 60 + 180) * 1000; // 180,000ms (3min) to 240,000ms (4min)
    setTimeout(runSimulation, randomTime);
  });
}

// Start the first run
runSimulation();
