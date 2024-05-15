import { loadHeader } from './components/header.js';
import { loadFooter } from './components/footer.js';
import { loadHome } from './components/home.js';
import { loadAbout } from './components/about.js';

// Function to initialize the app
function init() {
    loadHeader();
    loadFooter();
    loadHome();

    // Navigation event listeners
    document.getElementById('header').addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const page = e.target.getAttribute('href').substring(1);
            navigate(page);
        }
    });
}

// Function to navigate between pages
function navigate(page) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';

    switch (page) {
        case 'home':
            loadHome();
            break;
        case 'about':
            loadAbout();
            break;
        default:
            loadHome();
    }
}

// Initialize the app on page load
window.addEventListener('DOMContentLoaded', init);
