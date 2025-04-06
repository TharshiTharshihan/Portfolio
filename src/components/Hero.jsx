import personImg from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <>
      <main className="w-full bg-secondary dark:bg-gray-500 dark:text-white">
        <div className="container grid grid-cols-1 sm:grid-cols-2 items-center space-y-2 py-12 sm:py-0 sm:h-[600px]">
          <div>
            <div className="space-y-2 grid justify-items-center sm:justify-items-start">
              <p className="uppercase">Hello</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80 dark:text-white">
                I'm Tharshihan
              </p>
              <p className="text-3xl text-gray-700 dark:text-white">
                Full stack Developer & <br /> React Developer
              </p>
              <p className="text-black/75 dark:text-white/70 text-center sm:text-left">
                I am an enthusiastic computer engineering student with a strong
                foundation in software development, website design, and problem
                solving.
              </p>
              <a
                href="mailto:tharshihan2000@gmailcom"
                className="inline-block primary-btn !px-6"
              >
                Hire me
              </a>
            </div>
          </div>
          {/* image container */}
          <div>
            <img
              src={personImg}
              alt="It's Me Tharshihan"
              className="w-auto rounded-full md:max-w-lg mx-auto"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
