import { FaFolderOpen } from "react-icons/fa";
import ProjectsBox from "./ProjectsBox.jsx";

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="bg-[#f3eee4] py-14 text-slate-900 dark:bg-gray-900 dark:text-white sm:py-20"
      >
        <div className="container flex flex-col items-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur dark:bg-white/5">
            <FaFolderOpen />
            Projects
          </p>
          <h1 className="mt-4 text-center text-3xl font-bold sm:text-4xl">
            Selected work and builds
          </h1>
          <p className="mx-auto mt-3 text-center text-base text-slate-500 md:w-[55%] sm:text-lg dark:text-white/70">
            A showcase of projects I have worked on during my academic journey.
          </p>
        </div>
        <div>
          <ProjectsBox />
        </div>
      </section>
    </>
  );
};

export default Projects;
