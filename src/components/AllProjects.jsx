import { projects } from "../data/projectsData";
import Project from "./Project";

const AllProjects = () => {
  return (
    <div>
      <h3>Projects</h3>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <Project
              img={project.img}
              name={project.name}
              descHeading={project.descHeading}
              descMain1={project.descMain1}
              descMain2={project.descMain2}
              descMain3={project.descMain3}
              builtWith={project.builtWith}
              sourceCode={project.sourceCode}
              liveLink={project.liveLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
