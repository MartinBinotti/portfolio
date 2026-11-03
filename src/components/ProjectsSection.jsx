import marinaImg from '../assets/projects/marina.webp';
import studioImg from '../assets/projects/studio.webp';
import asphaltImg from '../assets/projects/asphalt.webp';
import fashionImg from '../assets/projects/fashion.webp';

// Cada proyecto: textos en/es, captura real o icono (thumb) si no tiene interfaz, tags y enlaces.
// type "demo" usa el icono de enlace externo, "code" el de GitHub.
const PROJECTS = [
  {
    title: { en: 'Marine Logbook', es: 'Bitácora Marina' },
    description: {
      en: 'Marine species catalog and snorkeling log for Mallorca: sightings by cove, live sea conditions map, achievements and cross-device sync.',
      es: 'Catálogo de especies marinas y bitácora de snorkel en Mallorca: avistamientos por cala, mapa de condiciones del mar, logros y sincronización entre dispositivos.',
    },
    image: marinaImg,
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Leaflet'],
    links: [{ type: 'demo', label: 'Demo', href: 'https://mallorca-marina.vercel.app' }],
  },
  {
    title: { en: 'Studio Architect', es: 'Studio Architect' },
    description: {
      en: 'Architecture studio website in React, powered by a Laravel/Filament CMS that manages projects, categories and galleries through a public API.',
      es: 'Web para un estudio de arquitectura en React, alimentada por un CMS en Laravel/Filament que gestiona proyectos, categorías y galerías mediante una API pública.',
    },
    image: studioImg,
    tags: ['React', 'Laravel', 'Filament', 'REST API'],
    links: [
      { type: 'demo', label: 'Demo', href: 'https://arquitectura-estudio.vercel.app' },
      { type: 'code', label: 'Web', href: 'https://github.com/MartinBinotti/arquitectura-estudio' },
      { type: 'code', label: 'CMS', href: 'https://github.com/MartinBinotti/arquitectura-studio-cms' },
    ],
  },
  {
    title: { en: 'Asphalt E-Commerce', es: 'Asphalt E-Commerce' },
    description: {
      en: 'Skateboarding e-commerce for the Asphalt brand, with a modern shopping flow and product-driven UI.',
      es: 'E-commerce de skateboarding para la marca Asphalt, con flujo de compra moderno y una interfaz centrada en el producto.',
    },
    image: asphaltImg,
    tags: ['React', 'Tailwind', 'E-Commerce'],
    links: [
      { type: 'demo', label: 'Demo', href: 'https://asphalt-zeta.vercel.app' },
      { type: 'code', label: 'Code', href: 'https://github.com/MartinBinotti/asphalt' },
    ],
  },
  {
    title: { en: 'Fashion Designer Portfolio', es: 'Portfolio Fashion Designer' },
    description: {
      en: 'Portfolio website for a fashion designer, focused on visual identity, collections and creative direction.',
      es: 'Sitio portfolio para una diseñadora de moda, enfocado en identidad visual, colecciones y dirección creativa.',
    },
    image: fashionImg,
    tags: ['React', 'Framer Motion', 'UI'],
    links: [
      { type: 'demo', label: 'Demo', href: 'https://fashion-designer-steel.vercel.app' },
      { type: 'code', label: 'Code', href: 'https://github.com/MartinBinotti/fashion-designer' },
    ],
  },
  {
    title: { en: 'Employees Intranet', es: 'Intranet de Empleados' },
    description: {
      en: 'Admin intranet built with Laravel and Filament: employees, timesheets, absences, calendars and departments, with a dashboard of daily metrics.',
      es: 'Intranet administrativa en Laravel y Filament: empleados, fichajes, ausencias, calendarios y departamentos, con un dashboard de métricas diarias.',
    },
    image: null,
    thumb: { icon: 'fas fa-users-gear', label: { en: 'Laravel · Filament panel', es: 'Panel Laravel · Filament' } },
    tags: ['Laravel', 'Filament', 'Livewire'],
    links: [
      { type: 'demo', label: 'Video', href: 'https://vimeo.com/1169152851?share=copy&fl=sv&fe=ci' },
      { type: 'code', label: 'Code', href: 'https://github.com/MartinBinotti/intranet-filament' },
    ],
  },
  {
    title: { en: 'Students Ranking', es: 'Ranking de Estudiantes' },
    description: {
      en: 'WordPress plugin that ranks Moodle students by teacher points, Level Up XP and quizzes, with rankings by classroom and study plan.',
      es: 'Plugin de WordPress que ordena a los alumnos de Moodle por puntos del profesor, Level Up XP y cuestionarios, con rankings por aula y por plan.',
    },
    image: null,
    thumb: { icon: 'fas fa-puzzle-piece', label: { en: 'WordPress plugin', es: 'Plugin WordPress' } },
    tags: ['PHP', 'WordPress', 'Moodle'],
    links: [
      { type: 'demo', label: 'Video', href: 'https://vimeo.com/1167124981?share=copy&fl=sv&fe=ci' },
      { type: 'code', label: 'Code', href: 'https://github.com/MartinBinotti/ranking-moodle' },
    ],
  },
  {
    title: { en: 'Moodle ↔ WordPress Integration', es: 'Integración Moodle ↔ WordPress' },
    description: {
      en: "WordPress plugins that read the Moodle database to show each student's classroom, study plan and course progress in their WordPress account, via shortcodes.",
      es: 'Plugins de WordPress que leen la base de datos de Moodle para mostrar en la cuenta de cada alumno su aula, plan de estudios y progreso en los cursos, mediante shortcodes.',
    },
    image: null,
    thumb: { icon: 'fas fa-puzzle-piece', label: { en: 'WordPress plugins', es: 'Plugins WordPress' } },
    tags: ['PHP', 'WordPress', 'Moodle'],
    links: [
      { type: 'code', label: { en: 'Data', es: 'Datos' }, href: 'https://github.com/MartinBinotti/plugin-moodle-wp' },
      { type: 'code', label: { en: 'Progress', es: 'Progreso' }, href: 'https://github.com/MartinBinotti/plugin-moodle-progreso' },
    ],
  },
  {
    title: { en: 'Moodle Points Block', es: 'Bloque de Puntajes Moodle' },
    description: {
      en: 'Moodle block plugin that lets teachers assign points to students from the course, with role-based permissions. Complements the student ranking.',
      es: 'Plugin de bloque para Moodle que permite a los docentes asignar puntos a los alumnos desde el curso, con permisos por rol. Complementa el ranking de estudiantes.',
    },
    image: null,
    thumb: { icon: 'fas fa-puzzle-piece', label: { en: 'Moodle plugin', es: 'Plugin Moodle' } },
    tags: ['PHP', 'Moodle', 'Plugin'],
    links: [
      { type: 'code', label: 'Code', href: 'https://github.com/MartinBinotti/asignaci-n-puntos-moodle' },
    ],
  },
];

function ProjectThumb({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title.es}
        className="project-screenshot"
        width="960"
        height="600"
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <div className="project-icon-thumb" aria-hidden="true">
      <span className="project-icon-badge">
        <i className={project.thumb.icon}></i>
      </span>
      <span
        className="project-icon-label"
        data-text-en={project.thumb.label.en}
        data-text-es={project.thumb.label.es}
      >
        {project.thumb.label.es}
      </span>
    </div>
  );
}

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
            {PROJECTS.map((project) => (
              <article className="project-card" key={project.title.en}>
                <div className="project-image">
                  <ProjectThumb project={project} />
                </div>
                <div className="project-content">
                  <h3
                    className="project-title"
                    data-text-en={project.title.en}
                    data-text-es={project.title.es}
                  >
                    {project.title.es}
                  </h3>
                  <p
                    className="project-description"
                    data-text-en={project.description.en}
                    data-text-es={project.description.es}
                  >
                    {project.description.es}
                  </p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`project-link project-link-${link.type}`}
                      >
                        <i
                          className={link.type === 'code' ? 'fab fa-github' : 'fas fa-arrow-up-right-from-square'}
                        ></i>
                        {typeof link.label === 'string' ? (
                          <span className="project-link-label">{link.label}</span>
                        ) : (
                          <span
                            className="project-link-label"
                            data-text-en={link.label.en}
                            data-text-es={link.label.es}
                          >
                            {link.label.es}
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsSection;
