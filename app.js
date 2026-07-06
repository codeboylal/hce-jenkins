// Toggles the mobile nav menu open/closed when the hamburger button is tapped.
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Fades cards in as they scroll into view. Skips the animation entirely
// if the visitor's OS has "reduce motion" turned on.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const cards = document.querySelectorAll('.card');

if (prefersReducedMotion) {
  cards.forEach((card) => card.classList.add('in-view'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach((card) => observer.observe(card));
}
