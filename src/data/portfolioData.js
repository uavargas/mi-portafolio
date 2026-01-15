// src/data/portfolioData.js
import { 
  Cloud, 
  Leaf, 
  Boxes, 
  Container, 
  BookOpen, 
  GraduationCap 
} from "lucide-react";

export const portfolioData = {
  projects: [
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
        "Infraestructura 100% automatizada (IaC) orquestando un ecosistema Serverless en AWS. Integra Lambda (Python), API Gateway y DynamoDB.",
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
      github: "https://github.com/uavargas/PROYECTOAWS-TERRAFORM-GITACTIONS.git",
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
        "Aplicación para soporte técnico desarrollada con Java 21. Implementa una Arquitectura Limpia (Clean Architecture) en capas.",
      tech: [
        "Java 21",
        "Spring Boot 3.5",
        "PostgreSQL",
        "Maven",
        "Clean Architecture",
      ],
      category: "Backend Development",
      status: "Completado",
      github: "https://github.com/uavargas/Sistema-de-Gestion-de-Tickets-de-Soporte-Tecnico.git",
      demo: null,
    },
  ],

  experience: [
    {
      role: "Infrastructure Engineer",
      company: "E-Global – Metro de Medellín",
      location: "Medellín, Colombia",
      period: "Actual",
      description:
        "Administración y soporte de infraestructura on-premise y servicios Microsoft 365, garantizando la disponibilidad y seguridad.",
      achievements: [
        "Administración de Microsoft 365 y servicios on-premise",
        "Gestión de servidores Windows Server (2008 R2–2022) y Linux Ubuntu",
        "Administración de Active Directory: DCs, usuarios, grupos y GPOs",
        "Gestión de servicios DNS y DHCP",
        "Despliegue de máquinas virtuales en VMware vCenter",
        "Monitoreo de infraestructura y resolución de incidentes",
      ],
    },
    {
      role: "Web & Cloud Developer",
      company: "Fundación CEPAV",
      location: "Colombia",
      period: "3 meses",
      description:
        "Desarrollo de funcionalidades para sitio institucional con arquitectura serverless en AWS enfocada en escalabilidad.",
      achievements: [
        "Desarrollo de interfaces dinámicas con React.js",
        "Diseño de arquitectura Serverless (Lambda, API Gateway, DynamoDB)",
        "Infraestructura como código (IaC) mediante AWS CDK",
        "Implementación de mensajería con Amazon SNS",
        "Hosting en Amazon S3 y CloudFront con protección OAC",
        "Automatización CI/CD con GitHub Actions y Bitbucket",
      ],
    },
    {
      role: "Infrastructure Engineer",
      company: "B2B Tics SAS – Metro de Medellín",
      location: "Medellín, Colombia",
      period: "15 meses",
      description:
        "Administración y soporte de infraestructura tecnológica en entornos on-premise y servicios corporativos.",
      achievements: [
        "Administración de Microsoft 365",
        "Gestión de servidores Windows Server y Linux Ubuntu",
        "Administración de Active Directory, GPOs, DNS y DHCP Fileserver",
        "Gestión y administración de máquinas virtuales en VMware vCenter",
        "Monitoreo de infraestructura y resolución de incidentes",
        "Documentación técnica y procedimientos operativos",
      ],
    },
  ],

  skills: {
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
      { name: "AWS (EC2, S3, Lambda, SNS, DynamoDB)", level: "Básico", learning: true },
      { name: "Arquitectura Cloud / Serverless", level: "Básico", learning: true },
      { name: "Linux (Ubuntu)", level: "Básico ", learning: true },
      { name: "Git / GitHub", level: "Intermedio", learning: true },
      { name: "GitHub Actions (CI/CD)", level: "Básico", learning: true },
      { name: "Terraform (IaC)", level: "Básico", learning: true },
    ],
  },

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
      institution: "Universidad Nacional Abierta y a Distancia (UNAD)",
      year: "2022",
      level: "Formación Profesional",
      icon: GraduationCap,
      status: "Finalizado",
    },
  ],
};