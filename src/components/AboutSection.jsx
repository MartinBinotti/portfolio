function AboutSection() {
  return (
    <>
      <section id="about" className="section about-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2 className="section-title">
              <span className="title-bracket">&lt;</span>
              <span className="title-text" data-text-en="About Me">
                About Me
              </span>
              <span className="title-bracket">/&gt;</span>
            </h2>
            <div className="section-line"></div>
          </div>

          <div className="about-content">
            <div className="about-text-wrapper">
              <div className="about-intro">
                <p
                  className="about-text"
                  data-text-en="I'm a Full Stack Developer building web systems, e-commerce and e-learning platforms with PHP, Laravel, WordPress, Moodle and MySQL, and on the frontend with Astro, React and the JavaScript library ecosystem. I keep learning continuously and bring new technology into my daily work: I use AI and agents to automate processes and move forward in a fast, tidy and secure way. My focus now is security in particular, given the wave of exploits hitting different technologies, so that I can keep delivering functional, up-to-date applications that solve real problems."
                  data-text-es="Soy desarrollador Full Stack y construyo sistemas web, e-commerce y plataformas de e-learning con PHP, Laravel, WordPress, Moodle y MySQL, y en el frontend con Astro, React y el ecosistema de librerías de JavaScript. Sigo formándome de forma continua e incorporo la tecnología actual a mi día a día: trabajo con IA y agentes para automatizar procesos y avanzar de manera rápida, prolija y segura. Hoy pongo especial atención en la seguridad, ante los exploits que aparecen en distintas tecnologías, para seguir entregando aplicaciones funcionales y actuales que resuelvan problemas reales."
                >
                  Soy desarrollador Full Stack y construyo sistemas web, e-commerce y plataformas de e-learning con PHP, Laravel, WordPress, Moodle y MySQL, y en el frontend con Astro, React y el ecosistema de librerías de JavaScript. Sigo formándome de forma continua e incorporo la tecnología actual a mi día a día: trabajo con IA y agentes para automatizar procesos y avanzar de manera rápida, prolija y segura. Hoy pongo especial atención en la seguridad, ante los exploits que aparecen en distintas tecnologías, para seguir entregando aplicaciones funcionales y actuales que resuelvan problemas reales.
                </p>
              </div>

              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number" data-count="8" data-suffix="+">
                    8+
                  </div>
                  <div className="stat-label" data-text-en="Years of experience" data-text-es="Años de experiencia">
                    Años de experiencia
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-number" data-count="4" data-suffix="">
                    4
                  </div>
                  <div className="stat-label" data-text-en="Production websites" data-text-es="Webs en producción">
                    Webs en producción
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-number" data-count="4" data-suffix="">
                    4
                  </div>
                  <div className="stat-label" data-text-en="Moodle & WP plugins" data-text-es="Plugins Moodle y WP">
                    Plugins Moodle y WP
                  </div>
                </div>
              </div>
            </div>

            <div className="about-image-wrapper">
              <div className="about-image-container">
                <div className="code-block">
                  <div className="code-line">
                    <span className="code-keyword">const</span>
                    <span className="code-variable">developer</span>
                    <span className="code-operator">=</span>
                    <span className="code-brace">&#123;</span>
                  </div>
                  <div className="code-line indent">
                    <span className="code-property">name</span>
                    <span className="code-operator">:</span>
                    <span className="code-string">'Martín Binotti'</span>
                    <span className="code-comma">,</span>
                  </div>
                  <div className="code-line indent">
                    <span className="code-property">skills</span>
                    <span className="code-operator">:</span>
                    <span className="code-bracket">[</span>
                    <span className="code-string">'PHP'</span>
                    <span className="code-comma">,</span>
                    <span className="code-string">'Laravel'</span>
                    <span className="code-comma">,</span>
                    <span className="code-string">'Astro'</span>
                    <span className="code-comma">,</span>
                    <span className="code-string">'React'</span>
                    <span className="code-bracket">]</span>
                    <span className="code-comma">,</span>
                  </div>
                  <div className="code-line indent">
                    <span className="code-property">passion</span>
                    <span className="code-operator">:</span>
                    <span className="code-string">'Security & continuous learning'</span>
                    <span className="code-comma">,</span>
                  </div>
                  <div className="code-line indent">
                    <span className="code-property">workflow</span>
                    <span className="code-operator">:</span>
                    <span className="code-string">'AI + agents'</span>
                  </div>
                  <div className="code-line">
                    <span className="code-brace">&#125;</span>
                    <span className="code-semicolon">;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
