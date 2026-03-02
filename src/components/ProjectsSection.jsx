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
                    <a
                      href="https://asphalt-zeta.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                      title="View Project"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      <span className="project-link-label">Demo</span>
                    </a>
                    <a
                      href="https://github.com/MartinBinotti/asphalt.git"
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                      title="View Code"
                    >
                      <i className="fab fa-github"></i>
                      <span className="project-link-label">Code</span>
                    </a>
                  </div>
                </div>
                <div className="project-placeholder">
                  <i className="fas fa-shopping-cart"></i>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title" data-text-en="Asphalt E-Commerce" data-text-es="Asphalt E-Commerce">
                  Asphalt E-Commerce
                </h3>
                <p
                  className="project-description"
                  data-text-en="Skateboarding e-commerce for Asphalt brand with modern shopping flow and product-driven UI."
                  data-text-es="E-commerce de skateboarding para la marca Asphalt, con flujo de compra moderno y UI centrada en productos."
                >
                  E-commerce de skateboarding para la marca Asphalt, con flujo de compra moderno y
                  UI centrada en productos.
                </p>
                <div className="project-tags">
                  <span className="tag">E-Commerce</span>
                  <span className="tag">Skateboarding</span>
                  <span className="tag">Vercel</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href="https://vimeo.com/1169152851?share=copy&fl=sv&fe=ci"
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                      title="View Project"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      <span className="project-link-label">Demo</span>
                    </a>
                    <a href="https://github.com/MartinBinotti/intranet-filament" target="_blank" rel="noreferrer" className="project-link" title="View Code">
                      <i className="fab fa-github"></i>
                      <span className="project-link-label">Code</span>
                    </a>
                  </div>
                </div>
                <div className="project-placeholder">
                  <i className="fas fa-tasks"></i>
                </div>
              </div>
              <div className="project-content">
                <h3
                  className="project-title"
                  data-text-en="Employees Intranet"
                  data-text-es="Intranet de Empleados"
                >
                  Intranet de Empleados
                </h3>
                <p
                  className="project-description"
                  data-text-en="Web application developed with Laravel/Filament. CRUD for users and employees, with intranet features under development."
                  data-text-es="Aplicacion web desarrollada con Laravel/Filament. CRUD de usuarios, empleados y funciones en desarrollo de la intranet."
                >
                  Aplicacion web desarrollada con Laravel/Filament. CRUD de usuarios, empleados y
                  funciones en desarrollo de la intranet.
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
                    <a
                      href="https://vimeo.com/1167124981?share=copy&fl=sv&fe=ci"
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                      title="View Project"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      <span className="project-link-label">Demo</span>
                    </a>
                    <a href="https://github.com/MartinBinotti/ranking-moodle" target="_blank" rel="noreferrer" className="project-link" title="View Code">
                      <i className="fab fa-github"></i>
                      <span className="project-link-label">Code</span>
                    </a>
                  </div>
                </div>
                <div className="project-placeholder">
                  <i className="fas fa-blog"></i>
                </div>
              </div>
              <div className="project-content">
                <h3
                  className="project-title"
                  data-text-en="Students Ranking"
                  data-text-es="Ranking de Estudiantes"
                >
                  Ranking de Estudiantes
                </h3>
                <p
                  className="project-description"
                  data-text-en="Ranking system for students in Moodle campus, with features for tracking performance and beautiful UI."
                  data-text-es="Sistema de ranking para estudiantes en campus Moodle, con funcionalidades para seguimiento del rendimiento y una interfaz atractiva."
                >
                  Sistema de ranking para estudiantes en campus Moodle, con funcionalidades para
                  seguimiento del rendimiento y una interfaz atractiva.
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
