import { FaLayerGroup } from "react-icons/fa";
import SkillsLevel from "./SkillsLevel.jsx";

const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="bg-[#f7f1e7] text-slate-900 dark:bg-slate-800 dark:text-white"
      >
        <div className="container md:w-[70%] py-14 sm:py-20">
          <div className="grid items-center gap-8 grid-cols-1 sm:grid-cols-2">
            <div className="sm:order-2 relative font-bold">
              <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
                SKILLS
              </div>
              <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 text-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
                  <FaLayerGroup className="text-xl" />
                </span>
                <h1 className="text-3xl text-center md:text-4xl transition-transform duration-300 hover:scale-105">
                  Skills
                </h1>
              </div>
            </div>
            <div className="sm:order-1 grid grid-cols-2 gap-4 text-slate-500">
              <SkillsLevel skillName="React Js" />
              <SkillsLevel skillName="Node Js" />
              <SkillsLevel skillName="Next Js" />
              <SkillsLevel skillName="Spring Boot" />
              <SkillsLevel skillName="Tailwind CSS" />
              <SkillsLevel skillName="MySQL" />
              <SkillsLevel skillName="PostgreSQL " />
              <SkillsLevel skillName="Docker" />
              <SkillsLevel skillName="GitHub Actions" />
              <SkillsLevel skillName="AWS" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
