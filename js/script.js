 // Hamburger Menu Toggle
 const hamburger = document.querySelector('.hamburger');
 const navUl = document.querySelector('nav ul');
 hamburger.addEventListener('click', () => {
     navUl.classList.toggle('active');
     hamburger.querySelector('i').classList.toggle('fa-bars');
     hamburger.querySelector('i').classList.toggle('fa-times');
 });

 // Navigation Scroll Effect
 window.addEventListener('scroll', () => {
     const nav = document.querySelector('nav');
     if (window.scrollY > 50) {
         nav.classList.add('scrolled');
     } else {
         nav.classList.remove('scrolled');
     }
 });

 // Smooth Scroll for Navigation
 document.querySelectorAll('nav a').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         const targetId = this.getAttribute('href').substring(1);
         const targetElement = document.getElementById(targetId);
         if (targetId === 'home') {
             window.scrollTo({ top: 0, behavior: 'smooth' });
         } else if (targetElement) {
             targetElement.scrollIntoView({ behavior: 'smooth' });
         } else {
             window.location.href = this.getAttribute('href');
         }
     });
 });

 // Scroll Reveal for Developer Cards
 const developerCards = document.querySelectorAll('.developer-card');
 const revealOnScroll = () => {
     developerCards.forEach(card => {
         const cardTop = card.getBoundingClientRect().top;
         const windowHeight = window.innerHeight;
         if (cardTop < windowHeight * 0.85) {
             card.classList.add('animate__animated', 'animate__fadeInUp');
         }
     });
 };
 window.addEventListener('scroll', revealOnScroll);
 revealOnScroll();

 // Horizontal Scroll Buttons
 const scrollContainer = document.querySelector('.scroll-container');
 const scrollLeftBtn = document.querySelector('.scroll-btn.left');
 const scrollRightBtn = document.querySelector('.scroll-btn.right');

 scrollLeftBtn.addEventListener('click', () => {
     scrollContainer.scrollBy({ left: -clamp(220, 60 * window.innerWidth / 100, 300), behavior: 'smooth' });
 });

 scrollRightBtn.addEventListener('click', () => {
     scrollContainer.scrollBy({ left: clamp(220, 60 * window.innerWidth / 100, 300), behavior: 'smooth' });
 });

 // Clamp function
 function clamp(min, val, max) {
     return Math.min(Math.max(val, min), max);
 }

 // Initialize Vanilla Tilt for Developer Cards
 VanillaTilt.init(document.querySelectorAll('.developer-card'), {
     max: 10,
     speed: 400,
     glare: true,
     'max-glare': 0.3,
 });

 // Parallax Effect for Hero Section
 window.addEventListener('scroll', () => {
     const header = document.querySelector('header');
     const scrollPosition = window.scrollY;
     header.style.backgroundPositionY = `${scrollPosition * 0.3}px`;
 });

 // Newsletter Form Submission (Mock)
 document.querySelector('.newsletter form').addEventListener('submit', (e) => {
     e.preventDefault();
     alert('Thank you for subscribing!');
 });