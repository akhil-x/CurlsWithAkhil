// Loading screen
document.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.getElementById('loading-screen');
  setTimeout(() => {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }, 1000);
});

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.body;

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  body.classList.toggle('menu-open');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuBtn.classList.remove('active');
    mobileMenu.classList.remove('active');
    body.classList.remove('menu-open');
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Enhanced scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '50px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.program-card, .feature, .testimonial').forEach(el => {
  observer.observe(el);
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Enhanced parallax effect
window.addEventListener('scroll', function() {
  if (window.innerWidth > 768) {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero, .why-us, .contact');
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.5;
      const offset = scrolled * speed;
      element.style.backgroundPositionY = `${offset}px`;
    });
  }
});

// Preload images for better performance
window.addEventListener('load', () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (img.getAttribute('src')) {
      const newImg = new Image();
      newImg.src = img.getAttribute('src');
    }
  });
});