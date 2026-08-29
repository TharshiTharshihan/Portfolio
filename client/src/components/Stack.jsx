import { FaLayerGroup } from "react-icons/fa";
import SkillBadge from "./SkillBadge.jsx";

const Skills = () => {
  return (
    <section
      id="stack"
      className="border-t-2 border-b-2 border-slate-800 bg-[#f7f1e7] text-slate-900 dark:border-white/50 dark:bg-slate-800 dark:text-white"
    >
      <div className="container w-[90%] py-14 sm:py-20 md:w-[70%]">
        <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2">
          
          {/* Section Title */}
          <div className="relative font-bold sm:order-2">
            <div className="text-center text-6xl font-bold text-black/5 dark:text-gray-700 xl:text-8xl">
              TECH STACK
            </div>

            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
                <FaLayerGroup className="text-xl" />
              </span>

              <h1 className="text-3xl transition-transform duration-300 hover:scale-105 md:text-4xl">
                Technical Expertise
              </h1>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6 sm:order-1">

            {/* Frontend */}
            <div>
              <h3 className="mb-3 text-lg font-bold">
                Frontend Development
              </h3>

              <div className="flex flex-wrap gap-2">
                <SkillBadge name="React.js" />
                <SkillBadge name="Next.js" />
                <SkillBadge name="JavaScript" />
                <SkillBadge name="TypeScript" />
                <SkillBadge name="Tailwind CSS" />
                <SkillBadge name="Material UI" />
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="mb-3 text-lg font-bold">
                Backend Development
              </h3>

              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Node.js" />
                <SkillBadge name="Express.js" />
                <SkillBadge name="Spring Boot" />
                <SkillBadge name="REST APIs" />
              </div>
            </div>

            {/* Databases */}
            <div>
              <h3 className="mb-3 text-lg font-bold">
                Databases
              </h3>

              <div className="flex flex-wrap gap-2">
                <SkillBadge name="MongoDB" />
                <SkillBadge name="MySQL" />
                <SkillBadge name="PostgreSQL" />
              </div>
            </div>

            {/* DevOps & Cloud */}
            <div>
              <h3 className="mb-3 text-lg font-bold">
                DevOps & Cloud
              </h3>

              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Docker" />
                <SkillBadge name="Git" />
                <SkillBadge name="GitHub Actions" />
                <SkillBadge name="CI/CD" />
                <SkillBadge name="AWS" />
                <SkillBadge name="Kubernetes" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;