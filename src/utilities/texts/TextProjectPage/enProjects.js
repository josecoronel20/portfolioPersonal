import ImageDesktopUrl1 from "../../../../public/img/projectsImg/portfolio/screenShotDesktop.png"
import ImageMobileUrl1 from "../../../../public/img/projectsImg/portfolio/screenShotMobile.png"
import imageTxt1 from "../../../../public/img/projectsImg/portfolio/projectDetail/txt.png"
import imageDesign1 from "../../../../public/img/projectsImg/portfolio/projectDetail/design.png"
import imageFeatures1 from "../../../../public/img/projectsImg/portfolio/projectDetail/features.png"



const enProjects = [
  {
    "id": 1,
    "imagePcUrl": ImageDesktopUrl1,
    "imageDesktopAlt": "screenshot of desktop view of personal portfolio website",
    "imageMobileUrl": ImageMobileUrl1,
    "imageMobileAlt": "screenshot of mobile view of personal portfolio website",
    "title": "Personal Portfolio",
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
    "description": "This personal portfolio showcases a collection of projects and web development skills. It stands out for its focus on providing detailed and relevant information about each project, including initial planning, visual design, achieved goals, and more.",
    "siteUrl": "https://josecoronel20.github.io/portfolioPersonal/",
    "repoUrl": "https://github.com/josecoronel20/portfolioPersonal",
    "isFinished": true,
    "details": {
      "planningProcess": [
        {
          "title": "Information Architecture",
          "description": "I started with a TXT file to outline the main sections: 'Home', 'Projects', 'Blog', and 'Contact'. I progressively developed each section and its subsections, creating a clear and relevant structure.",
          "imageUrl": imageTxt1
        },
        {
          "title": "Visual Design",
          "description": "The visual design aimed to reflect my personal and professional identity. Initially, I chose a striking color palette using shades of violet, a color that I strongly identify with. However, I eventually settled on a light and simple palette that ensures the relevant information is the focus, facilitating effective visual communication without distractions.",
          "imageUrl": imageDesign1
        },
        {
          "title": "Feature Planning",
          "description": "I developed a diagram to plan features like the carousel. Initially, I thought of displaying three projects from the JSON, but I decided to show only one based on the JSON index. I also planned a 'translate' component, which led to using global context and exploring Redux.",
          "imageUrl": imageFeatures1
        }
      ],
      "mainFeatures": [
        {
          "title": "Carousel",
          "description": "This section is designed for users to explore my projects quickly and easily. Its main goal is to capture attention by presenting an interactive interface that highlights my work at first glance."
        },
        {
          "title": "Technology Mapping",
          "description": "In the technologies section, representative icons of each technology are displayed. When hovering over an icon, it changes appearance, and clicking on it opens a modal window. Implementing this functionality required complex logic to render each icon with its respective functionalities, based on information mapped from a JSON file containing the details of each technology."
        },
        {
          "title": "Modal Window",
          "description": "In the technologies section, each technology is linked to a popup window ('Modal'). Clicking on any technology displays information about my level of knowledge and a detailed section explaining the main topics and concepts I handle."
        }
      ],
      "issues": {
        "title": "MAIN CHALLENGES FACED",
        "issue1": {
          "title": "Technology Icon Mapping",
          "description": "When mapping each technology, it was necessary to implement the hover logic and modal window functionality individually for each icon. This was done to ensure that each feature operated correctly and specifically. If the logic were applied globally, it could cause erratic and undesired behavior in the interaction with the icons."
        },
        "issue2": {
          "title": "Carousel",
          "description": "Initially, the carousel was designed to be more visually striking, rendering three cards and adding animations for navigation between them. However, after trying several options to implement this complexity with unsatisfactory results, I decided to simplify the functionality. Now, the carousel displays only one card at a time, but with animations that add dynamism and appeal, maintaining visual interest without complicating the implementation."
        },
        "issue3": {
          "title": "Applying What I've Learned",
          "description": "After developing web applications in a disorganized manner with basic knowledge, I decided to improve my skills through books, videos, and readings. This led me to adopt a more professional approach, better structuring my files and using Git more effectively. I learned to build projects modularly, reduce code with hooks, and manage development in separate branches to avoid code mixing and focus on each section individually."
        }
      }
    }
  }
]

export default enProjects
