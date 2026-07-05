import {
  FaBriefcase,
  FaCheckCircle,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

const experienceItems = [
  {
    role: "Software Engineering Intern",
    company: "FAITE Pvt Ltd",
    companyLink: "https://www.linkedin.com/company/faite/", 
    period: "May 2025 - November 2025",
    location: "Jaffna, Sri Lanka",
    summary:
      "During my internship at FAITE, I worked with React.js, Node.js, Express.js, and RESTful APIs to develop and maintain responsive web applications. I collaborated with cross-functional teams, implemented reusable components, optimized application performance, and contributed to delivering high-quality software solutions.",
    highlights: [
      "Developed responsive user interfaces using React.js and modern frontend practices.",
      "Built backend features using Node.js, Express.js, and RESTful APIs.",
      "Created reusable components and improved application maintainability.",
      "Collaborated with cross-functional teams in an Agile development environment.",
      "Optimized application performance and resolved bugs to improve user experience.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-secondary py-16 text-slate-900 dark:bg-gray-900 dark:text-white sm:py-20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-slate-400/10 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-14">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur dark:bg-white/5">
            <FaBriefcase />
            Professional Experience
          </p>

          <h2 className="mt-5 text-3xl font-bold text-black/85 dark:text-white sm:text-5xl">
            Software Engineering Internship
          </h2>

          <p className="mt-4 text-base text-slate-500 dark:text-white/70 sm:text-lg">
            Building modern web applications with industry technologies while
            collaborating in Agile software development teams.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Main Card */}
          <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <FaCalendarAlt />
                  {experienceItems[0].period}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                  {experienceItems[0].role}
                </h3>

                <a
                  href={experienceItems[0].companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-primary transition hover:underline"
                >
                  {experienceItems[0].company}
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>

              <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20 sm:flex">
                <FaBriefcase className="text-xl" />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500 dark:text-white/60">
              <FaMapMarkerAlt className="text-primary" />
              {experienceItems[0].location}
            </div>

            <p className="mt-5 leading-8 text-slate-600 dark:text-white/70">
              {experienceItems[0].summary}
            </p>

            <div className="mt-8 space-y-3">
              {experienceItems[0].highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3 transition hover:-translate-y-1 hover:shadow-md dark:border-white/5 dark:bg-white/5"
                >
                  <FaCheckCircle className="mt-1 shrink-0 text-primary" />
                  <p className="text-slate-600 dark:text-white/75">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="grid gap-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Technical Expertise
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
                Technologies Used
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "REST APIs",
                  "JavaScript",
                  "MongoDB",
                  "Git",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-primary to-slate-700 p-6 text-white shadow-xl shadow-primary/20 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
                Personal Projects
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Beyond the Internship
              </h3>

              <p className="mt-4 leading-8 text-white/90">
                In addition to my professional experience, I have developed
                several full-stack projects, including a <strong>Tourism
                Management Platform</strong>, an <strong>E-Commerce
                Application</strong>, and an <strong>Event-Driven
                Microservices Platform</strong> using React.js, Node.js,
                MongoDB, and Apache Kafka. These projects strengthened my skills
                in frontend development, backend services, database management,
                and modern software development practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;