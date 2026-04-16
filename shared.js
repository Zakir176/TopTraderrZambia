// ===== Header Scroll Effect =====
const header = document.getElementById('site-header');
if (header) {
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// ===== Mobile Menu =====
const mobileToggle = document.getElementById('mobile-toggle');
const navOverlay = document.getElementById('nav-overlay');
const closeNav = document.getElementById('close-nav');
const mobileLinks = document.querySelectorAll('.mobile-link');

function openMenu() { navOverlay.classList.add('active'); document.body.style.overflow = 'hidden'; }
function closeMenu() { navOverlay.classList.remove('active'); document.body.style.overflow = ''; }

if (mobileToggle) mobileToggle.addEventListener('click', openMenu);
if (closeNav) closeNav.addEventListener('click', closeMenu);
mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

// ===== Scroll Reveal Animations =====
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

// ===== Smooth Scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
