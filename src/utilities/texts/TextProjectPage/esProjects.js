import ImageDesktopUrl1 from "../../../../public/img/projectsImg/portfolio/screenShotDesktop.png";
import ImageMobileUrl1 from "../../../../public/img/projectsImg/portfolio/screenShotMobile.png";
import imageTxt1 from "../../../../public/img/projectsImg/portfolio/projectDetail/txt.png";
import imageDesign1 from "../../../../public/img/projectsImg/portfolio/projectDetail/design.png";
import imageFeatures1 from "../../../../public/img/projectsImg/portfolio/projectDetail/features.png";
import ecommerceDesktop from "../../../../public/img/projectsImg/ecommerce/Ecommerce-Desktop.png";
import ecommerceMobile from "../../../../public/img/projectsImg/ecommerce/Ecommerce-Mobile.png";
import ecommerceArquitecture from "../../../../public/img/projectsImg/ecommerce/proyectDetail/ecommerce-arquitecture.png";
import ecommerceDesigne from "../../../../public/img/projectsImg/ecommerce/proyectDetail/ecommerce-designe.png";
import ecommerceFuncionality from "../../../../public/img/projectsImg/ecommerce/proyectDetail/ecommerce-funcionality.png";

const esProjects = [
  {
    id: 1,
    imagePcUrl: ImageDesktopUrl1,
    imageDesktopAlt:
      "captura de pantalla de vista de escritorio de página web de portfolio personal",
    imageMobileUrl: ImageMobileUrl1,
    imageMobileAlt:
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
          imageUrl: imageTxt1,
        },
        {
          title: "Diseño visual",
          description:
            "El diseño visual buscó reflejar mi identidad personal y profesional. En un principio se decidió por una paleta de colores llamativa utilizando tonos violetas que siento que es un color que me representa bastante pero finalmente me decidí por una paleta clara y sencilla que asegura que la información relevante sea el foco, facilitando una comunicación visual efectiva sin distracciones.",
          imageUrl: imageDesign1,
        },
        {
          title: "Planificación de funcionalidades",
          description:
            "Desarrollé un diagrama para planificar funcionalidades, como el carrusel. Inicialmente, pensé en mostrar tres proyectos del JSON, pero decidí mostrar uno solo basado en el índice del JSON. También planeé un componente 'translate', lo que llevó a usar un contexto global y explorar Redux.",
          imageUrl: imageFeatures1,
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
        issue1: {
          title: "Mapeo de iconos de tencologiás",
          description:
            "Al mapear cada tecnología, fue necesario implementar la lógica de hover y la funcionalidad de la ventana modal de manera individual para cada icono. Esto se hizo para asegurar que cada funcionalidad operara de forma específica y correcta. Si la lógica se aplicara de manera global, podría generar comportamientos erráticos y no deseados en la interacción con los iconos.",
        },
        issue2: {
          title: "Carrusel",
          description:
            "En una primera etapa, el carrusel se diseñó para ser más llamativo visualmente, renderizando tres 'cards' y añadiendo animaciones para la navegación entre ellas. Sin embargo, al probar varias opciones para implementar esta complejidad con resultados insatisfactorios, decidí simplificar la funcionalidad. Ahora, el carrusel muestra solo una 'card' a la vez, pero con animaciones que añaden dinamismo y atractivo, manteniendo así el interés visual sin complicar la implementación.",
        },
        issue3: {
          title: "Comienzo de aplicación de lo aprendido",
          description:
            "Después de desarrollar aplicaciones web de manera desorganizada con conocimientos básicos, decidí mejorar mi formación mediante libros, videos y lecturas. Esto me llevó a adoptar un perfil más profesional, estructurando mejor mis archivos y utilizando Git de manera más efectiva. Aprendí a componer proyectos de forma modular, reducir el código con hooks, y gestionar el desarrollo en ramas separadas para evitar la mezcla de código y centrarme en cada sección por separado.",
        },
      },
    },
  },
  {
    id: 2,
    imagePcUrl: ecommerceDesktop,
    imageDesktopAlt:
      "captura de pantalla de vista de escritorio de proyecto ecommerce",
    imageMobileUrl: ecommerceMobile,
    imageMobileAlt:
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
          imageUrl: ecommerceArquitecture,
        },
        {
          title: "Diseño visual",
          description:
            "La fase de diseño se centró en crear una identidad visual atractiva y coherente para la tienda online. Tras explorar varias paletas de colores, decidí optar por tonos suaves y elegantes que destacan los productos sin abrumar al visitante. La meta era lograr un entorno visual que invite a explorar y facilite la conversión.",
          imageUrl: ecommerceDesigne,
        },
        {
          title: "Planificación de funcionalidades",
          description:
            "Para estructurar las funcionalidades del ecommerce, creé un diagrama que contemplaba aspectos como el carrusel de productos y la gestión del carrito de compras. En lugar de presentar varios productos a la vez, decidí centrarme en la experiencia del usuario al mostrar uno destacado. También incorporé un componente para el carrito, implementando un contexto global que mejora la interacción del usuario con el sitio.",
          imageUrl: ecommerceFuncionality,
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
        issue1: {
          title: "filtrado de productos",
          description:
            "Uno de los desafíos en el desarrollo del ecommerce fue implementar un sistema de filtrado efectivo para los productos. Utilicé las capacidades de Next.js, en particular las carpetas dinámicas, para gestionar los filtros a través de la URL. Esto permite que, al incluir una categoría en la URL, se rendericen automáticamente los productos correspondientes, facilitando así la navegación. Además, implementé una barra de búsqueda que actualiza la URL y muestra los productos que coinciden con el texto ingresado. Esta combinación de técnicas mejora notablemente la experiencia del usuario al buscar y filtrar opciones en el sitio.",
        },
        issue2: {
          title: "componente de filtro",
          description:
            "Intenté implementar un componente de filtrado en la página que muestra todos los productos, lo que presentó varios desafíos. Tuve que considerar múltiples parámetros para filtrar los productos ya mostrados. Por ejemplo, al ajustar el parámetro de precios, se generaba un renderizado infinito. Para solucionar esto, añadí una variable booleana que permitía regenerar el valor del input de precio cada vez que era verdadera. Así, al cambiar el valor del input, la variable se establecía automáticamente en falso, excepto en algunos casos específicos, evitando así el problema del renderizado infinito y mejorando la funcionalidad del filtrado.",
        },
        issue3: {
          title: "Comienzo de utilización de typescript,next y jest con testing-library",
          description:
            "El desarrollo del ecommerce me presentó el emocionante desafío de integrar por primera vez TypeScript, Next.js y Jest con Testing Library en un solo proyecto. A pesar de ser un novato en estas tecnologías, logré aplicar sus características de manera básica pero efectiva. TypeScript me permitió implementar un tipado estático, lo que mejoró la calidad del código y facilitó la detección temprana de errores. Next.js fue fundamental para optimizar la estructura del proyecto y mejorar la navegación mediante rutas dinámicas, mientras que Jest, junto con Testing Library, me proporcionó las herramientas necesarias para crear pruebas unitarias basicas, asegurando que cada componente funcionara como se esperaba. Este proceso no solo enriqueció mi aprendizaje, sino que también me ayudó a desarrollar un enfoque más organizado y confiable en mis proyectos de desarrollo web.",
        },
      },
    },
  },
];

export default esProjects;
