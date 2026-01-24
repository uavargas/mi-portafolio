// src/data/portfolioData.js
import {
  Cloud,
  Leaf,
  Boxes,
  Container,
  BookOpen,
  GraduationCap,
  Server,
  Target,
} from "lucide-react";

export const portfolioData = {
  /* =========================
     PROJECTS
  ========================== */
  projects: [
    {
      id: 1,
      title: "API RESTful con Spring Boot",
      description:
        "Sistema de gestión desarrollado con Spring Boot, JPA y MySQL. Incluye autenticación JWT y documentación con Swagger.",
      tech: ["Java", "Spring Boot", "MySQL", "JWT", "Swagger"],
      category: "Backend",
      status: "En desarrollo",
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Arquitectura Serverless con Terraform & CI/CD",
      description:
        "Infraestructura 100% automatizada (IaC) orquestando un ecosistema Serverless en AWS con Lambda, API Gateway y DynamoDB.",
      tech: [
        "Terraform",
        "AWS Lambda",
        "API Gateway",
        "DynamoDB",
        "GitHub Actions",
        "Python",
        "CloudFront",
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
        "Automatización de tareas administrativas en Active Directory y servidores Windows mediante scripts PowerShell.",
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
        "Aplicación de soporte técnico desarrollada con Java 21 y Spring Boot, implementando Clean Architecture.",
      tech: [
        "Java 21",
        "Spring Boot 3",
        "PostgreSQL",
        "Maven",
        "Clean Architecture",
      ],
      category: "Backend",
      status: "Completado",
      github:
        "https://github.com/uavargas/Sistema-de-Gestion-de-Tickets-de-Soporte-Tecnico.git",
      demo: null,
    },
  ],

  /* =========================
     EXPERIENCE
  ========================== */
  experience: [
    {
      role: "Infrastructure Engineer",
      company: "E-Global – Metro de Medellín",
      location: "Medellín, Colombia",
      period: "Actual",
      description:
        "Administración y soporte de infraestructura on-premise y servicios Microsoft 365, garantizando disponibilidad y seguridad.",
      achievements: [
        "Administración de Microsoft 365 y servicios on-premise",
        "Gestión de Windows Server (2008 R2–2022) y Linux Ubuntu",
        "Administración de Active Directory, usuarios, grupos y GPOs",
        "Gestión de servicios DNS y DHCP",
        "Despliegue y administración de máquinas virtuales en VMware vCenter",
        "Monitoreo de infraestructura y resolución de incidentes",
      ],
    },
    {
      role: "Web & Cloud Developer",
      company: "Fundación CEPAV",
      location: "Colombia",
      period: "3 meses",
      description:
        "Desarrollo de soluciones web y arquitectura Serverless en AWS enfocadas en escalabilidad y automatización.",
      achievements: [
        "Desarrollo frontend con React.js",
        "Diseño de arquitectura Serverless (Lambda, API Gateway, DynamoDB)",
        "Infraestructura como Código (IaC) con AWS CDK",
        "Implementación de notificaciones con Amazon SNS",
        "Hosting en S3 y CloudFront con OAC",
        "Automatización CI/CD con GitHub Actions",
      ],
    },
    {
      role: "Infrastructure Engineer",
      company: "B2B Tics SAS – Metro de Medellín",
      location: "Medellín, Colombia",
      period: "15 meses",
      description:
        "Administración de infraestructura tecnológica y servicios corporativos en entornos empresariales.",
      achievements: [
        "Administración de Microsoft 365",
        "Gestión de Windows Server y Linux Ubuntu",
        "Administración de Active Directory, GPOs, DNS y DHCP",
        "Gestión de máquinas virtuales en VMware vCenter",
        "Monitoreo y resolución de incidentes",
        "Documentación técnica y procedimientos operativos",
      ],
    },
  ],

  /* =========================
     SKILLS
  ========================== */
  skills: {
    infraestructura: [
      { name: "Windows Server (2008 R2 – 2022)", level: "Avanzado" },
      { name: "Active Directory & GPO", level: "Avanzado" },
      { name: "Microsoft 365 / Entra ID", level: "Avanzado" },
      { name: "Servicios Web (IIS, Nginx, Apache)", level: "Intermedio" },
      { name: "Virtualización con VMware vCenter", level: "Intermedio" },
      { name: "Automatización con PowerShell", level: "Intermedio" },
    ],
    desarrollo: [
      { name: "Java", level: "Intermedio", learning: true },
      { name: "Spring Boot", level: "Fundamentos", learning: true },
      { name: "APIs REST", level: "Fundamentos", learning: true },
      { name: "JPA / Hibernate", level: "Fundamentos", learning: true },
      {
        name: "Bases de datos (MySQL / PostgreSQL)",
        level: "Fundamentos",
        learning: true,
      },
    ],
    cloud: [
      {
        name: "AWS (EC2, S3, Lambda, SNS, DynamoDB)",
        level: "Fundamentos prácticos",
        learning: true,
      },
      {
        name: "Arquitectura Cloud / Serverless",
        level: "Fundamentos",
        learning: true,
      },
      {
        name: "Linux (Ubuntu)",
        level: "Administración básica",
        learning: true,
      },
      { name: "Git / GitHub", level: "Intermedio", learning: true },
      {
        name: "GitHub Actions (CI/CD)",
        level: "Fundamentos",
        learning: true,
      },
      { name: "Terraform (IaC)", level: "Fundamentos", learning: true },
    ],
  },

  /* =========================
     LEARNING
  ========================== */
  learning: [
    {
      topic: "AWS Cloud Practitioner",
      platform: "AWS Training",
      status: "En progreso",
      icon: Cloud,
    },
    {
      topic: "Spring Boot & Microservices",
      platform: "Udemy / Platzi",
      status: "En progreso",
      icon: Leaf,
    },
    {
      topic: "Arquitectura de Software",
      platform: "Estudio autodidacta",
      status: "En progreso",
      icon: Boxes,
    },
    {
      topic: "Docker & Contenedores",
      platform: "Docker Docs",
      status: "Próximamente",
      icon: Container,
    },
  ],

  /* =========================
     EDUCATION
  ========================== */
  education: [
    {
      degree: "ONE Tech Foundation G8 – Back End Developer",
      institution: "Oracle Next Education · Alura Latam",
      year: "2025",
      level: "Programa Técnico / Bootcamp",
      icon: BookOpen,
      status: "Finalizado",
    },
    {
      degree: "Ingeniería en Telecomunicaciones",
      institution:
        "Universidad Nacional Abierta y a Distancia (UNAD)",
      year: "2022",
      level: "Formación Profesional",
      icon: GraduationCap,
      status: "Finalizado",
    },
  ],

  /* =========================
     AREAS
  ========================== */
  areas: [
    {
      title: "Infraestructura",
      icon: Server,
      description:
        "Experiencia en Windows Server, Active Directory, Microsoft 365, VMware, almacenamiento y monitoreo.",
    },
    {
      title: "Desarrollo & Cloud",
      icon: Cloud,
      description:
        "En transición hacia el desarrollo con Java y Spring Boot, explorando servicios de AWS.",
    },
    {
      title: "Objetivo",
      icon: Target,
      description:
        "Aplicar prácticas DevOps para diseñar y automatizar soluciones modernas y escalables.",
    },
  ],
};
