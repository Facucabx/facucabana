
import projectApligood from '../assets/project-apligood.png';
import projectApligoodMarketing from '../assets/project-apligood-marketing.png';
import projectApligoodLive from '../assets/project-apligood-live.png';
import projectKinder from '../assets/project-kinder.png';
import projectSanNicolas from '../assets/project-sannicolas.png';
import projectConext from '../assets/project-conext.png';
import projectPropiedades from '../assets/project-propiedades.jpg';
import personalLogo from '../assets/personal-logo.svg';

export const profileData = {
  name: "Facundo Cabaña Mosto",
  headline: "UX/UI Designer | Técnico Superior en Diseño y Desarrollo Web | Técnico en Informática",
  heroDescription: "Transformo problemas complejos en interfaces intuitivas. Uno la lógica técnica con el diseño moderno para crear soluciones digitales reales. No solo hago que se vea bien, hago que funcione.",
  about: "Me gusta mucho la tecnología y buscar soluciones para la sociedad. Hoy trabajo instalando servicios para Personal, y al mismo tiempo me capacito para orientar mi carrera hacia el diseño UX/UI. Aprovecho mi experiencia en la calle para entender qué necesitan los usuarios y uso eso para mejorar mis proyectos, como Apligood. Me mantengo actualizado porque quiero crear aplicaciones que sean simples y útiles para todos.",
  location: "San Nicolás de los Arroyos, Buenos Aires, Argentina", 
  phone: "3364626278",
  email: "facucabs7@gmail.com", 
  social: {
    linkedin: "https://www.linkedin.com/in/facumost/",
    behance: "https://www.behance.net/facucabs",
    website: "https://facucabana.com.ar",
    email: "facucabs7@gmail.com"
  },
  experience: [
    {
      id: 1,
      company: "Personal (Telecom Argentina)",
      role: "Técnico Instalador",
      period: "Abril 2015 – Actualidad",
      logo: personalLogo,
      url: "https://www.personal.com.ar",
      startDate: "2015-04-13T00:00:00",
      description: "Comencé mi carrera en Cablevisión Fibertel y me adapté con éxito a la transformación hacia Personal (Telecom Argentina). Mi especialidad es la implementación de FTTH y HFC, pero mi trabajo va mucho más allá de la instalación: gestiono integralmente mi unidad móvil (control de stock y órdenes de trabajo) para asegurar eficiencia en cada visita. Con más de 17.000 órdenes ejecutadas, combino la capacidad técnica con el trabajo en equipo y una atención al cliente dedicada, buscando siempre que el usuario quede 100% satisfecho."
    }
  ],
  education: [
    {
      id: 1,
      institution: "Coderhouse",
      degree: "Diseño UX/UI avanzado",
      period: "dic. 2025 – mar. 2026",
      description: "Especialización para profundizar en metodologías de investigación de usuarios y sistemas de diseño escalables. Aplicando estos conocimientos de forma inmediata en el desarrollo de una aplicación propia construida en React, optimizando la interacción y el flujo de navegación para unir el diseño con la implementación técnica.",
      skills: ["Diseño de interfaz de usuario (UI)", "Diseño de experiencia de usuario (UX)", "Figma", "Prototipado"]
    },
    {
      id: 2,
      institution: "Escuela Da Vinci",
      degree: "Técnico Superior en Diseño y Programación Web",
      period: "mar. 2024 – dic. 2026",
      description: "Desarrollo de páginas web, contenido digital/multimedia y recursos informáticos."
    },
    {
      id: 4,
      institution: "Coderhouse",
      degree: "Liderazgo y gestión de equipos, Liderazgo empresarial",
      period: "ago. 2024 – sept. 2024",
      description: "Desarrollo de habilidades de liderazgo y gestión de equipos. Participación en simulaciones de liderazgo y gestión de equipos."
    },
    {
      id: 5,
      institution: "Coderhouse",
      degree: "Community Manager & Publicidad",
      period: "ene. 2024 – abr. 2024"
    },
    {
      id: 6,
      institution: "Coderhouse",
      degree: "Diseño UX/UI",
      period: "oct. 2023 – ene. 2024",
      skills: ["Atomic Design", "UX research", "Motion UI", "Userflows"]
    }
  ],
  skillCategories: [
    {
      title: "Skills Principales",
      skills: [
        { name: "JavaScript", icon: "javascript" },
        { name: "React", icon: "react" },
        { name: "HTML/CSS", icon: "html" },
        { name: "Firebase", icon: "firebase" },
        { name: "Design Thinking", icon: "bulb" },
        { name: "Agile/Scrum", icon: "agile" }
      ]
    },
    {
      title: "Herramientas de Diseño",
      skills: [
        { name: "Figma", icon: "figma" },
        { name: "Photoshop", icon: "photoshop" },
        { name: "Adobe (AI/XD)", icon: "adobe" },
        { name: "UI Design", icon: "ui" },
        { name: "Prototipado", icon: "proto" }
      ]
    },
    {
      title: "IA & Productividad",
      skills: [
        { name: "Gemini", icon: "gemini" },
        { name: "ChatGPT", icon: "chatgpt" },
        { name: "Gravity", icon: "gravity" },
        { name: "MS Office", icon: "office" }
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Apligood - Web App 2026",
      year: "2026",
      description: "Aplicación Web en desarrollo activo. Plataforma integral para conectar profesionales con usuarios. Implementación real con tecnologías modernas, enfoque en escalabilidad y experiencia de usuario.",
      link: "https://www.apligood.com.ar/",
      tags: ["StartUp", "React", "Live Project", "Web App"],
      image: projectApligoodLive
    },
    {
      id: 7,
      title: "Propiedades Directas",
      year: "2025",
      description: "Plataforma web para conectar dueños directos con inquilinos/compradores en San Nicolás. Desarrollo activo enfocado en simplificar el mercado inmobiliario local sin intermediarios.",
      link: "https://propiedadesdirectas.web.app/",
      tags: ["React", "Real Estate", "Web App", "In Development"],
      image: projectPropiedades
    },
    {
      id: 4,
      title: "Rediseño de App Field Service Conext",
      year: "2025",
      description: "Propuesta interna (Figma). Iniciativa proactiva basada en 11 años de experiencia operativa para detectar puntos de mejora. Aplicación de metodologías de investigación centradas en el técnico como usuario final.",
      link: "https://www.figma.com/proto/smxKgZoOOAjS6djvwSoMYy/Conext-FCM?page-id=0%3A1&node-id=2014-4&viewport=-860%2C753%2C0.59&t=oSo2t8k22ZoPzJuS-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2014%3A4",
      tags: ["UX Research", "Figma", "Redesign", "Internal Tool"],
      image: projectConext
    },
    {
      id: 2,
      title: "Apligood - UX/UI",
      year: "2024",
      description: "TP Final UX/UI (2024). Diseño integral de App Web (React + Firebase) para conectar personas con profesionales, gestionar reservas y recuperar objetos perdidos. Creación de flujos, wireframes, UI high-fidelity y sistema de diseño propio.",
      link: "https://www.behance.net/gallery/188369669/Apligood-Diseno-UXUI",
      tags: ["React", "Firebase", "UX/UI", "Product Design"],
      image: projectApligood
    },
    {
      id: 3,
      title: "Apligood - Plan de Marketing",
      year: "2024",
      description: "Trabajo práctico final de Marketing Digital. Desarrollo de la estrategia de marketing y lanzamiento para la startup Apligood.",
      link: "https://www.behance.net/gallery/196769567/Apligood-Plan-de-Marketing",
      tags: ["Marketing", "Strategy", "Startup", "Digital Marketing"],
      image: projectApligoodMarketing
    },
    {
      id: 5,
      title: "Marketing Digital - Kinder Sorpresa",
      year: "2024",
      description: "Trabajo práctico final de Marketing Digital. Desarrollo de campaña integral, estrategia de redes sociales y análisis de métricas para la marca Kinder Sorpresa.",
      link: "https://www.behance.net/gallery/238446667/TPF-Marketing-digital-Kinder-Sorpresa",
      tags: ["Marketing", "Social Media", "Strategy"],
      image: projectKinder
    },
    {
      id: 6,
      title: "Comunicación Visual - San Nicolás",
      year: "2024",
      description: "Trabajo práctico sobre identidad visual y comunicación para la ciudad de San Nicolás de los Arroyos. Análisis semiótico y propuesta gráfica.",
      link: "https://www.behance.net/gallery/199431043/San-Nicolas-de-los-Arroyos-TP1",
      tags: ["Graphic Design", "Brand Identity", "Communication"],
      image: projectSanNicolas
    }
  ]
};
