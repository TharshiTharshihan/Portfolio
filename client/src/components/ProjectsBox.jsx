import { motion } from "framer-motion";
import { FaCheckCircle, FaGithub } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Projects } from "../data/projectsData.jsx";

const ProjectsBox = () => {
  const ProjectsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(Projects.length / ProjectsPerPage);

  const indexOfLastProject = currentPage * ProjectsPerPage;
  const indexOfFirstProject = indexOfLastProject - ProjectsPerPage;

  const currentProjects = Projects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );

  return (
    <section id="projects-box" className="container my-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {currentProjects.map(
          ({
            slug,
            name,
            description,
            icon,
            technology,
            accent,
            type,
            githubUrl,
          }) => (
            <motion.div
              key={name}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/85 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(15,23,42,0.12)] dark:border-amber-400 dark:bg-white/5 dark:shadow-[0_18px_50px_rgba(255,255,255,0.08)] dark:hover:shadow-[0_24px_65px_rgba(255,255,255,0.12)]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className={`h-2 bg-gradient-to-r ${accent}`} />

              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary dark:bg-white/10 dark:text-white/80">
                      {type}
                    </span>
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} shadow-lg shadow-black/10`}
                      >
                        {icon}
                      </div>
                      <h1 className="max-w-[24rem] text-2xl font-bold leading-tight text-slate-900 dark:text-white sm:text-[1.7rem]">
                        {name}
                      </h1>
                    </div>
                  </div>

                  <Link
                    to={`/projects/${slug}`}
                    className="hidden rounded-2xl bg-slate-100 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 transition-colors duration-300 hover:bg-primary hover:text-white dark:bg-white/10 dark:text-white/70 dark:hover:bg-primary dark:hover:text-white sm:block"
                  >
                    Case Study
                  </Link>
                </div>

                <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 dark:border-white/5 dark:bg-white/5">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-white/80">
                    Highlights
                  </p>
                  <ul className="space-y-3 text-sm leading-relaxed text-slate-600 dark:text-white/80 sm:text-base">
                    {description.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <FaCheckCircle className="mt-1 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="mt-4 flex flex-wrap gap-2">
                    {technology?.map((tech, index) => {
                      const colors = [
                        "bg-green-50 text-green-600",
                        "bg-blue-50 text-blue-600",
                        "bg-purple-50 text-purple-600",
                        "bg-orange-50 text-orange-600",
                        "bg-pink-50 text-pink-600",
                        "bg-cyan-50 text-cyan-600",
                      ];

                      return (
                        <span
                          key={tech}
                          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                            colors[index % colors.length]
                          }`}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      to={`/projects/${slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary transition-transform duration-300 hover:scale-105 hover:bg-primary hover:text-white dark:border-white/30 dark:text-white dark:hover:bg-white/10"
                    >
                      <IoDocumentText className="text-lg" />
                      Case Study
                    </Link>
                    {githubUrl ? (
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-transform duration-300 hover:scale-105"
                      >
                        <FaGithub className="text-lg" />
                        GitHub
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 dark:bg-white/10 dark:text-white/80">
                        <FaGithub className="text-lg" />
                        Add repo link
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ),
        )}
      </div>
      <div className="mt-10 flex justify-center gap-3">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`h-12 w-12 rounded-full font-semibold transition-all duration-300
      ${
        currentPage === index + 1
          ? "bg-primary text-white shadow-lg scale-110"
          : "bg-white text-slate-700 border border-slate-300 hover:bg-primary hover:text-white dark:bg-white/10 dark:text-white dark:border-white/20"
      }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProjectsBox;
