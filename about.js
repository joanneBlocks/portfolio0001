// 🌗 Theme toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "🌞" : "🌙";
});

// 🍔 Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("show");
});

// Close menu on link click (mobile UX improvement)
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("show");
  });
});

// 🖼 Stick expand/compress logic
const sticks = document.querySelectorAll(".stick");
sticks.forEach(stick => {
  const info = document.createElement("div");
  info.classList.add("stick-info");
  info.innerHTML = `
    <h2>${stick.dataset.title}</h2>
    <p>${stick.dataset.desc}</p>
  `;
  stick.appendChild(info);

  stick.addEventListener("click", () => {
    if (stick.classList.contains("active")) {
      stick.classList.remove("active");
      return;
    }
    sticks.forEach(s => s.classList.remove("active"));
    stick.classList.add("active");
  });
});

// Stick Info Button
document.querySelectorAll('.stick').forEach(stick => {
  stick.addEventListener('click', () => {
    document.querySelectorAll('.stick').forEach(s => s.classList.remove('active'));
    stick.classList.add('active');

    const title = stick.getAttribute('data-title');
    const desc = stick.getAttribute('data-desc');
    const btnText = stick.getAttribute('data-btn') || "Read More";

    stick.innerHTML = `
      <div class="stick-info">
        <h2>${title}</h2>
        <p>${desc}</p>
        <button class="stick-btn">${btnText}</button>
      </div>
    `;
  });
});
