// Show selected device from localStorage
const device = localStorage.getItem("passly-device") || "Unknown";
document.getElementById("deviceInfo").innerText = device;

function generatePassword() {
  const platform = document.getElementById("platform").value.trim();
  const fname = document.getElementById("fname").value.trim();
  const mname = document.getElementById("mname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const favnum = document.getElementById("favnum").value.trim();

  if (!platform || !fname || !lname || !favnum) {
    document.getElementById("passwordResult").innerText = "❗ Please fill in all required fields.";
    return;
  }

  const base = platform.slice(0, 3).toUpperCase() +
               fname.slice(0, 2).toLowerCase() +
               (mname ? mname.charAt(0).toUpperCase() : '') +
               lname.slice(-2).toUpperCase() +
               favnum;

  const randomSymbols = "!@#$%^&*";
  const randomChar = () => randomSymbols[Math.floor(Math.random() * randomSymbols.length)];

  let password = base + randomChar() + Math.floor(100 + Math.random() * 900);

  // Shuffle password
  password = password.split('').sort(() => 0.5 - Math.random()).join('');

  document.getElementById("passwordResult").innerText = `🔐 ${password}`;
}

function copyPassword() {
  const text = document.getElementById("passwordResult").innerText.replace("🔐 ", "");
  if (text && !text.includes("Please fill")) {
    navigator.clipboard.writeText(text).then(() => {
      alert("✅ Password copied to clipboard!");
    });
  }
}
