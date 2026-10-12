import { motion } from "framer-motion";
import {
  FaBrain,
  FaCloud,
  FaCode,
  FaEnvelope,
  FaFileAlt,
  FaLinkedin,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";
import { Projects } from "../data/projectsData.jsx";

const focusAreas = [
  {
    icon: FaCode,
    title: "Full-Stack Engineering",
    description:
      "Responsive React interfaces backed by secure Node.js and Spring Boot REST APIs.",
  },
  {
    icon: FaCloud,
    title: "DevOps & Cloud",
    description:
      "Containerised apps with Docker, automated CI/CD pipelines and AWS deployments.",
  },
  {
    icon: FaBrain,
    title: "AI-Powered Solutions",
    description:
      "RAG systems and LLM integrations that turn documents into grounded answers.",
  },
  {
    icon: FaUsers,
    title: "Team Collaboration",
    description:
      "Agile delivery, code reviews and clear communication with cross-functional teams.",
  },
];

const stats = [
  { value: "1+", label: "Year industry experience" },
  { value: `${Projects.length}+`, label: "Projects built" },
  { value: "4", label: "Engineering domains" },
];

const About = () => {
  return (
    <>
      <section
        id="about"
        className="relative overflow-hidden bg-[#fbf7f0] py-20 text-slate-900 dark:bg-slate-800 dark:text-white sm:py-28"
      >
        <div className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="container relative">
          {/* Header */}
          <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur dark:bg-white/5">
              <FaUserTie />
              About Me
            </p>
            <h2 className="mt-5 text-3xl font-bold text-black/85 dark:text-white sm:text-5xl">
              Building software that{" "}
              <span className="text-primary">solves real problems</span>
            </h2>
          </div>

          <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* Story */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="space-y-5 text-base leading-8 text-slate-600 dark:text-white/75 sm:text-lg">
                <p>
                  I&apos;m <strong className="text-slate-900 dark:text-white">Tharshihan</strong>,
                  a <span className="font-semibold text-primary">Software Engineer</span> and
                  Computer Engineering graduate at the{" "}
                  <span className="font-semibold text-primary">
                    University of Ruhuna
                  </span>
                  , Sri Lanka. At FAITE Pvt Ltd I grew from intern to Software
                  Engineer, building and shipping production web applications.
                </p>
                <p>
                  My work spans full-stack development with React, Node.js and
                  Spring Boot, cloud and DevOps with Docker, GitHub Actions and
                  AWS, and AI-powered tools such as retrieval-augmented
                  generation on top of large language models.
                </p>
                <p>
                  I care about clean, maintainable code, thoughtful user
                  experience, and working closely with teams to deliver software
                  that adds real value.
                </p>
              </div>

              <blockquote className="mt-8 rounded-2xl border-l-4 border-primary bg-white/80 p-6 text-lg font-medium italic leading-relaxed text-slate-700 shadow-sm dark:bg-white/5 dark:text-white/95">
                &ldquo;I enjoy turning complex requirements into simple,
                reliable products — and I&apos;m always learning the next tool
                that helps me do it better.&rdquo;
              </blockquote>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/drive/folders/1rT1UZ8ns3lnTtMcAhs1Jyo0pemy2C3a8"
                  className="primary-btn !my-0 inline-flex items-center gap-2 !px-6 !py-3"
                >
                  <FaFileAlt />
                  View Resume
                </a>
                <a
                  href="#contact"
                  className="outline-btn !my-0 inline-flex items-center gap-2 !px-6 !py-3"
                >
                  <FaEnvelope />
                  Contact Me
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/tharshihan-r-439653300/"
                  className="outline-btn !my-0 inline-flex items-center gap-2 !px-6 !py-3"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>
              </div>
            </motion.div>

            {/* Focus areas + stats */}
            <div className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                {focusAreas.map(({ icon: Icon, title, description }, index) => (
                  <motion.div
                    key={title}
                    className="group rounded-2xl border border-white/70 bg-white/85 p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-primary/40 dark:border-white/10 dark:bg-white/5"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon className="text-xl" />
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-white/65">
                      {description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-3 divide-x divide-white/25 rounded-2xl bg-gradient-to-br from-primary to-orange-600 p-5 text-white shadow-xl shadow-primary/20 sm:p-6">
                {stats.map(({ value, label }) => (
                  <div key={label} className="px-2 text-center">
                    <p className="font-heading text-2xl font-bold sm:text-3xl">{value}</p>
                    <p className="mt-1 text-xs leading-snug text-white/85 sm:text-sm">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
