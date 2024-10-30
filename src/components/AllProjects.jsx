import { projects } from "../data/projectsData";
import Project from "./Project";

const AllProjects = () => {
  return (
    <div className="pt-9 w-full">
      <h3 className="font-dm-serif text-3xl tracking-wider pb-6">Projects</h3>
      <div className="grid gap-9 sm:grid-cols-2">
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
