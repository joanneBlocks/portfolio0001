// 🌙 THEME TOGGLE
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// 🍔 HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("show");
});

// 🧁 TOAST FUNCTION
function showToast(message) {
  const toastContainer = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3500);
}

// 🎓 BUTTON LOGIC
document.querySelectorAll(".learn-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    showToast("More details coming soon!");
  });
});
