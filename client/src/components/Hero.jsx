import personImg from "../assets/profile.jpeg";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <main
        id="home"
        className="w-full bg-[#f7f1e7] text-slate-900 dark:bg-gray-900 dark:text-white"
      >
        <div className="container grid grid-cols-1 items-center space-y-2 py-14 sm:h-[680px] sm:grid-cols-2 sm:py-0">
          <div>
            <div className="space-y-2 grid justify-items-center sm:justify-items-start">
              <p className="inline-flex items-center rounded-full bg-white/70 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-primary shadow-sm dark:bg-white/5">
                Hello
              </p>
              <p className="text-4xl font-bold text-black/80 dark:text-white md:text-6xl">
                I&apos;m Tharshihan
              </p>
              <p className="text-3xl text-slate-700 dark:text-white">
                Software Engineer
              </p>
              <p className="text-center text-black/70 dark:text-white/70 sm:text-left">
                I am an enthusiastic computer engineering student with a strong
                foundation in software development, website design, and problem
                solving.
              </p>
              <a
                href="mailto:tharshihan2000@gmailcom"
                className="primary-btn inline-flex items-center gap-2 !px-6"
              >
                <FaArrowRight />
                Hire me
              </a>
            </div>
          </div>
          {/* image container */}
          <div className="relative flex justify-center">
            <div className="absolute inset-8 rounded-full bg-primary/10 blur-3xl" />
            <img
              src={personImg}
              alt="It's Me Tharshihan"
              className="relative mx-auto h-[260px] w-auto rounded-[2.5rem] border border-white/70 object-cover shadow-[0_25px_70px_rgba(15,23,42,0.16)] md:h-[500px] md:max-w-lg"
              // this height for me.jpeg image
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
