import {
  iconCssColor,
  iconCssWhite,
  iconGitColor,
  iconGitWhite,
  iconHtmlColor,
  iconHtmlWhite,
  iconJestColor,
  iconJestWhite,
  iconJsColor,
  iconJsWhite,
  iconNpmColor,
  iconNpmWhite,
  iconReactColor,
  iconReactWhite,
  iconFigmaWhite,
  iconFigmaColor,
  iconTailwindColor,
  iconTailwindWhite,
  iconTsColor,
  iconTsWhite,
  iconVsCodeColor,
  iconVsCodeWhite,
  iconNextWhite,
  iconNextColor,
  iconCursorColor,
} from "./Icons";

// Importaciones de imágenes usando rutas absolutas desde public
//Chapel Futbol
const imgDesktopUrl1 = "/img/projectsImg/chapel-futbol/Chapel-Desktop.png";
const imgMobileUrl1 = "/img/projectsImg/chapel-futbol/Chapel-Mobile.png";

//Ecommerce
const imgDesktopUrl2 = "/img/projectsImg/ecommerce/Ecommerce-Desktop.png";
const imgMobileUrl2 = "/img/projectsImg/ecommerce/Ecommerce-Mobile.png";

const imgBlog1 = "/img/blogImg/OIG4.jpg";
const imgBlog2 = "/img/blogImg/post2.png";
const imgBlog3 = "/img/blogImg/post3.png";

import { textLanguage } from "../types/types";

export const text: { textEs: textLanguage; textEn: textLanguage } = {
  textEs: {
    header: {
      logo: "<JC>",
      nav: {
        li: {
          home: "INICIO",
          projects: "PROYECTOS",
          blog: "BLOG",
          contactMe: "CONTÁCTAME",
        },
      },
    },
    home: {
      hero: {
        heroImg: {
          imgAlt: "ilustracion de Jose Maria Coronel",
        },
        title: {
          beforeHiglight: "Soy ",
          higlight: "Jose Maria Coronel",
        },
        subtitle: {
          beforeHiglight: "Desarrollador web especializado en Frontend",
          higlight: "(React y Next.js)",
        },
        cta: "VER PROYECTOS",
      },
      lastProyects: {
        title: "ÚLTIMOS PROYECTOS",
      },
      aboutMe: {
        title: "SOBRE MÍ",
        subtitle:
          "Soy José María Coronel, desarrollador web especializado en React y Next.js, con 24 años y residente en Buenos Aires, Argentina. Mi foco principal está en el desarrollo frontend, creando interfaces eficientes y modernas, mientras desarrollo habilidades sólidas en backend con Node.js y bases de datos para construir aplicaciones más completas. Mi aprendizaje es constante, basado en la práctica real, documentación oficial y la construcción de proyectos que reflejan mi crecimiento profesional.",
        sections: [
          {
            title: "MI TRAYECTORIA",
            text: "Comencé mi camino en la programación de manera autodidacta, enfocándome inicialmente en frontend con React y Next.js. Actualmente amplío mis habilidades hacia el desarrollo fullstack, integrando Node.js y bases de datos para construir aplicaciones completas y funcionales. Mi aprendizaje es constante y práctico, basado en proyectos reales y documentación oficial, siempre buscando resultados aplicables en entornos profesionales.",
          },
          {
            title: "CALIDAD Y BUENAS PRÁCTICAS",
            text: "Escribo código limpio, legible y escalable, con atención a la mantenibilidad y organización. Aplico principios de arquitectura limpia y patrones probados tanto en frontend como en backend, facilitando la colaboración en equipo y la evolución de los proyectos.",
          },
          {
            title: "TECNOLOGÍAS Y HERRAMIENTAS",
            text: "Trabajo principalmente con el ecosistema React/Next.js, empleando TypeScript para mejorar la robustez y Tailwind CSS para un desarrollo rápido y responsivo. Manejo herramientas de estado como Zustand y diseño prototipos con Figma para asegurar una experiencia de usuario coherente y funcional.",
          },
        ],
      },
      techsAndSkills: {
        title: "TECNOLOGÍAS Y HABILIDADES",
        topicText: "Tópicos",
        levelText: "Nivel",
        projectsText: "Proyectos",
        sections: [
          {
            title: "TECNOLOGÍAS",
            list: [
              {
                id: 1,
                title: "HTML5",
                color: "#E34F26",
                iconWhite: iconHtmlWhite,
                iconColor: iconHtmlColor,
                level: "Avanzado",
                mainTopics: [
                  "Estructura semántica",
                  "Etiquetas HTML",
                  "Formularios",
                  "Multimedia (audio, video)",
                ],
                mainProjects: [
                  "portfolio personal",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 2,
                title: "CSS3",
                color: "#1572B6",
                iconWhite: iconCssWhite,
                iconColor: iconCssColor,
                level: "Avanzado",
                mainTopics: [
                  "Selectores y combinadores",
                  "Flexbox y Grid",
                  "Librerías (Tailwind, Bootstrap)",
                  "Animaciones y transiciones",
                  "Metodologías de CSS (BEM, SMACSS)",
                  "Responsive Design",
                ],
                mainProjects: [
                  "portfolio personal",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 3,
                title: "JavaScript",
                color: "#F7DF1E",
                iconWhite: iconJsWhite,
                iconColor: iconJsColor,
                level: "Intermedio",
                mainTopics: [
                  "Funciones de flecha",
                  "Destructuring",
                  "Promesas y Async/Await",
                  "Manipulación del DOM",
                  "Módulos ES6",
                ],
                mainProjects: [
                  "portfolio personal",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 4,
                title: "TypeScript",
                color: "#007ACC",
                iconWhite: iconTsWhite,
                iconColor: iconTsColor,
                level: "Intermedio",
                mainTopics: [
                  "Tipado básico (variables y funciones)",
                  "Definición de interfaces simples para componentes",
                  "Uso de tipos primitivos y arrays",
                  "Configuración básica de TypeScript en el proyecto",
                ],
                mainProjects: ["portfolio personal", "Arenados Lucho"],
              },
            ],
          },
          {
            title: "FRAMEWORKS Y LIBRERÍAS",
            list: [
              {
                id: 1,
                title: "React.js",
                color: "#61DAFB",
                iconWhite: iconReactWhite,
                iconColor: iconReactColor,
                level: "Intermedio",
                mainTopics: [
                  "Componentes",
                  "Hooks",
                  "Manejo de estado",
                  "React router dom",
                  "JSX",
                ],
                mainProjects: [
                  "portfolio personal",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 2,
                title: "Next.js",
                color: "#000000",
                iconWhite: iconNextWhite,
                iconColor: iconNextColor,
                level: "Básico",
                mainTopics: [
                  "App Router",
                  "API Routes",
                  "Server Components",
                  "Client Components",
                  "File System Routing",
                ],
                mainProjects: ["Violet Shop"],
              },
              {
                id: 3,
                title: "Tailwind",
                color: "#38B2AC",
                iconWhite: iconTailwindWhite,
                iconColor: iconTailwindColor,
                level: "Intermedio",
                mainTopics: [
                  "Utilidades CSS",
                  "Personalización de temas",
                  "Responsive Design",
                ],
                mainProjects: [
                  "portfolio personal",
                  "Violet Shop",
                  "Arenados Lucho",
                ],
              },
              {
                id: 4,
                title: "Jest y Testing Library",
                color: "#99424F",
                iconWhite: iconJestWhite,
                iconColor: iconJestColor,
                level: "Básico",
                mainTopics: [
                  "Escritura de pruebas unitarias básicas para componentes",
                  "Uso de simulaciones de eventos (click, cambio)",
                  "Pruebas de renderizado de componentes",
                  "Verificación de propiedades y estados en pruebas",
                ],
                mainProjects: ["Violet Shop"],
              },
            ],
          },
          {
            title: "HERRAMIENTAS",
            list: [
              {
                id: 1,
                title: "Git",
                color: "#F05032",
                iconWhite: iconGitWhite,
                iconColor: iconGitColor,
                level: "Intermedio",
                mainTopics: [
                  "Comandos básicos (add, commit, push)",
                  "Branches",
                  "Merge",
                ],
                mainProjects: [
                  "portfolio personal",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 2,
                title: "npm",
                color: "#CB3837",
                iconWhite: iconNpmWhite,
                iconColor: iconNpmColor,
                level: "Intermedio",
                mainTopics: [
                  "Gestión de dependencias",
                  "Scripts",
                  "Configuración de proyectos",
                ],
                mainProjects: [
                  "portfolio personal",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 3,
                title: "VS Code",
                color: "#007ACC",
                iconWhite: iconVsCodeWhite,
                iconColor: iconVsCodeColor,
                level: "Avanzado",
                mainTopics: [
                  "Extensiones útiles",
                  "Atajos de teclado",
                  "Configuraciones personalizadas",
                ],
                mainProjects: [
                  "portfolio personal",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 4,
                title: "Figma",
                color: "#F24E1E",
                iconWhite: iconFigmaWhite,
                iconColor: iconFigmaColor,
                level: "Intermedio",
                mainTopics: ["Diseño de interfaces"],
                mainProjects: [
                  "Wireframes de portfolio",
                  "Diseño de ecommerce",
                  "Mockups para Arenados Lucho",
                ],
              },
              {
                id: 5,
                title: "Cursor (Editor con IA)",
                color: "#4B91F6",
                iconWhite: iconCursorColor,
                iconColor: iconCursorColor,
                level: "Intermedio",
                mainTopics: [
                  "Autocompletado inteligente",
                  "Sugerencias contextuales",
                  "Integración con VS Code",
                  "Mejora de productividad",
                ],
                mainProjects: ["portfolio personal", "Ecommerce"],
              },
            ],
          },

          {
            title: "CONCEPTOS Y METODOLOGÍAS",
            list: [
              {
                id: 5,
                title: "Diseño responsivo",
                color: "#34A853",
                level: "Intermedio",
                mainTopics: [
                  "Media queries",
                  "Diseño mobile-first",
                  "Flexbox y Grid",
                  "Tailwind CSS",
                ],
                mainProjects: [
                  "portfolio personal",
                  "Violet Shop",
                  "Arenados Lucho",
                ],
              },
              {
                id: 6,
                title: "Componentes reutilizables",
                color: "#007BFF",
                level: "Intermedio",
                mainTopics: [
                  "Uso de props",
                  "Estados básicos",
                  "Organización y estructura de componentes",
                ],
                mainProjects: [
                  "portfolio personal",
                  "Violet Shop",
                  "Arenados Lucho",
                ],
              },
              {
                id: 7,
                title: "Manejo de estados",
                color: "#6A1B9A",
                level: "Intermedio",
                mainTopics: ["useState y useEffect", "Zustand", "Context API"],
                mainProjects: ["portfolio personal", "Violet Shop"],
              },
              {
                id: 8,
                title: "Control de versiones (Git)",
                color: "#F4511E",
                level: "Intermedio",
                mainTopics: [
                  "Commits y branches",
                  "Merge y pull requests",
                  "Resolución de conflictos",
                  "Flujos de trabajo colaborativos (Git workflows)",
                ],
                mainProjects: [
                  "portfolio personal",
                  "Violet Shop",
                  "Arenados Lucho",
                ],
              },
              {
                id: 9,
                title: "Testing",
                color: "#9E9D24",
                level: "Básico - Intermedio",
                mainTopics: [
                  "Testing unitario y de integración con Jest y Testing Library",
                  "Pruebas funcionales en login y registro",
                  "Simulación de eventos y validación de estados",
                ],
                mainProjects: ["Violet Shop"],
              },
              {
                id: 10,
                title: "Ruteo y Navegación",
                color: "#C62828",
                level: "Intermedio",
                mainTopics: [
                  "React Router",
                  "Next.js App Router",
                  "API Routes",
                  "Rutas dinámicas",
                ],
                mainProjects: ["portfolio personal", "Violet Shop"],
              },
              {
                id: 11,
                title: "Calidad de código y mantenimiento",
                color: "#6D4C41",
                level: "Intermedio",
                mainTopics: [
                  "Código limpio y buenas prácticas",
                  "Uso avanzado de TypeScript",
                  "Validación y manejo de formularios con React Hook Form",
                  "Autenticación y seguridad con JWT",
                ],
                mainProjects: ["portfolio personal", "Violet Shop"],
              },
            ],
          },
        ],
      },
    },
    projects: {
      title: "PROYECTOS",
      buttonText: {
        seeProject: "VER PROYECTO",
        seeDetails: "DETALLES",
        seeRepo: "REPO",
      },
      projectDetailTexts: {
        descriptionTitle: "DESCRIPCIÓN",
        isFinishText: "Finalizado",
        isNotFinishText: "En Proceso",
        techsUsed: "TECNOLOGÍAS UTILIZADAS",
        plainingProcessTitle: "PROCESO DE PLANIFICACIÓN",
        mainFeaturesTitle: "CARACTERÍSTICAS PRINCIPALES",
        issuesTitle: "PRINCIPALES DESAFÍOS",
      },

      list: [
        {
          id: 1,
          imgDesktopUrl: imgDesktopUrl2,
          imgDesktopAlt:
            "desktop view screenshot of the ecommerce project webpage",
          imgMobileUrl: imgMobileUrl2,
          imgMobileAlt:
            "mobile view screenshot of the ecommerce project webpage",
          title: "Violet Shop - E-commerce",
          techs: [
            "next.js",
            "typescript",
            "tailwind",
            "jwt",
            "shadcn",
            "zod",
            "react-hook-form",
            "node.js",
            "express",
            "prisma",
            "postgresql",
            "git",
            "vercel",
            "render",
            "github",
            "npm",
          ],
          description:
            "Violet Shop es un e-commerce fullstack construido con Next.js 14 y TypeScript en el frontend, y Node.js, Express, Prisma y PostgreSQL en el backend. Incluye autenticación segura con JWT y manejo de sesiones mediante cookies. Utiliza React Hook Form y Zod para formularios robustos, y una interfaz accesible basada en Shadcn UI. El proyecto sigue una arquitectura modular y aplica buenas prácticas de desarrollo, testing y despliegue. Está orientado a ofrecer una experiencia fluida tanto para usuarios como para administradores.",
          siteUrl: "https://ecommerce-refactor-tzah.vercel.app/",
          repoUrl: "https://github.com/josecoronel20/EcommerceRefactor-Front",
          isFinished: true,
          projectObjective:
            "El objetivo principal fue crear una tienda online completa con todas las funcionalidades esenciales de un e-commerce moderno. Se buscó implementar una arquitectura robusta y escalable, con un fuerte enfoque en la experiencia de usuario y la seguridad. El proyecto sirve como demostración de habilidades en desarrollo full-stack con Next.js y TypeScript.",
          details: {
            planningProcess: [
              {
                title: "Refactorización del proyecto	",
                description:
                  "Este proyecto surgió como una evolución natural de una versión anterior enfocada solo en el frontend. Tras haber desarrollado esa primera versión, identifiqué la necesidad de aplicar conocimientos fullstack para crear una solución más robusta y realista. Me propuse reconstruir la aplicación desde cero, con arquitectura profesional, funcionalidades completas y una lógica de negocio más alineada con lo que se espera en un entorno de trabajo real.",
                imageUrl: null,
              },
              {
                title: "Desarrollo",
                description:
                  "Durante el desarrollo, estructuré el frontend con Next.js 14 y TypeScript, aplicando patrones de diseño, control de estado con Zustand y una UI accesible con Shadcn. En el backend, utilicé Node.js con Express y Prisma ORM sobre PostgreSQL. Implementé autenticación JWT, validaciones con Zod, manejo de errores centralizado y una base de datos relacional con relaciones entre usuarios y compras. Todo el proceso fue versionado con Git, y prioricé una estructura modular y escalable en ambos lados del stack.",
                imageUrl: null,
              },
              {
                title: "Resultado",
                description:
                  "El resultado fue una aplicación web completa, funcional y preparada para producción. Violet Shop ahora cuenta con autenticación segura, gestión de usuarios, historial y simulación de compra. Este proyecto representa un salto en la calidad de mis desarrollos: pasé de crear interfaces estáticas a construir una solución integral con backend propio, lógica de negocio real y una base sólida para cualquier sistema e-commerce profesional.",
                imageUrl: null,
              },
            ],
            mainFeatures: [
              {
                title: "Backend y base de datos relacional",
                description:
                  "Desarrollo completo de un backend con Node.js, Express y Prisma ORM. Utilicé PostgreSQL como base de datos relacional, modelando entidades clave como usuarios y órdenes de compra con relaciones bien definidas. Implementé controladores RESTful, validaciones, manejo de errores y lógica de negocio modular para mantener escalabilidad y claridad en el código.",
              },
              {
                title: "Solidez en diseño de APIs REST",
                description:
                  "Este proyecto me permitió consolidar conceptos clave del diseño de APIs RESTful. Apliqué buenas prácticas como rutas semánticas, separación entre lógica de negocio y controladores, control de errores centralizado, y consistencia en las respuestas. También profundicé en operaciones CRUD y autenticación segura vía tokens (JWT) para proteger endpoints sensibles.",
              },
              {
                title: "Uso profesional de herramientas modernas",
                description:
                  "Integré herramientas del stack moderno como React Hook Form para validaciones, Zustand para gestión de estado global, Prisma para ORM eficiente y tipado, y Zod para validaciones en el backend. También usé Shadcn UI para una interfaz accesible y profesional. Esta integración me ayudó a trabajar como en un entorno real, maximizando eficiencia y mantenibilidad.",
              },
            ],
            issues: {
              issueList: [
                {
                  title: "Aprendizaje de múltiples tecnologías nuevas",
                  description:
                    "El desarrollo del backend fullstack implicó aprender y aplicar múltiples tecnologías simultáneamente: Node.js, Express, Prisma, PostgreSQL, y herramientas de seguridad como JWT. Para evitar saturación, estructuré un roadmap de implementación incremental y enfoqué cada etapa en una tecnología específica. Esto me permitió integrar sinérgicamente cada herramienta y solidificar sus fundamentos.",
                },
                {
                  title: "Modularización y separación de responsabilidades",
                  description:
                    "Uno de los mayores desafíos fue estructurar el backend de forma profesional, separando controladores, rutas y servicios. Al principio, caí en el error de mezclar lógica en un mismo archivo. Tras recomendaciones de ChatGPT, refactoricé la lógica para que cada módulo tuviera una única responsabilidad clara y escalable.",
                },
                {
                  title: "Primeros pasos en manejo de errores y validaciones",
                  description:
                    "Durante el desarrollo del backend empecé a profundizar en el manejo de errores HTTP y la validación de datos. Aunque todavía no implementé un sistema centralizado con middlewares personalizados, estoy aprendiendo a usar correctamente los códigos de estado, `response.next()` y validaciones básicas así como tambíen el manejo de validaciones con Zod. Esto me permitió comenzar a estructurar respuestas más consistentes y preparar el camino para una arquitectura más robusta.",
                },
              ],
            },
          },
        },
        {
          id: 2,
          imgDesktopUrl: imgDesktopUrl1,
          imgDesktopAlt:
            "captura de pantalla de vista de escritorio de página web del sistema Chapel Futbol",
          imgMobileUrl: imgMobileUrl1,
          imgMobileAlt:
            "captura de pantalla de vista de móvil de página web del sistema Chapel Futbol",
          title: "Chapel Futbol",
          techs: [
            "next.js",
            "typescript",
            "react",
            "tailwind",
            "shadcn",
            "react-hook-form",
            "zod",
            "swr",
            "supabase",
            "node.js",
            "express",
            "prisma",
            "postgresql",
            "jwt",
            "multer",
            "git",
            "vercel",
            "render",
          ],
          description:
            "Sistema web completo para la gestión de perfiles de jugadores de fútbol desarrollado para el Centro Formativo de Alto Rendimiento Chapel Futbol. La aplicación permite a los administradores crear, editar y gestionar perfiles detallados de jugadores con información personal, estadísticas deportivas, habilidades técnicas y seguimiento de scouting. El sistema incluye autenticación segura, almacenamiento de archivos multimedia y una interfaz moderna optimizada para la experiencia del usuario.",
          siteUrl: "https://chapel-front.vercel.app/",
          repoUrl: "https://github.com/josecoronel20/chapel-front",
          isFinished: true,
          projectObjective:
            "Desarrollar un sistema completo de gestión de jugadores para un centro formativo de fútbol, implementando funcionalidades avanzadas como formularios complejos, almacenamiento multimedia, autenticación segura y una interfaz moderna que demuestre habilidades full-stack con tecnologías actuales.",
          details: {
            planningProcess: [
              {
                title: "Arquitectura y Diseño del Sistema",
                description:
                  "El proyecto comenzó con la definición de la arquitectura full-stack, implementando una separación clara entre frontend (Next.js 15 con App Router) y backend (Node.js con Express y TypeScript). Se diseñó un sistema de base de datos relacional con Prisma ORM para manejar la compleja estructura de datos de jugadores, incluyendo estadísticas, habilidades y logros. La planificación incluyó la implementación de autenticación JWT con cookies seguras y validación robusta de datos con Zod.",
                imageUrl: null,
              },
              {
                title: "Desarrollo de Funcionalidades Core",
                description:
                  "Se desarrolló el sistema de formularios complejos utilizando React Hook Form con validación Zod, permitiendo la gestión de datos anidados como estadísticas y habilidades. Se implementó un sistema de almacenamiento de archivos multimedia utilizando Supabase Storage para imágenes y videos de jugadores. La interfaz se construyó con componentes modulares usando shadcn/ui y Tailwind CSS, asegurando consistencia visual y accesibilidad.",
                imageUrl: null,
              },
              {
                title: "Optimización y Experiencia de Usuario",
                description:
                  "Se implementaron características avanzadas como skeleton loading, filtros dinámicos por posición, y un sistema de edición de jugadores que permite a los administradores gestionar el perfil de jugadores. Se optimizó el rendimiento con SWR para data fetching, implementando cache inteligente y actualizaciones en tiempo real. El sistema incluye protección de rutas, manejo de errores robusto y una experiencia de usuario fluida con animaciones y transiciones.",
                imageUrl: null,
              },
            ],
            mainFeatures: [
              {
                title: "Sistema de Formularios Complejos con Validación Avanzada",
                description:
                  "Implementé un sistema de formularios multi-sección utilizando React Hook Form con validación Zod que maneja datos anidados complejos (estadísticas, habilidades, logros). El sistema incluye validación en tiempo real, manejo de estados de carga, y sincronización automática entre componentes. Los formularios soportan tanto creación como edición de jugadores con pre-población inteligente de datos existentes.",
              },
              {
                title: "Almacenamiento de Archivos Multimedia con Supabase Storage",
                description:
                  "Desarrollé un sistema completo de gestión de archivos multimedia utilizando Supabase Storage para almacenar imágenes y videos de jugadores. El sistema incluye validación de tipos de archivo, optimización de imágenes, eliminación automática de archivos anteriores, y URLs públicas seguras. Implementé tanto la funcionalidad de subida desde el frontend como endpoints REST en el backend para gestión de archivos.",
              },
              {
                title: "Sistema de Autenticación y Autorización Robusto",
                description:
                  "Creé un sistema de autenticación completo con JWT tokens almacenados en cookies HTTP-only, middleware de protección de rutas, y validación de permisos. El sistema incluye login seguro, manejo de sesiones, redirección automática basada en estado de autenticación, y protección de endpoints sensibles tanto en frontend como backend.",
              },
            ],
            issues: {
              issueList: [
                {
                  title: "Manejo de Estados Complejos en Formularios Multi-Sección",
                  description:
                    "El mayor desafío fue implementar formularios que manejan datos anidados complejos (estadísticas, habilidades, logros) con validación en tiempo real. Utilicé React Hook Form con Controllers personalizados para manejar sliders, arrays dinámicos y validación cruzada entre campos. Implementé un sistema de pre-población inteligente que maneja la conversión de fechas ISO y la sincronización de estados entre componentes.",
                },
                {
                  title: "Migración de Sistema de Autenticación e Integración con Supabase",
                  description:
                    "Migré exitosamente de un sistema de autenticación basado en archivos JSON a Supabase Auth, manteniendo la compatibilidad con el sistema existente. Implementé la integración de Supabase Storage para archivos multimedia, resolviendo problemas de CORS, manejo de tipos de archivo, y optimización de rendimiento. El proceso incluyó la configuración de variables de entorno, manejo de errores de red, y migración gradual de funcionalidades.",
                },
                {
                  title: "Optimización de Rendimiento y Experiencia de Usuario",
                  description:
                    "Implementé técnicas avanzadas de optimización incluyendo skeleton loading, lazy loading de componentes, cache inteligente con SWR, y optimización de imágenes. Resolví problemas de re-renders innecesarios en formularios complejos, implementé filtros dinámicos sin afectar el rendimiento, y optimicé la carga de datos con prefetching inteligente. El sistema maneja eficientemente grandes volúmenes de datos manteniendo una experiencia de usuario fluida.",
                },
              ],
            },
          },
        },
      ],
    },
    blog: {
      title: "POSTS DE MI BLOG PERSONAL",
      seePost: "VER POST",
      blogList: [
        {
          id: 1,
          title: "Construyendo Fundamentos Sólidos",
          image: imgBlog1,
          altImg: "Ímagen de posteo de programador estudiando",
          shortDescription:
            "Al mudarme a Portugal en abril sin computadora, utilicé libros, videos y documentación en línea para fortalecer mis conocimientos en desarrollo web. Con 'Fundamentos de Programación: Estructura de Datos y Algoritmos' y 'Eloquent JavaScript', construí una base sólida. Finalmente, adquirí una computadora y apliqué lo aprendido en mi primer proyecto: un portfolio personal.",
          description:
            "En abril, al mudarme sin una computadora, enfrenté el desafío de continuar mi formación en desarrollo web. Aproveché una variedad de recursos, incluidos libros, videos y documentación en línea, para construir una base sólida en programación. Con una computadora finalmente disponible, pude aplicar lo aprendido en un proyecto práctico: el desarrollo de mi portfolio personal.",
          subtitle:
            "De la Teoría a la Práctica: Cómo Una Formación Diversificada Potenció Mi Primer Proyecto Web",
          content:
            "Al mudarme a Portugal enfrenté el reto de continuar mi formación como desarrollador web. Para superar esta limitación, recurrí a diversos recursos educativos, incluyendo libros, videos y documentación en línea, para construir una base sólida en programación. Primero, me sumergí en el libro 'Fundamentos de Programación: Estructura de Datos y Algoritmos', que me proporcionó una comprensión profunda de conceptos clave como algoritmos, estructuras de control y recursión. También aprendí sobre estructuras de datos lineales y obtuve una introducción a las estructuras de datos no lineales. La programación orientada a objetos (POO) fue otro foco de estudio, donde profundicé en temas como encapsulamiento, herencia y polimorfismo. Más adelante, leí 'Eloquent JavaScript', que expandió mi conocimiento hacia el desarrollo web con JavaScript. Este libro cubrió la sintaxis de JavaScript, tipos de datos y estructuras, funciones y el manejo del ámbito y los cierres (closures). Además, me introdujo a los objetos y prototipos en JavaScript, la programación asíncrona, la manipulación del DOM, el manejo de eventos, y la modularización y gestión de paquetes. También exploré conceptos de programación funcional aplicados en JavaScript. Con toda esta formación teórica, finalmente adquirí una computadora, lo que me permitió profundizar más en React, enfocándome en la componentización y los custom Hooks, y poner en práctica lo aprendido. Desarrollé mi primer proyecto, un portfolio personal, que consolidó mis conocimientos y demostró mi capacidad para aplicar los conceptos adquiridos en un entorno real. Esta experiencia subraya cómo una preparación integral y diversificada puede facilitar una transición exitosa de la teoría a la práctica en el desarrollo web.",
          conclusion:
            "La combinación de estudios teóricos y recursos variados como libros, videos y documentación en línea fue clave para construir una base sólida en desarrollo web. Esta preparación exhaustiva me permitió enfrentar con éxito mi primer proyecto práctico. Al aplicar los conceptos aprendidos en 'Fundamentos de Programación: Estructura de Datos y Algoritmos' y 'Eloquent JavaScript', junto con otros recursos educativos, pude desarrollar un portfolio personal que refleja tanto mi formación como mi capacidad para implementar lo aprendido. Esta experiencia destaca la importancia de una formación integral y bien fundamentada para lograr una transición efectiva a la práctica profesional.",
        },
        {
          id: 2,
          title: "Desarrollo Profesional con Librerías Modernas",
          image: imgBlog2,
          altImg:
            "Imagen de posteo mostrando un desarrollador trabajando con librerías modernas y Cursor",
          shortDescription:
            "Con una base sólida en desarrollo web, comencé a explorar librerías modernas como Shadcn, Zustand y React Hook Form, utilizando Cursor como IDE para simular un ambiente de desarrollo profesional. Esta experiencia me permitió mejorar mis prácticas de código y familiarizarme con herramientas utilizadas en la industria.",
          description:
            "Después de establecer una base sólida en desarrollo web, decidí dar el siguiente paso en mi crecimiento profesional: incorporar librerías modernas y herramientas de desarrollo utilizadas en la industria. Utilizando Cursor como mi IDE principal y explorando librerías como Shadcn, Zustand y React Hook Form, comencé a desarrollar proyectos que simulan un ambiente laboral real.",
          subtitle:
            "De las Bases al Desarrollo Profesional: Integrando Herramientas Modernas",
          content:
            "Con una base sólida en React y TypeScript, sentí que era el momento de dar un salto en mi desarrollo profesional. Decidí comenzar a utilizar librerías y herramientas que son estándar en la industria, comenzando con Shadcn para la interfaz de usuario. Esta librería me permitió crear componentes accesibles y personalizables, siguiendo las mejores prácticas de diseño y desarrollo.\n\nEl siguiente paso fue implementar Zustand para el manejo de estado global. A diferencia de soluciones más complejas como Redux, Zustand me ofreció una forma más sencilla y eficiente de manejar el estado de la aplicación, manteniendo un código limpio y mantenible. Esta experiencia me ayudó a entender mejor los patrones de manejo de estado en aplicaciones reales.\n\nPara mejorar la experiencia de usuario y la validación de formularios, incorporé React Hook Form . Esta combinación me permitió crear formularios robustos y validados, reduciendo significativamente la cantidad de código necesario y mejorando la experiencia del usuario final.\n\nUn aspecto crucial de esta evolución fue la adopción de Cursor como mi IDE principal. Esta herramienta no solo me proporcionó una experiencia de desarrollo más fluida, sino que también me ayudó a mantener un código más limpio y consistente. Las características de Cursor, como la integración con IA y las sugerencias inteligentes, me permitieron trabajar de manera más eficiente y profesional.\n\nEl proyecto Violet Shop se convirtió en el campo de pruebas perfecto para estas nuevas tecnologías. Implementando un sistema de autenticación con JWT, un carrito de compras persistente y una interfaz de usuario accesible, pude aplicar todas estas herramientas en un contexto real. Esta experiencia me ayudó a entender mejor cómo estas tecnologías se integran y funcionan juntas en un proyecto de producción.\n\nEsta fase de mi desarrollo profesional ha sido crucial para entender cómo se trabaja en un ambiente laboral real. La combinación de librerías modernas, herramientas de desarrollo avanzadas y buenas prácticas de código me ha permitido crear aplicaciones más robustas y mantenibles, preparándome mejor para mi futura carrera como desarrollador.",
          conclusion:
            "La incorporación de librerías modernas y herramientas de desarrollo profesional ha sido un paso fundamental en mi crecimiento como desarrollador. Al utilizar Shadcn, Zustand, React Hook Form y Cursor, no solo he mejorado la calidad de mis proyectos, sino que también he ganado experiencia con tecnologías utilizadas en la industria. Esta evolución me ha permitido crear aplicaciones más robustas y mantenibles, simulando un ambiente de desarrollo profesional y preparándome mejor para mi futura carrera en el desarrollo web.",
        },
        {
          id: 3,
          title:
            "Construyendo mi Primer Ecommerce Fullstack: Camino a la Empleabilidad",
          image: imgBlog3,
          altImg:
            "Captura del ecommerce fullstack con interfaz moderna y funcionalidad backend",
          shortDescription:
            "El desarrollo completo de un ecommerce fullstack me ha permitido consolidar conocimientos clave en frontend, backend y despliegue, alineando mis habilidades con las exigencias del mercado laboral tecnológico actual.",
          description:
            "A lo largo de mi formación como desarrollador fullstack, la creación de un ecommerce ha sido el proyecto definitivo para consolidar un stack tecnológico moderno y demostrar habilidades prácticas que buscan impactar directamente en mi empleabilidad. Este proyecto integra tecnologías de frontend y backend, con una atención rigurosa en buenas prácticas, testing y despliegue profesional.",
          subtitle:
            "Del Aprendizaje a la Empleabilidad: Proyecto Ecommerce Fullstack como Puente Profesional",
          content:
            "El desafío de desarrollar un ecommerce fullstack me llevó a aplicar y profundizar conocimientos en Next.js y React para la interfaz, utilizando Tailwind CSS para asegurar un diseño responsivo y profesional. La lógica de negocio y la gestión de datos fueron implementadas con Node.js y Express, conectando con una base de datos PostgreSQL en render, garantizando persistencia y escalabilidad.\n\nAdemás, implementé autenticación segura mediante JWT y Zod, permitiendo sesiones protegidas y una experiencia de usuario confiable. \n\nEl proceso incluyó la integración completa de frontend y backend, desplegando ambos en plataformas profesionales como Vercel para el frontend y Render para el backend, demostrando habilidades en DevOps y configuración realista de entornos productivos.\n\nPara asegurar la calidad del código y prevenir regresiones, incorporé pruebas unitarias y de integración con Jest y Testing Library, prácticas que hoy son estándares en equipos profesionales y altamente valoradas en reclutamiento.\n\nTodo este recorrido no solo ha sido técnico, sino también estratégico. Documenté cada etapa en LinkedIn, generando contenido de valor para la comunidad y construyendo una red profesional que refuerza mi perfil. Este enfoque integral me prepara para afrontar procesos de selección con una propuesta sólida y diferenciada.\n\nEn síntesis, este ecommerce no es solo un proyecto: es la evidencia tangible de mi preparación para enfrentar retos reales en el desarrollo web y una carta de presentación robusta para cualquier empleador que busque un desarrollador junior competente y comprometido.",
          conclusion:
            "Completar este proyecto fullstack ha sido un hito decisivo en mi camino hacia la empleabilidad como desarrollador. La combinación de habilidades técnicas actualizadas, buenas prácticas profesionales y estrategia de visibilidad me posiciona como un candidato competitivo en el mercado laboral. El aprendizaje constante y la aplicación práctica son, sin duda, los pilares para avanzar con firmeza hacia mi objetivo profesional.",
        },
      ],
    },
    footer: {
      title: "Navegación rápida",
      copyText: "copiado",
      contactMe: {
        sectionTitle: "Información de contácto",
        email: {
          title: "Email",
          value: "josecoronel20@outlook.com",
        },
        phone: {
          title: "Número de teléfono",
          value: "1135028931",
        },
      },
      followMe: {
        sectionTitle: "Sígueme",
        github: {
          title: "GitHub",
          url: "https://github.com/josecoronel20",
        },
        linkedin: {
          title: "LinkedIn",
          url: "https://www.linkedin.com/in/jose-maria-coronel/",
        },
      },
    },
  },
  textEn: {
    header: {
      logo: "<JC>",
      nav: {
        li: {
          home: "HOME",
          projects: "PROJECTS",
          blog: "BLOG",
          contactMe: "CONTACT ME",
        },
      },
    },
    home: {
      hero: {
        heroImg: {
          imgAlt: "illustration of Jose Maria Coronel",
        },
        title: {
          beforeHiglight: "I am ",
          higlight: "Jose Maria Coronel",
        },
        subtitle: {
          beforeHiglight: "Web developer specialized in Frontend",
          higlight: "(React and Next.js)",
        },
        cta: "SEE PROJECTS",
      },
      lastProyects: {
        title: "LATEST PROJECTS",
      },
      aboutMe: {
        title: "ABOUT ME",
        subtitle:
          "I am José María Coronel, a web developer specialized in React and Next.js, 24 years old, based in Buenos Aires, Argentina. My main focus is frontend development, creating efficient and modern interfaces, while building solid backend skills with Node.js and databases to create more complete applications. I learn constantly, based on real practice, official documentation, and building projects that reflect my professional growth.",
        sections: [
          {
            title: "MY JOURNEY",
            text: "I started my programming path as a self-taught developer, initially focusing on frontend with React and Next.js. Currently, I am expanding my skills toward fullstack development, integrating Node.js and databases to build complete and functional applications. My learning is constant and practical, based on real projects and official documentation, always aiming for applicable results in professional environments.",
          },
          {
            title: "QUALITY AND BEST PRACTICES",
            text: "I write clean, readable, and scalable code, paying attention to maintainability and organization. I apply clean architecture principles and proven patterns both in frontend and backend, facilitating team collaboration and project evolution.",
          },
          {
            title: "TECHNOLOGIES AND TOOLS",
            text: "I mainly work with the React/Next.js ecosystem, using TypeScript to improve robustness and Tailwind CSS for fast and responsive development. I manage state tools like Zustand and design prototypes with Figma to ensure a coherent and functional user experience.",
          },
        ],
      },
      techsAndSkills: {
        title: "TECHNOLOGIES AND SKILLS",
        topicText: "Topics",
        levelText: "Level",
        projectsText: "Projects",
        sections: [
          {
            title: "TECHNOLOGIES",
            list: [
              {
                id: 1,
                title: "HTML5",
                color: "#E34F26",
                iconWhite: iconHtmlWhite,
                iconColor: iconHtmlColor,
                level: "Advanced",
                mainTopics: [
                  "Semantic structure",
                  "HTML tags",
                  "Forms",
                  "Multimedia (audio, video)",
                ],
                mainProjects: [
                  "personal portfolio",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 2,
                title: "CSS3",
                color: "#1572B6",
                iconWhite: iconCssWhite,
                iconColor: iconCssColor,
                level: "Advanced",
                mainTopics: [
                  "Selectors and combinators",
                  "Flexbox and Grid",
                  "Libraries (Tailwind, Bootstrap)",
                  "Animations and transitions",
                  "CSS Methodologies (BEM, SMACSS)",
                  "Responsive Design",
                ],
                mainProjects: [
                  "personal portfolio",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 3,
                title: "JavaScript",
                color: "#F7DF1E",
                iconWhite: iconJsWhite,
                iconColor: iconJsColor,
                level: "Intermediate",
                mainTopics: [
                  "Arrow functions",
                  "Destructuring",
                  "Promises and Async/Await",
                  "DOM manipulation",
                  "ES6 Modules",
                ],
                mainProjects: [
                  "personal portfolio",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 4,
                title: "TypeScript",
                color: "#007ACC",
                iconWhite: iconTsWhite,
                iconColor: iconTsColor,
                level: "Intermediate",
                mainTopics: [
                  "Basic typing (variables and functions)",
                  "Simple interface definitions for components",
                  "Use of primitive types and arrays",
                  "Basic TypeScript configuration in the project",
                ],
                mainProjects: ["personal portfolio", "Arenados Lucho"],
              },
            ],
          },
          {
            title: "FRAMEWORKS AND LIBRARIES",
            list: [
              {
                id: 1,
                title: "React.js",
                color: "#61DAFB",
                iconWhite: iconReactWhite,
                iconColor: iconReactColor,
                level: "Intermediate",
                mainTopics: [
                  "Components",
                  "Hooks",
                  "State management",
                  "React Router DOM",
                  "JSX",
                ],
                mainProjects: [
                  "personal portfolio",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 2,
                title: "Next.js",
                color: "#000000",
                iconWhite: iconNextWhite,
                iconColor: iconNextColor,
                level: "Basic",
                mainTopics: [
                  "App Router",
                  "API Routes",
                  "Server Components",
                  "Client Components",
                  "File System Routing",
                ],
                mainProjects: ["Violet Shop"],
              },
              {
                id: 3,
                title: "Tailwind",
                color: "#38B2AC",
                iconWhite: iconTailwindWhite,
                iconColor: iconTailwindColor,
                level: "Intermediate",
                mainTopics: [
                  "CSS Utilities",
                  "Theme customization",
                  "Responsive Design",
                ],
                mainProjects: [
                  "personal portfolio",
                  "Violet Shop",
                  "Arenados Lucho",
                ],
              },
              {
                id: 4,
                title: "Jest and Testing Library",
                color: "#99424F",
                iconWhite: iconJestWhite,
                iconColor: iconJestColor,
                level: "Basic",
                mainTopics: [
                  "Writing basic unit tests for components",
                  "Using event simulations (click, change)",
                  "Component render testing",
                  "Verifying props and states in tests",
                ],
                mainProjects: ["Violet Shop"],
              },
            ],
          },
          {
            title: "TOOLS",
            list: [
              {
                id: 1,
                title: "Git",
                color: "#F05032",
                iconWhite: iconGitWhite,
                iconColor: iconGitColor,
                level: "Intermediate",
                mainTopics: [
                  "Basic commands (add, commit, push)",
                  "Branches",
                  "Merge",
                ],
                mainProjects: [
                  "personal portfolio",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 2,
                title: "npm",
                color: "#CB3837",
                iconWhite: iconNpmWhite,
                iconColor: iconNpmColor,
                level: "Intermediate",
                mainTopics: [
                  "Dependency management",
                  "Scripts",
                  "Project configuration",
                ],
                mainProjects: [
                  "personal portfolio",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 3,
                title: "VS Code",
                color: "#007ACC",
                iconWhite: iconVsCodeWhite,
                iconColor: iconVsCodeColor,
                level: "Advanced",
                mainTopics: [
                  "Useful extensions",
                  "Keyboard shortcuts",
                  "Custom configurations",
                ],
                mainProjects: [
                  "personal portfolio",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 4,
                title: "Figma",
                color: "#F24E1E",
                iconWhite: iconFigmaWhite,
                iconColor: iconFigmaColor,
                level: "Intermediate",
                mainTopics: ["Interface design"],
                mainProjects: [
                  "Portfolio wireframes",
                  "Ecommerce design",
                  "Mockups for Arenados Lucho",
                ],
              },
              {
                id: 5,
                title: "Cursor (AI-powered editor)",
                color: "#4B91F6",
                iconWhite: iconCursorColor,
                iconColor: iconCursorColor,
                level: "Intermediate",
                mainTopics: [
                  "Intelligent autocomplete",
                  "Contextual suggestions",
                  "VS Code integration",
                  "Productivity enhancement",
                ],
                mainProjects: ["personal portfolio", "Ecommerce"],
              },
            ],
          },
          {
            title: "CONCEPTS AND METHODOLOGIES",
            list: [
              {
                id: 5,
                title: "Responsive Design",
                color: "#34A853",
                level: "Intermediate",
                mainTopics: [
                  "Media queries",
                  "Mobile-first design",
                  "Flexbox and Grid",
                  "Tailwind CSS",
                ],
                mainProjects: [
                  "personal portfolio",
                  "Violet Shop",
                  "Arenados Lucho",
                ],
              },
              {
                id: 6,
                title: "Reusable Components",
                color: "#007BFF",
                level: "Intermediate",
                mainTopics: [
                  "Using props",
                  "Basic states",
                  "Component organization and structure",
                ],
                mainProjects: [
                  "personal portfolio",
                  "Violet Shop",
                  "Arenados Lucho",
                ],
              },
              {
                id: 7,
                title: "State Management",
                color: "#6A1B9A",
                level: "Intermediate",
                mainTopics: [
                  "useState and useEffect",
                  "Zustand",
                  "Context API",
                ],
                mainProjects: ["personal portfolio", "Violet Shop"],
              },
              {
                id: 8,
                title: "Version Control (Git)",
                color: "#F4511E",
                level: "Intermediate",
                mainTopics: [
                  "Commits and branches",
                  "Merge and pull requests",
                  "Conflict resolution",
                  "Collaborative workflows (Git workflows)",
                ],
                mainProjects: [
                  "personal portfolio",
                  "Violet Shop",
                  "Arenados Lucho",
                ],
              },
              {
                id: 9,
                title: "Testing",
                color: "#9E9D24",
                level: "Basic - Intermediate",
                mainTopics: [
                  "Unit and integration testing with Jest and Testing Library",
                  "Functional tests on login and registration",
                  "Event simulation and state validation",
                ],
                mainProjects: ["Violet Shop"],
              },
              {
                id: 10,
                title: "Routing and Navigation",
                color: "#C62828",
                level: "Intermediate",
                mainTopics: [
                  "React Router",
                  "Next.js App Router",
                  "API Routes",
                  "Dynamic routes",
                ],
                mainProjects: ["personal portfolio", "Violet Shop"],
              },
              {
                id: 11,
                title: "Code Quality and Maintenance",
                color: "#6D4C41",
                level: "Intermediate",
                mainTopics: [
                  "Clean code and best practices",
                  "Advanced TypeScript usage",
                  "Form validation and handling with React Hook Form",
                  "Authentication and security with JWT",
                ],
                mainProjects: ["personal portfolio", "Violet Shop"],
              },
            ],
          },
        ],
      },
    },
    projects: {
      title: "PROJECTS",
      buttonText: {
        seeProject: "SEE PROJECT",
        seeDetails: "DETAILS",
        seeRepo: "REPO",
      },
      projectDetailTexts: {
        descriptionTitle: "DESCRIPTION",
        isFinishText: "Completed",
        isNotFinishText: "In Progress",
        techsUsed: "TECHNOLOGIES USED",
        plainingProcessTitle: "PLANNING PROCESS",
        mainFeaturesTitle: "MAIN FEATURES",
        issuesTitle: "MAIN CHALLENGES",
      },

      list: [
        {
          id: 1,
          imgDesktopUrl: imgDesktopUrl2,
          imgDesktopAlt:
            "desktop view screenshot of the ecommerce project webpage",
          imgMobileUrl: imgMobileUrl2,
          imgMobileAlt:
            "mobile view screenshot of the ecommerce project webpage",
          title: "Violet Shop - E-commerce",
          techs: [
            "next.js",
            "typescript",
            "tailwind",
            "jwt",
            "shadcn",
            "zod",
            "react-hook-form",
            "zod",
            "node.js",
            "express",
            "prisma",
            "postgresql",
            "git",
            "vercel",
            "render",
            "github",
            "npm",
          ],
          description:
            "Violet Shop is a fullstack e-commerce built with Next.js 14 and TypeScript on the frontend, and Node.js, Express, Prisma, and PostgreSQL on the backend. It includes secure authentication with JWT and session management via cookies. It uses React Hook Form and Zod for robust forms, and an accessible UI based on Shadcn UI. The project follows a modular architecture and applies best practices in development, testing, and deployment. It aims to provide a smooth experience for both users and administrators.",
          siteUrl: "https://ecommerce-refactor-tzah.vercel.app/",
          repoUrl: "https://github.com/josecoronel20/EcommerceRefactor-Front",
          isFinished: true,
          projectObjective:
            "The main objective was to create a complete online store with all essential functionalities of a modern e-commerce. The goal was to implement a robust and scalable architecture, with a strong focus on user experience and security. The project serves as a demonstration of full-stack development skills using Next.js and TypeScript.",
          details: {
            planningProcess: [
              {
                title: "Project Refactor",
                description:
                  "This project emerged as a natural evolution from a previous version focused only on the frontend. After developing that first version, I identified the need to apply fullstack knowledge to create a more robust and realistic solution. I aimed to rebuild the application from scratch, with professional architecture, complete functionalities, and business logic more aligned with real work environments.",
                imageUrl: null,
              },
              {
                title: "Development",
                description:
                  "During development, I structured the frontend with Next.js 14 and TypeScript, applying design patterns, state management with Zustand, and an accessible UI with Shadcn. On the backend, I used Node.js with Express and Prisma ORM over PostgreSQL. I implemented JWT authentication, validations with Zod, centralized error handling, and a relational database with relations between users and purchases. The whole process was version-controlled with Git, prioritizing a modular and scalable structure on both sides of the stack.",
                imageUrl: null,
              },
              {
                title: "Outcome",
                description:
                  "The result was a complete, functional web application ready for production. Violet Shop now features secure authentication, user management, purchase history, and a purchase simulation. This project represents a leap in the quality of my developments: I moved from creating static interfaces to building an integral solution with own backend, real business logic, and a solid base for any professional e-commerce system.",
                imageUrl: null,
              },
            ],
            mainFeatures: [
              {
                title: "Backend and Relational Database",
                description:
                  "Complete backend development with Node.js, Express, and Prisma ORM. I used PostgreSQL as a relational database, modeling key entities such as users and purchase orders with well-defined relations. Implemented RESTful controllers, validations, error handling, and modular business logic to maintain scalability and code clarity.",
              },
              {
                title: "Strong REST API Design",
                description:
                  "This project allowed me to consolidate key concepts of RESTful API design. I applied best practices like semantic routes, separation between business logic and controllers, centralized error handling, and consistency in responses. I also deepened in CRUD operations and secure authentication using tokens (JWT) to protect sensitive endpoints.",
              },
              {
                title: "Professional Use of Modern Tools",
                description:
                  "I integrated modern stack tools such as React Hook Form for validations, Zustand for global state management, Prisma for efficient ORM with typing, and Zod for backend validations. I also used Shadcn UI for an accessible and professional interface. This integration helped me work as in a real environment, maximizing efficiency and maintainability.",
              },
            ],
            issues: {
              issueList: [
                {
                  title: "Learning Multiple New Technologies",
                  description:
                    "Developing the fullstack backend involved learning and applying multiple technologies simultaneously: Node.js, Express, Prisma, PostgreSQL, and security tools like JWT. To avoid saturation, I structured an incremental implementation roadmap and focused each stage on a specific technology. This allowed me to synergistically integrate each tool and solidify their fundamentals.",
                },
                {
                  title: "Modularization and Separation of Responsibilities",
                  description:
                    "One of the biggest challenges was structuring the backend professionally, separating controllers, routes, and services. At first, I made the mistake of mixing logic in the same file. After ChatGPT's recommendations, I refactored the logic so each module had a clear and scalable single responsibility.",
                },
                {
                  title: "First Steps in Error Handling and Validations",
                  description:
                    "During backend development, I began to deepen in HTTP error handling and data validation. Although I have not yet implemented a centralized system with custom middlewares, I am learning to properly use status codes, `response.next()`, basic validations, and also validation handling with Zod. This allowed me to start structuring more consistent responses and prepare the way for a more robust architecture.",
                },
              ],
            },
          },
        },
        {
          id: 2,
          imgDesktopUrl: imgDesktopUrl1,
          imgDesktopAlt:
            "desktop view screenshot of Chapel Futbol system webpage",
          imgMobileUrl: imgMobileUrl1,
          imgMobileAlt: "mobile view screenshot of Chapel Futbol system webpage",
          title: "Chapel Futbol",
          techs: [
            "next.js",
            "typescript",
            "react",
            "tailwind",
            "shadcn",
            "react-hook-form",
            "zod",
            "swr",
            "supabase",
            "node.js",
            "express",
            "prisma",
            "postgresql",
            "jwt",
            "multer",
            "git",
            "vercel",
            "render",
          ],
          description:
            "Complete web system for managing football player profiles developed for the Chapel Futbol High Performance Training Center. The application allows administrators to create, edit, and manage detailed player profiles with personal information, sports statistics, technical skills, and scouting tracking. The system includes secure authentication, multimedia file storage, and a modern interface optimized for user experience.",
          siteUrl: "https://chapel-futbol.vercel.app/",
          repoUrl: "https://github.com/josecoronel20/chapel-futbol",
          isFinished: true,
          projectObjective:
            "Develop a complete player management system for a football training center, implementing advanced features such as complex forms, multimedia storage, secure authentication, and a modern interface that demonstrates full-stack skills with current technologies.",
          details: {
            planningProcess: [
              {
                title: "System Architecture and Design",
                description:
                  "The project began with the definition of the full-stack architecture, implementing a clear separation between frontend (Next.js 15 with App Router) and backend (Node.js with Express and TypeScript). A relational database system was designed with Prisma ORM to handle the complex player data structure, including statistics, skills, and achievements. The planning included the implementation of JWT authentication with secure cookies and robust data validation with Zod.",
                imageUrl: null,
              },
              {
                title: "Core Features Development",
                description:
                  "The complex forms system was developed using React Hook Form with Zod validation, allowing the management of nested data such as statistics and skills. A multimedia file storage system was implemented using Supabase Storage for player images and videos. The interface was built with modular components using shadcn/ui and Tailwind CSS, ensuring visual consistency and accessibility.",
                imageUrl: null,
              },
              {
                title: "Optimization and User Experience",
                description:
                  "Advanced features were implemented such as skeleton loading, dynamic filters by position, and a player editing system that allows administrators to manage player tracking. Performance was optimized with SWR for data fetching, implementing intelligent cache and real-time updates. The system includes route protection, robust error handling, and a smooth user experience with animations and transitions.",
                imageUrl: null,
              },
            ],
            mainFeatures: [
              {
                title: "Complex Forms System with Advanced Validation",
                description:
                  "I implemented a multi-section forms system using React Hook Form with Zod validation that handles complex nested data (statistics, skills, achievements). The system includes real-time validation, loading state management, and automatic synchronization between components. The forms support both creation and editing of players with intelligent pre-population of existing data.",
              },
              {
                title: "Multimedia File Storage with Supabase Storage",
                description:
                  "I developed a complete multimedia file management system using Supabase Storage to store player images and videos. The system includes file type validation, image optimization, automatic deletion of previous files, and secure public URLs. I implemented both frontend upload functionality and REST endpoints in the backend for file management.",
              },
              {
                title: "Robust Authentication and Authorization System",
                description:
                  "I created a complete authentication system with JWT tokens stored in HTTP-only cookies, route protection middleware, and permission validation. The system includes secure login, session management, automatic redirection based on authentication state, and protection of sensitive endpoints in both frontend and backend.",
              },
            ],
            issues: {
              issueList: [
                {
                  title: "Complex State Management in Multi-Section Forms",
                  description:
                    "The biggest challenge was implementing forms that handle complex nested data (statistics, skills, achievements) with real-time validation. I used React Hook Form with custom Controllers to handle sliders, dynamic arrays, and cross-field validation. I implemented an intelligent pre-population system that handles ISO date conversion and state synchronization between components.",
                },
                {
                  title: "Authentication System Migration and Supabase Integration",
                  description:
                    "I successfully migrated from a JSON file-based authentication system to Supabase Auth, maintaining compatibility with the existing system. I implemented Supabase Storage integration for multimedia files, resolving CORS issues, file type handling, and performance optimization. The process included environment variable configuration, network error handling, and gradual feature migration.",
                },
                {
                  title: "Performance Optimization and User Experience",
                  description:
                    "I implemented advanced optimization techniques including skeleton loading, lazy component loading, intelligent cache with SWR, and image optimization. I resolved unnecessary re-render issues in complex forms, implemented dynamic filters without affecting performance, and optimized data loading with intelligent prefetching. The system efficiently handles large volumes of data while maintaining a smooth user experience.",
                },
              ],
            },
          },
        },
      ],
    },
    blog: {
      title: "POSTS FROM MY PERSONAL BLOG",
      seePost: "SEE POST",
      blogList: [
        {
          id: 1,
          title: "Building Solid Foundations",
          image: imgBlog1,
          altImg: "Image of a programmer studying",
          shortDescription:
            "After moving to Portugal in April without a computer, I used books, videos, and online documentation to strengthen my knowledge in web development. With 'Programming Fundamentals: Data Structures and Algorithms' and 'Eloquent JavaScript,' I built a solid foundation. Finalmente, I acquired a computer and applied what I learned in my first project: a personal portfolio.",
          description:
            "In April, upon moving without a computer, I faced the challenge of continuing my web development training. I leveraged a variety of resources, including books, videos, and online documentation, to build a strong programming foundation. Once I finally had a computer, I was able to apply what I had learned in a practical project: developing my personal portfolio.",
          subtitle:
            "From Theory to Practice: How a Diversified Education Powered My First Web Project",
          content:
            "Moving to Portugal, I faced the challenge of continuing my training as a web developer. To overcome this limitation, I turned to diverse educational resources, including books, videos, and online documentation, to build a solid foundation in programming. First, I delved into the book 'Programming Fundamentals: Data Structures and Algorithms,' which gave me a deep understanding of key concepts such as algorithms, control structures, and recursion. I also learned about linear data structures and got an introduction to non-linear data structures. Object-Oriented Programming (OOP) was another focus area, where I explored topics like encapsulation, inheritance, and polymorphism. Later, I read 'Eloquent JavaScript,' which expanded my knowledge towards web development with JavaScript. This book covered JavaScript syntax, data types and structures, functions, and scope and closures. It also introduced objects and prototypes in JavaScript, asynchronous programming, DOM manipulation, event handling, and modularization and package management. Additionally, I explored functional programming concepts applied in JavaScript. With all this theoretical training, I finally acquired a computer, which allowed me to deepen my React knowledge, focusing on componentization and custom hooks, and put everything into practice. I developed my first project, a personal portfolio, which consolidated my knowledge and demonstrated my ability to apply concepts in a real environment. This experience highlights how a comprehensive and diversified preparation can facilitate a successful transition from theory to practice in web development.",
          conclusion:
            "The combination of theoretical studies and diverse resources such as books, videos, and online documentation was key to building a solid foundation in web development. This thorough preparation enabled me to successfully tackle my first practical project. By applying the concepts learned in 'Programming Fundamentals: Data Structures and Algorithms' and 'Eloquent JavaScript,' along with other educational resources, I developed a personal portfolio that reflects both my training and my ability to implement what I learned. This experience underscores the importance of a comprehensive and well-founded education for an effective transition to professional practice.",
        },
        {
          id: 2,
          title: "Professional Development with Modern Libraries",
          image: imgBlog2,
          altImg:
            "Image showing a developer working with modern libraries and Cursor",
          shortDescription:
            "With a solid foundation in web development, I began exploring modern libraries like Shadcn, Zustand, and React Hook Form, using Cursor as an IDE to simulate a professional development environment. This experience allowed me to improve my coding practices and get familiar with industry-standard tools.",
          description:
            "After establishing a solid foundation in web development, I decided to take the next step in my professional growth: incorporating modern libraries and development tools used in the industry. Using Cursor as my main IDE and exploring libraries such as Shadcn, Zustand, and React Hook Form, I started developing projects that simulate a real work environment.",
          subtitle:
            "From the Basics to Professional Development: Integrating Modern Tools",
          content:
            "With a strong foundation in React and TypeScript, I felt it was time to make a leap in my professional development. I decided to start using libraries and tools that are standard in the industry, beginning with Shadcn for the user interface. This library allowed me to create accessible and customizable components, following the best design and development practices.\n\nThe next step was implementing Zustand for global state management. A diferencia de soluciones más complejas como Redux, Zustand offered me a simpler and more efficient way to manage application state, maintaining clean and maintainable code. This experience helped me better understand state management patterns in real-world applications.\n\nTo improve user experience and form validation, I incorporated React Hook Form. This combination allowed me to create robust, validated forms, significantly reducing the amount of code needed and enhancing the end-user experience.\n\nA crucial aspect of this evolution was adopting Cursor as my main IDE. This tool not only provided a smoother development experience but also helped me maintain cleaner and more consistent code. Features like AI integration and smart suggestions allowed me to work more efficiently and professionally.\n\nThe Violet Shop project became the perfect testing ground for these new technologies. Implementing a JWT-based authentication system, a persistent shopping cart, and an accessible user interface, I was able to apply all these tools in a real context. This experience helped me understand how these technologies integrate and work together in a production project.\n\nThis phase of my professional development has been crucial to understanding how work is done in a real work environment. The combination of modern libraries, advanced development tools, and good coding practices has allowed me to create more robust and maintainable applications, better preparing me for my future career as a developer.",
          conclusion:
            "Incorporating modern libraries and professional development tools has been a fundamental step in my growth as a developer. By using Shadcn, Zustand, React Hook Form, and Cursor, I have not only improved the quality of my projects but also gained experience with industry-standard technologies. This evolution has allowed me to create more robust and maintainable applications, simulating a professional development environment and better preparing me for my future career in web development.",
        },
        {
          id: 3,
          title:
            "Building My First Fullstack Ecommerce: The Road to Employability",
          image: imgBlog3,
          altImg:
            "Screenshot of the fullstack ecommerce with modern interface and backend functionality",
          shortDescription:
            "Developing a complete fullstack ecommerce allowed me to consolidate key knowledge in frontend, backend, and deployment, aligning my skills with the demands of today’s tech job market.",
          description:
            "Throughout my journey as a fullstack developer, building an ecommerce project has been the ultimate challenge to solidify a modern tech stack and demonstrate practical skills that directly impact my employability. This project integrates frontend and backend technologies with rigorous attention to best practices, testing, and professional deployment.",
          subtitle:
            "From Learning to Employability: Fullstack Ecommerce Project as a Professional Bridge",
          content:
            "The challenge of developing a fullstack ecommerce pushed me to apply and deepen my knowledge in Next.js and React for the user interface, using Tailwind CSS to ensure a responsive and professional design. Business logic and data management were implemented with Node.js and Express, connected to a PostgreSQL database hosted on Render, guaranteeing persistence and scalability.\n\nAdemás, implementé autenticación segura mediante JWT y Zod, permitiendo sesiones protegidas y una experiencia de usuario confiable. \n\nEl proceso incluyó la integración completa de frontend y backend, desplegando ambos en plataformas profesionales como Vercel para el frontend y Render para el backend, demostrando habilidades en DevOps y configuración realista de entornos productivos.\n\nPara asegurar la calidad del código y prevenir regresiones, incorporé pruebas unitarias y de integración con Jest y Testing Library, prácticas que hoy son estándares en equipos profesionales y altamente valoradas en reclutamiento.\n\nTodo este recorrido no solo ha sido técnico, sino también estratégico. Documenté cada etapa en LinkedIn, generando contenido de valor para la comunidad y construyendo una red profesional que refuerza mi perfil. Este enfoque integral me prepara para afrontar procesos de selección con una propuesta sólida y diferenciada.\n\nEn síntesis, este ecommerce no es solo un proyecto: es la evidencia tangible de mi preparación para enfrentar retos reales en el desarrollo web y una carta de presentación robusta para cualquier empleador que busque un desarrollador junior competente y comprometido.",
          conclusion:
            "Completar este proyecto fullstack ha sido un hito decisivo en mi camino hacia la empleabilidad como desarrollador. La combinación de habilidades técnicas actualizadas, buenas prácticas profesionales y estrategia de visibilidad me posiciona como un candidato competitivo en el mercado laboral. El aprendizaje constante y la aplicación práctica son, sin duda, los pilares para avanzar con firmeza hacia mi objetivo profesional.",
        },
      ],
    },
    footer: {
      title: "Quick Navigation",
      copyText: "copied",
      contactMe: {
        sectionTitle: "Contact Information",
        email: {
          title: "Email",
          value: "josecoronel20@outlook.com",
        },
        phone: {
          title: "Phone Number",
          value: "1135028931",
        },
      },
      followMe: {
        sectionTitle: "Follow Me",
        github: {
          title: "GitHub",
          url: "https://github.com/josecoronel20",
        },
        linkedin: {
          title: "LinkedIn",
          url: "https://www.linkedin.com/in/jose-maria-coronel/",
        },
      },
    },
  },
};
