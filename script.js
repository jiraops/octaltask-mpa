// JavaScript for OctalTask Landing Page

class LandingPageController {
  constructor() {
    this.darkMode = false;
    this.mobileMenuOpen = false;
    this.visibleFAQ = null;
    this.activeSection = 'hero';
    this.init();
  }

  init() {
    this.setupDarkMode();
    this.setupMobileMenu();
    this.setupScrollAnimations();
    this.setupSmoothScrolling();
    this.setupSectionTracking();
    this.setupFAQ();
    this.setupNavHighlight();
  }

  setupDarkMode() {
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');

    // Initialize dark mode based on saved preference or system preference
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.enableDarkMode();
    }

    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        this.toggleDarkMode();
      });
    }
  }

  enableDarkMode() {
    this.darkMode = true;
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    this.updateThemeIcon();
  }

  disableDarkMode() {
    this.darkMode = false;
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    this.updateThemeIcon();
  }

  toggleDarkMode() {
    if (this.darkMode) {
      this.disableDarkMode();
    } else {
      this.enableDarkMode();
    }
  }

  updateThemeIcon() {
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    if (this.darkMode) {
      if (sunIcon) sunIcon.classList.add('hidden');
      if (moonIcon) moonIcon.classList.remove('hidden');
    } else {
      if (sunIcon) sunIcon.classList.remove('hidden');
      if (moonIcon) moonIcon.classList.add('hidden');
    }
  }

  setupMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');

    if (menuBtn) {
      menuBtn.addEventListener('click', () => {
        this.mobileMenuOpen = !this.mobileMenuOpen;

        if (this.mobileMenuOpen) {
          if (mobileMenu) mobileMenu.classList.remove('hidden');
          if (menuIcon) menuIcon.classList.add('hidden');
          if (closeIcon) closeIcon.classList.remove('hidden');
        } else {
          if (mobileMenu) mobileMenu.classList.add('hidden');
          if (menuIcon) menuIcon.classList.remove('hidden');
          if (closeIcon) closeIcon.classList.add('hidden');
        }
      });
    }

    // Close mobile menu when clicking nav links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.mobileMenuOpen = false;
        if (mobileMenu) mobileMenu.classList.add('hidden');
        if (menuIcon) menuIcon.classList.remove('hidden');
        if (closeIcon) closeIcon.classList.add('hidden');
      });
    });
  }

  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => {
      observer.observe(element);
    });

    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
      setTimeout(() => {
        observer.observe(card);
      }, index * 150);
    });
  }

  setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            const headerHeight = 80; // Account for fixed header
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }

  setupSectionTracking() {
    const sections = ['hero', 'features', 'how-it-works', 'about', 'testimonials', 'faq'];

    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -70% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
          this.updateActiveNavLink();
        }
      });
    }, observerOptions);

    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        sectionObserver.observe(section);
      }
    });
  }

  updateActiveNavLink() {
    // Remove active class from all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.classList.remove('text-blue-600', 'dark:text-blue-400');
      link.classList.add('text-gray-700', 'dark:text-gray-300');
    });

    // Add active class to current section nav link
    const activeLink = document.querySelector(`a[href="#${this.activeSection}"]`);
    if (activeLink) {
      activeLink.classList.remove('text-gray-700', 'dark:text-gray-300');
      activeLink.classList.add('text-blue-600', 'dark:text-blue-400');
    }
  }

  setupFAQ() {
    const faqButtons = document.querySelectorAll('.faq-button');

    faqButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        this.toggleFAQ(index);
      });
    });
  }

  toggleFAQ(index) {
    const faqContent = document.getElementById(`faq-content-${index}`);
    const faqIcon = document.getElementById(`faq-icon-${index}`);

    if (this.visibleFAQ === index) {
      // Close current FAQ
      this.visibleFAQ = null;
      if (faqContent) {
        faqContent.classList.add('max-h-0', 'py-0');
        faqContent.classList.remove('max-h-96', 'p-5');
      }
      if (faqIcon) {
        faqIcon.classList.remove('rotate-180');
      }
    } else {
      // Close previously open FAQ
      if (this.visibleFAQ !== null) {
        const prevContent = document.getElementById(`faq-content-${this.visibleFAQ}`);
        const prevIcon = document.getElementById(`faq-icon-${this.visibleFAQ}`);
        if (prevContent) {
          prevContent.classList.add('max-h-0', 'py-0');
          prevContent.classList.remove('max-h-96', 'p-5');
        }
        if (prevIcon) {
          prevIcon.classList.remove('rotate-180');
        }
      }

      // Open new FAQ
      this.visibleFAQ = index;
      if (faqContent) {
        faqContent.classList.remove('max-h-0', 'py-0');
        faqContent.classList.add('max-h-96', 'p-5');
      }
      if (faqIcon) {
        faqIcon.classList.add('rotate-180');
      }
    }
  }

  setupNavHighlight() {
    // Add scroll event listener for navbar background
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        if (header) header.classList.add('backdrop-blur-xl', 'shadow-lg');
      } else {
        if (header) header.classList.remove('backdrop-blur-xl', 'shadow-lg');
      }
    });
  }

  // Additional optimizations and performance enhancements
  setupPerformanceOptimizations() {
    // Preload images
    this.preloadImages();

    // Optimize scroll performance
    this.optimizeScrollPerformance();

    // Add loading states
    this.setupLoadingStates();
  }

  preloadImages() {
    const images = [
      'https://placehold.co/600x400/4f46e5/white?text=OctalTask+Dashboard',
      'https://placehold.co/800x600/4f46e5/white?text=OctalTask+Screenshot',
      'https://placehold.co/400x400/4f46e5/white?text=Member+1',
      'https://placehold.co/400x400/22c55e/white?text=Member+2',
      'https://placehold.co/400x400/a855f7/white?text=Member+3',
      'https://placehold.co/400x400/f97316/white?text=Member+4'
    ];

    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }

  optimizeScrollPerformance() {
    let ticking = false;

    const updateScrollPosition = () => {
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
  }

  setupLoadingStates() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('load', () => {
        img.classList.remove('image-loading');
      });

      img.addEventListener('error', () => {
        img.classList.remove('image-loading');
        img.classList.add('opacity-50');
      });
    });
  }

  // Parallax effect for floating elements
  setupParallaxEffect() {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = heroSection.querySelectorAll('.floating');

      parallaxElements.forEach((element, index) => {
        const speed = 0.3 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    }, { passive: true });
  }

  // Enhanced animation controller
  enhanceAnimations() {
    const cards = document.querySelectorAll('.team-card, .testimonial-card, .feature-card');
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 100}ms`;
    });

    const interactiveElements = document.querySelectorAll('.hover-lift, .hover-scale');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        element.style.willChange = 'transform';
      });

      element.addEventListener('mouseleave', () => {
        element.style.willChange = 'auto';
      });
    });
  }
}

// Initialize the landing page controller when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const controller = new LandingPageController();

  // Initialize additional features
  controller.setupPerformanceOptimizations();
  controller.setupParallaxEffect();
  controller.enhanceAnimations();

  // Add page transition
  document.body.classList.add('page-transition');
});
