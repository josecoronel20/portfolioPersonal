import { textLanguage } from "../types/types";

export const text: {
  textEs: textLanguage;
  textEn: textLanguage;
} = {
  textEs: {
    contactInfo: {
      linkedin: "https://www.linkedin.com/in/jose-maria-coronel",
      github: "https://github.com/josecoronel20",
      email: "josecoronel20@outlook.com",
      cv: "/CV_Jose_Maria_Coronel.pdf",
    },
    header: {
      logo: "<JC>",
      nav: {
        li: {
          home: "INICIO",
          projects: "PROYECTOS",
          blog: "BLOG",
        },
      },
    },
    homePage: {
      heroSection: {
        heroImg: {
          imgAlt: "ilustracion de Jose Maria Coronel",
        },
        title: "Jose Maria Coronel",
        subtitle: "Fullstack Developer con foco en frontend",
        techs: ["Next.js", "TypeScript", "Node.js"],
        location: "Buenos Aires, Argentina",
        age: "25 años",
        objective:
          "Busco desarrollarme como programador perfeccionando mi código y profundizando en arquitectura de software, aportando desde el frontend y creciendo hacia el backend.",
        ctaProjects: "VER PROYECTOS",
        ctaCv: "DESCARGAR CV",
      },
      aboutMeSection: {
        title: "SOBRE MÍ",
        text: "Soy un desarrollador web autodidacta, enfocado en escribir código limpio y eficiente, con un interés constante por aprender y mejorar en arquitectura y en todo el proceso de desarrollo de aplicaciones. A través de proyectos personales y reales, adquirí experiencia tanto en frontend como en backend, trabajando con tecnologías modernas.",
      },
      tecnicSkillsSection: {
        title: "Stack técnico",
        Frontend: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind",
          "Shadcn",
          "Zustand",
          "React Hook Form",
          "SWR",
          "Zod",
        ],
        Backend: ["Node.js", "Express", "Prisma", "PostgreSQL", "JWT"],
        Testing: ["Jest", "React Testing Library"],
        Tools: [
          "Cursor",
          "Git",
          "Vercel",
          "Render",
          "GitHub",
          "npm",
          "Supabase",
        ],
      },
      mainProjectsSection: {
        title: "PROYECTOS DESTACADOS",
      },
      focusSection: {
        title: "ENFOQUE ACTUAL",
        text: "Estoy perfeccionando mi trabajo en frontend con React y Next.js, profundizando en patrones como atomic design, hooks personalizados y optimización de rendimiento. En paralelo, avanzo en backend con Node.js, Express y PostgreSQL, enfocándome en escribir código robusto y escalable. Busco integrarme en un equipo de desarrollo donde pueda aportar desde el frontend y seguir creciendo en backend y arquitectura de sistemas modernos.",
        cta: "Disponible para nuevas oportunidades",
      },
      blogSection: {
        title: "CONTENIDO TÉCNICO",
        cta: "LEER ARTÍCULO",
      },
      contactSection: {
        title: "CONTACTO DIRECTO",
        subtitle:
          "Si tienes alguna pregunta o te interesa mi trabajo, no dudes en contactarme.",
      },
    },
    projectsPage: {
      title: "PROYECTOS",
      subtitle:
        "Trabaje en proyectos reales y personales que me permitieron aprender y reforzar conceptos claves en el diseño, desarrollo y despliegue de aplicaciones",
      reutilizableText: {
        cta: {
          details: "VER DETALLES",
          code: "CÓDIGO",
          demo: "DEMO",
          back: "VOLVER",
          keyFeatures: "Funcionalidades clave",
          architectureAndDevops: "Arquitectura y DevOps",
          technicalChallenges: "Desafíos técnicos",
        },
        mainAchieve: "Logro destacado",
        isFinished: "Finalizado",
        inProgress: "En progreso",
        detail: {
          title: "Detalles del proyecto",
          objective: "Objetivo del proyecto",
          role: "Mi rol en el proyecto",
          mainFeatures: "Funcionalidades clave",
          devops: {
            dataBase: "Base de datos",
            backend: "Backend",
            frontend: "Frontend",
            versionControl: "Control de versiones",
            Deploy: "Desplegue",
            enviromentVariables: "Variables de entorno",
          },
          TechnicalChallenges: "Desafíos técnicos",
        },
      },
      projects: [
        {
          id: 1,
          isFinished: true,
          title: "Ecommerce",
          description:
            "Primer proyecto fullstack donde reforcé conceptos clave como autenticación segura con manejo de tokens y cookies, desarrollo de endpoints, consumo de APIs e implementación de lógica de negocio en el backend.",
          mainAchieve:
            "Sistema de autenticación validado y seguro, con integración completa de backend y base de datos.",
          techs: [
            "Next.js",
            "TypeScript",
            "Tailwind",
            "Shadcn",
            "SWR",
            "Zod",
            "Node.js",
            "Express",
            "Prisma",
            "PostgreSQL",
            "Supabase",
            "Vercel",
            "Render",
          ],
          links: {
            demo: "https://ecommerce-refactor-tzah.vercel.app/",
            code: "https://github.com/josecoronel20/ecommerceRefactor-Front",
          },
          details: {
            images: [
              {
                src: "/img/projects/ecommerce-1.png",
                alt: "Imagen 1",
              },
              {
                src: "/img/projects/ecommerce-2.png",
                alt: "Imagen 2",
              },
              {
                src: "/img/projects/ecommerce-3.png",
                alt: "Imagen 3",
              },
              {
                src: "/img/projects/ecommerce-4.png",
                alt: "Imagen 4",
              },
              {
                src: "/img/projects/ecommerce-5.png",
                alt: "Imagen 5",
              },
            ],
            objective:
              "implementar un ecommerce de productos de ropa con un sistema de autenticacion y registro de usuarios, un carrito de compras. Aprender a agregar un backend y concentrar la lógica de negocio ahí",
            role: "Diseño de la aplicación, desarrollador frontend y backend, despliegue en vercel, render y supabase",
            stack: {
              frontend: [
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Shadcn",
                "SWR",
                "Zod",
                "React-hook-form",
              ],
              backend: ["Node.js", "Express"],
              dbAndAuth: ["PostgreSQL", "Supabase", "Prisma", "JWT"],
            },
            mainFeatures: [
              "CRUD completo de productos en carrito",
              "Auth con JWT, cookies seguras y validaciones",
              "Checkout y órdenes con protección de rutas",
              "Panel de usuario con historial de compras",
            ],
            devops: {
              dataBase: "PostgreSQL con Prisma en supabase",
              backend: "Node.js con Express en Render",
              frontend: "Next.js en Vercel",
              versionControl: "Git y GitHub",
              deploy: "CI/CD manual vía Vercel/Render/Supabase dashboard",
              enviromentVariables: "Gestionadas en Bercel/Render/Supabase",
            },
            technicalChallenges: [
              "Implementación de autenticación con JWT y cookies seguras",
              "Manejo de errores y validaciones en el backend",
              "Optimización de rendimiento con SWR",
              "Configuración de el backend",
            ],
          },
        },
        {
          id: 2,
          isFinished: true,
          title: "Chapel futbol",
          description:
            "proyecto real de un centro formativo de futbol que muestra la informacion de cada jugador con el objetivo de facilitar la visualizacion para equipos de futbol, contiene un sistema de autenticacion unico para el administrador del centro que le permite gestionar los jugadores y sus datos",
          mainAchieve:
            "reforcé el desarrollo de autenticacion y seguridad y tambien el manejo de formularios con react-hook-form y zod y la aplicacion de valores por defecto y envió y manejo de informacion anidada de la base de datos",
          techs: [
            "Next.js",
            "TypeScript",
            "Tailwind",
            "Shadcn",
            "SWR",
            "Zod",
            "React-hook-form",
            "Express",
            "Prisma",
            "PostgreSQL",
            "Supabase",
            "Vercel",
          ],
          links: {
            demo: "https://chapel-front.vercel.app/",
            code: "https://github.com/josecoronel20/chapel-front",
          },
          details: {
            images: [
              {
                src: "/img/projects/chapel-3.png",
                alt: "Imagen 1",
              },
              {
                src: "/img/projects/chapel-5.png",
                alt: "Imagen 2",
              },
              {
                src: "/img/projects/chapel-3.png",
                alt: "Imagen 3",
              },
              {
                src: "/img/projects/chapel-5.png",
                alt: "Imagen 4",
              },
              {
                src: "/img/projects/chapel-5.png",
                alt: "Imagen 5",
              },
            ],
            objective:
              "implementar un centro formativo de futbol con un sistema de autenticacion y registro de usuarios, un panel de administrador para gestionar los jugadores y sus datos",
            role: "Diseño de la aplicación, desarrollador frontend y backend, despliegue en vercel, render y supabase",
            stack: {
              frontend: [
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Shadcn",
                "SWR",
                "Zod",
                "React-hook-form",
              ],
              backend: ["Node.js", "Express"],
              dbAndAuth: ["PostgreSQL", "Supabase", "Prisma", "JWT"],
            },
            mainFeatures: [
              "CRUD completo de jugadores",
              "Auth con JWT, cookies seguras y validaciones",
              "Panel de administrador para gestionar los jugadores y sus datos",
              "Panel de usuario para ver la información de los jugadores",
              "Edición de información con valores por defecto y validaciones",
            ],
            devops: {
              dataBase: "PostgreSQL con Prisma en supabase",
              backend: "Node.js con Express en Render",
              frontend: "Next.js en Vercel",
              versionControl: "Git y GitHub",
              deploy: "CI/CD manual vía Vercel/Render/Supabase dashboard",
              enviromentVariables: "Gestionadas en Vercel/Render/Supabase",
            },
            technicalChallenges: [
              "Implementación de autenticación con JWT y cookies seguras",
              "Manejo de errores y validaciones en el backend",
              "Optimización de rendimiento con SWR",
              "Manejo de información con valores por defecto al momento de editar",
              "Implementacíon y manejo de archivos multimedia en el storage de supabase",
              "Configuración de el backend",
            ],
          },
        },
        {
          id: 3,
          isFinished: false,
          title: "hipertrofIA",
          description:
            "Aplicacion de generador de rutinas de hipertrofia con inteligencia artificial con sistema de login y registro, con la posibilidad de crear rutinas personalizadas y guardar las rutinas generadas",
          mainAchieve:
            "Primera integración de la api de openai, reforcé conceptos de envío y manejo de respuesta de la api, generación de prompts y economización de tokens",
          techs: [
            "OpenAI API",
            "Next.js",
            "TypeScript",
            "Tailwind",
            "Shadcn",
            "SWR",
            "Zod",
            "React-hook-form",
            "Express",
            "Prisma",
            "PostgreSQL",
          ],
          links: {
            demo: "https://plani-generator-front.vercel.app/",
            code: "https://github.com/josecoronel20/planiGenerator-front",
          },
          details: {
            images: [
              {
                src: "/img/projects/generator-1.png",
                alt: "Imagen 1",
              },
              {
                src: "/img/projects/generator-2.png",
                alt: "Imagen 2",
              },
              {
                src: "/img/projects/generator-3.png",
                alt: "Imagen 3",
              },
              {
                src: "/img/projects/generator-4.png",
                alt: "Imagen 4",
              },
              {
                src: "/img/projects/generator-5.png",
                alt: "Imagen 5",
              },
            ],
            objective:
              "implementar un generador de rutinas de hipertrofia con inteligencia artificial utilizando la api de openai",
            role: "Diseño de la aplicación, desarrollador frontend y backend, despliegue en vercel, render y supabase",
            stack: {
              frontend: [
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Shadcn",
                "SWR",
                "Zod",
                "React-hook-form",
              ],
              backend: ["Node.js", "Express", "openai Api"],
              dbAndAuth: ["PostgreSQL", "Supabase", "Prisma", "JWT"],
            },
            mainFeatures: [
              "Generación de rutinas de hipertrofia con inteligencia artificial mediante informacion personalizada de formulario",
              "Auth con JWT, cookies seguras y validaciones",
              "Panel de usuario para ver las rutinas generadas y guardadas",
              "Sistema de progresión de repeticiones y peso por ejercicio",
              "Diseño de plantilla de prompt con template strings",
              "Manejo de errores y validaciones en el backend",
            ],
            devops: {
              dataBase: "PostgreSQL con Prisma en supabase",
              backend: "Node.js con Express en Render",
              frontend: "Next.js en Vercel",
              versionControl: "Git y GitHub",
              deploy: "CI/CD manual vía Vercel/Render/Supabase dashboard",
              enviromentVariables: "Gestionadas en Vercel/Render/Supabase",
            },
            technicalChallenges: [
              "Implementación de autenticación con JWT y cookies seguras",
              "Manejo de errores y validaciones en el backend",
              "Optimización de rendimiento con SWR",
              "Configuración de el backend",
              "Implementación de la api de openai",
              "Diseño de sistema de progresión de repeticiones y peso por ejercicio",
              "Diseño de prompt con template strings",
            ],
          },
        },
      ],
    },
    blogPage: {
      title: "BLOG",
      subtitle:
        "Artículos sobre desarrollo web, mejores prácticas y tecnologías modernas",
      callToAction: {
        title: "¿Te gustó el contenido?",
        subtitle:
          "Sígueme en mis redes sociales para más contenido sobre mi experiencia y crecimiento como desarrollador.",
        cta: "Seguir en LinkedIn",
      },
      reutilizableText: {
        cta: {
          back: "Volver",
          read: "Leer artículo",
        },
      },
      posts: [
        {
          id: 1,
          featured: false,
          tags: [
            "Fullstack",
            "Backend",
            "Frontend",
            "Autenticación",
            "Validaciones",
            "Seguridad",
            "Manejo de datos",
            "Creación de endpoints",
            "Despliegue de aplicaciones",
            "Vercel",
            "Render",
            "Supabase",
          ],
          title: "Mis primeros pasos como Fullstack Developer",
          category: "Carrera",
          description:
            "Así empecé a crear aplicaciones web fullstack con el objetivo de aumentar mi empleabilidad y poder tener más oportunidades para conseguir mi primer trabajo como desarrollador web",
          image: "/img/blogImg/post3.png",
          content: [
            {
              p: "Un amigo dev senior me dijo que ahora esta dificil conseguir trabajo siendo frontend jr por lo que tenía que aprender sobre backend ya que en la industria se está buscando más perfiles que sepan un 'poco de todo' y tenía que empezar a aprender sobre backend y base de datos para poder tener más oportunidades de trabajo.",
            },
            {
              h2: "El primer obstáculo: La autenticación",
              p: "Hasta ese momento, todos mis proyectos eran estáticos o usaban localStorage para 'simular' usuarios. Pero ahora necesitaba algo real: registro, login y sesiones , ahí fue cuando me empecé a meter en el mundo de los JWT tokens y las cookies.Al principio era abrumador pero lo pude resolver leyendo documentación y sobre todo a prueba y error.",
            },
            {
              h2: "Construyendo endpoints",
              p: "Después de entender la autenticación, empecé a pensar en cómo podría guardar la informacíon de los usuarios en una base de datos. Empecé a crear mis primeros endpoints con next api routes los cuales manejaban un CRUD completo de usuarios en un archivo de tipo json. Una vez definidos mis endpoints conecté frontend y backend con swr para manejar el fetching de datos, cuando todo funcionó empecé a crear mi backend con node.js y express para manejar la lógica de negocio y la base de datos con prisma y postgres. ",
            },
            {
              h2: "Lo que aprendí",
              p: "Empecé con aplicaciones fullstack con el objetivo de aumentar mi empleabilidad y empecé a aprender sobre autenticación, validaciones, seguridad, manejo de datos, creación de endpoints y desplegue de aplicaciones en vercel, render y supabase.",
            },
          ],
        },
        {
          id: 2,
          featured: true,
          tags: [
            "Fullstack",
            "Backend",
            "Frontend",
            "Autenticación",
            "Validaciones",
            "Seguridad",
            "Manejo de datos",
            "Creación de endpoints",
            "Despliegue de aplicaciones",
            "Vercel",
            "Render",
            "Supabase",
          ],
          title: "Desarrollando Chapel Fútbol: de frontend a backend",
          category: "Proyectos",
          description:
            "Cómo construí una plataforma completa para la gestión de jugadores de fútbol, superando desafíos como datos anidados, control de roles y manejo de archivos multimedia.",
          image: "/img/projects/chapel-5.png",
          content: [
            {
              p: "Chapel Fútbol nació como una plataforma fullstack para que el Centro Formativo Chapel pudiera gestionar jugadores, estadísticas y contenido multimedia desde un único lugar. El desarrollo me permitió poner en práctica todo mi stack moderno, desde Next.js en el frontend hasta Node.js y Express en el backend.",
            },
            {
              h2: "Desafío principal: datos anidados",
              p: "Cada jugador no solo tiene información básica, sino también estadísticas y habilidades relacionadas. Para resolverlo diseñé un modelo de datos con Prisma y PostgreSQL que soporta relaciones y consultas eficientes, manteniendo la estructura limpia y escalable.",
            },
            {
              h2: "Control de roles y CRUD seguro",
              p: "La gestión de jugadores requería autenticación robusta y control de permisos. Implementé JWT con cookies HTTP-only y middleware de autorización para garantizar que solo los administradores pudieran crear, editar o eliminar perfiles de jugadores, mientras los usuarios generales solo podían visualizar información.",
            },
            {
              h2: "Manejo de imágenes y videos",
              p: "Otro reto importante fue el almacenamiento de archivos multimedia. Integré Supabase Storage para permitir la carga y recuperación de imágenes y videos de forma segura, optimizando el flujo de subida y el acceso desde el frontend con SWR y hooks personalizados.",
            },
            {
              h2: "Resultados",
              p: "Logré una plataforma estable, escalable y con una experiencia de usuario profesional, lista para evolucionar con futuras integraciones como tests automatizados y documentación API con Swagger.",
            },
          ],
        },
      ],
    },
    callToAction: {
      subtitle: "Te interesa mi trabajo? No dudes en contactarme",
      cta: "Contactar",
    },
  },
  textEn: {
    contactInfo: {
      linkedin: "https://www.linkedin.com/in/jose-maria-coronel",
      github: "https://github.com/josecoronel20",
      email: "josecoronel20@outlook.com",
      cv: "/CV_Jose_Maria_Coronel.pdf",
    },
    header: {
      logo: "<JC>",
      nav: {
        li: {
          home: "HOME",
          projects: "PROJECTS",
          blog: "BLOG",
        },
      },
    },
    homePage: {
      heroSection: {
        heroImg: {
          imgAlt: "illustration of Jose Maria Coronel",
        },
        title: "Jose Maria Coronel",
        subtitle: "Fullstack Developer focused on frontend",
        techs: ["Next.js", "TypeScript", "Node.js"],
        location: "Buenos Aires, Argentina",
        age: "25 years",
        objective:
          "I want to develop myself as a programmer by perfecting my code and deepening in software architecture, contributing from the frontend and growing towards the backend.",
        ctaProjects: "SEE PROJECTS",
        ctaCv: "DOWNLOAD CV",
      },
      aboutMeSection: {
        title: "ABOUT ME",
        text: "I am a self-taught web developer, focused on writing clean and efficient code, with a constant interest in learning and improving in architecture and in the entire application development process. Through personal and real projects, I acquired experience in both frontend and backend, working with modern technologies.",
      },
      tecnicSkillsSection: {
        title: "Technical Stack",
        Frontend: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind",
          "Shadcn",
          "Zustand",
          "React Hook Form",
          "SWR",
          "Zod",
        ],
        Backend: ["Node.js", "Express", "Prisma", "PostgreSQL", "JWT"],
        Testing: ["Jest", "React Testing Library"],
        Tools: [
          "Cursor",
          "Git",
          "Vercel",
          "Render",
          "GitHub",
          "npm",
          "Supabase",
        ],
      },
      mainProjectsSection: {
        title: "MAIN PROJECTS",
      },
      focusSection: {
        title: "CURRENT FOCUS",
        text: "I am improving my work in frontend with React and Next.js, deepening in patterns like atomic design, custom hooks and performance optimization. In parallel, I am advancing in backend with Node.js, Express and PostgreSQL, focusing on writing robust and scalable code. I am looking for an opportunity to join a development team where I can contribute from the frontend and continue growing in backend and modern system architecture.",
        cta: "Available for new opportunities",
      },
      blogSection: {
        title: "TECHNICAL CONTENT",
        cta: "READ ARTICLE",
      },
      contactSection: {
        title: "DIRECT CONTACT",
        subtitle:
          "If you have any questions or are interested in my work, don't hesitate to contact me.",
      },
    },
    projectsPage: {
      title: "PROJECTS",
      subtitle:
        "Worked on real and personal projects that allowed me to learn and reinforce key concepts in design, development and deployment of applications",
      reutilizableText: {
        cta: {
          details: "SEE DETAILS",
          code: "CODE",
          demo: "DEMO",
          back: "BACK",
          keyFeatures: "Key features",
          architectureAndDevops: "Architecture and DevOps",
          technicalChallenges: "Technical challenges",
        },
        mainAchieve: "Main achievement",
        isFinished: "Finished",
        inProgress: "In progress",
        detail: {
          title: "Project details",
          objective: "Project objective",
          role: "My role in the project",
          mainFeatures: "Key features",
          devops: {
            dataBase: "Database",
            backend: "Backend",
            frontend: "Frontend",
            versionControl: "Version control",
            Deploy: "Deploy",
            enviromentVariables: "Environment variables",
          },
          TechnicalChallenges: "Technical challenges",
        },
      },
      projects: [
        {
          id: 1,
          isFinished: true,
          title: "Ecommerce",
          description:
            "First fullstack project where I reinforced key concepts like secure authentication with token and cookie management, endpoint development, API consumption and business logic implementation in the backend.",
          mainAchieve:
            "Authentication system validated and secure, with complete integration of backend and database.",
          techs: [
            "Next.js",
            "TypeScript",
            "Tailwind",
            "Shadcn",
            "SWR",
            "Zod",
            "Node.js",
            "Express",
            "Prisma",
            "PostgreSQL",
            "Supabase",
            "Vercel",
            "Render",
          ],
          links: {
            demo: "https://ecommerce-refactor-tzah.vercel.app/",
            code: "https://github.com/josecoronel20/ecommerceRefactor-Front",
          },
          details: {
            images: [
              {
                src: "/img/projects/ecommerce-1.png",
                alt: "Image 1",
              },
              {
                src: "/img/projects/ecommerce-2.png",
                alt: "Image 2",
              },
              {
                src: "/img/projects/ecommerce-3.png",
                alt: "Image 3",
              },
              {
                src: "/img/projects/ecommerce-4.png",
                alt: "Image 4",
              },
              {
                src: "/img/projects/ecommerce-5.png",
                alt: "Image 5",
              },
            ],
            objective:
              "implement a ecommerce of products of clothes with an authentication and registration system of users, a shopping cart. Learn to add a backend and concentrate the business logic there",
            role: "Design of the application, frontend and backend developer, deployment in vercel, render and supabase",
            stack: {
              frontend: [
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Shadcn",
                "SWR",
                "Zod",
                "React-hook-form",
              ],
              backend: ["Node.js", "Express"],
              dbAndAuth: ["PostgreSQL", "Supabase", "Prisma", "JWT"],
            },
            mainFeatures: [
              "CRUD complete of products in cart",
              "Auth with JWT, secure cookies and validations",
              "Checkout and orders with route protection",
              "User panel with purchase history",
            ],
            devops: {
              dataBase: "PostgreSQL with Prisma in supabase",
              backend: "Node.js with Express in Render",
              frontend: "Next.js in Vercel",
              versionControl: "Git and GitHub",
              deploy: "CI/CD manual vía Vercel/Render/Supabase dashboard",
              enviromentVariables: "Managed in Vercel/Render/Supabase",
            },
            technicalChallenges: [
              "Implementation of authentication with JWT and secure cookies",
              "Error and validation management in the backend",
              "Performance optimization with SWR",
              "Backend configuration",
            ],
          },
        },
        {
          id: 2,
          isFinished: true,
          title: "Chapel futbol",
          description:
            "Real project of a football center that shows the information of each player to facilitate the visualization for football teams, it contains a unique authentication system for the center administrator that allows managing players and their data",
          mainAchieve:
            "reinforced the development of authentication and security, also the management of forms with react-hook-form and zod, and the application of default values and sending and managing nested information from the database",
          techs: [
            "Next.js",
            "TypeScript",
            "Tailwind",
            "Shadcn",
            "SWR",
            "Zod",
            "React-hook-form",
            "Express",
            "Prisma",
            "PostgreSQL",
            "Supabase",
            "Vercel",
          ],
          links: {
            demo: "https://chapel-front.vercel.app/",
            code: "https://github.com/josecoronel20/chapel-front",
          },
          details: {
            images: [
              {
                src: "/img/projects/chapel-3.png",
                alt: "Image 1",
              },
              {
                src: "/img/projects/chapel-5.png",
                alt: "Image 2",
              },
              {
                src: "/img/projects/chapel-3.png",
                alt: "Image 3",
              },
              {
                src: "/img/projects/chapel-5.png",
                alt: "Image 4",
              },
              {
                src: "/img/projects/chapel-5.png",
                alt: "Image 5",
              },
            ],
            objective:
              "implement a football center with an authentication and registration system of users, an administrator panel to manage players and their data",
            role: "Design of the application, frontend and backend developer, deployment in vercel, render and supabase",
            stack: {
              frontend: [
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Shadcn",
                "SWR",
                "Zod",
                "React-hook-form",
              ],
              backend: ["Node.js", "Express"],
              dbAndAuth: ["PostgreSQL", "Supabase", "Prisma", "JWT"],
            },
            mainFeatures: [
              "CRUD complete of players",
              "Auth with JWT, secure cookies and validations",
              "Administrator panel to manage players and their data",
              "User panel to see the information of the players",
              "Information editing with default values and validations",
            ],
            devops: {
              dataBase: "PostgreSQL with Prisma in supabase",
              backend: "Node.js with Express in Render",
              frontend: "Next.js in Vercel",
              versionControl: "Git and GitHub",
              deploy: "CI/CD manual via Vercel/Render/Supabase dashboard",
              enviromentVariables: "Managed in Vercel/Render/Supabase",
            },
            technicalChallenges: [
              "Implementation of authentication with JWT and secure cookies",
              "Error and validation management in the backend",
              "Performance optimization with SWR",
              "Information management with default values when editing",
              "Implementation and management of multimedia files in the supabase storage",
              "Backend configuration",
            ],
          },
        },
        {
          id: 3,
          isFinished: false,
          title: "hipertrofIA",
          description:
            "Application of a generator of hypertrophy routines with artificial intelligence with login and registration system, with the possibility of creating personalized routines and saving the generated routines",
          mainAchieve:
            "First integration of the openai api, reinforced concepts of sending and managing the response of the api, generation of prompts and token economy",
          techs: [
            "OpenAI API",
            "Next.js",
            "TypeScript",
            "Tailwind",
            "Shadcn",
            "SWR",
            "Zod",
            "React-hook-form",
            "Express",
            "Prisma",
            "PostgreSQL",
          ],
          links: {
            demo: "https://plani-generator-front.vercel.app/",
            code: "https://github.com/josecoronel20/planiGenerator-front",
          },
          details: {
            images: [
              {
                src: "/img/projects/generator-1.png",
                alt: "Image 1",
              },
              {
                src: "/img/projects/generator-2.png",
                alt: "Image 2",
              },
              {
                src: "/img/projects/generator-3.png",
                alt: "Image 3",
              },
              {
                src: "/img/projects/generator-4.png",
                alt: "Image 4",
              },
              {
                src: "/img/projects/generator-5.png",
                alt: "Image 5",
              },
            ],
            objective:
              "implement a generator of hypertrophy routines with artificial intelligence using the openai api",
            role: "Design of the application, frontend and backend developer, deployment in vercel, render and supabase",
            stack: {
              frontend: [
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Shadcn",
                "SWR",
                "Zod",
                "React-hook-form",
              ],
              backend: ["Node.js", "Express", "openai Api"],
              dbAndAuth: ["PostgreSQL", "Supabase", "Prisma", "JWT"],
            },
            mainFeatures: [
              "Generation of hypertrophy routines with artificial intelligence through personalized form information",
              "Auth with JWT, secure cookies and validations",
              "User panel to see the generated and saved routines",
              "Progression system of repetitions and weight by exercise",
              "Prompt template design with template strings",
              "Error and validation management in the backend",
            ],
            devops: {
              dataBase: "PostgreSQL with Prisma in supabase",
              backend: "Node.js with Express in Render",
              frontend: "Next.js in Vercel",
              versionControl: "Git and GitHub",
              deploy: "CI/CD manual via Vercel/Render/Supabase dashboard",
              enviromentVariables: "Managed in Vercel/Render/Supabase",
            },
            technicalChallenges: [
              "Implementation of authentication with JWT and secure cookies",
              "Error and validation management in the backend",
              "Performance optimization with SWR",
              "Backend configuration",
              "Implementation of the openai api",
              "Design of the progression system of repetitions and weight by exercise",
              "Design of prompt with template strings",
            ],
          },
        },
      ],
    },
    blogPage: {
      title: "BLOG",
      subtitle:
        "Articles about web development, best practices and modern technologies",
      callToAction: {
        title: "Did you like the content?",
        subtitle:
          "Follow me on my social networks for more content about my experience and growth as a developer.",
        cta: "Follow in LinkedIn",
      },
      reutilizableText: {
        cta: {
          back: "Back",
          read: "Read article",
        },
      },
      posts: [
        {
          id: 1,
          featured: false,
          tags: [
            "Fullstack",
            "Backend",
            "Frontend",
            "Authentication",
            "Validations",
            "Security",
            "Data management",
            "Endpoint creation",
            "Application deployment",
            "Vercel",
            "Render",
            "Supabase",
          ],
          title: "My first steps as a Fullstack Developer",
          category: "Career",
          description:
            "This is how I started creating web applications fullstack with the goal of increasing my employability and having more opportunities to get my first job as a web developer",
          image: "/img/blogImg/post3.png",
          content: [
            {
              p: "A senior developer friend told me that it is now difficult to find a job as a frontend jr because of this I had to learn about backend because in the industry more profiles are being sought that know a 'little of everything' and I had to start learning about backend and database to have more opportunities to work.",
            },
            {
              h2: "The first obstacle: Authentication",
              p: "Until that moment, all my projects were static or used localStorage to 'simulate' users. But now I needed something real: registration, login and sessions, there is when I started to get into the world of JWT tokens and cookies. At first it was overwhelming but I was able to solve it by reading documentation and above all by trial and error.",
            },
            {
              h2: "Building endpoints",
              p: "After understanding authentication, I started thinking about how I could save the information of the users in a database. I started creating my first endpoints with next api routes which handled a complete CRUD of users in a json file type. Once I defined my endpoints I connected frontend and backend with swr to handle the fetching of data, when everything worked I started creating my backend with node.js and express to handle the business logic and the database with prisma and postgres. ",
            },
            {
              h2: "What I learned",
              p: "I started with fullstack applications with the goal of increasing my employability and I started learning about authentication, validations, security, data management, endpoint creation and application deployment in vercel, render and supabase.",
            },
          ],
        },
        {
          id: 2,
          featured: true,
          tags: [
            "Fullstack",
            "Backend",
            "Frontend",
            "Authentication",
            "Validations",
            "Security",
            "Data management",
            "Endpoint creation",
            "Application deployment",
            "Vercel",
            "Render",
            "Supabase",
          ],
          title: "Developing Chapel Fútbol: from frontend to backend",
          category: "Projects",
          description:
            "How I built a complete platform for managing football players, overcoming challenges like nested data, role control and multimedia file management.",
          image: "/img/projects/chapel-5.png",
          content: [
            {
              p: "Chapel Fútbol was born as a fullstack platform so that the Chapel Training Center could manage players, statistics and multimedia content from a single place. The development allowed me to put into practice all my modern stack, from Next.js in the frontend to Node.js and Express in the backend.",
            },
            {
              h2: "Main challenge: nested data",
              p: "Each player not only has basic information, but also statistics and related skills. To solve it I designed a data model with Prisma and PostgreSQL that supports efficient relationships and queries, keeping the structure clean and scalable.",
            },
            {
              h2: "Secure role control and CRUD",
              p: "The management of players required robust authentication and permission control. I implemented JWT with HTTP-only cookies and authorization middleware to ensure that only administrators could create, edit or delete player profiles, while general users could only view information.",
            },
            {
              h2: "Handling images and videos",
              p: "Another important challenge was the storage of multimedia files. I integrated Supabase Storage to allow the upload and retrieval of images and videos securely, optimizing the upload flow and access from the frontend with SWR and custom hooks.",
            },
            {
              h2: "Results",
              p: "I achieved a stable, scalable platform with a professional user experience, ready to evolve with future integrations like automated tests and API documentation with Swagger.",
            },
          ],
        },
      ],
    },
    callToAction: {
      subtitle: "Are you interested in my work? Don't hesitate to contact me",
      cta: "Contact",
    },
  },
};
