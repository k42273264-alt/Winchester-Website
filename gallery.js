document.addEventListener('DOMContentLoaded', () => {
    // Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');

            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // Lightbox Functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const closeLightbox = document.querySelector('.lightbox-close');
    const prevButton = document.querySelector('.lightbox-prev');
    const nextButton = document.querySelector('.lightbox-next');
    let currentIndex = 0;
    let visibleImages = [];

    function updateLightbox(index) {
        visibleImages = Array.from(galleryItems).filter(item => !item.classList.contains('hidden'));
        if (visibleImages.length === 0) return;
        const img = visibleImages[index].querySelector('img');
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightboxCaption.textContent = img.getAttribute('data-caption');
        currentIndex = index;
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            updateLightbox(index);
            lightbox.classList.add('active');
        });
    });

    closeLightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? visibleImages.length - 1 : currentIndex - 1;
        updateLightbox(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === visibleImages.length - 1) ? 0 : currentIndex + 1;
        updateLightbox(currentIndex);
    });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'ArrowLeft') {
            prevButton.click();
        } else if (e.key === 'ArrowRight') {
            nextButton.click();
        } else if (e.key === 'Escape') {
            closeLightbox.click();
        }
    });

    // Animation on Scroll
    const animatedElements = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    animatedElements.forEach(element => observer.observe(element));

    // Initialize existing scripts
    if (typeof initMagazineCarousels === 'function') {
        initMagazineCarousels();
    }
});