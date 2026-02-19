# Componentes y responsabilidades

Este documento detalla cada componente React del proyecto, su responsabilidad y sus dependencias.

## `src/components/Loader.jsx`

- Renderiza la pantalla inicial de carga.
- Incluye texto estilo codigo, spinner, barra y porcentaje.
- La animacion real de progreso/salida se controla desde `src/scripts/app.js` (`initLoaderAnimation`).
- Por que existe: mejorar percepcion de carga y reforzar identidad visual.

## `src/components/Header.jsx`

- Barra superior fija con:
  - marca (`MAB`) + `ScorpionMark`
  - menu de navegacion por secciones
  - toggles de idioma, tema y menu mobile
- Usa IDs (`langToggle`, `themeToggle`, `menuToggle`, `navMenu`, `brandHomeLink`) consumidos por `app.js`.
- Por que existe: centralizar navegacion global y controles de UI.

## `src/components/ScorpionMark.jsx`

- Muestra icono de escorpion desde `src/assets/escorpion.png`.
- Integrado dentro del branding del header.
- Por que existe: encapsular la marca visual para poder reutilizar/modificar sin tocar `Header.jsx`.

## `src/components/HeroSection.jsx`

- Seccion de apertura (`#home`) con:
  - saludo, nombre, tagline y descripcion
  - botones CTA (contacto/proyectos)
  - enlaces sociales
  - contenedor de imagen/perfil
  - badges flotantes de stack
- Incluye nodo `#particles` para fondo animado generado por JS.
- Por que existe: comunicar propuesta de valor y dirigir accion rapidamente.

## `src/components/AboutSection.jsx`

- Seccion `#about` con descripcion profesional, estadisticas y bloque visual tipo codigo.
- Las estadisticas (`.stat-number`) usan `data-count` para animacion incremental.
- Por que existe: resumir perfil tecnico y contexto profesional.

## `src/components/SkillsSection.jsx`

- Seccion `#skills` organizada por categorias:
  - Frontend
  - Backend
  - Tools & Others
  - Soft Skills
- Cada habilidad usa `data-percent` para animar barras y porcentaje.
- Por que existe: mostrar competencias de forma rapida y cuantificable.

## `src/components/ExperienceSection.jsx`

- Seccion `#experience` tipo timeline.
- Incluye cargos, periodos, descripcion, logros y tags de tecnologias.
- Usa clases que luego `app.js` anima al entrar en viewport.
- Por que existe: contar trayectoria de forma secuencial y escaneable.

## `src/components/ProjectsSection.jsx`

- Seccion `#projects` con cards de proyectos.
- Cada card tiene:
  - area visual/placeholder
  - overlay con links (demo/codigo)
  - descripcion y stack
- Actualmente los links estan en `#` (placeholders).
- Por que existe: exhibir trabajo y facilitar conversion a repos/demo real.

## `src/components/ContactSection.jsx`

- Seccion `#contact` con:
  - datos de contacto directos (email, telefono, LinkedIn, GitHub)
  - formulario simple de contacto
- `id="contactForm"` es usado por `app.js` para interceptar submit.
- Por que existe: ofrecer canal de contacto directo y rapido.

## `src/components/Footer.jsx`

- Pie con copyright, autoria y enlaces sociales.
- Incluye textos con soporte para traduccion (`data-text-en`).
- Por que existe: cierre de marca y acceso repetido a redes.

## Dependencias cruzadas importantes

- Todos los componentes dependen del contrato CSS en `src/styles/style.css`.
- Varios componentes exponen IDs/clases que `src/scripts/app.js` necesita para funcionar.

