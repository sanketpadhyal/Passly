// Display device info
const device = localStorage.getItem("passly-device") || "Unknown";
document.getElementById("deviceInfo").textContent = device;

// Button hits
document.getElementById("textQRBtn").addEventListener("click", () => {
  document.getElementById("textInputContainer").style.display = "flex";
  document.getElementById("imageInputContainer").style.display = "none";
  document.getElementById("qrResult").style.display = "none";
});

document.getElementById("imageQRBtn").addEventListener("click", () => {
  document.getElementById("textInputContainer").style.display = "none";
  document.getElementById("imageInputContainer").style.display = "block";
  document.getElementById("qrResult").style.display = "none";
});

// Text box glow
const input = document.getElementById("qrText");
input.addEventListener("input", () => {
  if (input.value.trim().length > 0) {
    input.classList.add("glow");
  } else {
    input.classList.remove("glow");
  }
});

// Generate QR from text
document.getElementById("generateQR").addEventListener("click", () => {
  const text = input.value.trim();
  if (text) {
    const qr = new QRious({
      value: text,
      size: 200,
      level: 'H'
    });

    const qrImg = document.getElementById("qrImage");
    qrImg.src = qr.toDataURL();
    document.getElementById("qrResult").style.display = "block";

    const downloadLink = document.getElementById("downloadQR");
    downloadLink.href = qr.toDataURL("image/png");
  }
});

// Image to QR 
document.getElementById("fileInput").addEventListener("change", handleImage);

function handleImage(event) {
  const file = event.target.files[0];
  if (!file || !file.type.startsWith("image/")) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const qr = new QRious({
      value: e.target.result,
      size: 200,
      level: 'H'
    });
    const qrImg = document.getElementById("qrImage");
    qrImg.src = qr.toDataURL();
    document.getElementById("qrResult").style.display = "block";
    document.getElementById("downloadQR").href = qr.toDataURL("image/png");
  };
  reader.readAsDataURL(file);
}

// Drag & Drop
const dropZone = document.getElementById("dropZone");
dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZone.style.borderColor = "#00ffaa";
});
dropZone.addEventListener("dragleave", () => {
  dropZone.style.borderColor = "#00bfff";
});
dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.style.borderColor = "#00bfff";
  const file = e.dataTransfer.files[0];
  if (file) {
    document.getElementById("fileInput").files = e.dataTransfer.files;
    handleImage({ target: { files: [file] } });
  }
});
