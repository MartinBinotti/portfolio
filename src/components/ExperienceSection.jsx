// Experiencia: textos en/es en cada entrada (el idioma lo cambia app.js con data-text-*).
const JOBS = [
  {
    years: { en: 'Apr 2026 - Present', es: 'Abr 2026 - Actualidad' },
    current: true,
    title: { en: 'Senior Full Stack Developer', es: 'Full Stack Developer Senior' },
    company: 'Grupo La Sal (La Sal Catering) · Mallorca',
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
    years: { en: 'Feb 2024 - Mar 2026', es: 'Feb 2024 - Mar 2026' },
    title: { en: 'Senior Full Stack Developer', es: 'Full Stack Developer Senior' },
    company: 'Gestlife (Panamerican Sales Institute SL) · Barcelona',
    description: {
      en: 'Led a team of developers building complex web applications with PHP on the WordPress and Moodle ecosystem, including custom plugins that connect student data across both platforms, plus cybersecurity analysis of the platforms.',
      es: 'Lideré un equipo de desarrolladores en aplicaciones web complejas con PHP sobre WordPress y Moodle, con plugins a medida que conectan los datos de los alumnos entre ambas plataformas, y análisis de ciberseguridad de las plataformas.',
    },
    achievements: [
      { en: 'Led a development team', es: 'Liderazgo de un equipo de desarrollo' },
      { en: 'Custom WordPress and Moodle plugins: rankings, progress and scoring', es: 'Plugins a medida para WordPress y Moodle: rankings, progreso y puntuación' },
      { en: 'API and payment gateway integrations', es: 'Integraciones con APIs y pasarelas de pago' },
    ],
    tags: ['PHP', 'Moodle', 'WordPress', 'API integrations', 'MySQL', 'Payments', 'Security'],
  },
  {
    years: { en: 'Oct 2023 - Present', es: 'Oct 2023 - Actualidad' },
    title: { en: 'Freelance Web Developer', es: 'Desarrollador Web Freelance' },
    company: 'Autónomo',
    description: {
      en: 'Design, development and maintenance of websites for clients: updates, security analysis and SEO.',
      es: 'Diseño, desarrollo y mantenimiento de sitios web para clientes: actualizaciones, análisis de seguridad y SEO.',
    },
    achievements: [
      { en: 'Websites designed and built end to end', es: 'Sitios diseñados y desarrollados de principio a fin' },
      { en: 'Ongoing maintenance, updates and security reviews', es: 'Mantenimiento, actualizaciones y revisiones de seguridad' },
    ],
    tags: ['WordPress', 'Web design', 'SEO', 'Security'],
  },
  {
    years: { en: 'May 2021 - Oct 2023', es: 'May 2021 - Oct 2023' },
    title: { en: 'Full Stack Developer & Web Support', es: 'Full Stack Developer y Soporte Web' },
    company: 'De Barricas Vinoteca (Grupo DB SRL) · Buenos Aires',
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
    years: { en: 'Jan 2020 - May 2021', es: 'Ene 2020 - May 2021' },
    title: { en: 'WordPress Developer & E-learning Management', es: 'Desarrollador WordPress y gestión de e-learning' },
    company: 'Fundación Brincar por un autismo feliz (ONG) · Buenos Aires',
    description: {
      en: 'Built and maintained the foundation’s WordPress site and its connection to the Moodle e-learning platform, from the online store to course management and user support.',
      es: 'Desarrollé y mantuve la web de la fundación en WordPress y su conexión con la plataforma de e-learning en Moodle, desde la tienda online hasta la gestión de cursos y el soporte a usuarios.',
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
