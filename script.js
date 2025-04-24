// Dark mode toggle functionality
document.getElementById('darkToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    // Optionally, save preference to localStorage:
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// On page load, set theme from localStorage if available
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }
});
