// Theme Toggle
const themeToggle = document.querySelector(".theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("show");
});

// Toast Function
function showToast(message, icon = "🐧") {
  const toastContainer = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>${icon}</span> ${message}`;
  toastContainer.appendChild(toast);

  setTimeout(() => toast.remove(), 4000);
}

// Form Submission
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !service || !message || !email) {
    showToast("Please fill in all required fields.", "⚠️");
    return;
  }

  showToast(`Thank you, ${name}! Joanne received your message.`, "🐧");
  contactForm.reset();
});
