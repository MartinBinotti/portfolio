# Portfolio React - Martin Augusto Binotti

Portfolio profesional desarrollado con React y Vite. El proyecto presenta perfil, experiencia, habilidades, proyectos y canales de contacto en una sola pagina con animaciones, tema oscuro/claro e interfaz bilingue (es/en).

## Objetivo del proyecto

- Mostrar experiencia profesional y stack tecnico en una landing clara y moderna.
- Ofrecer una navegacion rapida por secciones para reclutadores y clientes.
- Mantener una base simple de mantener, con componentes React y estilos centralizados.

## Demo y estado

- Tipo de app: SPA (Single Page Application)
- Estado: lista para desarrollo y despliegue estatico
- Build tool: Vite

## Tecnologias usadas

### Frontend
- React 18
- ReactDOM 18
- JavaScript (ES Modules)
- CSS3 (archivo unico: `src/styles/style.css`)

### Tooling y build
- Vite 5
- `@vitejs/plugin-react`
- npm scripts (`dev`, `build`, `preview`)

### Librerias externas por CDN
- Font Awesome 6.4.0 (iconografia)
- Google Fonts (`Tajawal`, `Fira Code`)
- Anime.js 3.2.1 (animaciones; carga dinamica en runtime)

## Caracteristicas principales

- Navegacion fija con estado activo por seccion.
- Hero con badges tecnologicos, enlaces sociales y CTA.
- Secciones: About, Skills, Experience, Projects, Contact.
- Cambio de idioma ES/EN con persistencia en `localStorage`.
- Cambio de tema dark/light con persistencia en `localStorage`.
- Loader inicial con progreso animado.
- Particulas y animaciones de entrada al hacer scroll.
- Formulario de contacto de demostracion (sin backend).
- Responsive design para desktop, tablet y mobile.

## Estructura del proyecto

```text
.
|- index.html
|- package.json
|- vite.config.js
|- src/
|  |- App.jsx
|  |- main.jsx
|  |- assets/
|  |  |- escorpion.png
|  |  |- fav-escorpion.png
|  |- components/
|  |  |- Header.jsx
|  |  |- HeroSection.jsx
|  |  |- AboutSection.jsx
|  |  |- SkillsSection.jsx
|  |  |- ExperienceSection.jsx
|  |  |- ProjectsSection.jsx
|  |  |- ContactSection.jsx
|  |  |- Footer.jsx
|  |  |- Loader.jsx
|  |  |- ScorpionMark.jsx
|  |- scripts/
|  |  |- app.js
|  |- styles/
|  |  |- style.css
|- docs/
|  |- ARQUITECTURA.md
|  |- COMPONENTES.md
```

## Inicio rapido

### Requisitos
- Node.js 18+ (recomendado 20+)
- npm 9+

### Instalacion y ejecucion

```bash
npm install
npm run dev
```

La app queda disponible normalmente en `http://localhost:5173`.

### Build de produccion

```bash
npm run build
npm run preview
```

## Scripts disponibles

- `npm run dev`: inicia servidor de desarrollo con HMR.
- `npm run build`: genera build optimizado en `dist/`.
- `npm run preview`: sirve localmente el build generado.

## Arquitectura funcional (resumen)

- `App.jsx` renderiza layout principal y carga `src/scripts/app.js` en cliente.
- `app.js` concentra comportamiento imperativo del DOM:
  - i18n por atributos `data-text-*` y `data-placeholder-*`
  - tema y preferencias en `localStorage`
  - menu mobile, scroll suave y nav activa
  - loader, particulas y animaciones con Anime.js
- componentes React proveen estructura semantica por secciones.
- `style.css` define sistema visual completo (tokens, layout, responsive, animaciones).

Mas detalle tecnico:
- `docs/ARQUITECTURA.md`
- `docs/COMPONENTES.md`

## Decisiones tecnicas (el por que)

- Vite + React: arranque rapido, build liviano y DX moderna.
- CSS unico: simplifica personalizacion visual sin sobreingenieria.
- Datos hardcodeados en componentes: ideal para portfolio estatico sin backend.
- Anime.js via carga dinamica: evita inflar el bundle inicial cuando no es necesario.
- `localStorage`: persistencia simple de idioma/tema sin servidor.

## Limites actuales y mejoras sugeridas

- El formulario hoy muestra mensaje local; no envia datos a un endpoint.
- Parte del contenido de experiencia/proyectos usa placeholders genericos.
- No hay suite de tests automatizados.
- No hay pipeline CI definido en este repo.

## Roadmap sugerido

- Integrar envio real de formulario (Resend, Formspree, EmailJS o backend propio).
- Mover contenido a JSON/CMS para mantenimiento no tecnico.
- Agregar tests (Vitest + Testing Library).
- Incorporar lint/format (ESLint + Prettier) y CI en GitHub Actions.
- Anadir meta Open Graph y mejoras SEO avanzadas.

## Despliegue recomendado

Plataformas recomendadas para este tipo de SPA:
- Vercel
- Netlify
- GitHub Pages

En todos los casos: ejecutar `npm run build` y publicar contenido de `dist/`.

## Documentacion complementaria

- Guia de arquitectura: `docs/ARQUITECTURA.md`
- Detalle de componentes: `docs/COMPONENTES.md`
