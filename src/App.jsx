import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

let appScriptLoaded = false;

// anime.js va dentro del bundle (antes se cargaba desde un CDN y, si fallaba, app.js no arrancaba).
// app.js lo usa como global, por eso se expone en window.
window.anime = anime;

function App() {
  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio-lang');
    const normalizedLang = savedLang === 'en' || savedLang === 'es' ? savedLang : 'es';
    document.body.className = 'body-main';
    document.body.setAttribute('data-theme', localStorage.getItem('portfolio-theme') || 'dark');
    document.body.setAttribute('data-lang', normalizedLang);
    document.body.setAttribute('data-dir', 'ltr');
    document.documentElement.lang = normalizedLang;
    document.documentElement.dir = 'ltr';

    const bootstrap = async () => {
      if (!appScriptLoaded) {
        await import('./scripts/app.js');
        appScriptLoaded = true;
      } else if (typeof window.__portfolioAppReinit === 'function') {
        window.__portfolioAppReinit();
      }
    };

    bootstrap().catch((err) => {
      console.error(err);
    });
  }, []);

  return (
    <>
      <Header />
      <main className="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
