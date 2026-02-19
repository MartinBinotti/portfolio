function ProjectsSection() {
  return (
    <>
      <section id="projects" className="section projects-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-number">04</span>
            <h2 className="section-title">
              <span className="title-bracket">&lt;</span>
              <span className="title-text" data-text-en="Projects">
                Projects
              </span>
              <span className="title-bracket">/&gt;</span>
            </h2>
            <div className="section-line"></div>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" className="project-link" title="View Project">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href="#" className="project-link" title="View Code">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
                <div className="project-placeholder">
                  <i className="fas fa-shopping-cart"></i>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title" data-text-en="E-Commerce Platform">
                  E-Commerce Platform
                </h3>
                <p
                  className="project-description"
                  data-text-en="A complete e-commerce platform with payment integration and advanced inventory management."
                >
                  A complete e-commerce platform with payment integration and advanced inventory
                  management.
                </p>
                <div className="project-tags">
                  <span className="tag">Wordpress</span>
                  <span className="tag">Woocommerce</span>
                  <span className="tag">Elementor</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" className="project-link" title="View Project">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href="#" className="project-link" title="View Code">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
                <div className="project-placeholder">
                  <i className="fas fa-tasks"></i>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title" data-text-en="Employes Intranet">
                  Employes Intranet
                </h3>
                <p
                  className="project-description"
                  data-text-en="A web application for task management with real-time synchronization and modern design."
                >
                  A web application for task management with real-time synchronization and modern
                  design.
                </p>
                <div className="project-tags">
                  <span className="tag">Laravel</span>
                  <span className="tag">Filament</span>
                  <span className="tag">Livewire</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" className="project-link" title="View Project">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href="#" className="project-link" title="View Code">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
                <div className="project-placeholder">
                  <i className="fas fa-blog"></i>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title" data-text-en="Students Ranking">
                  Students Ranking
                </h3>
                <p
                  className="project-description"
                  data-text-en="Ranking system for students in Moodle campus, with features for tracking performance and beautiful UI."
                >
                  Ranking system for students in Moodle campus, with features for tracking
                  performance and beautiful UI.
                </p>
                <div className="project-tags">
                  <span className="tag">PHP</span>
                  <span className="tag">Javascript</span>
                  <span className="tag">Moodle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsSection;
