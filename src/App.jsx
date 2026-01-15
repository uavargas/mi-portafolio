import { useState, useEffect } from "react";
// Importación de datos
import { portfolioData } from "./data/portfolioData";

// Importación de componentes
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Learning from "./components/Learning";
import Contact from "./components/Contact";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  // Lógica para el efecto de scroll en el Header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función de navegación suave entre secciones
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen selection:bg-cyan-500/30">
      {/* Navegación */}
      <Header 
        scrolled={scrolled} 
        scrollToSection={scrollToSection} 
      />

      <main>
        {/* Sección de Bienvenida */}
        <Hero scrollToSection={scrollToSection} />

        {/* Sección Sobre Mí y Educación */}
        <About education={portfolioData.education} />

        {/* Sección de Habilidades Técnicas */}
        <Skills skills={portfolioData.skills} />

        {/* Sección de Experiencia Laboral */}
        <Experience experience={portfolioData.experience} />

        {/* Sección de Proyectos */}
        <Projects projects={portfolioData.projects} />
        <Learning learning={portfolioData.learning} />
      </main>

      {/* Sección de Contacto y Footer */}
      <Contact />
    </div>
  );
}