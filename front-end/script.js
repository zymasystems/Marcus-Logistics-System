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

    function updateState() {
        const isOther = mode.value === 'other';
        manual.style.display = isOther ? 'block' : 'none';
        saved.style.display = isOther ? 'none' : 'block';

        // Disable hidden inputs to prevent validation errors
        manual.querySelectorAll('input, select, textarea').forEach(input => {
            input.disabled = !isOther;
        });
    }

    mode.addEventListener('change', updateState);
    updateState(); // initial state on page load
}


    /* =========================
       INITIALISE PER PAGE
    ========================= */

    

});

