


document.querySelector('.menu-toggle').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = this;
    
    // Toggle classes
    navLinks.classList.toggle('open');
    menuToggle.classList.toggle('open');
    
    // Change aria-label for accessibility
    const isOpen = navLinks.classList.contains('open');
    menuToggle.setAttribute('aria-label', isOpen ? 'close menu' : 'open menu');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      // Close mobile menu if open
      const menuToggle = document.querySelector('.menu-toggle');
      if (menuToggle.classList.contains('open')) {
        menuToggle.classList.remove('open');
        document.querySelector('.nav-links').classList.remove('open');
      }
      
      // Smooth scroll to target
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      // Close mobile menu if open
      const menuToggle = document.querySelector('.menu-toggle');
      if (menuToggle.classList.contains('open')) {
        menuToggle.classList.remove('open');
        document.querySelector('.nav-links').classList.remove('open');
      }
      
      // Smooth scroll to target
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});