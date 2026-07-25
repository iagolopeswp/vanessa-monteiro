import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initAnimations() {
  if (typeof window === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  // Fade in up animation for all sections
  const sections = document.querySelectorAll("section");
  
  sections.forEach((section) => {
    const title = section.querySelector("h1, h2");
    const content = section.querySelectorAll("p, .hero__actions, .about__text > p, .method-step, .testimonial-card, .plan-card, .benefit-card");
    const image = section.querySelector("img");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    });

    if (title) {
      tl.fromTo(title, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }

    if (content.length > 0) {
      tl.fromTo(content,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        "-=0.4"
      );
    }

    if (image && !section.classList.contains('hero')) {
      tl.fromTo(image.parentElement,
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      );
    }
  });

  // Specific animation for Hero image
  const heroImage = document.querySelector(".hero__image-wrapper");
  if (heroImage) {
    gsap.fromTo(heroImage,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
    );
  }

  // Scrub animation for Orbit Items
  const orbitContainer = document.querySelector('.orbit-container');
  if (orbitContainer) {
    const orbitItems = gsap.utils.toArray('.orbit-item');
    orbitItems.forEach((item, index) => {
      gsap.fromTo(item,
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: orbitContainer,
            start: "top 80%",
            end: "center 50%",
            scrub: 1, // smooth scrubbing
          }
        }
      );
    });
  }
}
