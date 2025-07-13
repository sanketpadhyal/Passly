function toggleMode() {
  document.body.classList.toggle('light-mode');
  localStorage.setItem("mode", document.body.classList.contains('light-mode') ? 'light' : 'dark');
}

window.onload = () => {
  const mode = localStorage.getItem("mode");
  if (mode === "light") {
    document.body.classList.add("light-mode");
  }
};

function startLoading() {
  const overlay = document.getElementById("loading-overlay");
  overlay.style.display = "flex";

  setTimeout(() => {
    window.location.href = "page2.html";
  }, 1000); // 1 second delay
}
