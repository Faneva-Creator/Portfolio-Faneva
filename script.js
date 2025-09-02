alert("JS is working!");
// --- Sélecteurs
const themeBtn = document.getElementById('themeToggle');
const menuBtn = document.getElementById('menuToggle');
const nav = document.getElementById('siteNav');

// --- Vérifier que les boutons existent
if (themeBtn && menuBtn && nav) {
  
  // --- Thème: appliquer le thème sauvegardé (si présent)
  const savedTheme = localStorage.getItem('theme'); // 'dark' | 'light' | null
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeBtn.textContent = '☀️ Light';
    themeBtn.setAttribute('aria-pressed', 'true');
  } else {
    themeBtn.textContent = '🌙 Dark';
    themeBtn.setAttribute('aria-pressed', 'false');
  }
  
  // --- Toggle theme
  themeBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    if (isDark) {
      themeBtn.textContent = '☀️ Light';
      themeBtn.setAttribute('aria-pressed', 'true');
      localStorage.setItem('theme', 'dark');
    } else {
      themeBtn.textContent = '🌙 Dark';
      themeBtn.setAttribute('aria-pressed', 'false');
      localStorage.setItem('theme', 'light');
    }
  });
  
  // --- Menu mobile: ouvrir/fermer
  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    menuBtn.textContent = isOpen ? '✖ Close' : '☰ Menu';
  });
  
  // --- Fermer le menu quand on clique sur un lien (mobile)
  nav.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'a' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.textContent = '☰ Menu';
    }
  });
  
}
