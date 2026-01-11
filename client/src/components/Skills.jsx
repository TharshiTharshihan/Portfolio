import SkillsLevel from "./SkillsLevel.jsx";

const Skills = () => {
  return (
    <>
      <section
        id="about"
        className="bg-white dark:bg-slate-800 dark:text-white"
      >
        <div className="container md:w-[70%] sm:py-16 py-10">
          <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
            <div className="sm:order-2 relative font-bold">
              <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
                SKILLS
              </div>
              <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-center md:text-4xl hover:transform hover:scale-105  duration-300 animate-bounce ">
                Skills
              </h1>
            </div>
            <div className="sm:order-1 text-slate-500 grid grid-cols-2 gap-4">
              <SkillsLevel skillName="React Js" />
              <SkillsLevel skillName="Node Js" />
              <SkillsLevel skillName="Next Js" />
              <SkillsLevel skillName="Angular js" />
              <SkillsLevel skillName="Tailwind CSS" />
              <SkillsLevel skillName="MySQL" />
              <SkillsLevel skillName="PostgreSQL " />
              <SkillsLevel skillName="Docker" />
              <SkillsLevel skillName="Jenkins" />
              <SkillsLevel skillName="AWS" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
