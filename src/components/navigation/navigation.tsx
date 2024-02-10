import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Close } from "grommet-icons";
import { NavLinks } from "../nav-links";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setShowMenuIcon(true);
      } else {
        setIsMenuOpen(false);
        setShowMenuIcon(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  return (
    <header className="flex items-center justify-between h-20 2xl:px-80 xl:px-40 sm:px-20">
      <p>
        <NavLink to="/" className="font-bold font-mono text-xl text-blue-500">
          {"<yasserpulido />"}
        </NavLink>
      </p>
      {showMenuIcon ? (
        <>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu />
          </button>
          {isMenuOpen && (
            <nav className="absolute bg-white w-full h-screen top-0 left-0 flex items-center justify-center">
              <div className="absolute top-0 right-0 px-6 py-6">
                <button onClick={() => setIsMenuOpen(false)}>
                  <Close />
                </button>
              </div>
              <ul className="flex flex-col items-center gap-8">
                <NavLinks setIsMenuOpen={setIsMenuOpen} />
              </ul>
            </nav>
          )}
        </>
      ) : (
        <nav>
          <ul className="flex items-center justify-between gap-8">
            <NavLinks setIsMenuOpen={setIsMenuOpen} />
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
