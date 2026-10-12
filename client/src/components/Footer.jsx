import {
  FaArrowUp,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Stack", href: "/#stack" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
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
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/94758443025",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    href: "mailto:tharshihan2000@gmail.com",
  },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden bg-slate-900 text-white/70 dark:bg-slate-950">
      <div className="h-1 bg-gradient-to-r from-primary via-orange-400 to-primary" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative pb-28 pt-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <a
              href="/#home"
              className="font-heading text-2xl font-bold tracking-tight text-white"
            >
              THARSHIHAN<span className="text-primary">.</span>
            </a>
            <p className="mt-4 max-w-sm leading-relaxed">
              Software Engineer building full-stack web apps, cloud-ready
              pipelines and AI-powered tools with clean, maintainable code.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-1">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm transition-colors duration-200 hover:text-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Get In Touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href="mailto:tharshihan2000@gmail.com"
                  className="flex items-center gap-3 transition-colors duration-200 hover:text-primary"
                >
                  <FaEnvelope className="shrink-0 text-primary" />
                  tharshihan2000@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+94758443025"
                  className="flex items-center gap-3 transition-colors duration-200 hover:text-primary"
                >
                  <FaPhoneAlt className="shrink-0 text-primary" />
                  +94 75 844 3025
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="shrink-0 text-primary" />
                Kalmunai, Sri Lanka
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Tharshihan. All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition-colors duration-200 hover:border-primary hover:text-primary"
          >
            Back to top
            <FaArrowUp className="text-xs transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
