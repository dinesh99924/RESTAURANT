// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const reservationForm = document.getElementById('reservation-form');
const contactForm = document.getElementById('contact-form');
const newsletterForm = document.getElementById('newsletter-form');
const filterBtns = document.querySelectorAll('.filter-btn');
const menuCategories = document.querySelectorAll('.menu-category');
const socialLinks = document.querySelectorAll('.social-link');
const notification = document.getElementById('notification');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === #${current}) {
            link.classList.add('active');
        }
    });
});

// Menu filtering
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        menuCategories.forEach(category => {
            if (filter === 'all') {
                category.classList.remove('hidden');
                category.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                if (category.getAttribute('data-category') === filter) {
                    category.classList.remove('hidden');
                    category.style.animation = 'fadeInUp 0.5s ease-out';
                } else {
                    category.classList.add('hidden');
                }
            }
        });
    });
});

// Form validation and submission
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/\s/g, ''));
}

function showNotification(message, type = 'success') {
    notification.textContent = message;
    notification.className = notification ${type};
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 4000);
}

function setFormLoading(form, loading) {
    const submitBtn = form.querySelector('button[type="submit"]');
    if (loading) {
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Processing...';
    } else {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        submitBtn.textContent = submitBtn.getAttribute('data-original-text') || 'Submit';
    }
}

// Reservation form submission
reservationForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(reservationForm);
    const data = Object.fromEntries(formData);
    
    // Validation
    if (!data.name.trim()) {
        showNotification('Please enter your full name', 'error');
        return;
    }
    
    if (!validateEmail(data.email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    if (!validatePhone(data.phone)) {
        showNotification('Please enter a valid phone number', 'error');
        return;
    }
    
    if (!data.date) {
        showNotification('Please select a date', 'error');
        return;
    }
    
    // Check if date is not in the past
    const selectedDate = new Date(data.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
        showNotification('Please select a future date', 'error');
        return;
    }
    
    if (!data.time) {
        showNotification('Please select a time', 'error');
        return;
    }
    
    if (!data.guests) {
        showNotification('Please select number of guests', 'error');
        return;
    }
    
    // Simulate form submission
    setFormLoading(reservationForm, true);
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        showNotification('Reservation request submitted successfully! We will contact you shortly to confirm.', 'success');
        reservationForm.reset();
        
        // Set minimum date to today for future submissions
        const dateInput = document.getElementById('date');
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
        
    } catch (error) {
        showNotification('Sorry, there was an error submitting your reservation. Please try again.', 'error');
    } finally {
        setFormLoading(reservationForm, false);
    }
});

// Contact form submission
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Validation
    if (!data.name.trim()) {
        showNotification('Please enter your name', 'error');
        return;
    }
    
    if (!validateEmail(data.email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    if (!data.subject.trim()) {
        showNotification('Please enter a subject', 'error');
        return;
    }
    
    if (!data.message.trim()) {
        showNotification('Please enter your message', 'error');
        return;
    }
    
    // Simulate form submission
    setFormLoading(contactForm, true);
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        showNotification('Message sent successfully! We will get back to you soon.', 'success');
        contactForm.reset();
        
    } catch (error) {
        showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
    } finally {
        setFormLoading(contactForm, false);
    }
});

// Newsletter form submission
newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('newsletter-email').value;
    
    if (!validateEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission
    const submitBtn = newsletterForm.querySelector('button[type="submit"]');
    setFormLoading(newsletterForm, true);
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        showNotification('Successfully subscribed to our newsletter!', 'success');
        newsletterForm.reset();
        
    } catch (error) {
        showNotification('Sorry, there was an error subscribing. Please try again.', 'error');
    } finally {
        setFormLoading(newsletterForm, false);
    }
});

// Social media link interactions
socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = link.getAttribute('data-platform');
        
        // Simulate social media redirect
        showNotification(Redirecting to ${platform.charAt(0).toUpperCase() + platform.slice(1)}..., 'success');
        
        // In a real application, you would redirect to actual social media pages
        setTimeout(() => {
            // window.open(https://${platform}.com/bellavista, '_blank');
        }, 1000);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Menu item interactions
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        const itemName = item.querySelector('h4').textContent;
        const itemPrice = item.querySelector('.price').textContent;
        showNotification(${itemName} - ${itemPrice} added to your favorites!, 'success');
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature, .menu-item, .contact-item, .social-link').forEach(el => {
    observer.observe(el);
});

// Set minimum date for reservation form
document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
    
    // Store original button texts
    document.querySelectorAll('button[type="submit"]').forEach(btn => {
        btn.setAttribute('data-original-text', btn.textContent);
    });
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Navbar scroll effect
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Active navigation link highlighting
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === #${current}) {
            link.classList.add('active');
        }
    });
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add loading states and error handling for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
        img.style.opacity = '1';
    });
    
    img.addEventListener('error', () => {
        img.style.opacity = '0.5';
        console.warn('Failed to load image:', img.src);
    });
});

console.log('Bella Vista Restaurant website loaded successfully! 🍝');
