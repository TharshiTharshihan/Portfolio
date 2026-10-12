import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaBriefcase,
  FaEnvelope,
  FaFileAlt,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  SiAmazonaws,
  SiDocker,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";
import personImg from "../assets/pro.jpg";
import { Projects } from "../data/projectsData.jsx";

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "DevOps & Cloud Enthusiast",
  "AI/ML Builder",
];

const socialLinks = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/TharshiTharshihan",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tharshihan-r-439653300/",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    href: "mailto:tharshihan2000@gmail.com",
  },
];

const techIcons = [
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiNodedotjs, label: "Node.js", color: "#5FA04E" },
  { icon: SiSpringboot, label: "Spring Boot", color: "#6DB33F" },
  { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { icon: SiDocker, label: "Docker", color: "#2496ED" },
  { icon: SiAmazonaws, label: "AWS", color: "#FF9900" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      2600,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <main
      id="home"
      className="relative w-full overflow-hidden bg-[#f7f1e7] text-slate-900 dark:bg-gray-900 dark:text-white"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.07)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] dark:bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)]" />
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl dark:bg-primary/10" />
      </div>

      <div className="container relative grid grid-cols-1 items-center gap-14 py-16 md:grid-cols-2 md:gap-10 lg:min-h-[calc(100vh-4.5rem)] lg:py-20">
        {/* Text */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-white/80 px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur dark:bg-white/5 dark:text-white/80"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Available for new opportunities
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m <span className="text-primary">Tharshihan</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-3 flex h-10 items-center overflow-hidden sm:h-12"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={roles[roleIndex]}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="font-heading text-2xl font-semibold text-slate-700 dark:text-white/85 sm:text-3xl"
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-white/70 sm:text-lg"
          >
            I build scalable full-stack web applications, automate cloud
            deployments and integrate AI into real products — turning ideas
            into clean, reliable software.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
            >
              Hire Me
              <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 font-semibold text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
            >
              View Projects
            </a>
            <a
              href="https://drive.google.com/drive/folders/1rT1UZ8ns3lnTtMcAhs1Jyo0pemy2C3a8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 font-semibold text-slate-700 transition-colors duration-300 hover:text-primary dark:text-white/80"
            >
              <FaFileAlt />
              Resume
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-10 flex flex-col items-center gap-6 sm:flex-row md:items-center"
          >
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-white/80"
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>

            <span className="hidden h-8 w-px bg-slate-300 dark:bg-white/15 sm:block" />

            <div className="flex items-center gap-3">
              {techIcons.map(({ icon: Icon, label, color }) => (
                <span
                  key={label}
                  title={label}
                  className="text-xl text-slate-500 transition-transform duration-300 hover:scale-125 dark:text-white/60"
                  style={{ "--brand": color }}
                >
                  <Icon className="transition-colors duration-300 hover:text-[var(--brand)]" />
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[440px]"
        >
          <div className="absolute inset-0 translate-x-4 translate-y-4 rotate-3 rounded-[2.5rem] bg-gradient-to-br from-primary to-orange-400 opacity-90" />
          <div className="absolute -inset-6 rounded-full bg-primary/10 blur-3xl" />

          <img
            src={personImg}
            alt="Tharshihan, Software Engineer"
            className="relative aspect-square w-full rounded-[2.5rem] border-4 border-white object-cover object-top shadow-[0_25px_70px_rgba(15,23,42,0.18)] dark:border-slate-800"
          />

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 top-8 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-800/95 sm:-left-10"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <FaBriefcase />
            </span>
            <span className="text-left">
              <span className="block font-heading text-lg font-bold leading-none text-slate-900 dark:text-white">
                1+ Year
              </span>
              <span className="text-xs text-slate-500 dark:text-white/60">
                Industry experience
              </span>
            </span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 bottom-10 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-800/95 sm:-right-8"
          >
            <span className="font-heading text-2xl font-bold text-primary">
              {Projects.length}+
            </span>
            <span className="text-left text-xs leading-tight text-slate-500 dark:text-white/60">
              Projects
              <br />
              delivered
            </span>
          </motion.div>

          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white shadow-lg dark:bg-white dark:text-slate-900">
            <FaMapMarkerAlt className="text-primary" />
            Sri Lanka
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-slate-400 transition-colors hover:text-primary dark:text-white/40 lg:flex"
      >
        Scroll
        <span className="flex h-9 w-5 justify-center rounded-full border-2 border-current pt-1.5">
          <motion.span
            animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="h-1.5 w-1 rounded-full bg-current"
          />
        </span>
      </a>
    </main>
  );
};

export default Hero;
