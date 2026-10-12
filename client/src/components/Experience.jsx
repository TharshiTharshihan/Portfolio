import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

// Newest role first
const experienceItems = [
  {
    role: "Software Engineer",
    company: "FAITE Pvt Ltd",
    companyLink: "https://www.linkedin.com/company/faite/",
    period: "Nov 2025 — May 2026",
    employmentType: "Full-time",
    location: "Jaffna, Sri Lanka",
    summary:
      "Joined FAITE full-time after my internship, taking ownership of features end-to-end — from API design and database modelling to polished, responsive user interfaces shipped to production.",
    highlights: [
      "Designed and delivered full-stack features with React.js, Node.js, and Express.js, from requirements through to production.",
      "Built and maintained secure RESTful APIs with role-based access control and well-structured database schemas.",
      "Improved performance and reliability through code reviews, refactoring, and resolving production issues.",
      "Worked closely with product and QA in Agile sprints, estimating tasks and supporting releases.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "Git",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "FAITE Pvt Ltd",
    companyLink: "https://www.linkedin.com/company/faite/",
    period: "May 2025 — Nov 2025",
    employmentType: "Internship",
    location: "Jaffna, Sri Lanka",
    summary:
      "Worked with React.js, Node.js, Express.js, and RESTful APIs to develop and maintain responsive web applications alongside cross-functional teams.",
    highlights: [
      "Developed responsive user interfaces using React.js and modern frontend practices.",
      "Built backend features using Node.js, Express.js, and RESTful APIs.",
      "Created reusable components that improved application maintainability.",
      "Optimised performance and fixed bugs to improve the user experience.",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Spring Boot",
      "MySQL",
      "REST APIs",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#f3eee4] py-20 text-slate-900 dark:bg-gray-900 dark:text-white sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-slate-400/10 blur-3xl" />
      </div>

      <div className="container relative">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur dark:bg-white/5">
            <FaBriefcase />
            Career Journey
          </p>
          <h2 className="mt-5 text-3xl font-bold text-black/85 dark:text-white sm:text-5xl">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-500 dark:text-white/70 sm:text-lg">
            From intern to software engineer — building production web
            applications and growing within an Agile engineering team.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-6xl">
          <div className="absolute bottom-0 left-4 top-0 w-[2px] bg-gradient-to-b from-primary/80 via-primary/30 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-14 md:space-y-20">
            {experienceItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={`${item.role}-${item.period}`}
                  className="relative grid md:grid-cols-2"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {/* Dot */}
                  <span className="absolute left-4 top-8 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2">
                    {index === 0 && (
                      <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-60" />
                    )}
                    <span className="relative h-4 w-4 rounded-full bg-primary ring-4 ring-[#f3eee4] dark:ring-gray-900" />
                  </span>

                  {/* Period on the opposite side (desktop) */}
                  <div
                    className={`hidden pt-6 md:block ${
                      isLeft
                        ? "md:col-start-2 md:row-start-1 md:pl-16"
                        : "md:col-start-1 md:row-start-1 md:pr-16 md:text-right"
                    }`}
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                      {item.employmentType}
                    </p>
                    <p className="mt-2 font-heading text-2xl font-bold text-slate-800 dark:text-white/90">
                      {item.period}
                    </p>
                  </div>

                  {/* Card */}
                  <div
                    className={`pl-12 md:row-start-1 md:pl-0 ${
                      isLeft
                        ? "md:col-start-1 md:pr-16"
                        : "md:col-start-2 md:pl-16"
                    }`}
                  >
                    <div className="rounded-3xl border border-white/70 bg-white/85 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-primary/40 dark:border-white/10 dark:bg-white/5 sm:p-8">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          <FaCalendarAlt />
                          {item.period}
                        </span>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-white/10 dark:text-white/70 md:hidden">
                          {item.employmentType}
                        </span>
                      </div>

                      <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
                        {item.role}
                      </h3>

                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
                        <a
                          href={item.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
                        >
                          {item.company}
                          <FaExternalLinkAlt className="text-xs" />
                        </a>
                        <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-white/60">
                          <FaMapMarkerAlt className="text-primary/80" />
                          {item.location}
                        </span>
                      </div>

                      <p className="mt-5 leading-relaxed text-slate-600 dark:text-white/70">
                        {item.summary}
                      </p>

                      <ul className="mt-5 space-y-3">
                        {item.highlights.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm leading-relaxed text-slate-600 dark:text-white/75 sm:text-[15px]"
                          >
                            <FaCheckCircle className="mt-1 shrink-0 text-primary" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5 dark:border-white/10">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 transition-colors duration-200 hover:border-primary/50 hover:text-primary dark:border-white/10 dark:bg-white/5 dark:text-white/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
