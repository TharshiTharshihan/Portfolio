import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center text-white bg-slate-600 py-6 dark:bg-slate-950 dark:text-white">
      <p className="container flex items-center justify-center gap-2  text-lg">
        Tharshihan &copy; {new Date().getFullYear()}. Connect with me
        <a
          href="https://www.linkedin.com/in/tharshihan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-primary"
        >
          <FaLinkedin className="text-2xl" />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
