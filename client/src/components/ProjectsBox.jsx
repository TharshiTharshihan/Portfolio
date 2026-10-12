import { AnimatePresence, motion } from "framer-motion";
import {
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Projects, projectCategories } from "../data/projectsData.jsx";

// 3 cards per row x 3 rows
const PROJECTS_PER_PAGE = 9;

const ProjectsBox = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);

  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? Projects
        : Projects.filter((project) => project.type === activeCategory),
    [activeCategory],
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE),
  );

  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE,
  );

  const countFor = (category) =>
    category === "All"
      ? Projects.length
      : Projects.filter((project) => project.type === category).length;

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="projects-box"
      ref={sectionRef}
      className="container mt-12 scroll-mt-24 sm:mt-14"
    >
      {/* Filters */}
      <div className="-mx-4 mb-12 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="mx-auto flex w-max flex-nowrap items-center gap-2 sm:gap-3">
          {projectCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 sm:px-5 sm:py-2.5 ${
                  isActive
                    ? "border-primary bg-primary text-white shadow-[0_6px_18px_rgba(249,142,43,0.35)]"
                    : "border-slate-200 bg-white/80 text-slate-600 hover:border-primary/50 hover:text-primary dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:text-white"
                }`}
              >
                {category}
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] leading-none ${
                    isActive
                      ? "bg-white/25 text-white"
                      : "bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-white/60"
                  }`}
                >
                  {countFor(category)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7"
      >
        <AnimatePresence mode="popLayout">
          {currentProjects.map((project) => (
            renderProjectCard(project)
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <p className="py-16 text-center text-slate-500 dark:text-white/60">
          No projects in this category yet.
        </p>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav
          aria-label="Projects pagination"
          className="mt-14 flex items-center justify-center gap-2 sm:gap-3"
        >
          <button
            type="button"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors duration-200 hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
          >
            <FaChevronLeft className="text-sm" />
          </button>

          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;
            const isActive = currentPage === page;
            return (
              <button
                key={page}
                type="button"
                onClick={() => goToPage(page)}
                aria-current={isActive ? "page" : undefined}
                className={`h-11 w-11 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-white shadow-[0_6px_18px_rgba(249,142,43,0.35)]"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-primary hover:text-primary dark:border-white/10 dark:bg-white/5 dark:text-white/70"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors duration-200 hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
          >
            <FaChevronRight className="text-sm" />
          </button>
        </nav>
      )}
    </section>
  );
};

const renderProjectCard = (project) => {
  const { slug, name, description, icon, technology, accent, type, githubUrl } =
    project;
  const isGithub = githubUrl?.includes("github.com");

  return (
    <motion.article
      key={project.slug}
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_22px_55px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-white/5 dark:hover:border-primary/50"
    >
      <div className={`h-1.5 bg-gradient-to-r ${accent}`} />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} shadow-lg shadow-black/10 [&>svg]:!text-2xl`}
          >
            {icon}
          </div>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            {type}
          </span>
        </div>

        <h3 className="mt-5 text-xl font-bold leading-snug text-slate-900 transition-colors duration-200 group-hover:text-primary dark:text-white">
          {name}
        </h3>

        <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-600 dark:text-white/70">
          {description.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <FaCheckCircle className="mt-[3px] shrink-0 text-xs text-primary" />
              <span>{item.trim()}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <div className="flex flex-wrap gap-2">
            {technology?.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-white/70 hover:border-primary/50 hover:bg-primary/10 hover:text-primary dark:hover:border-primary/50 dark:hover:bg-primary/10"
              >
                {tech.trim()}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5 dark:border-white/10">
            <Link
              to={`/projects/${slug}`}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
            >
              <IoDocumentText className="text-base" />
              Case Study
            </Link>
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-colors duration-200 hover:bg-primary/85"
              >
                {isGithub ? (
                  <FaGithub className="text-base" />
                ) : (
                  <FaExternalLinkAlt className="text-xs" />
                )}
                {isGithub ? "GitHub" : "Live Demo"}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectsBox;
