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
          imgAlt: "Hero de hombre arenando",
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
                mainProjects: ["portfolio personal"],
              },
              {
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
                mainProjects: ["portfolio personal"],
              },
              {
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
                mainProjects: ["portfolio personal"],
              },
              {
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
                mainProjects:["portfolio personal"]
              },
            ],
          },
          {
            title: "FRAMEWORKS Y LIBRERÍAS",
            list: [
              {
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
                mainProjects: ["portfolio personal"],
              },
              {
                title: "Redux",
                color: "#764ABC",
                iconWhite: iconReduxWhite,
                iconColor: iconReduxColor,
                level: "Básico",
                mainTopics: ["State Management", "Actions", "Reducers"],
                mainProjects: ["portfolio personal"],
              },
              {
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
                mainProjects: ["portfolio personal"],
              },

              {
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
                mainProjects: ["portfolio personal", "ecommerce project"],
              },
            ],
          },
          {
            title: "HERRAMIENTAS",
            list: [
              {
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
                mainProjects: ["portfolio personal"],
              },
              {
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
                mainProjects: ["portfolio personal"],
              },

              {
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
                mainProjects: ["portfolio personal"],
              },

              {
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
                mainProjects: ["portfolio personal"],
              },
            ],
          },
          {
            title: "CONCEPTOS Y METODOLOGÍAS",
            list: [
              {
                title: "Diseño responsivo",
                color: "#34A853",
                level: "Intermedio",
                mainTopics: [
                  "Media queries",
                  "Diseño mobile-first",
                  "Flexbox y Grid",
                ],
                mainProjects: ["Portfolio Personal"],
              },
              {
                title: "Componentes reutilizables",
                color: "#007BFF",
                level: "Intermedio",
                mainTopics: [
                  "Uso de props",
                  "Estados básicos",
                  "Organización de componentes",
                ],
                mainProjects: ["Portfolio Personal"],
              },
              {
                title: "Manejo de estados",
                color: "#6A1B9A",
                level: "Básico",
                mainTopics: [
                  "useState",
                  "useEffect",
                  "Redux (en proceso de aprendizaje)",
                ],
                mainProjects: ["Ecommerce"],
              },
              {
                title: "Consumo de APIs",
                color: "#5C6BC0",
                level: "Intermedio",
                mainTopics: ["fetch", "axios", "manejo de loading/errores"],
                mainProjects: ["Ecommerce"],
              },
              {
                title: "Control de versiones (Git)",
                color: "#F4511E",
                level: "Intermedio",
                mainTopics: ["Commits básicos", "Branches", "Merge a main"],
                mainProjects: ["Portfolio Personal", "Ecommerce"],
              },
              {
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
                title: "Ruteo en SPA",
                color: "#C62828",
                level: "Básico",
                mainTopics: [
                  "React Router",
                  "Rutas simples",
                  "Navegación entre páginas",
                ],
                mainProjects: ["Ecommerce"],
              },
              {
                title: "Buenas prácticas",
                color: "#6D4C41",
                level: "Básico",
                mainTopics: [
                  "Código limpio",
                  "Separación por componentes",
                  "Reutilización de lógica",
                ],
                mainProjects: ["Portfolio Personal"],
              },
            ],
          },
        ],
      },
    },
    projects: {
      title: "PROYECTOS",
      buttonText:{
        seeProject:"VER PROYECTO",
        seeDetails:"DETALLES",
        seeRepo:"REPO"
      },
      list: [
        {
          id: 1,
          imgDesktopUrl:
            "public/img/projectsImg/portfolio/screenShotDesktop.png",
          imgDesktopAlt:
            "captura de pantalla de vista de escritorio de página web de portfolio personal",
          imgMobileUrl:
            "../../../public/imgprojects/Imgportfolio/screenShotDesktop.png",

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
          details: {
            planningProcess: [
              {
                title: "Arquitectura de la información",
                description:
                  "Inicié con un archivo TXT para esbozar las secciones principales: 'Inicio', 'Proyectos', 'Blog', y 'Contacto'. Desarrollé cada sección y sus subsecciones progresivamente, creando un esquema claro y relevante.",
                imageUrl:
                  "../../../public/imgprojects/Imgportfolio/screenShotDesktop.png",
              },
              {
                title: "Diseño visual",
                description:
                  "El diseño visual buscó reflejar mi identidad personal y profesional. En un principio se decidió por una paleta de colores llamativa utilizando tonos violetas que siento que es un color que me representa bastante pero finalmente me decidí por una paleta clara y sencilla que asegura que la información relevante sea el foco, facilitando una comunicación visual efectiva sin distracciones.",
                imageUrl:
                  "../../../public/imgprojects/Imgportfolio/screenShotDesktop.png",
              },
              {
                title: "Planificación de funcionalidades",
                description:
                  "Desarrollé un diagrama para planificar funcionalidades, como el carrusel. Inicialmente, pensé en mostrar tres proyectos del JSON, pero decidí mostrar uno solo basado en el índice del JSON. También planeé un componente 'translate', lo que llevó a usar un contexto global y explorar Redux.",
                imageUrl:
                  "../../../public/imgprojects/Imgportfolio/screenShotDesktop.png",
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
          imgDesktopUrl:
            "public/img/projectsImg/ecommerce/Ecommerce-Desktop.png",
          imgDesktopAlt:
            "captura de pantalla de vista de escritorio de proyecto ecommerce",
          imgMobileUrl:
            "../../../public/imgprojects/Imgportfolio/screenShotDesktop.png",
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
          details: {
            planningProcess: [
              {
                title: "Arquitectura de la información",
                description:
                  "Comencé delineando la estructura del ecommerce utilizando un archivo TXT, identificando las secciones clave como 'Inicio', 'Productos', 'Ofertas' y 'Nueva colección'. Esta etapa me permitió visualizar la jerarquía de información y asegurar una navegación intuitiva, facilitando el acceso a cada sección de forma fluida.",
                imageUrl:
                  "../../../public/imgprojects/Imgportfolio/screenShotDesktop.png",
              },
              {
                title: "Diseño visual",
                description:
                  "La fase de diseño se centró en crear una identidad visual atractiva y coherente para la tienda online. Tras explorar varias paletas de colores, decidí optar por tonos suaves y elegantes que destacan los productos sin abrumar al visitante. La meta era lograr un entorno visual que invite a explorar y facilite la conversión.",
                imageUrl:
                  "../../../public/imgprojects/Imgportfolio/screenShotDesktop.png",
              },
              {
                title: "Planificación de funcionalidades",
                description:
                  "Para estructurar las funcionalidades del ecommerce, creé un diagrama que contemplaba aspectos como el carrusel de productos y la gestión del carrito de compras. En lugar de presentar varios productos a la vez, decidí centrarme en la experiencia del usuario al mostrar uno destacado. También incorporé un componente para el carrito, implementando un contexto global que mejora la interacción del usuario con el sitio.",
                imageUrl:
                  "../../../public/imgprojects/Imgportfolio/screenShotDesktop.png",
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
      ],
    },
    blog: {
      title: "POSTS DE MI BLOG PERSONAL",
      blogList: [
        {
          id: 1,
          title: "Construyendo Fundamentos Sólidos",
          image:
            "../../../public/imgprojects/Imgportfolio/screenShotDesktop.png",
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
      ],
    },
    footer: {
      title: "Navegación rápida",
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
          imgAlt: "Hero de hombre arenando",
        },
        title: {
          beforeHiglight: "I'm ",
          higlight: "Jose Maria Coronel",
        },
        subtitle: {
          beforeHiglight: "Frontend developer specialized in ",
          higlight: "React",
        },
        cta: "VIEW PROJECTS",
      },
      lastProyects: {
        title: "LATEST PROJECTS",
      },
      aboutMe: {
        title: "ABOUT ME",
        subtitle:
          "I'm José María Coronel, a web developer specialized in React. I'm 24 years old and currently living in Buenos Aires, Argentina. My focus is on building clean and efficient interfaces.",
        sections: {
          myBackground: {
            title: "MY BACKGROUND",
            text: "I discovered programming out of curiosity and became self-taught in front-end technologies and tools, using books, official documentation, online courses, videos, and more. I continue to expand my skills through constant practice.",
          },
          myFocus: {
            title: "FOCUS ON QUALITY AND ORGANIZATION",
            text: "I focus on writing clean and efficient code, prioritizing clarity, scalability, and maintainability. I believe that neat development is key to building solid solutions and making teamwork easier.",
          },
          tools: {
            title: "TOOLS & DESIGN",
            text: "I use Figma to design and prototype my projects, relying on a solid design foundation that helps me make consistent and functional decisions. I prioritize a clean and minimalist style that enhances the user experience.",
          },
        },
      },

      techsAndSkills: {
        title: "TECHNOLOGIES AND SKILLS",
        sections: {
          techs: {
            title: "TECHNOLOGIES",
            list: [
              {
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
                mainProjects: ["personal portfolio"],
              },
              {
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
                mainProjects: ["personal portfolio"],
              },
              {
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
                  "ES6 modules",
                ],
                mainProjects: ["personal portfolio"],
              },
              {
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
                mainProjects: ["personal portfolio"],
              },
            ],
          },
          frameworks: {
            title: "FRAMEWORKS & LIBRARIES",
            list: [
              {
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
                mainProjects: ["personal portfolio"],
              },
              {
                title: "Redux",
                color: "#764ABC",
                iconWhite: iconReduxWhite,
                iconColor: iconReduxColor,
                level: "Basic",
                mainTopics: ["State management", "Actions", "Reducers"],
                mainProjects: ["personal portfolio"],
              },
              {
                title: "Tailwind",
                color: "#38B2AC",
                iconWhite: iconTailwindWhite,
                iconColor: iconTailwindColor,
                level: "Intermediate",
                mainTopics: [
                  "Utility-first CSS",
                  "Theme customization",
                  "Responsive design",
                ],
                mainProjects: ["personal portfolio"],
              },
              {
                title: "Jest & Testing Library",
                color: "#99424F",
                iconWhite: iconJestWhite,
                iconColor: iconJestColor,
                level: "Basic",
                mainTopics: [
                  "Writing basic unit tests for components",
                  "Using event simulations (click, change)",
                  "Component render testing",
                  "Verifying props and state in tests",
                ],
                mainProjects: ["personal portfolio", "ecommerce project"],
              },
            ],
          },
          tools: {
            title: "TOOLS",
            list: [
              {
                title: "ChatGPT",
                color: "#6C3F9D",
                iconWhite: iconChatGptWhite,
                iconColor: iconChatGptColor,
                level: "Advanced",
                mainTopics: [
                  "Code development assistance",
                  "Idea generation and problem-solving",
                  "Automation of repetitive tasks",
                  "Response customization based on project needs",
                ],
                mainProjects: ["personal portfolio"],
              },
              {
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
                mainProjects: ["personal portfolio"],
              },
              {
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
                mainProjects: ["personal portfolio"],
              },
              {
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
                mainProjects: ["personal portfolio"],
              },
            ],
          },
          conceptsAndMethodologies: {
            title: "CONCEPTS & METHODOLOGIES",
            list: [
              {
                title: "Responsive Design",
                color: "#34A853",
                level: "Intermediate",
                mainTopics: [
                  "Media queries",
                  "Mobile-first design",
                  "Flexbox and Grid",
                ],
                mainProjects: ["Personal Portfolio"],
              },
              {
                title: "Reusable Components",
                color: "#007BFF",
                level: "Intermediate",
                mainTopics: [
                  "Using props",
                  "Basic state",
                  "Component organization",
                ],
                mainProjects: ["Personal Portfolio"],
              },
              {
                title: "State Management",
                color: "#6A1B9A",
                level: "Basic",
                mainTopics: [
                  "useState",
                  "useEffect",
                  "Redux (currently learning)",
                ],
                mainProjects: ["Ecommerce"],
              },
              {
                title: "API Consumption",
                color: "#5C6BC0",
                level: "Intermediate",
                mainTopics: ["fetch", "axios", "loading/error handling"],
                mainProjects: ["Ecommerce"],
              },
              {
                title: "Version Control (Git)",
                color: "#F4511E",
                level: "Intermediate",
                mainTopics: ["Basic commits", "Branches", "Merging to main"],
                mainProjects: ["Personal Portfolio", "Ecommerce"],
              },
              {
                title: "Testing (in progress)",
                color: "#9E9D24",
                level: "Basic",
                mainTopics: ["Jest", "Testing Library", "Simple unit tests"],
                mainProjects: ["Ecommerce"],
              },
              {
                title: "Routing in SPA",
                color: "#C62828",
                level: "Basic",
                mainTopics: [
                  "React Router",
                  "Simple routes",
                  "Page navigation",
                ],
                mainProjects: ["Ecommerce"],
              },
              {
                title: "Best Practices",
                color: "#6D4C41",
                level: "Basic",
                mainTopics: [
                  "Clean code",
                  "Component separation",
                  "Logic reusability",
                ],
                mainProjects: ["Personal Portfolio"],
              },
            ],
          },
        },
      },
    },
    projects: {
      title: "PROJECTS",
      list: [
        {
          id: 1,
          imgDesktopUrl:
            "../../../public/imgprojects/Imgportfolio/screenShotDesktop.png",
          imgDesktopAlt:
            "screenshot of desktop view of personal portfolio website",
          imgMobileUrl:
            "../../../public/imgprojects/Imgportfolio/screenShotDesktop.png",
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
            "This personal portfolio presents a collection of projects and web development skills. It stands out for its focus on providing detailed and relevant information about each project, including initial planning, visual design, goals achieved, and more.",
          siteUrl: "https://josecoronel20.github.io/portfolioPersonal/",
          repoUrl: "https://github.com/josecoronel20/portfolioPersonal",
          isFinished: true,
          details: {
            planningProcess: [
              {
                title: "Information Architecture",
                description:
                  "I started with a TXT file to outline the main sections: 'Home', 'Projects', 'Blog', and 'Contact'. I developed each section and its subsections progressively, creating a clear and relevant schema.",
                imageUrl:
                  "../../../public/imgprojects/Imgportfolio/screenShotDesktop.png",
              },
              {
                title: "Visual Design",
                description:
                  "The visual design aimed to reflect my personal and professional identity. Initially, I chose a striking color palette with violet tones, which I felt represented me well. However, I ultimately decided on a simpler and cleaner palette to ensure that relevant information would be the focus, enabling effective visual communication without distractions.",
                imageUrl:
                  "../../../public/imgprojects/Imgportfolio/screenShotDesktop.png",
              },
              {
                title: "Feature Planning",
                description:
                  "I developed a diagram to plan features such as the carousel. Initially, I thought about displaying three projects from the JSON, but I decided to display just one based on the JSON index. I also planned a 'translate' component, which led to using a global context and exploring Redux.",
                imageUrl:
                  "../../../public/imgprojects/Imgportfolio/screenShotDesktop.png",
              },
            ],
            mainFeatures: [
              {
                title: "Carousel",
                description:
                  "This section is designed for users to quickly and easily explore my projects. Its main goal is to capture attention by presenting an interactive interface that highlights my work right from the first glance.",
              },
              {
                title: "Technology Mapping",
                description:
                  "In the technologies section, representative icons for each technology are displayed. Hovering over an icon changes its appearance, and clicking on it opens a modal window. Implementing this functionality required complex logic to render each icon with its respective features, based on information mapped from a JSON containing details of each technology.",
              },
              {
                title: "Modal Window",
                description:
                  "In the technologies section, each technology is linked to a popup ('Modal'). Clicking on any technology displays information about my skill level and a detailed section explaining the main topics and concepts I handle.",
              },
            ],
            issues: {
              title: "MAIN ISSUES ENCOUNTERED",
              issueList: [
                {
                  title: "Technology Icon Mapping",
                  description:
                    "When mapping each technology, it was necessary to implement hover logic and modal functionality individually for each icon. This was done to ensure that each feature operated specifically and correctly. If applied globally, it could lead to erratic and undesirable behavior when interacting with the icons.",
                },
                {
                  title: "Carousel",
                  description:
                    "In the first stage, the carousel was designed to be more visually striking, rendering three 'cards' and adding animations for navigation between them. However, after testing various options with unsatisfactory results, I decided to simplify the functionality. Now, the carousel shows only one 'card' at a time, but with animations that add dynamism and appeal, maintaining visual interest without complicating the implementation.",
                },
                {
                  title: "Starting to Apply What I Learned",
                  description:
                    "After developing web applications in a disorganized way with basic knowledge, I decided to improve my training through books, videos, and readings. This led me to adopt a more professional profile, better structuring my files, and using Git more effectively. I learned to compose projects in a modular way, reduce code with hooks, and manage development in separate branches to avoid mixing code and focus on each section individually.",
                },
              ],
            },
          },
        },
        {
          id: 2,
          imgDesktopUrl:
            "../../../public/imgprojects/Imgportfolio/screenShotDesktop.png",
          imgDesktopAlt: "screenshot of desktop view of ecommerce project",
          imgMobileUrl:
            "../../../public/imgprojects/Imgportfolio/screenShotDesktop.png",
          imgMobileAlt: "screenshot of mobile view of ecommerce project",
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
            "This fictional ecommerce project offers an online shopping experience, covering everything from initial planning to final execution. It uses React and Next.js in a basic way to optimize performance and ensure a responsive design that facilitates navigation on both mobile and desktop devices. Additionally, basic TypeScript is incorporated for better typing, and basic unit tests are performed to ensure the project's functionality. The visual design is inspired by prototypes created in Figma, with attention to detail in each component.",
          siteUrl: "https://ecommerce-woad-psi.vercel.app/ecommerce",
          repoUrl: "https://github.com/josecoronel20/ecommerce",
          isFinished: true,
          details: {
            planningProcess: [
              {
                title: "Information Architecture",
                description:
                  "I started by outlining the ecommerce structure using a TXT file, identifying key sections like 'Home', 'Products', 'Offers', and 'New Collection'. This step allowed me to visualize the information hierarchy and ensure intuitive navigation, making it easy to access each section smoothly.",
                imageUrl:
                  "../../../public/imgprojects/Imgportfolio/screenShotDesktop.png",
              },
              {
                title: "Visual Design",
                description:
                  "The design phase focused on creating an attractive and coherent visual identity for the online store. After exploring several color palettes, I decided on soft and elegant tones that highlight the products without overwhelming the visitor. The goal was to create a visual environment that invites exploration and facilitates conversion.",
                imageUrl:
                  "../../../public/imgprojects/Imgportfolio/screenShotDesktop.png",
              },
              {
                title: "Feature Planning",
                description:
                  "To structure the ecommerce features, I created a diagram that included aspects such as the product carousel and the shopping cart management. Instead of showing multiple products at once, I decided to focus on the user experience by displaying one featured product. I also incorporated a cart component, implementing a global context that enhances user interaction with the site.",
                imageUrl:
                  "../../../public/imgprojects/Imgportfolio/screenShotDesktop.png",
              },
            ],
            mainFeatures: [
              {
                title: "Carousel",
                description:
                  "This section is designed for users to quickly and easily explore featured products. Its purpose is to give an initial look at the product cards and add a simple functionality to allow users to browse them.",
              },
              {
                title: "Shopping Cart",
                description:
                  "I implemented a shopping cart that uses a global context to manage the products selected by the user. This cart allows users to view added items, edit quantities, and see updated prices in real-time. Users can review the total before proceeding to checkout, where they enter their details to complete the transaction. Once finished, the system simulates the purchase and displays a confirmation message, thus enhancing the online shopping experience.",
              },
              {
                title: "URL Filtering",
                description:
                  "Thanks to Next.js features, I implemented product filters through the URL. By including a category in the URL, the corresponding products are automatically filtered on the screen. I also used a similar approach to show items that match the text entered in the search component, making it easier for users to quickly and efficiently find what they're looking for.",
              },
            ],
            issues: {
              title: "MAIN ISSUES ENCOUNTERED",
              issueList: [
                {
                  title: "Product Filtering",
                  description:
                    "One of the challenges in developing the ecommerce project was implementing an effective product filtering system. I used Next.js capabilities, particularly dynamic folders, to manage filters through the URL. This allows products corresponding to a category to be automatically rendered when included in the URL, thus facilitating navigation. Additionally, I implemented a search bar that updates the URL and displays products that match the entered text. This combination of techniques significantly improves the user experience when searching and filtering options on the site.",
                },
                {
                  title: "Filter Component",
                  description:
                    "I tried implementing a filtering component on the page that shows all products, which presented several challenges. I had to consider multiple parameters to filter the products already displayed. For example, adjusting the price parameter led to infinite rendering. To solve this, I added a boolean variable that allowed me to regenerate the price input value every time it was true. This way, when the input value changed, the variable was automatically set to false, except in some specific cases, thus preventing the infinite rendering issue and improving the filtering functionality.",
                },
                {
                  title:
                    "Starting with TypeScript, Next.js, Jest, and Testing Library",
                  description:
                    "The development of the ecommerce project presented the exciting challenge of integrating TypeScript, Next.js, and Jest with Testing Library into a single project for the first time. Although I was a novice in these technologies, I managed to apply their features in a basic but effective way. TypeScript allowed me to implement static typing, improving code quality and facilitating early error detection. Next.js was essential for optimizing project structure and enhancing navigation with dynamic routes, while Jest, along with Testing Library, provided me with the necessary tools to create basic unit tests, ensuring each component worked as expected. This process not only enriched my learning but also helped me develop a more organized and reliable approach in my web development projects.",
                },
              ],
            },
          },
        },
      ],
    },
    blog: {
      title: "MY PERSONAL BLOG POSTS",
      blogList: [
        {
          id: 1,
          title: "Building Solid Foundations",
          image:
            "../../../public/imgprojects/Imgportfolio/screenShotDesktop.png",
          altImg: "Image of a post with a programmer studying",
          shortDescription:
            "When I moved to Portugal in April without a computer, I used books, videos, and online documentation to strengthen my web development knowledge. With 'Programming Fundamentals: Data Structures and Algorithms' and 'Eloquent JavaScript', I built a solid foundation. Eventually, I got a computer and applied what I learned to my first project: a personal portfolio.",
          description:
            "In April, when I moved without a computer, I faced the challenge of continuing my web development education. I took advantage of various resources, including books, videos, and online documentation, to build a solid programming foundation. With a computer finally available, I was able to apply what I learned in a practical project: developing my personal portfolio.",
          subtitle:
            "From Theory to Practice: How a Diverse Education Boosted My First Web Project",
          content:
            "When I moved to Portugal, I faced the challenge of continuing my education as a web developer. To overcome this limitation, I turned to various educational resources, including books, videos, and online documentation, to build a solid programming foundation. First, I delved into the book 'Programming Fundamentals: Data Structures and Algorithms', which provided me with a deep understanding of key concepts such as algorithms, control structures, and recursion. I also learned about linear data structures and got an introduction to non-linear data structures. Object-oriented programming (OOP) was another area of focus, where I explored concepts like encapsulation, inheritance, and polymorphism. Later, I read 'Eloquent JavaScript', which expanded my knowledge toward web development with JavaScript. This book covered JavaScript syntax, data types and structures, functions, and scope and closures. It also introduced me to objects and prototypes in JavaScript, asynchronous programming, DOM manipulation, event handling, and modularization and package management. I also explored functional programming concepts applied in JavaScript. With all this theoretical knowledge, I finally acquired a computer, which allowed me to dive deeper into React, focusing on componentization and custom Hooks, and put my learning into practice. I developed my first project, a personal portfolio, which consolidated my knowledge and demonstrated my ability to apply the concepts learned in a real-world environment. This experience highlights how a comprehensive and diverse education can facilitate a successful transition from theory to practice in web development.",
          conclusion:
            "The combination of theoretical studies and varied resources such as books, videos, and online documentation was key to building a solid foundation in web development. This thorough preparation allowed me to successfully tackle my first practical project. By applying the concepts learned in 'Programming Fundamentals: Data Structures and Algorithms' and 'Eloquent JavaScript', along with other educational resources, I was able to develop a personal portfolio that reflects both my education and my ability to implement what I learned. This experience emphasizes the importance of a well-rounded and well-grounded education to achieve an effective transition into professional practice.",
        },
      ],
    },
    footer: {
      title: "Quick navigation",
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
