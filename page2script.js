let selectedDevice = null;

document.getElementById("pcBtn").addEventListener("click", () => {
  selectedDevice = "PC 🖥️";
  showToolButtons();
});

document.getElementById("mobileBtn").addEventListener("click", () => {
  selectedDevice = "Mobile 📱";
  showToolButtons();
});

function showToolButtons() {
  const tools = document.querySelector(".tool-buttons");
  tools.style.display = "flex";
}

document.getElementById("qrBtn").addEventListener("click", () => {
  if (selectedDevice) {
    localStorage.setItem("passly-device", selectedDevice);
    document.getElementById("overlayLoader").style.display = "flex";
    setTimeout(() => {
      window.location.href = "page3.html";
    }, 1000);
  }
});

document.getElementById("passwordBtn").addEventListener("click", () => {
  if (selectedDevice) {
    localStorage.setItem("passly-device", selectedDevice);
    document.getElementById("overlayLoader").style.display = "flex";
    setTimeout(() => {
      window.location.href = "page4.html";
    }, 1000);
  }
});
