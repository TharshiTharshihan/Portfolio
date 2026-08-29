import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
  FaGithub,
} from "react-icons/fa";
import { Projects } from "../data/projectsData.jsx";

const CaseStudy = () => {
  const { slug } = useParams();
  const project = Projects.find((item) => item.slug === slug);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(0);
  }, [slug]);

  if (!project) {
    return (
      <section className="container flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Project not found
        </h1>
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-transform duration-300 hover:scale-105"
        >
          <FaArrowLeft />
          Back to Projects
        </Link>
      </section>
    );
  }

  const {
    name,
    type,
    accent,
    icon,
    technology,
    githubUrl,
    images,
    overview,
    features,
    description,
  } = project;

  return (
    
<section className="bg-[#f3eee4] py-10 text-slate-900 dark:bg-gray-900 dark:text-white sm:py-14 lg:py-20">
  <div className="mx-auto w-[92%] max-w-3xl md:w-[88%] lg:max-w-5xl xl:max-w-6xl">

    {/* Back Button */}
    <Link
      to="/#projects"
      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition-all duration-300 hover:bg-primary hover:text-white dark:border-white/20 dark:bg-white/5 dark:text-white/80"
    >
      <FaArrowLeft />
      <span>Back to Projects</span>
    </Link>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="mt-6 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/85 shadow-[0_18px_50px_rgba(15,23,42,0.08)] dark:border-amber-400/60 dark:bg-white/5 sm:mt-8 sm:rounded-[2rem]"
    >

      {/* Accent Line */}
      <div className={`h-1.5 bg-gradient-to-r ${accent} sm:h-2`} />

      <div className="p-5 sm:p-8 md:p-10 lg:p-12">

        {/* Project Header */}
        <div className="flex items-start gap-3 sm:gap-4">

          {/* Icon */}
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${accent} shadow-lg shadow-black/10 sm:h-14 sm:w-14 sm:rounded-2xl`}
          >
            {icon}
          </div>

          {/* Title */}
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary dark:bg-white/10 dark:text-white/80 sm:text-xs sm:tracking-[0.22em]">
              {type}
            </span>

            <h1 className="mt-2 break-words text-2xl font-bold leading-tight text-slate-900 dark:text-white sm:mt-3 sm:text-3xl md:text-4xl">
              {name}
            </h1>
          </div>
        </div>

        {/* Overview */}
        <p className="mx-auto mt-5 max-w-4xl text-sm leading-7 text-slate-600 dark:text-white/80 sm:mt-6 sm:text-base sm:leading-relaxed md:text-lg">
          {overview}
        </p>

        {/* Technologies */}
        {technology?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
            {technology.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-semibold text-slate-600 transition-colors duration-300 hover:bg-primary hover:text-white dark:bg-white/10 dark:text-white/80 dark:hover:bg-primary sm:px-3 sm:py-1 sm:text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* GitHub Button */}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 sm:mt-6 sm:px-5"
          >
            <FaGithub className="text-lg" />
            View on GitHub
          </a>
        )}

        {/* Images */}
        {images?.length > 0 && (
          <div className="mt-7 sm:mt-10">
            <div className="relative overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100 shadow-md dark:border-white/10 dark:bg-white/5 sm:rounded-2xl">

              <img
                src={images[activeImage]}
                alt={`${name} screenshot ${activeImage + 1}`}
                className="h-52 w-full object-cover sm:h-80 md:h-[24rem] lg:h-full"
              />

              {images.length > 1 && (
                <>
                  {/* Previous */}
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImage(
                        (prev) =>
                          (prev - 1 + images.length) % images.length
                      )
                    }
                    aria-label="Previous image"
                    className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-all duration-300 hover:bg-black/70 sm:left-3 sm:h-10 sm:w-10"
                  >
                    <FaChevronLeft />
                  </button>

                  {/* Next */}
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImage((prev) => (prev + 1) % images.length)
                    }
                    aria-label="Next image"
                    className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-all duration-300 hover:bg-black/70 sm:right-3 sm:h-10 sm:w-10"
                  >
                    <FaChevronRight />
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 sm:gap-2">
                    {images.map((src, index) => (
                      <button
                        key={src + index}
                        type="button"
                        onClick={() => setActiveImage(index)}
                        aria-label={`Go to image ${index + 1}`}
                        className={`h-2 w-2 rounded-full transition-all duration-300 sm:h-2.5 sm:w-2.5 ${
                          index === activeImage
                            ? "w-5 bg-white sm:w-6"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Highlights & Features */}
        <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2">

          {/* Highlights */}
          <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-4 dark:border-white/5 dark:bg-white/5 sm:rounded-2xl sm:p-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/80 sm:text-sm sm:tracking-[0.2em]">
              Highlights
            </p>

            <ul className="space-y-3 text-sm leading-6 text-slate-600 dark:text-white/80 sm:text-base sm:leading-relaxed">
              {description?.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-4 dark:border-white/5 dark:bg-white/5 sm:rounded-2xl sm:p-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/80 sm:text-sm sm:tracking-[0.2em]">
              Key Features
            </p>

            <ul className="space-y-3 text-sm leading-6 text-slate-600 dark:text-white/80 sm:text-base sm:leading-relaxed">
              {features?.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Back Button */}
        <div className="mt-8 flex justify-center sm:mt-10">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white dark:border-white/30 dark:text-white"
          >
            <FaArrowLeft />
            Back to Projects
          </Link>
        </div>

      </div>
    </motion.div>
  </div>
</section>


  );
};

export default CaseStudy;
