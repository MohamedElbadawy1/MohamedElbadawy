// Download Resume button functionality
const downloadBtn = document.getElementById('download-resume');
downloadBtn.addEventListener('click', function() {
    window.open('resume.pdf', '_blank');
});

// Contact form functionality
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Show a simple success message
    contactForm.innerHTML = '<p style="color:#2563eb;font-weight:bold;">Thank you for reaching out! I will get back to you soon.</p>';
});

// Certificate details toggle functionality
function toggleCertDetails(button) {
    const details = button.nextElementSibling;
    if (details.style.display === 'none') {
        details.style.display = 'block';
        button.textContent = 'Hide Details';
    } else {
        details.style.display = 'none';
        button.textContent = 'View Details';
    }
}

// Scrollspy: highlight active nav link based on section in view
(function initScrollSpy() {
    const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
    const sections = Array.from(document.querySelectorAll('section[id]'));

    const idToLink = new Map(
        navLinks.map((link) => [link.getAttribute('href').replace('#', ''), link])
    );

    function setActive(id) {
        navLinks.forEach((l) => l.classList.remove('active'));
        const link = idToLink.get(id);
        if (link) link.classList.add('active');
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                }
            });
        },
        {
            root: null,
            rootMargin: '0px 0px -40% 0px', // trigger a bit before center
            threshold: 0.4,
        }
    );

    sections.forEach((sec) => observer.observe(sec));

    // Also set active on click immediately
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.forEach((l) => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Initial state on load (in case a hash is present)
    const initial = window.location.hash.replace('#', '') || (sections[0] && sections[0].id);
    if (initial) setActive(initial);
})(); 