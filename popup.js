document.getElementById('start').addEventListener('click', () => {
  chrome.scripting.executeScript({
    target: { allFrames: true },
    func: enableSpoofing
  });
});

document.getElementById('stop').addEventListener('click', () => {
  chrome.scripting.executeScript({
    target: { allFrames: true },
    func: disableSpoofing
  });
});

function enableSpoofing() {
  localStorage.setItem('spoofing', 'true');
}

function disableSpoofing() {
  localStorage.setItem('spoofing', 'false');
}
