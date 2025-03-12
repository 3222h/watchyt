document.getElementById("startTimer").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "startTimer" });
});
