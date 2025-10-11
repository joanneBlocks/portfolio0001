// THEME TOGGLE
const themeToggle = document.getElementById('themeToggle');

function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark');
    themeToggle.textContent = '☀️';
  } else {
    document.body.classList.remove('dark');
    themeToggle.textContent = '🌙';
  }
}

// Initialize theme from localStorage or system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  applyTheme(savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  applyTheme('dark');
} else {
  applyTheme('light');
}

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('show');
});

// MODAL logic 
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalLink = document.getElementById('modalLink');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.portfolio-card').forEach(card => {
  card.addEventListener('click', () => {
    const img = card.dataset.img || card.querySelector('img')?.src;
    const title = card.dataset.title || '';
    const desc = card.dataset.desc || '';
    const link = card.dataset.link || '#';
    modalImg.src = img;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalLink.href = link;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // lock background scroll
  });
});

modalLink.addEventListener('click', (e) => {
  e.preventDefault();
  const link = modalLink.href;
  if (link && link !== '#') {
    window.open(link, '_blank');
  } else {
    alert('Project link or demo will be added soon.');
  }
});


// close handlers
function closeTheModal() {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
closeModal.addEventListener('click', closeTheModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeTheModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('show')) closeTheModal();
});

// MODAL LINK CLICK
modalLink.addEventListener('click', (e) => {
  e.preventDefault();
  const link = modalLink.getAttribute('href');
  if (link && link !== '#') {
    window.open(link, '_blank'); // opens in a new tab
  } else {
    alert('Project link or demo will be added soon.');
  }
});


// AUTO-UPDATE YEAR IN FOOTER
document.getElementById("year").textContent = new Date().getFullYear();
