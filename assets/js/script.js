/* ========================================
   PORTFOLIO JAVASCRIPT - RADIT
   Interactive & Responsive Portfolio
   ======================================== */

// ========== DOM ELEMENTS ==========
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-menu a');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('[data-category]');
const faqItems = document.querySelectorAll('.faq-item');
const faqQuestions = document.querySelectorAll('.faq-question');

// ========== MOBILE MENU TOGGLE ==========
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ========== SMOOTH SCROLL ACTIVE LINK ==========
window.addEventListener('scroll', () => {
    let current = '';
    
    // Get current page
    const pathname = window.location.pathname;
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (pathname.includes(href.replace('.html', '')) || 
            (pathname === '/' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// ========== CONTACT FORM HANDLING ==========
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Validate form
        if (!data.name || !data.email || !data.subject || !data.message) {
            showFormMessage('Mohon isi semua field yang wajib diisi!', 'error');
            return;
        }

        // Validate email
        if (!isValidEmail(data.email)) {
            showFormMessage('Email tidak valid!', 'error');
            return;
        }

        try {
            // Simulate form submission (replace with actual API call)
            console.log('Form Data:', data);
            
            // Show success message
            showFormMessage('✓ Terima kasih! Pesan Anda telah kami terima. Kami akan segera merespons.', 'success');
            
            // Reset form
            contactForm.reset();

            // Optional: Send email via service (uncomment to use)
            // await sendEmail(data);

        } catch (error) {
            showFormMessage('❌ Terjadi kesalahan. Silakan coba lagi!', 'error');
            console.error('Error:', error);
        }
    });
}

// Show form message
function showFormMessage(message, type) {
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = 'form-message show ' + type;
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.classList.remove('show');
        }, 5000);
    }
}

// Validate email format
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Optional: Send email via EmailJS (uncomment and add your EmailJS config)
/*
async function sendEmail(data) {
    // Uncomment and configure with your EmailJS credentials
    // emailjs.init("YOUR_PUBLIC_KEY");
    // const response = await emailjs.send("service_id", "template_id", data);
    // return response;
}
*/

// ========== PROJECT FILTER ==========
if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Get filter value
            const filterValue = btn.getAttribute('data-filter');
            
            // Filter projects
            filterProjects(filterValue);
        });
    });
}

function filterProjects(filter) {
    projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
            card.classList.remove('hidden');
            // Trigger animation
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.visibility = 'visible';
            }, 10);
        } else {
            card.classList.add('hidden');
            card.style.opacity = '0';
            card.style.visibility = 'hidden';
        }
    });
}

// ========== FAQ ACCORDION ==========
if (faqQuestions.length > 0) {
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            
            // Close other items
            faqItems.forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });
            
            // Toggle current item
            faqItem.classList.toggle('active');
        });
    });
}

// ========== SCROLL ANIMATIONS (Intersection Observer) ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with scroll-animate class
document.addEventListener('DOMContentLoaded', () => {
    // Add scroll-animate class to elements
    document.querySelectorAll('.project-card, .skill-item, .testimonial-card, .info-item').forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });

    // Animate section titles
    document.querySelectorAll('.section-title').forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
});

// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop;
});

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ========== ACTIVE NAV LINK ON PAGE LOAD ==========
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPage === href || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// ========== PROGRESS BAR ANIMATION ==========
const progressBars = document.querySelectorAll('.progress');
const progressObserverOptions = {
    threshold: 0.5
};

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Trigger animation (CSS already has it, just make sure it plays)
            entry.target.style.animation = 'none';
            setTimeout(() => {
                entry.target.style.animation = '';
            }, 10);
            progressObserver.unobserve(entry.target);
        }
    });
}, progressObserverOptions);

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// ========== UTILITY: COPY TO CLIPBOARD ==========
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied: ' + text);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// ========== UTILITY: SCROLL TO TOP ==========
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ========== THEME TOGGLE (Optional - Uncomment to use) ==========
/*
const themeToggle = document.getElementById('themeToggle');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.documentElement.style.filter = 'invert(1) hue-rotate(180deg)';
        
        // Save preference to localStorage
        const isDark = localStorage.getItem('darkMode');
        localStorage.setItem('darkMode', !isDark);
    });

    // Apply saved theme on load
    if (localStorage.getItem('darkMode')) {
        document.documentElement.style.filter = 'invert(1) hue-rotate(180deg)';
    }
}
*/

// ========== PRELOAD IMAGES ==========
function preloadImages() {
    const images = document.querySelectorAll('img[src]');
    images.forEach(img => {
        const preload = new Image();
        preload.src = img.src;
    });
}

window.addEventListener('load', preloadImages);

// ========== PAGE LOAD ANIMATION ==========
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to hero section
    const heroSection = document.querySelector('.hero, .page-header');
    if (heroSection) {
        heroSection.style.animation = 'fadeIn 0.6s ease';
    }
});

// ========== KEYBOARD SHORTCUT: ESC to close menu ==========
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        menuToggle?.classList.remove('active');
        navMenu?.classList.remove('active');
    }
});

// ========== PERFORMANCE: Lazy load images (Optional) ==========
if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ========== DEBUGGING: Check if all elements loaded ==========
function debugLog() {
    console.log('%c Portfolio Template Loaded ✓', 'color: #6c5ce7; font-size: 16px; font-weight: bold;');
    console.log('Mobile Menu:', menuToggle ? '✓' : '✗');
    console.log('Contact Form:', contactForm ? '✓' : '✗');
    console.log('Project Filters:', filterBtns.length > 0 ? '✓' : '✗');
    console.log('FAQ Items:', faqItems.length > 0 ? '✓' : '✗');
    console.log('Navigation Links:', navLinks.length > 0 ? '✓' : '✗');
}

// Run debug on load
window.addEventListener('load', debugLog);

// ========== CUSTOM: Add your own functions below ==========
// Contoh: Tambahkan custom function sesuai kebutuhan Anda
/*
function myCustomFunction() {
    console.log('Custom function running!');
}

// Call function when needed
// myCustomFunction();
*/
