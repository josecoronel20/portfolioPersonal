import {
  iconChatGptColor,
  iconChatGptWhite,
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
  iconReduxColor,
  iconReduxWhite,
  iconTailwindColor,
  iconTailwindWhite,
  iconTsColor,
  iconTsWhite,
  iconVsCodeColor,
  iconVsCodeWhite,
} from "../Icons";

import imgDesktopUrl1 from "/public/img/projectsImg/portfolio/screenShotDesktop.png";
import imgMobileUrl1 from "/public/img/projectsImg/portfolio/screenShotMobile.png";
import imgTxt1 from "/public/img/projectsImg/portfolio/projectDetail/txt.png";
import imgdesign1 from "/public/img/projectsImg/portfolio/projectDetail/design.png";
import imgfeatures1 from "/public/img/projectsImg/portfolio/projectDetail/features.png";

import imgDesktopUrl2 from "/public/img/projectsImg/ecommerce/Ecommerce-Desktop.png";
import imgMobileUrl2 from "/public/img/projectsImg/ecommerce/Ecommerce-Mobile.png";
import imgTxt2 from "/public/img/projectsImg/ecommerce/proyectDetail/ecommerce-arquitecture.png";
import imgdesign2 from "/public/img/projectsImg/ecommerce/proyectDetail/ecommerce-designe.png";
import imgfeatures2 from "/public/img/projectsImg/ecommerce/proyectDetail/ecommerce-funcionality.png";

import imgDesktopUrl3 from "/public/img/projectsImg/arenadosLucho/imgDesktop.png";
import imgMobileUrl3 from "/public/img/projectsImg/arenadosLucho/imgMobile.png";

import imgBlog1 from "/public/img/blogImg/OIG4.jpg";
import imgBlog2 from "/public/img/blogImg/post2.png";
import imgBlog3 from "/public/img/blogImg/post3.png";

import { textLanguage } from "../../types";

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
                id: 5,
                title: "React.js",
                color: "#61DAFB",
                iconWhite: iconReactWhite,
                iconColor: iconReactColor,
                level: "Intermedio",
                mainTopics: [
                  "Componentes",
                  "Hooks",
                  "Manejo de estado",
                  "Rutas",
                  "JSX",
                ],
                mainProjects: [
                  "portfolio personal",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 6,
                title: "Redux",
                color: "#764ABC",
                iconWhite: iconReduxWhite,
                iconColor: iconReduxColor,
                level: "Básico",
                mainTopics: ["State Management", "Actions", "Reducers"],
                mainProjects: [""],
              },
              {
                id: 7,
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
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },

              {
                id: 8,
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
                mainProjects: ["Ecommerce"],
              },
            ],
          },
          {
            title: "HERRAMIENTAS",
            list: [
              {
                id: 9,

                title: "ChatGPT",
                color: "#6C3F9D",
                iconWhite: iconChatGptWhite,
                iconColor: iconChatGptColor,
                level: "Avanzado",
                mainTopics: [
                  "Asistencia en desarrollo de código",
                  "Generación de ideas y resolución de problemas",
                  "Automatización de tareas repetitivas",
                  "Personalización de respuestas según necesidades del proyecto",
                ],
                mainProjects: [
                  "portfolio personal",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 10,

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
                id: 11,

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
                id: 12,

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
            ],
          },
          {
            title: "CONCEPTOS Y METODOLOGÍAS",
            list: [
              {
                id: 13,

                title: "Diseño responsivo",
                color: "#34A853",
                level: "Intermedio",
                mainTopics: [
                  "Media queries",
                  "Diseño mobile-first",
                  "Flexbox y Grid",
                ],
                mainProjects: [
                  "portfolio personal",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 14,

                title: "Componentes reutilizables",
                color: "#007BFF",
                level: "Intermedio",
                mainTopics: [
                  "Uso de props",
                  "Estados básicos",
                  "Organización de componentes",
                ],
                mainProjects: [
                  "portfolio personal",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 15,

                title: "Manejo de estados",
                color: "#6A1B9A",
                level: "Básico",
                mainTopics: [
                  "useState",
                  "useEffect",
                  "Redux (en proceso de aprendizaje)",
                ],
                mainProjects: [
                  "portfolio personal",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 16,

                title: "Consumo de APIs",
                color: "#5C6BC0",
                level: "Intermedio",
                mainTopics: ["fetch", "axios", "manejo de loading/errores"],
                mainProjects: [""],
              },
              {
                id: 17,

                title: "Control de versiones (Git)",
                color: "#F4511E",
                level: "Intermedio",
                mainTopics: ["Commits básicos", "Branches", "Merge a main"],
                mainProjects: [
                  "portfolio personal",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 18,

                title: "Testing (aprendiendo)",
                color: "#9E9D24",
                level: "Básico",
                mainTopics: [
                  "Jest",
                  "Testing Library",
                  "Pruebas unitarias simples",
                ],
                mainProjects: ["Ecommerce"],
              },
              {
                id: 19,

                title: "Ruteo en SPA",
                color: "#C62828",
                level: "Básico",
                mainTopics: [
                  "React Router",
                  "Rutas simples",
                  "Navegación entre páginas",
                ],
                mainProjects: [
                  "portfolio personal",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 20,

                title: "Buenas prácticas",
                color: "#6D4C41",
                level: "Básico",
                mainTopics: [
                  "Código limpio",
                  "Separación por componentes",
                  "Reutilización de lógica",
                ],
                mainProjects: [
                  "portfolio personal",
                  "Ecommerce",
                  "Arenados Lucho",
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
            "redux",
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
                title: "Mapeo de tecnologías",
                description:
                  "En la sección de tecnologías, se muestran iconos representativos de cada tecnología. Al pasar el cursor sobre un icono, este cambia de apariencia, y al hacer clic en él, se abre una ventana modal. Implementar esta funcionalidad requirió una lógica compleja para renderizar cada icono con sus respectivas funcionalidades, basándose en la información mapeada desde un JSON que contiene los detalles de cada tecnología. ",
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
                  title: "Mapeo de iconos de tencologiás",
                  description:
                    "Al mapear cada tecnología, fue necesario implementar la lógica de hover y la funcionalidad de la ventana modal de manera individual para cada icono. Esto se hizo para asegurar que cada funcionalidad operara de forma específica y correcta. Si la lógica se aplicara de manera global, podría generar comportamientos erráticos y no deseados en la interacción con los iconos.",
                },
                {
                  title: "Carrusel",
                  description:
                    "En una primera etapa, el carrusel se diseñó para ser más llamativo visualmente, renderizando tres 'cards' y añadiendo animaciones para la navegación entre ellas. Sin embargo, al probar varias opciones para implementar esta complejidad con resultados insatisfactorios, decidí simplificar la funcionalidad. Ahora, el carrusel muestra solo una 'card' a la vez, pero con animaciones que añaden dinamismo y atractivo, manteniendo así el interés visual sin complicar la implementación.",
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
            "captura de pantalla de vista de escritorio de proyecto ecommerce",
          imgMobileUrl: imgMobileUrl2,
          imgMobileAlt:
            "captura de pantalla de vista de móbil de proyecto ecommerce",
          title: "Ecommerce",
          techs: [
            "html",
            "css",
            "react",
            "typescript",
            "next",
            "git",
            "github",
            "tailwind",
            "jest",
            "testing-library",
            "npm",
            "javascript",
          ],
          description:
            "Este proyecto de ecommerce ficticio ofrece una experiencia de compra online, abarcando desde la planificación inicial hasta la ejecución final. Se utiliza React y Next.js de forma básica para optimizar el rendimiento y garantizar un diseño responsivo que facilite la navegación en dispositivos móviles y escritorio. Además, se incorpora TypeScript básico para una mejor tipificación y se realizan pruebas unitarias básicas para asegurar la funcionalidad del proyecto. El diseño visual está inspirado en prototipos creados en Figma, destacando la atención al detalle en cada componente.",
          siteUrl: "https://ecommerce-woad-psi.vercel.app/ecommerce",
          repoUrl: "https://github.com/josecoronel20/ecommerce",
          isFinished: true,
          projectObjective:
            "El objetivo de este proyecto fue crear un ecommerce básico que permita a los usuarios navegar, seleccionar productos y realizar compras de manera sencilla. Se diseñó una estructura clara para mostrar los productos, gestionar el carrito de compras y realizar pagos. El enfoque principal fue asegurar una experiencia de usuario fluida y fácil de usar, manteniendo una arquitectura escalable para futuras mejoras.",
          details: {
            planningProcess: [
              {
                title: "Arquitectura de la información",
                description:
                  "Comencé delineando la estructura del ecommerce utilizando un archivo TXT, identificando las secciones clave como 'Inicio', 'Productos', 'Ofertas' y 'Nueva colección'. Esta etapa me permitió visualizar la jerarquía de información y asegurar una navegación intuitiva, facilitando el acceso a cada sección de forma fluida.",
                imageUrl: imgTxt2,
              },
              {
                title: "Diseño visual",
                description:
                  "La fase de diseño se centró en crear una identidad visual atractiva y coherente para la tienda online. Tras explorar varias paletas de colores, decidí optar por tonos suaves y elegantes que destacan los productos sin abrumar al visitante. La meta era lograr un entorno visual que invite a explorar y facilite la conversión.",
                imageUrl: imgdesign2,
              },
              {
                title: "Planificación de funcionalidades",
                description:
                  "Para estructurar las funcionalidades del ecommerce, creé un diagrama que contemplaba aspectos como el carrusel de productos y la gestión del carrito de compras. En lugar de presentar varios productos a la vez, decidí centrarme en la experiencia del usuario al mostrar uno destacado. También incorporé un componente para el carrito, implementando un contexto global que mejora la interacción del usuario con el sitio.",
                imageUrl: imgfeatures2,
              },
            ],

            mainFeatures: [
              {
                title: "Carrusel",
                description:
                  "Esta sección está diseñada para que los usuarios exploren los productos destacados de manera rápida y sencilla. Su objetivo es dar un primer vistazo a las cards de los productos y agregar una funcionalidad sencilla pra poder explorarlos",
              },
              {
                title: "Carrito de compras",
                description:
                  "He implementado un carrito de compras que utiliza un contexto global para gestionar los productos seleccionados por el usuario. Este carrito permite visualizar los artículos agregados, editar cantidades y ver precios actualizados en tiempo real. Los usuarios pueden revisar el total antes de proceder al checkout, donde ingresan sus datos para completar la transacción. Al finalizar, el sistema simula la compra y muestra un mensaje de confirmación, mejorando así la experiencia de compra en línea.",
              },
              {
                title: "filtrado por url",
                description:
                  "Gracias a las funcionalidades de Next.js, implementé filtros de productos a través de la URL. Al incluir una categoría en la misma, se filtran automáticamente los productos correspondientes en la pantalla. Además, utilicé un enfoque similar para mostrar los artículos que coinciden con el texto ingresado en el componente de búsqueda, lo que facilita a los usuarios encontrar lo que buscan de manera rápida y eficiente.",
              },
            ],
            issues: {
              title: "PRINCIPALES PROBLEMAS ENFRENTADOS",
              issueList: [
                {
                  title: "filtrado de productos",
                  description:
                    "Uno de los desafíos en el desarrollo del ecommerce fue implementar un sistema de filtrado efectivo para los productos. Utilicé las capacidades de Next.js, en particular las carpetas dinámicas, para gestionar los filtros a través de la URL. Esto permite que, al incluir una categoría en la URL, se rendericen automáticamente los productos correspondientes, facilitando así la navegación. Además, implementé una barra de búsqueda que actualiza la URL y muestra los productos que coinciden con el texto ingresado. Esta combinación de técnicas mejora notablemente la experiencia del usuario al buscar y filtrar opciones en el sitio.",
                },
                {
                  title: "componente de filtro",
                  description:
                    "Intenté implementar un componente de filtrado en la página que muestra todos los productos, lo que presentó varios desafíos. Tuve que considerar múltiples parámetros para filtrar los productos ya mostrados. Por ejemplo, al ajustar el parámetro de precios, se generaba un renderizado infinito. Para solucionar esto, añadí una variable booleana que permitía regenerar el valor del input de precio cada vez que era verdadera. Así, al cambiar el valor del input, la variable se establecía automáticamente en falso, excepto en algunos casos específicos, evitando así el problema del renderizado infinito y mejorando la funcionalidad del filtrado.",
                },
                {
                  title:
                    "Comienzo de utilización de typescript,next y jest con testing-library",
                  description:
                    "El desarrollo del ecommerce me presentó el emocionante desafío de integrar por primera vez TypeScript, Next.js y Jest con Testing Library en un solo proyecto. A pesar de ser un novato en estas tecnologías, logré aplicar sus características de manera básica pero efectiva. TypeScript me permitió implementar un tipado estático, lo que mejoró la calidad del código y facilitó la detección temprana de errores. Next.js fue fundamental para optimizar la estructura del proyecto y mejorar la navegación mediante rutas dinámicas, mientras que Jest, junto con Testing Library, me proporcionó las herramientas necesarias para crear pruebas unitarias basicas, asegurando que cada componente funcionara como se esperaba. Este proceso no solo enriqueció mi aprendizaje, sino que también me ayudó a desarrollar un enfoque más organizado y confiable en mis proyectos de desarrollo web.",
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

                imageUrl: null,
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
                  "Routing",
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
                title: "Redux",
                color: "#764ABC",
                iconWhite: iconReduxWhite,
                iconColor: iconReduxColor,
                level: "Basic",
                mainTopics: ["State Management", "Actions", "Reducers"],
                mainProjects: [""],
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
                  "Ecommerce",
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
                mainProjects: ["Ecommerce"],
              },
            ],
          },
          {
            title: "TOOLS",
            list: [
              {
                id: 9,
                title: "ChatGPT",
                color: "#6C3F9D",
                iconWhite: iconChatGptWhite,
                iconColor: iconChatGptColor,
                level: "Advanced",
                mainTopics: [
                  "Assistance in code development",
                  "Idea generation and problem-solving",
                  "Automation of repetitive tasks",
                  "Customization of responses based on project needs",
                ],
                mainProjects: [
                  "personal portfolio",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 10,
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
                id: 11,
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
                id: 12,
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
                ],
                mainProjects: [
                  "personal portfolio",
                  "Ecommerce",
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
                ],
                mainProjects: [
                  "personal portfolio",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 15,
                title: "State Management",
                color: "#6A1B9A",
                level: "Basic",
                mainTopics: [
                  "useState",
                  "useEffect",
                  "Redux (learning in progress)",
                ],
                mainProjects: [
                  "personal portfolio",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 16,
                title: "API Consumption",
                color: "#5C6BC0",
                level: "Intermediate",
                mainTopics: ["fetch", "axios", "handling loading/errors"],
                mainProjects: [""],
              },
              {
                id: 17,
                title: "Version Control (Git)",
                color: "#F4511E",
                level: "Intermediate",
                mainTopics: ["Basic commits", "Branches", "Merge to main"],
                mainProjects: [
                  "personal portfolio",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 18,
                title: "Testing (learning)",
                color: "#9E9D24",
                level: "Basic",
                mainTopics: ["Jest", "Testing Library", "Simple unit tests"],
                mainProjects: ["Ecommerce"],
              },
              {
                id: 19,
                title: "Routing in SPA",
                color: "#C62828",
                level: "Basic",
                mainTopics: [
                  "React Router",
                  "Simple routes",
                  "Page navigation",
                ],
                mainProjects: [
                  "personal portfolio",
                  "Ecommerce",
                  "Arenados Lucho",
                ],
              },
              {
                id: 20,
                title: "Best Practices",
                color: "#6D4C41",
                level: "Basic",
                mainTopics: [
                  "Clean code",
                  "Component separation",
                  "Logic reuse",
                ],
                mainProjects: [
                  "personal portfolio",
                  "Ecommerce",
                  "Arenados Lucho",
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
            "redux",
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
          title: "Ecommerce",
          techs: [
            "html",
            "css",
            "react",
            "typescript",
            "next",
            "git",
            "github",
            "tailwind",
            "jest",
            "testing-library",
            "npm",
            "javascript",
          ],
          description:
            "This fictitious ecommerce project offers an online shopping experience, covering everything from initial planning to final execution. It uses React and Next.js in a basic way to optimize performance and ensure a responsive design that facilitates navigation on mobile and desktop devices. Basic TypeScript is also incorporated for better typing, and basic unit tests are conducted to ensure the functionality of the project. The visual design is inspired by prototypes created in Figma, emphasizing attention to detail in each component.",
          siteUrl: "https://ecommerce-woad-psi.vercel.app/ecommerce",
          repoUrl: "https://github.com/josecoronel20/ecommerce",
          isFinished: true,
          projectObjective:
            "The goal of this project was to create a basic ecommerce site where users could browse, select products, and make purchases easily. A clear structure was designed to display products, manage the shopping cart, and make payments. The main focus was to ensure a smooth and user-friendly experience, while maintaining a scalable architecture for future improvements.",
          details: {
            planningProcess: [
              {
                title: "Information Architecture",
                description:
                  "I began by outlining the structure of the ecommerce site using a TXT file, identifying key sections like 'Home', 'Products', 'Offers', and 'New Collection'. This stage helped me visualize the information hierarchy and ensured intuitive navigation, making it easy to access each section smoothly.",
                imageUrl: imgTxt2,
              },
              {
                title: "Visual Design",
                description:
                  "The design phase focused on creating an attractive and consistent visual identity for the online store. After exploring various color palettes, I decided to opt for soft, elegant tones that highlight the products without overwhelming the visitor. The goal was to create a visual environment that invites exploration and facilitates conversion.",
                imageUrl: imgdesign2,
              },
              {
                title: "Feature Planning",
                description:
                  "To structure the features of the ecommerce site, I created a diagram that included aspects like the product carousel and shopping cart management. Instead of showing several products at once, I decided to focus on the user experience by displaying one featured product. I also incorporated a cart component, using a global context to enhance user interaction with the site.",
                imageUrl: imgfeatures2,
              },
            ],
            mainFeatures: [
              {
                title: "Carousel",
                description:
                  "This section is designed to allow users to quickly and easily explore featured products. Its main goal is to give a first glance at the product cards and add a simple functionality for users to explore them.",
              },
              {
                title: "Shopping Cart",
                description:
                  "I implemented a shopping cart that uses a global context to manage products selected by the user. This cart allows users to view added items, edit quantities, and see updated prices in real-time. Users can review the total before proceeding to checkout, where they enter their details to complete the transaction. After finishing, the system simulates the purchase and shows a confirmation message, enhancing the online shopping experience.",
              },
              {
                title: "URL Filtering",
                description:
                  "Thanks to Next.js features, I implemented product filters via the URL. By adding a category in the URL, the corresponding products are automatically filtered on the screen. I also used a similar approach to display items that match the text entered in the search component, making it easier for users to quickly and efficiently find what they're looking for.",
              },
            ],
            issues: {
              title: "MAIN CHALLENGES FACED",
              issueList: [
                {
                  title: "Product Filtering",
                  description:
                    "One of the challenges in developing the ecommerce site was implementing an effective product filtering system. I used Next.js capabilities, particularly dynamic folders, to manage filters through the URL. This allows for products to be automatically rendered when a category is included in the URL, improving navigation. Additionally, I implemented a search bar that updates the URL and displays products matching the entered text. This combination of techniques greatly enhances the user experience when searching and filtering options on the site.",
                },
                {
                  title: "Filter Component",
                  description:
                    "I tried implementing a filter component on the page that shows all products, which presented several challenges. I had to consider multiple parameters to filter the products already displayed. For instance, when adjusting the price parameter, an infinite render occurred. To solve this, I added a boolean variable that allowed the input value to regenerate every time it was true. This way, when the input value changed, the variable was automatically set to false, except in some specific cases, preventing the infinite render issue and improving the filtering functionality.",
                },
                {
                  title:
                    "Beginning Use of TypeScript, Next.js, and Jest with Testing Library",
                  description:
                    "The development of the ecommerce site presented the exciting challenge of integrating TypeScript, Next.js, and Jest with Testing Library for the first time in a single project. Despite being a beginner with these technologies, I applied their features in a basic but effective way. TypeScript allowed me to implement static typing, improving code quality and helping to catch errors early. Next.js was essential for optimizing the project structure and improving navigation with dynamic routes, while Jest and Testing Library provided the tools needed to create basic unit tests, ensuring each component worked as expected. This process not only enriched my learning but also helped me develop a more organized and reliable approach to my web development projects.",
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
                imageUrl: null,
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
                    "Another challenge was improving search engine ranking. The initial content was scarce and poorly optimized. SEO improvement started by applying ChatGPT suggestions to rewrite texts with relevant keywords, but the process didn’t stop there: aspects such as proper use of semantic tags, image optimization (WebP, adequate compression), and header structure were gradually improved, all based on analysis results from online performance tools like PageSpeed Insights.",
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
      title: "POSTS DE MI BLOG PERSONAL",
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
            "The process began with a thorough update of my LinkedIn profile. I made sure to highlight my key skills like React, TypeScript, Git, and the best practices I've learned throughout my projects. I also cleaned up my contact list, removing irrelevant connections and networking with professionals in the industry to expand my opportunities.\n\nSimultaneously, I completed my portfolio, a crucial element to showcase my abilities to potential employers. In it, I presented three standout projects that not only reflect my technical skill but also my focus on code quality and structure. These projects, combined with a clean and professional design, provide visitors with a clear view of what I am capable of as a web developer.\n\nOf course, the job search didn’t stop here. Although my portfolio is now complete, I continue to develop new projects and improve existing ones. Constant practice is key to staying up-to-date and demonstrating my ongoing progress. Therefore, my goal is to stay motivated, apply to multiple job offers, and perfect every aspect of my profile and projects to stand out in the competitive world of web development.",
          conclusion:
            "The active job search is not just about sending resumes; it’s a continuous process of preparation. By updating my LinkedIn profile, finalizing my portfolio, and continuing to work on new projects, I feel increasingly prepared to face the interviews and challenges ahead. My goal is to find a place where I can continue growing professionally, learning from other developers, and contributing to projects that truly excite me.",
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
            "Interview preparation is just as important as technical skill, and I didn’t want to miss the opportunity to improve in this area. I started looking for resources on how to face job interviews in the tech sector, focusing on the most common and specific questions for web developers. To put what I had learned into practice, I did question-and-answer exercises, simulating real interview situations. I also found interview simulation videos with other candidates, which allowed me to study their answers and see how I could improve mine.\n\nThe most interesting part of my preparation was using ChatGPT as a virtual recruiter. I asked it to simulate different types of interviews, from technical interviews with coding questions to behavioral interviews, where it asked me about my past experiences, strengths and weaknesses, and how I adapt to working in a team. These simulations helped me anticipate potential questions and practice my responses in a safe environment, which gave me more confidence.\n\nThroughout this process, I also focused on improving my ability to communicate my experiences and technical knowledge clearly and concisely. An interview is not just about what you know, but how you communicate it. That's why I focused on presenting my skills and projects in a structured way, without rambling, always highlighting the most relevant achievements for each position I apply for.",
          conclusion:
            "Interview preparation doesn’t have to be something daunting; it’s an opportunity to show the best of yourself. By training with simulations, watching interview examples, and using tools like ChatGPT, I feel much more prepared to face any interview that comes my way. Additionally, each simulation allowed me to identify areas for improvement and refine my answers, bringing me closer to my goal of landing my first job as a web developer. Constant practice is key, and I will continue to prepare to make the most of every opportunity that comes my way.",
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
