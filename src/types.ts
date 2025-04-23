type tech = {
  title: string;
  color: string;
  iconWhite?: SVGAElement;
  iconColor?: SVGAElement;
  level: string;
  mainTopics: string[];
  mainProjects: string[];
};

type planningProcess = {
  title: string;
  description: string;
  imageUrl: string;
};

type mainFeatures = {
  title: string;
  description: string;
};

type issueList = {
  title: string;
  description: string;
};

export type project = {
  id: number;
  imgDesktopUrl: string;
  imgDesktopAlt: string;
  imgMobileUrl: string;
  imgMobileAlt: string;
  title: string;
  techs: string[];
  description: string;
  siteUrl: string;
  repoUrl: string;
  isFinished: boolean;
  details: {
    planningProcess: planningProcess[];
    mainFeatures: mainFeatures[];
    issues: {
      title: string;
      issueList: issueList[];
    };
  };
};

type post = {
  id: number;
  title: string;
  image: string;
  altImg: string;
  shortDescription: string;
  description: string;
  subtitle: string;
  content: string;
  conclusion: string;
};

type aboutMeSection = {
  title: string;
  text: string;
};

type techSection = {
  title: string;
  list: tech[];
};

export type textLanguage = {
  header: {
    logo: string;
    nav: {
      li: {
        home: string;
        projects: string;
        blog: string;
        contactMe: string;
      };
    };
  };
  home: {
    hero: {
      heroImg: {
        imgAlt: string;
      };
      title: {
        beforeHiglight: string;
        higlight: string;
      };
      subtitle: {
        beforeHiglight: string;
        higlight: string;
      };
      cta: string;
    };
    lastProyects: {
      title: string;
    };
    aboutMe: {
      title: string;
      subtitle: string;
      sections: aboutMeSection[];
    };
    techsAndSkills: {
      title: string;
      sections: [
        {
          title: string;
          list: tech[];
        },
        {
          title: string;
          list: tech[];
        },
        {
          title: string;
          list: tech[];
        },
        {
          title: string;
          list: tech[];
        }
      ];
    };
  };
  projects: {
    title: string;
    buttonText: {
      seeProject: string;
      seeDetails: string;
      seeRepo: string;
    };
    list: project[];
  };
  blog: {
    title: string;
    blogList: post[];
  };
  footer: {
    title: string;
    contactMe: {
      sectionTitle: string;
      email: {
        title: string;
        value: string;
      };
      phone: {
        title: string;
        value: string;
      };
    };
    followMe: {
      sectionTitle: string;
      github: {
        title: string;
        url: string;
      };
      linkedin: {
        title: string;
        url: string;
      };
    };
  };
};
