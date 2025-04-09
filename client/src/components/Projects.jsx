import ProjectsBox from "./ProjectsBox.jsx";

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="bg-secondary dark:bg-gray-900 dark:text-white py-10"
      >
        <div className="container flex flex-col items-center">
          <h1 className="inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1">
            Projects
          </h1>
          <p className="text-slate-500 text-center text-xl md:w-[50%] mx-auto">
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
