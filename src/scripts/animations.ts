import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // 1. Sequencial Reveals
  const revealElements = document.querySelectorAll('h1, h2, .hero__subtitle, .benefit-card, .plan-card, .method-step');
  
  revealElements.forEach((el) => {
    gsap.from(el, {
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // 2. Scrub Parallax
  const heroImage = document.querySelector('.hero__image-wrapper img');
  if (heroImage) {
    gsap.to(heroImage, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }

  // 3. Gradient Animation on Scroll
  const gradients = document.querySelectorAll('.headline-gradient');
  gradients.forEach(grad => {
    gsap.to(grad, {
      backgroundPosition: "100% 50%",
      ease: "none",
      scrollTrigger: {
        trigger: grad,
        start: "top 90%",
        end: "bottom 10%",
        scrub: true
      }
    });
  });
}
