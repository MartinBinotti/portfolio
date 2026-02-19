import ScorpionMark from './ScorpionMark';

function Header() {
  return (
    <>
      <header className="main-header" id="header">
        <nav className="nav-container">
          <a href="#home" className="nav-brand" id="brandHomeLink" aria-label="Go to top">
            <div className="brand-logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-text">MAB</span>
              <span className="logo-bracket">/&gt;</span>
            </div>
            <ScorpionMark />
          </a>

          <div className="nav-menu" id="navMenu">
            <a href="#home" className="nav-link active" data-section="home">
              <i className="fas fa-home"></i>
              <span className="nav-text" data-text-en="Home">
                Home
              </span>
            </a>
            <a href="#about" className="nav-link" data-section="about">
              <i className="fas fa-user"></i>
              <span className="nav-text" data-text-en="About">
                About
              </span>
            </a>
            <a href="#skills" className="nav-link" data-section="skills">
              <i className="fas fa-code"></i>
              <span className="nav-text" data-text-en="Skills">
                Skills
              </span>
            </a>
            <a href="#experience" className="nav-link" data-section="experience">
              <i className="fas fa-briefcase"></i>
              <span className="nav-text" data-text-en="Experience">
                Experience
              </span>
            </a>
            <a href="#projects" className="nav-link" data-section="projects">
              <i className="fas fa-rocket"></i>
              <span className="nav-text" data-text-en="Projects">
                Projects
              </span>
            </a>
            <a href="#contact" className="nav-link" data-section="contact">
              <i className="fas fa-envelope"></i>
              <span className="nav-text" data-text-en="Contact">
                Contact
              </span>
            </a>
          </div>

          <div className="nav-controls">
            <button className="lang-toggle" id="langToggle" title="Toggle Language">
              <i className="fas fa-language"></i>
              <span className="lang-text">EN</span>
            </button>
            <button className="theme-toggle" id="themeToggle" title="Toggle Theme">
              <i className="fas fa-moon"></i>
            </button>
            <button className="menu-toggle" id="menuToggle" title="Toggle Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
