import React, { useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

const navMenus = [
  {
    name: "Home",
    link: "/#home",
  },
  {
    name: "About",
    link: "/#about",
  },
  {
    name: "Experience",
    link: "/#experience",
  },
  {
    name: "Skills",
    link: "/#skills",
  },
  {
    name: "Projects",
    link: "/#projects",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <>
      <nav className="sticky top-0 z-20 border-b border-slate-200/70 bg-[#f7f1e7]/95 text-slate-800 backdrop-blur dark:border-white/10 dark:bg-slate-900/90 dark:text-white">
        <div className="container flex items-center justify-between py-3 sm:py-0">
          <h1 className="text-3xl text-primary font-bold">THARSHIHAN</h1>
          {/* Desktop Menu */}
          <div className="hidden sm:block">
            <ul className="flex items-center gap-2 lg:gap-4">
              {navMenus.map((menu) => (
                <li key={menu.name}>
                  <a
                    href={menu.link}
                    className="inline-block cursor-pointer rounded-full px-3 py-3 text-base font-semibold transition-colors duration-200 hover:bg-white/70 hover:text-primary dark:hover:bg-white/5 md:py-5"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}

              {/* Theme Toggle */}
              {theme === "dark" ? (
                <BiSolidSun
                  className="cursor-pointer text-2xl dark:text-white"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="cursor-pointer text-2xl dark:text-white"
                  onClick={() => setTheme("dark")}
                />
              )}
            </ul>
          </div>
          {/* Mobile Menu */}
          <div className="block sm:hidden">
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              {theme === "dark" ? (
                <BiSolidSun
                  className="cursor-pointer text-2xl dark:text-white"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="cursor-pointer text-2xl dark:text-white"
                  onClick={() => setTheme("dark")}
                />
              )}

              <FiMenu
                className="cursor-pointer text-2xl dark:text-white"
                onClick={toggleMenu}
              />
            </div>
            {showMenu && (
              <div className="fixed left-0 right-0 top-16 z-10 rounded-b-2xl border-b border-slate-200/60 bg-[#fbf7ef]/98 py-8 shadow-xl dark:border-white/10 dark:bg-slate-950/95">
                <ul className="flex flex-col items-center gap-4">
                  {navMenus.map((menu) => (
                    <li key={menu.name}>
                      <a
                        href={menu.link}
                        className="inline-block cursor-pointer rounded-full px-4 py-3 text-lg font-semibold transition-colors duration-200 hover:bg-white/70 hover:text-primary dark:hover:bg-white/5"
                      >
                        {menu.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
