document.addEventListener('DOMContentLoaded', () => {
  // Form Submission
  const form = document.getElementById('contactForm');
  const modal = document.getElementById('formModal');
  const closeModal = document.querySelector('.modal-close');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default for demo; remove if using Formsubmit
    modal.classList.add('active');
    form.reset();
  });

  closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  // Close modal on outside click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  // Collapsible Panels
  const collapsibleToggles = document.querySelectorAll('.collapsible-toggle');
  collapsibleToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;
      const isActive = toggle.classList.contains('active');

      // Close all panels
      collapsibleToggles.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-expanded', 'false');
        t.nextElementSibling.classList.remove('active');
      });

      // Open current panel
      if (!isActive) {
        toggle.classList.add('active');
        toggle.setAttribute('aria-expanded', 'true');
        content.classList.add('active');
      }
    });
  });

  // Initialize existing scripts
  if (typeof initMagazineCarousels === 'function') {
    initMagazineCarousels();
  }
});