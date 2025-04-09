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
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
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
      <nav className="bg-white dark:bg-gray-800 dark:text-white sticky top-0 z-10 ">
        <div className="container flex justify-between items-center py-3 sm:py-0">
          <h1 className="text-3xl text-primary font-bold">THARSHIHAN</h1>
          {/* Desktop Menu */}
          <div className="hidden sm:block">
            <ul className="flex items-center gap-4 ">
              {navMenus.map((menu) => (
                <li key={menu.name}>
                  <a
                    href={menu.link}
                    className="text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}

              {/* Theme Toggle */}
              {theme === "dark" ? (
                <BiSolidSun
                  className="text-2xl dark:text-white"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl cursor-pointer dark:text-white"
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
                  className="text-2xl dark:text-white"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl cursor-pointer dark:text-white"
                  onClick={() => setTheme("dark")}
                />
              )}

              <FiMenu
                className="text-2xl cursor-pointer dark:text-white"
                onClick={toggleMenu}
              />
            </div>
            {showMenu && (
              <div className="fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 dark:text-white shadow-md rounded-b-xl z-10 py-10">
                <ul className="flex flex-col items-center gap-4">
                  {navMenus.map((menu) => (
                    <li key={menu.name}>
                      <a
                        href={menu.link}
                        className="text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer"
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
