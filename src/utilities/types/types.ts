type techsProps = Record<string,techs>

export interface textProps {
  header: {
    nav: {
      home: string;
      projects: string;
      blog: string;
      contact: string;
    };
    translate: {
      es: string;
      en: string;
      pt: string;
    };
  };
  footer: {
    sectionFollowMe: {
      sectionTitle: string;
      gitHub: {
        title: string;
        description: string;
      };
      linkedin: {
        title: string;
        description: string;
      };
    };
    sectionContactMe: {
      sectionTitle: string;
      email: {
        title: string;
        description: string;
      };
      phoneNumber: {
        title: string;
        description: string;
      };
    };
  };
  pageHome: {
    sectionHero: {
      title: string;
      subtitle: string;
      buttonLabel: string;
    };
    sectionCarrousel: {
      title: string;
    };
    sectionAboutMe: {
      introduction: {
        title: string;
        text: string;
      };
      sections: [
        {
          title: string;
          text: string;
        },
        {
          title: string;
          text: string;
        },
        {
          title: string;
          text: string;
        }
      ];
    };
    sectionTechs:techsProps
     
    };
    sectionProjectMethodology: {
      introduction: {
        title: "My Project Development Methodology";
        text: "I explore each stage of the process to ensure every project is functional, scalable, and visually appealing, from ideation to final implementation.";
      };
      sections: [
        {
          title: "Ideation and Initial Definition";
          text: "In this stage, I lay the foundation of the project. I create a list of the main pages, components, and content needed, including texts, images, and essential data. The goal is to create an initial guide that helps maintain focus during development.";
        },
        {
          title: "Visual Design and UI Structure (Figma)";
          text: "Here, I translate ideas into a visual prototype. In Figma, I design pages, define layouts, and establish the visual style. At this stage, I select colors, fonts, and design the basic interaction for each component.";
        },
        {
          title: "Technical Structuring and Conceptualization";
          text: "I move from the visual design to technical planning. I create a conceptual map or technical diagram where I break down components, define their hierarchy, and plan how they will interact. I also identify internal logic, necessary props, states, and potential tools like hooks, context API, or external APIs.";
        },
        {
          title: "Development and Testing";
          text: "This is the stage where the design and technical planning turn into code. I build components, implement the required functionalities, and ensure the project aligns with the design. I conduct tests to guarantee everything works correctly and is scalable.";
        }
      ];
    };
  };
  pageProjects: {
    sectionProjects: {
      title: "Projects";
    };
    projects: [
      {
        id: 1;
        title: "Personal Portfolio";
        description: "This portfolio showcases my experience in web development, including practical examples that demonstrate technical skills and a focus on best design and development practices.";
        objective: "Highlight my professional evolution, showcasing key skills and my ability to plan, design, and execute projects efficiently.";
        images: {
          desktop: {
            url: "ImageDesktopUrl1";
            alt: "screenshot of the desktop view of the personal portfolio website";
          };
          mobile: {
            url: "ImageMobileUrl1";
            alt: "screenshot of the mobile view of the personal portfolio website";
          };
        };
        techs: [
          "HTML",
          "CSS",
          "React",
          "Git",
          "GitHub",
          "Tailwind",
          "JavaScript",
          "TypeScript"
        ];
        urls: {
          live: "https://josecoronel20.github.io/portfolioPersonal/";
          repo: "https://github.com/josecoronel20/portfolioPersonal";
        };
        details: {
          mainFeatures: [
            {
              title: "Carousel";
              description: "Allows users to explore my projects interactively, capturing their attention from the very first look.";
            },
            {
              title: "Technology Mapping";
              description: "Interactive icons display information upon clicking, implemented with logic based on JSON.";
            },
            {
              title: "Modal Window";
              description: "Popup windows for each technology detailing my level of knowledge and key concepts.";
            }
          ];
          issues: [
            {
              title: "Mapping Technology Icons";
              description: "Implemented individual logic to ensure specific behavior, avoiding global errors.";
            },
            {
              title: "Carousel";
              description: "Simplified its design to a single 'card' with animations after unsatisfactory results with more complex versions.";
            },
            {
              title: "Applying What I Learned";
              description: "Improved the structure of my projects by applying Git, modularization, and better development practices.";
            }
          ];
        };
      },
      {
        id: 2;
        title: "Ecommerce";
        description: "This project simulates an online store, offering a responsive experience and a modern design. It implements key functionalities to facilitate navigation and the purchasing process.";
        objective: "Demonstrate skills in planning, development, and problem-solving using modern technologies like React, TypeScript, and Next.js.";
        images: {
          desktop: {
            url: "ecommerceDesktop";
            alt: "screenshot of the desktop view of the ecommerce project";
          };
          mobile: {
            url: "ecommerceMobile";
            alt: "screenshot of the mobile view of the ecommerce project";
          };
        };
        techs: [
          "HTML",
          "CSS",
          "React",
          "TypeScript",
          "Next.js",
          "Git",
          "GitHub",
          "Tailwind",
          "Jest",
          "Testing Library",
          "NPM",
          "JavaScript"
        ];
        urls: {
          live: "https://ecommerce-woad-psi.vercel.app/ecommerce";
          repo: "https://github.com/josecoronel20/ecommerce";
        };
        details: {
          title: "MAIN FEATURES";
          mainFeatures: [
            {
              title: "Carousel";
              description: "Designed to easily explore featured products, offering a quick and attractive overview of the available options.";
            },
            {
              title: "Shopping Cart";
              description: "Uses a global context to manage products, allowing users to edit quantities and simulate purchases with a smooth experience.";
            },
            {
              title: "Filtering by URL";
              description: "Implemented dynamic filters through the URL, making it easier to search for products by categories or entered text.";
            }
          ];
          issues: {
            title: "MAIN CHALLENGES FACED";
            issues: [
              {
                title: "Product Filtering";
                description: "The biggest challenge was implementing filters using dynamic routes and a search bar, optimizing the user experience.";
              },
              {
                title: "Filter Component";
                description: "Overcame an infinite rendering issue in filters with adjustable inputs, achieving a more stable and efficient functionality.";
              },
              {
                title: "New Technologies";
                description: "Integrating TypeScript, Next.js, and Jest was challenging but enriched my learning and improved the project's quality.";
              }
            ];
          };
        };
      }
    ];
  };
  pageBlog: {
    title: "POSTS FROM MY PERSONAL BLOG";
    posts: [
      {
        id: 1;
        title: "My Journey to Becoming a Frontend Developer";
        introduction: "I moved from Argentina to Portugal seeking a better future and decided to focus on programming, a discipline that has always fascinated me. With a logical and analytical mindset, I've always been intrigued by how things work and how to optimize them. Discovering programming was a key moment, as it gave me the opportunity to unleash my curiosity. Moreover, I'm motivated by the satisfaction of making 'complex' applications work seamlessly.";
        mainContent: {
          background: "My journey started with the goal of mastering programming, especially React. From the beginning, my aim has been to understand how every piece of the puzzle fits together. My training has always been self-taught, and I felt the need to meet job application expectations. For this reason, I decided to delve into key areas to complement my professional profile as much as possible. The first months were spent studying on my phone using books and videos because, after moving to Portugal, I had to start from scratch. Later, I managed to get a computer and began coding more practically, supplementing my learning with YouTube tutorials and official documentation.";
          currentFocus: "Today, my main focus is on deepening good practices and learning technologies like TypeScript and Jest. I've started integrating TypeScript into my projects, especially in an ecommerce application, and I'm exploring unit test implementation. Testing has been challenging for me, but it's a crucial part of ensuring robust code. My goal is to learn more about writing integration tests and improving my understanding of Jest and TypeScript.";
          objective: "My ultimate goal is to land my first job as a frontend developer. I'm seeking a junior frontend developer position specializing in React, preferably remote. While I'm open to different companies, the flexibility of working from Portugal allows me to explore opportunities in Spain, where I'd like to continue growing professionally.";
        };
        conclusion: "This journey has been a test of perseverance, where I strive every day to learn something new and keep improving. Although there's still a long way to go, every step forward brings me closer to my goal. I am committed to this journey and to acquiring the necessary skills to become a competent and adaptable frontend developer.";
      }
    ];
  };
}
