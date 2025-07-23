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

const enProjects = [
  {
    id: 1,
    imagePcUrl: ImageDesktopUrl1,
    imageDesktopAlt: "screenshot of desktop view of personal portfolio website",
    imageMobileUrl: ImageMobileUrl1,
    imageMobileAlt: "screenshot of mobile view of personal portfolio website",
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
      "This personal portfolio showcases a collection of projects and web development skills. It stands out for its focus on providing detailed and relevant information about each project, including initial planning, visual design, achieved goals, and more.",
    siteUrl: "https://josecoronel20.github.io/portfolioPersonal/",
    repoUrl: "https://github.com/josecoronel20/portfolioPersonal",
    isFinished: true,
    details: {
      planningProcess: [
        {
          title: "Information Architecture",
          description:
            "I started with a TXT file to outline the main sections: 'Home', 'Projects', 'Blog', and 'Contact'. I progressively developed each section and its subsections, creating a clear and relevant structure.",
          imageUrl: imageTxt1,
        },
        {
          title: "Visual Design",
          description:
            "The visual design aimed to reflect my personal and professional identity. Initially, I chose a striking color palette using shades of violet, a color that I strongly identify with. However, I eventually settled on a light and simple palette that ensures the relevant information is the focus, facilitating effective visual communication without distractions.",
          imageUrl: imageDesign1,
        },
        {
          title: "Feature Planning",
          description:
            "I developed a diagram to plan features like the carousel. Initially, I thought of displaying three projects from the JSON, but I decided to show only one based on the JSON index. I also planned a 'translate' component, which led to using global context and exploring Redux.",
          imageUrl: imageFeatures1,
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
            "In the technologies section, representative icons of each technology are displayed. When hovering over an icon, it changes appearance, and clicking on it opens a modal window. Implementing this functionality required complex logic to render each icon with its respective functionalities, based on information mapped from a JSON file containing the details of each technology.",
        },
        {
          title: "Modal Window",
          description:
            "In the technologies section, each technology is linked to a popup window ('Modal'). Clicking on any technology displays information about my level of knowledge and a detailed section explaining the main topics and concepts I handle.",
        },
      ],
      issues: {
        title: "MAIN CHALLENGES FACED",
        issue1: {
          title: "Technology Icon Mapping",
          description:
            "When mapping each technology, it was necessary to implement the hover logic and modal window functionality individually for each icon. This was done to ensure that each feature operated correctly and specifically. If the logic were applied globally, it could cause erratic and undesired behavior in the interaction with the icons.",
        },
        issue2: {
          title: "Carousel",
          description:
            "Initially, the carousel was designed to be more visually striking, rendering three cards and adding animations for navigation between them. However, after trying several options to implement this complexity with unsatisfactory results, I decided to simplify the functionality. Now, the carousel displays only one card at a time, but with animations that add dynamism and appeal, maintaining visual interest without complicating the implementation.",
        },
        issue3: {
          title: "Applying What I've Learned",
          description:
            "After developing web applications in a disorganized manner with basic knowledge, I decided to improve my skills through books, videos, and readings. This led me to adopt a more professional approach, better structuring my files and using Git more effectively. I learned to build projects modularly, reduce code with hooks, and manage development in separate branches to avoid code mixing and focus on each section individually.",
        },
      },
    },
  },
  {
    id: 2,
    imagePcUrl: ecommerceDesktop,
    imageDesktopAlt: "screenshot of the ecommerce project desktop view",
    imageMobileUrl: ecommerceMobile,
    imageMobileAlt: "screenshot of the ecommerce project mobile view",
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
      "This fictional ecommerce project offers an online shopping experience, covering everything from initial planning to final execution. It uses React and Next.js in a basic way to optimize performance and ensure a responsive design for easy navigation on both mobile and desktop devices. Additionally, basic TypeScript is incorporated for better typing, and simple unit tests are conducted to ensure the project's functionality. The visual design is inspired by prototypes created in Figma, with an emphasis on attention to detail in each component.",
    siteUrl: "https://ecommerce-woad-psi.vercel.app/ecommerce",
    repoUrl: "https://github.com/josecoronel20/ecommerce",
    isFinished: true,
    details: {
      planningProcess: [
        {
          title: "Information Architecture",
          description:
            "I started by outlining the structure of the ecommerce using a TXT file, identifying key sections like 'Home,' 'Products,' 'Offers,' and 'New Collection.' This phase allowed me to visualize the hierarchy of information and ensure intuitive navigation, making access to each section smooth and user-friendly.",
          imageUrl: ecommerceArquitecture,
        },
        {
          title: "Visual Design",
          description:
            "The design phase focused on creating an attractive and cohesive visual identity for the online store. After exploring several color palettes, I decided on soft and elegant tones that highlight the products without overwhelming the visitor. The goal was to achieve a visual environment that invites exploration and encourages conversion.",
          imageUrl: ecommerceDesigne,
        },
        {
          title: "Functionality Planning",
          description:
            "To structure the ecommerce functionalities, I created a diagram that covered elements like the product carousel and the shopping cart management. Instead of showcasing multiple products at once, I chose to focus on the user experience by highlighting one featured product. I also included a shopping cart component using a global context to enhance user interaction with the site.",
          imageUrl: ecommerceFuncionality,
        },
      ],

      mainFeatures: [
        {
          title: "Carousel",
          description:
            "This section is designed for users to quickly and easily explore featured products. Its goal is to give a first glance at the product cards and add simple functionality to browse through them effortlessly.",
        },
        {
          title: "Shopping Cart",
          description:
            "I implemented a shopping cart using global context to manage the products selected by the user. This cart allows users to view added items, adjust quantities, and see updated prices in real time. Users can review the total before proceeding to checkout, where they enter their details to complete the transaction. Once finalized, the system simulates the purchase and displays a confirmation message, enhancing the online shopping experience.",
        },
        {
          title: "Filtering by URL",
          description:
            "Thanks to Next.js features, I implemented product filters through the URL. By including a category in the URL, the corresponding products are automatically displayed on the screen. I used a similar approach for displaying items that match the text entered in the search component, making it quick and efficient for users to find what they're looking for.",
        },
      ],
      issues: {
        title: "MAIN CHALLENGES FACED",
        issue1: {
          title: "Product Filtering",
          description:
            "One of the challenges in developing the ecommerce was implementing an effective product filtering system. I leveraged Next.js capabilities, particularly dynamic folders, to manage filters via the URL. This setup allows products to be automatically rendered when a category is included in the URL, simplifying navigation. I also developed a search bar that updates the URL and shows matching products based on the entered text. This combination of techniques greatly improves the user experience for searching and filtering options on the site.",
        },
        issue2: {
          title: "Filter Component",
          description:
            "I attempted to implement a filter component on the page that displays all products, which posed several challenges. I had to consider multiple parameters to filter the already displayed products. For instance, adjusting the price parameter would cause infinite rendering. To resolve this, I added a boolean variable that allowed the price input value to be regenerated whenever it was true. Thus, when the input value changed, the variable would automatically reset to false, except in specific cases, preventing infinite rendering and improving the filter functionality.",
        },
        issue3: {
          title:
            "Initial Use of TypeScript, Next.js, and Jest with Testing Library",
          description:
            "Developing the ecommerce presented an exciting challenge: integrating TypeScript, Next.js, and Jest with Testing Library in one project for the first time. Despite being new to these technologies, I managed to apply their features in a basic but effective way. TypeScript provided static typing, which improved code quality and facilitated early error detection. Next.js was crucial for optimizing the project's structure and enhancing navigation with dynamic routes, while Jest and Testing Library provided the necessary tools to write simple unit tests, ensuring each component worked as expected. This process not only enriched my learning but also helped me develop a more organized and reliable approach to web development projects.",
        },
      },
    },
  },
];

export default enProjects;
