// Stack agrupado por área, sin porcentajes: cada grupo dice dónde se usó.
const SKILL_GROUPS = [
  {
    icon: 'fas fa-display',
    title: { en: 'Frontend', es: 'Frontend' },
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Vue', 'Tailwind', 'SASS', 'HTML / CSS'],
    usedIn: {
      en: 'Marine Logbook, Studio Architect, Asphalt',
      es: 'Bitácora Marina, Studio Architect, Asphalt',
    },
  },
  {
    icon: 'fas fa-server',
    title: { en: 'Backend', es: 'Backend' },
    items: ['PHP', 'Laravel', 'Filament', 'Livewire', 'REST APIs', 'MySQL / MariaDB', 'Supabase'],
    usedIn: {
      en: 'Employees intranet, architecture CMS, internal invoicing and leads apps',
      es: 'Intranet de empleados, CMS de arquitectura, apps internas de facturación y leads',
    },
  },
  {
    icon: 'fas fa-layer-group',
    title: { en: 'Platforms & CMS', es: 'Plataformas y CMS' },
    items: ['WordPress', 'WooCommerce', 'Elementor Pro', 'ACF', 'Moodle', 'VTEX', 'Bókun'],
    usedIn: {
      en: "Grupo La Sal's websites, Moodle ↔ WordPress plugins",
      es: 'Webs de Grupo La Sal, plugins Moodle ↔ WordPress',
    },
  },
  {
    icon: 'fas fa-screwdriver-wrench',
    title: { en: 'Tools & workflow', es: 'Herramientas' },
    items: ['Git / GitHub', 'Vite', 'Vercel', 'Composer / NPM', 'Claude Code', 'Cybersecurity'],
    usedIn: {
      en: 'Every project, from local setup to deployment',
      es: 'Todos los proyectos, del entorno local al despliegue',
    },
  },
];

const WAYS_OF_WORKING = [
  { en: 'Problem solving', es: 'Resolución de problemas' },
  { en: 'Clear communication', es: 'Comunicación clara' },
  { en: 'Empathy', es: 'Empatía' },
  { en: 'Continuous learning', es: 'Aprendizaje continuo' },
];

function SkillsSection() {
  return (
    <>
      <section id="skills" className="section skills-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2 className="section-title">
              <span className="title-bracket">&lt;</span>
              <span className="title-text" data-text-en="Skills">
                Skills
              </span>
              <span className="title-bracket">/&gt;</span>
            </h2>
            <div className="section-line"></div>
          </div>

          <div className="skills-grid">
            {SKILL_GROUPS.map((group) => (
              <div className="skill-category" key={group.title.en}>
                <h3 className="category-title">
                  <i className={group.icon} aria-hidden="true"></i>
                  <span data-text-en={group.title.en} data-text-es={group.title.es}>
                    {group.title.es}
                  </span>
                </h3>
                <ul className="skill-chips">
                  {group.items.map((item) => (
                    <li className="skill-chip" key={item}>
                      {item === 'Cybersecurity' ? (
                        <span data-text-en="Cybersecurity" data-text-es="Ciberseguridad">
                          Ciberseguridad
                        </span>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
                <p className="skill-used-in">
                  <span className="skill-used-label" data-text-en="Used in" data-text-es="Usado en">
                    Usado en
                  </span>
                  <span data-text-en={group.usedIn.en} data-text-es={group.usedIn.es}>
                    {group.usedIn.es}
                  </span>
                </p>
              </div>
            ))}
          </div>

          <div className="ways-of-working">
            <span
              className="ways-label"
              data-text-en="How I work"
              data-text-es="Cómo trabajo"
            >
              Cómo trabajo
            </span>
            {WAYS_OF_WORKING.map((item) => (
              <span className="ways-item" key={item.en} data-text-en={item.en} data-text-es={item.es}>
                {item.es}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default SkillsSection;
