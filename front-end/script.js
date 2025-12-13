document.addEventListener('DOMContentLoaded', () => {

    /* =========================
       MOBILE MENU
    ========================= */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            menuToggle.classList.toggle('open');

            const isOpen = navLinks.classList.contains('open');
            menuToggle.setAttribute(
                'aria-label',
                isOpen ? 'close menu' : 'open menu'
            );
        });
    }

    /* =========================
       SMOOTH SCROLL (IN-PAGE)
    ========================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (!target) return;

            e.preventDefault();

            navLinks?.classList.remove('open');
            menuToggle?.classList.remove('open');

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    /* =========================
       CLIENT MODE TOGGLE (REUSABLE)
    ========================= */
    function setupClientToggle(modeId, manualId, savedId) {
        const mode = document.getElementById(modeId);
        const manual = document.getElementById(manualId);
        const saved = document.getElementById(savedId);

        if (!mode || !manual || !saved) return;

        mode.addEventListener('change', () => {
            const isOther = mode.value === 'other';
            manual.style.display = isOther ? 'block' : 'none';
            saved.style.display = isOther ? 'none' : 'block';
        });
    }

    /* =========================
       INITIALISE PER PAGE
    ========================= */

    // Booking page
    setupClientToggle(
        'bookingClientMode',
        'bookingManualClient',
        'bookingSavedClient'
    );

    // Courier page
    setupClientToggle(
        'courierClientMode',
        'courierManualClient',
        'courierSavedClient'
    );

});
