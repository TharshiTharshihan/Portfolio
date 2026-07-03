import {
  FaBriefcase,
  FaCheckCircle,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const experienceItems = [
  {
    role: "Software Engineering Intern",
    company: "[Your Company Name]",
    period: "[Start Month YYYY] - [End Month YYYY]",
    location: "[Location / Remote]",
    summary:
      "Worked on real product features, collaborated with the team, and contributed to front-end and back-end tasks during the internship.",
    highlights: [
      "Built and improved user-facing features with a clean, responsive UI.",
      "Worked with APIs, debugging, and implementation support across the stack.",
      "Participated in team reviews and learned production-ready development practices.",
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
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur dark:bg-white/5 dark:text-primary">
            <FaBriefcase />
            Professional Experience
          </p>
          <h2 className="mt-5 text-3xl font-bold text-black/85 dark:text-white sm:text-5xl">
            Internship experience with a more polished presentation
          </h2>
          <p className="mt-4 text-base text-slate-500 dark:text-white/70 sm:text-lg">
            This section is designed to showcase your internship clearly and
            elegantly, so it can sit alongside the rest of the portfolio without
            feeling cramped.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
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
                <p className="mt-2 text-lg font-medium text-slate-600 dark:text-white/75">
                  {experienceItems[0].company}
                </p>
              </div>

              <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20 sm:flex">
                <FaBriefcase className="text-xl" />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500 dark:text-white/60">
              <FaMapMarkerAlt className="text-primary" />
              <span>{experienceItems[0].location}</span>
            </div>

            <p className="mt-5 leading-relaxed text-slate-600 dark:text-white/70">
              {experienceItems[0].summary}
            </p>

            <div className="mt-6 space-y-3">
              {experienceItems[0].highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3 text-slate-600 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-white/5 dark:bg-white/5 dark:text-white/75"
                >
                  <FaCheckCircle className="mt-1 shrink-0 text-primary" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Why this works
              </p>
              <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
                Cleaner than a simple paragraph
              </h3>
              <p className="mt-4 leading-relaxed text-slate-600 dark:text-white/70">
                A dedicated experience block gives your internship proper visual
                weight. It also makes it easier to add more roles later without
                redesigning the whole portfolio.
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-primary to-slate-700 p-6 text-white shadow-xl shadow-primary/20 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
                Suggested next step
              </p>
              <h3 className="mt-3 text-2xl font-bold">
                Replace the placeholders with your internship details
              </h3>
              <p className="mt-4 leading-relaxed text-white/85">
                Once you confirm the style, I can wire this into the main page,
                add the navbar link, and align the other sections to match this
                upgraded look.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
