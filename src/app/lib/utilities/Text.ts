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
  iconZustandWhite,
  iconZustandColor,
  iconNextWhite,
  iconNextColor,
  iconSwrWhite,
  iconSwrColor,
  iconShadcn,
  iconJwtColor,
  iconJwtWhite,
} from "./Icons";

// Importaciones de imágenes usando rutas absolutas desde public
const imgDesktopUrl1 = "/img/projectsImg/portfolio/screenShotDesktop.png";
const imgMobileUrl1 = "/img/projectsImg/portfolio/screenShotMobile.png";
const imgTxt1 = "/img/projectsImg/portfolio/projectDetail/txt.png";
const imgdesign1 = "/img/projectsImg/portfolio/projectDetail/design.png";
const imgfeatures1 = "/img/projectsImg/portfolio/projectDetail/features.png";

const imgDesktopUrl2 = "/img/projectsImg/ecommerce/Ecommerce-Desktop.png";
const imgMobileUrl2 = "/img/projectsImg/ecommerce/Ecommerce-Mobile.png";
const imgTxt2 =
  "/img/projectsImg/ecommerce/proyectDetail/ecommerce-arquitecture.png";
const imgdesign2 =
  "/img/projectsImg/ecommerce/proyectDetail/ecommerce-designe.png";
const imgfeatures2 =
  "/img/projectsImg/ecommerce/proyectDetail/ecommerce-funcionality.png";

const imgDesktopUrl3 = "/img/projectsImg/arenadosLucho/imgDesktop.png";
const imgMobileUrl3 = "/img/projectsImg/arenadosLucho/imgMobile.png";
const imgDesign3 = "/img/projectsImg/arenadosLucho/projectDetail/design.png";

const imgBlog1 = "/img/blogImg/OIG4.jpg";
const imgBlog2 = "/img/blogImg/post2.png";
const imgBlog3 = "/img/blogImg/post3.png";

import { textLanguage } from "./types";

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
          beforeHiglight: "Desarrollador frontend especializado en ",
          higlight: "React",
        },
        cta: "VER PROYECTOS",
      },
      lastProyects: {
        title: "ÚLTIMOS PROYECTOS",
      },
      aboutMe: {
        title: "SOBRE MÍ",
        subtitle:
          "Soy José María Coronel, desarrollador web especializado en React, con 24 años y actualmente viviendo en Buenos Aires - Argentina. Mi enfoque está en crear interfaces prolijas y eficientes.",
        sections: [
          {
            title: "MI TRAYECTORIA",
            text: "Descubrí la programación por curiosidad y me formé de manera autodidacta en tecnologías y herramientas front-end, complementando con libros, documentación oficial, cursos online, videos, etc. Sigo ampliando mis habilidades a través de la práctica constante.",
          },
          {
            title: "FOCO EN CALIDAD Y ORGANIZACIÓN",
            text: "Me enfoco en escribir código limpio y eficiente, priorizando la claridad, la escalabilidad y la mantenibilidad. Creo que la prolijidad en el desarrollo es clave para construir soluciones sólidas y facilitar el trabajo en equipo.",
          },
          {
            title: "HERRAMIENTAS Y DISEÑO",
            text: "Utilizo Figma para diseñar y prototipar mis proyectos, apoyándome en una base sólida de diseño que me permite tomar decisiones coherentes y funcionales. Priorizo un estilo limpio y minimalista que optimiza la experiencia del usuario.",
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
                level: "Básico",
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
              {
                id: 5,
                title: "Zustand",
                color: "#444E8C",
                iconWhite: iconZustandWhite,
                iconColor: iconZustandColor,
                level: "Básico",
                mainTopics: [
                  "Creación de stores globales con estado reactivo",
                  "Lectura y actualización de estado desde componentes",
                  "Separación de lógica de estado fuera del árbol de componentes",
                  "Reemplazo limpio de contextos simples",
                ],
                mainProjects: ["Portfolio", "Violet Shop"],
              },
              {
                id: 6,
                title: "React Hook Form",
                color: "#EC5990",
                iconWhite: iconReactWhite,
                iconColor: iconReactColor,
                level: "Básico",
                mainTopics: [
                  "Validación de formularios",
                  "Manejo de errores",
                  "Integración con Zod",
                  "Formularios controlados",
                ],
                mainProjects: ["Violet Shop"],
              },
              {
                id: 7,
                title: "Shadcn",
                color: "#000000",
                iconWhite: iconShadcn,
                iconColor: iconShadcn,
                level: "Básico",
                mainTopics: [
                  "Componentes accesibles",
                  "Personalización de temas",
                  "Integración con Tailwind",
                  "Componentes reutilizables",
                ],
                mainProjects: ["Violet Shop"],
              },
              {
                id: 8,
                title: "SWR",
                color: "#000000",
                iconWhite: iconSwrWhite,
                iconColor: iconSwrColor,
                level: "Básico",
                mainTopics: [
                  "Caching de datos",
                  "Actualizaciones automáticas",
                  "Optimización de rendimiento",
                ],
                mainProjects: ["Violet Shop"],
              },
              {
                id: 9,
                title: "Jwt",
                color: "#000000",
                iconWhite: iconJwtWhite,
                iconColor: iconJwtColor,
                level: "Básico",
                mainTopics: [
                  "Autenticación de usuarios",
                  "Protección de rutas",
                  "Manejo de sesiones",
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
                  "Organización de componentes",
                  "Shadcn UI",
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
                mainTopics: [
                  "useState",
                  "useEffect",
                  "Zustand",
                  "Context API",
                ],
                mainProjects: [
                  "portfolio personal",
                  "Violet Shop",
                ],
              },

              {
                id: 8,

                title: "Control de versiones (Git)",
                color: "#F4511E",
                level: "Intermedio",
                mainTopics: [
                  "Commits básicos",
                  "Branches",
                  "Merge a main",
                  "GitHub",
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
                level: "Básico",
                mainTopics: [
                  "Jest",
                  "Testing Library",
                  "Pruebas unitarias",
                  "Pruebas de integración",
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
                  "Server Components",
                ],
                mainProjects: [
                  "portfolio personal",
                  "Violet Shop",
                ],
              },
              {
                id: 11,

                title: "Buenas prácticas",
                color: "#6D4C41",
                level: "Intermedio",
                mainTopics: [
                  "Código limpio",
                  "TypeScript",
                  "React Hook Form",
                  "JWT",
                ],
                mainProjects: [
                  "portfolio personal",
                  "Violet Shop",
                ],
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
      },

      list: [
        {
          id: 1,
          imgDesktopUrl: imgDesktopUrl1,
          imgDesktopAlt:
            "captura de pantalla de vista de escritorio de página web de portfolio personal",
          imgMobileUrl: imgMobileUrl1,

          imgMobileAlt:
            "captura de pantalla de vista de móbil de página web de portfolio personal",
          title: "Portfolio Personal",
          techs: [
            "html",
            "css",
            "react",
            "zustand",
            "git",
            "github",
            "tailwind",
            "npm",
            "javascript",
          ],
          description:
            "Este portafolio personal presenta una colección de proyectos y competencias en desarrollo web. Se destaca por su enfoque en proporcionar información detallada y relevante sobre cada proyecto, incluyendo planificación inicial, diseño visual, objetivos alcanzados, y más.",
          siteUrl: "https://josecoronel20.github.io/portfolioPersonal/",
          repoUrl: "https://github.com/josecoronel20/portfolioPersonal",
          isFinished: true,
          projectObjective:
            "El objetivo de este proyecto fue crear mi portfolio personal, una plataforma para mostrar mis habilidades y proyectos como desarrollador web. El enfoque principal fue diseñar una interfaz clara y atractiva que permita destacar mis trabajos, mis competencias tecnológicas y mi evolución profesional. Busqué crear un espacio donde futuros empleadores o colaboradores puedan conocer mi experiencia y proyectos de manera visualmente atractiva y funcional.",
          details: {
            planningProcess: [
              {
                title: "Arquitectura de la información",
                description:
                  "Inicié con un archivo TXT para esbozar las secciones principales: 'Inicio', 'Proyectos', 'Blog', y 'Contacto'. Desarrollé cada sección y sus subsecciones progresivamente, creando un esquema claro y relevante.",
                imageUrl: imgTxt1,
              },
              {
                title: "Diseño visual",
                description:
                  "El diseño visual buscó reflejar mi identidad personal y profesional. En un principio se decidió por una paleta de colores llamativa utilizando tonos violetas que siento que es un color que me representa bastante pero finalmente me decidí por una paleta clara y sencilla que asegura que la información relevante sea el foco, facilitando una comunicación visual efectiva sin distracciones.",
                imageUrl: imgdesign1,
              },
              {
                title: "Planificación de funcionalidades",
                description:
                  "Desarrollé un diagrama para planificar funcionalidades, como el carrusel. Inicialmente, pensé en mostrar tres proyectos del JSON, pero decidí mostrar uno solo basado en el índice del JSON. También planeé un componente 'translate', lo que llevó a usar un contexto global y explorar Redux.",
                imageUrl: imgfeatures1,
              },
            ],
            mainFeatures: [
              {
                title: "Carrusel",
                description:
                  "Esta sección está diseñada para que los usuarios exploren mis proyectos de manera rápida y sencilla. Su objetivo principal es captar la atención al presentar una interfaz interactiva que destaca mis trabajos desde el primer vistazo.",
              },
              {
                title: "Hover de íconos",
                description:
                  "En la sección de tecnologías, se muestran iconos representativos de cada tecnología. Al pasar el cursor sobre un icono, este cambia de apariencia, y al hacer clic en él, se abre una ventana modal. ",
              },
              {
                title: "Ventana 'Modal'",
                description:
                  "En la sección de tecnologías, cada tecnología está vinculada a una ventana emergente ('Modal'). Al hacer clic en cualquier tecnología, se muestra información sobre mi nivel de conocimiento y una sección detallada que explica los temas y conceptos principales que manejo.",
              },
            ],
            issues: {
              title: "PRINCIPALES PROBLEMAS ENFRENTADOS",
              issueList: [
                {
                  title: "Archivo de texto",
                  description:
                    "Desarrollé un sistema multilenguaje creando un archivo de texto donde organizo todos los contenidos por secciones (como *home*, *projects*, *blog*, etc.) y en dos idiomas, español e inglés. Luego, implementé un contexto global con React Context para manejar el idioma activo y acceder dinámicamente a los textos desde cualquier componente. Esto me permite cambiar de idioma de forma centralizada y mantener la estructura escalable para seguir agregando contenido o nuevos idiomas sin romper nada.",
                },
                {
                  title: "Carrusel",
                  description:
                    "En una primera etapa, el carrusel se diseñó para ser más llamativo visualmente, renderizando tres 'cards' y añadiendo animaciones para la navegación entre ellas. Sin embargo, al probar varias opciones para implementar esta complejidad con resultados insatisfactorios, decidí simplificar la funcionalidad. Ahora, el carrusel muestra solo una 'card' a la vez manteniendo así el interés visual sin complicar la implementación.",
                },
                {
                  title: "Comienzo de aplicación de lo aprendido",
                  description:
                    "Después de desarrollar aplicaciones web de manera desorganizada con conocimientos básicos, decidí mejorar mi formación mediante libros, videos y lecturas. Esto me llevó a adoptar un perfil más profesional, estructurando mejor mis archivos y utilizando Git de manera más efectiva. Aprendí a componer proyectos de forma modular, reducir el código con hooks, y gestionar el desarrollo en ramas separadas para evitar la mezcla de código y centrarme en cada sección por separado.",
                },
              ],
            },
          },
        },
        {
          id: 2,
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
            "zustand",
            "react-hook-form",
            "jwt",
            "shadcn",
            "git",
            "github",
            "npm",
          ],
          description:
            "Violet Shop es un e-commerce completo desarrollado con Next.js 14 y TypeScript. El proyecto implementa un sistema de autenticación con JWT, gestión de estado global con Zustand, y una interfaz de usuario accesible construida con Shadcn. Incluye funcionalidades como registro de usuarios, carrito de compras persistente, y un sistema de checkout completo.",
          siteUrl: "https://violet-shop.vercel.app",
          repoUrl: "https://github.com/josecoronel20/violet-shop",
          isFinished: true,
          projectObjective:
            "El objetivo principal fue crear una tienda online completa con todas las funcionalidades esenciales de un e-commerce moderno. Se buscó implementar una arquitectura robusta y escalable, con un fuerte enfoque en la experiencia de usuario y la seguridad. El proyecto sirve como demostración de habilidades en desarrollo full-stack con Next.js y TypeScript.",
          details: {
            planningProcess: [
              {
                title: "Arquitectura del Sistema",
                description:
                  "Se diseñó una arquitectura basada en Next.js 14, utilizando API Routes para el backend y un sistema de autenticación con JWT. La base de datos se implementó inicialmente con JSON y File System para persistencia de datos, permitiendo una rápida iteración y desarrollo.",
                imageUrl: imgTxt2,
              },
              {
                title: "Diseño de UI/UX",
                description:
                  "El diseño se centró en crear una interfaz limpia y moderna utilizando Tailwind CSS y Shadcn tomando como ejemplo un diseño de v0. Se priorizó la accesibilidad y la experiencia móvil, implementando un diseño responsive que funciona perfectamente en todos los dispositivos.",
                imageUrl: imgdesign2,
              },
              {
                title: "Planificación de Funcionalidades",
                description:
                  "Se estructuraron las funcionalidades principales en tres áreas: sistema de usuarios, gestión de productos y carrito de compras. Cada área fue diseñada para ser modular y escalable, permitiendo futuras mejoras y expansiones.",
                imageUrl: imgfeatures2,
              },
            ],
            mainFeatures: [
              {
                title: "Sistema de Autenticación",
                description:
                  "Implementación completa de registro y login de usuarios con JWT. Incluye validación de formularios con React Hook Form, manejo de sesiones, y protección de rutas para usuarios autenticados.",
              },
              {
                title: "Base de datos Json y API Routes",
                description:
                  "Se implementó una base de datos json la cual es modificada mediante endpoints seteados en el servidor, para que el usuario pueda agregar, eliminar y actualizar la información de usuarios. Se utilizó api routes para que el usuario pueda realizar las acciones mencionadas anteriormente.",
              },
              {
                title: "Utilizacíon de librerías",
                description:
                  "Se utilizó librerías trending como shadcn, zustand, swr, react-hook-form, y jwt para el desarrollo del proyecto con el objetivo de comenzar a desarrollar proyectos simulando un ambiente de trabajo real.",
              },
            ],
            issues: {
              title: "PRINCIPALES DESAFÍOS TÉCNICOS",
              issueList: [
                {
                  title: "Persistencia de Estado",
                  description:
                    "Uno de los mayores desafíos fue mantener el estado de la aplicación ( sesión de usuario) después de recargar la página. Se resolvió implementando un hook el cual devuelve la información del usuario al utilizar la cookie de jwt decodificada y extrayendo la id del usuario la cual se utuliza para filtrar la información del usuario en la base de datos json.",
                },
                {
                  title: "Manejo de Estado Global",
                  description:
                    "La sincronización del estado entre componentes y la gestión de actualizaciones presentó desafíos significativos. Se implementó un sistema robusto con Zustand, definiendo interfaces claras y acciones específicas para cada tipo de actualización, mejorando la consistencia y el rendimiento.",
                },
                {
                  title: "Validación de Formularios",
                  description:
                    "La implementación de validaciones consistentes y manejo de errores en formularios fue un desafío importante. Se resolvió utilizando React Hook Form con validaciones personalizadas, mejorando significativamente la experiencia de usuario y reduciendo la complejidad del código.",
                },
              ],
            },
          },
        },
        {
          id: 3,
          imgDesktopUrl: imgDesktopUrl3,
          imgDesktopAlt:
            "captura de pantalla de vista de escritorio de página web de Arenados Lucho",
          imgMobileUrl: imgMobileUrl3,

          imgMobileAlt:
            "captura de pantalla de vista de móbil de página web de Arenados Lucho",
          title: "Página de Arenados Lucho",
          techs: [
            "html",
            "css",
            "react",
            "git",
            "github",
            "tailwind",
            "npm",
            "javascript",
          ],
          description:
            "El sitio web para Arenados Lucho fue desarrollado como parte de un encargo real para una empresa dedicada al arenado y restauración de superficies. El enfoque estuvo puesto en reflejar profesionalismo y claridad en los servicios ofrecidos, optimizando la navegación para usuarios que buscan soluciones rápidas y confiables. El desarrollo incluyó diseño responsivo, integración de formularios de contacto, y una estructura visual centrada en la presentación de trabajos realizados. Este proyecto refleja la capacidad de traducir requerimientos del cliente en una solución concreta y funcional.",
          siteUrl: "https://arenadoslucho.com/",
          repoUrl: "https://github.com/josecoronel20/ArenadosLucho2025",
          isFinished: false,
          projectObjective:
            " El objetivo de este proyecto fue optimizar el SEO para mejorar el posicionamiento en los motores de búsqueda. Se implementaron ajustes clave, como la mejora de etiquetas semánticas y la optimización de imágenes, con el fin de facilitar la indexación y aumentar la visibilidad del sitio. Aunque se lograron avances, la optimización SEO es un proceso continuo que seguirá siendo mejorado con el tiempo.",

          details: {
            planningProcess: [
              {
                title: "Arquitectura de la información",
                description:
                  "La estructura del sitio se definió siguiendo sugerencias optimizadas para SEO. Utilicé recomendaciones basadas en buenas prácticas para negocios locales, priorizando una navegación clara con secciones como 'Inicio', 'Servicios', 'Galería' y 'Contacto'. No fue necesario un esquema manual previo, ya que las decisiones se tomaron directamente sobre las necesidades reales del cliente.",

                imageUrl: null,
              },
              {
                title: "Diseño visual",
                description:
                  "El diseño visual no se desarrolló desde cero en herramientas como Figma. Se optó por conservar y actualizar la estética de la versión anterior de la página, respetando la identidad visual ya reconocida por los clientes. Se aplicaron ajustes mínimos para modernizar la interfaz y mejorar la legibilidad, priorizando una apariencia profesional, sencilla y funcional.",

                imageUrl: imgDesign3,
              },
              {
                title: "Planificación de funcionalidades",
                description:
                  "No se incorporaron funcionalidades complejas nuevas. El enfoque estuvo en actualizar y optimizar el contenido para mejorar el SEO, modernizar la sección de 'Antes y Después' de los trabajos realizados, y mantener el formulario de consultas con mínimos ajustes para asegurar su funcionamiento y accesibilidad.",
                imageUrl: null,
              },
            ],
            mainFeatures: [
              {
                title: "Actualización de 'Antes y Después'",
                description:
                  "Se implementó un componente interactivo previamente desarrollado para mostrar el 'Antes y Después' de los trabajos realizados. Esta mejora no solo moderniza la presentación visual, sino que también ofrece a los usuarios una experiencia más clara y atractiva al comparar resultados de manera directa.",
              },
              {
                title: "Optimización SEO",
                description:
                  "En esta actualización, el enfoque principal fue la optimización para motores de búsqueda. Se ajustaron textos, títulos y descripciones siguiendo buenas prácticas de SEO, priorizando la relevancia semántica y la jerarquía correcta de etiquetas. Cada sección fue pensada para mejorar la indexación, maximizando así la visibilidad orgánica de la empresa sin sacrificar la experiencia del usuario.",
              },
              {
                title: "Refactorización del código",
                description:
                  "Aunque no se incorporaron tecnologías nuevas, se puso el foco en limpiar y optimizar el código existente. Se mejoró la estructura de los componentes, se eliminaron redundancias y se aplicaron buenas prácticas de React para lograr un proyecto más mantenible, eficiente y fácil de escalar a futuro.",
              },
            ],
            issues: {
              title: "PRINCIPALES PROBLEMAS ENFRENTADOS",
              issueList: [
                {
                  title: "Optimización del posicionamiento SEO",
                  description:
                    "Uno de los principales desafíos fue mejorar el posicionamiento en buscadores, dado que el contenido anterior era escaso y poco estructurado. Para solucionarlo, se recurrió a sugerencias de ChatGPT basadas en buenas prácticas SEO: se reescribieron textos con palabras clave relevantes, se mejoró la estructura de encabezados (H1, H2, H3) y se optimizaron las etiquetas alt en imágenes, logrando así una página más amigable para Google sin romper la estética original.",
                },
                {
                  title: "Optimización progresiva de SEO",
                  description:
                    "Uno de los principales desafíos fue mejorar el posicionamiento en buscadores. El contenido inicial era escaso y poco optimizado. Se empezó aplicando sugerencias de ChatGPT para reescribir textos con palabras clave relevantes, pero el proceso no terminó ahí: poco a poco se fueron mejorando aspectos como el uso de etiquetas semánticas correctas, la optimización de formatos de imagen (WebP, compresión adecuada) y la estructura de encabezados. Todo basado en los resultados de herramientas de análisis de rendimiento online como PageSpeed Insights y similares.",
                },
                {
                  title: "Optimización de carga",
                  description:
                    "Aunque ya se realizaron mejoras en la optimización de la carga, como la compresión de imágenes y la implementación de lazy loading, aún se sigue trabajando en este aspecto. Se está evaluando constantemente el rendimiento mediante herramientas como Lighthouse, buscando reducir aún más los tiempos de carga y mejorar la experiencia del usuario. El objetivo es continuar perfeccionando el rendimiento del sitio mientras se mantienen los estándares de calidad.",
                },
              ],
            },
          },
        },
      ],
    },
    blog: {
      title: "POSTS DE MI BLOG PERSONAL",
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
          title: "Comienzo de la Búsqueda de Trabajo",
          image: imgBlog2,
          altImg:
            "Imagen de posteo mostrando a un programador trabajando en su portafolio y perfil profesional",
          shortDescription:
            "Inicié la búsqueda activa de mi primer trabajo como programador, actualizando mi perfil de LinkedIn, finalizando mi portafolio y continuando con el desarrollo de nuevos proyectos.",
          description:
            "Con el objetivo de dar el siguiente paso en mi carrera como desarrollador web, comencé a buscar activamente mi primer trabajo en el sector. Como parte de este proceso, actualicé mi perfil de LinkedIn para reflejar de manera clara mis habilidades y proyectos, asegurándome de que mi perfil estuviera alineado con las mejores prácticas y optimizado para que los reclutadores pudieran encontrarme fácilmente. Además, finalicé mi portafolio, mostrando tres proyectos representativos de mi experiencia, que abarcan desde el desarrollo de páginas web hasta aplicaciones más complejas.",
          subtitle:
            "Búsqueda Activa: Perfil Profesional, Portafolio y Proyectos en Desarrollo",
          content:
            "El proceso comenzó con una actualización exhaustiva de mi perfil de LinkedIn. Me aseguré de destacar mis habilidades clave como React, TypeScript, Git, y las buenas prácticas que he aprendido a lo largo de mis proyectos. También realicé una limpieza en mi red de contactos, eliminando conexiones irrelevantes y conectando con profesionales del sector para ampliar mis oportunidades.\n\nSimultáneamente, finalicé mi portafolio, un elemento crucial para mostrar mis capacidades a futuros empleadores. En él, presenté tres proyectos destacados que no solo reflejan mi habilidad técnica, sino también mi enfoque en la calidad y la estructura del código. Estos proyectos, combinados con un diseño limpio y profesional, permiten que cualquier visitante tenga una visión clara de lo que soy capaz de hacer como desarrollador web.\n\nPor supuesto, la búsqueda de trabajo no se detuvo aquí. Aunque mi portafolio ya está completo, continúo desarrollando nuevos proyectos y mejorando los existentes. La práctica constante es clave para mantenerme actualizado y demostrar mi progreso continuo. Así, mi objetivo es mantenerme motivado, aplicar a múltiples ofertas laborales y perfeccionar cada aspecto de mi perfil y mis proyectos para destacarme en el competitivo mundo del desarrollo web.",
          conclusion:
            "La búsqueda activa de trabajo no es solo una cuestión de enviar currículums, sino un proceso continuo de preparación. Al actualizar mi perfil de LinkedIn, finalizar mi portafolio y seguir trabajando en nuevos proyectos, me siento cada vez más preparado para enfrentar las entrevistas y desafíos que vendrán. Mi meta es encontrar un lugar donde pueda seguir creciendo profesionalmente, aprendiendo de otros desarrolladores y contribuyendo a proyectos que realmente me apasionen.",
        },
        {
          id: 3,
          title: "Preparación para Entrevistas",
          image: imgBlog3,
          altImg:
            "Imagen de posteo mostrando a un programador preparando su entrevista frente a la computadora",
          shortDescription:
            "Inicié un proceso de formación intensiva para entrevistas laborales, haciendo ejercicios prácticos, viendo simulaciones en video y utilizando ChatGPT como un reclutador virtual para enfrentar distintos escenarios.",
          description:
            "A medida que avanzaba en mi búsqueda de trabajo como desarrollador, me di cuenta de que la preparación para entrevistas es clave para destacar entre los candidatos. Por eso, comencé a entrenar con ejercicios prácticos, viendo videos de simulaciones de entrevistas y utilizando ChatGPT como un simulador de reclutador para practicar distintas situaciones y mejorar mis respuestas en tiempo real.",
          subtitle:
            "Formación en Entrevistas: Simulaciones y Prácticas para la Preparación Real",
          content:
            "La preparación para entrevistas es tan importante como la habilidad técnica, y no quería dejar pasar la oportunidad de mejorar en este aspecto. Comencé a buscar recursos sobre cómo enfrentar entrevistas de trabajo en el sector de tecnología, enfocándome en las preguntas más comunes y específicas para desarrolladores web. Para poner en práctica lo aprendido, hice ejercicios de preguntas y respuestas, simulando situaciones reales de entrevistas. Además, encontré videos de simulaciones de entrevistas con otros candidatos, lo que me permitió estudiar las respuestas y cómo mejorar las mías.\n\nLo más interesante de mi preparación fue usar ChatGPT como un reclutador virtual. Le pedí que me simulara diferentes tipos de entrevistas, desde entrevistas técnicas con preguntas de código hasta entrevistas de comportamiento, donde me hacía preguntas sobre mis experiencias pasadas, mis fortalezas y debilidades, y cómo me adapto a trabajar en equipo. Estas simulaciones me ayudaron a anticipar las preguntas que podrían surgir y a practicar mis respuestas en un entorno seguro, lo que me dio más confianza.\n\nA lo largo de este proceso, también busqué mejorar mi capacidad para comunicar de manera clara y concisa mis experiencias y conocimientos técnicos. Una entrevista no es solo sobre qué sabes, sino cómo lo transmites. Por eso, me enfoqué en transmitir mis habilidades y proyectos de una manera estructurada, sin divagar, y destacando siempre los logros más relevantes para cada puesto al que aplico.",
          conclusion:
            "La preparación para entrevistas no tiene que ser algo aterrador, sino una oportunidad para mostrar lo mejor de ti mismo. Al entrenar con simulaciones, ver ejemplos de entrevistas y utilizar herramientas como ChatGPT, me siento mucho más preparado para enfrentar cualquier entrevista que me presente. Además, cada simulación me permitió identificar áreas de mejora y pulir mis respuestas, acercándome más a mi objetivo de conseguir mi primer trabajo como desarrollador web. La práctica constante es la clave, y me seguiré preparando para aprovechar al máximo cada oportunidad que se presente.",
        },
        {
          id: 4,
          title: "Desarrollo Profesional con Librerías Modernas",
          image: imgBlog1,
          altImg: "Imagen de posteo mostrando un desarrollador trabajando con librerías modernas y Cursor",
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
          imgAlt: "Illustration of Jose Maria Coronel",
        },
        title: {
          beforeHiglight: "I am ",
          higlight: "Jose Maria Coronel",
        },
        subtitle: {
          beforeHiglight: "Frontend developer specialized in ",
          higlight: "React",
        },
        cta: "SEE PROJECTS",
      },
      lastProyects: {
        title: "LAST PROJECTS",
      },
      aboutMe: {
        title: "ABOUT ME",
        subtitle:
          "I am José María Coronel, a web developer specialized in React, 24 years old and currently living in Buenos Aires, Argentina. My focus is on creating clean and efficient interfaces.",
        sections: [
          {
            title: "MY CAREER",
            text: "I discovered programming out of curiosity and became self-taught in front-end technologies and tools, complementing my learning with books, official documentation, online courses, videos, etc. I continue expanding my skills through constant practice.",
          },
          {
            title: "FOCUS ON QUALITY AND ORGANIZATION",
            text: "I focus on writing clean and efficient code, prioritizing clarity, scalability, and maintainability. I believe that neatness in development is key to building solid solutions and facilitating teamwork.",
          },
          {
            title: "TOOLS AND DESIGN",
            text: "I use Figma to design and prototype my projects, relying on a solid design foundation that helps me make consistent and functional decisions. I prioritize a clean and minimalist style that optimizes the user experience.",
          },
        ],
      },
      techsAndSkills: {
        title: "TECHS AND ABILITIES",
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
                  "CSS methodologies (BEM, SMACSS)",
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
                level: "Basic",
                mainTopics: [
                  "Basic typing (variables and functions)",
                  "Defining simple interfaces for components",
                  "Using primitive types and arrays",
                  "Basic TypeScript setup in the project",
                ],
                mainProjects: ["personal portfolio", "Arenados Lucho"],
              },
            ],
          },
          {
            title: "FRAMEWORKS AND LIBRARIES",
            list: [
              {
                id: 5,
                title: "React.js",
                color: "#61DAFB",
                iconWhite: iconReactWhite,
                iconColor: iconReactColor,
                level: "Intermediate",
                mainTopics: [
                  "Components",
                  "Hooks",
                  "State management",
                  "React router dom",
                  "JSX",
                ],
                mainProjects: [
                  "personal portfolio",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 6,
                title: "Next.js",
                color: "#000000",
                iconWhite: iconReactWhite,
                iconColor: iconReactColor,
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
                id: 7,
                title: "Tailwind",
                color: "#38B2AC",
                iconWhite: iconTailwindWhite,
                iconColor: iconTailwindColor,
                level: "Intermediate",
                mainTopics: [
                  "CSS utilities",
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
                id: 8,
                title: "Jest and Testing Library",
                color: "#99424F",
                iconWhite: iconJestWhite,
                iconColor: iconJestColor,
                level: "Basic",
                mainTopics: [
                  "Writing basic unit tests for components",
                  "Using event mocks (click, change)",
                  "Component rendering tests",
                  "Property and state verification in tests",
                ],
                mainProjects: ["Violet Shop"],
              },
              {
                id: 9,
                title: "Zustand",
                color: "#444E8C",
                iconWhite: iconZustandWhite,
                iconColor: iconZustandColor,
                level: "Basic",
                mainTopics: [
                  "Creating global stores with reactive state",
                  "Reading and updating state from components",
                  "Decoupling state logic from the component tree",
                  "Clean replacement for simple context usage",
                ],
                mainProjects: ["Portfolio", "Violet Shop"],
              },
              {
                id: 10,
                title: "React Hook Form",
                color: "#EC5990",
                iconWhite: iconReactWhite,
                iconColor: iconReactColor,
                level: "Basic",
                mainTopics: [
                  "Form validation",
                  "Error handling",
                  "Integration with Zod",
                  "Controlled forms",
                ],
                mainProjects: ["Violet Shop"],
              },
              {
                id: 11,
                title: "Shadcn",
                color: "#000000",
                iconWhite: iconReactWhite,
                iconColor: iconReactColor,
                level: "Basic",
                mainTopics: [
                  "Accessible components",
                  "Theme customization",
                  "Integration with Tailwind",
                  "Reusable components",
                ],
                mainProjects: ["Violet Shop"],
              },
            ],
          },
          {
            title: "TOOLS",
            list: [
              {
                id: 9,
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
                id: 10,
                title: "npm",
                color: "#CB3837",
                iconWhite: iconNpmWhite,
                iconColor: iconNpmColor,
                level: "Intermediate",
                mainTopics: [
                  "Dependency management",
                  "Scripts",
                  "Project setup",
                ],
                mainProjects: [
                  "personal portfolio",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 11,
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
                id: 12,

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
            ],
          },
          {
            title: "CONCEPTS AND METHODOLOGIES",
            list: [
              {
                id: 13,
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
                id: 14,
                title: "Reusable Components",
                color: "#007BFF",
                level: "Intermediate",
                mainTopics: [
                  "Using props",
                  "Basic states",
                  "Component organization",
                  "Shadcn UI",
                ],
                mainProjects: [
                  "personal portfolio",
                  "Violet Shop",
                  "Arenados Lucho",
                ],
              },
              {
                id: 15,
                title: "State Management",
                color: "#6A1B9A",
                level: "Intermediate",
                mainTopics: [
                  "useState",
                  "useEffect",
                  "Zustand",
                  "Context API",
                ],
                mainProjects: [
                  "personal portfolio",
                  "Violet Shop",
                ],
              },

              {
                id: 16,
                title: "Version Control (Git)",
                color: "#F4511E",
                level: "Intermediate",
                mainTopics: [
                  "Basic commits",
                  "Branches",
                  "Merge to main",
                  "GitHub",
                ],
                mainProjects: [
                  "personal portfolio",
                  "Violet Shop",
                  "Arenados Lucho",
                ],
              },
              {
                id: 17,
                title: "Testing",
                color: "#9E9D24",
                level: "Basic",
                mainTopics: ["Jest", "Testing Library", "Simple unit tests"],
                mainProjects: ["Ecommerce"],
              },
              {
                id: 18,
                title: "Routing in SPA",
                color: "#C62828",
                level: "Intermediate",
                mainTopics: ["React Router", "Simple routes"],
                mainProjects: [
                  "personal portfolio",
                  "Violet Shop",
                ],
              },
              {
                id: 19,
                title: "Best Practices",
                color: "#6D4C41",
                level: "Intermediate",
                mainTopics: [
                  "Clean code",
                  "TypeScript",
                  "React Hook Form",
                  "JWT",
                ],
                mainProjects: [
                  "personal portfolio",
                  "Violet Shop",
                ],
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
      },

      list: [
        {
          id: 1,
          imgDesktopUrl: imgDesktopUrl1,
          imgDesktopAlt:
            "screenshot of desktop view of personal portfolio website",
          imgMobileUrl: imgMobileUrl1,
          imgMobileAlt:
            "screenshot of mobile view of personal portfolio website",
          title: "Personal Portfolio",
          techs: [
            "html",
            "css",
            "react",
            "zustand",
            "git",
            "github",
            "tailwind",
            "npm",
            "javascript",
          ],
          description:
            "This personal portfolio showcases a collection of web development projects and skills. It stands out for its focus on providing detailed and relevant information about each project, including initial planning, visual design, objectives achieved, and more.",
          siteUrl: "https://josecoronel20.github.io/portfolioPersonal/",
          repoUrl: "https://github.com/josecoronel20/portfolioPersonal",
          isFinished: true,
          projectObjective:
            "The goal of this project was to create my personal portfolio, a platform to showcase my skills and projects as a web developer. The main focus was to design a clear and attractive interface that highlights my work, technological skills, and professional evolution. I aimed to create a space where potential employers or collaborators could learn about my experience and projects in a visually appealing and functional way.",
          details: {
            planningProcess: [
              {
                title: "Information Architecture",
                description:
                  "I started with a TXT file to outline the main sections: 'Home', 'Projects', 'Blog', and 'Contact'. I developed each section and its subsections progressively, creating a clear and relevant structure.",
                imageUrl: imgTxt1,
              },
              {
                title: "Visual Design",
                description:
                  "The visual design aimed to reflect my personal and professional identity. Initially, I chose a bold color palette with purple tones, which I felt represented me well, but ultimately opted for a simpler and cleaner palette to ensure that relevant information would be the focus, facilitating effective visual communication without distractions.",
                imageUrl: imgdesign1,
              },
              {
                title: "Functionality Planning",
                description:
                  "I created a diagram to plan functionalities, such as the carousel. Initially, I planned to show three projects from the JSON, but decided to display just one based on the JSON index. I also planned a 'translate' component, which led me to use a global context and explore Redux.",
                imageUrl: imgfeatures1,
              },
            ],
            mainFeatures: [
              {
                title: "Carousel",
                description:
                  "This section is designed for users to explore my projects quickly and easily. Its main goal is to capture attention by presenting an interactive interface that highlights my work at first glance.",
              },
              {
                title: "Technology Mapping",
                description:
                  "In the technology section, representative icons of each technology are displayed. When hovering over an icon, it changes appearance, and when clicked, a modal window opens. Implementing this functionality required complex logic to render each icon with its respective functionality, based on information mapped from a JSON containing details of each technology.",
              },
              {
                title: "Modal Window",
                description:
                  "In the technology section, each technology is linked to a modal window. When clicking on any technology, information about my knowledge level is displayed along with a detailed section explaining the main topics and concepts I handle.",
              },
            ],
            issues: {
              title: "MAIN ISSUES ENCOUNTERED",
              issueList: [
                {
                  title: "Technology Icon Mapping",
                  description:
                    "When mapping each technology, it was necessary to implement hover logic and modal window functionality individually for each icon. This was done to ensure that each functionality operated correctly and specifically. If the logic were applied globally, it could result in erratic and undesirable behaviors in interaction with the icons.",
                },
                {
                  title: "Carousel",
                  description:
                    "In an earlier stage, the carousel was designed to be more visually striking, rendering three 'cards' and adding animations for navigation. However, after testing various options and getting unsatisfactory results, I decided to simplify the functionality. Now, the carousel shows only one 'card' at a time, but with animations that add dynamism and appeal, keeping the visual interest without complicating the implementation.",
                },
                {
                  title: "Starting Application of What I Learned",
                  description:
                    "After developing web applications in a disorganized way with basic knowledge, I decided to improve my training through books, videos, and readings. This led me to adopt a more professional approach, structuring my files better and using Git more effectively. I learned to compose projects in a modular way, reduce code with hooks, and manage development in separate branches to avoid code mixing and focus on each section separately.",
                },
              ],
            },
          },
        },
        {
          id: 2,
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
            "zustand",
            "react-hook-form",
            "jwt",
            "shadcn",
            "git",
            "github",
            "npm",
          ],
          description:
            "Violet Shop is a complete e-commerce developed with Next.js 14 and TypeScript. The project implements a JWT authentication system, global state management with Zustand, and an accessible user interface built with Shadcn. It includes features such as user registration, persistent shopping cart, and a complete checkout system.",
          siteUrl: "https://violet-shop.vercel.app",
          repoUrl: "https://github.com/josecoronel20/violet-shop",
          isFinished: true,
          projectObjective:
            "The main objective was to create a complete online store with all the essential features of a modern e-commerce. We aimed to implement a robust and scalable architecture, with a strong focus on user experience and security. The project serves as a demonstration of full-stack development skills with Next.js and TypeScript.",
          details: {
            planningProcess: [
              {
                title: "System Architecture",
                description:
                  "An architecture based on Next.js 14 was designed, using API Routes for the backend and a JWT authentication system. The database was initially implemented with JSON and File System for data persistence, allowing for rapid iteration and development.",
                imageUrl: imgTxt2,
              },
              {
                title: "UI/UX Design",
                description:
                  "The design focused on creating a clean and modern interface using Tailwind CSS and Shadcn, taking inspiration from a v0 design. Mobile accessibility and experience were prioritized, implementing a responsive design that works perfectly on all devices.",
                imageUrl: imgdesign2,
              },
              {
                title: "Feature Planning",
                description:
                  "The main functionalities were structured into three areas: user system, product management, and shopping cart. Each area was designed to be modular and scalable, allowing for future improvements and expansions.",
                imageUrl: imgfeatures2,
              },
            ],
            mainFeatures: [
              {
                title: "Authentication System",
                description:
                  "Complete implementation of user registration and login with JWT. Includes form validation with React Hook Form, session management, and route protection for authenticated users.",
              },
              {
                title: "JSON Database and API Routes",
                description:
                  "A JSON database was implemented which is modified through endpoints set up on the server, allowing users to add, delete, and update user information. API routes were used to enable users to perform the aforementioned actions.",
              },
              {
                title: "Library Usage",
                description:
                  "Trending libraries such as shadcn, zustand, swr, react-hook-form, and jwt were used for project development with the aim of starting to develop projects simulating a real work environment.",
              },
            ],
            issues: {
              title: "MAIN TECHNICAL CHALLENGES",
              issueList: [
                {
                  title: "State Persistence",
                  description:
                    "One of the biggest challenges was maintaining the application state (user session) after page reload. This was solved by implementing a hook that returns user information by using the decoded JWT cookie and extracting the user ID, which is used to filter user information in the JSON database.",
                },
                {
                  title: "Global State Management",
                  description:
                    "State synchronization between components and update management presented significant challenges. A robust system was implemented with Zustand, defining clear interfaces and specific actions for each type of update, improving consistency and performance.",
                },
                {
                  title: "Form Validation",
                  description:
                    "Implementing consistent validations and error handling in forms was an important challenge. This was resolved using React Hook Form with custom validations, significantly improving the user experience and reducing code complexity.",
                },
              ],
            },
          },
        },
        {
          id: 3,
          imgDesktopUrl: imgDesktopUrl3,
          imgDesktopAlt: "screenshot of desktop view of Arenados Lucho website",
          imgMobileUrl: imgMobileUrl3,
          imgMobileAlt: "screenshot of mobile view of Arenados Lucho website",
          title: "Arenados Lucho Website",
          techs: [
            "html",
            "css",
            "react",
            "git",
            "github",
            "tailwind",
            "npm",
            "javascript",
          ],
          description:
            "The Arenados Lucho website was developed as part of a real commission for a company dedicated to sandblasting and surface restoration. The focus was on reflecting professionalism and clarity in the services offered, optimizing navigation for users looking for fast and reliable solutions. The development included responsive design, contact form integration, and a visual structure centered around showcasing completed projects. This project demonstrates the ability to translate client requirements into a concrete and functional solution.",
          siteUrl: "https://arenadoslucho.com/",
          repoUrl: "https://github.com/josecoronel20/ArenadosLucho2025",
          isFinished: false,
          projectObjective:
            "The objective of this project was to optimize SEO to improve search engine ranking. Key adjustments were implemented, such as improving semantic tags and optimizing images to facilitate indexing and increase site visibility. While progress has been made, SEO optimization is an ongoing process that will continue to improve over time.",
          details: {
            planningProcess: [
              {
                title: "Information Architecture",
                description:
                  "The site structure was defined following SEO optimization suggestions. I used recommendations based on best practices for local businesses, prioritizing clear navigation with sections like 'Home', 'Services', 'Gallery', and 'Contact'. A manual schema was not needed, as decisions were made directly based on the client's real needs.",
                imageUrl: null,
              },
              {
                title: "Visual Design",
                description:
                  "The visual design was not developed from scratch in tools like Figma. The decision was made to preserve and update the aesthetic of the previous version of the site, respecting the visual identity already recognized by clients. Minor adjustments were applied to modernize the interface and improve readability, prioritizing a professional, simple, and functional appearance.",
                imageUrl: imgDesign3,
              },
              {
                title: "Functionality Planning",
                description:
                  "No new complex functionalities were incorporated. The focus was on updating and optimizing content to improve SEO, modernizing the 'Before and After' section of completed projects, and maintaining the inquiry form with minimal adjustments to ensure its functionality and accessibility.",
                imageUrl: null,
              },
            ],
            mainFeatures: [
              {
                title: "Updated 'Before and After' Section",
                description:
                  "An interactive component previously developed to display the 'Before and After' of completed projects was implemented. This improvement not only modernizes the visual presentation but also provides users with a clearer and more attractive experience when comparing results directly.",
              },
              {
                title: "SEO Optimization",
                description:
                  "In this update, the primary focus was on optimization for search engines. Texts, titles, and descriptions were adjusted following SEO best practices, prioritizing semantic relevance and proper tag hierarchy. Each section was designed to improve indexing, maximizing the organic visibility of the company without compromising the user experience.",
              },
              {
                title: "Code Refactoring",
                description:
                  "Although no new technologies were introduced, the focus was on cleaning and optimizing the existing code. The structure of the components was improved, redundancies were removed, and good React practices were applied to achieve a more maintainable, efficient, and scalable project.",
              },
            ],
            issues: {
              title: "MAIN CHALLENGES ENCOUNTERED",
              issueList: [
                {
                  title: "SEO Ranking Optimization",
                  description:
                    "One of the main challenges was improving search engine ranking, as the previous content was scarce and poorly structured. To address this, I used suggestions from ChatGPT based on SEO best practices: texts were rewritten with relevant keywords, header structure (H1, H2, H3) was improved, and alt tags for images were optimized, creating a more Google-friendly page without breaking the original aesthetics.",
                },
                {
                  title: "Progressive SEO Optimization",
                  description:
                    "Another challenge was improving search engine ranking. The initial content was scarce and poorly optimized. SEO improvement started by applying ChatGPT suggestions to rewrite texts with relevant keywords, but the process didn't stop there: aspects such as proper use of semantic tags, image optimization (WebP, adequate compression), and header structure were gradually improved, all based on analysis results from online performance tools like PageSpeed Insights.",
                },
                {
                  title: "Load Optimization",
                  description:
                    "Although improvements were already made in load optimization, such as image compression and the implementation of lazy loading, work is still ongoing in this area. The site's performance is constantly being evaluated using tools like Lighthouse, aiming to further reduce load times and improve user experience. The goal is to continue perfecting the site's performance while maintaining quality standards.",
                },
              ],
            },
          },
        },
      ],
    },
    blog: {
      title: "POSTS FROM MY PERSONAL BLOG",
      blogList: [
        {
          id: 1,
          title: "Building Solid Foundations",
          image: imgBlog1,
          altImg: "Image of a programmer studying",
          shortDescription:
            "When I moved to Portugal in April without a computer, I used books, videos, and online documentation to strengthen my knowledge in web development. With 'Programming Fundamentals: Data Structures and Algorithms' and 'Eloquent JavaScript', I built a solid foundation. Finally, I got a computer and applied what I learned in my first project: a personal portfolio.",
          description:
            "In April, when I moved without a computer, I faced the challenge of continuing my web development education. I made use of various resources, including books, videos, and online documentation, to build a solid programming foundation. Once I finally got a computer, I applied what I had learned in a practical project: the development of my personal portfolio.",
          subtitle:
            "From Theory to Practice: How a Diversified Education Boosted My First Web Project",
          content:
            "When I moved to Portugal, I faced the challenge of continuing my training as a web developer. To overcome this limitation, I turned to various educational resources, including books, videos, and online documentation, to build a solid programming foundation. First, I immersed myself in the book 'Programming Fundamentals: Data Structures and Algorithms', which provided me with a deep understanding of key concepts such as algorithms, control structures, and recursion. I also learned about linear data structures and got an introduction to non-linear data structures. Object-Oriented Programming (OOP) was another focus of study, where I delved into topics like encapsulation, inheritance, and polymorphism. Later on, I read 'Eloquent JavaScript', which expanded my knowledge into web development with JavaScript. This book covered JavaScript syntax, data types and structures, functions, and scope and closure handling. It also introduced me to objects and prototypes in JavaScript, asynchronous programming, DOM manipulation, event handling, and modularization and package management. I also explored functional programming concepts applied in JavaScript. With all this theoretical training, I finally acquired a computer, which allowed me to dive deeper into React, focusing on componentization and custom Hooks, and put what I had learned into practice. I developed my first project, a personal portfolio, which consolidated my knowledge and demonstrated my ability to apply the concepts I had learned in a real-world setting. This experience highlights how comprehensive and diversified preparation can facilitate a successful transition from theory to practice in web development.",
          conclusion:
            "The combination of theoretical studies and varied resources such as books, videos, and online documentation was key in building a solid foundation in web development. This thorough preparation allowed me to successfully tackle my first practical project. By applying the concepts learned in 'Programming Fundamentals: Data Structures and Algorithms' and 'Eloquent JavaScript', along with other educational resources, I was able to develop a personal portfolio that reflects both my education and my ability to implement what I had learned. This experience emphasizes the importance of a well-rounded and solid education for making an effective transition into professional practice.",
        },
        {
          id: 2,
          title: "Starting the Job Search",
          image: imgBlog2,
          altImg:
            "Image of a post showing a programmer working on their portfolio and professional profile",
          shortDescription:
            "I started the active search for my first job as a programmer, updating my LinkedIn profile, finalizing my portfolio, and continuing the development of new projects.",
          description:
            "In order to take the next step in my career as a web developer, I began actively searching for my first job in the field. As part of this process, I updated my LinkedIn profile to clearly reflect my skills and projects, ensuring that my profile was aligned with best practices and optimized for recruiters to easily find me. I also finalized my portfolio, showcasing three representative projects of my experience, ranging from web page development to more complex applications.",
          subtitle:
            "Active Search: Professional Profile, Portfolio, and Ongoing Projects",
          content:
            "The process began with a thorough update of my LinkedIn profile. I made sure to highlight my key skills like React, TypeScript, Git, and the best practices I've learned throughout my projects. I also cleaned up my contact list, removing irrelevant connections and networking with professionals in the industry to expand my opportunities.\n\nSimultaneously, I completed my portfolio, a crucial element to showcase my abilities to potential employers. In it, I presented three standout projects that not only reflect my technical skill but also my focus on code quality and structure. These projects, combined with a clean and professional design, provide visitors with a clear view of what I am capable of as a web developer.\n\nOf course, the job search didn't stop here. Although my portfolio is now complete, I continue to develop new projects and improve existing ones. Constant practice is key to staying up-to-date and demonstrating my ongoing progress. Therefore, my goal is to stay motivated, apply to multiple job offers, and perfect every aspect of my profile and projects to stand out in the competitive world of web development.",
          conclusion:
            "The active job search is not just about sending resumes; it's a continuous process of preparation. By updating my LinkedIn profile, finalizing my portfolio, and continuing to work on new projects, I feel increasingly prepared to face the interviews and challenges ahead. My goal is to find a place where I can continue growing professionally, learning from other developers, and contributing to projects that truly excite me.",
        },
        {
          id: 3,
          title: "Interview Preparation",
          image: imgBlog3,
          altImg:
            "Image of a post showing a programmer preparing for their interview in front of a computer",
          shortDescription:
            "I began an intensive training process for job interviews, doing practical exercises, watching interview simulations on video, and using ChatGPT as a virtual recruiter to face different scenarios.",
          description:
            "As I progressed in my job search as a developer, I realized that interview preparation is key to standing out among candidates. So, I began training with practical exercises, watching interview simulation videos, and using ChatGPT as a recruiter simulator to practice different situations and improve my responses in real time.",
          subtitle:
            "Interview Training: Simulations and Practices for Real-World Preparation",
          content:
            "Interview preparation is just as important as technical skill, and I didn't want to miss the opportunity to improve in this area. I started looking for resources on how to face job interviews in the tech sector, focusing on the most common and specific questions for web developers. To put what I had learned into practice, I did question-and-answer exercises, simulating real interview situations. I also found interview simulation videos with other candidates, which allowed me to study their answers and see how I could improve mine.\n\nThe most interesting part of my preparation was using ChatGPT as a virtual recruiter. I asked it to simulate different types of interviews, from technical interviews with coding questions to behavioral interviews, where it asked me about my past experiences, strengths and weaknesses, and how I adapt to working in a team. These simulations helped me anticipate potential questions and practice my responses in a safe environment, which gave me more confidence.\n\nThroughout this process, I also focused on improving my ability to communicate my experiences and technical knowledge clearly and concisely. An interview is not just about what you know, but how you communicate it. That's why I focused on presenting my skills and projects in a structured way, without rambling, always highlighting the most relevant achievements for each position I apply for.",
          conclusion:
            "Interview preparation doesn't have to be something daunting; it's an opportunity to show the best of yourself. By training with simulations, watching interview examples, and using tools like ChatGPT, I feel much more prepared to face any interview that comes my way. Additionally, each simulation allowed me to identify areas for improvement and refine my answers, bringing me closer to my goal of landing my first job as a web developer. Constant practice is key, and I will continue to prepare to make the most of every opportunity that comes my way.",
        },
        {
          id: 4,
          title: "Desarrollo Profesional con Librerías Modernas",
          image: imgBlog1,
          altImg: "Imagen de posteo mostrando un desarrollador trabajando con librerías modernas y Cursor",
          shortDescription:
            "Con una base sólida en desarrollo web, comencé a explorar librerías modernas como Shadcn, Zustand y React Hook Form, utilizando Cursor como IDE para simular un ambiente de desarrollo profesional. Esta experiencia me permitió mejorar mis prácticas de código y familiarizarme con herramientas utilizadas en la industria.",
          description:
            "Después de establecer una base sólida en desarrollo web, decidí dar el siguiente paso en mi crecimiento profesional: incorporar librerías modernas y herramientas de desarrollo utilizadas en la industria. Utilizando Cursor como mi IDE principal y explorando librerías como Shadcn, Zustand y React Hook Form, comencé a desarrollar proyectos que simulan un ambiente laboral real.",
          subtitle:
            "De las Bases al Desarrollo Profesional: Integrando Herramientas Modernas",
          content:
            "Con una base sólida en React y TypeScript, sentí que era el momento de dar un salto en mi desarrollo profesional. Decidí comenzar a utilizar librerías y herramientas que son estándar en la industria, comenzando con Shadcn para la interfaz de usuario. Esta librería me permitió crear componentes accesibles y personalizables, siguiendo las mejores prácticas de diseño y desarrollo.\n\nEl siguiente paso fue implementar Zustand para el manejo de estado global. A diferencia de soluciones más complejas como Redux, Zustand me ofreció una forma más sencilla y eficiente de manejar el estado de la aplicación, manteniendo un código limpio y mantenible. Esta experiencia me ayudó a entender mejor los patrones de manejo de estado en aplicaciones reales.\n\nPara mejorar la experiencia de usuario y la validación de formularios, incorporé React Hook Form junto con Zod. Esta combinación me permitió crear formularios robustos y validados, reduciendo significativamente la cantidad de código necesario y mejorando la experiencia del usuario final.\n\nUn aspecto crucial de esta evolución fue la adopción de Cursor como mi IDE principal. Esta herramienta no solo me proporcionó una experiencia de desarrollo más fluida, sino que también me ayudó a mantener un código más limpio y consistente. Las características de Cursor, como la integración con IA y las sugerencias inteligentes, me permitieron trabajar de manera más eficiente y profesional.\n\nEl proyecto Violet Shop se convirtió en el campo de pruebas perfecto para estas nuevas tecnologías. Implementando un sistema de autenticación con JWT, un carrito de compras persistente y una interfaz de usuario accesible, pude aplicar todas estas herramientas en un contexto real. Esta experiencia me ayudó a entender mejor cómo estas tecnologías se integran y funcionan juntas en un proyecto de producción.\n\nEsta fase de mi desarrollo profesional ha sido crucial para entender cómo se trabaja en un ambiente laboral real. La combinación de librerías modernas, herramientas de desarrollo avanzadas y buenas prácticas de código me ha permitido crear aplicaciones más robustas y mantenibles, preparándome mejor para mi futura carrera como desarrollador.",
          conclusion:
            "La incorporación de librerías modernas y herramientas de desarrollo profesional ha sido un paso fundamental en mi crecimiento como desarrollador. Al utilizar Shadcn, Zustand, React Hook Form y Cursor, no solo he mejorado la calidad de mis proyectos, sino que también he ganado experiencia con tecnologías utilizadas en la industria. Esta evolución me ha permitido crear aplicaciones más robustas y mantenibles, simulando un ambiente de desarrollo profesional y preparándome mejor para mi futura carrera en el desarrollo web.",
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
