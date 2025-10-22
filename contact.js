// Contact Form Handler
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Simulate form submission (replace with actual API call)
        try {
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span>Sending...</span>';
            submitBtn.disabled = true;
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            formMessage.textContent = 'Thank you! Your message has been sent successfully.';
            formMessage.className = 'form-message success';
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.className = 'form-message';
            }, 5000);
            
        } catch (error) {
            // Show error message
            formMessage.textContent = 'Oops! Something went wrong. Please try again.';
            formMessage.className = 'form-message error';
            
            // Reset button
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.className = 'form-message';
            }, 5000);
        }
    });
    
    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.validity.valid) {
                input.style.borderColor = 'var(--accent-primary)';
            } else {
                input.style.borderColor = '#ef4444';
            }
        });
        
        input.addEventListener('input', () => {
            if (input.validity.valid) {
                input.style.borderColor = 'var(--border-color)';
            }
        });
    });
}

// Add animation to contact methods on scroll
const contactMethods = document.querySelectorAll('.contact-method');

const methodObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 100);
        }
    });
}, {
    threshold: 0.1
});

contactMethods.forEach(method => {
    method.style.opacity = '0';
    method.style.transform = 'translateX(-20px)';
    method.style.transition = 'all 0.6s ease';
    methodObserver.observe(method);
});
