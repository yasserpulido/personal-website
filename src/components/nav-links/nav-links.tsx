import { NavLink } from "react-router-dom";

type NavLinksProps = {
  setIsMenuOpen: (value: boolean) => void;
};

const NavLinks = ({ setIsMenuOpen }: NavLinksProps) => {
  return (
    <>
      <li>
        <NavLink
          to="/curriculum-vitae"
          className={({ isActive }) => (isActive ? "font-bold" : "")}
          onClick={() => setIsMenuOpen(false)}
        >
          Curriculum Vitae
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "font-bold" : "")}
          onClick={() => setIsMenuOpen(false)}
        >
          Blog
        </NavLink>
      </li>
    </>
  );
};

export default NavLinks;
