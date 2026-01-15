import { useState, useEffect } from "react";
import {
  Cloud,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Server,
  Database,
  Code2,
  Menu,
  X,
  Award,
  Briefcase,
  MapPin,
  Calendar,
  BookOpen,
  Cpu,
} from "lucide-react";

export default function CloudPortfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const projects = [
    {
      id: 1,
      title: "API RESTful con Spring Boot",
      description:
        "Sistema de gestión desarrollado con Spring Boot, JPA y MySQL. Incluye autenticación JWT y documentación con Swagger",
      tech: ["Java", "Spring Boot", "MySQL", "JWT", "Swagger"],
      category: "Backend Development",
      status: "En desarrollo",
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Arquitectura Serverless con Terraform & CI/CD",
      description:
        "Infraestructura 100% automatizada (IaC) orquestando un ecosistema Serverless en AWS. Integra Lambda (Python), API Gateway y DynamoDB para el backend, con distribución global segura vía CloudFront (OAC) y pipeline de despliegue continuo con GitHub Actions.",
      tech: [
        "Terraform",
        "AWS Lambda",
        "GitHub Actions",
        "DynamoDB",
        "CloudFront",
        "Python",
      ],
      category: "Cloud & DevOps",
      status: "Completado",
      github:
        "https://github.com/uavargas/PROYECTOAWS-TERRAFORM-GITACTIONS.git",
      demo: "https://d2cj6j92jllyde.cloudfront.net",
    },
    {
      id: 3,
      title: "Automatización de Infraestructura Windows",
      description:
        "Scripts PowerShell para automatización de tareas en Active Directory, gestión de usuarios y configuración de servidores",
      tech: ["PowerShell", "Active Directory", "Windows Server"],
      category: "Infrastructure",
      status: "Completado",
      github: "#",
      demo: null,
    },
    {
      id: 4,
      title: "Sistema de Gestión de Tickets (Spring Boot)",
      description:
        "Aplicación para soporte técnico desarrollada con Java 21. Implementa una Arquitectura Limpia (Clean Architecture) en capas para gestionar el ciclo de vida completo de tickets, con filtros avanzados de estado y priorización automatizada.",
      tech: [
        "Java 21",
        "Spring Boot 3.5",
        "PostgreSQL",
        "Maven",
        "Clean Architecture",
      ],
      category: "Backend Development",
      status: "Completado",
      github:
        "https://github.com/uavargas/Sistema-de-Gestion-de-Tickets-de-Soporte-Tecnico.git", // Reemplaza con tu link real
      demo: null,
    },
  ];

  const experience = [
    {
      role: "Infrastructure Engineer",
      company: "E-Global – Metro de Medellín",
      location: "Medellín, Colombia",
      period: "Actual",
      description:
        "Administración y soporte de infraestructura on-premise y servicios Microsoft 365, garantizando la disponibilidad, seguridad y continuidad de los servicios tecnológicos.",
      achievements: [
        "Administración de Microsoft 365 y servicios de infraestructura on-premise",
        "Gestión de servidores Windows Server (2008 R2–2022) y Linux Ubuntu",
        "Administración de Active Directory: DCs, usuarios, grupos y GPOs",
        "Gestión de servicios DNS y DHCP",
        "Despliegue y administración de máquinas virtuales en VMware vCenter",
        "Monitoreo de infraestructura, documentación y resolución de incidentes",
      ],
    },

    {
      role: "Web & Cloud Developer",
      company: "Fundación CEPAV",
      location: "Colombia",
      period: "3 meses",
      description:
        "Participé en el desarrollo de nuevas funcionalidades para el sitio institucional, diseñando una arquitectura serverless en AWS enfocada en escalabilidad y cero mantenimiento de infraestructura.",
      achievements: [
        "Desarrollo de interfaces dinámicas y responsive utilizando React.js y componentes modernos.",
        "Diseño e implementación de arquitectura Serverless con AWS Lambda, API Gateway y DynamoDB.",
        "Definición de infraestructura como código (IaC) mediante AWS CDK y Parameter Store.",
        "Implementación de servicios de mensajería asíncrona con Amazon SNS para notificaciones.",
        "Hosting de alto rendimiento utilizando Amazon S3, CloudFront y protección OAC.",
        "Automatización de despliegues globales mediante pipelines de CI/CD con GitHub Actions y Bitbucket.",
      ],
    },

    {
      role: "Infrastructure Engineer",
      company: "B2B Tics SAS – Metro de Medellín",
      location: "Medellín, Colombia",
      period: "15 meses",
      description:
        "Administración y soporte de infraestructura tecnológica, participando en la operación y mantenimiento de entornos on-premise y servicios corporativos.",
      achievements: [
        "Administración de Microsoft 365 y entornos on-premise",
        "Gestión de servidores Windows Server (2008 R2–2022) y Linux Ubuntu",
        "Administración de Active Directory, GPOs, DNS y DHCP",
        "Gestión de máquinas virtuales en VMware vCenter",
        "Monitoreo de infraestructura y resolución de incidentes",
        "Documentación técnica y procedimientos operativos",
      ],
    },
  ];

  /* ===================== DATA ===================== */

  const skills = {
    infraestructura: [
      { name: "Windows Server (2008 R2 – 2022)", level: "Avanzado" },
      { name: "Active Directory & GPO", level: "Avanzado" },
      { name: "Microsoft 365 / Entra ID", level: "Avanzado" },
      { name: "IIS, Nginx, Apache", level: "Intermedio" },
      { name: "VMware vCenter", level: "Intermedio" },
      { name: "PowerShell", level: "Intermedio" },
    ],
    desarrollo: [
      { name: "Java", level: "Intermedio", learning: true },
      { name: "Spring Boot", level: "Básico ", learning: true },
      { name: "APIs REST", level: "Básico ", learning: true },
      { name: "JPA / Hibernate", level: "Básico", learning: true },
      { name: "MySQL / PostgreSQL", level: "Básico", learning: true },
    ],
    cloud: [
      {
        name: "AWS (EC2, S3,Lambda, SNS, DynamoDB)",
        level: "Básico",
        learning: true,
      },
      {
        name: "Arquitectura Cloud / Serverless",
        level: "Básico",
        learning: true,
      },
      { name: "Linux (Ubuntu)", level: "Básico ", learning: true },
      { name: "Git", level: "Intermedio", learning: true },
      { name: "GitHub", level: "Intermedio", learning: true },
      { name: "GitHub Actions (CI/CD)", level: "Básico", learning: true },
      { name: "Terraform (IaC)", level: "Básico", learning: true },
    ],
  };

  const learning = [
    {
      topic: "AWS Cloud Practitioner",
      platform: "AWS Training",
      status: "En progreso",
      icon: "☁️",
    },
    {
      topic: "Spring Boot & Microservices",
      platform: "Udemy / Platzi",
      status: "En progreso",
      icon: "🍃",
    },
    {
      topic: "Arquitectura de Software",
      platform: "Estudio autodidacta",
      status: "En progreso",
      icon: "🏗️",
    },
    {
      topic: "Docker & Contenedores",
      platform: "Docker Docs",
      status: "Próximamente",
      icon: "🐳",
    },
  ];

  const education = [
    {
      degree: "ONE Tech Foundation G8 - Back End Developer",
      institution: "ONE Oracle Next Education - Alura Latam",
      year: "2025",
      icon: "🎓",
    },
    {
      degree: "Ingeniería en Telecomunicaciones",
      institution: "Universidad Universidad Naciona Abierta y a Distancia UNAD",
      year: "2022",
      icon: "🎓",
    },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Header */}
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/95 backdrop-blur-sm border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                <span className="text-cyan-400 font-semibold">
                  Infraestructura
                </span>
                <span className="text-gray-400"> · Cloud · DevOps</span>

                <span className="text-gray-400"> </span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {[
                "inicio",
                "sobre-mi",
                "experiencia",
                "proyectos",
                "aprendizaje",
                "contacto",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm uppercase tracking-wider"
                >
                  {item.replace("-", " ")}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-cyan-500/20">
              {[
                "inicio",
                "sobre-mi",
                "experiencia",
                "proyectos",
                "aprendizaje",
                "contacto",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 text-gray-400 hover:text-cyan-400 transition-colors uppercase tracking-wider"
                >
                  {item.replace("-", " ")}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-cyan-400 text-sm uppercase tracking-widest">
              Ingeniero en Telecomunicaciones
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white">Hola, soy</span>
            <span className="block text-cyan-400">Alonso Vargas</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-6"></p>

          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed text-center md:text-left">
            Ingeniero en Telecomunicaciones con más de 3 años de experiencia en
            infraestructura y soporte técnico, principalmente en entornos
            on-premise. Actualmente me encuentro en un proceso de transición
            hacia la nube, enfocado en AWS, automatización, Infraestructura como
            Código y CI/CD.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => scrollToSection("proyectos")}
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/50"
            >
              Ver Proyectos
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="px-8 py-3 border-2 border-cyan-500/50 hover:border-cyan-400 text-white rounded-lg transition-all"
            >
              Contactar
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            <div className="border-l-2 border-cyan-500 pl-4">
              <div className="text-3xl font-bold text-cyan-400">3+</div>
              <div className="text-sm text-gray-500 uppercase">Años IT</div>
            </div>
            <div className="border-l-2 border-cyan-500 pl-4">
              <div className="text-3xl font-bold text-cyan-400">1</div>
              <div className="text-sm text-gray-500 uppercase">
                Años Dev & Cloud
              </div>
            </div>
            <div className="border-l-2 border-cyan-500 pl-4">
              <div className="text-3xl font-bold text-cyan-400">∞</div>
              <div className="text-sm text-gray-500 uppercase">
                Ganas de Aprender
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Mí */}
      <section id="sobre-mi" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          {/* Título */}
          <h2 className="text-4xl font-bold mb-14 text-center">
            Sobre <span className="text-cyan-400">Mí</span>
          </h2>

          {/* Card principal */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-12 space-y-10">
            {/* Intro */}
            <p className="text-gray-300 leading-relaxed text-lg">
              Ingeniero en Telecomunicaciones con experiencia en infraestructura
              TI y soporte técnico en entornos empresariales, trabajando con
              tecnologías Microsoft, virtualización con VMware y monitoreo de
              infraestructura mediante herramientas como Zabbix.
            </p>

            {/* Bloques de enfoque */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Infraestructura */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
                <h3 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                  <Server className="w-5 h-5" />
                  Infraestructura
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Experiencia en Windows Server, Active Directory, Microsoft
                  365, Entra ID, IIS, virtualización con VMware, Monitoreo,
                  soporte y documentación de entornos on-premise.
                </p>
              </div>

              {/* Backend & Cloud */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
                <h3 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                  🍃 Desarollo & Cloud
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  En transición hacia el desarrollo y la computación en la nube,
                  fortaleciendo conocimientos en Java y Spring Boot, y
                  explorando servicios de AWS mediante proyectos prácticos.
                </p>
              </div>

              {/* Objetivo */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
                <h3 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                  🎯 Objetivo Profesional
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Integrar mi experiencia en infraestructura on-premise con
                  desarrollo y cloud, aplicando prácticas DevOps para diseñar,
                  automatizar y mantener soluciones tecnológicas modernas y
                  escalables.
                </p>
              </div>
            </div>
          </div>

          {/* Educación */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              🎓 Formación Académica
            </h3>

            <div className="grid gap-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{edu.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-cyan-400">{edu.institution}</p>
                      <p className="text-gray-500 text-sm">{edu.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SKILLS SECTION ===================== */}

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-cyan-400">Habilidades</span> Técnicas
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Infraestructura */}
            <div className="border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all">
              <h3 className="flex items-center gap-2 text-xl font-bold text-cyan-400 mb-6 uppercase tracking-wider">
                <Server className="w-5 h-5" />
                Infraestructura
              </h3>

              <div className="space-y-4">
                {skills.infraestructura.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Desarrollo Backend */}
            <div className="border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all">
              <h3 className="flex items-center gap-2 text-xl font-bold text-cyan-400 mb-6 uppercase tracking-wider">
                <Code2 className="w-5 h-5" />
                Desarrollo Backend
              </h3>

              <div className="space-y-4">
                {skills.desarrollo.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      {skill.learning && (
                        <span className="text-xs text-cyan-400">
                          📚 En progreso
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all">
              <h3 className="flex items-center gap-2 text-xl font-bold text-cyan-400 mb-6 uppercase tracking-wider">
                <Cloud className="w-5 h-5" />
                Cloud & DevOps
              </h3>

              <div className="space-y-4">
                {skills.cloud.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      {skill.learning && (
                        <span className="text-xs text-cyan-400">
                          📚 En progreso
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-cyan-400">Experiencia</span> Profesional
          </h2>

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="border-l-2 border-cyan-500 pl-8 pb-8 relative"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-500 rounded-full" />

                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-4 text-gray-400">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <span className="flex items-center gap-1 text-cyan-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-400 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="text-xs bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            Mis <span className="text-cyan-400">Proyectos</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs text-gray-500 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        project.status === "Completado"
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-slate-800 text-gray-400 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank" // Abre en nueva pestaña
                        rel="noopener noreferrer" // Seguridad adicional
                        className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Código
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank" // Abre en nueva pestaña
                        rel="noopener noreferrer" // Seguridad adicional
                        className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section id="aprendizaje" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            Aprendizaje <span className="text-cyan-400">Continuo</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {learning.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold mb-2">{item.topic}</h3>
                    <p className="text-gray-400 text-sm mb-2">
                      {item.platform}
                    </p>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        item.status === "En progreso"
                          ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          : "bg-gray-500/10 text-gray-400 border border-gray-500/20"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Conectamos<span className="text-cyan-400">?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Estoy abierto a oportunidades, colaboraciones y nuevos proyectos
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="mailto:uavargas23@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition-all"
            >
              <Mail className="w-5 h-5" />
              Enviar Email
            </a>
            <a
              href="https://github.com/uavargas"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 border-2 border-cyan-500/50 hover:border-cyan-400 text-white rounded-lg transition-all"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/uavargasb/"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 border-2 border-cyan-500/50 hover:border-cyan-400 text-white rounded-lg transition-all"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center space-y-2">
            <p className="text-sm text-gray-400">
              Diseñado y desarrollado por{" "}
              <span className="text-cyan-400 font-medium">AlonsoKode</span>
            </p>
            <p className="text-xs text-gray-500">
              Infraestructura • Backend • Cloud Engineering
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
