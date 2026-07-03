import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200/70 bg-[#f7f1e7] py-6 text-center text-slate-700 dark:border-white/10 dark:bg-slate-950 dark:text-white">
      <p className="container flex items-center justify-center gap-2 text-lg">
        Tharshihan &copy; {new Date().getFullYear()}. Connect with me
        <a
          href="https://www.linkedin.com/in/tharshihan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary transition-colors hover:text-slate-700 dark:hover:text-white"
        >
          <FaLinkedin className="text-2xl" />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
