document.addEventListener('DOMContentLoaded', () => {
    // Modal Functionality
    const modal = document.getElementById('attractionModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDetails = document.getElementById('modalDetails');
    const closeModal = document.querySelector('.modal-close');

    const attractionDetails = {
        'cathedral': {
            title: 'Winchester Cathedral',
            details: 'Just steps from Winchester Wessex Hotel, this magnificent medieval cathedral features stunning Gothic architecture, historic crypts, and the famous Winchester Bible. Perfect for history enthusiasts and those seeking a cultural experience.'
        },
        'south-downs': {
            title: 'South Downs National Park',
            details: 'A short drive from Winchester, the South Downs offers scenic trails and dog-friendly walks through rolling hills and picturesque landscapes. Ideal for nature lovers and outdoor adventures.'
        },
        'great-hall': {
            title: 'The Great Hall',
            details: 'Located in Winchester’s historic city centre, the Great Hall houses the legendary Round Table of King Arthur. A must-visit for those interested in medieval history and local legends.'
        }
    };

    document.querySelectorAll('.details-btn').forEach(button => {
        button.addEventListener('click', () => {
            const attraction = button.getAttribute('data-attraction');
            modalTitle.textContent = attractionDetails[attraction].title;
            modalDetails.textContent = attractionDetails[attraction].details;
            modal.classList.add('active');
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
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
});