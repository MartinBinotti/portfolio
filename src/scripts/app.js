const AppState = {
  currentLang: 'es',
  currentTheme: 'dark',
  currentSection: 'home',
  isMenuOpen: false,
  isLoaded: false,
};

const ES_TRANSLATIONS = {
  Home: 'Inicio',
  About: 'Sobre mí',
  Skills: 'Habilidades',
  Experience: 'Experiencia',
  Projects: 'Proyectos',
  Contact: 'Contacto',
  LinkedIn: 'LinkedIn',
  GitHub: 'GitHub',
  'Scroll Down': 'Desliza hacia abajo',
  'About Me': 'Sobre mí',
  'I am a Full Stack Developer focused on building and implementing web systems and e-learning platforms using PHP, Laravel, JavaScript, HTML, CSS3, MySQL/MariaDB, WordPress, VTEX and Moodle. I work across development, layout implementation, content and server management, and I apply cybersecurity best practices while continuously strengthening React, Vue.js and Python.':
    'Soy desarrollador Full Stack, enfocado en construir e implementar sistemas web y plataformas de e-learning con PHP, Laravel, JavaScript, HTML, CSS3, MySQL/MariaDB, WordPress, VTEX y Moodle. Trabajo tanto en desarrollo como en maquetación, contenidos y gestión de servidores, aplicando buenas prácticas de ciberseguridad mientras sigo reforzando React, Vue.js y Python.',
  Email: 'Correo',
  Phone: 'Teléfono',
  'Send Message': 'Enviar mensaje',
  by: 'por',
  Name: 'Nombre',
  Subject: 'Asunto',
  Message: 'Mensaje',
};

function runWhenDomReady(callback) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback, { once: true });
  } else {
    callback();
  }
}

function runWhenPageReady(callback) {
  if (document.readyState === 'complete') {
    callback();
  } else {
    window.addEventListener('load', callback, { once: true });
  }
}

function normalizeSpanishDataAttributes() {
  const textNodes = document.querySelectorAll('[data-text-en]');
  textNodes.forEach((element) => {
    const enText = element.getAttribute('data-text-en');
    if (!enText) return;
    const esText = element.getAttribute('data-text-es') || ES_TRANSLATIONS[enText] || enText;
    element.setAttribute('data-text-es', esText);
  });

  const placeholderNodes = document.querySelectorAll('[data-placeholder-en]');
  placeholderNodes.forEach((element) => {
    const enPlaceholder = element.getAttribute('data-placeholder-en');
    if (!enPlaceholder) return;
    const esPlaceholder = ES_TRANSLATIONS[enPlaceholder] || enPlaceholder;
    element.setAttribute('data-placeholder-es', esPlaceholder);
  });
}

function initializeApp() {
  loadPreferences();
  normalizeSpanishDataAttributes();
  initLanguage();
  initTheme();
  initNavigation();
  initScrollEffects();
  initMobileMenu();
  updateLanguageUI();
  updateThemeUI();
  AppState.isLoaded = true;
}

function loadPreferences() {
  const savedLang = localStorage.getItem('portfolio-lang');
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedLang === 'en' || savedLang === 'es') {
    AppState.currentLang = savedLang;
  }
  if (savedTheme) AppState.currentTheme = savedTheme;
}

function initLanguage() {
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
  }
  setLanguage(AppState.currentLang);
}

function toggleLanguage() {
  const newLang = AppState.currentLang === 'en' ? 'es' : 'en';
  setLanguage(newLang);
  localStorage.setItem('portfolio-lang', newLang);
}

function setLanguage(lang) {
  AppState.currentLang = lang;
  const html = document.documentElement;
  const body = document.body;

  if (lang === 'en') {
    html.setAttribute('lang', 'en');
    html.setAttribute('dir', 'ltr');
    body.setAttribute('data-lang', 'en');
    body.setAttribute('data-dir', 'ltr');
  } else {
    html.setAttribute('lang', 'es');
    html.setAttribute('dir', 'ltr');
    body.setAttribute('data-lang', 'es');
    body.setAttribute('data-dir', 'ltr');
  }
  updateLanguageUI();
}

function updateLanguageUI() {
  const textElements = document.querySelectorAll('[data-text-en], [data-text-es]');
  textElements.forEach((element) => {
    const enText = element.getAttribute('data-text-en');
    const esText = element.getAttribute('data-text-es');
    if (AppState.currentLang === 'es' && esText) {
      element.textContent = esText;
    } else if (AppState.currentLang === 'en' && enText) {
      element.textContent = enText;
    }
  });

  const placeholderElements = document.querySelectorAll(
    '[data-placeholder-en], [data-placeholder-es]'
  );
  placeholderElements.forEach((element) => {
    const enPlaceholder = element.getAttribute('data-placeholder-en');
    const esPlaceholder = element.getAttribute('data-placeholder-es');
    if (AppState.currentLang === 'es' && esPlaceholder) {
      element.setAttribute('placeholder', esPlaceholder);
    } else if (AppState.currentLang === 'en' && enPlaceholder) {
      element.setAttribute('placeholder', enPlaceholder);
    }
  });

  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    const langText = langToggle.querySelector('.lang-text');
    if (langText) {
      langText.textContent = AppState.currentLang === 'en' ? 'ES' : 'EN';
    }
  }
}

function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  setTheme(AppState.currentTheme);
}

function toggleTheme() {
  const newTheme = AppState.currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
  localStorage.setItem('portfolio-theme', newTheme);
}

function setTheme(theme) {
  AppState.currentTheme = theme;
  document.body.setAttribute('data-theme', theme);
  updateThemeUI();
}

function updateThemeUI() {
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const icon = themeToggle.querySelector('i');
    if (icon) {
      icon.className = AppState.currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
  }
}

function scrollToPosition(targetPosition) {
  if (typeof anime !== 'undefined') {
    anime({
      targets: document.scrollingElement || document.documentElement,
      scrollTop: targetPosition,
      duration: 800,
      easing: 'easeInOutQuad',
    });
  } else {
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  }
}

function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerHeight = document.querySelector('.main-header').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;
        scrollToPosition(targetPosition);
        updateActiveNavLink(link);
        if (AppState.isMenuOpen) {
          toggleMobileMenu();
        }
      }
    });
  });

  const brandHomeLink = document.getElementById('brandHomeLink');
  if (brandHomeLink) {
    brandHomeLink.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToPosition(0);
      updateActiveNavLink(null, 'home');
      if (AppState.isMenuOpen) {
        toggleMobileMenu();
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('scroll', updateHeaderOnScroll);
}

function handleScroll() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      AppState.currentSection = sectionId;
      updateActiveNavLink(null, sectionId);
    }
  });
}

function updateActiveNavLink(clickedLink, sectionId = null) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (clickedLink && link === clickedLink) {
      link.classList.add('active');
    } else if (sectionId) {
      const linkSection = link.getAttribute('data-section');
      if (linkSection === sectionId) {
        link.classList.add('active');
      }
    }
  });
}

function updateHeaderOnScroll() {
  const header = document.querySelector('.main-header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

function initScrollEffects() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach((element) => observer.observe(element));

  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => observer.observe(section));
}

function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
  }

  document.addEventListener('click', (e) => {
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.getElementById('menuToggle');

    if (AppState.isMenuOpen && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      toggleMobileMenu();
    }
  });
}

function toggleMobileMenu() {
  AppState.isMenuOpen = !AppState.isMenuOpen;
  const navMenu = document.getElementById('navMenu');
  const menuToggle = document.getElementById('menuToggle');

  if (navMenu) {
    navMenu.classList.toggle('active', AppState.isMenuOpen);
  }

  if (menuToggle) {
    menuToggle.classList.toggle('active', AppState.isMenuOpen);
  }
}

function generateParticles() {
  const particlesContainer = document.getElementById('particles');
  if (!particlesContainer) return;
  particlesContainer.innerHTML = '';

  const codeSymbols = [
    '{',
    '}',
    '[',
    ']',
    '(',
    ')',
    '<',
    '>',
    '/',
    '*',
    '=',
    '+',
    '-',
    ';',
    ':',
    '&',
    '|',
    '%',
    '$',
    '#',
    '@',
  ];
  const particleCount = 20;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.textContent = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = 10 + Math.random() * 10 + 's';
    particlesContainer.appendChild(particle);
  }
}

//--------------animations.js-----------------
function inView(element, callback, options = {}) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry);
          if (options.once !== false) {
            observer.unobserve(entry.target);
          }
        }
      });
    },
    {
      threshold: options.amount || 0.1,
      rootMargin: options.rootMargin || '0px',
    }
  );
  observer.observe(element);
  return () => observer.unobserve(element);
}

function animateElement(element, props, options = {}) {
  if (typeof anime === 'undefined') return;
  const animeProps = {};
  if (props.opacity) animeProps.opacity = props.opacity;
  if (props.x !== undefined) animeProps.translateX = props.x;
  if (props.y !== undefined) animeProps.translateY = props.y;
  if (props.scale) animeProps.scale = props.scale;
  return anime({
    targets: element,
    ...animeProps,
    duration: (options.duration || 0.8) * 1000,
    delay: (options.delay || 0) * 1000,
    easing: options.easing || 'easeOutExpo',
  });
}

function initPageAnimations() {
  if (AppState.animationsStarted) return;
  AppState.animationsStarted = true;
  setTimeout(() => {
    initSkillAnimations();
    initTimelineAnimations();
    initProjectAnimations();
    initScrollAnimations();
    initContactAnimations();
    animateStats();
    initParallax();
  }, 300);
}

function initSkillAnimations() {
  const skillsSection = document.getElementById('skills');
  if (!skillsSection) return;

  const skillItems = skillsSection.querySelectorAll('.skill-item');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillItem = entry.target;
          const progressBar = skillItem.querySelector('.skill-progress');
          const percentElement = skillItem.querySelector('.skill-percent');
          const percent = parseInt(skillItem.getAttribute('data-percent') || 0);

          if (progressBar && typeof anime !== 'undefined') {
            anime({
              targets: progressBar,
              width: ['0%', percent + '%'],
              duration: 2000,
              easing: 'easeOutExpo',
              delay: 300,
            });

            anime({
              targets: { value: 0 },
              value: percent,
              duration: 2000,
              easing: 'easeOutExpo',
              delay: 300,
              update: function (anim) {
                if (percentElement) {
                  percentElement.textContent = Math.floor(anim.animatables[0].target.value) + '%';
                }
              },
            });
          }
          observer.unobserve(skillItem);
        }
      });
    },
    { threshold: 0.1 }
  );

  skillItems.forEach((item) => observer.observe(item));
}

function initTimelineAnimations() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    inView(
      item,
      () => {
        if (typeof anime !== 'undefined') {
          anime({
            targets: item,
            opacity: [0, 1],
            translateX: [-50, 0],
            delay: index * 150,
            duration: 1000,
            easing: 'easeOutExpo',
          });
        } else {
          animateElement(
            item,
            { opacity: [0, 1], x: [-50, 0] },
            { duration: 0.8, delay: index * 0.1 }
          );
        }
      },
      { amount: 0.3 }
    );
  });
}

function initProjectAnimations() {
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    // Ocultar solo las que aún no se ven, para que no parpadeen al animar
    if (typeof anime !== 'undefined' && card.getBoundingClientRect().top > window.innerHeight) {
      card.style.opacity = '0';
    }
    inView(
      card,
      () => {
        if (typeof anime !== 'undefined') {
          anime({
            targets: card,
            opacity: [0, 1],
            translateY: [24, 0],
            delay: (index % 3) * 80,
            duration: 700,
            easing: 'easeOutExpo',
            complete: () => {
              card.style.transform = '';
            },
          });
        } else {
          animateElement(
            card,
            { opacity: [0, 1], y: [50, 0], scale: [0.9, 1] },
            { duration: 0.8, delay: index * 0.1 }
          );
        }
      },
      { amount: 0.2 }
    );

  });
}

function initScrollAnimations() {
  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => {
    inView(
      section,
      () => {
        const sectionHeader = section.querySelector('.section-header');
        if (sectionHeader && typeof anime !== 'undefined') {
          anime({
            targets: sectionHeader,
            opacity: [0, 1],
            translateY: [-20, 0],
            duration: 600,
            easing: 'easeOutExpo',
          });
        }
      },
      { amount: 0.2 }
    );
  });

  const cards = document.querySelectorAll('.card, .contact-item');
  cards.forEach((card, index) => {
    inView(
      card,
      () => {
        if (typeof anime !== 'undefined') {
          anime({
            targets: card,
            opacity: [0, 1],
            translateY: [30, 0],
            delay: index * 30,
            duration: 500,
            easing: 'easeOutExpo',
          });
        } else {
          animateElement(
            card,
            { opacity: [0, 1], y: [50, 0] },
            { duration: 0.6, delay: index * 0.05 }
          );
        }
      },
      { amount: 0.2 }
    );
  });
}

function animateStats() {
  const statNumbers = document.querySelectorAll('.stat-number');
  statNumbers.forEach((stat) => {
    const target = parseInt(stat.getAttribute('data-count') || 0);
    inView(
      stat,
      () => {
        if (typeof anime !== 'undefined') {
          anime({
            targets: { value: 0 },
            value: target,
            duration: 2000,
            easing: 'easeOutExpo',
            update: function (anim) {
              stat.textContent =
                Math.floor(anim.animatables[0].target.value) + (stat.getAttribute('data-suffix') || '');
            },
          });
        }
      },
      { amount: 0.5 }
    );
  });
}

function initContactAnimations() {
  const contactItems = document.querySelectorAll('.contact-item');
  contactItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      if (typeof anime !== 'undefined') {
        anime({
          targets: item,
          scale: [1, 1.02],
          duration: 200,
          easing: 'easeOutQuad',
        });
      }
    });
    item.addEventListener('mouseleave', () => {
      if (typeof anime !== 'undefined') {
        anime({
          targets: item,
          scale: [1.02, 1],
          duration: 200,
          easing: 'easeOutQuad',
        });
      }
    });
  });
}

function initParallax() {
  const gridBg = document.querySelector('.code-grid-bg');
  if (!gridBg) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        gridBg.style.transform = `translateY(${scrolled * 0.2}px)`;

        ticking = false;
      });
      ticking = true;
    }
  });
}

window.Animations = {
  initParallax,
};

function bootstrapPortfolio() {
  initializeApp();
  generateParticles();
  runWhenPageReady(() => {
    initPageAnimations();
  });
}

runWhenDomReady(() => {
  bootstrapPortfolio();
});

window.__portfolioAppReinit = () => {
  bootstrapPortfolio();
};
