import { FaFolderOpen } from "react-icons/fa";
import ProjectsBox from "./ProjectsBox.jsx";

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="bg-[#f3eee4] py-20 text-slate-900 dark:bg-gray-900 dark:text-white sm:py-28"
      >
        <div className="container flex flex-col items-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur dark:bg-white/5">
            <FaFolderOpen />
            Featured Work
          </p>
          <h2 className="mt-5 text-center text-3xl font-bold sm:text-5xl">
            Projects &  <span className="text-primary">builds</span> 
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-slate-500 dark:text-white/70 sm:text-lg">
            Full-stack platforms, cloud and DevOps pipelines, AI-powered tools
            and mobile apps — built with clean architecture and real-world use
            in mind.
          </p>
        </div>
        <ProjectsBox />
      </section>
    </>
  );
};

export default Projects;
