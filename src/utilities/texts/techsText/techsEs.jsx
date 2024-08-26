import {
  iconHtmlColor,
  iconHtmlWhite,
  iconCssWhite,
  iconCssColor,
  iconJsWhite,
  iconJsColor,
  iconReactColor,
  iconReactWhite,
  iconGitColor,
  iconGitWhite,
  iconGithub,
  iconNpmColor,
  iconNpmWhite,
  iconReduxColor,
  iconReduxWhite,
  iconTailwindColor,
  iconTailwindWhite,
  iconWebpackColor,
  iconWebpackWhite,
  iconTsColor,
  iconTsWhite,
  iconVsCodeWhite,
  iconVsCodeColor,
} from "../../Icons";

const techTextEs = {
  technologies: [
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
      mainProjects: ["portfolio personal", "sitio de e-commerce"],
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
      mainProjects: ["portfolio personal", "sitio de e-commerce"],
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
      mainProjects: ["blog de tecnología", "aplicación de tareas"],
    },
    {
      title: "TypeScript",
      color: "#3178C6",
      iconWhite: iconTsWhite,
      iconColor: iconTsColor,
      level: "Básico",
      mainTopics: [
        "Tipos estáticos",
        "Interfaces",
        "Tipos genéricos",
        "Decorators",
      ],
      mainProjects: ["aplicación de tareas"],
    },
  ],
  frameworksLibraries: [
    {
      title: "React.js",
      color: "#61DAFB",
      iconWhite: iconReactWhite,
      iconColor: iconReactColor,
      level: "Intermedio",
      mainTopics: [
        "Componentes",
        "Hooks",
        "State Management",
        "React Router",
        "JSX",
      ],
      mainProjects: ["portfolio personal", "blog de tecnología"],
    },
    {
      title: "Redux",
      color: "#764ABC",
      iconWhite: iconReduxWhite,
      iconColor: iconReduxColor,
      level: "Intermedio",
      mainTopics: [
        "State Management",
        "Actions",
        "Reducers",
        "Middleware",
        "Redux Toolkit",
      ],
      mainProjects: [
        "Gestión de estado en una aplicación de comercio electrónico",
        "Aplicación de tareas con gestión de estado global",
      ],
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
  ],
  tools: [
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
        "Rebase",
      ],
      mainProjects: ["portfolio personal", "blog de tecnología"],
    },
    {
      title: "GitHub",
      color: "#181717",
      iconWhite: iconGithub,
      iconColor: iconGithub,
      level: "Intermedio",
      mainTopics: [
        "Pull requests",
        "Colaboración en proyectos",
        "GitHub Actions",
      ],
      mainProjects: ["portfolio personal", "sitio de e-commerce"],
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
      mainProjects: ["blog de tecnología", "aplicación de tareas"],
    },
    {
      title: "Webpack",
      color: "#8DD6F9",
      iconWhite: iconWebpackWhite,
      iconColor: iconWebpackColor,
      level: "Básico",
      mainTopics: ["Configuración básica", "Loaders", "Plugins"],
      mainProjects: [],
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
      mainProjects: ["portfolio personal", "aplicación de tareas"],
    },
  ],
  conceptsMethodologies: [
    {
      title: "Responsive Design",
      color: "#34A853",

      level: "Intermedio",
      mainTopics: ["Media queries", "Diseño móvil primero", "Flexbox y Grid"],
      mainProjects: ["portfolio personal", "sitio de e-commerce"],
    },
    {
      title: "Componentes Reutilizables",
      color: "#007BFF",

      level: "Intermedio",
      mainTopics: [
        "Diseño de componentes",
        "Props y estados",
        "Composición de componentes",
      ],
      mainProjects: ["portfolio personal", "blog de tecnología"],
    },
    {
      title: "State Management",
      color: "#6A1B9A",

      level: "Intermedio",
      mainTopics: ["React useState/useReducer", "Redux", "Vuex"],
      mainProjects: ["aplicación de tareas", "blog de tecnología"],
    },
    {
      title: "AJAX y Fetch API",
      color: "#FF5722",

      level: "Intermedio",
      mainTopics: ["Peticiones HTTP", "Promesas", "Manejo de errores"],
      mainProjects: ["blog de tecnología", "sitio de e-commerce"],
    },
    {
      title: "APIs RESTful",
      color: "#FFC107",

      level: "Intermedio",
      mainTopics: [
        "Principios de REST",
        "CRUD",
        "Autenticación y autorización",
      ],
      mainProjects: ["aplicación de tareas", "sitio de e-commerce"],
    },
    {
      title: "Cross-Browser Compatibility",
      color: "#607D8B",

      level: "Básico",
      mainTopics: [
        "Pruebas en diferentes navegadores",
        "Polyfills",
        "Herramientas de desarrollo",
      ],
      mainProjects: [],
    },
    {
      title: "SEO Básico",
      color: "#2196F3",

      level: "Básico",
      mainTopics: [
        "Optimización de contenido",
        "Etiquetas meta",
        "Performance",
      ],
      mainProjects: ["portfolio personal", "blog de tecnología"],
    },
    {
      title: "Web Accessibility (a11y)",
      color: "#9C27B0",

      level: "Básico",
      mainTopics: [
        "Teclado accesible",
        "Etiquetas aria",
        "Contraste de colores",
      ],
      mainProjects: [],
    },
    {
      title: "Testing",
      color: "#FFEB3B",

      level: "Básico",
      mainTopics: ["Unit tests", "Jest", "React Testing Library"],
      mainProjects: [],
    },
    {
      title: "Agile/Scrum",
      color: "#795548",

      level: "Básico",
      mainTopics: ["Sprint Planning", "Daily Standups", "Sprint Review"],
      mainProjects: [],
    },
    {
      title: "Version Control with Git",
      color: "#F44336",

      level: "Intermedio",
      mainTopics: ["Branches", "Pull requests", "Merge conflicts"],
      mainProjects: ["portfolio personal", "aplicación de tareas"],
    },
    {
      title: "Continuous Integration/Continuous Deployment (CI/CD)",
      color: "#00BCD4",

      level: "Básico",
      mainTopics: ["Pipelines", "Automated testing", "Deployment"],
      mainProjects: [],
    },
  ],
};

export default techTextEs;
