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
  iconNpmColor,
  iconNpmWhite,
  iconReduxColor,
  iconReduxWhite,
  iconTailwindColor,
  iconTailwindWhite,
  iconVsCodeWhite,
  iconVsCodeColor,
  iconChatGptColor,
  iconChatGptWhite,
  iconJestWhite,
  iconJestColor,
  iconNextWhite,
  iconNextColor,
  iconTsWhite,
  iconTsColor
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
      mainProjects: ["portfolio personal", "ecommerce project"],
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
      mainProjects: ["portfolio personal"],
    },
    {
      title: "Redux",
      color: "#764ABC",
      iconWhite: iconReduxWhite,
      iconColor: iconReduxColor,
      level: "Básico",
      mainTopics: [
        "State Management",
        "Actions",
        "Reducers",
      ],
      mainProjects: [
        "portfolio personal",
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
    {
      title: "Next.js",
      color: "#000000", 
      iconWhite: iconNextWhite, 
      iconColor: iconNextColor, 
      level: "Básico",
      mainTopics: [
        "Uso de carpetas para enrutamiento dinámico",
        "Creación de páginas estáticas con el sistema de archivos",
        "Implementación de enlaces entre páginas con Link",
        "Configuración de rutas personalizadas básicas",
      ],
      mainProjects: ["portfolio personal", "ecommerce project"],
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
  tools: [
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
        "Personalización de respuestas según necesidades del proyecto"
      ],
      mainProjects: [
        "portfolio personal"
      ]
    }
,    
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
  conceptsMethodologies: [
    {
      title: "Diseño responsivo",
      color: "#34A853",

      level: "Intermedio",
      mainTopics: ["Media queries", "Diseño móvil primero", "Flexbox y Grid"],
      mainProjects: ["portfolio personal"],
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
      mainProjects: ["portfolio personal"],
    },
    {
      title: "Manejo de Estados",
      color: "#6A1B9A",

      level: "Intermedio",
      mainTopics: ["React useState/useReducer", "Redux"],
      mainProjects: ["portfolio personal"],
    },
  ],
};

export default techTextEs;
