import { useEffect } from 'react';

const useScrollReveal = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px -100px 0px'
    };

    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          // Optional: stop observing once revealed
          intersectionObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const observeElements = () => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => intersectionObserver.observe(el));
    };

    // Initial observation
    observeElements();

    // Watch for DOM changes (lazy loaded content)
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          observeElements();
        }
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};

export default useScrollReveal;
