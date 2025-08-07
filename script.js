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