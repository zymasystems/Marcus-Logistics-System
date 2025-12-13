document.addEventListener('DOMContentLoaded', () => {

    /* MOBILE MENU */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            menuToggle.classList.toggle('open');

            const isOpen = navLinks.classList.contains('open');
            menuToggle.setAttribute('aria-label', isOpen ? 'close menu' : 'open menu');
        });
    }

    /* SMOOTH SCROLL */
    document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (!target) return;

            e.preventDefault();
            navLinks?.classList.remove('open');
            menuToggle?.classList.remove('open');

            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    /* CLIENT MODE TOGGLE */
    const clientMode = document.getElementById('clientMode');
    const manualClient = document.getElementById('manualClient');
    const savedClient = document.getElementById('savedClient');

    if (clientMode && manualClient && savedClient) {
        clientMode.addEventListener('change', () => {
            const isOther = clientMode.value === 'other';
            manualClient.style.display = isOther ? 'block' : 'none';
            savedClient.style.display = isOther ? 'none' : 'block';
        });
    }

});
