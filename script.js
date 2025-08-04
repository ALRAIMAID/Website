// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 60,
      behavior: 'smooth'
    });
  });
});

// Simple form submission alert
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you! We will contact you shortly.');
});
