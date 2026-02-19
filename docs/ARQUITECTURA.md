# Arquitectura del proyecto

Este documento describe como esta organizada la aplicacion, que hace cada capa y por que se tomo cada decision.

## 1. Vision general

El proyecto es una SPA de portfolio personal montada con React + Vite. La UI esta dividida en secciones verticales (one-page layout) y el comportamiento interactivo (idioma, tema, animaciones, scroll, menu mobile) vive en un modulo imperativo: `src/scripts/app.js`.

## 2. Capas del sistema

### 2.1 Capa de entrada y bootstrap

- `index.html`
  - Define metadatos base (`lang`, viewport, favicon).
  - Carga fuentes externas y Font Awesome por CDN.
  - Contiene el nodo raiz `#root`.
  - Punto de entrada del bundle: `/src/main.jsx`.
  - Por que: mantener HTML minimo y delegar renderizado a React.

- `src/main.jsx`
  - Renderiza `<App />` sobre `#root`.
  - Importa el CSS global `src/styles/style.css`.
  - Por que: punto unico de montaje, patron estandar React.

### 2.2 Capa de composicion React

- `src/App.jsx`
  - Construye la pagina con componentes por seccion.
  - En `useEffect`, inicializa estado de idioma/tema desde `localStorage` y atributos del DOM (`data-theme`, `data-lang`).
  - Carga Anime.js por CDN si no existe `window.anime`.
  - Importa dinamicamente `src/scripts/app.js` solo una vez.
  - Expone reinit mediante `window.__portfolioAppReinit` para evitar recargas completas.
  - Por que: separar estructura (React) de comportamiento visual avanzado (script DOM).

### 2.3 Capa de comportamiento (DOM + estado global)

- `src/scripts/app.js`
  - Centraliza estado UI en `AppState`:
    - idioma actual
    - tema actual
    - seccion activa
    - estado menu mobile
    - estado de carga
  - Gestiona inicializacion y preferencias:
    - `loadPreferences()`
    - `initLanguage()`
    - `initTheme()`
    - `initNavigation()`
    - `initScrollEffects()`
    - `initFormHandlers()`
    - `initMobileMenu()`
  - Internacionalizacion:
    - Diccionario `ES_TRANSLATIONS`.
    - Normalizacion automatica de `data-text-es` y `data-placeholder-es`.
    - Toggle ES/EN y persistencia en `localStorage`.
  - Tema:
    - Toggle dark/light.
    - Actualizacion de icono de boton segun tema.
  - Navegacion:
    - Scroll suave a secciones.
    - Highlight de link activo por posicion de scroll.
    - Header cambia estado al desplazarse.
  - Formulario:
    - Intercepta submit, muestra alerta y resetea formulario.
    - No hay integracion backend actualmente.
  - Efectos visuales:
    - Particulas de fondo.
    - Loader y animaciones de entrada.
    - Animaciones de skills, timeline, proyectos y estadisticas.
    - Parallax ligero en hero.
  - Por que: concentrar la logica de UX en un unico modulo facilita iterar animaciones sin dispersar listeners en todos los componentes.

### 2.4 Capa de presentacion (estilos)

- `src/styles/style.css`
  - Define design tokens con CSS variables (`:root` y `[data-theme="light"]`).
  - Estiliza todos los bloques (header, hero, sections, cards, form, footer).
  - Incluye animaciones (`@keyframes`) y reglas responsive (1024, 768, 480, 360).
  - Por que: mantener identidad visual consistente y facil de tunear.

### 2.5 Capa de assets

- `src/assets/escorpion.png`
- `src/assets/fav-escorpion.png`
- Usados en marca visual y favicon.

## 3. Flujo de arranque

1. `index.html` carga `main.jsx`.
2. `main.jsx` monta `App`.
3. `App` ajusta atributos iniciales de documento/cuerpo.
4. `App` carga Anime.js (si falta) y luego `app.js`.
5. `app.js` ejecuta `bootstrapPortfolio()`:
   - inicializa idioma/tema/nav/form/menu
   - genera particulas
   - lanza loader y luego animaciones de pagina

## 4. Flujo de estado y persistencia

- Fuente principal de estado runtime: `AppState` (memoria).
- Persistencia entre sesiones: `localStorage`
  - `portfolio-lang`
  - `portfolio-theme`
- Reflejo visual de estado:
  - Atributos en `body` (`data-theme`, `data-lang`, `data-dir`)
  - Atributos en `html` (`lang`, `dir`)
  - Clases CSS (`active`, `scrolled`, `hidden`, etc.)

## 5. Convenciones actuales

- Componentes sin estado React (presentacionales).
- Texto bilingue apoyado en `data-text-en` y traduccion programatica a `data-text-es`.
- IDs en el DOM para anclar listeners del script (`langToggle`, `themeToggle`, `contactForm`, etc.).

## 6. Riesgos tecnicos conocidos

- `app.js` agrega listeners globales en cada inicializacion; si se reinyecta muchas veces, puede duplicar callbacks.
- El formulario no tiene validacion/entrega real server-side.
- No hay tests ni lint para detectar regresiones tempranas.
- Dependencia CDN para Anime.js y Font Awesome (si falla red, se degrada UX).

