import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initGSAPAnimations = () => {
  // Hero section entrance animation
  const heroTimeline = gsap.timeline();
  
  heroTimeline
    .from('.hero-title', {
      duration: 1.2,
      y: 80,
      opacity: 0,
      ease: 'power3.out',
    })
    .from('.hero-subtitle', {
      duration: 1,
      y: 60,
      opacity: 0,
      ease: 'power3.out',
    }, '-=0.6')
    .from('.hero-buttons', {
      duration: 0.8,
      y: 40,
      opacity: 0,
      ease: 'power3.out',
    }, '-=0.4')
    .from('.hero-stats', {
      duration: 0.8,
      y: 30,
      opacity: 0,
      stagger: 0.2,
      ease: 'power3.out',
    }, '-=0.4')
    .from('.hero-nft', {
      duration: 1.5,
      scale: 0.8,
      rotation: -10,
      opacity: 0,
      ease: 'elastic.out(1, 0.5)',
    }, '-=1');

  // Floating NFT animation
  gsap.to('.hero-nft', {
    duration: 4,
    y: -20,
    rotation: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut',
  });

  // Floating elements animation
  gsap.to('.floating-element-1', {
    duration: 3,
    x: 10,
    y: -15,
    rotation: 5,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut',
  });

  gsap.to('.floating-element-2', {
    duration: 3.5,
    x: -8,
    y: 12,
    rotation: -3,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut',
  });

  gsap.to('.floating-element-3', {
    duration: 2.8,
    x: 12,
    y: -8,
    rotation: 4,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut',
  });
};

export const initScrollAnimations = () => {
  // Collection cards animation
  gsap.fromTo('.collection-card', {
    y: 100,
    opacity: 0,
    scale: 0.9,
  }, {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.collection-section',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
    }
  });

  // About section animation
  gsap.fromTo('.about-content', {
    y: 60,
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top 75%',
      toggleActions: 'play none none reverse',
    }
  });

  // Roadmap items animation
  gsap.fromTo('.roadmap-item', {
    y: 80,
    opacity: 0,
    scale: 0.8,
  }, {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    stagger: 0.15,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.roadmap-section',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    }
  });

  // Team cards animation
  gsap.fromTo('.team-card', {
    y: 60,
    opacity: 0,
    rotationY: -15,
  }, {
    y: 0,
    opacity: 1,
    rotationY: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.team-section',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    }
  });
};

export const initNavbarAnimations = () => {
  // Navbar scroll effect
  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: { className: 'scrolled', targets: '.navbar' }
  });

  // Logo bounce animation
  gsap.to('.navbar-logo', {
    duration: 2,
    y: -5,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut',
  });
};

export const initHoverAnimations = () => {
  // Button hover effects with RGB
  document.querySelectorAll('.gsap-button').forEach((button) => {
    const tl = gsap.timeline({ paused: true });
    
    tl.to(button, {
      duration: 0.3,
      scale: 1.05,
      rotationX: 5,
      boxShadow: '0 10px 30px rgba(255, 0, 0, 0.5), 0 10px 40px rgba(0, 255, 0, 0.3), 0 10px 50px rgba(0, 0, 255, 0.2)',
      ease: 'power2.out',
    });

    button.addEventListener('mouseenter', () => tl.play());
    button.addEventListener('mouseleave', () => tl.reverse());
  });

  // Card hover effects with RGB glow
  document.querySelectorAll('.gsap-card').forEach((card) => {
    const tl = gsap.timeline({ paused: true });
    
    tl.to(card, {
      duration: 0.4,
      y: -10,
      scale: 1.02,
      boxShadow: '0 20px 40px rgba(255, 0, 100, 0.4), 0 10px 20px rgba(0, 255, 100, 0.3)',
      ease: 'power2.out',
    });

    card.addEventListener('mouseenter', () => tl.play());
    card.addEventListener('mouseleave', () => tl.reverse());
  });
};

export const initRGBAnimations = () => {
  // RGB cycling for special elements
  gsap.to('.rgb-special', {
    duration: 3,
    filter: 'hue-rotate(360deg)',
    repeat: -1,
    ease: 'none',
  });

  // RGB glow pulse
  gsap.to('.rgb-pulse', {
    duration: 2,
    boxShadow: '0 0 40px #ff0000',
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut',
  });
};

export const createParallaxEffect = () => {
  // Background elements parallax
  gsap.to('.parallax-slow', {
    yPercent: -50,
    ease: 'none',
    scrollTrigger: {
      trigger: 'body',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });

  gsap.to('.parallax-fast', {
    yPercent: -100,
    ease: 'none',
    scrollTrigger: {
      trigger: 'body',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });
};