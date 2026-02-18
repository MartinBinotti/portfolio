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
                        <span className="greeting-text" data-text-en="Hello, I'm">Hello, I'm</span>
                        <span className="greeting-cursor">|</span>
                    </div>
                    
                    <h1 className="hero-name" id="heroName">
                        <span className="name-prefix">const</span>
                        <span className="name-operator">=</span>
                        <span className="name-value">Martin Augusto Binotti</span>
                        <span className="name-suffix">;</span>
                    </h1>
                    
                    <div className="hero-title">
                        <span className="title-prefix">//</span>
                        <span className="title-text" data-text-en="Full Stack Web Developer | Web Platforms & E-learning Solution">Full Stack Web Developer | Web Platforms & E-learning Solution</span>
                    </div>
                    
                    <p className="hero-description" data-text-en="Passionate developer creating exceptional digital experiences with modern technologies.">
                        Passionate developer creating exceptional digital experiences with modern technologies.
                    </p>
                    
                    <div className="hero-buttons">
                        <a href="#contact" className="btn btn-primary">
                            <span data-text-en="Get In Touch">Get In Touch</span>
                            <i className="fas fa-arrow-right"></i>
                        </a>
                        <a href="#projects" className="btn btn-secondary">
                            <span data-text-en="View Projects">View Projects</span>
                            <i className="fas fa-code"></i>
                        </a>
                    </div>
                    
                    <div className="hero-social">
                        <a href="https://github.com/martinbinotti" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/mart%C3%ADn-augusto-binotti-29ab77186/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
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
                            <div className="profile-image" id="profileImage">
                                <div className="profile-placeholder">
                                    <i className="fas fa-code"></i>
                                </div>
                            </div>
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
                                <span className="badge-libs">ES6+, React, Vue</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="scroll-indicator">
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
                <span className="scroll-text" data-text-en="Scroll Down">Scroll Down</span>
            </div>
        </section>
    </>
  );
}

export default HeroSection;


