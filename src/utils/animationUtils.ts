
export const setupScrollAnimations = () => {
  // Detect when elements enter the viewport and add a class to animate them
  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  };

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  const elements = document.querySelectorAll('.appear-animation');
  
  elements.forEach(element => {
    observer.observe(element);
  });

  return () => {
    elements.forEach(element => {
      observer.unobserve(element);
    });
  };
};

export const getRandomDelay = () => {
  return `${Math.random() * 0.5}s`;
};

export const getRandomDuration = () => {
  // Return a random duration between 2-3s for animations
  return `${2 + Math.random()}s`;
};
