// Experiencia: textos en/es en cada entrada (el idioma lo cambia app.js con data-text-*).
const JOBS = [
  {
    years: { en: '2026 - Present', es: '2026 - Actualidad' },
    current: true,
    title: { en: 'Senior Full Stack Developer', es: 'Full Stack Developer Senior' },
    company: 'Grupo La Sal · La Sal Catering',
    description: {
      en: "I develop and maintain the group's four websites (catering, food delivery and leisure bookings) and build internal web applications for invoicing and lead management. I bring AI and agents into the daily workflow to automate processes and deliver faster, with special attention to the security of every platform.",
      es: 'Desarrollo y mantengo las cuatro webs del grupo (catering, delivery y reservas de ocio) y creo aplicaciones web internas de facturación y gestión de leads. Incorporo IA y agentes al trabajo diario para automatizar procesos y entregar más rápido, con especial atención a la seguridad de cada plataforma.',
    },
    achievements: [
      { en: 'Management of 4 production websites', es: 'Gestión de 4 webs en producción' },
      { en: 'Internal web apps for invoicing and leads', es: 'Apps web internas de facturación y leads' },
      { en: 'Booking, payment and ERP integrations', es: 'Integraciones de reservas, pagos y ERP' },
      { en: 'Process automation with AI and agents', es: 'Automatización de procesos con IA y agentes' },
      { en: 'Security-first maintenance of every platform', es: 'Mantenimiento de las plataformas con foco en seguridad' },
    ],
    tags: ['PHP', 'Laravel', 'WordPress', 'WooCommerce', 'React', 'Bókun', 'AI agents', 'Security'],
  },
  {
    years: { en: '2022 - 2026', es: '2022 - 2026' },
    title: { en: 'Senior Full Stack Developer', es: 'Full Stack Developer Senior' },
    company: 'Panamerican Sales Institute SL',
    description: {
      en: 'Led a team of developers building complex web applications with PHP on the WordPress and Moodle ecosystem. Built advanced user interfaces, optimized performance and introduced new technologies and best practices.',
      es: 'Lideré un equipo de desarrolladores en la construcción de aplicaciones web complejas con PHP sobre el ecosistema WordPress y Moodle. Desarrollé interfaces avanzadas, optimicé el rendimiento e incorporé nuevas tecnologías y buenas prácticas.',
    },
    achievements: [
      { en: 'Led a development team', es: 'Liderazgo de un equipo de desarrollo' },
      { en: 'Built and optimized web applications', es: 'Desarrollo y optimización de aplicaciones web' },
      { en: 'Deployed production apps and plugins', es: 'Apps y plugins desplegados en producción' },
    ],
    tags: ['PHP', 'Moodle', 'WordPress', 'API integrations', 'MySQL', 'Payments'],
  },
  {
    years: { en: '2020 - 2022', es: '2020 - 2022' },
    title: { en: 'Full Stack Developer', es: 'Full Stack Developer' },
    company: 'De Barricas SL',
    description: {
      en: "Developed two complete e-commerce websites with PHP, WordPress, WooCommerce and VTEX. Improved user experience and performance to boost sales, and worked with designers on responsive layouts adapted to clients' and users' needs.",
      es: 'Desarrollé dos e-commerce completos con PHP, WordPress, WooCommerce y VTEX. Mejoré la experiencia de usuario y el rendimiento para aumentar las ventas, y trabajé con diseñadores en maquetaciones responsive adaptadas a clientes y usuarios.',
    },
    achievements: [
      { en: 'Built 2 complete responsive e-commerce sites', es: '2 e-commerce responsive completos' },
      { en: 'Improved SEO and resource optimization', es: 'Mejora del SEO y optimización de recursos' },
      { en: 'Upgraded reporting and analytics', es: 'Mejora de reportes y analítica' },
    ],
    tags: ['PHP', 'JavaScript', 'WordPress', 'SASS', 'VTEX', 'E-commerce'],
  },
  {
    years: { en: '2018 - 2020', es: '2018 - 2020' },
    title: { en: 'Webmaster', es: 'Webmaster' },
    company: 'Brincar por un autismo feliz',
    description: {
      en: 'Developed websites with HTML, CSS and JavaScript, applying web development best practices on real projects for different clients.',
      es: 'Desarrollé sitios web con HTML, CSS y JavaScript, aplicando buenas prácticas de desarrollo en proyectos reales para distintos clientes.',
    },
    achievements: [
      { en: 'Full e-commerce connected to Moodle e-learning', es: 'E-commerce completo conectado a e-learning en Moodle' },
      { en: 'WordPress theme development and plugin management', es: 'Desarrollo de temas y gestión de plugins en WordPress' },
      { en: 'Moodle setup and customization, courses and user support', es: 'Configuración y personalización de Moodle, cursos y soporte a usuarios' },
    ],
    tags: ['HTML5', 'CSS3', 'Moodle', 'WordPress', 'WooCommerce', 'Streaming'],
  },
];

function ExperienceSection() {
  return (
    <>
      <section id="experience" className="section experience-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-number">03</span>
            <h2 className="section-title">
              <span className="title-bracket">&lt;</span>
              <span className="title-text" data-text-en="Experience">
                Experiencia
              </span>
              <span className="title-bracket">/&gt;</span>
            </h2>
            <div className="section-line"></div>
          </div>

          <div className="timeline">
            {JOBS.map((job) => (
              <div className="timeline-item" key={job.company}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div className="timeline-year" data-text-en={job.years.en} data-text-es={job.years.es}>
                      {job.years.es}
                    </div>
                    {job.current && (
                      <div className="timeline-badge" data-text-en="Current" data-text-es="Actual">
                        Actual
                      </div>
                    )}
                  </div>
                  <h3 className="timeline-title" data-text-en={job.title.en} data-text-es={job.title.es}>
                    {job.title.es}
                  </h3>
                  <div className="timeline-company">
                    <i className="fas fa-building"></i>
                    {job.company}
                  </div>
                  <p
                    className="timeline-description"
                    data-text-en={job.description.en}
                    data-text-es={job.description.es}
                  >
                    {job.description.es}
                  </p>
                  <div className="timeline-achievements">
                    {job.achievements.map((item) => (
                      <div className="achievement-item" key={item.en}>
                        <i className="fas fa-check-circle"></i>
                        <span data-text-en={item.en} data-text-es={item.es}>
                          {item.es}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="timeline-tags">
                    {job.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ExperienceSection;
