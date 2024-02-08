import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="flex items-center justify-between h-20 2xl:px-80">
      <p>
        <NavLink to="/" className="font-bold font-mono text-xl text-blue-500">
          {"<yasserpulido />"}
        </NavLink>
      </p>
      <nav>
        <ul className="flex items-center justify-between gap-8">
          <li>
            <NavLink
              to="/curriculum-vitae"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Curriculum Vitae
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
