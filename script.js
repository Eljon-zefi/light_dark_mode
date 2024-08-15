const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const footer = document.querySelector('footer');
const cards = document.querySelectorAll('.card');
const projects = document.querySelectorAll('.project');

// Check for saved theme in localStorage
if (localStorage.getItem('theme') === 'dark') {
    enableDarkMode();
} else {
    disableDarkMode();
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

function enableDarkMode() {
    body.classList.add('dark-mode');
    header.classList.add('dark-mode');
    nav.classList.add('dark-mode');
    footer.classList.add('dark-mode');
    cards.forEach(card => card.classList.add('dark-mode'));
    projects.forEach(project => project.classList.add('dark-mode'));
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
}

function disableDarkMode() {
    body.classList.remove('dark-mode');
    header.classList.remove('dark-mode');
    nav.classList.remove('dark-mode');
    footer.classList.remove('dark-mode');
    cards.forEach(card => card.classList.remove('dark-mode'));
    projects.forEach(project => project.classList.remove('dark-mode'));
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
}
