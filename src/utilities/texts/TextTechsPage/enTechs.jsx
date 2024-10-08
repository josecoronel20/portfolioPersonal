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
  iconChatGptColor,iconChatGptWhite
} from "../../Icons";

const techTextEn = {
  technologies: [
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
        "CSS methodologies (BEM, SMACSS)",
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
        "ES6 Modules",
      ],
      mainProjects: ["personal portfolio"],
    },
  ],
  frameworksLibraries: [
    {
      title: "React.js",
      color: "#61DAFB",
      iconWhite: iconReactWhite,
      iconColor: iconReactColor,
      level: "Intermediate",
      mainTopics: [
        "Components",
        "Hooks",
        "State Management",
        "React Router",
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
      mainTopics: [
        "State Management",
        "Actions",
        "Reducers",
      ],
      mainProjects: [
        "personal portfolio",
      ],
    },
    {
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
      mainProjects: ["personal portfolio"],
    },
  ],
  tools: [
    {
      title: "ChatGPT",
      color: "#6C3F9D",
      iconWhite: iconChatGptWhite,
      iconColor: iconChatGptColor,
      level: "Advanced",
      mainTopics: [
        "Code assistance",
        "Idea generation and problem-solving",
        "Automation of repetitive tasks",
        "Customization of responses based on project needs"
      ],
      mainProjects: [
        "personal portfolio"
      ]
    }
,    
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
        "Project setup",
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
  conceptsMethodologies: [
    {
      title: "Responsive Design",
      color: "#34A853",
      level: "Intermediate",
      mainTopics: ["Media queries", "Mobile-first design", "Flexbox and Grid"],
      mainProjects: ["personal portfolio"],
    },
    {
      title: "Reusable Components",
      color: "#007BFF",
      level: "Intermediate",
      mainTopics: [
        "Component design",
        "Props and states",
        "Component composition",
      ],
      mainProjects: ["personal portfolio"],
    },
    {
      title: "State Management",
      color: "#6A1B9A",
      level: "Intermediate",
      mainTopics: ["React useState/useReducer", "Redux"],
      mainProjects: ["personal portfolio"],
    },
   
  ],
};

export default techTextEn;
