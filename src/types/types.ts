export interface project {
  id: number;
  title: string;
  description: string;
  mainAchieve: string;
  techs: string[];
  links: {
    demo: string;
    code: string;
  };
  details: {
    images: {
      src: string;
      alt: string;
    }[];
    objective: string;
    role: string;
    stack: {
      frontend: string[];
      backend: string[];
      dbAndAuth: string[];
    };
    mainFeatures: string[];
    devops: {
      dataBase: string;
      backend: string;
      frontend: string;
      versionControl: string;
      deploy: string;
      enviromentVariables: string;
    };
    technicalChallenges: string[];
  };
}

export interface blogPost {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  content: object[];
  featured: boolean;
  tags: string[];
}

export interface textLanguage {
  textEs: {
    contactInfo: {
      linkedin: string;
      github: string;
      email: string;
      cv: string;
    };
    header: {
      logo: string;
      nav: {
        li: {
          home: string;
          projects: string;
          blog: string;
        };
      };
    };
    homePage: {
      heroSection: {
        heroImg: {
          imgAlt: string;
        };
        title: string;
        subtitle: string;
        techs: string[];
        location: string;
        age: string;
        objective: string;
        ctaProjects: string;
        ctaCv: string;
      };
      aboutMeSection: {
        title: string;
        text: string;
      };
      tecnicSkillsSection: {
        title: string;
        Frontend: string[];
        Backend: string[];
        Testing: string[];
        Tools: string[];
      };
      mainProjectsSection: {
        title: string;
      };
      focusSection: {
        title: string;
        text: string;
        cta: string;
      };
      blogSection: {
        title: string;
        cta: string;
      };
      contactSection: {
        title: string;
        subtitle: string;
      };
    };
    projectsPage: {
      title: string;
      subtitle: string;
      reutilizableText: {
        cta: {
          details: string;
          code: string;
          demo: string;
        };
        mainAchieve: string;
        detail: {
          title: string;
          objective: string;
          role: string;
          mainFeatures: string;
          devops: {
            dataBase: string;
            backend: string;
            frontend: string;
            versionControl: string;
            Deploy: string;
            enviromentVariables: string;
          };
          TechnicalChallenges: string;
        };
      };
      projects: project[];
    };
    blogPage: {
      title: string;
      subtitle: string;
      posts: blogPost[];
      callToAction: {
        title: string;
        subtitle: string;
        cta: string;
      };
    };
  };
}
