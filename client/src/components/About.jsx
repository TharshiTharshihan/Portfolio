import { FaEnvelope, FaFileAlt, FaLinkedin, FaUserTie } from "react-icons/fa";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-[#fbf7f0] text-slate-900 dark:bg-slate-800 dark:text-white"
      >
        <div className="container md:w-[70%] py-14 sm:py-20">
          <div className="grid items-center gap-8 grid-cols-1 sm:grid-cols-2">
            <div className="relative font-bold">
              <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
                ABOUT
              </div>
              <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 text-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
                  <FaUserTie className="text-xl" />
                </span>
                <h1 className="text-3xl md:text-4xl text-slate-800 transition-transform duration-300 hover:scale-105 dark:text-white">
                  About me
                </h1>
              </div>
            </div>
            <div className="rounded-3xl border border-white/70 bg-white/80 p-6 text-slate-600 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/75 sm:p-8">
              <p className="leading-relaxed">
                I am Tharshihan, a computer engineering undergraduate at the
                University of Ruhuna, Sri Lanka. I enjoy building practical
                software, learning new tools, and contributing in team
                environments where I can keep growing technically.
              </p>
              <p className="mt-4 leading-relaxed">
                I am currently looking for opportunities where I can use my
                skills, learn from experienced developers, and add real value to
                a company through consistent work and a positive mindset.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/drive/folders/1rT1UZ8ns3lnTtMcAhs1Jyo0pemy2C3a8"
                  className="primary-btn inline-flex items-center gap-2 rounded-full px-5 py-3"
                >
                  <FaFileAlt />
                  View Resume
                </a>
                <a
                  href="tel:+94758443025"
                  className="outline-btn inline-flex items-center gap-2 rounded-full px-5 py-3"
                >
                  <FaEnvelope />
                  Contact
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/tharshihan-r-439653300/"
                  className="outline-btn inline-flex items-center gap-2 rounded-full px-5 py-3"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
