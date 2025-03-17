function simulateHumanMouse() {
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    let targetX = mouseX, targetY = mouseY;
    let isTabActive = true;
    let lastMoveTime = performance.now();

    // Detect if the tab is active
    document.addEventListener("visibilitychange", () => {
        isTabActive = !document.hidden;
    });

    // Generate a realistic movement path with acceleration & random adjustments
    function getRandomTarget() {
        return {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
        };
    }

    function getBezierCurvePoint(t, p0, p1, p2) {
        let x = (1 - t) * (1 - t) * p0.x + 2 * (1 - t) * t * p1.x + t * t * p2.x;
        let y = (1 - t) * (1 - t) * p0.y + 2 * (1 - t) * t * p1.y + t * t * p2.y;
        return { x, y };
    }

    function moveMouse() {
        if (!isTabActive) return setTimeout(moveMouse, 500);

        let now = performance.now();
        let deltaTime = now - lastMoveTime;
        lastMoveTime = now;

        if (Math.abs(mouseX - targetX) < 5 && Math.abs(mouseY - targetY) < 5) {
            // New movement starts from the last position
            targetX = getRandomTarget().x;
            targetY = getRandomTarget().y;
            if (Math.random() < 0.3) return setTimeout(moveMouse, Math.random() * 1000 + 300); // Random pause
        }

        let midX = (mouseX + targetX) / 2 + (Math.random() - 0.5) * 100;
        let midY = (mouseY + targetY) / 2 + (Math.random() - 0.5) * 100;

        let t = Math.min(1, deltaTime / 1000); // Adjust time factor
        let newPoint = getBezierCurvePoint(t, { x: mouseX, y: mouseY }, { x: midX, y: midY }, { x: targetX, y: targetY });

        mouseX = newPoint.x;
        mouseY = newPoint.y;

        let eventTarget = document.elementFromPoint(mouseX, mouseY);

        if (eventTarget) {
            eventTarget.dispatchEvent(new MouseEvent("mousemove", { bubbles: true, clientX: mouseX, clientY: mouseY }));
            eventTarget.dispatchEvent(new MouseEvent("mouseover", { bubbles: true, clientX: mouseX, clientY: mouseY }));
            eventTarget.dispatchEvent(new MouseEvent("mouseenter", { bubbles: true, clientX: mouseX, clientY: mouseY }));
            eventTarget.dispatchEvent(new MouseEvent("mouseleave", { bubbles: true, clientX: mouseX, clientY: mouseY }));
        }

        requestAnimationFrame(moveMouse);
    }

    moveMouse();
}

// Run the script once every minute
setInterval(simulateHumanMouse, 60000);

// Run it immediately once on page load
simulateHumanMouse();
