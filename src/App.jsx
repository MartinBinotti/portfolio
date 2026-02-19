import { useEffect } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

let appScriptLoaded = false;

function loadExternalScript({ src, id }) {
  return new Promise((resolve, reject) => {
    if (id) {
      const existing = document.getElementById(id);
      if (existing) {
        resolve();
        return;
      }
    }

    const script = document.createElement('script');
    script.src = src;
    if (id) script.id = id;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

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
      if (!window.anime) {
        await loadExternalScript({
          src: 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js',
          id: 'animejs-cdn',
        });
      }

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
      <Loader />
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
