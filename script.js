/* 👀 Eye Tracking */
const eyes = document.querySelectorAll('.eye');
const pupils = document.querySelectorAll('.pupil');

document.addEventListener('mousemove', (e) => {
  eyes.forEach((eye, index) => {
    const rect = eye.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const dx = e.clientX - eyeCenterX;
    const dy = e.clientY - eyeCenterY;
    const angle = Math.atan2(dy, dx);

    const maxMove = 12;
    const pupilX = Math.cos(angle) * maxMove;
    const pupilY = Math.sin(angle) * maxMove;

    pupils[index].style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  });
});

/* 💬 Typewriter Effect with Random Titles */
const titles = [
  "Full-Stack Web Developer",
  "Visual Artist",
  "Instructor",
  "UI/UX Designer",
  "Creative Coder"
];

const typewriter = document.getElementById("typewriter");
let i = 0;
let j = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = titles[j];
  const speed = isDeleting ? 50 : 100;

  if (!isDeleting && i < currentText.length) {
    typewriter.textContent = currentText.substring(0, i + 1);
    i++;
  } else if (isDeleting && i > 0) {
    typewriter.textContent = currentText.substring(0, i - 1);
    i--;
  } else if (!isDeleting && i === currentText.length) {
    setTimeout(() => (isDeleting = true), 1000);
  } else if (isDeleting && i === 0) {
    isDeleting = false;
    j = Math.floor(Math.random() * titles.length);
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

/* 🌗 Theme Toggle */
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "🌞" : "🌙";
});
