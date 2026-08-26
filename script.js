document.addEventListener('DOMContentLoaded', () => {
    // Theme Switcher
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const body = document.body;

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        body.classList.toggle('dark-mode');

        const icon = themeToggleBtn.querySelector('i');
        if (body.classList.contains('light-mode')) {
            icon.className = 'fa-solid fa-sun';
        } else {
            icon.className = 'fa-solid fa-moon';
        }
    });

    // Hero Section Typing Effect
    const textToType = "Architecting High-Performance Digital Solutions";
    const typedTextElement = document.getElementById('typedText');
    let charIndex = 0;

    function typeEffect() {
        if (charIndex < textToType.length) {
            typedTextElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 60);
        }
    }
    typeEffect();

    // Stats Counter Animation (0 to Target)
    const counters = document.querySelectorAll('.counter-number');
    let hasAnimated = false;

    function startCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const increment = target / 50;
            let current = 0;

            const updateCount = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = Math.ceil(current);
                    setTimeout(updateCount, 30);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }

    // Scroll Observer for Stats Counter
    window.addEventListener('scroll', () => {
        const statsSection = document.querySelector('.stats-grid');
        if (statsSection) {
            const sectionPos = statsSection.getBoundingClientRect().top;
            const screenPos = window.innerHeight;

            if (sectionPos < screenPos && !hasAnimated) {
                hasAnimated = true;
                startCounters();
            }
        }
    });

    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        formStatus.style.color = '#10b981';
        formStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i> Thank you! Your message has been received successfully.';
        
        contactForm.reset();

        setTimeout(() => {
            formStatus.innerHTML = '';
        }, 5000);
    });
});
