import ImageDesktopUrl1 from "../../../../public/img/projectsImg/portfolio/screenShotDesktop.png"
import ImageMobileUrl1 from "../../../../public/img/projectsImg/portfolio/screenShotMobile.png"
import imageTxt1 from "../../../../public/img/projectsImg/portfolio/projectDetail/txt.png"
import imageDesign1 from "../../../../public/img/projectsImg/portfolio/projectDetail/design.png"
import imageFeatures1 from "../../../../public/img/projectsImg/portfolio/projectDetail/features.png"


const esProjects = [
  {
    "id": 1,
    "imagePcUrl": ImageDesktopUrl1,
    "imageDesktopAlt": "captura de pantalla de vista de escritorio de página web de portfolio personal",
    "imageMobileUrl": ImageMobileUrl1,
    "imageMobileAlt": "captura de pantalla de vista de móbil de página web de portfolio personal",
    "title": "Portfolio Personal",
    "techs": [
      "html",
      "css",
      "react",
      "redux",
      "git",
      "github",
      "tailwind",
      "npm",
      "javascript"
    ],
    "description": "Este portafolio personal presenta una colección de proyectos y competencias en desarrollo web. Se destaca por su enfoque en proporcionar información detallada y relevante sobre cada proyecto, incluyendo planificación inicial, diseño visual, objetivos alcanzados, y más.",
    "siteUrl": "https://josecoronel20.github.io/portfolioPersonal/",
    "repoUrl": "https://github.com/josecoronel20/portfolioPersonal",
    "isFinished": true,
    "details": {
      "planningProcess": [
        {
          "title": "Arquitectura de la información",
          "description": "Inicié con un archivo TXT para esbozar las secciones principales: 'Inicio', 'Proyectos', 'Blog', y 'Contacto'. Desarrollé cada sección y sus subsecciones progresivamente, creando un esquema claro y relevante.",
          "imageUrl": imageTxt1
        },
        {
          "title": "Diseño visual",
          "description": "El diseño visual buscó reflejar mi identidad personal y profesional. En un principio se decidió por una paleta de colores llamativa utilizando tonos violetas que siento que es un color que me representa bastante pero finalmente me decidí por una paleta clara y sencilla que asegura que la información relevante sea el foco, facilitando una comunicación visual efectiva sin distracciones.",
          "imageUrl": imageDesign1
        },
        {
          "title": "Planificación de funcionalidades",
          "description": "Desarrollé un diagrama para planificar funcionalidades, como el carrusel. Inicialmente, pensé en mostrar tres proyectos del JSON, pero decidí mostrar uno solo basado en el índice del JSON. También planeé un componente 'translate', lo que llevó a usar un contexto global y explorar Redux.",
          "imageUrl": imageFeatures1
        }
      ],
      "mainFeatures": [
        {
          "title": "Carrusel",
          "description": "Esta sección está diseñada para que los usuarios exploren mis proyectos de manera rápida y sencilla. Su objetivo principal es captar la atención al presentar una interfaz interactiva que destaca mis trabajos desde el primer vistazo."
        },
        {
          "title": "Mapeo de tecnologías",
          "description": "En la sección de tecnologías, se muestran iconos representativos de cada tecnología. Al pasar el cursor sobre un icono, este cambia de apariencia, y al hacer clic en él, se abre una ventana modal. Implementar esta funcionalidad requirió una lógica compleja para renderizar cada icono con sus respectivas funcionalidades, basándose en la información mapeada desde un JSON que contiene los detalles de cada tecnología. "
        },
        {
          "title": "Ventana 'Modal'",
          "description": "En la sección de tecnologías, cada tecnología está vinculada a una ventana emergente ('Modal'). Al hacer clic en cualquier tecnología, se muestra información sobre mi nivel de conocimiento y una sección detallada que explica los temas y conceptos principales que manejo."
        }
      ],
      "issues": {
        "title": "PRINCIPALES PROBLEMAS ENFRENTADOS",
        "issue1": {
          "title": "Mapeo de iconos de tencologiás",
          "description": "Al mapear cada tecnología, fue necesario implementar la lógica de hover y la funcionalidad de la ventana modal de manera individual para cada icono. Esto se hizo para asegurar que cada funcionalidad operara de forma específica y correcta. Si la lógica se aplicara de manera global, podría generar comportamientos erráticos y no deseados en la interacción con los iconos."
        },
        "issue2": {
          "title": "Carrusel",
          "description": "En una primera etapa, el carrusel se diseñó para ser más llamativo visualmente, renderizando tres 'cards' y añadiendo animaciones para la navegación entre ellas. Sin embargo, al probar varias opciones para implementar esta complejidad con resultados insatisfactorios, decidí simplificar la funcionalidad. Ahora, el carrusel muestra solo una 'card' a la vez, pero con animaciones que añaden dinamismo y atractivo, manteniendo así el interés visual sin complicar la implementación."
        },
        "issue3": {
          "title": "Comienzo de aplicación de lo aprendido",
          "description": "Después de desarrollar aplicaciones web de manera desorganizada con conocimientos básicos, decidí mejorar mi formación mediante libros, videos y lecturas. Esto me llevó a adoptar un perfil más profesional, estructurando mejor mis archivos y utilizando Git de manera más efectiva. Aprendí a componer proyectos de forma modular, reducir el código con hooks, y gestionar el desarrollo en ramas separadas para evitar la mezcla de código y centrarme en cada sección por separado."
        }
      }
    }
  }
]

export default esProjects