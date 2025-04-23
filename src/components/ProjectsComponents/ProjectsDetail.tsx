import React from "react";
// import { styleContainerTop } from "../../Utilities/customStyles";
import { useParams } from "react-router-dom";
// import ProjectMockup from "./ProjectMockup";
// import ProjectsDetailPlanning from "./ProjectsDetailPlanning";
import { useLanguage } from "../../Context/LanguageContext";

const ProjectsDetail = () => {
  const { id } = useParams();
  const { textLanguage } = useLanguage();

  const parsedId = id ?  parseInt(id) : null;

  const projectFinded = textLanguage.projects.list.find(
    (project) => project.id === parsedId
  );

  //componetizacion de title y paragraph
  const Subtitle = ({
    title,
    paragraph,
  }: {
    title: string;
    paragraph: string;
  }) => {
    return (
      <div>
        <h4>{title}</h4>
        <p className="font-light">{paragraph}</p>
      </div>
    );
  };

  return (
    <main 
    // className={styleContainerTop}
    >
      {/* <div>
        <h2>
          {textLanguage.projects.title}
          <span className="text-green">
            {projectFinded?.title.toUpperCase()}
          </span>
        </h2>
        <p className="text-lightLight opacity-50 font-light">
          {projectFinded?.isFinished === true
            ? "proyecto finalizado"
            : "proyecto aún en proceso"}
        </p>
      </div>

      <div className="flex flex-col gap-20 sm:grid sm:grid-cols-2 md:grid-cols-3 items-center">
        <div className="order-1 sm:order-2 flex justify-center md:col-span-2 lg:col-span-1">
          <ProjectMockup
            imagePcUrl={projectFinded?.imgDesktopUrl}
            imageDesktopAlt={projectFinded?.imgDesktopAlt}
            imageMobileUrl={projectFinded?.imgMobileUrl}
            imageMobileAlt={projectFinded?.imgMobileAlt}
            siteUrl={projectFinded?.siteUrl}
            repoUrl={projectFinded?.repoUrl}
          />
        </div>

        <section className="flex flex-col order-2 sm:order-1 md:col-1 lg:col-span-2">
          <h2 className="text-green">{textLanguage.projects.title}</h2>
          <p className="font-light">{"asd"}</p>
        </section>

        <div className="order-3 row-span-2  md:row-span-1 md:col-span-3">
          <ProjectsDetailPlanning project={projectFinded} />
        </div>

        <section className="order-4  md:col-span-3 lg:col-span-2">
          <h2 className="text-green">{"techs"}</h2>
          <div className="flex flex-wrap gap-3">
            {projectFinded?.map((tech) => {
              return (
                <div
                  key={tech}
                  className="bg-[#BCC0B9] font-light rounded text-darkLight px-3 inline-block"
                >
                  {tech}
                </div>
              );
            })}
          </div>
        </section>

        <section className="order-5 flex flex-col gap-1 md:col-span-3 ">
          <h3 className="text-green">{textLanguage.projects.title}</h3>

          <div className="flex flex-col gap-5 ">
            {projectFinded?.details.mainFeatures.map((feature) => {
              return <div key={feature.title}><Subtitle
                title={feature.title}
                paragraph={feature.description}
              /></div>;
            })}
          </div>
        </section>

        <section className="order-6 flex flex-col gap-1 sm:col-span-2 md:col-span-3 ">
          <h3 className="text-green">{projectFinded?.details.issues.title}</h3>
          <div className="flex flex-col gap-5">
            <div>
              <h4>{projectFinded?.details.issues.issue1.title}</h4>
              <p className="font-light">
                {projectFinded?.details.issues.issue1.description}
              </p>
            </div>
            <div>
              <h4>{projectFinded?.details.issues.issue2.title}</h4>
              <p className="font-light">
                {projectFinded?.details.issues.issue2.description}
              </p>
            </div>
            <div>
              <h4>{projectFinded?.details.issues.issue3.title}</h4>
              <p className="font-light">
                {projectFinded?.details.issues.issue3.description}
              </p>
            </div>
          </div>
        </section>
      </div> */}
    </main>
  );
};

export default ProjectsDetail;
