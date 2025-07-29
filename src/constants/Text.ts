import { textLanguage } from "../types/types";

export const text: textLanguage = {
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
        },
        mainAchieve: "Logro destacado",
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
                src: "/img/projects/chapel-1.png",
                alt: "Imagen 1",
              },
              {
                src: "/img/projects/chapel-2.png",
                alt: "Imagen 2",
              },
              {
                src: "/img/projects/chapel-3.png",
                alt: "Imagen 3",
              },
              {
                src: "/img/projects/chapel-4.png",
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
      subtitle:
        "Te interesa mi trabajo? No dudes en contactarme",
      cta: "Contactar",
    },
  },
};
