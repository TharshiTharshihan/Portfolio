const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-white dark:bg-slate-800 dark:text-white"
      >
        <div className="container md:w-[70%] sm:py-16 py-10">
          <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
            <div className="relative font-bold">
              <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
                ABOUT
              </div>
              <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl hover:transform hover:scale-105  duration-300 ease-in-out text-center text-slate-800 dark:text-white">
                About me
              </h1>
            </div>
            <div className="text-slate-400">
              <p>
                I am Tharshihan, computer engineering undergraduate at the
                university of Ruhuna, Sri Lanka. Very predictive individuals
                with a good academic record with good knowledge. Currently I am
                looking for an opportunity for my career to utilize my technical
                skills in a challenging working environment and become an asset
                to the company that I work for.
              </p>{" "}
              <br />
              <p>
                I have attached herewith my CV with complete skills and
                interests. I am looking forward to a favorable response from
                you.
              </p>
              <div>
                <a
                  href="https://drive.google.com/drive/folders/1rT1UZ8ns3lnTtMcAhs1Jyo0pemy2C3a8"
                  className="primary-btn inline-block my-6 mr-6 hover:bg-slate-600"
                >
                  View Resume
                </a>
                <a
                  href="tel:+94758443025"
                  className="outline-btn inline-block "
                >
                  Contact
                </a>
                <a
                  href="https://www.linkedin.com/in/tharshihan-r-439653300/"
                  className="outline-btn inline-block ml-6"
                >
                  Linkedin
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
