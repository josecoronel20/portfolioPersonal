import React from "react";

const ProjectsDetailPlanning = ({project}) => {
    return (<section className="flex flex-col gap-5">
        <div>
          <h3 className="text-green">
            {project.details.planningProcess.title}
          </h3>
          <p className="font-light">
            {project.details.planningProcess.objetive}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h4>
            {
              project.details.planningProcess.informationArchitecture
                .title
            }
          </h4>
          <p className="font-light">
            {
              project.details.planningProcess.informationArchitecture
                .description
            }
          </p>
          <img className="rounded" src={project.details.planningProcess.informationArchitecture
                .imageUrl} alt="" />
        </div>
        <div className="flex flex-col gap-1">
          <h4>
            {
              project.details.planningProcess.visualDesign.title
            }
          </h4>
          <p className="font-light">
            {
              project.details.planningProcess.visualDesign
                .description
            }
          </p>
          <img className="rounded" src={project.details.planningProcess.visualDesign
                .imageUrl} alt="" />
        </div>
        <div className="flex flex-col gap-1">
          <h4>
            {
              project.details.planningProcess.functionalityPlanning.title
            }
          </h4>
          <p className="font-light">
            {
              project.details.planningProcess.functionalityPlanning
                .description
            }
          </p>
          <img className="rounded" src={project.details.planningProcess.functionalityPlanning
                .imageUrl} alt="" />
        </div>
        
      </section>)
}

export default ProjectsDetailPlanning