import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center text-white bg-slate-600 py-6 dark:bg-slate-950 dark:text-white">
      <p className="container flex items-center justify-center gap-2">
        Tharshihan &copy; 2025. Connect with me
        <a
          href="https://www.linkedin.com/in/tharshihan"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaLinkedin className="text-2xl" />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
