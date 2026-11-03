import cvEsSrc from '../assets/cv-martin-binotti.pdf';
import cvEnSrc from '../assets/cv-martin-binotti-en.pdf';
import profileImageSrc from '../assets/perfil.webp';

function HeroSection() {
  return (
    <>
      <section id="home" className="hero-section">
        <div className="hero-background">
          <div className="code-grid-bg"></div>
          <div className="floating-particles" id="particles"></div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-greeting">
              <span className="greeting-text" data-text-en="Hello, I'm" data-text-es="Hola, soy">
                Hola, soy
              </span>
              <span className="greeting-cursor">|</span>
            </div>

            <h1 className="hero-name" id="heroName">
              <span className="name-value">Martín Augusto Binotti</span>
            </h1>

            <div className="hero-title">
              <span className="title-prefix">//</span>
              <span
                className="title-text"
                data-text-en="Senior Full Stack Developer · PHP, WordPress, Astro & React"
                data-text-es="Full Stack Developer Senior · PHP, WordPress, Astro y React"
              >
                Full Stack Developer Senior · PHP, WordPress, Astro y React
              </span>
            </div>

            <p
              className="hero-description"
              data-text-en="Based in Mallorca. I build functional web applications (bookings, e-commerce, internal tools and e-learning), using AI and agents to move fast without compromising security."
              data-text-es="Desde Mallorca. Desarrollo aplicaciones web funcionales (reservas, e-commerce, herramientas internas y e-learning), apoyándome en IA y agentes para avanzar rápido sin descuidar la seguridad."
            >
              Desde Mallorca. Desarrollo aplicaciones web funcionales (reservas, e-commerce,
              herramientas internas y e-learning), apoyándome en IA y agentes para avanzar rápido
              sin descuidar la seguridad.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                <span data-text-en="Get in touch" data-text-es="Contáctame">Contáctame</span>
                <i className="fas fa-arrow-right"></i>
              </a>
              <a href="#projects" className="btn btn-secondary">
                <span data-text-en="View projects" data-text-es="Ver proyectos">Ver proyectos</span>
                <i className="fas fa-code"></i>
              </a>
              <a
                href={cvEsSrc}
                className="btn btn-tertiary"
                download="cv-martin-binotti-es.pdf"
                data-href-es={cvEsSrc}
                data-href-en={cvEnSrc}
                data-download-es="cv-martin-binotti-es.pdf"
                data-download-en="cv-martin-binotti-en.pdf"
              >
                <span data-text-en="Download CV" data-text-es="Descargar CV">Descargar CV</span>
                <i className="fas fa-download"></i>
              </a>
            </div>
            <p className="cv-alt">
              <a
                href={cvEnSrc}
                download="cv-martin-binotti-en.pdf"
                data-href-es={cvEnSrc}
                data-href-en={cvEsSrc}
                data-download-es="cv-martin-binotti-en.pdf"
                data-download-en="cv-martin-binotti-es.pdf"
              >
                <i className="fas fa-file-arrow-down" aria-hidden="true"></i>
                <span data-text-en="Spanish version of the CV" data-text-es="CV también en inglés">
                  CV también en inglés
                </span>
              </a>
            </p>

            <div className="hero-social">
              <a
                href="https://github.com/martinbinotti"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mart%C3%ADn-augusto-binotti-29ab77186/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="mailto:martin.binotti@gmail.com" className="social-icon" title="Email">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="tel:+34662677067" className="social-icon" title="Phone">
                <i className="fas fa-phone"></i>
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <div className="profile-image-glow"></div>
              <div className="profile-image-frame">
                <img
                  src={profileImageSrc}
                  alt="Martin Augusto Binotti"
                  className="profile-image"
                  id="profileImage"
                  width="512"
                  height="512"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
              <div className="floating-badge badge-1">
                <i className="fab fa-laravel"></i>
                <div className="badge-content">
                  <span className="badge-title">Laravel</span>
                  <span className="badge-libs">Filament, Composer, Livewire</span>
                </div>
              </div>
              <div className="floating-badge badge-2">
                <i className="fab fa-php"></i>
                <div className="badge-content">
                  <span className="badge-title">PHP</span>
                  <span className="badge-libs">Mysql, Moodle, Wordpress</span>
                </div>
              </div>
              <div className="floating-badge badge-3">
                <i className="fab fa-js"></i>
                <div className="badge-content">
                  <span className="badge-title">JavaScript</span>
                  <span className="badge-libs">ES6+, React, Astro</span>
                </div>
              </div>
            </div>
            <div className="floating-badges-row">
              <div className="floating-badge-mobile">
                <i className="fab fa-laravel"></i>
                <span>Laravel</span>
              </div>
              <div className="floating-badge-mobile">
                <i className="fab fa-php"></i>
                <span>PHP</span>
              </div>
              <div className="floating-badge-mobile">
                <i className="fab fa-js"></i>
                <span>JS</span>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default HeroSection;
